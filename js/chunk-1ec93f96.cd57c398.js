(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1ec93f96"],{1079:function(e,n,t){"use strict";var r=t("541c");n["a"]=r["a"]},"1bbb":function(e,n,t){"use strict";t.d(n,"a",(function(){return b}));var r=t("2b0e"),a=t("b42e"),i=t("c637"),o=t("a723"),c=t("cf75");function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var l=Object(c["d"])({fluid:Object(c["c"])(o["j"],!1),tag:Object(c["c"])(o["u"],"div")},i["B"]),b=r["default"].extend({name:i["B"],functional:!0,props:l,render:function(e,n){var t=n.props,r=n.data,i=n.children,o=t.fluid;return e(t.tag,Object(a["a"])(r,{class:s({container:!(o||""===o),"container-fluid":!0===o||""===o},"container-".concat(o),o&&!0!==o)}),i)}})},6976:function(e,n,t){"use strict";t.d(n,"a",(function(){return h}));var r=t("992e"),a=t("906c"),i=t("7b1e"),o=t("3c21"),c=t("d82f");function s(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function l(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,n,t){return n&&l(e.prototype,n),t&&l(e,t),e}var d="__bv__visibility_observer",u=function(){function e(n,t,r){s(this,e),this.el=n,this.callback=t.callback,this.margin=t.margin||0,this.once=t.once||!1,this.observer=null,this.visible=void 0,this.doneOnce=!1,this.createObserver(r)}return b(e,[{key:"createObserver",value:function(e){var n=this;if(this.observer&&this.stop(),!this.doneOnce&&Object(i["f"])(this.callback)){try{this.observer=new IntersectionObserver(this.handler.bind(this),{root:null,rootMargin:this.margin,threshold:0})}catch(t){return this.doneOnce=!0,this.observer=void 0,void this.callback(null)}e.context.$nextTick((function(){Object(a["B"])((function(){n.observer&&n.observer.observe(n.el)}))}))}}},{key:"handler",value:function(e){var n=e?e[0]:{},t=Boolean(n.isIntersecting||n.intersectionRatio>0);t!==this.visible&&(this.visible=t,this.callback(t),this.once&&this.visible&&(this.doneOnce=!0,this.stop()))}},{key:"stop",value:function(){this.observer&&this.observer.disconnect(),this.observer=null}}]),e}(),m=function(e){var n=e[d];n&&n.stop&&n.stop(),delete e[d]},p=function(e,n,t){var a=n.value,i=n.modifiers,o={margin:"0px",once:!1,callback:a};Object(c["h"])(i).forEach((function(e){r["h"].test(e)?o.margin="".concat(e,"px"):"once"===e.toLowerCase()&&(o.once=!0)})),m(e),e[d]=new u(e,o,t),e[d]._prevModifiers=Object(c["b"])(i)},g=function(e,n,t){var r=n.value,a=n.oldValue,i=n.modifiers;i=Object(c["b"])(i),!e||r===a&&e[d]&&Object(o["a"])(i,e[d]._prevModifiers)||p(e,{value:r,modifiers:i},t)},f=function(e){m(e)},h={bind:p,componentUpdated:g,unbind:f}},9535:function(e,n,t){e.exports=t.p+"img/banner-6.8e3bf2b9.jpg"},a15b:function(e,n,t){"use strict";t.d(n,"a",(function(){return w}));var r=t("b42e"),a=t("c637"),i=t("a723"),o=t("2326"),c=t("228e"),s=t("6c06"),l=t("b508"),b=t("d82f"),d=t("cf75"),u=t("fa73");function m(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?m(Object(t),!0).forEach((function(n){g(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function g(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var f=["start","end","center"],h=Object(l["a"])((function(e,n){return n=Object(u["h"])(Object(u["g"])(n)),n?Object(u["c"])(["row-cols",e,n].filter(s["a"]).join("-")):null})),v=Object(l["a"])((function(e){return Object(u["c"])(e.replace("cols",""))})),O=[],j=function(){var e=Object(c["b"])().reduce((function(e,n){return e[Object(d["g"])(n,"cols")]=Object(d["c"])(i["p"]),e}),Object(b["c"])(null));return O=Object(b["h"])(e),Object(d["d"])(Object(b["m"])(p(p({},e),{},{alignContent:Object(d["c"])(i["u"],null,(function(e){return Object(o["a"])(Object(o["b"])(f,"between","around","stretch"),e)})),alignH:Object(d["c"])(i["u"],null,(function(e){return Object(o["a"])(Object(o["b"])(f,"between","around"),e)})),alignV:Object(d["c"])(i["u"],null,(function(e){return Object(o["a"])(Object(o["b"])(f,"baseline","stretch"),e)})),noGutters:Object(d["c"])(i["g"],!1),tag:Object(d["c"])(i["u"],"div")})),a["Ob"])},w={name:a["Ob"],functional:!0,get props(){return delete this.props,this.props=j(),this.props},render:function(e,n){var t,a=n.props,i=n.data,o=n.children,c=a.alignV,s=a.alignH,l=a.alignContent,b=[];return O.forEach((function(e){var n=h(v(e),a[e]);n&&b.push(n)})),b.push((t={"no-gutters":a.noGutters},g(t,"align-items-".concat(c),c),g(t,"justify-content-".concat(s),s),g(t,"align-content-".concat(l),l),t)),e(a.tag,Object(r["a"])(i,{staticClass:"row",class:b}),o)}}},b28b:function(e,n,t){"use strict";t.d(n,"a",(function(){return k}));var r=t("b42e"),a=t("c637"),i=t("a723"),o=t("992e"),c=t("2326"),s=t("228e"),l=t("6c06"),b=t("7b1e"),d=t("b508"),u=t("d82f"),m=t("cf75"),p=t("fa73");function g(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?g(Object(t),!0).forEach((function(n){h(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function h(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var v=["auto","start","end","center","baseline","stretch"],O=function(e,n,t){var r=e;if(!Object(b["p"])(t)&&!1!==t)return n&&(r+="-".concat(n)),"col"!==e||""!==t&&!0!==t?(r+="-".concat(t),Object(p["c"])(r)):Object(p["c"])(r)},j=Object(d["a"])(O),w=Object(u["c"])(null),_=function(){var e=Object(s["b"])().filter(l["a"]),n=e.reduce((function(e,n){return e[n]=Object(m["c"])(i["i"]),e}),Object(u["c"])(null)),t=e.reduce((function(e,n){return e[Object(m["g"])(n,"offset")]=Object(m["c"])(i["p"]),e}),Object(u["c"])(null)),r=e.reduce((function(e,n){return e[Object(m["g"])(n,"order")]=Object(m["c"])(i["p"]),e}),Object(u["c"])(null));return w=Object(u["a"])(Object(u["c"])(null),{col:Object(u["h"])(n),offset:Object(u["h"])(t),order:Object(u["h"])(r)}),Object(m["d"])(Object(u["m"])(f(f(f(f({},n),t),r),{},{alignSelf:Object(m["c"])(i["u"],null,(function(e){return Object(c["a"])(v,e)})),col:Object(m["c"])(i["g"],!1),cols:Object(m["c"])(i["p"]),offset:Object(m["c"])(i["p"]),order:Object(m["c"])(i["p"]),tag:Object(m["c"])(i["u"],"div")})),a["y"])},k={name:a["y"],functional:!0,get props(){return delete this.props,this.props=_()},render:function(e,n){var t,a=n.props,i=n.data,c=n.children,s=a.cols,l=a.offset,b=a.order,d=a.alignSelf,u=[];for(var m in w)for(var p=w[m],g=0;g<p.length;g++){var f=j(m,p[g].replace(m,""),a[p[g]]);f&&u.push(f)}var v=u.some((function(e){return o["e"].test(e)}));return u.push((t={col:a.col||!v&&!s},h(t,"col-".concat(s),s),h(t,"offset-".concat(l),l),h(t,"order-".concat(b),b),h(t,"align-self-".concat(d),d),t)),e(a.tag,Object(r["a"])(i,{class:u}),c)}}},d6e4:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var r=t("2b0e"),a=t("b42e"),i=t("c637"),o=t("a723"),c=t("cf75"),s=Object(c["d"])({textTag:Object(c["c"])(o["u"],"p")},i["u"]),l=r["default"].extend({name:i["u"],functional:!0,props:s,render:function(e,n){var t=n.props,r=n.data,i=n.children;return e(t.textTag,Object(a["a"])(r,{staticClass:"card-text"}),i)}})},f4dd:function(e,n,t){e.exports=t.p+"img/banner-34.61156fc9.jpg"},fbe8:function(e,n,t){"use strict";t.r(n);var r,a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-row",[t("b-col",[t("images-basic"),t("images-responsive"),t("images-thumbnails"),t("images-rounded-corner"),t("images-alignment"),t("images-blank"),t("images-lazy")],1)],1)},i=[],o=t("a15b"),c=t("b28b"),s=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("b-card-code",{attrs:{title:"Images"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeBasic)+" ")]},proxy:!0}])},[r("b-card-text",[r("span",[e._v("Documentation and examples for opting images (via ")]),r("code",[e._v("<b-img>")]),r("span",[e._v(" component) into responsive behavior (so they never become larger than their parent elements), optionally adding lightweight styles to them — all via props. ")])]),r("b-img",{staticClass:"w-100",attrs:{src:t("9535"),fluid:"",alt:"Responsive image"}})],1)},l=[],b=t("1079"),d=t("d6e4"),u=t("4918"),m='\n<template>\n  <b-img src="https://picsum.photos/1024/400/?image=41" fluid alt="Responsive image" />\n</template>\n\n<script>\nimport { BImg } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BImg,\n  }\n}\n<\/script>\n',p='\n<template>\n  <div class="clearfix">\n    <b-img  left class="mb-1 mb-sm-0" height="120" :src="require(\'@/assets/images/banner/banner-34.jpg" alt="Left image\')"/>\n    <b-img right class="mb-1 mb-sm-0" height="120" :src="require(\'@/assets/images/banner/banner-34.jpg" alt="Right image\')"/>\n    <b-img center class="mb-1 mb-sm-0" height="120" :src="require(\'@/assets/images/banner/banner-34.jpg" alt="Center image\')"/>\n  </div>\n</template>\n\n<script>\nimport { BImg } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BImg,\n  }\n}\n<\/script>\n',g='\n<template>\n  <div>\n    <b-img\n      v-bind="mainProps"\n      rounded\n      alt="Transparent image"\n      class="d-inline-block mr-1 mb-1 border"\n    />\n    <b-img\n      v-bind="mainProps"\n      blank-color="#5A8DEE"\n      rounded\n      alt="HEX shorthand color image (#777)"\n      class="d-inline-block mr-1 mb-1"\n    />\n    <b-img\n      v-bind="mainProps"\n      blank-color="#475F7B"\n      rounded\n      alt="Named color image (red)"\n      class="d-inline-block mr-1 mb-1"\n    />\n\n    <b-img\n      v-bind="mainProps"\n      blank-color="#39DA8A"\n      rounded\n      alt="Named color image (black)"\n      class="d-inline-block mr-1 mb-1"\n    />\n    <b-img\n      v-bind="mainProps"\n      blank-color="#FF5B5C"\n      rounded\n      alt="HEX color image"\n      class="d-inline-block mr-1 mb-1"\n    />\n    <b-img\n      v-bind="mainProps"\n      blank-color="#FDAC41"\n      alt="RGBa color image"\n      rounded\n      class="d-inline-block mr-1 mb-1"\n    />\n    <b-img\n      v-bind="mainProps"\n      blank-color="#00CFDD"\n      rounded\n      alt="HEX shorthand color (#88f)"\n      class="d-inline-block mr-1 mb-1"\n    />\n  </div>\n</template>\n\n<script>\nimport { BImg } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BImg,\n  },\n  data: () => ({\n    mainProps: {\n      blank: true,\n      width: 75,\n      height: 75,\n      class: \'m1\',\n    },\n  }),\n}\n<\/script>\n',f='\n<template>\n  <div>\n    <h6>Small image with <code>fluid</code>:</h6>\n    <b-img :src="require(\'@/assets/images/water-drop-small.jpg" fluid alt="Fluid image\')" />\n\n    <h6 class="my-1">Small image with <code>fluid-grow</code>:</h6>\n    <b-img :src="require(\'@/assets/images/water-drop-small.jpg" fluid-grow alt="Fluid-grow image\')" />\n  </div>\n</template>\n\n<script>\nimport { BImg } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BImg,\n  },\n}\n<\/script>\n',h='\n<template>\n  <div>\n    <b-img\n      v-bind="mainProps"\n      rounded\n      alt="Rounded image"\n      class="d-inline-block mr-1 mb-1"\n    />\n    <b-img\n      v-bind="mainProps"\n      rounded="top"\n      alt="Top-rounded image"\n      class="d-inline-block mr-1 mb-1"\n    />\n    <b-img\n      v-bind="mainProps"\n      rounded="right"\n      alt="Right-rounded image"\n      class="d-inline-block mr-1 mb-1"\n    />\n    <b-img\n      v-bind="mainProps"\n      rounded="bottom"\n      alt="Bottom-rounded image"\n      class="d-inline-block mr-1 mb-1"\n    />\n    <b-img\n      v-bind="mainProps"\n      rounded="left"\n      alt="Left-rounded image"\n      class="d-inline-block mr-1 mb-1"\n    />\n    <b-img\n      v-bind="mainProps"\n      rounded="circle"\n      alt="Circle image"\n      class="d-inline-block mr-1 mb-1"\n    />\n    <b-img\n      v-bind="mainProps"\n      rounded="0"\n      alt="Not rounded image"\n      class="d-inline-block mr-1 mb-1"\n    />\n  </div>\n</template>\n\n<script>\nimport { BImg } from \'bootstrap-vue\'\n\nexport default {\n BImg, },\n  data: () => ({\n    mainProps: {\n      blank: true,\n      blankColor: \'#777\',\n      width: 75,\n      height: 75,\n      class: \'m1\',\n    },\n  }),\n}\n<\/script>\n',v='\n<template>\n  <b-container fluid class="p-1 bg-dark">\n    <b-row>\n      <b-col>\n        <b-img thumbnail fluid :src="require(\'@/assets/images/sky-high.jpg" alt="Image 1\')" />\n      </b-col>\n      <b-col>\n        <b-img thumbnail fluid :src="require(\'@/assets/images/light-house-thumb.jpg" alt="Image 2\')" />\n      </b-col>\n      <b-col>\n        <b-img thumbnail fluid :src="require(\'@/assets/images/border.jpg" alt="Image 3\')" />\n      </b-col>\n    </b-row>\n  </b-container>\n</template>\n\n<script>\nimport { BImg, BContainer, BRow, BCol } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BImg,\n    BContainer,\n    BRow,\n    BCol,\n  },\n}\n<\/script>\n',O="\n<template>\n  <div>\n    <b-img-lazy :src=\"require('@/assets/images/banner/banner-6.jpg\" fluid class=\"w-100')\"/>\n  </div>\n</template>\n\n<script>\nimport { BImgLazy } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BImgLazy,\n  },\n}\n<\/script>\n",j={components:{BCardCode:b["a"],BCardText:d["a"],BImg:u["a"]},data:function(){return{codeBasic:m}}},w=j,_=t("2877"),k=Object(_["a"])(w,s,l,!1,null,null,null),y=k.exports,C=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("b-card-code",{attrs:{title:"Responsive images"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeResponsive)+" ")]},proxy:!0}])},[r("b-card-text",[r("span",[e._v("Images in BootstrapVue can be made responsive with the ")]),r("code",[e._v("fluid")]),r("span",[e._v(" prop (which sets ")]),r("code",[e._v("max-width: 100%; height: auto;")]),r("span",[e._v(" via CSS classes) so that it scales with the parent element - up to the maximum native width of the image. ")])]),r("div",[r("h6",[e._v("Small image with "),r("code",[e._v("fluid")]),e._v(":")]),r("b-img",{attrs:{src:t("18ff"),fluid:"",alt:"Fluid image"}}),r("h6",{staticClass:"my-1"},[e._v(" Small image with "),r("code",[e._v("fluid-grow")]),e._v(": ")]),r("b-img",{attrs:{src:t("18ff"),"fluid-grow":"",alt:"Fluid-grow image"}})],1)],1)},B=[],P={components:{BCardCode:b["a"],BCardText:d["a"],BImg:u["a"]},data:function(){return{codeResponsive:f}}},x=P,S=Object(_["a"])(x,C,B,!1,null,null,null),I=S.exports,E=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("b-card-code",{attrs:{title:"Image thumbnails"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeThumbnails)+" ")]},proxy:!0}])},[r("b-card-text",[r("span",[e._v("You can use prop ")]),r("code",[e._v("thumbnail")]),r("span",[e._v("to give an image a rounded light border appearance.")])]),r("b-container",{staticClass:"p-1 bg-dark",attrs:{fluid:""}},[r("b-row",[r("b-col",[r("b-img",{attrs:{thumbnail:"",fluid:"",src:t("f7d6"),alt:"Image 1"}})],1),r("b-col",[r("b-img",{attrs:{thumbnail:"",fluid:"",src:t("3e88"),alt:"Image 2"}})],1),r("b-col",[r("b-img",{attrs:{thumbnail:"",fluid:"",src:t("e251"),alt:"Image 3"}})],1)],1)],1)],1)},D=[],R=t("1bbb"),T={components:{BCardCode:b["a"],BImg:u["a"],BContainer:R["a"],BCardText:d["a"],BRow:o["a"],BCol:c["a"]},data:function(){return{codeThumbnails:v}}},z=T,A=Object(_["a"])(z,E,D,!1,null,null,null),F=A.exports,H=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-card-code",{attrs:{title:"Rounded corners"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeRoundedCorner)+" ")]},proxy:!0}])},[t("b-card-text",{staticClass:"mb-0"},[t("span",[e._v("You can control which corners are rounded by setting the rounded prop to one of the following values:")]),t("code",[e._v("true,false,top,right,bottom,left,circle,0")])]),t("div",{staticClass:"demo-inline-spacing"},[t("b-img",e._b({staticClass:"d-inline-block",attrs:{rounded:"",alt:"Rounded image"}},"b-img",e.mainProps,!1)),t("b-img",e._b({staticClass:"d-inline-block",attrs:{rounded:"top",alt:"Top-rounded image"}},"b-img",e.mainProps,!1)),t("b-img",e._b({staticClass:"d-inline-block",attrs:{rounded:"right",alt:"Right-rounded image"}},"b-img",e.mainProps,!1)),t("b-img",e._b({staticClass:"d-inline-block",attrs:{rounded:"bottom",alt:"Bottom-rounded image"}},"b-img",e.mainProps,!1)),t("b-img",e._b({staticClass:"d-inline-block",attrs:{rounded:"left",alt:"Left-rounded image"}},"b-img",e.mainProps,!1)),t("b-img",e._b({staticClass:"d-inline-block",attrs:{rounded:"circle",alt:"Circle image"}},"b-img",e.mainProps,!1)),t("b-img",e._b({staticClass:"d-inline-block",attrs:{rounded:"0",alt:"Not rounded image"}},"b-img",e.mainProps,!1))],1)],1)},L=[],$={components:{BCardCode:b["a"],BImg:u["a"],BCardText:d["a"]},data:function(){return{mainProps:{blank:!0,blankColor:"#777",width:75,height:75,class:"m1"},codeRoundedCorner:h}}},q=$,N=Object(_["a"])(q,H,L,!1,null,null,null),X=N.exports,G=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("b-card-code",{attrs:{title:"Aligning images"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeAlignment)+" ")]},proxy:!0}])},[r("b-card-text",[r("span",[e._v("Align images with the boolean props ")]),r("code",[e._v("left")]),r("span",[e._v(" (floats left) ")]),r("code",[e._v("right")]),r("span",[e._v("(floats right), and ")]),r("code",[e._v("center")]),r("span",[e._v("(auto left+right margins). You can also center images by placing them in a container that has the class ")]),r("code",[e._v("text-center.")])]),r("div",{staticClass:"clearfix"},[r("b-img",{staticClass:"mb-1 mb-sm-0",attrs:{left:"",height:"120",src:t("f4dd"),alt:"Left image"}}),r("b-img",{staticClass:"mb-1 mb-sm-0",attrs:{right:"",height:"120",src:t("f4dd"),alt:"Right image"}}),r("b-img",{staticClass:"mb-1 mb-sm-0",attrs:{center:"",height:"120",src:t("f4dd"),alt:"Center image"}})],1)],1)},V=[],W={components:{BCardCode:b["a"],BCardText:d["a"],BImg:u["a"]},data:function(){return{codeAlignment:p}}},Y=W,M=Object(_["a"])(Y,G,V,!1,null,null,null),J=M.exports,U=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-card-code",{attrs:{title:"Blank (or solid color) images"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeBlank)+" ")]},proxy:!0}])},[t("b-card-text",{staticClass:"mb-0"},[t("code",[e._v("<b-img>")]),t("span",[e._v(" provides built-in support for generating blank images (transparent by default) of any width and height, by setting the ")]),t("code",[e._v("blank")]),t("span",[e._v(" prop, and specifying ")]),t("code",[e._v("width")]),t("span",[e._v(" and ")]),t("code",[e._v("height")]),t("span",[e._v("values (in pixels). You can apply any of the other ")]),t("code",[e._v("<b-img>")]),t("span",[e._v(" props to change the style/behavior of the generated image.")])]),t("div",{staticClass:"demo-inline-spacing"},[t("b-img",e._b({staticClass:"d-inline-block border",attrs:{rounded:"",alt:"Transparent image"}},"b-img",e.mainProps,!1)),t("b-img",e._b({staticClass:"d-inline-block",attrs:{"blank-color":"#5A8DEE",rounded:"",alt:"HEX shorthand color image (#777)"}},"b-img",e.mainProps,!1)),t("b-img",e._b({staticClass:"d-inline-block",attrs:{"blank-color":"#82868b",rounded:"",alt:"Named color image (red)"}},"b-img",e.mainProps,!1)),t("b-img",e._b({staticClass:"d-inline-block",attrs:{"blank-color":"#39DA8A",rounded:"",alt:"Named color image (black)"}},"b-img",e.mainProps,!1)),t("b-img",e._b({staticClass:"d-inline-block",attrs:{"blank-color":"#FDAC41",alt:"RGBa color image",rounded:""}},"b-img",e.mainProps,!1)),t("b-img",e._b({staticClass:"d-inline-block",attrs:{"blank-color":"#FF5B5C",rounded:"",alt:"HEX color image"}},"b-img",e.mainProps,!1)),t("b-img",e._b({staticClass:"d-inline-block",attrs:{"blank-color":"#00CFDD",rounded:"",alt:"HEX shorthand color (#88f)"}},"b-img",e.mainProps,!1))],1)],1)},K=[],Q={components:{BCardCode:b["a"],BCardText:d["a"],BImg:u["a"]},data:function(){return{mainProps:{blank:!0,width:75,height:75,class:"m1"},codeBlank:g}}},Z=Q,ee=Object(_["a"])(Z,U,K,!1,null,null,null),ne=ee.exports,te=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("b-card-code",{attrs:{title:"Lazy loaded images"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeLazy)+" ")]},proxy:!0}])},[r("b-card-text",[r("span",[e._v("Use our complementary ")]),r("code",[e._v("<b-img-lazy>")]),r("span",[e._v(" image component (based on ")]),r("code",[e._v("<b-img>")]),r("span",[e._v(") to lazy load images as they are scrolled into view (or within ")]),r("code",[e._v("offset")]),r("span",[e._v(" pixels of the viewport).")])]),r("b-img-lazy",{staticClass:"w-100",attrs:{src:t("9535"),fluid:""}})],1)},re=[],ae=t("2b0e"),ie=t("c637"),oe=t("e863"),ce=t("0056"),se=t("a723"),le=t("2326"),be=t("6c06"),de=t("3a58"),ue=t("d82f"),me=t("cf75"),pe=t("6976");function ge(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function fe(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ge(Object(t),!0).forEach((function(n){he(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ge(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function he(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var ve="show",Oe=ce["gb"]+ve,je=Object(ue["j"])(u["b"],["blank"]),we=Object(me["d"])(fe(fe({},je),{},he({blankColor:Object(me["c"])(se["u"],"transparent"),blankHeight:Object(me["c"])(se["p"]),blankSrc:Object(me["c"])(se["u"],null),blankWidth:Object(me["c"])(se["p"]),offset:Object(me["c"])(se["p"],360)},ve,Object(me["c"])(se["g"],!1))),ie["lb"]),_e=ae["default"].extend({name:ie["lb"],directives:{"b-visible":pe["a"]},props:we,data:function(){return{isShown:this[ve]}},computed:{computedSrc:function(){var e=this.blankSrc;return!e||this.isShown?this.src:e},computedBlank:function(){return!(this.isShown||this.blankSrc)},computedWidth:function(){var e=this.width;return this.isShown?e:this.blankWidth||e},computedHeight:function(){var e=this.height;return this.isShown?e:this.blankHeight||e},computedSrcset:function(){var e=Object(le["b"])(this.srcset).filter(be["a"]).join(",");return!this.blankSrc||this.isShown?e:null},computedSizes:function(){var e=Object(le["b"])(this.sizes).filter(be["a"]).join(",");return!this.blankSrc||this.isShown?e:null}},watch:(r={},he(r,ve,(function(e,n){if(e!==n){var t=!oe["b"]||e;this.isShown=t,t!==e&&this.$nextTick(this.updateShowProp)}})),he(r,"isShown",(function(e,n){e!==n&&this.updateShowProp()})),r),mounted:function(){this.isShown=!oe["b"]||this[ve]},methods:{updateShowProp:function(){this.$emit(Oe,this.isShown)},doShow:function(e){!e&&null!==e||this.isShown||(this.isShown=!0)}},render:function(e){var n,t=[];this.isShown||t.push({name:"b-visible",value:this.doShow,modifiers:(n={},he(n,"".concat(Object(de["c"])(this.offset,0)),!0),he(n,"once",!0),n)});return e(u["a"],{directives:t,props:fe({src:this.computedSrc,blank:this.computedBlank,width:this.computedWidth,height:this.computedHeight,srcset:this.computedSrcset||null,sizes:this.computedSizes||null},Object(me["e"])(je,this.$props))})}}),ke={components:{BCardCode:b["a"],BImgLazy:_e,BCardText:d["a"]},data:function(){return{codeLazy:O}}},ye=ke,Ce=Object(_["a"])(ye,te,re,!1,null,null,null),Be=Ce.exports,Pe={components:{BRow:o["a"],BCol:c["a"],ImagesBasic:y,ImagesResponsive:I,ImagesThumbnails:F,ImagesRoundedCorner:X,ImagesAlignment:J,ImagesBlank:ne,ImagesLazy:Be}},xe=Pe,Se=Object(_["a"])(xe,a,i,!1,null,null,null);n["default"]=Se.exports}}]);
//# sourceMappingURL=chunk-1ec93f96.cd57c398.js.map