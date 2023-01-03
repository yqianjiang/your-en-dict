import{s as $,h,a1 as W,A as R,j,I as E,E as I,H as b,N as H,a2 as L,q as c,S as P,a3 as F,a4 as K,L as M,r as g,a5 as X,a6 as Y,a7 as T,a8 as G,o as r,c as p,a as z,e as C,u,Y as O,d as w,F as q,X as V,b as D,a9 as U,g as k,f as Z}from"./main.js";import{a as J}from"./articles1.js";import{u as Q}from"./userDict1.js";import{_ as ee}from"./ReadingListItem1.js";import{_ as te}from"./-plugin-vue-export-helper1.js";import{N as se}from"./Select1.js";import{p as ne}from"./use-form-item1.js";import"./lc1.js";import"./counter1.js";import"./Tag1.js";import"./Suffix1.js";const ie=$([$("@keyframes spin-rotate",`
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
 `,[W()])]),h("spin-body",`
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
 `)])]),oe={small:20,medium:18,large:16},ae=Object.assign(Object.assign({},I.props),{description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0}}),re=j({name:"Spin",props:ae,setup(i){const{mergedClsPrefixRef:s,inlineThemeDisabled:n}=E(i),e=I("Spin","-spin",ie,K,i,s),d=b(()=>{const{size:t}=i,{common:{cubicBezierEaseInOut:l},self:f}=e.value,{opacitySpinning:m,color:S,textColor:v}=f,y=typeof t=="number"?ne(t):f[M("size",t)];return{"--n-bezier":l,"--n-opacity-spinning":m,"--n-size":y,"--n-color":S,"--n-text-color":v}}),o=n?H("spin",b(()=>{const{size:t}=i;return typeof t=="number"?String(t):t[0]}),d,i):void 0;return{mergedClsPrefix:s,compitableShow:L(i,["spinning","show"]),mergedStrokeWidth:b(()=>{const{strokeWidth:t}=i;if(t!==void 0)return t;const{size:l}=i;return oe[typeof l=="number"?"medium":l]}),cssVars:n?void 0:d,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){var i,s;const{$slots:n,mergedClsPrefix:e,description:d}=this,o=n.icon&&this.rotate,t=(d||n.description)&&c("div",{class:`${e}-spin-description`},d||((i=n.description)===null||i===void 0?void 0:i.call(n))),l=n.icon?c("div",{class:[`${e}-spin-body`,this.themeClass]},c("div",{class:[`${e}-spin`,o&&`${e}-spin--rotate`],style:n.default?"":this.cssVars},n.icon()),t):c("div",{class:[`${e}-spin-body`,this.themeClass]},c(P,{clsPrefix:e,style:n.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${e}-spin`}),t);return(s=this.onRender)===null||s===void 0||s.call(this),n.default?c("div",{class:[`${e}-spin-container`,this.themeClass],style:this.cssVars},c("div",{class:[`${e}-spin-content`,this.compitableShow&&`${e}-spin-content--spinning`]},n),c(F,{name:"fade-in-transition"},{default:()=>this.compitableShow?l:null})):l}});function le(){return{selectedOrder:g("createdAtDescending"),orderOptions:[{label:"\u65E5\u671F\u964D\u5E8F",value:"createdAtDescending"},{label:"\u65E5\u671F\u5347\u5E8F",value:"createdAtAscending"},{label:"\u8BCD\u9891\u91CD\u8981\u6027\u6392\u5E8F",value:"freqScoreDescending"},{label:"\u603B\u5B57\u6570\u964D\u5E8F",value:"totalWordsDescending"},{label:"\u603B\u5B57\u6570\u5347\u5E8F",value:"totalWordsAscending"}]}}const ce=k(" \u6839\u636E\u6807\u7B7E\u7B5B\u9009\uFF1A "),ue=k("All"),de={key:1},pe=k(" | "),fe={key:0},me={__name:"ielts",setup(i){const s=X(),n=Y(),{selectedOrder:e,orderOptions:d}=le(),o=10;let t=0;const l=g("\u96C5\u601D\u6587\u7AE0"),f=g(!0),m=b(()=>s.query.tag),S=g([{tag:"ielts-reading",label:"\u96C5\u601D\u9605\u8BFB"},{tag:"ielts-listening",label:"\u96C5\u601D\u542C\u529B"}]),v=g([]),y=g(!0),x=async()=>{f.value=!0;const _=await J.getArticleBatch(Q,m.value,t,o,e.value);_?(v.value=[...v.value,..._],Object.keys(_).length<o&&(y.value=!1),t+=o):y.value=!1,f.value=!1};function A(){v.value=[],t=0,x()}return T(m,A),T(e,()=>{e.value!==s.query.selectedOrder&&(n.push({query:{...s.query,selectedOrder:e.value}}),A())}),s.query.selectedOrder&&(e.value=s.query.selectedOrder),x(),(_,B)=>{const N=G("router-link");return r(),p(q,null,[z("h1",null,C(l.value),1),z("div",null,[ce,u(m)?(r(),O(N,{key:0,to:{query:{...u(s).query,tag:""}}},{default:w(()=>[ue]),_:1},8,["to"])):(r(),p("span",de,"All")),(r(!0),p(q,null,V(S.value,a=>(r(),p("span",{key:a.tag},[pe,u(m)===a.tag?(r(),p("span",fe,C(a.label),1)):(r(),O(N,{key:1,to:{query:{...u(s).query,tag:a.tag}}},{default:w(()=>[k(C(a.label),1)]),_:2},1032,["to"]))]))),128))]),D(u(se),{value:u(e),"onUpdate:value":B[0]||(B[0]=a=>U(e)?e.value=a:null),options:u(d),placeholder:"\u8BF7\u9009\u62E9\u6587\u7AE0\u6392\u5E8F"},null,8,["value","options"]),(r(!0),p(q,null,V(v.value,a=>(r(),O(ee,{article:a,key:a.uuid},null,8,["article"]))),128)),z("div",null,[D(u(re),{show:f.value,size:"small"},{default:w(()=>[y.value?(r(),p("button",{key:0,onClick:x},"\u52A0\u8F7D\u66F4\u591A")):Z("",!0)]),_:1},8,["show"])])],64)}}},Oe=te(me,[["__scopeId","data-v-b20043b6"]]);export{Oe as default};
