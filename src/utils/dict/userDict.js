import { setLocal, getLocal } from "@/utils/stores";

export class UserDict {
  constructor() {
    this._knownWords = {};
    this._unknownWords = {};
    this._seenWords = {}; // 见过的词都会保存，与生词熟词独立
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

  load() {
    this._knownWords = getLocal("knownWords") || {};
    this._unknownWords = getLocal("unknownWords") || {};
    this._seenWords = getLocal("seenWords") || {};
  }

  save() {
    setLocal("knownWords", this._knownWords);
    setLocal("unknownWords", this._unknownWords);
    setLocal("seenWords", this._seenWords);
  }

  _genWordMeta(word) {
    return {
      createdTime: new Date().toUTCString(),
    };
  }

  _addKnownWord(word) {
    if (this.knownWords.includes(word)) return;
    if (this.unknownWords.includes(word)) {
      this._removeUnknownWords(word);
    }
    this._knownWords[word] = this._genWordMeta(word);
  }
  _addUnknownWord(word) {
    if (this.unknownWords.includes(word)) return;
    if (this.knownWords.includes(word)) {
      console.log("remove knownWord", word);
      this._removeKnownWords(word);
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

  _removeKnownWords(word) {
    delete this._knownWords[word];
  }
  _removeUnknownWords(word) {
    delete this._unknownWords[word];
  }
}
