(function(t){function e(e){for(var s,i,c=e[0],o=e[1],l=e[2],u=0,g=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&g.push(n[i][0]),n[i]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);d&&d(e);while(g.length)g.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,c=1;c<a.length;c++){var o=a[c];0!==n[o]&&(s=!1)}s&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},n={app:0},r=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="//cyrillic.design/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=o;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"1abd":function(t,e,a){"use strict";var s=a("f99e"),n=a.n(s);n.a},"2b3d":function(t,e,a){},5623:function(t,e,a){"use strict";var s=a("f96a"),n=a.n(s);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Navbar",{attrs:{"show-tags":t.showTags},on:{"toggle-tags":t.toggleTags}}),a("transition",{attrs:{name:"fade"}},[t.showTags?a("div",{staticClass:"tags-filter"},[a("Tags",{on:{"tag-selected":t.toggleTags}})],1):t._e()]),a("transition",{attrs:{name:"fade"}},[t.$store.getters.cards.length>0?a("section",{staticClass:"section"},[a("Cards")],1):t._e()]),0!==t.$store.getters.cards.length||t.loading?t._e():a("section",{staticClass:"hero is-fullheight-with-navbar"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container"},[a("div",{staticClass:"columns is-centered"},[a("div",{staticClass:"no-results"},[a("div",{staticClass:"no-results__image"},[a("svg",{attrs:{width:"72",height:"52",viewBox:"0 0 72 52",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M14.8971 25.2105V1H1V51H14.8971V25.2105ZM14.8971 25.2105L34.7132 1H48.6103V22.0526H34.7132V6.65961L19.5294 25.2105H31.3676L51.9559 51H35.4853L14.8971 25.2105ZM61.7353 15.7368L71 25.2105L61.7353 34.6842L52.4706 25.2105L61.7353 15.7368Z",stroke:"#999999","stroke-dasharray":"4 2"}})])]),a("div",{staticClass:"no-results__text"},[t._v(" Ничего не найдено ")])])])])])]),a("Popup")],1)},r=[],i=(a("4de4"),a("5530")),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar",attrs:{role:"navigation","aria-label":"main navigation"}},[t._m(0),a("div",{staticClass:"navbar-menu"},[a("div",{staticClass:"navbar-start"},[a("div",{staticClass:"navbar-item",on:{click:t.toggleTags}},[a("a",{staticClass:"button is-link"},[a("span",{staticClass:"icon"},[a("svg",{class:{rotated:t.showTags,"reverse-rotated":!t.showTags},attrs:{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8 0C3.58172 0 0 3.58172 0 8C-2.17128e-06 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 2.17128e-06 8 0ZM7.5 13V8.50003H3V7.50003H7.5V3H8.5V7.50003H13V8.50003H8.5V13H7.5Z",fill:"#888888"}})])]),0!==t.selectedTags.length||t.showTags?t._e():a("span",[t._v("Фильтр по тегам")]),0===t.selectedTags.length&&t.showTags?a("span",[t._v(" Закрыть ")]):t._e(),t.selectedTags.length>0?a("div",{staticClass:"tags"},t._l(t.selectedTags,(function(e){return a("Tag",{key:e.id,attrs:{selected:!0},on:{delete:function(a){return t.selectTag(e)}}},[t._v(t._s(e.title))])})),1):t._e()])])])]),a("div",{staticClass:"navbar-end"},[a("div",{staticClass:"navbar-item medium"},[a("a",{staticClass:"button is-link",attrs:{target:"_blank",href:"https://medium.com/@helloeel\n"}},[a("span",{staticClass:"icon"},[a("svg",{attrs:{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M13.9508 12.7436C13.841 12.6866 13.7861 12.5159 13.7861 12.401V3.71396C13.7861 3.60015 13.841 3.42944 13.9508 3.31449L14.9989 2.0569V2H11.2509L8.4412 9.37253L5.24302 2H1.38633V2.0569L2.37739 3.48634C2.59799 3.71396 2.65287 4.05766 2.65287 4.34332V10.629C2.70775 10.9727 2.65287 11.3722 2.48824 11.7147L1 13.8293V13.8862H4.96864V13.8293L3.4804 11.7728C3.31577 11.4291 3.2598 11.0865 3.31577 10.687V4.97041C3.37065 5.08422 3.42553 5.08422 3.4804 5.31297L7.22734 14H7.28222L10.9216 4.57208C10.8667 4.91351 10.8667 5.31411 10.8667 5.60091V12.3441C10.8667 12.5148 10.8119 12.6286 10.7021 12.7436L9.59909 13.8293V13.8862H15V13.8293L13.953 12.7436H13.9508Z",fill:"black"}})])]),t._v(" Медиум ")])]),a("div",{staticClass:"navbar-item telegram"},[a("a",{staticClass:"button is-link",attrs:{href:"tg://resolve?domain=cyrillicdesign"}},[a("span",{staticClass:"icon"},[a("svg",{attrs:{width:"16",height:"13",viewBox:"0 0 16 13",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M0.98181 5.66164L10.5119 1.80289C11.4526 1.40097 14.643 0.114756 14.643 0.114756C14.643 0.114756 16.1155 -0.447916 15.9927 0.918609C15.9518 1.48128 15.6248 3.45093 15.2974 5.58109L14.2749 11.8916C14.2749 11.8916 14.1931 12.8161 13.4966 12.9769C12.8001 13.1376 11.656 12.4142 11.4517 12.2533C11.2881 12.1328 8.38402 10.324 7.32051 9.43972C7.03418 9.19866 6.70703 8.71618 7.36144 8.15351C8.83393 6.82708 10.5928 5.17905 11.656 4.13402C12.1469 3.65166 12.6377 2.5262 10.5926 3.89295L4.82555 7.71148C4.82555 7.71148 4.17103 8.11341 2.94407 7.7517C1.71711 7.38999 0.285542 6.90763 0.285542 6.90763C0.285542 6.90763 -0.696121 6.30474 0.980866 5.66175L0.98181 5.66164Z",fill:"#888888"}})])]),t._v(" Телеграм ")])])])])},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"navbar-brand"},[s("a",{staticClass:"navbar-item"},[s("img",{attrs:{src:a("9b19")}})])])}],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tag",class:{selected:t.selected},on:{click:[function(e){return e.stopPropagation(),t.$emit("delete")},function(e){return t.$emit("click")}]}},[t._t("default"),t.showDelete?a("span",[a("svg",{attrs:{width:"8",height:"8",viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3.29293 4.00001L0.646484 1.35356L1.35359 0.646454L4.00004 3.2929L6.64648 0.646454L7.35359 1.35356L4.70714 4.00001L7.35359 6.64645L6.64648 7.35356L4.00004 4.70711L1.35359 7.35356L0.646484 6.64645L3.29293 4.00001Z",fill:"white"}})])]):t._e()],2)},d=[],u={props:{selected:{type:Boolean,default:!1},showDelete:{type:Boolean,default:!0}}},g=u,f=(a("5623"),a("2877")),p=Object(f["a"])(g,l,d,!1,null,"b28c8138",null),v=p.exports,h=a("2f62"),m={components:{Tag:v},props:{showTags:{type:Boolean,default:!1}},computed:Object(i["a"])({},Object(h["d"])(["selectedTags"])),methods:Object(i["a"])({},Object(h["b"])(["selectTag"]),{toggleTags:function(){this.$emit("toggle-tags")}})},b=m,w=(a("bc0a"),Object(f["a"])(b,c,o,!1,null,"596ea8f7",null)),C=w.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container is-fluid"},[a("transition-group",{staticClass:"columns is-multiline",attrs:{name:"fade",tag:"div"}},t._l(t.cards,(function(e){return a("div",{key:e.id,staticClass:"column is-full-mobile is-4-tablet is-3-desktop is-4-widescreen is-3-fullhd"},[a("a",{attrs:{href:e.url,target:"_blank"}},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-image"},[e.isHighlighted?a("Tag",{attrs:{"show-delete":!1}},[t._v("Выбор редакции")]):t._e(),a("figure",{staticClass:"image is-16by9"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.image,expression:"card.image"}]})])],1),a("div",{staticClass:"card-content"},[a("div",{staticClass:"content"},[t._v(" "+t._s(e.title)+" ")])])])])])})),0),t.isLoading?a("div",{staticClass:"spinner"}):t._e()],1)},T=[],x=(a("96cf"),a("1da1")),y={components:{Tag:v},computed:Object(i["a"])({},Object(h["c"])(["cards","isLoading"])),created:function(){var t=this;window.onscroll=function(){t.onScroll()}},methods:{onScroll:function(){this.isLoading||0!==this.cards.length&&window.innerHeight+window.scrollY>=document.body.scrollHeight-2&&(this.$store.commit("nextPage"),this.loadCards())},loadCards:function(){var t=this;return Object(x["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("fetchCards",{tags:t.$store.state.selectedTags});case 2:case"end":return e.stop()}}),e)})))()}}},L=y,O=(a("1abd"),Object(f["a"])(L,_,T,!1,null,"06bae469",null)),j=O.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tags"},t._l(t.tags,(function(e){return a("Tag",{key:e.id,attrs:{selected:t.isTagSelected(e),"show-delete":!1},on:{click:function(a){t.selectTag(e),t.$emit("tag-selected")}}},[t._v(t._s(e.title))])})),1)},$=[],H={components:{Tag:v},computed:Object(i["a"])({},Object(h["d"])(["tags","selectedTags"]),{},Object(h["c"])(["isTagSelected"])),methods:Object(i["a"])({},Object(h["b"])(["selectTag"]))},V=H,S=Object(f["a"])(V,k,$,!1,null,null,null),M=S.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.show?a("div",{staticClass:"popup"},[t._m(0),a("div",{staticClass:"close",on:{click:function(e){t.show=!1}}},[a("svg",{attrs:{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M9 1L1 9",stroke:"#999999"}}),a("path",{attrs:{d:"M1 1L9 9",stroke:"#999999"}})])]),t._m(1),t._m(2)]):t._e()},E=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"image"},[s("img",{attrs:{src:a("70bc")}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"popup__info",staticStyle:{"margin-top":"8px","margin-bottom":"16px"}},[a("div",{staticClass:"popup__info-text--secondary"},[t._v("По всем вопросам")]),a("div",{staticClass:"popup__info-text--primary"},[a("a",{attrs:{href:"mailto:i@cyrillic.design"}},[t._v("i@cyrillic.design")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"popup__info"},[a("div",{staticClass:"popup__info-text--secondary"},[t._v("Разработка")]),a("div",{staticClass:"popup__info-text--primary"},[a("a",{attrs:{href:"http://re-coders.com",target:"_blank"}},[t._v("re-coders.com")])])])}],B=(a("c975"),{data:function(){return{show:!0}},created:function(){document.cookie.indexOf("seen_popup=")>-1?this.show=!1:document.cookie="seen_popup=1"}}),Z=B,R=(a("5fd9"),Object(f["a"])(Z,P,E,!1,null,"6c5e90bf",null)),N=R.exports,z={name:"App",components:{Navbar:C,Cards:j,Tags:M,Popup:N},data:function(){return{showTags:!1}},created:function(){this.$store.dispatch("fetchTags"),this.$store.dispatch("fetchCards",{page:1,tags:[]})},computed:Object(i["a"])({},Object(h["d"])(["loading"])),methods:{toggleTags:function(){this.showTags=!this.showTags},deleteTag:function(t){this.selectedTags=this.selectedTags.filter((function(e){var a=e.id;return t.id!==a}))}}},D=z,J=(a("5c0b"),Object(f["a"])(D,n,r,!1,null,null,null)),A=J.exports,Y=(a("a4d3"),a("e01a"),a("d28b"),a("99af"),a("caad"),a("45fc"),a("d3b7"),a("2532"),a("3ca3"),a("ddb0"),a("2909")),q=a("bc3a"),F=a.n(q);s["a"].use(h["a"]);var G=new h["a"].Store({state:{tags:[],selectedTags:[],cards:[],cardsCopy:[],page:1,loading:!1,canBeExtended:!0},getters:{isLoading:function(t){return t.loading},isTagSelected:function(t){return function(e){var a=e.slug;return t.selectedTags.some((function(t){return t.slug===a}))}},cards:function(t){if(t.selectedTags.length<=1)return t.cards;var e=[],a=!0,s=!1,n=void 0;try{for(var r,i=t.cards[Symbol.iterator]();!(a=(r=i.next()).done);a=!0){var c=r.value,o=!0,l=!0,d=!1,u=void 0;try{for(var g,f=t.selectedTags[Symbol.iterator]();!(l=(g=f.next()).done);l=!0){var p=g.value;c.slugs.includes(p.slug)||(o=!1)}}catch(v){d=!0,u=v}finally{try{l||null==f.return||f.return()}finally{if(d)throw u}}o&&e.push(c)}}catch(v){s=!0,n=v}finally{try{a||null==i.return||i.return()}finally{if(s)throw n}}return e}},mutations:{setLoading:function(t,e){t.loading=e},addTag:function(t,e){t.selectedTags.push(e)},removeTag:function(t,e){var a=e.slug;t.selectedTags=t.selectedTags.filter((function(t){return t.slug!==a}))},setTags:function(t,e){t.tags=e},setCards:function(t,e){t.cards=e},addCards:function(t,e){t.cards=[].concat(Object(Y["a"])(t.cards),Object(Y["a"])(e))},nextPage:function(t){t.page++},setPage:function(t,e){t.page=e},setContinuation:function(t,e){t.canBeExtended=e}},actions:{selectTag:function(t,e){var a=t.commit,s=t.getters,n=t.dispatch;s.isTagSelected(e)?a("removeTag",e):a("addTag",Object(i["a"])({},e)),a("setPage",1),a("setContinuation",!0),n("fetchCards")},fetchTags:function(t){var e=t.commit;return Object(x["a"])(regeneratorRuntime.mark((function t(){var a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,F.a.get("data/tags.json");case 2:a=t.sent,s=a.data,e("setTags",s.sort((function(t,e){return t.title>e.title?1:e.title>t.title?-1:0})));case 5:case"end":return t.stop()}}),t)})))()},fetchCards:function(t){var e=t.commit,a=t.state;return Object(x["a"])(regeneratorRuntime.mark((function t(){var s,n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a.canBeExtended){t.next=2;break}return t.abrupt("return");case 2:return e("setLoading",!0),s="page-".concat(a.page),a.selectedTags.length>0&&(s="tags-".concat(a.selectedTags[0].slug,"-").concat(a.page)),n=null,t.prev=6,t.next=9,F.a.get("data/".concat(s,".json"));case 9:n=t.sent,t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](6),404==t.t0.response.status&&e("setContinuation",!1);case 15:n&&(r=n.data,1===a.page?e("setCards",r):e("addCards",r)),e("setLoading",!1);case 17:case"end":return t.stop()}}),t,null,[[6,12]])})))()}}}),I=(a("5abe"),a("caf9"));s["a"].config.productionTip=!1,s["a"].use(I["a"]),new s["a"]({store:G,render:function(t){return t(A)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var s=a("9c0c"),n=a.n(s);n.a},"5fd9":function(t,e,a){"use strict";var s=a("cf05"),n=a.n(s);n.a},"70bc":function(t,e,a){t.exports=a.p+"assets/img/boy.ecec6c05.png"},"9b19":function(t,e,a){t.exports=a.p+"assets/img/logo.a6832d9b.svg"},"9c0c":function(t,e,a){},bc0a:function(t,e,a){"use strict";var s=a("2b3d"),n=a.n(s);n.a},cf05:function(t,e,a){},f96a:function(t,e,a){},f99e:function(t,e,a){}});
//# sourceMappingURL=app.e936e82e.js.map