const d="yourdict";function i(s){return JSON.stringify(s)}function W(s,n=""){if(!s)return n;let o="";try{o=JSON.parse(s)}catch{o=s}return o||n}function e(s,n){n!=null&&localStorage.setItem(`${d}:${s}`,i(n))}function t(s){return W(localStorage.getItem(`${d}:${s}`))}class a{constructor(){this._knownWords={},this._unknownWords={},this._seenWords={},this.targetWords=[],this.load()}get knownWords(){return Object.keys(this._knownWords)}get unknownWords(){return Object.keys(this._unknownWords)}get seenWords(){return Object.keys(this._seenWords)}load(){this._knownWords=t("knownWords")||{},this._unknownWords=t("unknownWords")||{},this._seenWords=t("seenWords")||{},this.targetWords=t("targetWords")||{}}save(){e("knownWords",this._knownWords),e("unknownWords",this._unknownWords),e("seenWords",this._seenWords),e("targetWords",this.targetWords)}_genWordMeta(n){return{createdTime:new Date().toUTCString()}}_addKnownWord(n){this.knownWords.includes(n)||(this.unknownWords.includes(n)&&this.removeUnknownWord(n),this._knownWords[n]=this._genWordMeta(n))}_addUnknownWord(n){this.unknownWords.includes(n)||(this.knownWords.includes(n)&&(console.log("remove knownWord",n),this.removeKnownWord(n),console.log(this._knownWords[n])),this._unknownWords[n]=this._genWordMeta(n))}_addSeenWord(n,o){this.seenWords.includes(n)&&(this._seenWords[n].freq+=o),this._seenWords[n]={...this._genWordMeta(n),freq:o}}addKnownWords(n){for(const o of n)this._addKnownWord(o)}addUnknownWords(n){for(const o of n)this._addUnknownWord(o)}addSeenWords(n){for(const[o,r]of n)this._addSeenWord(o,r)}removeKnownWord(n){delete this._knownWords[n]}removeUnknownWord(n){delete this._unknownWords[n]}}const h=new a;export{t as g,e as s,h as u};
