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

class Articles {
  constructor() {
    this.articles = [];
    this.loadedArticles = [];
    this.load();
  }

  load() {
    this.articles = getLocal("articles") || [];
  }

  save() {
    setLocal("articles", this.articles);
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

  /**
   * 用户一次获取一批（默认10篇）文章，并对照这10篇文章中的生词
   * @param {UserDict} userDict
   * @param {string} tag
   * @param {number} startIdx
   * @param {number} batchSize
   * @returns
   */
  async getArticleBatch(userDict, tag, startIdx = 0, batchSize = 10) {
    const batch = await fetchArticleBatch({
      tag,
      batchSize,
      startIdx,
    });

    const articles = batch.map((article) => {
      const { ratio, unknown, unseen } = compare(
        article.wordsUnique,
        userDict.knownWords,
        userDict.unknownWords
      );

      return {
        uuid: article.objectId,
        title: article.title,
        totalWords: article.totalWords,
        ratio,
        unknown,
        unseen,
      };
    });

    return articles;
  }

  async getArticle(uuid) {
    const article = await fetchArticle(uuid);
    const paragraphs = article.plainText.split('\n\n');
    const doc = nlp.readDoc(article.plainText);

    return {
      wordsUnique: article.wordsUnique,
      title: article.title,
      totalWords: article.totalWords,
      tokens: doc.tokens().out(),
    };
  }
}

export const articlesHelper = new Articles();
