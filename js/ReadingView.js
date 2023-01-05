import{k as Te,l as Ue,n as Ve,q as le,s as r,x as de,y as J,z as S,A as ce,B as $e,C as De,D as fe,E as Fe,r as I,G as ze,H as Ne,I as H,J as Oe,K as Q,L as m,M as U,O as V,P as Z,Q as C,R as je,S as Le,T as ee,U as re,V as Pe,o as y,W as E,w as f,a as v,u as a,f as se,j as x,e as W,N as P,d as R,c as $,b as ne,F as q,X as te,Y as Ie,g as Ke,v as Ae,p as Me,h as He}from"./main.js";import{c as qe,f as L}from"./counter.js";import{g as Ee,a as Xe}from"./dict.js";import{u as D,N as Ye}from"./userDict.js";import{N as oe,a as Ge,_ as Je}from"./Popup.js";import{s as ue,W as ae}from"./WordList.js";import{N as ve}from"./Select.js";import{_ as Qe}from"./-plugin-vue-export-helper.js";const Ze=e=>{const{primaryColor:n,opacityDisabled:c,borderRadius:i,textColor3:s}=e,u="rgba(0, 0, 0, .14)";return Object.assign(Object.assign({},Ue),{iconColor:s,textColor:"white",loadingColor:n,opacityDisabled:c,railColor:u,railColorActive:n,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:i,railBorderRadiusMedium:i,railBorderRadiusLarge:i,buttonBorderRadiusSmall:i,buttonBorderRadiusMedium:i,buttonBorderRadiusLarge:i,boxShadowFocus:`0 0 0 2px ${Ve(n,{alpha:.2})}`})},en={name:"Switch",common:Te,self:Ze},nn=en,tn=le("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[r("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),r("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),r("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),le("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[de({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),r("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),r("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),r("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),J("&:focus",[r("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),S("round",[r("rail","border-radius: calc(var(--n-rail-height) / 2);",[r("button","border-radius: calc(var(--n-button-height) / 2);")])]),ce("disabled",[ce("icon",[S("rubber-band",[S("pressed",[r("rail",[r("button","max-width: var(--n-button-width-pressed);")])]),r("rail",[J("&:active",[r("button","max-width: var(--n-button-width-pressed);")])]),S("active",[S("pressed",[r("rail",[r("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),r("rail",[J("&:active",[r("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),S("active",[r("rail",[r("button","left: calc(100% - (var(--n-rail-height) + var(--n-button-width)) / 2)")])]),r("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[r("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[de()]),r("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-width);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),S("active",[r("rail","background-color: var(--n-rail-color-active);")]),S("loading",[r("rail",`
 cursor: wait;
 `)]),S("disabled",[r("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),on=Object.assign(Object.assign({},fe.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]}),he=$e({name:"Switch",props:on,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:c}=De(e),i=fe("Switch","-switch",tn,nn,e,n),s=Fe(e),{mergedSizeRef:u,mergedDisabledRef:k}=s,d=I(e.defaultValue),t=ze(e,"value"),w=Ne(t,d),_=H(()=>w.value===e.checkedValue),p=I(!1),h=I(!1),g=H(()=>{const{railStyle:l}=e;if(!!l)return l({focused:h.value,checked:_.value})});function o(l){const{"onUpdate:value":K,onChange:A,onUpdateValue:M}=e,{nTriggerFormInput:X,nTriggerFormChange:Y}=s;K&&ee(K,l),M&&ee(M,l),A&&ee(A,l),d.value=l,X(),Y()}function b(){const{nTriggerFormFocus:l}=s;l()}function F(){const{nTriggerFormBlur:l}=s;l()}function B(){e.loading||k.value||(w.value!==e.checkedValue?o(e.checkedValue):o(e.uncheckedValue))}function z(){h.value=!0,b()}function T(){h.value=!1,F(),p.value=!1}function we(l){e.loading||k.value||l.key===" "&&(w.value!==e.checkedValue?o(e.checkedValue):o(e.uncheckedValue),p.value=!1)}function be(l){e.loading||k.value||l.key===" "&&(l.preventDefault(),p.value=!0)}const ie=H(()=>{const{value:l}=u,{self:{opacityDisabled:K,railColor:A,railColorActive:M,buttonBoxShadow:X,buttonColor:Y,boxShadowFocus:ge,loadingColor:me,textColor:ke,iconColor:pe,[V("buttonHeight",l)]:O,[V("buttonWidth",l)]:ye,[V("buttonWidthPressed",l)]:We,[V("railHeight",l)]:j,[V("railWidth",l)]:G,[V("railBorderRadius",l)]:Re,[V("buttonBorderRadius",l)]:xe},common:{cubicBezierEaseInOut:_e}}=i.value,Se=Z((C(j)-C(O))/2),Ce=Z(Math.max(C(j),C(O))),Be=C(j)>C(O)?G:Z(C(G)+C(O)-C(j));return{"--n-bezier":_e,"--n-button-border-radius":xe,"--n-button-box-shadow":X,"--n-button-color":Y,"--n-button-width":ye,"--n-button-width-pressed":We,"--n-button-height":O,"--n-height":Ce,"--n-offset":Se,"--n-opacity-disabled":K,"--n-rail-border-radius":Re,"--n-rail-color":A,"--n-rail-color-active":M,"--n-rail-height":j,"--n-rail-width":G,"--n-width":Be,"--n-box-shadow-focus":ge,"--n-loading-color":me,"--n-text-color":ke,"--n-icon-color":pe}}),N=c?Oe("switch",H(()=>u.value[0]),ie,e):void 0;return{handleClick:B,handleBlur:T,handleFocus:z,handleKeyup:we,handleKeydown:be,mergedRailStyle:g,pressed:p,mergedClsPrefix:n,mergedValue:w,checked:_,mergedDisabled:k,cssVars:c?void 0:ie,themeClass:N==null?void 0:N.themeClass,onRender:N==null?void 0:N.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:n,checked:c,mergedRailStyle:i,onRender:s,$slots:u}=this;s==null||s();const{checked:k,unchecked:d,icon:t,"checked-icon":w,"unchecked-icon":_}=u,p=!(Q(t)&&Q(w)&&Q(_));return m("div",{role:"switch","aria-checked":c,class:[`${e}-switch`,this.themeClass,p&&`${e}-switch--icon`,c&&`${e}-switch--active`,n&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},m("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:i},U(k,h=>U(d,g=>h||g?m("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},m("div",{class:`${e}-switch__rail-placeholder`},m("div",{class:`${e}-switch__button-placeholder`}),h),m("div",{class:`${e}-switch__rail-placeholder`},m("div",{class:`${e}-switch__button-placeholder`}),g)):null)),m("div",{class:`${e}-switch__button`},U(t,h=>U(w,g=>U(_,o=>m(je,null,{default:()=>this.loading?m(Le,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(g||h)?m("div",{class:`${e}-switch__button-icon`,key:g?"checked-icon":"icon"},g||h):!this.checked&&(o||h)?m("div",{class:`${e}-switch__button-icon`,key:o?"unchecked-icon":"icon"},o||h):null})))),U(k,h=>h&&m("div",{key:"checked",class:`${e}-switch__checked`},h)),U(d,h=>h&&m("div",{key:"unchecked",class:`${e}-switch__unchecked`},h)))))}}),an=e=>{const n=re({knownWord:[],unseenWord:[],unknownWord:[],targetWord:[],translations:{}}),c=()=>{D.addKnownWords([...n.knownWord,...n.unseenWord]),D.addUnknownWords(n.unknownWord),D.save(),n.unseenWord=[]};function i(d,t){d==="unknown"?(n.knownWord.push(t),n.unknownWord=n.unknownWord.filter(w=>w!==t),delete n.translations[t]):d==="known"?(n.unknownWord.push(t),n.knownWord=n.knownWord.filter(w=>w!==t),u(t)):(n.unknownWord.push(t),n.unseenWord=n.unseenWord.filter(w=>w!==t))}const s=d=>{d in n.translations?delete n.translations[d]:u(d)},u=async d=>{if(typeof d=="string"){const t=await Ee(d);n.translations[d]=t,console.log(t)}else{const t=await Xe({words:d});Object.assign(n.translations,t),console.log(t)}};return Pe(()=>{D.save()}),(()=>{const{known:d,unknown:t,unseen:w}=qe(e,D.knownWords,D.unknownWords);n.unknownWord=t,n.unseenWord=w,n.knownWord=d,n.targetWord=e.filter(_=>D.targetWords.includes(_)),s([...n.unknownWord,...n.unseenWord])})(),{data:n,toggleTrans:s,updateUserDict:c,onRemove:i}},sn=R("span",null,"\u8BCD\u8868",-1),rn={__name:"WordListPopup",props:{data:{type:Object},onRemove:{type:Function}},setup(e){const n=I(ue[0].value),c=re({allowRemove:!1});return(i,s)=>(y(),E(Je,{btnText:"\u67E5\u770B\u8BCD\u8868"},{header:f(()=>[v(a(P),{align:"center"},{default:f(()=>[sn,v(a(ve),{value:n.value,"onUpdate:value":s[0]||(s[0]=u=>n.value=u),options:a(ue),placeholder:"\u6392\u5E8F\u65B9\u5F0F"},null,8,["value","options"]),v(a(se),{onClick:s[1]||(s[1]=u=>c.allowRemove=!c.allowRemove)},{default:f(()=>[x(W(c.allowRemove?"\u53D6\u6D88":"")+"\u7F16\u8F91 ",1)]),_:1})]),_:1})]),default:f(()=>[v(a(Ge),{type:"segment"},{default:f(()=>[v(a(oe),{name:"0",tab:`\u751F\u8BCD (\u5171${e.data.unknownWord.length}\u4E2A)`},{default:f(()=>[v(ae,{words:e.data.unknownWord,wordDict:e.data.translations,selectedOrder:n.value,allowRemove:c.allowRemove,onRemove:s[2]||(s[2]=u=>e.onRemove("unknown",u))},null,8,["words","wordDict","selectedOrder","allowRemove"])]),_:1},8,["tab"]),v(a(oe),{name:"1",tab:`\u672A\u6807\u8BB0\u8BCD (\u5171${e.data.unseenWord.length}\u4E2A)`},{default:f(()=>[v(ae,{words:e.data.unseenWord,wordDict:e.data.translations,selectedOrder:n.value,allowRemove:c.allowRemove,onRemove:s[3]||(s[3]=u=>e.onRemove("unseen",u))},null,8,["words","wordDict","selectedOrder","allowRemove"])]),_:1},8,["tab"]),v(a(oe),{name:"2",tab:`\u719F\u8BCD (\u5171${e.data.knownWord.length}\u4E2A)`},{default:f(()=>[v(ae,{words:e.data.knownWord,wordDict:e.data.translations,selectedOrder:n.value,allowRemove:c.allowRemove,onRemove:s[4]||(s[4]=u=>e.onRemove("known",u))},null,8,["words","wordDict","selectedOrder","allowRemove"])]),_:1},8,["tab"])]),_:1})]),_:1}))}};const ln=e=>(Me("data-v-d6ab0d91"),e=e(),He(),e),dn={class:"sticky-top"},cn={class:"stats-info"},un=x(" \u663E\u793A\u8BBE\u7F6E\uFF1A "),hn=x(" \u5355\u8BCD\u7FFB\u8BD1 "),fn=x(" \u5355\u8BCD\u7FFB\u8BD1 "),vn=x(" \u6574\u53E5\u7FFB\u8BD1 "),wn=x(" \u6574\u53E5\u7FFB\u8BD1 "),bn=x(" \u9AD8\u4EAE\u9009\u9879\uFF1A "),gn=x("\u66F4\u65B0\u8BCD\u8868"),mn={class:"article"},kn=["data-token"],pn=ln(()=>R("span",null,W(" "),-1)),yn={__name:"ReadingView",props:{article:{type:Object}},emits:["updateUserDict"],setup(e,{emit:n}){const{article:c}=e;console.log("article",c),console.log("article.wordsUnique",c.wordsUnique);const{data:i,toggleTrans:s,updateUserDict:u,onRemove:k}=an(c.wordsUnique),d=()=>{n("updateUserDict"),u(),t.markUnknownWord=!1},t=re({markUnknownWord:!1,showTrans:!1,showSentenceTrans:!1}),w=g=>{var b,F,B,z;g=L(g);const o=(z=(B=(F=(b=i.translations[g])==null?void 0:b.translation)==null?void 0:F.split(".")[1])==null?void 0:B.split(",")[0])==null?void 0:z.split("\\")[0];return t.showTrans&&o?`${o.trim()}`:""},_=async g=>{var b;let o=(b=g.target)==null?void 0:b.getAttribute("data-token");!o||(o=L(o),t.markUnknownWord?i.unknownWord.includes(o)?k("unknown",o):i.knownWord.includes(o)?k("known",o):k("unseen",o):t.showTrans&&s(o))},p=I(["unknown","unseen","target"]),h=[{label:"\u751F\u8BCD",value:"unknown"},{label:"\u672A\u6807\u8BB0\u8BCD(\u4E0B\u5212\u7EBF)",value:"unseen"},{label:"\u76EE\u6807\u8BCD",value:"target"}];return(g,o)=>(y(),$(q,null,[R("h2",null,W(e.article.title),1),e.article.tag?(y(),E(a(Ye),{key:0,type:"info"},{default:f(()=>[x(W(e.article.tag),1)]),_:1})):ne("",!0),R("div",dn,[R("div",cn," \u5171"+W(e.article.totalWords)+"\u8BCD\uFF0C\u751F\u8BCD\u7387"+W((a(i).unknownWord.length/e.article.wordsUnique.length*100).toFixed(2))+"%\uFF0C\u76EE\u6807\u8BCD\u7387"+W((a(i).targetWord.length/e.article.wordsUnique.length*100).toFixed(2))+"% ",1),v(a(P),{vertical:"",class:"toolbar"},{default:f(()=>[v(a(P),null,{default:f(()=>[un,Object.keys(a(i).translations).length?(y(),E(a(he),{key:0,value:t.showTrans,"onUpdate:value":o[0]||(o[0]=b=>t.showTrans=b)},{checked:f(()=>[hn]),unchecked:f(()=>[fn]),_:1},8,["value"])):ne("",!0),e.article.sentences[0][0].translation?(y(),E(a(he),{key:1,value:t.showSentenceTrans,"onUpdate:value":o[1]||(o[1]=b=>t.showSentenceTrans=b)},{checked:f(()=>[vn]),unchecked:f(()=>[wn]),_:1},8,["value"])):ne("",!0)]),_:1}),v(a(P),null,{default:f(()=>[bn,v(a(ve),{value:p.value,"onUpdate:value":o[2]||(o[2]=b=>p.value=b),multiple:"",options:h},null,8,["value"])]),_:1}),v(a(P),null,{default:f(()=>[v(a(se),{onClick:o[3]||(o[3]=b=>t.markUnknownWord=!t.markUnknownWord)},{default:f(()=>[x(W(t.markUnknownWord?"\u505C\u6B62\u6807\u8BB0":"\u5F00\u59CB\u6807\u8BB0"),1)]),_:1}),v(a(se),{onClick:d},{default:f(()=>[gn]),_:1}),v(rn,{data:a(i),onRemove:a(k)},null,8,["data","onRemove"])]),_:1})]),_:1})]),R("p",mn,[(y(!0),$(q,null,te(e.article.sentences,(b,F)=>(y(),$("p",{key:"paragraph"+F},[(y(!0),$(q,null,te(b,(B,z)=>(y(),$("span",{key:B.sentence.slice(0,5)+z},[R("span",{class:"origin-sentence",onClick:_},[(y(!0),$(q,null,te(B.tokens,T=>(y(),$("span",null,[R("span",{class:Ie({"token--unseen":p.value.includes("unseen")&&a(i).unseenWord.includes(a(L)(T)),"token--unknown":p.value.includes("unknown")&&a(i).unknownWord.includes(a(L)(T)),"token--ignore":p.value.includes("target")&&!a(i).targetWord.includes(a(L)(T))})},[R("ruby",{"data-token":T},[x(W(T),1),R("rt",null,W(w(T)),1)],8,kn)],2),pn]))),256))]),Ke(R("div",{class:"translate-sentence"},W(B.translation),513),[[Ae,t.showSentenceTrans]])]))),128))]))),128))])],64))}},Un=Qe(yn,[["__scopeId","data-v-d6ab0d91"]]);export{Un as R};
