import{b1 as u,r as _,aa as i,o,c as t,a as n,f as r,F as l,n as m}from"./main.js";import{g as p}from"./dict.js";import{_ as v}from"./-plugin-vue-export-helper.js";import"./lc.js";const f={class:"word-meaning"},g={class:"col-3"},y={class:"col wrap"},h={__name:"myWord",setup(w){const d=u(),a=_(""),e=_({});return i(async()=>{a.value=d.params.id;const s=await p(a.value);s&&(e.value=s)}),(s,x)=>(o(),t(l,null,[n("h2",null,r(a.value),1),(o(!0),t(l,null,m(Object.keys(e.value),c=>(o(),t("div",f,[n("span",g,r(c)+": ",1),n("span",y,r(e.value[c]),1)]))),256))],64))}},F=v(h,[["__scopeId","data-v-45dd947a"]]);export{F as default};
