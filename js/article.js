import{r as c,b3 as s,ac as l,o as m,g as n,b as p}from"./main.js";import{R as u}from"./ReadingView.js";import{a as r}from"./articles.js";import"./counter.js";import"./dict.js";import"./lc.js";import"./userDict.js";import"./Popup.js";import"./Suffix.js";import"./WordList.js";import"./-plugin-vue-export-helper.js";import"./Select.js";const y={__name:"article",setup(d){const t=c(null),o=s(),i=()=>{r.markArticle("hasMarked",t.value)};return l(async()=>{const a=o.params.id,e=await r.getArticle(a);t.value=e,document.title=e.title+" - \u4F60\u7684\u5B9A\u5236\u82F1\u8BED\u8BCD\u5178",r.markArticle("hasOpened",t.value)}),(a,e)=>t.value?(m(),n(u,{key:0,article:t.value,onUpdateUserDict:i},null,8,["article"])):p("",!0)}};export{y as default};
