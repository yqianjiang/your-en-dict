import{E as w,s as v,J as $,x as V,P as W,N as R,k as _,T as I,D as p,W as P,Z as q,_ as E,R as j,r as g,$ as H,a0 as B,o as l,c as u,a as x,e as S,u as f,F as z,a1 as N,b as A,a2 as L,d as F,g as T,a3 as K,f as M}from"./main.js";import{a as Z}from"./articles.js";import{u as G}from"./userDict.js";import{_ as J}from"./ReadingListItem.js";import{_ as Q}from"./-plugin-vue-export-helper.js";import{N as U}from"./Select.js";import{f as X,u as Y}from"./Suffix.js";import{p as ee}from"./use-form-item.js";import"./lc.js";import"./counter.js";import"./Tag.js";const te=w([w("@keyframes spin-rotate",`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),v("spin-container",{position:"relative"},[v("spin-body",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[X()])]),v("spin-body",`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),v("spin",`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[$("rotate",`
 animation: spin-rotate 2s linear infinite;
 `)]),v("spin-description",`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),v("spin-content",`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[$("spinning",`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),se={small:20,medium:18,large:16},ne=Object.assign(Object.assign({},R.props),{description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0}}),ie=V({name:"Spin",props:ne,setup(s){const{mergedClsPrefixRef:i,inlineThemeDisabled:e}=W(s),n=R("Spin","-spin",te,E,s,i),c=_(()=>{const{size:t}=s,{common:{cubicBezierEaseInOut:o},self:d}=n.value,{opacitySpinning:k,color:m,textColor:h}=d,y=typeof t=="number"?ee(t):d[j("size",t)];return{"--n-bezier":o,"--n-opacity-spinning":k,"--n-size":y,"--n-color":m,"--n-text-color":h}}),a=e?I("spin",_(()=>{const{size:t}=s;return typeof t=="number"?String(t):t[0]}),c,s):void 0;return{mergedClsPrefix:i,compitableShow:Y(s,["spinning","show"]),mergedStrokeWidth:_(()=>{const{strokeWidth:t}=s;if(t!==void 0)return t;const{size:o}=s;return se[typeof o=="number"?"medium":o]}),cssVars:e?void 0:c,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){var s,i;const{$slots:e,mergedClsPrefix:n,description:c}=this,a=e.icon&&this.rotate,t=(c||e.description)&&p("div",{class:`${n}-spin-description`},c||((s=e.description)===null||s===void 0?void 0:s.call(e))),o=e.icon?p("div",{class:[`${n}-spin-body`,this.themeClass]},p("div",{class:[`${n}-spin`,a&&`${n}-spin--rotate`],style:e.default?"":this.cssVars},e.icon()),t):p("div",{class:[`${n}-spin-body`,this.themeClass]},p(P,{clsPrefix:n,style:e.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${n}-spin`}),t);return(i=this.onRender)===null||i===void 0||i.call(this),e.default?p("div",{class:[`${n}-spin-container`,this.themeClass],style:this.cssVars},p("div",{class:[`${n}-spin-content`,this.compitableShow&&`${n}-spin-content--spinning`]},e),p(q,{name:"fade-in-transition"},{default:()=>this.compitableShow?o:null})):o}});function ae(){return{selectedOrder:g("createdAtDescending"),orderOptions:[{label:"\u65E5\u671F\u964D\u5E8F",value:"createdAtDescending"},{label:"\u65E5\u671F\u5347\u5E8F",value:"createdAtAscending"},{label:"\u8BCD\u9891\u91CD\u8981\u6027\u6392\u5E8F",value:"freqScoreDescending"},{label:"\u603B\u5B57\u6570\u964D\u5E8F",value:"totalWordsDescending"},{label:"\u603B\u5B57\u6570\u5347\u5E8F",value:"totalWordsAscending"}]}}const oe=T(" \u6839\u636E\u6807\u7B7E\u7B5B\u9009\uFF1A "),re=["href"],le={key:1},ce=T(" | "),de={key:0},ue=["href"],pe={__name:"reading",setup(s){const i=H(),{selectedOrder:e,orderOptions:n}=ae(),c=10;let a=0;const t=g("\u6587\u7AE0\u5217\u8868"),o=g(!0),d=_(()=>i.query.tag),k=g([{tag:"ielts-reading",label:"\u96C5\u601D\u9605\u8BFB"},{tag:"ielts-listening",label:"\u96C5\u601D\u542C\u529B"}]),m=g([]),h=g(!0),y=async()=>{o.value=!0;const b=await Z.getArticleBatch(G,d.value,a,c,e.value);b?(m.value=[...m.value,...b],Object.keys(b).length<c&&(h.value=!1),a+=c):h.value=!1,o.value=!1};function D(){m.value=[],a=0,y()}B(d,D),B(e,()=>{e.value!==i.query.selectedOrder&&location.replace(`/#/reading/?${d.value?"tag="+d.value+"&":""}selectedOrder=${e.value}`)}),i.query.selectedOrder&&(e.value=i.query.selectedOrder),y();const C=_(()=>e.value?"?selectedOrder="+e.value:"");return(b,O)=>(l(),u(z,null,[x("h1",null,S(t.value),1),x("div",null,[oe,f(d)?(l(),u("a",{key:0,href:"#/reading"+f(C)},"All",8,re)):(l(),u("span",le,"All")),(l(!0),u(z,null,N(k.value,r=>(l(),u("span",{key:r.tag},[ce,f(d)===r.tag?(l(),u("span",de,S(r.label),1)):(l(),u("a",{key:1,href:"#/reading?tag="+r.tag+f(C)},S(r.label),9,ue))]))),128))]),A(f(U),{value:f(e),"onUpdate:value":O[0]||(O[0]=r=>L(e)?e.value=r:null),options:f(n),placeholder:"\u8BF7\u9009\u62E9\u6587\u7AE0\u6392\u5E8F"},null,8,["value","options"]),(l(!0),u(z,null,N(m.value,r=>(l(),K(J,{article:r,key:r.uuid},null,8,["article"]))),128)),x("div",null,[A(f(ie),{show:o.value,size:"small"},{default:F(()=>[h.value?(l(),u("button",{key:0,onClick:y},"\u52A0\u8F7D\u66F4\u591A")):M("",!0)]),_:1},8,["show"])])],64))}},ze=Q(pe,[["__scopeId","data-v-e465ef99"]]);export{ze as default};
