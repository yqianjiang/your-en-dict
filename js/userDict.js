import{q as to,s as io,x as n,y as ho,z as f,A as W,B as y,C as _,D as go,r as uo,E as Co,G as D,H as bo,I as vo,J as ko,K,L as fo,M as F,N as x,O as po,P as mo,Q as Wo,R as h}from"./main.js";function L(r){return r.replace(/#|\(|\)|,|\s/g,"_")}const xo=r=>{const{textColor2:o,primaryColorHover:e,primaryColorPressed:g,primaryColor:c,infoColor:d,successColor:t,warningColor:a,errorColor:i,baseColor:p,borderColor:m,opacityDisabled:u,tagColor:v,closeIconColor:s,closeIconColorHover:l,closeIconColorPressed:k,borderRadiusSmall:C,fontSizeMini:b,fontSizeTiny:S,fontSizeSmall:w,fontSizeMedium:z,heightMini:$,heightTiny:H,heightSmall:B,heightMedium:M,closeColorHover:R,closeColorPressed:T,buttonColor2Hover:E,buttonColor2Pressed:O,fontWeightStrong:j}=r;return Object.assign(Object.assign({},io),{closeBorderRadius:C,heightTiny:$,heightSmall:H,heightMedium:B,heightLarge:M,borderRadius:C,opacityDisabled:u,fontSizeTiny:b,fontSizeSmall:S,fontSizeMedium:w,fontSizeLarge:z,fontWeightStrong:j,textColorCheckable:o,textColorHoverCheckable:o,textColorPressedCheckable:o,textColorChecked:p,colorCheckable:"#0000",colorHoverCheckable:E,colorPressedCheckable:O,colorChecked:c,colorCheckedHover:e,colorCheckedPressed:g,border:`1px solid ${m}`,textColor:o,color:v,colorBordered:"rgb(250, 250, 252)",closeIconColor:s,closeIconColorHover:l,closeIconColorPressed:k,closeColorHover:R,closeColorPressed:T,borderPrimary:`1px solid ${n(c,{alpha:.3})}`,textColorPrimary:c,colorPrimary:n(c,{alpha:.12}),colorBorderedPrimary:n(c,{alpha:.1}),closeIconColorPrimary:c,closeIconColorHoverPrimary:c,closeIconColorPressedPrimary:c,closeColorHoverPrimary:n(c,{alpha:.12}),closeColorPressedPrimary:n(c,{alpha:.18}),borderInfo:`1px solid ${n(d,{alpha:.3})}`,textColorInfo:d,colorInfo:n(d,{alpha:.12}),colorBorderedInfo:n(d,{alpha:.1}),closeIconColorInfo:d,closeIconColorHoverInfo:d,closeIconColorPressedInfo:d,closeColorHoverInfo:n(d,{alpha:.12}),closeColorPressedInfo:n(d,{alpha:.18}),borderSuccess:`1px solid ${n(t,{alpha:.3})}`,textColorSuccess:t,colorSuccess:n(t,{alpha:.12}),colorBorderedSuccess:n(t,{alpha:.1}),closeIconColorSuccess:t,closeIconColorHoverSuccess:t,closeIconColorPressedSuccess:t,closeColorHoverSuccess:n(t,{alpha:.12}),closeColorPressedSuccess:n(t,{alpha:.18}),borderWarning:`1px solid ${n(a,{alpha:.35})}`,textColorWarning:a,colorWarning:n(a,{alpha:.15}),colorBorderedWarning:n(a,{alpha:.12}),closeIconColorWarning:a,closeIconColorHoverWarning:a,closeIconColorPressedWarning:a,closeColorHoverWarning:n(a,{alpha:.12}),closeColorPressedWarning:n(a,{alpha:.18}),borderError:`1px solid ${n(i,{alpha:.23})}`,textColorError:i,colorError:n(i,{alpha:.1}),colorBorderedError:n(i,{alpha:.08}),closeIconColorError:i,closeIconColorHoverError:i,closeIconColorPressedError:i,closeColorHoverError:n(i,{alpha:.12}),closeColorPressedError:n(i,{alpha:.18})})},yo={name:"Tag",common:to,self:xo},_o=yo,Po={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},Io=ho("tag",`
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[f("strong",`
 font-weight: var(--n-font-weight-strong);
 `),W("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),W("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),W("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),W("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 cursor: pointer;
 `),f("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[W("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),W("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),f("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),f("icon, avatar",[f("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),f("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),f("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[y("disabled",[_("&:hover","background-color: var(--n-color-hover-checkable);",[y("checked","color: var(--n-text-color-hover-checkable);")]),_("&:active","background-color: var(--n-color-pressed-checkable);",[y("checked","color: var(--n-text-color-pressed-checkable);")])]),f("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[y("disabled",[_("&:hover","background-color: var(--n-color-checked-hover);"),_("&:active","background-color: var(--n-color-checked-pressed);")])])])]),So=Object.assign(Object.assign(Object.assign({},D.props),Po),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalStopClickPropagation:Boolean,onCheckedChange:{type:Function,validator:()=>!0,default:void 0}}),wo=mo("n-tag"),Mo=go({name:"Tag",props:So,setup(r){const o=uo(null),{mergedBorderedRef:e,mergedClsPrefixRef:g,inlineThemeDisabled:c,mergedRtlRef:d}=Co(r),t=D("Tag","-tag",Io,_o,r,g);bo(wo,{roundRef:vo(r,"round")});function a(s){if(!r.disabled&&r.checkable){const{checked:l,onCheckedChange:k,onUpdateChecked:C,"onUpdate:checked":b}=r;C&&C(!l),b&&b(!l),k&&k(!l)}}function i(s){if(r.internalStopClickPropagation&&s.stopPropagation(),!r.disabled){const{onClose:l}=r;l&&Wo(l,s)}}const p={setTextContent(s){const{value:l}=o;l&&(l.textContent=s)}},m=ko("Tag",d,g),u=K(()=>{const{type:s,size:l,color:{color:k,textColor:C}={}}=r,{common:{cubicBezierEaseInOut:b},self:{padding:S,closeMargin:w,closeMarginRtl:z,borderRadius:$,opacityDisabled:H,textColorCheckable:B,textColorHoverCheckable:M,textColorPressedCheckable:R,textColorChecked:T,colorCheckable:E,colorHoverCheckable:O,colorPressedCheckable:j,colorChecked:V,colorCheckedHover:q,colorCheckedPressed:A,closeBorderRadius:G,fontWeightStrong:Q,[h("colorBordered",s)]:X,[h("closeSize",l)]:Y,[h("closeIconSize",l)]:Z,[h("fontSize",l)]:oo,[h("height",l)]:U,[h("color",s)]:eo,[h("textColor",s)]:ro,[h("border",s)]:no,[h("closeIconColor",s)]:N,[h("closeIconColorHover",s)]:so,[h("closeIconColorPressed",s)]:lo,[h("closeColorHover",s)]:co,[h("closeColorPressed",s)]:ao}}=t.value;return{"--n-font-weight-strong":Q,"--n-avatar-size-override":`calc(${U} - 8px)`,"--n-bezier":b,"--n-border-radius":$,"--n-border":no,"--n-close-icon-size":Z,"--n-close-color-pressed":ao,"--n-close-color-hover":co,"--n-close-border-radius":G,"--n-close-icon-color":N,"--n-close-icon-color-hover":so,"--n-close-icon-color-pressed":lo,"--n-close-icon-color-disabled":N,"--n-close-margin":w,"--n-close-margin-rtl":z,"--n-close-size":Y,"--n-color":k||(e.value?X:eo),"--n-color-checkable":E,"--n-color-checked":V,"--n-color-checked-hover":q,"--n-color-checked-pressed":A,"--n-color-hover-checkable":O,"--n-color-pressed-checkable":j,"--n-font-size":oo,"--n-height":U,"--n-opacity-disabled":H,"--n-padding":S,"--n-text-color":C||ro,"--n-text-color-checkable":B,"--n-text-color-checked":T,"--n-text-color-hover-checkable":M,"--n-text-color-pressed-checkable":R}}),v=c?fo("tag",K(()=>{let s="";const{type:l,size:k,color:{color:C,textColor:b}={}}=r;return s+=l[0],s+=k[0],C&&(s+=`a${L(C)}`),b&&(s+=`b${L(b)}`),e.value&&(s+="c"),s}),u,r):void 0;return Object.assign(Object.assign({},p),{rtlEnabled:m,mergedClsPrefix:g,contentRef:o,mergedBordered:e,handleClick:a,handleCloseClick:i,cssVars:c?void 0:u,themeClass:v==null?void 0:v.themeClass,onRender:v==null?void 0:v.onRender})},render(){var r,o;const{mergedClsPrefix:e,rtlEnabled:g,closable:c,color:{borderColor:d}={},round:t,onRender:a,$slots:i}=this;a==null||a();const p=F(i.avatar,u=>u&&x("div",{class:`${e}-tag__avatar`},u)),m=F(i.icon,u=>u&&x("div",{class:`${e}-tag__icon`},u));return x("div",{class:[`${e}-tag`,this.themeClass,{[`${e}-tag--rtl`]:g,[`${e}-tag--strong`]:this.strong,[`${e}-tag--disabled`]:this.disabled,[`${e}-tag--checkable`]:this.checkable,[`${e}-tag--checked`]:this.checkable&&this.checked,[`${e}-tag--round`]:t,[`${e}-tag--avatar`]:p,[`${e}-tag--icon`]:m,[`${e}-tag--closable`]:c}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},m||p,x("span",{class:`${e}-tag__content`,ref:"contentRef"},(o=(r=this.$slots).default)===null||o===void 0?void 0:o.call(r)),!this.checkable&&c?x(po,{clsPrefix:e,class:`${e}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:t,absolute:!0}):null,!this.checkable&&this.mergedBordered?x("div",{class:`${e}-tag__border`,style:{borderColor:d}}):null)}}),J="yourdict";function zo(r){return JSON.stringify(r)}function $o(r,o=""){if(!r)return o;let e="";try{e=JSON.parse(r)}catch{e=r}return e||o}function P(r,o){o!=null&&localStorage.setItem(`${J}:${r}`,zo(o))}function I(r){return $o(localStorage.getItem(`${J}:${r}`))}class Ho{constructor(){this._knownWords={},this._unknownWords={},this._seenWords={},this.targetWords=[],this.load()}get knownWords(){return Object.keys(this._knownWords)}get unknownWords(){return Object.keys(this._unknownWords)}get seenWords(){return Object.keys(this._seenWords)}get knownTargetWords(){return this.targetWords.filter(o=>o in this._knownWords)}get unknownTargetWords(){return this.targetWords.filter(o=>o in this._knownWords)}load(){this._knownWords=I("knownWords")||{},this._unknownWords=I("unknownWords")||{},this._seenWords=I("seenWords")||{},this.targetWords=I("targetWords")||[]}save(){P("knownWords",this._knownWords),P("unknownWords",this._unknownWords),P("seenWords",this._seenWords),P("targetWords",this.targetWords)}_genWordMeta(o){return{createdTime:new Date().toUTCString()}}_addKnownWord(o){this.knownWords.includes(o)||(this.unknownWords.includes(o)&&this.removeUnknownWord(o),this._knownWords[o]=this._genWordMeta(o))}_addUnknownWord(o){this.unknownWords.includes(o)||(this.knownWords.includes(o)&&(console.log("remove knownWord",o),this.removeKnownWord(o),console.log(this._knownWords[o])),this._unknownWords[o]=this._genWordMeta(o))}_addSeenWord(o,e){this.seenWords.includes(o)&&(this._seenWords[o].freq+=e),this._seenWords[o]={...this._genWordMeta(o),freq:e}}addKnownWords(o){for(const e of o)this._addKnownWord(e)}addUnknownWords(o){for(const e of o)this._addUnknownWord(e)}addSeenWords(o){for(const[e,g]of o)this._addSeenWord(e,g)}removeKnownWord(o){delete this._knownWords[o]}removeUnknownWord(o){delete this._unknownWords[o]}}const Ro=new Ho;export{Mo as N,L as c,I as g,P as s,Ro as u};
