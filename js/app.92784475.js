(function(t){function e(e){for(var a,i,c=e[0],o=e[1],l=e[2],u=0,g=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&g.push(n[i][0]),n[i]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);d&&d(e);while(g.length)g.shift()();return r.push.apply(r,l||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],a=!0,c=1;c<s.length;c++){var o=s[c];0!==n[o]&&(a=!1)}a&&(r.splice(e--,1),t=i(i.s=s[0]))}return t}var a={},n={app:0},r=[];function i(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=a,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(s,a,function(e){return t[e]}.bind(null,a));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=o;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"1cb2":function(t,e,s){"use strict";var a=s("70f6"),n=s.n(a);n.a},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Navbar",{attrs:{"show-tags":t.showTags},on:{"toggle-tags":t.toggleTags}}),s("transition",{attrs:{name:"fade"}},[t.showTags?s("div",{staticClass:"tags-filter"},[s("Tags",{on:{"tag-selected":t.toggleTags}})],1):t._e()]),t.$store.getters.cards.length>0?s("section",{staticClass:"section"},[s("Cards")],1):s("section",{staticClass:"hero is-fullheight-with-navbar"},[s("div",{staticClass:"hero-body"},[s("div",{staticClass:"container"},[s("div",{staticClass:"columns is-centered"},[s("div",{staticClass:"no-results"},[s("div",{staticClass:"no-results__image"},[s("svg",{attrs:{width:"72",height:"52",viewBox:"0 0 72 52",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M14.8971 25.2105V1H1V51H14.8971V25.2105ZM14.8971 25.2105L34.7132 1H48.6103V22.0526H34.7132V6.65961L19.5294 25.2105H31.3676L51.9559 51H35.4853L14.8971 25.2105ZM61.7353 15.7368L71 25.2105L61.7353 34.6842L52.4706 25.2105L61.7353 15.7368Z",stroke:"#999999","stroke-dasharray":"4 2"}})])]),s("div",{staticClass:"no-results__text"},[t._v(" Ничего не найдено ")])])])])])]),s("Popup")],1)},r=[],i=(s("4de4"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"navbar",attrs:{role:"navigation","aria-label":"main navigation"}},[t._m(0),s("div",{staticClass:"navbar-menu"},[s("div",{staticClass:"navbar-start"},[s("div",{staticClass:"navbar-item",on:{click:t.toggleTags}},[s("a",{staticClass:"button is-link"},[s("span",{staticClass:"icon"},[s("svg",{class:{rotated:t.showTags,"reverse-rotated":!t.showTags},attrs:{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8 0C3.58172 0 0 3.58172 0 8C-2.17128e-06 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 2.17128e-06 8 0ZM7.5 13V8.50003H3V7.50003H7.5V3H8.5V7.50003H13V8.50003H8.5V13H7.5Z",fill:"#888888"}})])]),0!==t.selectedTags.length||t.showTags?t._e():s("span",[t._v("Фильтр по тегам")]),0===t.selectedTags.length&&t.showTags?s("span",[t._v(" Закрыть ")]):t._e(),t.selectedTags.length>0?s("div",{staticClass:"tags"},t._l(t.selectedTags,(function(e){return s("Tag",{key:e.id,attrs:{selected:!0},on:{delete:function(s){return t.selectTag(e)}}},[t._v(t._s(e.title))])})),1):t._e()])])])]),s("div",{staticClass:"navbar-end"},[s("div",{staticClass:"navbar-item"},[s("a",{staticClass:"button is-link",attrs:{target:"_blank",href:"https://medium.com/@helloeel\n"}},[s("span",{staticClass:"icon"},[s("svg",{attrs:{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M13.9508 12.7436C13.841 12.6866 13.7861 12.5159 13.7861 12.401V3.71396C13.7861 3.60015 13.841 3.42944 13.9508 3.31449L14.9989 2.0569V2H11.2509L8.4412 9.37253L5.24302 2H1.38633V2.0569L2.37739 3.48634C2.59799 3.71396 2.65287 4.05766 2.65287 4.34332V10.629C2.70775 10.9727 2.65287 11.3722 2.48824 11.7147L1 13.8293V13.8862H4.96864V13.8293L3.4804 11.7728C3.31577 11.4291 3.2598 11.0865 3.31577 10.687V4.97041C3.37065 5.08422 3.42553 5.08422 3.4804 5.31297L7.22734 14H7.28222L10.9216 4.57208C10.8667 4.91351 10.8667 5.31411 10.8667 5.60091V12.3441C10.8667 12.5148 10.8119 12.6286 10.7021 12.7436L9.59909 13.8293V13.8862H15V13.8293L13.953 12.7436H13.9508Z",fill:"black"}})])]),t._v(" Медиум ")])]),s("div",{staticClass:"navbar-item"},[s("a",{staticClass:"button is-link",attrs:{href:"tg://resolve?domain=cyrillicdesign"}},[s("span",{staticClass:"icon"},[s("svg",{attrs:{width:"16",height:"13",viewBox:"0 0 16 13",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M0.98181 5.66164L10.5119 1.80289C11.4526 1.40097 14.643 0.114756 14.643 0.114756C14.643 0.114756 16.1155 -0.447916 15.9927 0.918609C15.9518 1.48128 15.6248 3.45093 15.2974 5.58109L14.2749 11.8916C14.2749 11.8916 14.1931 12.8161 13.4966 12.9769C12.8001 13.1376 11.656 12.4142 11.4517 12.2533C11.2881 12.1328 8.38402 10.324 7.32051 9.43972C7.03418 9.19866 6.70703 8.71618 7.36144 8.15351C8.83393 6.82708 10.5928 5.17905 11.656 4.13402C12.1469 3.65166 12.6377 2.5262 10.5926 3.89295L4.82555 7.71148C4.82555 7.71148 4.17103 8.11341 2.94407 7.7517C1.71711 7.38999 0.285542 6.90763 0.285542 6.90763C0.285542 6.90763 -0.696121 6.30474 0.980866 5.66175L0.98181 5.66164Z",fill:"#888888"}})])]),t._v(" Телеграм ")])])])])}),c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar-brand"},[a("a",{staticClass:"navbar-item"},[a("img",{attrs:{src:s("9b19")}})])])}],o=s("5530"),l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tag",class:{selected:t.selected},on:{click:[function(e){return e.stopPropagation(),t.$emit("delete")},function(e){return t.$emit("click")}]}},[t._t("default"),t.showDelete?s("span",[s("svg",{attrs:{width:"8",height:"8",viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3.29293 4.00001L0.646484 1.35356L1.35359 0.646454L4.00004 3.2929L6.64648 0.646454L7.35359 1.35356L4.70714 4.00001L7.35359 6.64645L6.64648 7.35356L4.00004 4.70711L1.35359 7.35356L0.646484 6.64645L3.29293 4.00001Z",fill:"white"}})])]):t._e()],2)},d=[],u={props:{selected:{type:Boolean,default:!1},showDelete:{type:Boolean,default:!0}}},g=u,f=(s("d9c5"),s("2877")),p=Object(f["a"])(g,l,d,!1,null,"02091f62",null),h=p.exports,v=s("2f62"),m={components:{Tag:h},props:{showTags:{type:Boolean,default:!1}},computed:Object(o["a"])({},Object(v["d"])(["selectedTags"])),methods:Object(o["a"])({},Object(v["b"])(["selectTag"]),{toggleTags:function(){this.$emit("toggle-tags")}})},b=m,w=(s("5d2b"),Object(f["a"])(b,i,c,!1,null,"ee39128e",null)),C=w.exports,_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container is-fluid"},[s("div",{staticClass:"columns is-multiline"},t._l(t.cards,(function(e,a){return s("div",{key:a,staticClass:"column is-full-mobile is-4-tablet is-3-desktop is-4-widescreen is-3-fullhd"},[s("a",{attrs:{href:e.url,target:"_blank"}},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-image"},[e.isHighlighted?s("Tag",{attrs:{"show-delete":!1}},[t._v("Выбор редакции")]):t._e(),s("figure",{staticClass:"image"},[s("img",{staticClass:"is-16by9",attrs:{src:e.image}})])],1),s("div",{staticClass:"card-content"},[s("div",{staticClass:"content"},[t._v(" "+t._s(e.title)+" ")])])])])])})),0)])},T=[],x=(s("96cf"),s("1da1")),y={components:{Tag:h},data:function(){return{loading:!1,page:1}},computed:Object(o["a"])({},Object(v["c"])(["cards"])),created:function(){var t=this;window.onscroll=function(){t.onScroll()}},methods:{onScroll:function(){this.loading||0!==this.cards.length&&window.innerHeight+window.scrollY>=document.body.scrollHeight-2&&(this.page++,this.loadCards())},loadCards:function(){var t=this;return Object(x["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.$store.dispatch("fetchCards",{page:t.page,tags:t.$store.state.selectedTags});case 3:t.loading=!1;case 4:case"end":return e.stop()}}),e)})))()}}},L=y,j=(s("1cb2"),Object(f["a"])(L,_,T,!1,null,"a7d655a8",null)),O=j.exports,k=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tags"},t._l(t.tags,(function(e){return s("Tag",{key:e.id,attrs:{selected:t.isTagSelected(e),"show-delete":!1},on:{click:function(s){t.selectTag(e),t.$emit("tag-selected")}}},[t._v(t._s(e.title))])})),1)},H=[],V={components:{Tag:h},computed:Object(o["a"])({},Object(v["d"])(["tags","selectedTags"]),{},Object(v["c"])(["isTagSelected"])),methods:Object(o["a"])({},Object(v["b"])(["selectTag"]))},$=V,M=Object(f["a"])($,k,H,!1,null,null,null),S=M.exports,E=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.show?s("div",{staticClass:"popup"},[t._m(0),s("div",{staticClass:"close",on:{click:function(e){t.show=!1}}},[s("svg",{attrs:{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M9 1L1 9",stroke:"#999999"}}),s("path",{attrs:{d:"M1 1L9 9",stroke:"#999999"}})])]),t._m(1),t._m(2)]):t._e()},P=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"image"},[a("img",{attrs:{src:s("70bc")}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"popup__info",staticStyle:{"margin-top":"8px","margin-bottom":"16px"}},[s("div",{staticClass:"popup__info-text--secondary"},[t._v("По всем вопросам")]),s("div",{staticClass:"popup__info-text--primary"},[s("a",{attrs:{href:"mailto:i@cyrillic.design"}},[t._v("i@cyrillic.design")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"popup__info"},[s("div",{staticClass:"popup__info-text--secondary"},[t._v("Разработка")]),s("div",{staticClass:"popup__info-text--primary"},[s("a",{attrs:{href:"http://re-coders.com",target:"_blank"}},[t._v("re-coders.com")])])])}],B=(s("c975"),{data:function(){return{show:!0}},created:function(){document.cookie.indexOf("seen_popup=")>-1?this.show=!1:document.cookie="seen_popup=1"}}),Z=B,R=(s("5fd9"),Object(f["a"])(Z,E,P,!1,null,"6c5e90bf",null)),D=R.exports,J={name:"App",components:{Navbar:C,Cards:O,Tags:S,Popup:D},data:function(){return{showTags:!1}},created:function(){this.$store.dispatch("fetchTags"),this.$store.dispatch("fetchCards",{page:1,tags:[]})},methods:{toggleTags:function(){this.showTags=!this.showTags},deleteTag:function(t){this.selectedTags=this.selectedTags.filter((function(e){var s=e.id;return t.id!==s}))}}},N=J,A=(s("5c0b"),Object(f["a"])(N,n,r,!1,null,null,null)),Y=A.exports,q=(s("99af"),s("caad"),s("a15b"),s("d81d"),s("45fc"),s("2532"),s("2909")),z=s("bc3a"),F=s.n(z);a["a"].use(v["a"]);var G=new v["a"].Store({state:{tags:[],selectedTags:[],cards:[],cardsCopy:[]},getters:{isTagSelected:function(t){return function(e){var s=e.id;return t.selectedTags.some((function(t){return t.id===s}))}},cards:function(t){return 0===t.selectedTags.length?t.cards:t.cards.filter((function(e){return e.tags.filter((function(e){return t.selectedTags.map((function(t){return t.slug})).includes(e)})).length>0}))}},mutations:{addTag:function(t,e){t.selectedTags.push(e)},removeTag:function(t,e){var s=e.id;t.selectedTags=t.selectedTags.filter((function(t){return t.id!==s}))},setTags:function(t,e){t.tags=e},setCards:function(t,e){t.cards=e},addCards:function(t,e){t.cards=[].concat(Object(q["a"])(t.cards),Object(q["a"])(e))}},actions:{selectTag:function(t,e){var s=t.commit,a=t.getters;a.isTagSelected(e)?s("removeTag",e):s("addTag",e)},fetchTags:function(t){var e=t.commit;return Object(x["a"])(regeneratorRuntime.mark((function t(){var s,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,F.a.get("/data/tags.json");case 2:s=t.sent,a=s.data,e("setTags",a);case 5:case"end":return t.stop()}}),t)})))()},fetchCards:function(t,e){var s=this,a=t.commit,n=e.page,r=e.tags;return Object(x["a"])(regeneratorRuntime.mark((function t(){var e,i,c,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=r.map((function(t){return t.slug})).sort(),i="page-".concat(n),r.length>0&&(i+="-".concat(e.join("-"))),t.next=5,F.a.get("/data/".concat(i,".json"));case 5:c=t.sent,o=c.data,1===s.page?a("setCards",o):a("addCards",o);case 8:case"end":return t.stop()}}),t)})))()}}});s("5abe");a["a"].config.productionTip=!1,new a["a"]({store:G,render:function(t){return t(Y)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";var a=s("9c0c"),n=s.n(a);n.a},"5d2b":function(t,e,s){"use strict";var a=s("88b1"),n=s.n(a);n.a},"5fd9":function(t,e,s){"use strict";var a=s("cf05"),n=s.n(a);n.a},"70bc":function(t,e,s){t.exports=s.p+"img/boy.ecec6c05.png"},"70f6":function(t,e,s){},"7b65":function(t,e,s){},"88b1":function(t,e,s){},"9b19":function(t,e,s){t.exports=s.p+"img/logo.a6832d9b.svg"},"9c0c":function(t,e,s){},cf05:function(t,e,s){},d9c5:function(t,e,s){"use strict";var a=s("7b65"),n=s.n(a);n.a}});
//# sourceMappingURL=app.92784475.js.map