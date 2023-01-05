import{B as ne,L as i,k as rr,a3 as nr,n as ve,a1 as tr,r as m,a4 as be,i as ar,I as _,a5 as lr,q as x,s,y as F,z as $,A as X,C as ir,D as Ee,G as sr,H as cr,E as ur,a6 as Ce,a7 as dr,a8 as hr,a9 as ze,_ as fr,$ as vr,J as pr,M as oe,aa as pe,ab as gr,F as br,ac as xr,ad as Se,ae as Ae,O as ge,af as mr,ag as Fe,T as y,ah as $e}from"./main.js";import{u as wr,N as Re,a as yr}from"./Suffix.js";const Cr=ne({name:"Eye",render(){return i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},i("path",{d:"M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),i("circle",{cx:"256",cy:"256",r:"80",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"}))}}),zr=ne({name:"EyeOff",render(){return i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},i("path",{d:"M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z",fill:"currentColor"}),i("path",{d:"M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z",fill:"currentColor"}),i("path",{d:"M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z",fill:"currentColor"}),i("path",{d:"M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z",fill:"currentColor"}),i("path",{d:"M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z",fill:"currentColor"}))}}),Sr=r=>{const{textColor2:f,textColor3:n,textColorDisabled:S,primaryColor:C,primaryColorHover:h,inputColor:c,inputColorDisabled:a,borderColor:l,warningColor:u,warningColorHover:d,errorColor:p,errorColorHover:w,borderRadius:D,lineHeight:z,fontSizeTiny:te,fontSizeSmall:V,fontSizeMedium:ae,fontSizeLarge:A,heightTiny:P,heightSmall:O,heightMedium:E,heightLarge:le,actionColor:B,clearColor:T,clearColorHover:R,clearColorPressed:I,placeholderColor:L,placeholderColorDisabled:N,iconColor:ie,iconColorDisabled:se,iconColorHover:j,iconColorPressed:ce}=r;return Object.assign(Object.assign({},nr),{countTextColor:n,heightTiny:P,heightSmall:O,heightMedium:E,heightLarge:le,fontSizeTiny:te,fontSizeSmall:V,fontSizeMedium:ae,fontSizeLarge:A,lineHeight:z,lineHeightTextarea:z,borderRadius:D,iconSize:"16px",groupLabelColor:B,groupLabelTextColor:f,textColor:f,textColorDisabled:S,textDecorationColor:f,caretColor:C,placeholderColor:L,placeholderColorDisabled:N,color:c,colorDisabled:a,colorFocus:c,groupLabelBorder:`1px solid ${l}`,border:`1px solid ${l}`,borderHover:`1px solid ${h}`,borderDisabled:`1px solid ${l}`,borderFocus:`1px solid ${h}`,boxShadowFocus:`0 0 0 2px ${ve(C,{alpha:.2})}`,loadingColor:C,loadingColorWarning:u,borderWarning:`1px solid ${u}`,borderHoverWarning:`1px solid ${d}`,colorFocusWarning:c,borderFocusWarning:`1px solid ${d}`,boxShadowFocusWarning:`0 0 0 2px ${ve(u,{alpha:.2})}`,caretColorWarning:u,loadingColorError:p,borderError:`1px solid ${p}`,borderHoverError:`1px solid ${w}`,colorFocusError:c,borderFocusError:`1px solid ${w}`,boxShadowFocusError:`0 0 0 2px ${ve(p,{alpha:.2})}`,caretColorError:p,clearColor:T,clearColorHover:R,clearColorPressed:I,iconColor:ie,iconColorDisabled:se,iconColorHover:j,iconColorPressed:ce,suffixTextColor:f})},Ar={name:"Input",common:rr,self:Sr},Fr=Ar,Be=tr("n-input");function $r(r){let f=0;for(const n of r)f++;return f}function re(r){return r===""||r==null}function Rr(r){const f=m(null);function n(){const{value:h}=r;if(!h||!h.focus){C();return}const{selectionStart:c,selectionEnd:a,value:l}=h;if(c==null||a==null){C();return}f.value={start:c,end:a,beforeText:l.slice(0,c),afterText:l.slice(a)}}function S(){var h;const{value:c}=f,{value:a}=r;if(!c||!a)return;const{value:l}=a,{start:u,beforeText:d,afterText:p}=c;let w=l.length;if(l.endsWith(p))w=l.length-p.length;else if(l.startsWith(d))w=d.length;else{const D=d[u-1],z=l.indexOf(D,u-1);z!==-1&&(w=z+1)}(h=a.setSelectionRange)===null||h===void 0||h.call(a,w,w)}function C(){f.value=null}return be(r,C),{recordCursor:n,restoreCursor:S}}const _e=ne({name:"InputWordCount",setup(r,{slots:f}){const{mergedValueRef:n,maxlengthRef:S,mergedClsPrefixRef:C}=ar(Be),h=_(()=>{const{value:c}=n;return c===null||Array.isArray(c)?0:$r(c)});return()=>{const{value:c}=S,{value:a}=n;return i("span",{class:`${C.value}-input-word-count`},lr(f.default,{value:a===null||Array.isArray(a)?"":a},()=>[c===void 0?h.value:`${h.value} / ${c}`]))}}}),_r=x("input",`
 max-width: 100%;
 cursor: text;
 line-height: 1.5;
 z-index: auto;
 outline: none;
 box-sizing: border-box;
 position: relative;
 display: inline-flex;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 --n-padding-vertical: calc((var(--n-height) - 1.5 * var(--n-font-size)) / 2);
`,[s("input, textarea",`
 overflow: hidden;
 flex-grow: 1;
 position: relative;
 `),s("input-el, textarea-el, input-mirror, textarea-mirror, separator, placeholder",`
 box-sizing: border-box;
 font-size: inherit;
 line-height: 1.5;
 font-family: inherit;
 border: none;
 outline: none;
 background-color: #0000;
 text-align: inherit;
 transition:
 -webkit-text-fill-color .3s var(--n-bezier),
 caret-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 `),s("input-el, textarea-el",`
 -webkit-appearance: none;
 scrollbar-width: none;
 width: 100%;
 min-width: 0;
 text-decoration-color: var(--n-text-decoration-color);
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 background-color: transparent;
 `,[F("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),F("&::placeholder","color: #0000;"),F("&:-webkit-autofill ~",[s("placeholder","display: none;")])]),$("round",[X("textarea","border-radius: calc(var(--n-height) / 2);")]),s("placeholder",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: hidden;
 color: var(--n-placeholder-color);
 `,[F("span",`
 width: 100%;
 display: inline-block;
 `)]),$("textarea",[s("placeholder","overflow: visible;")]),X("autosize","width: 100%;"),$("autosize",[s("textarea-el, input-el",`
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]),x("input-wrapper",`
 overflow: hidden;
 display: inline-flex;
 flex-grow: 1;
 position: relative;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 `),s("input-mirror",`
 padding: 0;
 height: var(--n-height);
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: nowrap;
 pointer-events: none;
 `),s("input-el",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[F("+",[s("placeholder",`
 display: flex;
 align-items: center; 
 `)])]),X("textarea",[s("placeholder","white-space: nowrap;")]),s("eye",`
 transition: color .3s var(--n-bezier);
 `),$("textarea","width: 100%;",[x("input-word-count",`
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `),$("resizable",[x("input-wrapper",`
 resize: vertical;
 min-height: var(--n-height);
 `)]),s("textarea-el, textarea-mirror, placeholder",`
 height: 100%;
 padding-left: 0;
 padding-right: 0;
 padding-top: var(--n-padding-vertical);
 padding-bottom: var(--n-padding-vertical);
 word-break: break-word;
 display: inline-block;
 vertical-align: bottom;
 box-sizing: border-box;
 line-height: var(--n-line-height-textarea);
 margin: 0;
 resize: none;
 white-space: pre-wrap;
 `),s("textarea-mirror",`
 width: 100%;
 pointer-events: none;
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre-wrap;
 overflow-wrap: break-word;
 `)]),$("pair",[s("input-el, placeholder","text-align: center;"),s("separator",`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 white-space: nowrap;
 `,[x("icon",`
 color: var(--n-icon-color);
 `),x("base-icon",`
 color: var(--n-icon-color);
 `)])]),$("disabled",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[s("border","border: var(--n-border-disabled);"),s("input-el, textarea-el",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 -webkit-text-fill-color: var(--n-text-color-disabled);
 `),s("placeholder","color: var(--n-placeholder-color-disabled);"),s("separator","color: var(--n-text-color-disabled);",[x("icon",`
 color: var(--n-icon-color-disabled);
 `),x("base-icon",`
 color: var(--n-icon-color-disabled);
 `)]),s("suffix, prefix","color: var(--n-text-color-disabled);",[x("icon",`
 color: var(--n-icon-color-disabled);
 `),x("internal-icon",`
 color: var(--n-icon-color-disabled);
 `)])]),X("disabled",[s("eye",`
 display: flex;
 align-items: center;
 justify-content: center;
 color: var(--n-icon-color);
 cursor: pointer;
 `,[F("&:hover",`
 color: var(--n-icon-color-hover);
 `),F("&:active",`
 color: var(--n-icon-color-pressed);
 `)]),F("&:hover",[s("state-border","border: var(--n-border-hover);")]),$("focus","background-color: var(--n-color-focus);",[s("state-border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),s("border, state-border",`
 box-sizing: border-box;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: inherit;
 border: var(--n-border);
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),s("state-border",`
 border-color: #0000;
 z-index: 1;
 `),s("prefix","margin-right: 4px;"),s("suffix",`
 margin-left: 4px;
 `),s("suffix, prefix",`
 transition: color .3s var(--n-bezier);
 flex-wrap: nowrap;
 flex-shrink: 0;
 line-height: var(--n-height);
 white-space: nowrap;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-suffix-text-color);
 `,[x("base-loading",`
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `),x("base-clear",`
 font-size: var(--n-icon-size);
 `,[s("placeholder",[x("base-icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]),F(">",[x("icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]),x("base-icon",`
 font-size: var(--n-icon-size);
 `)]),x("input-word-count",`
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `),["warning","error"].map(r=>$(`${r}-status`,[X("disabled",[x("base-loading",`
 color: var(--n-loading-color-${r})
 `),s("input-el, textarea-el",`
 caret-color: var(--n-caret-color-${r});
 `),s("state-border",`
 border: var(--n-border-${r});
 `),F("&:hover",[s("state-border",`
 border: var(--n-border-hover-${r});
 `)]),F("&:focus",`
 background-color: var(--n-color-focus-${r});
 `,[s("state-border",`
 box-shadow: var(--n-box-shadow-focus-${r});
 border: var(--n-border-focus-${r});
 `)]),$("focus",`
 background-color: var(--n-color-focus-${r});
 `,[s("state-border",`
 box-shadow: var(--n-box-shadow-focus-${r});
 border: var(--n-border-focus-${r});
 `)])])]))]),Er=Object.assign(Object.assign({},Ee.props),{bordered:{type:Boolean,default:void 0},type:{type:String,default:"text"},placeholder:[Array,String],defaultValue:{type:[String,Array],default:null},value:[String,Array],disabled:{type:Boolean,default:void 0},size:String,rows:{type:[Number,String],default:3},round:Boolean,minlength:[String,Number],maxlength:[String,Number],clearable:Boolean,autosize:{type:[Boolean,Object],default:!1},pair:Boolean,separator:String,readonly:{type:[String,Boolean],default:!1},passivelyActivated:Boolean,showPasswordOn:String,stateful:{type:Boolean,default:!0},autofocus:Boolean,inputProps:Object,resizable:{type:Boolean,default:!0},showCount:Boolean,loading:{type:Boolean,default:void 0},allowInput:Function,onMousedown:Function,onKeydown:Function,onKeyup:Function,onInput:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClick:[Function,Array],onChange:[Function,Array],onClear:[Function,Array],status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],textDecoration:[String,Array],attrSize:{type:Number,default:20},onInputBlur:[Function,Array],onInputFocus:[Function,Array],onDeactivate:[Function,Array],onActivate:[Function,Array],onWrapperFocus:[Function,Array],onWrapperBlur:[Function,Array],internalDeactivateOnEnter:Boolean,internalForceFocus:Boolean,internalLoadingBeforeSuffix:Boolean,showPasswordToggle:Boolean}),Tr=ne({name:"Input",props:Er,setup(r){const{mergedClsPrefixRef:f,mergedBorderedRef:n,inlineThemeDisabled:S,mergedRtlRef:C}=ir(r),h=Ee("Input","-input",_r,Fr,r,f),c=m(null),a=m(null),l=m(null),u=m(null),d=m(null),p=m(null),w=m(null),D=Rr(w),z=m(null),{localeRef:te}=wr("Input"),V=m(r.defaultValue),ae=sr(r,"value"),A=cr(ae,V),P=ur(r),{mergedSizeRef:O,mergedDisabledRef:E,mergedStatusRef:le}=P,B=m(!1),T=m(!1),R=m(!1),I=m(!1);let L=null;const N=_(()=>{const{placeholder:e,pair:o}=r;return o?Array.isArray(e)?e:e===void 0?["",""]:[e,e]:e===void 0?[te.value.placeholder]:[e]}),ie=_(()=>{const{value:e}=R,{value:o}=A,{value:t}=N;return!e&&(re(o)||Array.isArray(o)&&re(o[0]))&&t[0]}),se=_(()=>{const{value:e}=R,{value:o}=A,{value:t}=N;return!e&&t[1]&&(re(o)||Array.isArray(o)&&re(o[1]))}),j=Ce(()=>r.internalForceFocus||B.value),ce=Ce(()=>{if(E.value||r.readonly||!r.clearable||!j.value&&!T.value)return!1;const{value:e}=A,{value:o}=j;return r.pair?!!(Array.isArray(e)&&(e[0]||e[1]))&&(T.value||o):!!e&&(T.value||o)}),ue=_(()=>{const{showPasswordOn:e}=r;if(e)return e;if(r.showPasswordToggle)return"click"}),U=m(!1),Pe=_(()=>{const{textDecoration:e}=r;return e?Array.isArray(e)?e.map(o=>({textDecoration:o})):[{textDecoration:e}]:["",""]}),xe=m(void 0),Te=()=>{var e,o;if(r.type==="textarea"){const{autosize:t}=r;if(t&&(xe.value=(o=(e=z.value)===null||e===void 0?void 0:e.$el)===null||o===void 0?void 0:o.offsetWidth),!a.value||typeof t=="boolean")return;const{paddingTop:v,paddingBottom:g,lineHeight:b}=window.getComputedStyle(a.value),k=Number(v.slice(0,-2)),M=Number(g.slice(0,-2)),W=Number(b.slice(0,-2)),{value:K}=l;if(!K)return;if(t.minRows){const Y=Math.max(t.minRows,1),fe=`${k+M+W*Y}px`;K.style.minHeight=fe}if(t.maxRows){const Y=`${k+M+W*t.maxRows}px`;K.style.maxHeight=Y}}},Ie=_(()=>{const{maxlength:e}=r;return e===void 0?void 0:Number(e)});dr(()=>{const{value:e}=A;Array.isArray(e)||he(e)});const ke=hr().proxy;function q(e){const{onUpdateValue:o,"onUpdate:value":t,onInput:v}=r,{nTriggerFormInput:g}=P;o&&y(o,e),t&&y(t,e),v&&y(v,e),V.value=e,g()}function G(e){const{onChange:o}=r,{nTriggerFormChange:t}=P;o&&y(o,e),V.value=e,t()}function Me(e){const{onBlur:o}=r,{nTriggerFormBlur:t}=P;o&&y(o,e),t()}function We(e){const{onFocus:o}=r,{nTriggerFormFocus:t}=P;o&&y(o,e),t()}function De(e){const{onClear:o}=r;o&&y(o,e)}function Ve(e){const{onInputBlur:o}=r;o&&y(o,e)}function He(e){const{onInputFocus:o}=r;o&&y(o,e)}function Oe(){const{onDeactivate:e}=r;e&&y(e)}function Le(){const{onActivate:e}=r;e&&y(e)}function Ne(e){const{onClick:o}=r;o&&y(o,e)}function je(e){const{onWrapperFocus:o}=r;o&&y(o,e)}function Ue(e){const{onWrapperBlur:o}=r;o&&y(o,e)}function Ke(){R.value=!0}function Ye(e){R.value=!1,e.target===p.value?J(e,1):J(e,0)}function J(e,o=0,t="input"){const v=e.target.value;if(he(v),r.type==="textarea"){const{value:b}=z;b&&b.syncUnifiedContainer()}if(L=v,R.value)return;D.recordCursor();const g=Xe(v);if(g)if(!r.pair)t==="input"?q(v):G(v);else{let{value:b}=A;Array.isArray(b)?b=[b[0],b[1]]:b=["",""],b[o]=v,t==="input"?q(b):G(b)}ke.$forceUpdate(),g||Se(D.restoreCursor)}function Xe(e){const{allowInput:o}=r;return typeof o=="function"?o(e):!0}function qe(e){Ve(e),e.relatedTarget===c.value&&Oe(),e.relatedTarget!==null&&(e.relatedTarget===d.value||e.relatedTarget===p.value||e.relatedTarget===a.value)||(I.value=!1),Q(e,"blur"),w.value=null}function Ge(e,o){He(e),B.value=!0,I.value=!0,Le(),Q(e,"focus"),o===0?w.value=d.value:o===1?w.value=p.value:o===2&&(w.value=a.value)}function Je(e){r.passivelyActivated&&(Ue(e),Q(e,"blur"))}function Qe(e){r.passivelyActivated&&(B.value=!0,je(e),Q(e,"focus"))}function Q(e,o){e.relatedTarget!==null&&(e.relatedTarget===d.value||e.relatedTarget===p.value||e.relatedTarget===a.value||e.relatedTarget===c.value)||(o==="focus"?(We(e),B.value=!0):o==="blur"&&(Me(e),B.value=!1))}function Ze(e,o){J(e,o,"change")}function eo(e){Ne(e)}function oo(e){De(e),r.pair?(q(["",""]),G(["",""])):(q(""),G(""))}function ro(e){const{onMousedown:o}=r;o&&o(e);const{tagName:t}=e.target;if(t!=="INPUT"&&t!=="TEXTAREA"){if(r.resizable){const{value:v}=c;if(v){const{left:g,top:b,width:k,height:M}=v.getBoundingClientRect(),W=14;if(g+k-W<e.clientX&&e.clientY<g+k&&b+M-W<e.clientY&&e.clientY<b+M)return}}e.preventDefault(),B.value||me()}}function no(){var e;T.value=!0,r.type==="textarea"&&((e=z.value)===null||e===void 0||e.handleMouseEnterWrapper())}function to(){var e;T.value=!1,r.type==="textarea"&&((e=z.value)===null||e===void 0||e.handleMouseLeaveWrapper())}function ao(){E.value||ue.value==="click"&&(U.value=!U.value)}function lo(e){if(E.value)return;e.preventDefault();const o=v=>{v.preventDefault(),$e("mouseup",document,o)};if(Ae("mouseup",document,o),ue.value!=="mousedown")return;U.value=!0;const t=()=>{U.value=!1,$e("mouseup",document,t)};Ae("mouseup",document,t)}function io(e){var o;switch((o=r.onKeydown)===null||o===void 0||o.call(r,e),e.key){case"Escape":de();break;case"Enter":so(e);break}}function so(e){var o,t;if(r.passivelyActivated){const{value:v}=I;if(v){r.internalDeactivateOnEnter&&de();return}e.preventDefault(),r.type==="textarea"?(o=a.value)===null||o===void 0||o.focus():(t=d.value)===null||t===void 0||t.focus()}}function de(){r.passivelyActivated&&(I.value=!1,Se(()=>{var e;(e=c.value)===null||e===void 0||e.focus()}))}function me(){var e,o,t;E.value||(r.passivelyActivated?(e=c.value)===null||e===void 0||e.focus():((o=a.value)===null||o===void 0||o.focus(),(t=d.value)===null||t===void 0||t.focus()))}function co(){var e;!((e=c.value)===null||e===void 0)&&e.contains(document.activeElement)&&document.activeElement.blur()}function uo(){var e,o;(e=a.value)===null||e===void 0||e.select(),(o=d.value)===null||o===void 0||o.select()}function ho(){E.value||(a.value?a.value.focus():d.value&&d.value.focus())}function fo(){const{value:e}=c;(e==null?void 0:e.contains(document.activeElement))&&e!==document.activeElement&&de()}function vo(e){if(r.type==="textarea"){const{value:o}=a;o==null||o.scrollTo(e)}else{const{value:o}=d;o==null||o.scrollTo(e)}}function he(e){const{type:o,pair:t,autosize:v}=r;if(!t&&v)if(o==="textarea"){const{value:g}=l;g&&(g.textContent=(e!=null?e:"")+`\r
`)}else{const{value:g}=u;g&&(e?g.textContent=e:g.innerHTML="&nbsp;")}}function po(){Te()}const we=m({top:"0"});function go(e){var o;const{scrollTop:t}=e.target;we.value.top=`${-t}px`,(o=z.value)===null||o===void 0||o.syncUnifiedContainer()}let Z=null;ze(()=>{const{autosize:e,type:o}=r;e&&o==="textarea"?Z=be(A,t=>{!Array.isArray(t)&&t!==L&&he(t)}):Z==null||Z()});let ee=null;ze(()=>{r.type==="textarea"?ee=be(A,e=>{var o;!Array.isArray(e)&&e!==L&&((o=z.value)===null||o===void 0||o.syncUnifiedContainer())}):ee==null||ee()}),fr(Be,{mergedValueRef:A,maxlengthRef:Ie,mergedClsPrefixRef:f});const bo={wrapperElRef:c,inputElRef:d,textareaElRef:a,isCompositing:R,focus:me,blur:co,select:uo,deactivate:fo,activate:ho,scrollTo:vo},xo=vr("Input",C,f),ye=_(()=>{const{value:e}=O,{common:{cubicBezierEaseInOut:o},self:{color:t,borderRadius:v,textColor:g,caretColor:b,caretColorError:k,caretColorWarning:M,textDecorationColor:W,border:K,borderDisabled:Y,borderHover:fe,borderFocus:mo,placeholderColor:wo,placeholderColorDisabled:yo,lineHeightTextarea:Co,colorDisabled:zo,colorFocus:So,textColorDisabled:Ao,boxShadowFocus:Fo,iconSize:$o,colorFocusWarning:Ro,boxShadowFocusWarning:_o,borderWarning:Eo,borderFocusWarning:Bo,borderHoverWarning:Po,colorFocusError:To,boxShadowFocusError:Io,borderError:ko,borderFocusError:Mo,borderHoverError:Wo,clearSize:Do,clearColor:Vo,clearColorHover:Ho,clearColorPressed:Oo,iconColor:Lo,iconColorDisabled:No,suffixTextColor:jo,countTextColor:Uo,iconColorHover:Ko,iconColorPressed:Yo,loadingColor:Xo,loadingColorError:qo,loadingColorWarning:Go,[ge("padding",e)]:Jo,[ge("fontSize",e)]:Qo,[ge("height",e)]:Zo}}=h.value,{left:er,right:or}=mr(Jo);return{"--n-bezier":o,"--n-count-text-color":Uo,"--n-color":t,"--n-font-size":Qo,"--n-border-radius":v,"--n-height":Zo,"--n-padding-left":er,"--n-padding-right":or,"--n-text-color":g,"--n-caret-color":b,"--n-text-decoration-color":W,"--n-border":K,"--n-border-disabled":Y,"--n-border-hover":fe,"--n-border-focus":mo,"--n-placeholder-color":wo,"--n-placeholder-color-disabled":yo,"--n-icon-size":$o,"--n-line-height-textarea":Co,"--n-color-disabled":zo,"--n-color-focus":So,"--n-text-color-disabled":Ao,"--n-box-shadow-focus":Fo,"--n-loading-color":Xo,"--n-caret-color-warning":M,"--n-color-focus-warning":Ro,"--n-box-shadow-focus-warning":_o,"--n-border-warning":Eo,"--n-border-focus-warning":Bo,"--n-border-hover-warning":Po,"--n-loading-color-warning":Go,"--n-caret-color-error":k,"--n-color-focus-error":To,"--n-box-shadow-focus-error":Io,"--n-border-error":ko,"--n-border-focus-error":Mo,"--n-border-hover-error":Wo,"--n-loading-color-error":qo,"--n-clear-color":Vo,"--n-clear-size":Do,"--n-clear-color-hover":Ho,"--n-clear-color-pressed":Oo,"--n-icon-color":Lo,"--n-icon-color-hover":Ko,"--n-icon-color-pressed":Yo,"--n-icon-color-disabled":No,"--n-suffix-text-color":jo}}),H=S?pr("input",_(()=>{const{value:e}=O;return e[0]}),ye,r):void 0;return Object.assign(Object.assign({},bo),{wrapperElRef:c,inputElRef:d,inputMirrorElRef:u,inputEl2Ref:p,textareaElRef:a,textareaMirrorElRef:l,textareaScrollbarInstRef:z,rtlEnabled:xo,uncontrolledValue:V,mergedValue:A,passwordVisible:U,mergedPlaceholder:N,showPlaceholder1:ie,showPlaceholder2:se,mergedFocus:j,isComposing:R,activated:I,showClearButton:ce,mergedSize:O,mergedDisabled:E,textDecorationStyle:Pe,mergedClsPrefix:f,mergedBordered:n,mergedShowPasswordOn:ue,placeholderStyle:we,mergedStatus:le,textAreaScrollContainerWidth:xe,handleTextAreaScroll:go,handleCompositionStart:Ke,handleCompositionEnd:Ye,handleInput:J,handleInputBlur:qe,handleInputFocus:Ge,handleWrapperBlur:Je,handleWrapperFocus:Qe,handleMouseEnter:no,handleMouseLeave:to,handleMouseDown:ro,handleChange:Ze,handleClick:eo,handleClear:oo,handlePasswordToggleClick:ao,handlePasswordToggleMousedown:lo,handleWrapperKeydown:io,handleTextAreaMirrorResize:po,getTextareaScrollContainer:()=>a.value,mergedTheme:h,cssVars:S?void 0:ye,themeClass:H==null?void 0:H.themeClass,onRender:H==null?void 0:H.onRender})},render(){var r,f;const{mergedClsPrefix:n,mergedStatus:S,themeClass:C,type:h,onRender:c}=this,a=this.$slots;return c==null||c(),i("div",{ref:"wrapperElRef",class:[`${n}-input`,C,S&&`${n}-input--${S}-status`,{[`${n}-input--rtl`]:this.rtlEnabled,[`${n}-input--disabled`]:this.mergedDisabled,[`${n}-input--textarea`]:h==="textarea",[`${n}-input--resizable`]:this.resizable&&!this.autosize,[`${n}-input--autosize`]:this.autosize,[`${n}-input--round`]:this.round&&h!=="textarea",[`${n}-input--pair`]:this.pair,[`${n}-input--focus`]:this.mergedFocus,[`${n}-input--stateful`]:this.stateful}],style:this.cssVars,tabindex:!this.mergedDisabled&&this.passivelyActivated&&!this.activated?0:void 0,onFocus:this.handleWrapperFocus,onBlur:this.handleWrapperBlur,onClick:this.handleClick,onMousedown:this.handleMouseDown,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd,onKeyup:this.onKeyup,onKeydown:this.handleWrapperKeydown},i("div",{class:`${n}-input-wrapper`},oe(a.prefix,l=>l&&i("div",{class:`${n}-input__prefix`},l)),h==="textarea"?i(gr,{ref:"textareaScrollbarInstRef",class:`${n}-input__textarea`,container:this.getTextareaScrollContainer,triggerDisplayManually:!0,useUnifiedContainer:!0,internalHoistYRail:!0},{default:()=>{var l,u;const{textAreaScrollContainerWidth:d}=this,p={width:this.autosize&&d&&`${d}px`};return i(br,null,i("textarea",Object.assign({},this.inputProps,{ref:"textareaElRef",class:[`${n}-input__textarea-el`,(l=this.inputProps)===null||l===void 0?void 0:l.class],autofocus:this.autofocus,rows:Number(this.rows),placeholder:this.placeholder,value:this.mergedValue,disabled:this.mergedDisabled,maxlength:this.maxlength,minlength:this.minlength,readonly:this.readonly,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,style:[this.textDecorationStyle[0],(u=this.inputProps)===null||u===void 0?void 0:u.style,p],onBlur:this.handleInputBlur,onFocus:w=>this.handleInputFocus(w,2),onInput:this.handleInput,onChange:this.handleChange,onScroll:this.handleTextAreaScroll})),this.showPlaceholder1?i("div",{class:`${n}-input__placeholder`,style:[this.placeholderStyle,p],key:"placeholder"},this.mergedPlaceholder[0]):null,this.autosize?i(xr,{onResize:this.handleTextAreaMirrorResize},{default:()=>i("div",{ref:"textareaMirrorElRef",class:`${n}-input__textarea-mirror`,key:"mirror"})}):null)}}):i("div",{class:`${n}-input__input`},i("input",Object.assign({type:h==="password"&&this.mergedShowPasswordOn&&this.passwordVisible?"text":h},this.inputProps,{ref:"inputElRef",class:[`${n}-input__input-el`,(r=this.inputProps)===null||r===void 0?void 0:r.class],style:[this.textDecorationStyle[0],(f=this.inputProps)===null||f===void 0?void 0:f.style],tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[0],disabled:this.mergedDisabled,maxlength:this.maxlength,minlength:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[0]:this.mergedValue,readonly:this.readonly,autofocus:this.autofocus,size:this.attrSize,onBlur:this.handleInputBlur,onFocus:l=>this.handleInputFocus(l,0),onInput:l=>this.handleInput(l,0),onChange:l=>this.handleChange(l,0)})),this.showPlaceholder1?i("div",{class:`${n}-input__placeholder`},i("span",null,this.mergedPlaceholder[0])):null,this.autosize?i("div",{class:`${n}-input__input-mirror`,key:"mirror",ref:"inputMirrorElRef"},"\xA0"):null),!this.pair&&oe(a.suffix,l=>l||this.clearable||this.showCount||this.mergedShowPasswordOn||this.loading!==void 0?i("div",{class:`${n}-input__suffix`},[oe(a["clear-icon-placeholder"],u=>(this.clearable||u)&&i(Re,{clsPrefix:n,show:this.showClearButton,onClear:this.handleClear},{placeholder:()=>u,icon:()=>{var d,p;return(p=(d=this.$slots)["clear-icon"])===null||p===void 0?void 0:p.call(d)}})),this.internalLoadingBeforeSuffix?null:l,this.loading!==void 0?i(yr,{clsPrefix:n,loading:this.loading,showArrow:!1,showClear:!1,style:this.cssVars}):null,this.internalLoadingBeforeSuffix?l:null,this.showCount&&this.type!=="textarea"?i(_e,null,{default:u=>{var d;return(d=a.count)===null||d===void 0?void 0:d.call(a,u)}}):null,this.mergedShowPasswordOn&&this.type==="password"?i("div",{class:`${n}-input__eye`,onMousedown:this.handlePasswordToggleMousedown,onClick:this.handlePasswordToggleClick},this.passwordVisible?pe(a["password-visible-icon"],()=>[i(Fe,{clsPrefix:n},{default:()=>i(Cr,null)})]):pe(a["password-invisible-icon"],()=>[i(Fe,{clsPrefix:n},{default:()=>i(zr,null)})])):null]):null)),this.pair?i("span",{class:`${n}-input__separator`},pe(a.separator,()=>[this.separator])):null,this.pair?i("div",{class:`${n}-input-wrapper`},i("div",{class:`${n}-input__input`},i("input",{ref:"inputEl2Ref",type:this.type,class:`${n}-input__input-el`,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[1],disabled:this.mergedDisabled,maxlength:this.maxlength,minlength:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[1]:void 0,readonly:this.readonly,style:this.textDecorationStyle[1],onBlur:this.handleInputBlur,onFocus:l=>this.handleInputFocus(l,1),onInput:l=>this.handleInput(l,1),onChange:l=>this.handleChange(l,1)}),this.showPlaceholder2?i("div",{class:`${n}-input__placeholder`},i("span",null,this.mergedPlaceholder[1])):null),oe(a.suffix,l=>(this.clearable||l)&&i("div",{class:`${n}-input__suffix`},[this.clearable&&i(Re,{clsPrefix:n,show:this.showClearButton,onClear:this.handleClear},{icon:()=>{var u;return(u=a["clear-icon"])===null||u===void 0?void 0:u.call(a)},placeholder:()=>{var u;return(u=a["clear-icon-placeholder"])===null||u===void 0?void 0:u.call(a)}}),l]))):null,this.mergedBordered?i("div",{class:`${n}-input__border`}):null,this.mergedBordered?i("div",{class:`${n}-input__state-border`}):null,this.showCount&&h==="textarea"?i(_e,null,{default:l=>{var u;return(u=a.count)===null||u===void 0?void 0:u.call(a,l)}}):null)}});export{Tr as N};
