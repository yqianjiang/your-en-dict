import{N as U}from"./Tag.js";import{H as y,o as r,c as l,a as o,e as n,Y as f,d as T,g as c,u as e,f as u,Z as h}from"./main.js";const _=["href"],w={class:"stats-info"},x={key:0},W={class:"stats-info"},N={key:0},R={key:1},B=o("hr",null,null,-1),p={__name:"ReadingListItem",props:{article:{type:Object}},setup(a){const{article:s}=a,t=y(()=>{const i=s.unknown.length,d=s.unseen.length,g=s.totalUniqueWords,k=s.unknownTargetWords.length,m=s.unseenTargetWords.length;return{unknownRatio:((i+d)/g*100).toFixed(2),targetRatio:(s.targetWords.length/g*100).toFixed(2),nUnknown:i,nUnseen:d,nTotal:g,nUnknownTarget:k,nUnseenTarget:m}});return(i,d)=>(r(),l("div",null,[o("a",{href:"#/reading/"+a.article.uuid},n(a.article.title),9,_),a.article.tag?(r(),f(e(U),{key:0,type:"info"},{default:T(()=>[c(n(a.article.tag),1)]),_:1})):u("",!0),o("div",w,[c(n(a.article.totalWords)+"\u8BCD ",1),o("span",{style:h(e(t).nUnseen?"color: gray;":"")},[c(" - "+n(e(t).unknownRatio)+"% \u751F\u8BCD ("+n(e(t).nUnknown)+") ",1),e(t).nUnseen?(r(),l("small",x,"("+n(e(t).nUnseen)+"\u672A\u6807\u6CE8)",1)):u("",!0)],4)]),o("div",W,[c(n(e(t).targetRatio)+"%\u76EE\u6807\u8BCD("+n(a.article.targetWords.length)+") ",1),o("small",{style:h(e(t).nUnseenTarget?"color: gray;":"")},[c(" ("+n(e(t).nUnknownTarget)+"\u751F\u8BCD",1),e(t).nUnseenTarget?(r(),l("span",N,", "+n(e(t).nUnseenTarget)+" \u672A\u6807\u6CE8)",1)):(r(),l("span",R,")"))],4)]),B]))}};export{p as _};
