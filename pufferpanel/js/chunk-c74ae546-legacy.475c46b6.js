(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c74ae546"],{"269a":function(e,t){e.exports=function(e,t){var n="function"===typeof e.exports?e.exports.extendOptions:e.options;for(var i in"function"===typeof e.exports&&(n.directives=e.exports.options.directives),n.directives=n.directives||{},t)n.directives[i]=n.directives[i]||t[i]}},ed81:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("h1",{domProps:{textContent:e._s(e.$t("users.Users"))}}),n("v-row",[n("v-col",[n("v-list",{attrs:{"two-line":"",elevation:"1"}},e._l(e.users,(function(t,i){return n("div",{key:t.id},[n("v-list-item",{attrs:{to:e.hasScope("users.edit")||e.isAdmin()?{name:"User",params:{id:t.id}}:void 0}},[n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:e._s(t.username)}}),n("v-list-item-subtitle",{domProps:{textContent:e._s(t.email)}})],1)],1),i!==e.users.length-1?n("v-divider"):e._e()],1)})),0),e.page<e.pageCount?n("v-row",{directives:[{name:"intersect",rawName:"v-intersect",value:e.lazyLoad,expression:"lazyLoad"}],ref:"lazy"},[n("v-col",{attrs:{cols:"2",offset:"5"}},[n("v-progress-circular",{staticClass:"mr-2",attrs:{indeterminate:""}}),n("span",{domProps:{textContent:e._s(e.$t("common.Loading"))}})],1)],1):e._e(),n("v-btn",{directives:[{name:"show",rawName:"v-show",value:e.hasScope("users.edit")||e.isAdmin(),expression:"hasScope('users.edit') || isAdmin()"}],attrs:{color:"primary",bottom:"",right:"",fixed:"",fab:"",dark:"",large:"",to:{name:"AddUser"}}},[n("v-icon",[e._v("mdi-plus")])],1)],1)],1)],1)},r=[],s=(n("4de4"),n("4160"),n("159b"),n("96cf"),n("1da1")),a={data:function(){return{loading:!1,users:[],page:0,pageCount:1}},methods:{recheckLazy:function(){var e=this.$refs.lazy.getBoundingClientRect(),t=Math.max(document.documentElement.clientHeight,window.innerHeight);!(e.bottom<0||e.top-t>=0)&&this.page<this.pageCount&&this.loadNextPage()},lazyLoad:function(e,t,n){n&&this.loadNextPage()},loadNextPage:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,i,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.loading){t.next=2;break}return t.abrupt("return");case 2:return e.loading=!0,t.next=5,e.$api.getUsers(e.page+1);case 5:n=t.sent,i=n.users,r=n.pages,i.filter((function(t){return 0===e.users.filter((function(e){return t.id===e.id})).length})).forEach((function(t){return e.users.push(t)})),e.page=e.page+1,e.pageCount=r,e.loading=!1,e.recheckLazy();case 13:case"end":return t.stop()}}),t)})))()}}},o=a,c=n("2877"),d=n("6544"),u=n.n(d),l=n("8336"),p=n("62ad"),m=n("a523"),v=n("ce7e"),f=n("132d"),g=n("8860"),h=n("da13"),x=n("5d23"),w=n("490a"),b=n("0fd9"),C=n("269a"),V=n.n(C),y=n("90a2"),L=Object(c["a"])(o,i,r,!1,null,null,null);t["default"]=L.exports;u()(L,{VBtn:l["a"],VCol:p["a"],VContainer:m["a"],VDivider:v["a"],VIcon:f["a"],VList:g["a"],VListItem:h["a"],VListItemContent:x["a"],VListItemSubtitle:x["b"],VListItemTitle:x["c"],VProgressCircular:w["a"],VRow:b["a"]}),V()(L,{Intersect:y["a"]})}}]);
//# sourceMappingURL=chunk-c74ae546-legacy.475c46b6.js.map