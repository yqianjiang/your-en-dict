import{b8 as y,r as c,P as A,G as i,o as e,c as a,d as u,e as l,u as n,F as o,S as d,h as p,R as v}from"./main.js";import{a as _}from"./articles.js";import{u as m}from"./userDict.js";import{_ as b}from"./ReadingListItem.js";import"./lc.js";import"./counter.js";const B=p(" \u7B5B\u9009\uFF1A "),q={key:0,href:"#/my-reading"},x={key:1},R=p(" | "),w={key:0},D=["href"],P={__name:"myReading",setup(F){document.title="\u6B63\u5728\u8BFB\u7684\u6587\u7AE0 - \u4F60\u7684\u5B9A\u5236\u82F1\u8BED\u8BCD\u5178";const g=y(),k=c("\u6B63\u5728\u8BFB\u7684\u6587\u7AE0"),r=A({read:[],marked:[]}),s=i(()=>g.query.q),f=i(()=>s.value?r[s.value]:[...r.read,...r.marked]),h=c([{tag:"read",label:"\u6B63\u5728\u6807\u8BB0"},{tag:"marked",label:"\u5DF2\u6807\u8BB0"}]);return(async()=>{r.read=await _.getOpenedArticles(m)||[],r.marked=await _.getMarkedArticles(m)||[]})(),(S,V)=>(e(),a(o,null,[u("h1",null,l(k.value),1),u("div",null,[B,n(s)?(e(),a("a",q,"All")):(e(),a("span",x,"All")),(e(!0),a(o,null,d(h.value,t=>(e(),a("span",{key:t.tag},[R,n(s)===t.tag?(e(),a("span",w,l(t.label),1)):(e(),a("a",{key:1,href:"#/my-reading?q="+t.tag},l(t.label),9,D))]))),128))]),(e(!0),a(o,null,d(n(f),t=>(e(),v(b,{article:t,key:t.uuid},null,8,["article"]))),128))],64))}};export{P as default};
