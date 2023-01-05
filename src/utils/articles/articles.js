import winkNLP from "wink-nlp";
import model from "wink-eng-lite-web-model";
import as from "wink-nlp/src/as.js";
import its from "wink-nlp/src/its.js";
import md5 from "js-md5";
import { compare } from "./counter";
import { setLocal, getLocal } from "@/utils/stores";
import { fetchArticleBatch, fetchArticle } from "@/services/article";

const nlp = winkNLP(model);

function tokenize(plainText, title) {
  const doc = nlp.readDoc(plainText);
  const tokens = doc.tokens().filter((t) => t.out(its.type) === "word");
  const wordsFreq = tokens.out(its.lemma, as.freqTable);
  const wordsUnique = wordsFreq.map((arr) => arr[0]);
  const sentences = doc.sentences().out();
  // tokens.each((e) => e.markup());
  // doc.sentences().each((e) => e.markup());
  // const markedTokenText = doc.out(its.markedUpText);
  title = title || sentences[0];
  return {
    title,
    plainText,
    // markedTokenText,
    totalWords: tokens.out().length,
    wordsUnique,
    // wordsFreq,
    sentences: sentences.map(x=>{
      return [{
        sentence: x,
        translation: '',
        tokens: nlp.readDoc(x).tokens().filter(t => t.out(its.type) === 'word').out(),
      }]
    }),
  };
}

class Articles {
  constructor() {
    this.articles = [];
    this.openedArticles = {};
    this.markedArticles = {};
    this.localArticles = {};
    // this.loadedArticles = [];
    this.load();
  }

  load() {
    this.articles = getLocal("articles") || [];
    this.openedArticles = getLocal("openedArticles2") || {};
    this.markedArticles = getLocal("markedArticles2") || {};
    this.localArticles = getLocal("localArticles2") || {};
  }

  save() {
    setLocal("articles", this.articles);
    setLocal("openedArticles2", this.openedArticles);
    setLocal("markedArticles2", this.markedArticles);
    setLocal("localArticles2", this.localArticles);
  }

  async addArticle(plainText, title) {

    const uuid = md5(plainText);

    // 文章已存在，更新？
    if (this.localArticles[uuid]) {
      //   this.updateArticle(uuid, plainText, title);
      //   return;
    }

    const article = tokenize(plainText, title);
    article.objectId = uuid;
    
    this.localArticles[uuid] = article;
    this.save();

    return article;
  }

  /**
   * 用户输入plainText，输出文章和统计信息
   * @param {UserDict} userDict 
   * @param {string} plainText 
   * @param {string} title 
   * @returns {ArticleStatsInfo[], Article}
   */
  analyzeArticle(userDict, plainText, title) {
    const uuid = md5(plainText);
    const article = tokenize(plainText, title);
    article.objectId = uuid;
    return {stats: this._computeStatsInfo([article], userDict), article};
  }

  /**
   * 把文章保存到本地
   * @param {Article} article 
   */
  saveArticle(article) {
    this.localArticles[article.objectId] = article;
    this.save();
  }

  /**
   * 获取单篇文章的详细内容
   * @param {string} uuid 
   * @returns Article
   */
  async getArticle(uuid) {
    // 从本地缓存中读取
    const article =
      this.openedArticles[uuid] ||
      this.markedArticles[uuid] ||
      this.localArticles[uuid] ||
      (await fetchArticle(uuid));
    if (article?.tokens) return article;

    article.sentences.forEach((x) => {
      x.forEach((y) => {
        const doc = nlp.readDoc(y.sentence);
        y.tokens = doc.tokens().out();
      });
    });

    return article;
  }

  /**
   * 根据userDict，对文章列表进行统计，计算生词率等。
   * @param {Article[]} batch 
   * @param {UserDict} userDict 
   * @returns ArticleStatsInfo[] 
   */
  _computeStatsInfo(batch, userDict) {
    if (!Array.isArray(batch)) return [];

    const articles = batch.map((article) => {
      const { ratio, unknown, unseen } = compare(
        article.wordsUnique,
        userDict.knownWords,
        userDict.unknownWords,
      );

      const targetWords = article.wordsUnique.filter(w=>userDict.targetWords.includes(w));
      const { unknown: unknownTargetWords, unseen: unseenTargetWords, known: knownTargetWords  } = compare(
        targetWords,
        userDict.knownWords,
        userDict.unknownWords,
      );

      const tags = {
        "ielts-reading": "阅读",
        "ielts-listening": "听力",
      };

      return {
        uuid: article.objectId,
        title: article.title,
        totalWords: article.totalWords,
        tag: tags[article.tag],
        ratio,
        totalUniqueWords: article.wordsUnique.length,
        unknown,
        unseen,
        targetWords,
        unknownTargetWords,
        unseenTargetWords,
        knownTargetWords,
      };
    });

    return articles;
  }

  /**
   * 用户一次获取一批（默认10篇）文章，并对照这10篇文章中的生词
   * @param {UserDict} userDict
   * @param {string} tag
   * @param {number} startIdx
   * @param {number} batchSize
   * @returns ArticleStatsInfo[] 
   */
  async getArticleBatch(userDict, tag, startIdx = 0, batchSize = 10, orderBy) {
    const batch = await fetchArticleBatch({
      tag,
      batchSize,
      startIdx,
      orderBy,
    });

    return this._computeStatsInfo(batch, userDict);
  }

  // 从本地获取对应的文章列表，returns ArticleStatsInfo[]

  getOpenedArticles(userDict) {
    const batch = Object.values(this.openedArticles);
    if (batch.length) {
      return this._computeStatsInfo(batch, userDict);
    }
    return batch;
  }

  getMarkedArticles(userDict) {
    const batch = Object.values(this.markedArticles);
    if (batch.length) {
      return this._computeStatsInfo(batch, userDict);
    }
    return batch;
  }

  getLocalArticles(userDict) {
    const batch = Object.values(this.localArticles);
    if (batch.length) {
      return this._computeStatsInfo(batch, userDict);
    }
    return batch;
  }

  markArticle(state, article) {
    const uuid = article.objectId;
    if (state === "hasOpened") {
      if (!this.markedArticles[uuid]) {
        this.openedArticles[uuid] = article;
      }
    } else if (state === "hasMarked") {
      delete this.openedArticles[uuid];
      this.markedArticles[uuid] = article;
    }
    this.save();
  }
}

export const articlesHelper = new Articles();
