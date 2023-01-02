import { setLocal, getLocal } from "@/utils/stores";

class UserDict {
  constructor() {
    this._knownWords = {};
    this._unknownWords = {};
    this._seenWords = {}; // 见过的词都会保存，与生词熟词独立
    this.targetWords = [];
    this.load();
  }

  get knownWords() {
    return Object.keys(this._knownWords);
  }

  get unknownWords() {
    return Object.keys(this._unknownWords);
  }

  get seenWords() {
    return Object.keys(this._seenWords);
  }

  get knownTargetWords() {
    return this.targetWords.filter(x=>(x in this._knownWords));
  }

  get unknownTargetWords() {
    return this.targetWords.filter(x=>(x in this._knownWords));
  }

  load() {
    this._knownWords = getLocal("knownWords") || {};
    this._unknownWords = getLocal("unknownWords") || {};
    this._seenWords = getLocal("seenWords") || {};
    this.targetWords = getLocal("targetWords") || [];
  }

  save() {
    setLocal("knownWords", this._knownWords);
    setLocal("unknownWords", this._unknownWords);
    setLocal("seenWords", this._seenWords);
    setLocal("targetWords", this.targetWords);
  }

  _genWordMeta(word) {
    return {
      createdTime: new Date().toUTCString(),
    };
  }

  _addKnownWord(word) {
    if (this.knownWords.includes(word)) return;
    if (this.unknownWords.includes(word)) {
      this.removeUnknownWord(word);
    }
    this._knownWords[word] = this._genWordMeta(word);
  }
  _addUnknownWord(word) {
    if (this.unknownWords.includes(word)) return;
    if (this.knownWords.includes(word)) {
      console.log("remove knownWord", word);
      this.removeKnownWord(word);
      console.log(this._knownWords[word]);
    }
    this._unknownWords[word] = this._genWordMeta(word);
  }
  _addSeenWord(word, freq) {
    if (this.seenWords.includes(word)) {
      this._seenWords[word].freq += freq;
    }
    this._seenWords[word] = { ...this._genWordMeta(word), freq };
  }

  addKnownWords(words) {
    for (const word of words) {
      this._addKnownWord(word);
    }
  }
  addUnknownWords(words) {
    for (const word of words) {
      this._addUnknownWord(word);
    }
  }
  addSeenWords(wordFreqTable) {
    for (const [word, freq] of wordFreqTable) {
      this._addSeenWord(word, freq);
    }
  }

  removeKnownWord(word) {
    delete this._knownWords[word];
  }
  removeUnknownWord(word) {
    delete this._unknownWords[word];
  }
}

export const userDict = new UserDict();