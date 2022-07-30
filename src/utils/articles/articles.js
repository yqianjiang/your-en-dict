import winkNLP from "wink-nlp";
import model from "wink-eng-lite-web-model";
import as from "wink-nlp/src/as.js";
import its from "wink-nlp/src/its.js";
import md5 from "js-md5";
import { compare } from "./counter";
import {setLocal, getLocal} from '@/utils/stores'

export class Articles {
  constructor() {
    this.articles = [];
    this.loadedArticles = [];
    this._nlp = winkNLP(model);
    this.load();
  }

  load() {
    this.articles = getLocal("articles") || [];
  }

  save() {
    setLocal("articles", this.articles);
  }

  addArticle(article) {
    const uuid = md5(article);

    // 文章已存在，跳过
    if (this.articles.find((article) => article.uuid === uuid)) return;

    const doc = this._nlp.readDoc(article);
    const tokens = doc.tokens().filter((t) => t.out(its.type) === "word");
    const wordsFreq = tokens.out(its.lemma, as.freqTable);
    const wordsUnique = wordsFreq.map((arr) => arr[0]);
    const sentences = doc.sentences().out();

    this.articles.push({
      uuid,
      title: sentences[0],
      totalWords: tokens.out().length,
      wordsUnique,
      wordsFreq,
      tokens: doc.tokens().out(),
      sentences,
      // sentencesTrans: [],
    });

    this.save();
  }

  /**
   * 用户一次获取一批（默认10篇）文章，并对照这10篇文章中的生词
   * @param {UserDict} userDict
   * @returns
   */
  getArticleBatch(userDict, batchSize = 10) {
    // 所有文章都已经加载了
    const nLoadedArticles = this.loadedArticles.length;
    if (this.articles.length <= nLoadedArticles) return {};

    const batch = this.articles.slice(
      nLoadedArticles,
      nLoadedArticles + batchSize
    );

    const articles = batch.map((article) => {
      const { ratio, unknown, unseen } = compare(
        article.wordsUnique,
        userDict.knownWords,
        userDict.unknownWords
      );

      return {
        uuid: article.uuid,
        title: article.title,
        totalWords: article.totalWords,
        ratio,
        unknown,
        unseen,
      };
    });

    this.loadedArticles = [...this.loadedArticles, articles];

    return articles;
  }

  getArticle(uuid) {
    const article = this.articles.find((article) => article.uuid === uuid);
    const article2 = this.loadedArticles.find(
      (article) => article.uuid === uuid
    );
    return { ...article, ...article2 };
  }
}
