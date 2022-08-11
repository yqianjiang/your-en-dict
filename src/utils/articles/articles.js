import winkNLP from "wink-nlp";
import model from "wink-eng-lite-web-model";
import as from "wink-nlp/src/as.js";
import its from "wink-nlp/src/its.js";
import md5 from "js-md5";
import { compare } from "./counter";
import { setLocal, getLocal } from "@/utils/stores";
import { fetchArticleBatch, fetchArticle } from "@/services/article";

const nlp = winkNLP(model);

// function tokenize(plainText, title) {
//   const doc = nlp.readDoc(plainText);
//   const tokens = doc.tokens().filter((t) => t.out(its.type) === "word");
//   const wordsFreq = tokens.out(its.lemma, as.freqTable);
//   const wordsUnique = wordsFreq.map((arr) => arr[0]);
//   const sentences = doc.sentences().out();
//   tokens.each((e) => e.markup());
//   doc.sentences().each((e) => e.markup());
//   const markedTokenText = doc.out(its.markedUpText);
//   title = title || sentences.splice(0, 1)[0];
//   return {
//     title,
//     plainText,
//     markedTokenText,
//     totalWords: tokens.out().length,
//     wordsUnique,
//     wordsFreq,
//   };
// }

function splitCNSentence(text) {
  if (text) {
    return text.split("。");
  } else {
    return [];
  }
}

class Articles {
  constructor() {
    this.articles = [];
    this.openedArticles = {};
    this.markedArticles = {};
    // this.loadedArticles = [];
    this.load();
  }

  load() {
    this.articles = getLocal("articles") || [];
    this.openedArticles = getLocal("openedArticles2") || {};
    this.markedArticles = getLocal("markedArticles2") || {};
  }

  save() {
    setLocal("articles", this.articles);
    setLocal("openedArticles2", this.openedArticles);
    setLocal("markedArticles2", this.markedArticles);
  }

  // updateArticle(uuid, plainText, title) {
  //   const article = this.articles.find((article) => article.uuid === uuid);
  //   if (md5(plainText) === uuid && title) {
  //     // 内容不变，有新标题，只需要更新标题
  //     article.title = title;
  //   } else {
  //     const newArticle = tokenize(plainText, title);
  //     Object.assign(article, newArticle);
  //   }
  //   this.save();
  // }

  // async addArticle(plainText, title) {

  //   const uuid = md5(plainText);

  //   // 文章已存在，更新？
  //   if (this.articles.find((article) => article.uuid === uuid)) {
  //     this.updateArticle(uuid, plainText, title);
  //     return;
  //   }

  //   const article = tokenize(plainText, title);

  //   this.articles.push({ uuid, ...article });
  //   this.save();
  // }

  async getArticle(uuid) {
    // 从本地缓存中读取
    const article =
      this.openedArticles[uuid] ||
      this.markedArticles[uuid] ||
      (await fetchArticle(uuid));
    if (article.tokens) return article;

    article.sentences.forEach((x) => {
      x.forEach((y) => {
        const doc = nlp.readDoc(y.sentence);
        y.tokens = doc.tokens().out();
      });
    });

    return article;
  }

  _formatArticles(batch, userDict) {
    const articles = batch.map((article) => {
      const { ratio, unknown, unseen } = compare(
        article.wordsUnique,
        userDict.knownWords,
        userDict.unknownWords
      );

      const tags = {
        'ielts-reading': '阅读',
        'ielts-listening': '听力',
      }

      return {
        uuid: article.objectId,
        title: article.title,
        totalWords: article.totalWords,
        tag: tags[article.tag],
        ratio,
        totalUniqueWords: article.wordsUnique.length,
        unknown,
        unseen,
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
   * @returns
   */
  async getArticleBatch(userDict, tag, startIdx = 0, batchSize = 10, orderBy) {
    const batch = await fetchArticleBatch({
      tag,
      batchSize,
      startIdx,
      orderBy,
    });

    return this._formatArticles(batch, userDict);
  }

  getOpenedArticles(userDict) {
    const batch = Object.values(this.openedArticles);
    if (batch.length) {
      return this._formatArticles(batch, userDict);
    }
    return batch;
  }

  getMarkedArticles(userDict) {
    const batch = Object.values(this.markedArticles);
    if (batch.length) {
      return this._formatArticles(batch, userDict);
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
