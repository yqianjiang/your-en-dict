import{h as A,j as ie,k as Te,l as Re,r as N,n as ke,p as Ee,q as m,s as v,x as He,y as be,z as je,A as y,B as u,C as de,D as Ie,E as L,G as Oe,i as Ge,H as D,I as pe,J as De,K as he,L as t,M as V,N as Ne,O as ce,P as Fe,Q as Me,R as _e,S as Ke,T as Ve,U as We,V as Ae}from"./main.js";import{u as Le,g as qe,d as ue}from"./use-form-item1.js";import{c as fe}from"./userDict1.js";function Qe(e,a="default",f=[]){const c=e.$slots[a];return c===void 0?f:c()}const F=typeof document<"u"&&typeof window<"u",Ue=A("base-wave",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`),Je=ie({name:"BaseWave",props:{clsPrefix:{type:String,required:!0}},setup(e){Te("-base-wave",Ue,Re(e,"clsPrefix"));const a=N(null),f=N(!1);let i=null;return ke(()=>{i!==null&&window.clearTimeout(i)}),{active:f,selfRef:a,play(){i!==null&&(window.clearTimeout(i),f.value=!1,i=null),Ee(()=>{var c;(c=a.value)===null||c===void 0||c.offsetHeight,f.value=!0,i=window.setTimeout(()=>{f.value=!1,i=null},1e3)})}}},render(){const{clsPrefix:e}=this;return m("div",{ref:"selfRef","aria-hidden":!0,class:[`${e}-base-wave`,this.active&&`${e}-base-wave--active`]})}}),{cubicBezierEaseInOut:B}=He;function Ye({duration:e=".2s",delay:a=".1s"}={}){return[v("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to",{opacity:1}),v("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from",`
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `),v("&.fade-in-width-expand-transition-leave-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${B},
 max-width ${e} ${B} ${a},
 margin-left ${e} ${B} ${a},
 margin-right ${e} ${B} ${a};
 `),v("&.fade-in-width-expand-transition-enter-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${B} ${a},
 max-width ${e} ${B},
 margin-left ${e} ${B},
 margin-right ${e} ${B};
 `)]}function j(e){return be(e,[255,255,255,.16])}function W(e){return be(e,[0,0,0,.12])}const Xe=je("n-button-group"),Ze=F&&"chrome"in window;F&&navigator.userAgent.includes("Firefox");const eo=F&&navigator.userAgent.includes("Safari")&&!Ze,oo=v([A("button",`
 margin: 0;
 font-weight: var(--n-font-weight);
 line-height: 1;
 font-family: inherit;
 padding: var(--n-padding);
 height: var(--n-height);
 font-size: var(--n-font-size);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 width: var(--n-width);
 white-space: nowrap;
 outline: none;
 position: relative;
 z-index: auto;
 border: none;
 display: inline-flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
 user-select: none;
 -webkit-user-select: none;
 text-align: center;
 cursor: pointer;
 text-decoration: none;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[y("color",[u("border",{borderColor:"var(--n-border-color)"}),y("disabled",[u("border",{borderColor:"var(--n-border-color-disabled)"})]),de("disabled",[v("&:focus",[u("state-border",{borderColor:"var(--n-border-color-focus)"})]),v("&:hover",[u("state-border",{borderColor:"var(--n-border-color-hover)"})]),v("&:active",[u("state-border",{borderColor:"var(--n-border-color-pressed)"})]),y("pressed",[u("state-border",{borderColor:"var(--n-border-color-pressed)"})])])]),y("disabled",{backgroundColor:"var(--n-color-disabled)",color:"var(--n-text-color-disabled)"},[u("border",{border:"var(--n-border-disabled)"})]),de("disabled",[v("&:focus",{backgroundColor:"var(--n-color-focus)",color:"var(--n-text-color-focus)"},[u("state-border",{border:"var(--n-border-focus)"})]),v("&:hover",{backgroundColor:"var(--n-color-hover)",color:"var(--n-text-color-hover)"},[u("state-border",{border:"var(--n-border-hover)"})]),v("&:active",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[u("state-border",{border:"var(--n-border-pressed)"})]),y("pressed",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[u("state-border",{border:"var(--n-border-pressed)"})])]),y("loading","cursor: wait;"),A("base-wave",`
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `,[y("active",{zIndex:1,animationName:"button-wave-spread, button-wave-opacity"})]),F&&"MozBoxSizing"in document.createElement("div").style?v("&::moz-focus-inner",{border:0}):null,u("border, state-border",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `),u("border",{border:"var(--n-border)"}),u("state-border",{border:"var(--n-border)",borderColor:"#0000",zIndex:1}),u("icon",`
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `,[A("icon-slot",`
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `,[Ie({top:"50%",originalTransform:"translateY(-50%)"})]),Ye()]),u("content",`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `,[v("~",[u("icon",{margin:"var(--n-icon-margin)",marginRight:0})])]),y("block",`
 display: flex;
 width: 100%;
 `),y("dashed",[u("border, state-border",{borderStyle:"dashed !important"})]),y("disabled",{cursor:"not-allowed",opacity:"var(--n-opacity-disabled)"})]),v("@keyframes button-wave-spread",{from:{boxShadow:"0 0 0.5px 0 var(--n-ripple-color)"},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)"}}),v("@keyframes button-wave-opacity",{from:{opacity:"var(--n-wave-opacity)"},to:{opacity:0}})]),ro=Object.assign(Object.assign({},L.props),{color:String,textColor:String,text:Boolean,block:Boolean,loading:Boolean,disabled:Boolean,circle:Boolean,size:String,ghost:Boolean,round:Boolean,secondary:Boolean,tertiary:Boolean,quaternary:Boolean,strong:Boolean,focusable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},tag:{type:String,default:"button"},type:{type:String,default:"default"},dashed:Boolean,iconPlacement:{type:String,default:"left"},attrType:{type:String,default:"button"},bordered:{type:Boolean,default:!0},onClick:[Function,Array],nativeFocusBehavior:{type:Boolean,default:!eo}}),to=ie({name:"Button",props:ro,setup(e){const a=N(null),f=N(null),i=N(!1),c=Oe(()=>!e.quaternary&&!e.tertiary&&!e.secondary&&!e.text&&(!e.color||e.ghost||e.dashed)&&e.bordered),h=Ge(Xe,{}),{mergedSizeRef:P}=Le({},{defaultSize:"medium",mergedSize:r=>{const{size:b}=e;if(b)return b;const{size:x}=h;if(x)return x;const{mergedSize:o}=r||{};return o?o.value:"medium"}}),C=D(()=>e.focusable&&!e.disabled),I=r=>{var b;C.value||r.preventDefault(),!e.nativeFocusBehavior&&(r.preventDefault(),!e.disabled&&C.value&&((b=a.value)===null||b===void 0||b.focus({preventScroll:!0})))},T=r=>{var b;if(!e.disabled&&!e.loading){const{onClick:x}=e;x&&Ve(x,r),e.text||(b=f.value)===null||b===void 0||b.play()}},q=r=>{switch(r.key){case"Enter":if(!e.keyboard)return;i.value=!1}},Q=r=>{switch(r.key){case"Enter":if(!e.keyboard||e.loading){r.preventDefault();return}i.value=!0}},O=()=>{i.value=!1},{inlineThemeDisabled:G,mergedClsPrefixRef:w,mergedRtlRef:U}=pe(e),S=L("Button","-button",oo,De,e,w),R=he("Button",U,w),k=D(()=>{const r=S.value,{common:{cubicBezierEaseInOut:b,cubicBezierEaseOut:x},self:o}=r,{rippleDuration:J,opacityDisabled:M,fontWeight:Y,fontWeightStrong:X}=o,g=P.value,{dashed:Z,type:E,ghost:ee,text:$,color:s,round:ae,circle:oe,textColor:H,secondary:ve,tertiary:se,quaternary:me,strong:ge}=e,ye={"font-weight":ge?X:Y};let l={"--n-color":"initial","--n-color-hover":"initial","--n-color-pressed":"initial","--n-color-focus":"initial","--n-color-disabled":"initial","--n-ripple-color":"initial","--n-text-color":"initial","--n-text-color-hover":"initial","--n-text-color-pressed":"initial","--n-text-color-focus":"initial","--n-text-color-disabled":"initial"};const _=E==="tertiary",le=E==="default",n=_?"default":E;if($){const d=H||s,p=d||o[t("textColorText",n)];l={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":"#0000","--n-text-color":p,"--n-text-color-hover":d?j(d):o[t("textColorTextHover",n)],"--n-text-color-pressed":d?W(d):o[t("textColorTextPressed",n)],"--n-text-color-focus":d?j(d):o[t("textColorTextHover",n)],"--n-text-color-disabled":d||o[t("textColorTextDisabled",n)]}}else if(ee||Z){const d=H||s;l={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":s||o[t("rippleColor",n)],"--n-text-color":d||o[t("textColorGhost",n)],"--n-text-color-hover":d?j(d):o[t("textColorGhostHover",n)],"--n-text-color-pressed":d?W(d):o[t("textColorGhostPressed",n)],"--n-text-color-focus":d?j(d):o[t("textColorGhostHover",n)],"--n-text-color-disabled":d||o[t("textColorGhostDisabled",n)]}}else if(ve){const d=le?o.textColor:_?o.textColorTertiary:o[t("color",n)],p=s||d,K=E!=="default"&&E!=="tertiary";l={"--n-color":K?V(p,{alpha:Number(o.colorOpacitySecondary)}):o.colorSecondary,"--n-color-hover":K?V(p,{alpha:Number(o.colorOpacitySecondaryHover)}):o.colorSecondaryHover,"--n-color-pressed":K?V(p,{alpha:Number(o.colorOpacitySecondaryPressed)}):o.colorSecondaryPressed,"--n-color-focus":K?V(p,{alpha:Number(o.colorOpacitySecondaryHover)}):o.colorSecondaryHover,"--n-color-disabled":o.colorSecondary,"--n-ripple-color":"#0000","--n-text-color":p,"--n-text-color-hover":p,"--n-text-color-pressed":p,"--n-text-color-focus":p,"--n-text-color-disabled":p}}else if(se||me){const d=le?o.textColor:_?o.textColorTertiary:o[t("color",n)],p=s||d;se?(l["--n-color"]=o.colorTertiary,l["--n-color-hover"]=o.colorTertiaryHover,l["--n-color-pressed"]=o.colorTertiaryPressed,l["--n-color-focus"]=o.colorSecondaryHover,l["--n-color-disabled"]=o.colorTertiary):(l["--n-color"]=o.colorQuaternary,l["--n-color-hover"]=o.colorQuaternaryHover,l["--n-color-pressed"]=o.colorQuaternaryPressed,l["--n-color-focus"]=o.colorQuaternaryHover,l["--n-color-disabled"]=o.colorQuaternary),l["--n-ripple-color"]="#0000",l["--n-text-color"]=p,l["--n-text-color-hover"]=p,l["--n-text-color-pressed"]=p,l["--n-text-color-focus"]=p,l["--n-text-color-disabled"]=p}else l={"--n-color":s||o[t("color",n)],"--n-color-hover":s?j(s):o[t("colorHover",n)],"--n-color-pressed":s?W(s):o[t("colorPressed",n)],"--n-color-focus":s?j(s):o[t("colorFocus",n)],"--n-color-disabled":s||o[t("colorDisabled",n)],"--n-ripple-color":s||o[t("rippleColor",n)],"--n-text-color":H||(s?o.textColorPrimary:_?o.textColorTertiary:o[t("textColor",n)]),"--n-text-color-hover":H||(s?o.textColorHoverPrimary:o[t("textColorHover",n)]),"--n-text-color-pressed":H||(s?o.textColorPressedPrimary:o[t("textColorPressed",n)]),"--n-text-color-focus":H||(s?o.textColorFocusPrimary:o[t("textColorFocus",n)]),"--n-text-color-disabled":H||(s?o.textColorDisabledPrimary:o[t("textColorDisabled",n)])};let re={"--n-border":"initial","--n-border-hover":"initial","--n-border-pressed":"initial","--n-border-focus":"initial","--n-border-disabled":"initial"};$?re={"--n-border":"none","--n-border-hover":"none","--n-border-pressed":"none","--n-border-focus":"none","--n-border-disabled":"none"}:re={"--n-border":o[t("border",n)],"--n-border-hover":o[t("borderHover",n)],"--n-border-pressed":o[t("borderPressed",n)],"--n-border-focus":o[t("borderFocus",n)],"--n-border-disabled":o[t("borderDisabled",n)]};const{[t("height",g)]:te,[t("fontSize",g)]:xe,[t("padding",g)]:Ce,[t("paddingRound",g)]:we,[t("iconSize",g)]:Se,[t("borderRadius",g)]:ze,[t("iconMargin",g)]:$e,waveOpacity:Be}=o,Pe={"--n-width":oe&&!$?te:"initial","--n-height":$?"initial":te,"--n-font-size":xe,"--n-padding":oe||$?"initial":ae?we:Ce,"--n-icon-size":Se,"--n-icon-margin":$e,"--n-border-radius":$?"initial":oe||ae?te:ze};return Object.assign(Object.assign(Object.assign(Object.assign({"--n-bezier":b,"--n-bezier-ease-out":x,"--n-ripple-duration":J,"--n-opacity-disabled":M,"--n-wave-opacity":Be},ye),l),re),Pe)}),z=G?Ne("button",D(()=>{let r="";const{dashed:b,type:x,ghost:o,text:J,color:M,round:Y,circle:X,textColor:g,secondary:Z,tertiary:E,quaternary:ee,strong:$}=e;b&&(r+="a"),o&&(r+="b"),J&&(r+="c"),Y&&(r+="d"),X&&(r+="e"),Z&&(r+="f"),E&&(r+="g"),ee&&(r+="h"),$&&(r+="i"),M&&(r+="j"+fe(M)),g&&(r+="k"+fe(g));const{value:s}=P;return r+="l"+s[0],r+="m"+x[0],r}),k,e):void 0;return{selfElRef:a,waveElRef:f,mergedClsPrefix:w,mergedFocusable:C,mergedSize:P,showBorder:c,enterPressed:i,rtlEnabled:R,handleMousedown:I,handleKeydown:Q,handleBlur:O,handleKeyup:q,handleClick:T,customColorCssVars:D(()=>{const{color:r}=e;if(!r)return null;const b=j(r);return{"--n-border-color":r,"--n-border-color-hover":b,"--n-border-color-pressed":W(r),"--n-border-color-focus":b,"--n-border-color-disabled":r}}),cssVars:G?void 0:k,themeClass:z==null?void 0:z.themeClass,onRender:z==null?void 0:z.onRender}},render(){const{mergedClsPrefix:e,tag:a,onRender:f}=this;f==null||f();const i=ce(this.$slots.default,c=>c&&m("span",{class:`${e}-button__content`},c));return m(a,{ref:"selfElRef",class:[this.themeClass,`${e}-button`,`${e}-button--${this.type}-type`,`${e}-button--${this.mergedSize}-type`,this.rtlEnabled&&`${e}-button--rtl`,this.disabled&&`${e}-button--disabled`,this.block&&`${e}-button--block`,this.enterPressed&&`${e}-button--pressed`,!this.text&&this.dashed&&`${e}-button--dashed`,this.color&&`${e}-button--color`,this.secondary&&`${e}-button--secondary`,this.loading&&`${e}-button--loading`,this.ghost&&`${e}-button--ghost`],tabindex:this.mergedFocusable?0:-1,type:this.attrType,style:this.cssVars,disabled:this.disabled,onClick:this.handleClick,onBlur:this.handleBlur,onMousedown:this.handleMousedown,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},this.iconPlacement==="right"&&i,m(Fe,{width:!0},{default:()=>ce(this.$slots.icon,c=>(this.loading||c)&&m("span",{class:`${e}-button__icon`,style:{margin:Me(this.$slots.default)?"0":""}},m(_e,null,{default:()=>this.loading?m(Ke,{clsPrefix:e,key:"loading",class:`${e}-icon-slot`,strokeWidth:20}):m("div",{key:"icon",class:`${e}-icon-slot`,role:"none"},c)})))}),this.iconPlacement==="left"&&i,this.text?null:m(Je,{ref:"waveElRef",clsPrefix:e}),this.showBorder?m("div",{"aria-hidden":!0,class:`${e}-button__border`,style:this.customColorCssVars}):null,this.showBorder?m("div",{"aria-hidden":!0,class:`${e}-button__state-border`,style:this.customColorCssVars}):null)}}),bo=to,no=()=>We,io={name:"Space",self:no},ao=io;let ne;const so=()=>{if(!F)return!0;if(ne===void 0){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e);const a=e.scrollHeight===1;return document.body.removeChild(e),ne=a}return ne},lo=Object.assign(Object.assign({},L.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,size:{type:[String,Number,Array],default:"medium"},wrapItem:{type:Boolean,default:!0},itemStyle:[String,Object],wrap:{type:Boolean,default:!0},internalUseGap:{type:Boolean,default:void 0}}),po=ie({name:"Space",props:lo,setup(e){const{mergedClsPrefixRef:a,mergedRtlRef:f}=pe(e),i=L("Space","-space",void 0,ao,e,a),c=he("Space",f,a);return{useGap:so(),rtlEnabled:c,mergedClsPrefix:a,margin:D(()=>{const{size:h}=e;if(Array.isArray(h))return{horizontal:h[0],vertical:h[1]};if(typeof h=="number")return{horizontal:h,vertical:h};const{self:{[t("gap",h)]:P}}=i.value,{row:C,col:I}=qe(P);return{horizontal:ue(I),vertical:ue(C)}})}},render(){const{vertical:e,align:a,inline:f,justify:i,itemStyle:c,margin:h,wrap:P,mergedClsPrefix:C,rtlEnabled:I,useGap:T,wrapItem:q,internalUseGap:Q}=this,O=Ae(Qe(this));if(!O.length)return null;const G=`${h.horizontal}px`,w=`${h.horizontal/2}px`,U=`${h.vertical}px`,S=`${h.vertical/2}px`,R=O.length-1,k=i.startsWith("space-");return m("div",{role:"none",class:[`${C}-space`,I&&`${C}-space--rtl`],style:{display:f?"inline-flex":"flex",flexDirection:e?"column":"row",justifyContent:["start","end"].includes(i)?"flex-"+i:i,flexWrap:!P||e?"nowrap":"wrap",marginTop:T||e?"":`-${S}`,marginBottom:T||e?"":`-${S}`,alignItems:a,gap:T?`${h.vertical}px ${h.horizontal}px`:""}},!q&&(T||Q)?O:O.map((z,r)=>m("div",{role:"none",style:[c,{maxWidth:"100%"},T?"":e?{marginBottom:r!==R?U:""}:I?{marginLeft:k?i==="space-between"&&r===R?"":w:r!==R?G:"",marginRight:k?i==="space-between"&&r===0?"":w:"",paddingTop:S,paddingBottom:S}:{marginRight:k?i==="space-between"&&r===R?"":w:r!==R?G:"",marginLeft:k?i==="space-between"&&r===0?"":w:"",paddingTop:S,paddingBottom:S}]},z)))}});export{bo as N,po as a,F as i};
