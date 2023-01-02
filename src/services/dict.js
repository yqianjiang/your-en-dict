import LC from "./lc.js";
import { db } from "./db.js";

function format(_meaning) {
  for (const key in _meaning) {
    if (typeof _meaning[key] === "string") {
      _meaning[key] = _meaning[key].replaceAll("\\n", "\n");
    }
  }
  return _meaning;
}

async function fetchTranslationBatch(params) {
  const query = new LC.Query("Dict");
  query.containedIn("word", params.words);
  if (params.onlyTranslation) {
    query.select(["translation", "word"]);
  }
  try {
    const res = await query.find();
    const resObj = {};
    for (const x of res) {
      resObj[x.attributes.word] = format(x.attributes);
    }
    return resObj;
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function fetchTranslation(word, onlyTranslation) {
  const query = new LC.Query("Dict");
  query.equalTo("word", word);
  if (onlyTranslation) {
    query.select(["translation"]);
  }
  try {
    const res = await query.first();
    const _meaning = res?.attributes;
    format(_meaning || {});
    return _meaning;
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function getTranslationBatchLocal(params) {
  const res = {};
  for (const word of params.words) {
    const trans = await getTranslationLocal(word, params.onlyTranslation);
    if (trans) {
      res[word] = trans;
    }
  }
  return res;
}

async function getTranslationLocal(word, onlyTranslation) {
  const res = await db.dict.get(word);
  return res;
}

async function saveTranslationBatch(wordDict) {
  let count = 0;
  for (const word in wordDict) {
    try {
      const id = await db.dict.add(wordDict[word]);
      count++;
    } catch (error) {
      console.log(error);
    }
  }
  console.log('已保存', count)
}

export async function getTranslation(word, onlyTranslation) {
  // 先从db找
  const meaning = await getTranslationLocal(word, onlyTranslation);
  if (meaning) {
    return meaning;
  }
  // db没有就在线找
  const res = await fetchTranslation(word, onlyTranslation);
  return res;
}

export async function getTranslationBatch(params) {
  // 先从db找
  await saveTranslationBatch();
  const words = await getTranslationBatchLocal(params);

  let resWords = params.words.filter((x) => !words[x]);
  console.log("需要查询", params.words.length);
  console.log("从本地加载", Object.keys(words).length);
  console.log("还需要下载", resWords.length);
  if (!resWords.length) return words;

  // db没有的就在线找, 把resWords分batch找
  const nBatches = Math.ceil(resWords.length / 100);

  for (let i = 0; i < nBatches; i++) {
    const res = await fetchTranslationBatch({
      ...params,
      words: resWords.slice(i * 100, (i + 1) * 100 - 1),
    });

    saveTranslationBatch(res);
    Object.assign(words, res);
  }
  console.log('有翻译的词汇', Object.keys(words).length);
  return words;
}
