import{r as d,o as p,c as _,a as t,w as v,v as m}from"./main.js";import{_ as f}from"./-plugin-vue-export-helper.js";const x={class:"uploader-wrap"},w={__name:"uploader",emits:["submit","cancel"],setup(b,{emit:r}){const a=d("");async function i(n){return new Promise((e,o)=>{const l=new FileReader;l.onload=s=>e(s.target.result),l.onerror=s=>o(s),l.readAsText(n)})}const u=async n=>{const e=n.target.files[0],o=await i(e);a.value=o},c=()=>{r("submit",a.value)};return(n,e)=>(p(),_("div",x,[t("div",null,[t("input",{type:"file",onChange:u},null,32)]),t("div",null,[t("div",null,[v(t("textarea",{cols:"30",rows:"10","onUpdate:modelValue":e[0]||(e[0]=o=>a.value=o)},null,512),[[m,a.value]])]),t("button",{onClick:e[1]||(e[1]=o=>r("cancel"))},"\u53D6\u6D88"),t("button",{onClick:c},"\u786E\u5B9A\u6DFB\u52A0")])]))}},k=f(w,[["__scopeId","data-v-825e9d01"]]);export{k as U};