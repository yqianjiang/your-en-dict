import { ecdict } from "./ecdict2w.js";
import { findLemma } from "@/utils/lemmatize";

class Dict {
  constructor() {
    this.dict = {};
    this.loadDict();
  }

  loadDict() {
    this.dict = ecdict;
  }

  query(word) {
    word = findLemma(word);
    return this.dict[word];
  }
}

export const dict = new Dict();