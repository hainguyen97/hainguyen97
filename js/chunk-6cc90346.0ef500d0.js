(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6cc90346"],{"06d9":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var o=n("2b0e"),i=o["default"].extend({computed:{selectionStart:{cache:!1,get:function(){return this.$refs.input.selectionStart},set:function(t){this.$refs.input.selectionStart=t}},selectionEnd:{cache:!1,get:function(){return this.$refs.input.selectionEnd},set:function(t){this.$refs.input.selectionEnd=t}},selectionDirection:{cache:!1,get:function(){return this.$refs.input.selectionDirection},set:function(t){this.$refs.input.selectionDirection=t}}},methods:{select:function(){var t;(t=this.$refs.input).select.apply(t,arguments)},setSelectionRange:function(){var t;(t=this.$refs.input).setSelectionRange.apply(t,arguments)},setRangeText:function(){var t;(t=this.$refs.input).setRangeText.apply(t,arguments)}}})},"0759":function(t,e,n){"use strict";n.d(e,"a",(function(){return O}));var o=n("2b0e"),i=n("b42e"),r=n("c637"),c=n("a723"),a=n("992e"),s=n("d82f"),u=n("cf75"),l=n("fa73"),p=n("7386"),d=n("aa0d");function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(Object(n),!0).forEach((function(e){h(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function h(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var m=function t(e,n){if(!e)return null;var o=(e.$options||{}).components,i=o[n];return i||t(e.$parent,n)},v=Object(u["d"])(Object(s["m"])(f(f({},Object(s["j"])(d["b"],["content","stacked"])),{},{icon:Object(u["c"])(c["u"]),stacked:Object(u["c"])(c["g"],!1)})),r["ib"]),O=o["default"].extend({name:r["ib"],functional:!0,props:v,render:function(t,e){var n=e.data,o=e.props,r=e.parent,c=Object(l["e"])(Object(l["h"])(o.icon||"")).replace(a["p"],"");return t(c&&m(r,"BIcon".concat(c))||p["a"],Object(i["a"])(n,{props:f(f({},o),{},{icon:null})}))}})},"1f1e":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var o=n("2b0e"),i=o["default"].extend({computed:{validity:{cache:!1,get:function(){return this.$refs.input.validity}},validationMessage:{cache:!1,get:function(){return this.$refs.input.validationMessage}},willValidate:{cache:!1,get:function(){return this.$refs.input.willValidate}}},methods:{setCustomValidity:function(){var t;return(t=this.$refs.input).setCustomValidity.apply(t,arguments)},checkValidity:function(){var t;return(t=this.$refs.input).checkValidity.apply(t,arguments)},reportValidity:function(){var t;return(t=this.$refs.input).reportValidity.apply(t,arguments)}}})},"223c":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"toastification"},[n("div",{staticClass:"d-flex align-items-start"},[n("b-avatar",{staticClass:"mr-75 flex-shrink-0",attrs:{variant:t.variant,size:"1.8rem"}},[n("feather-icon",{attrs:{icon:t.icon,size:"15"}})],1),n("div",{staticClass:"d-flex flex-grow-1"},[n("div",[t.title?n("h5",{staticClass:"mb-0 font-weight-bolder toastification-title",class:"text-"+t.variant,domProps:{textContent:t._s(t.title)}}):t._e(),t.text?n("small",{staticClass:"d-inline-block text-body",domProps:{textContent:t._s(t.text)}}):t._e()]),n("span",{staticClass:"cursor-pointer toastification-close-icon ml-auto ",on:{click:function(e){return t.$emit("close-toast")}}},[t.hideClose?t._e():n("feather-icon",{staticClass:"text-body",attrs:{icon:"XIcon"}})],1)])],1)])},i=[],r=n("e8a3"),c={components:{BAvatar:r["a"]},props:{variant:{type:String,default:"primary"},icon:{type:String,default:null},title:{type:String,default:null},text:{type:String,default:null},hideClose:{type:Boolean,default:!1}}},a=c,s=(n("b549"),n("2877")),u=Object(s["a"])(a,o,i,!1,null,"55dd3057",null);e["a"]=u.exports},3214:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("clipboard-with-directive"),n("clipboard-without-directive")],1)},i=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card-code",{attrs:{title:"Using Directive"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeDirective)+" ")]},proxy:!0}])},[n("b-card-text",[t._v("Use directive on button to copy text")]),n("div",{staticClass:"d-flex"},[n("b-form-group",{staticClass:"mb-0 mr-1"},[n("b-form-input",{model:{value:t.message,callback:function(e){t.message=e},expression:"message"}})],1),n("b-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.message,expression:"message",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onError,expression:"onError",arg:"error"},{name:"ripple",rawName:"v-ripple.400",value:"rgba(186, 191, 199, 0.15)",expression:"'rgba(186, 191, 199, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"primary"}},[t._v(" Copy! ")])],1)],1)},c=[],a=n("541c"),s=n("4797"),u=n("8226"),l=n("1947"),p=n("d6e4"),d=n("223c"),b=n("e009"),f="\n<template>\n  <div class=\"d-flex\">\n\n    \x3c!-- form input --\x3e\n    <b-form-group class=\"mb-0 mr-1\">\n      <b-form-input\n        v-model=\"message\"\n      />\n    </b-form-group>\n\n    \x3c!-- button --\x3e\n    <b-button\n      v-clipboard:copy=\"message\"\n      v-clipboard:success=\"onCopy\"\n      v-clipboard:error=\"onError\"\n      v-ripple.400=\"'rgba(186, 191, 199, 0.15)'\"\n      variant=\"primary\"\n    >\n      Copy!\n    </b-button>\n  </div>\n</template>\n\n<script>\nimport { BFormInput, BFormGroup, BButton } from 'bootstrap-vue'\nimport ToastificationContent from '@core/components/toastification/ToastificationContent.vue'\nimport Ripple from 'vue-ripple-directive'\n\nexport default {\n  components: {\n    BFormInput,\n    BFormGroup,\n    BButton,\n    // eslint-disable-next-line vue/no-unused-components\n    ToastificationContent,\n  },\n  directives: {\n    Ripple,\n  },\n  data() {\n    return {\n      message: 'Copy Me!',\n    }\n  },\n  methods: {\n    onCopy() {\n      this.$toast({\n        component: ToastificationContent,\n        props: {\n          title: 'Text copied',\n          icon: 'BellIcon',\n        },\n      })\n    },\n    onError() {\n      this.$toast({\n        component: ToastificationContent,\n        props: {\n          title: 'Failed to copy texts!',\n          icon: 'BellIcon',\n        },\n      })\n    },\n  },\n}\n<\/script>\n",h="\n<template>\n  <div class=\"d-flex\">\n\n    \x3c!-- input --\x3e\n    <b-form-group class=\"mb-0 mr-1\">\n      <b-form-input\n        v-model=\"message1\"\n      />\n    </b-form-group>\n\n    \x3c!-- button --\x3e\n    <b-button\n      v-ripple.400=\"'rgba(186, 191, 199, 0.15)'\"\n      variant=\"primary\"\n      @click=\"doCopy\"\n    >\n      Copy!\n    </b-button>\n  </div>\n</template>\n\n<script>\nimport {BFormInput, BFormGroup, BButton, BCardText} from 'bootstrap-vue'\nimport ToastificationContent from '@core/components/toastification/ToastificationContent.vue'\nimport Ripple from 'vue-ripple-directive'\n\nexport default {\n  components: {\n    BFormInput,\n    BFormGroup,\n    BButton,\n    BCardText,\n    // eslint-disable-next-line vue/no-unused-components\n    ToastificationContent,\n  },\n  directives: {\n    Ripple,\n  },\n  data() {\n    return {\n      message1: 'Copy Me Without Directive',\n    }\n  },\n  methods: {\n    doCopy() {\n      this.$copyText(this.message1).then(() => {\n        this.$toast({\n          component: ToastificationContent,\n          props: {\n            title: 'Text copied',\n            icon: 'BellIcon',\n          },\n        })\n      }, e => {\n        this.$toast({\n          component: ToastificationContent,\n          props: {\n            title: 'Can not copy!',\n            icon: 'BellIcon',\n          },\n        })\n      })\n    },\n  },\n}\n<\/script>\n",m={components:{BCardCode:a["a"],BFormInput:s["a"],BFormGroup:u["a"],BButton:l["a"],BCardText:p["a"],ToastificationContent:d["a"]},directives:{Ripple:b["a"]},data:function(){return{message:"Copy Me!",codeDirective:f}},methods:{onCopy:function(){this.$toast({component:d["a"],props:{title:"Text copied",icon:"BellIcon"}})},onError:function(){this.$toast({component:d["a"],props:{title:"Failed to copy texts!",icon:"BellIcon"}})}}},v=m,O=n("2877"),g=Object(O["a"])(v,r,c,!1,null,null,null),j=g.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card-code",{attrs:{title:"Without directive"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeWithoutDirective)+" ")]},proxy:!0}])},[n("b-card-text",[n("span",[t._v("You can copy text without a specific button. Use ")]),n("code",[t._v("$copyText")]),n("span",[t._v(" to copy text when event got fired.")])]),n("div",{staticClass:"d-flex"},[n("b-form-group",{staticClass:"mb-0 mr-1"},[n("b-form-input",{model:{value:t.message1,callback:function(e){t.message1=e},expression:"message1"}})],1),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(186, 191, 199, 0.15)",expression:"'rgba(186, 191, 199, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"primary"},on:{click:t.doCopy}},[t._v(" Copy! ")])],1)],1)},x=[],C={components:{BCardCode:a["a"],BFormInput:s["a"],BFormGroup:u["a"],BButton:l["a"],BCardText:p["a"],ToastificationContent:d["a"]},directives:{Ripple:b["a"]},data:function(){return{message1:"Copy Me Without Directive",codeWithoutDirective:h}},methods:{doCopy:function(){var t=this;this.$copyText(this.message1).then((function(){t.$toast({component:d["a"],props:{title:"Text copied",icon:"BellIcon"}})}),(function(){t.$toast({component:d["a"],props:{title:"Can not copy!",icon:"BellIcon"}})}))}}},w=C,$=Object(O["a"])(w,y,x,!1,null,null,null),S=$.exports,B={components:{ClipboardWithDirective:j,ClipboardWithoutDirective:S}},T=B,D=Object(O["a"])(T,o,i,!1,null,null,null);e["default"]=D.exports},"40fc":function(t,e,n){"use strict";n.d(e,"b",(function(){return x})),n.d(e,"a",(function(){return C}));var o=n("2b0e"),i=n("0056"),r=n("a723"),c=n("906c"),a=n("6b77"),s=n("a8c8"),u=n("58f2"),l=n("3a58"),p=n("d82f"),d=n("cf75"),b=n("fa73");function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){m(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var v=Object(u["a"])("value",{type:r["p"],defaultValue:"",event:i["bb"]}),O=v.mixin,g=v.props,j=v.prop,y=v.event,x=Object(d["d"])(Object(p["m"])(h(h({},g),{},{ariaInvalid:Object(d["c"])(r["j"],!1),autocomplete:Object(d["c"])(r["u"]),debounce:Object(d["c"])(r["p"],0),formatter:Object(d["c"])(r["l"]),lazy:Object(d["c"])(r["g"],!1),lazyFormatter:Object(d["c"])(r["g"],!1),number:Object(d["c"])(r["g"],!1),placeholder:Object(d["c"])(r["u"]),plaintext:Object(d["c"])(r["g"],!1),readonly:Object(d["c"])(r["g"],!1),trim:Object(d["c"])(r["g"],!1)})),"formTextControls"),C=o["default"].extend({mixins:[O],props:x,data:function(){var t=this[j];return{localValue:Object(b["g"])(t),vModelValue:this.modifyValue(t)}},computed:{computedClass:function(){var t=this.plaintext,e=this.type,n="range"===e,o="color"===e;return[{"custom-range":n,"form-control-plaintext":t&&!n&&!o,"form-control":o||!t&&!n},this.sizeFormClass,this.stateClass]},computedDebounce:function(){return Object(s["d"])(Object(l["c"])(this.debounce,0),0)},hasFormatter:function(){return Object(d["b"])(this.formatter)}},watch:m({},j,(function(t){var e=Object(b["g"])(t),n=this.modifyValue(t);e===this.localValue&&n===this.vModelValue||(this.clearDebounce(),this.localValue=e,this.vModelValue=n)})),created:function(){this.$_inputDebounceTimer=null},mounted:function(){this.$on(i["eb"],this.clearDebounce)},beforeDestroy:function(){this.clearDebounce()},methods:{clearDebounce:function(){clearTimeout(this.$_inputDebounceTimer),this.$_inputDebounceTimer=null},formatValue:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return t=Object(b["g"])(t),!this.hasFormatter||this.lazyFormatter&&!n||(t=this.formatter(t,e)),t},modifyValue:function(t){return t=Object(b["g"])(t),this.trim&&(t=t.trim()),this.number&&(t=Object(l["b"])(t,t)),t},updateValue:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=this.lazy;if(!o||n){this.clearDebounce();var i=function(){if(t=e.modifyValue(t),t!==e.vModelValue)e.vModelValue=t,e.$emit(y,t);else if(e.hasFormatter){var n=e.$refs.input;n&&t!==n.value&&(n.value=t)}},r=this.computedDebounce;r>0&&!o&&!n?this.$_inputDebounceTimer=setTimeout(i,r):i()}},onInput:function(t){if(!t.target.composing){var e=t.target.value,n=this.formatValue(e,t);!1===n||t.defaultPrevented?Object(a["f"])(t,{propagation:!1}):(this.localValue=n,this.updateValue(n),this.$emit(i["y"],n))}},onChange:function(t){var e=t.target.value,n=this.formatValue(e,t);!1===n||t.defaultPrevented?Object(a["f"])(t,{propagation:!1}):(this.localValue=n,this.updateValue(n,!0),this.$emit(i["d"],n))},onBlur:function(t){var e=t.target.value,n=this.formatValue(e,t,!0);!1!==n&&(this.localValue=Object(b["g"])(this.modifyValue(n)),this.updateValue(n,!0)),this.$emit(i["b"],t)},focus:function(){this.disabled||Object(c["d"])(this.$el)},blur:function(){this.disabled||Object(c["c"])(this.$el)}}})},4797:function(t,e,n){"use strict";n.d(e,"a",(function(){return w}));var o=n("2b0e"),i=n("c637"),r=n("a723"),c=n("2326"),a=n("906c"),s=n("6b77"),u=n("d82f"),l=n("cf75"),p=n("dde7"),d=n("06d9"),b=n("ad47"),f=n("d520"),h=n("40fc"),m=n("1f1e"),v=n("90ef"),O=n("bc9a");function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function j(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(Object(n),!0).forEach((function(e){y(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function y(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var x=["text","password","email","number","url","tel","search","range","color","date","time","datetime","datetime-local","month","week"],C=Object(l["d"])(Object(u["m"])(j(j(j(j(j(j({},v["b"]),p["b"]),b["b"]),f["b"]),h["b"]),{},{list:Object(l["c"])(r["u"]),max:Object(l["c"])(r["p"]),min:Object(l["c"])(r["p"]),noWheel:Object(l["c"])(r["g"],!1),step:Object(l["c"])(r["p"]),type:Object(l["c"])(r["u"],"text",(function(t){return Object(c["a"])(x,t)}))})),i["R"]),w=o["default"].extend({name:i["R"],mixins:[O["a"],v["a"],p["a"],b["a"],f["a"],h["a"],d["a"],m["a"]],props:C,computed:{localType:function(){var t=this.type;return Object(c["a"])(x,t)?t:"text"},computedAttrs:function(){var t=this.localType,e=this.name,n=this.form,o=this.disabled,i=this.placeholder,r=this.required,c=this.min,a=this.max,s=this.step;return{id:this.safeId(),name:e,form:n,type:t,disabled:o,placeholder:i,required:r,autocomplete:this.autocomplete||null,readonly:this.readonly||this.plaintext,min:c,max:a,step:s,list:"password"!==t?this.list:null,"aria-required":r?"true":null,"aria-invalid":this.computedAriaInvalid}},computedListeners:function(){return j(j({},this.bvListeners),{},{input:this.onInput,change:this.onChange,blur:this.onBlur})}},watch:{noWheel:function(t){this.setWheelStopper(t)}},mounted:function(){this.setWheelStopper(this.noWheel)},deactivated:function(){this.setWheelStopper(!1)},activated:function(){this.setWheelStopper(this.noWheel)},beforeDestroy:function(){this.setWheelStopper(!1)},methods:{setWheelStopper:function(t){var e=this.$el;Object(s["c"])(t,e,"focus",this.onWheelFocus),Object(s["c"])(t,e,"blur",this.onWheelBlur),t||Object(s["a"])(document,"wheel",this.stopWheel)},onWheelFocus:function(){Object(s["b"])(document,"wheel",this.stopWheel)},onWheelBlur:function(){Object(s["a"])(document,"wheel",this.stopWheel)},stopWheel:function(t){Object(s["f"])(t,{propagation:!1}),Object(a["c"])(this.$el)}},render:function(t){return t("input",{class:this.computedClass,attrs:this.computedAttrs,domProps:{value:this.localValue},on:this.computedListeners,ref:"input"})}})},"8d81":function(t,e,n){},ad47:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return a}));var o=n("2b0e"),i=n("a723"),r=n("cf75"),c=Object(r["d"])({size:Object(r["c"])(i["u"])},"formControls"),a=o["default"].extend({props:c,computed:{sizeFormClass:function(){return[this.size?"form-control-".concat(this.size):null]}}})},b549:function(t,e,n){"use strict";n("8d81")},d6e4:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var o=n("2b0e"),i=n("b42e"),r=n("c637"),c=n("a723"),a=n("cf75"),s=Object(a["d"])({textTag:Object(a["c"])(c["u"],"p")},r["u"]),u=o["default"].extend({name:r["u"],functional:!0,props:s,render:function(t,e){var n=e.props,o=e.data,r=e.children;return t(n.textTag,Object(i["a"])(o,{staticClass:"card-text"}),r)}})},dde7:function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return u}));var o=n("2b0e"),i=n("a723"),r=n("906c"),c=n("cf75"),a="input, textarea, select",s=Object(c["d"])({autofocus:Object(c["c"])(i["g"],!1),disabled:Object(c["c"])(i["g"],!1),form:Object(c["c"])(i["u"]),id:Object(c["c"])(i["u"]),name:Object(c["c"])(i["u"]),required:Object(c["c"])(i["g"],!1)},"formControls"),u=o["default"].extend({props:s,mounted:function(){this.handleAutofocus()},activated:function(){this.handleAutofocus()},methods:{handleAutofocus:function(){var t=this;this.$nextTick((function(){Object(r["B"])((function(){var e=t.$el;t.autofocus&&Object(r["u"])(e)&&(Object(r["v"])(e,a)||(e=Object(r["C"])(a,e)),Object(r["d"])(e))}))}))}}})},e8a3:function(t,e,n){"use strict";n.d(e,"b",(function(){return $})),n.d(e,"a",(function(){return T}));var o=n("2b0e"),i=n("c637"),r=n("0056"),c=n("a723"),a=n("9b76"),s=n("7b1e"),u=n("3a58"),l=n("d82f"),p=n("cf75"),d=n("4a38"),b=n("8c18"),f=n("0759"),h=n("7386"),m=n("1947"),v=n("aa59");function O(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?O(Object(n),!0).forEach((function(e){j(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function j(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var y="b-avatar",x=["sm",null,"lg"],C=.4,w=.7*C,$=function(t){return t=Object(s["n"])(t)&&Object(s["i"])(t)?Object(u["b"])(t,0):t,Object(s["h"])(t)?"".concat(t,"px"):t||null},S=Object(l["j"])(v["b"],["active","event","routerTag"]),B=Object(p["d"])(Object(l["m"])(g(g({},S),{},{alt:Object(p["c"])(c["u"],"avatar"),ariaLabel:Object(p["c"])(c["u"]),badge:Object(p["c"])(c["j"],!1),badgeLeft:Object(p["c"])(c["g"],!1),badgeOffset:Object(p["c"])(c["u"]),badgeTop:Object(p["c"])(c["g"],!1),badgeVariant:Object(p["c"])(c["u"],"primary"),button:Object(p["c"])(c["g"],!1),buttonType:Object(p["c"])(c["u"],"button"),icon:Object(p["c"])(c["u"]),rounded:Object(p["c"])(c["j"],!1),size:Object(p["c"])(c["p"]),square:Object(p["c"])(c["g"],!1),src:Object(p["c"])(c["u"]),text:Object(p["c"])(c["u"]),variant:Object(p["c"])(c["u"],"secondary")})),i["c"]),T=o["default"].extend({name:i["c"],mixins:[b["a"]],inject:{bvAvatarGroup:{default:null}},props:B,data:function(){return{localSrc:this.src||null}},computed:{computedSize:function(){var t=this.bvAvatarGroup;return $(t?t.size:this.size)},computedVariant:function(){var t=this.bvAvatarGroup;return t&&t.variant?t.variant:this.variant},computedRounded:function(){var t=this.bvAvatarGroup,e=!(!t||!t.square)||this.square,n=t&&t.rounded?t.rounded:this.rounded;return e?"0":""===n||(n||"circle")},fontStyle:function(){var t=this.computedSize,e=-1===x.indexOf(t)?"calc(".concat(t," * ").concat(C,")"):null;return e?{fontSize:e}:{}},marginStyle:function(){var t=this.computedSize,e=this.bvAvatarGroup,n=e?e.overlapScale:0,o=t&&n?"calc(".concat(t," * -").concat(n,")"):null;return o?{marginLeft:o,marginRight:o}:{}},badgeStyle:function(){var t=this.computedSize,e=this.badgeTop,n=this.badgeLeft,o=this.badgeOffset,i=o||"0px";return{fontSize:-1===x.indexOf(t)?"calc(".concat(t," * ").concat(w," )"):null,top:e?i:null,bottom:e?null:i,left:n?i:null,right:n?null:i}}},watch:{src:function(t,e){t!==e&&(this.localSrc=t||null)}},methods:{onImgError:function(t){this.localSrc=null,this.$emit(r["x"],t)},onClick:function(t){this.$emit(r["f"],t)}},render:function(t){var e,n=this.computedVariant,o=this.disabled,i=this.computedRounded,r=this.icon,c=this.localSrc,s=this.text,u=this.fontStyle,l=this.marginStyle,b=this.computedSize,O=this.button,C=this.buttonType,w=this.badge,$=this.badgeVariant,B=this.badgeStyle,T=!O&&Object(d["d"])(this),D=O?m["a"]:T?v["a"]:"span",P=this.alt,V=this.ariaLabel||null,_=null;this.hasNormalizedSlot()?_=t("span",{staticClass:"b-avatar-custom"},[this.normalizeSlot()]):c?(_=t("img",{style:n?{}:{width:"100%",height:"100%"},attrs:{src:c,alt:P},on:{error:this.onImgError}}),_=t("span",{staticClass:"b-avatar-img"},[_])):_=r?t(f["a"],{props:{icon:r},attrs:{"aria-hidden":"true",alt:P}}):s?t("span",{staticClass:"b-avatar-text",style:u},[t("span",s)]):t(h["m"],{attrs:{"aria-hidden":"true",alt:P}});var k=t(),z=this.hasNormalizedSlot(a["d"]);if(w||""===w||z){var W=!0===w?"":w;k=t("span",{staticClass:"b-avatar-badge",class:j({},"badge-".concat($),$),style:B},[z?this.normalizeSlot(a["d"]):W])}var F={staticClass:y,class:(e={},j(e,"".concat(y,"-").concat(b),b&&-1!==x.indexOf(b)),j(e,"badge-".concat(n),!O&&n),j(e,"rounded",!0===i),j(e,"rounded-".concat(i),i&&!0!==i),j(e,"disabled",o),e),style:g(g({},l),{},{width:b,height:b}),attrs:{"aria-label":V||null},props:O?{variant:n,disabled:o,type:C}:T?Object(p["e"])(S,this):{},on:O||T?{click:this.onClick}:{}};return t(D,F,[_,k])}})}}]);
//# sourceMappingURL=chunk-6cc90346.0ef500d0.js.map