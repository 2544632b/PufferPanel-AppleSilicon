(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b6566"],{"1d74":function(e,r,t){"use strict";t.r(r);var n=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[e.server?t("server-render",{attrs:{server:e.server}}):t("v-row",[t("v-col",{staticClass:"d-flex align-center justify-center",attrs:{cols:"12"}},[t("v-progress-circular",{staticClass:"mr-2",attrs:{indeterminate:""}}),t("strong",{domProps:{textContent:e._s(e.$t("common.Loading"))}})],1)],1)],1)},s=[],a=(t("96cf"),t("1da1")),o={data:function(){return{server:null}},mounted:function(){this.loadServer()},beforeDestroy:function(){this.$api.closeServerConnection(this.server.id)},methods:{loadServer:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){var t;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.$api.getServer(e.$route.params.id);case 2:return t=r.sent,r.next=5,e.$api.startServerConnection(t.id);case 5:e.server=t;case 6:case"end":return r.stop()}}),r)})))()}}},i=o,c=t("2877"),u=t("6544"),l=t.n(u),d=t("62ad"),v=t("490a"),f=t("0fd9"),p=Object(c["a"])(i,n,s,!1,null,null,null);r["default"]=p.exports;l()(p,{VCol:d["a"],VProgressCircular:v["a"],VRow:f["a"]})}}]);
//# sourceMappingURL=chunk-2d0b6566-legacy.782d3d6f.js.map