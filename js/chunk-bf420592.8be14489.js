(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bf420592"],{"01e3":function(t,e,n){"use strict";n.d(e,"a",(function(){return b}));var a=n("2b0e"),r=n("b42e"),o=n("c637"),s=n("a723"),i=n("9b76"),c=n("365c"),l=n("cf75");function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var p=Object(l["d"])({label:Object(l["c"])(s["u"]),role:Object(l["c"])(s["u"],"status"),small:Object(l["c"])(s["g"],!1),tag:Object(l["c"])(s["u"],"span"),type:Object(l["c"])(s["u"],"border"),variant:Object(l["c"])(s["u"])},o["Qb"]),b=a["default"].extend({name:o["Qb"],functional:!0,props:p,render:function(t,e){var n,a=e.props,o=e.data,s=e.slots,l=e.scopedSlots,p=s(),b=l||{},d=Object(c["b"])(i["C"],{},b,p)||a.label;return d&&(d=t("span",{staticClass:"sr-only"},d)),t(a.tag,Object(r["a"])(o,{attrs:{role:d?a.role||"status":null,"aria-hidden":d?null:"true"},class:(n={},u(n,"spinner-".concat(a.type),a.type),u(n,"spinner-".concat(a.type,"-sm"),a.small),u(n,"text-".concat(a.variant),a.variant),n)}),[d||t()])}})},1079:function(t,e,n){"use strict";var a=n("541c");e["a"]=a["a"]},"2e40":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-row",[n("b-col",{attrs:{cols:"12"}},[n("toasts-basic"),n("toasts-translucent"),n("toasts-variants"),n("toasts-delay"),n("toasts-target"),n("toasts-links"),n("toasts-advance")],1)],1)},r=[],o=n("a15b"),s=n("b28b"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card-code",{attrs:{title:"Basic Toast"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeBasic)+" ")]},proxy:!0}])},[a("b-card-text",[a("span",[t._v("Push notifications to your visitors with a ")]),a("code",[t._v("<b-toast>")]),a("span",[t._v(" and ")]),a("code",[t._v("<b-toaster>,")]),a("span",[t._v(" lightweigt components which are easily customizable for generating alert messages.")])]),a("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v(" Show toast ")]),a("b-toast",{attrs:{id:"example-toast"},scopedSlots:t._u([{key:"toast-title",fn:function(){return[a("div",{staticClass:"d-flex flex-grow-1 align-items-center mr-1"},[a("b-img",{staticClass:"mr-1",attrs:{src:n("a4ef"),height:"18",width:"25",alt:"Toast image"}}),a("strong",{staticClass:"mr-auto"},[t._v("Vue Admin")]),a("small",{staticClass:"text-muted"},[t._v("11 mins ago")])],1)]},proxy:!0}])},[a("span",[t._v("Hello, world! This is a toast message. Hope you're doing well.. :)")])])],1)},c=[],l=n("1079"),u=n("1947"),p=n("d6e4"),b=n("59e4"),d=n("4918"),m=n("e009"),v="\n<template>\n  <div>\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"popToast\"\n    >\n      Show Toast with custom content\n    </b-button>\n  </div>\n</template>\n\n<script>\n// eslint-disable-next-line\nimport { BButton, BSpinner } from 'bootstrap-vue'\nimport Ripple from 'vue-ripple-directive'\n\nexport default {\n  components: {\n    BButton,\n    // eslint-disable-next-line\n    BSpinner,\n  },\n  directives: {\n    Ripple,\n  },\n  data: () => ({\n    count: 0,\n  }),\n  methods: {\n    popToast() {\n      // Use a shorter name for this.$createElement\n      const h = this.$createElement\n      // Increment the toast count\n      this.count += 1\n      // Create the message\n      const vNodesMsg = h('p', { class: ['text-center', 'mb-0'] }, [\n        h('b-spinner', { props: { type: 'grow', small: true } }),\n        ' Flashy ',\n        h('strong', 'toast'),\n        `message #${this.count}`,\n        h('b-spinner', { props: { type: 'grow', small: true } }),\n      ])\n      // Create the title\n      const vNodesTitle = h('div', { class: ['d-flex', 'flex-grow-1', 'align-items-baseline', 'mr-2'] }, [\n        h('strong', { class: 'mr-2' }, 'The Title'),\n        h('small', { class: 'ml-auto font-italics' }, '5 minutes ago'),\n      ])\n      // Pass the VNodes as an array for message and title\n      this.$bvToast.toast([vNodesMsg], {\n        title: [vNodesTitle],\n        solid: true,\n        variant: 'info',\n      })\n    },\n  },\n}\n<\/script>\n",f='\n<template>\n  <div>\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n      @click="$bvToast.show(\'example-toast5\')"\n    >\n      Delay\n    </b-button>\n\n    \x3c!-- toast --\x3e\n    <b-toast\n      id="example-toast5"\n      auto-hide-delay="10000"\n    >\n      <template #toast-title>\n        <div class="d-flex flex-grow-1 align-items-center mr-25">\n          <b-img\n            :src="require(\'@/assets/images/logo/logo.png\')"\n            class="rounded mr-2"\n            height="18"\n            width="25"\n            alt="Toast image"\n          />\n          <strong class="mr-auto">Vue Admin</strong>\n          <small class="text-muted">11 mins ago</small>\n        </div>\n      </template>\n      <span>Hello, world! This is a toast message.</span>\n    </b-toast>\n  </div>\n</template>\n\n<script>\nimport { BToast, BButton, BImg } from \'bootstrap-vue\'\nimport Ripple from \'vue-ripple-directive\'\n\nexport default {\n  components: {\n    BToast,\n    BButton,\n    BImg,\n  },\n  directives: {\n    Ripple,\n  },\n}\n<\/script>\n',g='\n<template>\n  <div>\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n      @click="$bvToast.show(\'example-toast\')"\n    >\n      Show toast\n    </b-button>\n\n    \x3c!-- toast --\x3e\n    <b-toast id="example-toast">\n      <template #toast-title>\n        <div class="d-flex flex-grow-1 align-items-center mr-1">\n          <b-img\n            :src="require(\'@/assets/images/logo/logo.png\')"\n            class="mr-1"\n            height="18"\n            width="25"\n            alt="Toast image"\n          />\n          <strong class="mr-auto">Vue Admin</strong>\n          <small class="text-muted">11 mins ago</small>\n        </div>\n      </template>\n      <span>Hello, world! This is a toast message. Hope you\'re doing well.. :)</span>\n    </b-toast>\n  </div>\n</template>\n\n<script>\nimport { BButton, BToast, BImg } from \'bootstrap-vue\'\nimport Ripple from \'vue-ripple-directive\'\n\nexport default {\n  components: {\n    BButton,\n    BToast,\n    BImg,\n  },\n  directives: {\n    Ripple,\n  },\n}\n<\/script>\n',h="\n<template>\n  <div>\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"toast()\"\n    >\n      Toast with link\n    </b-button>\n  </div>\n</template>\n\n<script>\nimport { BButton } from 'bootstrap-vue'\nimport Ripple from 'vue-ripple-directive'\n\nexport default {\n  components: {\n    BButton,\n  },\n  directives: {\n    Ripple,\n  },\n  methods: {\n    toast() {\n      this.$bvToast.toast('Toast with action link', {\n        href: '#foo',\n        title: 'Example',\n      })\n    },\n  },\n}\n<\/script>\n",y='\n<template>\n  <div class="demo-inline-spacing">\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n      @click="toast(\'b-toaster-top-right\')"\n    >\n      b-toaster-top-right\n    </b-button>\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n      @click="toast(\'b-toaster-top-left\')"\n    >\n      b-toaster-top-left\n    </b-button>\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n      @click="toast(\'b-toaster-top-center\')"\n    >\n      b-toaster-top-center\n    </b-button>\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n      @click="toast(\'b-toaster-top-full\')"\n    >\n      b-toaster-top-full\n    </b-button>\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n      @click="toast(\'b-toaster-bottom-right\', true)"\n    >\n      b-toaster-bottom-right\n    </b-button>\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n      @click="toast(\'b-toaster-bottom-left\', true)"\n    >\n      b-toaster-bottom-left\n    </b-button>\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n      @click="toast(\'b-toaster-bottom-center\', true)"\n    >\n      b-toaster-bottom-center\n    </b-button>\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n      @click="toast(\'b-toaster-bottom-full\', true)"\n    >\n      b-toaster-bottom-full\n    </b-button>\n  </div>\n</template>\n\n<script>\nimport { BButton } from \'bootstrap-vue\'\nimport Ripple from \'vue-ripple-directive\'\n\nexport default {\n  components: {\n    BButton,\n  },\n  data: () => ({\n    counter: 0,\n  }),\n  directives: {\n    Ripple,\n  },\n  methods: {\n    toast(toaster, append = false) {\n      this.counter += 1\n      this.$bvToast.toast(`Toast ${this.counter} body content` {\n        title: `Toaster ${toaster}`,\n        toaster,\n        solid: true,\n        appendToast: append,\n      })\n    },\n  },\n}\n<\/script>\n',x='\n<template>\n  <div class="translucent-wrap bg-primary rounded-bottom p-1">\n    <b-toast\n      id="example-toast3"\n      v-model="visible"\n      static\n      no-auto-hide\n    >\n      <template #toast-title>\n        <div class="d-flex flex-grow-1 align-items-center mr-1">\n          <b-img\n            :src="require(\'@/assets/images/logo/logo.png\')"\n            class="mr-1"\n            height="18"\n            width="25"\n            alt="Toast image"\n          />\n          <strong class="mr-auto">Vue Admin</strong>\n          <small class="text-muted">11 mins ago</small>\n        </div>\n      </template>\n      <span>Hello, world! This is a toast message.</span>\n    </b-toast>\n  </div>\n</template>\n\n<script>\nimport {\n  BToast, BImg,\n} from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BToast,\n    BImg,\n  },\n   data() {\n    return {\n      visible: true,\n    }\n  },\n}\n<\/script>\n\n<style lang="scss" scoped>\n.translucent-wrap {\n  height: 110px;\n  position: relative;\n}\n</style>\n',O='\n<template>\n  <div class="demo-inline-spacing">\n\n    \x3c!-- default --\x3e\n    <b-button\n      variant="gradient-primary"\n      @click="makeToast()"\n    >\n      Default\n    </b-button>\n\n    \x3c!-- primary --\x3e\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n      @click="makeToast(\'primary\')"\n    >\n      Primary\n    </b-button>\n\n    \x3c!-- secondary --\x3e\n    <b-button\n      v-ripple.400="\'rgba(186, 191, 199, 0.15)\'"\n      variant="outline-secondary"\n      @click="makeToast(\'secondary\')"\n    >\n      Secondary\n    </b-button>\n\n    \x3c!-- warning --\x3e\n    <b-button\n      v-ripple.400="\'rgba(255, 159, 67, 0.15)\'"\n      variant="outline-warning"\n      @click="makeToast(\'warning\')"\n    >\n      Warning\n    </b-button>\n\n    \x3c!-- danger --\x3e\n    <b-button\n      v-ripple.400="\'rgba(255, 159, 67, 0.15)\'"\n      variant="outline-danger"\n      @click="makeToast(\'danger\')"\n    >\n      Danger\n    </b-button>\n\n    \x3c!-- success --\x3e\n    <b-button\n      v-ripple.400="\'rgba(40, 199, 111, 0.15)\'"\n      variant="outline-success"\n      @click="makeToast(\'success\')"\n    >\n      Success\n    </b-button>\n\n    \x3c!-- info --\x3e\n    <b-button\n      v-ripple.400="\'rgba(0, 207, 232, 0.15)\'"\n      variant="outline-info"\n      @click="makeToast(\'info\')"\n    >\n      Info\n    </b-button>\n  </div>\n</template>\n\n<script>\nimport { BButton } from \'bootstrap-vue\'\nimport Ripple from \'vue-ripple-directive\'\n\nexport default {\n  components: {\n    BButton,\n  },\n  directives: {\n    Ripple,\n  },\n  methods: {\n    makeToast(variant = null) {\n      this.$bvToast.toast(\'Toast body content\', {\n        title: `Variant ${variant || \'default\'}`,\n        variant,\n        solid: true,\n      })\n    },\n  },\n}\n<\/script>\n',T={components:{BCardCode:l["a"],BButton:u["a"],BCardText:p["a"],BToast:b["a"],BImg:d["a"]},directives:{Ripple:m["a"]},data:function(){return{codeBasic:g}}},_=T,j=n("2877"),w=Object(j["a"])(_,i,c,!1,null,null,null),k=w.exports,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card-code",{attrs:{"no-body":"",title:"Translucent"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeTranslucent)+" ")]},proxy:!0}])},[a("b-card-body",[a("b-card-text",[a("span",[t._v("we are using the ")]),a("code",[t._v("static")]),a("span",[t._v(" prop in the above example to render the toast in-place in the document, rather than transporting it to a ")]),a("code",[t._v("<b-toaster>")]),a("span",[t._v(" target container")])])],1),a("div",{staticClass:"translucent-wrap bg-primary rounded-bottom p-1"},[a("b-toast",{attrs:{id:"example-toast3",static:"","no-auto-hide":""},scopedSlots:t._u([{key:"toast-title",fn:function(){return[a("div",{staticClass:"d-flex flex-grow-1 align-items-center mr-1"},[a("b-img",{staticClass:"mr-1",attrs:{src:n("a4ef"),height:"18",width:"25",alt:"Toast image"}}),a("strong",{staticClass:"mr-auto"},[t._v("Vue Admin")]),a("small",{staticClass:"text-muted"},[t._v("11 mins ago")])],1)]},proxy:!0}]),model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[a("span",[t._v("Hello, world! This is a toast message.")])])],1)],1)},C=[],S=n("6197"),$={components:{BCardCode:l["a"],BToast:b["a"],BCardBody:S["a"],BImg:d["a"],BCardText:p["a"]},data:function(){return{visible:!0,codeTranslucent:x}}},N=$,P=(n("ddfb"),Object(j["a"])(N,B,C,!1,null,"4609e4e4",null)),R=P.exports,V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card-code",{attrs:{title:"Delay"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeToastDelay)+" ")]},proxy:!0}])},[a("b-card-text",[a("span",[t._v("Change to auto hide delay time via the ")]),a("code",[t._v("auto-hide-delay")]),a("span",[t._v(" prop (value is in milliseconds), which defaults to ")]),a("code",[t._v("5000")]),a("span",[t._v(" (minimum value ")]),a("code",[t._v("1000")]),a("span",[t._v("). Or, disable the auto-hide feature completely by setting the ")]),a("code",[t._v("no-auto-hide")]),a("span",[t._v(" prop to ")]),a("code",[t._v("true")])]),a("div",[a("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(e){return t.$bvToast.show("example-toast5")}}},[t._v(" Delay ")]),a("b-toast",{attrs:{id:"example-toast5","auto-hide-delay":"10000"},scopedSlots:t._u([{key:"toast-title",fn:function(){return[a("div",{staticClass:"d-flex flex-grow-1 align-items-center mr-25"},[a("b-img",{staticClass:"rounded mr-2",attrs:{src:n("a4ef"),height:"18",width:"25",alt:"Toast image"}}),a("strong",{staticClass:"mr-auto"},[t._v("Vue Admin")]),a("small",{staticClass:"text-muted"},[t._v("11 mins ago")])],1)]},proxy:!0}])},[a("span",[t._v("Hello, world! This is a toast message.")])])],1)],1)},D=[],E={components:{BCardCode:l["a"],BToast:b["a"],BButton:u["a"],BImg:d["a"],BCardText:p["a"]},directives:{Ripple:m["a"]},data:function(){return{codeToastDelay:f}}},I=E,A=Object(j["a"])(I,V,D,!1,null,null,null),H=A.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card-code",{attrs:{title:"Toaster target"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeTarget)+" ")]},proxy:!0}])},[n("b-card-text",{staticClass:"mb-0"},[n("span",[t._v('BootstrapVue comes with the following "built-in" toaster names (and associated styles defined in SCSS): ')]),n("code",[t._v("b-toaster-top-right, b-toaster-top-left, b-toaster-top-center, b-toaster-top-full, b-toaster-bottom-right, b-toaster-bottom-left, b-toaster-bottom-center, b-toaster-bottom-full ")])]),n("div",{staticClass:"demo-inline-spacing"},[n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(e){return t.toast("b-toaster-top-right")}}},[t._v(" b-toaster-top-right ")]),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(e){return t.toast("b-toaster-top-left")}}},[t._v(" b-toaster-top-left ")]),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(e){return t.toast("b-toaster-top-center")}}},[t._v(" b-toaster-top-center ")]),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(e){return t.toast("b-toaster-top-full")}}},[t._v(" b-toaster-top-full ")]),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(e){return t.toast("b-toaster-bottom-right",!0)}}},[t._v(" b-toaster-bottom-right ")]),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(e){return t.toast("b-toaster-bottom-left",!0)}}},[t._v(" b-toaster-bottom-left ")]),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(e){return t.toast("b-toaster-bottom-center",!0)}}},[t._v(" b-toaster-bottom-center ")]),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(e){return t.toast("b-toaster-bottom-full",!0)}}},[t._v(" b-toaster-bottom-full ")])],1)],1)},W=[],q={components:{BCardCode:l["a"],BButton:u["a"],BCardText:p["a"]},directives:{Ripple:m["a"]},data:function(){return{counter:0,codeTarget:y}},methods:{toast:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.counter+=1,this.$bvToast.toast("Toast ".concat(this.counter," body content"),{title:"Toaster ".concat(t),toaster:t,solid:!1,appendToast:e})}}},F=q,G=Object(j["a"])(F,L,W,!1,null,null,null),J=G.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card-code",{attrs:{title:"Variants"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeVariant)+" ")]},proxy:!0}])},[n("b-card-text",{staticClass:"mb-0"},[t._v(" BootstrapVue toasts provide custom CSS to define color variants. Variants follow the standard Bootstrap v4 variant names. If you have custom SCSS defined Bootstrap color theme variants, the toast custom SCSS will automatically create toast variants for you (refer to the Theming reference section). ")]),n("div",{staticClass:"demo-inline-spacing"},[n("b-button",{attrs:{variant:"gradient-primary"},on:{click:function(e){return t.makeToast()}}},[t._v(" Default ")]),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(e){return t.makeToast("primary")}}},[t._v(" Primary ")]),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(186, 191, 199, 0.15)",expression:"'rgba(186, 191, 199, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-secondary"},on:{click:function(e){return t.makeToast("secondary")}}},[t._v(" Secondary ")]),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 159, 67, 0.15)",expression:"'rgba(255, 159, 67, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-warning"},on:{click:function(e){return t.makeToast("warning")}}},[t._v(" Warning ")]),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 159, 67, 0.15)",expression:"'rgba(255, 159, 67, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-danger"},on:{click:function(e){return t.makeToast("danger")}}},[t._v(" Danger ")]),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(40, 199, 111, 0.15)",expression:"'rgba(40, 199, 111, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-success"},on:{click:function(e){return t.makeToast("success")}}},[t._v(" Success ")]),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(0, 207, 232, 0.15)",expression:"'rgba(0, 207, 232, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-info"},on:{click:function(e){return t.makeToast("info")}}},[t._v(" Info ")])],1)],1)},Q=[],z={components:{BCardCode:l["a"],BButton:u["a"],BCardText:p["a"]},directives:{Ripple:m["a"]},data:function(){return{codeVariant:O}},methods:{makeToast:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.$bvToast.toast("Toast body content",{title:"Variant ".concat(t||"default"),variant:t,solid:!1})}}},U=z,K=Object(j["a"])(U,M,Q,!1,null,null,null),X=K.exports,Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card-code",{attrs:{title:"Links"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeLinks)+" ")]},proxy:!0}])},[n("b-card-text",[n("span",[t._v("Optionally convert the toast body to a link (")]),n("code",[t._v("<a>")]),n("span",[t._v(") or ")]),n("code",[t._v("<router-link>")]),n("span",[t._v(" (or ")]),n("code",[t._v("<nuxt-link>")]),n("span",[t._v(") via the href and to props respectively. When set, the entire toast body becomes a link.")])]),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(e){return t.toast()}}},[t._v(" Toast with link ")])],1)},Z=[],tt={components:{BCardCode:l["a"],BButton:u["a"],BCardText:p["a"]},directives:{Ripple:m["a"]},data:function(){return{codeLinks:h}},methods:{toast:function(){this.$bvToast.toast("Toast with action link",{href:"#foo",title:"Toast Link"})}}},et=tt,nt=Object(j["a"])(et,Y,Z,!1,null,null,null),at=nt.exports,rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card-code",{attrs:{title:"Advanced usage"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeAdvance)+" ")]},proxy:!0}])},[n("b-card-text",[n("span",[t._v("When using the ")]),n("code",[t._v("this.$bvToast.toast(...)")]),n("span",[t._v(" method for generating toasts, you may want the toast content to be more than just a string message. As mentioned in the Toasts on demand section above, you can pass arrays of ")]),n("code",[t._v("VNodes")]),n("span",[t._v(" as the message and title for more complex content.")])]),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:t.popToast}},[t._v(" Show Toast with custom content ")])],1)},ot=[],st=n("01e3"),it={components:{BCardCode:l["a"],BButton:u["a"],BCardText:p["a"],BSpinner:st["a"]},directives:{Ripple:m["a"]},data:function(){return{count:0,codeAdvance:v}},methods:{popToast:function(){var t=this.$createElement;this.count+=1;var e=t("p",{class:["text-center","mb-0"]},[t("b-spinner",{props:{type:"grow",small:!0}})," Flashy ",t("strong","toast")," message #".concat(this.count," "),t("b-spinner",{props:{type:"grow",small:!0}})]),n=t("div",{class:["d-flex","flex-grow-1","align-items-baseline","mr-2"]},[t("strong",{class:"mr-2"},"The Title"),t("small",{class:"ml-auto font-italics"},"5 minutes ago")]);this.$bvToast.toast([e],{title:[n],solid:!1,variant:"info"})}}},ct=it,lt=Object(j["a"])(ct,rt,ot,!1,null,null,null),ut=lt.exports,pt={components:{BRow:o["a"],BCol:s["a"],ToastsBasic:k,ToastsTranslucent:R,ToastsDelay:H,ToastsTarget:J,ToastsVariants:X,ToastsLinks:at,ToastsAdvance:ut}},bt=pt,dt=Object(j["a"])(bt,a,r,!1,null,null,null);e["default"]=dt.exports},a15b:function(t,e,n){"use strict";n.d(e,"a",(function(){return O}));var a=n("b42e"),r=n("c637"),o=n("a723"),s=n("2326"),i=n("228e"),c=n("6c06"),l=n("b508"),u=n("d82f"),p=n("cf75"),b=n("fa73");function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){v(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f=["start","end","center"],g=Object(l["a"])((function(t,e){return e=Object(b["h"])(Object(b["g"])(e)),e?Object(b["c"])(["row-cols",t,e].filter(c["a"]).join("-")):null})),h=Object(l["a"])((function(t){return Object(b["c"])(t.replace("cols",""))})),y=[],x=function(){var t=Object(i["b"])().reduce((function(t,e){return t[Object(p["g"])(e,"cols")]=Object(p["c"])(o["p"]),t}),Object(u["c"])(null));return y=Object(u["h"])(t),Object(p["d"])(Object(u["m"])(m(m({},t),{},{alignContent:Object(p["c"])(o["u"],null,(function(t){return Object(s["a"])(Object(s["b"])(f,"between","around","stretch"),t)})),alignH:Object(p["c"])(o["u"],null,(function(t){return Object(s["a"])(Object(s["b"])(f,"between","around"),t)})),alignV:Object(p["c"])(o["u"],null,(function(t){return Object(s["a"])(Object(s["b"])(f,"baseline","stretch"),t)})),noGutters:Object(p["c"])(o["g"],!1),tag:Object(p["c"])(o["u"],"div")})),r["Ob"])},O={name:r["Ob"],functional:!0,get props(){return delete this.props,this.props=x(),this.props},render:function(t,e){var n,r=e.props,o=e.data,s=e.children,i=r.alignV,c=r.alignH,l=r.alignContent,u=[];return y.forEach((function(t){var e=g(h(t),r[t]);e&&u.push(e)})),u.push((n={"no-gutters":r.noGutters},v(n,"align-items-".concat(i),i),v(n,"justify-content-".concat(c),c),v(n,"align-content-".concat(l),l),n)),t(r.tag,Object(a["a"])(o,{staticClass:"row",class:u}),s)}}},a4ef:function(t,e,n){t.exports=n.p+"img/logo.a5d6fa57.png"},b28b:function(t,e,n){"use strict";n.d(e,"a",(function(){return _}));var a=n("b42e"),r=n("c637"),o=n("a723"),s=n("992e"),i=n("2326"),c=n("228e"),l=n("6c06"),u=n("7b1e"),p=n("b508"),b=n("d82f"),d=n("cf75"),m=n("fa73");function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(Object(n),!0).forEach((function(e){g(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function g(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var h=["auto","start","end","center","baseline","stretch"],y=function(t,e,n){var a=t;if(!Object(u["p"])(n)&&!1!==n)return e&&(a+="-".concat(e)),"col"!==t||""!==n&&!0!==n?(a+="-".concat(n),Object(m["c"])(a)):Object(m["c"])(a)},x=Object(p["a"])(y),O=Object(b["c"])(null),T=function(){var t=Object(c["b"])().filter(l["a"]),e=t.reduce((function(t,e){return t[e]=Object(d["c"])(o["i"]),t}),Object(b["c"])(null)),n=t.reduce((function(t,e){return t[Object(d["g"])(e,"offset")]=Object(d["c"])(o["p"]),t}),Object(b["c"])(null)),a=t.reduce((function(t,e){return t[Object(d["g"])(e,"order")]=Object(d["c"])(o["p"]),t}),Object(b["c"])(null));return O=Object(b["a"])(Object(b["c"])(null),{col:Object(b["h"])(e),offset:Object(b["h"])(n),order:Object(b["h"])(a)}),Object(d["d"])(Object(b["m"])(f(f(f(f({},e),n),a),{},{alignSelf:Object(d["c"])(o["u"],null,(function(t){return Object(i["a"])(h,t)})),col:Object(d["c"])(o["g"],!1),cols:Object(d["c"])(o["p"]),offset:Object(d["c"])(o["p"]),order:Object(d["c"])(o["p"]),tag:Object(d["c"])(o["u"],"div")})),r["y"])},_={name:r["y"],functional:!0,get props(){return delete this.props,this.props=T()},render:function(t,e){var n,r=e.props,o=e.data,i=e.children,c=r.cols,l=r.offset,u=r.order,p=r.alignSelf,b=[];for(var d in O)for(var m=O[d],v=0;v<m.length;v++){var f=x(d,m[v].replace(d,""),r[m[v]]);f&&b.push(f)}var h=b.some((function(t){return s["e"].test(t)}));return b.push((n={col:r.col||!h&&!c},g(n,"col-".concat(c),c),g(n,"offset-".concat(l),l),g(n,"order-".concat(u),u),g(n,"align-self-".concat(p),p),n)),t(r.tag,Object(a["a"])(o,{class:b}),i)}}},c9b3:function(t,e,n){},d6e4:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var a=n("2b0e"),r=n("b42e"),o=n("c637"),s=n("a723"),i=n("cf75"),c=Object(i["d"])({textTag:Object(i["c"])(s["u"],"p")},o["u"]),l=a["default"].extend({name:o["u"],functional:!0,props:c,render:function(t,e){var n=e.props,a=e.data,o=e.children;return t(n.textTag,Object(r["a"])(a,{staticClass:"card-text"}),o)}})},ddfb:function(t,e,n){"use strict";n("c9b3")}}]);
//# sourceMappingURL=chunk-bf420592.8be14489.js.map