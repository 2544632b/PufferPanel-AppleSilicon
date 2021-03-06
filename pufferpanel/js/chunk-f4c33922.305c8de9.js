(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-f4c33922"], {
    "14bf": function(e, t, s) {
        "use strict";
        s.r(t);
        var n = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("v-container", [s("h1", {
                    domProps: {
                        textContent: e._s(e.$t("servers.Add"))
                    }
                }), s("v-stepper", {
                    model: {
                        value: e.currentStep,
                        callback: function(t) {
                            e.currentStep = t
                        },
                        expression: "currentStep"
                    }
                }, [s("v-stepper-header", [s("v-stepper-step", {
                    attrs: {
                        step: "1",
                        complete: e.currentStep > 1
                    }
                }), s("v-divider"), s("v-stepper-step", {
                    attrs: {
                        step: "2",
                        complete: e.currentStep > 2
                    }
                }), s("v-divider"), s("v-stepper-step", {
                    attrs: {
                        step: "3",
                        complete: e.currentStep > 3
                    }
                }), s("v-divider"), s("v-stepper-step", {
                    attrs: {
                        step: "4",
                        complete: e.currentStep > 4
                    }
                })], 1), s("v-stepper-items", [s("v-stepper-content", {
                    attrs: {
                        step: "1"
                    }
                }, [Object.keys(e.templates).length > 0 ? s("div", [s("h3", {
                    domProps: {
                        textContent: e._s(e.$t("servers.SelectTemplate"))
                    }
                })], 1) : s("div", {
                    staticClass: "text-center text--disabled",
                    domProps: {
                        textContent: e._s(e.$t("templates.NoTemplates"))
                    }
                }), s("v-expansion-panels", e._l(e.templates, (function(t, n) {
                    return s("fragment", {
                        key: n
                    }, [e.filterTemplates(t, e.templateFilter).length > 0 ? s("v-expansion-panel", {
                        attrs: {
                            disabled: ""
                        }
                    }, [s("v-expansion-panel-header", {
                        domProps: {
                            textContent: e._s(n)
                        }
                    })], 1) : e._e(), e._l(e.filterTemplates(t, e.templateFilter), (function(t) {
                        return s("v-expansion-panel", {
                            key: t.name,
                            on: {
                                click: function(s) {
                                    return e.loadTemplateData(t.name)
                                }
                            }
                        }, [s("v-expansion-panel-header", {
                            domProps: {
                                textContent: e._s(t.display)
                            }
                        }), s("v-expansion-panel-content", [void 0 === e.templateData[t.name] ? s("v-row", [s("v-col", {
                            attrs: {
                                cols: "5"
                            }
                        }), s("v-col", {
                            attrs: {
                                cols: "2"
                            }
                        }, [s("v-progress-circular", {
                            staticClass: "mr-2",
                            attrs: {
                                indeterminate: ""
                            }
                        }), s("strong", {
                            domProps: {
                                textContent: e._s(e.$t("common.Loading"))
                            }
                        })], 1)], 1) : s("span", {
                            domProps: {
                                innerHTML: e._s(e.markdown(e.templateData[t.name].readme || e.$t("servers.NoReadme")))
                            }
                        }), s("br"), s("v-btn", {
                            attrs: {
                                color: "success",
                                large: "",
                                block: ""
                            },
                            domProps: {
                                textContent: e._s(e.$t("servers.SelectThisTemplate"))
                            },
                            on: {
                                click: function(s) {
                                    return e.selectTemplate(t.name)
                                }
                            }
                        })], 1)], 1)
                    }))], 2)
                })), 1)], 1), s("v-stepper-content", {
                    attrs: {
                        step: "2"
                    }
                }, [s("v-row", [s("v-col", {
                    attrs: {
                        cols: "12"
                    }
                }, [s("h3", {
                    staticClass: "mb-4",
                    domProps: {
                        textContent: e._s(e.$t("servers.Name"))
                    }
                }), s("ui-input", {
                    attrs: {
                        autofocus: ""
                    },
                    model: {
                        value: e.serverName,
                        callback: function(t) {
                            e.serverName = t
                        },
                        expression: "serverName"
                    }
                })], 1)], 1), s("v-row", [s("v-col", {
                    attrs: {
                        cols: "12"
                    }
                }, [s("h3", {
                    staticClass: "mb-4",
                    domProps: {
                        textContent: e._s(e.$t("nodes.Node"))
                    }
                }), s("ui-select", {
                    attrs: {
                        disabled: e.loadingNodes,
                        items: e.nodes,
                        "no-data-text": e.$t("errors.ErrNoNodes"),
                        placeholder: e.$t("servers.SelectNode")
                    },
                    model: {
                        value: e.selectedNode,
                        callback: function(t) {
                            e.selectedNode = t
                        },
                        expression: "selectedNode"
                    }
                })], 1)], 1), s("v-row", [s("v-col", {
                    attrs: {
                        cols: "12"
                    }
                }, [s("h3", {
                    domProps: {
                        textContent: e._s(e.$t("servers.Environment"))
                    }
                })]), s("v-col", {
                    attrs: {
                        cols: "12"
                    }
                }, [s("ui-select", {
                    attrs: {
                        disabled: e.loadingTemplates,
                        items: e.environments,
                        placeholder: e.$t("servers.SelectEnvironment")
                    },
                    model: {
                        value: e.selectedEnvironment,
                        callback: function(t) {
                            e.selectedEnvironment = t
                        },
                        expression: "selectedEnvironment"
                    }
                })], 1), s("v-col", {
                    attrs: {
                        cols: "12"
                    }
                }, [e.selectedEnvironment && e.environments[e.selectedEnvironment] ? s("ui-env-config", {
                    model: {
                        value: e.environments[e.selectedEnvironment],
                        callback: function(t) {
                            e.$set(e.environments, e.selectedEnvironment, t)
                        },
                        expression: "environments[selectedEnvironment]"
                    }
                }) : e._e()], 1)], 1), s("v-row", [s("v-col", [s("v-btn", {
                    attrs: {
                        large: "",
                        block: "",
                        color: "error"
                    },
                    domProps: {
                        textContent: e._s(e.$t("common.Back"))
                    },
                    on: {
                        click: function(t) {
                            e.currentStep = 1
                        }
                    }
                })], 1), s("v-col", [s("v-btn", {
                    attrs: {
                        large: "",
                        block: "",
                        color: "success",
                        disabled: null == e.selectedNode || null == e.selectedEnvironment || "" == e.serverName
                    },
                    domProps: {
                        textContent: e._s(e.$t("common.Next"))
                    },
                    on: {
                        click: function(t) {
                            e.currentStep = 3
                        }
                    }
                })], 1)], 1)], 1), s("v-stepper-content", {
                    attrs: {
                        step: "3"
                    }
                }, [s("v-row", [s("v-col", {
                    attrs: {
                        cols: "12"
                    }
                }, [s("h3", {
                    staticClass: "mb-4",
                    domProps: {
                        textContent: e._s(e.$t("users.Users"))
                    }
                }), s("ui-input", {
                    attrs: {
                        autofocus: "",
                        placeholder: e.$t("servers.TypeUsername")
                    },
                    model: {
                        value: e.userInput,
                        callback: function(t) {
                            e.userInput = t
                        },
                        expression: "userInput"
                    }
                }), e.users.length > 0 || e.selectedUsers.length > 0 ? s("v-list", [e.users.length > 0 ? s("v-subheader", {
                    domProps: {
                        textContent: e._s(e.$t("users.Add"))
                    }
                }) : e._e(), e.users.length > 0 ? s("v-list-item-group", e._l(e.users, (function(t) {
                    return s("v-list-item", {
                        key: t.value,
                        on: {
                            click: function(s) {
                                return e.selectUser(t.value)
                            }
                        }
                    }, [s("v-list-item-icon", [s("v-icon", [e._v("mdi-plus")])], 1), s("v-list-item-content", [s("v-list-item-title", {
                        domProps: {
                            textContent: e._s(t.text)
                        }
                    })], 1)], 1)
                })), 1) : e._e(), e.selectedUsers.length > 0 ? s("v-subheader", {
                    domProps: {
                        textContent: e._s(e.$t("users.Users"))
                    }
                }) : e._e(), e.selectedUsers.length > 0 ? s("v-list-item-group", e._l(e.selectedUsers, (function(t) {
                    return s("v-list-item", {
                        key: t,
                        on: {
                            click: function(s) {
                                return e.removeUser(t)
                            }
                        }
                    }, [s("v-list-item-icon", [s("v-icon", [e._v("mdi-minus")])], 1), s("v-list-item-content", [s("v-list-item-title", {
                        domProps: {
                            textContent: e._s(t)
                        }
                    })], 1)], 1)
                })), 1) : e._e()], 1) : e._e()], 1)], 1), s("v-row", [s("v-col", [s("v-btn", {
                    attrs: {
                        large: "",
                        block: "",
                        color: "error"
                    },
                    domProps: {
                        textContent: e._s(e.$t("common.Back"))
                    },
                    on: {
                        click: function(t) {
                            e.currentStep = 2
                        }
                    }
                })], 1), s("v-col", [s("v-btn", {
                    attrs: {
                        large: "",
                        block: "",
                        color: "success",
                        disabled: 0 === e.selectedUsers.length
                    },
                    domProps: {
                        textContent: e._s(e.$t("common.Next"))
                    },
                    on: {
                        click: function(t) {
                            e.currentStep = 4
                        }
                    }
                })], 1)], 1)], 1), s("v-stepper-content", {
                    attrs: {
                        step: "4"
                    }
                }, [Object.keys(e.formData).length > 0 ? s("v-row", [s("v-col", {
                    attrs: {
                        cols: "12"
                    }
                }, [s("v-card-title", {
                    domProps: {
                        textContent: e._s(e.$t("common.Options"))
                    }
                }), s("v-row", e._l(e.filteredFormData, (function(t, n) {
                    return s("v-col", {
                        key: n,
                        attrs: {
                            cols: "12"
                        }
                    }, [s("ui-variable-input", {
                        model: {
                            value: e.formData[n],
                            callback: function(t) {
                                e.$set(e.formData, n, t)
                            },
                            expression: "formData[name]"
                        }
                    })], 1)
                })), 1)], 1)], 1) : e._e(), s("v-row", [s("v-col", [s("v-btn", {
                    attrs: {
                        large: "",
                        block: "",
                        color: "error"
                    },
                    domProps: {
                        textContent: e._s(e.$t("common.Back"))
                    },
                    on: {
                        click: function(t) {
                            e.currentStep = 3
                        }
                    }
                })], 1), s("v-col", [s("v-btn", {
                    attrs: {
                        large: "",
                        block: "",
                        color: "success",
                        disabled: !e.canCreate
                    },
                    domProps: {
                        textContent: e._s(e.$t("common.Create"))
                    },
                    on: {
                        click: e.submitCreate
                    }
                })], 1)], 1)], 1)], 1)], 1)], 1)
            },
            i = [],
            r = s("bc3a"),
            a = s.n(r);
        function o(e, t, s) {
            return t in e ? Object.defineProperty(e, t, {
                value: s,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = s, e
        }
        function l(e) {
            for (var t = 1; t < arguments.length; t++) {
                var s = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(s);
                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(s).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(s, e).enumerable
                })))),
                n.forEach((function(t) {
                    o(e, t, s[t])
                }))
            }
            return e
        }
        var c = function(e, t, s) {
                Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function() {
                        return s
                    },
                    set: function(e) {
                        console.warn("tried to set frozen property ".concat(t, " with ").concat(e))
                    }
                })
            },
            p = function(e, t) {
                var s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                Object.defineProperty(e, t, {
                    configurable: !0,
                    writable: !0,
                    value: s
                })
            },
            h = {
                abstract: !0,
                name: "Fragment",
                props: {
                    name: {
                        type: String,
                        default: function() {
                            return Math.floor(Date.now() * Math.random()).toString(16)
                        }
                    }
                },
                mounted: function() {
                    var e = this.$el,
                        t = e.parentNode,
                        s = document.createComment("fragment#".concat(this.name, "#head")),
                        n = document.createComment("fragment#".concat(this.name, "#tail"));
                    t.insertBefore(s, e),
                    t.insertBefore(n, e),
                    e.appendChild = function(s) {
                        t.insertBefore(s, n),
                        c(s, "parentNode", e)
                    },
                    e.insertBefore = function(s, n) {
                        t.insertBefore(s, n),
                        c(s, "parentNode", e)
                    },
                    e.removeChild = function(e) {
                        t.removeChild(e),
                        p(e, "parentNode")
                    },
                    Array.from(e.childNodes).forEach((function(t) {
                        return e.appendChild(t)
                    })),
                    t.removeChild(e),
                    c(e, "parentNode", t),
                    c(e, "nextSibling", n.nextSibling);
                    var i = t.insertBefore;
                    t.insertBefore = function(n, r) {
                        i.call(t, n, r !== e ? r : s)
                    };
                    var r = t.removeChild;
                    t.removeChild = function(a) {
                        if (a === e) {
                            for (; s.nextSibling !== n;)
                                e.removeChild(s.nextSibling);
                            t.removeChild(s),
                            t.removeChild(n),
                            p(e, "parentNode"),
                            t.insertBefore = i,
                            t.removeChild = r
                        } else
                            r.call(t, a)
                    }
                },
                render: function(e) {
                    var t = this,
                        s = this.$slots.default;
                    return s && s.length && s.forEach((function(e) {
                        return e.data = l({}, e.data, {
                            attrs: l({
                                fragment: t.name
                            }, (e.data || {}).attrs)
                        })
                    })), e("div", {
                        attrs: {
                            fragment: this.name
                        }
                    }, s)
                }
            };
        var d = h,
            u = s("8e36");
        const m = a.a.CancelToken;
        var v = {
                components: {
                    Fragment: d
                },
                data() {
                    return {
                        nodes: [],
                        selectedNode: null,
                        templateFilter: "",
                        templates: {},
                        templateData: {},
                        selectedTemplate: "",
                        formData: {},
                        loadingNodes: !0,
                        loadingTemplates: !0,
                        searchingUsers: !0,
                        users: [],
                        selectedUser: null,
                        selectedUsers: [],
                        userInput: null,
                        userCancelSearch: m.source(),
                        serverName: "",
                        selectedEnvironment: null,
                        environments: [],
                        currentStep: 1
                    }
                },
                computed: {
                    canCreate() {
                        if (this.loadingTemplates || this.loadingNodes)
                            return !1;
                        if (!this.selectedTemplate || "" === this.selectedTemplate)
                            return !1;
                        if (0 === this.selectedUsers.length)
                            return !1;
                        if (!this.selectedEnvironment)
                            return !1;
                        for (const e in this.templateData[this.selectedTemplate].data) {
                            const t = this.templateData[this.selectedTemplate].data[e];
                            if ("boolean" !== t.type && (t.required && !t.value))
                                return !1
                        }
                        return !0
                    },
                    filteredFormData() {
                        const e = Object.keys(this.formData).filter(e => this.formData[e].internal),
                            t = {
                                ...this.formData
                            };
                        return e.map(e => {
                            delete t[e]
                        }), t
                    },
                    environmentKeys() {
                        return Object.keys(this.environments[this.selectedEnvironment]).filter(e => -1 === ["type", "value", "text"].indexOf(e))
                    }
                },
                watch: {
                    selectedTemplate(e) {
                        if (!e || "" === e)
                            return;
                        this.formData = this.templateData[e].vars,
                        this.environments = [];
                        for (const n in this.templateData[e].supportedEnvs) {
                            const t = this.templateData[e].supportedEnvs[n];
                            this.environments.push({
                                value: n,
                                text: this.$t("env." + t.type + ".name"),
                                ...t
                            })
                        }
                        const t = this.templateData[e].defaultEnv;
                        let s = null;
                        if (t && t.type && (s = t.type), s) {
                            for (const n in this.environments)
                                if (this.environments[n].type === s) {
                                    this.selectedEnvironment = n;
                                    break
                                }
                        } else
                            this.selectedEnvironment = null;
                        for (const n in this.formData)
                            "boolean" === this.formData[n].type && (this.formData[n].value = "true" === this.formData[n].value)
                    },
                    userInput(e) {
                        e && "" !== e ? new Promise((t, s) => {
                            this.findUsers(e),
                            t()
                        }) : this.users = []
                    }
                },
                mounted() {
                    this.nodes = [{
                        value: null,
                        disabled: !0,
                        text: this.$t("common.Loading")
                    }],
                    this.getTemplates(),
                    this.getNodes()
                },
                methods: {
                    async getTemplates() {
                        this.loadingTemplates = !0,
                        this.templateData = {},
                        this.selectedTemplate = null;
                        const e = await this.$api.getTemplates();
                        e.map(e => {
                            e.display || (e.display = e.name),
                            e.type || (e.type = "none"),
                            this.templates[e.type] || (this.templates[e.type] = []),
                            this.templates[e.type].push(e)
                        });
                        const t = Object.keys(this.templates),
                            s = t.indexOf("other");
                        -1 !== s && this.$delete(t, s),
                        t.map(e => {
                            1 === this.templates[e].length && (this.templates.other || (this.templates.other = []), this.templates.other.push(this.templates[e][0]), delete this.templates[e])
                        }),
                        this.templates = {
                            ...this.templates
                        },
                        this.loadingTemplates = !1
                    },
                    async getNodes() {
                        const e = await this.$api.getNodes();
                        this.nodes = e.map(e => ({
                            value: e.id,
                            text: e.name
                        })),
                        this.nodes.length > 0 && (this.selectedNode = this.nodes[0].value),
                        this.loadingNodes = !1
                    },
                    async findUsers() {
                        this.searchingUsers = !0,
                        this.userCancelSearch.cancel(),
                        this.userCancelSearch = m.source();
                        const e = await this.$api.searchUsers(this.userInput, this.userCancelSearch.token);
                        this.users = e.map(e => ({
                            value: e.username,
                            text: `${e.username} <${e.email}>`
                        })).sort(),
                        this.searchingUsers = !1
                    },
                    async submitCreate() {
                        const e = this.$api.templateToApiJson(this.templateData[this.selectedTemplate], !1);
                        for (const s in e.data)
                            switch (e.data[s].type) {
                            case "integer":
                                e.data[s].value = Number(e.data[s].value);
                                break;
                            case "boolean":
                                e.data[s].value = Boolean(e.data[s].value);
                                break
                            }
                        e.node = this.selectedNode,
                        e.users = this.selectedUsers,
                        e.name = "" !== this.serverName ? this.serverName : void 0,
                        e.environment = {
                            ...this.environments[this.selectedEnvironment]
                        },
                        delete e.environment.text,
                        delete e.environment.value;
                        const t = await this.$api.createServer(e);
                        this.$router.push({
                            name: "Server",
                            params: {
                                id: t
                            }
                        })
                    },
                    selectUser(e) {
                        if (e && "" !== e) {
                            for (let t = 0; t < this.selectedUsers.length; t++)
                                if (this.selectedUsers[t] === e)
                                    return;
                            this.userInput = null,
                            this.selectedUsers.push(e),
                            this.selectedUsers.sort(),
                            this.selectedUser = null,
                            this.users = []
                        }
                    },
                    removeUser(e) {
                        for (let t = 0; t < this.selectedUsers.length; t++)
                            if (this.selectedUsers[t] === e)
                                return void this.selectedUsers.splice(t, 1)
                    },
                    async loadTemplateData(e) {
                        e && (this.templateData[e] || (this.templateData[e] = await this.$api.getTemplate(e), this.templateData = {
                            ...this.templateData
                        }))
                    },
                    selectTemplate(e) {
                        this.loadTemplateData(e),
                        this.selectedTemplate = e,
                        this.currentStep = 2
                    },
                    filterTemplates(e, t) {
                        return e.filter(e => {
                            if ("" === t.trim())
                                return !0;
                            {
                                let s = e.display;
                                return s || (s = e.name), s.toLowerCase().indexOf(t.trim().toLowerCase()) > -1
                            }
                        })
                    },
                    markdown: u["a"]
                }
            },
            f = v,
            b = s("2877"),
            g = s("6544"),
            x = s.n(g),
            C = s("8336"),
            y = s("99d9"),
            $ = s("62ad"),
            k = s("a523"),
            _ = s("ce7e"),
            w = s("4e82"),
            S = s("3206"),
            P = s("80d2"),
            D = s("58df"),
            N = Object(D["a"])(Object(w["a"])("expansionPanels", "v-expansion-panel", "v-expansion-panels"), Object(S["b"])("expansionPanel", !0)).extend({
                name: "v-expansion-panel",
                props: {
                    disabled: Boolean,
                    readonly: Boolean
                },
                data() {
                    return {
                        content: null,
                        header: null,
                        nextIsActive: !1
                    }
                },
                computed: {
                    classes() {
                        return {
                            "v-expansion-panel--active": this.isActive,
                            "v-expansion-panel--next-active": this.nextIsActive,
                            "v-expansion-panel--disabled": this.isDisabled,
                            ...this.groupClasses
                        }
                    },
                    isDisabled() {
                        return this.expansionPanels.disabled || this.disabled
                    },
                    isReadonly() {
                        return this.expansionPanels.readonly || this.readonly
                    }
                },
                methods: {
                    registerContent(e) {
                        this.content = e
                    },
                    unregisterContent() {
                        this.content = null
                    },
                    registerHeader(e) {
                        this.header = e,
                        e.$on("click", this.onClick)
                    },
                    unregisterHeader() {
                        this.header = null
                    },
                    onClick(e) {
                        e.detail && this.header.$el.blur(),
                        this.$emit("click", e),
                        this.isReadonly || this.isDisabled || this.toggle()
                    },
                    toggle() {
                        this.content && (this.content.isBooted = !0),
                        this.$nextTick(() => this.$emit("change"))
                    }
                },
                render(e) {
                    return e("div", {
                        staticClass: "v-expansion-panel",
                        class: this.classes,
                        attrs: {
                            "aria-expanded": String(this.isActive)
                        }
                    }, Object(P["r"])(this))
                }
            }),
            O = s("0789"),
            T = s("9d65"),
            V = s("a9ad");
        const E = Object(D["a"])(T["a"], V["a"], Object(S["a"])("expansionPanel", "v-expansion-panel-content", "v-expansion-panel"));
        var j = E.extend().extend({
                name: "v-expansion-panel-content",
                computed: {
                    isActive() {
                        return this.expansionPanel.isActive
                    }
                },
                created() {
                    this.expansionPanel.registerContent(this)
                },
                beforeDestroy() {
                    this.expansionPanel.unregisterContent()
                },
                render(e) {
                    return e(O["a"], this.showLazyContent(() => [e("div", this.setBackgroundColor(this.color, {
                        staticClass: "v-expansion-panel-content",
                        directives: [{
                            name: "show",
                            value: this.isActive
                        }]
                    }), [e("div", {
                        class: "v-expansion-panel-content__wrap"
                    }, Object(P["r"])(this))])]))
                }
            }),
            B = s("9d26"),
            I = s("5607");
        const A = Object(D["a"])(V["a"], Object(S["a"])("expansionPanel", "v-expansion-panel-header", "v-expansion-panel"));
        var U = A.extend().extend({
                name: "v-expansion-panel-header",
                directives: {
                    ripple: I["a"]
                },
                props: {
                    disableIconRotate: Boolean,
                    expandIcon: {
                        type: String,
                        default: "$expand"
                    },
                    hideActions: Boolean,
                    ripple: {
                        type: [Boolean, Object],
                        default: !1
                    }
                },
                data: () => ({
                    hasMousedown: !1
                }),
                computed: {
                    classes() {
                        return {
                            "v-expansion-panel-header--active": this.isActive,
                            "v-expansion-panel-header--mousedown": this.hasMousedown
                        }
                    },
                    isActive() {
                        return this.expansionPanel.isActive
                    },
                    isDisabled() {
                        return this.expansionPanel.isDisabled
                    },
                    isReadonly() {
                        return this.expansionPanel.isReadonly
                    }
                },
                created() {
                    this.expansionPanel.registerHeader(this)
                },
                beforeDestroy() {
                    this.expansionPanel.unregisterHeader()
                },
                methods: {
                    onClick(e) {
                        this.$emit("click", e)
                    },
                    genIcon() {
                        const e = Object(P["r"])(this, "actions") || [this.$createElement(B["a"], this.expandIcon)];
                        return this.$createElement(O["d"], [this.$createElement("div", {
                            staticClass: "v-expansion-panel-header__icon",
                            class: {
                                "v-expansion-panel-header__icon--disable-rotate": this.disableIconRotate
                            },
                            directives: [{
                                name: "show",
                                value: !this.isDisabled
                            }]
                        }, e)])
                    }
                },
                render(e) {
                    return e("button", this.setBackgroundColor(this.color, {
                        staticClass: "v-expansion-panel-header",
                        class: this.classes,
                        attrs: {
                            tabindex: this.isDisabled ? -1 : null,
                            type: "button"
                        },
                        directives: [{
                            name: "ripple",
                            value: this.ripple
                        }],
                        on: {
                            ...this.$listeners,
                            click: this.onClick,
                            mousedown: () => this.hasMousedown = !0,
                            mouseup: () => this.hasMousedown = !1
                        }
                    }), [Object(P["r"])(this, "default", {
                        open: this.isActive
                    }, !0), this.hideActions || this.genIcon()])
                }
            }),
            L = (s("4069"), s("210b"), s("604c")),
            R = s("d9bd"),
            F = L["a"].extend({
                name: "v-expansion-panels",
                provide() {
                    return {
                        expansionPanels: this
                    }
                },
                props: {
                    accordion: Boolean,
                    disabled: Boolean,
                    flat: Boolean,
                    hover: Boolean,
                    focusable: Boolean,
                    inset: Boolean,
                    popout: Boolean,
                    readonly: Boolean,
                    tile: Boolean
                },
                computed: {
                    classes() {
                        return {
                            ...L["a"].options.computed.classes.call(this),
                            "v-expansion-panels": !0,
                            "v-expansion-panels--accordion": this.accordion,
                            "v-expansion-panels--flat": this.flat,
                            "v-expansion-panels--hover": this.hover,
                            "v-expansion-panels--focusable": this.focusable,
                            "v-expansion-panels--inset": this.inset,
                            "v-expansion-panels--popout": this.popout,
                            "v-expansion-panels--tile": this.tile
                        }
                    }
                },
                created() {
                    this.$attrs.hasOwnProperty("expand") && Object(R["a"])("expand", "multiple", this),
                    Array.isArray(this.value) && this.value.length > 0 && "boolean" === typeof this.value[0] && Object(R["a"])(':value="[true, false, true]"', ':value="[0, 2]"', this)
                },
                methods: {
                    updateItem(e, t) {
                        const s = this.getValue(e, t),
                            n = this.getValue(e, t + 1);
                        e.isActive = this.toggleMethod(s),
                        e.nextIsActive = this.toggleMethod(n)
                    }
                }
            }),
            H = s("132d"),
            M = s("8860"),
            q = s("da13"),
            z = s("5d23"),
            J = s("1baa"),
            G = s("34c3"),
            K = s("490a"),
            Q = s("0fd9"),
            W = (s("8836"), s("a452")),
            X = s("7560");
        const Y = Object(D["a"])(Object(S["b"])("stepper"), W["a"], X["a"]);
        var Z = Y.extend({
            name: "v-stepper",
            provide() {
                return {
                    stepClick: this.stepClick,
                    isVertical: this.vertical
                }
            },
            props: {
                altLabels: Boolean,
                nonLinear: Boolean,
                vertical: Boolean
            },
            data() {
                const e = {
                    isBooted: !1,
                    steps: [],
                    content: [],
                    isReverse: !1
                };
                return e.internalLazyValue = null != this.value ? this.value : (e[0] || {}).step || 1, e
            },
            computed: {
                classes() {
                    return {
                        "v-stepper--is-booted": this.isBooted,
                        "v-stepper--vertical": this.vertical,
                        "v-stepper--alt-labels": this.altLabels,
                        "v-stepper--non-linear": this.nonLinear,
                        ...this.themeClasses
                    }
                }
            },
            watch: {
                internalValue(e, t) {
                    this.isReverse = Number(e) < Number(t),
                    t && (this.isBooted = !0),
                    this.updateView()
                }
            },
            created() {
                this.$listeners.input && Object(R["a"])("@input", "@change", this)
            },
            mounted() {
                this.updateView()
            },
            methods: {
                register(e) {
                    "v-stepper-step" === e.$options.name ? this.steps.push(e) : "v-stepper-content" === e.$options.name && (e.isVertical = this.vertical, this.content.push(e))
                },
                unregister(e) {
                    "v-stepper-step" === e.$options.name ? this.steps = this.steps.filter(t => t !== e) : "v-stepper-content" === e.$options.name && (e.isVertical = this.vertical, this.content = this.content.filter(t => t !== e))
                },
                stepClick(e) {
                    this.$nextTick(() => this.internalValue = e)
                },
                updateView() {
                    for (let e = this.steps.length; --e >= 0;)
                        this.steps[e].toggle(this.internalValue);
                    for (let e = this.content.length; --e >= 0;)
                        this.content[e].toggle(this.internalValue, this.isReverse)
                }
            },
            render(e) {
                return e("div", {
                    staticClass: "v-stepper",
                    class: this.classes
                }, this.$slots.default)
            }
        });
        const ee = Object(D["a"])(Object(S["a"])("stepper", "v-stepper-content", "v-stepper"));
        var te = ee.extend().extend({
            name: "v-stepper-content",
            inject: {
                isVerticalProvided: {
                    from: "isVertical"
                }
            },
            props: {
                step: {
                    type: [Number, String],
                    required: !0
                }
            },
            data() {
                return {
                    height: 0,
                    isActive: null,
                    isReverse: !1,
                    isVertical: this.isVerticalProvided
                }
            },
            computed: {
                computedTransition() {
                    const e = this.$vuetify.rtl ? !this.isReverse : this.isReverse;
                    return e ? O["f"] : O["g"]
                },
                styles() {
                    return this.isVertical ? {
                        height: Object(P["g"])(this.height)
                    } : {}
                }
            },
            watch: {
                isActive(e, t) {
                    e && null == t ? this.height = "auto" : this.isVertical && (this.isActive ? this.enter() : this.leave())
                }
            },
            mounted() {
                this.$refs.wrapper.addEventListener("transitionend", this.onTransition, !1),
                this.stepper && this.stepper.register(this)
            },
            beforeDestroy() {
                this.$refs.wrapper.removeEventListener("transitionend", this.onTransition, !1),
                this.stepper && this.stepper.unregister(this)
            },
            methods: {
                onTransition(e) {
                    this.isActive && "height" === e.propertyName && (this.height = "auto")
                },
                enter() {
                    let e = 0;
                    requestAnimationFrame(() => {
                        e = this.$refs.wrapper.scrollHeight
                    }),
                    this.height = 0,
                    setTimeout(() => this.isActive && (this.height = e || "auto"), 450)
                },
                leave() {
                    this.height = this.$refs.wrapper.clientHeight,
                    setTimeout(() => this.height = 0, 10)
                },
                toggle(e, t) {
                    this.isActive = e.toString() === this.step.toString(),
                    this.isReverse = t
                }
            },
            render(e) {
                const t = {
                        staticClass: "v-stepper__content"
                    },
                    s = {
                        staticClass: "v-stepper__wrapper",
                        style: this.styles,
                        ref: "wrapper"
                    };
                this.isVertical || (t.directives = [{
                    name: "show",
                    value: this.isActive
                }]);
                const n = e("div", s, [this.$slots.default]),
                    i = e("div", t, [n]);
                return e(this.computedTransition, {
                    on: this.$listeners
                }, [i])
            }
        });
        const se = Object(D["a"])(V["a"], Object(S["a"])("stepper", "v-stepper-step", "v-stepper"));
        var ne = se.extend().extend({
            name: "v-stepper-step",
            directives: {
                ripple: I["a"]
            },
            inject: ["stepClick"],
            props: {
                color: {
                    type: String,
                    default: "primary"
                },
                complete: Boolean,
                completeIcon: {
                    type: String,
                    default: "$complete"
                },
                editable: Boolean,
                editIcon: {
                    type: String,
                    default: "$edit"
                },
                errorIcon: {
                    type: String,
                    default: "$error"
                },
                rules: {
                    type: Array,
                    default: () => []
                },
                step: [Number, String]
            },
            data() {
                return {
                    isActive: !1,
                    isInactive: !0
                }
            },
            computed: {
                classes() {
                    return {
                        "v-stepper__step--active": this.isActive,
                        "v-stepper__step--editable": this.editable,
                        "v-stepper__step--inactive": this.isInactive,
                        "v-stepper__step--error error--text": this.hasError,
                        "v-stepper__step--complete": this.complete
                    }
                },
                hasError() {
                    return this.rules.some(e => !0 !== e())
                }
            },
            mounted() {
                this.stepper && this.stepper.register(this)
            },
            beforeDestroy() {
                this.stepper && this.stepper.unregister(this)
            },
            methods: {
                click(e) {
                    e.stopPropagation(),
                    this.$emit("click", e),
                    this.editable && this.stepClick(this.step)
                },
                genIcon(e) {
                    return this.$createElement(B["a"], e)
                },
                genLabel() {
                    return this.$createElement("div", {
                        staticClass: "v-stepper__label"
                    }, this.$slots.default)
                },
                genStep() {
                    const e = !(this.hasError || !this.complete && !this.isActive) && this.color;
                    return this.$createElement("span", this.setBackgroundColor(e, {
                        staticClass: "v-stepper__step__step"
                    }), this.genStepContent())
                },
                genStepContent() {
                    const e = [];
                    return this.hasError ? e.push(this.genIcon(this.errorIcon)) : this.complete ? this.editable ? e.push(this.genIcon(this.editIcon)) : e.push(this.genIcon(this.completeIcon)) : e.push(String(this.step)), e
                },
                toggle(e) {
                    this.isActive = e.toString() === this.step.toString(),
                    this.isInactive = Number(e) < Number(this.step)
                }
            },
            render(e) {
                return e("div", {
                    staticClass: "v-stepper__step",
                    class: this.classes,
                    directives: [{
                        name: "ripple",
                        value: this.editable
                    }],
                    on: {
                        click: this.click
                    }
                }, [this.genStep(), this.genLabel()])
            }
        });
        const ie = Object(P["h"])("v-stepper__header"),
            re = Object(P["h"])("v-stepper__items");
        var ae = s("e0c7"),
            oe = Object(b["a"])(f, n, i, !1, null, null, null);
        t["default"] = oe.exports;
        x()(oe, {
            VBtn: C["a"],
            VCardTitle: y["d"],
            VCol: $["a"],
            VContainer: k["a"],
            VDivider: _["a"],
            VExpansionPanel: N,
            VExpansionPanelContent: j,
            VExpansionPanelHeader: U,
            VExpansionPanels: F,
            VIcon: H["a"],
            VList: M["a"],
            VListItem: q["a"],
            VListItemContent: z["a"],
            VListItemGroup: J["a"],
            VListItemIcon: G["a"],
            VListItemTitle: z["c"],
            VProgressCircular: K["a"],
            VRow: Q["a"],
            VStepper: Z,
            VStepperContent: te,
            VStepperHeader: ie,
            VStepperItems: re,
            VStepperStep: ne,
            VSubheader: ae["a"]
        })
    },
    "210b": function(e, t, s) {},
    8836: function(e, t, s) {}
}]);
//# sourceMappingURL=chunk-f4c33922.305c8de9.js.map


