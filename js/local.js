import{a as o}from"./articles.js";import{u as i}from"./userDict.js";import{_ as n}from"./ReadingListItem.js";import{r,o as e,c as s,a as u,f as m,F as l,n as p,g as _}from"./main.js";import"./lc.js";import"./counter.js";const D={__name:"local",setup(f){document.title="\u672C\u5730\u6587\u7AE0 - \u4F60\u7684\u5B9A\u5236\u82F1\u8BED\u8BCD\u5178";const c=r("\u672C\u5730\u6587\u7AE0"),t=r([]);return(async()=>{t.value=await o.getLocalArticles(i)||[]})(),(d,k)=>(e(),s(l,null,[u("h1",null,m(c.value),1),(e(!0),s(l,null,p(t.value,a=>(e(),_(n,{article:a,key:a.uuid},null,8,["article"]))),128))],64))}};export{D as default};
