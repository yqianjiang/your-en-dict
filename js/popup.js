import{j as D,aa as _e,r as T,ab as Ot,ac as It,q as i,ad as Ft,a7 as K,n as Te,aO as jt,aP as Mt,aQ as re,aR as Dt,i as ae,aS as Be,H as W,ay as Ze,aI as Ht,W as G,aT as Nt,w as ne,aH as $e,aU as Ut,a3 as et,ag as tt,at as rt,aV as Xt,aW as Yt,s as d,x as oe,h as b,A as C,B as L,a1 as Vt,I as nt,aC as qt,E as ie,aB as Ce,l as j,N as at,aX as Kt,aY as Gt,aZ as Le,T as O,a_ as Jt,t as ot,a0 as it,z as Qt,F as st,an as Zt,ap as er,a$ as tr,C as rr,a2 as We,V as me,b0 as nr,O as Oe,ah as Ie,b1 as ar,p as ye,L as M,b2 as or,b3 as ir,o as sr,c as lr,a as dr,e as cr,b as Fe,d as we,u as je,b4 as fr,aj as Me}from"./main.js";import{e as ur}from"./Suffix.js";import{i as br}from"./Space.js";const hr=_e(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[_e("&::-webkit-scrollbar",{width:0,height:0})]),vr=D({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=T(null);function t(o){!(o.currentTarget.offsetWidth<o.currentTarget.scrollWidth)||o.deltaY===0||(o.currentTarget.scrollLeft+=o.deltaY+o.deltaX,o.preventDefault())}const r=Ot();return hr.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:It,ssr:r}),Object.assign({selfRef:e,handleWheel:t},{scrollTo(...o){var f;(f=e.value)===null||f===void 0||f.scrollTo(...o)}})},render(){return i("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}});let X=0,De="",He="",Ne="",Ue="";const Xe=T("0px");function pr(e){if(typeof document>"u")return;const t=document.documentElement;let r,s=!1;const o=()=>{t.style.marginRight=De,t.style.overflow=He,t.style.overflowX=Ne,t.style.overflowY=Ue,Xe.value="0px"};Ft(()=>{r=K(e,f=>{if(f){if(!X){const c=window.innerWidth-t.offsetWidth;c>0&&(De=t.style.marginRight,t.style.marginRight=`${c}px`,Xe.value=`${c}px`),He=t.style.overflow,Ne=t.style.overflowX,Ue=t.style.overflowY,t.style.overflow="hidden",t.style.overflowX="hidden",t.style.overflowY="hidden"}s=!0,X++}else X--,X||o(),s=!1},{immediate:!0})}),Te(()=>{r==null||r(),s&&(X--,X||o(),s=!1)})}const ke=T(!1),Ye=()=>{ke.value=!0},Ve=()=>{ke.value=!1};let q=0;const gr=()=>(br&&(jt(()=>{q||(window.addEventListener("compositionstart",Ye),window.addEventListener("compositionend",Ve)),q++}),Te(()=>{q<=1?(window.removeEventListener("compositionstart",Ye),window.removeEventListener("compositionend",Ve),q=0):q--})),ke);var mr=/\s/;function yr(e){for(var t=e.length;t--&&mr.test(e.charAt(t)););return t}var wr=/^\s+/;function xr(e){return e&&e.slice(0,yr(e)+1).replace(wr,"")}var qe=0/0,Sr=/^[-+]0x[0-9a-f]+$/i,zr=/^0b[01]+$/i,$r=/^0o[0-7]+$/i,Cr=parseInt;function Ke(e){if(typeof e=="number")return e;if(Mt(e))return qe;if(re(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=re(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=xr(e);var r=zr.test(e);return r||$r.test(e)?Cr(e.slice(2),r?2:8):Sr.test(e)?qe:+e}var Rr=function(){return Dt.Date.now()};const xe=Rr;var Tr="Expected a function",Br=Math.max,kr=Math.min;function Pr(e,t,r){var s,o,f,c,u,p,y=0,g=!1,S=!1,x=!0;if(typeof e!="function")throw new TypeError(Tr);t=Ke(t)||0,re(r)&&(g=!!r.leading,S="maxWait"in r,f=S?Br(Ke(r.maxWait)||0,t):f,x="trailing"in r?!!r.trailing:x);function R(l){var w=s,B=o;return s=o=void 0,y=l,c=e.apply(B,w),c}function E(l){return y=l,u=setTimeout(A,t),g?R(l):c}function k(l){var w=l-p,B=l-y,F=t-w;return S?kr(F,f-B):F}function v(l){var w=l-p,B=l-y;return p===void 0||w>=t||w<0||S&&B>=f}function A(){var l=xe();if(v(l))return P(l);u=setTimeout(A,k(l))}function P(l){return u=void 0,x&&s?R(l):(s=o=void 0,c)}function _(){u!==void 0&&clearTimeout(u),y=0,s=p=o=u=void 0}function z(){return u===void 0?c:P(xe())}function h(){var l=xe(),w=v(l);if(s=arguments,o=this,p=l,w){if(u===void 0)return E(p);if(S)return clearTimeout(u),u=setTimeout(A,t),R(p)}return u===void 0&&(u=setTimeout(A,t)),c}return h.cancel=_,h.flush=z,h}var Er="Expected a function";function Se(e,t,r){var s=!0,o=!0;if(typeof e!="function")throw new TypeError(Er);return re(r)&&(s="leading"in r?!!r.leading:s,o="trailing"in r?!!r.trailing:o),Pr(e,t,{leading:s,maxWait:t,trailing:o})}const Ar=D({name:"Add",render(){return i("svg",{width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i("path",{d:"M256 112V400M400 256H112",stroke:"currentColor","stroke-width":"32","stroke-linecap":"round","stroke-linejoin":"round"}))}}),_r=D({name:"NDrawerContent",inheritAttrs:!1,props:{blockScroll:Boolean,show:{type:Boolean,default:void 0},displayDirective:{type:String,required:!0},placement:{type:String,required:!0},contentStyle:[Object,String],nativeScrollbar:{type:Boolean,required:!0},scrollbarProps:Object,trapFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},showMask:{type:[Boolean,String],required:!0},resizable:Boolean,onClickoutside:Function,onAfterLeave:Function,onAfterEnter:Function,onEsc:Function},setup(e){const t=T(!!e.show),r=T(null),s=ae(Be);let o=0,f="",c=null;const u=T(!1),p=T(!1),y=W(()=>e.placement==="top"||e.placement==="bottom"),g=z=>{p.value=!0,o=y.value?z.clientY:z.clientX,f=document.body.style.cursor,document.body.style.cursor=y.value?"ns-resize":"ew-resize",document.body.addEventListener("mousemove",k),document.body.addEventListener("mouseleave",A),document.body.addEventListener("mouseup",v)},S=()=>{c!==null&&(window.clearTimeout(c),c=null),p.value?u.value=!0:c=window.setTimeout(()=>{u.value=!0},300)},x=()=>{c!==null&&(window.clearTimeout(c),c=null),u.value=!1},{doUpdateHeight:R,doUpdateWidth:E}=s,k=z=>{var h,l;if(p.value)if(y.value){let w=((h=r.value)===null||h===void 0?void 0:h.offsetHeight)||0;const B=o-z.clientY;w+=e.placement==="bottom"?B:-B,R(w),o=z.clientY}else{let w=((l=r.value)===null||l===void 0?void 0:l.offsetWidth)||0;const B=o-z.clientX;w+=e.placement==="right"?B:-B,E(w),o=z.clientX}},v=()=>{p.value&&(o=0,p.value=!1,document.body.style.cursor=f,document.body.removeEventListener("mousemove",k),document.body.removeEventListener("mouseup",v),document.body.removeEventListener("mouseleave",A))},A=v;Ze(()=>{e.show&&(t.value=!0)}),K(()=>e.show,z=>{z||v()}),Te(()=>{v()});const P=W(()=>{const{show:z}=e,h=[[$e,z]];return e.showMask||h.push([Ht,e.onClickoutside,void 0,{capture:!0}]),h});function _(){var z;t.value=!1,(z=e.onAfterLeave)===null||z===void 0||z.call(e)}return pr(W(()=>e.blockScroll&&t.value)),G(Xt,r),G(Nt,null),G(Yt,null),{bodyRef:r,mergedClsPrefix:s.mergedClsPrefixRef,isMounted:s.isMountedRef,mergedTheme:s.mergedThemeRef,displayed:t,transitionName:W(()=>({right:"slide-in-from-right-transition",left:"slide-in-from-left-transition",top:"slide-in-from-top-transition",bottom:"slide-in-from-bottom-transition"})[e.placement]),handleAfterLeave:_,bodyDirectives:P,handleMousedownResizeTrigger:g,handleMouseenterResizeTrigger:S,handleMouseleaveResizeTrigger:x,isDragging:p,isHoverOnResizeTrigger:u}},render(){const{$slots:e,mergedClsPrefix:t}=this;return this.displayDirective==="show"||this.displayed||this.show?ne(i("div",{role:"none"},i(Ut,{disabled:!this.showMask||!this.trapFocus,active:this.show,autoFocus:this.autoFocus,onEsc:this.onEsc},{default:()=>i(et,{name:this.transitionName,appear:this.isMounted,onAfterEnter:this.onAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>ne(i("div",tt(this.$attrs,{role:"dialog",ref:"bodyRef","aria-modal":"true",class:[`${t}-drawer`,`${t}-drawer--${this.placement}-placement`,this.isDragging&&`${t}-drawer--unselectable`,this.nativeScrollbar&&`${t}-drawer--native-scrollbar`]}),[this.resizable?i("div",{class:[`${t}-drawer__resize-trigger`,(this.isDragging||this.isHoverOnResizeTrigger)&&`${t}-drawer__resize-trigger--hover`],onMouseenter:this.handleMouseenterResizeTrigger,onMouseleave:this.handleMouseleaveResizeTrigger,onMousedown:this.handleMousedownResizeTrigger}):null,this.nativeScrollbar?i("div",{class:`${t}-drawer-content-wrapper`,style:this.contentStyle,role:"none"},e):i(rt,Object.assign({},this.scrollbarProps,{contentStyle:this.contentStyle,contentClass:`${t}-drawer-content-wrapper`,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar}),e)]),this.bodyDirectives)})})),[[$e,this.displayDirective==="if"||this.displayed||this.show]]):null}}),{cubicBezierEaseIn:Lr,cubicBezierEaseOut:Wr}=oe;function Or({duration:e="0.3s",leaveDuration:t="0.2s",name:r="slide-in-from-right"}={}){return[d(`&.${r}-transition-leave-active`,{transition:`transform ${t} ${Lr}`}),d(`&.${r}-transition-enter-active`,{transition:`transform ${e} ${Wr}`}),d(`&.${r}-transition-enter-to`,{transform:"translateX(0)"}),d(`&.${r}-transition-enter-from`,{transform:"translateX(100%)"}),d(`&.${r}-transition-leave-from`,{transform:"translateX(0)"}),d(`&.${r}-transition-leave-to`,{transform:"translateX(100%)"})]}const{cubicBezierEaseIn:Ir,cubicBezierEaseOut:Fr}=oe;function jr({duration:e="0.3s",leaveDuration:t="0.2s",name:r="slide-in-from-left"}={}){return[d(`&.${r}-transition-leave-active`,{transition:`transform ${t} ${Ir}`}),d(`&.${r}-transition-enter-active`,{transition:`transform ${e} ${Fr}`}),d(`&.${r}-transition-enter-to`,{transform:"translateX(0)"}),d(`&.${r}-transition-enter-from`,{transform:"translateX(-100%)"}),d(`&.${r}-transition-leave-from`,{transform:"translateX(0)"}),d(`&.${r}-transition-leave-to`,{transform:"translateX(-100%)"})]}const{cubicBezierEaseIn:Mr,cubicBezierEaseOut:Dr}=oe;function Hr({duration:e="0.3s",leaveDuration:t="0.2s",name:r="slide-in-from-top"}={}){return[d(`&.${r}-transition-leave-active`,{transition:`transform ${t} ${Mr}`}),d(`&.${r}-transition-enter-active`,{transition:`transform ${e} ${Dr}`}),d(`&.${r}-transition-enter-to`,{transform:"translateY(0)"}),d(`&.${r}-transition-enter-from`,{transform:"translateY(-100%)"}),d(`&.${r}-transition-leave-from`,{transform:"translateY(0)"}),d(`&.${r}-transition-leave-to`,{transform:"translateY(-100%)"})]}const{cubicBezierEaseIn:Nr,cubicBezierEaseOut:Ur}=oe;function Xr({duration:e="0.3s",leaveDuration:t="0.2s",name:r="slide-in-from-bottom"}={}){return[d(`&.${r}-transition-leave-active`,{transition:`transform ${t} ${Nr}`}),d(`&.${r}-transition-enter-active`,{transition:`transform ${e} ${Ur}`}),d(`&.${r}-transition-enter-to`,{transform:"translateY(0)"}),d(`&.${r}-transition-enter-from`,{transform:"translateY(100%)"}),d(`&.${r}-transition-leave-from`,{transform:"translateY(0)"}),d(`&.${r}-transition-leave-to`,{transform:"translateY(100%)"})]}const Yr=d([b("drawer",`
 word-break: break-word;
 line-height: var(--n-line-height);
 position: absolute;
 pointer-events: all;
 box-shadow: var(--n-box-shadow);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background-color: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 `,[Or(),jr(),Hr(),Xr(),C("unselectable",`
 user-select: none; 
 -webkit-user-select: none;
 `),C("native-scrollbar",[b("drawer-content-wrapper",`
 overflow: auto;
 height: 100%;
 `)]),L("resize-trigger",`
 position: absolute;
 background-color: #0000;
 transition: background-color .3s var(--n-bezier);
 `,[C("hover",`
 background-color: var(--n-resize-trigger-color-hover);
 `)]),b("drawer-content-wrapper",`
 box-sizing: border-box;
 `),b("drawer-content",`
 height: 100%;
 display: flex;
 flex-direction: column;
 `,[C("native-scrollbar",[b("drawer-body-content-wrapper",`
 height: 100%;
 overflow: auto;
 `)]),b("drawer-body",`
 flex: 1 0 0;
 overflow: hidden;
 `),b("drawer-body-content-wrapper",`
 box-sizing: border-box;
 padding: var(--n-body-padding);
 `),b("drawer-header",`
 font-weight: var(--n-title-font-weight);
 line-height: 1;
 font-size: var(--n-title-font-size);
 color: var(--n-title-text-color);
 padding: var(--n-header-padding);
 transition: border .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-divider-color);
 border-bottom: var(--n-header-border-bottom);
 display: flex;
 justify-content: space-between;
 align-items: center;
 `,[L("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),b("drawer-footer",`
 display: flex;
 justify-content: flex-end;
 border-top: var(--n-footer-border-top);
 transition: border .3s var(--n-bezier);
 padding: var(--n-footer-padding);
 `)]),C("right-placement",`
 top: 0;
 bottom: 0;
 right: 0;
 `,[L("resize-trigger",`
 width: 3px;
 height: 100%;
 top: 0;
 left: 0;
 transform: translateX(-1.5px);
 cursor: ew-resize;
 `)]),C("left-placement",`
 top: 0;
 bottom: 0;
 left: 0;
 `,[L("resize-trigger",`
 width: 3px;
 height: 100%;
 top: 0;
 right: 0;
 transform: translateX(1.5px);
 cursor: ew-resize;
 `)]),C("top-placement",`
 top: 0;
 left: 0;
 right: 0;
 `,[L("resize-trigger",`
 width: 100%;
 height: 3px;
 bottom: 0;
 left: 0;
 transform: translateY(1.5px);
 cursor: ns-resize;
 `)]),C("bottom-placement",`
 left: 0;
 bottom: 0;
 right: 0;
 `,[L("resize-trigger",`
 width: 100%;
 height: 3px;
 top: 0;
 left: 0;
 transform: translateY(-1.5px);
 cursor: ns-resize;
 `)])]),d("body",[d(">",[b("drawer-container",{position:"fixed"})])]),b("drawer-container",`
 position: relative;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 `,[d("> *",{pointerEvents:"all"})]),b("drawer-mask",`
 background-color: rgba(0, 0, 0, .3);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[C("invisible",`
 background-color: rgba(0, 0, 0, 0)
 `),Vt({enterDuration:"0.2s",leaveDuration:"0.2s",enterCubicBezier:"var(--n-bezier-in)",leaveCubicBezier:"var(--n-bezier-out)"})])]),Vr=Object.assign(Object.assign({},ie.props),{show:Boolean,width:[Number,String],height:[Number,String],placement:{type:String,default:"right"},maskClosable:{type:Boolean,default:!0},showMask:{type:[Boolean,String],default:!0},to:[String,Object],displayDirective:{type:String,default:"if"},nativeScrollbar:{type:Boolean,default:!0},zIndex:Number,onMaskClick:Function,scrollbarProps:Object,contentStyle:[Object,String],trapFocus:{type:Boolean,default:!0},onEsc:Function,autoFocus:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!0},resizable:Boolean,defaultWidth:{type:[Number,String],default:251},defaultHeight:{type:[Number,String],default:251},onUpdateWidth:[Function,Array],onUpdateHeight:[Function,Array],"onUpdate:width":[Function,Array],"onUpdate:height":[Function,Array],"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,drawerStyle:[String,Object],drawerClass:String,target:null,onShow:Function,onHide:Function}),qr=D({name:"Drawer",inheritAttrs:!1,props:Vr,setup(e){const{mergedClsPrefixRef:t,namespaceRef:r,inlineThemeDisabled:s}=nt(e),o=qt(),f=ie("Drawer","-drawer",Yr,Gt,e,t),c=T(e.defaultWidth),u=T(e.defaultHeight),p=Ce(j(e,"width"),c),y=Ce(j(e,"height"),u),g=W(()=>{const{placement:h}=e;return h==="top"||h==="bottom"?"":Le(p.value)}),S=W(()=>{const{placement:h}=e;return h==="left"||h==="right"?"":Le(y.value)}),x=h=>{const{onUpdateWidth:l,"onUpdate:width":w}=e;l&&O(l,h),w&&O(w,h),c.value=h},R=h=>{const{onUpdateHeight:l,"onUpdate:width":w}=e;l&&O(l,h),w&&O(w,h),u.value=h},E=W(()=>[{width:g.value,height:S.value},e.drawerStyle||""]);function k(h){const{onMaskClick:l,maskClosable:w}=e;w&&P(!1),l&&l(h)}const v=gr();function A(h){var l;(l=e.onEsc)===null||l===void 0||l.call(e),e.show&&e.closeOnEsc&&ur(h)&&!v.value&&P(!1)}function P(h){const{onHide:l,onUpdateShow:w,"onUpdate:show":B}=e;w&&O(w,h),B&&O(B,h),l&&!h&&O(l,h)}G(Be,{isMountedRef:o,mergedThemeRef:f,mergedClsPrefixRef:t,doUpdateShow:P,doUpdateHeight:R,doUpdateWidth:x});const _=W(()=>{const{common:{cubicBezierEaseInOut:h,cubicBezierEaseIn:l,cubicBezierEaseOut:w},self:{color:B,textColor:F,boxShadow:Y,lineHeight:I,headerPadding:se,footerPadding:le,bodyPadding:de,titleFontSize:J,titleTextColor:Q,titleFontWeight:ce,headerBorderBottom:fe,footerBorderTop:ue,closeIconColor:Z,closeIconColorHover:ee,closeIconColorPressed:be,closeColorHover:he,closeColorPressed:H,closeIconSize:ve,closeSize:pe,closeBorderRadius:ge,resizableTriggerColorHover:V}}=f.value;return{"--n-line-height":I,"--n-color":B,"--n-text-color":F,"--n-box-shadow":Y,"--n-bezier":h,"--n-bezier-out":w,"--n-bezier-in":l,"--n-header-padding":se,"--n-body-padding":de,"--n-footer-padding":le,"--n-title-text-color":Q,"--n-title-font-size":J,"--n-title-font-weight":ce,"--n-header-border-bottom":fe,"--n-footer-border-top":ue,"--n-close-icon-color":Z,"--n-close-icon-color-hover":ee,"--n-close-icon-color-pressed":be,"--n-close-size":pe,"--n-close-color-hover":he,"--n-close-color-pressed":H,"--n-close-icon-size":ve,"--n-close-border-radius":ge,"--n-resize-trigger-color-hover":V}}),z=s?at("drawer",void 0,_,e):void 0;return{mergedClsPrefix:t,namespace:r,mergedBodyStyle:E,handleMaskClick:k,handleEsc:A,mergedTheme:f,cssVars:s?void 0:_,themeClass:z==null?void 0:z.themeClass,onRender:z==null?void 0:z.onRender,isMounted:o}},render(){const{mergedClsPrefix:e}=this;return i(Kt,{to:this.to,show:this.show},{default:()=>{var t;return(t=this.onRender)===null||t===void 0||t.call(this),ne(i("div",{class:[`${e}-drawer-container`,this.namespace,this.themeClass],style:this.cssVars,role:"none"},this.showMask?i(et,{name:"fade-in-transition",appear:this.isMounted},{default:()=>this.show?i("div",{"aria-hidden":!0,class:[`${e}-drawer-mask`,this.showMask==="transparent"&&`${e}-drawer-mask--invisible`],onClick:this.handleMaskClick}):null}):null,i(_r,Object.assign({},this.$attrs,{class:[this.drawerClass,this.$attrs.class],style:[this.mergedBodyStyle,this.$attrs.style],blockScroll:this.blockScroll,contentStyle:this.contentStyle,placement:this.placement,scrollbarProps:this.scrollbarProps,show:this.show,displayDirective:this.displayDirective,nativeScrollbar:this.nativeScrollbar,onAfterEnter:this.onAfterEnter,onAfterLeave:this.onAfterLeave,trapFocus:this.trapFocus,autoFocus:this.autoFocus,resizable:this.resizable,showMask:this.showMask,onEsc:this.handleEsc,onClickoutside:this.handleMaskClick}),this.$slots)),[[Jt,{zIndex:this.zIndex,enabled:this.show}]])}})}}),Kr={title:{type:String},headerStyle:[Object,String],footerStyle:[Object,String],bodyStyle:[Object,String],bodyContentStyle:[Object,String],nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,closable:Boolean},Gr=D({name:"DrawerContent",props:Kr,setup(){const e=ae(Be,null);e||ot("drawer-content","`n-drawer-content` must be placed inside `n-drawer`.");const{doUpdateShow:t}=e;function r(){t(!1)}return{handleCloseClick:r,mergedTheme:e.mergedThemeRef,mergedClsPrefix:e.mergedClsPrefixRef}},render(){const{title:e,mergedClsPrefix:t,nativeScrollbar:r,mergedTheme:s,bodyStyle:o,bodyContentStyle:f,headerStyle:c,footerStyle:u,scrollbarProps:p,closable:y,$slots:g}=this;return i("div",{role:"none",class:[`${t}-drawer-content`,r&&`${t}-drawer-content--native-scrollbar`]},g.header||e||y?i("div",{class:`${t}-drawer-header`,style:c,role:"none"},i("div",{class:`${t}-drawer-header__main`,role:"heading","aria-level":"1"},g.header!==void 0?g.header():e),y&&i(it,{onClick:this.handleCloseClick,clsPrefix:t,class:`${t}-drawer-header__close`,absolute:!0})):null,r?i("div",{class:`${t}-drawer-body`,style:o,role:"none"},i("div",{class:`${t}-drawer-body-content-wrapper`,style:f,role:"none"},g)):i(rt,Object.assign({themeOverrides:s.peerOverrides.Scrollbar,theme:s.peers.Scrollbar},p,{class:`${t}-drawer-body`,contentClass:`${t}-drawer-body-content-wrapper`,contentStyle:f}),g),g.footer?i("div",{class:`${t}-drawer-footer`,style:u,role:"none"},g.footer()):null)}}),Pe=Qt("n-tabs"),lt={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},nn=D({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:lt,setup(e){const t=ae(Pe,null);return t||ot("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:t.paneStyleRef,class:t.paneClassRef,mergedClsPrefix:t.mergedClsPrefixRef}},render(){return i("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),Jr=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},tr(lt,["displayDirective"])),Re=D({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:Jr,setup(e){const{mergedClsPrefixRef:t,valueRef:r,typeRef:s,closableRef:o,tabStyleRef:f,tabChangeIdRef:c,onBeforeLeaveRef:u,triggerRef:p,handleAdd:y,activateTab:g,handleClose:S}=ae(Pe);return{trigger:p,mergedClosable:W(()=>{if(e.internalAddable)return!1;const{closable:x}=e;return x===void 0?o.value:x}),style:f,clsPrefix:t,value:r,type:s,handleClose(x){x.stopPropagation(),!e.disabled&&S(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){y();return}const{name:x}=e,R=++c.id;if(x!==r.value){const{value:E}=u;E?Promise.resolve(E(e.name,r.value)).then(k=>{k&&c.id===R&&g(x)}):g(x)}}}},render(){const{internalAddable:e,clsPrefix:t,name:r,disabled:s,label:o,tab:f,value:c,mergedClosable:u,style:p,trigger:y,$slots:{default:g}}=this,S=o!=null?o:f;return i("div",{class:`${t}-tabs-tab-wrapper`},this.internalLeftPadded?i("div",{class:`${t}-tabs-tab-pad`}):null,i("div",Object.assign({key:r,"data-name":r,"data-disabled":s?!0:void 0},tt({class:[`${t}-tabs-tab`,c===r&&`${t}-tabs-tab--active`,s&&`${t}-tabs-tab--disabled`,u&&`${t}-tabs-tab--closable`,e&&`${t}-tabs-tab--addable`],onClick:y==="click"?this.activateTab:void 0,onMouseenter:y==="hover"?this.activateTab:void 0,style:e?void 0:p},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),i("span",{class:`${t}-tabs-tab__label`},e?i(st,null,i("div",{class:`${t}-tabs-tab__height-placeholder`},"\xA0"),i(Zt,{clsPrefix:t},{default:()=>i(Ar,null)})):g?g():typeof S=="object"?S:er(S!=null?S:r)),u&&this.type==="card"?i(it,{clsPrefix:t,class:`${t}-tabs-tab__close`,onClick:this.handleClose,disabled:s}):null))}}),Qr=b("tabs",`
 box-sizing: border-box;
 width: 100%;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[C("segment-type",[b("tabs-rail",[d("&.transition-disabled","color: red;",[b("tabs-tab",`
 transition: none;
 `)])])]),b("tabs-rail",`
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[b("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[b("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[C("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 `),d("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),C("flex",[b("tabs-nav",{width:"100%"},[b("tabs-wrapper",{width:"100%"},[b("tabs-tab",{marginRight:0})])])]),b("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[L("prefix, suffix",`
 display: flex;
 align-items: center;
 `),L("prefix","padding-right: 16px;"),L("suffix","padding-left: 16px;")]),b("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[C("shadow-before",[d("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),C("shadow-after",[d("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),d("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 20px;
 z-index: 1;
 `),d("&::before",`
 left: 0;
 `),d("&::after",`
 right: 0;
 `)]),b("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 width: fit-content;
 `),b("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),b("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),b("tabs-tab",`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[C("disabled",{cursor:"not-allowed"}),L("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),L("label",`
 display: flex;
 align-items: center;
 `)]),b("tabs-bar",`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[d("&.transition-disabled",`
 transition: none;
 `),C("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),b("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),b("tab-pane",`
 color: var(--n-pane-text-color);
 width: 100%;
 padding: var(--n-pane-padding);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[d("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),d("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),d("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),d("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),d("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),b("tabs-tab-pad",`
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),C("line-type, bar-type",[b("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[d("&:hover",{color:"var(--n-tab-text-color-hover)"}),C("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),C("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),b("tabs-nav",[C("line-type",[L("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),b("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),b("tabs-bar",`
 border-radius: 0;
 bottom: -1px;
 `)]),C("card-type",[L("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),b("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),b("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),b("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[C("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 `,[L("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),rr("disabled",[d("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),C("closable","padding-right: 6px;"),C("active",`
 border-bottom: 1px solid #0000;
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),C("disabled","color: var(--n-tab-text-color-disabled);")]),b("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);")])])]),Zr=Object.assign(Object.assign({},ie.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},tabStyle:[String,Object],barWidth:Number,paneClass:String,paneStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),an=D({name:"Tabs",props:Zr,setup(e,{slots:t}){var r,s,o,f;const{mergedClsPrefixRef:c,inlineThemeDisabled:u}=nt(e),p=ie("Tabs","-tabs",Qr,ar,e,c),y=T(null),g=T(null),S=T(null),x=T(null),R=T(null),E=T(!0),k=T(!0),v=We(e,["labelSize","size"]),A=We(e,["activeName","value"]),P=T((s=(r=A.value)!==null&&r!==void 0?r:e.defaultValue)!==null&&s!==void 0?s:t.default?(f=(o=me(t.default())[0])===null||o===void 0?void 0:o.props)===null||f===void 0?void 0:f.name:null),_=Ce(A,P),z={id:0},h=W(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});K(_,()=>{z.id=0,B()});function l(){var n;const{value:a}=_;return a===null?null:(n=y.value)===null||n===void 0?void 0:n.querySelector(`[data-name="${a}"]`)}function w(n){if(e.type==="card")return;const{value:a}=g;if(!!a&&n){const m=`${c.value}-tabs-bar--disabled`,{barWidth:$}=e;if(n.dataset.disabled==="true"?a.classList.add(m):a.classList.remove(m),typeof $=="number"&&n.offsetWidth>=$){const U=Math.floor((n.offsetWidth-$)/2)+n.offsetLeft;a.style.left=`${U}px`,a.style.maxWidth=`${$}px`}else a.style.left=`${n.offsetLeft}px`,a.style.maxWidth=`${n.offsetWidth}px`;a.style.width="8192px",a.offsetWidth}}function B(){if(e.type==="card")return;const n=l();n&&w(n)}const F=T(null);let Y=0,I=null;function se(n){const a=F.value;if(a){Y=n.getBoundingClientRect().height;const m=`${Y}px`,$=()=>{a.style.height=m,a.style.maxHeight=m};I?($(),I(),I=null):I=$}}function le(n){const a=F.value;if(a){const m=n.getBoundingClientRect().height,$=()=>{document.body.offsetHeight,a.style.maxHeight=`${m}px`,a.style.height=`${Math.max(Y,m)}px`};I?(I(),I=null,$()):I=$}}function de(){const n=F.value;n&&(n.style.maxHeight="",n.style.height="")}const J={value:[]},Q=T("next");function ce(n){const a=_.value;let m="next";for(const $ of J.value){if($===a)break;if($===n){m="prev";break}}Q.value=m,fe(n)}function fe(n){const{onActiveNameChange:a,onUpdateValue:m,"onUpdate:value":$}=e;a&&O(a,n),m&&O(m,n),$&&O($,n),P.value=n}function ue(n){const{onClose:a}=e;a&&O(a,n)}function Z(){const{value:n}=g;if(!n)return;const a="transition-disabled";n.classList.add(a),B(),n.classList.remove(a)}let ee=0;function be(n){var a;if(n.contentRect.width===0&&n.contentRect.height===0||ee===n.contentRect.width)return;ee=n.contentRect.width;const{type:m}=e;(m==="line"||m==="bar")&&Z(),m!=="segment"&&V((a=R.value)===null||a===void 0?void 0:a.$el)}const he=Se(be,64);K([()=>e.justifyContent,()=>e.size],()=>{ye(()=>{const{type:n}=e;(n==="line"||n==="bar")&&Z()})});const H=T(!1);function ve(n){var a;const{target:m,contentRect:{width:$}}=n,U=m.parentElement.offsetWidth;if(!H.value)U<$&&(H.value=!0);else{const{value:te}=x;if(!te)return;U-$>te.$el.offsetWidth&&(H.value=!1)}V((a=R.value)===null||a===void 0?void 0:a.$el)}const pe=Se(ve,64);function ge(){const{onAdd:n}=e;n&&n(),ye(()=>{const a=l(),{value:m}=R;!a||!m||m.scrollTo({left:a.offsetLeft,top:0,behavior:"smooth"})})}function V(n){if(!n)return;const{scrollLeft:a,scrollWidth:m,offsetWidth:$}=n;E.value=a<=0,k.value=a+$>=m}const dt=Se(n=>{V(n.target)},64);G(Pe,{triggerRef:j(e,"trigger"),tabStyleRef:j(e,"tabStyle"),paneClassRef:j(e,"paneClass"),paneStyleRef:j(e,"paneStyle"),mergedClsPrefixRef:c,typeRef:j(e,"type"),closableRef:j(e,"closable"),valueRef:_,tabChangeIdRef:z,onBeforeLeaveRef:j(e,"onBeforeLeave"),activateTab:ce,handleClose:ue,handleAdd:ge}),nr(()=>{B()}),Ze(()=>{const{value:n}=S;if(!n)return;const{value:a}=c,m=`${a}-tabs-nav-scroll-wrapper--shadow-before`,$=`${a}-tabs-nav-scroll-wrapper--shadow-after`;E.value?n.classList.remove(m):n.classList.add(m),k.value?n.classList.remove($):n.classList.add($)});const Ee=T(null);K(_,()=>{if(e.type==="segment"){const n=Ee.value;n&&ye(()=>{n.classList.add("transition-disabled"),n.offsetWidth,n.classList.remove("transition-disabled")})}});const ct={syncBarPosition:()=>{B()}},Ae=W(()=>{const{value:n}=v,{type:a}=e,m={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[a],$=`${n}${m}`,{self:{barColor:U,closeIconColor:te,closeIconColorHover:ft,closeIconColorPressed:ut,tabColor:bt,tabBorderColor:ht,paneTextColor:vt,tabFontWeight:pt,tabBorderRadius:gt,tabFontWeightActive:mt,colorSegment:yt,fontWeightStrong:wt,tabColorSegment:xt,closeSize:St,closeIconSize:zt,closeColorHover:$t,closeColorPressed:Ct,closeBorderRadius:Rt,[M("panePadding",n)]:Tt,[M("tabPadding",$)]:Bt,[M("tabGap",$)]:kt,[M("tabTextColor",a)]:Pt,[M("tabTextColorActive",a)]:Et,[M("tabTextColorHover",a)]:At,[M("tabTextColorDisabled",a)]:_t,[M("tabFontSize",n)]:Lt},common:{cubicBezierEaseInOut:Wt}}=p.value;return{"--n-bezier":Wt,"--n-color-segment":yt,"--n-bar-color":U,"--n-tab-font-size":Lt,"--n-tab-text-color":Pt,"--n-tab-text-color-active":Et,"--n-tab-text-color-disabled":_t,"--n-tab-text-color-hover":At,"--n-pane-text-color":vt,"--n-tab-border-color":ht,"--n-tab-border-radius":gt,"--n-close-size":St,"--n-close-icon-size":zt,"--n-close-color-hover":$t,"--n-close-color-pressed":Ct,"--n-close-border-radius":Rt,"--n-close-icon-color":te,"--n-close-icon-color-hover":ft,"--n-close-icon-color-pressed":ut,"--n-tab-color":bt,"--n-tab-font-weight":pt,"--n-tab-font-weight-active":mt,"--n-tab-padding":Bt,"--n-tab-gap":kt,"--n-pane-padding":Tt,"--n-font-weight-strong":wt,"--n-tab-color-segment":xt}}),N=u?at("tabs",W(()=>`${v.value[0]}${e.type[0]}`),Ae,e):void 0;return Object.assign({mergedClsPrefix:c,mergedValue:_,renderedNames:new Set,tabsRailElRef:Ee,tabsPaneWrapperRef:F,tabsElRef:y,barElRef:g,addTabInstRef:x,xScrollInstRef:R,scrollWrapperElRef:S,addTabFixed:H,tabWrapperStyle:h,handleNavResize:he,mergedSize:v,handleScroll:dt,handleTabsResize:pe,cssVars:u?void 0:Ae,themeClass:N==null?void 0:N.themeClass,animationDirection:Q,renderNameListRef:J,onAnimationBeforeLeave:se,onAnimationEnter:le,onAnimationAfterEnter:de,onRender:N==null?void 0:N.onRender},ct)},render(){const{mergedClsPrefix:e,type:t,addTabFixed:r,addable:s,mergedSize:o,renderNameListRef:f,onRender:c,$slots:{default:u,prefix:p,suffix:y}}=this;c==null||c();const g=u?me(u()).filter(v=>v.type.__TAB_PANE__===!0):[],S=u?me(u()).filter(v=>v.type.__TAB__===!0):[],x=!S.length,R=t==="card",E=t==="segment",k=!R&&!E&&this.justifyContent;return f.value=[],i("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${t}-type`,`${e}-tabs--${o}-size`,k&&`${e}-tabs--flex`],style:this.cssVars},i("div",{class:[`${e}-tabs-nav--${t}-type`,`${e}-tabs-nav`]},Oe(p,v=>v&&i("div",{class:`${e}-tabs-nav__prefix`},v)),E?i("div",{class:`${e}-tabs-rail`,ref:"tabsRailElRef"},x?g.map((v,A)=>(f.value.push(v.props.name),i(Re,Object.assign({},v.props,{internalCreatedByPane:!0,internalLeftPadded:A!==0}),v.children?{default:v.children.tab}:void 0))):S.map((v,A)=>(f.value.push(v.props.name),A===0?v:Qe(v)))):i(Ie,{onResize:this.handleNavResize},{default:()=>i("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},i(vr,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:()=>{const v=i("div",{style:this.tabWrapperStyle,class:`${e}-tabs-wrapper`},k?null:i("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}),x?g.map((P,_)=>(f.value.push(P.props.name),ze(i(Re,Object.assign({},P.props,{internalCreatedByPane:!0,internalLeftPadded:_!==0&&(!k||k==="center"||k==="start"||k==="end")}),P.children?{default:P.children.tab}:void 0)))):S.map((P,_)=>(f.value.push(P.props.name),ze(_!==0&&!k?Qe(P):P))),!r&&s&&R?Je(s,(x?g.length:S.length)!==0):null,k?null:i("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));let A=v;return R&&s&&(A=i(Ie,{onResize:this.handleTabsResize},{default:()=>v})),i("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},A,R?i("div",{class:`${e}-tabs-pad`}):null,R?null:i("div",{ref:"barElRef",class:`${e}-tabs-bar`}))}}))}),r&&s&&R?Je(s,!0):null,Oe(y,v=>v&&i("div",{class:`${e}-tabs-nav__suffix`},v))),x&&(this.animated?i("div",{ref:"tabsPaneWrapperRef",class:`${e}-tabs-pane-wrapper`},Ge(g,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):Ge(g,this.mergedValue,this.renderedNames)))}});function Ge(e,t,r,s,o,f,c){const u=[];return e.forEach(p=>{const{name:y,displayDirective:g,"display-directive":S}=p.props,x=E=>g===E||S===E,R=t===y;if(p.key!==void 0&&(p.key=y),R||x("show")||x("show:lazy")&&r.has(y)){r.has(y)||r.add(y);const E=!x("if");u.push(E?ne(p,[[$e,R]]):p)}}),c?i(or,{name:`${c}-transition`,onBeforeLeave:s,onEnter:o,onAfterEnter:f},{default:()=>u}):u}function Je(e,t){return i(Re,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:t,disabled:typeof e=="object"&&e.disabled})}function Qe(e){const t=ir(e);return t.props?t.props.internalLeftPadded=!0:t.props={internalLeftPadded:!0},t}function ze(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}const on={__name:"Popup",props:{btnText:{type:String,default:"\u663E\u793A"},title:{type:String}},setup(e){const t=e,r=T(!1);return(s,o)=>(sr(),lr(st,null,[dr("button",{onClick:o[0]||(o[0]=f=>r.value=!0)},cr(t.btnText),1),Fe(je(qr),{show:r.value,"onUpdate:show":o[1]||(o[1]=f=>r.value=f),placement:"bottom","default-height":"400",resizable:""},{default:we(()=>[Fe(je(Gr),{title:t.title,closable:""},fr({default:we(()=>[Me(s.$slots,"default")]),_:2},[t.title?void 0:{name:"header",fn:we(()=>[Me(s.$slots,"header")])}]),1032,["title"])]),_:3},8,["show"])],64))}};export{an as N,on as _,nn as a,gr as b,pr as u};
