(function(e){function n(n){for(var a,r,o=n[0],i=n[1],l=n[2],d=0,s=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(u,r)&&u[r]&&s.push(u[r][0]),u[r]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);f&&f(n);while(s.length)s.shift()();return c.push.apply(c,l||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],a=!0,r=1;r<t.length;r++){var o=t[r];0!==u[o]&&(a=!1)}a&&(c.splice(n--,1),e=i(i.s=t[0]))}return e}var a={},r={app:0},u={app:0},c=[];function o(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"7ce22eb2","chunk-1a637074":"3f159fe6","chunk-23a7e594":"2c03222f","chunk-2d210077":"8bc9c9d2","chunk-33b51794":"e59daca4","chunk-4ddee221":"bb37595b","chunk-626bb2df":"2711fa22","chunk-708cae22":"e866e3be","chunk-7a4e4d6d":"8f0fef44","chunk-7a8a7461":"40fb9bf6","chunk-a3f93550":"8b6df5c2"}[e]+".js"}function i(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={about:1,"chunk-1a637074":1,"chunk-23a7e594":1,"chunk-33b51794":1,"chunk-4ddee221":1,"chunk-626bb2df":1,"chunk-708cae22":1,"chunk-7a4e4d6d":1,"chunk-7a8a7461":1,"chunk-a3f93550":1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise((function(n,t){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"51c4d1e2","chunk-1a637074":"ff74e5e6","chunk-23a7e594":"28fd2d79","chunk-2d210077":"31d6cfe0","chunk-33b51794":"f5fa2a27","chunk-4ddee221":"b6b48715","chunk-626bb2df":"0aa3571c","chunk-708cae22":"274ab811","chunk-7a4e4d6d":"c1b65403","chunk-7a8a7461":"436d2567","chunk-a3f93550":"3ec78c74"}[e]+".css",u=i.p+a,c=document.getElementsByTagName("link"),o=0;o<c.length;o++){var l=c[o],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===a||d===u))return n()}var s=document.getElementsByTagName("style");for(o=0;o<s.length;o++){l=s[o],d=l.getAttribute("data-href");if(d===a||d===u)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var a=n&&n.target&&n.target.src||u,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete r[e],f.parentNode.removeChild(f),t(c)},f.href=u;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){r[e]=0})));var a=u[e];if(0!==a)if(a)n.push(a[2]);else{var c=new Promise((function(n,t){a=u[e]=[n,t]}));n.push(a[2]=c);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=o(e);var s=new Error;l=function(n){d.onerror=d.onload=null,clearTimeout(f);var t=u[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",s.name="ChunkLoadError",s.type=a,s.request=r,t[1](s)}u[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(n)},i.m=e,i.c=a,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)i.d(t,a,function(n){return e[n]}.bind(null,a));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=n,l=l.slice();for(var s=0;s<l.length;s++)n(l[s]);var f=d;c.push(["56d7","chunk-vendors"]),t()})({"4ee2":function(e,n,t){},"504d":function(e,n,t){"use strict";var a=t("5377"),r=t.n(a);r.a},5377:function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("2bf3"),t("0dbc"),t("e612"),t("8cf6");var a=t("e832"),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[e._m(0),t("nav",e._l(e.nav,(function(n,a){return t("router-link",{key:a,staticClass:"navs",class:e.nowNav==a?"active":"",attrs:{tag:"div",to:n.path},nativeOn:{click:function(n){e.nowNav=a}}},[e._v(e._s(n.name))])})),1),t("router-view",{staticClass:"bg"}),e._m(1)],1)},u=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("header",[t("div",{staticClass:"logo"})])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("footer",[t("div",{staticClass:"foot"},[t("div",[e._v("版权所有 @2009：香远（北京）投资有限公司\n        "),t("br"),e._v("技术支持：中远网络（北京）有限公司\n      ")])])])}],c={data:function(){return{nav:[{name:"首页",path:"/index"},{name:"公司简介",path:"/introduction"},{name:"物业管理",path:"/estate"},{name:"后勤保障",path:"/service"},{name:"船员中心",path:"/sailor"},{name:"物流仓储中心",path:"/logistics"},{name:"新闻中心",path:"/news"},{name:"企业文化",path:"/culture"},{name:"招聘信息",path:"/recruit"},{name:"联系我们",path:"/connection"}]}}},o={mixins:[c],data:function(){return{nowNav:0}}},i=o,l=(t("504d"),t("a6c2")),d=Object(l["a"])(i,r,u,!1,null,"2e8d1463",null),s=d.exports,f=t("4af9");a["a"].use(f["a"]);var h=new f["a"]({routes:[{path:"/index",name:"index",component:function(){return t.e("chunk-708cae22").then(t.bind(null,"d504"))}},{path:"/introduction",name:"introduction",component:function(){return t.e("about").then(t.bind(null,"e46f"))}},{path:"/estate",name:"estate",component:function(){return t.e("chunk-626bb2df").then(t.bind(null,"92bc"))}},{path:"/service",name:"service",component:function(){return t.e("chunk-33b51794").then(t.bind(null,"e2f8"))}},{path:"/sailor",name:"sailor",component:function(){return t.e("chunk-4ddee221").then(t.bind(null,"35ab"))}},{path:"/logistics",name:"logistics",component:function(){return t.e("chunk-1a637074").then(t.bind(null,"ac6c"))}},{path:"/",name:"index",component:function(){return t.e("chunk-708cae22").then(t.bind(null,"d504"))}},{path:"/news",name:"news",component:function(){return t.e("chunk-a3f93550").then(t.bind(null,"a2f9"))}},{path:"/news-detail",name:"news-detail",component:function(){return t.e("chunk-7a4e4d6d").then(t.bind(null,"5685"))}},{path:"/culture",name:"culture",component:function(){return t.e("chunk-23a7e594").then(t.bind(null,"aced"))}},{path:"/recruit",name:"recruit",component:function(){return t.e("chunk-2d210077").then(t.bind(null,"b5c1"))}},{path:"/connection",name:"connection",component:function(){return t.e("chunk-7a8a7461").then(t.bind(null,"bd26"))}}]}),p=t("94ea");a["a"].use(p["a"]);var b=new p["a"].Store({state:{},mutations:{},actions:{}});t("4ee2"),t("c2b1");a["a"].config.productionTip=!1,new a["a"]({router:h,store:b,render:function(e){return e(s)}}).$mount("#app")},c2b1:function(e,n,t){}});
//# sourceMappingURL=app.d02d3eac.js.map