import{c as $,a as m,b as A,d as D,u as q,e as V,f as k,h,T as j,s as P,r as y,g as E,w as B,o as l,i as c,j as v,t as d,k as f,F as C,l as T,m as w,n as H,p as I,q as S,v as L,x as R,y as F,z as K}from"./main.js";import{a as M}from"./articles.js";import{u as U}from"./userDict.js";import{_ as G}from"./-plugin-vue-export-helper.js";import{N as Q}from"./Select.js";import{f as X,u as Y,a as Z,N as J,p as ee,c as te,b as se}from"./Suffix.js";import"./counter.js";const ne=$([$("@keyframes spin-rotate",`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),m("spin-container",{position:"relative"},[m("spin-body",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[X()])]),m("spin-body",`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),m("spin",`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[A("rotate",`
 animation: spin-rotate 2s linear infinite;
 `)]),m("spin-description",`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),m("spin-content",`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[A("spinning",`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),oe={small:20,medium:18,large:16},ie=Object.assign(Object.assign({},V.props),{description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0}}),ae=D({name:"Spin",props:ie,setup(s){const{mergedClsPrefixRef:i,inlineThemeDisabled:e}=q(s),o=V("Spin","-spin",ne,P,s,i),u=k(()=>{const{size:n}=s,{common:{cubicBezierEaseInOut:r},self:p}=o.value,{opacitySpinning:z,color:g,textColor:_}=p,b=typeof n=="number"?ee(n):p[te("size",n)];return{"--n-bezier":r,"--n-opacity-spinning":z,"--n-size":b,"--n-color":g,"--n-text-color":_}}),a=e?Y("spin",k(()=>{const{size:n}=s;return typeof n=="number"?String(n):n[0]}),u,s):void 0;return{mergedClsPrefix:i,compitableShow:Z(s,["spinning","show"]),mergedStrokeWidth:k(()=>{const{strokeWidth:n}=s;if(n!==void 0)return n;const{size:r}=s;return oe[typeof r=="number"?"medium":r]}),cssVars:e?void 0:u,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){var s,i;const{$slots:e,mergedClsPrefix:o,description:u}=this,a=e.icon&&this.rotate,n=(u||e.description)&&h("div",{class:`${o}-spin-description`},u||((s=e.description)===null||s===void 0?void 0:s.call(e))),r=e.icon?h("div",{class:[`${o}-spin-body`,this.themeClass]},h("div",{class:[`${o}-spin`,a&&`${o}-spin--rotate`],style:e.default?"":this.cssVars},e.icon()),n):h("div",{class:[`${o}-spin-body`,this.themeClass]},h(J,{clsPrefix:o,style:e.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${o}-spin`}),n);return(i=this.onRender)===null||i===void 0||i.call(this),e.default?h("div",{class:[`${o}-spin-container`,this.themeClass],style:this.cssVars},h("div",{class:[`${o}-spin-content`,this.compitableShow&&`${o}-spin-content--spinning`]},e),h(j,{name:"fade-in-transition"},{default:()=>this.compitableShow?r:null})):r}});function re(){return{selectedOrder:y("createdAtDescending"),orderOptions:[{label:"\u65E5\u671F\u964D\u5E8F",value:"createdAtDescending"},{label:"\u65E5\u671F\u5347\u5E8F",value:"createdAtAscending"},{label:"\u8BCD\u9891\u91CD\u8981\u6027\u6392\u5E8F",value:"freqScoreDescending"},{label:"\u603B\u5B57\u6570\u964D\u5E8F",value:"totalWordsDescending"},{label:"\u603B\u5B57\u6570\u5347\u5E8F",value:"totalWordsAscending"}]}}const le=s=>(F("data-v-8cce3c06"),s=s(),K(),s),ce=S(" \u6839\u636E\u6807\u7B7E\u7B5B\u9009\uFF1A "),de=["href"],ue={key:1},pe=S(" | "),fe={key:0},he=["href"],ve=["href"],ge={key:0},me=le(()=>v("hr",null,null,-1)),ye={__name:"reading",setup(s){const i=E(),{selectedOrder:e,orderOptions:o}=re(),u=10;let a=0;const n=y("\u6587\u7AE0\u5217\u8868"),r=y(!0),p=k(()=>i.query.tag),z=y([{tag:"ielts-reading",label:"\u96C5\u601D\u9605\u8BFB"},{tag:"ielts-listening",label:"\u96C5\u601D\u542C\u529B"}]),g=y([]),_=y(!0),b=async()=>{r.value=!0;const x=await M.getArticleBatch(U,p.value,a,u,e.value);x?(g.value=[...g.value,...x],Object.keys(x).length<u&&(_.value=!1),a+=u):_.value=!1,r.value=!1};function W(){g.value=[],a=0,b()}B(p,W),B(e,()=>{e.value!==i.query.selectedOrder&&location.replace(`/#/reading/?${p.value?"tag="+p.value+"&":""}selectedOrder=${e.value}`)}),i.query.selectedOrder&&(e.value=i.query.selectedOrder),b();const O=k(()=>e.value?"?selectedOrder="+e.value:"");return(x,N)=>(l(),c(C,null,[v("h1",null,d(n.value),1),v("div",null,[ce,f(p)?(l(),c("a",{key:0,href:"#/reading"+f(O)},"All",8,de)):(l(),c("span",ue,"All")),(l(!0),c(C,null,T(z.value,t=>(l(),c("span",{key:t.tag},[pe,f(p)===t.tag?(l(),c("span",fe,d(t.label),1)):(l(),c("a",{key:1,href:"#/reading?tag="+t.tag+f(O)},d(t.label),9,he))]))),128))]),w(f(Q),{value:f(e),"onUpdate:value":N[0]||(N[0]=t=>H(e)?e.value=t:null),options:f(o),placeholder:"\u8BF7\u9009\u62E9\u6587\u7AE0\u6392\u5E8F"},null,8,["value","options"]),(l(!0),c(C,null,T(g.value,t=>(l(),c("div",{key:t.uuid},[v("a",{href:"#/reading/"+t.uuid},d(t.title),9,ve),w(f(se),{type:"info"},{default:I(()=>[S(d(t.tag),1)]),_:2},1024),v("div",null,[S(d(t.totalWords)+"\u8BCD ",1),v("span",{style:L(t.unseen.length?"color: gray;":"")},[S(" - "+d((t.ratio*100).toFixed(2))+"% \u751F\u8BCD ("+d(t.unknown.length)+") ",1),t.unseen.length?(l(),c("small",ge,"("+d(t.unseen.length)+" / "+d(t.totalUniqueWords)+" \u672A\u6807\u6CE8)",1)):R("",!0)],4)]),me]))),128)),v("div",null,[w(f(ae),{show:r.value,size:"small"},{default:I(()=>[_.value?(l(),c("button",{key:0,onClick:b},"\u52A0\u8F7D\u66F4\u591A")):R("",!0)]),_:1},8,["show"])])],64))}},we=G(ye,[["__scopeId","data-v-8cce3c06"]]);export{we as default};
