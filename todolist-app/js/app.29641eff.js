(function(e){function t(t){for(var r,o,u=t[0],d=t[1],c=t[2],s=0,l=[];s<u.length;s++)o=u[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&l.push(a[o][0]),a[o]=0;for(r in d)Object.prototype.hasOwnProperty.call(d,r)&&(e[r]=d[r]);f&&f(t);while(l.length)l.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(i.splice(t--,1),e=d(d.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function u(e){return d.p+"js/"+({}[e]||e)+"."+{"chunk-cf9f46ee":"3d98281c"}[e]+".js"}function d(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,d),n.l=!0,n.exports}d.e=function(e){var t=[],n={"chunk-cf9f46ee":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-cf9f46ee":"2ab70fca"}[e]+".css",a=d.p+r,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var c=i[u],s=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(s===r||s===a))return t()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){c=l[u],s=c.getAttribute("data-href");if(s===r||s===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],f.parentNode.removeChild(f),n(i)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var c,s=document.createElement("script");s.charset="utf-8",s.timeout=120,d.nc&&s.setAttribute("nonce",d.nc),s.src=u(e);var l=new Error;c=function(t){s.onerror=s.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,n[1](l)}a[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:s})}),12e4);s.onerror=s.onload=c,document.head.appendChild(s)}return Promise.all(t)},d.m=e,d.c=r,d.d=function(e,t,n){d.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,t){if(1&t&&(e=d(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(d.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)d.d(n,r,function(t){return e[t]}.bind(null,r));return n},d.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(t,"a",t),t},d.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},d.p="",d.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var f=s;i.push(["56d7","chunk-vendors"]),n()})({"275f":function(e,t,n){},"3e42":function(e,t,n){"use strict";var r=n("7ac5"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("2bf3"),n("0dbc"),n("e612"),n("8cf6");var r=n("e832"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],i=(n("3e42"),n("a6c2")),u={},d=Object(i["a"])(u,o,a,!1,null,"6c4fc402",null),c=d.exports,s=n("4af9");r["a"].use(s["a"]);var l=new s["a"]({routes:[{path:"/",name:"home",component:function(){return n.e("chunk-cf9f46ee").then(n.bind(null,"bb51"))}}]}),f=(n("8ade"),n("d2d3")),p=(n("5b54"),n("94ea")),g=n("bbd5");r["a"].use(p["a"]);var m=new p["a"].Store({state:{addId:10,todos:[{icon:"user",name:"Personal",colors:["#ff6262","#ffa947"],tasks:[{id:1,date:(new Date).getTime(),title:"gym",done:!1},{id:2,date:(new Date).getTime(),title:"gym1",done:!1},{id:3,date:(new Date).getTime(),title:"gym4",done:!1},{id:4,date:new Date(2019,10,30),title:"昨天洗澡",done:!0},{id:5,date:new Date(2019,11,4),title:"以后",done:!1}]},{icon:"briefcase",name:"Work",colors:["#5b9df9","#47bfff"],tasks:[{id:6,date:(new Date).getTime(),title:"meeting",done:!0},{id:7,date:(new Date).getTime(),title:"weekly report",done:!1}]},{icon:"home",name:"Home",colors:["#2c7d59","#3ba776"],tasks:[{id:8,date:(new Date).getTime(),title:"shopping",done:!1},{id:9,date:(new Date).getTime(),title:"laundry",done:!1}]}],curIndex:0,selected:null,unselect:null,editing:{on:!1,text:""}},getters:{curTodo:function(e){return e.todos[e.curIndex]},todayTasks:function(e){var t=[];return e.todos.forEach((function(e){t.push.apply(t,Object(f["a"])(e.tasks.filter((function(e){return e.date>=g["a"]&&e.date<g["c"]&&!e.done}))))})),t}},mutations:{selectTodo:function(e,t){e.selected=t},unselectTodo:function(e){e.unselect=e.selected,e.selected=null},nextTodo:function(e){e.curIndex<e.todos.length-1&&e.curIndex++},preTodo:function(e){e.curIndex>0&&e.curIndex--},deleteTask:function(e,t){var n=t.todoIndex,r=t.taskId,o=0;e.todos[n].tasks.find((function(e,t){o=e.id===r?t:o})),e.todos[n].tasks.splice(o,1)},toggleEdit:function(e,t){if(e.editing.on){if(t)return e.editing.text?(e.todos[e.curIndex].tasks.unshift({id:e.addId++,date:(new Date).getTime(),title:e.editing.text,done:!1}),e.editing.on=!1,void(e.editing.text="")):void 0;e.editing.on=!1}else e.editing.on=!0}},actions:{}});n("275f"),n("d22c"),n("2b9c");r["a"].config.productionTip=!1,new r["a"]({router:l,store:m,render:function(e){return e(c)}}).$mount("#app")},"7ac5":function(e,t,n){},bbd5:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return i}));n("e1a2"),n("6ac6");var r=new Date,o=new Date(r.getFullYear(),r.getMonth(),r.getDate(),0,0,0).getTime(),a=o+864e5,i=function(){return(new Date).toString().split(" ").splice(0,4).join(" ")}}});
//# sourceMappingURL=app.29641eff.js.map