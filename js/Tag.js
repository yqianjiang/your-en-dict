import{a as ao,r as F,b as no,c as N}from"./userDict.js";import{aO as so,aP as to,S as o,s as io,J as p,K as x,L as y,E as I,x as ho,r as go,P as Co,N as U,Y as bo,z as vo,k as L,T as uo,D as P,aQ as po,I as fo,R as d}from"./main.js";const ko=c=>{const{textColor2:h,primaryColorHover:r,primaryColorPressed:f,primaryColor:a,infoColor:i,successColor:s,warningColor:n,errorColor:t,baseColor:k,borderColor:m,opacityDisabled:g,tagColor:v,closeIconColor:e,closeIconColorHover:l,closeIconColorPressed:u,borderRadiusSmall:C,fontSizeMini:b,fontSizeTiny:z,fontSizeSmall:S,fontSizeMedium:$,heightMini:H,heightTiny:B,heightSmall:R,heightMedium:M,closeColorHover:E,closeColorPressed:T,buttonColor2Hover:_,buttonColor2Pressed:W,fontWeightStrong:w}=c;return Object.assign(Object.assign({},to),{closeBorderRadius:C,heightTiny:H,heightSmall:B,heightMedium:R,heightLarge:M,borderRadius:C,opacityDisabled:g,fontSizeTiny:b,fontSizeSmall:z,fontSizeMedium:S,fontSizeLarge:$,fontWeightStrong:w,textColorCheckable:h,textColorHoverCheckable:h,textColorPressedCheckable:h,textColorChecked:k,colorCheckable:"#0000",colorHoverCheckable:_,colorPressedCheckable:W,colorChecked:a,colorCheckedHover:r,colorCheckedPressed:f,border:`1px solid ${m}`,textColor:h,color:v,colorBordered:"rgb(250, 250, 252)",closeIconColor:e,closeIconColorHover:l,closeIconColorPressed:u,closeColorHover:E,closeColorPressed:T,borderPrimary:`1px solid ${o(a,{alpha:.3})}`,textColorPrimary:a,colorPrimary:o(a,{alpha:.12}),colorBorderedPrimary:o(a,{alpha:.1}),closeIconColorPrimary:a,closeIconColorHoverPrimary:a,closeIconColorPressedPrimary:a,closeColorHoverPrimary:o(a,{alpha:.12}),closeColorPressedPrimary:o(a,{alpha:.18}),borderInfo:`1px solid ${o(i,{alpha:.3})}`,textColorInfo:i,colorInfo:o(i,{alpha:.12}),colorBorderedInfo:o(i,{alpha:.1}),closeIconColorInfo:i,closeIconColorHoverInfo:i,closeIconColorPressedInfo:i,closeColorHoverInfo:o(i,{alpha:.12}),closeColorPressedInfo:o(i,{alpha:.18}),borderSuccess:`1px solid ${o(s,{alpha:.3})}`,textColorSuccess:s,colorSuccess:o(s,{alpha:.12}),colorBorderedSuccess:o(s,{alpha:.1}),closeIconColorSuccess:s,closeIconColorHoverSuccess:s,closeIconColorPressedSuccess:s,closeColorHoverSuccess:o(s,{alpha:.12}),closeColorPressedSuccess:o(s,{alpha:.18}),borderWarning:`1px solid ${o(n,{alpha:.35})}`,textColorWarning:n,colorWarning:o(n,{alpha:.15}),colorBorderedWarning:o(n,{alpha:.12}),closeIconColorWarning:n,closeIconColorHoverWarning:n,closeIconColorPressedWarning:n,closeColorHoverWarning:o(n,{alpha:.12}),closeColorPressedWarning:o(n,{alpha:.18}),borderError:`1px solid ${o(t,{alpha:.23})}`,textColorError:t,colorError:o(t,{alpha:.1}),colorBorderedError:o(t,{alpha:.08}),closeIconColorError:t,closeIconColorHoverError:t,closeIconColorPressedError:t,closeColorHoverError:o(t,{alpha:.12}),closeColorPressedError:o(t,{alpha:.18})})},mo={name:"Tag",common:so,self:ko},xo=mo,Po={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},yo=io("tag",`
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
`,[p("strong",`
 font-weight: var(--n-font-weight-strong);
 `),x("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),x("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),x("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),x("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 cursor: pointer;
 `),p("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[x("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),x("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),p("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),p("icon, avatar",[p("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),p("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),p("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[y("disabled",[I("&:hover","background-color: var(--n-color-hover-checkable);",[y("checked","color: var(--n-text-color-hover-checkable);")]),I("&:active","background-color: var(--n-color-pressed-checkable);",[y("checked","color: var(--n-text-color-pressed-checkable);")])]),p("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[y("disabled",[I("&:hover","background-color: var(--n-color-checked-hover);"),I("&:active","background-color: var(--n-color-checked-pressed);")])])])]),Io=Object.assign(Object.assign(Object.assign({},U.props),Po),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalStopClickPropagation:Boolean,onCheckedChange:{type:Function,validator:()=>!0,default:void 0}}),zo=fo("n-tag"),Ho=ho({name:"Tag",props:Io,setup(c){const h=go(null),{mergedBorderedRef:r,mergedClsPrefixRef:f,inlineThemeDisabled:a,mergedRtlRef:i}=Co(c),s=U("Tag","-tag",yo,xo,c,f);bo(zo,{roundRef:vo(c,"round")});function n(e){if(!c.disabled&&c.checkable){const{checked:l,onCheckedChange:u,onUpdateChecked:C,"onUpdate:checked":b}=c;C&&C(!l),b&&b(!l),u&&u(!l)}}function t(e){if(c.internalStopClickPropagation&&e.stopPropagation(),!c.disabled){const{onClose:l}=c;l&&no(l,e)}}const k={setTextContent(e){const{value:l}=h;l&&(l.textContent=e)}},m=ao("Tag",i,f),g=L(()=>{const{type:e,size:l,color:{color:u,textColor:C}={}}=c,{common:{cubicBezierEaseInOut:b},self:{padding:z,closeMargin:S,closeMarginRtl:$,borderRadius:H,opacityDisabled:B,textColorCheckable:R,textColorHoverCheckable:M,textColorPressedCheckable:E,textColorChecked:T,colorCheckable:_,colorHoverCheckable:W,colorPressedCheckable:w,colorChecked:D,colorCheckedHover:K,colorCheckedPressed:V,closeBorderRadius:A,fontWeightStrong:J,[d("colorBordered",e)]:Q,[d("closeSize",l)]:Y,[d("closeIconSize",l)]:q,[d("fontSize",l)]:G,[d("height",l)]:j,[d("color",e)]:X,[d("textColor",e)]:Z,[d("border",e)]:oo,[d("closeIconColor",e)]:O,[d("closeIconColorHover",e)]:eo,[d("closeIconColorPressed",e)]:ro,[d("closeColorHover",e)]:lo,[d("closeColorPressed",e)]:co}}=s.value;return{"--n-font-weight-strong":J,"--n-avatar-size-override":`calc(${j} - 8px)`,"--n-bezier":b,"--n-border-radius":H,"--n-border":oo,"--n-close-icon-size":q,"--n-close-color-pressed":co,"--n-close-color-hover":lo,"--n-close-border-radius":A,"--n-close-icon-color":O,"--n-close-icon-color-hover":eo,"--n-close-icon-color-pressed":ro,"--n-close-icon-color-disabled":O,"--n-close-margin":S,"--n-close-margin-rtl":$,"--n-close-size":Y,"--n-color":u||(r.value?Q:X),"--n-color-checkable":_,"--n-color-checked":D,"--n-color-checked-hover":K,"--n-color-checked-pressed":V,"--n-color-hover-checkable":W,"--n-color-pressed-checkable":w,"--n-font-size":G,"--n-height":j,"--n-opacity-disabled":B,"--n-padding":z,"--n-text-color":C||Z,"--n-text-color-checkable":R,"--n-text-color-checked":T,"--n-text-color-hover-checkable":M,"--n-text-color-pressed-checkable":E}}),v=a?uo("tag",L(()=>{let e="";const{type:l,size:u,color:{color:C,textColor:b}={}}=c;return e+=l[0],e+=u[0],C&&(e+=`a${N(C)}`),b&&(e+=`b${N(b)}`),r.value&&(e+="c"),e}),g,c):void 0;return Object.assign(Object.assign({},k),{rtlEnabled:m,mergedClsPrefix:f,contentRef:h,mergedBordered:r,handleClick:n,handleCloseClick:t,cssVars:a?void 0:g,themeClass:v==null?void 0:v.themeClass,onRender:v==null?void 0:v.onRender})},render(){var c,h;const{mergedClsPrefix:r,rtlEnabled:f,closable:a,color:{borderColor:i}={},round:s,onRender:n,$slots:t}=this;n==null||n();const k=F(t.avatar,g=>g&&P("div",{class:`${r}-tag__avatar`},g)),m=F(t.icon,g=>g&&P("div",{class:`${r}-tag__icon`},g));return P("div",{class:[`${r}-tag`,this.themeClass,{[`${r}-tag--rtl`]:f,[`${r}-tag--strong`]:this.strong,[`${r}-tag--disabled`]:this.disabled,[`${r}-tag--checkable`]:this.checkable,[`${r}-tag--checked`]:this.checkable&&this.checked,[`${r}-tag--round`]:s,[`${r}-tag--avatar`]:k,[`${r}-tag--icon`]:m,[`${r}-tag--closable`]:a}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},m||k,P("span",{class:`${r}-tag__content`,ref:"contentRef"},(h=(c=this.$slots).default)===null||h===void 0?void 0:h.call(c)),!this.checkable&&a?P(po,{clsPrefix:r,class:`${r}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:s,absolute:!0}):null,!this.checkable&&this.mergedBordered?P("div",{class:`${r}-tag__border`,style:{borderColor:i}}):null)}});export{Ho as N};
