import { findLemma } from "@/utils/lemmatize";

/**
 * 对比words中有多少已知、多少未知、多少没见过
 * @param {string[]} words
 * @param {string[]} wordsKnown
 * @param {string[]} wordsUnknown
 * @returns {{ratio: number; unknown: string[]; unseen: string[]; known: string[]}}
 */
export function compare(words, wordsKnown, wordsUnknown) {
  const known = [];
  const unknown = [];
  const unseen = [];
  for (let word of words) {
    word = findLemma(word);
    if (wordsKnown.includes(word)) {
      known.push(word);
    } else if (wordsUnknown.includes(word)) {
      unknown.push(word);
    } else {
      unseen.push(word);
    }
  }
  return {
    ratio: 1 - known.length / words.length,
    known,
    unknown,
    unseen,
  };
}

/**
 * 统计单词数组中每个词出现的频次
 * @param {string[]} words
 * @returns {{[string]: number}} wordFreqDict
 */
export function freqCounter(words) {
  const wordFreqDict = {};
  for (const word of words) {
    if (word in wordFreqDict) {
      wordFreqDict[word]++;
    } else {
      wordFreqDict[word] = 1;
    }
  }
  return wordFreqDict;
}
