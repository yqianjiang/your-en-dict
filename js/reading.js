import{E as A,s as g,J as R,x as I,P,N as W,k as b,T as E,D as c,W as j,Z as H,_ as L,R as F,r as h,$ as K,a0 as M,a1 as T,a2 as Z,o as r,c as p,a as z,e as C,u as d,a3 as O,d as w,F as B,a4 as D,b as V,a5 as G,g as k,f as J}from"./main.js";import{a as U}from"./articles.js";import{u as X}from"./userDict.js";import{_ as Y}from"./ReadingListItem.js";import{_ as Q}from"./-plugin-vue-export-helper.js";import{N as ee}from"./Select.js";import{f as te,u as se}from"./Suffix.js";import{p as ne}from"./use-form-item.js";import"./lc.js";import"./counter.js";import"./Tag.js";const ie=A([A("@keyframes spin-rotate",`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),g("spin-container",{position:"relative"},[g("spin-body",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[te()])]),g("spin-body",`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),g("spin",`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[R("rotate",`
 animation: spin-rotate 2s linear infinite;
 `)]),g("spin-description",`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),g("spin-content",`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[R("spinning",`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),oe={small:20,medium:18,large:16},ae=Object.assign(Object.assign({},W.props),{description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0}}),re=I({name:"Spin",props:ae,setup(i){const{mergedClsPrefixRef:s,inlineThemeDisabled:n}=P(i),e=W("Spin","-spin",ie,L,i,s),u=b(()=>{const{size:t}=i,{common:{cubicBezierEaseInOut:l},self:f}=e.value,{opacitySpinning:m,color:x,textColor:v}=f,y=typeof t=="number"?ne(t):f[F("size",t)];return{"--n-bezier":l,"--n-opacity-spinning":m,"--n-size":y,"--n-color":x,"--n-text-color":v}}),o=n?E("spin",b(()=>{const{size:t}=i;return typeof t=="number"?String(t):t[0]}),u,i):void 0;return{mergedClsPrefix:s,compitableShow:se(i,["spinning","show"]),mergedStrokeWidth:b(()=>{const{strokeWidth:t}=i;if(t!==void 0)return t;const{size:l}=i;return oe[typeof l=="number"?"medium":l]}),cssVars:n?void 0:u,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){var i,s;const{$slots:n,mergedClsPrefix:e,description:u}=this,o=n.icon&&this.rotate,t=(u||n.description)&&c("div",{class:`${e}-spin-description`},u||((i=n.description)===null||i===void 0?void 0:i.call(n))),l=n.icon?c("div",{class:[`${e}-spin-body`,this.themeClass]},c("div",{class:[`${e}-spin`,o&&`${e}-spin--rotate`],style:n.default?"":this.cssVars},n.icon()),t):c("div",{class:[`${e}-spin-body`,this.themeClass]},c(j,{clsPrefix:e,style:n.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${e}-spin`}),t);return(s=this.onRender)===null||s===void 0||s.call(this),n.default?c("div",{class:[`${e}-spin-container`,this.themeClass],style:this.cssVars},c("div",{class:[`${e}-spin-content`,this.compitableShow&&`${e}-spin-content--spinning`]},n),c(H,{name:"fade-in-transition"},{default:()=>this.compitableShow?l:null})):l}});function le(){return{selectedOrder:h("createdAtDescending"),orderOptions:[{label:"\u65E5\u671F\u964D\u5E8F",value:"createdAtDescending"},{label:"\u65E5\u671F\u5347\u5E8F",value:"createdAtAscending"},{label:"\u8BCD\u9891\u91CD\u8981\u6027\u6392\u5E8F",value:"freqScoreDescending"},{label:"\u603B\u5B57\u6570\u964D\u5E8F",value:"totalWordsDescending"},{label:"\u603B\u5B57\u6570\u5347\u5E8F",value:"totalWordsAscending"}]}}const ce=k(" \u6839\u636E\u6807\u7B7E\u7B5B\u9009\uFF1A "),de=k("All"),ue={key:1},pe=k(" | "),fe={key:0},me={__name:"reading",setup(i){const s=K(),n=M(),{selectedOrder:e,orderOptions:u}=le(),o=10;let t=0;const l=h("\u6587\u7AE0\u5217\u8868"),f=h(!0),m=b(()=>s.query.tag),x=h([{tag:"ielts-reading",label:"\u96C5\u601D\u9605\u8BFB"},{tag:"ielts-listening",label:"\u96C5\u601D\u542C\u529B"}]),v=h([]),y=h(!0),S=async()=>{f.value=!0;const _=await U.getArticleBatch(X,m.value,t,o,e.value);_?(v.value=[...v.value,..._],Object.keys(_).length<o&&(y.value=!1),t+=o):y.value=!1,f.value=!1};function N(){v.value=[],t=0,S()}return T(m,N),T(e,()=>{e.value!==s.query.selectedOrder&&(n.push({query:{...s.query,selectedOrder:e.value}}),N())}),s.query.selectedOrder&&(e.value=s.query.selectedOrder),S(),(_,$)=>{const q=Z("router-link");return r(),p(B,null,[z("h1",null,C(l.value),1),z("div",null,[ce,d(m)?(r(),O(q,{key:0,to:{query:{...d(s).query,tag:""}}},{default:w(()=>[de]),_:1},8,["to"])):(r(),p("span",ue,"All")),(r(!0),p(B,null,D(x.value,a=>(r(),p("span",{key:a.tag},[pe,d(m)===a.tag?(r(),p("span",fe,C(a.label),1)):(r(),O(q,{key:1,to:{query:{...d(s).query,tag:a.tag}}},{default:w(()=>[k(C(a.label),1)]),_:2},1032,["to"]))]))),128))]),V(d(ee),{value:d(e),"onUpdate:value":$[0]||($[0]=a=>G(e)?e.value=a:null),options:d(u),placeholder:"\u8BF7\u9009\u62E9\u6587\u7AE0\u6392\u5E8F"},null,8,["value","options"]),(r(!0),p(B,null,D(v.value,a=>(r(),O(Y,{article:a,key:a.uuid},null,8,["article"]))),128)),z("div",null,[V(d(re),{show:f.value,size:"small"},{default:w(()=>[y.value?(r(),p("button",{key:0,onClick:S},"\u52A0\u8F7D\u66F4\u591A")):J("",!0)]),_:1},8,["show"])])],64)}}},Oe=Q(me,[["__scopeId","data-v-8ef8adf9"]]);export{Oe as default};
