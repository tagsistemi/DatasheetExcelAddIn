/*! For license information please see taskpane.js.LICENSE.txt */
!function(){"use strict";var t={4782:function(t,e,i){function o(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}i.r(e),i.d(e,{AccentButtonStyles:function(){return bl},Accordion:function(){return De},AccordionItem:function(){return Te},Anchor:function(){return Il},AnchoredRegion:function(){return zl},Badge:function(){return _l},Breadcrumb:function(){return Kl},BreadcrumbItem:function(){return Wl},Button:function(){return gc},Card:function(){return xd},Combobox:function(){return rh},DataGrid:function(){return qc},DataGridCell:function(){return Uc},DataGridRow:function(){return _c},DesignSystemProvider:function(){return $h},Dialog:function(){return Ph},DirectionalStyleSheetBehavior:function(){return Kc},Divider:function(){return jh},Flipper:function(){return Wh},HorizontalScroll:function(){return iu},HypertextStyles:function(){return yl},LightweightButtonStyles:function(){return xl},Listbox:function(){return au},Menu:function(){return xu},MenuItem:function(){return vu},NeutralButtonStyles:function(){return vl},NumberField:function(){return Vu},OptionStyles:function(){return uu},OutlineButtonStyles:function(){return wl},PaletteRGB:function(){return Di},Progress:function(){return Bu},ProgressRing:function(){return _u},Radio:function(){return Xu},RadioGroup:function(){return Zu},RadioStyles:function(){return Ju},Search:function(){return pp},Select:function(){return xp},Skeleton:function(){return kp},Slider:function(){return Rp},SliderLabel:function(){return Vp},StandardLuminance:function(){return Wi},StealthButtonStyles:function(){return $l},SwatchRGB:function(){return $i},Switch:function(){return Np},Tab:function(){return Kp},TabPanel:function(){return Jp},Tabs:function(){return Gp},TextArea:function(){return hf},TextField:function(){return mf},Toolbar:function(){return $f},Tooltip:function(){return Ff},TreeItem:function(){return Tf},TreeView:function(){return Df},accentBaseColor:function(){return Bn},accentFillActive:function(){return rr},accentFillActiveDelta:function(){return jo},accentFillFocus:function(){return sr},accentFillFocusDelta:function(){return Uo},accentFillHover:function(){return nr},accentFillHoverDelta:function(){return No},accentFillRecipe:function(){return ir},accentFillRest:function(){return or},accentFillRestDelta:function(){return Bo},accentForegroundActive:function(){return gr},accentForegroundActiveDelta:function(){return Go},accentForegroundCut:function(){return ya},accentForegroundCutLarge:function(){return xa},accentForegroundFocus:function(){return mr},accentForegroundFocusDelta:function(){return Wo},accentForegroundHover:function(){return fr},accentForegroundHoverDelta:function(){return qo},accentForegroundRecipe:function(){return ur},accentForegroundRest:function(){return pr},accentForegroundRestDelta:function(){return _o},accentPalette:function(){return Nn},accentStrokeControlActive:function(){return xr},accentStrokeControlFocus:function(){return wr},accentStrokeControlHover:function(){return yr},accentStrokeControlRecipe:function(){return vr},accentStrokeControlRest:function(){return br},accordionItemStyles:function(){return ll},accordionStyles:function(){return dl},allComponents:function(){return Nf},ambientShadow:function(){return ed},anchorStyles:function(){return Tl},anchoredRegionStyles:function(){return Nl},badgeStyles:function(){return Gl},baseButtonStyles:function(){return ml},baseHeightMultiplier:function(){return to},baseHorizontalSpacingMultiplier:function(){return eo},baseInputStyles:function(){return Gd},baseLayerLuminance:function(){return Mo},bodyFont:function(){return lo},breadcrumbItemStyles:function(){return tc},breadcrumbStyles:function(){return Ql},buttonStyles:function(){return vc},cardStyles:function(){return $d},checkboxStyles:function(){return Td},comboboxStyles:function(){return ah},controlCornerRadius:function(){return no},cornerRadius:function(){return ea},dataGridCellStyles:function(){return fh},dataGridRowStyles:function(){return mh},dataGridStyles:function(){return bh},density:function(){return io},designUnit:function(){return oo},dialogStyles:function(){return Mh},direction:function(){return Ji},directionalShadow:function(){return id},disabledOpacity:function(){return Zi},dividerStyles:function(){return qh},elevatedCornerRadius:function(){return ia},elevation:function(){return od},elevationShadowCardActive:function(){return hd},elevationShadowCardActiveSize:function(){return ad},elevationShadowCardFocus:function(){return ud},elevationShadowCardFocusSize:function(){return ld},elevationShadowCardHover:function(){return dd},elevationShadowCardHoverSize:function(){return sd},elevationShadowCardRest:function(){return cd},elevationShadowCardRestSize:function(){return rd},elevationShadowDialog:function(){return bd},elevationShadowDialogSize:function(){return vd},elevationShadowFlyout:function(){return md},elevationShadowFlyoutSize:function(){return gd},elevationShadowRecipe:function(){return nd},elevationShadowTooltip:function(){return fd},elevationShadowTooltipSize:function(){return pd},fillColor:function(){return tr},flipperStyles:function(){return Yh},fluentAccordion:function(){return cl},fluentAccordionItem:function(){return al},fluentAnchor:function(){return Dl},fluentAnchoredRegion:function(){return Bl},fluentBadge:function(){return ql},fluentBreadcrumb:function(){return Yl},fluentBreadcrumbItem:function(){return Zl},fluentButton:function(){return mc},fluentCalendar:function(){return Zc},fluentCard:function(){return wd},fluentCheckbox:function(){return Id},fluentCombobox:function(){return sh},fluentDataGrid:function(){return vh},fluentDataGridCell:function(){return ph},fluentDataGridRow:function(){return gh},fluentDesignSystemProvider:function(){return kh},fluentDialog:function(){return Hh},fluentDivider:function(){return _h},fluentFlipper:function(){return Xh},fluentHorizontalScroll:function(){return ou},fluentListbox:function(){return lu},fluentMenu:function(){return wu},fluentMenuItem:function(){return Cu},fluentNumberField:function(){return zu},fluentOption:function(){return hu},fluentProgress:function(){return Nu},fluentProgressRing:function(){return qu},fluentRadio:function(){return Qu},fluentRadioGroup:function(){return ep},fluentSearch:function(){return fp},fluentSelect:function(){return wp},fluentSkeleton:function(){return Fp},fluentSlider:function(){return Ep},fluentSliderLabel:function(){return zp},fluentSwitch:function(){return Up},fluentTab:function(){return Yp},fluentTabPanel:function(){return tf},fluentTabs:function(){return of},fluentTextArea:function(){return uf},fluentTextField:function(){return vf},fluentToolbar:function(){return kf},fluentTooltip:function(){return Sf},fluentTreeItem:function(){return Mf},fluentTreeView:function(){return Of},focusOutlineWidth:function(){return na},focusStrokeInner:function(){return Bs},focusStrokeInnerRecipe:function(){return Ms},focusStrokeOuter:function(){return Hs},focusStrokeOuterRecipe:function(){return zs},focusStrokeWidth:function(){return ao},focusTreatmentBase:function(){return tl},focusTreatmentTight:function(){return el},fontWeight:function(){return co},foregroundOnAccentActive:function(){return dr},foregroundOnAccentActiveLarge:function(){return _s},foregroundOnAccentFocus:function(){return hr},foregroundOnAccentFocusLarge:function(){return qs},foregroundOnAccentHover:function(){return cr},foregroundOnAccentHoverLarge:function(){return Us},foregroundOnAccentLargeRecipe:function(){return Ns},foregroundOnAccentRecipe:function(){return ar},foregroundOnAccentRest:function(){return lr},foregroundOnAccentRestLarge:function(){return js},heightNumber:function(){return il},horizontalScrollStyles:function(){return nu},inputFilledStyles:function(){return Xd},inputForcedColorStyles:function(){return Yd},inputOutlineStyles:function(){return Kd},inputStateStyles:function(){return Wd},isDark:function(){return Si},layerCornerRadius:function(){return ro},listboxStyles:function(){return cu},menuItemStyles:function(){return Fu},menuStyles:function(){return $u},neutralBaseColor:function(){return Hn},neutralContrastFillActive:function(){return Fa},neutralContrastFillActiveDelta:function(){return aa},neutralContrastFillFocus:function(){return Sa},neutralContrastFillFocusDelta:function(){return la},neutralContrastFillHover:function(){return Ca},neutralContrastFillHoverDelta:function(){return sa},neutralContrastFillRest:function(){return ka},neutralContrastFillRestDelta:function(){return ra},neutralDivider:function(){return wa},neutralDividerRestDelta:function(){return fa},neutralFillActive:function(){return Fr},neutralFillActiveDelta:function(){return Yo},neutralFillCard:function(){return $a},neutralFillCardDelta:function(){return ca},neutralFillFocus:function(){return Sr},neutralFillFocusDelta:function(){return Qo},neutralFillHover:function(){return Cr},neutralFillHoverDelta:function(){return Xo},neutralFillInputActive:function(){return Rr},neutralFillInputActiveDelta:function(){return tn},neutralFillInputAltActive:function(){return Vr},neutralFillInputAltActiveDelta:function(){return rn},neutralFillInputAltFocus:function(){return Pr},neutralFillInputAltFocusDelta:function(){return sn},neutralFillInputAltHover:function(){return Lr},neutralFillInputAltHoverDelta:function(){return nn},neutralFillInputAltRecipe:function(){return Er},neutralFillInputAltRest:function(){return Ar},neutralFillInputAltRestDelta:function(){return on},neutralFillInputFocus:function(){return Or},neutralFillInputFocusDelta:function(){return en},neutralFillInputHover:function(){return Dr},neutralFillInputHoverDelta:function(){return Zo},neutralFillInputRecipe:function(){return Ir},neutralFillInputRest:function(){return Tr},neutralFillInputRestDelta:function(){return Jo},neutralFillInverseActive:function(){return Zs},neutralFillInverseActiveDelta:function(){return Ks},neutralFillInverseFocus:function(){return ta},neutralFillInverseFocusDelta:function(){return Xs},neutralFillInverseHover:function(){return Js},neutralFillInverseHoverDelta:function(){return Ws},neutralFillInverseRecipe:function(){return Ys},neutralFillInverseRest:function(){return Qs},neutralFillInverseRestDelta:function(){return Gs},neutralFillLayerActive:function(){return Br},neutralFillLayerActiveDelta:function(){return cn},neutralFillLayerAltRecipe:function(){return Nr},neutralFillLayerAltRest:function(){return jr},neutralFillLayerAltRestDelta:function(){return dn},neutralFillLayerHover:function(){return Mr},neutralFillLayerHoverDelta:function(){return ln},neutralFillLayerRecipe:function(){return zr},neutralFillLayerRest:function(){return Hr},neutralFillLayerRestDelta:function(){return an},neutralFillRecipe:function(){return $r},neutralFillRest:function(){return kr},neutralFillRestDelta:function(){return Ko},neutralFillSecondaryActive:function(){return Gr},neutralFillSecondaryActiveDelta:function(){return pn},neutralFillSecondaryFocus:function(){return Wr},neutralFillSecondaryFocusDelta:function(){return fn},neutralFillSecondaryHover:function(){return qr},neutralFillSecondaryHoverDelta:function(){return un},neutralFillSecondaryRecipe:function(){return Ur},neutralFillSecondaryRest:function(){return _r},neutralFillSecondaryRestDelta:function(){return hn},neutralFillStealthActive:function(){return Qr},neutralFillStealthActiveDelta:function(){return vn},neutralFillStealthFocus:function(){return Jr},neutralFillStealthFocusDelta:function(){return bn},neutralFillStealthHover:function(){return Yr},neutralFillStealthHoverDelta:function(){return mn},neutralFillStealthRecipe:function(){return Kr},neutralFillStealthRest:function(){return Xr},neutralFillStealthRestDelta:function(){return gn},neutralFillStrongActive:function(){return is},neutralFillStrongActiveDelta:function(){return wn},neutralFillStrongFocus:function(){return os},neutralFillStrongFocusDelta:function(){return $n},neutralFillStrongHover:function(){return es},neutralFillStrongHoverDelta:function(){return xn},neutralFillStrongRecipe:function(){return Zr},neutralFillStrongRest:function(){return ts},neutralFillStrongRestDelta:function(){return yn},neutralFillToggleActive:function(){return Da},neutralFillToggleActiveDelta:function(){return ua},neutralFillToggleFocus:function(){return Ra},neutralFillToggleFocusDelta:function(){return pa},neutralFillToggleHover:function(){return Ta},neutralFillToggleHoverDelta:function(){return ha},neutralFillToggleRest:function(){return Ia},neutralFillToggleRestDelta:function(){return da},neutralFocus:function(){return Oa},neutralFocusInnerAccent:function(){return Ea},neutralForegroundActive:function(){return as},neutralForegroundFocus:function(){return ls},neutralForegroundHint:function(){return ds},neutralForegroundHintRecipe:function(){return cs},neutralForegroundHover:function(){return ss},neutralForegroundRecipe:function(){return ns},neutralForegroundRest:function(){return rs},neutralLayer1:function(){return Wn},neutralLayer1Recipe:function(){return Gn},neutralLayer2:function(){return Xn},neutralLayer2Recipe:function(){return Kn},neutralLayer3:function(){return Qn},neutralLayer3Recipe:function(){return Yn},neutralLayer4:function(){return Zn},neutralLayer4Recipe:function(){return Jn},neutralLayerCardContainer:function(){return Un},neutralLayerCardContainerRecipe:function(){return jn},neutralLayerFloating:function(){return qn},neutralLayerFloatingRecipe:function(){return _n},neutralLayerL1:function(){return ga},neutralLayerL2:function(){return ma},neutralLayerL3:function(){return va},neutralLayerL4:function(){return ba},neutralOutlineActive:function(){return Va},neutralOutlineFocus:function(){return Pa},neutralOutlineHover:function(){return La},neutralOutlineRest:function(){return Aa},neutralPalette:function(){return Mn},neutralStrokeActive:function(){return fs},neutralStrokeActiveDelta:function(){return Fn},neutralStrokeControlActive:function(){return ys},neutralStrokeControlActiveDelta:function(){return Dn},neutralStrokeControlFocus:function(){return xs},neutralStrokeControlFocusDelta:function(){return Rn},neutralStrokeControlHover:function(){return bs},neutralStrokeControlHoverDelta:function(){return Tn},neutralStrokeControlRecipe:function(){return ms},neutralStrokeControlRest:function(){return vs},neutralStrokeControlRestDelta:function(){return In},neutralStrokeDividerRecipe:function(){return ws},neutralStrokeDividerRest:function(){return $s},neutralStrokeDividerRestDelta:function(){return On},neutralStrokeFocus:function(){return gs},neutralStrokeFocusDelta:function(){return Sn},neutralStrokeHover:function(){return ps},neutralStrokeHoverDelta:function(){return Cn},neutralStrokeInputActive:function(){return Ss},neutralStrokeInputFocus:function(){return Is},neutralStrokeInputHover:function(){return Fs},neutralStrokeInputRecipe:function(){return ks},neutralStrokeInputRest:function(){return Cs},neutralStrokeLayerActive:function(){return Os},neutralStrokeLayerActiveDelta:function(){return Ln},neutralStrokeLayerHover:function(){return Rs},neutralStrokeLayerHoverDelta:function(){return An},neutralStrokeLayerRecipe:function(){return Ts},neutralStrokeLayerRest:function(){return Ds},neutralStrokeLayerRestDelta:function(){return En},neutralStrokeRecipe:function(){return hs},neutralStrokeRest:function(){return us},neutralStrokeRestDelta:function(){return kn},neutralStrokeStrongActive:function(){return Vs},neutralStrokeStrongActiveDelta:function(){return Pn},neutralStrokeStrongFocus:function(){return Ps},neutralStrokeStrongFocusDelta:function(){return zn},neutralStrokeStrongHover:function(){return Ls},neutralStrokeStrongHoverDelta:function(){return Vn},neutralStrokeStrongRecipe:function(){return Es},neutralStrokeStrongRest:function(){return As},numberFieldStyles:function(){return Pu},outlineWidth:function(){return oa},progressRingStyles:function(){return Gu},progressStyles:function(){return ju},provideFluentDesignSystem:function(){return Yf},radioGroupStyles:function(){return ip},searchStyles:function(){return gp},searchTemplate:function(){return lp},selectStyles:function(){return $p},skeletonStyles:function(){return Sp},sliderLabelStyles:function(){return Hp},sliderStyles:function(){return Ap},strokeWidth:function(){return so},switchStyles:function(){return _p},tabPanelStyles:function(){return ef},tabStyles:function(){return Qp},tabsStyles:function(){return nf},textAreaStyles:function(){return pf},textFieldStyles:function(){return bf},treeItemStyles:function(){return Bf},treeViewStyles:function(){return Ef},typeRampBase:function(){return za},typeRampBaseFontSize:function(){return uo},typeRampBaseFontVariations:function(){return fo},typeRampBaseLineHeight:function(){return po},typeRampMinus1:function(){return Ha},typeRampMinus1FontSize:function(){return go},typeRampMinus1FontVariations:function(){return vo},typeRampMinus1LineHeight:function(){return mo},typeRampMinus2:function(){return Ma},typeRampMinus2FontSize:function(){return bo},typeRampMinus2FontVariations:function(){return xo},typeRampMinus2LineHeight:function(){return yo},typeRampPlus1:function(){return Ba},typeRampPlus1FontSize:function(){return wo},typeRampPlus1FontVariations:function(){return ko},typeRampPlus1LineHeight:function(){return $o},typeRampPlus2:function(){return Na},typeRampPlus2FontSize:function(){return Co},typeRampPlus2FontVariations:function(){return So},typeRampPlus2LineHeight:function(){return Fo},typeRampPlus3:function(){return ja},typeRampPlus3FontSize:function(){return Io},typeRampPlus3FontVariations:function(){return Do},typeRampPlus3LineHeight:function(){return To},typeRampPlus4:function(){return Ua},typeRampPlus4FontSize:function(){return Ro},typeRampPlus4FontVariations:function(){return Eo},typeRampPlus4LineHeight:function(){return Oo},typeRampPlus5:function(){return _a},typeRampPlus5FontSize:function(){return Ao},typeRampPlus5FontVariations:function(){return Vo},typeRampPlus5LineHeight:function(){return Lo},typeRampPlus6:function(){return qa},typeRampPlus6FontSize:function(){return Po},typeRampPlus6FontVariations:function(){return Ho},typeRampPlus6LineHeight:function(){return zo}});const n=function(){if("undefined"!=typeof globalThis)return globalThis;if("undefined"!=typeof global)return global;if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;try{return new Function("return this")()}catch(t){return{}}}();void 0===n.trustedTypes&&(n.trustedTypes={createPolicy:(t,e)=>e});const r={configurable:!1,enumerable:!1,writable:!1};void 0===n.FAST&&Reflect.defineProperty(n,"FAST",Object.assign({value:Object.create(null)},r));const s=n.FAST;if(void 0===s.getById){const t=Object.create(null);Reflect.defineProperty(s,"getById",Object.assign({value(e,i){let o=t[e];return void 0===o&&(o=i?t[e]=i():null),o}},r))}const a=Object.freeze([]);function l(){const t=new WeakMap;return function(e){let i=t.get(e);if(void 0===i){let o=Reflect.getPrototypeOf(e);for(;void 0===i&&null!==o;)i=t.get(o),o=Reflect.getPrototypeOf(o);i=void 0===i?[]:i.slice(0),t.set(e,i)}return i}}const c=n.FAST.getById(1,(()=>{const t=[],e=[];function i(){if(e.length)throw e.shift()}function o(t){try{t.call()}catch(t){e.push(t),setTimeout(i,0)}}function r(){let e=0;for(;e<t.length;)if(o(t[e]),e++,e>1024){for(let i=0,o=t.length-e;i<o;i++)t[i]=t[i+e];t.length-=e,e=0}t.length=0}return Object.freeze({enqueue:function(e){t.length<1&&n.requestAnimationFrame(r),t.push(e)},process:r})})),d=n.trustedTypes.createPolicy("fast-html",{createHTML:t=>t});let h=d;const u=`fast-${Math.random().toString(36).substring(2,8)}`,p=`${u}{`,f=`}${u}`,g=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(t){if(h!==d)throw new Error("The HTML policy can only be set once.");h=t},createHTML(t){return h.createHTML(t)},isMarker(t){return t&&8===t.nodeType&&t.data.startsWith(u)},extractDirectiveIndexFromMarker(t){return parseInt(t.data.replace(`${u}:`,""))},createInterpolationPlaceholder(t){return`${p}${t}${f}`},createCustomAttributePlaceholder(t,e){return`${t}="${this.createInterpolationPlaceholder(e)}"`},createBlockPlaceholder(t){return`\x3c!--${u}:${t}--\x3e`},queueUpdate:c.enqueue,processUpdates:c.process,nextUpdate(){return new Promise(c.enqueue)},setAttribute(t,e,i){null==i?t.removeAttribute(e):t.setAttribute(e,i)},setBooleanAttribute(t,e,i){i?t.setAttribute(e,""):t.removeAttribute(e)},removeChildNodes(t){for(let e=t.firstChild;null!==e;e=t.firstChild)t.removeChild(e)},createTemplateWalker(t){return document.createTreeWalker(t,133,null,!1)}});class m{constructor(t,e){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=t,this.sub1=e}has(t){return void 0===this.spillover?this.sub1===t||this.sub2===t:-1!==this.spillover.indexOf(t)}subscribe(t){const e=this.spillover;if(void 0===e){if(this.has(t))return;if(void 0===this.sub1)return void(this.sub1=t);if(void 0===this.sub2)return void(this.sub2=t);this.spillover=[this.sub1,this.sub2,t],this.sub1=void 0,this.sub2=void 0}else-1===e.indexOf(t)&&e.push(t)}unsubscribe(t){const e=this.spillover;if(void 0===e)this.sub1===t?this.sub1=void 0:this.sub2===t&&(this.sub2=void 0);else{const i=e.indexOf(t);-1!==i&&e.splice(i,1)}}notify(t){const e=this.spillover,i=this.source;if(void 0===e){const e=this.sub1,o=this.sub2;void 0!==e&&e.handleChange(i,t),void 0!==o&&o.handleChange(i,t)}else for(let o=0,n=e.length;o<n;++o)e[o].handleChange(i,t)}}class v{constructor(t){this.subscribers={},this.sourceSubscribers=null,this.source=t}notify(t){var e;const i=this.subscribers[t];void 0!==i&&i.notify(t),null===(e=this.sourceSubscribers)||void 0===e||e.notify(t)}subscribe(t,e){var i;if(e){let i=this.subscribers[e];void 0===i&&(this.subscribers[e]=i=new m(this.source)),i.subscribe(t)}else this.sourceSubscribers=null!==(i=this.sourceSubscribers)&&void 0!==i?i:new m(this.source),this.sourceSubscribers.subscribe(t)}unsubscribe(t,e){var i;if(e){const i=this.subscribers[e];void 0!==i&&i.unsubscribe(t)}else null===(i=this.sourceSubscribers)||void 0===i||i.unsubscribe(t)}}const b=s.getById(2,(()=>{const t=/(:|&&|\|\||if)/,e=new WeakMap,i=g.queueUpdate;let o,n=t=>{throw new Error("Must call enableArrayObservation before observing arrays.")};function r(t){let i=t.$fastController||e.get(t);return void 0===i&&(Array.isArray(t)?i=n(t):e.set(t,i=new v(t))),i}const s=l();class a{constructor(t){this.name=t,this.field=`_${t}`,this.callback=`${t}Changed`}getValue(t){return void 0!==o&&o.watch(t,this.name),t[this.field]}setValue(t,e){const i=this.field,o=t[i];if(o!==e){t[i]=e;const n=t[this.callback];"function"==typeof n&&n.call(t,o,e),r(t).notify(this.name)}}}class c extends m{constructor(t,e,i=!1){super(t,e),this.binding=t,this.isVolatileBinding=i,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(t,e){this.needsRefresh&&null!==this.last&&this.disconnect();const i=o;o=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const n=this.binding(t,e);return o=i,n}disconnect(){if(null!==this.last){let t=this.first;for(;void 0!==t;)t.notifier.unsubscribe(this,t.propertyName),t=t.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(t,e){const i=this.last,n=r(t),s=null===i?this.first:{};if(s.propertySource=t,s.propertyName=e,s.notifier=n,n.subscribe(this,e),null!==i){if(!this.needsRefresh){let e;o=void 0,e=i.propertySource[i.propertyName],o=this,t===e&&(this.needsRefresh=!0)}i.next=s}this.last=s}handleChange(){this.needsQueue&&(this.needsQueue=!1,i(this))}call(){null!==this.last&&(this.needsQueue=!0,this.notify(this))}records(){let t=this.first;return{next:()=>{const e=t;return void 0===e?{value:void 0,done:!0}:(t=t.next,{value:e,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(t){n=t},getNotifier:r,track(t,e){void 0!==o&&o.watch(t,e)},trackVolatile(){void 0!==o&&(o.needsRefresh=!0)},notify(t,e){r(t).notify(e)},defineProperty(t,e){"string"==typeof e&&(e=new a(e)),s(t).push(e),Reflect.defineProperty(t,e.name,{enumerable:!0,get:function(){return e.getValue(this)},set:function(t){e.setValue(this,t)}})},getAccessors:s,binding(t,e,i=this.isVolatileBinding(t)){return new c(t,e,i)},isVolatileBinding(e){return t.test(e.toString())}})}));function y(t,e){b.defineProperty(t,e)}const x=s.getById(3,(()=>{let t=null;return{get(){return t},set(e){t=e}}}));class w{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return x.get()}get isEven(){return this.index%2==0}get isOdd(){return this.index%2!=0}get isFirst(){return 0===this.index}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(t){x.set(t)}}b.defineProperty(w.prototype,"index"),b.defineProperty(w.prototype,"length");const $=Object.seal(new w),k=Object.freeze({locate:l()}),C={toView(t){return t?"true":"false"},fromView(t){return null!=t&&"false"!==t&&!1!==t&&0!==t}},F={toView(t){if(null==t)return null;const e=1*t;return isNaN(e)?null:e.toString()},fromView(t){if(null==t)return null;const e=1*t;return isNaN(e)?null:e}};class S{constructor(t,e,i=e.toLowerCase(),o="reflect",n){this.guards=new Set,this.Owner=t,this.name=e,this.attribute=i,this.mode=o,this.converter=n,this.fieldName=`_${e}`,this.callbackName=`${e}Changed`,this.hasCallback=this.callbackName in t.prototype,"boolean"===o&&void 0===n&&(this.converter=C)}setValue(t,e){const i=t[this.fieldName],o=this.converter;void 0!==o&&(e=o.fromView(e)),i!==e&&(t[this.fieldName]=e,this.tryReflectToAttribute(t),this.hasCallback&&t[this.callbackName](i,e),t.$fastController.notify(this.name))}getValue(t){return b.track(t,this.name),t[this.fieldName]}onAttributeChangedCallback(t,e){this.guards.has(t)||(this.guards.add(t),this.setValue(t,e),this.guards.delete(t))}tryReflectToAttribute(t){const e=this.mode,i=this.guards;i.has(t)||"fromView"===e||g.queueUpdate((()=>{i.add(t);const o=t[this.fieldName];switch(e){case"reflect":const e=this.converter;g.setAttribute(t,this.attribute,void 0!==e?e.toView(o):o);break;case"boolean":g.setBooleanAttribute(t,this.attribute,o)}i.delete(t)}))}static collect(t,...e){const i=[];e.push(k.locate(t));for(let o=0,n=e.length;o<n;++o){const n=e[o];if(void 0!==n)for(let e=0,o=n.length;e<o;++e){const o=n[e];"string"==typeof o?i.push(new S(t,o)):i.push(new S(t,o.property,o.attribute,o.mode,o.converter))}}return i}}function I(t,e){let i;function o(t,e){arguments.length>1&&(i.property=e),k.locate(t.constructor).push(i)}return arguments.length>1?(i={},void o(t,e)):(i=void 0===t?{}:t,o)}var T;!function(t){t[t.alt=18]="alt",t[t.arrowDown=40]="arrowDown",t[t.arrowLeft=37]="arrowLeft",t[t.arrowRight=39]="arrowRight",t[t.arrowUp=38]="arrowUp",t[t.back=8]="back",t[t.backSlash=220]="backSlash",t[t.break=19]="break",t[t.capsLock=20]="capsLock",t[t.closeBracket=221]="closeBracket",t[t.colon=186]="colon",t[t.colon2=59]="colon2",t[t.comma=188]="comma",t[t.ctrl=17]="ctrl",t[t.delete=46]="delete",t[t.end=35]="end",t[t.enter=13]="enter",t[t.equals=187]="equals",t[t.equals2=61]="equals2",t[t.equals3=107]="equals3",t[t.escape=27]="escape",t[t.forwardSlash=191]="forwardSlash",t[t.function1=112]="function1",t[t.function10=121]="function10",t[t.function11=122]="function11",t[t.function12=123]="function12",t[t.function2=113]="function2",t[t.function3=114]="function3",t[t.function4=115]="function4",t[t.function5=116]="function5",t[t.function6=117]="function6",t[t.function7=118]="function7",t[t.function8=119]="function8",t[t.function9=120]="function9",t[t.home=36]="home",t[t.insert=45]="insert",t[t.menu=93]="menu",t[t.minus=189]="minus",t[t.minus2=109]="minus2",t[t.numLock=144]="numLock",t[t.numPad0=96]="numPad0",t[t.numPad1=97]="numPad1",t[t.numPad2=98]="numPad2",t[t.numPad3=99]="numPad3",t[t.numPad4=100]="numPad4",t[t.numPad5=101]="numPad5",t[t.numPad6=102]="numPad6",t[t.numPad7=103]="numPad7",t[t.numPad8=104]="numPad8",t[t.numPad9=105]="numPad9",t[t.numPadDivide=111]="numPadDivide",t[t.numPadDot=110]="numPadDot",t[t.numPadMinus=109]="numPadMinus",t[t.numPadMultiply=106]="numPadMultiply",t[t.numPadPlus=107]="numPadPlus",t[t.openBracket=219]="openBracket",t[t.pageDown=34]="pageDown",t[t.pageUp=33]="pageUp",t[t.period=190]="period",t[t.print=44]="print",t[t.quote=222]="quote",t[t.scrollLock=145]="scrollLock",t[t.shift=16]="shift",t[t.space=32]="space",t[t.tab=9]="tab",t[t.tilde=192]="tilde",t[t.windowsLeft=91]="windowsLeft",t[t.windowsOpera=219]="windowsOpera",t[t.windowsRight=92]="windowsRight"}(T||(T={}));const D="ArrowDown",R="ArrowLeft",O="ArrowRight",E="ArrowUp",A="Enter",L="Escape",V="Home",P="End",z=" ",H="Tab",M={ArrowDown:D,ArrowLeft:R,ArrowRight:O,ArrowUp:E};function B(t,e,i){return i<t?e:i>e?t:i}function N(t,e,i){return Math.min(Math.max(i,t),e)}function j(t,e,i=0){return[e,i]=[e,i].sort(((t,e)=>t-e)),e<=t&&t<i}class U{constructor(){this.targets=new WeakSet}addStylesTo(t){this.targets.add(t)}removeStylesFrom(t){this.targets.delete(t)}isAttachedTo(t){return this.targets.has(t)}withBehaviors(...t){return this.behaviors=null===this.behaviors?t:this.behaviors.concat(t),this}}function _(t){return t.map((t=>t instanceof U?_(t.styles):[t])).reduce(((t,e)=>t.concat(e)),[])}function q(t){return t.map((t=>t instanceof U?t.behaviors:null)).reduce(((t,e)=>null===e?t:(null===t&&(t=[]),t.concat(e))),null)}U.create=(()=>{if(g.supportsAdoptedStyleSheets){const t=new Map;return e=>new G(e,t)}return t=>new K(t)})();class G extends U{constructor(t,e){super(),this.styles=t,this.styleSheetCache=e,this._styleSheets=void 0,this.behaviors=q(t)}get styleSheets(){if(void 0===this._styleSheets){const t=this.styles,e=this.styleSheetCache;this._styleSheets=_(t).map((t=>{if(t instanceof CSSStyleSheet)return t;let i=e.get(t);return void 0===i&&(i=new CSSStyleSheet,i.replaceSync(t),e.set(t,i)),i}))}return this._styleSheets}addStylesTo(t){t.adoptedStyleSheets=[...t.adoptedStyleSheets,...this.styleSheets],super.addStylesTo(t)}removeStylesFrom(t){const e=this.styleSheets;t.adoptedStyleSheets=t.adoptedStyleSheets.filter((t=>-1===e.indexOf(t))),super.removeStylesFrom(t)}}let W=0;class K extends U{constructor(t){super(),this.styles=t,this.behaviors=null,this.behaviors=q(t),this.styleSheets=_(t),this.styleClass="fast-style-class-"+ ++W}addStylesTo(t){const e=this.styleSheets,i=this.styleClass;t=this.normalizeTarget(t);for(let o=0;o<e.length;o++){const n=document.createElement("style");n.innerHTML=e[o],n.className=i,t.append(n)}super.addStylesTo(t)}removeStylesFrom(t){const e=(t=this.normalizeTarget(t)).querySelectorAll(`.${this.styleClass}`);for(let i=0,o=e.length;i<o;++i)t.removeChild(e[i]);super.removeStylesFrom(t)}isAttachedTo(t){return super.isAttachedTo(this.normalizeTarget(t))}normalizeTarget(t){return t===document?document.body:t}}const X={mode:"open"},Y={},Q=s.getById(4,(()=>{const t=new Map;return Object.freeze({register(e){return!t.has(e.type)&&(t.set(e.type,e),!0)},getByType(e){return t.get(e)}})}));class J{constructor(t,e=t.definition){"string"==typeof e&&(e={name:e}),this.type=t,this.name=e.name,this.template=e.template;const i=S.collect(t,e.attributes),o=new Array(i.length),n={},r={};for(let t=0,e=i.length;t<e;++t){const e=i[t];o[t]=e.attribute,n[e.name]=e,r[e.attribute]=e}this.attributes=i,this.observedAttributes=o,this.propertyLookup=n,this.attributeLookup=r,this.shadowOptions=void 0===e.shadowOptions?X:null===e.shadowOptions?void 0:Object.assign(Object.assign({},X),e.shadowOptions),this.elementOptions=void 0===e.elementOptions?Y:Object.assign(Object.assign({},Y),e.elementOptions),this.styles=void 0===e.styles?void 0:Array.isArray(e.styles)?U.create(e.styles):e.styles instanceof U?e.styles:U.create([e.styles])}get isDefined(){return!!Q.getByType(this.type)}define(t=customElements){const e=this.type;if(Q.register(this)){const t=this.attributes,i=e.prototype;for(let e=0,o=t.length;e<o;++e)b.defineProperty(i,t[e]);Reflect.defineProperty(e,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return t.get(this.name)||t.define(this.name,e,this.elementOptions),this}}J.forType=Q.getByType;const Z=new WeakMap,tt={bubbles:!0,composed:!0,cancelable:!0};function et(t){return t.shadowRoot||Z.get(t)||null}class it extends v{constructor(t,e){super(t),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=t,this.definition=e;const i=e.shadowOptions;if(void 0!==i){const e=t.attachShadow(i);"closed"===i.mode&&Z.set(t,e)}const o=b.getAccessors(t);if(o.length>0){const e=this.boundObservables=Object.create(null);for(let i=0,n=o.length;i<n;++i){const n=o[i].name,r=t[n];void 0!==r&&(delete t[n],e[n]=r)}}}get isConnected(){return b.track(this,"isConnected"),this._isConnected}setIsConnected(t){this._isConnected=t,b.notify(this,"isConnected")}get template(){return this._template}set template(t){this._template!==t&&(this._template=t,this.needsInitialization||this.renderTemplate(t))}get styles(){return this._styles}set styles(t){this._styles!==t&&(null!==this._styles&&this.removeStyles(this._styles),this._styles=t,this.needsInitialization||null===t||this.addStyles(t))}addStyles(t){const e=et(this.element)||this.element.getRootNode();if(t instanceof HTMLStyleElement)e.append(t);else if(!t.isAttachedTo(e)){const i=t.behaviors;t.addStylesTo(e),null!==i&&this.addBehaviors(i)}}removeStyles(t){const e=et(this.element)||this.element.getRootNode();if(t instanceof HTMLStyleElement)e.removeChild(t);else if(t.isAttachedTo(e)){const i=t.behaviors;t.removeStylesFrom(e),null!==i&&this.removeBehaviors(i)}}addBehaviors(t){const e=this.behaviors||(this.behaviors=new Map),i=t.length,o=[];for(let n=0;n<i;++n){const i=t[n];e.has(i)?e.set(i,e.get(i)+1):(e.set(i,1),o.push(i))}if(this._isConnected){const t=this.element;for(let e=0;e<o.length;++e)o[e].bind(t,$)}}removeBehaviors(t,e=!1){const i=this.behaviors;if(null===i)return;const o=t.length,n=[];for(let r=0;r<o;++r){const o=t[r];if(i.has(o)){const t=i.get(o)-1;0===t||e?i.delete(o)&&n.push(o):i.set(o,t)}}if(this._isConnected){const t=this.element;for(let e=0;e<n.length;++e)n[e].unbind(t)}}onConnectedCallback(){if(this._isConnected)return;const t=this.element;this.needsInitialization?this.finishInitialization():null!==this.view&&this.view.bind(t,$);const e=this.behaviors;if(null!==e)for(const[i]of e)i.bind(t,$);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const t=this.view;null!==t&&t.unbind();const e=this.behaviors;if(null!==e){const t=this.element;for(const[i]of e)i.unbind(t)}}onAttributeChangedCallback(t,e,i){const o=this.definition.attributeLookup[t];void 0!==o&&o.onAttributeChangedCallback(this.element,i)}emit(t,e,i){return!!this._isConnected&&this.element.dispatchEvent(new CustomEvent(t,Object.assign(Object.assign({detail:e},tt),i)))}finishInitialization(){const t=this.element,e=this.boundObservables;if(null!==e){const i=Object.keys(e);for(let o=0,n=i.length;o<n;++o){const n=i[o];t[n]=e[n]}this.boundObservables=null}const i=this.definition;null===this._template&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():i.template&&(this._template=i.template||null)),null!==this._template&&this.renderTemplate(this._template),null===this._styles&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():i.styles&&(this._styles=i.styles||null)),null!==this._styles&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(t){const e=this.element,i=et(e)||e;null!==this.view?(this.view.dispose(),this.view=null):this.needsInitialization||g.removeChildNodes(i),t&&(this.view=t.render(e,i,e))}static forCustomElement(t){const e=t.$fastController;if(void 0!==e)return e;const i=J.forType(t.constructor);if(void 0===i)throw new Error("Missing FASTElement definition.");return t.$fastController=new it(t,i)}}function ot(t){return class extends t{constructor(){super(),it.forCustomElement(this)}$emit(t,e,i){return this.$fastController.emit(t,e,i)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(t,e,i){this.$fastController.onAttributeChangedCallback(t,e,i)}}}const nt=Object.assign(ot(HTMLElement),{from(t){return ot(t)},define(t,e){return new J(t,e).define().type}}),rt=new Map;"metadata"in Reflect||(Reflect.metadata=function(t,e){return function(i){Reflect.defineMetadata(t,e,i)}},Reflect.defineMetadata=function(t,e,i){let o=rt.get(i);void 0===o&&rt.set(i,o=new Map),o.set(t,e)},Reflect.getOwnMetadata=function(t,e){const i=rt.get(e);if(void 0!==i)return i.get(t)});class st{constructor(t,e){this.container=t,this.key=e}instance(t){return this.registerResolver(0,t)}singleton(t){return this.registerResolver(1,t)}transient(t){return this.registerResolver(2,t)}callback(t){return this.registerResolver(3,t)}cachedCallback(t){return this.registerResolver(3,Ot(t))}aliasTo(t){return this.registerResolver(5,t)}registerResolver(t,e){const{container:i,key:o}=this;return this.container=this.key=void 0,i.registerResolver(o,new yt(o,t,e))}}function at(t){const e=t.slice(),i=Object.keys(t),o=i.length;let n;for(let r=0;r<o;++r)n=i[r],Mt(n)||(e[n]=t[n]);return e}const lt=Object.freeze({none(t){throw Error(`${t.toString()} not registered, did you forget to add @singleton()?`)},singleton(t){return new yt(t,1,t)},transient(t){return new yt(t,2,t)}}),ct=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:lt.singleton})}),dt=new Map;function ht(t){return e=>Reflect.getOwnMetadata(t,e)}let ut=null;const pt=Object.freeze({createContainer(t){return new Dt(null,Object.assign({},ct.default,t))},findResponsibleContainer(t){const e=t.$$container$$;return e&&e.responsibleForOwnerRequests?e:pt.findParentContainer(t)},findParentContainer(t){const e=new CustomEvent(It,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return t.dispatchEvent(e),e.detail.container||pt.getOrCreateDOMContainer()},getOrCreateDOMContainer(t,e){return t?t.$$container$$||new Dt(t,Object.assign({},ct.default,e,{parentLocator:pt.findParentContainer})):ut||(ut=new Dt(null,Object.assign({},ct.default,e,{parentLocator:()=>null})))},getDesignParamtypes:ht("design:paramtypes"),getAnnotationParamtypes:ht("di:paramtypes"),getOrCreateAnnotationParamTypes(t){let e=this.getAnnotationParamtypes(t);return void 0===e&&Reflect.defineMetadata("di:paramtypes",e=[],t),e},getDependencies(t){let e=dt.get(t);if(void 0===e){const i=t.inject;if(void 0===i){const i=pt.getDesignParamtypes(t),o=pt.getAnnotationParamtypes(t);if(void 0===i)if(void 0===o){const i=Object.getPrototypeOf(t);e="function"==typeof i&&i!==Function.prototype?at(pt.getDependencies(i)):[]}else e=at(o);else if(void 0===o)e=at(i);else{e=at(i);let t,n=o.length;for(let i=0;i<n;++i)t=o[i],void 0!==t&&(e[i]=t);const r=Object.keys(o);let s;n=r.length;for(let t=0;t<n;++t)s=r[t],Mt(s)||(e[s]=o[s])}}else e=at(i);dt.set(t,e)}return e},defineProperty(t,e,i,o=!1){const n=`$di_${e}`;Reflect.defineProperty(t,e,{get:function(){let t=this[n];if(void 0===t){const r=this instanceof HTMLElement?pt.findResponsibleContainer(this):pt.getOrCreateDOMContainer();if(t=r.get(i),this[n]=t,o&&this instanceof nt){const o=this.$fastController,r=()=>{pt.findResponsibleContainer(this).get(i)!==this[n]&&(this[n]=t,o.notify(e))};o.subscribe({handleChange:r},"isConnected")}}return t}})},createInterface(t,e){const i="function"==typeof t?t:e,o="string"==typeof t?t:t&&"friendlyName"in t&&t.friendlyName||Vt,n="string"!=typeof t&&(t&&"respectConnection"in t&&t.respectConnection||!1),r=function(t,e,i){if(null==t||void 0!==new.target)throw new Error(`No registration for interface: '${r.friendlyName}'`);e?pt.defineProperty(t,e,r,n):pt.getOrCreateAnnotationParamTypes(t)[i]=r};return r.$isInterface=!0,r.friendlyName=null==o?"(anonymous)":o,null!=i&&(r.register=function(t,e){return i(new st(t,null!=e?e:r))}),r.toString=function(){return`InterfaceSymbol<${r.friendlyName}>`},r},inject(...t){return function(e,i,o){if("number"==typeof o){const i=pt.getOrCreateAnnotationParamTypes(e),n=t[0];void 0!==n&&(i[o]=n)}else if(i)pt.defineProperty(e,i,t[0]);else{const i=o?pt.getOrCreateAnnotationParamTypes(o.value):pt.getOrCreateAnnotationParamTypes(e);let n;for(let e=0;e<t.length;++e)n=t[e],void 0!==n&&(i[e]=n)}}},transient(t){return t.register=function(e){return Et.transient(t,t).register(e)},t.registerInRequestor=!1,t},singleton(t,e=mt){return t.register=function(e){return Et.singleton(t,t).register(e)},t.registerInRequestor=e.scoped,t}}),ft=pt.createInterface("Container");function gt(t){return function(e){const i=function(t,e,o){pt.inject(i)(t,e,o)};return i.$isResolver=!0,i.resolve=function(i,o){return t(e,i,o)},i}}pt.inject;const mt={scoped:!1};function vt(t,e,i){pt.inject(vt)(t,e,i)}function bt(t,e){return e.getFactory(t).construct(e)}gt(((t,e,i)=>()=>i.get(t))),gt(((t,e,i)=>i.has(t,!0)?i.get(t):void 0)),vt.$isResolver=!0,vt.resolve=()=>{},gt(((t,e,i)=>{const o=bt(t,e),n=new yt(t,0,o);return i.registerResolver(t,n),o})),gt(((t,e,i)=>bt(t,e)));class yt{constructor(t,e,i){this.key=t,this.strategy=e,this.state=i,this.resolving=!1}get $isResolver(){return!0}register(t){return t.registerResolver(this.key,this)}resolve(t,e){switch(this.strategy){case 0:return this.state;case 1:if(this.resolving)throw new Error(`Cyclic dependency found: ${this.state.name}`);return this.resolving=!0,this.state=t.getFactory(this.state).construct(e),this.strategy=0,this.resolving=!1,this.state;case 2:{const i=t.getFactory(this.state);if(null===i)throw new Error(`Resolver for ${String(this.key)} returned a null factory`);return i.construct(e)}case 3:return this.state(t,e,this);case 4:return this.state[0].resolve(t,e);case 5:return e.get(this.state);default:throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(t){var e,i,o;switch(this.strategy){case 1:case 2:return t.getFactory(this.state);case 5:return null!==(o=null===(i=null===(e=t.getResolver(this.state))||void 0===e?void 0:e.getFactory)||void 0===i?void 0:i.call(e,t))&&void 0!==o?o:null;default:return null}}}function xt(t){return this.get(t)}function wt(t,e){return e(t)}class $t{constructor(t,e){this.Type=t,this.dependencies=e,this.transformers=null}construct(t,e){let i;return i=void 0===e?new this.Type(...this.dependencies.map(xt,t)):new this.Type(...this.dependencies.map(xt,t),...e),null==this.transformers?i:this.transformers.reduce(wt,i)}registerTransformer(t){(this.transformers||(this.transformers=[])).push(t)}}const kt={$isResolver:!0,resolve(t,e){return e}};function Ct(t){return"function"==typeof t.register}function Ft(t){return function(t){return Ct(t)&&"boolean"==typeof t.registerInRequestor}(t)&&t.registerInRequestor}const St=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),It="__DI_LOCATE_PARENT__",Tt=new Map;class Dt{constructor(t,e){this.owner=t,this.config=e,this._parent=void 0,this.registerDepth=0,this.context=null,null!==t&&(t.$$container$$=this),this.resolvers=new Map,this.resolvers.set(ft,kt),t instanceof Node&&t.addEventListener(It,(t=>{t.composedPath()[0]!==this.owner&&(t.detail.container=this,t.stopImmediatePropagation())}))}get parent(){return void 0===this._parent&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return null===this.parent?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}registerWithContext(t,...e){return this.context=t,this.register(...e),this.context=null,this}register(...t){if(100==++this.registerDepth)throw new Error("Unable to autoregister dependency");let e,i,o,n,r;const s=this.context;for(let a=0,l=t.length;a<l;++a)if(e=t[a],Pt(e))if(Ct(e))e.register(this,s);else if(void 0!==e.prototype)Et.singleton(e,e).register(this);else for(i=Object.keys(e),n=0,r=i.length;n<r;++n)o=e[i[n]],Pt(o)&&(Ct(o)?o.register(this,s):this.register(o));return--this.registerDepth,this}registerResolver(t,e){At(t);const i=this.resolvers,o=i.get(t);return null==o?i.set(t,e):o instanceof yt&&4===o.strategy?o.state.push(e):i.set(t,new yt(t,4,[o,e])),e}registerTransformer(t,e){const i=this.getResolver(t);if(null==i)return!1;if(i.getFactory){const t=i.getFactory(this);return null!=t&&(t.registerTransformer(e),!0)}return!1}getResolver(t,e=!0){if(At(t),void 0!==t.resolve)return t;let i,o=this;for(;null!=o;){if(i=o.resolvers.get(t),null!=i)return i;if(null==o.parent){const i=Ft(t)?this:o;return e?this.jitRegister(t,i):null}o=o.parent}return null}has(t,e=!1){return!!this.resolvers.has(t)||!(!e||null==this.parent)&&this.parent.has(t,!0)}get(t){if(At(t),t.$isResolver)return t.resolve(this,this);let e,i=this;for(;null!=i;){if(e=i.resolvers.get(t),null!=e)return e.resolve(i,this);if(null==i.parent){const o=Ft(t)?this:i;return e=this.jitRegister(t,o),e.resolve(i,this)}i=i.parent}throw new Error(`Unable to resolve key: ${t}`)}getAll(t,e=!1){At(t);const i=this;let o,n=i;if(e){let e=a;for(;null!=n;)o=n.resolvers.get(t),null!=o&&(e=e.concat(Lt(o,n,i))),n=n.parent;return e}for(;null!=n;){if(o=n.resolvers.get(t),null!=o)return Lt(o,n,i);if(n=n.parent,null==n)return a}return a}getFactory(t){let e=Tt.get(t);if(void 0===e){if(zt(t))throw new Error(`${t.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);Tt.set(t,e=new $t(t,pt.getDependencies(t)))}return e}registerFactory(t,e){Tt.set(t,e)}createChild(t){return new Dt(null,Object.assign({},this.config,t,{parentLocator:()=>this}))}jitRegister(t,e){if("function"!=typeof t)throw new Error(`Attempted to jitRegister something that is not a constructor: '${t}'. Did you forget to register this dependency?`);if(St.has(t.name))throw new Error(`Attempted to jitRegister an intrinsic type: ${t.name}. Did you forget to add @inject(Key)`);if(Ct(t)){const i=t.register(e);if(!(i instanceof Object)||null==i.resolve){const i=e.resolvers.get(t);if(null!=i)return i;throw new Error("A valid resolver was not returned from the static register method")}return i}if(t.$isInterface)throw new Error(`Attempted to jitRegister an interface: ${t.friendlyName}`);{const i=this.config.defaultResolver(t,e);return e.resolvers.set(t,i),i}}}const Rt=new WeakMap;function Ot(t){return function(e,i,o){if(Rt.has(o))return Rt.get(o);const n=t(e,i,o);return Rt.set(o,n),n}}const Et=Object.freeze({instance(t,e){return new yt(t,0,e)},singleton(t,e){return new yt(t,1,e)},transient(t,e){return new yt(t,2,e)},callback(t,e){return new yt(t,3,e)},cachedCallback(t,e){return new yt(t,3,Ot(e))},aliasTo(t,e){return new yt(e,5,t)}});function At(t){if(null==t)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function Lt(t,e,i){if(t instanceof yt&&4===t.strategy){const o=t.state;let n=o.length;const r=new Array(n);for(;n--;)r[n]=o[n].resolve(e,i);return r}return[t.resolve(e,i)]}const Vt="(anonymous)";function Pt(t){return"object"==typeof t&&null!==t||"function"==typeof t}const zt=function(){const t=new WeakMap;let e=!1,i="",o=0;return function(n){return e=t.get(n),void 0===e&&(i=n.toString(),o=i.length,e=o>=29&&o<=100&&125===i.charCodeAt(o-1)&&i.charCodeAt(o-2)<=32&&93===i.charCodeAt(o-3)&&101===i.charCodeAt(o-4)&&100===i.charCodeAt(o-5)&&111===i.charCodeAt(o-6)&&99===i.charCodeAt(o-7)&&32===i.charCodeAt(o-8)&&101===i.charCodeAt(o-9)&&118===i.charCodeAt(o-10)&&105===i.charCodeAt(o-11)&&116===i.charCodeAt(o-12)&&97===i.charCodeAt(o-13)&&110===i.charCodeAt(o-14)&&88===i.charCodeAt(o-15),t.set(n,e)),e}}(),Ht={};function Mt(t){switch(typeof t){case"number":return t>=0&&(0|t)===t;case"string":{const e=Ht[t];if(void 0!==e)return e;const i=t.length;if(0===i)return Ht[t]=!1;let o=0;for(let e=0;e<i;++e)if(o=t.charCodeAt(e),0===e&&48===o&&i>1||o<48||o>57)return Ht[t]=!1;return Ht[t]=!0}default:return!1}}function Bt(t){return`${t.toLowerCase()}:presentation`}const Nt=new Map,jt=Object.freeze({define(t,e,i){const o=Bt(t);void 0===Nt.get(o)?Nt.set(o,e):Nt.set(o,!1),i.register(Et.instance(o,e))},forTag(t,e){const i=Bt(t),o=Nt.get(i);return!1===o?pt.findResponsibleContainer(e).get(i):o||null}});class Ut{constructor(t,e){this.template=t||null,this.styles=void 0===e?null:Array.isArray(e)?U.create(e):e instanceof U?e:U.create([e])}applyTo(t){const e=t.$fastController;null===e.template&&(e.template=this.template),null===e.styles&&(e.styles=this.styles)}}class _t extends nt{constructor(){super(...arguments),this._presentation=void 0}get $presentation(){return void 0===this._presentation&&(this._presentation=jt.forTag(this.tagName,this)),this._presentation}templateChanged(){void 0!==this.template&&(this.$fastController.template=this.template)}stylesChanged(){void 0!==this.styles&&(this.$fastController.styles=this.styles)}connectedCallback(){null!==this.$presentation&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(t){return(e={})=>new Gt(this===_t?class extends _t{}:this,t,e)}}function qt(t,e,i){return"function"==typeof t?t(e,i):t}o([y],_t.prototype,"template",void 0),o([y],_t.prototype,"styles",void 0);class Gt{constructor(t,e,i){this.type=t,this.elementDefinition=e,this.overrideDefinition=i,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(t,e){const i=this.definition,o=this.overrideDefinition,n=`${i.prefix||e.elementPrefix}-${i.baseName}`;e.tryDefineElement({name:n,type:this.type,baseClass:this.elementDefinition.baseClass,callback:t=>{const e=new Ut(qt(i.template,t,i),qt(i.styles,t,i));t.definePresentation(e);let n=qt(i.shadowOptions,t,i);t.shadowRootMode&&(n?o.shadowOptions||(n.mode=t.shadowRootMode):null!==n&&(n={mode:t.shadowRootMode})),t.defineElement({elementOptions:qt(i.elementOptions,t,i),shadowOptions:n,attributes:qt(i.attributes,t,i)})}})}}class Wt{constructor(){this.targetIndex=0}}class Kt extends Wt{constructor(){super(...arguments),this.createPlaceholder=g.createInterpolationPlaceholder}}class Xt extends Wt{constructor(t,e,i){super(),this.name=t,this.behavior=e,this.options=i}createPlaceholder(t){return g.createCustomAttributePlaceholder(this.name,t)}createBehavior(t){return new this.behavior(t,this.options)}}function Yt(t,e){this.source=t,this.context=e,null===this.bindingObserver&&(this.bindingObserver=b.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(t,e))}function Qt(t,e){this.source=t,this.context=e,this.target.addEventListener(this.targetName,this)}function Jt(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function Zt(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const t=this.target.$fastView;void 0!==t&&t.isComposed&&(t.unbind(),t.needsBindOnly=!0)}function te(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function ee(t){g.setAttribute(this.target,this.targetName,t)}function ie(t){g.setBooleanAttribute(this.target,this.targetName,t)}function oe(t){if(null==t&&(t=""),t.create){this.target.textContent="";let e=this.target.$fastView;void 0===e?e=t.create():this.target.$fastTemplate!==t&&(e.isComposed&&(e.remove(),e.unbind()),e=t.create()),e.isComposed?e.needsBindOnly&&(e.needsBindOnly=!1,e.bind(this.source,this.context)):(e.isComposed=!0,e.bind(this.source,this.context),e.insertBefore(this.target),this.target.$fastView=e,this.target.$fastTemplate=t)}else{const e=this.target.$fastView;void 0!==e&&e.isComposed&&(e.isComposed=!1,e.remove(),e.needsBindOnly?e.needsBindOnly=!1:e.unbind()),this.target.textContent=t}}function ne(t){this.target[this.targetName]=t}function re(t){const e=this.classVersions||Object.create(null),i=this.target;let o=this.version||0;if(null!=t&&t.length){const n=t.split(/\s+/);for(let t=0,r=n.length;t<r;++t){const r=n[t];""!==r&&(e[r]=o,i.classList.add(r))}}if(this.classVersions=e,this.version=o+1,0!==o){o-=1;for(const t in e)e[t]===o&&i.classList.remove(t)}}class se extends Kt{constructor(t){super(),this.binding=t,this.bind=Yt,this.unbind=Jt,this.updateTarget=ee,this.isBindingVolatile=b.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(t){if(this.originalTargetName=t,void 0!==t)switch(t[0]){case":":if(this.cleanedTargetName=t.substr(1),this.updateTarget=ne,"innerHTML"===this.cleanedTargetName){const t=this.binding;this.binding=(e,i)=>g.createHTML(t(e,i))}break;case"?":this.cleanedTargetName=t.substr(1),this.updateTarget=ie;break;case"@":this.cleanedTargetName=t.substr(1),this.bind=Qt,this.unbind=te;break;default:this.cleanedTargetName=t,"class"===t&&(this.updateTarget=re)}}targetAtContent(){this.updateTarget=oe,this.unbind=Zt}createBehavior(t){return new ae(t,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class ae{constructor(t,e,i,o,n,r,s){this.source=null,this.context=null,this.bindingObserver=null,this.target=t,this.binding=e,this.isBindingVolatile=i,this.bind=o,this.unbind=n,this.updateTarget=r,this.targetName=s}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(t){w.setEvent(t);const e=this.binding(this.source,this.context);w.setEvent(null),!0!==e&&t.preventDefault()}}let le=null;class ce{addFactory(t){t.targetIndex=this.targetIndex,this.behaviorFactories.push(t)}captureContentBinding(t){t.targetAtContent(),this.addFactory(t)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){le=this}static borrow(t){const e=le||new ce;return e.directives=t,e.reset(),le=null,e}}function de(t){if(1===t.length)return t[0];let e;const i=t.length,o=t.map((t=>"string"==typeof t?()=>t:(e=t.targetName||e,t.binding))),n=new se(((t,e)=>{let n="";for(let r=0;r<i;++r)n+=o[r](t,e);return n}));return n.targetName=e,n}const he=f.length;function ue(t,e){const i=e.split(p);if(1===i.length)return null;const o=[];for(let e=0,n=i.length;e<n;++e){const n=i[e],r=n.indexOf(f);let s;if(-1===r)s=n;else{const e=parseInt(n.substring(0,r));o.push(t.directives[e]),s=n.substring(r+he)}""!==s&&o.push(s)}return o}function pe(t,e,i=!1){const o=e.attributes;for(let n=0,r=o.length;n<r;++n){const s=o[n],a=s.value,l=ue(t,a);let c=null;null===l?i&&(c=new se((()=>a)),c.targetName=s.name):c=de(l),null!==c&&(e.removeAttributeNode(s),n--,r--,t.addFactory(c))}}function fe(t,e,i){const o=ue(t,e.textContent);if(null!==o){let n=e;for(let r=0,s=o.length;r<s;++r){const s=o[r],a=0===r?e:n.parentNode.insertBefore(document.createTextNode(""),n.nextSibling);"string"==typeof s?a.textContent=s:(a.textContent=" ",t.captureContentBinding(s)),n=a,t.targetIndex++,a!==e&&i.nextNode()}t.targetIndex--}}const ge=document.createRange();class me{constructor(t,e){this.fragment=t,this.behaviors=e,this.source=null,this.context=null,this.firstChild=t.firstChild,this.lastChild=t.lastChild}appendTo(t){t.appendChild(this.fragment)}insertBefore(t){if(this.fragment.hasChildNodes())t.parentNode.insertBefore(this.fragment,t);else{const e=this.lastChild;if(t.previousSibling===e)return;const i=t.parentNode;let o,n=this.firstChild;for(;n!==e;)o=n.nextSibling,i.insertBefore(n,t),n=o;i.insertBefore(e,t)}}remove(){const t=this.fragment,e=this.lastChild;let i,o=this.firstChild;for(;o!==e;)i=o.nextSibling,t.appendChild(o),o=i;t.appendChild(e)}dispose(){const t=this.firstChild.parentNode,e=this.lastChild;let i,o=this.firstChild;for(;o!==e;)i=o.nextSibling,t.removeChild(o),o=i;t.removeChild(e);const n=this.behaviors,r=this.source;for(let t=0,e=n.length;t<e;++t)n[t].unbind(r)}bind(t,e){const i=this.behaviors;if(this.source!==t)if(null!==this.source){const o=this.source;this.source=t,this.context=e;for(let n=0,r=i.length;n<r;++n){const r=i[n];r.unbind(o),r.bind(t,e)}}else{this.source=t,this.context=e;for(let o=0,n=i.length;o<n;++o)i[o].bind(t,e)}}unbind(){if(null===this.source)return;const t=this.behaviors,e=this.source;for(let i=0,o=t.length;i<o;++i)t[i].unbind(e);this.source=null}static disposeContiguousBatch(t){if(0!==t.length){ge.setStartBefore(t[0].firstChild),ge.setEndAfter(t[t.length-1].lastChild),ge.deleteContents();for(let e=0,i=t.length;e<i;++e){const i=t[e],o=i.behaviors,n=i.source;for(let t=0,e=o.length;t<e;++t)o[t].unbind(n)}}}}class ve{constructor(t,e){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=t,this.directives=e}create(t){if(null===this.fragment){let t;const e=this.html;if("string"==typeof e){t=document.createElement("template"),t.innerHTML=g.createHTML(e);const i=t.content.firstElementChild;null!==i&&"TEMPLATE"===i.tagName&&(t=i)}else t=e;const i=function(t,e){const i=t.content;document.adoptNode(i);const o=ce.borrow(e);pe(o,t,!0);const n=o.behaviorFactories;o.reset();const r=g.createTemplateWalker(i);let s;for(;s=r.nextNode();)switch(o.targetIndex++,s.nodeType){case 1:pe(o,s);break;case 3:fe(o,s,r);break;case 8:g.isMarker(s)&&o.addFactory(e[g.extractDirectiveIndexFromMarker(s)])}let a=0;(g.isMarker(i.firstChild)||1===i.childNodes.length&&e.length)&&(i.insertBefore(document.createComment(""),i.firstChild),a=-1);const l=o.behaviorFactories;return o.release(),{fragment:i,viewBehaviorFactories:l,hostBehaviorFactories:n,targetOffset:a}}(t,this.directives);this.fragment=i.fragment,this.viewBehaviorFactories=i.viewBehaviorFactories,this.hostBehaviorFactories=i.hostBehaviorFactories,this.targetOffset=i.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const e=this.fragment.cloneNode(!0),i=this.viewBehaviorFactories,o=new Array(this.behaviorCount),n=g.createTemplateWalker(e);let r=0,s=this.targetOffset,a=n.nextNode();for(let t=i.length;r<t;++r){const t=i[r],e=t.targetIndex;for(;null!==a;){if(s===e){o[r]=t.createBehavior(a);break}a=n.nextNode(),s++}}if(this.hasHostBehaviors){const e=this.hostBehaviorFactories;for(let i=0,n=e.length;i<n;++i,++r)o[r]=e[i].createBehavior(t)}return new me(e,o)}render(t,e,i){"string"==typeof e&&(e=document.getElementById(e)),void 0===i&&(i=e);const o=this.create(i);return o.bind(t,$),o.appendTo(e),o}}const be=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function ye(t,...e){const i=[];let o="";for(let n=0,r=t.length-1;n<r;++n){const r=t[n];let s=e[n];if(o+=r,s instanceof ve){const t=s;s=()=>t}if("function"==typeof s&&(s=new se(s)),s instanceof Kt){const t=be.exec(r);null!==t&&(s.targetName=t[2])}s instanceof Wt?(o+=s.createPlaceholder(i.length),i.push(s)):o+=s}return o+=t[t.length-1],new ve(o,i)}class xe{constructor(t,e){this.target=t,this.propertyName=e}bind(t){t[this.propertyName]=this.target}unbind(){}}function we(t){return new Xt("fast-ref",xe,t)}class $e{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}}const ke=(t,e)=>ye`
    <span
        part="end"
        ${we("endContainer")}
        class=${t=>e.end?"end":void 0}
    >
        <slot name="end" ${we("end")} @slotchange="${t=>t.handleEndContentChange()}">
            ${e.end||""}
        </slot>
    </span>
`,Ce=(t,e)=>ye`
    <span
        part="start"
        ${we("startContainer")}
        class="${t=>e.start?"start":void 0}"
    >
        <slot
            name="start"
            ${we("start")}
            @slotchange="${t=>t.handleStartContentChange()}"
        >
            ${e.start||""}
        </slot>
    </span>
`,Fe=ye`
    <span part="end" ${we("endContainer")}>
        <slot
            name="end"
            ${we("end")}
            @slotchange="${t=>t.handleEndContentChange()}"
        ></slot>
    </span>
`,Se=ye`
    <span part="start" ${we("startContainer")}>
        <slot
            name="start"
            ${we("start")}
            @slotchange="${t=>t.handleStartContentChange()}"
        ></slot>
    </span>
`;function Ie(t,...e){const i=k.locate(t);e.forEach((e=>{Object.getOwnPropertyNames(e.prototype).forEach((i=>{"constructor"!==i&&Object.defineProperty(t.prototype,i,Object.getOwnPropertyDescriptor(e.prototype,i))})),k.locate(e).forEach((t=>i.push(t)))}))}class Te extends _t{constructor(){super(...arguments),this.headinglevel=2,this.expanded=!1,this.clickHandler=t=>{this.expanded=!this.expanded,this.change()},this.change=()=>{this.$emit("change")}}}o([I({attribute:"heading-level",mode:"fromView",converter:F})],Te.prototype,"headinglevel",void 0),o([I({mode:"boolean"})],Te.prototype,"expanded",void 0),o([I],Te.prototype,"id",void 0),Ie(Te,$e);class De extends _t{constructor(){super(...arguments),this.expandmode="multi",this.activeItemIndex=0,this.change=()=>{this.$emit("change",this.activeid)},this.setItems=()=>{var t;0!==this.accordionItems.length&&(this.accordionIds=this.getItemIds(),this.accordionItems.forEach(((t,e)=>{t instanceof Te&&(t.addEventListener("change",this.activeItemChange),this.isSingleExpandMode()&&(this.activeItemIndex!==e?t.expanded=!1:t.expanded=!0));const i=this.accordionIds[e];t.setAttribute("id","string"!=typeof i?`accordion-${e+1}`:i),this.activeid=this.accordionIds[this.activeItemIndex],t.addEventListener("keydown",this.handleItemKeyDown),t.addEventListener("focus",this.handleItemFocus)})),this.isSingleExpandMode())&&(null!==(t=this.findExpandedItem())&&void 0!==t?t:this.accordionItems[0]).setAttribute("aria-disabled","true")},this.removeItemListeners=t=>{t.forEach(((t,e)=>{t.removeEventListener("change",this.activeItemChange),t.removeEventListener("keydown",this.handleItemKeyDown),t.removeEventListener("focus",this.handleItemFocus)}))},this.activeItemChange=t=>{if(t.defaultPrevented||t.target!==t.currentTarget)return;t.preventDefault();const e=t.target;this.activeid=e.getAttribute("id"),this.isSingleExpandMode()&&(this.resetItems(),e.expanded=!0,e.setAttribute("aria-disabled","true"),this.accordionItems.forEach((t=>{t.hasAttribute("disabled")||t.id===this.activeid||t.removeAttribute("aria-disabled")}))),this.activeItemIndex=Array.from(this.accordionItems).indexOf(e),this.change()},this.handleItemKeyDown=t=>{if(t.target===t.currentTarget)switch(this.accordionIds=this.getItemIds(),t.key){case E:t.preventDefault(),this.adjust(-1);break;case D:t.preventDefault(),this.adjust(1);break;case V:this.activeItemIndex=0,this.focusItem();break;case P:this.activeItemIndex=this.accordionItems.length-1,this.focusItem()}},this.handleItemFocus=t=>{if(t.target===t.currentTarget){const e=t.target,i=this.activeItemIndex=Array.from(this.accordionItems).indexOf(e);this.activeItemIndex!==i&&-1!==i&&(this.activeItemIndex=i,this.activeid=this.accordionIds[this.activeItemIndex])}}}accordionItemsChanged(t,e){this.$fastController.isConnected&&(this.removeItemListeners(t),this.setItems())}findExpandedItem(){for(let t=0;t<this.accordionItems.length;t++)if("true"===this.accordionItems[t].getAttribute("expanded"))return this.accordionItems[t];return null}resetItems(){this.accordionItems.forEach(((t,e)=>{t.expanded=!1}))}getItemIds(){return this.accordionItems.map((t=>t.getAttribute("id")))}isSingleExpandMode(){return"single"===this.expandmode}adjust(t){this.activeItemIndex=B(0,this.accordionItems.length-1,this.activeItemIndex+t),this.focusItem()}focusItem(){const t=this.accordionItems[this.activeItemIndex];t instanceof Te&&t.expandbutton.focus()}}function Re(t){return t?function(e,i,o){return 1===e.nodeType&&e.matches(t)}:function(t,e,i){return 1===t.nodeType}}o([I({attribute:"expand-mode"})],De.prototype,"expandmode",void 0),o([y],De.prototype,"accordionItems",void 0);class Oe{constructor(t,e){this.target=t,this.options=e,this.source=null}bind(t){const e=this.options.property;this.shouldUpdate=b.getAccessors(t).some((t=>t.name===e)),this.source=t,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(a),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let t=this.getNodes();return void 0!==this.options.filter&&(t=t.filter(this.options.filter)),t}updateTarget(t){this.source[this.options.property]=t}}class Ee extends Oe{constructor(t,e){super(t,e)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function Ae(t){return"string"==typeof t&&(t={property:t}),new Xt("fast-slotted",Ee,t)}class Le{createCSS(){return""}createBehavior(){}}function Ve(t,e){const i=[];let o="";const n=[];for(let r=0,s=t.length-1;r<s;++r){o+=t[r];let s=e[r];if(s instanceof Le){const t=s.createBehavior();s=s.createCSS(),t&&n.push(t)}s instanceof U||s instanceof CSSStyleSheet?(""!==o.trim()&&(i.push(o),o=""),i.push(s)):o+=s}return o+=t[t.length-1],""!==o.trim()&&i.push(o),{styles:i,behaviors:n}}function Pe(t,...e){const{styles:i,behaviors:o}=Ve(t,e),n=U.create(i);return o.length&&n.withBehaviors(...o),n}class ze extends Le{constructor(t,e){super(),this.behaviors=e,this.css="";const i=t.reduce(((t,e)=>("string"==typeof e?this.css+=e:t.push(e),t)),[]);i.length&&(this.styles=U.create(i))}createBehavior(){return this}createCSS(){return this.css}bind(t){this.styles&&t.$fastController.addStyles(this.styles),this.behaviors.length&&t.$fastController.addBehaviors(this.behaviors)}unbind(t){this.styles&&t.$fastController.removeStyles(this.styles),this.behaviors.length&&t.$fastController.removeBehaviors(this.behaviors)}}function He(t,...e){const{styles:i,behaviors:o}=Ve(t,e);return new ze(i,o)}function Me(t){return`:host([hidden]){display:none}:host{display:${t}}`}function Be(t){const e=t.parentElement;if(e)return e;{const e=t.getRootNode();if(e.host instanceof HTMLElement)return e.host}return null}const Ne=document.createElement("div");class je{setProperty(t,e){g.queueUpdate((()=>this.target.setProperty(t,e)))}removeProperty(t){g.queueUpdate((()=>this.target.removeProperty(t)))}}class Ue extends je{constructor(){super();const t=new CSSStyleSheet;this.target=t.cssRules[t.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,t]}}class _e extends je{constructor(){super(),this.style=document.createElement("style"),document.head.appendChild(this.style);const{sheet:t}=this.style;if(t){const e=t.insertRule(":root{}",t.cssRules.length);this.target=t.cssRules[e].style}}}class qe{constructor(t){this.store=new Map,this.target=null;const e=t.$fastController;this.style=document.createElement("style"),e.addStyles(this.style),b.getNotifier(e).subscribe(this,"isConnected"),this.handleChange(e,"isConnected")}targetChanged(){if(null!==this.target)for(const[t,e]of this.store.entries())this.target.setProperty(t,e)}setProperty(t,e){this.store.set(t,e),g.queueUpdate((()=>{null!==this.target&&this.target.setProperty(t,e)}))}removeProperty(t){this.store.delete(t),g.queueUpdate((()=>{null!==this.target&&this.target.removeProperty(t)}))}handleChange(t,e){const{sheet:i}=this.style;if(i){const t=i.insertRule(":host{}",i.cssRules.length);this.target=i.cssRules[t].style}else this.target=null}}o([y],qe.prototype,"target",void 0);class Ge{constructor(t){this.target=t.style}setProperty(t,e){g.queueUpdate((()=>this.target.setProperty(t,e)))}removeProperty(t){g.queueUpdate((()=>this.target.removeProperty(t)))}}class We{setProperty(t,e){We.properties[t]=e;for(const i of We.roots.values())Ye.getOrCreate(We.normalizeRoot(i)).setProperty(t,e)}removeProperty(t){delete We.properties[t];for(const e of We.roots.values())Ye.getOrCreate(We.normalizeRoot(e)).removeProperty(t)}static registerRoot(t){const{roots:e}=We;if(!e.has(t)){e.add(t);const i=Ye.getOrCreate(this.normalizeRoot(t));for(const t in We.properties)i.setProperty(t,We.properties[t])}}static unregisterRoot(t){const{roots:e}=We;if(e.has(t)){e.delete(t);const i=Ye.getOrCreate(We.normalizeRoot(t));for(const t in We.properties)i.removeProperty(t)}}static normalizeRoot(t){return t===Ne?document:t}}We.roots=new Set,We.properties={};const Ke=new WeakMap,Xe=g.supportsAdoptedStyleSheets?class extends je{constructor(t){super();const e=new CSSStyleSheet;this.target=e.cssRules[e.insertRule(":host{}")].style,t.$fastController.addStyles(U.create([e]))}}:qe,Ye=Object.freeze({getOrCreate(t){if(Ke.has(t))return Ke.get(t);let e;return e=t===Ne?new We:t instanceof Document?g.supportsAdoptedStyleSheets?new Ue:new _e:t instanceof nt?new Xe(t):new Ge(t),Ke.set(t,e),e}});class Qe extends Le{constructor(t){super(),this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=t.name,null!==t.cssCustomPropertyName&&(this.cssCustomProperty=`--${t.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=Qe.uniqueId(),Qe.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(t){return new Qe({name:"string"==typeof t?t:t.name,cssCustomPropertyName:"string"==typeof t?t:void 0===t.cssCustomPropertyName?t.name:t.cssCustomPropertyName})}static isCSSDesignToken(t){return"string"==typeof t.cssCustomProperty}static isDerivedDesignTokenValue(t){return"function"==typeof t}static getTokenById(t){return Qe.tokensById.get(t)}getOrCreateSubscriberSet(t=this){return this.subscribers.get(t)||this.subscribers.set(t,new Set)&&this.subscribers.get(t)}createCSS(){return this.cssVar||""}getValueFor(t){const e=ii.getOrCreate(t).get(this);if(void 0!==e)return e;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${t} or an ancestor of ${t}.`)}setValueFor(t,e){return this._appliedTo.add(t),e instanceof Qe&&(e=this.alias(e)),ii.getOrCreate(t).set(this,e),this}deleteValueFor(t){return this._appliedTo.delete(t),ii.existsFor(t)&&ii.getOrCreate(t).delete(this),this}withDefault(t){return this.setValueFor(Ne,t),this}subscribe(t,e){const i=this.getOrCreateSubscriberSet(e);e&&!ii.existsFor(e)&&ii.getOrCreate(e),i.has(t)||i.add(t)}unsubscribe(t,e){const i=this.subscribers.get(e||this);i&&i.has(t)&&i.delete(t)}notify(t){const e=Object.freeze({token:this,target:t});this.subscribers.has(this)&&this.subscribers.get(this).forEach((t=>t.handleChange(e))),this.subscribers.has(t)&&this.subscribers.get(t).forEach((t=>t.handleChange(e)))}alias(t){return e=>t.getValueFor(e)}}Qe.uniqueId=(()=>{let t=0;return()=>(t++,t.toString(16))})(),Qe.tokensById=new Map;class Je{constructor(t,e,i){this.source=t,this.token=e,this.node=i,this.dependencies=new Set,this.observer=b.binding(t,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){this.node.store.set(this.token,this.observer.observe(this.node.target,$))}}class Ze{constructor(){this.values=new Map}set(t,e){this.values.get(t)!==e&&(this.values.set(t,e),b.getNotifier(this).notify(t.id))}get(t){return b.track(this,t.id),this.values.get(t)}delete(t){this.values.delete(t)}all(){return this.values.entries()}}const ti=new WeakMap,ei=new WeakMap;class ii{constructor(t){this.target=t,this.store=new Ze,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(t,e)=>{const i=Qe.getTokenById(e);if(i&&(i.notify(this.target),Qe.isCSSDesignToken(i))){const e=this.parent,o=this.isReflecting(i);if(e){const n=e.get(i),r=t.get(i);n===r||o?n===r&&o&&this.stopReflectToCSS(i):this.reflectToCSS(i)}else o||this.reflectToCSS(i)}}},ti.set(t,this),b.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),t instanceof nt?t.$fastController.addBehaviors([this]):t.isConnected&&this.bind()}static getOrCreate(t){return ti.get(t)||new ii(t)}static existsFor(t){return ti.has(t)}static findParent(t){if(Ne!==t.target){let e=Be(t.target);for(;null!==e;){if(ti.has(e))return ti.get(e);e=Be(e)}return ii.getOrCreate(Ne)}return null}static findClosestAssignedNode(t,e){let i=e;do{if(i.has(t))return i;i=i.parent?i.parent:i.target!==Ne?ii.getOrCreate(Ne):null}while(null!==i);return null}get parent(){return ei.get(this)||null}has(t){return this.assignedValues.has(t)}get(t){const e=this.store.get(t);if(void 0!==e)return e;const i=this.getRaw(t);return void 0!==i?(this.hydrate(t,i),this.get(t)):void 0}getRaw(t){var e;return this.assignedValues.has(t)?this.assignedValues.get(t):null===(e=ii.findClosestAssignedNode(t,this))||void 0===e?void 0:e.getRaw(t)}set(t,e){Qe.isDerivedDesignTokenValue(this.assignedValues.get(t))&&this.tearDownBindingObserver(t),this.assignedValues.set(t,e),Qe.isDerivedDesignTokenValue(e)?this.setupBindingObserver(t,e):this.store.set(t,e)}delete(t){this.assignedValues.delete(t),this.tearDownBindingObserver(t);const e=this.getRaw(t);e?this.hydrate(t,e):this.store.delete(t)}bind(){const t=ii.findParent(this);t&&t.appendChild(this);for(const t of this.assignedValues.keys())t.notify(this.target)}unbind(){this.parent&&ei.get(this).removeChild(this)}appendChild(t){t.parent&&ei.get(t).removeChild(t);const e=this.children.filter((e=>t.contains(e)));ei.set(t,this),this.children.push(t),e.forEach((e=>t.appendChild(e))),b.getNotifier(this.store).subscribe(t);for(const[e,i]of this.store.all())t.hydrate(e,this.bindingObservers.has(e)?this.getRaw(e):i)}removeChild(t){const e=this.children.indexOf(t);return-1!==e&&this.children.splice(e,1),b.getNotifier(this.store).unsubscribe(t),t.parent===this&&ei.delete(t)}contains(t){return function(t,e){let i=e;for(;null!==i;){if(i===t)return!0;i=Be(i)}return!1}(this.target,t.target)}reflectToCSS(t){this.isReflecting(t)||(this.reflecting.add(t),ii.cssCustomPropertyReflector.startReflection(t,this.target))}stopReflectToCSS(t){this.isReflecting(t)&&(this.reflecting.delete(t),ii.cssCustomPropertyReflector.stopReflection(t,this.target))}isReflecting(t){return this.reflecting.has(t)}handleChange(t,e){const i=Qe.getTokenById(e);i&&this.hydrate(i,this.getRaw(i))}hydrate(t,e){if(!this.has(t)){const i=this.bindingObservers.get(t);Qe.isDerivedDesignTokenValue(e)?i?i.source!==e&&(this.tearDownBindingObserver(t),this.setupBindingObserver(t,e)):this.setupBindingObserver(t,e):(i&&this.tearDownBindingObserver(t),this.store.set(t,e))}}setupBindingObserver(t,e){const i=new Je(e,t,this);return this.bindingObservers.set(t,i),i}tearDownBindingObserver(t){return!!this.bindingObservers.has(t)&&(this.bindingObservers.get(t).disconnect(),this.bindingObservers.delete(t),!0)}}ii.cssCustomPropertyReflector=new class{startReflection(t,e){t.subscribe(this,e),this.handleChange({token:t,target:e})}stopReflection(t,e){t.unsubscribe(this,e),this.remove(t,e)}handleChange(t){const{token:e,target:i}=t;this.add(e,i)}add(t,e){Ye.getOrCreate(e).setProperty(t.cssCustomProperty,this.resolveCSSValue(ii.getOrCreate(e).get(t)))}remove(t,e){Ye.getOrCreate(e).removeProperty(t.cssCustomProperty)}resolveCSSValue(t){return t&&"function"==typeof t.createCSS?t.createCSS():t}},o([y],ii.prototype,"children",void 0);const oi=Object.freeze({create:function(t){return Qe.from(t)},notifyConnection(t){return!(!t.isConnected||!ii.existsFor(t)||(ii.getOrCreate(t).bind(),0))},notifyDisconnection(t){return!(t.isConnected||!ii.existsFor(t)||(ii.getOrCreate(t).unbind(),0))},registerRoot(t=Ne){We.registerRoot(t)},unregisterRoot(t=Ne){We.unregisterRoot(t)}});var ni,ri;function si(t,e,i){return isNaN(t)||t<=e?e:t>=i?i:t}function ai(t,e,i){return isNaN(t)||t<=e?0:t>=i?1:t/(i-e)}function li(t,e,i){return isNaN(t)?e:e+t*(i-e)}function ci(t,e,i){return isNaN(t)||t<=0?e:t>=1?i:e+t*(i-e)}function di(t,e){const i=Math.pow(10,e);return Math.round(t*i)/i}!function(t){t.ltr="ltr",t.rtl="rtl"}(ni||(ni={})),Math.PI;class hi{constructor(t,e,i){this.h=t,this.s=e,this.l=i}static fromObject(t){return!t||isNaN(t.h)||isNaN(t.s)||isNaN(t.l)?null:new hi(t.h,t.s,t.l)}equalValue(t){return this.h===t.h&&this.s===t.s&&this.l===t.l}roundToPrecision(t){return new hi(di(this.h,t),di(this.s,t),di(this.l,t))}toObject(){return{h:this.h,s:this.s,l:this.l}}}class ui{constructor(t,e,i){this.l=t,this.a=e,this.b=i}static fromObject(t){return!t||isNaN(t.l)||isNaN(t.a)||isNaN(t.b)?null:new ui(t.l,t.a,t.b)}equalValue(t){return this.l===t.l&&this.a===t.a&&this.b===t.b}roundToPrecision(t){return new ui(di(this.l,t),di(this.a,t),di(this.b,t))}toObject(){return{l:this.l,a:this.a,b:this.b}}}ui.epsilon=216/24389,ui.kappa=24389/27;class pi{constructor(t,e,i,o){this.r=t,this.g=e,this.b=i,this.a="number"!=typeof o||isNaN(o)?1:o}static fromObject(t){return!t||isNaN(t.r)||isNaN(t.g)||isNaN(t.b)?null:new pi(t.r,t.g,t.b,t.a)}equalValue(t){return this.r===t.r&&this.g===t.g&&this.b===t.b&&this.a===t.a}toStringHexRGB(){return"#"+[this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringHexRGBA(){return this.toStringHexRGB()+this.formatHexValue(this.a)}toStringHexARGB(){return"#"+[this.a,this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringWebRGB(){return`rgb(${Math.round(li(this.r,0,255))},${Math.round(li(this.g,0,255))},${Math.round(li(this.b,0,255))})`}toStringWebRGBA(){return`rgba(${Math.round(li(this.r,0,255))},${Math.round(li(this.g,0,255))},${Math.round(li(this.b,0,255))},${si(this.a,0,1)})`}roundToPrecision(t){return new pi(di(this.r,t),di(this.g,t),di(this.b,t),di(this.a,t))}clamp(){return new pi(si(this.r,0,1),si(this.g,0,1),si(this.b,0,1),si(this.a,0,1))}toObject(){return{r:this.r,g:this.g,b:this.b,a:this.a}}formatHexValue(t){return function(t){const e=Math.round(si(t,0,255)).toString(16);return 1===e.length?"0"+e:e}(li(t,0,255))}}class fi{constructor(t,e,i){this.x=t,this.y=e,this.z=i}static fromObject(t){return!t||isNaN(t.x)||isNaN(t.y)||isNaN(t.z)?null:new fi(t.x,t.y,t.z)}equalValue(t){return this.x===t.x&&this.y===t.y&&this.z===t.z}roundToPrecision(t){return new fi(di(this.x,t),di(this.y,t),di(this.z,t))}toObject(){return{x:this.x,y:this.y,z:this.z}}}function gi(t){function e(t){return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}return function(t){return.2126*t.r+.7152*t.g+.0722*t.b}(new pi(e(t.r),e(t.g),e(t.b),1))}function mi(t,e,i){return i-e==0?0:(t-e)/(i-e)}function vi(t,e,i){return(mi(t.r,e.r,i.r)+mi(t.g,e.g,i.g)+mi(t.b,e.b,i.b))/3}function bi(t){const e=Math.max(t.r,t.g,t.b),i=Math.min(t.r,t.g,t.b),o=e-i;let n=0;0!==o&&(n=e===t.r?(t.g-t.b)/o%6*60:e===t.g?60*((t.b-t.r)/o+2):60*((t.r-t.g)/o+4)),n<0&&(n+=360);const r=(e+i)/2;let s=0;return 0!==o&&(s=o/(1-Math.abs(2*r-1))),new hi(n,s,r)}function yi(t,e=1){return function(t,e=1){function i(t){return t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055}const o=i(3.2404542*t.x-1.5371385*t.y-.4985314*t.z),n=i(-.969266*t.x+1.8760108*t.y+.041556*t.z),r=i(.0556434*t.x-.2040259*t.y+1.0572252*t.z);return new pi(o,n,r,e)}(function(t){const e=(t.l+16)/116,i=e+t.a/500,o=e-t.b/200,n=Math.pow(i,3),r=Math.pow(e,3),s=Math.pow(o,3);let a=0;a=n>ui.epsilon?n:(116*i-16)/ui.kappa;let l=0;l=t.l>ui.epsilon*ui.kappa?r:t.l/ui.kappa;let c=0;return c=s>ui.epsilon?s:(116*o-16)/ui.kappa,a=fi.whitePoint.x*a,l=fi.whitePoint.y*l,c=fi.whitePoint.z*c,new fi(a,l,c)}(t),e)}function xi(t,e,i){return isNaN(t)||t<=0?e:t>=1?i:new pi(ci(t,e.r,i.r),ci(t,e.g,i.g),ci(t,e.b,i.b),ci(t,e.a,i.a))}function wi(t,e){const i=t.relativeLuminance>e.relativeLuminance?t:e,o=t.relativeLuminance>e.relativeLuminance?e:t;return(i.relativeLuminance+.05)/(o.relativeLuminance+.05)}fi.whitePoint=new fi(.95047,1,1.08883),function(t){t[t.RGB=0]="RGB",t[t.HSL=1]="HSL",t[t.HSV=2]="HSV",t[t.XYZ=3]="XYZ",t[t.LAB=4]="LAB",t[t.LCH=5]="LCH"}(ri||(ri={}));const $i=Object.freeze({create(t,e,i){return new ki(t,e,i)},from(t){return new ki(t.r,t.g,t.b)}});class ki extends pi{constructor(t,e,i){super(t,e,i,1),this.toColorString=this.toStringHexRGB,this.contrast=wi.bind(null,this),this.createCSS=this.toColorString,this.relativeLuminance=gi(this)}static fromObject(t){return new ki(t.r,t.g,t.b)}}function Ci(t,e,i=0,o=t.length-1){if(o===i)return t[i];const n=Math.floor((o-i)/2)+i;return e(t[n])?Ci(t,e,i,n):Ci(t,e,n+1,o)}const Fi=(-.1+Math.sqrt(.21))/2;function Si(t){return t.relativeLuminance<=Fi}function Ii(t){return Si(t)?-1:1}const Ti={stepContrast:1.03,stepContrastRamp:.03,preserveSource:!1},Di=Object.freeze({create:function(t,e,i){return"number"==typeof t?Di.from($i.create(t,e,i)):Di.from(t)},from:function(t,e){return function(t){const e={r:0,g:0,b:0,toColorString:()=>"",contrast:()=>0,relativeLuminance:0};for(const i in e)if(typeof e[i]!=typeof t[i])return!1;return!0}(t)?Ri.from(t,e):Ri.from($i.create(t.r,t.g,t.b),e)}});class Ri{constructor(t,e){this.closestIndexCache=new Map,this.source=t,this.swatches=e,this.reversedSwatches=Object.freeze([...this.swatches].reverse()),this.lastIndex=this.swatches.length-1}colorContrast(t,e,i,o){void 0===i&&(i=this.closestIndexOf(t));let n=this.swatches;const r=this.lastIndex;let s=i;return void 0===o&&(o=Ii(t)),-1===o&&(n=this.reversedSwatches,s=r-s),Ci(n,(i=>wi(t,i)>=e),s,r)}get(t){return this.swatches[t]||this.swatches[si(t,0,this.lastIndex)]}closestIndexOf(t){if(this.closestIndexCache.has(t.relativeLuminance))return this.closestIndexCache.get(t.relativeLuminance);let e=this.swatches.indexOf(t);if(-1!==e)return this.closestIndexCache.set(t.relativeLuminance,e),e;const i=this.swatches.reduce(((e,i)=>Math.abs(i.relativeLuminance-t.relativeLuminance)<Math.abs(e.relativeLuminance-t.relativeLuminance)?i:e));return e=this.swatches.indexOf(i),this.closestIndexCache.set(t.relativeLuminance,e),e}static saturationBump(t,e){const i=bi(t).s,o=bi(e);return o.s<i?function(t,e=1){const i=(1-Math.abs(2*t.l-1))*t.s,o=i*(1-Math.abs(t.h/60%2-1)),n=t.l-i/2;let r=0,s=0,a=0;return t.h<60?(r=i,s=o,a=0):t.h<120?(r=o,s=i,a=0):t.h<180?(r=0,s=i,a=o):t.h<240?(r=0,s=o,a=i):t.h<300?(r=o,s=0,a=i):t.h<360&&(r=i,s=0,a=o),new pi(r+n,s+n,a+n,e)}(new hi(o.h,i,o.l)):e}static ramp(t){const e=t/100;return e>.5?(e-.5)/.5:2*e}static createHighResolutionPalette(t){const e=[],i=function(t){function e(t){return t>ui.epsilon?Math.pow(t,1/3):(ui.kappa*t+16)/116}const i=e(t.x/fi.whitePoint.x),o=e(t.y/fi.whitePoint.y),n=e(t.z/fi.whitePoint.z);return new ui(116*o-16,500*(i-o),200*(o-n))}(function(t){function e(t){return t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}const i=e(t.r),o=e(t.g),n=e(t.b);return new fi(.4124564*i+.3575761*o+.1804375*n,.2126729*i+.7151522*o+.072175*n,.0193339*i+.119192*o+.9503041*n)}(pi.fromObject(t).roundToPrecision(4))),o=yi(new ui(0,i.a,i.b)).clamp().roundToPrecision(4),n=yi(new ui(50,i.a,i.b)).clamp().roundToPrecision(4),r=yi(new ui(100,i.a,i.b)).clamp().roundToPrecision(4),s=new pi(0,0,0),a=new pi(1,1,1),l=r.equalValue(a)?0:14,c=o.equalValue(s)?0:14;for(let t=100+l;t>=0-c;t-=.5){let i;i=t<0?xi(t/c+1,s,o):t<=50?xi(Ri.ramp(t),o,n):t<=100?xi(Ri.ramp(t),n,r):xi((t-100)/l,r,a),i=Ri.saturationBump(n,i).roundToPrecision(4),e.push($i.from(i))}return new Ri(t,e)}static adjustEnd(t,e,i,o){const n=-1===o?e.swatches:e.reversedSwatches,r=t=>{const i=e.closestIndexOf(t);return 1===o?e.lastIndex-i:i};1===o&&i.reverse();const s=t(i[i.length-2]);if(di(wi(i[i.length-1],i[i.length-2]),2)<s){i.pop();const t=r(e.colorContrast(n[e.lastIndex],s,void 0,o))-r(i[i.length-2]);let a=1;for(let o=i.length-t-1;o<i.length;o++){const t=r(i[o]),s=o===i.length-1?e.lastIndex:t+a;i[o]=n[s],a++}}1===o&&i.reverse()}static createColorPaletteByContrast(t,e){const i=Ri.createHighResolutionPalette(t),o=t=>di(e.stepContrast+e.stepContrast*(1-t.relativeLuminance)*e.stepContrastRamp,2),n=[];let r=e.preserveSource?t:i.swatches[0];n.push(r);do{const t=o(r);r=i.colorContrast(r,t,void 0,1),n.push(r)}while(r.relativeLuminance>0);if(e.preserveSource){r=t;do{const t=o(r);r=i.colorContrast(r,t,void 0,-1),n.unshift(r)}while(r.relativeLuminance<1)}return this.adjustEnd(o,i,n,-1),e.preserveSource&&this.adjustEnd(o,i,n,1),n}static from(t,e){const i=void 0===e?Ti:Object.assign(Object.assign({},Ti),e);return new Ri(t,Object.freeze(Ri.createColorPaletteByContrast(t,i)))}}const Oi=/^#((?:[0-9a-f]{6}|[0-9a-f]{3}))$/i;function Ei(t){const e=Oi.exec(t);if(null===e)return null;let i=e[1];if(3===i.length){const t=i.charAt(0),e=i.charAt(1),o=i.charAt(2);i=t.concat(t,e,e,o,o)}const o=parseInt(i,16);return isNaN(o)?null:new pi(ai((16711680&o)>>>16,0,255),ai((65280&o)>>>8,0,255),ai(255&o,0,255),1)}const Ai=$i.create(1,1,1),Li=$i.create(0,0,0),Vi=$i.create(.5,.5,.5),Pi=Ei("#0078D4"),zi=$i.create(Pi.r,Pi.g,Pi.b);function Hi(t,e,i,o,n){const r=t=>t.contrast(Ai)>=n?Ai:Li,s=r(t),a=r(e);return{rest:s,hover:a,active:s.relativeLuminance===a.relativeLuminance?s:r(i),focus:r(o)}}var Mi;!function(t){t[t.Burn=0]="Burn",t[t.Color=1]="Color",t[t.Darken=2]="Darken",t[t.Dodge=3]="Dodge",t[t.Lighten=4]="Lighten",t[t.Multiply=5]="Multiply",t[t.Overlay=6]="Overlay",t[t.Screen=7]="Screen"}(Mi||(Mi={}));class Bi{constructor(t,e,i,o){this.toColorString=()=>this.cssGradient,this.contrast=wi.bind(null,this),this.createCSS=this.toColorString,this.color=new pi(t,e,i),this.cssGradient=o,this.relativeLuminance=gi(this.color),this.r=t,this.g=e,this.b=i}static fromObject(t,e){return new Bi(t.r,t.g,t.b,e)}}const Ni=new pi(0,0,0),ji=new pi(1,1,1);function Ui(t,e,i,o,n,r,s,a,l=10,c=!1){const d=t.closestIndexOf(e);function h(i){if(c){const o=t.closestIndexOf(e),n=t.get(o),r=i.relativeLuminance<e.relativeLuminance?Ni:ji,s=function(t,e,i=null){let o=0,n=i;return null!==n?o=vi(t,e,n):(n=new pi(0,0,0,1),o=vi(t,e,n),o<=0&&(n=new pi(1,1,1,1),o=vi(t,e,n))),o=Math.round(1e3*o)/1e3,new pi(n.r,n.g,n.b,o)}(Ei(i.toColorString()),Ei(n.toColorString()),r).roundToPrecision(2),a=function(t,e){if(e.a>=1)return e;if(e.a<=0)return new pi(t.r,t.g,t.b,1);const i=e.a*e.r+(1-e.a)*t.r,o=e.a*e.g+(1-e.a)*t.g,n=e.a*e.b+(1-e.a)*t.b;return new pi(i,o,n,1)}(Ei(e.toColorString()),s);return $i.from(a)}return i}void 0===a&&(a=Ii(e));const u=d+a*i,p=u+a*(o-i),f=u+a*(n-i),g=u+a*(r-i),m=-1===a?0:100-l,v=-1===a?l:100;function b(e,i){const o=t.get(e);if(i){const i=t.get(e+a*s),n=-1===a?i:o,r=-1===a?o:i,l=`linear-gradient(${h(n).toColorString()} ${m}%, ${h(r).toColorString()} ${v}%)`;return Bi.fromObject(n,l)}return h(o)}return{rest:b(u,!0),hover:b(p,!0),active:b(f,!1),focus:b(g,!0)}}function _i(t,e,i,o,n,r,s,a){null==a&&(a=Ii(e));const l=t.closestIndexOf(t.colorContrast(e,i));return{rest:t.get(l+a*o),hover:t.get(l+a*n),active:t.get(l+a*r),focus:t.get(l+a*s)}}function qi(t,e,i,o,n,r,s){const a=t.closestIndexOf(e);return null==s&&(s=Ii(e)),{rest:t.get(a+s*i),hover:t.get(a+s*o),active:t.get(a+s*n),focus:t.get(a+s*r)}}function Gi(t,e,i,o,n,r,s=undefined,a,l,c,d,h=undefined){return Si(e)?qi(t,e,a,l,c,d,h):qi(t,e,i,o,n,r,s)}var Wi;function Ki(t,e){return t.closestIndexOf((i=e,$i.create(i,i,i)));var i}function Xi(t,e,i){return t.get(Ki(t,e)+-1*i)}!function(t){t[t.LightMode=.98]="LightMode",t[t.DarkMode=.15]="DarkMode"}(Wi||(Wi={}));const{create:Yi}=oi;function Qi(t){return oi.create({name:t,cssCustomPropertyName:null})}const Ji=Yi("direction").withDefault(ni.ltr),Zi=Yi("disabled-opacity").withDefault(.3),to=Yi("base-height-multiplier").withDefault(8),eo=Yi("base-horizontal-spacing-multiplier").withDefault(3),io=Yi("density").withDefault(0),oo=Yi("design-unit").withDefault(4),no=Yi("control-corner-radius").withDefault(4),ro=Yi("layer-corner-radius").withDefault(8),so=Yi("stroke-width").withDefault(1),ao=Yi("focus-stroke-width").withDefault(2),lo=Yi("body-font").withDefault('"Segoe UI Variable", "Segoe UI", sans-serif'),co=Yi("font-weight").withDefault(400);function ho(t){return e=>{const i=t.getValueFor(e),o=co.getValueFor(e);if(i.endsWith("px")){const t=Number.parseFloat(i.replace("px",""));if(t<=12)return`"wght" ${o}, "opsz" 8`;if(t>24)return`"wght" ${o}, "opsz" 36`}return`"wght" ${o}, "opsz" 10.5`}}const uo=Yi("type-ramp-base-font-size").withDefault("14px"),po=Yi("type-ramp-base-line-height").withDefault("20px"),fo=Yi("type-ramp-base-font-variations").withDefault(ho(uo)),go=Yi("type-ramp-minus-1-font-size").withDefault("12px"),mo=Yi("type-ramp-minus-1-line-height").withDefault("16px"),vo=Yi("type-ramp-minus-1-font-variations").withDefault(ho(go)),bo=Yi("type-ramp-minus-2-font-size").withDefault("10px"),yo=Yi("type-ramp-minus-2-line-height").withDefault("14px"),xo=Yi("type-ramp-minus-2-font-variations").withDefault(ho(bo)),wo=Yi("type-ramp-plus-1-font-size").withDefault("16px"),$o=Yi("type-ramp-plus-1-line-height").withDefault("22px"),ko=Yi("type-ramp-plus-1-font-variations").withDefault(ho(wo)),Co=Yi("type-ramp-plus-2-font-size").withDefault("20px"),Fo=Yi("type-ramp-plus-2-line-height").withDefault("26px"),So=Yi("type-ramp-plus-2-font-variations").withDefault(ho(Co)),Io=Yi("type-ramp-plus-3-font-size").withDefault("24px"),To=Yi("type-ramp-plus-3-line-height").withDefault("32px"),Do=Yi("type-ramp-plus-3-font-variations").withDefault(ho(Io)),Ro=Yi("type-ramp-plus-4-font-size").withDefault("28px"),Oo=Yi("type-ramp-plus-4-line-height").withDefault("36px"),Eo=Yi("type-ramp-plus-4-font-variations").withDefault(ho(Ro)),Ao=Yi("type-ramp-plus-5-font-size").withDefault("32px"),Lo=Yi("type-ramp-plus-5-line-height").withDefault("40px"),Vo=Yi("type-ramp-plus-5-font-variations").withDefault(ho(Ao)),Po=Yi("type-ramp-plus-6-font-size").withDefault("40px"),zo=Yi("type-ramp-plus-6-line-height").withDefault("52px"),Ho=Yi("type-ramp-plus-6-font-variations").withDefault(ho(Po)),Mo=Yi("base-layer-luminance").withDefault(Wi.LightMode),Bo=Qi("accent-fill-rest-delta").withDefault(0),No=Qi("accent-fill-hover-delta").withDefault(-2),jo=Qi("accent-fill-active-delta").withDefault(-5),Uo=Qi("accent-fill-focus-delta").withDefault(0),_o=Qi("accent-foreground-rest-delta").withDefault(0),qo=Qi("accent-foreground-hover-delta").withDefault(3),Go=Qi("accent-foreground-active-delta").withDefault(-8),Wo=Qi("accent-foreground-focus-delta").withDefault(0),Ko=Qi("neutral-fill-rest-delta").withDefault(-1),Xo=Qi("neutral-fill-hover-delta").withDefault(1),Yo=Qi("neutral-fill-active-delta").withDefault(0),Qo=Qi("neutral-fill-focus-delta").withDefault(0),Jo=Qi("neutral-fill-input-rest-delta").withDefault(-1),Zo=Qi("neutral-fill-input-hover-delta").withDefault(1),tn=Qi("neutral-fill-input-active-delta").withDefault(0),en=Qi("neutral-fill-input-focus-delta").withDefault(-2),on=Qi("neutral-fill-input-alt-rest-delta").withDefault(2),nn=Qi("neutral-fill-input-alt-hover-delta").withDefault(4),rn=Qi("neutral-fill-input-alt-active-delta").withDefault(6),sn=Qi("neutral-fill-input-alt-focus-delta").withDefault(2),an=Qi("neutral-fill-layer-rest-delta").withDefault(-2),ln=Qi("neutral-fill-layer-hover-delta").withDefault(-3),cn=Qi("neutral-fill-layer-active-delta").withDefault(-3),dn=Qi("neutral-fill-layer-alt-rest-delta").withDefault(-1),hn=Qi("neutral-fill-secondary-rest-delta").withDefault(3),un=Qi("neutral-fill-secondary-hover-delta").withDefault(2),pn=Qi("neutral-fill-secondary-active-delta").withDefault(1),fn=Qi("neutral-fill-secondary-focus-delta").withDefault(3),gn=Qi("neutral-fill-stealth-rest-delta").withDefault(0),mn=Qi("neutral-fill-stealth-hover-delta").withDefault(3),vn=Qi("neutral-fill-stealth-active-delta").withDefault(2),bn=Qi("neutral-fill-stealth-focus-delta").withDefault(0),yn=Qi("neutral-fill-strong-rest-delta").withDefault(0),xn=Qi("neutral-fill-strong-hover-delta").withDefault(8),wn=Qi("neutral-fill-strong-active-delta").withDefault(-5),$n=Qi("neutral-fill-strong-focus-delta").withDefault(0),kn=Qi("neutral-stroke-rest-delta").withDefault(8),Cn=Qi("neutral-stroke-hover-delta").withDefault(12),Fn=Qi("neutral-stroke-active-delta").withDefault(6),Sn=Qi("neutral-stroke-focus-delta").withDefault(8),In=Qi("neutral-stroke-control-rest-delta").withDefault(3),Tn=Qi("neutral-stroke-control-hover-delta").withDefault(5),Dn=Qi("neutral-stroke-control-active-delta").withDefault(5),Rn=Qi("neutral-stroke-control-focus-delta").withDefault(5),On=Qi("neutral-stroke-divider-rest-delta").withDefault(4),En=Qi("neutral-stroke-layer-rest-delta").withDefault(3),An=Qi("neutral-stroke-layer-hover-delta").withDefault(3),Ln=Qi("neutral-stroke-layer-active-delta").withDefault(3),Vn=Qi("neutral-stroke-strong-hover-delta").withDefault(0),Pn=Qi("neutral-stroke-strong-active-delta").withDefault(0),zn=Qi("neutral-stroke-strong-focus-delta").withDefault(0),Hn=Yi("neutral-base-color").withDefault(Vi),Mn=Qi("neutral-palette").withDefault((t=>Di.from(Hn.getValueFor(t)))),Bn=Yi("accent-base-color").withDefault(zi),Nn=Qi("accent-palette").withDefault((t=>Di.from(Bn.getValueFor(t)))),jn=Qi("neutral-layer-card-container-recipe").withDefault({evaluate:t=>Xi(Mn.getValueFor(t),Mo.getValueFor(t),an.getValueFor(t))}),Un=Yi("neutral-layer-card-container").withDefault((t=>jn.getValueFor(t).evaluate(t))),_n=Qi("neutral-layer-floating-recipe").withDefault({evaluate:t=>function(t,e,i){return t.get(Ki(t,e)+i)}(Mn.getValueFor(t),Mo.getValueFor(t),an.getValueFor(t))}),qn=Yi("neutral-layer-floating").withDefault((t=>_n.getValueFor(t).evaluate(t))),Gn=Qi("neutral-layer-1-recipe").withDefault({evaluate:t=>function(t,e){return t.get(Ki(t,e))}(Mn.getValueFor(t),Mo.getValueFor(t))}),Wn=Yi("neutral-layer-1").withDefault((t=>Gn.getValueFor(t).evaluate(t))),Kn=Qi("neutral-layer-2-recipe").withDefault({evaluate:t=>Xi(Mn.getValueFor(t),Mo.getValueFor(t),an.getValueFor(t))}),Xn=Yi("neutral-layer-2").withDefault((t=>Kn.getValueFor(t).evaluate(t))),Yn=Qi("neutral-layer-3-recipe").withDefault({evaluate:t=>function(t,e,i){return t.get(Ki(t,e)+-1*i*2)}(Mn.getValueFor(t),Mo.getValueFor(t),an.getValueFor(t))}),Qn=Yi("neutral-layer-3").withDefault((t=>Yn.getValueFor(t).evaluate(t))),Jn=Qi("neutral-layer-4-recipe").withDefault({evaluate:t=>function(t,e,i){return t.get(Ki(t,e)+-1*i*3)}(Mn.getValueFor(t),Mo.getValueFor(t),an.getValueFor(t))}),Zn=Yi("neutral-layer-4").withDefault((t=>Jn.getValueFor(t).evaluate(t))),tr=Yi("fill-color").withDefault((t=>Wn.getValueFor(t)));var er;!function(t){t[t.normal=4.5]="normal",t[t.large=3]="large"}(er||(er={}));const ir=Qi("accent-fill-recipe").withDefault({evaluate:(t,e)=>function(t,e,i,o,n,r,s,a=undefined,l,c,d,h,u,p=undefined){return Si(e)?_i(t,e,l,c,d,h,u,p):_i(t,e,i,o,n,r,s,a)}(Nn.getValueFor(t),e||tr.getValueFor(t),5,Bo.getValueFor(t),No.getValueFor(t),jo.getValueFor(t),Uo.getValueFor(t),void 0,8,Bo.getValueFor(t),No.getValueFor(t),jo.getValueFor(t),Uo.getValueFor(t),void 0)}),or=Yi("accent-fill-rest").withDefault((t=>ir.getValueFor(t).evaluate(t).rest)),nr=Yi("accent-fill-hover").withDefault((t=>ir.getValueFor(t).evaluate(t).hover)),rr=Yi("accent-fill-active").withDefault((t=>ir.getValueFor(t).evaluate(t).active)),sr=Yi("accent-fill-focus").withDefault((t=>ir.getValueFor(t).evaluate(t).focus)),ar=Qi("foreground-on-accent-recipe").withDefault({evaluate:t=>Hi(or.getValueFor(t),nr.getValueFor(t),rr.getValueFor(t),sr.getValueFor(t),er.normal)}),lr=Yi("foreground-on-accent-rest").withDefault((t=>ar.getValueFor(t).evaluate(t).rest)),cr=Yi("foreground-on-accent-hover").withDefault((t=>ar.getValueFor(t).evaluate(t).hover)),dr=Yi("foreground-on-accent-active").withDefault((t=>ar.getValueFor(t).evaluate(t).active)),hr=Yi("foreground-on-accent-focus").withDefault((t=>ar.getValueFor(t).evaluate(t).focus)),ur=Qi("accent-foreground-recipe").withDefault({evaluate:(t,e)=>_i(Nn.getValueFor(t),e||tr.getValueFor(t),9.5,_o.getValueFor(t),qo.getValueFor(t),Go.getValueFor(t),Wo.getValueFor(t))}),pr=Yi("accent-foreground-rest").withDefault((t=>ur.getValueFor(t).evaluate(t).rest)),fr=Yi("accent-foreground-hover").withDefault((t=>ur.getValueFor(t).evaluate(t).hover)),gr=Yi("accent-foreground-active").withDefault((t=>ur.getValueFor(t).evaluate(t).active)),mr=Yi("accent-foreground-focus").withDefault((t=>ur.getValueFor(t).evaluate(t).focus)),vr=Qi("accent-stroke-control-recipe").withDefault({evaluate:(t,e)=>Ui(Mn.getValueFor(t),e||tr.getValueFor(t),-3,-3,-3,-3,10,1,void 0,!0)}),br=Yi("accent-stroke-control-rest").withDefault((t=>vr.getValueFor(t).evaluate(t,or.getValueFor(t)).rest)),yr=Yi("accent-stroke-control-hover").withDefault((t=>vr.getValueFor(t).evaluate(t,nr.getValueFor(t)).hover)),xr=Yi("accent-stroke-control-active").withDefault((t=>vr.getValueFor(t).evaluate(t,rr.getValueFor(t)).active)),wr=Yi("accent-stroke-control-focus").withDefault((t=>vr.getValueFor(t).evaluate(t,sr.getValueFor(t)).focus)),$r=Qi("neutral-fill-recipe").withDefault({evaluate:(t,e)=>Gi(Mn.getValueFor(t),e||tr.getValueFor(t),Ko.getValueFor(t),Xo.getValueFor(t),Yo.getValueFor(t),Qo.getValueFor(t),void 0,2,3,1,2,void 0)}),kr=Yi("neutral-fill-rest").withDefault((t=>$r.getValueFor(t).evaluate(t).rest)),Cr=Yi("neutral-fill-hover").withDefault((t=>$r.getValueFor(t).evaluate(t).hover)),Fr=Yi("neutral-fill-active").withDefault((t=>$r.getValueFor(t).evaluate(t).active)),Sr=Yi("neutral-fill-focus").withDefault((t=>$r.getValueFor(t).evaluate(t).focus)),Ir=Qi("neutral-fill-input-recipe").withDefault({evaluate:(t,e)=>Gi(Mn.getValueFor(t),e||tr.getValueFor(t),Jo.getValueFor(t),Zo.getValueFor(t),tn.getValueFor(t),en.getValueFor(t),void 0,2,3,1,0,void 0)}),Tr=Yi("neutral-fill-input-rest").withDefault((t=>Ir.getValueFor(t).evaluate(t).rest)),Dr=Yi("neutral-fill-input-hover").withDefault((t=>Ir.getValueFor(t).evaluate(t).hover)),Rr=Yi("neutral-fill-input-active").withDefault((t=>Ir.getValueFor(t).evaluate(t).active)),Or=Yi("neutral-fill-input-focus").withDefault((t=>Ir.getValueFor(t).evaluate(t).focus)),Er=Qi("neutral-fill-input-alt-recipe").withDefault({evaluate:(t,e)=>Gi(Mn.getValueFor(t),e||tr.getValueFor(t),on.getValueFor(t),nn.getValueFor(t),rn.getValueFor(t),sn.getValueFor(t),1,on.getValueFor(t),on.getValueFor(t)-nn.getValueFor(t),on.getValueFor(t)-rn.getValueFor(t),sn.getValueFor(t),1)}),Ar=Yi("neutral-fill-input-alt-rest").withDefault((t=>Er.getValueFor(t).evaluate(t).rest)),Lr=Yi("neutral-fill-input-alt-hover").withDefault((t=>Er.getValueFor(t).evaluate(t).hover)),Vr=Yi("neutral-fill-input-alt-active").withDefault((t=>Er.getValueFor(t).evaluate(t).active)),Pr=Yi("neutral-fill-input-alt-focus").withDefault((t=>Er.getValueFor(t).evaluate(t).focus)),zr=Qi("neutral-fill-layer-recipe").withDefault({evaluate:(t,e)=>qi(Mn.getValueFor(t),e||tr.getValueFor(t),an.getValueFor(t),ln.getValueFor(t),cn.getValueFor(t),an.getValueFor(t),1)}),Hr=Yi("neutral-fill-layer-rest").withDefault((t=>zr.getValueFor(t).evaluate(t).rest)),Mr=Yi("neutral-fill-layer-hover").withDefault((t=>zr.getValueFor(t).evaluate(t).hover)),Br=Yi("neutral-fill-layer-active").withDefault((t=>zr.getValueFor(t).evaluate(t).active)),Nr=Qi("neutral-fill-layer-alt-recipe").withDefault({evaluate:(t,e)=>qi(Mn.getValueFor(t),e||tr.getValueFor(t),dn.getValueFor(t),dn.getValueFor(t),dn.getValueFor(t),dn.getValueFor(t))}),jr=Yi("neutral-fill-layer-alt-rest").withDefault((t=>Nr.getValueFor(t).evaluate(t).rest)),Ur=Qi("neutral-fill-secondary-recipe").withDefault({evaluate:(t,e)=>qi(Mn.getValueFor(t),e||tr.getValueFor(t),hn.getValueFor(t),un.getValueFor(t),pn.getValueFor(t),fn.getValueFor(t))}),_r=Yi("neutral-fill-secondary-rest").withDefault((t=>Ur.getValueFor(t).evaluate(t).rest)),qr=Yi("neutral-fill-secondary-hover").withDefault((t=>Ur.getValueFor(t).evaluate(t).hover)),Gr=Yi("neutral-fill-secondary-active").withDefault((t=>Ur.getValueFor(t).evaluate(t).active)),Wr=Yi("neutral-fill-secondary-focus").withDefault((t=>Ur.getValueFor(t).evaluate(t).focus)),Kr=Qi("neutral-fill-stealth-recipe").withDefault({evaluate:(t,e)=>qi(Mn.getValueFor(t),e||tr.getValueFor(t),gn.getValueFor(t),mn.getValueFor(t),vn.getValueFor(t),bn.getValueFor(t))}),Xr=Yi("neutral-fill-stealth-rest").withDefault((t=>Kr.getValueFor(t).evaluate(t).rest)),Yr=Yi("neutral-fill-stealth-hover").withDefault((t=>Kr.getValueFor(t).evaluate(t).hover)),Qr=Yi("neutral-fill-stealth-active").withDefault((t=>Kr.getValueFor(t).evaluate(t).active)),Jr=Yi("neutral-fill-stealth-focus").withDefault((t=>Kr.getValueFor(t).evaluate(t).focus)),Zr=Qi("neutral-fill-strong-recipe").withDefault({evaluate:(t,e)=>_i(Mn.getValueFor(t),e||tr.getValueFor(t),4.5,yn.getValueFor(t),xn.getValueFor(t),wn.getValueFor(t),$n.getValueFor(t))}),ts=Yi("neutral-fill-strong-rest").withDefault((t=>Zr.getValueFor(t).evaluate(t).rest)),es=Yi("neutral-fill-strong-hover").withDefault((t=>Zr.getValueFor(t).evaluate(t).hover)),is=Yi("neutral-fill-strong-active").withDefault((t=>Zr.getValueFor(t).evaluate(t).active)),os=Yi("neutral-fill-strong-focus").withDefault((t=>Zr.getValueFor(t).evaluate(t).focus)),ns=Qi("neutral-foreground-recipe").withDefault({evaluate:(t,e)=>_i(Mn.getValueFor(t),e||tr.getValueFor(t),16,0,-19,-30,0)}),rs=Yi("neutral-foreground-rest").withDefault((t=>ns.getValueFor(t).evaluate(t).rest)),ss=Yi("neutral-foreground-hover").withDefault((t=>ns.getValueFor(t).evaluate(t).hover)),as=Yi("neutral-foreground-active").withDefault((t=>ns.getValueFor(t).evaluate(t).active)),ls=Yi("neutral-foreground-focus").withDefault((t=>ns.getValueFor(t).evaluate(t).focus)),cs=Qi("neutral-foreground-hint-recipe").withDefault({evaluate:(t,e)=>function(t,e,i){return t.colorContrast(e,4.5)}(Mn.getValueFor(t),e||tr.getValueFor(t))}),ds=Yi("neutral-foreground-hint").withDefault((t=>cs.getValueFor(t).evaluate(t))),hs=Qi("neutral-stroke-recipe").withDefault({evaluate:(t,e)=>qi(Mn.getValueFor(t),e||tr.getValueFor(t),kn.getValueFor(t),Cn.getValueFor(t),Fn.getValueFor(t),Sn.getValueFor(t))}),us=Yi("neutral-stroke-rest").withDefault((t=>hs.getValueFor(t).evaluate(t).rest)),ps=Yi("neutral-stroke-hover").withDefault((t=>hs.getValueFor(t).evaluate(t).hover)),fs=Yi("neutral-stroke-active").withDefault((t=>hs.getValueFor(t).evaluate(t).active)),gs=Yi("neutral-stroke-focus").withDefault((t=>hs.getValueFor(t).evaluate(t).focus)),ms=Qi("neutral-stroke-control-recipe").withDefault({evaluate:(t,e)=>Ui(Mn.getValueFor(t),e||tr.getValueFor(t),In.getValueFor(t),Tn.getValueFor(t),Dn.getValueFor(t),Rn.getValueFor(t),5)}),vs=Yi("neutral-stroke-control-rest").withDefault((t=>ms.getValueFor(t).evaluate(t).rest)),bs=Yi("neutral-stroke-control-hover").withDefault((t=>ms.getValueFor(t).evaluate(t).hover)),ys=Yi("neutral-stroke-control-active").withDefault((t=>ms.getValueFor(t).evaluate(t).active)),xs=Yi("neutral-stroke-control-focus").withDefault((t=>ms.getValueFor(t).evaluate(t).focus)),ws=Qi("neutral-stroke-divider-recipe").withDefault({evaluate:(t,e)=>function(t,e,i){return t.get(t.closestIndexOf(e)+Ii(e)*i)}(Mn.getValueFor(t),e||tr.getValueFor(t),On.getValueFor(t))}),$s=Yi("neutral-stroke-divider-rest").withDefault((t=>ws.getValueFor(t).evaluate(t))),ks=Qi("neutral-stroke-input-recipe").withDefault({evaluate:(t,e)=>function(t,e,i,o,n,r,s,a){const l=t.closestIndexOf(e),c=Ii(e),d=l+c*i,h=d+c*(o-i),u=d+c*(n-i),p=d+c*(r-i),f=`calc(100% - ${a})`;function g(e,i){const o=t.get(e);if(i){const i=t.get(e+20*c),n=`linear-gradient(${o.toColorString()} ${f}, ${i.toColorString()} ${f}, ${i.toColorString()})`;return Bi.fromObject(o,n)}return o}return{rest:g(d,!0),hover:g(h,!0),active:g(u,!1),focus:g(p,!0)}}(Mn.getValueFor(t),e||tr.getValueFor(t),In.getValueFor(t),Tn.getValueFor(t),Dn.getValueFor(t),Rn.getValueFor(t),0,so.getValueFor(t)+"px")}),Cs=Yi("neutral-stroke-input-rest").withDefault((t=>ks.getValueFor(t).evaluate(t).rest)),Fs=Yi("neutral-stroke-input-hover").withDefault((t=>ks.getValueFor(t).evaluate(t).hover)),Ss=Yi("neutral-stroke-input-active").withDefault((t=>ks.getValueFor(t).evaluate(t).active)),Is=Yi("neutral-stroke-input-focus").withDefault((t=>ks.getValueFor(t).evaluate(t).focus)),Ts=Qi("neutral-stroke-layer-recipe").withDefault({evaluate:(t,e)=>qi(Mn.getValueFor(t),e||tr.getValueFor(t),En.getValueFor(t),An.getValueFor(t),Ln.getValueFor(t),En.getValueFor(t))}),Ds=Yi("neutral-stroke-layer-rest").withDefault((t=>Ts.getValueFor(t).evaluate(t).rest)),Rs=Yi("neutral-stroke-layer-hover").withDefault((t=>Ts.getValueFor(t).evaluate(t).hover)),Os=Yi("neutral-stroke-layer-active").withDefault((t=>Ts.getValueFor(t).evaluate(t).active)),Es=Qi("neutral-stroke-strong-recipe").withDefault({evaluate:(t,e)=>_i(Mn.getValueFor(t),e||tr.getValueFor(t),5.5,0,Vn.getValueFor(t),Pn.getValueFor(t),zn.getValueFor(t))}),As=Yi("neutral-stroke-strong-rest").withDefault((t=>Es.getValueFor(t).evaluate(t).rest)),Ls=Yi("neutral-stroke-strong-hover").withDefault((t=>Es.getValueFor(t).evaluate(t).hover)),Vs=Yi("neutral-stroke-strong-active").withDefault((t=>Es.getValueFor(t).evaluate(t).active)),Ps=Yi("neutral-stroke-strong-focus").withDefault((t=>Es.getValueFor(t).evaluate(t).focus)),zs=Qi("focus-stroke-outer-recipe").withDefault({evaluate:t=>(Mn.getValueFor(t),Si(tr.getValueFor(t))?Ai:Li)}),Hs=Yi("focus-stroke-outer").withDefault((t=>zs.getValueFor(t).evaluate(t))),Ms=Qi("focus-stroke-inner-recipe").withDefault({evaluate:t=>{return Nn.getValueFor(t),e=tr.getValueFor(t),Hs.getValueFor(t),Si(e)?Li:Ai;var e}}),Bs=Yi("focus-stroke-inner").withDefault((t=>Ms.getValueFor(t).evaluate(t))),Ns=Qi("foreground-on-accent-large-recipe").withDefault({evaluate:t=>Hi(or.getValueFor(t),nr.getValueFor(t),rr.getValueFor(t),sr.getValueFor(t),er.large)}),js=Yi("foreground-on-accent-rest-large").withDefault((t=>Ns.getValueFor(t).evaluate(t).rest)),Us=Yi("foreground-on-accent-hover-large").withDefault((t=>Ns.getValueFor(t).evaluate(t,nr.getValueFor(t)).hover)),_s=Yi("foreground-on-accent-active-large").withDefault((t=>Ns.getValueFor(t).evaluate(t,rr.getValueFor(t)).active)),qs=Yi("foreground-on-accent-focus-large").withDefault((t=>Ns.getValueFor(t).evaluate(t,sr.getValueFor(t)).focus)),Gs=Yi("neutral-fill-inverse-rest-delta").withDefault(0),Ws=Yi("neutral-fill-inverse-hover-delta").withDefault(-3),Ks=Yi("neutral-fill-inverse-active-delta").withDefault(7),Xs=Yi("neutral-fill-inverse-focus-delta").withDefault(0),Ys=Qi("neutral-fill-inverse-recipe").withDefault({evaluate:(t,e)=>function(t,e,i,o,n,r){const s=Ii(e),a=t.closestIndexOf(t.colorContrast(e,14)),l=a+s*Math.abs(i-o);let c,d;return(1===s?i<o:s*i>s*o)?(c=a,d=l):(c=l,d=a),{rest:t.get(c),hover:t.get(d),active:t.get(c+s*n),focus:t.get(c+s*r)}}(Mn.getValueFor(t),e||tr.getValueFor(t),Gs.getValueFor(t),Ws.getValueFor(t),Ks.getValueFor(t),Xs.getValueFor(t))}),Qs=Yi("neutral-fill-inverse-rest").withDefault((t=>Ys.getValueFor(t).evaluate(t).rest)),Js=Yi("neutral-fill-inverse-hover").withDefault((t=>Ys.getValueFor(t).evaluate(t).hover)),Zs=Yi("neutral-fill-inverse-active").withDefault((t=>Ys.getValueFor(t).evaluate(t).active)),ta=Yi("neutral-fill-inverse-focus").withDefault((t=>Ys.getValueFor(t).evaluate(t).focus)),ea=no,ia=ro,oa=so,na=ao,ra=Gs,sa=Ws,aa=Ks,la=Xs,ca=an,da=yn,ha=xn,ua=wn,pa=$n,fa=On,ga=Wn,ma=Xn,va=Qn,ba=Zn,ya=lr,xa=js,wa=$s,$a=Hr,ka=Qs,Ca=Js,Fa=Zs,Sa=ta,Ia=ts,Ta=es,Da=is,Ra=os,Oa=Hs,Ea=Bs,Aa=us,La=ps,Va=fs,Pa=gs,za=He`
  font-family: ${lo};
  font-size: ${uo};
  line-height: ${po};
  font-weight: initial;
  font-variation-settings: ${fo};
`,Ha=He`
  font-family: ${lo};
  font-size: ${go};
  line-height: ${mo};
  font-weight: initial;
  font-variation-settings: ${vo};
`,Ma=He`
  font-family: ${lo};
  font-size: ${bo};
  line-height: ${yo};
  font-weight: initial;
  font-variation-settings: ${xo};
`,Ba=He`
  font-family: ${lo};
  font-size: ${wo};
  line-height: ${$o};
  font-weight: initial;
  font-variation-settings: ${ko};
`,Na=He`
  font-family: ${lo};
  font-size: ${Co};
  line-height: ${Fo};
  font-weight: initial;
  font-variation-settings: ${So};
`,ja=He`
  font-family: ${lo};
  font-size: ${Io};
  line-height: ${To};
  font-weight: initial;
  font-variation-settings: ${Do};
`,Ua=He`
  font-family: ${lo};
  font-size: ${Ro};
  line-height: ${Oo};
  font-weight: initial;
  font-variation-settings: ${Eo};
`,_a=He`
  font-family: ${lo};
  font-size: ${Ao};
  line-height: ${Lo};
  font-weight: initial;
  font-variation-settings: ${Vo};
`,qa=He`
  font-family: ${lo};
  font-size: ${Po};
  line-height: ${zo};
  font-weight: initial;
  font-variation-settings: ${Ho};
`,Ga=(t,e)=>Pe`
    ${Me("flex")} :host {
      box-sizing: border-box;
      flex-direction: column;
      ${za}
      color: ${rs};
      gap: calc(${oo} * 1px);
    }
  `;function Wa(...t){return t.every((t=>t instanceof HTMLElement))}let Ka;const Xa=function(){if("boolean"==typeof Ka)return Ka;if("undefined"==typeof window||!window.document||!window.document.createElement)return Ka=!1,Ka;const t=document.createElement("style"),e=function(){const t=document.querySelector('meta[property="csp-nonce"]');return t?t.getAttribute("content"):null}();null!==e&&t.setAttribute("nonce",e),document.head.appendChild(t);try{t.sheet.insertRule("foo:focus-visible {color:inherit}",0),Ka=!0}catch(t){Ka=!1}finally{document.head.removeChild(t)}return Ka}()?"focus-visible":"focus";class Ya{constructor(t){this.listenerCache=new WeakMap,this.query=t}bind(t){const{query:e}=this,i=this.constructListener(t);i.bind(e)(),e.addListener(i),this.listenerCache.set(t,i)}unbind(t){const e=this.listenerCache.get(t);e&&(this.query.removeListener(e),this.listenerCache.delete(t))}}class Qa extends Ya{constructor(t,e){super(t),this.styles=e}static with(t){return e=>new Qa(t,e)}constructListener(t){let e=!1;const i=this.styles;return function(){const{matches:o}=this;o&&!e?(t.$fastController.addStyles(i),e=o):!o&&e&&(t.$fastController.removeStyles(i),e=o)}}unbind(t){super.unbind(t),t.$fastController.removeStyles(this.styles)}}const Ja=Qa.with(window.matchMedia("(forced-colors)"));var Za;Qa.with(window.matchMedia("(prefers-color-scheme: dark)")),Qa.with(window.matchMedia("(prefers-color-scheme: light)")),function(t){t.Canvas="Canvas",t.CanvasText="CanvasText",t.LinkText="LinkText",t.VisitedText="VisitedText",t.ActiveText="ActiveText",t.ButtonFace="ButtonFace",t.ButtonText="ButtonText",t.Field="Field",t.FieldText="FieldText",t.Highlight="Highlight",t.HighlightText="HighlightText",t.GrayText="GrayText"}(Za||(Za={}));const tl=He`
  outline: calc(${ao} * 1px) solid ${Hs};
  outline-offset: calc(${ao} * -1px);
`,el=He`
  outline: calc(${ao} * 1px) solid ${Hs};
  outline-offset: calc(${so} * 1px);
`,il=He`(${to} + ${io}) * ${oo}`,ol=oi.create("neutral-fill-stealth-rest-on-neutral-fill-layer-rest").withDefault((t=>{const e=zr.getValueFor(t);return Kr.getValueFor(t).evaluate(t,e.evaluate(t).rest).rest})),nl=oi.create("neutral-fill-stealth-hover-on-neutral-fill-layer-rest").withDefault((t=>{const e=zr.getValueFor(t);return Kr.getValueFor(t).evaluate(t,e.evaluate(t).rest).hover})),rl=oi.create("neutral-fill-stealth-active-on-neutral-fill-layer-rest").withDefault((t=>{const e=zr.getValueFor(t);return Kr.getValueFor(t).evaluate(t,e.evaluate(t).rest).active})),sl=(t,e)=>Pe`
    ${Me("flex")} :host {
      box-sizing: border-box;
      ${za};
      flex-direction: column;
      background: ${Hr};
      color: ${rs};
      border: calc(${so} * 1px) solid ${Ds};
      border-radius: calc(${ro} * 1px);
    }

    .region {
      display: none;
      padding: calc(${oo} * 2 * 1px);
      background: ${jr};
    }

    .heading {
      display: grid;
      position: relative;
      grid-template-columns: auto 1fr auto auto;
      align-items: center;
    }

    .button {
      appearance: none;
      border: none;
      background: none;
      grid-column: 2;
      grid-row: 1;
      outline: none;
      margin: calc(${oo} * 3 * 1px) 0;
      padding: 0 calc(${oo} * 2 * 1px);
      text-align: left;
      color: inherit;
      cursor: pointer;
      font: inherit;
    }

    .button::before {
      content: '';
      position: absolute;
      top: calc(${so} * -1px);
      left: calc(${so} * -1px);
      right: calc(${so} * -1px);
      bottom: calc(${so} * -1px);
      cursor: pointer;
    }

    .button:${Xa}::before {
      ${tl}
      border-radius: calc(${ro} * 1px);
    }

    :host(.expanded) .button:${Xa}::before {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    :host(.expanded) .region {
      display: block;
      border-top: calc(${so} * 1px) solid ${Ds};
      border-bottom-left-radius: calc((${ro} - ${so}) * 1px);
      border-bottom-right-radius: calc((${ro} - ${so}) * 1px);
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      grid-column: 4;
      pointer-events: none;
      background: ${ol};
      border-radius: calc(${no} * 1px);
      fill: currentcolor;
      width: calc(${il} * 1px);
      height: calc(${il} * 1px);
      margin: calc(${oo} * 2 * 1px);
    }

    .heading:hover .icon {
      background: ${nl};
    }

    .heading:active .icon {
      background: ${rl};
    }

    slot[name='collapsed-icon'] {
      display: flex;
    }

    :host(.expanded) slot[name='collapsed-icon'] {
      display: none;
    }

    slot[name='expanded-icon'] {
      display: none;
    }

    :host(.expanded) slot[name='expanded-icon'] {
      display: flex;
    }

    .start {
      display: flex;
      align-items: center;
      padding-inline-start: calc(${oo} * 2 * 1px);
      justify-content: center;
      grid-column: 1;
    }

    .end {
      display: flex;
      align-items: center;
      justify-content: center;
      grid-column: 3;
    }

    .icon,
    .start,
    .end {
      position: relative;
    }
  `.withBehaviors(Ja(Pe`
        .button:${Xa}::before {
          outline-color: ${Za.Highlight};
        }
        .icon {
          fill: ${Za.ButtonText};
        }
      `)),al=Te.compose({baseName:"accordion-item",template:(t,e)=>ye`
    <template class="${t=>t.expanded?"expanded":""}">
        <div
            class="heading"
            part="heading"
            role="heading"
            aria-level="${t=>t.headinglevel}"
        >
            <button
                class="button"
                part="button"
                ${we("expandbutton")}
                aria-expanded="${t=>t.expanded}"
                aria-controls="${t=>t.id}-panel"
                id="${t=>t.id}"
                @click="${(t,e)=>t.clickHandler(e.event)}"
            >
                <span class="heading-content" part="heading-content">
                    <slot name="heading"></slot>
                </span>
            </button>
            ${Ce(0,e)}
            ${ke(0,e)}
            <span class="icon" part="icon" aria-hidden="true">
                <slot name="expanded-icon" part="expanded-icon">
                    ${e.expandedIcon||""}
                </slot>
                <slot name="collapsed-icon" part="collapsed-icon">
                    ${e.collapsedIcon||""}
                </slot>
            <span>
        </div>
        <div
            class="region"
            part="region"
            id="${t=>t.id}-panel"
            role="region"
            aria-labelledby="${t=>t.id}"
        >
            <slot></slot>
        </div>
    </template>
`,styles:sl,collapsedIcon:'\n    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">\n      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>\n    </svg>\n  ',expandedIcon:'\n    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">\n      <path d="M2.15 7.35c.2.2.5.2.7 0L6 4.21l3.15 3.14a.5.5 0 10.7-.7l-3.5-3.5a.5.5 0 00-.7 0l-3.5 3.5a.5.5 0 000 .7z"/>\n    </svg>\n  '}),ll=sl,cl=De.compose({baseName:"accordion",template:(t,e)=>ye`
    <template>
        <slot ${Ae({property:"accordionItems",filter:Re()})}></slot>
        <slot name="item" part="item" ${Ae("accordionItems")}></slot>
    </template>
`,styles:Ga}),dl=Ga;function hl(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}Object.create,Object.create;class ul{}o([I({attribute:"aria-atomic"})],ul.prototype,"ariaAtomic",void 0),o([I({attribute:"aria-busy"})],ul.prototype,"ariaBusy",void 0),o([I({attribute:"aria-controls"})],ul.prototype,"ariaControls",void 0),o([I({attribute:"aria-current"})],ul.prototype,"ariaCurrent",void 0),o([I({attribute:"aria-describedby"})],ul.prototype,"ariaDescribedby",void 0),o([I({attribute:"aria-details"})],ul.prototype,"ariaDetails",void 0),o([I({attribute:"aria-disabled"})],ul.prototype,"ariaDisabled",void 0),o([I({attribute:"aria-errormessage"})],ul.prototype,"ariaErrormessage",void 0),o([I({attribute:"aria-flowto"})],ul.prototype,"ariaFlowto",void 0),o([I({attribute:"aria-haspopup"})],ul.prototype,"ariaHaspopup",void 0),o([I({attribute:"aria-hidden"})],ul.prototype,"ariaHidden",void 0),o([I({attribute:"aria-invalid"})],ul.prototype,"ariaInvalid",void 0),o([I({attribute:"aria-keyshortcuts"})],ul.prototype,"ariaKeyshortcuts",void 0),o([I({attribute:"aria-label"})],ul.prototype,"ariaLabel",void 0),o([I({attribute:"aria-labelledby"})],ul.prototype,"ariaLabelledby",void 0),o([I({attribute:"aria-live"})],ul.prototype,"ariaLive",void 0),o([I({attribute:"aria-owns"})],ul.prototype,"ariaOwns",void 0),o([I({attribute:"aria-relevant"})],ul.prototype,"ariaRelevant",void 0),o([I({attribute:"aria-roledescription"})],ul.prototype,"ariaRoledescription",void 0);class pl extends _t{constructor(){super(...arguments),this.handleUnsupportedDelegatesFocus=()=>{var t;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(null===(t=this.$fastController.definition.shadowOptions)||void 0===t?void 0:t.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}connectedCallback(){super.connectedCallback(),this.handleUnsupportedDelegatesFocus()}}o([I],pl.prototype,"download",void 0),o([I],pl.prototype,"href",void 0),o([I],pl.prototype,"hreflang",void 0),o([I],pl.prototype,"ping",void 0),o([I],pl.prototype,"referrerpolicy",void 0),o([I],pl.prototype,"rel",void 0),o([I],pl.prototype,"target",void 0),o([I],pl.prototype,"type",void 0),o([y],pl.prototype,"defaultSlottedContent",void 0);class fl{}o([I({attribute:"aria-expanded"})],fl.prototype,"ariaExpanded",void 0),Ie(fl,ul),Ie(pl,$e,fl);const gl=(t,e)=>ye`
    <a
        class="control"
        part="control"
        download="${t=>t.download}"
        href="${t=>t.href}"
        hreflang="${t=>t.hreflang}"
        ping="${t=>t.ping}"
        referrerpolicy="${t=>t.referrerpolicy}"
        rel="${t=>t.rel}"
        target="${t=>t.target}"
        type="${t=>t.type}"
        aria-atomic="${t=>t.ariaAtomic}"
        aria-busy="${t=>t.ariaBusy}"
        aria-controls="${t=>t.ariaControls}"
        aria-current="${t=>t.ariaCurrent}"
        aria-describedby="${t=>t.ariaDescribedby}"
        aria-details="${t=>t.ariaDetails}"
        aria-disabled="${t=>t.ariaDisabled}"
        aria-errormessage="${t=>t.ariaErrormessage}"
        aria-expanded="${t=>t.ariaExpanded}"
        aria-flowto="${t=>t.ariaFlowto}"
        aria-haspopup="${t=>t.ariaHaspopup}"
        aria-hidden="${t=>t.ariaHidden}"
        aria-invalid="${t=>t.ariaInvalid}"
        aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
        aria-label="${t=>t.ariaLabel}"
        aria-labelledby="${t=>t.ariaLabelledby}"
        aria-live="${t=>t.ariaLive}"
        aria-owns="${t=>t.ariaOwns}"
        aria-relevant="${t=>t.ariaRelevant}"
        aria-roledescription="${t=>t.ariaRoledescription}"
        ${we("control")}
    >
        ${Ce(0,e)}
        <span class="content" part="content">
            <slot ${Ae("defaultSlottedContent")}></slot>
        </span>
        ${ke(0,e)}
    </a>
`,ml=(t,e,i,o="[disabled]")=>Pe`
    ${Me("inline-flex")}
    
    :host {
      position: relative;
      box-sizing: border-box;
      ${za}
      height: calc(${il} * 1px);
      min-width: calc(${il} * 1px);
      color: ${rs};
      border-radius: calc(${no} * 1px);
      fill: currentcolor;
    }

    .control {
      border: calc(${so} * 1px) solid transparent;
      flex-grow: 1;
      box-sizing: border-box;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding: 0 calc((10 + (${oo} * 2 * ${io})) * 1px);
      white-space: nowrap;
      outline: none;
      text-decoration: none;
      color: inherit;
      border-radius: inherit;
      fill: inherit;
      font-family: inherit;
    }

    .control,
    .end,
    .start {
      font: inherit;
    }

    .control.icon-only {
      padding: 0;
      line-height: 0;
    }

    .control:${Xa} {
      ${tl}
    }

    .control::-moz-focus-inner {
      border: 0;
    }

    .content {
      pointer-events: none;
    }

    .start,
    .end {
      display: flex;
      pointer-events: none;
    }

    .start {
      margin-inline-end: 11px;
    }

    .end {
      margin-inline-start: 11px;
    }
  `,vl=(t,e,i,o="[disabled]")=>Pe`
    .control {
      background: padding-box linear-gradient(${kr}, ${kr}),
        border-box ${vs};
    }

    :host(${i}:hover) .control {
      background: padding-box linear-gradient(${Cr}, ${Cr}),
        border-box ${bs};
    }

    :host(${i}:active) .control {
      background: padding-box linear-gradient(${Fr}, ${Fr}),
        border-box ${ys};
    }

    :host(${o}) .control {
      background: padding-box linear-gradient(${kr}, ${kr}),
        border-box ${us};
    }
  `.withBehaviors(Ja(Pe`
        .control {
          background: ${Za.ButtonFace};
          border-color: ${Za.ButtonText};
          color: ${Za.ButtonText};
        }

        :host(${i}:hover) .control,
        :host(${i}:active) .control {
          forced-color-adjust: none;
          background: ${Za.HighlightText};
          border-color: ${Za.Highlight};
          color: ${Za.Highlight};
        }

        :host(${o}) .control {
          background: transparent;
          border-color: ${Za.GrayText};
          color: ${Za.GrayText};
        }

        .control:${Xa} {
          outline-color: ${Za.CanvasText};
        }

        :host([href]) .control {
          background: transparent;
          border-color: ${Za.LinkText};
          color: ${Za.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          background: transparent;
          border-color: ${Za.CanvasText};
          color: ${Za.CanvasText};
        }
    `)),bl=(t,e,i,o="[disabled]")=>Pe`
    .control {
      background: padding-box linear-gradient(${or}, ${or}),
        border-box ${br};
      color: ${lr};
    }

    :host(${i}:hover) .control {
      background: padding-box linear-gradient(${nr}, ${nr}),
        border-box ${yr};
      color: ${cr};
    }

    :host(${i}:active) .control {
      background: padding-box linear-gradient(${rr}, ${rr}),
        border-box ${xr};
      color: ${dr};
    }

    :host(${o}) .control {
      background: ${or};
    }

    .control:${Xa} {
      box-shadow: 0 0 0 calc(${ao} * 1px) ${Bs} inset !important;
    }
  `.withBehaviors(Ja(Pe`
        .control {
          forced-color-adjust: none;
          background: ${Za.Highlight};
          color: ${Za.HighlightText};
        }

        :host(${i}:hover) .control,
        :host(${i}:active) .control {
          background: ${Za.HighlightText};
          border-color: ${Za.Highlight};
          color: ${Za.Highlight};
        }

        :host(${o}) .control {
          background: transparent;
          border-color: ${Za.GrayText};
          color: ${Za.GrayText};
        }

        .control:${Xa} {
          outline-color: ${Za.CanvasText};
          box-shadow: 0 0 0 calc(${ao} * 1px) ${Za.HighlightText} inset !important;
        }

        :host([href]) .control {
          background: ${Za.LinkText};
          color: ${Za.HighlightText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          background: ${Za.ButtonFace};
          border-color: ${Za.LinkText};
          color: ${Za.LinkText};
        }
      `)),yl=(t,e,i,o="[disabled]")=>Pe`
    :host {
      height: auto;
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
      min-width: 0;
    }

    .control {
      display: inline;
      padding: 0;
      border: none;
      box-shadow: none;
      line-height: 1;
    }

    :host(${i}) .control {
      color: ${pr};
      text-decoration: underline 1px;
    }

    :host(${i}:hover) .control {
      color: ${fr};
      text-decoration: none;
    }

    :host(${i}:active) .control {
      color: ${gr};
      text-decoration: none;
    }

    .control:${Xa} {
      ${el}
    }
  `.withBehaviors(Ja(Pe`
        :host(${i}) .control {
          color: ${Za.LinkText};
        }

        :host(${i}:hover) .control,
        :host(${i}:active) .control {
          color: ${Za.CanvasText};
        }

        .control:${Xa} {
          outline-color: ${Za.CanvasText};
        }
      `)),xl=(t,e,i,o="[disabled]")=>Pe`
    :host {
      color: ${pr};
    }

    .control {
      background: ${Xr};
    }

    :host(${i}:hover) .control {
      background: ${Yr};
      color: ${fr};
    }

    :host(${i}:active) .control {
      background: ${Qr};
      color: ${gr};
    }

    :host(${o}) .control {
      background: ${Xr};
    }
  `.withBehaviors(Ja(Pe`
        :host {
          color: ${Za.ButtonText};
        }

        .control {
          forced-color-adjust: none;
          background: transparent;
        }

        :host(${i}:hover) .control,
        :host(${i}:active) .control {
          background: transparent;
          border-color: ${Za.ButtonText};
          color: ${Za.ButtonText};
        }

        :host(${o}) .control {
          background: transparent;
          color: ${Za.GrayText};
        }

        .control:${Xa} {
          outline-color: ${Za.CanvasText};
        }

        :host([href]) .control {
          color: ${Za.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          border-color: ${Za.LinkText};
          color: ${Za.LinkText};
        }
      `)),wl=(t,e,i,o="[disabled]")=>Pe`
    .control {
      background: transparent !important;
      border-color: ${us};
    }

    :host(${i}:hover) .control {
      border-color: ${ps};
    }

    :host(${i}:active) .control {
      border-color: ${fs};
    }

    :host(${o}) .control {
      background: transparent !important;
      border-color: ${us};
    }
  `.withBehaviors(Ja(Pe`
        .control {
          border-color: ${Za.ButtonText};
          color: ${Za.ButtonText};
        }

        :host(${i}:hover) .control,
        :host(${i}:active) .control {
          background: ${Za.HighlightText};
          border-color: ${Za.Highlight};
          color: ${Za.Highlight};
        }

        :host(${o}) .control {
          border-color: ${Za.GrayText};
          color: ${Za.GrayText};
        }

        .control:${Xa} {
          outline-color: ${Za.CanvasText};
        }

        :host([href]) .control {
          border-color: ${Za.LinkText};
          color: ${Za.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          border-color: ${Za.CanvasText};
          color: ${Za.CanvasText};
        }
      `)),$l=(t,e,i,o="[disabled]")=>Pe`
    .control {
      background: ${Xr};
    }

    :host(${i}:hover) .control {
      background: ${Yr};
    }

    :host(${i}:active) .control {
      background: ${Qr};
    }

    :host(${o}) .control {
      background: ${Xr};
    }
  `.withBehaviors(Ja(Pe`
        .control {
          forced-color-adjust: none;
          background: transparent;
          color: ${Za.ButtonText};
        }

        :host(${i}:hover) .control,
        :host(${i}:active) .control {
          background: transparent;
          border-color: ${Za.ButtonText};
          color: ${Za.ButtonText};
        }

        :host(${o}) .control {
          background: transparent;
          color: ${Za.GrayText};
        }
        
        .control:${Xa} {
          outline-color: ${Za.CanvasText};
        }

        :host([href]) .control {
          color: ${Za.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          background: transparent;
          border-color: ${Za.LinkText};
          color: ${Za.LinkText};
        }
      `));class kl{constructor(t,e,i){this.propertyName=t,this.value=e,this.styles=i}bind(t){b.getNotifier(t).subscribe(this,this.propertyName),this.handleChange(t,this.propertyName)}unbind(t){b.getNotifier(t).unsubscribe(this,this.propertyName),t.$fastController.removeStyles(this.styles)}handleChange(t,e){t[e]===this.value?t.$fastController.addStyles(this.styles):t.$fastController.removeStyles(this.styles)}}function Cl(t,e){return new kl("appearance",t,e)}const Fl="[href]",Sl=(t,e)=>ml(t,e,Fl).withBehaviors(Cl("neutral",vl(t,e,Fl)),Cl("accent",bl(t,e,Fl)),Cl("hypertext",yl(t,e,Fl)),Cl("lightweight",xl(t,e,Fl)),Cl("outline",wl(t,e,Fl)),Cl("stealth",$l(t,e,Fl)));class Il extends pl{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(){const t=this.defaultSlottedContent.filter((t=>t.nodeType===Node.ELEMENT_NODE));1===t.length&&t[0]instanceof SVGElement?this.control.classList.add("icon-only"):this.control.classList.remove("icon-only")}}hl([I],Il.prototype,"appearance",void 0);const Tl=Sl,Dl=Il.compose({baseName:"anchor",baseClass:pl,template:gl,styles:Sl,shadowOptions:{delegatesFocus:!0}}),Rl="focus",Ol="focusin",El="focusout",Al="keydown",Ll="resize",Vl="scroll",Pl=t=>{const e=t.closest("[dir]");return null!==e&&"rtl"===e.dir?ni.rtl:ni.ltr};class zl extends _t{constructor(){super(...arguments),this.anchor="",this.viewport="",this.horizontalPositioningMode="uncontrolled",this.horizontalDefaultPosition="unset",this.horizontalViewportLock=!1,this.horizontalInset=!1,this.horizontalScaling="content",this.verticalPositioningMode="uncontrolled",this.verticalDefaultPosition="unset",this.verticalViewportLock=!1,this.verticalInset=!1,this.verticalScaling="content",this.fixedPlacement=!1,this.autoUpdateMode="anchor",this.anchorElement=null,this.viewportElement=null,this.initialLayoutComplete=!1,this.resizeDetector=null,this.baseHorizontalOffset=0,this.baseVerticalOffset=0,this.pendingPositioningUpdate=!1,this.pendingReset=!1,this.currentDirection=ni.ltr,this.regionVisible=!1,this.forceUpdate=!1,this.updateThreshold=.5,this.update=()=>{this.pendingPositioningUpdate||this.requestPositionUpdates()},this.startObservers=()=>{this.stopObservers(),null!==this.anchorElement&&(this.requestPositionUpdates(),null!==this.resizeDetector&&(this.resizeDetector.observe(this.anchorElement),this.resizeDetector.observe(this)))},this.requestPositionUpdates=()=>{null===this.anchorElement||this.pendingPositioningUpdate||(zl.intersectionService.requestPosition(this,this.handleIntersection),zl.intersectionService.requestPosition(this.anchorElement,this.handleIntersection),null!==this.viewportElement&&zl.intersectionService.requestPosition(this.viewportElement,this.handleIntersection),this.pendingPositioningUpdate=!0)},this.stopObservers=()=>{this.pendingPositioningUpdate&&(this.pendingPositioningUpdate=!1,zl.intersectionService.cancelRequestPosition(this,this.handleIntersection),null!==this.anchorElement&&zl.intersectionService.cancelRequestPosition(this.anchorElement,this.handleIntersection),null!==this.viewportElement&&zl.intersectionService.cancelRequestPosition(this.viewportElement,this.handleIntersection)),null!==this.resizeDetector&&this.resizeDetector.disconnect()},this.getViewport=()=>"string"!=typeof this.viewport||""===this.viewport?document.documentElement:document.getElementById(this.viewport),this.getAnchor=()=>document.getElementById(this.anchor),this.handleIntersection=t=>{this.pendingPositioningUpdate&&(this.pendingPositioningUpdate=!1,this.applyIntersectionEntries(t)&&this.updateLayout())},this.applyIntersectionEntries=t=>{const e=t.find((t=>t.target===this)),i=t.find((t=>t.target===this.anchorElement)),o=t.find((t=>t.target===this.viewportElement));return void 0!==e&&void 0!==o&&void 0!==i&&!!(!this.regionVisible||this.forceUpdate||void 0===this.regionRect||void 0===this.anchorRect||void 0===this.viewportRect||this.isRectDifferent(this.anchorRect,i.boundingClientRect)||this.isRectDifferent(this.viewportRect,o.boundingClientRect)||this.isRectDifferent(this.regionRect,e.boundingClientRect))&&(this.regionRect=e.boundingClientRect,this.anchorRect=i.boundingClientRect,this.viewportElement===document.documentElement?this.viewportRect=new DOMRectReadOnly(o.boundingClientRect.x+document.documentElement.scrollLeft,o.boundingClientRect.y+document.documentElement.scrollTop,o.boundingClientRect.width,o.boundingClientRect.height):this.viewportRect=o.boundingClientRect,this.updateRegionOffset(),this.forceUpdate=!1,!0)},this.updateRegionOffset=()=>{this.anchorRect&&this.regionRect&&(this.baseHorizontalOffset=this.baseHorizontalOffset+(this.anchorRect.left-this.regionRect.left)+(this.translateX-this.baseHorizontalOffset),this.baseVerticalOffset=this.baseVerticalOffset+(this.anchorRect.top-this.regionRect.top)+(this.translateY-this.baseVerticalOffset))},this.isRectDifferent=(t,e)=>Math.abs(t.top-e.top)>this.updateThreshold||Math.abs(t.right-e.right)>this.updateThreshold||Math.abs(t.bottom-e.bottom)>this.updateThreshold||Math.abs(t.left-e.left)>this.updateThreshold,this.handleResize=t=>{this.update()},this.reset=()=>{this.pendingReset&&(this.pendingReset=!1,null===this.anchorElement&&(this.anchorElement=this.getAnchor()),null===this.viewportElement&&(this.viewportElement=this.getViewport()),this.currentDirection=Pl(this),this.startObservers())},this.updateLayout=()=>{let t,e;if("uncontrolled"!==this.horizontalPositioningMode){const t=this.getPositioningOptions(this.horizontalInset);if("center"===this.horizontalDefaultPosition)e="center";else if("unset"!==this.horizontalDefaultPosition){let t=this.horizontalDefaultPosition;if("start"===t||"end"===t){const e=Pl(this);if(e!==this.currentDirection)return this.currentDirection=e,void this.initialize();t=this.currentDirection===ni.ltr?"start"===t?"left":"right":"start"===t?"right":"left"}switch(t){case"left":e=this.horizontalInset?"insetStart":"start";break;case"right":e=this.horizontalInset?"insetEnd":"end"}}const i=void 0!==this.horizontalThreshold?this.horizontalThreshold:void 0!==this.regionRect?this.regionRect.width:0,o=void 0!==this.anchorRect?this.anchorRect.left:0,n=void 0!==this.anchorRect?this.anchorRect.right:0,r=void 0!==this.anchorRect?this.anchorRect.width:0,s=void 0!==this.viewportRect?this.viewportRect.left:0,a=void 0!==this.viewportRect?this.viewportRect.right:0;(void 0===e||"locktodefault"!==this.horizontalPositioningMode&&this.getAvailableSpace(e,o,n,r,s,a)<i)&&(e=this.getAvailableSpace(t[0],o,n,r,s,a)>this.getAvailableSpace(t[1],o,n,r,s,a)?t[0]:t[1])}if("uncontrolled"!==this.verticalPositioningMode){const e=this.getPositioningOptions(this.verticalInset);if("center"===this.verticalDefaultPosition)t="center";else if("unset"!==this.verticalDefaultPosition)switch(this.verticalDefaultPosition){case"top":t=this.verticalInset?"insetStart":"start";break;case"bottom":t=this.verticalInset?"insetEnd":"end"}const i=void 0!==this.verticalThreshold?this.verticalThreshold:void 0!==this.regionRect?this.regionRect.height:0,o=void 0!==this.anchorRect?this.anchorRect.top:0,n=void 0!==this.anchorRect?this.anchorRect.bottom:0,r=void 0!==this.anchorRect?this.anchorRect.height:0,s=void 0!==this.viewportRect?this.viewportRect.top:0,a=void 0!==this.viewportRect?this.viewportRect.bottom:0;(void 0===t||"locktodefault"!==this.verticalPositioningMode&&this.getAvailableSpace(t,o,n,r,s,a)<i)&&(t=this.getAvailableSpace(e[0],o,n,r,s,a)>this.getAvailableSpace(e[1],o,n,r,s,a)?e[0]:e[1])}const i=this.getNextRegionDimension(e,t),o=this.horizontalPosition!==e||this.verticalPosition!==t;if(this.setHorizontalPosition(e,i),this.setVerticalPosition(t,i),this.updateRegionStyle(),!this.initialLayoutComplete)return this.initialLayoutComplete=!0,void this.requestPositionUpdates();this.regionVisible||(this.regionVisible=!0,this.style.removeProperty("pointer-events"),this.style.removeProperty("opacity"),this.classList.toggle("loaded",!0),this.$emit("loaded",this,{bubbles:!1})),this.updatePositionClasses(),o&&this.$emit("positionchange",this,{bubbles:!1})},this.updateRegionStyle=()=>{this.style.width=this.regionWidth,this.style.height=this.regionHeight,this.style.transform=`translate(${this.translateX}px, ${this.translateY}px)`},this.updatePositionClasses=()=>{this.classList.toggle("top","start"===this.verticalPosition),this.classList.toggle("bottom","end"===this.verticalPosition),this.classList.toggle("inset-top","insetStart"===this.verticalPosition),this.classList.toggle("inset-bottom","insetEnd"===this.verticalPosition),this.classList.toggle("vertical-center","center"===this.verticalPosition),this.classList.toggle("left","start"===this.horizontalPosition),this.classList.toggle("right","end"===this.horizontalPosition),this.classList.toggle("inset-left","insetStart"===this.horizontalPosition),this.classList.toggle("inset-right","insetEnd"===this.horizontalPosition),this.classList.toggle("horizontal-center","center"===this.horizontalPosition)},this.setHorizontalPosition=(t,e)=>{if(void 0===t||void 0===this.regionRect||void 0===this.anchorRect||void 0===this.viewportRect)return;let i=0;switch(this.horizontalScaling){case"anchor":case"fill":i=this.horizontalViewportLock?this.viewportRect.width:e.width,this.regionWidth=`${i}px`;break;case"content":i=this.regionRect.width,this.regionWidth="unset"}let o=0;switch(t){case"start":this.translateX=this.baseHorizontalOffset-i,this.horizontalViewportLock&&this.anchorRect.left>this.viewportRect.right&&(this.translateX=this.translateX-(this.anchorRect.left-this.viewportRect.right));break;case"insetStart":this.translateX=this.baseHorizontalOffset-i+this.anchorRect.width,this.horizontalViewportLock&&this.anchorRect.right>this.viewportRect.right&&(this.translateX=this.translateX-(this.anchorRect.right-this.viewportRect.right));break;case"insetEnd":this.translateX=this.baseHorizontalOffset,this.horizontalViewportLock&&this.anchorRect.left<this.viewportRect.left&&(this.translateX=this.translateX-(this.anchorRect.left-this.viewportRect.left));break;case"end":this.translateX=this.baseHorizontalOffset+this.anchorRect.width,this.horizontalViewportLock&&this.anchorRect.right<this.viewportRect.left&&(this.translateX=this.translateX-(this.anchorRect.right-this.viewportRect.left));break;case"center":if(o=(this.anchorRect.width-i)/2,this.translateX=this.baseHorizontalOffset+o,this.horizontalViewportLock){const t=this.anchorRect.left+o,e=this.anchorRect.right-o;t<this.viewportRect.left&&!(e>this.viewportRect.right)?this.translateX=this.translateX-(t-this.viewportRect.left):e>this.viewportRect.right&&!(t<this.viewportRect.left)&&(this.translateX=this.translateX-(e-this.viewportRect.right))}}this.horizontalPosition=t},this.setVerticalPosition=(t,e)=>{if(void 0===t||void 0===this.regionRect||void 0===this.anchorRect||void 0===this.viewportRect)return;let i=0;switch(this.verticalScaling){case"anchor":case"fill":i=this.verticalViewportLock?this.viewportRect.height:e.height,this.regionHeight=`${i}px`;break;case"content":i=this.regionRect.height,this.regionHeight="unset"}let o=0;switch(t){case"start":this.translateY=this.baseVerticalOffset-i,this.verticalViewportLock&&this.anchorRect.top>this.viewportRect.bottom&&(this.translateY=this.translateY-(this.anchorRect.top-this.viewportRect.bottom));break;case"insetStart":this.translateY=this.baseVerticalOffset-i+this.anchorRect.height,this.verticalViewportLock&&this.anchorRect.bottom>this.viewportRect.bottom&&(this.translateY=this.translateY-(this.anchorRect.bottom-this.viewportRect.bottom));break;case"insetEnd":this.translateY=this.baseVerticalOffset,this.verticalViewportLock&&this.anchorRect.top<this.viewportRect.top&&(this.translateY=this.translateY-(this.anchorRect.top-this.viewportRect.top));break;case"end":this.translateY=this.baseVerticalOffset+this.anchorRect.height,this.verticalViewportLock&&this.anchorRect.bottom<this.viewportRect.top&&(this.translateY=this.translateY-(this.anchorRect.bottom-this.viewportRect.top));break;case"center":if(o=(this.anchorRect.height-i)/2,this.translateY=this.baseVerticalOffset+o,this.verticalViewportLock){const t=this.anchorRect.top+o,e=this.anchorRect.bottom-o;t<this.viewportRect.top&&!(e>this.viewportRect.bottom)?this.translateY=this.translateY-(t-this.viewportRect.top):e>this.viewportRect.bottom&&!(t<this.viewportRect.top)&&(this.translateY=this.translateY-(e-this.viewportRect.bottom))}}this.verticalPosition=t},this.getPositioningOptions=t=>t?["insetStart","insetEnd"]:["start","end"],this.getAvailableSpace=(t,e,i,o,n,r)=>{const s=e-n,a=r-(e+o);switch(t){case"start":return s;case"insetStart":return s+o;case"insetEnd":return a+o;case"end":return a;case"center":return 2*Math.min(s,a)+o}},this.getNextRegionDimension=(t,e)=>{const i={height:void 0!==this.regionRect?this.regionRect.height:0,width:void 0!==this.regionRect?this.regionRect.width:0};return void 0!==t&&"fill"===this.horizontalScaling?i.width=this.getAvailableSpace(t,void 0!==this.anchorRect?this.anchorRect.left:0,void 0!==this.anchorRect?this.anchorRect.right:0,void 0!==this.anchorRect?this.anchorRect.width:0,void 0!==this.viewportRect?this.viewportRect.left:0,void 0!==this.viewportRect?this.viewportRect.right:0):"anchor"===this.horizontalScaling&&(i.width=void 0!==this.anchorRect?this.anchorRect.width:0),void 0!==e&&"fill"===this.verticalScaling?i.height=this.getAvailableSpace(e,void 0!==this.anchorRect?this.anchorRect.top:0,void 0!==this.anchorRect?this.anchorRect.bottom:0,void 0!==this.anchorRect?this.anchorRect.height:0,void 0!==this.viewportRect?this.viewportRect.top:0,void 0!==this.viewportRect?this.viewportRect.bottom:0):"anchor"===this.verticalScaling&&(i.height=void 0!==this.anchorRect?this.anchorRect.height:0),i},this.startAutoUpdateEventListeners=()=>{window.addEventListener(Ll,this.update,{passive:!0}),window.addEventListener(Vl,this.update,{passive:!0,capture:!0}),null!==this.resizeDetector&&null!==this.viewportElement&&this.resizeDetector.observe(this.viewportElement)},this.stopAutoUpdateEventListeners=()=>{window.removeEventListener(Ll,this.update),window.removeEventListener(Vl,this.update),null!==this.resizeDetector&&null!==this.viewportElement&&this.resizeDetector.unobserve(this.viewportElement)}}anchorChanged(){this.initialLayoutComplete&&(this.anchorElement=this.getAnchor())}viewportChanged(){this.initialLayoutComplete&&(this.viewportElement=this.getViewport())}horizontalPositioningModeChanged(){this.requestReset()}horizontalDefaultPositionChanged(){this.updateForAttributeChange()}horizontalViewportLockChanged(){this.updateForAttributeChange()}horizontalInsetChanged(){this.updateForAttributeChange()}horizontalThresholdChanged(){this.updateForAttributeChange()}horizontalScalingChanged(){this.updateForAttributeChange()}verticalPositioningModeChanged(){this.requestReset()}verticalDefaultPositionChanged(){this.updateForAttributeChange()}verticalViewportLockChanged(){this.updateForAttributeChange()}verticalInsetChanged(){this.updateForAttributeChange()}verticalThresholdChanged(){this.updateForAttributeChange()}verticalScalingChanged(){this.updateForAttributeChange()}fixedPlacementChanged(){this.$fastController.isConnected&&this.initialLayoutComplete&&this.initialize()}autoUpdateModeChanged(t,e){this.$fastController.isConnected&&this.initialLayoutComplete&&("auto"===t&&this.stopAutoUpdateEventListeners(),"auto"===e&&this.startAutoUpdateEventListeners())}anchorElementChanged(){this.requestReset()}viewportElementChanged(){this.$fastController.isConnected&&this.initialLayoutComplete&&this.initialize()}connectedCallback(){super.connectedCallback(),"auto"===this.autoUpdateMode&&this.startAutoUpdateEventListeners(),this.initialize()}disconnectedCallback(){super.disconnectedCallback(),"auto"===this.autoUpdateMode&&this.stopAutoUpdateEventListeners(),this.stopObservers(),this.disconnectResizeDetector()}adoptedCallback(){this.initialize()}disconnectResizeDetector(){null!==this.resizeDetector&&(this.resizeDetector.disconnect(),this.resizeDetector=null)}initializeResizeDetector(){this.disconnectResizeDetector(),this.resizeDetector=new window.ResizeObserver(this.handleResize)}updateForAttributeChange(){this.$fastController.isConnected&&this.initialLayoutComplete&&(this.forceUpdate=!0,this.update())}initialize(){this.initializeResizeDetector(),null===this.anchorElement&&(this.anchorElement=this.getAnchor()),this.requestReset()}requestReset(){this.$fastController.isConnected&&!1===this.pendingReset&&(this.setInitialState(),g.queueUpdate((()=>this.reset())),this.pendingReset=!0)}setInitialState(){this.initialLayoutComplete=!1,this.regionVisible=!1,this.translateX=0,this.translateY=0,this.baseHorizontalOffset=0,this.baseVerticalOffset=0,this.viewportRect=void 0,this.regionRect=void 0,this.anchorRect=void 0,this.verticalPosition=void 0,this.horizontalPosition=void 0,this.style.opacity="0",this.style.pointerEvents="none",this.forceUpdate=!1,this.style.position=this.fixedPlacement?"fixed":"absolute",this.updatePositionClasses(),this.updateRegionStyle()}}function Hl(t,e){const i="function"==typeof e?e:()=>e;return(e,o)=>t(e,o)?i(e,o):null}zl.intersectionService=new class{constructor(){this.intersectionDetector=null,this.observedElements=new Map,this.requestPosition=(t,e)=>{var i;null!==this.intersectionDetector&&(this.observedElements.has(t)?null===(i=this.observedElements.get(t))||void 0===i||i.push(e):(this.observedElements.set(t,[e]),this.intersectionDetector.observe(t)))},this.cancelRequestPosition=(t,e)=>{const i=this.observedElements.get(t);if(void 0!==i){const t=i.indexOf(e);-1!==t&&i.splice(t,1)}},this.initializeIntersectionDetector=()=>{n.IntersectionObserver&&(this.intersectionDetector=new IntersectionObserver(this.handleIntersection,{root:null,rootMargin:"0px",threshold:[0,1]}))},this.handleIntersection=t=>{if(null===this.intersectionDetector)return;const e=[],i=[];t.forEach((t=>{var o;null===(o=this.intersectionDetector)||void 0===o||o.unobserve(t.target);const n=this.observedElements.get(t.target);void 0!==n&&(n.forEach((o=>{let n=e.indexOf(o);-1===n&&(n=e.length,e.push(o),i.push([])),i[n].push(t)})),this.observedElements.delete(t.target))})),e.forEach(((t,e)=>{t(i[e])}))},this.initializeIntersectionDetector()}},o([I],zl.prototype,"anchor",void 0),o([I],zl.prototype,"viewport",void 0),o([I({attribute:"horizontal-positioning-mode"})],zl.prototype,"horizontalPositioningMode",void 0),o([I({attribute:"horizontal-default-position"})],zl.prototype,"horizontalDefaultPosition",void 0),o([I({attribute:"horizontal-viewport-lock",mode:"boolean"})],zl.prototype,"horizontalViewportLock",void 0),o([I({attribute:"horizontal-inset",mode:"boolean"})],zl.prototype,"horizontalInset",void 0),o([I({attribute:"horizontal-threshold"})],zl.prototype,"horizontalThreshold",void 0),o([I({attribute:"horizontal-scaling"})],zl.prototype,"horizontalScaling",void 0),o([I({attribute:"vertical-positioning-mode"})],zl.prototype,"verticalPositioningMode",void 0),o([I({attribute:"vertical-default-position"})],zl.prototype,"verticalDefaultPosition",void 0),o([I({attribute:"vertical-viewport-lock",mode:"boolean"})],zl.prototype,"verticalViewportLock",void 0),o([I({attribute:"vertical-inset",mode:"boolean"})],zl.prototype,"verticalInset",void 0),o([I({attribute:"vertical-threshold"})],zl.prototype,"verticalThreshold",void 0),o([I({attribute:"vertical-scaling"})],zl.prototype,"verticalScaling",void 0),o([I({attribute:"fixed-placement",mode:"boolean"})],zl.prototype,"fixedPlacement",void 0),o([I({attribute:"auto-update-mode"})],zl.prototype,"autoUpdateMode",void 0),o([y],zl.prototype,"anchorElement",void 0),o([y],zl.prototype,"viewportElement",void 0),o([y],zl.prototype,"initialLayoutComplete",void 0);const Ml=(t,e)=>Pe`
  :host {
    contain: layout;
    display: block;
  }
`,Bl=zl.compose({baseName:"anchored-region",template:(t,e)=>ye`
    <template class="${t=>t.initialLayoutComplete?"loaded":""}">
        ${Hl((t=>t.initialLayoutComplete),ye`
                <slot></slot>
            `)}
    </template>
`,styles:Ml}),Nl=Ml;class jl extends _t{constructor(){super(...arguments),this.generateBadgeStyle=()=>{if(!this.fill&&!this.color)return;const t=`background-color: var(--badge-fill-${this.fill});`,e=`color: var(--badge-color-${this.color});`;return this.fill&&!this.color?t:this.color&&!this.fill?e:`${e} ${t}`}}}o([I({attribute:"fill"})],jl.prototype,"fill",void 0),o([I({attribute:"color"})],jl.prototype,"color",void 0),o([I({mode:"boolean"})],jl.prototype,"circular",void 0);const Ul=(t,e)=>Pe`
    ${Me("inline-block")} :host {
      box-sizing: border-box;
      ${Ha};
    }

    .control {
      border-radius: calc(${no} * 1px);
      padding: calc(((${oo} * 0.5) - ${so}) * 1px) calc((${oo} - ${so}) * 1px);
      border: calc(${so} * 1px) solid transparent;
    }

    :host(.lightweight) .control {
      background: transparent;
      color: ${rs};
      font-weight: 600;
    }

    :host(.accent) .control {
      background: ${or};
      color: ${lr};
    }

    :host(.neutral) .control {
      background: ${_r};
      color: ${rs};
    }

    :host([circular]) .control {
      border-radius: 100px;
      min-width: calc(${mo} - calc(${oo} * 1px));
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `;class _l extends jl{constructor(){super(...arguments),this.appearance="lightweight"}appearanceChanged(t,e){t!==e&&g.queueUpdate((()=>{this.classList.add(e),this.classList.remove(t)}))}}hl([I({mode:"fromView"})],_l.prototype,"appearance",void 0);const ql=_l.compose({baseName:"badge",baseClass:jl,template:(t,e)=>ye`
    <template class="${t=>t.circular?"circular":""}">
        <div class="control" part="control" style="${t=>t.generateBadgeStyle()}">
            <slot></slot>
        </div>
    </template>
`,styles:Ul}),Gl=Ul;class Wl extends pl{constructor(){super(...arguments),this.separator=!0}}o([y],Wl.prototype,"separator",void 0),Ie(Wl,$e,fl);class Kl extends _t{slottedBreadcrumbItemsChanged(){if(this.$fastController.isConnected){if(void 0===this.slottedBreadcrumbItems||0===this.slottedBreadcrumbItems.length)return;const t=this.slottedBreadcrumbItems[this.slottedBreadcrumbItems.length-1];this.slottedBreadcrumbItems.forEach((e=>{const i=e===t;this.setItemSeparator(e,i),this.setAriaCurrent(e,i)}))}}setItemSeparator(t,e){t instanceof Wl&&(t.separator=!e)}findChildWithHref(t){var e,i;return t.childElementCount>0?t.querySelector("a[href]"):(null===(e=t.shadowRoot)||void 0===e?void 0:e.childElementCount)?null===(i=t.shadowRoot)||void 0===i?void 0:i.querySelector("a[href]"):null}setAriaCurrent(t,e){const i=this.findChildWithHref(t);null===i&&t.hasAttribute("href")&&t instanceof Wl?e?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current"):null!==i&&(e?i.setAttribute("aria-current","page"):i.removeAttribute("aria-current"))}}o([y],Kl.prototype,"slottedBreadcrumbItems",void 0);const Xl=(t,e)=>Pe`
  ${Me("inline-block")} :host {
    box-sizing: border-box;
    ${za};
  }

  .list {
    display: flex;
  }
`,Yl=Kl.compose({baseName:"breadcrumb",template:(t,e)=>ye`
    <template role="navigation">
        <div role="list" class="list" part="list">
            <slot
                ${Ae({property:"slottedBreadcrumbItems",filter:Re()})}
            ></slot>
        </div>
    </template>
`,styles:Xl}),Ql=Xl,Jl=(t,e)=>Pe`
    ${Me("inline-flex")} :host {
      background: transparent;
      color: ${rs};
      fill: currentcolor;
      box-sizing: border-box;
      ${za};
      min-width: calc(${il} * 1px);
      border-radius: calc(${no} * 1px);
    }

    .listitem {
      display: flex;
      align-items: center;
      border-radius: inherit;
    }

    .control {
      position: relative;
      align-items: center;
      box-sizing: border-box;
      color: inherit;
      fill: inherit;
      cursor: pointer;
      display: flex;
      outline: none;
      text-decoration: none;
      white-space: nowrap;
      border-radius: inherit;
    }

    .control:hover {
      color: ${ss};
    }

    .control:active {
      color: ${as};
    }

    .control:${Xa} {
      ${el}
    }

    :host(:not([href])),
    :host([aria-current]) .control {
      color: ${rs};
      fill: currentcolor;
      cursor: default;
    }

    .start {
      display: flex;
      margin-inline-end: 6px;
    }

    .end {
      display: flex;
      margin-inline-start: 6px;
    }

    .separator {
      display: flex;
    }
  `.withBehaviors(Ja(Pe`
        :host(:not([href])),
        .start,
        .end,
        .separator {
          background: ${Za.ButtonFace};
          color: ${Za.ButtonText};
          fill: currentcolor;
        }
        .separator {
          fill: ${Za.ButtonText};
        }
        :host([href]) {
          forced-color-adjust: none;
          background: ${Za.ButtonFace};
          color: ${Za.LinkText};
        }
        :host([href]) .control:hover {
          background: ${Za.LinkText};
          color: ${Za.HighlightText};
          fill: currentcolor;
        }
        .control:${Xa} {
          outline-color: ${Za.LinkText};
        }
      `)),Zl=Wl.compose({baseName:"breadcrumb-item",template:(t,e)=>ye`
    <div role="listitem" class="listitem" part="listitem">
        ${Hl((t=>t.href&&t.href.length>0),ye`
                ${gl(0,e)}
            `)}
        ${Hl((t=>!t.href),ye`
                ${Ce(0,e)}
                <slot></slot>
                ${ke(0,e)}
            `)}
        ${Hl((t=>t.separator),ye`
                <span class="separator" part="separator" aria-hidden="true">
                    <slot name="separator">${e.separator||""}</slot>
                </span>
            `)}
    </div>
`,styles:Jl,shadowOptions:{delegatesFocus:!0},separator:'\n    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">\n      <path d="M4.65 2.15a.5.5 0 000 .7L7.79 6 4.65 9.15a.5.5 0 10.7.7l3.5-3.5a.5.5 0 000-.7l-3.5-3.5a.5.5 0 00-.7 0z"/>\n    </svg>\n  '}),tc=Jl,ec="form-associated-proxy",ic="ElementInternals",oc=ic in window&&"setFormValue"in window[ic].prototype,nc=new WeakMap;function rc(t){const e=class extends t{constructor(...t){super(...t),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return oc}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const t=this.proxy.labels,e=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),i=t?e.concat(Array.from(t)):e;return Object.freeze(i)}return a}valueChanged(t,e){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(t,e){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(t,e){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),g.queueUpdate((()=>this.classList.toggle("disabled",this.disabled)))}nameChanged(t,e){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(t,e){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),g.queueUpdate((()=>this.classList.toggle("required",this.required))),this.validate()}get elementInternals(){if(!oc)return null;let t=nc.get(this);return t||(t=this.attachInternals(),nc.set(this,t)),t}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){this.proxyEventsToBlock.forEach((t=>this.proxy.removeEventListener(t,this.stopPropagation))),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(t,e,i){this.elementInternals?this.elementInternals.setValidity(t,e,i):"string"==typeof e&&this.proxy.setCustomValidity(e)}formDisabledCallback(t){this.disabled=t}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var t;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach((t=>this.proxy.addEventListener(t,this.stopPropagation))),this.proxy.disabled=this.disabled,this.proxy.required=this.required,"string"==typeof this.name&&(this.proxy.name=this.name),"string"==typeof this.value&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",ec),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",ec)),null===(t=this.shadowRoot)||void 0===t||t.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var t;this.removeChild(this.proxy),null===(t=this.shadowRoot)||void 0===t||t.removeChild(this.proxySlot)}validate(t){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage,t)}setFormValue(t,e){this.elementInternals&&this.elementInternals.setFormValue(t,e||t)}_keypressHandler(t){if(t.key===A&&this.form instanceof HTMLFormElement){const t=this.form.querySelector("[type=submit]");null==t||t.click()}}stopPropagation(t){t.stopPropagation()}};return I({mode:"boolean"})(e.prototype,"disabled"),I({mode:"fromView",attribute:"value"})(e.prototype,"initialValue"),I({attribute:"current-value"})(e.prototype,"currentValue"),I(e.prototype,"name"),I({mode:"boolean"})(e.prototype,"required"),y(e.prototype,"value"),e}function sc(t){class e extends(rc(t)){}class i extends e{constructor(...t){super(t),this.dirtyChecked=!1,this.checkedAttribute=!1,this.checked=!1,this.dirtyChecked=!1}checkedAttributeChanged(){this.defaultChecked=this.checkedAttribute}defaultCheckedChanged(){this.dirtyChecked||(this.checked=this.defaultChecked,this.dirtyChecked=!1)}checkedChanged(t,e){this.dirtyChecked||(this.dirtyChecked=!0),this.currentChecked=this.checked,this.updateForm(),this.proxy instanceof HTMLInputElement&&(this.proxy.checked=this.checked),void 0!==t&&this.$emit("change"),this.validate()}currentCheckedChanged(t,e){this.checked=this.currentChecked}updateForm(){const t=this.checked?this.value:null;this.setFormValue(t,t)}connectedCallback(){super.connectedCallback(),this.updateForm()}formResetCallback(){super.formResetCallback(),this.checked=!!this.checkedAttribute,this.dirtyChecked=!1}}return I({attribute:"checked",mode:"boolean"})(i.prototype,"checkedAttribute"),I({attribute:"current-checked",converter:C})(i.prototype,"currentChecked"),y(i.prototype,"defaultChecked"),y(i.prototype,"checked"),i}class ac extends _t{}class lc extends(rc(ac)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class cc extends lc{constructor(){super(...arguments),this.handleClick=t=>{var e;this.disabled&&(null===(e=this.defaultSlottedContent)||void 0===e?void 0:e.length)<=1&&t.stopPropagation()},this.handleSubmission=()=>{if(!this.form)return;const t=this.proxy.isConnected;t||this.attachProxy(),"function"==typeof this.form.requestSubmit?this.form.requestSubmit(this.proxy):this.proxy.click(),t||this.detachProxy()},this.handleFormReset=()=>{var t;null===(t=this.form)||void 0===t||t.reset()},this.handleUnsupportedDelegatesFocus=()=>{var t;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(null===(t=this.$fastController.definition.shadowOptions)||void 0===t?void 0:t.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(t,e){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),"submit"===e&&this.addEventListener("click",this.handleSubmission),"submit"===t&&this.removeEventListener("click",this.handleSubmission),"reset"===e&&this.addEventListener("click",this.handleFormReset),"reset"===t&&this.removeEventListener("click",this.handleFormReset)}validate(){super.validate(this.control)}connectedCallback(){var t;super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus();const e=Array.from(null===(t=this.control)||void 0===t?void 0:t.children);e&&e.forEach((t=>{t.addEventListener("click",this.handleClick)}))}disconnectedCallback(){var t;super.disconnectedCallback();const e=Array.from(null===(t=this.control)||void 0===t?void 0:t.children);e&&e.forEach((t=>{t.removeEventListener("click",this.handleClick)}))}}o([I({mode:"boolean"})],cc.prototype,"autofocus",void 0),o([I({attribute:"form"})],cc.prototype,"formId",void 0),o([I],cc.prototype,"formaction",void 0),o([I],cc.prototype,"formenctype",void 0),o([I],cc.prototype,"formmethod",void 0),o([I({mode:"boolean"})],cc.prototype,"formnovalidate",void 0),o([I],cc.prototype,"formtarget",void 0),o([I],cc.prototype,"type",void 0),o([y],cc.prototype,"defaultSlottedContent",void 0);class dc{}o([I({attribute:"aria-expanded"})],dc.prototype,"ariaExpanded",void 0),o([I({attribute:"aria-pressed"})],dc.prototype,"ariaPressed",void 0),Ie(dc,ul),Ie(cc,$e,dc);const hc="not-allowed",uc=":not([disabled])",pc="[disabled]",fc=(t,e)=>Pe`
    :host(${uc}) .control {
      cursor: pointer;
    }

    :host(${pc}) .control {
      cursor: ${hc};
    }

    @media (forced-colors: none) {
      :host(${pc}) .control {
        opacity: ${Zi};
      }
    }

    ${ml(t,e,uc,pc)}
  `.withBehaviors(Cl("neutral",vl(t,e,uc,pc)),Cl("accent",bl(t,e,uc,pc)),Cl("lightweight",xl(t,e,uc,pc)),Cl("outline",wl(t,e,uc,pc)),Cl("stealth",$l(t,e,uc,pc)));class gc extends cc{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(){const t=this.defaultSlottedContent.filter((t=>t.nodeType===Node.ELEMENT_NODE));1===t.length&&t[0]instanceof SVGElement?this.control.classList.add("icon-only"):this.control.classList.remove("icon-only")}}hl([I],gc.prototype,"appearance",void 0);const mc=gc.compose({baseName:"button",baseClass:cc,template:(t,e)=>ye`
    <button
        class="control"
        part="control"
        ?autofocus="${t=>t.autofocus}"
        ?disabled="${t=>t.disabled}"
        form="${t=>t.formId}"
        formaction="${t=>t.formaction}"
        formenctype="${t=>t.formenctype}"
        formmethod="${t=>t.formmethod}"
        formnovalidate="${t=>t.formnovalidate}"
        formtarget="${t=>t.formtarget}"
        name="${t=>t.name}"
        type="${t=>t.type}"
        value="${t=>t.value}"
        aria-atomic="${t=>t.ariaAtomic}"
        aria-busy="${t=>t.ariaBusy}"
        aria-controls="${t=>t.ariaControls}"
        aria-current="${t=>t.ariaCurrent}"
        aria-describedby="${t=>t.ariaDescribedby}"
        aria-details="${t=>t.ariaDetails}"
        aria-disabled="${t=>t.ariaDisabled}"
        aria-errormessage="${t=>t.ariaErrormessage}"
        aria-expanded="${t=>t.ariaExpanded}"
        aria-flowto="${t=>t.ariaFlowto}"
        aria-haspopup="${t=>t.ariaHaspopup}"
        aria-hidden="${t=>t.ariaHidden}"
        aria-invalid="${t=>t.ariaInvalid}"
        aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
        aria-label="${t=>t.ariaLabel}"
        aria-labelledby="${t=>t.ariaLabelledby}"
        aria-live="${t=>t.ariaLive}"
        aria-owns="${t=>t.ariaOwns}"
        aria-pressed="${t=>t.ariaPressed}"
        aria-relevant="${t=>t.ariaRelevant}"
        aria-roledescription="${t=>t.ariaRoledescription}"
        ${we("control")}
    >
        ${Ce(0,e)}
        <span class="content" part="content">
            <slot ${Ae("defaultSlottedContent")}></slot>
        </span>
        ${ke(0,e)}
    </button>
`,styles:fc,shadowOptions:{delegatesFocus:!0}}),vc=fc;class bc{constructor(t){if(this.dayFormat="numeric",this.weekdayFormat="long",this.monthFormat="long",this.yearFormat="numeric",this.date=new Date,t)for(const e in t){const i=t[e];"date"===e?this.date=this.getDateObject(i):this[e]=i}}getDateObject(t){if("string"==typeof t){const e=t.split(/[/-]/);return e.length<3?new Date:new Date(parseInt(e[2],10),parseInt(e[0],10)-1,parseInt(e[1],10))}if("day"in t&&"month"in t&&"year"in t){const{day:e,month:i,year:o}=t;return new Date(o,i-1,e)}return t}getDate(t=this.date,e={weekday:this.weekdayFormat,month:this.monthFormat,day:this.dayFormat,year:this.yearFormat},i=this.locale){const o=this.getDateObject(t),n=Object.assign({timeZone:"utc"},e);return new Intl.DateTimeFormat(i,n).format(o)}getDay(t=this.date.getDate(),e=this.dayFormat,i=this.locale){return this.getDate({month:1,day:t,year:2020},{day:e},i)}getMonth(t=this.date.getMonth()+1,e=this.monthFormat,i=this.locale){return this.getDate({month:t,day:2,year:2020},{month:e},i)}getYear(t=this.date.getFullYear(),e=this.yearFormat,i=this.locale){return this.getDate({month:2,day:2,year:t},{year:e},i)}getWeekday(t=0,e=this.weekdayFormat,i=this.locale){const o=`1-${t+1}-2017`;return this.getDate(o,{weekday:e},i)}getWeekdays(t=this.weekdayFormat,e=this.locale){return Array(7).fill(null).map(((i,o)=>this.getWeekday(o,t,e)))}}class yc extends _t{constructor(){super(...arguments),this.dateFormatter=new bc,this.readonly=!1,this.locale="en-US",this.month=(new Date).getMonth()+1,this.year=(new Date).getFullYear(),this.dayFormat="numeric",this.weekdayFormat="short",this.monthFormat="long",this.yearFormat="numeric",this.minWeeks=0,this.disabledDates="",this.selectedDates="",this.oneDayInMs=864e5}localeChanged(){this.dateFormatter.locale=this.locale}dayFormatChanged(){this.dateFormatter.dayFormat=this.dayFormat}weekdayFormatChanged(){this.dateFormatter.weekdayFormat=this.weekdayFormat}monthFormatChanged(){this.dateFormatter.monthFormat=this.monthFormat}yearFormatChanged(){this.dateFormatter.yearFormat=this.yearFormat}getMonthInfo(t=this.month,e=this.year){const i=t=>new Date(t.getFullYear(),t.getMonth(),1).getDay(),o=t=>{const e=new Date(t.getFullYear(),t.getMonth()+1,1);return new Date(e.getTime()-this.oneDayInMs).getDate()},n=new Date(e,t-1),r=new Date(e,t),s=new Date(e,t-2);return{length:o(n),month:t,start:i(n),year:e,previous:{length:o(s),month:s.getMonth()+1,start:i(s),year:s.getFullYear()},next:{length:o(r),month:r.getMonth()+1,start:i(r),year:r.getFullYear()}}}getDays(t=this.getMonthInfo(),e=this.minWeeks){e=e>10?10:e;const{start:i,length:o,previous:n,next:r}=t,s=[];let a=1-i;for(;a<o+1||s.length<e||s[s.length-1].length%7!=0;){const{month:e,year:i}=a<1?n:a>o?r:t,l=a<1?n.length+a:a>o?a-o:a,c=`${e}-${l}-${i}`,d={day:l,month:e,year:i,disabled:this.dateInString(c,this.disabledDates),selected:this.dateInString(c,this.selectedDates)},h=s[s.length-1];0===s.length||h.length%7==0?s.push([d]):h.push(d),a++}return s}dateInString(t,e){const i=e.split(",").map((t=>t.trim()));return t="string"==typeof t?t:`${t.getMonth()+1}-${t.getDate()}-${t.getFullYear()}`,i.some((e=>e===t))}getDayClassNames(t,e){const{day:i,month:o,year:n,disabled:r,selected:s}=t;return["day",e===`${o}-${i}-${n}`&&"today",this.month!==o&&"inactive",r&&"disabled",s&&"selected"].filter(Boolean).join(" ")}getWeekdayText(){const t=this.dateFormatter.getWeekdays().map((t=>({text:t})));if("long"!==this.weekdayFormat){const e=this.dateFormatter.getWeekdays("long");t.forEach(((t,i)=>{t.abbr=e[i]}))}return t}handleDateSelect(t,e){t.preventDefault,this.$emit("dateselected",e)}handleKeydown(t,e){return t.key===A&&this.handleDateSelect(t,e),!0}}function xc(t,e,i){return{index:t,removed:e,addedCount:i}}o([I({mode:"boolean"})],yc.prototype,"readonly",void 0),o([I],yc.prototype,"locale",void 0),o([I({converter:F})],yc.prototype,"month",void 0),o([I({converter:F})],yc.prototype,"year",void 0),o([I({attribute:"day-format",mode:"fromView"})],yc.prototype,"dayFormat",void 0),o([I({attribute:"weekday-format",mode:"fromView"})],yc.prototype,"weekdayFormat",void 0),o([I({attribute:"month-format",mode:"fromView"})],yc.prototype,"monthFormat",void 0),o([I({attribute:"year-format",mode:"fromView"})],yc.prototype,"yearFormat",void 0),o([I({attribute:"min-weeks",converter:F})],yc.prototype,"minWeeks",void 0),o([I({attribute:"disabled-dates"})],yc.prototype,"disabledDates",void 0),o([I({attribute:"selected-dates"})],yc.prototype,"selectedDates",void 0);const wc=0,$c=1,kc=2,Cc=3;function Fc(t,e,i,o,n,r){let s=0,l=0;const c=Math.min(i-e,r-n);if(0===e&&0===n&&(s=function(t,e,i){for(let o=0;o<i;++o)if(t[o]!==e[o])return o;return i}(t,o,c)),i===t.length&&r===o.length&&(l=function(t,e,i){let o=t.length,n=e.length,r=0;for(;r<i&&t[--o]===e[--n];)r++;return r}(t,o,c-s)),n+=s,r-=l,(i-=l)-(e+=s)==0&&r-n==0)return a;if(e===i){const t=xc(e,[],0);for(;n<r;)t.removed.push(o[n++]);return[t]}if(n===r)return[xc(e,[],i-e)];const d=function(t){let e=t.length-1,i=t[0].length-1,o=t[e][i];const n=[];for(;e>0||i>0;){if(0===e){n.push(kc),i--;continue}if(0===i){n.push(Cc),e--;continue}const r=t[e-1][i-1],s=t[e-1][i],a=t[e][i-1];let l;l=s<a?s<r?s:r:a<r?a:r,l===r?(r===o?n.push(wc):(n.push($c),o=r),e--,i--):l===s?(n.push(Cc),e--,o=s):(n.push(kc),i--,o=a)}return n.reverse(),n}(function(t,e,i,o,n,r){const s=r-n+1,a=i-e+1,l=new Array(s);let c,d;for(let t=0;t<s;++t)l[t]=new Array(a),l[t][0]=t;for(let t=0;t<a;++t)l[0][t]=t;for(let i=1;i<s;++i)for(let r=1;r<a;++r)t[e+r-1]===o[n+i-1]?l[i][r]=l[i-1][r-1]:(c=l[i-1][r]+1,d=l[i][r-1]+1,l[i][r]=c<d?c:d);return l}(t,e,i,o,n,r)),h=[];let u,p=e,f=n;for(let t=0;t<d.length;++t)switch(d[t]){case wc:void 0!==u&&(h.push(u),u=void 0),p++,f++;break;case $c:void 0===u&&(u=xc(p,[],0)),u.addedCount++,p++,u.removed.push(o[f]),f++;break;case kc:void 0===u&&(u=xc(p,[],0)),u.addedCount++,p++;break;case Cc:void 0===u&&(u=xc(p,[],0)),u.removed.push(o[f]),f++}return void 0!==u&&h.push(u),h}const Sc=Array.prototype.push;function Ic(t,e,i,o){const n=xc(e,i,o);let r=!1,s=0;for(let e=0;e<t.length;e++){const i=t[e];if(i.index+=s,r)continue;const o=(a=n.index,l=n.index+n.removed.length,c=i.index,d=i.index+i.addedCount,l<c||d<a?-1:l===c||d===a?0:a<c?l<d?l-c:d-c:d<l?d-a:l-a);if(o>=0){t.splice(e,1),e--,s-=i.addedCount-i.removed.length,n.addedCount+=i.addedCount-o;const a=n.removed.length+i.removed.length-o;if(n.addedCount||a){let t=i.removed;if(n.index<i.index){const e=n.removed.slice(0,i.index-n.index);Sc.apply(e,t),t=e}if(n.index+n.removed.length>i.index+i.addedCount){const e=n.removed.slice(i.index+i.addedCount-n.index);Sc.apply(t,e)}n.removed=t,i.index<n.index&&(n.index=i.index)}else r=!0}else if(n.index<i.index){r=!0,t.splice(e,0,n),e++;const o=n.addedCount-n.removed.length;i.index+=o,s+=o}}var a,l,c,d;r||t.push(n)}let Tc=!1;function Dc(t,e){let i=t.index;const o=e.length;return i>o?i=o-t.addedCount:i<0&&(i=o+t.removed.length+i-t.addedCount),i<0&&(i=0),t.index=i,t}class Rc extends m{constructor(t){super(t),this.oldCollection=void 0,this.splices=void 0,this.needsQueue=!0,this.call=this.flush,Reflect.defineProperty(t,"$fastController",{value:this,enumerable:!1})}subscribe(t){this.flush(),super.subscribe(t)}addSplice(t){void 0===this.splices?this.splices=[t]:this.splices.push(t),this.needsQueue&&(this.needsQueue=!1,g.queueUpdate(this))}reset(t){this.oldCollection=t,this.needsQueue&&(this.needsQueue=!1,g.queueUpdate(this))}flush(){const t=this.splices,e=this.oldCollection;if(void 0===t&&void 0===e)return;this.needsQueue=!0,this.splices=void 0,this.oldCollection=void 0;const i=void 0===e?function(t,e){let i=[];const o=function(t){const e=[];for(let i=0,o=t.length;i<o;i++){const o=t[i];Ic(e,o.index,o.removed,o.addedCount)}return e}(e);for(let e=0,n=o.length;e<n;++e){const n=o[e];1!==n.addedCount||1!==n.removed.length?i=i.concat(Fc(t,n.index,n.index+n.addedCount,n.removed,0,n.removed.length)):n.removed[0]!==t[n.index]&&i.push(n)}return i}(this.source,t):Fc(this.source,0,this.source.length,e,0,e.length);this.notify(i)}}const Oc=Object.freeze({positioning:!1,recycle:!0});function Ec(t,e,i,o){t.bind(e[i],o)}function Ac(t,e,i,o){const n=Object.create(o);n.index=i,n.length=e.length,t.bind(e[i],n)}class Lc{constructor(t,e,i,o,n,r){this.location=t,this.itemsBinding=e,this.templateBinding=o,this.options=r,this.source=null,this.views=[],this.items=null,this.itemsObserver=null,this.originalContext=void 0,this.childContext=void 0,this.bindView=Ec,this.itemsBindingObserver=b.binding(e,this,i),this.templateBindingObserver=b.binding(o,this,n),r.positioning&&(this.bindView=Ac)}bind(t,e){this.source=t,this.originalContext=e,this.childContext=Object.create(e),this.childContext.parent=t,this.childContext.parentContext=this.originalContext,this.items=this.itemsBindingObserver.observe(t,this.originalContext),this.template=this.templateBindingObserver.observe(t,this.originalContext),this.observeItems(!0),this.refreshAllViews()}unbind(){this.source=null,this.items=null,null!==this.itemsObserver&&this.itemsObserver.unsubscribe(this),this.unbindAllViews(),this.itemsBindingObserver.disconnect(),this.templateBindingObserver.disconnect()}handleChange(t,e){t===this.itemsBinding?(this.items=this.itemsBindingObserver.observe(this.source,this.originalContext),this.observeItems(),this.refreshAllViews()):t===this.templateBinding?(this.template=this.templateBindingObserver.observe(this.source,this.originalContext),this.refreshAllViews(!0)):this.updateViews(e)}observeItems(t=!1){if(!this.items)return void(this.items=a);const e=this.itemsObserver,i=this.itemsObserver=b.getNotifier(this.items),o=e!==i;o&&null!==e&&e.unsubscribe(this),(o||t)&&i.subscribe(this)}updateViews(t){const e=this.childContext,i=this.views,o=this.bindView,n=this.items,r=this.template,s=this.options.recycle,a=[];let l=0,c=0;for(let d=0,h=t.length;d<h;++d){const h=t[d],u=h.removed;let p=0,f=h.index;const g=f+h.addedCount,m=i.splice(h.index,u.length),v=c=a.length+m.length;for(;f<g;++f){const t=i[f],d=t?t.firstChild:this.location;let h;s&&c>0?(p<=v&&m.length>0?(h=m[p],p++):(h=a[l],l++),c--):h=r.create(),i.splice(f,0,h),o(h,n,f,e),h.insertBefore(d)}m[p]&&a.push(...m.slice(p))}for(let t=l,e=a.length;t<e;++t)a[t].dispose();if(this.options.positioning)for(let t=0,e=i.length;t<e;++t){const o=i[t].context;o.length=e,o.index=t}}refreshAllViews(t=!1){const e=this.items,i=this.childContext,o=this.template,n=this.location,r=this.bindView;let s=e.length,a=this.views,l=a.length;if(0!==s&&!t&&this.options.recycle||(me.disposeContiguousBatch(a),l=0),0===l){this.views=a=new Array(s);for(let t=0;t<s;++t){const s=o.create();r(s,e,t,i),a[t]=s,s.insertBefore(n)}}else{let t=0;for(;t<s;++t)if(t<l)r(a[t],e,t,i);else{const s=o.create();r(s,e,t,i),a.push(s),s.insertBefore(n)}const c=a.splice(t,l-t);for(t=0,s=c.length;t<s;++t)c[t].dispose()}}unbindAllViews(){const t=this.views;for(let e=0,i=t.length;e<i;++e)t[e].unbind()}}class Vc extends Wt{constructor(t,e,i){super(),this.itemsBinding=t,this.templateBinding=e,this.options=i,this.createPlaceholder=g.createBlockPlaceholder,function(){if(Tc)return;Tc=!0,b.setArrayObserverFactory((t=>new Rc(t)));const t=Array.prototype;if(t.$fastPatch)return;Reflect.defineProperty(t,"$fastPatch",{value:1,enumerable:!1});const e=t.pop,i=t.push,o=t.reverse,n=t.shift,r=t.sort,s=t.splice,a=t.unshift;t.pop=function(){const t=this.length>0,i=e.apply(this,arguments),o=this.$fastController;return void 0!==o&&t&&o.addSplice(xc(this.length,[i],0)),i},t.push=function(){const t=i.apply(this,arguments),e=this.$fastController;return void 0!==e&&e.addSplice(Dc(xc(this.length-arguments.length,[],arguments.length),this)),t},t.reverse=function(){let t;const e=this.$fastController;void 0!==e&&(e.flush(),t=this.slice());const i=o.apply(this,arguments);return void 0!==e&&e.reset(t),i},t.shift=function(){const t=this.length>0,e=n.apply(this,arguments),i=this.$fastController;return void 0!==i&&t&&i.addSplice(xc(0,[e],0)),e},t.sort=function(){let t;const e=this.$fastController;void 0!==e&&(e.flush(),t=this.slice());const i=r.apply(this,arguments);return void 0!==e&&e.reset(t),i},t.splice=function(){const t=s.apply(this,arguments),e=this.$fastController;return void 0!==e&&e.addSplice(Dc(xc(+arguments[0],t,arguments.length>2?arguments.length-2:0),this)),t},t.unshift=function(){const t=a.apply(this,arguments),e=this.$fastController;return void 0!==e&&e.addSplice(Dc(xc(0,[],arguments.length),this)),t}}(),this.isItemsBindingVolatile=b.isVolatileBinding(t),this.isTemplateBindingVolatile=b.isVolatileBinding(e)}createBehavior(t){return new Lc(t,this.itemsBinding,this.isItemsBindingVolatile,this.templateBinding,this.isTemplateBindingVolatile,this.options)}}function Pc(t,e,i=Oc){return new Vc(t,"function"==typeof e?e:()=>e,Object.assign(Object.assign({},Oc),i))}const zc="sticky",Hc="default",Mc="columnheader",Bc="default",Nc=ye`
    <template>
        ${t=>null===t.rowData||null===t.columnDefinition||null===t.columnDefinition.columnDataKey?null:t.rowData[t.columnDefinition.columnDataKey]}
    </template>
`,jc=ye`
    <template>
        ${t=>null===t.columnDefinition?null:void 0===t.columnDefinition.title?t.columnDefinition.columnDataKey:t.columnDefinition.title}
    </template>
`;class Uc extends _t{constructor(){super(...arguments),this.cellType=Hc,this.rowData=null,this.columnDefinition=null,this.isActiveCell=!1,this.customCellView=null,this.updateCellStyle=()=>{this.style.gridColumn=this.gridColumn}}cellTypeChanged(){this.$fastController.isConnected&&this.updateCellView()}gridColumnChanged(){this.$fastController.isConnected&&this.updateCellStyle()}columnDefinitionChanged(t,e){this.$fastController.isConnected&&this.updateCellView()}connectedCallback(){var t;super.connectedCallback(),this.addEventListener(Ol,this.handleFocusin),this.addEventListener(El,this.handleFocusout),this.addEventListener(Al,this.handleKeydown),this.style.gridColumn=`${void 0===(null===(t=this.columnDefinition)||void 0===t?void 0:t.gridColumn)?0:this.columnDefinition.gridColumn}`,this.updateCellView(),this.updateCellStyle()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(Ol,this.handleFocusin),this.removeEventListener(El,this.handleFocusout),this.removeEventListener(Al,this.handleKeydown),this.disconnectCellView()}handleFocusin(t){if(!this.isActiveCell){if(this.isActiveCell=!0,this.cellType===Mc){if(null!==this.columnDefinition&&!0!==this.columnDefinition.headerCellInternalFocusQueue&&"function"==typeof this.columnDefinition.headerCellFocusTargetCallback){const t=this.columnDefinition.headerCellFocusTargetCallback(this);null!==t&&t.focus()}}else if(null!==this.columnDefinition&&!0!==this.columnDefinition.cellInternalFocusQueue&&"function"==typeof this.columnDefinition.cellFocusTargetCallback){const t=this.columnDefinition.cellFocusTargetCallback(this);null!==t&&t.focus()}this.$emit("cell-focused",this)}}handleFocusout(t){this===document.activeElement||this.contains(document.activeElement)||(this.isActiveCell=!1)}handleKeydown(t){if(!(t.defaultPrevented||null===this.columnDefinition||this.cellType===Hc&&!0!==this.columnDefinition.cellInternalFocusQueue||this.cellType===Mc&&!0!==this.columnDefinition.headerCellInternalFocusQueue))switch(t.key){case A:case"F2":if(this.contains(document.activeElement)&&document.activeElement!==this)return;if(this.cellType===Mc){if(void 0!==this.columnDefinition.headerCellFocusTargetCallback){const e=this.columnDefinition.headerCellFocusTargetCallback(this);null!==e&&e.focus(),t.preventDefault()}}else if(void 0!==this.columnDefinition.cellFocusTargetCallback){const e=this.columnDefinition.cellFocusTargetCallback(this);null!==e&&e.focus(),t.preventDefault()}break;case L:this.contains(document.activeElement)&&document.activeElement!==this&&(this.focus(),t.preventDefault())}}updateCellView(){if(this.disconnectCellView(),null!==this.columnDefinition)switch(this.cellType){case Mc:void 0!==this.columnDefinition.headerCellTemplate?this.customCellView=this.columnDefinition.headerCellTemplate.render(this,this):this.customCellView=jc.render(this,this);break;case void 0:case"rowheader":case Hc:void 0!==this.columnDefinition.cellTemplate?this.customCellView=this.columnDefinition.cellTemplate.render(this,this):this.customCellView=Nc.render(this,this)}}disconnectCellView(){null!==this.customCellView&&(this.customCellView.dispose(),this.customCellView=null)}}o([I({attribute:"cell-type"})],Uc.prototype,"cellType",void 0),o([I({attribute:"grid-column"})],Uc.prototype,"gridColumn",void 0),o([y],Uc.prototype,"rowData",void 0),o([y],Uc.prototype,"columnDefinition",void 0);class _c extends _t{constructor(){super(...arguments),this.rowType=Bc,this.rowData=null,this.columnDefinitions=null,this.isActiveRow=!1,this.cellsRepeatBehavior=null,this.cellsPlaceholder=null,this.focusColumnIndex=0,this.refocusOnLoad=!1,this.updateRowStyle=()=>{this.style.gridTemplateColumns=this.gridTemplateColumns}}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowStyle()}rowTypeChanged(){this.$fastController.isConnected&&this.updateItemTemplate()}rowDataChanged(){null!==this.rowData&&this.isActiveRow&&(this.refocusOnLoad=!0)}cellItemTemplateChanged(){this.updateItemTemplate()}headerCellItemTemplateChanged(){this.updateItemTemplate()}connectedCallback(){super.connectedCallback(),null===this.cellsRepeatBehavior&&(this.cellsPlaceholder=document.createComment(""),this.appendChild(this.cellsPlaceholder),this.updateItemTemplate(),this.cellsRepeatBehavior=new Vc((t=>t.columnDefinitions),(t=>t.activeCellItemTemplate),{positioning:!0}).createBehavior(this.cellsPlaceholder),this.$fastController.addBehaviors([this.cellsRepeatBehavior])),this.addEventListener("cell-focused",this.handleCellFocus),this.addEventListener(El,this.handleFocusout),this.addEventListener(Al,this.handleKeydown),this.updateRowStyle(),this.refocusOnLoad&&(this.refocusOnLoad=!1,this.cellElements.length>this.focusColumnIndex&&this.cellElements[this.focusColumnIndex].focus())}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("cell-focused",this.handleCellFocus),this.removeEventListener(El,this.handleFocusout),this.removeEventListener(Al,this.handleKeydown)}handleFocusout(t){this.contains(t.target)||(this.isActiveRow=!1,this.focusColumnIndex=0)}handleCellFocus(t){this.isActiveRow=!0,this.focusColumnIndex=this.cellElements.indexOf(t.target),this.$emit("row-focused",this)}handleKeydown(t){if(t.defaultPrevented)return;let e=0;switch(t.key){case R:e=Math.max(0,this.focusColumnIndex-1),this.cellElements[e].focus(),t.preventDefault();break;case O:e=Math.min(this.cellElements.length-1,this.focusColumnIndex+1),this.cellElements[e].focus(),t.preventDefault();break;case V:t.ctrlKey||(this.cellElements[0].focus(),t.preventDefault());break;case P:t.ctrlKey||(this.cellElements[this.cellElements.length-1].focus(),t.preventDefault())}}updateItemTemplate(){this.activeCellItemTemplate=this.rowType===Bc&&void 0!==this.cellItemTemplate?this.cellItemTemplate:this.rowType===Bc&&void 0===this.cellItemTemplate?this.defaultCellItemTemplate:void 0!==this.headerCellItemTemplate?this.headerCellItemTemplate:this.defaultHeaderCellItemTemplate}}o([I({attribute:"grid-template-columns"})],_c.prototype,"gridTemplateColumns",void 0),o([I({attribute:"row-type"})],_c.prototype,"rowType",void 0),o([y],_c.prototype,"rowData",void 0),o([y],_c.prototype,"columnDefinitions",void 0),o([y],_c.prototype,"cellItemTemplate",void 0),o([y],_c.prototype,"headerCellItemTemplate",void 0),o([y],_c.prototype,"rowIndex",void 0),o([y],_c.prototype,"isActiveRow",void 0),o([y],_c.prototype,"activeCellItemTemplate",void 0),o([y],_c.prototype,"defaultCellItemTemplate",void 0),o([y],_c.prototype,"defaultHeaderCellItemTemplate",void 0),o([y],_c.prototype,"cellElements",void 0);class qc extends _t{constructor(){super(),this.noTabbing=!1,this.generateHeader="default",this.rowsData=[],this.columnDefinitions=null,this.focusRowIndex=0,this.focusColumnIndex=0,this.rowsPlaceholder=null,this.generatedHeader=null,this.isUpdatingFocus=!1,this.pendingFocusUpdate=!1,this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!0,this.generatedGridTemplateColumns="",this.focusOnCell=(t,e,i)=>{if(0===this.rowElements.length)return this.focusRowIndex=0,void(this.focusColumnIndex=0);const o=Math.max(0,Math.min(this.rowElements.length-1,t)),n=this.rowElements[o].querySelectorAll('[role="cell"], [role="gridcell"], [role="columnheader"], [role="rowheader"]'),r=n[Math.max(0,Math.min(n.length-1,e))];i&&this.scrollHeight!==this.clientHeight&&(o<this.focusRowIndex&&this.scrollTop>0||o>this.focusRowIndex&&this.scrollTop<this.scrollHeight-this.clientHeight)&&r.scrollIntoView({block:"center",inline:"center"}),r.focus()},this.onChildListChange=(t,e)=>{t&&t.length&&(t.forEach((t=>{t.addedNodes.forEach((t=>{1===t.nodeType&&"row"===t.getAttribute("role")&&(t.columnDefinitions=this.columnDefinitions)}))})),this.queueRowIndexUpdate())},this.queueRowIndexUpdate=()=>{this.rowindexUpdateQueued||(this.rowindexUpdateQueued=!0,g.queueUpdate(this.updateRowIndexes))},this.updateRowIndexes=()=>{let t=this.gridTemplateColumns;if(void 0===t){if(""===this.generatedGridTemplateColumns&&this.rowElements.length>0){const t=this.rowElements[0];this.generatedGridTemplateColumns=new Array(t.cellElements.length).fill("1fr").join(" ")}t=this.generatedGridTemplateColumns}this.rowElements.forEach(((e,i)=>{const o=e;o.rowIndex=i,o.gridTemplateColumns=t,this.columnDefinitionsStale&&(o.columnDefinitions=this.columnDefinitions)})),this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!1}}static generateTemplateColumns(t){let e="";return t.forEach((t=>{e=`${e}${""===e?"":" "}1fr`})),e}noTabbingChanged(){this.$fastController.isConnected&&(this.noTabbing?this.setAttribute("tabIndex","-1"):this.setAttribute("tabIndex",this.contains(document.activeElement)||this===document.activeElement?"-1":"0"))}generateHeaderChanged(){this.$fastController.isConnected&&this.toggleGeneratedHeader()}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowIndexes()}rowsDataChanged(){null===this.columnDefinitions&&this.rowsData.length>0&&(this.columnDefinitions=qc.generateColumns(this.rowsData[0])),this.$fastController.isConnected&&this.toggleGeneratedHeader()}columnDefinitionsChanged(){null!==this.columnDefinitions?(this.generatedGridTemplateColumns=qc.generateTemplateColumns(this.columnDefinitions),this.$fastController.isConnected&&(this.columnDefinitionsStale=!0,this.queueRowIndexUpdate())):this.generatedGridTemplateColumns=""}headerCellItemTemplateChanged(){this.$fastController.isConnected&&null!==this.generatedHeader&&(this.generatedHeader.headerCellItemTemplate=this.headerCellItemTemplate)}focusRowIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}focusColumnIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}connectedCallback(){super.connectedCallback(),void 0===this.rowItemTemplate&&(this.rowItemTemplate=this.defaultRowItemTemplate),this.rowsPlaceholder=document.createComment(""),this.appendChild(this.rowsPlaceholder),this.toggleGeneratedHeader(),this.rowsRepeatBehavior=new Vc((t=>t.rowsData),(t=>t.rowItemTemplate),{positioning:!0}).createBehavior(this.rowsPlaceholder),this.$fastController.addBehaviors([this.rowsRepeatBehavior]),this.addEventListener("row-focused",this.handleRowFocus),this.addEventListener(Rl,this.handleFocus),this.addEventListener(Al,this.handleKeydown),this.addEventListener(El,this.handleFocusOut),this.observer=new MutationObserver(this.onChildListChange),this.observer.observe(this,{childList:!0}),this.noTabbing&&this.setAttribute("tabindex","-1"),g.queueUpdate(this.queueRowIndexUpdate)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("row-focused",this.handleRowFocus),this.removeEventListener(Rl,this.handleFocus),this.removeEventListener(Al,this.handleKeydown),this.removeEventListener(El,this.handleFocusOut),this.observer.disconnect(),this.rowsPlaceholder=null,this.generatedHeader=null}handleRowFocus(t){this.isUpdatingFocus=!0;const e=t.target;this.focusRowIndex=this.rowElements.indexOf(e),this.focusColumnIndex=e.focusColumnIndex,this.setAttribute("tabIndex","-1"),this.isUpdatingFocus=!1}handleFocus(t){this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}handleFocusOut(t){null!==t.relatedTarget&&this.contains(t.relatedTarget)||this.setAttribute("tabIndex",this.noTabbing?"-1":"0")}handleKeydown(t){if(t.defaultPrevented)return;let e;const i=this.rowElements.length-1,o=this.offsetHeight+this.scrollTop,n=this.rowElements[i];switch(t.key){case E:t.preventDefault(),this.focusOnCell(this.focusRowIndex-1,this.focusColumnIndex,!0);break;case D:t.preventDefault(),this.focusOnCell(this.focusRowIndex+1,this.focusColumnIndex,!0);break;case"PageUp":if(t.preventDefault(),0===this.rowElements.length){this.focusOnCell(0,0,!1);break}if(0===this.focusRowIndex)return void this.focusOnCell(0,this.focusColumnIndex,!1);for(e=this.focusRowIndex-1;e>=0;e--){const t=this.rowElements[e];if(t.offsetTop<this.scrollTop){this.scrollTop=t.offsetTop+t.clientHeight-this.clientHeight;break}}this.focusOnCell(e,this.focusColumnIndex,!1);break;case"PageDown":if(t.preventDefault(),0===this.rowElements.length){this.focusOnCell(0,0,!1);break}if(this.focusRowIndex>=i||n.offsetTop+n.offsetHeight<=o)return void this.focusOnCell(i,this.focusColumnIndex,!1);for(e=this.focusRowIndex+1;e<=i;e++){const t=this.rowElements[e];if(t.offsetTop+t.offsetHeight>o){let e=0;this.generateHeader===zc&&null!==this.generatedHeader&&(e=this.generatedHeader.clientHeight),this.scrollTop=t.offsetTop-e;break}}this.focusOnCell(e,this.focusColumnIndex,!1);break;case V:t.ctrlKey&&(t.preventDefault(),this.focusOnCell(0,0,!0));break;case P:t.ctrlKey&&null!==this.columnDefinitions&&(t.preventDefault(),this.focusOnCell(this.rowElements.length-1,this.columnDefinitions.length-1,!0))}}queueFocusUpdate(){this.isUpdatingFocus&&(this.contains(document.activeElement)||this===document.activeElement)||!1===this.pendingFocusUpdate&&(this.pendingFocusUpdate=!0,g.queueUpdate((()=>this.updateFocus())))}updateFocus(){this.pendingFocusUpdate=!1,this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}toggleGeneratedHeader(){if(null!==this.generatedHeader&&(this.removeChild(this.generatedHeader),this.generatedHeader=null),"none"!==this.generateHeader&&this.rowsData.length>0){const t=document.createElement(this.rowElementTag);return this.generatedHeader=t,this.generatedHeader.columnDefinitions=this.columnDefinitions,this.generatedHeader.gridTemplateColumns=this.gridTemplateColumns,this.generatedHeader.rowType=this.generateHeader===zc?"sticky-header":"header",void(null===this.firstChild&&null===this.rowsPlaceholder||this.insertBefore(t,null!==this.firstChild?this.firstChild:this.rowsPlaceholder))}}}qc.generateColumns=t=>Object.getOwnPropertyNames(t).map(((t,e)=>({columnDataKey:t,gridColumn:`${e}`}))),o([I({attribute:"no-tabbing",mode:"boolean"})],qc.prototype,"noTabbing",void 0),o([I({attribute:"generate-header"})],qc.prototype,"generateHeader",void 0),o([I({attribute:"grid-template-columns"})],qc.prototype,"gridTemplateColumns",void 0),o([y],qc.prototype,"rowsData",void 0),o([y],qc.prototype,"columnDefinitions",void 0),o([y],qc.prototype,"rowItemTemplate",void 0),o([y],qc.prototype,"cellItemTemplate",void 0),o([y],qc.prototype,"headerCellItemTemplate",void 0),o([y],qc.prototype,"focusRowIndex",void 0),o([y],qc.prototype,"focusColumnIndex",void 0),o([y],qc.prototype,"defaultRowItemTemplate",void 0),o([y],qc.prototype,"rowElementTag",void 0),o([y],qc.prototype,"rowElements",void 0);const Gc=ye`
    <div
        class="title"
        part="title"
        aria-label="${t=>t.dateFormatter.getDate(`${t.month}-2-${t.year}`,{month:"long",year:"numeric"})}"
    >
        <span part="month">
            ${t=>t.dateFormatter.getMonth(t.month)}
        </span>
        <span part="year">${t=>t.dateFormatter.getYear(t.year)}</span>
    </div>
`,Wc=(t,e)=>{const i=t.tagFor(qc),o=t.tagFor(_c);return ye`
    <${i} class="days interact" part="days" generate-header="none">
        <${o}
            class="week-days"
            part="week-days"
            role="row"
            row-type="header"
            grid-template-columns="1fr 1fr 1fr 1fr 1fr 1fr 1fr"
        >
            ${Pc((t=>t.getWeekdayText()),(t=>{const e=t.tagFor(Uc);return ye`
        <${e}
            class="week-day"
            part="week-day"
            tabindex="-1"
            grid-column="${(t,e)=>e.index+1}"
            abbr="${t=>t.abbr}"
        >
            ${t=>t.text}
        </${e}>
    `})(t),{positioning:!0})}
        </${o}>
        ${Pc((t=>t.getDays()),((t,e)=>{const i=t.tagFor(_c);return ye`
        <${i}
            class="week"
            part="week"
            role="row"
            role-type="default"
            grid-template-columns="1fr 1fr 1fr 1fr 1fr 1fr 1fr"
        >
        ${Pc((t=>t),((t,e)=>{const i=t.tagFor(Uc);return ye`
        <${i}
            class="${(t,i)=>i.parentContext.parent.getDayClassNames(t,e)}"
            part="day"
            tabindex="-1"
            role="gridcell"
            grid-column="${(t,e)=>e.index+1}"
            @click="${(t,e)=>e.parentContext.parent.handleDateSelect(e.event,t)}"
            @keydown="${(t,e)=>e.parentContext.parent.handleKeydown(e.event,t)}"
            aria-label="${(t,e)=>e.parentContext.parent.dateFormatter.getDate(`${t.month}-${t.day}-${t.year}`,{month:"long",day:"numeric"})}"
        >
            <div
                class="date"
                part="${t=>e===`${t.month}-${t.day}-${t.year}`?"today":"date"}"
            >
                ${(t,e)=>e.parentContext.parent.dateFormatter.getDay(t.day)}
            </div>
            <slot name="${t=>t.month}-${t=>t.day}-${t=>t.year}"></slot>
        </${i}>
    `})(t,e),{positioning:!0})}
        </${i}>
    `})(t,e))}
    </${i}>
`};class Kc{constructor(t,e){this.cache=new WeakMap,this.ltr=t,this.rtl=e}bind(t){this.attach(t)}unbind(t){const e=this.cache.get(t);e&&Ji.unsubscribe(e)}attach(t){const e=this.cache.get(t)||new Xc(this.ltr,this.rtl,t),i=Ji.getValueFor(t);Ji.subscribe(e),e.attach(i),this.cache.set(t,e)}}class Xc{constructor(t,e,i){this.ltr=t,this.rtl=e,this.source=i,this.attached=null}handleChange({target:t,token:e}){this.attach(e.getValueFor(this.source))}attach(t){this.attached!==this[t]&&(null!==this.attached&&this.source.$fastController.removeStyles(this.attached),this.attached=this[t],null!==this.attached&&this.source.$fastController.addStyles(this.attached))}}const Yc=Pe`
.day.disabled::before {
  transform: translate(-50%, 0) rotate(45deg);
}
`,Qc=Pe`
.day.disabled::before {
  transform: translate(50%, 0) rotate(-45deg);
}
`;class Jc extends yc{constructor(){super(...arguments),this.readonly=!0}}hl([I({converter:C})],Jc.prototype,"readonly",void 0);const Zc=Jc.compose({baseName:"calendar",template:(t,e)=>{var i;const o=new Date,n=`${o.getMonth()+1}-${o.getDate()}-${o.getFullYear()}`;return ye`
        <template>
            ${Se}
            ${e.title instanceof Function?e.title(t,e):null!==(i=e.title)&&void 0!==i?i:""}
            <slot></slot>
            ${Hl((t=>!1===t.readonly),Wc(t,n))}
            ${Hl((t=>!0===t.readonly),(t=>ye`
        <div class="days" part="days">
            <div class="week-days" part="week-days">
                ${Pc((t=>t.getWeekdayText()),ye`
                        <div class="week-day" part="week-day" abbr="${t=>t.abbr}">
                            ${t=>t.text}
                        </div>
                    `)}
            </div>
            ${Pc((t=>t.getDays()),ye`
                    <div class="week">
                        ${Pc((t=>t),ye`
                                <div
                                    class="${(e,i)=>i.parentContext.parent.getDayClassNames(e,t)}"
                                    part="day"
                                    aria-label="${(t,e)=>e.parentContext.parent.dateFormatter.getDate(`${t.month}-${t.day}-${t.year}`,{month:"long",day:"numeric"})}"
                                >
                                    <div
                                        class="date"
                                        part="${e=>t===`${e.month}-${e.day}-${e.year}`?"today":"date"}"
                                    >
                                        ${(t,e)=>e.parentContext.parent.dateFormatter.getDay(t.day)}
                                    </div>
                                    <slot
                                        name="${t=>t.month}-${t=>t.day}-${t=>t.year}"
                                    ></slot>
                                </div>
                            `)}
                    </div>
                `)}
        </div>
    `)(n))}
            ${Fe}
        </template>
    `},styles:(t,e)=>Pe`
${Me("inline-block")} :host {
  --calendar-cell-size: calc((${to} + 2 + ${io}) * ${oo} * 1px);
  --calendar-gap: 2px;
  ${za}
  color: ${rs};
}

.title {
  padding: calc(${oo} * 2px);
  font-weight: 600;
}

.days {
  text-align: center;
}

.week-days,
.week {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: var(--calendar-gap);
  border: 0;
  padding: 0;
}

.day,
.week-day {
  border: 0;
  width: var(--calendar-cell-size);
  height: var(--calendar-cell-size);
  line-height: var(--calendar-cell-size);
  padding: 0;
  box-sizing: initial;
}

.week-day {
  font-weight: 600;
}

.day {
  border: calc(${so} * 1px) solid transparent;
  border-radius: calc(${no} * 1px);
}

.interact .day {
  cursor: pointer;
}

.date {
  height: 100%;
}

.inactive .date,
.inactive.disabled::before {
  color: ${ds};
}

.disabled::before {
  content: '';
  display: inline-block;
  width: calc(var(--calendar-cell-size) * .8);
  height: calc(${so} * 1px);
  background: currentColor;
  position: absolute;
  margin-top: calc(var(--calendar-cell-size) / 2);
  transform-origin: center;
  z-index: 1;
}

.selected {
  color: ${or};
  border: 1px solid ${or};
  background: ${tr};
}

.selected + .selected {
  border-start-start-radius: 0;
  border-end-start-radius: 0;
  border-inline-start-width: 0;
  padding-inline-start: calc(var(--calendar-gap) + (${so} + ${no}) * 1px);
  margin-inline-start: calc((${no} * -1px) - var(--calendar-gap));
}

.today.disabled::before {
  color: ${lr};
}

.today .date {
  color: ${lr};
  background: ${or};
  border-radius: 50%;
  position: relative;
}
`.withBehaviors(Ja(Pe`
          .day.selected {
              color: ${Za.Highlight};
          }

          .today .date {
              background: ${Za.Highlight};
              color: ${Za.HighlightText};
          }
      `),new Kc(Yc,Qc)),title:Gc});class td extends _t{}const ed="0 0 2px rgba(0, 0, 0, 0.14)",id="0 calc(var(--elevation) * 0.5px) calc((var(--elevation) * 1px)) rgba(0, 0, 0, 0.2)",od=`box-shadow: ${ed}, ${id};`,nd=oi.create({name:"elevation-shadow",cssCustomPropertyName:null}).withDefault({evaluate:(t,e,i)=>{let o=.12,n=.14;return e>16&&(o=.2,n=.24),`0 0 2px rgba(0, 0, 0, ${o}), 0 calc(${e} * 0.5px) calc((${e} * 1px)) rgba(0, 0, 0, ${n})`}}),rd=oi.create("elevation-shadow-card-rest-size").withDefault(4),sd=oi.create("elevation-shadow-card-hover-size").withDefault(8),ad=oi.create("elevation-shadow-card-active-size").withDefault(0),ld=oi.create("elevation-shadow-card-focus-size").withDefault(8),cd=oi.create("elevation-shadow-card-rest").withDefault((t=>nd.getValueFor(t).evaluate(t,rd.getValueFor(t)))),dd=oi.create("elevation-shadow-card-hover").withDefault((t=>nd.getValueFor(t).evaluate(t,sd.getValueFor(t)))),hd=oi.create("elevation-shadow-card-active").withDefault((t=>nd.getValueFor(t).evaluate(t,ad.getValueFor(t)))),ud=oi.create("elevation-shadow-card-focus").withDefault((t=>nd.getValueFor(t).evaluate(t,ld.getValueFor(t)))),pd=oi.create("elevation-shadow-tooltip-size").withDefault(16),fd=oi.create("elevation-shadow-tooltip").withDefault((t=>nd.getValueFor(t).evaluate(t,pd.getValueFor(t)))),gd=oi.create("elevation-shadow-flyout-size").withDefault(32),md=oi.create("elevation-shadow-flyout").withDefault((t=>nd.getValueFor(t).evaluate(t,gd.getValueFor(t)))),vd=oi.create("elevation-shadow-dialog-size").withDefault(128),bd=oi.create("elevation-shadow-dialog").withDefault((t=>nd.getValueFor(t).evaluate(t,vd.getValueFor(t)))),yd=(t,e)=>Pe`
    ${Me("block")} :host {
      display: block;
      contain: content;
      height: var(--card-height, 100%);
      width: var(--card-width, 100%);
      box-sizing: border-box;
      background: ${tr};
      color: ${rs};
      border: calc(${so} * 1px) solid ${Ds};
      border-radius: calc(${ro} * 1px);
      box-shadow: ${cd};
    }

    :host {
      content-visibility: auto;
    }
  `.withBehaviors(Ja(Pe`
        :host {
          background: ${Za.Canvas};
          color: ${Za.CanvasText};
        }
      `));class xd extends td{cardFillColorChanged(t,e){if(e){const t=Ei(e);null!==t&&(this.neutralPaletteSource=e,tr.setValueFor(this,$i.create(t.r,t.g,t.b)))}}neutralPaletteSourceChanged(t,e){if(e){const t=Ei(e),i=$i.create(t.r,t.g,t.b);Mn.setValueFor(this,Di.create(i))}}handleChange(t,e){this.cardFillColor||tr.setValueFor(this,(e=>zr.getValueFor(e).evaluate(e,tr.getValueFor(t)).rest))}connectedCallback(){super.connectedCallback();const t=Be(this);if(t){const e=b.getNotifier(t);e.subscribe(this,"fillColor"),e.subscribe(this,"neutralPalette"),this.handleChange(t,"fillColor")}}}hl([I({attribute:"card-fill-color",mode:"fromView"})],xd.prototype,"cardFillColor",void 0),hl([I({attribute:"neutral-palette-source",mode:"fromView"})],xd.prototype,"neutralPaletteSource",void 0);const wd=xd.compose({baseName:"card",baseClass:td,template:(t,e)=>ye`
    <slot></slot>
`,styles:yd}),$d=yd;class kd extends _t{}class Cd extends(sc(kd)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Fd extends Cd{constructor(){super(),this.initialValue="on",this.indeterminate=!1,this.keypressHandler=t=>{this.readOnly||t.key!==z||(this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked)},this.clickHandler=t=>{this.disabled||this.readOnly||(this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}}o([I({attribute:"readonly",mode:"boolean"})],Fd.prototype,"readOnly",void 0),o([y],Fd.prototype,"defaultSlottedNodes",void 0),o([y],Fd.prototype,"indeterminate",void 0);const Sd=(t,e)=>Pe`
    ${Me("inline-flex")} :host {
      align-items: center;
      outline: none;
      ${""} user-select: none;
    }

    .control {
      position: relative;
      width: calc((${il} / 2 + ${oo}) * 1px);
      height: calc((${il} / 2 + ${oo}) * 1px);
      box-sizing: border-box;
      border-radius: calc(${no} * 1px);
      border: calc(${so} * 1px) solid ${As};
      background: ${Ar};
      cursor: pointer;
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      ${za}
      color: ${rs};
      ${""} padding-inline-start: calc(${oo} * 2px + 2px);
      margin-inline-end: calc(${oo} * 2px + 2px);
      cursor: pointer;
    }

    slot[name='checked-indicator'],
    slot[name='indeterminate-indicator'] {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      fill: ${rs};
      opacity: 0;
      pointer-events: none;
    }

    slot[name='indeterminate-indicator'] {
      position: absolute;
      top: 0;
    }

    :host(.checked) slot[name='checked-indicator'],
    :host(.checked) slot[name='indeterminate-indicator'] {
      fill: ${lr};
    }

    :host(:not(.disabled):hover) .control {
      background: ${Lr};
      border-color: ${Ls};
    }

    :host(:not(.disabled):active) .control {
      background: ${Vr};
      border-color: ${Vs};
    }

    :host(:${Xa}) .control {
      background: ${Pr};
      ${el}
    }

    :host(.checked) .control {
      background: ${or};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):hover) .control {
      background: ${nr};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):active) .control {
      background: ${rr};
      border-color: transparent;
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.readonly) .control,
    :host(.disabled) .control {
      cursor: ${hc};
    }

    :host(.checked:not(.indeterminate)) slot[name='checked-indicator'],
    :host(.indeterminate) slot[name='indeterminate-indicator'] {
      opacity: 1;
    }

    :host(.disabled) {
      opacity: ${Zi};
    }
  `.withBehaviors(Ja(Pe`
        .control {
          border-color: ${Za.FieldText};
          background: ${Za.Field};
        }
        :host(:not(.disabled):hover) .control,
        :host(:not(.disabled):active) .control {
          border-color: ${Za.Highlight};
          background: ${Za.Field};
        }
        slot[name='checked-indicator'],
        slot[name='indeterminate-indicator'] {
          fill: ${Za.FieldText};
        }
        :host(:${Xa}) .control {
          forced-color-adjust: none;
          outline-color: ${Za.FieldText};
          background: ${Za.Field};
          border-color: ${Za.Highlight};
        }
        :host(.checked) .control {
          background: ${Za.Highlight};
          border-color: ${Za.Highlight};
        }
        :host(.checked:not(.disabled):hover) .control,
        :host(.checked:not(.disabled):active) .control {
          background: ${Za.HighlightText};
          border-color: ${Za.Highlight};
        }
        :host(.checked) slot[name='checked-indicator'],
        :host(.checked) slot[name='indeterminate-indicator'] {
          fill: ${Za.HighlightText};
        }
        :host(.checked:hover ) .control slot[name='checked-indicator'],
        :host(.checked:hover ) .control slot[name='indeterminate-indicator'] {
          fill: ${Za.Highlight};
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled) .control {
          border-color: ${Za.GrayText};
          background: ${Za.Field};
        }
        :host(.disabled) slot[name='checked-indicator'],
        :host(.checked.disabled:hover) .control slot[name='checked-indicator'],
        :host(.disabled) slot[name='indeterminate-indicator'],
        :host(.checked.disabled:hover) .control slot[name='indeterminate-indicator'] {
          fill: ${Za.GrayText};
        }
      `)),Id=Fd.compose({baseName:"checkbox",template:(t,e)=>ye`
    <template
        role="checkbox"
        aria-checked="${t=>t.checked}"
        aria-required="${t=>t.required}"
        aria-disabled="${t=>t.disabled}"
        aria-readonly="${t=>t.readOnly}"
        tabindex="${t=>t.disabled?null:0}"
        @keypress="${(t,e)=>t.keypressHandler(e.event)}"
        @click="${(t,e)=>t.clickHandler(e.event)}"
        class="${t=>t.readOnly?"readonly":""} ${t=>t.checked?"checked":""} ${t=>t.indeterminate?"indeterminate":""}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${e.checkedIndicator||""}
            </slot>
            <slot name="indeterminate-indicator">
                ${e.indeterminateIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${Ae("defaultSlottedNodes")}></slot>
        </label>
    </template>
`,styles:Sd,checkedIndicator:'\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <path d="M13.86 3.66a.5.5 0 01-.02.7l-7.93 7.48a.6.6 0 01-.84-.02L2.4 9.1a.5.5 0 01.72-.7l2.4 2.44 7.65-7.2a.5.5 0 01.7.02z"/>\n    </svg>\n  ',indeterminateIndicator:'\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <path d="M3 8c0-.28.22-.5.5-.5h9a.5.5 0 010 1h-9A.5.5 0 013 8z"/>\n    </svg>\n  '}),Td=Sd;let Dd=0;function Rd(t=""){return`${t}${Dd++}`}function Od(t){return Wa(t)&&("option"===t.getAttribute("role")||t instanceof HTMLOptionElement)}class Ed extends _t{constructor(t,e,i,o){super(),this.defaultSelected=!1,this.dirtySelected=!1,this.selected=this.defaultSelected,this.dirtyValue=!1,t&&(this.textContent=t),e&&(this.initialValue=e),i&&(this.defaultSelected=i),o&&(this.selected=o),this.proxy=new Option(`${this.textContent}`,this.initialValue,this.defaultSelected,this.selected),this.proxy.disabled=this.disabled}checkedChanged(t,e){this.ariaChecked="boolean"!=typeof e?null:e?"true":"false"}contentChanged(t,e){this.proxy instanceof HTMLOptionElement&&(this.proxy.textContent=this.textContent),this.$emit("contentchange",null,{bubbles:!0})}defaultSelectedChanged(){this.dirtySelected||(this.selected=this.defaultSelected,this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.defaultSelected))}disabledChanged(t,e){this.ariaDisabled=this.disabled?"true":"false",this.proxy instanceof HTMLOptionElement&&(this.proxy.disabled=this.disabled)}selectedAttributeChanged(){this.defaultSelected=this.selectedAttribute,this.proxy instanceof HTMLOptionElement&&(this.proxy.defaultSelected=this.defaultSelected)}selectedChanged(){this.ariaSelected=this.selected?"true":"false",this.dirtySelected||(this.dirtySelected=!0),this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.selected)}initialValueChanged(t,e){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}get label(){var t;return null!==(t=this.value)&&void 0!==t?t:this.text}get text(){var t,e;return null!==(e=null===(t=this.textContent)||void 0===t?void 0:t.replace(/\s+/g," ").trim())&&void 0!==e?e:""}set value(t){const e=`${null!=t?t:""}`;this._value=e,this.dirtyValue=!0,this.proxy instanceof HTMLOptionElement&&(this.proxy.value=e),b.notify(this,"value")}get value(){var t;return b.track(this,"value"),null!==(t=this._value)&&void 0!==t?t:this.text}get form(){return this.proxy?this.proxy.form:null}}o([y],Ed.prototype,"checked",void 0),o([y],Ed.prototype,"content",void 0),o([y],Ed.prototype,"defaultSelected",void 0),o([I({mode:"boolean"})],Ed.prototype,"disabled",void 0),o([I({attribute:"selected",mode:"boolean"})],Ed.prototype,"selectedAttribute",void 0),o([y],Ed.prototype,"selected",void 0),o([I({attribute:"value",mode:"fromView"})],Ed.prototype,"initialValue",void 0);class Ad{}o([y],Ad.prototype,"ariaChecked",void 0),o([y],Ad.prototype,"ariaPosInSet",void 0),o([y],Ad.prototype,"ariaSelected",void 0),o([y],Ad.prototype,"ariaSetSize",void 0),Ie(Ad,ul),Ie(Ed,$e,Ad);class Ld extends _t{constructor(){super(...arguments),this._options=[],this.selectedIndex=-1,this.selectedOptions=[],this.shouldSkipFocus=!1,this.typeaheadBuffer="",this.typeaheadExpired=!0,this.typeaheadTimeout=-1}get firstSelectedOption(){var t;return null!==(t=this.selectedOptions[0])&&void 0!==t?t:null}get hasSelectableOptions(){return this.options.length>0&&!this.options.every((t=>t.disabled))}get length(){var t,e;return null!==(e=null===(t=this.options)||void 0===t?void 0:t.length)&&void 0!==e?e:0}get options(){return b.track(this,"options"),this._options}set options(t){this._options=t,b.notify(this,"options")}get typeAheadExpired(){return this.typeaheadExpired}set typeAheadExpired(t){this.typeaheadExpired=t}clickHandler(t){const e=t.target.closest("option,[role=option]");if(e&&!e.disabled)return this.selectedIndex=this.options.indexOf(e),!0}focusAndScrollOptionIntoView(t=this.firstSelectedOption){this.contains(document.activeElement)&&null!==t&&(t.focus(),requestAnimationFrame((()=>{t.scrollIntoView({block:"nearest"})})))}focusinHandler(t){this.shouldSkipFocus||t.target!==t.currentTarget||(this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}getTypeaheadMatches(){const t=this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),e=new RegExp(`^${t}`,"gi");return this.options.filter((t=>t.text.trim().match(e)))}getSelectableIndex(t=this.selectedIndex,e){const i=t>e?-1:t<e?1:0,o=t+i;let n=null;switch(i){case-1:n=this.options.reduceRight(((t,e,i)=>!t&&!e.disabled&&i<o?e:t),n);break;case 1:n=this.options.reduce(((t,e,i)=>!t&&!e.disabled&&i>o?e:t),n)}return this.options.indexOf(n)}handleChange(t,e){"selected"===e&&(Ld.slottedOptionFilter(t)&&(this.selectedIndex=this.options.indexOf(t)),this.setSelectedOptions())}handleTypeAhead(t){this.typeaheadTimeout&&window.clearTimeout(this.typeaheadTimeout),this.typeaheadTimeout=window.setTimeout((()=>this.typeaheadExpired=!0),Ld.TYPE_AHEAD_TIMEOUT_MS),t.length>1||(this.typeaheadBuffer=`${this.typeaheadExpired?"":this.typeaheadBuffer}${t}`)}keydownHandler(t){if(this.disabled)return!0;this.shouldSkipFocus=!1;const e=t.key;switch(e){case V:t.shiftKey||(t.preventDefault(),this.selectFirstOption());break;case D:t.shiftKey||(t.preventDefault(),this.selectNextOption());break;case E:t.shiftKey||(t.preventDefault(),this.selectPreviousOption());break;case P:t.preventDefault(),this.selectLastOption();break;case H:return this.focusAndScrollOptionIntoView(),!0;case A:case L:return!0;case z:if(this.typeaheadExpired)return!0;default:return 1===e.length&&this.handleTypeAhead(`${e}`),!0}}mousedownHandler(t){return this.shouldSkipFocus=!this.contains(document.activeElement),!0}multipleChanged(t,e){this.ariaMultiSelectable=e?"true":null}selectedIndexChanged(t,e){var i;if(this.hasSelectableOptions){if((null===(i=this.options[this.selectedIndex])||void 0===i?void 0:i.disabled)&&"number"==typeof t){const i=this.getSelectableIndex(t,e),o=i>-1?i:t;return this.selectedIndex=o,void(e===o&&this.selectedIndexChanged(e,o))}this.setSelectedOptions()}else this.selectedIndex=-1}selectedOptionsChanged(t,e){var i;const o=e.filter(Ld.slottedOptionFilter);null===(i=this.options)||void 0===i||i.forEach((t=>{const e=b.getNotifier(t);e.unsubscribe(this,"selected"),t.selected=o.includes(t),e.subscribe(this,"selected")}))}selectFirstOption(){var t,e;this.disabled||(this.selectedIndex=null!==(e=null===(t=this.options)||void 0===t?void 0:t.findIndex((t=>!t.disabled)))&&void 0!==e?e:-1)}selectLastOption(){this.disabled||(this.selectedIndex=function(t,e){let i=t.length;for(;i--;)if(!t[i].disabled)return i;return-1}(this.options))}selectNextOption(){!this.disabled&&this.selectedIndex<this.options.length-1&&(this.selectedIndex+=1)}selectPreviousOption(){!this.disabled&&this.selectedIndex>0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){var t,e;this.selectedIndex=null!==(e=null===(t=this.options)||void 0===t?void 0:t.findIndex((t=>t.defaultSelected)))&&void 0!==e?e:-1}setSelectedOptions(){var t,e,i;(null===(t=this.options)||void 0===t?void 0:t.length)&&(this.selectedOptions=[this.options[this.selectedIndex]],this.ariaActiveDescendant=null!==(i=null===(e=this.firstSelectedOption)||void 0===e?void 0:e.id)&&void 0!==i?i:"",this.focusAndScrollOptionIntoView())}slottedOptionsChanged(t,e){this.options=e.reduce(((t,e)=>(Od(e)&&t.push(e),t)),[]);const i=`${this.options.length}`;this.options.forEach(((t,e)=>{t.id||(t.id=Rd("option-")),t.ariaPosInSet=`${e+1}`,t.ariaSetSize=i})),this.$fastController.isConnected&&(this.setSelectedOptions(),this.setDefaultSelectedOption())}typeaheadBufferChanged(t,e){if(this.$fastController.isConnected){const t=this.getTypeaheadMatches();if(t.length){const e=this.options.indexOf(t[0]);e>-1&&(this.selectedIndex=e)}this.typeaheadExpired=!1}}}Ld.slottedOptionFilter=t=>Od(t)&&!t.hidden,Ld.TYPE_AHEAD_TIMEOUT_MS=1e3,o([I({mode:"boolean"})],Ld.prototype,"disabled",void 0),o([y],Ld.prototype,"selectedIndex",void 0),o([y],Ld.prototype,"selectedOptions",void 0),o([y],Ld.prototype,"slottedOptions",void 0),o([y],Ld.prototype,"typeaheadBuffer",void 0);class Vd{}o([y],Vd.prototype,"ariaActiveDescendant",void 0),o([y],Vd.prototype,"ariaDisabled",void 0),o([y],Vd.prototype,"ariaExpanded",void 0),o([y],Vd.prototype,"ariaMultiSelectable",void 0),Ie(Vd,ul),Ie(Ld,Vd);const Pd="above",zd="below";class Hd extends Ld{}class Md extends(rc(Hd)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Bd extends Md{constructor(){super(...arguments),this._value="",this.filteredOptions=[],this.filter="",this.forcedPosition=!1,this.listboxId=Rd("listbox-"),this.maxHeight=0,this.open=!1}formResetCallback(){super.formResetCallback(),this.setDefaultSelectedOption(),this.updateValue()}validate(){super.validate(this.control)}get isAutocompleteInline(){return"inline"===this.autocomplete||this.isAutocompleteBoth}get isAutocompleteList(){return"list"===this.autocomplete||this.isAutocompleteBoth}get isAutocompleteBoth(){return"both"===this.autocomplete}openChanged(){if(this.open)return this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),void g.queueUpdate((()=>this.focus()));this.ariaControls="",this.ariaExpanded="false"}get options(){return b.track(this,"options"),this.filteredOptions.length?this.filteredOptions:this._options}set options(t){this._options=t,b.notify(this,"options")}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}positionChanged(t,e){this.positionAttribute=e,this.setPositioning()}get value(){return b.track(this,"value"),this._value}set value(t){var e,i,o;const n=`${this._value}`;if(this.$fastController.isConnected&&this.options){const n=this.options.findIndex((e=>e.text.toLowerCase()===t.toLowerCase())),r=null===(e=this.options[this.selectedIndex])||void 0===e?void 0:e.text,s=null===(i=this.options[n])||void 0===i?void 0:i.text;this.selectedIndex=r!==s?n:this.selectedIndex,t=(null===(o=this.firstSelectedOption)||void 0===o?void 0:o.text)||t}n!==t&&(this._value=t,super.valueChanged(n,t),b.notify(this,"value"))}clickHandler(t){if(!this.disabled){if(this.open){const e=t.target.closest("option,[role=option]");if(!e||e.disabled)return;this.selectedOptions=[e],this.control.value=e.text,this.clearSelectionRange(),this.updateValue(!0)}return this.open=!this.open,this.open&&this.control.focus(),!0}}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.value&&(this.initialValue=this.value)}disabledChanged(t,e){super.disabledChanged&&super.disabledChanged(t,e),this.ariaDisabled=this.disabled?"true":"false"}filterOptions(){this.autocomplete&&"none"!==this.autocomplete||(this.filter="");const t=this.filter.toLowerCase();this.filteredOptions=this._options.filter((t=>t.text.toLowerCase().startsWith(this.filter.toLowerCase()))),this.isAutocompleteList&&(this.filteredOptions.length||t||(this.filteredOptions=this._options),this._options.forEach((t=>{t.hidden=!this.filteredOptions.includes(t)})))}focusAndScrollOptionIntoView(){this.contains(document.activeElement)&&(this.control.focus(),this.firstSelectedOption&&requestAnimationFrame((()=>{var t;null===(t=this.firstSelectedOption)||void 0===t||t.scrollIntoView({block:"nearest"})})))}focusoutHandler(t){if(this.syncValue(),!this.open)return!0;const e=t.relatedTarget;this.isSameNode(e)?this.focus():this.options&&this.options.includes(e)||(this.open=!1)}inputHandler(t){if(this.filter=this.control.value,this.filterOptions(),this.isAutocompleteInline||(this.selectedIndex=this.options.map((t=>t.text)).indexOf(this.control.value)),t.inputType.includes("deleteContent")||!this.filter.length)return!0;this.isAutocompleteList&&!this.open&&(this.open=!0),this.isAutocompleteInline&&(this.filteredOptions.length?(this.selectedOptions=[this.filteredOptions[0]],this.selectedIndex=this.options.indexOf(this.firstSelectedOption),this.setInlineSelection()):this.selectedIndex=-1)}keydownHandler(t){const e=t.key;if(t.ctrlKey||t.shiftKey)return!0;switch(e){case"Enter":this.syncValue(),this.isAutocompleteInline&&(this.filter=this.value),this.open=!1,this.clearSelectionRange();break;case"Escape":if(this.isAutocompleteInline||(this.selectedIndex=-1),this.open){this.open=!1;break}this.value="",this.control.value="",this.filter="",this.filterOptions();break;case"Tab":if(this.setInputToSelection(),!this.open)return!0;t.preventDefault(),this.open=!1;break;case"ArrowUp":case"ArrowDown":if(this.filterOptions(),!this.open){this.open=!0;break}this.filteredOptions.length>0&&super.keydownHandler(t),this.isAutocompleteInline&&this.setInlineSelection();break;default:return!0}}keyupHandler(t){switch(t.key){case"ArrowLeft":case"ArrowRight":case"Backspace":case"Delete":case"Home":case"End":this.filter=this.control.value,this.selectedIndex=-1,this.filterOptions()}}selectedIndexChanged(t,e){if(this.$fastController.isConnected){if((e=N(-1,this.options.length-1,e))!==this.selectedIndex)return void(this.selectedIndex=e);super.selectedIndexChanged(t,e)}}selectPreviousOption(){!this.disabled&&this.selectedIndex>=0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){if(this.$fastController.isConnected&&this.options){const t=this.options.findIndex((t=>null!==t.getAttribute("selected")||t.selected));this.selectedIndex=t,!this.dirtyValue&&this.firstSelectedOption&&(this.value=this.firstSelectedOption.text),this.setSelectedOptions()}}setInputToSelection(){this.firstSelectedOption&&(this.control.value=this.firstSelectedOption.text,this.control.focus())}setInlineSelection(){this.firstSelectedOption&&(this.setInputToSelection(),this.control.setSelectionRange(this.filter.length,this.control.value.length,"backward"))}syncValue(){var t;const e=this.selectedIndex>-1?null===(t=this.firstSelectedOption)||void 0===t?void 0:t.text:this.control.value;this.updateValue(this.value!==e)}setPositioning(){const t=this.getBoundingClientRect(),e=window.innerHeight-t.bottom;this.position=this.forcedPosition?this.positionAttribute:t.top>e?Pd:zd,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===Pd?~~t.top:~~e}selectedOptionsChanged(t,e){this.$fastController.isConnected&&this._options.forEach((t=>{t.selected=e.includes(t)}))}slottedOptionsChanged(t,e){super.slottedOptionsChanged(t,e),this.updateValue()}updateValue(t){var e;this.$fastController.isConnected&&(this.value=(null===(e=this.firstSelectedOption)||void 0===e?void 0:e.text)||this.control.value,this.control.value=this.value),t&&this.$emit("change")}clearSelectionRange(){const t=this.control.value.length;this.control.setSelectionRange(t,t)}}o([I({attribute:"autocomplete",mode:"fromView"})],Bd.prototype,"autocomplete",void 0),o([y],Bd.prototype,"maxHeight",void 0),o([I({attribute:"open",mode:"boolean"})],Bd.prototype,"open",void 0),o([I],Bd.prototype,"placeholder",void 0),o([I({attribute:"position"})],Bd.prototype,"positionAttribute",void 0),o([y],Bd.prototype,"position",void 0);class Nd{}o([y],Nd.prototype,"ariaAutoComplete",void 0),o([y],Nd.prototype,"ariaControls",void 0),Ie(Nd,Vd),Ie(Bd,$e,Nd);const jd=oi.create("input-placeholder-rest").withDefault((t=>{const e=Ir.getValueFor(t);return cs.getValueFor(t).evaluate(t,e.evaluate(t).rest)})),Ud=oi.create("input-placeholder-hover").withDefault((t=>{const e=Ir.getValueFor(t);return cs.getValueFor(t).evaluate(t,e.evaluate(t).hover)})),_d=oi.create("input-filled-placeholder-rest").withDefault((t=>{const e=Ur.getValueFor(t);return cs.getValueFor(t).evaluate(t,e.evaluate(t).rest)})),qd=oi.create("input-filled-placeholder-hover").withDefault((t=>{const e=Ur.getValueFor(t);return cs.getValueFor(t).evaluate(t,e.evaluate(t).hover)})),Gd=(t,e,i)=>Pe`
  :host {
    ${za}
    color: ${rs};
    fill: currentcolor;
    user-select: none;
    position: relative;
  }

  ${i} {
    box-sizing: border-box;
    position: relative;
    color: inherit;
    border: calc(${so} * 1px) solid transparent;
    border-radius: calc(${no} * 1px);
    height: calc(${il} * 1px);
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  .control {
    width: 100%;
    outline: none;
  }

  .label {
    display: block;
    color: ${rs};
    cursor: pointer;
    ${za}
    margin-bottom: 4px;
  }

  .label__hidden {
    display: none;
    visibility: hidden;
  }

  :host([disabled]) ${i},
  :host([readonly]) ${i},
  :host([disabled]) .label,
  :host([readonly]) .label,
  :host([disabled]) .control,
  :host([readonly]) .control {
    cursor: ${hc};
  }

  :host([disabled]) {
    opacity: ${Zi};
  }
`,Wd=(t,e,i)=>Pe`
  @media (forced-colors: none) {
    :host(:not([disabled]):active)::after {
      left: 50%;
      width: 40%;
      transform: translateX(-50%);
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    :host(:not([disabled]):focus-within)::after {
      left: 0;
      width: 100%;
      transform: none;
    }

    :host(:not([disabled]):active)::after,
    :host(:not([disabled]):focus-within:not(:active))::after {
      content: '';
      position: absolute;
      height: calc(${ao} * 1px);
      bottom: 0;
      border-bottom: calc(${ao} * 1px) solid ${or};
      border-bottom-left-radius: calc(${no} * 1px);
      border-bottom-right-radius: calc(${no} * 1px);
      z-index: 2;
      transition: all 300ms cubic-bezier(0.1, 0.9, 0.2, 1);
    }
  }
`,Kd=(t,e,i,o=":not([disabled]):not(:focus-within)")=>Pe`
  ${i} {
    background: padding-box linear-gradient(${Tr}, ${Tr}),
      border-box ${Cs};
  }

  :host(${o}:hover) ${i} {
    background: padding-box linear-gradient(${Dr}, ${Dr}),
      border-box ${Fs};
  }

  :host(:not([disabled]):focus-within) ${i} {
    background: padding-box linear-gradient(${Or}, ${Or}),
      border-box ${Cs};
  }
  
  :host([disabled]) ${i} {
    background: padding-box linear-gradient(${Tr}, ${Tr}),
      border-box ${us};
  }

  .control::placeholder {
    color: ${jd};
  }

  :host(${o}:hover) .control::placeholder {
    color: ${Ud};
  }
`,Xd=(t,e,i,o=":not([disabled]):not(:focus-within)")=>Pe`
  ${i} {
    background: ${_r};
  }

  :host(${o}:hover) ${i} {
    background: ${qr};
  }

  :host(:not([disabled]):focus-within) ${i} {
    background: ${Wr};
  }

  :host([disabled]) ${i} {
    background: ${_r};
  }

  .control::placeholder {
    color: ${_d};
  }

  :host(${o}:hover) .control::placeholder {
    color: ${qd};
  }
`,Yd=(t,e,i,o=":not([disabled]):not(:focus-within)")=>Pe`
  :host {
    color: ${Za.ButtonText};
  }

  ${i} {
    background: ${Za.ButtonFace};
    border-color: ${Za.ButtonText};
  }

  :host(${o}:hover) ${i},
  :host(:not([disabled]):focus-within) ${i} {
    border-color: ${Za.Highlight};
  }

  :host([disabled]) ${i} {
    opacity: 1;
    background: ${Za.ButtonFace};
    border-color: ${Za.GrayText};
  }

  .control::placeholder,
  :host(${o}:hover) .control::placeholder {
    color: ${Za.CanvasText};
  }

  :host(:not([disabled]):focus) ${i} {
    ${tl}
    outline-color: ${Za.Highlight};
  }

  :host([disabled]) {
    opacity: 1;
    color: ${Za.GrayText};
  }

  :host([disabled]) ::placeholder,
  :host([disabled]) ::-webkit-input-placeholder {
    color: ${Za.GrayText};
  }
`,Qd=".control",Jd=":not([disabled]):not([open])",Zd="[disabled]",th=(t,e)=>Pe`
    ${Me("inline-flex")}
    
    :host {
      border-radius: calc(${no} * 1px);
      box-sizing: border-box;
      color: ${rs};
      fill: currentcolor;
      font-family: ${lo};
      position: relative;
      user-select: none;
      min-width: 250px;
      vertical-align: top;
    }

    .listbox {
      box-shadow: ${md};
      background: ${tr};
      border-radius: calc(${ro} * 1px);
      box-sizing: border-box;
      display: inline-flex;
      flex-direction: column;
      left: 0;
      max-height: calc(var(--max-height) - (${il} * 1px));
      padding: calc((${oo} - ${so} ) * 1px);
      overflow-y: auto;
      position: absolute;
      width: 100%;
      z-index: 1;
      margin: 1px 0;
      border: calc(${so} * 1px) solid transparent;
    }

    .listbox[hidden] {
      display: none;
    }

    .control {
      border: calc(${so} * 1px) solid transparent;
      border-radius: calc(${no} * 1px);
      height: calc(${il} * 1px);
      align-items: center;
      box-sizing: border-box;
      cursor: pointer;
      display: flex;
      ${za}
      min-height: 100%;
      padding: 0 calc(${oo} * 2.25px);
      width: 100%;
    }

    :host(:${Xa}) {
      ${tl}
    }

    :host([disabled]) .control {
      cursor: ${hc};
      opacity: ${Zi};
      user-select: none;
    }

    :host([open][position='above']) .listbox {
      bottom: calc((${il} + ${oo} * 2) * 1px);
    }

    :host([open][position='below']) .listbox {
      top: calc((${il} + ${oo} * 2) * 1px);
    }

    .selected-value {
      font-family: inherit;
      flex: 1 1 auto;
      text-align: start;
    }

    .indicator {
      flex: 0 0 auto;
      margin-inline-start: 1em;
    }

    slot[name='listbox'] {
      display: none;
      width: 100%;
    }

    :host([open]) slot[name='listbox'] {
      display: flex;
      position: absolute;
    }

    .start {
      margin-inline-end: 11px;
    }

    .end {
      margin-inline-start: 11px;
    }

    .start,
    .end,
    .indicator,
    ::slotted(svg) {
      display: flex;
    }

    ::slotted([role='option']) {
      flex: 0 0 auto;
    }
  `,eh=(t,e)=>th().withBehaviors(Cl("outline",vl(t,e,Jd,Zd)),Cl("filled",Xd(t,e,Qd,Jd).withBehaviors(Ja(Yd(t,e,Qd,Jd)))),Cl("stealth",$l(t,e,Jd,Zd)),Ja(Pe`
    :host([open]) .listbox {
      background: ${Za.ButtonFace};
      border-color: ${Za.CanvasText};
    }
  `)),ih=".control",oh=":not([disabled]):not([open])",nh=(t,e)=>Pe`
    ${th()}

    ${Wd(t,e,ih)}

    :host(:empty) .listbox {
      display: none;
    }

    :host([disabled]) *,
    :host([disabled]) {
      cursor: ${hc};
      user-select: none;
    }

    :host(:active) .selected-value {
      user-select: none;
    }

    .selected-value {
      -webkit-appearance: none;
      background: transparent;
      border: none;
      color: inherit;
      ${za}
      height: calc(100% - ${so} * 1px));
      margin: auto 0;
      width: 100%;
      outline: none;
    }
  `.withBehaviors(Cl("outline",Kd(t,e,ih,oh)),Cl("filled",Xd(t,e,ih,oh)),Ja(Yd(t,e,ih,oh)));class rh extends Bd{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline"),this.listbox&&tr.setValueFor(this.listbox,qn)}}hl([I({mode:"fromView"})],rh.prototype,"appearance",void 0);const sh=rh.compose({baseName:"combobox",baseClass:Bd,shadowOptions:{delegatesFocus:!0},template:(t,e)=>ye`
    <template
        aria-disabled="${t=>t.ariaDisabled}"
        autocomplete="${t=>t.autocomplete}"
        class="${t=>t.open?"open":""} ${t=>t.disabled?"disabled":""} ${t=>t.position}"
        ?open="${t=>t.open}"
        tabindex="${t=>t.disabled?null:"0"}"
        @click="${(t,e)=>t.clickHandler(e.event)}"
        @focusout="${(t,e)=>t.focusoutHandler(e.event)}"
        @keydown="${(t,e)=>t.keydownHandler(e.event)}"
    >
        <div class="control" part="control">
            ${Ce(0,e)}
            <slot name="control">
                <input
                    aria-activedescendant="${t=>t.open?t.ariaActiveDescendant:null}"
                    aria-autocomplete="${t=>t.ariaAutoComplete}"
                    aria-controls="${t=>t.ariaControls}"
                    aria-disabled="${t=>t.ariaDisabled}"
                    aria-expanded="${t=>t.ariaExpanded}"
                    aria-haspopup="listbox"
                    class="selected-value"
                    part="selected-value"
                    placeholder="${t=>t.placeholder}"
                    role="combobox"
                    type="text"
                    ?disabled="${t=>t.disabled}"
                    :value="${t=>t.value}"
                    @input="${(t,e)=>t.inputHandler(e.event)}"
                    @keyup="${(t,e)=>t.keyupHandler(e.event)}"
                    ${we("control")}
                />
                <div class="indicator" part="indicator" aria-hidden="true">
                    <slot name="indicator">
                        ${e.indicator||""}
                    </slot>
                </div>
            </slot>
            ${ke(0,e)}
        </div>
        <div
            class="listbox"
            id="${t=>t.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${t=>t.disabled}"
            ?hidden="${t=>!t.open}"
            ${we("listbox")}
        >
            <slot
                ${Ae({filter:Ld.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`,styles:nh,indicator:'\n    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">\n      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>\n    </svg>\n  '}),ah=nh;class lh extends Oe{constructor(t,e){super(t,e),this.observer=null,e.childList=!0}observe(){null===this.observer&&(this.observer=new MutationObserver(this.handleEvent.bind(this))),this.observer.observe(this.target,this.options)}disconnect(){this.observer.disconnect()}getNodes(){return"subtree"in this.options?Array.from(this.target.querySelectorAll(this.options.selector)):Array.from(this.target.childNodes)}}function ch(t){return"string"==typeof t&&(t={property:t}),new Xt("fast-children",lh,t)}const dh=(t,e)=>Pe`
  :host {
    display: flex;
    position: relative;
    flex-direction: column;
  }
`,hh=(t,e)=>Pe`
    :host {
      display: grid;
      padding: 1px 0;
      box-sizing: border-box;
      width: 100%;
      border-bottom: calc(${so} * 1px) solid ${$s};
    }

    :host(.header) {
    }

    :host(.sticky-header) {
      background: ${tr};
      position: sticky;
      top: 0;
    }
  `.withBehaviors(Ja(Pe`
        :host {
        }
      `)),uh=(t,e)=>Pe`
    :host {
      padding: calc((${oo} + ${ao} - ${so}) * 1px) calc(((${oo} * 3) + ${ao} - ${so}) * 1px);
      color: ${rs};
      box-sizing: border-box;
      ${za}
      border: transparent calc(${so} * 1px) solid;
      overflow: hidden;
      white-space: nowrap;
      border-radius: calc(${no} * 1px);
    }

    :host(.column-header) {
      font-weight: 600;
    }

    :host(:${Xa}) {
      ${tl}
    }
  `.withBehaviors(Ja(Pe`
        :host {
          forced-color-adjust: none;
          background: ${Za.Field};
          color: ${Za.FieldText};
        }

        :host(:${Xa}) {
          outline-color: ${Za.FieldText};
        }
      `)),ph=Uc.compose({baseName:"data-grid-cell",template:(t,e)=>ye`
        <template
            tabindex="-1"
            role="${t=>t.cellType&&"default"!==t.cellType?t.cellType:"gridcell"}"
            class="
            ${t=>"columnheader"===t.cellType?"column-header":"rowheader"===t.cellType?"row-header":""}
            "
        >
            <slot></slot>
        </template>
    `,styles:uh}),fh=uh,gh=_c.compose({baseName:"data-grid-row",template:(t,e)=>{const i=function(t){const e=t.tagFor(Uc);return ye`
    <${e}
        cell-type="${t=>t.isRowHeader?"rowheader":void 0}"
        grid-column="${(t,e)=>e.index+1}"
        :rowData="${(t,e)=>e.parent.rowData}"
        :columnDefinition="${t=>t}"
    ></${e}>
`}(t),o=function(t){const e=t.tagFor(Uc);return ye`
    <${e}
        cell-type="columnheader"
        grid-column="${(t,e)=>e.index+1}"
        :columnDefinition="${t=>t}"
    ></${e}>
`}(t);return ye`
        <template
            role="row"
            class="${t=>"default"!==t.rowType?t.rowType:""}"
            :defaultCellItemTemplate="${i}"
            :defaultHeaderCellItemTemplate="${o}"
            ${ch({property:"cellElements",filter:Re('[role="cell"],[role="gridcell"],[role="columnheader"],[role="rowheader"]')})}
        >
            <slot ${Ae("slottedCellElements")}></slot>
        </template>
    `},styles:hh}),mh=hh,vh=qc.compose({baseName:"data-grid",template:(t,e)=>{const i=function(t){const e=t.tagFor(_c);return ye`
    <${e}
        :rowData="${t=>t}"
        :cellItemTemplate="${(t,e)=>e.parent.cellItemTemplate}"
        :headerCellItemTemplate="${(t,e)=>e.parent.headerCellItemTemplate}"
    ></${e}>
`}(t),o=t.tagFor(_c);return ye`
        <template
            role="grid"
            tabindex="0"
            :rowElementTag="${()=>o}"
            :defaultRowItemTemplate="${i}"
            ${ch({property:"rowElements",filter:Re("[role=row]")})}
        >
            <slot></slot>
        </template>
    `},styles:dh}),bh=dh,yh={toView(t){var e;return null==t?null:null===(e=t)||void 0===e?void 0:e.toColorString()},fromView(t){if(null==t)return null;const e=Ei(t);return e?$i.create(e.r,e.g,e.b):null}},xh=Pe`
  :host {
    background-color: ${tr};
    color: ${rs};
  }
`.withBehaviors(Ja(Pe`
      :host {
        background-color: ${Za.Canvas};
        box-shadow: 0 0 0 1px ${Za.CanvasText};
        color: ${Za.CanvasText};
      }
    `));function wh(t){return(e,i)=>{e[i+"Changed"]=function(e,i){null!=i?t.setValueFor(this,i):t.deleteValueFor(this)}}}class $h extends _t{constructor(){super(),this.noPaint=!1;const t={handleChange:this.noPaintChanged.bind(this)};b.getNotifier(this).subscribe(t,"fillColor"),b.getNotifier(this).subscribe(t,"baseLayerLuminance")}connectedCallback(){super.connectedCallback(),this.noPaintChanged()}noPaintChanged(){this.noPaint||void 0===this.fillColor&&!this.baseLayerLuminance?this.$fastController.removeStyles(xh):this.$fastController.addStyles(xh)}}hl([I({attribute:"no-paint",mode:"boolean"})],$h.prototype,"noPaint",void 0),hl([I({attribute:"fill-color",converter:yh,mode:"fromView"}),wh(tr)],$h.prototype,"fillColor",void 0),hl([I({attribute:"accent-base-color",converter:yh,mode:"fromView"}),wh(Bn)],$h.prototype,"accentBaseColor",void 0),hl([I({attribute:"neutral-base-color",converter:yh,mode:"fromView"}),wh(Hn)],$h.prototype,"neutralBaseColor",void 0),hl([I({converter:F}),wh(io)],$h.prototype,"density",void 0),hl([I({attribute:"design-unit",converter:F}),wh(oo)],$h.prototype,"designUnit",void 0),hl([I({attribute:"direction"}),wh(Ji)],$h.prototype,"direction",void 0),hl([I({attribute:"base-height-multiplier",converter:F}),wh(to)],$h.prototype,"baseHeightMultiplier",void 0),hl([I({attribute:"base-horizontal-spacing-multiplier",converter:F}),wh(eo)],$h.prototype,"baseHorizontalSpacingMultiplier",void 0),hl([I({attribute:"control-corner-radius",converter:F}),wh(no)],$h.prototype,"controlCornerRadius",void 0),hl([I({attribute:"layer-corner-radius",converter:F}),wh(ro)],$h.prototype,"layerCornerRadius",void 0),hl([I({attribute:"stroke-width",converter:F}),wh(so)],$h.prototype,"strokeWidth",void 0),hl([I({attribute:"focus-stroke-width",converter:F}),wh(ao)],$h.prototype,"focusStrokeWidth",void 0),hl([I({attribute:"disabled-opacity",converter:F}),wh(Zi)],$h.prototype,"disabledOpacity",void 0),hl([I({attribute:"type-ramp-minus-2-font-size"}),wh(bo)],$h.prototype,"typeRampMinus2FontSize",void 0),hl([I({attribute:"type-ramp-minus-2-line-height"}),wh(yo)],$h.prototype,"typeRampMinus2LineHeight",void 0),hl([I({attribute:"type-ramp-minus-1-font-size"}),wh(go)],$h.prototype,"typeRampMinus1FontSize",void 0),hl([I({attribute:"type-ramp-minus-1-line-height"}),wh(mo)],$h.prototype,"typeRampMinus1LineHeight",void 0),hl([I({attribute:"type-ramp-base-font-size"}),wh(uo)],$h.prototype,"typeRampBaseFontSize",void 0),hl([I({attribute:"type-ramp-base-line-height"}),wh(po)],$h.prototype,"typeRampBaseLineHeight",void 0),hl([I({attribute:"type-ramp-plus-1-font-size"}),wh(wo)],$h.prototype,"typeRampPlus1FontSize",void 0),hl([I({attribute:"type-ramp-plus-1-line-height"}),wh($o)],$h.prototype,"typeRampPlus1LineHeight",void 0),hl([I({attribute:"type-ramp-plus-2-font-size"}),wh(Co)],$h.prototype,"typeRampPlus2FontSize",void 0),hl([I({attribute:"type-ramp-plus-2-line-height"}),wh(Fo)],$h.prototype,"typeRampPlus2LineHeight",void 0),hl([I({attribute:"type-ramp-plus-3-font-size"}),wh(Io)],$h.prototype,"typeRampPlus3FontSize",void 0),hl([I({attribute:"type-ramp-plus-3-line-height"}),wh(To)],$h.prototype,"typeRampPlus3LineHeight",void 0),hl([I({attribute:"type-ramp-plus-4-font-size"}),wh(Ro)],$h.prototype,"typeRampPlus4FontSize",void 0),hl([I({attribute:"type-ramp-plus-4-line-height"}),wh(Oo)],$h.prototype,"typeRampPlus4LineHeight",void 0),hl([I({attribute:"type-ramp-plus-5-font-size"}),wh(Ao)],$h.prototype,"typeRampPlus5FontSize",void 0),hl([I({attribute:"type-ramp-plus-5-line-height"}),wh(Lo)],$h.prototype,"typeRampPlus5LineHeight",void 0),hl([I({attribute:"type-ramp-plus-6-font-size"}),wh(Po)],$h.prototype,"typeRampPlus6FontSize",void 0),hl([I({attribute:"type-ramp-plus-6-line-height"}),wh(zo)],$h.prototype,"typeRampPlus6LineHeight",void 0),hl([I({attribute:"accent-fill-rest-delta",converter:F}),wh(Bo)],$h.prototype,"accentFillRestDelta",void 0),hl([I({attribute:"accent-fill-hover-delta",converter:F}),wh(No)],$h.prototype,"accentFillHoverDelta",void 0),hl([I({attribute:"accent-fill-active-delta",converter:F}),wh(jo)],$h.prototype,"accentFillActiveDelta",void 0),hl([I({attribute:"accent-fill-focus-delta",converter:F}),wh(Uo)],$h.prototype,"accentFillFocusDelta",void 0),hl([I({attribute:"accent-foreground-rest-delta",converter:F}),wh(_o)],$h.prototype,"accentForegroundRestDelta",void 0),hl([I({attribute:"accent-foreground-hover-delta",converter:F}),wh(qo)],$h.prototype,"accentForegroundHoverDelta",void 0),hl([I({attribute:"accent-foreground-active-delta",converter:F}),wh(Go)],$h.prototype,"accentForegroundActiveDelta",void 0),hl([I({attribute:"accent-foreground-focus-delta",converter:F}),wh(Wo)],$h.prototype,"accentForegroundFocusDelta",void 0),hl([I({attribute:"neutral-fill-rest-delta",converter:F}),wh(Ko)],$h.prototype,"neutralFillRestDelta",void 0),hl([I({attribute:"neutral-fill-hover-delta",converter:F}),wh(Xo)],$h.prototype,"neutralFillHoverDelta",void 0),hl([I({attribute:"neutral-fill-active-delta",converter:F}),wh(Yo)],$h.prototype,"neutralFillActiveDelta",void 0),hl([I({attribute:"neutral-fill-focus-delta",converter:F}),wh(Qo)],$h.prototype,"neutralFillFocusDelta",void 0),hl([I({attribute:"neutral-fill-input-rest-delta",converter:F}),wh(Jo)],$h.prototype,"neutralFillInputRestDelta",void 0),hl([I({attribute:"neutral-fill-input-hover-delta",converter:F}),wh(Zo)],$h.prototype,"neutralFillInputHoverDelta",void 0),hl([I({attribute:"neutral-fill-input-active-delta",converter:F}),wh(tn)],$h.prototype,"neutralFillInputActiveDelta",void 0),hl([I({attribute:"neutral-fill-input-focus-delta",converter:F}),wh(en)],$h.prototype,"neutralFillInputFocusDelta",void 0),hl([I({attribute:"neutral-fill-layer-rest-delta",converter:F}),wh(an)],$h.prototype,"neutralFillLayerRestDelta",void 0),hl([I({attribute:"neutral-fill-stealth-rest-delta",converter:F}),wh(gn)],$h.prototype,"neutralFillStealthRestDelta",void 0),hl([I({attribute:"neutral-fill-stealth-hover-delta",converter:F}),wh(mn)],$h.prototype,"neutralFillStealthHoverDelta",void 0),hl([I({attribute:"neutral-fill-stealth-active-delta",converter:F}),wh(vn)],$h.prototype,"neutralFillStealthActiveDelta",void 0),hl([I({attribute:"neutral-fill-stealth-focus-delta",converter:F}),wh(bn)],$h.prototype,"neutralFillStealthFocusDelta",void 0),hl([I({attribute:"neutral-fill-strong-hover-delta",converter:F}),wh(xn)],$h.prototype,"neutralFillStrongHoverDelta",void 0),hl([I({attribute:"neutral-fill-strong-active-delta",converter:F}),wh(wn)],$h.prototype,"neutralFillStrongActiveDelta",void 0),hl([I({attribute:"neutral-fill-strong-focus-delta",converter:F}),wh($n)],$h.prototype,"neutralFillStrongFocusDelta",void 0),hl([I({attribute:"base-layer-luminance",converter:F}),wh(Mo)],$h.prototype,"baseLayerLuminance",void 0),hl([I({attribute:"neutral-stroke-divider-rest-delta",converter:F}),wh(On)],$h.prototype,"neutralStrokeDividerRestDelta",void 0),hl([I({attribute:"neutral-stroke-rest-delta",converter:F}),wh(kn)],$h.prototype,"neutralStrokeRestDelta",void 0),hl([I({attribute:"neutral-stroke-hover-delta",converter:F}),wh(Cn)],$h.prototype,"neutralStrokeHoverDelta",void 0),hl([I({attribute:"neutral-stroke-active-delta",converter:F}),wh(Fn)],$h.prototype,"neutralStrokeActiveDelta",void 0),hl([I({attribute:"neutral-stroke-focus-delta",converter:F}),wh(Sn)],$h.prototype,"neutralStrokeFocusDelta",void 0);const kh=$h.compose({baseName:"design-system-provider",template:ye` <slot></slot> `,styles:Pe`
    ${Me("block")}
  `});var Ch=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],Fh=Ch.join(","),Sh="undefined"==typeof Element,Ih=Sh?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,Th=!Sh&&Element.prototype.getRootNode?function(t){return t.getRootNode()}:function(t){return t.ownerDocument},Dh=function(t){return"INPUT"===t.tagName},Rh=function(t){var e=t.getBoundingClientRect(),i=e.width,o=e.height;return 0===i&&0===o},Oh=function(t,e){return!(e.disabled||function(t){return Dh(t)&&"hidden"===t.type}(e)||function(t,e){var i=e.displayCheck,o=e.getShadowRoot;if("hidden"===getComputedStyle(t).visibility)return!0;var n=Ih.call(t,"details>summary:first-of-type")?t.parentElement:t;if(Ih.call(n,"details:not([open]) *"))return!0;var r=Th(t).host,s=(null==r?void 0:r.ownerDocument.contains(r))||t.ownerDocument.contains(t);if(i&&"full"!==i){if("non-zero-area"===i)return Rh(t)}else{if("function"==typeof o){for(var a=t;t;){var l=t.parentElement,c=Th(t);if(l&&!l.shadowRoot&&!0===o(l))return Rh(t);t=t.assignedSlot?t.assignedSlot:l||c===t.ownerDocument?l:c.host}t=a}if(s)return!t.getClientRects().length}return!1}(e,t)||function(t){return"DETAILS"===t.tagName&&Array.prototype.slice.apply(t.children).some((function(t){return"SUMMARY"===t.tagName}))}(e)||function(t){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))for(var e=t.parentElement;e;){if("FIELDSET"===e.tagName&&e.disabled){for(var i=0;i<e.children.length;i++){var o=e.children.item(i);if("LEGEND"===o.tagName)return!!Ih.call(e,"fieldset[disabled] *")||!o.contains(t)}return!0}e=e.parentElement}return!1}(e))},Eh=function(t,e){return!(function(t){return function(t){return Dh(t)&&"radio"===t.type}(t)&&!function(t){if(!t.name)return!0;var e,i=t.form||Th(t),o=function(t){return i.querySelectorAll('input[type="radio"][name="'+t+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)e=o(window.CSS.escape(t.name));else try{e=o(t.name)}catch(t){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",t.message),!1}var n=function(t,e){for(var i=0;i<t.length;i++)if(t[i].checked&&t[i].form===e)return t[i]}(e,t.form);return!n||n===t}(t)}(e)||function(t,e){return t.tabIndex<0&&(e||/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName)||t.isContentEditable)&&isNaN(parseInt(t.getAttribute("tabindex"),10))?0:t.tabIndex}(e)<0||!Oh(t,e))},Ah=function(t,e){if(e=e||{},!t)throw new Error("No node provided");return!1!==Ih.call(t,Fh)&&Eh(e,t)},Lh=Ch.concat("iframe").join(","),Vh=function(t,e){if(e=e||{},!t)throw new Error("No node provided");return!1!==Ih.call(t,Lh)&&Oh(e,t)};class Ph extends _t{constructor(){super(...arguments),this.modal=!0,this.hidden=!1,this.trapFocus=!0,this.trapFocusChanged=()=>{this.$fastController.isConnected&&this.updateTrapFocus()},this.isTrappingFocus=!1,this.handleDocumentKeydown=t=>{if(!t.defaultPrevented&&!this.hidden)switch(t.key){case L:this.dismiss(),t.preventDefault();break;case H:this.handleTabKeyDown(t)}},this.handleDocumentFocus=t=>{!t.defaultPrevented&&this.shouldForceFocus(t.target)&&(this.focusFirstElement(),t.preventDefault())},this.handleTabKeyDown=t=>{if(!this.trapFocus||this.hidden)return;const e=this.getTabQueueBounds();return 0!==e.length?1===e.length?(e[0].focus(),void t.preventDefault()):void(t.shiftKey&&t.target===e[0]?(e[e.length-1].focus(),t.preventDefault()):t.shiftKey||t.target!==e[e.length-1]||(e[0].focus(),t.preventDefault())):void 0},this.getTabQueueBounds=()=>Ph.reduceTabbableItems([],this),this.focusFirstElement=()=>{const t=this.getTabQueueBounds();t.length>0?t[0].focus():this.dialog instanceof HTMLElement&&this.dialog.focus()},this.shouldForceFocus=t=>this.isTrappingFocus&&!this.contains(t),this.shouldTrapFocus=()=>this.trapFocus&&!this.hidden,this.updateTrapFocus=t=>{const e=void 0===t?this.shouldTrapFocus():t;e&&!this.isTrappingFocus?(this.isTrappingFocus=!0,document.addEventListener("focusin",this.handleDocumentFocus),g.queueUpdate((()=>{this.shouldForceFocus(document.activeElement)&&this.focusFirstElement()}))):!e&&this.isTrappingFocus&&(this.isTrappingFocus=!1,document.removeEventListener("focusin",this.handleDocumentFocus))}}dismiss(){this.$emit("dismiss"),this.$emit("cancel")}show(){this.hidden=!1}hide(){this.hidden=!0,this.$emit("close")}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this.handleDocumentKeydown),this.notifier=b.getNotifier(this),this.notifier.subscribe(this,"hidden"),this.updateTrapFocus()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleDocumentKeydown),this.updateTrapFocus(!1),this.notifier.unsubscribe(this,"hidden")}handleChange(t,e){"hidden"===e&&this.updateTrapFocus()}static reduceTabbableItems(t,e){return"-1"===e.getAttribute("tabindex")?t:Ah(e)||Ph.isFocusableFastElement(e)&&Ph.hasTabbableShadow(e)?(t.push(e),t):e.childElementCount?t.concat(Array.from(e.children).reduce(Ph.reduceTabbableItems,[])):t}static isFocusableFastElement(t){var e,i;return!!(null===(i=null===(e=t.$fastController)||void 0===e?void 0:e.definition.shadowOptions)||void 0===i?void 0:i.delegatesFocus)}static hasTabbableShadow(t){var e,i;return Array.from(null!==(i=null===(e=t.shadowRoot)||void 0===e?void 0:e.querySelectorAll("*"))&&void 0!==i?i:[]).some((t=>Ah(t)))}}o([I({mode:"boolean"})],Ph.prototype,"modal",void 0),o([I({mode:"boolean"})],Ph.prototype,"hidden",void 0),o([I({attribute:"trap-focus",mode:"boolean"})],Ph.prototype,"trapFocus",void 0),o([I({attribute:"aria-describedby"})],Ph.prototype,"ariaDescribedby",void 0),o([I({attribute:"aria-labelledby"})],Ph.prototype,"ariaLabelledby",void 0),o([I({attribute:"aria-label"})],Ph.prototype,"ariaLabel",void 0);const zh=(t,e)=>Pe`
  :host([hidden]) {
    display: none;
  }

  :host {
    --dialog-height: 480px;
    --dialog-width: 640px;
    display: block;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    touch-action: none;
  }

  .positioning-region {
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: auto;
  }

  .control {
    box-shadow: ${bd};
    margin-top: auto;
    margin-bottom: auto;
    border-radius: calc(${ro} * 1px);
    width: var(--dialog-width);
    height: var(--dialog-height);
    background: ${tr};
    z-index: 1;
    border: calc(${so} * 1px) solid transparent;
  }
`,Hh=Ph.compose({baseName:"dialog",template:(t,e)=>ye`
    <div class="positioning-region" part="positioning-region">
        ${Hl((t=>t.modal),ye`
                <div
                    class="overlay"
                    part="overlay"
                    role="presentation"
                    @click="${t=>t.dismiss()}"
                ></div>
            `)}
        <div
            role="dialog"
            tabindex="-1"
            class="control"
            part="control"
            aria-modal="${t=>t.modal}"
            aria-describedby="${t=>t.ariaDescribedby}"
            aria-labelledby="${t=>t.ariaLabelledby}"
            aria-label="${t=>t.ariaLabel}"
            ${we("dialog")}
        >
            <slot></slot>
        </div>
    </div>
`,styles:zh}),Mh=zh,Bh="horizontal",Nh="vertical";class jh extends _t{constructor(){super(...arguments),this.role="separator",this.orientation=Bh}}o([I],jh.prototype,"role",void 0),o([I],jh.prototype,"orientation",void 0);const Uh=(t,e)=>Pe`
    ${Me("block")} :host {
      box-sizing: content-box;
      height: 0;
      border: none;
      border-top: calc(${so} * 1px) solid ${$s};
    }
  `,_h=jh.compose({baseName:"divider",template:(t,e)=>ye`
    <template role="${t=>t.role}" aria-orientation="${t=>t.orientation}"></template>
`,styles:Uh}),qh=Uh,Gh="next";class Wh extends _t{constructor(){super(...arguments),this.hiddenFromAT=!0,this.direction=Gh}keyupHandler(t){if(!this.hiddenFromAT){const e=t.key;"Enter"!==e&&"Space"!==e||this.$emit("click",t),"Escape"===e&&this.blur()}}}o([I({mode:"boolean"})],Wh.prototype,"disabled",void 0),o([I({attribute:"aria-hidden",converter:C})],Wh.prototype,"hiddenFromAT",void 0),o([I],Wh.prototype,"direction",void 0);const Kh=(t,e)=>Pe`
    ${Me("inline-flex")} :host {
      height: calc((${il} + ${oo}) * 1px);
      justify-content: center;
      align-items: center;
      fill: currentcolor;
      color: ${ts};
      background: padding-box linear-gradient(${kr}, ${kr}),
        border-box ${vs};
      box-sizing: border-box;
      border: calc(${so} * 1px) solid transparent;
      border-radius: calc(${no} * 1px);
      padding: 0;
    }

    :host(.disabled) {
      opacity: ${Zi};
      cursor: ${hc};
      pointer-events: none;
    }

    .next,
    .previous {
      display: flex;
    }

    :host(:not(.disabled):hover) {
      cursor: pointer;
    }

    :host(:not(.disabled):hover) {
      color: ${es};
    }

    :host(:not(.disabled):active) {
      color: ${is};
    }

    :host(:${Xa}) {
      ${tl}
    }

    :host::-moz-focus-inner {
      border: 0;
    }
  `.withBehaviors(Ja(Pe`
        :host {
          background: ${Za.ButtonFace};
          border-color: ${Za.ButtonText};
        }
        :host .next,
        :host .previous {
          color: ${Za.ButtonText};
          fill: currentcolor;
        }
        :host(:not(.disabled):hover) {
          background: ${Za.Highlight};
        }
        :host(:not(.disabled):hover) .next,
        :host(:not(.disabled):hover) .previous {
          color: ${Za.HighlightText};
          fill: currentcolor;
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled),
        :host(.disabled) .next,
        :host(.disabled) .previous {
          border-color: ${Za.GrayText};
          color: ${Za.GrayText};
          fill: currentcolor;
        }
        :host(:${Xa}) {
          forced-color-adjust: none;
          outline-color: ${Za.Highlight};
        }
      `)),Xh=Wh.compose({baseName:"flipper",template:(t,e)=>ye`
    <template
        role="button"
        aria-disabled="${t=>!!t.disabled||void 0}"
        tabindex="${t=>t.hiddenFromAT?-1:0}"
        class="${t=>t.direction} ${t=>t.disabled?"disabled":""}"
        @keyup="${(t,e)=>t.keyupHandler(e.event)}"
    >
        ${Hl((t=>t.direction===Gh),ye`
                <span part="next" class="next">
                    <slot name="next">
                        ${e.next||""}
                    </slot>
                </span>
            `)}
        ${Hl((t=>"previous"===t.direction),ye`
                <span part="previous" class="previous">
                    <slot name="previous">
                        ${e.previous||""}
                    </slot>
                </span>
            `)}
    </template>
`,styles:Kh,next:'\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <path d="M7.57 11.84A1 1 0 016 11.02V4.98a1 1 0 011.57-.82l3.79 2.62c.85.59.85 1.85 0 2.44l-3.79 2.62z"/>\n    </svg>\n  ',previous:'\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <path d="M9.43 11.84a1 1 0 001.57-.82V4.98a1 1 0 00-1.57-.82L5.64 6.78c-.85.59-.85 1.85 0 2.44l3.79 2.62z"/>\n    </svg>\n  '}),Yh=Kh;class Qh extends _t{constructor(){super(...arguments),this.framesPerSecond=60,this.updatingItems=!1,this.speed=600,this.easing="ease-in-out",this.flippersHiddenFromAT=!1,this.scrolling=!1,this.resizeDetector=null}get frameTime(){return 1e3/this.framesPerSecond}scrollingChanged(t,e){if(this.scrollContainer){const t=1==this.scrolling?"scrollstart":"scrollend";this.$emit(t,this.scrollContainer.scrollLeft)}}get isRtl(){return this.scrollItems.length>1&&this.scrollItems[0].offsetLeft>this.scrollItems[1].offsetLeft}connectedCallback(){super.connectedCallback(),this.initializeResizeDetector()}disconnectedCallback(){this.disconnectResizeDetector(),super.disconnectedCallback()}scrollItemsChanged(t,e){e&&!this.updatingItems&&g.queueUpdate((()=>this.setStops()))}disconnectResizeDetector(){this.resizeDetector&&(this.resizeDetector.disconnect(),this.resizeDetector=null)}initializeResizeDetector(){this.disconnectResizeDetector(),this.resizeDetector=new window.ResizeObserver(this.resized.bind(this)),this.resizeDetector.observe(this)}updateScrollStops(){this.updatingItems=!0;const t=this.scrollItems.reduce(((t,e)=>e instanceof HTMLSlotElement?t.concat(e.assignedElements()):(t.push(e),t)),[]);this.scrollItems=t,this.updatingItems=!1}setStops(){this.updateScrollStops();const{scrollContainer:t}=this,{scrollLeft:e}=t,{width:i,left:o}=t.getBoundingClientRect();this.width=i;let n=0,r=this.scrollItems.map(((t,i)=>{const{left:r,width:s}=t.getBoundingClientRect(),a=Math.round(r+e-o),l=Math.round(a+s);return this.isRtl?-l:(n=l,0===i?0:a)})).concat(n);r=this.fixScrollMisalign(r),r.sort(((t,e)=>Math.abs(t)-Math.abs(e))),this.scrollStops=r,this.setFlippers()}fixScrollMisalign(t){if(this.isRtl&&t.some((t=>t>0))){t.sort(((t,e)=>e-t));const e=t[0];t=t.map((t=>t-e))}return t}setFlippers(){var t,e;const i=this.scrollContainer.scrollLeft;if(null===(t=this.previousFlipperContainer)||void 0===t||t.classList.toggle("disabled",0===i),this.scrollStops){const t=Math.abs(this.scrollStops[this.scrollStops.length-1]);null===(e=this.nextFlipperContainer)||void 0===e||e.classList.toggle("disabled",Math.abs(i)+this.width>=t)}}scrollInView(t,e=0,i){var o;if("number"!=typeof t&&t&&(t=this.scrollItems.findIndex((e=>e===t||e.contains(t)))),void 0!==t){i=null!=i?i:e;const{scrollContainer:n,scrollStops:r,scrollItems:s}=this,{scrollLeft:a}=this.scrollContainer,{width:l}=n.getBoundingClientRect(),c=r[t],{width:d}=s[t].getBoundingClientRect(),h=c+d,u=a+e>c;if(u||a+l-i<h){const t=null!==(o=[...r].sort(((t,e)=>u?e-t:t-e)).find((t=>u?t+e<c:t+l-(null!=i?i:0)>h)))&&void 0!==o?o:0;this.scrollToPosition(t)}}}keyupHandler(t){switch(t.key){case"ArrowLeft":this.scrollToPrevious();break;case"ArrowRight":this.scrollToNext()}}scrollToPrevious(){const t=this.scrollContainer.scrollLeft,e=this.scrollStops.findIndex(((e,i)=>e>=t&&(this.isRtl||i===this.scrollStops.length-1||this.scrollStops[i+1]>t))),i=Math.abs(this.scrollStops[e+1]);let o=this.scrollStops.findIndex((t=>Math.abs(t)+this.width>i));(o>=e||-1===o)&&(o=e>0?e-1:0),this.scrollToPosition(this.scrollStops[o],t)}scrollToNext(){const t=this.scrollContainer.scrollLeft,e=this.scrollStops.findIndex((e=>Math.abs(e)>=Math.abs(t))),i=this.scrollStops.findIndex((e=>Math.abs(t)+this.width<=Math.abs(e)));let o=e;i>e+2?o=i-2:e<this.scrollStops.length-2&&(o=e+1),this.scrollToPosition(this.scrollStops[o],t)}scrollToPosition(t,e=this.scrollContainer.scrollLeft){var i;if(this.scrolling)return;this.scrolling=!0;const o=null!==(i=this.duration)&&void 0!==i?i:Math.abs(t-e)/this.speed+"s";this.content.style.setProperty("transition-duration",o);const n=parseFloat(getComputedStyle(this.content).getPropertyValue("transition-duration")),r=e=>{e&&e.target!==e.currentTarget||(this.content.style.setProperty("transition-duration","0s"),this.content.style.removeProperty("transform"),this.scrollContainer.style.setProperty("scroll-behavior","auto"),this.scrollContainer.scrollLeft=t,this.setFlippers(),this.content.removeEventListener("transitionend",r),this.scrolling=!1)};if(0===n)return void r();this.content.addEventListener("transitionend",r);const s=this.scrollContainer.scrollWidth-this.scrollContainer.clientWidth;let a=this.scrollContainer.scrollLeft-Math.min(t,s);this.isRtl&&(a=this.scrollContainer.scrollLeft+Math.min(Math.abs(t),s)),this.content.style.setProperty("transition-property","transform"),this.content.style.setProperty("transition-timing-function",this.easing),this.content.style.setProperty("transform",`translateX(${a}px)`)}resized(){this.resizeTimeout&&(this.resizeTimeout=clearTimeout(this.resizeTimeout)),this.resizeTimeout=setTimeout((()=>{this.width=this.scrollContainer.offsetWidth,this.setFlippers()}),this.frameTime)}scrolled(){this.scrollTimeout&&(this.scrollTimeout=clearTimeout(this.scrollTimeout)),this.scrollTimeout=setTimeout((()=>{this.setFlippers()}),this.frameTime)}}o([I({converter:F})],Qh.prototype,"speed",void 0),o([I],Qh.prototype,"duration",void 0),o([I],Qh.prototype,"easing",void 0),o([I({attribute:"flippers-hidden-from-at",converter:C})],Qh.prototype,"flippersHiddenFromAT",void 0),o([y],Qh.prototype,"scrolling",void 0),o([y],Qh.prototype,"scrollItems",void 0),o([I({attribute:"view"})],Qh.prototype,"view",void 0);const Jh=Pe`
  .scroll-prev {
    right: auto;
    left: 0;
  }

  .scroll.scroll-next::before,
  .scroll-next .scroll-action {
    left: auto;
    right: 0;
  }

  .scroll.scroll-next::before {
    background: linear-gradient(to right, transparent, var(--scroll-fade-next));
  }

  .scroll-next .scroll-action {
    transform: translate(50%, -50%);
  }
`,Zh=Pe`
  .scroll.scroll-next {
    right: auto;
    left: 0;
  }

  .scroll.scroll-next::before {
    background: linear-gradient(to right, var(--scroll-fade-next), transparent);
    left: auto;
    right: 0;
  }

  .scroll.scroll-prev::before {
    background: linear-gradient(to right, transparent, var(--scroll-fade-previous));
  }

  .scroll-prev .scroll-action {
    left: auto;
    right: 0;
    transform: translate(50%, -50%);
  }
`,tu=Pe`
  .scroll-area {
    position: relative;
  }

  div.scroll-view {
    overflow-x: hidden;
  }

  .scroll {
    bottom: 0;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
    user-select: none;
    width: 100px;
  }

  .scroll.disabled {
    display: none;
  }

  .scroll::before,
  .scroll-action {
    left: 0;
    position: absolute;
  }

  .scroll::before {
    background: linear-gradient(to right, var(--scroll-fade-previous), transparent);
    content: '';
    display: block;
    height: 100%;
    width: 100%;
  }

  .scroll-action {
    pointer-events: auto;
    right: auto;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  ::slotted(fluent-flipper) {
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }

  .scroll-area:hover ::slotted(fluent-flipper) {
    opacity: 1;
  }
`.withBehaviors(new Kc(Jh,Zh)),eu=(t,e)=>Pe`
  ${Me("block")} :host {
    --scroll-align: center;
    --scroll-item-spacing: 4px;
    contain: layout;
    position: relative;
  }

  .scroll-view {
    overflow-x: auto;
    scrollbar-width: none;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  .content-container {
    align-items: var(--scroll-align);
    display: inline-flex;
    flex-wrap: nowrap;
    position: relative;
  }

  .content-container ::slotted(*) {
    margin-right: var(--scroll-item-spacing);
  }

  .content-container ::slotted(*:last-child) {
    margin-right: 0;
  }
`;class iu extends Qh{connectedCallback(){super.connectedCallback(),"mobile"!==this.view&&this.$fastController.addStyles(tu)}}const ou=iu.compose({baseName:"horizontal-scroll",baseClass:Qh,template:(t,e)=>{var i,o;return ye`
    <template
        class="horizontal-scroll"
        @keyup="${(t,e)=>t.keyupHandler(e.event)}"
    >
        ${Ce(0,e)}
        <div class="scroll-area" part="scroll-area">
            <div
                class="scroll-view"
                part="scroll-view"
                @scroll="${t=>t.scrolled()}"
                ${we("scrollContainer")}
            >
                <div class="content-container" part="content-container" ${we("content")}>
                    <slot
                        ${Ae({property:"scrollItems",filter:Re()})}
                    ></slot>
                </div>
            </div>
            ${Hl((t=>"mobile"!==t.view),ye`
                    <div
                        class="scroll scroll-prev"
                        part="scroll-prev"
                        ${we("previousFlipperContainer")}
                    >
                        <div class="scroll-action" part="scroll-action-previous">
                            <slot name="previous-flipper">
                                ${e.previousFlipper instanceof Function?e.previousFlipper(t,e):null!==(i=e.previousFlipper)&&void 0!==i?i:""}
                            </slot>
                        </div>
                    </div>
                    <div
                        class="scroll scroll-next"
                        part="scroll-next"
                        ${we("nextFlipperContainer")}
                    >
                        <div class="scroll-action" part="scroll-action-next">
                            <slot name="next-flipper">
                                ${e.nextFlipper instanceof Function?e.nextFlipper(t,e):null!==(o=e.nextFlipper)&&void 0!==o?o:""}
                            </slot>
                        </div>
                    </div>
                `)}
        </div>
        ${ke(0,e)}
    </template>
`},styles:eu,nextFlipper:ye`
    <fluent-flipper @click="${t=>t.scrollToNext()}" aria-hidden="${t=>t.flippersHiddenFromAT}"></fluent-flipper>
  `,previousFlipper:ye`
    <fluent-flipper
      @click="${t=>t.scrollToPrevious()}"
      direction="previous"
      aria-hidden="${t=>t.flippersHiddenFromAT}"
    ></fluent-flipper>
  `}),nu=eu;class ru extends Ld{constructor(){super(...arguments),this.activeIndex=-1,this.rangeStartIndex=-1}get activeOption(){return this.options[this.activeIndex]}get checkedOptions(){var t;return null===(t=this.options)||void 0===t?void 0:t.filter((t=>t.checked))}get firstSelectedOptionIndex(){return this.options.indexOf(this.firstSelectedOption)}activeIndexChanged(t,e){var i,o;this.ariaActiveDescendant=null!==(o=null===(i=this.options[e])||void 0===i?void 0:i.id)&&void 0!==o?o:"",this.focusAndScrollOptionIntoView()}checkActiveIndex(){if(!this.multiple)return;const t=this.activeOption;t&&(t.checked=!0)}checkFirstOption(t=!1){t?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex+1),this.options.forEach(((t,e)=>{t.checked=j(e,this.rangeStartIndex)}))):this.uncheckAllOptions(),this.activeIndex=0,this.checkActiveIndex()}checkLastOption(t=!1){t?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),this.options.forEach(((t,e)=>{t.checked=j(e,this.rangeStartIndex,this.options.length)}))):this.uncheckAllOptions(),this.activeIndex=this.options.length-1,this.checkActiveIndex()}connectedCallback(){super.connectedCallback(),this.addEventListener("focusout",this.focusoutHandler)}disconnectedCallback(){this.removeEventListener("focusout",this.focusoutHandler),super.disconnectedCallback()}checkNextOption(t=!1){t?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),this.options.forEach(((t,e)=>{t.checked=j(e,this.rangeStartIndex,this.activeIndex+1)}))):this.uncheckAllOptions(),this.activeIndex+=this.activeIndex<this.options.length-1?1:0,this.checkActiveIndex()}checkPreviousOption(t=!1){t?(-1===this.rangeStartIndex&&(this.rangeStartIndex=this.activeIndex),1===this.checkedOptions.length&&(this.rangeStartIndex+=1),this.options.forEach(((t,e)=>{t.checked=j(e,this.activeIndex,this.rangeStartIndex)}))):this.uncheckAllOptions(),this.activeIndex-=this.activeIndex>0?1:0,this.checkActiveIndex()}clickHandler(t){var e;if(!this.multiple)return super.clickHandler(t);const i=null===(e=t.target)||void 0===e?void 0:e.closest("[role=option]");return i&&!i.disabled?(this.uncheckAllOptions(),this.activeIndex=this.options.indexOf(i),this.checkActiveIndex(),this.toggleSelectedForAllCheckedOptions(),!0):void 0}focusAndScrollOptionIntoView(){super.focusAndScrollOptionIntoView(this.activeOption)}focusinHandler(t){if(!this.multiple)return super.focusinHandler(t);this.shouldSkipFocus||t.target!==t.currentTarget||(this.uncheckAllOptions(),-1===this.activeIndex&&(this.activeIndex=-1!==this.firstSelectedOptionIndex?this.firstSelectedOptionIndex:0),this.checkActiveIndex(),this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}focusoutHandler(t){this.multiple&&this.uncheckAllOptions()}keydownHandler(t){if(!this.multiple)return super.keydownHandler(t);if(this.disabled)return!0;const{key:e,shiftKey:i}=t;switch(this.shouldSkipFocus=!1,e){case V:return void this.checkFirstOption(i);case D:return void this.checkNextOption(i);case E:return void this.checkPreviousOption(i);case P:return void this.checkLastOption(i);case H:return this.focusAndScrollOptionIntoView(),!0;case L:return this.uncheckAllOptions(),this.checkActiveIndex(),!0;case z:if(t.preventDefault(),this.typeAheadExpired)return void this.toggleSelectedForAllCheckedOptions();default:return 1===e.length&&this.handleTypeAhead(`${e}`),!0}}mousedownHandler(t){if(t.offsetX>=0&&t.offsetX<=this.scrollWidth)return super.mousedownHandler(t)}multipleChanged(t,e){var i;this.ariaMultiSelectable=e?"true":null,null===(i=this.options)||void 0===i||i.forEach((t=>{t.checked=!e&&void 0})),this.setSelectedOptions()}setSelectedOptions(){this.multiple?this.$fastController.isConnected&&this.options&&(this.selectedOptions=this.options.filter((t=>t.selected)),this.focusAndScrollOptionIntoView()):super.setSelectedOptions()}sizeChanged(t,e){var i;const o=Math.max(0,parseInt(null!==(i=null==e?void 0:e.toFixed())&&void 0!==i?i:"",10));o!==e&&g.queueUpdate((()=>{this.size=o}))}toggleSelectedForAllCheckedOptions(){const t=this.checkedOptions.filter((t=>!t.disabled)),e=!t.every((t=>t.selected));t.forEach((t=>t.selected=e)),this.selectedIndex=this.options.indexOf(t[t.length-1]),this.setSelectedOptions()}typeaheadBufferChanged(t,e){if(this.multiple){if(this.$fastController.isConnected){const t=this.getTypeaheadMatches(),e=this.options.indexOf(t[0]);e>-1&&(this.activeIndex=e,this.uncheckAllOptions(),this.checkActiveIndex()),this.typeAheadExpired=!1}}else super.typeaheadBufferChanged(t,e)}uncheckAllOptions(t=!1){this.options.forEach((t=>t.checked=!this.multiple&&void 0)),t||(this.rangeStartIndex=-1)}}o([y],ru.prototype,"activeIndex",void 0),o([I({mode:"boolean"})],ru.prototype,"multiple",void 0),o([I({converter:F})],ru.prototype,"size",void 0);const su=(t,e)=>Pe`
    ${Me("inline-flex")} :host {
      border: calc(${so} * 1px) solid ${us};
      border-radius: calc(${no} * 1px);
      box-sizing: border-box;
      flex-direction: column;
      padding: calc(${oo} * 1px) 0;
    }

    ::slotted(${t.tagFor(Ed)}) {
      margin: 0 calc(${oo} * 1px);
    }

    :host(:focus-within:not([disabled])) {
      ${tl}
    }
  `;class au extends Ld{}const lu=au.compose({baseName:"listbox",template:(t,e)=>ye`
    <template
        aria-activedescendant="${t=>t.ariaActiveDescendant}"
        aria-multiselectable="${t=>t.ariaMultiSelectable}"
        class="listbox"
        role="listbox"
        tabindex="${t=>t.disabled?null:"0"}"
        @click="${(t,e)=>t.clickHandler(e.event)}"
        @focusin="${(t,e)=>t.focusinHandler(e.event)}"
        @keydown="${(t,e)=>t.keydownHandler(e.event)}"
        @mousedown="${(t,e)=>t.mousedownHandler(e.event)}"
    >
        <slot
            ${Ae({filter:ru.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
        ></slot>
    </template>
`,styles:su}),cu=su,du=(t,e)=>Pe`
    ${Me("inline-flex")} :host {
      position: relative;
      ${za}
      background: ${Xr};
      border-radius: calc(${no} * 1px);
      border: calc(${so} * 1px) solid transparent;
      box-sizing: border-box;
      color: ${rs};
      cursor: pointer;
      fill: currentcolor;
      height: calc(${il} * 1px);
      overflow: hidden;
      align-items: center;
      padding: 0 calc(((${oo} * 3) - ${so} - 1) * 1px);
      user-select: none;
      white-space: nowrap;
    }

    :host::before {
      content: '';
      display: block;
      position: absolute;
      left: calc((${ao} - ${so}) * 1px);
      top: calc((${il} / 4) - ${ao} * 1px);
      width: 3px;
      height: calc((${il} / 2) * 1px);
      background: transparent;
      border-radius: calc(${no} * 1px);
    }

    :host(:not([disabled]):hover) {
      background: ${Yr};
    }

    :host(:not([disabled]):active) {
      background: ${Qr};
    }

    :host(:not([disabled]):active)::before {
      background: ${or};
      height: calc(((${il} / 2) - 6) * 1px);
    }

    :host([aria-selected='true'])::before {
      background: ${or};
    }

    :host(:${Xa}) {
      ${tl}
      background: ${Jr};
    }

    :host([aria-selected='true']) {
      background: ${_r};
    }

    :host(:not([disabled])[aria-selected='true']:hover) {
      background: ${qr};
    }

    :host(:not([disabled])[aria-selected='true']:active) {
      background: ${Gr};
    }

    :host(:not([disabled]):not([aria-selected='true']):hover) {
      background: ${Yr};
    }

    :host(:not([disabled]):not([aria-selected='true']):active) {
      background: ${Qr};
    }

    :host([disabled]) {
      cursor: ${hc};
      opacity: ${Zi};
    }

    .content {
      grid-column-start: 2;
      justify-self: start;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .start,
    .end,
    ::slotted(svg) {
      display: flex;
    }

    ::slotted([slot='end']) {
      margin-inline-start: 1ch;
    }

    ::slotted([slot='start']) {
      margin-inline-end: 1ch;
    }
  `.withBehaviors(Ja(Pe`
        :host {
          background: ${Za.ButtonFace};
          border-color: ${Za.ButtonFace};
          color: ${Za.ButtonText};
        }
        :host(:not([disabled]):not([aria-selected="true"]):hover),
        :host(:not([disabled])[aria-selected="true"]:hover),
        :host([aria-selected="true"]) {
          forced-color-adjust: none;
          background: ${Za.Highlight};
          color: ${Za.HighlightText};
        }
        :host(:not([disabled]):active)::before,
        :host([aria-selected='true'])::before {
          background: ${Za.HighlightText};
        }
        :host([disabled]),
        :host([disabled]:not([aria-selected='true']):hover) {
          background: ${Za.Canvas};
          color: ${Za.GrayText};
          fill: currentcolor;
          opacity: 1;
        }
        :host(:${Xa}) {
          outline-color: ${Za.CanvasText};
        }
      `)),hu=Ed.compose({baseName:"option",template:(t,e)=>ye`
    <template
        aria-checked="${t=>t.ariaChecked}"
        aria-disabled="${t=>t.ariaDisabled}"
        aria-posinset="${t=>t.ariaPosInSet}"
        aria-selected="${t=>t.ariaSelected}"
        aria-setsize="${t=>t.ariaSetSize}"
        class="${t=>[t.checked&&"checked",t.selected&&"selected",t.disabled&&"disabled"].filter(Boolean).join(" ")}"
        role="option"
    >
        ${Ce(0,e)}
        <span class="content" part="content">
            <slot ${Ae("content")}></slot>
        </span>
        ${ke(0,e)}
    </template>
`,styles:du}),uu=du,pu="menuitem",fu="menuitemcheckbox",gu="menuitemradio",mu={[pu]:"menuitem",[fu]:"menuitemcheckbox",[gu]:"menuitemradio"};class vu extends _t{constructor(){super(...arguments),this.role=pu,this.hasSubmenu=!1,this.currentDirection=ni.ltr,this.focusSubmenuOnLoad=!1,this.handleMenuItemKeyDown=t=>{if(t.defaultPrevented)return!1;switch(t.key){case A:case z:return this.invoke(),!1;case O:return this.expandAndFocus(),!1;case R:if(this.expanded)return this.expanded=!1,this.focus(),!1}return!0},this.handleMenuItemClick=t=>(t.defaultPrevented||this.disabled||this.invoke(),!1),this.submenuLoaded=()=>{this.focusSubmenuOnLoad&&(this.focusSubmenuOnLoad=!1,this.hasSubmenu&&(this.submenu.focus(),this.setAttribute("tabindex","-1")))},this.handleMouseOver=t=>(this.disabled||!this.hasSubmenu||this.expanded||(this.expanded=!0),!1),this.handleMouseOut=t=>(!this.expanded||this.contains(document.activeElement)||(this.expanded=!1),!1),this.expandAndFocus=()=>{this.hasSubmenu&&(this.focusSubmenuOnLoad=!0,this.expanded=!0)},this.invoke=()=>{if(!this.disabled)switch(this.role){case fu:this.checked=!this.checked;break;case pu:this.updateSubmenu(),this.hasSubmenu?this.expandAndFocus():this.$emit("change");break;case gu:this.checked||(this.checked=!0)}},this.updateSubmenu=()=>{this.submenu=this.domChildren().find((t=>"menu"===t.getAttribute("role"))),this.hasSubmenu=void 0!==this.submenu}}expandedChanged(t){if(this.$fastController.isConnected){if(void 0===this.submenu)return;!1===this.expanded?this.submenu.collapseExpandedItem():this.currentDirection=Pl(this),this.$emit("expanded-change",this,{bubbles:!1})}}checkedChanged(t,e){this.$fastController.isConnected&&this.$emit("change")}connectedCallback(){super.connectedCallback(),g.queueUpdate((()=>{this.updateSubmenu()})),this.startColumnCount||(this.startColumnCount=1),this.observer=new MutationObserver(this.updateSubmenu)}disconnectedCallback(){super.disconnectedCallback(),this.submenu=void 0,void 0!==this.observer&&(this.observer.disconnect(),this.observer=void 0)}domChildren(){return Array.from(this.children).filter((t=>!t.hasAttribute("hidden")))}}o([I({mode:"boolean"})],vu.prototype,"disabled",void 0),o([I({mode:"boolean"})],vu.prototype,"expanded",void 0),o([y],vu.prototype,"startColumnCount",void 0),o([I],vu.prototype,"role",void 0),o([I({mode:"boolean"})],vu.prototype,"checked",void 0),o([y],vu.prototype,"submenuRegion",void 0),o([y],vu.prototype,"hasSubmenu",void 0),o([y],vu.prototype,"currentDirection",void 0),o([y],vu.prototype,"submenu",void 0),Ie(vu,$e);class bu extends _t{constructor(){super(...arguments),this.expandedItem=null,this.focusIndex=-1,this.isNestedMenu=()=>null!==this.parentElement&&Wa(this.parentElement)&&"menuitem"===this.parentElement.getAttribute("role"),this.handleFocusOut=t=>{if(!this.contains(t.relatedTarget)&&void 0!==this.menuItems){this.collapseExpandedItem();const t=this.menuItems.findIndex(this.isFocusableElement);this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.menuItems[t].setAttribute("tabindex","0"),this.focusIndex=t}},this.handleItemFocus=t=>{const e=t.target;void 0!==this.menuItems&&e!==this.menuItems[this.focusIndex]&&(this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=this.menuItems.indexOf(e),e.setAttribute("tabindex","0"))},this.handleExpandedChanged=t=>{if(t.defaultPrevented||null===t.target||void 0===this.menuItems||this.menuItems.indexOf(t.target)<0)return;t.preventDefault();const e=t.target;null===this.expandedItem||e!==this.expandedItem||!1!==e.expanded?e.expanded&&(null!==this.expandedItem&&this.expandedItem!==e&&(this.expandedItem.expanded=!1),this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.expandedItem=e,this.focusIndex=this.menuItems.indexOf(e),e.setAttribute("tabindex","0")):this.expandedItem=null},this.removeItemListeners=()=>{void 0!==this.menuItems&&this.menuItems.forEach((t=>{t.removeEventListener("expanded-change",this.handleExpandedChanged),t.removeEventListener("focus",this.handleItemFocus)}))},this.setItems=()=>{const t=this.domChildren();this.removeItemListeners(),this.menuItems=t;const e=this.menuItems.filter(this.isMenuItemElement);e.length&&(this.focusIndex=0);const i=e.reduce(((t,e)=>{const i=function(t){const e=t.getAttribute("role"),i=t.querySelector("[slot=start]");return e!==pu&&null===i||e===pu&&null!==i?1:e!==pu&&null!==i?2:0}(e);return t>i?t:i}),0);e.forEach(((t,e)=>{t.setAttribute("tabindex",0===e?"0":"-1"),t.addEventListener("expanded-change",this.handleExpandedChanged),t.addEventListener("focus",this.handleItemFocus),t instanceof vu&&(t.startColumnCount=i)}))},this.changeHandler=t=>{if(void 0===this.menuItems)return;const e=t.target,i=this.menuItems.indexOf(e);if(-1!==i&&"menuitemradio"===e.role&&!0===e.checked){for(let t=i-1;t>=0;--t){const e=this.menuItems[t],i=e.getAttribute("role");if(i===gu&&(e.checked=!1),"separator"===i)break}const t=this.menuItems.length-1;for(let e=i+1;e<=t;++e){const t=this.menuItems[e],i=t.getAttribute("role");if(i===gu&&(t.checked=!1),"separator"===i)break}}},this.isMenuItemElement=t=>Wa(t)&&bu.focusableElementRoles.hasOwnProperty(t.getAttribute("role")),this.isFocusableElement=t=>this.isMenuItemElement(t)}itemsChanged(t,e){this.$fastController.isConnected&&void 0!==this.menuItems&&this.setItems()}connectedCallback(){super.connectedCallback(),g.queueUpdate((()=>{this.setItems()})),this.addEventListener("change",this.changeHandler)}disconnectedCallback(){super.disconnectedCallback(),this.removeItemListeners(),this.menuItems=void 0,this.removeEventListener("change",this.changeHandler)}focus(){this.setFocus(0,1)}collapseExpandedItem(){null!==this.expandedItem&&(this.expandedItem.expanded=!1,this.expandedItem=null)}handleMenuKeyDown(t){if(!t.defaultPrevented&&void 0!==this.menuItems)switch(t.key){case D:return void this.setFocus(this.focusIndex+1,1);case E:return void this.setFocus(this.focusIndex-1,-1);case P:return void this.setFocus(this.menuItems.length-1,-1);case V:return void this.setFocus(0,1);default:return!0}}domChildren(){return Array.from(this.children).filter((t=>!t.hasAttribute("hidden")))}setFocus(t,e){if(void 0!==this.menuItems)for(;t>=0&&t<this.menuItems.length;){const i=this.menuItems[t];if(this.isFocusableElement(i)){this.focusIndex>-1&&this.menuItems.length>=this.focusIndex-1&&this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=t,i.setAttribute("tabindex","0"),i.focus();break}t+=e}}}bu.focusableElementRoles=mu,o([y],bu.prototype,"items",void 0);const yu=(t,e)=>Pe`
    ${Me("block")} :host {
      background: ${qn};
      border: calc(${so} * 1px) solid transparent;
      border-radius: calc(${ro} * 1px);
      box-shadow: ${md};
      padding: calc((${oo} - ${so}) * 1px) 0;
      max-width: 368px;
      min-width: 64px;
    }

    :host([slot='submenu']) {
      width: max-content;
      margin: 0 calc(${oo} * 2px);
    }

    ::slotted(${t.tagFor(vu)}) {
      margin: 0 calc(${oo} * 1px);
    }

    ::slotted(${t.tagFor(jh)}) {
      margin: calc(${oo} * 1px) 0;
    }

    ::slotted(hr) {
      box-sizing: content-box;
      height: 0;
      margin: calc(${oo} * 1px) 0;
      border: none;
      border-top: calc(${so} * 1px) solid ${$s};
    }
  `.withBehaviors(Ja(Pe`
        :host([slot='submenu']) {
          background: ${Za.Canvas};
          border-color: ${Za.CanvasText};
        }
      `));class xu extends bu{connectedCallback(){super.connectedCallback(),tr.setValueFor(this,qn)}}const wu=xu.compose({baseName:"menu",baseClass:bu,template:(t,e)=>ye`
    <template
        slot="${t=>t.slot?t.slot:t.isNestedMenu()?"submenu":void 0}"
        role="menu"
        @keydown="${(t,e)=>t.handleMenuKeyDown(e.event)}"
        @focusout="${(t,e)=>t.handleFocusOut(e.event)}"
    >
        <slot ${Ae("items")}></slot>
    </template>
`,styles:yu}),$u=yu,ku=(t,e)=>Pe`
    ${Me("grid")} :host {
      contain: layout;
      overflow: visible;
      ${za}
      box-sizing: border-box;
      height: calc(${il} * 1px);
      grid-template-columns: minmax(32px, auto) 1fr minmax(32px, auto);
      grid-template-rows: auto;
      justify-items: center;
      align-items: center;
      padding: 0;
      white-space: nowrap;
      color: ${rs};
      fill: currentcolor;
      cursor: pointer;
      border-radius: calc(${no} * 1px);
      border: calc(${so} * 1px) solid transparent;
      position: relative;
    }

    :host(.indent-0) {
      grid-template-columns: auto 1fr minmax(32px, auto);
    }

    :host(.indent-0) .content {
      grid-column: 1;
      grid-row: 1;
      margin-inline-start: 10px;
    }

    :host(.indent-0) .expand-collapse-glyph-container {
      grid-column: 5;
      grid-row: 1;
    }

    :host(.indent-2) {
      grid-template-columns: minmax(32px, auto) minmax(32px, auto) 1fr minmax(32px, auto) minmax(32px, auto);
    }

    :host(.indent-2) .content {
      grid-column: 3;
      grid-row: 1;
      margin-inline-start: 10px;
    }

    :host(.indent-2) .expand-collapse-glyph-container {
      grid-column: 5;
      grid-row: 1;
    }

    :host(.indent-2) .start {
      grid-column: 2;
    }

    :host(.indent-2) .end {
      grid-column: 4;
    }

    :host(:${Xa}) {
      ${tl}
    }

    :host(:not([disabled]):hover) {
      background: ${Yr};
    }

    :host(:not([disabled]):active),
    :host(.expanded) {
      background: ${Qr};
      color: ${rs};
      z-index: 2;
    }

    :host([disabled]) {
      cursor: ${hc};
      opacity: ${Zi};
    }

    .content {
      grid-column-start: 2;
      justify-self: start;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .start,
    .end {
      display: flex;
      justify-content: center;
    }

    :host(.indent-0[aria-haspopup='menu']) {
      display: grid;
      grid-template-columns: minmax(32px, auto) auto 1fr minmax(32px, auto) minmax(32px, auto);
      align-items: center;
      min-height: 32px;
    }

    :host(.indent-1[aria-haspopup='menu']),
    :host(.indent-1[role='menuitemcheckbox']),
    :host(.indent-1[role='menuitemradio']) {
      display: grid;
      grid-template-columns: minmax(32px, auto) auto 1fr minmax(32px, auto) minmax(32px, auto);
      align-items: center;
      min-height: 32px;
    }

    :host(.indent-2:not([aria-haspopup='menu'])) .end {
      grid-column: 5;
    }

    :host .input-container,
    :host .expand-collapse-glyph-container {
      display: none;
    }

    :host([aria-haspopup='menu']) .expand-collapse-glyph-container,
    :host([role='menuitemcheckbox']) .input-container,
    :host([role='menuitemradio']) .input-container {
      display: grid;
    }

    :host([aria-haspopup='menu']) .content,
    :host([role='menuitemcheckbox']) .content,
    :host([role='menuitemradio']) .content {
      grid-column-start: 3;
    }

    :host([aria-haspopup='menu'].indent-0) .content {
      grid-column-start: 1;
    }

    :host([aria-haspopup='menu']) .end,
    :host([role='menuitemcheckbox']) .end,
    :host([role='menuitemradio']) .end {
      grid-column-start: 4;
    }

    :host .expand-collapse,
    :host .checkbox,
    :host .radio {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      box-sizing: border-box;
    }

    :host .checkbox-indicator,
    :host .radio-indicator,
    slot[name='checkbox-indicator'],
    slot[name='radio-indicator'] {
      display: none;
    }

    ::slotted([slot='end']:not(svg)) {
      margin-inline-end: 10px;
      color: ${ds};
    }

    :host([aria-checked='true']) .checkbox-indicator,
    :host([aria-checked='true']) slot[name='checkbox-indicator'],
    :host([aria-checked='true']) .radio-indicator,
    :host([aria-checked='true']) slot[name='radio-indicator'] {
      display: flex;
    }
  `.withBehaviors(Ja(Pe`
        :host,
        ::slotted([slot='end']:not(svg)) {
          forced-color-adjust: none;
          color: ${Za.ButtonText};
          fill: currentcolor;
        }
        :host(:not([disabled]):hover) {
          background: ${Za.Highlight};
          color: ${Za.HighlightText};
          fill: currentcolor;
        }
        :host(:hover) .start,
        :host(:hover) .end,
        :host(:hover)::slotted(svg),
        :host(:active) .start,
        :host(:active) .end,
        :host(:active)::slotted(svg),
        :host(:hover) ::slotted([slot='end']:not(svg)),
        :host(:${Xa}) ::slotted([slot='end']:not(svg)) {
          color: ${Za.HighlightText};
          fill: currentcolor;
        }
        :host(.expanded) {
          background: ${Za.Highlight};
          color: ${Za.HighlightText};
        }
        :host(:${Xa}) {
          background: ${Za.Highlight};
          outline-color: ${Za.ButtonText};
          color: ${Za.HighlightText};
          fill: currentcolor;
        }
        :host([disabled]),
        :host([disabled]:hover),
        :host([disabled]:hover) .start,
        :host([disabled]:hover) .end,
        :host([disabled]:hover)::slotted(svg),
        :host([disabled]:${Xa}) {
          background: ${Za.ButtonFace};
          color: ${Za.GrayText};
          fill: currentcolor;
          opacity: 1;
        }
        :host([disabled]:${Xa}) {
          outline-color: ${Za.GrayText};
        }
        :host .expanded-toggle,
        :host .checkbox,
        :host .radio {
          border-color: ${Za.ButtonText};
          background: ${Za.HighlightText};
        }
        :host([checked]) .checkbox,
        :host([checked]) .radio {
          background: ${Za.HighlightText};
          border-color: ${Za.HighlightText};
        }
        :host(:hover) .expanded-toggle,
            :host(:hover) .checkbox,
            :host(:hover) .radio,
            :host(:${Xa}) .expanded-toggle,
            :host(:${Xa}) .checkbox,
            :host(:${Xa}) .radio,
            :host([checked]:hover) .checkbox,
            :host([checked]:hover) .radio,
            :host([checked]:${Xa}) .checkbox,
            :host([checked]:${Xa}) .radio {
          border-color: ${Za.HighlightText};
        }
        :host([aria-checked='true']) {
          background: ${Za.Highlight};
          color: ${Za.HighlightText};
        }
        :host([aria-checked='true']) .checkbox-indicator,
        :host([aria-checked='true']) ::slotted([slot='checkbox-indicator']),
        :host([aria-checked='true']) ::slotted([slot='radio-indicator']) {
          fill: ${Za.Highlight};
        }
        :host([aria-checked='true']) .radio-indicator {
          background: ${Za.Highlight};
        }
      `),new Kc(Pe`
        .expand-collapse-glyph-container {
          transform: rotate(0deg);
        }
      `,Pe`
        .expand-collapse-glyph-container {
          transform: rotate(180deg);
        }
      `)),Cu=vu.compose({baseName:"menu-item",template:(t,e)=>ye`
    <template
        role="${t=>t.role}"
        aria-haspopup="${t=>t.hasSubmenu?"menu":void 0}"
        aria-checked="${t=>t.role!==pu?t.checked:void 0}"
        aria-disabled="${t=>t.disabled}"
        aria-expanded="${t=>t.expanded}"
        @keydown="${(t,e)=>t.handleMenuItemKeyDown(e.event)}"
        @click="${(t,e)=>t.handleMenuItemClick(e.event)}"
        @mouseover="${(t,e)=>t.handleMouseOver(e.event)}"
        @mouseout="${(t,e)=>t.handleMouseOut(e.event)}"
        class="${t=>t.disabled?"disabled":""} ${t=>t.expanded?"expanded":""} ${t=>`indent-${t.startColumnCount}`}"
    >
            ${Hl((t=>t.role===fu),ye`
                    <div part="input-container" class="input-container">
                        <span part="checkbox" class="checkbox">
                            <slot name="checkbox-indicator">
                                ${e.checkboxIndicator||""}
                            </slot>
                        </span>
                    </div>
                `)}
            ${Hl((t=>t.role===gu),ye`
                    <div part="input-container" class="input-container">
                        <span part="radio" class="radio">
                            <slot name="radio-indicator">
                                ${e.radioIndicator||""}
                            </slot>
                        </span>
                    </div>
                `)}
        </div>
        ${Ce(0,e)}
        <span class="content" part="content">
            <slot></slot>
        </span>
        ${ke(0,e)}
        ${Hl((t=>t.hasSubmenu),ye`
                <div
                    part="expand-collapse-glyph-container"
                    class="expand-collapse-glyph-container"
                >
                    <span part="expand-collapse" class="expand-collapse">
                        <slot name="expand-collapse-indicator">
                            ${e.expandCollapseGlyph||""}
                        </slot>
                    </span>
                </div>
            `)}
        ${Hl((t=>t.expanded),ye`
                <${t.tagFor(zl)}
                    :anchorElement="${t=>t}"
                    vertical-positioning-mode="dynamic"
                    vertical-default-position="bottom"
                    vertical-inset="true"
                    horizontal-positioning-mode="dynamic"
                    horizontal-default-position="end"
                    class="submenu-region"
                    dir="${t=>t.currentDirection}"
                    @loaded="${t=>t.submenuLoaded()}"
                    ${we("submenuRegion")}
                    part="submenu-region"
                >
                    <slot name="submenu"></slot>
                </${t.tagFor(zl)}>
            `)}
    </template>
`,styles:ku,checkboxIndicator:'\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <path d="M13.86 3.66a.5.5 0 01-.02.7l-7.93 7.48a.6.6 0 01-.84-.02L2.4 9.1a.5.5 0 01.72-.7l2.4 2.44 7.65-7.2a.5.5 0 01.7.02z"/>\n    </svg>\n  ',expandCollapseGlyph:'\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <path d="M5.65 3.15a.5.5 0 000 .7L9.79 8l-4.14 4.15a.5.5 0 00.7.7l4.5-4.5a.5.5 0 000-.7l-4.5-4.5a.5.5 0 00-.7 0z"/>\n    </svg>\n  ',radioIndicator:'\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <circle cx="8" cy="8" r="2"/>\n    </svg>\n  '}),Fu=ku;class Su extends _t{}class Iu extends(rc(Su)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Tu extends Iu{constructor(){super(...arguments),this.type="text"}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&g.queueUpdate((()=>{this.focus()}))}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}}o([I({attribute:"readonly",mode:"boolean"})],Tu.prototype,"readOnly",void 0),o([I({mode:"boolean"})],Tu.prototype,"autofocus",void 0),o([I],Tu.prototype,"placeholder",void 0),o([I],Tu.prototype,"type",void 0),o([I],Tu.prototype,"list",void 0),o([I({converter:F})],Tu.prototype,"maxlength",void 0),o([I({converter:F})],Tu.prototype,"minlength",void 0),o([I],Tu.prototype,"pattern",void 0),o([I({converter:F})],Tu.prototype,"size",void 0),o([I({mode:"boolean"})],Tu.prototype,"spellcheck",void 0),o([y],Tu.prototype,"defaultSlottedNodes",void 0);class Du{}Ie(Du,ul),Ie(Tu,$e,Du);class Ru extends _t{}class Ou extends(rc(Ru)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Eu extends Ou{constructor(){super(...arguments),this.hideStep=!1,this.step=1,this.isUserInput=!1}maxChanged(t,e){var i;this.max=Math.max(e,null!==(i=this.min)&&void 0!==i?i:e);const o=Math.min(this.min,this.max);void 0!==this.min&&this.min!==o&&(this.min=o),this.value=this.getValidValue(this.value)}minChanged(t,e){var i;this.min=Math.min(e,null!==(i=this.max)&&void 0!==i?i:e);const o=Math.max(this.min,this.max);void 0!==this.max&&this.max!==o&&(this.max=o),this.value=this.getValidValue(this.value)}get valueAsNumber(){return parseFloat(super.value)}set valueAsNumber(t){this.value=t.toString()}valueChanged(t,e){this.value=this.getValidValue(e),e===this.value&&(this.control&&!this.isUserInput&&(this.control.value=this.value),super.valueChanged(t,this.value),void 0===t||this.isUserInput||(this.$emit("input"),this.$emit("change")),this.isUserInput=!1)}validate(){super.validate(this.control)}getValidValue(t){var e,i;let o=parseFloat(parseFloat(t).toPrecision(12));return isNaN(o)?o="":(o=Math.min(o,null!==(e=this.max)&&void 0!==e?e:o),o=Math.max(o,null!==(i=this.min)&&void 0!==i?i:o).toString()),o}stepUp(){const t=parseFloat(this.value),e=isNaN(t)?this.min>0?this.min:this.max<0?this.max:this.min?0:this.step:t+this.step;this.value=e.toString()}stepDown(){const t=parseFloat(this.value),e=isNaN(t)?this.min>0?this.min:this.max<0?this.max:this.min?0:0-this.step:t-this.step;this.value=e.toString()}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type","number"),this.validate(),this.control.value=this.value,this.autofocus&&g.queueUpdate((()=>{this.focus()}))}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.control.value=this.control.value.replace(/[^0-9\-+e.]/g,""),this.isUserInput=!0,this.value=this.control.value}handleChange(){this.$emit("change")}handleKeyDown(t){switch(t.key){case E:return this.stepUp(),!1;case D:return this.stepDown(),!1}return!0}handleBlur(){this.control.value=this.value}}o([I({attribute:"readonly",mode:"boolean"})],Eu.prototype,"readOnly",void 0),o([I({mode:"boolean"})],Eu.prototype,"autofocus",void 0),o([I({attribute:"hide-step",mode:"boolean"})],Eu.prototype,"hideStep",void 0),o([I],Eu.prototype,"placeholder",void 0),o([I],Eu.prototype,"list",void 0),o([I({converter:F})],Eu.prototype,"maxlength",void 0),o([I({converter:F})],Eu.prototype,"minlength",void 0),o([I({converter:F})],Eu.prototype,"size",void 0),o([I({converter:F})],Eu.prototype,"step",void 0),o([I({converter:F})],Eu.prototype,"max",void 0),o([I({converter:F})],Eu.prototype,"min",void 0),o([y],Eu.prototype,"defaultSlottedNodes",void 0),Ie(Eu,$e,Du);const Au=".root",Lu=(t,e)=>Pe`
    ${Me("inline-block")}

    ${Gd(t,e,Au)}

    ${Wd(t,e,Au)}

    .root {
      display: flex;
      flex-direction: row;
    }

    .control {
      -webkit-appearance: none;
      color: inherit;
      background: transparent;
      border: 0;
      height: calc(100% - 4px);
      margin-top: auto;
      margin-bottom: auto;
      padding: 0 calc(${oo} * 2px + 1px);
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
    }

    .start,
    .end {
      margin: auto;
      fill: currentcolor;
    }

    .start {
      display: flex;
      margin-inline-start: 11px;
    }

    .end {
      display: flex;
      margin-inline-end: 11px;
    }

    .controls {
      opacity: 0;
      position: relative;
      top: -1px;
      z-index: 3;
    }

    :host(:hover:not([disabled])) .controls,
    :host(:focus-within:not([disabled])) .controls {
      opacity: 1;
    }

    .step-up,
    .step-down {
      display: flex;
      padding: 0 8px;
      cursor: pointer;
    }

    .step-up {
      padding-top: 3px;
    }
  `.withBehaviors(Cl("outline",Kd(t,e,Au)),Cl("filled",Xd(t,e,Au)),Ja(Yd(t,e,Au)));class Vu extends Eu{connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}hl([I],Vu.prototype,"appearance",void 0);const Pu=Lu,zu=Vu.compose({baseName:"number-field",baseClass:Eu,styles:Lu,template:(t,e)=>ye`
    <template class="${t=>t.readOnly?"readonly":""}">
        <label
            part="label"
            for="control"
            class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${Ae("defaultSlottedNodes")}></slot>
        </label>
        <div class="root" part="root">
            ${Ce(0,e)}
            <input
                class="control"
                part="control"
                id="control"
                @input="${t=>t.handleTextInput()}"
                @change="${t=>t.handleChange()}"
                @keydown="${(t,e)=>t.handleKeyDown(e.event)}"
                @blur="${(t,e)=>t.handleBlur()}"
                ?autofocus="${t=>t.autofocus}"
                ?disabled="${t=>t.disabled}"
                list="${t=>t.list}"
                maxlength="${t=>t.maxlength}"
                minlength="${t=>t.minlength}"
                placeholder="${t=>t.placeholder}"
                ?readonly="${t=>t.readOnly}"
                ?required="${t=>t.required}"
                size="${t=>t.size}"
                type="text"
                inputmode="numeric"
                min="${t=>t.min}"
                max="${t=>t.max}"
                step="${t=>t.step}"
                aria-atomic="${t=>t.ariaAtomic}"
                aria-busy="${t=>t.ariaBusy}"
                aria-controls="${t=>t.ariaControls}"
                aria-current="${t=>t.ariaCurrent}"
                aria-describedby="${t=>t.ariaDescribedby}"
                aria-details="${t=>t.ariaDetails}"
                aria-disabled="${t=>t.ariaDisabled}"
                aria-errormessage="${t=>t.ariaErrormessage}"
                aria-flowto="${t=>t.ariaFlowto}"
                aria-haspopup="${t=>t.ariaHaspopup}"
                aria-hidden="${t=>t.ariaHidden}"
                aria-invalid="${t=>t.ariaInvalid}"
                aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
                aria-label="${t=>t.ariaLabel}"
                aria-labelledby="${t=>t.ariaLabelledby}"
                aria-live="${t=>t.ariaLive}"
                aria-owns="${t=>t.ariaOwns}"
                aria-relevant="${t=>t.ariaRelevant}"
                aria-roledescription="${t=>t.ariaRoledescription}"
                ${we("control")}
            />
            ${Hl((t=>!t.hideStep&&!t.readOnly&&!t.disabled),ye`
                    <div class="controls" part="controls">
                        <div class="step-up" part="step-up" @click="${t=>t.stepUp()}">
                            <slot name="step-up-glyph">
                                ${e.stepUpGlyph||""}
                            </slot>
                        </div>
                        <div
                            class="step-down"
                            part="step-down"
                            @click="${t=>t.stepDown()}"
                        >
                            <slot name="step-down-glyph">
                                ${e.stepDownGlyph||""}
                            </slot>
                        </div>
                    </div>
                `)}
            ${ke(0,e)}
        </div>
    </template>
`,shadowOptions:{delegatesFocus:!0},stepDownGlyph:'\n    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">\n      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>\n    </svg>\n  ',stepUpGlyph:'\n    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">\n      <path d="M2.15 7.35c.2.2.5.2.7 0L6 4.21l3.15 3.14a.5.5 0 10.7-.7l-3.5-3.5a.5.5 0 00-.7 0l-3.5 3.5a.5.5 0 000 .7z"/>\n    </svg>\n'});class Hu extends _t{constructor(){super(...arguments),this.percentComplete=0}valueChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}minChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}maxChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}connectedCallback(){super.connectedCallback(),this.updatePercentComplete()}updatePercentComplete(){const t="number"==typeof this.min?this.min:0,e="number"==typeof this.max?this.max:100,i="number"==typeof this.value?this.value:0,o=e-t;this.percentComplete=0===o?0:Math.fround((i-t)/o*100)}}o([I({converter:F})],Hu.prototype,"value",void 0),o([I({converter:F})],Hu.prototype,"min",void 0),o([I({converter:F})],Hu.prototype,"max",void 0),o([I({mode:"boolean"})],Hu.prototype,"paused",void 0),o([y],Hu.prototype,"percentComplete",void 0);const Mu=(t,e)=>Pe`
    ${Me("flex")} :host {
      align-items: center;
      height: calc((${so} * 3) * 1px);
    }

    .progress {
      background-color: ${As};
      border-radius: calc(${oo} * 1px);
      width: 100%;
      height: calc(${so} * 1px);
      display: flex;
      align-items: center;
      position: relative;
    }

    .determinate {
      background-color: ${or};
      border-radius: calc(${oo} * 1px);
      height: calc((${so} * 3) * 1px);
      transition: all 0.2s ease-in-out;
      display: flex;
    }

    .indeterminate {
      height: calc((${so} * 3) * 1px);
      border-radius: calc(${oo} * 1px);
      display: flex;
      width: 100%;
      position: relative;
      overflow: hidden;
    }

    .indeterminate-indicator-1 {
      position: absolute;
      opacity: 0;
      height: 100%;
      background-color: ${or};
      border-radius: calc(${oo} * 1px);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
      width: 40%;
      animation: indeterminate-1 2s infinite;
    }

    .indeterminate-indicator-2 {
      position: absolute;
      opacity: 0;
      height: 100%;
      background-color: ${or};
      border-radius: calc(${oo} * 1px);
      animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
      width: 60%;
      animation: indeterminate-2 2s infinite;
    }

    :host(.paused) .indeterminate-indicator-1,
    :host(.paused) .indeterminate-indicator-2 {
      animation: none;
      background-color: ${ds};
      width: 100%;
      opacity: 1;
    }

    :host(.paused) .determinate {
      background-color: ${ds};
    }

    @keyframes indeterminate-1 {
      0% {
        opacity: 1;
        transform: translateX(-100%);
      }
      70% {
        opacity: 1;
        transform: translateX(300%);
      }
      70.01% {
        opacity: 0;
      }
      100% {
        opacity: 0;
        transform: translateX(300%);
      }
    }

    @keyframes indeterminate-2 {
      0% {
        opacity: 0;
        transform: translateX(-150%);
      }
      29.99% {
        opacity: 0;
      }
      30% {
        opacity: 1;
        transform: translateX(-150%);
      }
      100% {
        transform: translateX(166.66%);
        opacity: 1;
      }
    }
  `.withBehaviors(Ja(Pe`
        .indeterminate-indicator-1,
        .indeterminate-indicator-2,
        .determinate,
        .progress {
          background-color: ${Za.ButtonText};
        }
        :host(.paused) .indeterminate-indicator-1,
        :host(.paused) .indeterminate-indicator-2,
        :host(.paused) .determinate {
          background-color: ${Za.GrayText};
        }
      `));class Bu extends Hu{}const Nu=Bu.compose({baseName:"progress",template:(t,e)=>ye`
    <template
        role="progressbar"
        aria-valuenow="${t=>t.value}"
        aria-valuemin="${t=>t.min}"
        aria-valuemax="${t=>t.max}"
        class="${t=>t.paused?"paused":""}"
    >
        ${Hl((t=>"number"==typeof t.value),ye`
                <div class="progress" part="progress" slot="determinate">
                    <div
                        class="determinate"
                        part="determinate"
                        style="width: ${t=>t.percentComplete}%"
                    ></div>
                </div>
            `)}
        ${Hl((t=>"number"!=typeof t.value),ye`
                <div class="progress" part="progress" slot="indeterminate">
                    <slot class="indeterminate" name="indeterminate">
                        ${e.indeterminateIndicator1||""}
                        ${e.indeterminateIndicator2||""}
                    </slot>
                </div>
            `)}
    </template>
`,styles:Mu,indeterminateIndicator1:'\n    <span class="indeterminate-indicator-1" part="indeterminate-indicator-1"></span>\n  ',indeterminateIndicator2:'\n    <span class="indeterminate-indicator-2" part="indeterminate-indicator-2"></span>\n  '}),ju=Mu,Uu=(t,e)=>Pe`
    ${Me("flex")} :host {
      align-items: center;
      height: calc(${il} * 1px);
      width: calc(${il} * 1px);
    }

    .progress {
      height: 100%;
      width: 100%;
    }

    .background {
      fill: none;
      stroke-width: 2px;
    }

    .determinate {
      stroke: ${or};
      fill: none;
      stroke-width: 2px;
      stroke-linecap: round;
      transform-origin: 50% 50%;
      transform: rotate(-90deg);
      transition: all 0.2s ease-in-out;
    }

    .indeterminate-indicator-1 {
      stroke: ${or};
      fill: none;
      stroke-width: 2px;
      stroke-linecap: round;
      transform-origin: 50% 50%;
      transform: rotate(-90deg);
      transition: all 0.2s ease-in-out;
      animation: spin-infinite 2s linear infinite;
    }

    :host(.paused) .indeterminate-indicator-1 {
      animation: none;
      stroke: ${ds};
    }

    :host(.paused) .determinate {
      stroke: ${ds};
    }

    @keyframes spin-infinite {
      0% {
        stroke-dasharray: 0.01px 43.97px;
        transform: rotate(0deg);
      }
      50% {
        stroke-dasharray: 21.99px 21.99px;
        transform: rotate(450deg);
      }
      100% {
        stroke-dasharray: 0.01px 43.97px;
        transform: rotate(1080deg);
      }
    }
  `.withBehaviors(Ja(Pe`
        .background {
          stroke: ${Za.Field};
        }
        .determinate,
        .indeterminate-indicator-1 {
          stroke: ${Za.ButtonText};
        }
        :host(.paused) .determinate,
        :host(.paused) .indeterminate-indicator-1 {
          stroke: ${Za.GrayText};
        }
      `));class _u extends Hu{}const qu=_u.compose({baseName:"progress-ring",template:(t,e)=>ye`
    <template
        role="progressbar"
        aria-valuenow="${t=>t.value}"
        aria-valuemin="${t=>t.min}"
        aria-valuemax="${t=>t.max}"
        class="${t=>t.paused?"paused":""}"
    >
        ${Hl((t=>"number"==typeof t.value),ye`
                <svg
                    class="progress"
                    part="progress"
                    viewBox="0 0 16 16"
                    slot="determinate"
                >
                    <circle
                        class="background"
                        part="background"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                    <circle
                        class="determinate"
                        part="determinate"
                        style="stroke-dasharray: ${t=>44*t.percentComplete/100}px ${44}px"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                </svg>
            `)}
        ${Hl((t=>"number"!=typeof t.value),ye`
                <slot name="indeterminate" slot="indeterminate">
                    ${e.indeterminateIndicator||""}
                </slot>
            `)}
    </template>
`,styles:Uu,indeterminateIndicator:'\n    <svg class="progress" part="progress" viewBox="0 0 16 16">\n        <circle\n            class="background"\n            part="background"\n            cx="8px"\n            cy="8px"\n            r="7px"\n        ></circle>\n        <circle\n            class="indeterminate-indicator-1"\n            part="indeterminate-indicator-1"\n            cx="8px"\n            cy="8px"\n            r="7px"\n        ></circle>\n    </svg>\n  '}),Gu=Uu;class Wu extends _t{}class Ku extends(sc(Wu)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Xu extends Ku{constructor(){super(),this.initialValue="on",this.keypressHandler=t=>{if(t.key!==z)return!0;this.checked||this.readOnly||(this.checked=!0)},this.proxy.setAttribute("type","radio")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}defaultCheckedChanged(){var t;this.$fastController.isConnected&&!this.dirtyChecked&&(this.isInsideRadioGroup()||(this.checked=null!==(t=this.defaultChecked)&&void 0!==t&&t,this.dirtyChecked=!1))}connectedCallback(){var t,e;super.connectedCallback(),this.validate(),"radiogroup"!==(null===(t=this.parentElement)||void 0===t?void 0:t.getAttribute("role"))&&null===this.getAttribute("tabindex")&&(this.disabled||this.setAttribute("tabindex","0")),this.checkedAttribute&&(this.dirtyChecked||this.isInsideRadioGroup()||(this.checked=null!==(e=this.defaultChecked)&&void 0!==e&&e,this.dirtyChecked=!1))}isInsideRadioGroup(){return null!==this.closest("[role=radiogroup]")}clickHandler(t){this.disabled||this.readOnly||this.checked||(this.checked=!0)}}o([I({attribute:"readonly",mode:"boolean"})],Xu.prototype,"readOnly",void 0),o([y],Xu.prototype,"name",void 0),o([y],Xu.prototype,"defaultSlottedNodes",void 0);const Yu=(t,e)=>Pe`
    ${Me("inline-flex")} :host {
      --input-size: calc((${il} / 2) + ${oo});
      align-items: center;
      outline: none;
      ${""} user-select: none;
      position: relative;
      flex-direction: row;
      transition: all 0.2s ease-in-out;
    }

    .control {
      position: relative;
      width: calc(var(--input-size) * 1px);
      height: calc(var(--input-size) * 1px);
      box-sizing: border-box;
      border-radius: 50%;
      border: calc(${so} * 1px) solid ${As};
      background: ${Ar};
      cursor: pointer;
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      ${za}
      color: ${rs};
      ${""} padding-inline-start: calc(${oo} * 2px + 2px);
      margin-inline-end: calc(${oo} * 2px + 2px);
      cursor: pointer;
    }

    .control,
    slot[name='checked-indicator'] {
      flex-shrink: 0;
    }

    slot[name='checked-indicator'] {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      fill: ${lr};
      opacity: 0;
      pointer-events: none;
    }

    :host(:not(.disabled):hover) .control {
      background: ${Lr};
      border-color: ${Ls};
    }

    :host(:not(.disabled):active) .control {
      background: ${Vr};
      border-color: ${Vs};
    }

    :host(:not(.disabled):active) slot[name='checked-indicator'] {
      opacity: 1;
    }

    :host(:${Xa}) .control {
      ${el}
      background: ${Pr};
    }

    :host(.checked) .control {
      background: ${or};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):hover) .control {
      background: ${nr};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):active) .control {
      background: ${rr};
      border-color: transparent;
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.readonly) .control,
    :host(.disabled) .control {
      cursor: ${hc};
    }

    :host(.checked) slot[name='checked-indicator'] {
      opacity: 1;
    }

    :host(.disabled) {
      opacity: ${Zi};
    }
  `.withBehaviors(Ja(Pe`
        .control {
          background: ${Za.Field};
          border-color: ${Za.FieldText};
        }
        :host(:not(.disabled):hover) .control,
        :host(:not(.disabled):active) .control {
          border-color: ${Za.Highlight};
        }
        :host(:${Xa}) .control {
          forced-color-adjust: none;
          background: ${Za.Field};
          outline-color: ${Za.FieldText};
        }
        :host(.checked:not(.disabled):hover) .control,
        :host(.checked:not(.disabled):active) .control {
          border-color: ${Za.Highlight};
          background: ${Za.Highlight};
        }
        :host(.checked) slot[name='checked-indicator'] {
          fill: ${Za.Highlight};
        }
        :host(.checked:hover) .control slot[name='checked-indicator'] {
          fill: ${Za.HighlightText};
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled) .label {
          color: ${Za.GrayText};
        }
        :host(.disabled) .control,
        :host(.checked.disabled) .control {
          background: ${Za.Field};
          border-color: ${Za.GrayText};
        }
        :host(.disabled) slot[name='checked-indicator'],
        :host(.checked.disabled) slot[name='checked-indicator'] {
          fill: ${Za.GrayText};
        }
      `)),Qu=Xu.compose({baseName:"radio",template:(t,e)=>ye`
    <template
        role="radio"
        class="${t=>t.checked?"checked":""} ${t=>t.readOnly?"readonly":""}"
        aria-checked="${t=>t.checked}"
        aria-required="${t=>t.required}"
        aria-disabled="${t=>t.disabled}"
        aria-readonly="${t=>t.readOnly}"
        @keypress="${(t,e)=>t.keypressHandler(e.event)}"
        @click="${(t,e)=>t.clickHandler(e.event)}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${e.checkedIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${Ae("defaultSlottedNodes")}></slot>
        </label>
    </template>
`,styles:Yu,checkedIndicator:'\n    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">\n      <circle cx="8" cy="8" r="4"/>\n    </svg>\n  '}),Ju=Yu;class Zu extends _t{constructor(){super(...arguments),this.orientation=Bh,this.radioChangeHandler=t=>{const e=t.target;e.checked&&(this.slottedRadioButtons.forEach((t=>{t!==e&&(t.checked=!1,this.isInsideFoundationToolbar||t.setAttribute("tabindex","-1"))})),this.selectedRadio=e,this.value=e.value,e.setAttribute("tabindex","0"),this.focusedRadio=e),t.stopPropagation()},this.moveToRadioByIndex=(t,e)=>{const i=t[e];this.isInsideToolbar||(i.setAttribute("tabindex","0"),i.readOnly?this.slottedRadioButtons.forEach((t=>{t!==i&&t.setAttribute("tabindex","-1")})):(i.checked=!0,this.selectedRadio=i)),this.focusedRadio=i,i.focus()},this.moveRightOffGroup=()=>{var t;null===(t=this.nextElementSibling)||void 0===t||t.focus()},this.moveLeftOffGroup=()=>{var t;null===(t=this.previousElementSibling)||void 0===t||t.focus()},this.focusOutHandler=t=>{const e=this.slottedRadioButtons,i=t.target,o=null!==i?e.indexOf(i):0,n=this.focusedRadio?e.indexOf(this.focusedRadio):-1;return(0===n&&o===n||n===e.length-1&&n===o)&&(this.selectedRadio?(this.focusedRadio=this.selectedRadio,this.isInsideFoundationToolbar||(this.selectedRadio.setAttribute("tabindex","0"),e.forEach((t=>{t!==this.selectedRadio&&t.setAttribute("tabindex","-1")})))):(this.focusedRadio=e[0],this.focusedRadio.setAttribute("tabindex","0"),e.forEach((t=>{t!==this.focusedRadio&&t.setAttribute("tabindex","-1")})))),!0},this.clickHandler=t=>{const e=t.target;if(e){const t=this.slottedRadioButtons;e.checked||0===t.indexOf(e)?(e.setAttribute("tabindex","0"),this.selectedRadio=e):(e.setAttribute("tabindex","-1"),this.selectedRadio=null),this.focusedRadio=e}t.preventDefault()},this.shouldMoveOffGroupToTheRight=(t,e,i)=>t===e.length&&this.isInsideToolbar&&i===O,this.shouldMoveOffGroupToTheLeft=(t,e)=>(this.focusedRadio?t.indexOf(this.focusedRadio)-1:0)<0&&this.isInsideToolbar&&e===R,this.checkFocusedRadio=()=>{null===this.focusedRadio||this.focusedRadio.readOnly||this.focusedRadio.checked||(this.focusedRadio.checked=!0,this.focusedRadio.setAttribute("tabindex","0"),this.focusedRadio.focus(),this.selectedRadio=this.focusedRadio)},this.moveRight=t=>{const e=this.slottedRadioButtons;let i=0;if(i=this.focusedRadio?e.indexOf(this.focusedRadio)+1:1,this.shouldMoveOffGroupToTheRight(i,e,t.key))this.moveRightOffGroup();else for(i===e.length&&(i=0);i<e.length&&e.length>1;){if(!e[i].disabled){this.moveToRadioByIndex(e,i);break}if(this.focusedRadio&&i===e.indexOf(this.focusedRadio))break;if(i+1>=e.length){if(this.isInsideToolbar)break;i=0}else i+=1}},this.moveLeft=t=>{const e=this.slottedRadioButtons;let i=0;if(i=this.focusedRadio?e.indexOf(this.focusedRadio)-1:0,i=i<0?e.length-1:i,this.shouldMoveOffGroupToTheLeft(e,t.key))this.moveLeftOffGroup();else for(;i>=0&&e.length>1;){if(!e[i].disabled){this.moveToRadioByIndex(e,i);break}if(this.focusedRadio&&i===e.indexOf(this.focusedRadio))break;i-1<0?i=e.length-1:i-=1}},this.keydownHandler=t=>{const e=t.key;if(e in M&&this.isInsideFoundationToolbar)return!0;switch(e){case A:this.checkFocusedRadio();break;case O:case D:this.direction===ni.ltr?this.moveRight(t):this.moveLeft(t);break;case R:case E:this.direction===ni.ltr?this.moveLeft(t):this.moveRight(t);break;default:return!0}}}readOnlyChanged(){void 0!==this.slottedRadioButtons&&this.slottedRadioButtons.forEach((t=>{this.readOnly?t.readOnly=!0:t.readOnly=!1}))}disabledChanged(){void 0!==this.slottedRadioButtons&&this.slottedRadioButtons.forEach((t=>{this.disabled?t.disabled=!0:t.disabled=!1}))}nameChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach((t=>{t.setAttribute("name",this.name)}))}valueChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach((t=>{t.value===this.value&&(t.checked=!0,this.selectedRadio=t)})),this.$emit("change")}slottedRadioButtonsChanged(t,e){this.slottedRadioButtons&&this.slottedRadioButtons.length>0&&this.setupRadioButtons()}get parentToolbar(){return this.closest('[role="toolbar"]')}get isInsideToolbar(){var t;return null!==(t=this.parentToolbar)&&void 0!==t&&t}get isInsideFoundationToolbar(){var t;return!!(null===(t=this.parentToolbar)||void 0===t?void 0:t.$fastController)}connectedCallback(){super.connectedCallback(),this.direction=Pl(this),this.setupRadioButtons()}disconnectedCallback(){this.slottedRadioButtons.forEach((t=>{t.removeEventListener("change",this.radioChangeHandler)}))}setupRadioButtons(){const t=this.slottedRadioButtons.filter((t=>t.hasAttribute("checked"))),e=t?t.length:0;e>1&&(t[e-1].checked=!0);let i=!1;if(this.slottedRadioButtons.forEach((t=>{void 0!==this.name&&t.setAttribute("name",this.name),this.disabled&&(t.disabled=!0),this.readOnly&&(t.readOnly=!0),this.value&&this.value===t.value?(this.selectedRadio=t,this.focusedRadio=t,t.checked=!0,t.setAttribute("tabindex","0"),i=!0):(this.isInsideFoundationToolbar||t.setAttribute("tabindex","-1"),t.checked=!1),t.addEventListener("change",this.radioChangeHandler)})),void 0===this.value&&this.slottedRadioButtons.length>0){const t=this.slottedRadioButtons.filter((t=>t.hasAttribute("checked"))),e=null!==t?t.length:0;if(e>0&&!i){const i=t[e-1];i.checked=!0,this.focusedRadio=i,i.setAttribute("tabindex","0")}else this.slottedRadioButtons[0].setAttribute("tabindex","0"),this.focusedRadio=this.slottedRadioButtons[0]}}}o([I({attribute:"readonly",mode:"boolean"})],Zu.prototype,"readOnly",void 0),o([I({attribute:"disabled",mode:"boolean"})],Zu.prototype,"disabled",void 0),o([I],Zu.prototype,"name",void 0),o([I],Zu.prototype,"value",void 0),o([I],Zu.prototype,"orientation",void 0),o([y],Zu.prototype,"childItems",void 0),o([y],Zu.prototype,"slottedRadioButtons",void 0);const tp=(t,e)=>Pe`
  ${Me("flex")} :host {
    align-items: flex-start;
    flex-direction: column;
  }

  .positioning-region {
    display: flex;
    flex-wrap: wrap;
  }

  :host([orientation='vertical']) .positioning-region {
    flex-direction: column;
  }

  :host([orientation='horizontal']) .positioning-region {
    flex-direction: row;
  }
`,ep=Zu.compose({baseName:"radio-group",template:(t,e)=>ye`
    <template
        role="radiogroup"
        aria-disabled="${t=>t.disabled}"
        aria-readonly="${t=>t.readOnly}"
        @click="${(t,e)=>t.clickHandler(e.event)}"
        @keydown="${(t,e)=>t.keydownHandler(e.event)}"
        @focusout="${(t,e)=>t.focusOutHandler(e.event)}"
    >
        <slot name="label"></slot>
        <div
            class="positioning-region ${t=>t.orientation===Bh?"horizontal":"vertical"}"
            part="positioning-region"
        >
            <slot
                ${Ae({property:"slottedRadioButtons",filter:Re("[role=radio]")})}
            ></slot>
        </div>
    </template>
`,styles:tp}),ip=tp;class op extends _t{}class np extends(rc(op)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class rp extends np{readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.validate(),this.autofocus&&g.queueUpdate((()=>{this.focus()}))}validate(){super.validate(this.control)}handleTextInput(){this.value=this.control.value}handleClearInput(){this.value="",this.control.focus(),this.handleChange()}handleChange(){this.$emit("change")}}o([I({attribute:"readonly",mode:"boolean"})],rp.prototype,"readOnly",void 0),o([I({mode:"boolean"})],rp.prototype,"autofocus",void 0),o([I],rp.prototype,"placeholder",void 0),o([I],rp.prototype,"list",void 0),o([I({converter:F})],rp.prototype,"maxlength",void 0),o([I({converter:F})],rp.prototype,"minlength",void 0),o([I],rp.prototype,"pattern",void 0),o([I({converter:F})],rp.prototype,"size",void 0),o([I({mode:"boolean"})],rp.prototype,"spellcheck",void 0),o([y],rp.prototype,"defaultSlottedNodes",void 0);class sp{}function ap(t,e,i){return t.nodeType!==Node.TEXT_NODE||"string"==typeof t.nodeValue&&!!t.nodeValue.trim().length}Ie(sp,ul),Ie(rp,$e,sp);const lp=(t,e)=>ye`
  <template
    class="
            ${t=>t.readOnly?"readonly":""}
        "
  >
    <label
      part="label"
      for="control"
      class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
    >
      <slot ${Ae({property:"defaultSlottedNodes",filter:ap})}></slot>
    </label>
    <div class="root" part="root" ${we("root")}>
      ${Ce(0,e)}
      <div class="input-wrapper" part="input-wrapper">
        <input
          class="control"
          part="control"
          id="control"
          @input="${t=>t.handleTextInput()}"
          @change="${t=>t.handleChange()}"
          ?autofocus="${t=>t.autofocus}"
          ?disabled="${t=>t.disabled}"
          list="${t=>t.list}"
          maxlength="${t=>t.maxlength}"
          minlength="${t=>t.minlength}"
          pattern="${t=>t.pattern}"
          placeholder="${t=>t.placeholder}"
          ?readonly="${t=>t.readOnly}"
          ?required="${t=>t.required}"
          size="${t=>t.size}"
          ?spellcheck="${t=>t.spellcheck}"
          :value="${t=>t.value}"
          type="search"
          aria-atomic="${t=>t.ariaAtomic}"
          aria-busy="${t=>t.ariaBusy}"
          aria-controls="${t=>t.ariaControls}"
          aria-current="${t=>t.ariaCurrent}"
          aria-describedby="${t=>t.ariaDescribedby}"
          aria-details="${t=>t.ariaDetails}"
          aria-disabled="${t=>t.ariaDisabled}"
          aria-errormessage="${t=>t.ariaErrormessage}"
          aria-flowto="${t=>t.ariaFlowto}"
          aria-haspopup="${t=>t.ariaHaspopup}"
          aria-hidden="${t=>t.ariaHidden}"
          aria-invalid="${t=>t.ariaInvalid}"
          aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
          aria-label="${t=>t.ariaLabel}"
          aria-labelledby="${t=>t.ariaLabelledby}"
          aria-live="${t=>t.ariaLive}"
          aria-owns="${t=>t.ariaOwns}"
          aria-relevant="${t=>t.ariaRelevant}"
          aria-roledescription="${t=>t.ariaRoledescription}"
          ${we("control")}
        />
        <slot name="clear-button">
          <button
            class="clear-button ${t=>t.value?"":"clear-button__hidden"}"
            part="clear-button"
            tabindex="-1"
            @click=${t=>t.handleClearInput()}
          >
            <slot name="clear-glyph">
              <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m2.09 2.22.06-.07a.5.5 0 0 1 .63-.06l.07.06L6 5.29l3.15-3.14a.5.5 0 1 1 .7.7L6.71 6l3.14 3.15c.18.17.2.44.06.63l-.06.07a.5.5 0 0 1-.63.06l-.07-.06L6 6.71 2.85 9.85a.5.5 0 0 1-.7-.7L5.29 6 2.15 2.85a.5.5 0 0 1-.06-.63l.06-.07-.06.07Z"
                />
              </svg>
            </slot>
          </button>
        </slot>
      </div>
      ${ke(0,e)}
    </div>
  </template>
`,cp=".root",dp=oi.create("clear-button-hover").withDefault((t=>{const e=Kr.getValueFor(t),i=Ir.getValueFor(t);return e.evaluate(t,i.evaluate(t).focus).hover})),hp=oi.create("clear-button-active").withDefault((t=>{const e=Kr.getValueFor(t),i=Ir.getValueFor(t);return e.evaluate(t,i.evaluate(t).focus).active})),up=(t,e)=>Pe`
    ${Me("inline-block")}

    ${Gd(t,e,cp)}

    ${Wd(t,e,cp)}

    .root {
      display: flex;
      flex-direction: row;
    }
    .control {
      -webkit-appearance: none;
      color: inherit;
      background: transparent;
      border: 0;
      height: calc(100% - 4px);
      margin-top: auto;
      margin-bottom: auto;
      padding: 0 calc(${oo} * 2px + 1px);
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
    }
    .clear-button {
      display: inline-flex;
      align-items: center;
      margin: 1px;
      height: calc(100% - 2px);
      opacity: 0;
      background: transparent;
      color: ${rs};
      fill: currentcolor;
      border: none;
      border-radius: calc(${no} * 1px);
      min-width: calc(${il} * 1px);
      ${za}
      outline: none;
      padding: 0 calc((10 + (${oo} * 2 * ${io})) * 1px);
    }
    .clear-button:hover {
      background: ${dp};
    }
    .clear-button:active {
      background: ${hp};
    }
    :host(:hover:not([disabled], [readOnly])) .clear-button,
    :host(:active:not([disabled], [readOnly])) .clear-button,
    :host(:focus-within:not([disabled], [readOnly])) .clear-button {
        opacity: 1;
    }
    :host(:hover:not([disabled], [readOnly])) .clear-button__hidden,
    :host(:active:not([disabled], [readOnly])) .clear-button__hidden,
    :host(:focus-within:not([disabled], [readOnly])) .clear-button__hidden {
        opacity: 0;
    }
    .control::-webkit-search-cancel-button {
      -webkit-appearance: none;
    }
    .input-wrapper {
      display: flex;
      position: relative;
      width: 100%;
    }
    .start,
    .end {
      display: flex;
      margin: 1px;
      align-items: center;
    }
    .start {
      display: flex;
      margin-inline-start: 11px;
    }
    ::slotted([slot="end"]) {
      height: 100%
    }
    .clear-button__hidden {
      opacity: 0;
    }
    .end {
        margin-inline-end: 11px;
    }
    ::slotted(${t.tagFor(cc)}) {
      margin-inline-end: 1px;
    }
  `.withBehaviors(Cl("outline",Kd(t,e,cp)),Cl("filled",Xd(t,e,cp)),Ja(Yd(t,e,cp)));class pp extends rp{constructor(){super(...arguments),this.appearance="outline"}}hl([I],pp.prototype,"appearance",void 0);const fp=pp.compose({baseName:"search",baseClass:rp,template:lp,styles:up,start:'<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg%22%3E"><path d="M8.5 3a5.5 5.5 0 0 1 4.23 9.02l4.12 4.13a.5.5 0 0 1-.63.76l-.07-.06-4.13-4.12A5.5 5.5 0 1 1 8.5 3Zm0 1a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z"/></svg>',shadowOptions:{delegatesFocus:!0}}),gp=up;class mp extends ru{}class vp extends(rc(mp)){constructor(){super(...arguments),this.proxy=document.createElement("select")}}class bp extends vp{constructor(){super(...arguments),this.open=!1,this.forcedPosition=!1,this.listboxId=Rd("listbox-"),this.maxHeight=0}openChanged(t,e){if(this.collapsible){if(this.open)return this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),this.indexWhenOpened=this.selectedIndex,void g.queueUpdate((()=>this.focus()));this.ariaControls="",this.ariaExpanded="false"}}get collapsible(){return!(this.multiple||"number"==typeof this.size)}get value(){return b.track(this,"value"),this._value}set value(t){var e,i,o,n,r,s,a;const l=`${this._value}`;if(null===(e=this._options)||void 0===e?void 0:e.length){const e=this._options.findIndex((e=>e.value===t)),l=null!==(o=null===(i=this._options[this.selectedIndex])||void 0===i?void 0:i.value)&&void 0!==o?o:null,c=null!==(r=null===(n=this._options[e])||void 0===n?void 0:n.value)&&void 0!==r?r:null;-1!==e&&l===c||(t="",this.selectedIndex=e),t=null!==(a=null===(s=this.firstSelectedOption)||void 0===s?void 0:s.value)&&void 0!==a?a:t}l!==t&&(this._value=t,super.valueChanged(l,t),b.notify(this,"value"),this.updateDisplayValue())}updateValue(t){var e,i;this.$fastController.isConnected&&(this.value=null!==(i=null===(e=this.firstSelectedOption)||void 0===e?void 0:e.value)&&void 0!==i?i:""),t&&(this.$emit("input"),this.$emit("change",this,{bubbles:!0,composed:void 0}))}selectedIndexChanged(t,e){super.selectedIndexChanged(t,e),this.updateValue()}positionChanged(t,e){this.positionAttribute=e,this.setPositioning()}setPositioning(){const t=this.getBoundingClientRect(),e=window.innerHeight-t.bottom;this.position=this.forcedPosition?this.positionAttribute:t.top>e?Pd:zd,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===Pd?~~t.top:~~e}get displayValue(){var t,e;return b.track(this,"displayValue"),null!==(e=null===(t=this.firstSelectedOption)||void 0===t?void 0:t.text)&&void 0!==e?e:""}disabledChanged(t,e){super.disabledChanged&&super.disabledChanged(t,e),this.ariaDisabled=this.disabled?"true":"false"}formResetCallback(){this.setProxyOptions(),super.setDefaultSelectedOption(),-1===this.selectedIndex&&(this.selectedIndex=0)}clickHandler(t){if(!this.disabled){if(this.open){const e=t.target.closest("option,[role=option]");if(e&&e.disabled)return}return super.clickHandler(t),this.open=this.collapsible&&!this.open,this.open||this.indexWhenOpened===this.selectedIndex||this.updateValue(!0),!0}}focusoutHandler(t){var e;if(super.focusoutHandler(t),!this.open)return!0;const i=t.relatedTarget;this.isSameNode(i)?this.focus():(null===(e=this.options)||void 0===e?void 0:e.includes(i))||(this.open=!1,this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0))}handleChange(t,e){super.handleChange(t,e),"value"===e&&this.updateValue()}slottedOptionsChanged(t,e){this.options.forEach((t=>{b.getNotifier(t).unsubscribe(this,"value")})),super.slottedOptionsChanged(t,e),this.options.forEach((t=>{b.getNotifier(t).subscribe(this,"value")})),this.setProxyOptions(),this.updateValue()}mousedownHandler(t){var e;return t.offsetX>=0&&t.offsetX<=(null===(e=this.listbox)||void 0===e?void 0:e.scrollWidth)?super.mousedownHandler(t):this.collapsible}multipleChanged(t,e){super.multipleChanged(t,e),this.proxy&&(this.proxy.multiple=e)}selectedOptionsChanged(t,e){var i;super.selectedOptionsChanged(t,e),null===(i=this.options)||void 0===i||i.forEach(((t,e)=>{var i;const o=null===(i=this.proxy)||void 0===i?void 0:i.options.item(e);o&&(o.selected=t.selected)}))}setDefaultSelectedOption(){var t;const e=null!==(t=this.options)&&void 0!==t?t:Array.from(this.children).filter(Ld.slottedOptionFilter),i=null==e?void 0:e.findIndex((t=>t.hasAttribute("selected")||t.selected||t.value===this.value));this.selectedIndex=-1===i?0:i}setProxyOptions(){this.proxy instanceof HTMLSelectElement&&this.options&&(this.proxy.options.length=0,this.options.forEach((t=>{const e=t.proxy||(t instanceof HTMLOptionElement?t.cloneNode():null);e&&this.proxy.options.add(e)})))}keydownHandler(t){super.keydownHandler(t);const e=t.key||t.key.charCodeAt(0);switch(e){case z:t.preventDefault(),this.collapsible&&this.typeAheadExpired&&(this.open=!this.open);break;case V:case P:t.preventDefault();break;case A:t.preventDefault(),this.open=!this.open;break;case L:this.collapsible&&this.open&&(t.preventDefault(),this.open=!1);break;case H:return this.collapsible&&this.open&&(t.preventDefault(),this.open=!1),!0}return this.open||this.indexWhenOpened===this.selectedIndex||(this.updateValue(!0),this.indexWhenOpened=this.selectedIndex),!(e===D||e===E)}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.addEventListener("contentchange",this.updateDisplayValue)}disconnectedCallback(){this.removeEventListener("contentchange",this.updateDisplayValue),super.disconnectedCallback()}sizeChanged(t,e){super.sizeChanged(t,e),this.proxy&&(this.proxy.size=e)}updateDisplayValue(){this.collapsible&&b.notify(this,"displayValue")}}o([I({attribute:"open",mode:"boolean"})],bp.prototype,"open",void 0),o([function(t,e,i){return Object.assign({},i,{get:function(){return b.trackVolatile(),i.get.apply(this)}})}],bp.prototype,"collapsible",null),o([y],bp.prototype,"control",void 0),o([I({attribute:"position"})],bp.prototype,"positionAttribute",void 0),o([y],bp.prototype,"position",void 0),o([y],bp.prototype,"maxHeight",void 0);class yp{}o([y],yp.prototype,"ariaControls",void 0),Ie(yp,Vd),Ie(bp,$e,yp);class xp extends bp{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline"),this.listbox&&tr.setValueFor(this.listbox,qn)}}hl([I({mode:"fromView"})],xp.prototype,"appearance",void 0);const wp=xp.compose({baseName:"select",baseClass:bp,template:(t,e)=>ye`
    <template
        class="${t=>[t.collapsible&&"collapsible",t.collapsible&&t.open&&"open",t.disabled&&"disabled",t.collapsible&&t.position].filter(Boolean).join(" ")}"
        aria-activedescendant="${t=>t.ariaActiveDescendant}"
        aria-controls="${t=>t.ariaControls}"
        aria-disabled="${t=>t.ariaDisabled}"
        aria-expanded="${t=>t.ariaExpanded}"
        aria-haspopup="${t=>t.collapsible?"listbox":null}"
        aria-multiselectable="${t=>t.ariaMultiSelectable}"
        ?open="${t=>t.open}"
        role="combobox"
        tabindex="${t=>t.disabled?null:"0"}"
        @click="${(t,e)=>t.clickHandler(e.event)}"
        @focusin="${(t,e)=>t.focusinHandler(e.event)}"
        @focusout="${(t,e)=>t.focusoutHandler(e.event)}"
        @keydown="${(t,e)=>t.keydownHandler(e.event)}"
        @mousedown="${(t,e)=>t.mousedownHandler(e.event)}"
    >
        ${Hl((t=>t.collapsible),ye`
                <div
                    class="control"
                    part="control"
                    ?disabled="${t=>t.disabled}"
                    ${we("control")}
                >
                    ${Ce(0,e)}
                    <slot name="button-container">
                        <div class="selected-value" part="selected-value">
                            <slot name="selected-value">${t=>t.displayValue}</slot>
                        </div>
                        <div aria-hidden="true" class="indicator" part="indicator">
                            <slot name="indicator">
                                ${e.indicator||""}
                            </slot>
                        </div>
                    </slot>
                    ${ke(0,e)}
                </div>
            `)}
        <div
            class="listbox"
            id="${t=>t.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${t=>t.disabled}"
            ?hidden="${t=>!!t.collapsible&&!t.open}"
            ${we("listbox")}
        >
            <slot
                ${Ae({filter:Ld.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`,styles:eh,indicator:'\n    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">\n      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>\n    </svg>\n  '}),$p=eh;class kp extends _t{constructor(){super(...arguments),this.shape="rect"}}o([I],kp.prototype,"fill",void 0),o([I],kp.prototype,"shape",void 0),o([I],kp.prototype,"pattern",void 0),o([I({mode:"boolean"})],kp.prototype,"shimmer",void 0);const Cp=(t,e)=>Pe`
    ${Me("block")} :host {
      --skeleton-fill-default: ${_r};
      overflow: hidden;
      width: 100%;
      position: relative;
      background-color: var(--skeleton-fill, var(--skeleton-fill-default));
      --skeleton-animation-gradient-default: linear-gradient(
        270deg,
        var(--skeleton-fill, var(--skeleton-fill-default)) 0%,
        ${qr} 51%,
        var(--skeleton-fill, var(--skeleton-fill-default)) 100%
      );
      --skeleton-animation-timing-default: ease-in-out;
    }

    :host(.rect) {
      border-radius: calc(${no} * 1px);
    }

    :host(.circle) {
      border-radius: 100%;
      overflow: hidden;
    }

    object {
      position: absolute;
      width: 100%;
      height: auto;
      z-index: 2;
    }

    object img {
      width: 100%;
      height: auto;
    }

    ${Me("block")} span.shimmer {
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: var(--skeleton-animation-gradient, var(--skeleton-animation-gradient-default));
      background-size: 0px 0px / 90% 100%;
      background-repeat: no-repeat;
      background-color: var(--skeleton-animation-fill, ${_r});
      animation: shimmer 2s infinite;
      animation-timing-function: var(--skeleton-animation-timing, var(--skeleton-timing-default));
      animation-direction: normal;
      z-index: 1;
    }

    ::slotted(svg) {
      z-index: 2;
    }

    ::slotted(.pattern) {
      width: 100%;
      height: 100%;
    }

    @keyframes shimmer {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(100%);
      }
    }
  `.withBehaviors(Ja(Pe`
        :host{
          background-color: ${Za.CanvasText};
        }
      `)),Fp=kp.compose({baseName:"skeleton",template:(t,e)=>ye`
    <template
        class="${t=>"circle"===t.shape?"circle":"rect"}"
        pattern="${t=>t.pattern}"
        ?shimmer="${t=>t.shimmer}"
    >
        ${Hl((t=>!0===t.shimmer),ye`
                <span class="shimmer"></span>
            `)}
        <object type="image/svg+xml" data="${t=>t.pattern}" role="presentation">
            <img class="pattern" src="${t=>t.pattern}" />
        </object>
        <slot></slot>
    </template>
`,styles:Cp}),Sp=Cp;function Ip(t,e,i,o){let n=N(0,1,(t-e)/(i-e));return o===ni.rtl&&(n=1-n),n}class Tp extends _t{}class Dp extends(rc(Tp)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Rp extends Dp{constructor(){super(...arguments),this.direction=ni.ltr,this.isDragging=!1,this.trackWidth=0,this.trackMinWidth=0,this.trackHeight=0,this.trackLeft=0,this.trackMinHeight=0,this.valueTextFormatter=()=>null,this.min=0,this.max=10,this.step=1,this.orientation=Bh,this.mode="single-value",this.keypressHandler=t=>{if(!this.readOnly)if(t.key===V)t.preventDefault(),this.value=`${this.min}`;else if(t.key===P)t.preventDefault(),this.value=`${this.max}`;else if(!t.shiftKey)switch(t.key){case O:case E:t.preventDefault(),this.increment();break;case R:case D:t.preventDefault(),this.decrement()}},this.setupTrackConstraints=()=>{const t=this.track.getBoundingClientRect();this.trackWidth=this.track.clientWidth,this.trackMinWidth=this.track.clientLeft,this.trackHeight=t.bottom,this.trackMinHeight=t.top,this.trackLeft=this.getBoundingClientRect().left,0===this.trackWidth&&(this.trackWidth=1)},this.setupListeners=(t=!1)=>{const e=(t?"remove":"add")+"EventListener";this[e]("keydown",this.keypressHandler),this[e]("mousedown",this.handleMouseDown),this.thumb[e]("mousedown",this.handleThumbMouseDown,{passive:!0}),this.thumb[e]("touchstart",this.handleThumbMouseDown,{passive:!0}),t&&(this.handleMouseDown(null),this.handleThumbMouseDown(null))},this.initialValue="",this.handleThumbMouseDown=t=>{if(t){if(this.readOnly||this.disabled||t.defaultPrevented)return;t.target.focus()}const e=(null!==t?"add":"remove")+"EventListener";window[e]("mouseup",this.handleWindowMouseUp),window[e]("mousemove",this.handleMouseMove,{passive:!0}),window[e]("touchmove",this.handleMouseMove,{passive:!0}),window[e]("touchend",this.handleWindowMouseUp),this.isDragging=null!==t},this.handleMouseMove=t=>{if(this.readOnly||this.disabled||t.defaultPrevented)return;const e=window.TouchEvent&&t instanceof TouchEvent?t.touches[0]:t,i=this.orientation===Bh?e.pageX-document.documentElement.scrollLeft-this.trackLeft:e.pageY-document.documentElement.scrollTop;this.value=`${this.calculateNewValue(i)}`},this.calculateNewValue=t=>{const e=Ip(t,this.orientation===Bh?this.trackMinWidth:this.trackMinHeight,this.orientation===Bh?this.trackWidth:this.trackHeight,this.direction),i=(this.max-this.min)*e+this.min;return this.convertToConstrainedValue(i)},this.handleWindowMouseUp=t=>{this.stopDragging()},this.stopDragging=()=>{this.isDragging=!1,this.handleMouseDown(null),this.handleThumbMouseDown(null)},this.handleMouseDown=t=>{const e=(null!==t?"add":"remove")+"EventListener";if((null===t||!this.disabled&&!this.readOnly)&&(window[e]("mouseup",this.handleWindowMouseUp),window.document[e]("mouseleave",this.handleWindowMouseUp),window[e]("mousemove",this.handleMouseMove),t)){t.preventDefault(),this.setupTrackConstraints(),t.target.focus();const e=this.orientation===Bh?t.pageX-document.documentElement.scrollLeft-this.trackLeft:t.pageY-document.documentElement.scrollTop;this.value=`${this.calculateNewValue(e)}`}},this.convertToConstrainedValue=t=>{isNaN(t)&&(t=this.min);let e=t-this.min;const i=e-Math.round(e/this.step)*(this.stepMultiplier*this.step)/this.stepMultiplier;return e=i>=Number(this.step)/2?e-i+Number(this.step):e-i,e+this.min}}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}get valueAsNumber(){return parseFloat(super.value)}set valueAsNumber(t){this.value=t.toString()}valueChanged(t,e){super.valueChanged(t,e),this.$fastController.isConnected&&this.setThumbPositionForOrientation(this.direction),this.$emit("change")}minChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.min=`${this.min}`),this.validate()}maxChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.max=`${this.max}`),this.validate()}stepChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.step=`${this.step}`),this.updateStepMultiplier(),this.validate()}orientationChanged(){this.$fastController.isConnected&&this.setThumbPositionForOrientation(this.direction)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type","range"),this.direction=Pl(this),this.updateStepMultiplier(),this.setupTrackConstraints(),this.setupListeners(),this.setupDefaultValue(),this.setThumbPositionForOrientation(this.direction)}disconnectedCallback(){this.setupListeners(!0)}increment(){const t=this.direction!==ni.rtl&&this.orientation!==Nh?Number(this.value)+Number(this.step):Number(this.value)-Number(this.step),e=this.convertToConstrainedValue(t),i=e<Number(this.max)?`${e}`:`${this.max}`;this.value=i}decrement(){const t=this.direction!==ni.rtl&&this.orientation!==Nh?Number(this.value)-Number(this.step):Number(this.value)+Number(this.step),e=this.convertToConstrainedValue(t),i=e>Number(this.min)?`${e}`:`${this.min}`;this.value=i}setThumbPositionForOrientation(t){const e=100*(1-Ip(Number(this.value),Number(this.min),Number(this.max),t));this.orientation===Bh?this.position=this.isDragging?`right: ${e}%; transition: none;`:`right: ${e}%; transition: all 0.2s ease;`:this.position=this.isDragging?`bottom: ${e}%; transition: none;`:`bottom: ${e}%; transition: all 0.2s ease;`}updateStepMultiplier(){const t=this.step+"",e=this.step%1?t.length-t.indexOf(".")-1:0;this.stepMultiplier=Math.pow(10,e)}get midpoint(){return`${this.convertToConstrainedValue((this.max+this.min)/2)}`}setupDefaultValue(){if("string"==typeof this.value)if(0===this.value.length)this.initialValue=this.midpoint;else{const t=parseFloat(this.value);!Number.isNaN(t)&&(t<this.min||t>this.max)&&(this.value=this.midpoint)}}}o([I({attribute:"readonly",mode:"boolean"})],Rp.prototype,"readOnly",void 0),o([y],Rp.prototype,"direction",void 0),o([y],Rp.prototype,"isDragging",void 0),o([y],Rp.prototype,"position",void 0),o([y],Rp.prototype,"trackWidth",void 0),o([y],Rp.prototype,"trackMinWidth",void 0),o([y],Rp.prototype,"trackHeight",void 0),o([y],Rp.prototype,"trackLeft",void 0),o([y],Rp.prototype,"trackMinHeight",void 0),o([y],Rp.prototype,"valueTextFormatter",void 0),o([I({converter:F})],Rp.prototype,"min",void 0),o([I({converter:F})],Rp.prototype,"max",void 0),o([I({converter:F})],Rp.prototype,"step",void 0),o([I],Rp.prototype,"orientation",void 0),o([I],Rp.prototype,"mode",void 0);const Op=(t,e)=>Pe`
    ${Me("inline-grid")} :host {
      --thumb-size: calc((${il} / 2) + ${oo} + (${so} * 2));
      --thumb-translate: calc(var(--thumb-size) * -0.5 + var(--track-width) / 2);
      --track-overhang: calc((${oo} / 2) * -1);
      --track-width: ${oo};
      align-items: center;
      width: 100%;
      user-select: none;
      box-sizing: border-box;
      border-radius: calc(${no} * 1px);
      outline: none;
      cursor: pointer;
    }
    :host(.horizontal) .positioning-region {
      position: relative;
      margin: 0 8px;
      display: grid;
      grid-template-rows: calc(var(--thumb-size) * 1px) 1fr;
    }
    :host(.vertical) .positioning-region {
      position: relative;
      margin: 0 8px;
      display: grid;
      height: 100%;
      grid-template-columns: calc(var(--thumb-size) * 1px) 1fr;
    }
    :host(:${Xa}) .thumb-cursor {
      box-shadow: 0 0 0 2px ${tr}, 0 0 0 4px ${Hs};
    }
    .thumb-container {
      position: absolute;
      height: calc(var(--thumb-size) * 1px);
      width: calc(var(--thumb-size) * 1px);
      transition: all 0.2s ease;
    }
    .thumb-cursor {
      display: flex;
      position: relative;
      border: none;
      width: calc(var(--thumb-size) * 1px);
      height: calc(var(--thumb-size) * 1px);
      background: padding-box linear-gradient(${kr}, ${kr}),
        border-box ${vs};
      border: calc(${so} * 1px) solid transparent;
      border-radius: 50%;
      box-sizing: border-box;
    }
    .thumb-cursor::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 100%;
      margin: 4px;
      background: ${or};
    }
    :host(:not(.disabled)) .thumb-cursor:hover::after {
      background: ${nr};
      margin: 3px;
    }
    :host(:not(.disabled)) .thumb-cursor:active::after {
      background: ${rr};
      margin: 5px;
    }
    :host(:not(.disabled)) .thumb-cursor:hover {
      background: padding-box linear-gradient(${kr}, ${kr}),
        border-box ${bs};
    }
    :host(:not(.disabled)) .thumb-cursor:active {
      background: padding-box linear-gradient(${kr}, ${kr}),
        border-box ${ys};
    }
    .track-start {
      background: ${or};
      position: absolute;
      height: 100%;
      left: 0;
      border-radius: calc(${no} * 1px);
    }
    :host(.horizontal) .thumb-container {
      transform: translateX(calc(var(--thumb-size) * 0.5px)) translateY(calc(var(--thumb-translate) * 1px));
    }
    :host(.vertical) .thumb-container {
      transform: translateX(calc(var(--thumb-translate) * 1px)) translateY(calc(var(--thumb-size) * 0.5px));
    }
    :host(.horizontal) {
      min-width: calc(var(--thumb-size) * 1px);
    }
    :host(.horizontal) .track {
      right: calc(var(--track-overhang) * 1px);
      left: calc(var(--track-overhang) * 1px);
      align-self: start;
      height: calc(var(--track-width) * 1px);
    }
    :host(.vertical) .track {
      top: calc(var(--track-overhang) * 1px);
      bottom: calc(var(--track-overhang) * 1px);
      width: calc(var(--track-width) * 1px);
      height: 100%;
    }
    .track {
      background: ${ts};
      border: 1px solid ${As};
      border-radius: 2px;
      box-sizing: border-box;
      position: absolute;
    }
    :host(.vertical) {
      height: 100%;
      min-height: calc(${oo} * 60px);
      min-width: calc(${oo} * 20px);
    }
    :host(.vertical) .track-start {
      height: auto;
      width: 100%;
      top: 0;
    }
    :host(.disabled),
    :host(.readonly) {
      cursor: ${hc};
    }
    :host(.disabled) {
      opacity: ${Zi};
    }
  `.withBehaviors(Ja(Pe`
        .thumb-cursor {
          forced-color-adjust: none;
          border-color: ${Za.FieldText};
          background: ${Za.FieldText};
        }
        :host(:not(.disabled)) .thumb-cursor:hover,
        :host(:not(.disabled)) .thumb-cursor:active {
          background: ${Za.Highlight};
        }
        .track {
          forced-color-adjust: none;
          background: ${Za.FieldText};
        }
        .thumb-cursor::after,
        :host(:not(.disabled)) .thumb-cursor:hover::after,
        :host(:not(.disabled)) .thumb-cursor:active::after {
          background: ${Za.Field};
        }
        :host(:${Xa}) .thumb-cursor {
          background: ${Za.Highlight};
          border-color: ${Za.Highlight};
          box-shadow: 0 0 0 1px ${Za.Field}, 0 0 0 3px ${Za.FieldText};
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled) .track,
        :host(.disabled) .thumb-cursor {
          forced-color-adjust: none;
          background: ${Za.GrayText};
        }
      `)),Ep=Rp.compose({baseName:"slider",template:(t,e)=>ye`
    <template
        role="slider"
        class="${t=>t.readOnly?"readonly":""}
        ${t=>t.orientation||Bh}"
        tabindex="${t=>t.disabled?null:0}"
        aria-valuetext="${t=>t.valueTextFormatter(t.value)}"
        aria-valuenow="${t=>t.value}"
        aria-valuemin="${t=>t.min}"
        aria-valuemax="${t=>t.max}"
        aria-disabled="${t=>!!t.disabled||void 0}"
        aria-readonly="${t=>!!t.readOnly||void 0}"
        aria-orientation="${t=>t.orientation}"
        class="${t=>t.orientation}"
    >
        <div part="positioning-region" class="positioning-region">
            <div ${we("track")} part="track-container" class="track">
                <slot name="track"></slot>
                <div part="track-start" class="track-start" style="${t=>t.position}">
                    <slot name="track-start"></slot>
                </div>
            </div>
            <slot></slot>
            <div
                ${we("thumb")}
                part="thumb-container"
                class="thumb-container"
                style="${t=>t.position}"
            >
                <slot name="thumb">${e.thumb||""}</slot>
            </div>
        </div>
    </template>
`,styles:Op,thumb:'\n    <div class="thumb-cursor"></div>\n  '}),Ap=Op,Lp={min:0,max:0,direction:ni.ltr,orientation:Bh,disabled:!1};class Vp extends _t{constructor(){super(...arguments),this.hideMark=!1,this.sliderDirection=ni.ltr,this.getSliderConfiguration=()=>{if(this.isSliderConfig(this.parentNode)){const t=this.parentNode,{min:e,max:i,direction:o,orientation:n,disabled:r}=t;void 0!==r&&(this.disabled=r),this.sliderDirection=o||ni.ltr,this.sliderOrientation=n||Bh,this.sliderMaxPosition=i,this.sliderMinPosition=e}else this.sliderDirection=Lp.direction||ni.ltr,this.sliderOrientation=Lp.orientation||Bh,this.sliderMaxPosition=Lp.max,this.sliderMinPosition=Lp.min},this.positionAsStyle=()=>{const t=this.sliderDirection?this.sliderDirection:ni.ltr,e=Ip(Number(this.position),Number(this.sliderMinPosition),Number(this.sliderMaxPosition));let i=Math.round(100*(1-e)),o=Math.round(100*e);return Number.isNaN(o)&&Number.isNaN(i)&&(i=50,o=50),this.sliderOrientation===Bh?t===ni.rtl?`right: ${o}%; left: ${i}%;`:`left: ${o}%; right: ${i}%;`:`top: ${o}%; bottom: ${i}%;`}}positionChanged(){this.positionStyle=this.positionAsStyle()}sliderOrientationChanged(){}connectedCallback(){super.connectedCallback(),this.getSliderConfiguration(),this.positionStyle=this.positionAsStyle(),this.notifier=b.getNotifier(this.parentNode),this.notifier.subscribe(this,"orientation"),this.notifier.subscribe(this,"direction"),this.notifier.subscribe(this,"max"),this.notifier.subscribe(this,"min")}disconnectedCallback(){super.disconnectedCallback(),this.notifier.unsubscribe(this,"orientation"),this.notifier.unsubscribe(this,"direction"),this.notifier.unsubscribe(this,"max"),this.notifier.unsubscribe(this,"min")}handleChange(t,e){switch(e){case"direction":this.sliderDirection=t.direction;break;case"orientation":this.sliderOrientation=t.orientation;break;case"max":this.sliderMaxPosition=t.max;break;case"min":this.sliderMinPosition=t.min}this.positionStyle=this.positionAsStyle()}isSliderConfig(t){return void 0!==t.max&&void 0!==t.min}}o([y],Vp.prototype,"positionStyle",void 0),o([I],Vp.prototype,"position",void 0),o([I({attribute:"hide-mark",mode:"boolean"})],Vp.prototype,"hideMark",void 0),o([I({attribute:"disabled",mode:"boolean"})],Vp.prototype,"disabled",void 0),o([y],Vp.prototype,"sliderOrientation",void 0),o([y],Vp.prototype,"sliderMinPosition",void 0),o([y],Vp.prototype,"sliderMaxPosition",void 0),o([y],Vp.prototype,"sliderDirection",void 0);const Pp=(t,e)=>Pe`
    ${Me("block")} :host {
      ${Ha}
    }
    .root {
      position: absolute;
      display: grid;
    }
    :host(.horizontal) {
      align-self: start;
      grid-row: 2;
      margin-top: -4px;
    }
    :host(.vertical) {
      justify-self: start;
      grid-column: 2;
      margin-left: 2px;
    }
    .container {
      display: grid;
      justify-self: center;
    }
    :host(.horizontal) .container {
      grid-template-rows: auto auto;
      grid-template-columns: 0;
    }
    :host(.vertical) .container {
      grid-template-columns: auto auto;
      grid-template-rows: 0;
      min-width: calc(var(--thumb-size) * 1px);
      height: calc(var(--thumb-size) * 1px);
    }
    .label {
      justify-self: center;
      align-self: center;
      white-space: nowrap;
      max-width: 30px;
      margin: 2px 0;
    }
    .mark {
      width: calc(${so} * 1px);
      height: calc(${oo} * 1px);
      background: ${As};
      justify-self: center;
    }
    :host(.vertical) .mark {
      transform: rotate(90deg);
      align-self: center;
    }
    :host(.vertical) .label {
      margin-left: calc((${oo} / 2) * 2px);
      align-self: center;
    }
    :host(.disabled) {
      opacity: ${Zi};
    }
  `.withBehaviors(Ja(Pe`
        .mark {
          forced-color-adjust: none;
          background: ${Za.FieldText};
        }
        :host(.disabled) {
          forced-color-adjust: none;
          opacity: 1;
        }
        :host(.disabled) .label {
          color: ${Za.GrayText};
        }
        :host(.disabled) .mark {
          background: ${Za.GrayText};
        }
      `)),zp=Vp.compose({baseName:"slider-label",template:(t,e)=>ye`
    <template
        aria-disabled="${t=>t.disabled}"
        class="${t=>t.sliderOrientation||Bh}
            ${t=>t.disabled?"disabled":""}"
    >
        <div ${we("root")} part="root" class="root" style="${t=>t.positionStyle}">
            <div class="container">
                ${Hl((t=>!t.hideMark),ye`
                        <div class="mark"></div>
                    `)}
                <div class="label">
                    <slot></slot>
                </div>
            </div>
        </div>
    </template>
`,styles:Pp}),Hp=Pp;class Mp extends _t{}class Bp extends(sc(Mp)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Np extends Bp{constructor(){super(),this.initialValue="on",this.keypressHandler=t=>{if(!this.readOnly)switch(t.key){case A:case z:this.checked=!this.checked}},this.clickHandler=t=>{this.disabled||this.readOnly||(this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly),this.readOnly?this.classList.add("readonly"):this.classList.remove("readonly")}checkedChanged(t,e){super.checkedChanged(t,e),this.checked?this.classList.add("checked"):this.classList.remove("checked")}}o([I({attribute:"readonly",mode:"boolean"})],Np.prototype,"readOnly",void 0),o([y],Np.prototype,"defaultSlottedNodes",void 0);const jp=(t,e)=>Pe`
    :host([hidden]) {
      display: none;
    }

    ${Me("inline-flex")} :host {
      align-items: center;
      outline: none;
      font-family: ${lo};
      ${""} user-select: none;
    }

    :host(.disabled) {
      opacity: ${Zi};
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.disabled) .switch,
    :host(.readonly) .switch,
    :host(.disabled) .status-message,
    :host(.readonly) .status-message {
      cursor: ${hc};
    }

    .switch {
      position: relative;
      box-sizing: border-box;
      width: calc(((${il} / 2) + ${oo}) * 2px);
      height: calc(((${il} / 2) + ${oo}) * 1px);
      background: ${Ar};
      border-radius: calc(${il} * 1px);
      border: calc(${so} * 1px) solid ${As};
      cursor: pointer;
    }

    :host(:not(.disabled):hover) .switch {
      background: ${Lr};
      border-color: ${Ls};
    }

    :host(:not(.disabled):active) .switch {
      background: ${Vr};
      border-color: ${Vs};
    }

    :host(:${Xa}) .switch {
      ${el}
      background: ${Pr};
    }

    :host(.checked) .switch {
      background: ${or};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):hover) .switch {
      background: ${nr};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):active) .switch {
      background: ${rr};
      border-color: transparent;
    }

    slot[name='switch'] {
      position: absolute;
      display: flex;
      border: 1px solid transparent; /* Spacing included in the transform reference box */
      fill: ${rs};
      transition: all 0.2s ease-in-out;
    }

    .status-message {
      color: ${rs};
      cursor: pointer;
      ${za}
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      color: ${rs};
      ${za}
      margin-inline-end: calc(${oo} * 2px + 2px);
      cursor: pointer;
    }

    ::slotted([slot="checked-message"]),
    ::slotted([slot="unchecked-message"]) {
        margin-inline-start: calc(${oo} * 2px + 2px);
    }

    :host(.checked) .switch {
      background: ${or};
    }

    :host(.checked) .switch slot[name='switch'] {
      fill: ${lr};
      filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.15));
    }

    :host(.checked:not(.disabled)) .switch:hover {
      background: ${nr};
    }

    :host(.checked:not(.disabled)) .switch:hover slot[name='switch'] {
      fill: ${cr};
    }

    :host(.checked:not(.disabled)) .switch:active {
      background: ${rr};
    }

    :host(.checked:not(.disabled)) .switch:active slot[name='switch'] {
      fill: ${dr};
    }

    .unchecked-message {
      display: block;
    }

    .checked-message {
      display: none;
    }

    :host(.checked) .unchecked-message {
      display: none;
    }

    :host(.checked) .checked-message {
      display: block;
    }
  `.withBehaviors(new Kc(Pe`
        slot[name='switch'] {
          left: 0;
        }

        :host(.checked) slot[name='switch'] {
          left: 100%;
          transform: translateX(-100%);
        }
      `,Pe`
        slot[name='switch'] {
          right: 0;
        }

        :host(.checked) slot[name='switch'] {
          right: 100%;
          transform: translateX(100%);
        }
      `),Ja(Pe`
        :host(:not(.disabled)) .switch slot[name='switch'] {
          forced-color-adjust: none;
          fill: ${Za.FieldText};
        }
        .switch {
          background: ${Za.Field};
          border-color: ${Za.FieldText};
        }
        :host(.checked) .switch {
          background: ${Za.Highlight};
          border-color: ${Za.Highlight};
        }
        :host(:not(.disabled):hover) .switch ,
        :host(:not(.disabled):active) .switch,
        :host(.checked:not(.disabled):hover) .switch {
          background: ${Za.HighlightText};
          border-color: ${Za.Highlight};
        }
        :host(.checked:not(.disabled)) .switch slot[name="switch"] {
          fill: ${Za.HighlightText};
        }
        :host(.checked:not(.disabled):hover) .switch slot[name='switch'] {
          fill: ${Za.Highlight};
        }
        :host(:${Xa}) .switch {
          forced-color-adjust: none;
          background: ${Za.Field}; 
          border-color: ${Za.Highlight};
          outline-color: ${Za.FieldText};
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled) slot[name='switch'] {
          forced-color-adjust: none;
          fill: ${Za.GrayText};
        }
        :host(.disabled) .switch {
          background: ${Za.Field};
          border-color: ${Za.GrayText};
        }
        .status-message,
        .label {
          color: ${Za.FieldText};
        }
      `)),Up=Np.compose({baseName:"switch",template:(t,e)=>ye`
    <template
        role="switch"
        aria-checked="${t=>t.checked}"
        aria-disabled="${t=>t.disabled}"
        aria-readonly="${t=>t.readOnly}"
        tabindex="${t=>t.disabled?null:0}"
        @keypress="${(t,e)=>t.keypressHandler(e.event)}"
        @click="${(t,e)=>t.clickHandler(e.event)}"
        class="${t=>t.checked?"checked":""}"
    >
        <label
            part="label"
            class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${Ae("defaultSlottedNodes")}></slot>
        </label>
        <div part="switch" class="switch">
            <slot name="switch">${e.switch||""}</slot>
        </div>
        <span class="status-message" part="status-message">
            <span class="checked-message" part="checked-message">
                <slot name="checked-message"></slot>
            </span>
            <span class="unchecked-message" part="unchecked-message">
                <slot name="unchecked-message"></slot>
            </span>
        </span>
    </template>
`,styles:jp,switch:'\n    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">\n      <rect x="2" y="2" width="12" height="12" rx="6"/>\n    </svg>\n  '}),_p=jp,qp="horizontal";class Gp extends _t{constructor(){super(...arguments),this.orientation=qp,this.activeindicator=!0,this.showActiveIndicator=!0,this.prevActiveTabIndex=0,this.activeTabIndex=0,this.ticking=!1,this.change=()=>{this.$emit("change",this.activetab)},this.isDisabledElement=t=>"true"===t.getAttribute("aria-disabled"),this.isFocusableElement=t=>!this.isDisabledElement(t),this.setTabs=()=>{const t="gridColumn",e="gridRow",i=this.isHorizontal()?t:e;this.activeTabIndex=this.getActiveIndex(),this.showActiveIndicator=!1,this.tabs.forEach(((o,n)=>{if("tab"===o.slot){const t=this.activeTabIndex===n&&this.isFocusableElement(o);this.activeindicator&&this.isFocusableElement(o)&&(this.showActiveIndicator=!0);const e=this.tabIds[n],i=this.tabpanelIds[n];o.setAttribute("id",e),o.setAttribute("aria-selected",t?"true":"false"),o.setAttribute("aria-controls",i),o.addEventListener("click",this.handleTabClick),o.addEventListener("keydown",this.handleTabKeyDown),o.setAttribute("tabindex",t?"0":"-1"),t&&(this.activetab=o)}o.style[t]="",o.style[e]="",o.style[i]=`${n+1}`,this.isHorizontal()?o.classList.remove("vertical"):o.classList.add("vertical")}))},this.setTabPanels=()=>{this.tabpanels.forEach(((t,e)=>{const i=this.tabIds[e],o=this.tabpanelIds[e];t.setAttribute("id",o),t.setAttribute("aria-labelledby",i),this.activeTabIndex!==e?t.setAttribute("hidden",""):t.removeAttribute("hidden")}))},this.handleTabClick=t=>{const e=t.currentTarget;1===e.nodeType&&this.isFocusableElement(e)&&(this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=this.tabs.indexOf(e),this.setComponent())},this.handleTabKeyDown=t=>{if(this.isHorizontal())switch(t.key){case R:t.preventDefault(),this.adjustBackward(t);break;case O:t.preventDefault(),this.adjustForward(t)}else switch(t.key){case E:t.preventDefault(),this.adjustBackward(t);break;case D:t.preventDefault(),this.adjustForward(t)}switch(t.key){case V:t.preventDefault(),this.adjust(-this.activeTabIndex);break;case P:t.preventDefault(),this.adjust(this.tabs.length-this.activeTabIndex-1)}},this.adjustForward=t=>{const e=this.tabs;let i=0;for(i=this.activetab?e.indexOf(this.activetab)+1:1,i===e.length&&(i=0);i<e.length&&e.length>1;){if(this.isFocusableElement(e[i])){this.moveToTabByIndex(e,i);break}if(this.activetab&&i===e.indexOf(this.activetab))break;i+1>=e.length?i=0:i+=1}},this.adjustBackward=t=>{const e=this.tabs;let i=0;for(i=this.activetab?e.indexOf(this.activetab)-1:0,i=i<0?e.length-1:i;i>=0&&e.length>1;){if(this.isFocusableElement(e[i])){this.moveToTabByIndex(e,i);break}i-1<0?i=e.length-1:i-=1}},this.moveToTabByIndex=(t,e)=>{const i=t[e];this.activetab=i,this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=e,i.focus(),this.setComponent()}}orientationChanged(){this.$fastController.isConnected&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}activeidChanged(t,e){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.prevActiveTabIndex=this.tabs.findIndex((e=>e.id===t)),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabsChanged(){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabpanelsChanged(){this.$fastController.isConnected&&this.tabpanels.length<=this.tabs.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}getActiveIndex(){return void 0!==this.activeid?-1===this.tabIds.indexOf(this.activeid)?0:this.tabIds.indexOf(this.activeid):0}getTabIds(){return this.tabs.map((t=>{var e;return null!==(e=t.getAttribute("id"))&&void 0!==e?e:`tab-${Rd()}`}))}getTabPanelIds(){return this.tabpanels.map((t=>{var e;return null!==(e=t.getAttribute("id"))&&void 0!==e?e:`panel-${Rd()}`}))}setComponent(){this.activeTabIndex!==this.prevActiveTabIndex&&(this.activeid=this.tabIds[this.activeTabIndex],this.focusTab(),this.change())}isHorizontal(){return this.orientation===qp}handleActiveIndicatorPosition(){this.showActiveIndicator&&this.activeindicator&&this.activeTabIndex!==this.prevActiveTabIndex&&(this.ticking?this.ticking=!1:(this.ticking=!0,this.animateActiveIndicator()))}animateActiveIndicator(){this.ticking=!0;const t=this.isHorizontal()?"gridColumn":"gridRow",e=this.isHorizontal()?"translateX":"translateY",i=this.isHorizontal()?"offsetLeft":"offsetTop",o=this.activeIndicatorRef[i];this.activeIndicatorRef.style[t]=`${this.activeTabIndex+1}`;const n=this.activeIndicatorRef[i];this.activeIndicatorRef.style[t]=`${this.prevActiveTabIndex+1}`;const r=n-o;this.activeIndicatorRef.style.transform=`${e}(${r}px)`,this.activeIndicatorRef.classList.add("activeIndicatorTransition"),this.activeIndicatorRef.addEventListener("transitionend",(()=>{this.ticking=!1,this.activeIndicatorRef.style[t]=`${this.activeTabIndex+1}`,this.activeIndicatorRef.style.transform=`${e}(0px)`,this.activeIndicatorRef.classList.remove("activeIndicatorTransition")}))}adjust(t){this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=B(0,this.tabs.length-1,this.activeTabIndex+t),this.setComponent()}focusTab(){this.tabs[this.activeTabIndex].focus()}connectedCallback(){super.connectedCallback(),this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex()}}o([I],Gp.prototype,"orientation",void 0),o([I],Gp.prototype,"activeid",void 0),o([y],Gp.prototype,"tabs",void 0),o([y],Gp.prototype,"tabpanels",void 0),o([I({mode:"boolean"})],Gp.prototype,"activeindicator",void 0),o([y],Gp.prototype,"activeIndicatorRef",void 0),o([y],Gp.prototype,"showActiveIndicator",void 0),Ie(Gp,$e);const Wp=(t,e)=>Pe`
      ${Me("grid")} :host {
        box-sizing: border-box;
        ${za}
        color: ${rs};
        grid-template-columns: auto 1fr auto;
        grid-template-rows: auto 1fr;
      }

      .tablist {
        display: grid;
        grid-template-rows: calc(${il} * 1px); auto;
        grid-template-columns: auto;
        position: relative;
        width: max-content;
        align-self: end;
      }

      .start,
      .end {
        align-self: center;
      }

      .activeIndicator {
        grid-row: 2;
        grid-column: 1;
        width: 20px;
        height: 3px;
        border-radius: calc(${no} * 1px);
        justify-self: center;
        background: ${or};
      }

      .activeIndicatorTransition {
        transition: transform 0.2s ease-in-out;
      }

      .tabpanel {
        grid-row: 2;
        grid-column-start: 1;
        grid-column-end: 4;
        position: relative;
      }

      :host(.vertical) {
        grid-template-rows: auto 1fr auto;
        grid-template-columns: auto 1fr;
      }

      :host(.vertical) .tablist {
        grid-row-start: 2;
        grid-row-end: 2;
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: auto 1fr;
        position: relative;
        width: max-content;
        justify-self: end;
        align-self: flex-start;
        width: 100%;
      }

      :host(.vertical) .tabpanel {
        grid-column: 2;
        grid-row-start: 1;
        grid-row-end: 4;
      }

      :host(.vertical) .end {
        grid-row: 3;
      }

      :host(.vertical) .activeIndicator {
        grid-column: 1;
        grid-row: 1;
        width: 3px;
        height: 20px;
        margin-inline-start: calc(${ao} * 1px);
        border-radius: calc(${no} * 1px);
        align-self: center;
        background: ${or};
      }

      :host(.vertical) .activeIndicatorTransition {
        transition: transform 0.2s linear;
      }
    `.withBehaviors(Ja(Pe`
        .activeIndicator,
        :host(.vertical) .activeIndicator {
          background: ${Za.Highlight};
        }
      `));class Kp extends _t{}o([I({mode:"boolean"})],Kp.prototype,"disabled",void 0);const Xp=(t,e)=>Pe`
      ${Me("inline-flex")} :host {
        box-sizing: border-box;
        ${za}
        height: calc((${il} + (${oo} * 2)) * 1px);
        padding: 0 calc((6 + (${oo} * 2 * ${io})) * 1px);
        color: ${rs};
        border-radius: calc(${no} * 1px);
        border: calc(${so} * 1px) solid transparent;
        align-items: center;
        justify-content: center;
        grid-row: 1 / 3;
        cursor: pointer;
      }

      :host([aria-selected='true']) {
        z-index: 2;
      }

      :host(:hover),
      :host(:active) {
        color: ${rs};
      }

      :host(:${Xa}) {
        ${tl}
      }

      :host(.vertical) {
        justify-content: start;
        grid-column: 1 / 3;
      }

      :host(.vertical[aria-selected='true']) {
        z-index: 2;
      }

      :host(.vertical:hover),
      :host(.vertical:active) {
        color: ${rs};
      }

      :host(.vertical:hover[aria-selected='true']) {
      }
    `.withBehaviors(Ja(Pe`
          :host {
            forced-color-adjust: none;
            border-color: transparent;
            color: ${Za.ButtonText};
            fill: currentcolor;
          }
          :host(:hover),
          :host(.vertical:hover),
          :host([aria-selected='true']:hover) {
            background: transparent;
            color: ${Za.Highlight};
            fill: currentcolor;
          }
          :host([aria-selected='true']) {
            background: transparent;
            color: ${Za.Highlight};
            fill: currentcolor;
          }
          :host(:${Xa}) {
            background: transparent;
            outline-color: ${Za.ButtonText};
          }
        `)),Yp=Kp.compose({baseName:"tab",template:(t,e)=>ye`
    <template slot="tab" role="tab" aria-disabled="${t=>t.disabled}">
        <slot></slot>
    </template>
`,styles:Xp}),Qp=Xp;class Jp extends _t{}const Zp=(t,e)=>Pe`
  ${Me("block")} :host {
    box-sizing: border-box;
    ${za}
    padding: 0 calc((6 + (${oo} * 2 * ${io})) * 1px);
  }
`,tf=Jp.compose({baseName:"tab-panel",template:(t,e)=>ye`
    <template slot="tabpanel" role="tabpanel">
        <slot></slot>
    </template>
`,styles:Zp}),ef=Zp,of=Gp.compose({baseName:"tabs",template:(t,e)=>ye`
    <template class="${t=>t.orientation}">
        ${Ce(0,e)}
        <div class="tablist" part="tablist" role="tablist">
            <slot class="tab" name="tab" part="tab" ${Ae("tabs")}></slot>

            ${Hl((t=>t.showActiveIndicator),ye`
                    <div
                        ${we("activeIndicatorRef")}
                        class="activeIndicator"
                        part="activeIndicator"
                    ></div>
                `)}
        </div>
        ${ke(0,e)}
        <div class="tabpanel">
            <slot name="tabpanel" part="tabpanel" ${Ae("tabpanels")}></slot>
        </div>
    </template>
`,styles:Wp}),nf=Wp;class rf extends _t{}class sf extends(rc(rf)){constructor(){super(...arguments),this.proxy=document.createElement("textarea")}}const af="none";class lf extends sf{constructor(){super(...arguments),this.resize=af,this.cols=20,this.handleTextInput=()=>{this.value=this.control.value}}readOnlyChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.readOnly=this.readOnly)}autofocusChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.autofocus=this.autofocus)}listChanged(){this.proxy instanceof HTMLTextAreaElement&&this.proxy.setAttribute("list",this.list)}maxlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.maxLength=this.maxlength)}minlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.minLength=this.minlength)}spellcheckChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.spellcheck=this.spellcheck)}select(){this.control.select(),this.$emit("select")}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}}o([I({mode:"boolean"})],lf.prototype,"readOnly",void 0),o([I],lf.prototype,"resize",void 0),o([I({mode:"boolean"})],lf.prototype,"autofocus",void 0),o([I({attribute:"form"})],lf.prototype,"formId",void 0),o([I],lf.prototype,"list",void 0),o([I({converter:F})],lf.prototype,"maxlength",void 0),o([I({converter:F})],lf.prototype,"minlength",void 0),o([I],lf.prototype,"name",void 0),o([I],lf.prototype,"placeholder",void 0),o([I({converter:F,mode:"fromView"})],lf.prototype,"cols",void 0),o([I({converter:F,mode:"fromView"})],lf.prototype,"rows",void 0),o([I({mode:"boolean"})],lf.prototype,"spellcheck",void 0),o([y],lf.prototype,"defaultSlottedNodes",void 0),Ie(lf,Du);const cf=".control",df=(t,e)=>Pe`
    ${Me("inline-flex")}

    ${Gd(t,e,cf)}

    ${Wd(t,e,cf)}

    :host {
      flex-direction: column;
      vertical-align: bottom;
    }

    .control {
      height: calc((${il} * 2) * 1px);
      padding: calc(${oo} * 1.5px) calc(${oo} * 2px + 1px);
    }

    :host .control {
      resize: none;
    }

    :host(.resize-both) .control {
      resize: both;
    }

    :host(.resize-horizontal) .control {
      resize: horizontal;
    }

    :host(.resize-vertical) .control {
      resize: vertical;
    }
  `.withBehaviors(Cl("outline",Kd(t,e,cf)),Cl("filled",Xd(t,e,cf)),Ja(Yd(t,e,cf)));class hf extends lf{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}hl([I],hf.prototype,"appearance",void 0);const uf=hf.compose({baseName:"text-area",baseClass:lf,template:(t,e)=>ye`
    <template
        class="
            ${t=>t.readOnly?"readonly":""}
            ${t=>t.resize!==af?`resize-${t.resize}`:""}"
    >
        <label
            part="label"
            for="control"
            class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${Ae("defaultSlottedNodes")}></slot>
        </label>
        <textarea
            part="control"
            class="control"
            id="control"
            ?autofocus="${t=>t.autofocus}"
            cols="${t=>t.cols}"
            ?disabled="${t=>t.disabled}"
            form="${t=>t.form}"
            list="${t=>t.list}"
            maxlength="${t=>t.maxlength}"
            minlength="${t=>t.minlength}"
            name="${t=>t.name}"
            placeholder="${t=>t.placeholder}"
            ?readonly="${t=>t.readOnly}"
            ?required="${t=>t.required}"
            rows="${t=>t.rows}"
            ?spellcheck="${t=>t.spellcheck}"
            :value="${t=>t.value}"
            aria-atomic="${t=>t.ariaAtomic}"
            aria-busy="${t=>t.ariaBusy}"
            aria-controls="${t=>t.ariaControls}"
            aria-current="${t=>t.ariaCurrent}"
            aria-describedby="${t=>t.ariaDescribedby}"
            aria-details="${t=>t.ariaDetails}"
            aria-disabled="${t=>t.ariaDisabled}"
            aria-errormessage="${t=>t.ariaErrormessage}"
            aria-flowto="${t=>t.ariaFlowto}"
            aria-haspopup="${t=>t.ariaHaspopup}"
            aria-hidden="${t=>t.ariaHidden}"
            aria-invalid="${t=>t.ariaInvalid}"
            aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
            aria-label="${t=>t.ariaLabel}"
            aria-labelledby="${t=>t.ariaLabelledby}"
            aria-live="${t=>t.ariaLive}"
            aria-owns="${t=>t.ariaOwns}"
            aria-relevant="${t=>t.ariaRelevant}"
            aria-roledescription="${t=>t.ariaRoledescription}"
            @input="${(t,e)=>t.handleTextInput()}"
            @change="${t=>t.handleChange()}"
            ${we("control")}
        ></textarea>
    </template>
`,styles:df,shadowOptions:{delegatesFocus:!0}}),pf=df,ff=".root",gf=(t,e)=>Pe`
    ${Me("inline-block")}

    ${Gd(t,e,ff)}

    ${Wd(t,e,ff)}

    .root {
      display: flex;
      flex-direction: row;
    }

    .control {
      -webkit-appearance: none;
      color: inherit;
      background: transparent;
      border: 0;
      height: calc(100% - 4px);
      margin-top: auto;
      margin-bottom: auto;
      padding: 0 calc(${oo} * 2px + 1px);
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
    }

    .start,
    .end {
      display: flex;
      margin: auto;
    }

    .start {
      display: flex;
      margin-inline-start: 11px;
    }

    .end {
      display: flex;
      margin-inline-end: 11px;
    }
  `.withBehaviors(Cl("outline",Kd(t,e,ff)),Cl("filled",Xd(t,e,ff)),Ja(Yd(t,e,ff)));class mf extends Tu{appearanceChanged(t,e){t!==e&&(this.classList.add(e),this.classList.remove(t))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}hl([I],mf.prototype,"appearance",void 0);const vf=mf.compose({baseName:"text-field",baseClass:Tu,template:(t,e)=>ye`
    <template
        class="
            ${t=>t.readOnly?"readonly":""}
        "
    >
        <label
            part="label"
            for="control"
            class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot
                ${Ae({property:"defaultSlottedNodes",filter:ap})}
            ></slot>
        </label>
        <div class="root" part="root">
            ${Ce(0,e)}
            <input
                class="control"
                part="control"
                id="control"
                @input="${t=>t.handleTextInput()}"
                @change="${t=>t.handleChange()}"
                ?autofocus="${t=>t.autofocus}"
                ?disabled="${t=>t.disabled}"
                list="${t=>t.list}"
                maxlength="${t=>t.maxlength}"
                minlength="${t=>t.minlength}"
                pattern="${t=>t.pattern}"
                placeholder="${t=>t.placeholder}"
                ?readonly="${t=>t.readOnly}"
                ?required="${t=>t.required}"
                size="${t=>t.size}"
                ?spellcheck="${t=>t.spellcheck}"
                :value="${t=>t.value}"
                type="${t=>t.type}"
                aria-atomic="${t=>t.ariaAtomic}"
                aria-busy="${t=>t.ariaBusy}"
                aria-controls="${t=>t.ariaControls}"
                aria-current="${t=>t.ariaCurrent}"
                aria-describedby="${t=>t.ariaDescribedby}"
                aria-details="${t=>t.ariaDetails}"
                aria-disabled="${t=>t.ariaDisabled}"
                aria-errormessage="${t=>t.ariaErrormessage}"
                aria-flowto="${t=>t.ariaFlowto}"
                aria-haspopup="${t=>t.ariaHaspopup}"
                aria-hidden="${t=>t.ariaHidden}"
                aria-invalid="${t=>t.ariaInvalid}"
                aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
                aria-label="${t=>t.ariaLabel}"
                aria-labelledby="${t=>t.ariaLabelledby}"
                aria-live="${t=>t.ariaLive}"
                aria-owns="${t=>t.ariaOwns}"
                aria-relevant="${t=>t.ariaRelevant}"
                aria-roledescription="${t=>t.ariaRoledescription}"
                ${we("control")}
            />
            ${ke(0,e)}
        </div>
    </template>
`,styles:gf,shadowOptions:{delegatesFocus:!0}}),bf=gf,yf=Object.freeze({[M.ArrowUp]:{[Nh]:-1},[M.ArrowDown]:{[Nh]:1},[M.ArrowLeft]:{[Bh]:{[ni.ltr]:-1,[ni.rtl]:1}},[M.ArrowRight]:{[Bh]:{[ni.ltr]:1,[ni.rtl]:-1}}});class xf extends _t{constructor(){super(...arguments),this._activeIndex=0,this.direction=ni.ltr,this.orientation=Bh}get activeIndex(){return b.track(this,"activeIndex"),this._activeIndex}set activeIndex(t){this.$fastController.isConnected&&(this._activeIndex=N(0,this.focusableElements.length-1,t),b.notify(this,"activeIndex"))}slottedItemsChanged(){this.$fastController.isConnected&&this.reduceFocusableElements()}clickHandler(t){var e;const i=null===(e=this.focusableElements)||void 0===e?void 0:e.indexOf(t.target);return i>-1&&this.activeIndex!==i&&this.setFocusedElement(i),!0}childItemsChanged(t,e){this.$fastController.isConnected&&this.reduceFocusableElements()}connectedCallback(){super.connectedCallback(),this.direction=Pl(this)}focusinHandler(t){const e=t.relatedTarget;e&&!this.contains(e)&&this.setFocusedElement()}getDirectionalIncrementer(t){var e,i,o,n,r;return null!==(r=null!==(o=null===(i=null===(e=yf[t])||void 0===e?void 0:e[this.orientation])||void 0===i?void 0:i[this.direction])&&void 0!==o?o:null===(n=yf[t])||void 0===n?void 0:n[this.orientation])&&void 0!==r?r:0}keydownHandler(t){const e=t.key;if(!(e in M)||t.defaultPrevented||t.shiftKey)return!0;const i=this.getDirectionalIncrementer(e);if(!i)return!t.target.closest("[role=radiogroup]");const o=this.activeIndex+i;return this.focusableElements[o]&&t.preventDefault(),this.setFocusedElement(o),!0}get allSlottedItems(){return[...this.start.assignedElements(),...this.slottedItems,...this.end.assignedElements()]}reduceFocusableElements(){var t;const e=null===(t=this.focusableElements)||void 0===t?void 0:t[this.activeIndex];this.focusableElements=this.allSlottedItems.reduce(xf.reduceFocusableItems,[]);const i=this.focusableElements.indexOf(e);this.activeIndex=Math.max(0,i),this.setFocusableElements()}setFocusedElement(t=this.activeIndex){var e;this.activeIndex=t,this.setFocusableElements(),null===(e=this.focusableElements[this.activeIndex])||void 0===e||e.focus()}static reduceFocusableItems(t,e){var i,o,n,r;const s="radio"===e.getAttribute("role"),a=null===(o=null===(i=e.$fastController)||void 0===i?void 0:i.definition.shadowOptions)||void 0===o?void 0:o.delegatesFocus,l=Array.from(null!==(r=null===(n=e.shadowRoot)||void 0===n?void 0:n.querySelectorAll("*"))&&void 0!==r?r:[]).some((t=>Vh(t)));return e.hasAttribute("disabled")||e.hasAttribute("hidden")||!(Vh(e)||s||a||l)?e.childElementCount?t.concat(Array.from(e.children).reduce(xf.reduceFocusableItems,[])):t:(t.push(e),t)}setFocusableElements(){this.$fastController.isConnected&&this.focusableElements.length>0&&this.focusableElements.forEach(((t,e)=>{t.tabIndex=this.activeIndex===e?0:-1}))}}o([y],xf.prototype,"direction",void 0),o([I],xf.prototype,"orientation",void 0),o([y],xf.prototype,"slottedItems",void 0),o([y],xf.prototype,"slottedLabel",void 0),o([y],xf.prototype,"childItems",void 0);class wf{}o([I({attribute:"aria-labelledby"})],wf.prototype,"ariaLabelledby",void 0),o([I({attribute:"aria-label"})],wf.prototype,"ariaLabel",void 0),Ie(wf,ul),Ie(xf,$e,wf);class $f extends xf{}const kf=$f.compose({baseName:"toolbar",baseClass:xf,template:(t,e)=>ye`
    <template
        aria-label="${t=>t.ariaLabel}"
        aria-labelledby="${t=>t.ariaLabelledby}"
        aria-orientation="${t=>t.orientation}"
        orientation="${t=>t.orientation}"
        role="toolbar"
        @click="${(t,e)=>t.clickHandler(e.event)}"
        @focusin="${(t,e)=>t.focusinHandler(e.event)}"
        @keydown="${(t,e)=>t.keydownHandler(e.event)}"
        ${ch({property:"childItems",attributeFilter:["disabled","hidden"],filter:Re(),subtree:!0})}
    >
        <slot name="label"></slot>
        <div class="positioning-region" part="positioning-region">
            ${Ce(0,e)}
            <slot
                ${Ae({filter:Re(),property:"slottedItems"})}
            ></slot>
            ${ke(0,e)}
        </div>
    </template>
`,styles:(t,e)=>Pe`
    ${Me("inline-flex")} :host {
      --toolbar-item-gap: calc(${oo} * 1px);
      background: ${tr};
      fill: currentcolor;
      padding: var(--toolbar-item-gap);
      box-sizing: border-box;
      align-items: center;
    }

    :host(${Xa}) {
      ${tl}
    }

    .positioning-region {
      align-items: center;
      display: inline-flex;
      flex-flow: row wrap;
      justify-content: flex-start;
      flex-grow: 1;
    }

    :host([orientation='vertical']) .positioning-region {
      flex-direction: column;
      align-items: start;
    }

    ::slotted(:not([slot])) {
      flex: 0 0 auto;
      margin: 0 var(--toolbar-item-gap);
    }

    :host([orientation='vertical']) ::slotted(:not([slot])) {
      margin: var(--toolbar-item-gap) 0;
    }

    :host([orientation='vertical']) {
      display: inline-flex;
      flex-direction: column;
    }

    .start,
    .end {
      display: flex;
      align-items: center;
    }

    .end {
      margin-inline-start: auto;
    }

    .start__hidden,
    .end__hidden {
      display: none;
    }

    ::slotted(svg) {
      ${""}
      width: 16px;
      height: 16px;
    }
  `.withBehaviors(Ja(Pe`
        :host(:${Xa}) {
          outline-color: ${Za.Highlight};
          color: ${Za.ButtonText};
          forced-color-adjust: none;
        }
      `))});class Cf extends _t{constructor(){super(...arguments),this.anchor="",this.delay=300,this.autoUpdateMode="anchor",this.anchorElement=null,this.viewportElement=null,this.verticalPositioningMode="dynamic",this.horizontalPositioningMode="dynamic",this.horizontalInset="false",this.verticalInset="false",this.horizontalScaling="content",this.verticalScaling="content",this.verticalDefaultPosition=void 0,this.horizontalDefaultPosition=void 0,this.tooltipVisible=!1,this.currentDirection=ni.ltr,this.showDelayTimer=null,this.hideDelayTimer=null,this.isAnchorHoveredFocused=!1,this.isRegionHovered=!1,this.handlePositionChange=t=>{this.classList.toggle("top","start"===this.region.verticalPosition),this.classList.toggle("bottom","end"===this.region.verticalPosition),this.classList.toggle("inset-top","insetStart"===this.region.verticalPosition),this.classList.toggle("inset-bottom","insetEnd"===this.region.verticalPosition),this.classList.toggle("center-vertical","center"===this.region.verticalPosition),this.classList.toggle("left","start"===this.region.horizontalPosition),this.classList.toggle("right","end"===this.region.horizontalPosition),this.classList.toggle("inset-left","insetStart"===this.region.horizontalPosition),this.classList.toggle("inset-right","insetEnd"===this.region.horizontalPosition),this.classList.toggle("center-horizontal","center"===this.region.horizontalPosition)},this.handleRegionMouseOver=t=>{this.isRegionHovered=!0},this.handleRegionMouseOut=t=>{this.isRegionHovered=!1,this.startHideDelayTimer()},this.handleAnchorMouseOver=t=>{this.tooltipVisible?this.isAnchorHoveredFocused=!0:this.startShowDelayTimer()},this.handleAnchorMouseOut=t=>{this.isAnchorHoveredFocused=!1,this.clearShowDelayTimer(),this.startHideDelayTimer()},this.handleAnchorFocusIn=t=>{this.startShowDelayTimer()},this.handleAnchorFocusOut=t=>{this.isAnchorHoveredFocused=!1,this.clearShowDelayTimer(),this.startHideDelayTimer()},this.startHideDelayTimer=()=>{this.clearHideDelayTimer(),this.tooltipVisible&&(this.hideDelayTimer=window.setTimeout((()=>{this.updateTooltipVisibility()}),60))},this.clearHideDelayTimer=()=>{null!==this.hideDelayTimer&&(clearTimeout(this.hideDelayTimer),this.hideDelayTimer=null)},this.startShowDelayTimer=()=>{this.isAnchorHoveredFocused||(this.delay>1?null===this.showDelayTimer&&(this.showDelayTimer=window.setTimeout((()=>{this.startHover()}),this.delay)):this.startHover())},this.startHover=()=>{this.isAnchorHoveredFocused=!0,this.updateTooltipVisibility()},this.clearShowDelayTimer=()=>{null!==this.showDelayTimer&&(clearTimeout(this.showDelayTimer),this.showDelayTimer=null)},this.getAnchor=()=>{const t=this.getRootNode();return t instanceof ShadowRoot?t.getElementById(this.anchor):document.getElementById(this.anchor)},this.handleDocumentKeydown=t=>{!t.defaultPrevented&&this.tooltipVisible&&t.key===L&&(this.isAnchorHoveredFocused=!1,this.updateTooltipVisibility(),this.$emit("dismiss"))},this.updateTooltipVisibility=()=>{if(!1===this.visible)this.hideTooltip();else{if(!0===this.visible)return void this.showTooltip();if(this.isAnchorHoveredFocused||this.isRegionHovered)return void this.showTooltip();this.hideTooltip()}},this.showTooltip=()=>{this.tooltipVisible||(this.currentDirection=Pl(this),this.tooltipVisible=!0,document.addEventListener("keydown",this.handleDocumentKeydown),g.queueUpdate(this.setRegionProps))},this.hideTooltip=()=>{this.tooltipVisible&&(this.clearHideDelayTimer(),null!==this.region&&void 0!==this.region&&(this.region.removeEventListener("positionchange",this.handlePositionChange),this.region.viewportElement=null,this.region.anchorElement=null,this.region.removeEventListener("mouseover",this.handleRegionMouseOver),this.region.removeEventListener("mouseout",this.handleRegionMouseOut)),document.removeEventListener("keydown",this.handleDocumentKeydown),this.tooltipVisible=!1)},this.setRegionProps=()=>{this.tooltipVisible&&(this.region.viewportElement=this.viewportElement,this.region.anchorElement=this.anchorElement,this.region.addEventListener("positionchange",this.handlePositionChange),this.region.addEventListener("mouseover",this.handleRegionMouseOver,{passive:!0}),this.region.addEventListener("mouseout",this.handleRegionMouseOut,{passive:!0}))}}visibleChanged(){this.$fastController.isConnected&&(this.updateTooltipVisibility(),this.updateLayout())}anchorChanged(){this.$fastController.isConnected&&(this.anchorElement=this.getAnchor())}positionChanged(){this.$fastController.isConnected&&this.updateLayout()}anchorElementChanged(t){if(this.$fastController.isConnected){if(null!=t&&(t.removeEventListener("mouseover",this.handleAnchorMouseOver),t.removeEventListener("mouseout",this.handleAnchorMouseOut),t.removeEventListener("focusin",this.handleAnchorFocusIn),t.removeEventListener("focusout",this.handleAnchorFocusOut)),null!==this.anchorElement&&void 0!==this.anchorElement){this.anchorElement.addEventListener("mouseover",this.handleAnchorMouseOver,{passive:!0}),this.anchorElement.addEventListener("mouseout",this.handleAnchorMouseOut,{passive:!0}),this.anchorElement.addEventListener("focusin",this.handleAnchorFocusIn,{passive:!0}),this.anchorElement.addEventListener("focusout",this.handleAnchorFocusOut,{passive:!0});const t=this.anchorElement.id;null!==this.anchorElement.parentElement&&this.anchorElement.parentElement.querySelectorAll(":hover").forEach((e=>{e.id===t&&this.startShowDelayTimer()}))}null!==this.region&&void 0!==this.region&&this.tooltipVisible&&(this.region.anchorElement=this.anchorElement),this.updateLayout()}}viewportElementChanged(){null!==this.region&&void 0!==this.region&&(this.region.viewportElement=this.viewportElement),this.updateLayout()}connectedCallback(){super.connectedCallback(),this.anchorElement=this.getAnchor(),this.updateTooltipVisibility()}disconnectedCallback(){this.hideTooltip(),this.clearShowDelayTimer(),this.clearHideDelayTimer(),super.disconnectedCallback()}updateLayout(){switch(this.verticalPositioningMode="locktodefault",this.horizontalPositioningMode="locktodefault",this.position){case"top":case"bottom":this.verticalDefaultPosition=this.position,this.horizontalDefaultPosition="center";break;case"right":case"left":case"start":case"end":this.verticalDefaultPosition="center",this.horizontalDefaultPosition=this.position;break;case"top-left":this.verticalDefaultPosition="top",this.horizontalDefaultPosition="left";break;case"top-right":this.verticalDefaultPosition="top",this.horizontalDefaultPosition="right";break;case"bottom-left":this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="left";break;case"bottom-right":this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="right";break;case"top-start":this.verticalDefaultPosition="top",this.horizontalDefaultPosition="start";break;case"top-end":this.verticalDefaultPosition="top",this.horizontalDefaultPosition="end";break;case"bottom-start":this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="start";break;case"bottom-end":this.verticalDefaultPosition="bottom",this.horizontalDefaultPosition="end";break;default:this.verticalPositioningMode="dynamic",this.horizontalPositioningMode="dynamic",this.verticalDefaultPosition=void 0,this.horizontalDefaultPosition="center"}}}o([I({mode:"boolean"})],Cf.prototype,"visible",void 0),o([I],Cf.prototype,"anchor",void 0),o([I],Cf.prototype,"delay",void 0),o([I],Cf.prototype,"position",void 0),o([I({attribute:"auto-update-mode"})],Cf.prototype,"autoUpdateMode",void 0),o([I({attribute:"horizontal-viewport-lock"})],Cf.prototype,"horizontalViewportLock",void 0),o([I({attribute:"vertical-viewport-lock"})],Cf.prototype,"verticalViewportLock",void 0),o([y],Cf.prototype,"anchorElement",void 0),o([y],Cf.prototype,"viewportElement",void 0),o([y],Cf.prototype,"verticalPositioningMode",void 0),o([y],Cf.prototype,"horizontalPositioningMode",void 0),o([y],Cf.prototype,"horizontalInset",void 0),o([y],Cf.prototype,"verticalInset",void 0),o([y],Cf.prototype,"horizontalScaling",void 0),o([y],Cf.prototype,"verticalScaling",void 0),o([y],Cf.prototype,"verticalDefaultPosition",void 0),o([y],Cf.prototype,"horizontalDefaultPosition",void 0),o([y],Cf.prototype,"tooltipVisible",void 0),o([y],Cf.prototype,"currentDirection",void 0);class Ff extends Cf{connectedCallback(){super.connectedCallback(),tr.setValueFor(this,qn)}}const Sf=Ff.compose({baseName:"tooltip",baseClass:Cf,template:(t,e)=>ye`
        ${Hl((t=>t.tooltipVisible),ye`
            <${t.tagFor(zl)}
                fixed-placement="true"
                auto-update-mode="${t=>t.autoUpdateMode}"
                vertical-positioning-mode="${t=>t.verticalPositioningMode}"
                vertical-default-position="${t=>t.verticalDefaultPosition}"
                vertical-inset="${t=>t.verticalInset}"
                vertical-scaling="${t=>t.verticalScaling}"
                horizontal-positioning-mode="${t=>t.horizontalPositioningMode}"
                horizontal-default-position="${t=>t.horizontalDefaultPosition}"
                horizontal-scaling="${t=>t.horizontalScaling}"
                horizontal-inset="${t=>t.horizontalInset}"
                vertical-viewport-lock="${t=>t.horizontalViewportLock}"
                horizontal-viewport-lock="${t=>t.verticalViewportLock}"
                dir="${t=>t.currentDirection}"
                ${we("region")}
            >
                <div class="tooltip" part="tooltip" role="tooltip">
                    <slot></slot>
                </div>
            </${t.tagFor(zl)}>
        `)}
    `,styles:(t,e)=>Pe`
    :host {
      position: relative;
      contain: layout;
      overflow: visible;
      height: 0;
      width: 0;
      z-index: 10000;
    }

    .tooltip {
      box-sizing: border-box;
      border-radius: calc(${no} * 1px);
      border: calc(${so} * 1px) solid ${Ds};
      background: ${tr};
      color: ${rs};
      padding: 4px 12px;
      height: fit-content;
      width: fit-content;
      ${za}
      white-space: nowrap;
      box-shadow: ${fd};
    }

    ${t.tagFor(zl)} {
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: visible;
      flex-direction: row;
    }

    ${t.tagFor(zl)}.right,
    ${t.tagFor(zl)}.left {
      flex-direction: column;
    }

    ${t.tagFor(zl)}.top .tooltip::after,
    ${t.tagFor(zl)}.bottom .tooltip::after,
    ${t.tagFor(zl)}.left .tooltip::after,
    ${t.tagFor(zl)}.right .tooltip::after {
      content: '';
      width: 12px;
      height: 12px;
      background: ${tr};
      border-top: calc(${so} * 1px) solid ${Ds};
      border-left: calc(${so} * 1px) solid ${Ds};
      position: absolute;
    }

    ${t.tagFor(zl)}.top .tooltip::after {
      transform: translateX(-50%) rotate(225deg);
      bottom: 5px;
      left: 50%;
    }

    ${t.tagFor(zl)}.top .tooltip {
      margin-bottom: 12px;
    }

    ${t.tagFor(zl)}.bottom .tooltip::after {
      transform: translateX(-50%) rotate(45deg);
      top: 5px;
      left: 50%;
    }

    ${t.tagFor(zl)}.bottom .tooltip {
      margin-top: 12px;
    }

    ${t.tagFor(zl)}.left .tooltip::after {
      transform: translateY(-50%) rotate(135deg);
      top: 50%;
      right: 5px;
    }

    ${t.tagFor(zl)}.left .tooltip {
      margin-right: 12px;
    }

    ${t.tagFor(zl)}.right .tooltip::after {
      transform: translateY(-50%) rotate(-45deg);
      top: 50%;
      left: 5px;
    }

    ${t.tagFor(zl)}.right .tooltip {
      margin-left: 12px;
    }
  `.withBehaviors(Ja(Pe`
        :host([disabled]) {
          opacity: 1;
        }
        ${t.tagFor(zl)}.top .tooltip::after,
        ${t.tagFor(zl)}.bottom .tooltip::after,
        ${t.tagFor(zl)}.left .tooltip::after,
        ${t.tagFor(zl)}.right .tooltip::after {
          content: '';
          width: unset;
          height: unset;
        }
      `))});function If(t){return Wa(t)&&"treeitem"===t.getAttribute("role")}class Tf extends _t{constructor(){super(...arguments),this.expanded=!1,this.focusable=!1,this.isNestedItem=()=>If(this.parentElement),this.handleExpandCollapseButtonClick=t=>{this.disabled||t.defaultPrevented||(this.expanded=!this.expanded)},this.handleFocus=t=>{this.setAttribute("tabindex","0")},this.handleBlur=t=>{this.setAttribute("tabindex","-1")}}expandedChanged(){this.$fastController.isConnected&&this.$emit("expanded-change",this)}selectedChanged(){this.$fastController.isConnected&&this.$emit("selected-change",this)}itemsChanged(t,e){this.$fastController.isConnected&&this.items.forEach((t=>{If(t)&&(t.nested=!0)}))}static focusItem(t){t.focusable=!0,t.focus()}childItemLength(){const t=this.childItems.filter((t=>If(t)));return t?t.length:0}}o([I({mode:"boolean"})],Tf.prototype,"expanded",void 0),o([I({mode:"boolean"})],Tf.prototype,"selected",void 0),o([I({mode:"boolean"})],Tf.prototype,"disabled",void 0),o([y],Tf.prototype,"focusable",void 0),o([y],Tf.prototype,"childItems",void 0),o([y],Tf.prototype,"items",void 0),o([y],Tf.prototype,"nested",void 0),o([y],Tf.prototype,"renderCollapsedChildren",void 0),Ie(Tf,$e);class Df extends _t{constructor(){super(...arguments),this.currentFocused=null,this.handleFocus=t=>{if(!(this.slottedTreeItems.length<1))return t.target===this?(null===this.currentFocused&&(this.currentFocused=this.getValidFocusableItem()),void(null!==this.currentFocused&&Tf.focusItem(this.currentFocused))):void(this.contains(t.target)&&(this.setAttribute("tabindex","-1"),this.currentFocused=t.target))},this.handleBlur=t=>{t.target instanceof HTMLElement&&(null===t.relatedTarget||!this.contains(t.relatedTarget))&&this.setAttribute("tabindex","0")},this.handleKeyDown=t=>{if(t.defaultPrevented)return;if(this.slottedTreeItems.length<1)return!0;const e=this.getVisibleNodes();switch(t.key){case V:return void(e.length&&Tf.focusItem(e[0]));case P:return void(e.length&&Tf.focusItem(e[e.length-1]));case R:if(t.target&&this.isFocusableElement(t.target)){const e=t.target;e instanceof Tf&&e.childItemLength()>0&&e.expanded?e.expanded=!1:e instanceof Tf&&e.parentElement instanceof Tf&&Tf.focusItem(e.parentElement)}return!1;case O:if(t.target&&this.isFocusableElement(t.target)){const e=t.target;e instanceof Tf&&e.childItemLength()>0&&!e.expanded?e.expanded=!0:e instanceof Tf&&e.childItemLength()>0&&this.focusNextNode(1,t.target)}return;case D:return void(t.target&&this.isFocusableElement(t.target)&&this.focusNextNode(1,t.target));case E:return void(t.target&&this.isFocusableElement(t.target)&&this.focusNextNode(-1,t.target));case A:return void this.handleClick(t)}return!0},this.handleSelectedChange=t=>{if(t.defaultPrevented)return;if(!(t.target instanceof Element&&If(t.target)))return!0;const e=t.target;e.selected?(this.currentSelected&&this.currentSelected!==e&&(this.currentSelected.selected=!1),this.currentSelected=e):e.selected||this.currentSelected!==e||(this.currentSelected=null)},this.setItems=()=>{const t=this.treeView.querySelector("[aria-selected='true']");this.currentSelected=t,null!==this.currentFocused&&this.contains(this.currentFocused)||(this.currentFocused=this.getValidFocusableItem()),this.nested=this.checkForNestedItems(),this.getVisibleNodes().forEach((t=>{If(t)&&(t.nested=this.nested)}))},this.isFocusableElement=t=>If(t),this.isSelectedElement=t=>t.selected}slottedTreeItemsChanged(){this.$fastController.isConnected&&this.setItems()}connectedCallback(){super.connectedCallback(),this.setAttribute("tabindex","0"),g.queueUpdate((()=>{this.setItems()}))}handleClick(t){if(t.defaultPrevented)return;if(!(t.target instanceof Element&&If(t.target)))return!0;const e=t.target;e.disabled||(e.selected=!e.selected)}focusNextNode(t,e){const i=this.getVisibleNodes();if(!i)return;const o=i[i.indexOf(e)+t];Wa(o)&&Tf.focusItem(o)}getValidFocusableItem(){const t=this.getVisibleNodes();let e=t.findIndex(this.isSelectedElement);return-1===e&&(e=t.findIndex(this.isFocusableElement)),-1!==e?t[e]:null}checkForNestedItems(){return this.slottedTreeItems.some((t=>If(t)&&t.querySelector("[role='treeitem']")))}getVisibleNodes(){return function(t,e){if(t&&Wa(t))return Array.from(t.querySelectorAll(e)).filter((t=>null!==t.offsetParent))}(this,"[role='treeitem']")||[]}}o([I({attribute:"render-collapsed-nodes"})],Df.prototype,"renderCollapsedNodes",void 0),o([y],Df.prototype,"currentSelected",void 0),o([y],Df.prototype,"slottedTreeItems",void 0);const Rf=(t,e)=>Pe`
  :host([hidden]) {
    display: none;
  }

  ${Me("flex")} :host {
    flex-direction: column;
    align-items: stretch;
    min-width: fit-content;
    font-size: 0;
  }
`,Of=Df.compose({baseName:"tree-view",template:(t,e)=>ye`
    <template
        role="tree"
        ${we("treeView")}
        @keydown="${(t,e)=>t.handleKeyDown(e.event)}"
        @focusin="${(t,e)=>t.handleFocus(e.event)}"
        @focusout="${(t,e)=>t.handleBlur(e.event)}"
        @click="${(t,e)=>t.handleClick(e.event)}"
        @selected-change="${(t,e)=>t.handleSelectedChange(e.event)}"
    >
        <slot ${Ae("slottedTreeItems")}></slot>
    </template>
`,styles:Rf}),Ef=Rf,Af=Pe`
  .expand-collapse-button svg {
    transform: rotate(0deg);
  }
  :host(.nested) .expand-collapse-button {
    left: var(--expand-collapse-button-nested-width, calc(${il} * -1px));
  }
  :host([selected])::after {
    left: calc(${ao} * 1px);
  }
  :host([expanded]) > .positioning-region .expand-collapse-button svg {
    transform: rotate(90deg);
  }
`,Lf=Pe`
  .expand-collapse-button svg {
    transform: rotate(180deg);
  }
  :host(.nested) .expand-collapse-button {
    right: var(--expand-collapse-button-nested-width, calc(${il} * -1px));
  }
  :host([selected])::after {
    right: calc(${ao} * 1px);
  }
  :host([expanded]) > .positioning-region .expand-collapse-button svg {
    transform: rotate(90deg);
  }
`,Vf=He`((${to} / 2) * ${oo}) + ((${oo} * ${io}) / 2)`,Pf=oi.create("tree-item-expand-collapse-hover").withDefault((t=>{const e=Kr.getValueFor(t);return e.evaluate(t,e.evaluate(t).hover).hover})),zf=oi.create("tree-item-expand-collapse-selected-hover").withDefault((t=>{const e=Ur.getValueFor(t);return Kr.getValueFor(t).evaluate(t,e.evaluate(t).rest).hover})),Hf=(t,e)=>Pe`
    ${Me("block")} :host {
      contain: content;
      position: relative;
      outline: none;
      color: ${rs};
      fill: currentcolor;
      cursor: pointer;
      font-family: ${lo};
      --expand-collapse-button-size: calc(${il} * 1px);
      --tree-item-nested-width: 0;
    }

    .positioning-region {
      display: flex;
      position: relative;
      box-sizing: border-box;
      background: ${Xr};
      border: calc(${so} * 1px) solid transparent;
      border-radius: calc(${no} * 1px);
      height: calc((${il} + 1) * 1px);
    }

    :host(:${Xa}) .positioning-region {
      ${tl}
    }

    .positioning-region::before {
      content: '';
      display: block;
      width: var(--tree-item-nested-width);
      flex-shrink: 0;
    }

    :host(:not([disabled])) .positioning-region:hover {
      background: ${Yr};
    }

    :host(:not([disabled])) .positioning-region:active {
      background: ${Qr};
    }

    .content-region {
      display: inline-flex;
      align-items: center;
      white-space: nowrap;
      width: 100%;
      height: calc(${il} * 1px);
      margin-inline-start: calc(${oo} * 2px + 8px);
      ${za}
    }

    .items {
      display: none;
      ${""} font-size: calc(1em + (${oo} + 16) * 1px);
    }

    .expand-collapse-button {
      background: none;
      border: none;
      border-radius: calc(${no} * 1px);
      ${""} width: calc((${Vf} + (${oo} * 2)) * 1px);
      height: calc((${Vf} + (${oo} * 2)) * 1px);
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      margin: 0 6px;
    }

    .expand-collapse-button svg {
      transition: transform 0.1s linear;
      pointer-events: none;
    }

    .start,
    .end {
      display: flex;
    }

    .start {
      ${""} margin-inline-end: calc(${oo} * 2px + 2px);
    }

    .end {
      ${""} margin-inline-start: calc(${oo} * 2px + 2px);
    }

    :host(.expanded) > .items {
      display: block;
    }

    :host([disabled]) {
      opacity: ${Zi};
      cursor: ${hc};
    }

    :host(.nested) .content-region {
      position: relative;
      margin-inline-start: var(--expand-collapse-button-size);
    }

    :host(.nested) .expand-collapse-button {
      position: absolute;
    }

    :host(.nested) .expand-collapse-button:hover {
      background: ${Pf};
    }

    :host(:not([disabled])[selected]) .positioning-region {
      background: ${_r};
    }

    :host(:not([disabled])[selected]) .expand-collapse-button:hover {
      background: ${zf};
    }

    :host([selected])::after {
      content: '';
      display: block;
      position: absolute;
      top: calc((${il} / 4) * 1px);
      width: 3px;
      height: calc((${il} / 2) * 1px);
      ${""} background: ${or};
      border-radius: calc(${no} * 1px);
    }

    ::slotted(fluent-tree-item) {
      --tree-item-nested-width: 1em;
      --expand-collapse-button-nested-width: calc(${il} * -1px);
    }
  `.withBehaviors(new Kc(Af,Lf),Ja(Pe`
        :host {
          color: ${Za.ButtonText};
        }
        .positioning-region {
          border-color: ${Za.ButtonFace};
          background: ${Za.ButtonFace};
        }
        :host(:not([disabled])) .positioning-region:hover,
        :host(:not([disabled])) .positioning-region:active,
        :host(:not([disabled])[selected]) .positioning-region {
          background: ${Za.Highlight};
        }
        :host .positioning-region:hover .content-region,
        :host([selected]) .positioning-region .content-region {
          forced-color-adjust: none;
          color: ${Za.HighlightText};
        }
        :host([disabled][selected]) .positioning-region .content-region {
          color: ${Za.GrayText};
        }
        :host([selected])::after {
          background: ${Za.HighlightText};
        }
        :host(:${Xa}) .positioning-region {
          forced-color-adjust: none;
          outline-color: ${Za.ButtonFace};
        }
        :host([disabled]),
        :host([disabled]) .content-region,
        :host([disabled]) .positioning-region:hover .content-region {
          opacity: 1;
          color: ${Za.GrayText};
        }
        :host(.nested) .expand-collapse-button:hover,
        :host(:not([disabled])[selected]) .expand-collapse-button:hover {
          background: ${Za.ButtonFace};
          fill: ${Za.ButtonText};
        }
      `)),Mf=Tf.compose({baseName:"tree-item",template:(t,e)=>ye`
    <template
        role="treeitem"
        slot="${t=>t.isNestedItem()?"item":void 0}"
        tabindex="-1"
        class="${t=>t.expanded?"expanded":""} ${t=>t.selected?"selected":""} ${t=>t.nested?"nested":""}
            ${t=>t.disabled?"disabled":""}"
        aria-expanded="${t=>t.childItems&&t.childItemLength()>0?t.expanded:void 0}"
        aria-selected="${t=>t.selected}"
        aria-disabled="${t=>t.disabled}"
        @focusin="${(t,e)=>t.handleFocus(e.event)}"
        @focusout="${(t,e)=>t.handleBlur(e.event)}"
        ${ch({property:"childItems",filter:Re()})}
    >
        <div class="positioning-region" part="positioning-region">
            <div class="content-region" part="content-region">
                ${Hl((t=>t.childItems&&t.childItemLength()>0),ye`
                        <div
                            aria-hidden="true"
                            class="expand-collapse-button"
                            part="expand-collapse-button"
                            @click="${(t,e)=>t.handleExpandCollapseButtonClick(e.event)}"
                            ${we("expandCollapseButton")}
                        >
                            <slot name="expand-collapse-glyph">
                                ${e.expandCollapseGlyph||""}
                            </slot>
                        </div>
                    `)}
                ${Ce(0,e)}
                <slot></slot>
                ${ke(0,e)}
            </div>
        </div>
        ${Hl((t=>t.childItems&&t.childItemLength()>0&&(t.expanded||t.renderCollapsedChildren)),ye`
                <div role="group" class="items" part="items">
                    <slot name="item" ${Ae("items")}></slot>
                </div>
            `)}
    </template>
`,styles:Hf,expandCollapseGlyph:'\n    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">\n      <path d="M4.65 2.15a.5.5 0 000 .7L7.79 6 4.65 9.15a.5.5 0 10.7.7l3.5-3.5a.5.5 0 000-.7l-3.5-3.5a.5.5 0 00-.7 0z"/>\n    </svg>\n  '}),Bf=Hf,Nf={fluentAccordion:cl,fluentAccordionItem:al,fluentAnchor:Dl,fluentAnchoredRegion:Bl,fluentBadge:ql,fluentBreadcrumb:Yl,fluentBreadcrumbItem:Zl,fluentButton:mc,fluentCalendar:Zc,fluentCard:wd,fluentCheckbox:Id,fluentCombobox:sh,fluentDataGrid:vh,fluentDataGridCell:ph,fluentDataGridRow:gh,fluentDesignSystemProvider:kh,fluentDialog:Hh,fluentDivider:_h,fluentFlipper:Xh,fluentHorizontalScroll:ou,fluentListbox:lu,fluentOption:hu,fluentMenu:wu,fluentMenuItem:Cu,fluentNumberField:zu,fluentProgress:Nu,fluentProgressRing:qu,fluentRadio:Qu,fluentRadioGroup:ep,fluentSearch:fp,fluentSelect:wp,fluentSkeleton:Fp,fluentSlider:Ep,fluentSliderLabel:zp,fluentSwitch:Up,fluentTabs:of,fluentTab:Yp,fluentTabPanel:tf,fluentTextArea:uf,fluentTextField:vf,fluentToolbar:kf,fluentTooltip:Sf,fluentTreeView:Of,fluentTreeItem:Mf,register(t,...e){if(t)for(const i in this)"register"!==i&&this[i]().register(t,...e)}},jf=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),Uf=new Map,_f=new Map;let qf=null;const Gf=pt.createInterface((t=>t.cachedCallback((t=>(null===qf&&(qf=new Kf(null,t)),qf))))),Wf=Object.freeze({tagFor(t){return _f.get(t)},responsibleFor(t){const e=t.$$designSystem$$;return e||pt.findResponsibleContainer(t).get(Gf)},getOrCreate(t){if(!t)return null===qf&&(qf=pt.getOrCreateDOMContainer().get(Gf)),qf;const e=t.$$designSystem$$;if(e)return e;const i=pt.getOrCreateDOMContainer(t);if(i.has(Gf,!1))return i.get(Gf);{const e=new Kf(t,i);return i.register(Et.instance(Gf,e)),e}}});class Kf{constructor(t,e){this.owner=t,this.container=e,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>jf.definitionCallbackOnly,null!==t&&(t.$$designSystem$$=this)}withPrefix(t){return this.prefix=t,this}withShadowRootMode(t){return this.shadowRootMode=t,this}withElementDisambiguation(t){return this.disambiguate=t,this}withDesignTokenRoot(t){return this.designTokenRoot=t,this}register(...t){const e=this.container,i=[],o=this.disambiguate,n=this.shadowRootMode,r={elementPrefix:this.prefix,tryDefineElement(t,r,s){const a=function(t,e,i){return"string"==typeof t?{name:t,type:e,callback:i}:t}(t,r,s),{name:l,callback:c,baseClass:d}=a;let{type:h}=a,u=l,p=Uf.get(u),f=!0;for(;p;){const t=o(u,h,p);switch(t){case jf.ignoreDuplicate:return;case jf.definitionCallbackOnly:f=!1,p=void 0;break;default:u=t,p=Uf.get(u)}}f&&((_f.has(h)||h===_t)&&(h=class extends h{}),Uf.set(u,h),_f.set(h,u),d&&_f.set(d,u)),i.push(new Xf(e,u,h,n,c,f))}};this.designTokensInitialized||(this.designTokensInitialized=!0,null!==this.designTokenRoot&&oi.registerRoot(this.designTokenRoot)),e.registerWithContext(r,...t);for(const t of i)t.callback(t),t.willDefine&&null!==t.definition&&t.definition.define();return this}}class Xf{constructor(t,e,i,o,n,r){this.container=t,this.name=e,this.type=i,this.shadowRootMode=o,this.callback=n,this.willDefine=r,this.definition=null}definePresentation(t){jt.define(this.name,t,this.container)}defineElement(t){this.definition=new J(this.type,Object.assign(Object.assign({},t),{name:this.name}))}tagFor(t){return Wf.tagFor(t)}}function Yf(t){return Wf.getOrCreate(t).withPrefix("fluent")}},14183:function(t,e,i){var o=this&&this.__awaiter||function(t,e,i,o){return new(i||(i=Promise))((function(n,r){function s(t){try{l(o.next(t))}catch(t){r(t)}}function a(t){try{l(o.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,a)}l((o=o.apply(t,e||[])).next())}))},n=this&&this.__generator||function(t,e){var i,o,n,r,s={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return r={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function a(a){return function(l){return function(a){if(i)throw new TypeError("Generator is already executing.");for(;r&&(r=0,a[0]&&(s=0)),s;)try{if(i=1,o&&(n=2&a[0]?o.return:a[0]?o.throw||((n=o.return)&&n.call(o),0):o.next)&&!(n=n.call(o,a[1])).done)return n;switch(o=0,n&&(a=[2&a[0],n.value]),a[0]){case 0:case 1:n=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,o=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!((n=(n=s.trys).length>0&&n[n.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!n||a[1]>n[0]&&a[1]<n[3])){s.label=a[1];break}if(6===a[0]&&s.label<n[1]){s.label=n[1],n=a;break}if(n&&s.label<n[2]){s.label=n[2],s.ops.push(a);break}n[2]&&s.ops.pop(),s.trys.pop();continue}a=e.call(t,s)}catch(t){a=[6,t],o=0}finally{i=n=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}},r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.runtable=e.SetMessage=e.Send=e.run=e.SaveSettings=e.InputApiChange=e.InputChange=void 0;var s,a=r(i(97218)),l=i(79742),c=i(4782),d=null,h="",u="",p="";function f(t){u=t.target.value}function g(){return o(this,void 0,void 0,(function(){var t,e=this;return n(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),[4,Excel.run((function(t){return o(e,void 0,void 0,(function(){var e;return n(this,(function(i){switch(i.label){case 0:return e=t.workbook.worksheets.getFirst(),(d=e.getUsedRange()).load("address"),d.load("text"),d.load("values"),[4,t.sync()];case 1:return i.sent(),s.style.display="flex",[4,b()];case 2:return i.sent(),s.style.display="none",h=document.getElementById("tableroot").innerHTML,document.getElementById("datiinput").style.display="flex",[2]}}))}))}))];case 1:return i.sent(),[3,3];case 2:return t=i.sent(),console.error(t),[3,3];case 3:return[2]}}))}))}function m(){return o(this,void 0,void 0,(function(){var t,e,i,r,c,d=this;return n(this,(function(p){switch(p.label){case 0:return(u=document.getElementById("codartinput").value)?(s.style.display="flex",console.log(h),t=(new TextEncoder).encode(h),e=(0,l.fromByteArray)(t),i=new Date,r=i.toJSON(),c={articoloCometa:u,nomeProdotto:"",idModello:"7166",online:!1,haDataSheet:!0,bloccato:!1,dataCompilazione:r,ultimaModifica:r,note:e,forzaUpdate:!1,idProvider:0,noteRevisione:"Inserito da excel",ultimaRevisione:r},a.default.post("https://form.cometa.it:9080/api/schedahtml",c).then((function(t){return o(d,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return 200!=t.status?[3,2]:[4,v("Inserimento/aggiornamento datasheet ok","green")];case 1:e.sent(),u="",document.getElementById("codartinput").textContent="",s.style.display="none",e.label=2;case 2:return console.log(t.data),[2]}}))}))})).catch((function(t){return o(d,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return[4,v("Inserimento/aggiornamento su datasheet non riuscito","red")];case 1:return e.sent(),console.error(t),s.style.display="none",[2]}}))}))})),[3,3]):[3,1];case 1:return[4,v("Codice articolo vuoto. Invio su datasheet non effettuato","red")];case 2:p.sent(),s.style.display="none",p.label=3;case 3:return[2]}}))}))}function v(t,e){return o(this,void 0,void 0,(function(){var i,o;return n(this,(function(n){for(i=document.getElementById("messagediv");i.firstChild;)i.removeChild(i.lastChild);return(o=document.createElement("h5")).style.backgroundColor=e,o.style.padding="8px",o.style.color="white",o.innerText=t,i.appendChild(o),[2]}))}))}function b(){return o(this,void 0,void 0,(function(){var t,e,i,o,r,s,a,l,c,h,u;return n(this,(function(n){try{for((t=document.createElement("div")).classList.add("data-sheet-container"),(e=document.createElement("table")).classList.add("table"),e.classList.add("table-sm"),e.classList.add("mb-0"),i=document.createElement("tr"),(o=document.createElement("th")).classList.add("text-dark"),o.classList.add("font-weight-bold"),o.classList.add("text-uppercase"),o.classList.add("grey"),o.classList.add("lighten-3"),o.classList.add("py-1"),o.innerText="Caratteristiche",i.appendChild(o),(r=document.createElement("th")).classList.add("text-primary"),r.classList.add("font-weight-bold"),r.classList.add("text-uppercase"),r.classList.add("grey"),r.classList.add("lighten-3"),r.classList.add("py-1"),r.innerText="",i.appendChild(r),e.appendChild(i),document.getElementById("tableroot").appendChild(t).appendChild(e),s=0,a=d.values;s<a.length;s++)(l=a[s])[0]&&(c=document.createElement("tr"),(h=document.createElement("td")).classList.add("font-weight-bold"),h.innerText=l[0],c.appendChild(h),(u=document.createElement("td")).classList.add("font-weight-normal"),u.innerText=l[1],c.appendChild(u),e.appendChild(c))}catch(t){console.error(t)}return[2]}))}))}Office.onReady((function(t){t.host===Office.HostType.Excel&&(document.getElementById("app-body").style.display="flex",document.getElementById("run").onclick=g,document.getElementById("send").onclick=m,document.getElementById("codartinput").onchange=f,p=Office.context.document.settings.get("apiUrl"),document.getElementById("webapiurlinfo").innerText=p,(0,c.provideFluentDesignSystem)().register((0,c.fluentButton)(),(0,c.fluentTab)(),(0,c.fluentTabPanel)(),(0,c.fluentTabs)(),(0,c.fluentTextField)(),(0,c.fluentProgressRing)()),s=document.getElementById("ring"))})),e.InputChange=f,e.InputApiChange=function(t){p=t.target.value},e.SaveSettings=function(t){return o(this,void 0,void 0,(function(){return n(this,(function(t){switch(t.label){case 0:return Office.context.document.settings.set("apiUrl",p),[4,Office.context.document.settings.saveAsync()];case 1:return t.sent(),[2]}}))}))},e.run=g,e.Send=m,e.SetMessage=v,e.runtable=b},79742:function(t,e){e.byteLength=function(t){var e=l(t),i=e[0],o=e[1];return 3*(i+o)/4-o},e.toByteArray=function(t){var e,i,r=l(t),s=r[0],a=r[1],c=new n(function(t,e,i){return 3*(e+i)/4-i}(0,s,a)),d=0,h=a>0?s-4:s;for(i=0;i<h;i+=4)e=o[t.charCodeAt(i)]<<18|o[t.charCodeAt(i+1)]<<12|o[t.charCodeAt(i+2)]<<6|o[t.charCodeAt(i+3)],c[d++]=e>>16&255,c[d++]=e>>8&255,c[d++]=255&e;return 2===a&&(e=o[t.charCodeAt(i)]<<2|o[t.charCodeAt(i+1)]>>4,c[d++]=255&e),1===a&&(e=o[t.charCodeAt(i)]<<10|o[t.charCodeAt(i+1)]<<4|o[t.charCodeAt(i+2)]>>2,c[d++]=e>>8&255,c[d++]=255&e),c},e.fromByteArray=function(t){for(var e,o=t.length,n=o%3,r=[],s=16383,a=0,l=o-n;a<l;a+=s)r.push(c(t,a,a+s>l?l:a+s));return 1===n?(e=t[o-1],r.push(i[e>>2]+i[e<<4&63]+"==")):2===n&&(e=(t[o-2]<<8)+t[o-1],r.push(i[e>>10]+i[e>>4&63]+i[e<<2&63]+"=")),r.join("")};for(var i=[],o=[],n="undefined"!=typeof Uint8Array?Uint8Array:Array,r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s=0,a=r.length;s<a;++s)i[s]=r[s],o[r.charCodeAt(s)]=s;function l(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var i=t.indexOf("=");return-1===i&&(i=e),[i,i===e?0:4-i%4]}function c(t,e,o){for(var n,r,s=[],a=e;a<o;a+=3)n=(t[a]<<16&16711680)+(t[a+1]<<8&65280)+(255&t[a+2]),s.push(i[(r=n)>>18&63]+i[r>>12&63]+i[r>>6&63]+i[63&r]);return s.join("")}o["-".charCodeAt(0)]=62,o["_".charCodeAt(0)]=63},93823:function(t,e,i){var o=i(27091),n=i.n(o),r=new URL(i(60806),i.b),s=new URL(i(7055),i.b),a=new URL(i(94129),i.b),l=new URL(i(6579),i.b),c=new URL(i(27771),i.b);n()(r),n()(s),n()(a),n()(l),n()(c)},27091:function(t){t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),e.hash&&(t+=e.hash),e.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(t)?'"'.concat(t,'"'):t):t}},27771:function(t,e,i){t.exports=i.p+"assets/logo.png"},7055:function(t,e,i){t.exports=i.p+"03fa3d418521f27c075f.css"},94129:function(t,e,i){t.exports=i.p+"76103408cd30becf556f.css"},6579:function(t,e,i){t.exports=i.p+"18a8f88c0696ab438246.css"},60806:function(t,e,i){t.exports=i.p+"8d768f65702f2137206f.css"},97218:function(t,e,i){function o(t,e){return function(){return t.apply(e,arguments)}}const{toString:n}=Object.prototype,{getPrototypeOf:r}=Object,s=(a=Object.create(null),t=>{const e=n.call(t);return a[e]||(a[e]=e.slice(8,-1).toLowerCase())});var a;const l=t=>(t=t.toLowerCase(),e=>s(e)===t),c=t=>e=>typeof e===t,{isArray:d}=Array,h=c("undefined"),u=l("ArrayBuffer"),p=c("string"),f=c("function"),g=c("number"),m=t=>null!==t&&"object"==typeof t,v=t=>{if("object"!==s(t))return!1;const e=r(t);return!(null!==e&&e!==Object.prototype&&null!==Object.getPrototypeOf(e)||Symbol.toStringTag in t||Symbol.iterator in t)},b=l("Date"),y=l("File"),x=l("Blob"),w=l("FileList"),$=l("URLSearchParams");function k(t,e,{allOwnKeys:i=!1}={}){if(null==t)return;let o,n;if("object"!=typeof t&&(t=[t]),d(t))for(o=0,n=t.length;o<n;o++)e.call(null,t[o],o,t);else{const n=i?Object.getOwnPropertyNames(t):Object.keys(t),r=n.length;let s;for(o=0;o<r;o++)s=n[o],e.call(null,t[s],s,t)}}function C(t,e){e=e.toLowerCase();const i=Object.keys(t);let o,n=i.length;for(;n-- >0;)if(o=i[n],e===o.toLowerCase())return o;return null}const F="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:i.g,S=t=>!h(t)&&t!==F,I=(T="undefined"!=typeof Uint8Array&&r(Uint8Array),t=>T&&t instanceof T);var T;const D=l("HTMLFormElement"),R=(({hasOwnProperty:t})=>(e,i)=>t.call(e,i))(Object.prototype),O=l("RegExp"),E=(t,e)=>{const i=Object.getOwnPropertyDescriptors(t),o={};k(i,((i,n)=>{!1!==e(i,n,t)&&(o[n]=i)})),Object.defineProperties(t,o)},A="abcdefghijklmnopqrstuvwxyz",L="0123456789",V={DIGIT:L,ALPHA:A,ALPHA_DIGIT:A+A.toUpperCase()+L};var P={isArray:d,isArrayBuffer:u,isBuffer:function(t){return null!==t&&!h(t)&&null!==t.constructor&&!h(t.constructor)&&f(t.constructor.isBuffer)&&t.constructor.isBuffer(t)},isFormData:t=>{const e="[object FormData]";return t&&("function"==typeof FormData&&t instanceof FormData||n.call(t)===e||f(t.toString)&&t.toString()===e)},isArrayBufferView:function(t){let e;return e="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&u(t.buffer),e},isString:p,isNumber:g,isBoolean:t=>!0===t||!1===t,isObject:m,isPlainObject:v,isUndefined:h,isDate:b,isFile:y,isBlob:x,isRegExp:O,isFunction:f,isStream:t=>m(t)&&f(t.pipe),isURLSearchParams:$,isTypedArray:I,isFileList:w,forEach:k,merge:function t(){const{caseless:e}=S(this)&&this||{},i={},o=(o,n)=>{const r=e&&C(i,n)||n;v(i[r])&&v(o)?i[r]=t(i[r],o):v(o)?i[r]=t({},o):d(o)?i[r]=o.slice():i[r]=o};for(let t=0,e=arguments.length;t<e;t++)arguments[t]&&k(arguments[t],o);return i},extend:(t,e,i,{allOwnKeys:n}={})=>(k(e,((e,n)=>{i&&f(e)?t[n]=o(e,i):t[n]=e}),{allOwnKeys:n}),t),trim:t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:t=>(65279===t.charCodeAt(0)&&(t=t.slice(1)),t),inherits:(t,e,i,o)=>{t.prototype=Object.create(e.prototype,o),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),i&&Object.assign(t.prototype,i)},toFlatObject:(t,e,i,o)=>{let n,s,a;const l={};if(e=e||{},null==t)return e;do{for(n=Object.getOwnPropertyNames(t),s=n.length;s-- >0;)a=n[s],o&&!o(a,t,e)||l[a]||(e[a]=t[a],l[a]=!0);t=!1!==i&&r(t)}while(t&&(!i||i(t,e))&&t!==Object.prototype);return e},kindOf:s,kindOfTest:l,endsWith:(t,e,i)=>{t=String(t),(void 0===i||i>t.length)&&(i=t.length),i-=e.length;const o=t.indexOf(e,i);return-1!==o&&o===i},toArray:t=>{if(!t)return null;if(d(t))return t;let e=t.length;if(!g(e))return null;const i=new Array(e);for(;e-- >0;)i[e]=t[e];return i},forEachEntry:(t,e)=>{const i=(t&&t[Symbol.iterator]).call(t);let o;for(;(o=i.next())&&!o.done;){const i=o.value;e.call(t,i[0],i[1])}},matchAll:(t,e)=>{let i;const o=[];for(;null!==(i=t.exec(e));)o.push(i);return o},isHTMLForm:D,hasOwnProperty:R,hasOwnProp:R,reduceDescriptors:E,freezeMethods:t=>{E(t,((e,i)=>{if(f(t)&&-1!==["arguments","caller","callee"].indexOf(i))return!1;const o=t[i];f(o)&&(e.enumerable=!1,"writable"in e?e.writable=!1:e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+i+"'")}))}))},toObjectSet:(t,e)=>{const i={},o=t=>{t.forEach((t=>{i[t]=!0}))};return d(t)?o(t):o(String(t).split(e)),i},toCamelCase:t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(t,e,i){return e.toUpperCase()+i})),noop:()=>{},toFiniteNumber:(t,e)=>(t=+t,Number.isFinite(t)?t:e),findKey:C,global:F,isContextDefined:S,ALPHABET:V,generateString:(t=16,e=V.ALPHA_DIGIT)=>{let i="";const{length:o}=e;for(;t--;)i+=e[Math.random()*o|0];return i},isSpecCompliantForm:function(t){return!!(t&&f(t.append)&&"FormData"===t[Symbol.toStringTag]&&t[Symbol.iterator])},toJSONObject:t=>{const e=new Array(10),i=(t,o)=>{if(m(t)){if(e.indexOf(t)>=0)return;if(!("toJSON"in t)){e[o]=t;const n=d(t)?[]:{};return k(t,((t,e)=>{const r=i(t,o+1);!h(r)&&(n[e]=r)})),e[o]=void 0,n}}return t};return i(t,0)}};function z(t,e,i,o,n){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=t,this.name="AxiosError",e&&(this.code=e),i&&(this.config=i),o&&(this.request=o),n&&(this.response=n)}P.inherits(z,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:P.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const H=z.prototype,M={};function B(t){return P.isPlainObject(t)||P.isArray(t)}function N(t){return P.endsWith(t,"[]")?t.slice(0,-2):t}function j(t,e,i){return t?t.concat(e).map((function(t,e){return t=N(t),!i&&e?"["+t+"]":t})).join(i?".":""):e}["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((t=>{M[t]={value:t}})),Object.defineProperties(z,M),Object.defineProperty(H,"isAxiosError",{value:!0}),z.from=(t,e,i,o,n,r)=>{const s=Object.create(H);return P.toFlatObject(t,s,(function(t){return t!==Error.prototype}),(t=>"isAxiosError"!==t)),z.call(s,t.message,e,i,o,n),s.cause=t,s.name=t.name,r&&Object.assign(s,r),s};const U=P.toFlatObject(P,{},null,(function(t){return/^is[A-Z]/.test(t)}));function _(t,e,i){if(!P.isObject(t))throw new TypeError("target must be an object");e=e||new FormData;const o=(i=P.toFlatObject(i,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(t,e){return!P.isUndefined(e[t])}))).metaTokens,n=i.visitor||c,r=i.dots,s=i.indexes,a=(i.Blob||"undefined"!=typeof Blob&&Blob)&&P.isSpecCompliantForm(e);if(!P.isFunction(n))throw new TypeError("visitor must be a function");function l(t){if(null===t)return"";if(P.isDate(t))return t.toISOString();if(!a&&P.isBlob(t))throw new z("Blob is not supported. Use a Buffer instead.");return P.isArrayBuffer(t)||P.isTypedArray(t)?a&&"function"==typeof Blob?new Blob([t]):Buffer.from(t):t}function c(t,i,n){let a=t;if(t&&!n&&"object"==typeof t)if(P.endsWith(i,"{}"))i=o?i:i.slice(0,-2),t=JSON.stringify(t);else if(P.isArray(t)&&function(t){return P.isArray(t)&&!t.some(B)}(t)||(P.isFileList(t)||P.endsWith(i,"[]"))&&(a=P.toArray(t)))return i=N(i),a.forEach((function(t,o){!P.isUndefined(t)&&null!==t&&e.append(!0===s?j([i],o,r):null===s?i:i+"[]",l(t))})),!1;return!!B(t)||(e.append(j(n,i,r),l(t)),!1)}const d=[],h=Object.assign(U,{defaultVisitor:c,convertValue:l,isVisitable:B});if(!P.isObject(t))throw new TypeError("data must be an object");return function t(i,o){if(!P.isUndefined(i)){if(-1!==d.indexOf(i))throw Error("Circular reference detected in "+o.join("."));d.push(i),P.forEach(i,(function(i,r){!0===(!(P.isUndefined(i)||null===i)&&n.call(e,i,P.isString(r)?r.trim():r,o,h))&&t(i,o?o.concat(r):[r])})),d.pop()}}(t),e}function q(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,(function(t){return e[t]}))}function G(t,e){this._pairs=[],t&&_(t,this,e)}const W=G.prototype;function K(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function X(t,e,i){if(!e)return t;const o=i&&i.encode||K,n=i&&i.serialize;let r;if(r=n?n(e,i):P.isURLSearchParams(e)?e.toString():new G(e,i).toString(o),r){const e=t.indexOf("#");-1!==e&&(t=t.slice(0,e)),t+=(-1===t.indexOf("?")?"?":"&")+r}return t}W.append=function(t,e){this._pairs.push([t,e])},W.toString=function(t){const e=t?function(e){return t.call(this,e,q)}:q;return this._pairs.map((function(t){return e(t[0])+"="+e(t[1])}),"").join("&")};var Y=class{constructor(){this.handlers=[]}use(t,e,i){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!i&&i.synchronous,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){P.forEach(this.handlers,(function(e){null!==e&&t(e)}))}},Q={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},J={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:G,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},isStandardBrowserEnv:(()=>{let t;return("undefined"==typeof navigator||"ReactNative"!==(t=navigator.product)&&"NativeScript"!==t&&"NS"!==t)&&"undefined"!=typeof window&&"undefined"!=typeof document})(),isStandardBrowserWebWorkerEnv:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,protocols:["http","https","file","blob","url","data"]};function Z(t){function e(t,i,o,n){let r=t[n++];const s=Number.isFinite(+r),a=n>=t.length;return r=!r&&P.isArray(o)?o.length:r,a?(P.hasOwnProp(o,r)?o[r]=[o[r],i]:o[r]=i,!s):(o[r]&&P.isObject(o[r])||(o[r]=[]),e(t,i,o[r],n)&&P.isArray(o[r])&&(o[r]=function(t){const e={},i=Object.keys(t);let o;const n=i.length;let r;for(o=0;o<n;o++)r=i[o],e[r]=t[r];return e}(o[r])),!s)}if(P.isFormData(t)&&P.isFunction(t.entries)){const i={};return P.forEachEntry(t,((t,o)=>{e(function(t){return P.matchAll(/\w+|\[(\w*)]/g,t).map((t=>"[]"===t[0]?"":t[1]||t[0]))}(t),o,i,0)})),i}return null}const tt={"Content-Type":void 0},et={transitional:Q,adapter:["xhr","http"],transformRequest:[function(t,e){const i=e.getContentType()||"",o=i.indexOf("application/json")>-1,n=P.isObject(t);if(n&&P.isHTMLForm(t)&&(t=new FormData(t)),P.isFormData(t))return o&&o?JSON.stringify(Z(t)):t;if(P.isArrayBuffer(t)||P.isBuffer(t)||P.isStream(t)||P.isFile(t)||P.isBlob(t))return t;if(P.isArrayBufferView(t))return t.buffer;if(P.isURLSearchParams(t))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let r;if(n){if(i.indexOf("application/x-www-form-urlencoded")>-1)return function(t,e){return _(t,new J.classes.URLSearchParams,Object.assign({visitor:function(t,e,i,o){return J.isNode&&P.isBuffer(t)?(this.append(e,t.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},e))}(t,this.formSerializer).toString();if((r=P.isFileList(t))||i.indexOf("multipart/form-data")>-1){const e=this.env&&this.env.FormData;return _(r?{"files[]":t}:t,e&&new e,this.formSerializer)}}return n||o?(e.setContentType("application/json",!1),function(t,e,i){if(P.isString(t))try{return(0,JSON.parse)(t),P.trim(t)}catch(t){if("SyntaxError"!==t.name)throw t}return(0,JSON.stringify)(t)}(t)):t}],transformResponse:[function(t){const e=this.transitional||et.transitional,i=e&&e.forcedJSONParsing,o="json"===this.responseType;if(t&&P.isString(t)&&(i&&!this.responseType||o)){const i=!(e&&e.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(t){if(i){if("SyntaxError"===t.name)throw z.from(t,z.ERR_BAD_RESPONSE,this,null,this.response);throw t}}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:J.classes.FormData,Blob:J.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};P.forEach(["delete","get","head"],(function(t){et.headers[t]={}})),P.forEach(["post","put","patch"],(function(t){et.headers[t]=P.merge(tt)}));var it=et;const ot=P.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),nt=Symbol("internals");function rt(t){return t&&String(t).trim().toLowerCase()}function st(t){return!1===t||null==t?t:P.isArray(t)?t.map(st):String(t)}function at(t,e,i,o,n){return P.isFunction(o)?o.call(this,e,i):(n&&(e=i),P.isString(e)?P.isString(o)?-1!==e.indexOf(o):P.isRegExp(o)?o.test(e):void 0:void 0)}class lt{constructor(t){t&&this.set(t)}set(t,e,i){const o=this;function n(t,e,i){const n=rt(e);if(!n)throw new Error("header name must be a non-empty string");const r=P.findKey(o,n);(!r||void 0===o[r]||!0===i||void 0===i&&!1!==o[r])&&(o[r||e]=st(t))}const r=(t,e)=>P.forEach(t,((t,i)=>n(t,i,e)));return P.isPlainObject(t)||t instanceof this.constructor?r(t,e):P.isString(t)&&(t=t.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim())?r((t=>{const e={};let i,o,n;return t&&t.split("\n").forEach((function(t){n=t.indexOf(":"),i=t.substring(0,n).trim().toLowerCase(),o=t.substring(n+1).trim(),!i||e[i]&&ot[i]||("set-cookie"===i?e[i]?e[i].push(o):e[i]=[o]:e[i]=e[i]?e[i]+", "+o:o)})),e})(t),e):null!=t&&n(e,t,i),this}get(t,e){if(t=rt(t)){const i=P.findKey(this,t);if(i){const t=this[i];if(!e)return t;if(!0===e)return function(t){const e=Object.create(null),i=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let o;for(;o=i.exec(t);)e[o[1]]=o[2];return e}(t);if(P.isFunction(e))return e.call(this,t,i);if(P.isRegExp(e))return e.exec(t);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,e){if(t=rt(t)){const i=P.findKey(this,t);return!(!i||void 0===this[i]||e&&!at(0,this[i],i,e))}return!1}delete(t,e){const i=this;let o=!1;function n(t){if(t=rt(t)){const n=P.findKey(i,t);!n||e&&!at(0,i[n],n,e)||(delete i[n],o=!0)}}return P.isArray(t)?t.forEach(n):n(t),o}clear(t){const e=Object.keys(this);let i=e.length,o=!1;for(;i--;){const n=e[i];t&&!at(0,this[n],n,t,!0)||(delete this[n],o=!0)}return o}normalize(t){const e=this,i={};return P.forEach(this,((o,n)=>{const r=P.findKey(i,n);if(r)return e[r]=st(o),void delete e[n];const s=t?function(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((t,e,i)=>e.toUpperCase()+i))}(n):String(n).trim();s!==n&&delete e[n],e[s]=st(o),i[s]=!0})),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const e=Object.create(null);return P.forEach(this,((i,o)=>{null!=i&&!1!==i&&(e[o]=t&&P.isArray(i)?i.join(", "):i)})),e}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([t,e])=>t+": "+e)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...e){const i=new this(t);return e.forEach((t=>i.set(t))),i}static accessor(t){const e=(this[nt]=this[nt]={accessors:{}}).accessors,i=this.prototype;function o(t){const o=rt(t);e[o]||(function(t,e){const i=P.toCamelCase(" "+e);["get","set","has"].forEach((o=>{Object.defineProperty(t,o+i,{value:function(t,i,n){return this[o].call(this,e,t,i,n)},configurable:!0})}))}(i,t),e[o]=!0)}return P.isArray(t)?t.forEach(o):o(t),this}}lt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),P.freezeMethods(lt.prototype),P.freezeMethods(lt);var ct=lt;function dt(t,e){const i=this||it,o=e||i,n=ct.from(o.headers);let r=o.data;return P.forEach(t,(function(t){r=t.call(i,r,n.normalize(),e?e.status:void 0)})),n.normalize(),r}function ht(t){return!(!t||!t.__CANCEL__)}function ut(t,e,i){z.call(this,null==t?"canceled":t,z.ERR_CANCELED,e,i),this.name="CanceledError"}P.inherits(ut,z,{__CANCEL__:!0});var pt=J.isStandardBrowserEnv?{write:function(t,e,i,o,n,r){const s=[];s.push(t+"="+encodeURIComponent(e)),P.isNumber(i)&&s.push("expires="+new Date(i).toGMTString()),P.isString(o)&&s.push("path="+o),P.isString(n)&&s.push("domain="+n),!0===r&&s.push("secure"),document.cookie=s.join("; ")},read:function(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function ft(t,e){return t&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)?function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}(t,e):e}var gt=J.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),e=document.createElement("a");let i;function o(i){let o=i;return t&&(e.setAttribute("href",o),o=e.href),e.setAttribute("href",o),{href:e.href,protocol:e.protocol?e.protocol.replace(/:$/,""):"",host:e.host,search:e.search?e.search.replace(/^\?/,""):"",hash:e.hash?e.hash.replace(/^#/,""):"",hostname:e.hostname,port:e.port,pathname:"/"===e.pathname.charAt(0)?e.pathname:"/"+e.pathname}}return i=o(window.location.href),function(t){const e=P.isString(t)?o(t):t;return e.protocol===i.protocol&&e.host===i.host}}():function(){return!0};function mt(t,e){let i=0;const o=function(t,e){t=t||10;const i=new Array(t),o=new Array(t);let n,r=0,s=0;return e=void 0!==e?e:1e3,function(a){const l=Date.now(),c=o[s];n||(n=l),i[r]=a,o[r]=l;let d=s,h=0;for(;d!==r;)h+=i[d++],d%=t;if(r=(r+1)%t,r===s&&(s=(s+1)%t),l-n<e)return;const u=c&&l-c;return u?Math.round(1e3*h/u):void 0}}(50,250);return n=>{const r=n.loaded,s=n.lengthComputable?n.total:void 0,a=r-i,l=o(a);i=r;const c={loaded:r,total:s,progress:s?r/s:void 0,bytes:a,rate:l||void 0,estimated:l&&s&&r<=s?(s-r)/l:void 0,event:n};c[e?"download":"upload"]=!0,t(c)}}const vt={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(t){return new Promise((function(e,i){let o=t.data;const n=ct.from(t.headers).normalize(),r=t.responseType;let s;function a(){t.cancelToken&&t.cancelToken.unsubscribe(s),t.signal&&t.signal.removeEventListener("abort",s)}P.isFormData(o)&&(J.isStandardBrowserEnv||J.isStandardBrowserWebWorkerEnv)&&n.setContentType(!1);let l=new XMLHttpRequest;if(t.auth){const e=t.auth.username||"",i=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";n.set("Authorization","Basic "+btoa(e+":"+i))}const c=ft(t.baseURL,t.url);function d(){if(!l)return;const o=ct.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders());!function(t,e,i){const o=i.config.validateStatus;i.status&&o&&!o(i.status)?e(new z("Request failed with status code "+i.status,[z.ERR_BAD_REQUEST,z.ERR_BAD_RESPONSE][Math.floor(i.status/100)-4],i.config,i.request,i)):t(i)}((function(t){e(t),a()}),(function(t){i(t),a()}),{data:r&&"text"!==r&&"json"!==r?l.response:l.responseText,status:l.status,statusText:l.statusText,headers:o,config:t,request:l}),l=null}if(l.open(t.method.toUpperCase(),X(c,t.params,t.paramsSerializer),!0),l.timeout=t.timeout,"onloadend"in l?l.onloadend=d:l.onreadystatechange=function(){l&&4===l.readyState&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))&&setTimeout(d)},l.onabort=function(){l&&(i(new z("Request aborted",z.ECONNABORTED,t,l)),l=null)},l.onerror=function(){i(new z("Network Error",z.ERR_NETWORK,t,l)),l=null},l.ontimeout=function(){let e=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const o=t.transitional||Q;t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),i(new z(e,o.clarifyTimeoutError?z.ETIMEDOUT:z.ECONNABORTED,t,l)),l=null},J.isStandardBrowserEnv){const e=(t.withCredentials||gt(c))&&t.xsrfCookieName&&pt.read(t.xsrfCookieName);e&&n.set(t.xsrfHeaderName,e)}void 0===o&&n.setContentType(null),"setRequestHeader"in l&&P.forEach(n.toJSON(),(function(t,e){l.setRequestHeader(e,t)})),P.isUndefined(t.withCredentials)||(l.withCredentials=!!t.withCredentials),r&&"json"!==r&&(l.responseType=t.responseType),"function"==typeof t.onDownloadProgress&&l.addEventListener("progress",mt(t.onDownloadProgress,!0)),"function"==typeof t.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",mt(t.onUploadProgress)),(t.cancelToken||t.signal)&&(s=e=>{l&&(i(!e||e.type?new ut(null,t,l):e),l.abort(),l=null)},t.cancelToken&&t.cancelToken.subscribe(s),t.signal&&(t.signal.aborted?s():t.signal.addEventListener("abort",s)));const h=function(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}(c);h&&-1===J.protocols.indexOf(h)?i(new z("Unsupported protocol "+h+":",z.ERR_BAD_REQUEST,t)):l.send(o||null)}))}};P.forEach(vt,((t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch(t){}Object.defineProperty(t,"adapterName",{value:e})}}));function bt(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new ut(null,t)}function yt(t){return bt(t),t.headers=ct.from(t.headers),t.data=dt.call(t,t.transformRequest),-1!==["post","put","patch"].indexOf(t.method)&&t.headers.setContentType("application/x-www-form-urlencoded",!1),(t=>{t=P.isArray(t)?t:[t];const{length:e}=t;let i,o;for(let n=0;n<e&&(i=t[n],!(o=P.isString(i)?vt[i.toLowerCase()]:i));n++);if(!o){if(!1===o)throw new z(`Adapter ${i} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(P.hasOwnProp(vt,i)?`Adapter '${i}' is not available in the build`:`Unknown adapter '${i}'`)}if(!P.isFunction(o))throw new TypeError("adapter is not a function");return o})(t.adapter||it.adapter)(t).then((function(e){return bt(t),e.data=dt.call(t,t.transformResponse,e),e.headers=ct.from(e.headers),e}),(function(e){return ht(e)||(bt(t),e&&e.response&&(e.response.data=dt.call(t,t.transformResponse,e.response),e.response.headers=ct.from(e.response.headers))),Promise.reject(e)}))}const xt=t=>t instanceof ct?t.toJSON():t;function wt(t,e){e=e||{};const i={};function o(t,e,i){return P.isPlainObject(t)&&P.isPlainObject(e)?P.merge.call({caseless:i},t,e):P.isPlainObject(e)?P.merge({},e):P.isArray(e)?e.slice():e}function n(t,e,i){return P.isUndefined(e)?P.isUndefined(t)?void 0:o(void 0,t,i):o(t,e,i)}function r(t,e){if(!P.isUndefined(e))return o(void 0,e)}function s(t,e){return P.isUndefined(e)?P.isUndefined(t)?void 0:o(void 0,t):o(void 0,e)}function a(i,n,r){return r in e?o(i,n):r in t?o(void 0,i):void 0}const l={url:r,method:r,data:r,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(t,e)=>n(xt(t),xt(e),!0)};return P.forEach(Object.keys(t).concat(Object.keys(e)),(function(o){const r=l[o]||n,s=r(t[o],e[o],o);P.isUndefined(s)&&r!==a||(i[o]=s)})),i}const $t={};["object","boolean","number","function","string","symbol"].forEach(((t,e)=>{$t[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}}));const kt={};$t.transitional=function(t,e,i){function o(t,e){return"[Axios v1.3.5] Transitional option '"+t+"'"+e+(i?". "+i:"")}return(i,n,r)=>{if(!1===t)throw new z(o(n," has been removed"+(e?" in "+e:"")),z.ERR_DEPRECATED);return e&&!kt[n]&&(kt[n]=!0,console.warn(o(n," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(i,n,r)}};var Ct={assertOptions:function(t,e,i){if("object"!=typeof t)throw new z("options must be an object",z.ERR_BAD_OPTION_VALUE);const o=Object.keys(t);let n=o.length;for(;n-- >0;){const r=o[n],s=e[r];if(s){const e=t[r],i=void 0===e||s(e,r,t);if(!0!==i)throw new z("option "+r+" must be "+i,z.ERR_BAD_OPTION_VALUE)}else if(!0!==i)throw new z("Unknown option "+r,z.ERR_BAD_OPTION)}},validators:$t};const Ft=Ct.validators;class St{constructor(t){this.defaults=t,this.interceptors={request:new Y,response:new Y}}request(t,e){"string"==typeof t?(e=e||{}).url=t:e=t||{},e=wt(this.defaults,e);const{transitional:i,paramsSerializer:o,headers:n}=e;let r;void 0!==i&&Ct.assertOptions(i,{silentJSONParsing:Ft.transitional(Ft.boolean),forcedJSONParsing:Ft.transitional(Ft.boolean),clarifyTimeoutError:Ft.transitional(Ft.boolean)},!1),null!=o&&(P.isFunction(o)?e.paramsSerializer={serialize:o}:Ct.assertOptions(o,{encode:Ft.function,serialize:Ft.function},!0)),e.method=(e.method||this.defaults.method||"get").toLowerCase(),r=n&&P.merge(n.common,n[e.method]),r&&P.forEach(["delete","get","head","post","put","patch","common"],(t=>{delete n[t]})),e.headers=ct.concat(r,n);const s=[];let a=!0;this.interceptors.request.forEach((function(t){"function"==typeof t.runWhen&&!1===t.runWhen(e)||(a=a&&t.synchronous,s.unshift(t.fulfilled,t.rejected))}));const l=[];let c;this.interceptors.response.forEach((function(t){l.push(t.fulfilled,t.rejected)}));let d,h=0;if(!a){const t=[yt.bind(this),void 0];for(t.unshift.apply(t,s),t.push.apply(t,l),d=t.length,c=Promise.resolve(e);h<d;)c=c.then(t[h++],t[h++]);return c}d=s.length;let u=e;for(h=0;h<d;){const t=s[h++],e=s[h++];try{u=t(u)}catch(t){e.call(this,t);break}}try{c=yt.call(this,u)}catch(t){return Promise.reject(t)}for(h=0,d=l.length;h<d;)c=c.then(l[h++],l[h++]);return c}getUri(t){return X(ft((t=wt(this.defaults,t)).baseURL,t.url),t.params,t.paramsSerializer)}}P.forEach(["delete","get","head","options"],(function(t){St.prototype[t]=function(e,i){return this.request(wt(i||{},{method:t,url:e,data:(i||{}).data}))}})),P.forEach(["post","put","patch"],(function(t){function e(e){return function(i,o,n){return this.request(wt(n||{},{method:t,headers:e?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}St.prototype[t]=e(),St.prototype[t+"Form"]=e(!0)}));var It=St;class Tt{constructor(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");let e;this.promise=new Promise((function(t){e=t}));const i=this;this.promise.then((t=>{if(!i._listeners)return;let e=i._listeners.length;for(;e-- >0;)i._listeners[e](t);i._listeners=null})),this.promise.then=t=>{let e;const o=new Promise((t=>{i.subscribe(t),e=t})).then(t);return o.cancel=function(){i.unsubscribe(e)},o},t((function(t,o,n){i.reason||(i.reason=new ut(t,o,n),e(i.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){this.reason?t(this.reason):this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const e=this._listeners.indexOf(t);-1!==e&&this._listeners.splice(e,1)}static source(){let t;return{token:new Tt((function(e){t=e})),cancel:t}}}var Dt=Tt;const Rt={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Rt).forEach((([t,e])=>{Rt[e]=t}));var Ot=Rt;const Et=function t(e){const i=new It(e),n=o(It.prototype.request,i);return P.extend(n,It.prototype,i,{allOwnKeys:!0}),P.extend(n,i,null,{allOwnKeys:!0}),n.create=function(i){return t(wt(e,i))},n}(it);Et.Axios=It,Et.CanceledError=ut,Et.CancelToken=Dt,Et.isCancel=ht,Et.VERSION="1.3.5",Et.toFormData=_,Et.AxiosError=z,Et.Cancel=Et.CanceledError,Et.all=function(t){return Promise.all(t)},Et.spread=function(t){return function(e){return t.apply(null,e)}},Et.isAxiosError=function(t){return P.isObject(t)&&!0===t.isAxiosError},Et.mergeConfig=wt,Et.AxiosHeaders=ct,Et.formToJSON=t=>Z(P.isHTMLForm(t)?new FormData(t):t),Et.HttpStatusCode=Ot,Et.default=Et,t.exports=Et}},e={};function i(o){var n=e[o];if(void 0!==n)return n.exports;var r=e[o]={exports:{}};return t[o].call(r.exports,r,r.exports,i),r.exports}i.m=t,i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,{a:e}),e},i.d=function(t,e){for(var o in e)i.o(e,o)&&!i.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},function(){var t;i.g.importScripts&&(t=i.g.location+"");var e=i.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var o=e.getElementsByTagName("script");o.length&&(t=o[o.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=t}(),i.b=document.baseURI||self.location.href,i(14183),i(93823)}();
//# sourceMappingURL=taskpane.js.map