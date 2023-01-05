import{y as $,q as h,a_ as I,z as R,B as P,C as j,D as W,I as _,J as E,aE as L,L as c,S as H,av as F,bb as K,P as M,O as X,r as g,bc as G,bd as J,a4 as D,be as U,o as r,c as p,d as C,e as x,u as d,W as O,w,F as B,X as T,a as V,bf as Y,j as k,b as Z}from"./main.js";import{a as Q}from"./articles.js";import{u as ee}from"./userDict.js";import{_ as te}from"./ReadingListItem.js";import{_ as se}from"./-plugin-vue-export-helper.js";import{N as ne}from"./Select.js";import"./lc.js";import"./counter.js";import"./Suffix.js";const ie=$([$("@keyframes spin-rotate",`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),h("spin-container",{position:"relative"},[h("spin-body",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[I()])]),h("spin-body",`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),h("spin",`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[R("rotate",`
 animation: spin-rotate 2s linear infinite;
 `)]),h("spin-description",`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),h("spin-content",`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[R("spinning",`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),oe={small:20,medium:18,large:16},ae=Object.assign(Object.assign({},W.props),{description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0}}),re=P({name:"Spin",props:ae,setup(i){const{mergedClsPrefixRef:s,inlineThemeDisabled:n}=j(i),e=W("Spin","-spin",ie,K,i,s),u=_(()=>{const{size:t}=i,{common:{cubicBezierEaseInOut:l},self:f}=e.value,{opacitySpinning:m,color:S,textColor:v}=f,y=typeof t=="number"?M(t):f[X("size",t)];return{"--n-bezier":l,"--n-opacity-spinning":m,"--n-size":y,"--n-color":S,"--n-text-color":v}}),o=n?E("spin",_(()=>{const{size:t}=i;return typeof t=="number"?String(t):t[0]}),u,i):void 0;return{mergedClsPrefix:s,compitableShow:L(i,["spinning","show"]),mergedStrokeWidth:_(()=>{const{strokeWidth:t}=i;if(t!==void 0)return t;const{size:l}=i;return oe[typeof l=="number"?"medium":l]}),cssVars:n?void 0:u,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){var i,s;const{$slots:n,mergedClsPrefix:e,description:u}=this,o=n.icon&&this.rotate,t=(u||n.description)&&c("div",{class:`${e}-spin-description`},u||((i=n.description)===null||i===void 0?void 0:i.call(n))),l=n.icon?c("div",{class:[`${e}-spin-body`,this.themeClass]},c("div",{class:[`${e}-spin`,o&&`${e}-spin--rotate`],style:n.default?"":this.cssVars},n.icon()),t):c("div",{class:[`${e}-spin-body`,this.themeClass]},c(H,{clsPrefix:e,style:n.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${e}-spin`}),t);return(s=this.onRender)===null||s===void 0||s.call(this),n.default?c("div",{class:[`${e}-spin-container`,this.themeClass],style:this.cssVars},c("div",{class:[`${e}-spin-content`,this.compitableShow&&`${e}-spin-content--spinning`]},n),c(F,{name:"fade-in-transition"},{default:()=>this.compitableShow?l:null})):l}});function le(){return{selectedOrder:g("createdAtDescending"),orderOptions:[{label:"\u65E5\u671F\u964D\u5E8F",value:"createdAtDescending"},{label:"\u65E5\u671F\u5347\u5E8F",value:"createdAtAscending"},{label:"\u8BCD\u9891\u91CD\u8981\u6027\u6392\u5E8F",value:"freqScoreDescending"},{label:"\u603B\u5B57\u6570\u964D\u5E8F",value:"totalWordsDescending"},{label:"\u603B\u5B57\u6570\u5347\u5E8F",value:"totalWordsAscending"}]}}const ce=k(" \u6839\u636E\u6807\u7B7E\u7B5B\u9009\uFF1A "),de=k("All"),ue={key:1},pe=k(" | "),fe={key:0},me={__name:"ielts",setup(i){const s=G(),n=J(),{selectedOrder:e,orderOptions:u}=le(),o=10;let t=0;const l=g("\u96C5\u601D\u6587\u7AE0");document.title="\u96C5\u601D\u6587\u7AE0 - \u4F60\u7684\u5B9A\u5236\u82F1\u8BED\u8BCD\u5178";const f=g(!0),m=_(()=>s.query.tag),S=g([{tag:"ielts-reading",label:"\u96C5\u601D\u9605\u8BFB"},{tag:"ielts-listening",label:"\u96C5\u601D\u542C\u529B"}]),v=g([]),y=g(!0),z=async()=>{f.value=!0;const b=await Q.getArticleBatch(ee,m.value,t,o,e.value);b?(v.value=[...v.value,...b],Object.keys(b).length<o&&(y.value=!1),t+=o):y.value=!1,f.value=!1};function q(){v.value=[],t=0,z()}return D(m,q),D(e,()=>{e.value!==s.query.selectedOrder&&(n.push({query:{...s.query,selectedOrder:e.value}}),q())}),s.query.selectedOrder&&(e.value=s.query.selectedOrder),z(),(b,A)=>{const N=U("router-link");return r(),p(B,null,[C("h1",null,x(l.value),1),C("div",null,[ce,d(m)?(r(),O(N,{key:0,to:{query:{...d(s).query,tag:""}}},{default:w(()=>[de]),_:1},8,["to"])):(r(),p("span",ue,"All")),(r(!0),p(B,null,T(S.value,a=>(r(),p("span",{key:a.tag},[pe,d(m)===a.tag?(r(),p("span",fe,x(a.label),1)):(r(),O(N,{key:1,to:{query:{...d(s).query,tag:a.tag}}},{default:w(()=>[k(x(a.label),1)]),_:2},1032,["to"]))]))),128))]),V(d(ne),{value:d(e),"onUpdate:value":A[0]||(A[0]=a=>Y(e)?e.value=a:null),options:d(u),placeholder:"\u8BF7\u9009\u62E9\u6587\u7AE0\u6392\u5E8F"},null,8,["value","options"]),(r(!0),p(B,null,T(v.value,a=>(r(),O(te,{article:a,key:a.uuid},null,8,["article"]))),128)),C("div",null,[V(d(re),{show:f.value,size:"small"},{default:w(()=>[y.value?(r(),p("button",{key:0,onClick:z},"\u52A0\u8F7D\u66F4\u591A")):Z("",!0)]),_:1},8,["show"])])],64)}}},Ce=se(me,[["__scopeId","data-v-d6b7d7ea"]]);export{Ce as default};
