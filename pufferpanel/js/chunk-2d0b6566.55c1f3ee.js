(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b6566"],{"1d74":function(e,r,t){"use strict";t.r(r);var s=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[e.server?t("server-render",{attrs:{server:e.server}}):t("v-row",[t("v-col",{staticClass:"d-flex align-center justify-center",attrs:{cols:"12"}},[t("v-progress-circular",{staticClass:"mr-2",attrs:{indeterminate:""}}),t("strong",{domProps:{textContent:e._s(e.$t("common.Loading"))}})],1)],1)],1)},a=[],n={data(){return{server:null}},mounted(){this.loadServer()},beforeDestroy(){this.$api.closeServerConnection(this.server.id)},methods:{async loadServer(){const e=await this.$api.getServer(this.$route.params.id);await this.$api.startServerConnection(e.id),this.server=e}}},o=n,i=t("2877"),c=t("6544"),l=t.n(c),d=t("62ad"),v=t("490a"),u=t("0fd9"),p=Object(i["a"])(o,s,a,!1,null,null,null);r["default"]=p.exports;l()(p,{VCol:d["a"],VProgressCircular:v["a"],VRow:u["a"]})}}]);
//# sourceMappingURL=chunk-2d0b6566.55c1f3ee.js.map