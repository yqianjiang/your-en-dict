import{u as n}from"./userDict.js";import{a as p}from"./dict.js";import{W as _,s as d}from"./wordList.js";import{_ as f}from"./-plugin-vue-export-helper.js";import{aH as k,r as w,C as h,D as W,o as y,i as D,j as e,t as a,m as c,k as u,F as L}from"./main.js";import{N as R}from"./Select.js";import"./lc.js";import"./Suffix.js";const T={class:"sticky-top"},g={class:"word-list"},b={__name:"myWordList",setup(B){const o=k({title:"",wordList:[],wordDict:{},showTranslations:!0,allowRemove:!1}),r=w("unknown"),l=w(d[0].value),m=async()=>{const s=await p({words:o.wordList,onlyTranslation:!1});Object.assign(o.wordDict,s),console.log(o.wordDict)};function v(s){r.value==="unknown"?n.addKnownWords([s]):n.addUnknownWords([s])}return h(()=>{const s=location.hash;/q=known/.test(s)?(r.value="known",o.title="\u719F\u8BCD\u5217\u8868",o.wordList=n.knownWords):/q=unknown/.test(s)&&(r.value="unknown",o.title="\u751F\u8BCD\u5217\u8868",o.wordList=n.unknownWords),m()}),W(()=>{n.save()}),(s,t)=>(y(),D(L,null,[e("h1",null,a(o.title),1),e("p",null,"\u5171"+a(o.wordList.length)+"\u8BCD",1),c(u(R),{value:l.value,"onUpdate:value":t[0]||(t[0]=i=>l.value=i),options:u(d),placeholder:"\u6392\u5E8F\u65B9\u5F0F"},null,8,["value","options"]),e("div",T,[e("button",{onClick:t[1]||(t[1]=i=>o.showTranslations=!o.showTranslations)},a(o.showTranslations?"\u9690\u85CF":"\u663E\u793A")+"\u91CA\u4E49 ",1),e("button",{onClick:t[2]||(t[2]=i=>o.allowRemove=!o.allowRemove)},a(o.allowRemove?"\u53D6\u6D88":"")+"\u7F16\u8F91 ",1)]),e("div",g,[c(_,{showTranslations:o.showTranslations,words:o.wordList,wordDict:o.wordDict,allowRemove:o.allowRemove,selectedOrder:l.value,onRemove:v},null,8,["showTranslations","words","wordDict","allowRemove","selectedOrder"])])],64))}},H=f(b,[["__scopeId","data-v-214d9bd0"]]);export{H as default};
