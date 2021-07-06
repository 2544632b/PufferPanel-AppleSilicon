(function(e) {
    function t(t) {
        for (var a, o, i = t[0], l = t[1], d = t[2], c = 0, u = []; c < i.length; c++)
            o = i[c],
            Object.prototype.hasOwnProperty.call(n, o) && n[o] && u.push(n[o][0]),
            n[o] = 0;
        for (a in l)
            Object.prototype.hasOwnProperty.call(l, a) && (e[a] = l[a]);
        m && m(t);
        while (u.length)
            u.shift()();
        return s.push.apply(s, d || []), r()
    }
    function r() {
        for (var e, t = 0; t < s.length; t++) {
            for (var r = s[t], a = !0, o = 1; o < r.length; o++) {
                var i = r[o];
                0 !== n[i] && (a = !1)
            }
            a && (s.splice(t--, 1), e = l(l.s = r[0]))
        }
        return e
    }
    var a = {},
        o = {
            app: 0
        },
        n = {
            app: 0
        },
        s = [];
    function i(e) {
        return l.p + "js/" + ({}[e] || e) + "." + {
            "chunk-2d0ab43a": "bbd07350",
            "chunk-2d0ac239": "a7e2bfb8",
            "chunk-2d0b6566": "55c1f3ee",
            "chunk-2d0cbae0": "236cfb26",
            "chunk-2d0e68b3": "6708d09f",
            "chunk-2d0e8c9b": "11607062",
            "chunk-2d2086b7": "446f24e5",
            "chunk-2d210f7e": "e3c3402d",
            "chunk-344deed0": "68d1a5a9",
            "chunk-3d89b4ab": "94f89adc",
            "chunk-3d8c34dc": "071e3dc0",
            "chunk-3d8c43c0": "9d33b11a",
            "chunk-aeb07c80": "267ea9e7",
            "chunk-c74ae546": "14347d64",
            "chunk-f4c33922": "305c8de9"
        }[e] + ".js"
    }
    function l(t) {
        if (a[t])
            return a[t].exports;
        var r = a[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(r.exports, r, r.exports, l), r.l = !0, r.exports
    }
    l.e = function(e) {
        var t = [],
            r = {
                "chunk-aeb07c80": 1,
                "chunk-f4c33922": 1
            };
        o[e] ? t.push(o[e]) : 0 !== o[e] && r[e] && t.push(o[e] = new Promise((function(t, r) {
            for (var a = "css/" + ({}[e] || e) + "." + {
                    "chunk-2d0ab43a": "31d6cfe0",
                    "chunk-2d0ac239": "31d6cfe0",
                    "chunk-2d0b6566": "31d6cfe0",
                    "chunk-2d0cbae0": "31d6cfe0",
                    "chunk-2d0e68b3": "31d6cfe0",
                    "chunk-2d0e8c9b": "31d6cfe0",
                    "chunk-2d2086b7": "31d6cfe0",
                    "chunk-2d210f7e": "31d6cfe0",
                    "chunk-344deed0": "31d6cfe0",
                    "chunk-3d89b4ab": "31d6cfe0",
                    "chunk-3d8c34dc": "31d6cfe0",
                    "chunk-3d8c43c0": "31d6cfe0",
                    "chunk-aeb07c80": "146b1a15",
                    "chunk-c74ae546": "31d6cfe0",
                    "chunk-f4c33922": "2657df4a"
                }[e] + ".css", n = l.p + a, s = document.getElementsByTagName("link"), i = 0; i < s.length; i++) {
                var d = s[i],
                    c = d.getAttribute("data-href") || d.getAttribute("href");
                if ("stylesheet" === d.rel && (c === a || c === n))
                    return t()
            }
            var u = document.getElementsByTagName("style");
            for (i = 0; i < u.length; i++) {
                d = u[i],
                c = d.getAttribute("data-href");
                if (c === a || c === n)
                    return t()
            }
            var m = document.createElement("link");
            m.rel = "stylesheet",
            m.type = "text/css",
            m.onload = t,
            m.onerror = function(t) {
                var a = t && t.target && t.target.src || n,
                    s = new Error("Loading CSS chunk " + e + " failed.\n(" + a + ")");
                s.code = "CSS_CHUNK_LOAD_FAILED",
                s.request = a,
                delete o[e],
                m.parentNode.removeChild(m),
                r(s)
            },
            m.href = n;
            var p = document.getElementsByTagName("head")[0];
            p.appendChild(m)
        })).then((function() {
            o[e] = 0
        })));
        var a = n[e];
        if (0 !== a)
            if (a)
                t.push(a[2]);
            else {
                var s = new Promise((function(t, r) {
                    a = n[e] = [t, r]
                }));
                t.push(a[2] = s);
                var d,
                    c = document.createElement("script");
                c.charset = "utf-8",
                c.timeout = 120,
                l.nc && c.setAttribute("nonce", l.nc),
                c.src = i(e);
                var u = new Error;
                d = function(t) {
                    c.onerror = c.onload = null,
                    clearTimeout(m);
                    var r = n[e];
                    if (0 !== r) {
                        if (r) {
                            var a = t && ("load" === t.type ? "missing" : t.type),
                                o = t && t.target && t.target.src;
                            u.message = "Loading chunk " + e + " failed.\n(" + a + ": " + o + ")",
                            u.name = "ChunkLoadError",
                            u.type = a,
                            u.request = o,
                            r[1](u)
                        }
                        n[e] = void 0
                    }
                };
                var m = setTimeout((function() {
                    d({
                        type: "timeout",
                        target: c
                    })
                }), 12e4);
                c.onerror = c.onload = d,
                document.head.appendChild(c)
            }
        return Promise.all(t)
    },
    l.m = e,
    l.c = a,
    l.d = function(e, t, r) {
        l.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    },
    l.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    },
    l.t = function(e, t) {
        if (1 & t && (e = l(e)), 8 & t)
            return e;
        if (4 & t && "object" === typeof e && e && e.__esModule)
            return e;
        var r = Object.create(null);
        if (l.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e)
            for (var a in e)
                l.d(r, a, function(t) {
                    return e[t]
                }.bind(null, a));
        return r
    },
    l.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        } : function() {
            return e
        };
        return l.d(t, "a", t), t
    },
    l.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    },
    l.p = "/",
    l.oe = function(e) {
        throw console.error(e), e
    };
    var d = window["webpackJsonp"] = window["webpackJsonp"] || [],
        c = d.push.bind(d);
    d.push = t,
    d = d.slice();
    for (var u = 0; u < d.length; u++)
        t(d[u]);
    var m = c;
    s.push([0, "chunk-vendors"]),
    r()
})({
    0: function(e, t, r) {
        e.exports = r("56d7")
    },
    "0070": function(e) {
        e.exports = JSON.parse('{"FileManager":"File Manager","NewFolder":"New Folder","NewFile":"New File","LastModified":"Last Modified","ConfirmDelete":"Are you sure you want to delete this file?","Upload":"Upload","Download":"Download","Size":"Size","NoFiles":"There are no files here yet, go and create some for example by clicking the install button at the top of the page","FileLoadFailed":"Failed loading file"}')
    },
    "007e": function(e) {
        e.exports = JSON.parse('{"ErrGeneric":"Erreur inconnue","ErrUnknownError":"Erreur inconnue","ErrInvalidCredentials":"Identifiants invalides","ErrServiceNotAvailable":"Serveur indisponible","ErrEmailNotConfigured":"Email non configuré","ErrTokenInvalid":"Jeton invalide","ErrClientNotFound":"Client introuvable","ErrUserNotFound":"Utilisateur introuvable","ErrLoginNotPermitted":"Connexion non autorisée","ErrInvalidTokenState":"État du jeton (token) invalide","ErrSettingNotConfigured":"{setting} n\'est pas configuré","ErrNoTemplate":"Aucun modèle avec le nom \'{name}\' n\'a été trouvé","ErrServiceInvalidProvider":"{service} ne supporte pas {provider}","ErrFieldRequired":"\\"{field}\\" est requis","ErrFieldMustBePrintable":"{field} doit être des caractères ascii affichables","ErrFieldHasURICharacters":"{field} ne doit pas contenir de caractères qui ne peuvent pas être utilisés dans les URIs","ErrFieldIsInvalidHost":"{field} doit être une IP valide ou FQDN","ErrFieldIsInvalidIP":"{field} doit être une IP valide","ErrFieldTooLarge":"{field} ne peut pas être plus grand que {max}","ErrFieldTooSmall":"{field} ne peut pas être plus petit que {min}","ErrFieldNotBetween":"{field} doit être compris entre {min} et {max}","ErrFieldEqual":"{field1} ne peut pas être égal à {field2}","ErrFieldNotEqual":"{field1} n\'est pas égal à {field2}","ErrFieldNotEmail":"{field} n\'est pas une adresse mail valide","ErrFieldLength":"{field} doit contenir au moins {length} caractères","ErrNoPermission":"Vous n\'avez pas la permission d\'effectuer cette action","ErrDatabaseNotAvailable":"La base de données est indisponible","ErrNoNodes":"Aucun nœud disponible","ErrNoTemplates":"Aucun modèle n\'est disponible","ErrPasswordRequirements":"Le mot de passe doit contenir au moins 8 caractères","ErrUsernameRequirements":"Le nom d\'utilisateur doit comporter au moins 3 caractères et ne contenir que des caractères alphanumériques, _ ou -","ErrPasswordsNotIdentical":"Les mot de passe ne sont pas identiques","ErrSessionTimedOut":"Session expirée, merci de vous reconnecter","ErrMissingScope":"Vous n\'êtes pas autorisé à effectuer cette action","ErrInvalidJson":"Les données JSON sont invalides","ErrSocketFailed":"La connexion WebSocket a rencontré une erreur, certaines fonctionnalités peuvent être ralenties ou indisponibles"}')
    },
    "009c": function(e) {
        e.exports = JSON.parse('{"Templates":"القوالب","NoTemplates":"لا توجد قوالب هنا حتى الآن","Deleted":"تم حذف القالب","New":"إنشاء قالب جديد","Edit":"تحرير قالب","Editor":"المحرر","Json":"JSON","Display":"الإسم الظاهر","Type":"نوع","Variables":"المتغيرات","Install":"تثبيت","AddInstallStep":"إضافة خطوة التثبيت","DeleteInstallStep":"حذف خطوة التثبيت","Description":"الوصف","DataType":"نوع البيانات","DefaultValue":"القيمة الافتراضية","Required":"مطلوب","UserEditable":"يمكن للمستخدمين التعديل","Value":"القيمة","AddOption":"إضافة خيار","AddCommand":"إضافة أمر","Filename":"اسم الملفّ","Content":"المحتوى","Source":"المصدر","Target":"Target","Version":"Version","ReleaseType":"Release Type","AddFile":"Add file","AddVariable":"Add variable","Environment":"Environment","Environments":"Environments","AddEnvironment":"Add environment","DefaultEnvironment":"Default environment","AddEnvVar":"Add env variable","EnvVars":"Environment variables","DockerImage":"Docker Image","SaveSuccess":"Saved Template","VarNameNoSpaces":"A variable name cannot be empty or contain spaces","SupportedEnvironments":"Supported Environments","RunConfig":"Run Configuration","PreHook":"Pre Run Hook","PostHook":"Post Run Hook","AddPreStep":"Add Pre Run Step","AddPostStep":"Add Post Run Step","DeletePreStep":"Delete Pre Run Step","DeletePostStep":"Delete Post Run Step","Shutdown":"Shutdown","Command":"Command","Arguments":"Arguments","AddArgument":"Add an argument","import":{"OverrideWarning":"WARNING: Imported templates WILL overwrite existing templates with the same ID","Import":"Import templates","Tooltip":"Import templates from the official repository","Select":"Select templates to import","Started":"Importing templates, please wait a moment","Successful":"Successfully imported template {template}","NoTemplatesTitle":"Do you want to import templates?","NoTemplatesContent":"You currently don\'t have any templates. Templates are necessary to create servers.<br/>Do you want to import some templates from the official PufferPanel templates repository now?"},"stop":{"Command":"Command","Signal":"Signal"},"processors":{"download":{"ProcessorName":"Download","files":"Files"},"command":{"ProcessorName":"Run Command","commands":"Commands"},"alterfile":{"ProcessorName":"Change file","regex":"Treat search as RegEx","search":"Text to search","replace":"Replace with"},"writefile":{"ProcessorName":"Write to file","text":"Content"},"move":{"ProcessorName":"Move File","source":"Source","target":"Target"},"mkdir":{"ProcessorName":"Create Directory"},"mojangdl":{"ProcessorName":"Download Minecraft"},"forgedl":{"ProcessorName":"Download Minecraft Forge"},"spongeforgedl":{"ProcessorName":"Download Minecraft SpongeForge","releaseType":"Release Type"},"fabricdl":{"ProcessorName":"Download Minecraft Fabric"}}}')
    },
    "00d6": function(e) {
        e.exports = JSON.parse('{"NoEnvFields":"There are no environment specific options for this environment","docker":{"name":"Docker","image":"Image","networkMode":"Network Mode","networkName":"Network Name","bindings":"Bindings","portBindings":"Port Bindings","OutsidePort":"Outside Port","InsidePort":"Inside Port","HostPath":"Host Path","ContainerPath":"Container Path"},"standard":{"name":"Standard"},"tty":{"name":"TTY"}}')
    },
    "00e2": function(e) {
        e.exports = JSON.parse('{"ErrGeneric":"Unknown error","ErrUnknownError":"Unknown error","ErrInvalidCredentials":"Invalid credentials","ErrServiceNotAvailable":"Service not available","ErrEmailNotConfigured":"Email not configured","ErrTokenInvalid":"Token is invalid","ErrClientNotFound":"Client not found","ErrUserNotFound":"User not found","ErrLoginNotPermitted":"Login not permitted","ErrInvalidTokenState":"Invalid token state","ErrSettingNotConfigured":"{setting} is not configured","ErrNoTemplate":"No template with name \'{name}\' was found","ErrServiceInvalidProvider":"{service} does not support {provider}","ErrFieldRequired":"{field} is required","ErrFieldMustBePrintable":"{field} must be printable ascii characters","ErrFieldHasURICharacters":"{field} must not contain characters which cannot be used in URIs","ErrFieldIsInvalidHost":"{field} must be a valid IP or FQDN","ErrFieldIsInvalidIP":"{field} must be a valid IP","ErrFieldTooLarge":"{field} cannot be larger than {max}","ErrFieldTooSmall":"{field} cannot be smaller than {min}","ErrFieldNotBetween":"{field} must be between {min} and {max}","ErrFieldEqual":"{field1} cannot be equal to {field2}","ErrFieldNotEqual":"{field1} is not equal to {field2}","ErrFieldNotEmail":"{field} is not a valid email","ErrFieldLength":"{field} must be at least {length} characters","ErrNoPermission":"You do not have permission to perform this action","ErrDatabaseNotAvailable":"Database is not available","ErrNoNodes":"No nodes available","ErrNoTemplates":"No templates available","ErrPasswordRequirements":"Password must be at least 8 characters","ErrUsernameRequirements":"Username must be at least 3 characters and only contain alphanumerics, _, or -","ErrPasswordsNotIdentical":"Passwords are not the same","ErrSessionTimedOut":"Your session timed out, please log in again","ErrMissingScope":"You are not authorized to perform this action","ErrInvalidJson":"The json data is invalid","ErrSocketFailed":"The WebSocket connection encountered an error, some features might be slow or broken"}')
    },
    "00f7": function(e) {
        e.exports = JSON.parse('{"Server":"Server","NoServers":"There are no servers you have access to","Servers":"Servers","Add":"Add Server","Console":"Console","Controls":"Controls","SFTPInfo":"SFTP Information","Restart":"Restart","Start":"Start","Stop":"Stop","Kill":"Kill","Install":"Install","Send":"Send","Pause":"Pause","CPU":"CPU","Memory":"Memory","Name":"Server Name","SelectNode":"Please select node","SelectTemplate":"Please select template","SelectThisTemplate":"Use this template","SelectUser":"Please select user","Environment":"Environment","SelectEnvironment":"Please select environment","TypeUsername":"Type a username","AdminControls":"Admin Controls","Settings":"Settings","NoEditableVars":"This server does not have variables you can edit","ConfirmDelete":"Do you really want to delete this server? (this cannot be undone)","Delete":"Delete Server","Deleted":"Deleted Server","NoReadme":"No readme available for this template","SftpConnection":"Connect to SFTP","EditDefinition":"Edit Server Definition","Reload":"Reload server data from disk","Reloaded":"Reloaded server data","Autostart":"Start the server when the node starts","Autorestart":"Restart the server when it stops normally","Autorecover":"Restart the server when it crashes"}')
    },
    "01fb": function(e, t, r) {
        "use strict";
        r.r(t);
        var a = function() {
                var e = this,
                    t = e.$createElement,
                    r = e._self._c || t;
                return r("v-card", [r("v-card-title", [r("span", {
                    domProps: {
                        textContent: e._s(e.$t("servers.AdminControls"))
                    }
                })]), r("v-card-text", [r("ui-switch", {
                    attrs: {
                        loading: e.loading,
                        disabled: e.loading,
                        label: e.$t("servers.Autostart")
                    },
                    on: {
                        click: function(t) {
                            return e.toggleSwitch("autostart")
                        }
                    },
                    model: {
                        value: e.autostart,
                        callback: function(t) {
                            e.autostart = t
                        },
                        expression: "autostart"
                    }
                }), r("ui-switch", {
                    attrs: {
                        loading: e.loading,
                        disabled: e.loading,
                        label: e.$t("servers.Autorestart")
                    },
                    on: {
                        click: function(t) {
                            return e.toggleSwitch("autorestart")
                        }
                    },
                    model: {
                        value: e.autorestart,
                        callback: function(t) {
                            e.autorestart = t
                        },
                        expression: "autorestart"
                    }
                }), r("ui-switch", {
                    staticClass: "mb-4",
                    attrs: {
                        loading: e.loading,
                        disabled: e.loading,
                        label: e.$t("servers.Autorecover")
                    },
                    on: {
                        click: function(t) {
                            return e.toggleSwitch("autorecover")
                        }
                    },
                    model: {
                        value: e.autorecover,
                        callback: function(t) {
                            e.autorecover = t
                        },
                        expression: "autorecover"
                    }
                }), r("v-btn", {
                    staticClass: "mb-4",
                    attrs: {
                        block: "",
                        color: "primary"
                    },
                    domProps: {
                        textContent: e._s(e.$t("servers.EditDefinition"))
                    },
                    on: {
                        click: function(t) {
                            return e.editServerDefinition()
                        }
                    }
                }), r("v-btn", {
                    staticClass: "mb-4",
                    attrs: {
                        block: "",
                        color: "primary"
                    },
                    domProps: {
                        textContent: e._s(e.$t("servers.Reload"))
                    },
                    on: {
                        click: function(t) {
                            return e.reloadServer()
                        }
                    }
                }), r("v-btn", {
                    attrs: {
                        block: "",
                        color: "error"
                    },
                    domProps: {
                        textContent: e._s(e.$t("servers.Delete"))
                    },
                    on: {
                        click: function(t) {
                            e.confirmDeleteOpen = !0
                        }
                    }
                }), r("ui-overlay", {
                    attrs: {
                        card: "",
                        closable: ""
                    },
                    scopedSlots: e._u([{
                        key: "title",
                        fn: function() {
                            return [r("span", {
                                domProps: {
                                    textContent: e._s(e.$t("servers.EditDefinition"))
                                }
                            }), r("div", {
                                staticStyle: {
                                    "flex-grow": "50"
                                }
                            }), r("v-btn-toggle", {
                                attrs: {
                                    borderless: "",
                                    dense: "",
                                    mandatory: ""
                                },
                                model: {
                                    value: e.editMode,
                                    callback: function(t) {
                                        e.editMode = t
                                    },
                                    expression: "editMode"
                                }
                            }, [r("v-btn", {
                                attrs: {
                                    value: "editor"
                                },
                                domProps: {
                                    textContent: e._s(e.$t("templates.Editor"))
                                }
                            }), r("v-btn", {
                                attrs: {
                                    value: "json"
                                },
                                domProps: {
                                    textContent: e._s(e.$t("templates.Json"))
                                }
                            })], 1)]
                        },
                        proxy: !0
                    }]),
                    model: {
                        value: e.editDefinition,
                        callback: function(t) {
                            e.editDefinition = t
                        },
                        expression: "editDefinition"
                    }
                }, ["editor" === e.editMode ? r("template-editor", {
                    attrs: {
                        server: ""
                    },
                    model: {
                        value: e.definition,
                        callback: function(t) {
                            e.definition = t
                        },
                        expression: "definition"
                    }
                }) : r("ace", {
                    ref: "editor",
                    attrs: {
                        "editor-id": e.server.id,
                        height: "75vh",
                        lang: "json"
                    },
                    model: {
                        value: e.defJson,
                        callback: function(t) {
                            e.defJson = t
                        },
                        expression: "defJson"
                    }
                }), r("v-btn", {
                    staticClass: "mt-4",
                    attrs: {
                        block: "",
                        color: "success"
                    },
                    domProps: {
                        textContent: e._s(e.$t("common.Save"))
                    },
                    on: {
                        click: function(t) {
                            return e.saveServerDefinition()
                        }
                    }
                })], 1), r("v-dialog", {
                    attrs: {
                        "max-width": "600"
                    },
                    model: {
                        value: e.confirmDeleteOpen,
                        callback: function(t) {
                            e.confirmDeleteOpen = t
                        },
                        expression: "confirmDeleteOpen"
                    }
                }, [r("v-card", [r("v-card-title", {
                    domProps: {
                        textContent: e._s(e.$t("servers.ConfirmDelete"))
                    }
                }), r("v-card-actions", [r("v-spacer"), r("v-btn", {
                    attrs: {
                        color: "error"
                    },
                    domProps: {
                        textContent: e._s(e.$t("common.Cancel"))
                    },
                    on: {
                        click: function(t) {
                            e.confirmDeleteOpen = !1
                        }
                    }
                }), r("v-btn", {
                    attrs: {
                        color: "success"
                    },
                    domProps: {
                        textContent: e._s(e.$t("common.Confirm"))
                    },
                    on: {
                        click: function(t) {
                            return e.deleteConfirmed()
                        }
                    }
                })], 1)], 1)], 1)], 1)], 1)
            },
            o = [],
            n = {
                props: {
                    server: {
                        type: Object,
                        default: () => {}
                    }
                },
                data() {
                    return {
                        confirmDeleteOpen: !1,
                        loading: !0,
                        autostart: !1,
                        autorestart: !1,
                        autorecover: !1,
                        editDefinition: !1,
                        editMode: "editor",
                        definition: {},
                        defJson: ""
                    }
                },
                watch: {
                    editMode(e) {
                        "editor" === e ? this.definition = this.$api.templateFromApiJson(this.defJson, !0) : (this.defJson = this.$api.templateToApiJson(this.definition), this.$refs.editor && this.$refs.editor.ready && this.$refs.editor.setValue(this.defJson))
                    }
                },
                mounted() {
                    this.loadData()
                },
                methods: {
                    async loadData() {
                        this.loading = !0;
                        const e = await this.$api.getServerDefinition(this.server.id);
                        this.autostart = !!e.run.autostart,
                        this.autorestart = !!e.run.autorestart,
                        this.autorecover = !!e.run.autorecover,
                        this.loading = !1
                    },
                    async toggleSwitch(e) {
                        this.loading = !0;
                        const t = {
                            run: {}
                        };
                        t.run[e] = this[e],
                        await this.$api.updateServerDefinition(this.server.id, t),
                        this.loadData()
                    },
                    async reloadServer() {
                        await this.$api.reloadServer(this.server.id),
                        this.$toast.success(this.$t("servers.Reloaded"))
                    },
                    async deleteConfirmed() {
                        await this.$api.deleteServer(this.server.id),
                        this.$toast.success(this.$t("servers.Deleted")),
                        this.$router.push({
                            name: "Servers"
                        })
                    },
                    async editServerDefinition() {
                        this.definition = this.$api.templateFromApiJson(await this.$api.getServerDefinition(this.server.id), !0),
                        this.editDefinition = !0
                    },
                    async saveServerDefinition() {
                        await this.$api.updateServerDefinition(this.server.id, this.$api.templateToApiJson(this.definition)),
                        this.editDefinition = !1
                    }
                }
            },
            s = n,
            i = r("2877"),
            l = r("6544"),
            d = r.n(l),
            c = r("8336"),
            u = r("a609"),
            m = r("b0af"),
            p = r("99d9"),
            v = r("169a"),
            f = r("2fa4"),
            S = Object(i["a"])(s, a, o, !1, null, null, null);
        t["default"] = S.exports;
        d()(S, {
            VBtn: c["a"],
            VBtnToggle: u["a"],
            VCard: m["a"],
            VCardActions: p["a"],
            VCardText: p["c"],
            VCardTitle: p["d"],
            VDialog: v["a"],
            VSpacer: f["a"]
        })
    },
    "02cb": function(e, t, r) {
        "use strict";
        r.r(t);
        var a = function() {
                var e = this,
                    t = e.$createElement,
                    r = e._self._c || t;
                return r("div", [r("v-list", e._l(e.value, (function(t, a) {
                    return r("v-list-item", {
                        key: a,
                        attrs: {
                            link: ""
                        },
                        on: {
                            click: function(t) {
                                return e.startEdit(a)
                            }
                        }
                    }, [r("v-list-item-content", {
                        domProps: {
                            textContent: e._s(t.type)
                        }
                    }), r("v-list-item-action", {
                        staticClass: "flex-row"
                    }, [r("v-tooltip", {
                        attrs: {
                            bottom: ""
                        },
                        scopedSlots: e._u([{
                            key: "activator",
                            fn: function(t) {
                                var a = t.on;
                                return [r("v-btn", e._g({
                                    attrs: {
                                        icon: ""
                                    }
                                }, a), [r("v-icon", [e._v("mdi-pencil")])], 1)]
                            }
                        }], null, !0)
                    }, [r("span", {
                        domProps: {
                            textContent: e._s(e.$t("common.Edit"))
                        }
                    })]), r("v-tooltip", {
                        attrs: {
                            bottom: ""
                        },
                        scopedSlots: e._u([{
                            key: "activator",
                            fn: function(t) {
                                var o = t.on;
                                return [r("v-btn", e._g({
                                    attrs: {
                                        icon: ""
                                    },
                                    on: {
                                        click: function(t) {
                                            return t.stopPropagation(), e.remove(a)
                                        }
                                    }
                                }, o), [r("v-icon", [e._v("mdi-close")])], 1)]
                            }
                        }], null, !0)
                    }, [r("span", {
                        domProps: {
                            textContent: e._s(e.$t("common.Delete"))
                        }
                    })])], 1)], 1)
                })), 1), r("v-btn", {
                    attrs: {
                        text: "",
                        block: ""
                    },
                    domProps: {
                        textContent: e._s(e.$t("common.Add"))
                    },
                    on: {
                        click: function(t) {
                            return e.add()
                        }
                    }
                }), r("ui-overlay", {
                    attrs: {
                        card: "",
                        closable: ""
                    },
                    on: {
                        close: function(t) {
                            return e.reset()
                        }
                    },
                    model: {
                        value: e.edit,
                        callback: function(t) {
                            e.edit = t
                        },
                        expression: "edit"
                    }
                }, [r("v-row", [r("v-col", {
                    attrs: {
                        cols: "12"
                    }
                }, [r("template-processor", {
                    model: {
                        value: e.currentEdit,
                        callback: function(t) {
                            e.currentEdit = t
                        },
                        expression: "currentEdit"
                    }
                })], 1), r("v-col", {
                    attrs: {
                        cols: "12"
                    }
                }, [r("v-btn", {
                    attrs: {
                        color: "success",
                        block: ""
                    },
                    domProps: {
                        textContent: e._s(e.$t("common.Save"))
                    },
                    on: {
                        click: function(t) {
                            return e.save()
                        }
                    }
                })], 1)], 1)], 1)], 1)
            },
            o = [],
            n = (r("ddb0"), {
                props: {
                    value: {
                        type: Array,
                        default: () => []
                    }
                },
                data() {
                    return {
                        template: {
                            type: "command"
                        },
                        new: !1,
                        edit: !1,
                        editIndex: 0,
                        currentEdit: {}
                    }
                },
                methods: {
                    add() {
                        const e = [...this.value];
                        e.push({
                            ...this.template
                        }),
                        this.new = !0,
                        this.$emit("input", e),
                        this.startEdit(this.value.length, !0)
                    },
                    startEdit(e, t=!1) {
                        this.editIndex = e,
                        this.currentEdit = t ? {
                            ...this.template
                        } : {
                            ...this.value[e]
                        },
                        this.edit = !0
                    },
                    remove(e) {
                        const t = [...this.value];
                        t.splice(e, 1),
                        this.$emit("input", t)
                    },
                    save() {
                        const e = [...this.value];
                        e[this.editIndex] = this.currentEdit,
                        this.$emit("input", e),
                        this.reset(!1)
                    },
                    reset(e=!0) {
                        if (this.new && e) {
                            const e = [...this.value];
                            e.splice(this.editIndex, 1),
                            this.$emit("input", e)
                        }
                        this.new = !1,
                        this.edit = !1,
                        this.editIndex = 0,
                        this.currentEdit = {}
                    }
                }
            }),
            s = n,
            i = r("2877"),
            l = r("6544"),
            d = r.n(l),
            c = r("8336"),
            u = r("62ad"),
            m = r("132d"),
            p = r("8860"),
            v = r("da13"),
            f = r("1800"),
            S = r("5d23"),
            g = r("0fd9"),
            h = r("3a2f"),
            E = Object(i["a"])(s, a, o, !1, null, null, null);
        t["default"] = E.exports;
        d()(E, {
            VBtn: c["a"],
            VCol: u["a"],
            VIcon: m["a"],
            VList: p["a"],
            VListItem: v["a"],
            VListItemAction: f["a"],
            VListItemContent: S["a"],
            VRow: g["a"],
            VTooltip: h["a"]
        })
    },
    "03f0": function(e, t, r) {
        "use strict";
        r.r(t);
        var a = function() {
                var e = this,
                    t = e.$createElement,
                    r = e._self._c || t;
                return r("v-container", [e._l(e.value, (function(t, a) {
                    return r("v-row", {
                        key: a
                    }, [r("v-col", {
                        attrs: {
                            cols: "12"
                        }
                    }, [r("v-divider")], 1), r("v-col", {
                        staticClass: "d-flex align-center",
                        attrs: {
                            cols: "12"
                        }
                    }, [r("div", [e._v(e._s(t))]), r("div", {
                        staticClass: "flex-grow-1"
                    }), r("v-btn", {
                        attrs: {
                            icon: ""
                        },
                        on: {
                            click: function(t) {
                                return e.startEdit(a)
                            }
                        }
                    }, [r("v-icon", [e._v("mdi-pencil")])], 1), r("v-btn", {
                        attrs: {
                            icon: ""
                        },
                        on: {
                            click: function(t) {
                                return e.remove(a)
                            }
                        }
                    }, [r("v-icon", [e._v("mdi-close")])], 1)], 1)], 1)
                })), r("v-row", [r("v-col", {
                    attrs: {
                        cols: "12"
                    }
                }, [r("v-btn", {
                    attrs: {
                        text: "",
                        block: ""
                    },
                    domProps: {
                        textContent: e._s(e.$t("common.Add"))
                    },
                    on: {
                        click: function(t) {
                            return e.add()
                        }
                    }
                })], 1)], 1), r("ui-overlay", {
                    attrs: {
                        card: "",
                        closable: ""
                    },
                    on: {
                        close: function(t) {
                            return e.reset()
                        }
                    },
                    model: {
                        value: e.edit,
                        callback: function(t) {
                            e.edit = t
                        },
                        expression: "edit"
                    }
                }, [r("v-row", [r("v-col", {
                    attrs: {
                        cols: "12",
                        lg: "3"
                    }
                }, [r("ui-input", {
                    attrs: {
                        label: e.$t("common.Host")
                    },
                    model: {
                        value: e.host,
                        callback: function(t) {
                            e.host = t
                        },
                        expression: "host"
                    }
                })], 1), r("v-col", {
                    attrs: {
                        cols: "12",
                        lg: "3"
                    }
                }, [r("ui-input", {
                    attrs: {
                        type: "number",
                        label: e.$t("env.docker.OutsidePort")
                    },
                    model: {
                        value: e.outsidePort,
                        callback: function(t) {
                            e.outsidePort = t
                        },
                        expression: "outsidePort"
                    }
                })], 1), r("v-col", {
                    attrs: {
                        cols: "12",
                        lg: "3"
                    }
                }, [r("ui-input", {
                    attrs: {
                        type: "number",
                        label: e.$t("env.docker.InsidePort")
                    },
                    model: {
                        value: e.insidePort,
                        callback: function(t) {
                            e.insidePort = t
                        },
                        expression: "insidePort"
                    }
                })], 1), r("v-col", {
                    attrs: {
                        cols: "12",
                        lg: "3"
                    }
                }, [r("ui-input-suggestions", {
                    attrs: {
                        label: e.$t("common.Protocol"),
                        items: ["tcp", "udp"]
                    },
                    model: {
                        value: e.protocol,
                        callback: function(t) {
                            e.protocol = t
                        },
                        expression: "protocol"
                    }
                })], 1)], 1), r("v-row", [r("v-col", {
                    attrs: {
                        cols: "12"
                    }
                }, [r("v-btn", {
                    attrs: {
                        color: "success",
                        block: ""
                    },
                    domProps: {
                        textContent: e._s(e.$t("common.Save"))
                    },
                    on: {
                        click: function(t) {
                            return e.save()
                        }
                    }
                })], 1)], 1)], 1)], 2)
            },
            o = [],
            n = (r("ddb0"), {
                props: {
                    value: {
                        type: Array,
                        required: !0
                    }
                },
                data() {
                    return {
                        edit: !1,
                        new: !0,
                        editIndex: 0,
                        host: "0.0.0.0",
                        outsidePort: "",
                        insidePort: "",
                        protocol: "tcp"
                    }
                },
                methods: {
                    onInput(e, t) {
                        const r = [...this.value];
                        r[e] = t,
                        this.$emit("input", r)
                    },
                    remove(e) {
                        const t = [...this.value];
                        t.splice(e, 1),
                        this.$emit("input", t)
                    },
                    reset() {
                        this.host = "0.0.0.0",
                        this.outsidePort = "",
                        this.insidePort = "",
                        this.protocol = "tcp",
                        this.edit = !1,
                        this.new = !0,
                        this.editIndex = 0
                    },
                    add() {
                        this.new = !0,
                        this.edit = !0
                    },
                    startEdit(e) {
                        this.editIndex = e,
                        this.new = !1;
                        const t = this.value[e];
                        this.host = t.split(":")[0],
                        this.outsidePort = t.split(":")[1],
                        this.insidePort = t.split(":")[2].split("/")[0],
                        this.protocol = t.split("/")[1],
                        this.edit = !0
                    },
                    save() {
                        const e = [...this.value],
                            t = `${this.host}:${this.outsidePort}:${this.insidePort}/${this.protocol}`;
                        this.new ? e.push(t) : e[this.editIndex] = t,
                        this.reset(),
                        this.$emit("input", e)
                    }
                }
            }),
            s = n,
            i = r("2877"),
            l = r("6544"),
            d = r.n(l),
            c = r("8336"),
            u = r("62ad"),
            m = r("a523"),
            p = r("ce7e"),
            v = r("132d"),
            f = r("0fd9"),
            S = Object(i["a"])(s, a, o, !1, null, null, null);
        t["default"] = S.exports;
        d()(S, {
            VBtn: c["a"],
            VCol: u["a"],
            VContainer: m["a"],
            VDivider: p["a"],
            VIcon: v["a"],
            VRow: f["a"]
        })
    },
    "04a2": function(e) {
        e.exports = JSON.parse('{"Templates":"Şablonlar","NoTemplates":"Burada henüz şablon yok","Deleted":"Şablon silindi","New":"Yeni şablon oluştur","Edit":"Şablon düzenle","Editor":"Düzenleyici","Json":"JSON","Display":"Görüntülenen İsim","Type":"Tip","Variables":"Değişkenler","Install":"Kurulum","AddInstallStep":"Kurulum aşaması ekle","DeleteInstallStep":"Kurulum aşaması sil","Description":"Açıklama","DataType":"Veri Tipi","DefaultValue":"Varsayılan Değer","Required":"Gerekli","UserEditable":"Kullanıcılar düzenleyebilir","Value":"Değer","AddOption":"Bir seçenek ekle","AddCommand":"Komut Ekle","Filename":"Dosya Adı","Content":"İçerik","Source":"Kaynak","Target":"Hedef","Version":"Versiyon","ReleaseType":"Yayın Türü","AddFile":"Dosya ekle","AddVariable":"Değişken ekle","Environment":"Environment","Environments":"Ortamlar","AddEnvironment":"Ortam ekle","DefaultEnvironment":"Varsayılan Ortam","AddEnvVar":"Add env variable","EnvVars":"Ortam Değişkenleri","DockerImage":"Docker Görüntüsü","SaveSuccess":"Şablon Kaydedildi","VarNameNoSpaces":"Değişken adı boş olamaz veya boşluk içeremez","SupportedEnvironments":"Desteklenen Ortamlar","RunConfig":"Yapılandırmayı Çalıştır","PreHook":"Pre Run Hook","PostHook":"Post Run Hook","AddPreStep":"Add Pre Run Step","AddPostStep":"Add Post Run Step","DeletePreStep":"Delete Pre Run Step","DeletePostStep":"Delete Post Run Step","Shutdown":"Kapat","Command":"Komut","Arguments":"Argümanlar","AddArgument":"Argüman Ekle","import":{"OverrideWarning":"UYARI: İçe aktarılan şablonlar, Mevcut şablonların üzerine YAZILACAK","Import":"Şablonları içe aktar","Tooltip":"Import templates from the official repository","Select":"Select templates to import","Started":"Importing templates, please wait a moment","Successful":"Successfully imported template {template}","NoTemplatesTitle":"Do you want to import templates?","NoTemplatesContent":"You currently don\'t have any templates. Templates are necessary to create servers.<br/>Do you want to import some templates from the official PufferPanel templates repository now?"},"stop":{"Command":"Komut","Signal":"Sinyal"},"processors":{"download":{"ProcessorName":"İndir","files":"Dosyalar"},"command":{"ProcessorName":"Komut Çalıştır","commands":"Komutlar"},"alterfile":{"ProcessorName":"Change file","regex":"Treat search as RegEx","search":"Text to search","replace":"Replace with"},"writefile":{"ProcessorName":"Dosyaya Yaz","text":"İçerik"},"move":{"ProcessorName":"Dosya Taşı","source":"Kaynak","target":"Hedef"},"mkdir":{"ProcessorName":"Dizin Oluştur"},"mojangdl":{"ProcessorName":"Minecraft İndir"},"forgedl":{"ProcessorName":"Minecraft Forge İndir"},"spongeforgedl":{"ProcessorName":"Minecraft SpongeForge İndir","releaseType":"Release Type"},"fabricdl":{"ProcessorName":"Minecraft Fabric İndir"}}}')
    },
    "0548": function(e) {
        e.exports = JSON.parse('{"ServersView":"Puede ver este servidor","ServersEdit":"Editar el servidor","ServersInstall":"Instalar el servidor","ServersConsole":"Ver la consola","ServersConsoleSend":"Enviar comandos a la consola","ServersStop":"Detener y matar el servidor","ServersStart":"Iniciar el servidor","ServersStat":"Ver estadísticas de CPU y memoria","ServersFiles":"Permitir el acceso a archivos usando SFTP","ServersFilesGet":"Ver y descargar archivos usando el gestor de archivos","ServersFilesPut":"Editar y subir archivos usando el gestor de archivos","ServersEditUsers":"Editar el acceso del usuario a este servidor","Admin":"Admin (esto concede todos los permisos posibles)","ViewServers":"See Servers","CreateServers":"Crear nuevos servidores","DeleteServers":"Eliminar servidores","EditServerAdmin":"Editar ajustes del servidor","ViewNodes":"Ver nodos","EditNodes":"Editar Nodos","DeployNodes":"Desplegar nuevos nodos","ViewTemplates":"Ver Más Plantillas","EditTemplates":"Editar Plantillas","ViewUsers":"Ver todos los usuarios","EditUsers":"Editar otros usuarios"}')
    },
    "05a8": function(e) {
        e.exports = JSON.parse('{"NoEnvFields":"There are no environment specific options for this environment","docker":{"name":"Docker -> nama","image":"docker -> gambar","networkMode":"Network Mode","networkName":"Network Name","bindings":"Bindings","portBindings":"Port Bindings","OutsidePort":"Outside Port","InsidePort":"Inside Port","HostPath":"Host Path","ContainerPath":"Container Path"},"standard":{"name":"standar -> nama"},"tty":{"name":"tty -> nama"}}')
    },
    "0651": function(e) {
        e.exports = JSON.parse('{"NoEnvFields":"Nie ma opcji specyficznych dla tego środowiska","docker":{"name":"Docker","image":"Obraz","networkMode":"Tryb sieci","networkName":"Nazwa sieci","bindings":"Powiązania","portBindings":"Przypięcia portów","OutsidePort":"Port zewnętrzny","InsidePort":"Port wewnętrzny","HostPath":"Ścieżka hosta","ContainerPath":"Ścieżka kontenera"},"standard":{"name":"Standardowy"},"tty":{"name":"TTY"}}')
    },
    "06b9": function(e) {
        e.exports = JSON.parse('{"NoEnvFields":"There are no environment specific options for this environment","docker":{"name":"Docker","image":"Görüntü","networkMode":"Ağ Modu","networkName":"Ağ Adı","bindings":"Atamalar","portBindings":"Port Atamaları","OutsidePort":"Çıkış Portu","InsidePort":"Giriş Portu","HostPath":"Sunucu Yolu","ContainerPath":"Container Yolu"},"standard":{"name":"Standart"},"tty":{"name":"TTY"}}')
    },
    "0753": function(e) {
        e.exports = JSON.parse('{"Id":"ID","Name":"Navn","Address":"Adresse","Online":"Online","Offline":"Offline","Loading":"Indlæser...","General":"Generelt","Language":"Sprog","SelectLanguage":"Vælg sprog","Settings":"Indstillinger","Update":"Opdatér","Edit":"Rediger","Delete":"Slet","Create":"Opret","Save":"Gem","Saved":"Gemt","SaveFailed":"Kunne ikke gemme","Cancel":"Annuller","Confirm":"Bekræft","Actions":"Handlinger","Host":"Vært","Port":"Port","Template":"Skabelon","Options":"Valgmuligheder","Collapse":"Minimer","Copied":"Kopieret til udklipsholder","Unknown":"Ukendt","Search":"Søg","Back":"Tilbage","Next":"Næste","LanguageName":"Dansk","Details":"Detaljer","ErrorDetails":"Fejloplysninger","HelpTranslate":"Hjælp os med at oversætte PufferPanel","DarkMode":"Mørke tilstand","ThemeOptions":"Indstillinger for tema","Protocol":"Protokol","Add":"Tilføj"}')
    },
    "07cb": function(e) {
        e.exports = JSON.parse('{"FileManager":"File Manager","NewFolder":"New Folder","NewFile":"New File","LastModified":"Last Modified","ConfirmDelete":"Are you sure you want to delete this file?","Upload":"Upload","Download":"Download","Size":"Size","NoFiles":"There are no files here yet, go and create some for example by clicking the install button at the top of the page","FileLoadFailed":"Failed loading file"}')
    },
    "0834": function(e) {
        e.exports = JSON.parse('{"ErrGeneric":"Tuntematon virhe","ErrUnknownError":"Tuntematon virhe","ErrInvalidCredentials":"Virheelliset kirjautumistiedot","ErrServiceNotAvailable":"Palvelu ei ole käytettävissä","ErrEmailNotConfigured":"Email ei ole configuroitu","ErrTokenInvalid":"Tokeni on virheellinen","ErrClientNotFound":"Asiakasta ei löydy","ErrUserNotFound":"Käyttäjää ei löydy","ErrLoginNotPermitted":"Kirjautuminen vaatii isomman luvan","ErrInvalidTokenState":"Virheellinen tokenin tila","ErrSettingNotConfigured":"{setting] ei ole mukautettu","ErrNoTemplate":"No template with name \'{name}\' was found","ErrServiceInvalidProvider":"{service} does not support {provider}","ErrFieldRequired":"{field} is required","ErrFieldMustBePrintable":"{field} must be printable ascii characters","ErrFieldHasURICharacters":"{field} must not contain characters which cannot be used in URIs","ErrFieldIsInvalidHost":"{field} must be a valid IP or FQDN","ErrFieldIsInvalidIP":"{field} must be a valid IP","ErrFieldTooLarge":"{field} cannot be larger than {max}","ErrFieldTooSmall":"{field} cannot be smaller than {min}","ErrFieldNotBetween":"{field} must be between {min} and {max}","ErrFieldEqual":"{field1} cannot be equal to {field2}","ErrFieldNotEqual":"{field1} is not equal to {field2}","ErrFieldNotEmail":"{field} is not a valid email","ErrFieldLength":"{field} must be at least {length} characters","ErrNoPermission":"You do not have permission to perform this action","ErrDatabaseNotAvailable":"Database is not available","ErrNoNodes":"No nodes available","ErrNoTemplates":"No templates available","ErrPasswordRequirements":"Password must be at least 8 characters","ErrUsernameRequirements":"Username must be at least 3 characters and only contain alphanumerics, _, or -","ErrPasswordsNotIdentical":"Passwords are not the same","ErrSessionTimedOut":"Your session timed out, please log in again","ErrMissingScope":"You are not authorized to perform this action","ErrInvalidJson":"The json data is invalid","ErrSocketFailed":"The WebSocket connection encountered an error, some features might be slow or broken"}')
    },
    "0872": function(e) {
        e.exports = JSON.parse('{"Node":"Nodo","Nodes":"Nodos","Edit":"Editar Nodo","Add":"Añadir Nodo","Update":"Actualizar Nodo","Delete":"Eliminar Nodo","PublicHost":"Host publico","PublicPort":"Puerto publico","PrivateHost":"Host privado","PrivatePort":"Puerto privado","SftpPort":"Puerto SFTP","SaveConfig":"Guardar configuración","SavePublicKey":"Guardar clave pública","DeploymentInstruction":"Para desplegar el nodo, instale PufferPanel en el nuevo servidor y coloque el archivo de configuración en `etc/pufferpanel/`<br/>Después en el nuevo servidor reinicie PufferPanel.","UpdateSuccess":"Nodo actualizado correctamente","UpdateError":"Error al actualizar el nodo"}')
    },
    "094f": function(e) {
        e.exports = JSON.parse('{"ErrGeneric":"Неизвестная ошибка","ErrUnknownError":"Неизвестная ошибка","ErrInvalidCredentials":"Неправильное имя пользователя или пароль","ErrServiceNotAvailable":"Сервис недоступен","ErrEmailNotConfigured":"Сервер электронной почты не настроен","ErrTokenInvalid":"Неверный токен","ErrClientNotFound":"Клиент не найден","ErrUserNotFound":"Пользователь не найден","ErrLoginNotPermitted":"Вход запрещен","ErrInvalidTokenState":"Неверное состояние токена","ErrSettingNotConfigured":"{setting} не настроен","ErrNoTemplate":"Шаблон с именем \\"{name}\\" не найден","ErrServiceInvalidProvider":"{service} не поддерживает {provider}","ErrFieldRequired":"{field} обязательное поле","ErrFieldMustBePrintable":"Поле {field} должно быть напечатано символами в кодировке ascii","ErrFieldHasURICharacters":"Поле {field} не должно содержать символы, которые не могут быть использованы в URI","ErrFieldIsInvalidHost":"Поле {field} должно быть действительным IP-адресом или FQDN","ErrFieldIsInvalidIP":"Поле {field} должно быть действительным IP-адресом","ErrFieldTooLarge":"Поле {field} не может быть больше чем {max}","ErrFieldTooSmall":"Поле {field} не может быть больше чем {min}","ErrFieldNotBetween":"Поле {field} должно быть между {min} и {max}","ErrFieldEqual":"Поле {field1} не может быть равно {field2}","ErrFieldNotEqual":"Поле {field1} не равно {field2}","ErrFieldNotEmail":"Поле {field} является недействительной электронной почтой","ErrFieldLength":"Поле {field} должно содержать не менее {length} символов","ErrNoPermission":"У вас нет разрешений на выполнение этого действия","ErrDatabaseNotAvailable":"База данных недоступна","ErrNoNodes":"Нет доступных хостов","ErrNoTemplates":"Нет доступных шаблонов","ErrPasswordRequirements":"Пароль должен состоять из как минимум {min} символов","ErrUsernameRequirements":"Имя пользователя должно быть не менее {min} символов и содержать только буквы, _, или -","ErrPasswordsNotIdentical":"Пароли не совпадают","ErrSessionTimedOut":"Время сессии истекло, пожалуйста, повторите вход","ErrMissingScope":"У вас нет прав для совершения данного действия","ErrInvalidJson":"Json данные недействительны","ErrSocketFailed":"The WebSocket connection encountered an error, some features might be slow or broken"}')
    },
    "097b": function(e) {
        e.exports = JSON.parse('{"Templates":"Templates","NoTemplates":"There are no templates here yet","Deleted":"Template deleted","New":"Create new template","Edit":"Edit template","Editor":"Editor","Json":"JSON","Display":"Display Name","Type":"Type","Variables":"Variables","Install":"Install","AddInstallStep":"Add Install Step","DeleteInstallStep":"Delete Install Step","Description":"Description","DataType":"Data Type","DefaultValue":"Default Value","Required":"Required","UserEditable":"Users can edit","Value":"Value","AddOption":"Add an option","AddCommand":"Add command","Filename":"Filename","Content":"Content","Source":"Source","Target":"Target","Version":"Version","ReleaseType":"Release Type","AddFile":"Add file","AddVariable":"Add variable","Environment":"Environment","Environments":"Environments","AddEnvironment":"Add environment","DefaultEnvironment":"Default environment","AddEnvVar":"Add env variable","EnvVars":"Environment variables","DockerImage":"Docker Image","SaveSuccess":"Saved Template","VarNameNoSpaces":"A variable name cannot be empty or contain spaces","SupportedEnvironments":"Supported Environments","RunConfig":"Run Configuration","PreHook":"Pre Run Hook","PostHook":"Post Run Hook","AddPreStep":"Add Pre Run Step","AddPostStep":"Add Post Run Step","DeletePreStep":"Delete Pre Run Step","DeletePostStep":"Delete Post Run Step","Shutdown":"Shutdown","Command":"Command","Arguments":"Arguments","AddArgument":"Add an argument","import":{"OverrideWarning":"WARNING: Imported templates WILL overwrite existing templates with the same ID","Import":"Import templates","Tooltip":"Import templates from the official repository","Select":"Select templates to import","Started":"Importing templates, please wait a moment","Successful":"Successfully imported template {template}","NoTemplatesTitle":"Do you want to import templates?","NoTemplatesContent":"You currently don\'t have any templates. Templates are necessary to create servers.<br/>Do you want to import some templates from the official PufferPanel templates repository now?"},"stop":{"Command":"Command","Signal":"Signal"},"processors":{"download":{"ProcessorName":"Download","files":"Files"},"command":{"ProcessorName":"Run Command","commands":"Commands"},"alterfile":{"ProcessorName":"Change file","regex":"Treat search as RegEx","search":"Text to search","replace":"Replace with"},"writefile":{"ProcessorName":"Write to file","text":"Content"},"move":{"ProcessorName":"Move File","source":"Source","target":"Target"},"mkdir":{"ProcessorName":"Create Directory"},"mojangdl":{"ProcessorName":"Download Minecraft"},"forgedl":{"ProcessorName":"Download Minecraft Forge"},"spongeforgedl":{"ProcessorName":"Download Minecraft SpongeForge","releaseType":"Release Type"},"fabricdl":{"ProcessorName":"Download Minecraft Fabric"}}}')
    },
    "0a23": function(e) {
        e.exports = JSON.parse('{"ErrGeneric":"Tundmatu tõrge","ErrUnknownError":"Tundmatu tõrge","ErrInvalidCredentials":"Vigased andmed","ErrServiceNotAvailable":"Teenus pole saadaval","ErrEmailNotConfigured":"Meil pole seadistatud","ErrTokenInvalid":"Token on kehtetu","ErrClientNotFound":"Klienti ei leitud","ErrUserNotFound":"Kasutajat ei leitud","ErrLoginNotPermitted":"Logimine ei ole lubatud","ErrInvalidTokenState":"Kehtetu tokeni staatus","ErrSettingNotConfigured":"{setting} pole seadistatud","ErrNoTemplate":"Ühtegi malli nimega \'{name}\' ei leitud","ErrServiceInvalidProvider":"{service} ei toeta {provider}","ErrFieldRequired":"{field} on nõutud","ErrFieldMustBePrintable":"{field} peab olema prinditav ascii tähemärkidega","ErrFieldHasURICharacters":"{field} ei tohi sisaldada tähemärke mida ei kasutada URIdes","ErrFieldIsInvalidHost":"{field} peab olema kehtiv IP-aadress või FQDN","ErrFieldIsInvalidIP":"{field} peab olema kehtiv IP-aadress","ErrFieldTooLarge":"{field} ei saa olla suurem kui {max}","ErrFieldTooSmall":"{field} ei saa olla väiksem kui {min}","ErrFieldNotBetween":"{field} peab olema vahemikus {min} ja {max}","ErrFieldEqual":"{field1} ei tohi olla võrdne {field2}","ErrFieldNotEqual":"{field1} ei ole võrdne {field2}","ErrFieldNotEmail":"{field} ei ole kehtiv e-post","ErrFieldLength":"{field} peab olema vähemalt {length} tähemärki","ErrNoPermission":"Vabandame, teil pole luba sellele toimingule","ErrDatabaseNotAvailable":"Andmebaas pole saadaval","ErrNoNodes":"Sõlmesid pole saadaval","ErrNoTemplates":"Ühtegi malli pole saadaval","ErrPasswordRequirements":"Salasõna peab olema vähemalt {min} tähemärki","ErrUsernameRequirements":"Kasutajanimi peab olema vähemalt {min} tähemärki ja sisaldama ainult tähtnumbreid,_, või -","ErrPasswordsNotIdentical":"Salasõnad ei ühti","ErrSessionTimedOut":"Sinu sessioon on aegunud, palun logi uuesti sisse","ErrMissingScope":"Teil puudub õigus selle tegevuse jaoks","ErrInvalidJson":"Json andmed on kehtetud","ErrSocketFailed":"The WebSocket connection encountered an error, some features might be slow or broken"}')
    },
    "0b0a": function(e) {
        e.exports = JSON.parse('{"Node":"Uzel","Nodes":"Uzly","Edit":"Upravit uzel","Add":"Přidat uzel","Update":"Aktualizovat uzel","Delete":"Smazat uzel","PublicHost":"Veřejný hostitel","PublicPort":"Veřejný port","PrivateHost":"Soukromý hostitel","PrivatePort":"Soukromý port","SftpPort":"SFTP port","SaveConfig":"Uložit konfiguraci","SavePublicKey":"Uložit veřejný klíč","DeploymentInstruction":"Pro nasazení uzlu nainstalujte PufferPanel na nový server a umístěte konfigurační soubor do `/etc/pufferpanel/`<br/>Poté restartujte PufferPanel na novém serveru.","UpdateSuccess":"Uzel byl úspěšně aktualizován","UpdateError":"Chyba při aktualizaci uzlu"}')
    },
    "0d04": function(e) {
        e.exports = JSON.parse('{"Server":"Server","NoServers":"There are no servers you have access to","Servers":"Servers","Add":"Add Server","Console":"Console","Controls":"Controls","SFTPInfo":"SFTP Information","Restart":"Restart","Start":"Start","Stop":"Stop","Kill":"Kill","Install":"Install","Send":"Send","Pause":"Pause","CPU":"CPU","Memory":"Memory","Name":"Server Name","SelectNode":"Please select node","SelectTemplate":"Please select template","SelectThisTemplate":"Use this template","SelectUser":"Please select user","Environment":"Environment","SelectEnvironment":"Please select environment","TypeUsername":"Type a username","AdminControls":"Admin Controls","Settings":"Settings","NoEditableVars":"This server does not have variables you can edit","ConfirmDelete":"Do you really want to delete this server? (this cannot be undone)","Delete":"Delete Server","Deleted":"Deleted Server","NoReadme":"No readme available for this template","SftpConnection":"Connect to SFTP","EditDefinition":"Edit Server Definition","Reload":"Reload server data from disk","Reloaded":"Reloaded server data","Autostart":"Start the server when the node starts","Autorestart":"Restart the server when it stops normally","Autorecover":"Restart the server when it crashes"}')
    },
    "0d3d": function(e) {
        e.exports = JSON.parse('{"Templates":"Шаблоны","NoTemplates":"Нет шаблонов","Deleted":"Шаблон удалён","New":"Создать новый шаблон","Edit":"Редактировать шаблон","Editor":"Редактор","Json":"JSON","Display":"Отображаемое имя","Type":"Тип","Variables":"Переменные","Install":"Установить","AddInstallStep":"Добавить шаг установки","DeleteInstallStep":"Удалить шаг установки","Description":"Описание","DataType":"Тип данных","DefaultValue":"Значение по умолчанию","Required":"Обязательно","UserEditable":"Пользователи могут редактировать","Value":"Значение","AddOption":"Добавить свойство","AddCommand":"Добавить команду","Filename":"Имя файла","Content":"Содержимое","Source":"Источник","Target":"Цель","Version":"Версия","ReleaseType":"Тип выпуска","AddFile":"Добавить файл","AddVariable":"Добавить переменную","Environment":"Environment","Environments":"Окружения","AddEnvironment":"Добавить окружение","DefaultEnvironment":"Стандартное окружение","AddEnvVar":"Добавить переменную окружения","EnvVars":"Переменные окружения","DockerImage":"Снимок Docker","SaveSuccess":"Шаблон сохранён","VarNameNoSpaces":"Имя переменной не может быть пустым или содержать пробелы","SupportedEnvironments":"Поддерживаемые окружения","RunConfig":"Запустить конфигурацию","PreHook":"Pre Run Hook","PostHook":"Post Run Hook","AddPreStep":"Добавить шаг перед запуском","AddPostStep":"Добавить шаг после запуска","DeletePreStep":"Удалить шаг перед запуском","DeletePostStep":"Удалить шаг после запуска","Shutdown":"Выключить","Command":"Команда","Arguments":"Аргументы","AddArgument":"Добавить аргумент","import":{"OverrideWarning":"ВНИМАНИЕ: Импортированные шаблоны БУДУТ перезаписывать существующие шаблоны с тем же ID","Import":"Импорт шаблонов","Tooltip":"Импорт шаблонов из официального репозитория","Select":"Выбрать шаблон для импорта","Started":"Импорт шаблонов, подождите минутку","Successful":"Шаблон {template} успешно импортирован","NoTemplatesTitle":"Вы хотите импортировать шаблон?","NoTemplatesContent":"В настоящее время у вас нет шаблонов. Шаблоны необходимы для создания серверов.<br/>Вы хотите импортировать шаблон из официального хранилища шаблонов PufferPanel?"},"stop":{"Command":"Команда","Signal":"Сигнал"},"processors":{"download":{"ProcessorName":"Скачать","files":"Файлы"},"command":{"ProcessorName":"Выполнить команду","commands":"Команды"},"alterfile":{"ProcessorName":"Change file","regex":"Treat search as RegEx","search":"Text to search","replace":"Replace with"},"writefile":{"ProcessorName":"Записать в файл","text":"Содержание"},"move":{"ProcessorName":"Переместить файл","source":"Источник","target":"Цель"},"mkdir":{"ProcessorName":"Создать директорию"},"mojangdl":{"ProcessorName":"Загрузить Minecraft"},"forgedl":{"ProcessorName":"Скачать Minecraft Forge"},"spongeforgedl":{"ProcessorName":"Скачать Minecraft SpongeForge","releaseType":"Тип релиза"},"fabricdl":{"ProcessorName":"Скачать Minecraft Fabric"}}}')
    },
    "0dc9": function(e) {
        e.exports = JSON.parse('{"Node":"Nodo","Nodes":"Nodi","Edit":"Modifica Nodo","Add":"Aggiungi Nodo","Update":"Aggiorna Nodo","Delete":"Elimina Nodo","PublicHost":"Host Pubblico","PublicPort":"Porta Pubblica","PrivateHost":"Host Privato","PrivatePort":"Porta Privata","SftpPort":"Porta SFTP","SaveConfig":"Salva Configurazione","SavePublicKey":"Salva Chiave Pubblica","DeploymentInstruction":"Per distribuire il nodo, installa PufferPanel sul nuovo server e metti il file di configurazione in \'/etc/pufferpanel/\'<br/>Riavvia PufferPanel sul serve successivamente.","UpdateSuccess":"Nodo aggiornato con successo","UpdateError":"Errore durante l\'aggiornamento del nodo"}')
    },
    "0e57": function(e) {
        e.exports = JSON.parse('{"Users":"Użytkownicy","Add":"Dodaj użytkownika","AccountSettings":"Ustawienia konta","OldPassword":"Stare hasło","NewPassword":"Nowe Hasło","ConfirmPassword":"Potwierdź hasło","ChangePassword":"Zmień Hasło","ChangeInfo":"Zmień podstawowe dane konta","InfoChanged":"Twoje informacje zostały zmienione","PasswordChanged":"Twoje hasło zostało zmienione","AccountPassword":"Hasło do konta","Account":"Konto","Login":"Zaloguj","LoginLink":"Lub zaloguj się tutaj","Logout":"Wyloguj","Register":"Zarejestruj się","RegisterLink":"Lub zarejestruj się tutaj","RegisterSuccess":"Zarejestrowano pomyślnie.","NoEmailGiven":"Musisz podać adres e-mail użytkownika, który chcesz dodać","Username":"Nazwa użytkownika","Password":"Hasło","Email":"Adres e-mail","Edit":"Edytuj użytkownika","Update":"Zaktualizuj użytkownika","Delete":"Usuń użytkownika","CreateSuccess":"Utwórz użytkownika","CreateError":"Nie udało się zaktualizować użytkownika","UpdateSuccess":"Zaktualizowano użytkowników","UpdateError":"Nie udało się zaktualizować użytkownika","PermsUpdateError":"Nie udało się zaktualizować uprawnień użytkownika"}')
    },
    "0fe0": function(e) {
        e.exports = JSON.parse('{"Templates":"Modelos","NoTemplates":"Não há modelos disponíveis","Deleted":"Template deleted","New":"Criar novo modelo","Edit":"Editar modelo","Editor":"Editor","Json":"JSON","Display":"Exibir nome","Type":"Tipo","Variables":"Variáveis","Install":"Instalar","AddInstallStep":"Adicionar passo de instalação","DeleteInstallStep":"Remover passo de instalação","Description":"Descrição","DataType":"Tipos do Dado","DefaultValue":"Valor padrão","Required":"Obrigatório","UserEditable":"Usuários podem editar","Value":"Valor","AddOption":"Adicionar uma opção","AddCommand":"Adicionar comando","Filename":"Nome do arquivo","Content":"Conteúdo","Source":"Fonte","Target":"Destino","Version":"Versão","ReleaseType":"Tipo de lançamento","AddFile":"Adicionar arquivo","AddVariable":"Adicionar variável","Environment":"Environment","Environments":"Environments","AddEnvironment":"Adicionar ambiente","DefaultEnvironment":"Default environment","AddEnvVar":"Adicionar variável de ambiente","EnvVars":"Variáveis de ambiente","DockerImage":"Imagem Docker","SaveSuccess":"Template Salvo","VarNameNoSpaces":"O nome da variável não pode estar em branco ou conter espaços","SupportedEnvironments":"Ambientes Suportados","RunConfig":"Rodar configuração","PreHook":"Pré-executar Hook","PostHook":"Pós-executar Hook","AddPreStep":"Adicionar etapa de pré-execução","AddPostStep":"Adicionar etapa de pós-execução","DeletePreStep":"Excluir etapa de pré-execução","DeletePostStep":"Excluir etapa de pré-execução","Shutdown":"Desligar","Command":"Comando","Arguments":"Argumentos","AddArgument":"Adicionar argumento","import":{"OverrideWarning":"AVISO: Modelos importados substituirão modelos existentes com o mesmo ID","Import":"Importar modelos","Tooltip":"Importar modelos do repositório oficial","Select":"Selecionar modelos para importar","Started":"Importando modelos, por favor, aguarde um momento","Successful":"O modelo {template} foi importado com sucesso","NoTemplatesTitle":"Você quer importar esses modelos?","NoTemplatesContent":"Atualmente, você não tem nenhum modelo. Modelos são necessários para criar servidores.<br/>Você deseja importar alguns templates do repositório oficial do PufferPanel?"},"stop":{"Command":"Comando","Signal":"Sinal"},"processors":{"download":{"ProcessorName":"Download","files":"Files"},"command":{"ProcessorName":"Run Command","commands":"Commands"},"alterfile":{"ProcessorName":"Change file","regex":"Treat search as RegEx","search":"Text to search","replace":"Replace with"},"writefile":{"ProcessorName":"Write to file","text":"Content"},"move":{"ProcessorName":"Move File","source":"Source","target":"Target"},"mkdir":{"ProcessorName":"Create Directory"},"mojangdl":{"ProcessorName":"Download Minecraft"},"forgedl":{"ProcessorName":"Download Minecraft Forge"},"spongeforgedl":{"ProcessorName":"Download Minecraft SpongeForge","releaseType":"Release Type"},"fabricdl":{"ProcessorName":"Download Minecraft Fabric"}}}')
    },
    "10f3": function(e, t, r) {
        "use strict";
        r.r(t);
        var a = function() {
                var e = this,
                    t = e.$createElement,
                    r = e._self._c || t;
                return r("server-type-generic", {
                    attrs: {
                        server: e.server
                    }
                })
            },
            o = [],
            n = {
                props: {
                    server: {
                        type: Object,
                        default: () => {}
                    }
                }
            },
            s = n,
            i = r("2877"),
            l = Object(i["a"])(s, a, o, !1, null, "0bc0373d", null);
        t["default"] = l.exports
    },
    "110f": function(e, t, r) {
        "use strict";
        r.r(t);
        var a = function() {
                var e = this,
                    t = e.$createElement,
                    r = e._self._c || t;
                return r("div", [r("v-list", e._l(e.value, (function(t, a) {
                    return r("v-list-item", {
                        key: t.name,
                        attrs: {
                            link: ""
                        },
                        on: {
                            click: function(t) {
                                return e.startEdit(a)
                            }
                        }
                    }, [r("v-list-item-content", {
                        domProps: {
                            textContent: e._s(t.display)
                        }
                    }), r("v-list-item-action", {
                        staticClass: "flex-row"
                    }, [r("v-tooltip", {
                        attrs: {
                            bottom: ""
                        },
                        scopedSlots: e._u([{
                            key: "activator",
                            fn: function(t) {
                                var a = t.on;
                                return [r("v-btn", e._g({
                                    attrs: {
                                        icon: ""
                                    }
                                }, a), [r("v-icon", [e._v("mdi-pencil")])], 1)]
                            }
                        }], null, !0)
                    }, [r("span", {
                        domProps: {
                            textContent: e._s(e.$t("common.Edit"))
                        }
                    })]), r("v-tooltip", {
                        attrs: {
                            bottom: ""
                        },
                        scopedSlots: e._u([{
                            key: "activator",
                            fn: function(t) {
                                var o = t.on;
                                return [r("v-btn", e._g({
                                    attrs: {
                                        icon: ""
                                    },
                                    on: {
                                        click: function(t) {
                                            return t.stopPropagation(), e.remove(a)
                                        }
                                    }
                                }, o), [r("v-icon", [e._v("mdi-close")])], 1)]
                            }
                        }], null, !0)
                    }, [r("span", {
                        domProps: {
                            textContent: e._s(e.$t("common.Delete"))
                        }
                    })])], 1)], 1)
                })), 1), r("v-btn", {
                    attrs: {
                        text: "",
                        block: ""
                    },
                    domProps: {
                        textContent: e._s(e.$t("common.Add"))
                    },
                    on: {
                        click: function(t) {
                            return e.addVar()
                        }
                    }
                }), r("ui-overlay", {
                    attrs: {
                        card: "",
                        closable: ""
                    },
                    on: {
                        close: function(t) {
                            return e.reset()
                        }
                    },
                    model: {
                        value: e.edit,
                        callback: function(t) {
                            e.edit = t
                        },
                        expression: "edit"
                    }
                }, [r("v-row", [r("v-col", {
                    attrs: {
                        cols: "12"
                    }
                }, [r("ui-input", {
                    attrs: {
                        label: e.$t("common.Name")
                    },
                    model: {
                        value: e.currentEdit.name,
                        callback: function(t) {
                            e.$set(e.currentEdit, "name", t)
                        },
                        expression: "currentEdit.name"
                    }
                })], 1), r("v-col", {
                    attrs: {
                        cols: "12"
                    }
                }, [r("template-variable", {
                    model: {
                        value: e.currentEdit,
                        callback: function(t) {
                            e.currentEdit = t
                        },
                        expression: "currentEdit"
                    }
                })], 1), r("v-col", {
                    attrs: {
                        cols: "12"
                    }
                }, [r("v-btn", {
                    attrs: {
                        color: "success",
                        block: ""
                    },
                    domProps: {
                        textContent: e._s(e.$t("common.Save"))
                    },
                    on: {
                        click: function(t) {
                            return e.save()
                        }
                    }
                })], 1)], 1)], 1)], 1)
            },
            o = [];
        r("ddb0");
        const n = e => "" !== e && -1 === e.indexOf(" ");
        var s = {
                props: {
                    value: {
                        type: Array,
                        default: () => []
                    }
                },
                data() {
                    return {
                        add: !1,
                        edit: !1,
                        editIndex: 0,
                        currentEdit: {},
                        variableTemplate: {
                            required: !0,
                            userEdit: !0,
                            display: "",
                            desc: "",
                            type: "string",
                            value: "",
                            name: ""
                        }
                    }
                },
                methods: {
                    addVar() {
                        const e = [...this.value];
                        e.push({
                            ...this.variableTemplate
                        }),
                        this.$emit("input", e),
                        this.add = !0,
                        this.startEdit(this.value.length)
                    },
                    startEdit(e) {
                        this.editIndex = e,
                        this.currentEdit = {
                            ...this.value[e]
                        },
                        this.edit = !0
                    },
                    remove(e) {
                        const t = [...this.value];
                        t.splice(e, 1),
                        this.$emit("input", t)
                    },
                    save() {
                        if (!n(this.currentEdit.name || ""))
                            return void this.$toast.error(this.$t("templates.VarNameNoSpaces"));
                        const e = [...this.value];
                        e[this.editIndex] = this.currentEdit,
                        this.$emit("input", e),
                        this.add = !1,
                        this.reset()
                    },
                    reset() {
                        this.add && this.$emit("input", [...this.value].filter(e => "" !== e.name)),
                        this.add = !1,
                        this.edit = !1,
                        this.editIndex = 0,
                        this.currentEdit = {}
                    }
                }
            },
            i = s,
            l = r("2877"),
            d = r("6544"),
            c = r.n(d),
            u = r("8336"),
            m = r("62ad"),
            p = r("132d"),
            v = r("8860"),
            f = r("da13"),
            S = r("1800"),
            g = r("5d23"),
            h = r("0fd9"),
            E = r("3a2f"),
            P = Object(l["a"])(i, a, o, !1, null, null, null);
        t["default"] = P.exports;
        c()(P, {
            VBtn: u["a"],
            VCol: m["a"],
            VIcon: p["a"],
            VList: v["a"],
            VListItem: f["a"],
            VListItemAction: S["a"],
            VListItemContent: g["a"],
            VRow: h["a"],
            VTooltip: E["a"]
        })
    },
    "12f6": function(e) {
        e.exports = JSON.parse('{"Users":"Kasutajad","Add":"Lisa Kasutaja","AccountSettings":"Konto seaded","OldPassword":"Vana Parool","NewPassword":"Uus Parool","ConfirmPassword":"Kinnita Parool","ChangePassword":"Muuda Parooli","ChangeInfo":"Muuda Konto Seadeid","InfoChanged":"Teie informatsioon on muudetud","PasswordChanged":"Sinu salasõna on muudetud","AccountPassword":"Konto salasõna","Account":"Konto","Login":"Logimine","LoginLink":"Või logi siit","Logout":"Väljalogimine","Register":"Registreerumine","RegisterLink":"Või registreeruge siin","RegisterSuccess":"Oled edukalt registreerunud","NoEmailGiven":"Sa pead andma kasutaja meiliaadressi mida soovid lisada","Username":"Kasutajanimi","Password":"Salasõna","Email":"E-post","Edit":"Muuda kasutajat","Update":"Uuenda kasutajat","Delete":"Kustuta kasutaja","CreateSuccess":"Kasutaja loodud","CreateError":"Kasutaja loomine ebaõnnestus","UpdateSuccess":"Uuendatud Kasutaja","UpdateError":"Kasutaja uuendamine ebaõnnestus","PermsUpdateError":"Kasutaja õiguste muutmine ebaõnnestus"}')
    },
    1448: function(e) {
        e.exports = JSON.parse('{"ErrGeneric":"Errore sconosciuto","ErrUnknownError":"Errore sconosciuto","ErrInvalidCredentials":"Credenziali non valide","ErrServiceNotAvailable":"Servizio non disponibile","ErrEmailNotConfigured":"Email non configurata","ErrTokenInvalid":"Il token non è valido","ErrClientNotFound":"Client non trovato","ErrUserNotFound":"Utente non trovato","ErrLoginNotPermitted":"Accesso non permesso","ErrInvalidTokenState":"Stato del token non valido","ErrSettingNotConfigured":"{setting} non è configurato","ErrNoTemplate":"Nessun modello con nome \'{name}\' è stato trovato","ErrServiceInvalidProvider":"{service} non supporta {provider}","ErrFieldRequired":"{field} è obbligatorio","ErrFieldMustBePrintable":"{field} deve essere in caratteri ascii stampabili","ErrFieldHasURICharacters":"{field} deve contenere caratteri che non possono essere usati negli URI","ErrFieldIsInvalidHost":"{field} deve essere un IP o FQDN valido","ErrFieldIsInvalidIP":"{field} deve essere un IP valido","ErrFieldTooLarge":"{field} non può essere più grande di {max}","ErrFieldTooSmall":"{field} non può essere più piccolo di {min}","ErrFieldNotBetween":"{field} deve essere compreso tra {min} e {max}","ErrFieldEqual":"{field1} non può essere uguale a {field2}","ErrFieldNotEqual":"{field1} non è uguale a {field2}","ErrFieldNotEmail":"{field} non è un email valida","ErrFieldLength":"{field} deve essere di almeno {length} caratteri","ErrNoPermission":"Non hai il permesso di praticare quest\'azione","ErrDatabaseNotAvailable":"Il database non è disponibile","ErrNoNodes":"Nessun nodo disponibile","ErrNoTemplates":"Nessun modello disponibile","ErrPasswordRequirements":"La password deve essere di almeno {min} caratteri","ErrUsernameRequirements":"Il nome utente deve essere lunga almeno {min} caratteri e contenere solo alfanumerici, _, o -","ErrPasswordsNotIdentical":"Le password non sono uguali","ErrSessionTimedOut":"La tua sessione è scaduta, sei pregato di accedere di nuovo","ErrMissingScope":"Non sei autorizzato a praticare quest\'azione","ErrInvalidJson":"I dati json non sono validi","ErrSocketFailed":"The WebSocket connection encountered an error, some features might be slow or broken"}')
    },
    1469: function(e) {
        e.exports = JSON.parse('{"Server":"Server","NoServers":"Det finns inga servrar du har tillgång till","Servers":"Servrar","Add":"Lägg till server","Console":"Konsol","Controls":"Controls","SFTPInfo":"SFTP Information","Restart":"Starta om","Start":"Starta","Stop":"Stoppa","Kill":"Döda","Install":"Installera","Send":"Skicka","Pause":"Pausa","CPU":"CPU","Memory":"Minne","Name":"Servernamn","SelectNode":"Välj nod","SelectTemplate":"Välj mall","SelectThisTemplate":"Använd denna mall","SelectUser":"Vänligen välj en användare","Environment":"Environment","SelectEnvironment":"Please select environment","TypeUsername":"Ange ett användarnamn","AdminControls":"Admin Controls","Settings":"Inställningar","NoEditableVars":"Den här servern har inga variabler som du kan redigera","ConfirmDelete":"Vill du verkligen ta bort denna server? (detta kan inte ångras)","Delete":"Ta bort server","Deleted":"Server borttagen","NoReadme":"Ingen \\"readme\\" tillgänglig för denna mall","SftpConnection":"Anslut till SFTP","EditDefinition":"Edit Server Definition","Reload":"Ladda om serverdata från disk","Reloaded":"Serverdata omladdad","Autostart":"Starta servern när noden startar","Autorestart":"Starta om servern när den stoppas vanligt","Autorecover":"Starta om servern när den kraschar"}')
    },
    1491: function(e) {
        e.exports = JSON.parse('{"Users":"Gebruikers","Add":"Gebruiker Toevoegen","AccountSettings":"Accountinstellingen","OldPassword":"Oud Wachtwoord","NewPassword":"Nieuw Wachtwoord","ConfirmPassword":"Bevestig Wachtwoord","ChangePassword":"Verander Wachtwoord","ChangeInfo":"Accountgegevens Wijzigen","InfoChanged":"Jouw informatie is gewijzigd","PasswordChanged":"Jouw wachtwoord is gewijzigd","AccountPassword":"Account Wachtwoord","Account":"Account","Login":"Inloggen","LoginLink":"Of log hier in","Logout":"Uitloggen","Register":"Registreren","RegisterLink":"Of registreer hier","RegisterSuccess":"Je bent succesvol geregistreerd","NoEmailGiven":"Je moet het e-mailadres opgeven van de gebruiker die je wilt toevoegen","Username":"Gebruikersnaam","Password":"Wachtwoord","Email":"E-mail","Edit":"Wijzig gebruiker","Update":"Gebruiker Bijwerken","Delete":"Gebruiker Verwijderen","CreateSuccess":"Gebruiker Aangemaakt","CreateError":"Gebruiker aanmaken mislukt","UpdateSuccess":"Gebruiker Bijgewerkt","UpdateError":"Gebruiker bijwerken mislukt","PermsUpdateError":"Gebruikersrechten updaten mislukt"}')
    },
    1551: function(e) {
        e.exports = JSON.parse('{"Node":"Nœud","Nodes":"Nœuds","Edit":"Éditer le Nœud","Add":"Ajouter un Nœud","Update":"Mettre à jour le Nœud","Delete":"Supprimer le Nœud","PublicHost":"Hôte Public","PublicPort":"Port Public","PrivateHost":"Hôte Privé","PrivatePort":"Port Privé","SftpPort":"Port SFTP","SaveConfig":"Sauvegarder la configuration","SavePublicKey":"Sauvegarder la clé publique","DeploymentInstruction":"Pour déployer le nœud, installez PufferPanel sur le nouveau serveur et placez le fichier de configuration dans `/etc/pufferpanel`<br/>Redémarrez PufferPanel sur le nouveau serveur une fois terminé.","UpdateSuccess":"Nœud mis à jour avec succès","UpdateError":"Erreur lors de la mise à jour du nœud"}')
    },
    "159a": function(e) {
        e.exports = JSON.parse('{"NoEnvFields":"لا توجد خيارات محددة لهذهة البيئة","docker":{"name":"Docker","image":"صورة","networkMode":"وضع الشبكة","networkName":"إسم الشبكة","bindings":"الروابط","portBindings":"روابط المنفذ","OutsidePort":"المنفذ الخارجي","InsidePort":"المنفذ الداخلي","HostPath":"مسار المضيف","ContainerPath":"مسار الحاوية"},"standard":{"name":"قياسي"},"tty":{"name":"TTY"}}')
    },
    1616: function(e) {
        e.exports = JSON.parse('{"Users":"Kullanıcılar","Add":"Kullanıcı Ekle","AccountSettings":"Hesap Ayarları","OldPassword":"Eski Parola","NewPassword":"Yeni Parola","ConfirmPassword":"Parolayı Doğrula","ChangePassword":"Parola Değiştir","ChangeInfo":"Hesap Ayrıntılarını Değiştir","InfoChanged":"Bilgileriniz değiştirildi","PasswordChanged":"Parolanız değiştirildi","AccountPassword":"Hesap Parolası","Account":"Hesap","Login":"Giriş","LoginLink":"Veya buradan giriş yapın","Logout":"Çıkış Yap","Register":"Kayıt Ol","RegisterLink":"Veya buradan Kayıt olun","RegisterSuccess":"Başarılı bir şekilde kayıt oldunuz","NoEmailGiven":"Eklemek istediğiniz kullanıcının e-postası nı yazmalısınız","Username":"Kullanıcı Adı","Password":"Şifre","Email":"E-Posta","Edit":"Kullanıcı Düzenle","Update":"Kullanıcıyı Güncelle","Delete":"Kullanıcı Sil","CreateSuccess":"Kullanıcı Oluşturuldu","CreateError":"Kullanıcı oluşturulması başarısız","UpdateSuccess":"Kullanıcı Güncelleme Başarılı","UpdateError":"Kullanıcı Güncellenemedi","PermsUpdateError":"Kullanıcı izinleri güncellenemedi"}')
    },
    1649: function(e) {
        e.exports = JSON.parse('{"Id":"ID","Name":"Nimi","Address":"Aadress","Online":"Võrgus","Offline":"Võrgust väljas","Loading":"Laadimine...","General":"Üldine","Language":"Keel","SelectLanguage":"Vali Keel","Settings":"Seaded","Update":"Uuenda","Edit":"Redigeeri","Delete":"Kustuta","Create":"Loo","Save":"Salvesta","Saved":"Salvestatud","SaveFailed":"Salvestamine ebaõnnestus","Cancel":"Loobu","Confirm":"Kinnita","Actions":"Tegevused","Host":"Host","Port":"Port","Template":"Mallid","Options":"Valikud","Collapse":"Koonda","Copied":"Kopeeritud lõikelauale","Unknown":"Teadmata","Search":"Otsi","Back":"Tagasi","Next":"Järgmine","LanguageName":"Eesti","Details":"Üksikasjad","ErrorDetails":"Tõrke Üksikasjad","HelpTranslate":"Aita tõlkida PufferPanelit","DarkMode":"Tume Režiim","ThemeOptions":"Teema Valikud","Protocol":"Protocol","Add":"Add"}')
    },
    "16e4": function(e) {
        e.exports = JSON.parse('{"ServersView":"Może wyświetlać ten serwer","ServersEdit":"Edytuj serwer","ServersInstall":"Zainstaluj serwer","ServersConsole":"Zobacz konsolę","ServersConsoleSend":"Wysyłanie poleceń do konsoli","ServersStop":"Zatrzymaj i zabij serwer","ServersStart":"Uruchom serwer","ServersStat":"Zobacz statystyki procesora i pamięci","ServersFiles":"Zezwalaj na dostęp do plików za pomocą SFTP","ServersFilesGet":"Przeglądaj i pobieraj pliki za pomocą menedżera plików","ServersFilesPut":"Edytuj i wysyłaj pliki za pomocą menedżera plików","ServersEditUsers":"Edytuj dostęp użytkownika do tego serwera","Admin":"Administrator (daje to wszelkie możliwe uprawnienia)","ViewServers":"Zobacz moje Serwery","CreateServers":"Tworzenie nowych serwerów","DeleteServers":"Usuwanie serwerów","EditServerAdmin":"Edycja ustawień serwera","ViewNodes":"Zobacz węzły","EditNodes":"Edytuj węzły","DeployNodes":"Dodaj nowe węzły","ViewTemplates":"Zobacz szablony","EditTemplates":"Edytuj szablony","ViewUsers":"Zobacz wszystkich użytkowników","EditUsers":"Edytuj innych użytkowników"}')
    },
    1727: function(e) {
        e.exports = JSON.parse('{"Server":"服务器","NoServer":"没有服务器可以访问","Servers":"服务器","Add":"添加服务器","Console":"控制台","Controls":"控制","SFTPInfo":"SFTP信息","Restart":"重新启动","Start":"启动","Stop":"停止","Kill":"强制结束","Install":"安装","Send":"发送","Pause":"暂停","CPU":"处理器/芯片","Memory":"内存","Name":"服务器名称","SelectNode":"请选择节点","SelectTemplate":"请选择模板","SelectThisTemplate":"使用这个模板","SelectUser":"请选择用户","Environment":"环境变量","SelectEnvironment":"请选择运行环境","TypeUsername":"输入用户名","AdminControls":"管理控制","Settings":"设置","NoEditableVars":"这台服务器没有可以设置的变量","ConfirmDelete":"你确定要删除这个服务器吗？(此操作无法撤销。)","Delete":"删除服务器","Deleted":"已删除","NoReadme":"No readme available for this template","SftpConnection":"连接到SFTP","EditDefinition":"Edit Server Definition","Reload":"Reload server data from disk","Reloaded":"Reloaded server data","Autostart":"Start the server when the node starts","Autorestart":"Restart the server when it stops normally","Autorecover":"Restart the server when it crashes"}')
    },
    "17a8": function(e) {
        e.exports = JSON.parse('{"NoEnvFields":"There are no environment specific options for this environment","docker":{"name":"Docker","image":"画像","networkMode":"Network Mode","networkName":"Network Name","bindings":"Bindings","portBindings":"Port Bindings","OutsidePort":"Outside Port","InsidePort":"Inside Port","HostPath":"Host Path","ContainerPath":"Container Path"},"standard":{"name":"標準"},"tty":{"name":"TTY"}}')
    },
    "18c4": function(e) {
        e.exports = JSON.parse('{"Users":"Utenti","Add":"Aggiungi Utente","AccountSettings":"Impostazioni Profilo","OldPassword":"Vecchia Password","NewPassword":"Nuova Password","ConfirmPassword":"Conferma Password","ChangePassword":"Modifica Password","ChangeInfo":"Modifica Dettagli Profilo","InfoChanged":"Le tue informazioni sono state modificate","PasswordChanged":"La tua password è stata modificata","AccountPassword":"Password del Profilo","Account":"Profilo","Login":"Accesso","LoginLink":"O accedi qui","Logout":"Disconnettiti","Register":"Registrati","RegisterLink":"O registrati qui","RegisterSuccess":"Ti sei registrato correttamente","NoEmailGiven":"Devi fornire l\'email dell\'utente che vuoi aggiungere","Username":"Nome utente","Password":"Password","Email":"Email","Edit":"Modifica Utente","Update":"Aggiorna Utente","Delete":"Elimina Utente","CreateSuccess":"Crea Utente","CreateError":"Creazione utente fallita","UpdateSuccess":"Utente Aggiornato","UpdateError":"Impossibile aggiornare l\'utente","PermsUpdateError":"Impossibile aggiungere i permessi dell\'utente"}')
    },
    "18c6": function(e) {
        e.exports = JSON.parse('{"ErrGeneric":"Unknown error","ErrUnknownError":"Unknown error","ErrInvalidCredentials":"Invalid credentials","ErrServiceNotAvailable":"Service not available","ErrEmailNotConfigured":"Email not configured","ErrTokenInvalid":"Token is invalid","ErrClientNotFound":"Client not found","ErrUserNotFound":"User not found","ErrLoginNotPermitted":"Login not permitted","ErrInvalidTokenState":"Invalid token state","ErrSettingNotConfigured":"{setting} is not configured","ErrNoTemplate":"No template with name \'{name}\' was found","ErrServiceInvalidProvider":"{service} does not support {provider}","ErrFieldRequired":"{field} is required","ErrFieldMustBePrintable":"{field} must be printable ascii characters","ErrFieldHasURICharacters":"{field} must not contain characters which cannot be used in URIs","ErrFieldIsInvalidHost":"{field} must be a valid IP or FQDN","ErrFieldIsInvalidIP":"{field} must be a valid IP","ErrFieldTooLarge":"{field} cannot be larger than {max}","ErrFieldTooSmall":"{field} cannot be smaller than {min}","ErrFieldNotBetween":"{field} must be between {min} and {max}","ErrFieldEqual":"{field1} cannot be equal to {field2}","ErrFieldNotEqual":"{field1} is not equal to {field2}","ErrFieldNotEmail":"{field} is not a valid email","ErrFieldLength":"{field} must be at least {length} characters","ErrNoPermission":"You do not have permission to perform this action","ErrDatabaseNotAvailable":"Database is not available","ErrNoNodes":"No nodes available","ErrNoTemplates":"No templates available","ErrPasswordRequirements":"Password must be at least 8 characters","ErrUsernameRequirements":"Username must be at least 3 characters and only contain alphanumerics, _, or -","ErrPasswordsNotIdentical":"Passwords are not the same","ErrSessionTimedOut":"Your session timed out, please log in again","ErrMissingScope":"You are not authorized to perform this action","ErrInvalidJson":"The json data is invalid","ErrSocketFailed":"The WebSocket connection encountered an error, some features might be slow or broken"}')
    },
    "19d7": function(e) {
        e.exports = JSON.parse('{"Users":"Users","Add":"Add User","AccountSettings":"Account Settings","OldPassword":"Old Password","NewPassword":"New Password","ConfirmPassword":"Confirm Password","ChangePassword":"Change Password","ChangeInfo":"Change Account Details","InfoChanged":"Your information has been changed","PasswordChanged":"Your password has been changed","AccountPassword":"Account Password","Account":"Account","Login":"Login","LoginLink":"Or login here","Logout":"Logout","Register":"Register","RegisterLink":"Or register here","RegisterSuccess":"You have successfully registered","NoEmailGiven":"You must provide the email of the user you want to add","Username":"Username","Password":"Password","Email":"Email","Edit":"Edit User","Update":"Update User","Delete":"Ta bort användare","CreateSuccess":"Skapade användare","CreateError":"Kunde inte skapa användare","UpdateSuccess":"Uppdaterad användare","UpdateError":"Det gick inte att uppdatera användaren","PermsUpdateError":"Misslyckades att uppdatera användarbehörigheter"}')
    },
    "1a38": function(e, t, r) {
        "use strict";
        r.r(t);
        var a = function() {
                var e = this,
                    t = e.$createElement,
                    r = e._self._c || t;
                return r("v-row", [r("v-col", {
                    staticClass: "pb-0",
                    attrs: {
                        cols: "12"
                    }
                }, [r("v-btn-toggle", {
                    attrs: {
                        value: e.value.type,
                        borderless: "",
                        dense: "",
                        mandatory: ""
                    },
                    on: {
                        change: function(t) {
                            return e.$emit("input", {
                                type: t,
                                stop: "command" === t ? "" : 0
                            })
                        }
                    }
                }, [r("v-btn", {
                    attrs: {
                        value: "command"
                    },
                    domProps: {
                        textContent: e._s(e.$t("templates.stop.Command"))
                    }
                }), r("v-btn", {
                    attrs: {
                        value: "signal"
                    },
                    domProps: {
                        textContent: e._s(e.$t("templates.stop.Signal"))
                    }
                })], 1)], 1), r("v-col", {
                    attrs: {
                        cols: "12"
                    }
                }, [r("ui-input", {
                    attrs: {
                        value: e.value.stop,
                        label: e.$t("templates.stop.Command"),
                        type: "command" === e.value.type ? "text" : "number"
                    },
                    on: {
                        input: function(t) {
                            return e.$emit("input", Object.assign({}, e.value, {
                                stop: t
                            }))
                        }
                    }
                })], 1)], 1)
            },
            o = [],
            n = {
                props: {
                    value: {
                        type: Object,
                        default: () => {}
                    }
                }
            },
            s = n,
            i = r("2877"),
            l = r("6544"),
            d = r.n(l),
            c = r("8336"),
            u = r("a609"),
            m = r("62ad"),
            p = r("0fd9"),
            v = Object(i["a"])(s, a, o, !1, null, null, null);
        t["default"] = v.exports;
        d()(v, {
            VBtn: c["a"],
            VBtnToggle: u["a"],
            VCol: m["a"],
            VRow: p["a"]
        })
    },
    "1a5d": function(e, t, r) {
        var a = {
            "./Account.vue": ["77be", "chunk-3d8c43c0"],
            "./AddNode.vue": ["b9c4", "chunk-2d210f7e"],
            "./AddServer.vue": ["14bf", "chunk-f4c33922"],
            "./Invite.vue": ["0c50", "chunk-3d89b4ab"],
            "./Login.vue": ["a55b", "chunk-2d2086b7"],
            "./Node.vue": ["8b83", "chunk-2d0e8c9b"],
            "./Nodes.vue": ["4c0f", "chunk-aeb07c80"],
            "./Register.vue": ["73cf", "chunk-3d8c34dc"],
            "./Server.vue": ["1d74", "chunk-2d0b6566"],
            "./Servers.vue": ["5bc3", "chunk-344deed0"],
            "./Template.vue": ["17eb", "chunk-2d0ac239"],
            "./Templates.vue": ["98ca", "chunk-2d0e68b3"],
            "./User.vue": ["1511", "chunk-2d0ab43a"],
            "./Users.vue": ["ed81", "chunk-c74ae546"],
            "./errors/404.vue": ["4b62", "chunk-2d0cbae0"]
        };
        function o(e) {
            if (!r.o(a, e))
                return Promise.resolve().then((function() {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }));
            var t = a[e],
                o = t[0];
            return r.e(t[1]).then((function() {
                return r(o)
            }))
        }
        o.keys = function() {
            return Object.keys(a)
        },
        o.id = "1a5d",
        e.exports = o
    },
    "1b41": function(e) {
        e.exports = JSON.parse('{"Users":"Users","Add":"Add User","AccountSettings":"Account Settings","OldPassword":"Old Password","NewPassword":"New Password","ConfirmPassword":"Confirm Password","ChangePassword":"Change Password","ChangeInfo":"Change Account Details","InfoChanged":"Your information has been changed","PasswordChanged":"Your password has been changed","AccountPassword":"Account Password","Account":"Account","Login":"Login","LoginLink":"Or login here","Logout":"Logout","Register":"Register","RegisterLink":"Or register here","RegisterSuccess":"You have successfully registered","NoEmailGiven":"You must provide the email of the user you want to add","Username":"Username","Password":"Password","Email":"Email","Edit":"Edit User","Update":"Update User","Delete":"Delete User","CreateSuccess":"Created User","CreateError":"Failed creating user","UpdateSuccess":"Updated User","UpdateError":"Failed updating user","PermsUpdateError":"Failed updating user permissions"}')
    },
    2143: function(e) {
        e.exports = JSON.parse('{"Node":"Node","Nodes":"Nodes","Edit":"Rediger Node","Add":"Tilføj Node","Update":"Opdater Node","Delete":"Slet Node","PublicHost":"Offentlig Host","PublicPort":"Offentlig Port","PrivateHost":"Privat Host","PrivatePort":"Privat Port","SftpPort":"SFTP Port","SaveConfig":"Gem konfiguration","SavePublicKey":"Gem Offentlig Nøgle","DeploymentInstruction":"For at installere noden, installér PufferPanel på den nye server og placér konfigurationsfilen i `/etc/pufferpanel/`<br/>Genstart PufferPanel på den nye server bagefter.","UpdateSuccess":"Noden blev opdateret","UpdateError":"Fejl under opdatering af noden"}')
    },
    "21b2": function(e) {
        e.exports = JSON.parse('{"ServersView":"이 서버를 볼 수 있습니다","ServersEdit":"서버 수정","ServersInstall":"서버 설치","ServersConsole":"콘솔 보기","ServersConsoleSend":"콘솔에 명령어 보내기","ServersStop":"서버 강제 종료","ServersStart":"서버 시작","ServersStat":"CPU와 메모리 통계 보기","ServersFiles":"SFTP를 이용한 파일 접근 허용","ServersFilesGet":"파일 관리자를 이용해 파일을 보고 수정","ServersFilesPut":"파일 관리자를 통해 파일을 수정하고 업로드","ServersEditUsers":"이 유저의 서버 접근 권한 수정","Admin":"관리자(모든 권한을 가집니다)","ViewServers":"See Servers","CreateServers":"서버 추가하기","DeleteServers":"서버들 삭제하기","EditServerAdmin":"서버 정보 저장","ViewNodes":"노드 보기","EditNodes":"노드 수정","DeployNodes":"노드 배포하기","ViewTemplates":"다른 템플릿 보기","EditTemplates":"템플릿 수정","ViewUsers":"모든 유저 보기","EditUsers":"다른 유저 수정"}')
    },
    "21bb": function(e) {
        e.exports = JSON.parse('{"Server":"Servidor","NoServers":"No hay servidores a los que tenga acceso","Servers":"Servidores","Add":"Añadir servidor","Console":"Consola","Controls":"Controles","SFTPInfo":"Información SFTP","Restart":"Restart","Start":"Iniciar","Stop":"Detener","Kill":"Matar","Install":"Instalar","Send":"Enviar","Pause":"Pausar","CPU":"CPU","Memory":"Memoria","Name":"Nombre del servidor","SelectNode":"Por favor, seleccione un nodo","SelectTemplate":"Por favor, seleccione una plantilla","SelectThisTemplate":"Utilizar esta plantilla","SelectUser":"Por favor seleccione usuario","Environment":"Entorno","SelectEnvironment":"Por favor, seleccione entorno","TypeUsername":"Escriba un nombre de usuario","AdminControls":"Controles de administración","Settings":"Configuración","NoEditableVars":"Este servidor no tiene variables que puedes editar","ConfirmDelete":"¿Realmente desea eliminar este servidor? (Esto no se puede deshacer)","Delete":"Elimine el servidor","Deleted":"Servidor eliminado","NoReadme":"No hay ningún léame disponible para esta plantilla","SftpConnection":"Conectar a SFTP","EditDefinition":"Edit Server Definition","Reload":"Recargar datos del servidor desde el disco","Reloaded":"Datos del servidor recargados","Autostart":"Iniciar el servidor cuando se inicie el nodo","Autorestart":"Reiniciar el servidor cuando se detiene normalmente","Autorecover":"Reiniciar el servidor cuando se bloquee"}')
    },
    2227: function(e) {
        e.exports = JSON.parse('{"ServersView":"Can view this server","ServersEdit":"Edit the server","ServersInstall":"Install the server","ServersConsole":"View the console","ServersConsoleSend":"Send commands to the console","ServersStop":"Stop and kill the server","ServersStart":"Start the server","ServersStat":"View CPU and memory statistics","ServersFiles":"Allow access to files using SFTP","ServersFilesGet":"View and download files using the file manager","ServersFilesPut":"Edit and upload files using the file manager","ServersEditUsers":"Edit user\'s access to this server","Admin":"Admin (this grants every possible permission)","ViewServers":"See Servers","CreateServers":"Create new Servers","DeleteServers":"Delete Servers","EditServerAdmin":"Edit Server Settings","ViewNodes":"See Nodes","EditNodes":"Edit Nodes","DeployNodes":"Deploy new Nodes","ViewTemplates":"See Templates","EditTemplates":"Edit Templates","ViewUsers":"See all Users","EditUsers":"Edit other Users"}')
    },
    "229d": function(e) {
        e.exports = JSON.parse('{"Node":"Node","Nodes":"Nodes","Edit":"Edit Node","Add":"Add Node","Update":"Update Node","Delete":"Delete Node","PublicHost":"Public Host","PublicPort":"Public Port","PrivateHost":"Private Host","PrivatePort":"Private Port","SftpPort":"SFTP Port","SaveConfig":"Save Config","SavePublicKey":"Save Public Key","DeploymentInstruction":"To deploy the node, install PufferPanel on the new server and place the config file in `/etc/pufferpanel/`<br/>Restart PufferPanel on the new server afterwards.","UpdateSuccess":"Successfully updated node","UpdateError":"Error updating node"}')
    },
    2515: function(e) {
        e.exports = JSON.parse('{"ErrGeneric":"Невідома помилка","ErrUnknownError":"Невідома помилка","ErrInvalidCredentials":"Невірні облікові дані","ErrServiceNotAvailable":"Сервіс недоступний","ErrEmailNotConfigured":"Адресу ел. скриньки не налаштовано","ErrTokenInvalid":"Неприпустимий токен","ErrClientNotFound":"Клієнт не знайдений","ErrUserNotFound":"Користувач не знайдений","ErrLoginNotPermitted":"Вхід не дозволено","ErrInvalidTokenState":"Неприпустимий стан токена","ErrSettingNotConfigured":"{setting} не налаштований","ErrNoTemplate":"Не знайдено жодного шаблону з іменем {name}","ErrServiceInvalidProvider":"{service} не підтримує {provider}","ErrFieldRequired":"поле {field} обов\'язкове","ErrFieldMustBePrintable":"{field} має бути друкованими символами ascii","ErrFieldHasURICharacters":"{field} не може містити символи, які не можуть бути використані в посиланнях","ErrFieldIsInvalidHost":"{field} має бути дійсною IP або FQDN","ErrFieldIsInvalidIP":"{field} повинен мати припустимий IP","ErrFieldTooLarge":"{field} не може бути більше, ніж {max}","ErrFieldTooSmall":"{field} не може бути менше, ніж {min}","ErrFieldNotBetween":"{field} має бути між {min} і {max}","ErrFieldEqual":"{field1} не може дорівнювати {field2}","ErrFieldNotEqual":"{field1} не дорівнює {field2}","ErrFieldNotEmail":"Електронна адреса {field} некоректна","ErrFieldLength":"{field} повинен бути не менше {length} символів","ErrNoPermission":"Ви не маєте дозволу на виконання цієї дії","ErrDatabaseNotAvailable":"База данних недоступна","ErrNoNodes":"Немає доступних вузлів","ErrNoTemplates":"Немає доступних шаблонів","ErrPasswordRequirements":"Пароль має складатися хоча б з {min} символів","ErrUsernameRequirements":"Ім\'я користувача повинно містити не менше {min} символів і містити лише букви, літери, _, або -","ErrPasswordsNotIdentical":"Паролі не співпадають","ErrSessionTimedOut":"Ваш сеанс минув, будь ласка, увійдіть знову","ErrMissingScope":"Ви не маєте прав на виконання цієї дії","ErrInvalidJson":"Неприпустимі дані json","ErrSocketFailed":"The WebSocket connection encountered an error, some features might be slow or broken"}')
    },
    "257d": function(e, t, r) {},
    2652: function(e) {
        e.exports = JSON.parse('{"Id":"ID","Name":"Nome","Address":"Indirizzo","Online":"Online","Offline":"Offline","Loading":"Caricamento...","General":"Generale","Language":"Lingua","SelectLanguage":"Seleziona Lingua","Settings":"Impostazioni","Update":"Aggiorna","Edit":"Modifica","Delete":"Elimina","Create":"Crea","Save":"Salva","Saved":"Salvato","SaveFailed":"Salvataggio fallito","Cancel":"Annulla","Confirm":"Conferma","Actions":"Azioni","Host":"Ospite","Port":"Porta","Template":"Modello","Options":"Opzioni","Collapse":"Collassa","Copied":"Copiato negli appunti","Unknown":"Sconosciuto","Search":"Cerca","Back":"Indietro","Next":"Successivo","LanguageName":"Inglese","Details":"Dettagli","ErrorDetails":"Dettagli Errore","HelpTranslate":"Aiutaci a tradurre PufferPanel","DarkMode":"Modalità scura","ThemeOptions":"Opzioni Tema","Protocol":"Protocol","Add":"Add"}')
    },
    "27fc": function(e) {
        e.exports = JSON.parse('{"Users":"Felhasználók","Add":"Új felhasználó","AccountSettings":"Fiókbeállítások","OldPassword":"Régi jelszó","NewPassword":"Új jelszó","ConfirmPassword":"Jelszó megerősítése","ChangePassword":"Jelszó módosítása","ChangeInfo":"Fiókadatok változtatása","InfoChanged":"Az adatai módosítva lettek","PasswordChanged":"A jelszava módosítva lett","AccountPassword":"Fiók jelszava","Account":"Fiók","Login":"Bejelentkezés","LoginLink":"Vagy jelentkezz be itt","Logout":"Kijelentkezés","Register":"Regisztráció","RegisterLink":"Vagy regisztráljon itt","RegisterSuccess":"Sikeresen regisztrált","NoEmailGiven":"Meg kell adnia a hozzáadni kívánt felhasználó e-mail-címét","Username":"Felhasználónév","Password":"Jelszó","Email":"E-mail-cím","Edit":"Felhasználó szerkesztése","Update":"Felhasználó módosítása","Delete":"Felhasználó törlése","CreateSuccess":"Felhasználó létrehozva","CreateError":"Felhasználó létrehozása sikertelen","UpdateSuccess":"Felhasználó módosítva","UpdateError":"Felhasználó módosítása sikertelen","PermsUpdateError":"Felhasználói jogok módosítása sikertelen"}')
    },
    "28ca": function(e, t, r) {
        "use strict";
        r.r(t);
        var a = function() {
                var e = this,
                    t = e.$createElement,
                    r = e._self._c || t;
                return r("v-card", [r("v-card-title", [r("span", {
                    domProps: {
                        textContent: e._s(e.$t("servers.Settings"))
                    }
                })]), r("v-card-text", [r("v-row", [0 === Object.keys(e.items).length ? r("v-col", [r("span", {
                    domProps: {
                        textContent: e._s(e.$t("servers.NoEditableVars"))
                    }
                })]) : e._e(), e._l(e.items, (function(t, a) {
                    return r("v-col", {
                        key: a,
                        attrs: {
                            cols: "12"
                        }
                    }, [r("ui-variable-input", {
                        model: {
                            value: e.items[a],
                            callback: function(t) {
                                e.$set(e.items, a, t)
                            },
                            expression: "items[name]"
                        }
                    })], 1)
                }))], 2), Object.keys(e.items).length > 0 ? r("v-row", [r("v-col", [r("v-btn", {
                    attrs: {
                        block: "",
                        color: "success"
                    },
                    domProps: {
                        textContent: e._s(e.$t("common.Save"))
                    },
                    on: {
                        click: e.save
                    }
                })], 1)], 1) : e._e()], 1)], 1)
            },
            o = [],
            n = r("8e36"),
            s = {
                props: {
                    server: {
                        type: Object,
                        default: () => {}
                    }
                },
                data() {
                    return {
                        items: {}
                    }
                },
                mounted() {
                    this.loadData()
                },
                methods: {
                    async loadData() {
                        this.items = await this.$api.getServerData(this.server.id)
                    },
                    async save() {
                        await this.$api.updateServerData(this.server.id, this.items),
                        this.$toast.success(this.$t("common.Saved"))
                    },
                    markdown: n["a"]
                }
            },
            i = s,
            l = r("2877"),
            d = r("6544"),
            c = r.n(d),
            u = r("8336"),
            m = r("b0af"),
            p = r("99d9"),
            v = r("62ad"),
            f = r("0fd9"),
            S = Object(l["a"])(i, a, o, !1, null, null, null);
        t["default"] = S.exports;
        c()(S, {
            VBtn: u["a"],
            VCard: m["a"],
            VCardText: p["c"],
            VCardTitle: p["d"],
            VCol: v["a"],
            VRow: f["a"]
        })
    },
    "29be": function(e) {
        e.exports = JSON.parse('{"ErrGeneric":"未知的错误","ErrUnknownError":"未知的错误","ErrInvalidCredentials":"Invalid credentials","ErrServiceNotAvailable":"Service not available","ErrEmailNotConfigured":"Email not configured","ErrTokenInvalid":"Token is invalid","ErrClientNotFound":"Client not found","ErrUserNotFound":"用户未找到","ErrLoginNotPermitted":"登录未准许","ErrInvalidTokenState":"Invalid token state","ErrSettingNotConfigured":"{setting} 未设置","ErrNoTemplate":"没有这个模板 \'{name}\'","ErrServiceInvalidProvider":"{service} 不支持这个 {provider}","ErrFieldRequired":"{field} 是必须的","ErrFieldMustBePrintable":"{field} must be printable ascii characters","ErrFieldHasURICharacters":"{field} must not contain characters which cannot be used in URIs","ErrFieldIsInvalidHost":"{field} must be a valid IP or FQDN","ErrFieldIsInvalidIP":"{field} must be a valid IP","ErrFieldTooLarge":"{field} cannot be larger than {max}","ErrFieldTooSmall":"{field} cannot be smaller than {min}","ErrFieldNotBetween":"{field} must be between {min} and {max}","ErrFieldEqual":"{field1} cannot be equal to {field2}","ErrFieldNotEqual":"{field1} is not equal to {field2}","ErrFieldNotEmail":"{field} is not a valid email","ErrFieldLength":"{field} must be at least {length} characters","ErrNoPermission":"You do not have permission to perform this action","ErrDatabaseNotAvailable":"Database is not available","ErrNoNodes":"No nodes available","ErrNoTemplates":"No templates available","ErrPasswordRequirements":"Password must be at least 8 characters","ErrUsernameRequirements":"Username must be at least 3 characters and only contain alphanumerics, _, or -","ErrPasswordsNotIdentical":"Passwords are not the same","ErrSessionTimedOut":"Your session timed out, please log in again","ErrMissingScope":"You are not authorized to perform this action","ErrInvalidJson":"The json data is invalid","ErrSocketFailed":"The WebSocket connection encountered an error, some features might be slow or broken"}')
    },
    "2a8d": function(e) {
        e.exports = JSON.parse('{"Node":"Nodo","Nodes":"Nodos","Edit":"Editar Nodo","Add":"Agregar nodo","Update":"Actualizar Nodo","Delete":"Borrar Nodo","PublicHost":"Anfitrión público","PublicPort":"Puerto público","PrivateHost":"Anfitrión privado","PrivatePort":"Puerto privado","SftpPort":"Puerto SFTP","SaveConfig":"Guardar configuración","SavePublicKey":"Guardar clave pública","DeploymentInstruction":"Para desplegar el nodo, instale PufferPanel en el nuevo servidor y coloque el archivo de configuración en `/etc/pufferpanel/`<br/>Reinicie PufferPanel en el nuevo servidor después.","UpdateSuccess":"Nodo actualizado correctamente","UpdateError":"Error al actualizar el nodo"}')
    },
    "2aae": function(e) {
        e.exports = JSON.parse('{"NoEnvFields":"Il n\'y a pas d\'options spécifiques à l\'environnement pour cet environnement","docker":{"name":"Docker","image":"Image","networkMode":"Mode réseau","networkName":"Nom du réseau","bindings":"Liaisons","portBindings":"Liaison de port","OutsidePort":"Port extérieur","InsidePort":"Port local","HostPath":"Chemin vers Host","ContainerPath":"Chemin d’accès Container"},"standard":{"name":"Standard"},"tty":{"name":"TTY"}}')
    },
    "2ab5": function(e) {
        e.exports = JSON.parse('{"Templates":"Vorlagen","NoTemplates":"Es gibt noch keine Vorlagen","Deleted":"Vorlage gelöscht","New":"Neue Vorlage erstellen","Edit":"Vorlage bearbeiten","Editor":"Editor","Json":"JSON","Display":"Anzeigename","Type":"Typ","Variables":"Variablen","Install":"Installation","AddInstallStep":"Installationsschritt hinzufügen","DeleteInstallStep":"Installationsschritt löschen","Description":"Beschreibung","DataType":"Datentyp","DefaultValue":"Standardwert","Required":"Erforderlich","UserEditable":"Kann von Nutzern bearbeitet werden","Value":"Wert","AddOption":"Option hinzufügen","AddCommand":"Befehl hinzufügen","Filename":"Dateiname","Content":"Inhalt","Source":"Quelle","Target":"Ziel","Version":"Version","ReleaseType":"Release-Typ","AddFile":"Datei hinzufügen","AddVariable":"Variable hinzufügen","Environment":"Environment","Environments":"Umgebungen","AddEnvironment":"Umgebung hinzufügen","DefaultEnvironment":"Standardumgebung","AddEnvVar":"Umgebungsvariable hinzufügen","EnvVars":"Umgebungsvariablen","DockerImage":"Docker Image","SaveSuccess":"Vorlage gespeichert","VarNameNoSpaces":"Ein Variablenname darf weder leer sein noch Leerzeichen enthalten","SupportedEnvironments":"Unterstützte Umgebungen","RunConfig":"Startkonfiguration","PreHook":"Pre-Run-Hooks","PostHook":"Post-Run-Hooks","AddPreStep":"Pre-run-Schritt hinzufügen","AddPostStep":"Post-run-Schritt hinzufügen","DeletePreStep":"Pre-run-Schritt entfernen","DeletePostStep":"Post-run-Schritt hinzufügen","Shutdown":"Herunterfahren","Command":"Befehl","Arguments":"Argumente","AddArgument":"Argument hinzufügen","import":{"OverrideWarning":"WARNUNG: Importierte Vorlagen WERDEN bestehende Vorlagen mit der gleichen ID ÜBERSCHREIBEN","Import":"Vorlagen importieren","Tooltip":"Templates aus dem offiziellen Repository importieren","Select":"Zu importierende Vorlagen auswählen","Started":"Importiere Vorlagen, bitte warte einen Moment","Successful":"Vorlage {template} erfolgreich importiert","NoTemplatesTitle":"Möchtest du Vorlagen importieren?","NoTemplatesContent":"Sie haben derzeit keine Vorlagen. Vorlagen sind notwendig, um Server zu erstellen.<br/>Möchten Sie jetzt einige Vorlagen aus dem offiziellen PufferPanel Repository importieren?"},"stop":{"Command":"Befehl","Signal":"Signal"},"processors":{"download":{"ProcessorName":"Herunterladen","files":"Dateien"},"command":{"ProcessorName":"Befehl ausführen","commands":"Befehle"},"alterfile":{"ProcessorName":"Change file","regex":"Treat search as RegEx","search":"Text to search","replace":"Replace with"},"writefile":{"ProcessorName":"In Datei schreiben","text":"Inhalt"},"move":{"ProcessorName":"Datei verschieben","source":"Quelle","target":"Ziel"},"mkdir":{"ProcessorName":"Ordner erstellen"},"mojangdl":{"ProcessorName":"Minecraft herunterladen"},"forgedl":{"ProcessorName":"Minecraft Forge herunterladen"},"spongeforgedl":{"ProcessorName":"Minecraft SpongeForge herunterladen","releaseType":"Release-Typ"},"fabricdl":{"ProcessorName":"Minecraft Fabric herunterladen"}}}')
    },
    "2ade": function(e) {
        e.exports = JSON.parse('{"Server":"Server","NoServers":"There are no servers you have access to","Servers":"Servers","Add":"Add Server","Console":"Console","Controls":"Controls","SFTPInfo":"SFTP Information","Restart":"Restart","Start":"Start","Stop":"Stop","Kill":"Kill","Install":"Install","Send":"Send","Pause":"Pause","CPU":"CPU","Memory":"Memory","Name":"Server Name","SelectNode":"Please select node","SelectTemplate":"Please select template","SelectThisTemplate":"Use this template","SelectUser":"Please select user","Environment":"Environment","SelectEnvironment":"Please select environment","TypeUsername":"Type a username","AdminControls":"Admin Controls","Settings":"Settings","NoEditableVars":"This server does not have variables you can edit","ConfirmDelete":"Do you really want to delete this server? (this cannot be undone)","Delete":"Delete Server","Deleted":"Deleted Server","NoReadme":"No readme available for this template","SftpConnection":"Connect to SFTP","EditDefinition":"Edit Server Definition","Reload":"Reload server data from disk","Reloaded":"Reloaded server data","Autostart":"Start the server when the node starts","Autorestart":"Restart the server when it stops normally","Autorecover":"Restart the server when it crashes"}')
    },
    "2ba5": function(e) {
        e.exports = JSON.parse('{"Users":"Utilisateurs","Add":"Ajouter un utilisateur","AccountSettings":"Paramètres du compte","OldPassword":"Ancien mot de passe","NewPassword":"Nouveau mot de passe","ConfirmPassword":"Confirmer le mot de passe","ChangePassword":"Modifier le mot de passe","ChangeInfo":"Modifier les détails du compte","InfoChanged":"Vos informations ont bien été modifiées","PasswordChanged":"Votre mot de passe a bien été modifié","AccountPassword":"Mot de passe du compte","Account":"Compte","Login":"Connexion","LoginLink":"Ou connectez-vous ici","Logout":"Déconnexion","Register":"Inscription","RegisterLink":"Ou inscrivez-vous ici","RegisterSuccess":"Vous vous êtes inscrit avec succès","NoEmailGiven":"Vous devez indiquer l\'adresse mail de l\'utilisateur que vous souhaitez ajouter","Username":"Nom d\'utilisateur","Password":"Mot de passe","Email":"Adresse mail","Edit":"Modifier l\'utilisateur","Update":"Mettre à jour l\'utilisateur","Delete":"Supprimer l\'utilisateur","CreateSuccess":"Utilisateur créé","CreateError":"Échec de création de l\'utilisateur","UpdateSuccess":"Utilisateur mis à jour","UpdateError":"Échec de mise à jour de l\'utilisateur","PermsUpdateError":"Échec de la mise à jour des permissions de l\'utilisateur"}')
    },
    "2cc5": function(e) {
        e.exports = JSON.parse('{"ErrGeneric":"Ukendt fejl","ErrUnknownError":"Ukendt fejl","ErrInvalidCredentials":"Ugyldige legitimationsoplysninger","ErrServiceNotAvailable":"Tjenesten er ikke tilgængelig","ErrEmailNotConfigured":"E-mail ikke konfigureret","ErrTokenInvalid":"Token ugyldig","ErrClientNotFound":"Klient ikke fundet","ErrUserNotFound":"Bruger ikke fundet","ErrLoginNotPermitted":"Login ikke tilladt","ErrInvalidTokenState":"Ugyldig token status","ErrSettingNotConfigured":"{setting} er ikke konfigureret","ErrNoTemplate":"Ingen skabelon med navnet \'{name}\' var fundet","ErrServiceInvalidProvider":"{service} understøtter ikke {provider}","ErrFieldRequired":"{field} er påkrævet","ErrFieldMustBePrintable":"{field} skal være udskrivbare i ascii-tegn","ErrFieldHasURICharacters":"{field} må ikke indeholde tegn, der ikke kan bruges i URI\'er","ErrFieldIsInvalidHost":"{field} skal være en gyldig IP eller FQDN","ErrFieldIsInvalidIP":"{field} skal være et gyldig IP","ErrFieldTooLarge":"{field} kan ikke være større end {max}","ErrFieldTooSmall":"{field} kan ikke være mindre end {min}","ErrFieldNotBetween":"{field} skal være mellem {min} og {max}","ErrFieldEqual":"{field1} kan ikke være lig med {field2}","ErrFieldNotEqual":"{field1} er ikke lig med {field2}","ErrFieldNotEmail":"{field} er ikke en gyldig e-mail","ErrFieldLength":"{field} skal være på mindst {length} tegn","ErrNoPermission":"Du har ikke tilladelse til at udføre denne handling","ErrDatabaseNotAvailable":"Database er ikke tilgængelig","ErrNoNodes":"Ingen tilgængelige nodes","ErrNoTemplates":"Der er ingen tilgængelige skabeloner","ErrPasswordRequirements":"Adgangskoden skal være mindst 8 tegn","ErrUsernameRequirements":"Brugernavn skal være mindst 3 tegn og kun indeholde alfanumeriske oplysninger, _, eller -","ErrPasswordsNotIdentical":"Adgangskoder matcher ikke","ErrSessionTimedOut":"Din session er udløbet. Log venligst ind igen","ErrMissingScope":"Du har ikke tilladelse til at udføre denne handling","ErrInvalidJson":"JSON-dataen er ugyldigt","ErrSocketFailed":"WebSocket forbindelsen stødte på en fejl, nogle funktioner kan være langsom eller afbrudt"}')
    },
    "2d1c": function(e, t, r) {},
    "2d52": function(e) {
        e.exports = JSON.parse('{"ServersView":"Peut voir ce serveur","ServersEdit":"Éditer le serveur","ServersInstall":"Installer le serveur","ServersConsole":"Voir la console","ServersConsoleSend":"Envoyer une commande vers la console","ServersStop":"Arrêter et tuer le serveur","ServersStart":"Démarrer le serveur","ServersStat":"Voir les statistiques du CPU et de la mémoire","ServersFiles":"Autoriser l\'accès aux fichiers via le SFTP","ServersFilesGet":"Voir et télécharger les fichiers via le gestionnaire","ServersFilesPut":"Éditer et envoyer des fichiers via le gestionnaire","ServersEditUsers":"Éditer les accès de l\'utilisateur à ce serveur","Admin":"Administrateur (ceci accorde toutes les permissions possibles)","ViewServers":"See Servers","CreateServers":"Créer des serveurs","DeleteServers":"Supprimer des serveurs","EditServerAdmin":"Éditer les paramètres du serveur","ViewNodes":"Consulter les nœuds","EditNodes":"Éditer les nœuds","DeployNodes":"Déployer de nouveaux nœuds","ViewTemplates":"Consulter les modèles","EditTemplates":"Modifier les modèles","ViewUsers":"Consulter tous les utilisateurs","EditUsers":"Éditer les autres utilisateurs"}')
    },
    "2e27": function(e) {
        e.exports = JSON.parse('{"Server":"Server","NoServers":"There are no servers you have access to","Servers":"Servers","Add":"Add Server","Console":"Console","Controls":"Controls","SFTPInfo":"SFTP Information","Restart":"Restart","Start":"Start","Stop":"Stop","Kill":"Kill","Install":"Install","Send":"Send","Pause":"Pause","CPU":"CPU","Memory":"Memory","Name":"Server Name","SelectNode":"Please select node","SelectTemplate":"Please select template","SelectThisTemplate":"Use this template","SelectUser":"Please select user","Environment":"Environment","SelectEnvironment":"Please select environment","TypeUsername":"Type a username","AdminControls":"Admin Controls","Settings":"Settings","NoEditableVars":"This server does not have variables you can edit","ConfirmDelete":"Do you really want to delete this server? (this cannot be undone)","Delete":"Delete Server","Deleted":"Deleted Server","NoReadme":"No readme available for this template","SftpConnection":"Connect to SFTP","EditDefinition":"Edit Server Definition","Reload":"Reload server data from disk","Reloaded":"Reloaded server data","Autostart":"Start the server when the node starts","Autorestart":"Restart the server when it stops normally","Autorecover":"Restart the server when it crashes"}')
    },
    "2f97": function(e, t, r) {
        "use strict";
        r.r(t);
        var a = function() {
                var e = this,
                    t = e.$createElement,
                    r = e._self._c || t;
                return r("div", [e._l(e.inputValue, (function(t, a) {
                    return r("v-row", {
                        key: a
                    }, [r("v-col", {
                        attrs: {
                            cols: "12",
                            md: "6"
                        }
                    }, [r("ui-input", {
                        ref: "key-" + t.key,
                        refInFor: !0,
                        attrs: {
                            value: t.key,
                            label: e.keyLabel
                        },
                        on: {
                            input: function(r) {
                                return e.onKeyInput(t.key, r)
                            }
                        }
                    })], 1), r("v-col", {
                        attrs: {
                            cols: "12",
                            md: "6"
                        }
                    }, [r("ui-input", {
                        attrs: {
                            value: t.value,
                            label: e.valueLabel,
                            "icon-behind": "mdi-close"
                        },
                        on: {
                            "click:append-outer": function(r) {
                                return e.remove(t.key)
                            },
                            input: function(r) {
                                return e.onValueInput(t.key, r)
                            }
                        }
                    })], 1)], 1)
                })), e.add ? r("v-row", [r("v-col", {
                    attrs: {
                        cols: "12",
                        md: "6"
                    }
                }, [r("ui-input", {
                    attrs: {
                        value: "",
                        autofocus: "",
                        label: e.keyLabel
                    },
                    on: {
                        input: function(t) {
                            return e.addKey(t)
                        }
                    }
                })], 1), r("v-col", {
                    attrs: {
                        cols: "12",
                        md: "6"
                    }
                }, [r("ui-input", {
                    attrs: {
                        label: e.valueLabel
                    },
                    model: {
                        value: e.addValue,
                        callback: function(t) {
                            e.addValue = t
                        },
                        expression: "addValue"
                    }
                })], 1)], 1) : r("v-row", [r("v-col", {
                    attrs: {
                        cols: "12"
                    }
                }, [r("v-btn", {
                    attrs: {
                        text: "",
                        block: ""
                    },
                    domProps: {
                        textContent: e._s(e.addLabel ? e.addLabel : e.$t("common.Add"))
                    },
                    on: {
                        click: function(t) {
                            e.add = !0
                        }
                    }
                })], 1)], 1)], 2)
            },
            o = [],
            n = {
                props: {
                    keyLabel: {
                        type: String,
                        default: () => {}
                    },
                    valueLabel: {
                        type: String,
                        default: () => {}
                    },
                    addLabel: {
                        type: String,
                        default: () => {}
                    },
                    value: {
                        type: Object,
                        required: !0
                    }
                },
                data() {
                    return {
                        add: !1,
                        addValue: ""
                    }
                },
                computed: {
                    inputValue() {
                        return Object.keys(this.value).map((e, t) => ({
                            key: e,
                            value: this.value[e],
                            position: t
                        }))
                    }
                },
                methods: {
                    onKeyInput(e, t) {
                        const r = {};
                        Object.keys(this.value).map(a => {
                            a === e ? r[t] = this.value[a] : r[a] = this.value[a]
                        }),
                        this.$emit("input", r)
                    },
                    onValueInput(e, t) {
                        const r = {
                            ...this.value
                        };
                        r[e] = t,
                        this.$emit("input", r)
                    },
                    remove(e) {
                        const t = {
                            ...this.value
                        };
                        delete t[e],
                        this.$emit("input", t)
                    },
                    addKey(e) {
                        const t = {
                            ...this.value
                        };
                        t[e] = this.addValue,
                        this.addValue = "",
                        this.add = !1,
                        this.$emit("input", t),
                        this.$nextTick(() => {
                            this.$refs["key-" + e][0].focus()
                        })
                    }
                }
            },
            s = n,
            i = r("2877"),
            l = r("6544"),
            d = r.n(l),
            c = r("8336"),
            u = r("62ad"),
            m = r("0fd9"),
            p = Object(i["a"])(s, a, o, !1, null, null, null);
        t["default"] = p.exports;
        d()(p, {
            VBtn: c["a"],
            VCol: u["a"],
            VRow: m["a"]
        })
    },
    3042: function(e) {
        e.exports = JSON.parse('{"Users":"ユーザー一覧","Add":"ユーザーを追加","AccountSettings":"アカウント設定","OldPassword":"現在のパスワード","NewPassword":"新しいパスワード","ConfirmPassword":"パスワードの再入力","ChangePassword":"パスワードを変更","ChangeInfo":"アカウントの詳細を変更","InfoChanged":"あなたの情報は変更されました","PasswordChanged":"パスワードが変更されました","AccountPassword":"アカウントパスワード","Account":"アカウント","Login":"ログイン","LoginLink":"またはこちらからログイン","Logout":"ログアウト","Register":"登録","RegisterLink":"またはこちらから登録","RegisterSuccess":"登録が完了しました","NoEmailGiven":"追加したいユーザーのメールアドレスを入力する必要があります","Username":"ユーザー名","Password":"パスワード","Email":"メールアドレス","Edit":"ユーザーを編集","Update":"ユーザーを更新","Delete":"ユーザーを削除","CreateSuccess":"作成されたユーザー","CreateError":"ユーザー生成に失敗しました","UpdateSuccess":"ユーザー情報が更新されました","UpdateError":"ユーザー情報の更新に失敗しました","PermsUpdateError":"ユーザー権限の更新に失敗しました"}')
    },
    "31ec": function(e, t, r) {
        "use strict";
        r.r(t);
        var a = function() {
                var e = this,
                    t = e.$createElement,
                    r = e._self._c || t;
                return r("v-container", [r("v-row", [r("v-col", [r("h1", {
                    staticStyle: {
                        float: "left"
                    }
                }, [r("server-status", {
                    attrs: {
                        server: e.server
                    }
                }), e._v(" " + e._s(e.server.name) + " ")], 1), r("div", {
                    staticStyle: {
                        float: "right"
                    }
                }, [r("server-controls", {
                    attrs: {
                        server: e.server
                    }
                })], 1), r("div", {
                    staticClass: "mb-2",
                    staticStyle: {
                        clear: "both"
                    }
                })])], 1), e.socketError ? r("v-row", [r("v-col", [r("v-alert", {
                    attrs: {
                        border: "left",
                        text: "",
                        type: "warning"
                    }
                }, [e._v(" " + e._s(e.$t("errors.ErrSocketFailed")) + " ")])], 1)], 1) : e._e(), e.server.permissions.viewServerConsole || e.isAdmin() ? r("v-row", [r("v-col", [r("server-console", {
                    attrs: {
                        server: e.server
                    }
                })], 1)], 1) : e._e(), e.server.permissions.viewServerStats || e.isAdmin() ? r("v-row", [r("v-col", {
                    attrs: {
                        cols: "12",
                        md: "6"
                    }
                }, [r("server-cpu", {
                    attrs: {
                        server: e.server
                    }
                })], 1), r("v-col", {
                    attrs: {
                        cols: "12",
                        md: "6"
                    }
                }, [r("server-memory", {
                    attrs: {
                        server: e.server
                    }
                })], 1)], 1) : e._e(), e.server.permissions.viewServerFiles || e.isAdmin() ? r("v-row", [r("v-col", [r("server-files", {
                    attrs: {
                        server: e.server
                    }
                })], 1)], 1) : e._e(), e.server.permissions.sftpServer || e.isAdmin() ? r("v-row", [r("v-col", [r("server-sftp", {
                    attrs: {
                        server: e.server
                    }
                })], 1)], 1) : e._e(), e.server.permissions.editServerUsers || e.isAdmin() ? r("v-row", [r("v-col", [r("server-users", {
                    attrs: {
                        server: e.server
                    }
                })], 1)], 1) : e._e(), e.server.permissions.editServerData || e.isAdmin() ? r("v-row", [r("v-col", [r("server-settings", {
                    attrs: {
                        server: e.server
                    }
                })], 1)], 1) : e._e(), e.server.permissions.deleteServer || e.isAdmin() ? r("v-row", [r("v-col", [r("server-admin", {
                    attrs: {
                        server: e.server
                    }
                })], 1)], 1) : e._e()], 1)
            },
            o = [],
            n = {
                props: {
                    server: {
                        type: Object,
                        default: () => {}
                    }
                },
                data() {
                    return {
                        socketError: !1
                    }
                },
                mounted() {
                    this.$api.startServerTask(this.server.id, () => {
                        this.$api.requestServerStats(this.server.id)
                    }, 3e3),
                    this.$api.addServerListener(this.server.id, "error", () => {
                        this.$toast.warning(this.$t("errors.ErrSocketFailed")),
                        this.socketError = !0
                    })
                }
            },
            s = n,
            i = r("2877"),
            l = r("6544"),
            d = r.n(l),
            c = r("0798"),
            u = r("62ad"),
            m = r("a523"),
            p = r("0fd9"),
            v = Object(i["a"])(s, a, o, !1, null, null, null);
        t["default"] = v.exports;
        d()(v, {
            VAlert: c["a"],
            VCol: u["a"],
            VContainer: m["a"],
            VRow: p["a"]
        })
    },
    "332e": function(e) {
        e.exports = JSON.parse('{"FileManager":"Failihaldur","NewFolder":"Uus Kaust","NewFile":"Uus Fail","LastModified":"Viimati Muudetud","ConfirmDelete":"Olete kindel et soovite kustutada seda faili?","Upload":"Üleslaadimine","Download":"Allalaadimine","Size":"Suurus","NoFiles":"Siin pole faile veel, mine ja loo mõned failid, näiteks klikkides paigaldamise nupule lehe üleval","FileLoadFailed":"Faili laadimine ebaõnnestus"}')
    },
    3443: function(e) {
        e.exports = JSON.parse('{"Users":"用戶","Add":"新增用戶","AccountSettings":"帳戶設定","OldPassword":"舊密碼","NewPassword":"新密碼","ConfirmPassword":"確認密碼","ChangePassword":"更改密碼","ChangeInfo":"更改帳戶資料","InfoChanged":"你的資料已變更","PasswordChanged":"你的密碼已變更","AccountPassword":"帳戶密碼","Account":"帳戶","Login":"登入","LoginLink":"或在這登入","Logout":"登出","Register":"註冊","RegisterLink":"或在這注冊","RegisterSuccess":"你已更功註冊","NoEmailGiven":"您必須提供要添加的用戶的電郵地址","Username":"用戶名稱","Password":"密碼","Email":"電郵地址","Edit":"編輯用戶","Update":"更新用戶","Delete":"刪除用戶","CreateSuccess":"創建用戶","CreateError":"創建用戶失敗","UpdateSuccess":"更新用戶","UpdateError":"變更用戶失敗","PermsUpdateError":"變更用戶權限失敗"}')
    },
    "34e5": function(e) {
        e.exports = JSON.parse('{"ErrGeneric":"خطأ غير معروف","ErrUnknownError":"خطأ غير معروف","ErrInvalidCredentials":"بيانات اعتماد غير صالحة","ErrServiceNotAvailable":"الخدمة غير متوفرة","ErrEmailNotConfigured":"لم يتم ظبط البريد الإلكتروني","ErrTokenInvalid":"الرمز غير صالح","ErrClientNotFound":"لم يتم العثور على العميل","ErrUserNotFound":"المستخدم غير موجود","ErrLoginNotPermitted":"تسجيل الدخول غير مسموح","ErrInvalidTokenState":"إجراء خاطئ","ErrSettingNotConfigured":"{setting} لم يتم ظبطه","ErrNoTemplate":"لم يتم ايجاد نموذج باسم \'{name}\'","ErrServiceInvalidProvider":"{service} لا تدعم {provider}","ErrFieldRequired":"{field} مطلوب","ErrFieldMustBePrintable":"{field} يجب ان يحتوي على حروف أسكي","ErrFieldHasURICharacters":"{field} يجب ألا يحتوي على حروف لا يمكن استخدامها في الروابط","ErrFieldIsInvalidHost":"{field} يجب أن يكون اي بي صالح او اسم دومين صالح","ErrFieldIsInvalidIP":"{field} يجب أن يكون اي بي صالح","ErrFieldTooLarge":"{field} لا يمكن أن يكون أكبر من {max}","ErrFieldTooSmall":"{field} لا يمكن أن يكون أصغر من {min}","ErrFieldNotBetween":"{field} يجب أن يكون بين {min} و {max}","ErrFieldEqual":"{field1} لا يمكن أن يساوي {field2}","ErrFieldNotEqual":"{field1} لا يساوي {field2}","ErrFieldNotEmail":"{field} ليس بريد الكتروني صحيح","ErrFieldLength":"{field} يجب أن يكون على الأقل {length} حرفاً","ErrNoPermission":"لا يوجد لديك صلاحيات كافية لتفيذ هذا الإجراء","ErrDatabaseNotAvailable":"قاعدة البيانات غير متوفرة","ErrNoNodes":"لا يوجد Nodes متوفرة","ErrNoTemplates":"لا يوجد نماذج متوفرة","ErrPasswordRequirements":"يجب على كلمة المرور أن تكون على الاقل 8 أحرف","ErrUsernameRequirements":"يجب أن يكون اسم المستخدم 3 أحرف على الأقل وأن يحتوي فقط على حروف أبجدية، _، أو -","ErrPasswordsNotIdentical":"كلمات المرور ليست متطابقة","ErrSessionTimedOut":"انتهى وقت الجلسة الخاصة بك، يرجى تسجيل الدخول مرة أخرى","ErrMissingScope":"ليس لديك صلاحية لتقوم بهذا الإجراء","ErrInvalidJson":"بيانات ال json غير صحيحة","ErrSocketFailed":"واجهه اتصال WebSocket حدث لها خطأ، بعض الميزات قد تكون بطيئة او لا تعمل"}')
    },
    "35a3": function(e) {
        e.exports = JSON.parse('{"Templates":"템플릿","NoTemplates":"템플릿이 아직 없네요","Deleted":"템플릿이 삭제되었습니다","New":"새 템플릿 만들기","Edit":"템플릿 수정","Editor":"편집기","Json":"JSON","Display":"이름","Type":"유형","Variables":"변수","Install":"설치","AddInstallStep":"설치 과정 추가","DeleteInstallStep":"설치 과정 삭제","Description":"설명","DataType":"자료 유형","DefaultValue":"기본값","Required":"필수","UserEditable":"유저가 수정 가능","Value":"값","AddOption":"옵션 추가","AddCommand":"명령어 추가","Filename":"파일 이름","Content":"내용","Source":"원본","Target":"목표","Version":"버전","ReleaseType":"출시 유형","AddFile":"파일 추가","AddVariable":"변수 추가","Environment":"Environment","Environments":"환경들","AddEnvironment":"환경 추가","DefaultEnvironment":"기본 환경","AddEnvVar":"환경 변수 추가","EnvVars":"환경 변수","DockerImage":"도커 이미지","SaveSuccess":"템플릿이 추가되었습니다","VarNameNoSpaces":"변수 이름은 비거나 띄어쓰기가 있을 수 없습니다","SupportedEnvironments":"지원되는 환경","RunConfig":"실행 설정","PreHook":"실행 전 연결","PostHook":"실행 후 연결","AddPreStep":"실행 전 단계 추가","AddPostStep":"실행 후 단계 추가","DeletePreStep":"실행 전 단계 제거","DeletePostStep":"실행 후 단계 제거","Shutdown":"정지","Command":"명령","Arguments":"인자","AddArgument":"인자 추가","import":{"OverrideWarning":"경고: 불러와진 템플릿들은 이미 존재하는 같은 ID의 템플릿들을 덮어 쓸것입니다","Import":"템플릿 가져오기","Tooltip":"공식 리포지토리에서 템플릿 가져오기","Select":"가져올 템플릿 선택","Started":"템플릿을 가져오는중입니다. 잠시만 기다려주세요","Successful":"템플릿 {template} 을(를) 불러왔습니다","NoTemplatesTitle":"템플릿을 가져올까요?","NoTemplatesContent":"현재 템플릿이 없습니다. 템플릿은 서버를 만들기 위해 필요합니다.<br/>템플릿을 지금 공식 PufferPanel 레포지토리에서 가져올까요?"},"stop":{"Command":"명령","Signal":"신호"},"processors":{"download":{"ProcessorName":"다운로드","files":"파일"},"command":{"ProcessorName":"명령어 실행","commands":"명령어"},"alterfile":{"ProcessorName":"파일 수정","regex":"RegEx를 이용한 검색","search":"텍스트로 검색","replace":"로 바꾸기"},"writefile":{"ProcessorName":"파일로 쓰기","text":"내용"},"move":{"ProcessorName":"파일 이동","source":"원본","target":"목표"},"mkdir":{"ProcessorName":"폴더 생성"},"mojangdl":{"ProcessorName":"마인크래프트 다운로드"},"forgedl":{"ProcessorName":"마인크래프트 포지 다운로드"},"spongeforgedl":{"ProcessorName":"마인크래프트 스폰지 다운로드","releaseType":"출시 유형"},"fabricdl":{"ProcessorName":"마인크래프트 Fabric 다운로드"}}}')
    },
    "35c7": function(e) {
        e.exports = JSON.parse('{"NoEnvFields":"Для этого окружения нет специальных параметров","docker":{"name":"Docker","image":"Снимок","networkMode":"Сетевой режим","networkName":"Название сети","bindings":"Привязка","portBindings":"Порт привязки","OutsidePort":"Внешний порт","InsidePort":"Внутренний порт","HostPath":"Путь к хосту","ContainerPath":"Путь к контейнеру"},"standard":{"name":"Стандартный"},"tty":{"name":"TTY"}}')
    },
    3613: function(e) {
        e.exports = JSON.parse('{"Id":"ID","Name":"Name","Address":"Adresse","Online":"Online","Offline":"Offline","Loading":"Lädt...","General":"Allgemein","Language":"Sprache","SelectLanguage":"Sprache auswählen","Settings":"Einstellungen","Update":"Aktualisieren","Edit":"Bearbeiten","Delete":"Löschen","Create":"Erstellen","Save":"Speichern","Saved":"Gespeichert","SaveFailed":"Speichern fehlgeschlagen","Cancel":"Abbrechen","Confirm":"Bestätigen","Actions":"Aktionen","Host":"Host","Port":"Port","Template":"Vorlage","Options":"Optionen","Collapse":"Einklappen","Copied":"In die Zwischenablage kopiert","Unknown":"Unbekannt","Search":"Suchen","Back":"Zurück","Next":"Weiter","LanguageName":"Deutsch","Details":"Details","ErrorDetails":"Fehlerdetails","HelpTranslate":"Hilf uns, PufferPanel zu übersetzen","DarkMode":"Dark Mode","ThemeOptions":"Theme-Einstellungen","Protocol":"Protokoll","Add":"Hinzufügen"}')
    },
    "382f": function(e) {
        e.exports = JSON.parse('{"ServersView":"Can view this server","ServersEdit":"Edit the server","ServersInstall":"Install the server","ServersConsole":"View the console","ServersConsoleSend":"Send commands to the console","ServersStop":"Stop and kill the server","ServersStart":"Start the server","ServersStat":"View CPU and memory statistics","ServersFiles":"Allow access to files using SFTP","ServersFilesGet":"View and download files using the file manager","ServersFilesPut":"Edit and upload files using the file manager","ServersEditUsers":"Edit user\'s access to this server","Admin":"Admin (this grants every possible permission)","ViewServers":"See Servers","CreateServers":"Create new Servers","DeleteServers":"Delete Servers","EditServerAdmin":"Edit Server Settings","ViewNodes":"See Nodes","EditNodes":"Edit Nodes","DeployNodes":"Deploy new Nodes","ViewTemplates":"See Templates","EditTemplates":"Edit Templates","ViewUsers":"See all Users","EditUsers":"Edit other Users"}')
    },
    "395d": function(e) {
        e.exports = JSON.parse('{"Id":"ID","Name":"Nombre","Address":"Dirección","Online":"Online","Offline":"Offline","Loading":"Cargando...","General":"General","Language":"Idioma","SelectLanguage":"Seleccionar Idioma","Settings":"Configuración","Update":"Actualizar","Edit":"Editar","Delete":"Eliminar","Create":"Crear","Save":"Guardar","Saved":"Guardado","SaveFailed":"Guardado falló","Cancel":"Cancelar","Confirm":"Confirmar","Actions":"Acciones","Host":"Host","Port":"Puerto","Template":"Plantilla","Options":"Opciones","Collapse":"Colapsar","Copied":"Copiado al portapapeles","Unknown":"Desconocido","Search":"Buscar","Back":"Atras","Next":"Siguiente","LanguageName":"Español(LAT)","Details":"Detalles","ErrorDetails":"Detalles del error","HelpTranslate":"Ayúdanos a traducir PufferPanel","DarkMode":"Modo Oscuro","ThemeOptions":"Opciones del Tema","Protocol":"Protocolo","Add":"Agregar"}')
    },
    "3a68": function(e, t, r) {
        "use strict";
        r.r(t);
        var a = function() {
                var e = this,
                    t = e.$createElement,
                    r = e._self._c || t;
                return r("div", [r("v-row", [r("v-col", [r("v-card", [r("v-card-title", {
                    domProps: {
                        textContent: e._s(e.$t("templates.Variables"))
                    }
                }), r("v-card-text", [r("template-variables", {
                    model: {
                        value: e.value.vars,
                        callback: function(t) {
                            e.$set(e.value, "vars", t)
                        },
                        expression: "value.vars"
                    }
                })], 1)], 1)], 1)], 1), r("v-row", [r("v-col", [r("v-card", [r("v-card-title", {
                    domProps: {
                        textContent: e._s(e.$t("templates.Install"))
                    }
                }), r("v-card-text", [r("template-processors", {
                    model: {
                        value: e.value.install,
                        callback: function(t) {
                            e.$set(e.value, "install", t)
                        },
                        expression: "value.install"
                    }
                })], 1)], 1)], 1)], 1), r("v-row", [r("v-col", [r("v-card", [r("v-card-title", {
                    domProps: {
                        textContent: e._s(e.$t("templates.RunConfig"))
                    }
                }), r("v-card-text", [r("ui-input", {
                    attrs: {
                        label: e.$t("templates.Command")
                    },
                    model: {
                        value: e.value.command,
                        callback: function(t) {
                            e.$set(e.value, "command", t)
                        },
                        expression: "value.command"
                    }
                })], 1)], 1)], 1)], 1), r("v-row", [r("v-col", [r("v-card", [r("v-card-title", {
                    domProps: {
                        textContent: e._s(e.$t("templates.Shutdown"))
                    }
                }), r("v-card-text", [r("template-shutdown", {
                    model: {
                        value: e.value.stop,
                        callback: function(t) {
                            e.$set(e.value, "stop", t)
                        },
                        expression: "value.stop"
                    }
                })], 1)], 1)], 1)], 1), r("v-row", [r("v-col", [r("v-card", [r("v-card-title", {
                    domProps: {
                        textContent: e._s(e.$t("templates.PreHook"))
                    }
                }), r("v-card-text", [r("template-processors", {
                    model: {
                        value: e.value.pre,
                        callback: function(t) {
                            e.$set(e.value, "pre", t)
                        },
                        expression: "value.pre"
                    }
                })], 1)], 1)], 1)], 1), r("v-row", [r("v-col", [r("v-card", [r("v-card-title", {
                    domProps: {
                        textContent: e._s(e.$t("templates.PostHook"))
                    }
                }), r("v-card-text", [r("template-processors", {
                    model: {
                        value: e.value.post,
                        callback: function(t) {
                            e.$set(e.value, "post", t)
                        },
                        expression: "value.post"
                    }
                })], 1)], 1)], 1)], 1), r("v-row", [r("v-col", [r("v-card", [r("v-card-title", {
                    domProps: {
                        textContent: e._s(e.$t("templates.EnvVars"))
                    }
                }), r("v-card-text", [r("ui-map-input", {
                    on: {
                        input: function(t) {
                            return e.$forceUpdate()
                        }
                    },
                    model: {
                        value: e.value.envVars,
                        callback: function(t) {
                            e.$set(e.value, "envVars", t)
                        },
                        expression: "value.envVars"
                    }
                })], 1)], 1)], 1)], 1), r("v-row", [r("v-col", [r("v-card", [r("v-card-title", {
                    domProps: {
                        textContent: e._s(e.$t(e.server ? "templates.Environment" : "templates.Environments"))
                    }
                }), e.server ? r("v-card-text", [r("ui-env-config", {
                    attrs: {
                        "no-fields-text": e.$t("env.NoEnvFields")
                    },
                    model: {
                        value: e.value.defaultEnv,
                        callback: function(t) {
                            e.$set(e.value, "defaultEnv", t)
                        },
                        expression: "value.defaultEnv"
                    }
                })], 1) : r("v-card-text", [r("template-environments", {
                    model: {
                        value: e.value.supportedEnvs,
                        callback: function(t) {
                            e.$set(e.value, "supportedEnvs", t)
                        },
                        expression: "value.supportedEnvs"
                    }
                }), Object.keys(e.value.supportedEnvs).length > 0 ? r("ui-select", {
                    attrs: {
                        label: e.$t("templates.DefaultEnvironment"),
                        items: e.configuredEnvironments
                    },
                    model: {
                        value: e.value.defaultEnv,
                        callback: function(t) {
                            e.$set(e.value, "defaultEnv", t)
                        },
                        expression: "value.defaultEnv"
                    }
                }) : e._e()], 1)], 1)], 1)], 1)], 1)
            },
            o = [],
            n = {
                props: {
                    value: {
                        type: Object,
                        required: !0
                    },
                    server: {
                        type: Boolean,
                        default: () => !1
                    }
                },
                computed: {
                    configuredEnvironments() {
                        return this.value.supportedEnvs.map(e => ({
                            text: e.type,
                            value: e
                        }))
                    }
                },
                watch: {
                    "value.supportedEnvs"(e) {
                        this.value.defaultEnv && (this.value.defaultEnv = e.filter(e => e.type === this.value.defaultEnv.type)[0])
                    }
                }
            },
            s = n,
            i = r("2877"),
            l = r("6544"),
            d = r.n(l),
            c = r("b0af"),
            u = r("99d9"),
            m = r("62ad"),
            p = r("0fd9"),
            v = Object(i["a"])(s, a, o, !1, null, null, null);
        t["default"] = v.exports;
        d()(v, {
            VCard: c["a"],
            VCardText: u["c"],
            VCardTitle: u["d"],
            VCol: m["a"],
            VRow: p["a"]
        })
    },
    "3bd7": function(e) {
        e.exports = JSON.parse('{"ServersView":"Saab vaadata seda serverit","ServersEdit":"Muuda serverit","ServersInstall":"Paigalda server","ServersConsole":"Vaata konsooli","ServersConsoleSend":"Saada käsklused konsooli","ServersStop":"Peata ja killi server","ServersStart":"Käivita server","ServersStat":"Vaata CPU ja mälu statistikat","ServersFiles":"Luba ligipääs failidele kasutades SFTP","ServersFilesGet":"Vaata ja laadi alla faile kasutades failihaldurit","ServersFilesPut":"Muuda ja laadi üles faile kasutades failihaldurit","ServersEditUsers":"Muuda kasutaja ligipääsu sellele serverile","Admin":"Admin (see annab iga võimaliku õiguse)","ViewServers":"See Servers","CreateServers":"Loo uusi Servereid","DeleteServers":"Kustuta Servereid","EditServerAdmin":"Muuda Serveri sätteid","ViewNodes":"Vaata Sõlmi","EditNodes":"Muuda Sõlmi","DeployNodes":"Juuruta uued Sõlmed","ViewTemplates":"Vaata Malle","EditTemplates":"Muuda Malle","ViewUsers":"Vaata kõiki Kasutajaid","EditUsers":"Muuda teisi Kasutajaid"}')
    },
    "3bd9": function(e) {
        e.exports = JSON.parse('{"Server":"서버","NoServers":"접근 가능한 서버가 없습니다","Servers":"서버들","Add":"서버 추가","Console":"콘솔","Controls":"제어","SFTPInfo":"SFTP 정보","Restart":"재시작","Start":"시작","Stop":"정지","Kill":"강제 중지","Install":"설치","Send":"전송","Pause":"일시 정지","CPU":"CPU","Memory":"메모리","Name":"서버 이름","SelectNode":"노드를 선택해주세요","SelectTemplate":"템플릿을 선택해주세요","SelectThisTemplate":"이 템플릿 사용하기","SelectUser":"유저를 선택해주세요","Environment":"환경","SelectEnvironment":"환경을 선택해주세요","TypeUsername":"닉네임을 입력해주세요","AdminControls":"관리자 조작","Settings":"설정","NoEditableVars":"이 서버에 수정할 수 있는 변수가 없습니다.","ConfirmDelete":"이 서버를 삭제할까요?(되돌릴 수 없습니다.)","Delete":"서버 삭제","Deleted":"서버가 삭제되었습니다.","NoReadme":"이 템플릿에 설명이 없습니다","SftpConnection":"SFTP 연결","EditDefinition":"Edit Server Definition","Reload":"디스크에서 서버 정보 다시 로드","Reloaded":"서버 정보를 다시 불러왔습니다.","Autostart":"노드가 시작되었을때 서버 시작","Autorestart":"서버가 중지되었을 때 재시작","Autorecover":"오류로 서버가 중지되었을 때 재시작"}')
    },
    "3c45": function(e) {
        e.exports = JSON.parse('{"FileManager":"Menadżer Plików","NewFolder":"Nowy Katalog","NewFile":"Nowy Plik","LastModified":"Ostatnio modyfikowany","ConfirmDelete":"Czy na pewno chcesz usunąć ten plik?","Upload":"Wyślij","Download":"Pobierz","Size":"Rozmiar","NoFiles":"Nie ma jeszcze tutaj żadnych plików, utwórz je na przykład klikając przycisk instaluj na górze strony","FileLoadFailed":"Nie udało się wczytać pliku"}')
    },
    "3c6b": function(e) {
        e.exports = JSON.parse('{"Id":"아이디","Name":"이름","Address":"주소","Online":"온라인","Offline":"오프라인","Loading":"불러오는 중..","General":"일반","Language":"언어","SelectLanguage":"언어 선택하기","Settings":"설정","Update":"업데이트","Edit":"수정","Delete":"삭제","Create":"생성","Save":"저장","Saved":"저장됨","SaveFailed":"저장 실패","Cancel":"취소","Confirm":"확인","Actions":"작업","Host":"호스트","Port":"포트","Template":"템플릿","Options":"옵션","Collapse":"접기","Copied":"클림보드에 복사되었습니다","Unknown":"알 수 없음","Search":"검색","Back":"뒤로가기","Next":"다음","LanguageName":"한국어","Details":"자세히 보기","ErrorDetails":"오류 정보","HelpTranslate":"PufferPanel을 번역하는걸 도와주세요","DarkMode":"어두운 테마","ThemeOptions":"테마 옵션","Protocol":"프로토콘","Add":"추가"}')
    },
    "3d3c": function(e) {
        e.exports = JSON.parse('{"Templates":"Templates","NoTemplates":"There are no templates here yet","Deleted":"Template deleted","New":"Create new template","Edit":"Edit template","Editor":"Editor","Json":"JSON","Display":"Display Name","Type":"Type","Variables":"Variables","Install":"Install","AddInstallStep":"Add Install Step","DeleteInstallStep":"Delete Install Step","Description":"Description","DataType":"Data Type","DefaultValue":"Default Value","Required":"Required","UserEditable":"Users can edit","Value":"Value","AddOption":"Add an option","AddCommand":"Add command","Filename":"Filename","Content":"Content","Source":"Source","Target":"Target","Version":"Version","ReleaseType":"Release Type","AddFile":"Add file","AddVariable":"Add variable","Environment":"Environment","Environments":"Environments","AddEnvironment":"Add environment","DefaultEnvironment":"Default environment","AddEnvVar":"Add env variable","EnvVars":"Environment variables","DockerImage":"Docker Image","SaveSuccess":"Saved Template","VarNameNoSpaces":"A variable name cannot be empty or contain spaces","SupportedEnvironments":"Supported Environments","RunConfig":"Run Configuration","PreHook":"Pre Run Hook","PostHook":"Post Run Hook","AddPreStep":"Add Pre Run Step","AddPostStep":"Add Post Run Step","DeletePreStep":"Delete Pre Run Step","DeletePostStep":"Delete Post Run Step","Shutdown":"Shutdown","Command":"Command","Arguments":"Arguments","AddArgument":"Add an argument","import":{"OverrideWarning":"WARNING: Imported templates WILL overwrite existing templates with the same ID","Import":"Import templates","Tooltip":"Import templates from the official repository","Select":"Select templates to import","Started":"Importing templates, please wait a moment","Successful":"Successfully imported template {template}","NoTemplatesTitle":"Do you want to import templates?","NoTemplatesContent":"You currently don\'t have any templates. Templates are necessary to create servers.<br/>Do you want to import some templates from the official PufferPanel templates repository now?"},"stop":{"Command":"Command","Signal":"Signal"},"processors":{"download":{"ProcessorName":"Download","files":"Files"},"command":{"ProcessorName":"Run Command","commands":"Commands"},"alterfile":{"ProcessorName":"Change file","regex":"Treat search as RegEx","search":"Text to search","replace":"Replace with"},"writefile":{"ProcessorName":"Write to file","text":"Content"},"move":{"ProcessorName":"Move File","source":"Source","target":"Target"},"mkdir":{"ProcessorName":"Create Directory"},"mojangdl":{"ProcessorName":"Download Minecraft"},"forgedl":{"ProcessorName":"Download Minecraft Forge"},"spongeforgedl":{"ProcessorName":"Download Minecraft SpongeForge","releaseType":"Release Type"},"fabricdl":{"ProcessorName":"Download Minecraft Fabric"}}}')
    },
    "3da2": function(e) {
        e.exports = JSON.parse('{"Node":"Node","Nodes":"Nodes","Edit":"Edit Node","Add":"Add Node","Update":"Update Node","Delete":"Delete Node","PublicHost":"Public Host","PublicPort":"Public Port","PrivateHost":"Private Host","PrivatePort":"Private Port","SftpPort":"SFTP Port","SaveConfig":"Save Config","SavePublicKey":"Save Public Key","DeploymentInstruction":"To deploy the node, install PufferPanel on the new server and place the config file in `/etc/pufferpanel/`<br/>Restart PufferPanel on the new server afterwards.","UpdateSuccess":"Successfully updated node","UpdateError":"Error updating node"}')
    },
    "404a": function(e) {
        e.exports = JSON.parse('{"Server":"Serveur","NoServers":"Il n\'y a aucun serveur auquel vous avez accès","Servers":"Serveurs","Add":"Ajouter un Serveur","Console":"Console","Controls":"Contrôles","SFTPInfo":"Informations SFTP","Restart":"Redémarrer","Start":"Démarrer","Stop":"Arrêter","Kill":"Forcer l\'arrêt","Install":"Installer","Send":"Envoyer","Pause":"Pause","CPU":"CPU","Memory":"Mémoire","Name":"Nom du Serveur","SelectNode":"Veuillez sélectionner un nœud","SelectTemplate":"Veuillez sélectionner un modèle","SelectThisTemplate":"Utiliser ce modèle","SelectUser":"Veuillez sélectionner un utilisateur","Environment":"Environnement","SelectEnvironment":"Veuillez sélectionner un environnement","TypeUsername":"Saisissez un nom d\'utilisateur","AdminControls":"Contrôles Administratifs","Settings":"Paramètres","NoEditableVars":"Ce serveur n\'a aucune variable que vous pouvez éditer","ConfirmDelete":"Êtes-vous vraiment sûr de vouloir supprimer ce serveur ? (cette opération est irréversible)","Delete":"Supprimer le serveur","Deleted":"Serveur supprimé","NoReadme":"Aucun \\"Read Me\\" disponible pour ce modèle","SftpConnection":"Se connecter au SFTP","EditDefinition":"Modifier la définition du serveur","Reload":"Recharger les données du serveur depuis le disque","Reloaded":"Données du serveur rechargées","Autostart":"Démarrer le serveur au démarrage du nœud","Autorestart":"Redémarrer le serveur lorsqu\'il s\'arrête normalement","Autorecover":"Redémarrer le serveur quand il plante"}')
    },
    4211: function(e) {
        e.exports = JSON.parse('{"Server":"Server","NoServers":"Neexistují žádné servery, ke kterým máte přístup","Servers":"Servery","Add":"Přidat server","Console":"Konzole","Controls":"Ovládání","SFTPInfo":"SFTP informace","Restart":"Restartovat","Start":"Spustit","Stop":"Zastavit","Kill":"Shodit","Install":"Instalovat","Send":"Odeslat","Pause":"Pozastavit","CPU":"CPU","Memory":"Paměť","Name":"Název serveru","SelectNode":"Prosím vyberte uzel","SelectTemplate":"Vyberte šablonu","SelectThisTemplate":"Použít tuto šablonu","SelectUser":"Vyberte uživatele","Environment":"Prostředí","SelectEnvironment":"Vyberte prosím prostředí","TypeUsername":"Zadejte své uživatelské jméno","AdminControls":"Admin ovládání","Settings":"Nastavení","NoEditableVars":"Tento server nemá proměnné, které můžete upravovat","ConfirmDelete":"Opravdu chcete smazat tento server? (toto nelze vrátit zpět)","Delete":"Odstranit server","Deleted":"Smazaný server","NoReadme":"Pro tuto šablonu není k dispozici žádné čtení","SftpConnection":"Připojit k SFTP","EditDefinition":"Edit Server Definition","Reload":"Znovu načíst data serveru z disku","Reloaded":"Znovu načtená data serveru","Autostart":"Spustit server při spuštění uzlu","Autorestart":"Restartovat server, když se normálně zastaví","Autorecover":"Restartovat server při pádu"}')
    },
    "425f": function(e) {
        e.exports = JSON.parse('{"ServersView":"Can view this server","ServersEdit":"Edit the server","ServersInstall":"Install the server","ServersConsole":"View the console","ServersConsoleSend":"Send commands to the console","ServersStop":"Stop and kill the server","ServersStart":"Start the server","ServersStat":"View CPU and memory statistics","ServersFiles":"Allow access to files using SFTP","ServersFilesGet":"View and download files using the file manager","ServersFilesPut":"Edit and upload files using the file manager","ServersEditUsers":"Edit user\'s access to this server","Admin":"Admin (this grants every possible permission)","ViewServers":"See Servers","CreateServers":"Create new Servers","DeleteServers":"Delete Servers","EditServerAdmin":"Edit Server Settings","ViewNodes":"See Nodes","EditNodes":"Edit Nodes","DeployNodes":"Deploy new Nodes","ViewTemplates":"See Templates","EditTemplates":"Edit Templates","ViewUsers":"See all Users","EditUsers":"Edit other Users"}')
    },
    "444f": function(e) {
        e.exports = JSON.parse('{"Server":"Server","NoServers":"There are no servers you have access to","Servers":"Servers","Add":"Add Server","Console":"Console","Controls":"Controls","SFTPInfo":"SFTP Information","Restart":"Restart","Start":"Start","Stop":"Stop","Kill":"Kill","Install":"Install","Send":"Send","Pause":"Pause","CPU":"CPU","Memory":"Memory","Name":"Server Name","SelectNode":"Please select node","SelectTemplate":"Please select template","SelectThisTemplate":"Use this template","SelectUser":"Please select user","Environment":"Environment","SelectEnvironment":"Please select environment","TypeUsername":"Type a username","AdminControls":"Admin Controls","Settings":"Settings","NoEditableVars":"This server does not have variables you can edit","ConfirmDelete":"Do you really want to delete this server? (this cannot be undone)","Delete":"Delete Server","Deleted":"Deleted Server","NoReadme":"No readme available for this template","SftpConnection":"Connect to SFTP","EditDefinition":"Edit Server Definition","Reload":"Reload server data from disk","Reloaded":"Reloaded server data","Autostart":"Start the server when the node starts","Autorestart":"Restart the server when it stops normally","Autorecover":"Restart the server when it crashes"}')
    },
    4575: function(e) {
        e.exports = JSON.parse('{"FileManager":"Dosya Yöneticisi","NewFolder":"Yeni Klasör","NewFile":"Yeni Dosya","LastModified":"Son Değiştirilme","ConfirmDelete":"Bu dosyayı silmek istediğinden emin misin?","Upload":"Karşıya yükle","Download":"İndir","Size":"Boyut","NoFiles":"Henüz bir dosya mevcut değil, Lütfen kurulumu yapmak için üstteki Kurulum düğmesine basın","FileLoadFailed":"Dosya yüklenemedi"}')
    },
    "45c1": function(e) {
        e.exports = JSON.parse('{"Id":"ID","Name":"Name","Address":"Address","Online":"Online","Offline":"Offline","Loading":"Loading...","General":"General","Language":"Language","SelectLanguage":"Select Language","Settings":"Settings","Update":"Update","Edit":"Edit","Delete":"Delete","Create":"Create","Save":"Save","Saved":"Saved","SaveFailed":"Failed saving","Cancel":"Cancel","Confirm":"Confirm","Actions":"Actions","Host":"Host","Port":"Port","Template":"Template","Options":"Options","Collapse":"Collapse","Copied":"Copied to clipboard","Unknown":"Unknown","Search":"Search","Back":"Back","Next":"Next","LanguageName":"English","Details":"Details","ErrorDetails":"Error Details","HelpTranslate":"Help us translate PufferPanel","DarkMode":"Dark Mode","ThemeOptions":"Theme Options","Protocol":"Protocol","Add":"Add","Ignore":"Ignore"}')
    },
    "472f": function(e) {
        e.exports = JSON.parse('{"Server":"Server","NoServers":"There are no servers you have access to","Servers":"Servers","Add":"Add Server","Console":"Console","Controls":"Controls","SFTPInfo":"SFTP Information","Restart":"Restart","Start":"Start","Stop":"Stop","Kill":"Kill","Install":"Install","Send":"Send","Pause":"Pause","CPU":"CPU","Memory":"Memory","Name":"Server Name","SelectNode":"Please select node","SelectTemplate":"Please select template","SelectThisTemplate":"Use this template","SelectUser":"Please select user","Environment":"Environment","SelectEnvironment":"Please select environment","TypeUsername":"Type a username","AdminControls":"Admin Controls","Settings":"Settings","NoEditableVars":"This server does not have variables you can edit","ConfirmDelete":"Do you really want to delete this server? (this cannot be undone)","Delete":"Delete Server","Deleted":"Deleted Server","NoReadme":"No readme available for this template","SftpConnection":"Connect to SFTP","EditDefinition":"Edit Server Definition","Reload":"Reload server data from disk","Reloaded":"Reloaded server data","Autostart":"Start the server when the node starts","Autorestart":"Restart the server when it stops normally","Autorecover":"Restart the server when it crashes"}')
    },
    "477d": function(e) {
        e.exports = JSON.parse('{"ServersView":"Can view this server","ServersEdit":"Sunucuyu düzenle","ServersInstall":"Sunucu kur","ServersConsole":"Konsola bak","ServersConsoleSend":"Konsola komut gönder","ServersStop":"Sunucuyu durdur ve sonlandır","ServersStart":"Sunucuyu başlat","ServersStat":"CPU ve Bellek kullanımını gör","ServersFiles":"Allow access to files using SFTP","ServersFilesGet":"View and download files using the file manager","ServersFilesPut":"Edit and upload files using the file manager","ServersEditUsers":"Edit user\'s access to this server","Admin":"Yönetici (bu yetki verilmesi mümkün olan tüm yetkileri verir)","ViewServers":"See Servers","CreateServers":"Yeni sunucular oluştur","DeleteServers":"Sunucuları sil","EditServerAdmin":"Sunucu Ayarlarını Düzenle","ViewNodes":"Nodeleri gör","EditNodes":"Nodeleri düzenle","DeployNodes":"Deploy new Nodes","ViewTemplates":"Şablonları Gör","EditTemplates":"Şablonu Düzenle","ViewUsers":"Tüm kullanıcıları görüntüle","EditUsers":"Diğer kullanıcıları düzenle"}')
    },
    4886: function(e) {
        e.exports = JSON.parse('{"Users":"Usuarios","Add":"Añadir usuario","AccountSettings":"Configuración de la Cuenta","OldPassword":"Contraseña vieja","NewPassword":"Nueva contraseña","ConfirmPassword":"Confirma Contraseña","ChangePassword":"Cambiar contraseña","ChangeInfo":"Cambiar detalles de la cuenta","InfoChanged":"Su información fue actualizada","PasswordChanged":"Su contraseña ha sido cambiada","AccountPassword":"Contraseña de la cuenta","Account":"Cuenta","Login":"Iniciar sesión","LoginLink":"O inicia sesión aquí","Logout":"Cerrar sesión","Register":"Registrarse","RegisterLink":"O regístrate aquí","RegisterSuccess":"Te has registrado correctamente","NoEmailGiven":"Debes brindar el correo electrónico del usuario que deseas agregar","Username":"Nombre de Usuario","Password":"Contraseña","Email":"E-mail","Edit":"Editar usuario","Update":"Actualizar usuario","Delete":"Eliminar usuario","CreateSuccess":"Usuario creado","CreateError":"Error al crear el usuario","UpdateSuccess":"Usuario actualizado","UpdateError":"Error al actualizar el usuario","PermsUpdateError":"Error al actualizar los permisos del usuario"}')
    },
    "48ea": function(e) {
        e.exports = JSON.parse('{"Id":"Ідентифікатор","Name":"Ім’я","Address":"Адреса","Online":"У мережі","Offline":"Не в мережі","Loading":"Завантаження...","General":"Загальне","Language":"Мова","SelectLanguage":"Вибір мови","Settings":"Налаштування","Update":"Оновити","Edit":"Редагувати","Delete":"Видалити","Create":"Створити","Save":"Зберегти","Saved":"Збережено","SaveFailed":"Не вдалося зберегти","Cancel":"Скасувати","Confirm":"Підтвердити","Actions":"Дії","Host":"Хост","Port":"Порт","Template":"Шаблон","Options":"Опції","Collapse":"Згорнути","Copied":"Скопійовано до буфера обміну","Unknown":"Не вказано","Search":"Пошук","Back":"Назад","Next":"Далі","LanguageName":"Українська","Details":"Подробиці","ErrorDetails":"Деталі помилки","HelpTranslate":"Допоможіть нам перекласти PufferPanel","DarkMode":"Темний режим","ThemeOptions":"Параметри тем","Protocol":"Protocol","Add":"Add"}')
    },
    4983: function(e) {
        e.exports = JSON.parse('{"Server":"サーバー","NoServers":"あなたがアクセスできるサーバーがありません","Servers":"サーバー一覧","Add":"サーバーを追加","Console":"コンソール","Controls":"コントロール","SFTPInfo":"SFTP 情報","Restart":"Restart","Start":"起動","Stop":"停止","Kill":"強制終了","Install":"インストール","Send":"送信","Pause":"一時停止","CPU":"CPU","Memory":"メモリ","Name":"サーバー名","SelectNode":"ノードを選択してください","SelectTemplate":"テンプレートを選択してください","SelectThisTemplate":"このテンプレートを使う","SelectUser":"ユーザーを選択してください","Environment":"使用環境","SelectEnvironment":"使用環境を選択してください","TypeUsername":"ユーザー名を入力してください。","AdminControls":"管理者コントロール","Settings":"設定","NoEditableVars":"このサーバーには編集可能な変数がありません","ConfirmDelete":"このコメントを削除してもよろしいですか? この操作は元に戻すことができません。","Delete":"サーバーを削除","Deleted":"サーバーを削除しました","NoReadme":"このテンプレートで利用可能なreadmeがありません","SftpConnection":"SFTP に接続","EditDefinition":"Edit Server Definition","Reload":"サーバーのデータをディスクから再読み込み","Reloaded":"サーバーのデータを再読み込みしました","Autostart":"ノード開始時にサーバーを起動する","Autorestart":"Restart the server when it stops normally","Autorecover":"クラッシュした際にサーバーを再起動します"}')
    },
    4999: function(e, t, r) {
        var a = {
            "./ar_SA/common.json": "d6e2",
            "./ar_SA/env.json": "159a",
            "./ar_SA/errors.json": "34e5",
            "./ar_SA/files.json": "5299",
            "./ar_SA/nodes.json": "9c61",
            "./ar_SA/scopes.json": "e40d",
            "./ar_SA/servers.json": "b6ae",
            "./ar_SA/templates.json": "009c",
            "./ar_SA/users.json": "1b41",
            "./cs_CZ/common.json": "c0ae",
            "./cs_CZ/env.json": "bc12",
            "./cs_CZ/errors.json": "be1e",
            "./cs_CZ/files.json": "e245",
            "./cs_CZ/nodes.json": "0b0a",
            "./cs_CZ/scopes.json": "dddc",
            "./cs_CZ/servers.json": "4211",
            "./cs_CZ/templates.json": "9288",
            "./cs_CZ/users.json": "510e",
            "./da_DK/common.json": "0753",
            "./da_DK/env.json": "9047",
            "./da_DK/errors.json": "2cc5",
            "./da_DK/files.json": "cf15",
            "./da_DK/nodes.json": "2143",
            "./da_DK/scopes.json": "b0ce",
            "./da_DK/servers.json": "cb95",
            "./da_DK/templates.json": "bf70",
            "./da_DK/users.json": "b3d7",
            "./de_DE/common.json": "3613",
            "./de_DE/env.json": "7912",
            "./de_DE/errors.json": "6fbc",
            "./de_DE/files.json": "5bdb",
            "./de_DE/nodes.json": "7765",
            "./de_DE/scopes.json": "853d",
            "./de_DE/servers.json": "f04d",
            "./de_DE/templates.json": "2ab5",
            "./de_DE/users.json": "9a68",
            "./el_GR/common.json": "ff1b",
            "./el_GR/env.json": "b414",
            "./el_GR/errors.json": "aa9e",
            "./el_GR/files.json": "cce6",
            "./el_GR/nodes.json": "229d",
            "./el_GR/scopes.json": "5c7b",
            "./el_GR/servers.json": "472f",
            "./el_GR/templates.json": "3d3c",
            "./el_GR/users.json": "ec20",
            "./en_US/common.json": "45c1",
            "./en_US/env.json": "f6c5",
            "./en_US/errors.json": "8b82",
            "./en_US/files.json": "675d",
            "./en_US/nodes.json": "920f",
            "./en_US/scopes.json": "d611",
            "./en_US/servers.json": "2e27",
            "./en_US/templates.json": "cfa3",
            "./en_US/users.json": "4c8f",
            "./es_419/common.json": "395d",
            "./es_419/env.json": "9a18",
            "./es_419/errors.json": "d8ed",
            "./es_419/files.json": "c6b0",
            "./es_419/nodes.json": "0872",
            "./es_419/scopes.json": "4ef2",
            "./es_419/servers.json": "fac4",
            "./es_419/templates.json": "d0ca",
            "./es_419/users.json": "4886",
            "./es_ES/common.json": "6b00",
            "./es_ES/env.json": "8cb8",
            "./es_ES/errors.json": "6932",
            "./es_ES/files.json": "e937",
            "./es_ES/nodes.json": "2a8d",
            "./es_ES/scopes.json": "0548",
            "./es_ES/servers.json": "21bb",
            "./es_ES/templates.json": "c652",
            "./es_ES/users.json": "ed5d",
            "./et_EE/common.json": "1649",
            "./et_EE/env.json": "c398",
            "./et_EE/errors.json": "0a23",
            "./et_EE/files.json": "332e",
            "./et_EE/nodes.json": "79f8",
            "./et_EE/scopes.json": "3bd7",
            "./et_EE/servers.json": "6425",
            "./et_EE/templates.json": "e404",
            "./et_EE/users.json": "12f6",
            "./fi_FI/common.json": "9a8d",
            "./fi_FI/env.json": "594f",
            "./fi_FI/errors.json": "0834",
            "./fi_FI/files.json": "67b8",
            "./fi_FI/nodes.json": "fc16",
            "./fi_FI/scopes.json": "db49",
            "./fi_FI/servers.json": "444f",
            "./fi_FI/templates.json": "4d0c",
            "./fi_FI/users.json": "b3a1",
            "./fr_FR/common.json": "a45f",
            "./fr_FR/env.json": "2aae",
            "./fr_FR/errors.json": "007e",
            "./fr_FR/files.json": "5c1b",
            "./fr_FR/nodes.json": "1551",
            "./fr_FR/scopes.json": "2d52",
            "./fr_FR/servers.json": "404a",
            "./fr_FR/templates.json": "9e9f",
            "./fr_FR/users.json": "2ba5",
            "./he_IL/common.json": "f956",
            "./he_IL/env.json": "cf91",
            "./he_IL/errors.json": "7952",
            "./he_IL/files.json": "70b6",
            "./he_IL/nodes.json": "9ba7",
            "./he_IL/scopes.json": "9acc",
            "./he_IL/servers.json": "0d04",
            "./he_IL/templates.json": "6917",
            "./he_IL/users.json": "ea6c",
            "./hu_HU/common.json": "bcbc",
            "./hu_HU/env.json": "c879",
            "./hu_HU/errors.json": "e3a2",
            "./hu_HU/files.json": "b4a8",
            "./hu_HU/nodes.json": "7575",
            "./hu_HU/scopes.json": "64a0",
            "./hu_HU/servers.json": "5cdd",
            "./hu_HU/templates.json": "c2a0",
            "./hu_HU/users.json": "27fc",
            "./id_ID/common.json": "5363",
            "./id_ID/env.json": "05a8",
            "./id_ID/errors.json": "49a7",
            "./id_ID/files.json": "b689",
            "./id_ID/nodes.json": "a7cd",
            "./id_ID/scopes.json": "d9f9",
            "./id_ID/servers.json": "ec78",
            "./id_ID/templates.json": "7743",
            "./id_ID/users.json": "a654",
            "./it_IT/common.json": "2652",
            "./it_IT/env.json": "ef2c",
            "./it_IT/errors.json": "1448",
            "./it_IT/files.json": "5dd9",
            "./it_IT/nodes.json": "0dc9",
            "./it_IT/scopes.json": "b617",
            "./it_IT/servers.json": "f84f",
            "./it_IT/templates.json": "7306",
            "./it_IT/users.json": "18c4",
            "./ja_JP/common.json": "6176",
            "./ja_JP/env.json": "17a8",
            "./ja_JP/errors.json": "4e65",
            "./ja_JP/files.json": "a566",
            "./ja_JP/nodes.json": "a43f",
            "./ja_JP/scopes.json": "ac0b",
            "./ja_JP/servers.json": "4983",
            "./ja_JP/templates.json": "73e3",
            "./ja_JP/users.json": "3042",
            "./ko_KR/common.json": "3c6b",
            "./ko_KR/env.json": "dbe0",
            "./ko_KR/errors.json": "7380",
            "./ko_KR/files.json": "8136",
            "./ko_KR/nodes.json": "5ac7",
            "./ko_KR/scopes.json": "21b2",
            "./ko_KR/servers.json": "3bd9",
            "./ko_KR/templates.json": "35a3",
            "./ko_KR/users.json": "531d",
            "./nl_NL/common.json": "de60",
            "./nl_NL/env.json": "6075",
            "./nl_NL/errors.json": "92a6",
            "./nl_NL/files.json": "5cce",
            "./nl_NL/nodes.json": "88c8",
            "./nl_NL/scopes.json": "fe5a",
            "./nl_NL/servers.json": "cf44",
            "./nl_NL/templates.json": "097b",
            "./nl_NL/users.json": "1491",
            "./no_NO/common.json": "a888",
            "./no_NO/env.json": "d2a6",
            "./no_NO/errors.json": "6e7e",
            "./no_NO/files.json": "0070",
            "./no_NO/nodes.json": "696b",
            "./no_NO/scopes.json": "ed51",
            "./no_NO/servers.json": "5d8c",
            "./no_NO/templates.json": "f2e1",
            "./no_NO/users.json": "8b75",
            "./pl_PL/common.json": "5510",
            "./pl_PL/env.json": "0651",
            "./pl_PL/errors.json": "7c0e",
            "./pl_PL/files.json": "3c45",
            "./pl_PL/nodes.json": "f8be",
            "./pl_PL/scopes.json": "16e4",
            "./pl_PL/servers.json": "5636",
            "./pl_PL/templates.json": "d9bdf",
            "./pl_PL/users.json": "0e57",
            "./pt_BR/common.json": "53d7",
            "./pt_BR/env.json": "5a9e",
            "./pt_BR/errors.json": "e1bb",
            "./pt_BR/files.json": "dffa",
            "./pt_BR/nodes.json": "8e54",
            "./pt_BR/scopes.json": "8051",
            "./pt_BR/servers.json": "a243",
            "./pt_BR/templates.json": "0fe0",
            "./pt_BR/users.json": "b053",
            "./pt_PT/common.json": "c87d",
            "./pt_PT/env.json": "abcb",
            "./pt_PT/errors.json": "00e2",
            "./pt_PT/files.json": "edba",
            "./pt_PT/nodes.json": "3da2",
            "./pt_PT/scopes.json": "2227",
            "./pt_PT/servers.json": "2ade",
            "./pt_PT/templates.json": "eb61",
            "./pt_PT/users.json": "b8d7",
            "./ro_RO/common.json": "bb3a",
            "./ro_RO/env.json": "6d8f",
            "./ro_RO/errors.json": "9e7c",
            "./ro_RO/files.json": "07cb",
            "./ro_RO/nodes.json": "bb78",
            "./ro_RO/scopes.json": "fbb2",
            "./ro_RO/servers.json": "735e",
            "./ro_RO/templates.json": "9560",
            "./ro_RO/users.json": "4e51",
            "./ru_RU/common.json": "76ca",
            "./ru_RU/env.json": "35c7",
            "./ru_RU/errors.json": "094f",
            "./ru_RU/files.json": "7295",
            "./ru_RU/nodes.json": "9459",
            "./ru_RU/scopes.json": "dcdb",
            "./ru_RU/servers.json": "504c",
            "./ru_RU/templates.json": "0d3d",
            "./ru_RU/users.json": "4adf",
            "./sr_SP/common.json": "4f16",
            "./sr_SP/env.json": "ec4d",
            "./sr_SP/errors.json": "5899",
            "./sr_SP/files.json": "d982",
            "./sr_SP/nodes.json": "cf13",
            "./sr_SP/scopes.json": "382f",
            "./sr_SP/servers.json": "00f7",
            "./sr_SP/templates.json": "91b3",
            "./sr_SP/users.json": "dfe9",
            "./sv_SE/common.json": "7074",
            "./sv_SE/env.json": "9445",
            "./sv_SE/errors.json": "b1ba",
            "./sv_SE/files.json": "f50e",
            "./sv_SE/nodes.json": "8822",
            "./sv_SE/scopes.json": "eadd",
            "./sv_SE/servers.json": "1469",
            "./sv_SE/templates.json": "bf01",
            "./sv_SE/users.json": "19d7",
            "./tr_TR/common.json": "6bc6",
            "./tr_TR/env.json": "06b9",
            "./tr_TR/errors.json": "5ab5",
            "./tr_TR/files.json": "4575",
            "./tr_TR/nodes.json": "e796",
            "./tr_TR/scopes.json": "477d",
            "./tr_TR/servers.json": "bc7a",
            "./tr_TR/templates.json": "04a2",
            "./tr_TR/users.json": "1616",
            "./uk_UA/common.json": "48ea",
            "./uk_UA/env.json": "f67c",
            "./uk_UA/errors.json": "2515",
            "./uk_UA/files.json": "9f41",
            "./uk_UA/nodes.json": "6485",
            "./uk_UA/scopes.json": "425f",
            "./uk_UA/servers.json": "9de9",
            "./uk_UA/templates.json": "d790",
            "./uk_UA/users.json": "ce16",
            "./vi_VN/common.json": "e3d4",
            "./vi_VN/env.json": "7c5d",
            "./vi_VN/errors.json": "a630",
            "./vi_VN/files.json": "8e6a",
            "./vi_VN/nodes.json": "83a2",
            "./vi_VN/scopes.json": "87a5",
            "./vi_VN/servers.json": "bb68",
            "./vi_VN/templates.json": "a6c2",
            "./vi_VN/users.json": "cd69",
            "./zh_CN/common.json": "574d",
            "./zh_CN/env.json": "9dd4",
            "./zh_CN/errors.json": "29be",
            "./zh_CN/files.json": "5529",
            "./zh_CN/nodes.json": "e483",
            "./zh_CN/scopes.json": "59e1",
            "./zh_CN/servers.json": "1727",
            "./zh_CN/templates.json": "5b90",
            "./zh_CN/users.json": "7d77",
            "./zh_HK/common.json": "8245",
            "./zh_HK/env.json": "ca66",
            "./zh_HK/errors.json": "c370",
            "./zh_HK/files.json": "d7a8",
            "./zh_HK/nodes.json": "705a",
            "./zh_HK/scopes.json": "84f0",
            "./zh_HK/servers.json": "9da9",
            "./zh_HK/templates.json": "506c",
            "./zh_HK/users.json": "3443",
            "./zh_TW/common.json": "f05a",
            "./zh_TW/env.json": "00d6",
            "./zh_TW/errors.json": "18c6",
            "./zh_TW/files.json": "e6ec",
            "./zh_TW/nodes.json": "be06",
            "./zh_TW/scopes.json": "92a3",
            "./zh_TW/servers.json": "5da6",
            "./zh_TW/templates.json": "d84c",
            "./zh_TW/users.json": "d487"
        };
        function o(e) {
            var t = n(e);
            return r(t)
        }
        function n(e) {
            if (!r.o(a, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return a[e]
        }
        o.keys = function() {
            return Object.keys(a)
        },
        o.resolve = n,
        e.exports = o,
        o.id = "4999"
    },
    "49a4": function(e, t, r) {
        "use strict";
        r.r(t);
        var a = function() {
                var e = this,
                    t = e.$createElement,
                    r = e._self._c || t;
                return r("v-tooltip", {
                    attrs: {
                        bottom: ""
                    },
                    scopedSlots: e._u([{
                        key: "activator",
                        fn: function(t) {
                            var a = t.on;
                            return [r("v-icon", e._g({
                                attrs: {
                                    dense: "",
                                    color: !0 === e.online ? "success" : !1 === e.online ? "error" : "grey"
                                }
                            }, a), [e._v(" mdi-brightness-1 ")])]
                        }
                    }])
                }, [r("span", {
                    domProps: {
                        textContent: e._s(!0 === e.online ? e.$t("common.Online") : !1 === e.online ? e.$t("common.Offline") : e.$t("common.Unknown"))
                    }
                })])
            },
            o = [],
            n = {
                props: {
                    server: {
                        type: Object,
                        default: () => {}
                    }
                },
                data() {
                    return {
                        online: null
                    }
                },
                mounted() {
                    this.$api.addServerListener(this.server.id, "status", e => {
                        this.online = e.running
                    }),
                    this.$api.requestServerStatus(this.server.id)
                }
            },
            s = n,
            i = r("2877"),
            l = r("6544"),
            d = r.n(l),
            c = r("132d"),
            u = r("3a2f"),
            m = Object(i["a"])(s, a, o, !1, null, null, null);
        t["default"] = m.exports;
        d()(m, {
            VIcon: c["a"],
            VTooltip: u["a"]
        })
    },
    "49a7": function(e) {
        e.exports = JSON.parse('{"ErrGeneric":"Error tidak diketahui","ErrUnknownError":"Error tidak diketahui","ErrInvalidCredentials":"Kredensial tidak valid","ErrServiceNotAvailable":"Layanan tidak tersedia","ErrEmailNotConfigured":"File belum dikonfigurasi","ErrTokenInvalid":"Token tidak valid","ErrClientNotFound":"Klien tidak ditemukan","ErrUserNotFound":"Pengguna tidak ditemukan","ErrLoginNotPermitted":"Login tidak di izinkan","ErrInvalidTokenState":"Invalid token state","ErrSettingNotConfigured":"{setting} belum di configurasi","ErrNoTemplate":"Tidak ada tempelate dengan nama {name}","ErrServiceInvalidProvider":"{service} tidak di dukung {provider}","ErrFieldRequired":"{field} diperlukan","ErrFieldMustBePrintable":"{field} harus mengunakan karakter ascii","ErrFieldHasURICharacters":"{field} must not contain characters which cannot be used in URIs","ErrFieldIsInvalidHost":"{field} ip atau FQDN harus valid","ErrFieldIsInvalidIP":"{field} ip harus valid","ErrFieldTooLarge":"{field} tidak dapat sebesar {max}","ErrFieldTooSmall":"{field} tidak dapat sekecil {min}","ErrFieldNotBetween":"{field} harus diantara {min} dan {max}","ErrFieldEqual":"{field1} tidak dapat sama seperti {field2}","ErrFieldNotEqual":"{field1} tidak sama dengan {field2}","ErrFieldNotEmail":"{field} email tidak valid","ErrFieldLength":"{field} harus sepanjang {length} karakter","ErrNoPermission":"Anda tidak punya izin untuk melakukan tindakan ini","ErrDatabaseNotAvailable":"Database tidak tersedia","ErrNoNodes":"Tidak ada node yang tersedia","ErrNoTemplates":"Tidak ada template yang tersedia","ErrPasswordRequirements":"Kata sandi minimal harus sepanjang {min} karakter","ErrUsernameRequirements":"Nama penguna harus sepanjang {min} karakter","ErrPasswordsNotIdentical":"Kata sandi tidak sama","ErrSessionTimedOut":"Sesi anda telah habis, silahkan masuk kembali","ErrMissingScope":"Anda tidak di ijinkan melakukan aksi ini","ErrInvalidJson":"Data json tidak valid","ErrSocketFailed":"The WebSocket connection encountered an error, some features might be slow or broken"}')
    },
    "4a65": function(e, t, r) {},
    "4adf": function(e) {
        e.exports = JSON.parse('{"Users":"Пользователи","Add":"Добавить пользователя","AccountSettings":"Настройки учетной записи","OldPassword":"Старый пароль","NewPassword":"Новый пароль","ConfirmPassword":"Подтвердите пароль","ChangePassword":"Изменить пароль","ChangeInfo":"Изменить данные учетной записи","InfoChanged":"Ваша информация была изменена","PasswordChanged":"Ваш пароль был успешно изменён","AccountPassword":"Пароль учетной записи","Account":"Аккаунт","Login":"Вход","LoginLink":"Или войдите здесь","Logout":"Выйти","Register":"Зарегистрироваться","RegisterLink":"Или зарегистрируйтесь здесь","RegisterSuccess":"Ваш аккаунт успешно зарегистрирован","NoEmailGiven":"Вы должны указать email пользователя, которого вы хотите добавить","Username":"Пользователь","Password":"Пароль","Email":"E-mail","Edit":"Редактировать пользователя","Update":"Обновить пользователя","Delete":"Удалить пользователя","CreateSuccess":"Создание пользователя","CreateError":"Ошибка в создании пользователя","UpdateSuccess":"Пользователь обновлен","UpdateError":"Не удалось обновить пользователя","PermsUpdateError":"Не удалось обновить права пользователя"}')
    },
    "4b15": function(e, t, r) {
        "use strict";
        r("ac0e")
    },
    "4c8f": function(e) {
        e.exports = JSON.parse('{"Users":"Users","Add":"Add User","AccountSettings":"Account Settings","OldPassword":"Old Password","NewPassword":"New Password","ConfirmPassword":"Confirm Password","ChangePassword":"Change Password","ChangeInfo":"Change Account Details","InfoChanged":"Your information has been changed","PasswordChanged":"Your password has been changed","AccountPassword":"Account Password","Account":"Account","Login":"Login","LoginLink":"Or login here","Logout":"Logout","Register":"Register","RegisterLink":"Or register here","RegisterSuccess":"You have successfully registered","NoEmailGiven":"You must provide the email of the user you want to add","Username":"Username","Password":"Password","Email":"Email","Edit":"Edit User","Update":"Update User","Delete":"Delete User","CreateSuccess":"Created User","CreateError":"Failed creating user","UpdateSuccess":"Updated User","UpdateError":"Failed updating user","PermsUpdateError":"Failed updating user permissions"}')
    },
    "4d0c": function(e) {
        e.exports = JSON.parse('{"Templates":"Templates","NoTemplates":"There are no templates here yet","Deleted":"Template deleted","New":"Create new template","Edit":"Edit template","Editor":"Editor","Json":"JSON","Display":"Display Name","Type":"Type","Variables":"Variables","Install":"Install","AddInstallStep":"Add Install Step","DeleteInstallStep":"Delete Install Step","Description":"Description","DataType":"Data Type","DefaultValue":"Default Value","Required":"Required","UserEditable":"Users can edit","Value":"Value","AddOption":"Add an option","AddCommand":"Add command","Filename":"Filename","Content":"Content","Source":"Source","Target":"Target","Version":"Version","ReleaseType":"Release Type","AddFile":"Add file","AddVariable":"Add variable","Environment":"Environment","Environments":"Environments","AddEnvironment":"Add environment","DefaultEnvironment":"Default environment","AddEnvVar":"Add env variable","EnvVars":"Environment variables","DockerImage":"Docker Image","SaveSuccess":"Saved Template","VarNameNoSpaces":"A variable name cannot be empty or contain spaces","SupportedEnvironments":"Supported Environments","RunConfig":"Run Configuration","PreHook":"Pre Run Hook","PostHook":"Post Run Hook","AddPreStep":"Add Pre Run Step","AddPostStep":"Add Post Run Step","DeletePreStep":"Delete Pre Run Step","DeletePostStep":"Delete Post Run Step","Shutdown":"Shutdown","Command":"Command","Arguments":"Arguments","AddArgument":"Add an argument","import":{"OverrideWarning":"WARNING: Imported templates WILL overwrite existing templates with the same ID","Import":"Import templates","Tooltip":"Import templates from the official repository","Select":"Select templates to import","Started":"Importing templates, please wait a moment","Successful":"Successfully imported template {template}","NoTemplatesTitle":"Do you want to import templates?","NoTemplatesContent":"You currently don\'t have any templates. Templates are necessary to create servers.<br/>Do you want to import some templates from the official PufferPanel templates repository now?"},"stop":{"Command":"Command","Signal":"Signal"},"processors":{"download":{"ProcessorName":"Download","files":"Files"},"command":{"ProcessorName":"Run Command","commands":"Commands"},"alterfile":{"ProcessorName":"Change file","regex":"Treat search as RegEx","search":"Text to search","replace":"Replace with"},"writefile":{"ProcessorName":"Write to file","text":"Content"},"move":{"ProcessorName":"Move File","source":"Source","target":"Target"},"mkdir":{"ProcessorName":"Create Directory"},"mojangdl":{"ProcessorName":"Download Minecraft"},"forgedl":{"ProcessorName":"Download Minecraft Forge"},"spongeforgedl":{"ProcessorName":"Download Minecraft SpongeForge","releaseType":"Release Type"},"fabricdl":{"ProcessorName":"Download Minecraft Fabric"}}}')
    },
    "4e51": function(e) {
        e.exports = JSON.parse('{"Users":"Users","Add":"Add User","AccountSettings":"Account Settings","OldPassword":"Old Password","NewPassword":"New Password","ConfirmPassword":"Confirm Password","ChangePassword":"Change Password","ChangeInfo":"Change Account Details","InfoChanged":"Your information has been changed","PasswordChanged":"Your password has been changed","AccountPassword":"Account Password","Account":"Account","Login":"Login","LoginLink":"Or login here","Logout":"Logout","Register":"Register","RegisterLink":"Or register here","RegisterSuccess":"You have successfully registered","NoEmailGiven":"You must provide the email of the user you want to add","Username":"Username","Password":"Password","Email":"Email","Edit":"Edit User","Update":"Update User","Delete":"Delete User","CreateSuccess":"Created User","CreateError":"Failed creating user","UpdateSuccess":"Updated User","UpdateError":"Failed updating user","PermsUpdateError":"Failed updating user permissions"}')
    },
    "4e65": function(e) {
        e.exports = JSON.parse('{"ErrGeneric":"不明なエラー","ErrUnknownError":"不明なエラー","ErrInvalidCredentials":"無効なログイン","ErrServiceNotAvailable":"このサービスは利用できません","ErrEmailNotConfigured":"メールアドレスが未設定です","ErrTokenInvalid":"無効なトークンです","ErrClientNotFound":"クライアントが見つかりません","ErrUserNotFound":"ユーザーが見つかりません","ErrLoginNotPermitted":"ログインが許可されていません","ErrInvalidTokenState":"トークンが無効になっています","ErrSettingNotConfigured":"{setting} 項目が設定されていません","ErrNoTemplate":"{name} というテンプレートは存在しません","ErrServiceInvalidProvider":"{service} は {provider} をサポートしていません","ErrFieldRequired":"{field} は入力必須の項目です","ErrFieldMustBePrintable":"{field} は表示可能なASCII文字でなければなりません","ErrFieldHasURICharacters":"{field} には使用できないURIが含まれています","ErrFieldIsInvalidHost":"{field} は有効な IP または FQDN でなければなりません","ErrFieldIsInvalidIP":"{field} は有効な IP アドレスでなければなりません","ErrFieldTooLarge":"{field} の値は {max} より大きくすることはできません","ErrFieldTooSmall":"{field} の値は {min} より小さくすることはできません","ErrFieldNotBetween":"{field} の値は {min} から {max} の間でなければなりません","ErrFieldEqual":"{field1} の値は {field2} に等しくすることはできません","ErrFieldNotEqual":"{field1} の値は {field2} と等しくありません","ErrFieldNotEmail":"{field} は有効なメールアドレスではありません。","ErrFieldLength":"{field} は少なくとも {length} 文字必要です","ErrNoPermission":"操作を行う権限がありません","ErrDatabaseNotAvailable":"データベースが利用できません","ErrNoNodes":"利用可能なノードがありません","ErrNoTemplates":"利用可能なテンプレートがありません","ErrPasswordRequirements":"パスワードは最低8文字以上である必要があります","ErrUsernameRequirements":"ユーザー名は3文字以上で英数字、または「_」、「-」を含む必要があります。","ErrPasswordsNotIdentical":"パスワードが一致しません","ErrSessionTimedOut":"セッションが時間切れです。再度ログインしてください。","ErrMissingScope":"この操作を実行する権限をもっていません。","ErrInvalidJson":"Json データが無効です","ErrSocketFailed":"The WebSocket connection encountered an error, some features might be slow or broken"}')
    },
    "4ef2": function(e) {
        e.exports = JSON.parse('{"ServersView":"Puede ver este servidor","ServersEdit":"Editar el servidor","ServersInstall":"Instalar el servidor","ServersConsole":"Ver la consola","ServersConsoleSend":"Enviar comandos a la consola","ServersStop":"Detener y matar el servidor","ServersStart":"Iniciar el servidor","ServersStat":"Ver estadísticas de CPU y memoria","ServersFiles":"Permitir el acceso a archivos usando SFTP","ServersFilesGet":"Ver y descargar archivos usando el administrador de archivos","ServersFilesPut":"Editar y subir archivos usando el administrador de archivos","ServersEditUsers":"Editar el acceso del usuario a este servidor","Admin":"Admin (esto concede todos los permisos posibles)","ViewServers":"See Servers","CreateServers":"Crear nuevos servidores","DeleteServers":"Eliminar servidores","EditServerAdmin":"Editar ajustes del servidor","ViewNodes":"Ver nodos","EditNodes":"Editar nodos","DeployNodes":"Desplegar Nodos nuevos","ViewTemplates":"Ver plantillas","EditTemplates":"Editar plantillas","ViewUsers":"Ver todos los usuarios","EditUsers":"Editar otros usuarios"}')
    },
    "4f16": function(e) {
        e.exports = JSON.parse('{"Id":"ID","Name":"Name","Address":"Address","Online":"Online","Offline":"Offline","Loading":"Loading...","General":"General","Language":"Language","SelectLanguage":"Select Language","Settings":"Settings","Update":"Update","Edit":"Edit","Delete":"Delete","Create":"Create","Save":"Save","Saved":"Saved","SaveFailed":"Failed saving","Cancel":"Cancel","Confirm":"Confirm","Actions":"Actions","Host":"Host","Port":"Port","Template":"Template","Options":"Options","Collapse":"Collapse","Copied":"Copied to clipboard","Unknown":"Unknown","Search":"Search","Back":"Back","Next":"Next","LanguageName":"Српски","Details":"Details","ErrorDetails":"Error Details","HelpTranslate":"Help us translate PufferPanel","DarkMode":"Dark Mode","ThemeOptions":"Theme Options","Protocol":"Protocol","Add":"Add"}')
    },
    "504c": function(e) {
        e.exports = JSON.parse('{"Server":"Сервер","NoServers":"Нет серверов, к которым вы имеете доступ","Servers":"Сервера","Add":"Добавить сервер","Console":"Консоль","Controls":"Управление","SFTPInfo":"Информация о SFTP","Restart":"Restart","Start":"Запуск","Stop":"Остановка","Kill":"Отключение","Install":"Установить","Send":"Отправить","Pause":"Пауза","CPU":"Процессор","Memory":"Память","Name":"Имя сервера","SelectNode":"Пожалуйста, выберите хост","SelectTemplate":"Пожалуйста, выберите шаблон","SelectThisTemplate":"Использовать этот шаблон","SelectUser":"Пожалуйста, выберите пользователя","Environment":"Переменные окружения","SelectEnvironment":"Пожалуйста, выберите среду","TypeUsername":"Введите ваше имя","AdminControls":"Элементы управления администратора","Settings":"Настройки","NoEditableVars":"У этого сервера нет переменных, которые вы можете редактировать","ConfirmDelete":"Вы действительно хотите удалить этот сервер? Действие не может быть отменено.","Delete":"Удалить сервер","Deleted":"Сервер удален","NoReadme":"У этого шаблона нет описания","SftpConnection":"Подключится к SFTP","EditDefinition":"Edit Server Definition","Reload":"Перезагрузить данные сервера с диска","Reloaded":"Данные сервера перезагружены","Autostart":"Запускать сервер при запуске хоста","Autorestart":"Перезагружать сервер когда он останавливается","Autorecover":"Перезагружать сервер при сбое"}')
    },
    "506c": function(e) {
        e.exports = JSON.parse('{"Templates":"範本","NoTemplates":"這裡沒有可用範本","Deleted":"範本已刪除","New":"創建新範本","Edit":"編輯範本","Editor":"編輯器","Json":"JSON","Display":"顯示名稱","Type":"類型","Variables":"變數","Install":"安裝","AddInstallStep":"添加安裝步驟","DeleteInstallStep":"刪除安裝步驟","Description":"描述","DataType":"數據類型","DefaultValue":"預設值","Required":"必填項目","UserEditable":"用戶可編輯","Value":"值","AddOption":"添加選項","AddCommand":"添加指令","Filename":"檔案名稱","Content":"內容","Source":"來源","Target":"目標","Version":"版本","ReleaseType":"發佈類型","AddFile":"添加檔案","AddVariable":"添加變數","Environment":"Environment","Environments":"環境","AddEnvironment":"添加環境","DefaultEnvironment":"預設環境","AddEnvVar":"添加環境變數","EnvVars":"環境變數","DockerImage":"Docker 映像","SaveSuccess":"已儲存範本","VarNameNoSpaces":"環境變數不能為空或包含空格","SupportedEnvironments":"支持的環境","RunConfig":"執行配置","PreHook":"運行前的Hook","PostHook":"運行後的Hook","AddPreStep":"添加運行前的步驟","AddPostStep":"添加運行後的步驟","DeletePreStep":"刪除運行前的步驟","DeletePostStep":"刪除運行後的步驟","Shutdown":"關機","Command":"指令","Arguments":"參數","AddArgument":"添加參數","import":{"OverrideWarning":"警告：匯入的範本將覆蓋現有具相同ID的範本","Import":"匯入範本","Tooltip":"從官方代碼資料庫匯入範本","Select":"選擇要導入的範本","Started":"匯入範本中，請稍候","Successful":"已成功匯入範本{template}","NoTemplatesTitle":"你想匯入範本嗎?","NoTemplatesContent":"您目前沒有任何範本，而創建伺服器時，範本是必需的。<br/>是否要立即從官方PufferPanel的範本資料庫中匯入一些範本？"},"stop":{"Command":"指令","Signal":"信號"},"processors":{"download":{"ProcessorName":"下載","files":"檔案"},"command":{"ProcessorName":"執行指令","commands":"指令"},"alterfile":{"ProcessorName":"變更檔案","regex":"以正則表達式搜索","search":"搜尋文字","replace":"用於取替"},"writefile":{"ProcessorName":"寫入檔案","text":"內容"},"move":{"ProcessorName":"移動檔案","source":"來源","target":"目標"},"mkdir":{"ProcessorName":"創建目錄"},"mojangdl":{"ProcessorName":"下載Minecraft"},"forgedl":{"ProcessorName":"下載Minecraft Forge"},"spongeforgedl":{"ProcessorName":"下載Minecraft SpongeForge","releaseType":"發佈類型"},"fabricdl":{"ProcessorName":"下載Minecraft Fabric"}}}')
    },
    "510e": function(e) {
        e.exports = JSON.parse('{"Users":"Uživatelé","Add":"Přidat uživatele","AccountSettings":"Nastavení účtu","OldPassword":"Staré heslo","NewPassword":"Nové heslo","ConfirmPassword":"Potvrďte heslo","ChangePassword":"Změnit heslo","ChangeInfo":"Změnit podrobnosti účtu","InfoChanged":"Vaše údaje byly změněny","PasswordChanged":"Vaše heslo bylo změněno","AccountPassword":"Heslo k účtu","Account":"Účet","Login":"Přihlásit","LoginLink":"Nebo se přihlaste zde","Logout":"Odhlásit","Register":"Registrace","RegisterLink":"Nebo se zaregistrujte zde","RegisterSuccess":"Úspěšně jste se zaregistrovali","NoEmailGiven":"Musíte zadat e-mail uživatele, který chcete přidat","Username":"Uživatelské jméno","Password":"Heslo","Email":"E-mail","Edit":"Upravit uživatele","Update":"Upravit uživatele","Delete":"Smazat uživatele","CreateSuccess":"Vytvořit uživatele","CreateError":"Vytvoření uživatele se nezdařilo","UpdateSuccess":"Aktualizovaný uživatel","UpdateError":"Chyba při aktualizaci uživatele","PermsUpdateError":"Aktualizace uživatelských oprávnění se nezdařila"}')
    },
    5299: function(e) {
        e.exports = JSON.parse('{"FileManager":"مدير الملفات","NewFolder":"مجلد جديد","NewFile":"ملف جديد","LastModified":"آخر تعديل","ConfirmDelete":"هل أنت متأكد من أنك تريد حذف هذا الملف؟","Upload":"رفع","Download":"تحميل","Size":"الحجم","NoFiles":"لا توجد ملفات هنا حتى الآن، اذهب وأنشئ بعض على سبيل المثال بالنقر على زر التثبيت في الجزء العلوي من الصفحة","FileLoadFailed":"فشل تحميل الملف"}')
    },
    "531d": function(e) {
        e.exports = JSON.parse('{"Users":"사용자","Add":"사용자 추가","AccountSettings":"계정 설정","OldPassword":"기존 비밀번호","NewPassword":"새 비밀번호","ConfirmPassword":"비밀번호 확인","ChangePassword":"비밀번호 변경","ChangeInfo":"계정 정보 변경","InfoChanged":"정보가 변경되었습니다.","PasswordChanged":"비밀번호가 변경되었습니다.","AccountPassword":"비밀번호","Account":"계정","Login":"로그인","LoginLink":"또는 여기에서 로그인하세요","Logout":"로그아웃","Register":"가입","RegisterLink":"또는 여기에서 가입하세요","RegisterSuccess":"정상적으로 가입되었습니다.","NoEmailGiven":"추가하려는 유저의 이메일을 입력해야 합니다.","Username":"아이디","Password":"비밀번호","Email":"이메일","Edit":"계정 편집","Update":"계정 업데이트","Delete":"계정 삭제","CreateSuccess":"계정이 생성되었습니다","CreateError":"계정 생성에 실패했습니다","UpdateSuccess":"계정이 업데이트 되었습니다","UpdateError":"게정 업데이트에 실패했습니다","PermsUpdateError":"계정 권한 수정에 실패했습니다"}')
    },
    5363: function(e) {
        e.exports = JSON.parse('{"Id":"ID","Name":"Nama","Address":"Alamat","Online":"Hidup","Offline":"Mati","Loading":"Memuat...","General":"Umum","Language":"Bahasa","SelectLanguage":"Pilih bahasa","Settings":"Pengaturan","Update":"Memperbarui","Edit":"Ubah","Delete":"Hapus","Create":"Buat","Save":"Simpan","Saved":"Disimpan","SaveFailed":"Gagal menyimpan","Cancel":"Batalkan","Confirm":"Konfirmasi","Actions":"Aksi","Host":"Host","Port":"Port","Template":"Template","Options":"Opsi","Collapse":"Ciutkan","Copied":"Disalin ke clipboard","Unknown":"Tak diketahui","Search":"Cari","Back":"Kembali","Next":"Selanjutnya","LanguageName":"Bahasa Indonesia","Details":"Detail","ErrorDetails":"Detail Masalah","HelpTranslate":"Bantu kami terjemahkan Pufferpanel","DarkMode":"Mode Gelap","ThemeOptions":"Pilihan Tema","Protocol":"Protocol","Add":"Add"}')
    },
    "53d7": function(e) {
        e.exports = JSON.parse('{"Id":"ID","Name":"Nome","Address":"Endereço","Online":"Online","Offline":"Offline","Loading":"Carregando...","General":"Geral","Language":"Linguagem","SelectLanguage":"Selecionar linguagem","Settings":"Configurações","Update":"Atualizar","Edit":"Editar","Delete":"Remover","Create":"Criar","Save":"Salvar","Saved":"Salvo","SaveFailed":"Falha ao salvar","Cancel":"Cancelar","Confirm":"Confirmar","Actions":"Ações","Host":"Host","Port":"Porta","Template":"Modelo","Options":"Opções","Collapse":"Ocultar","Copied":"Copiado para a área de transferência","Unknown":"Desconhecido","Search":"Buscar","Back":"Voltar","Next":"Próximo","LanguageName":"Português (Brasil)","Details":"Detalhes","ErrorDetails":"Detalhes do erro","HelpTranslate":"Nós ajude a traduzir o PufferPanel","DarkMode":"Modo escuro","ThemeOptions":"Opções do Tema","Protocol":"Protocol","Add":"Add"}')
    },
    "54f4": function(e, t, r) {
        "use strict";
        r.r(t);
        var a = function() {
                var e = this,
                    t = e.$createElement,
                    r = e._self._c || t;
                return r("v-card", [r("v-card-title", {
                    domProps: {
                        textContent: e._s(e.$t("servers.Memory"))
                    }
                }), r("v-card-text", [r("apexchart", {
                    attrs: {
                        series: e.series,
                        options: e.options,
                        height: "300"
                    }
                })], 1)], 1)
            },
            o = [],
            n = (r("ddb0"), r("96ea")),
            s = r("1321"),
            i = r.n(s),
            l = {
                components: {
                    apexchart: i.a
                },
                props: {
                    server: {
                        type: Object,
                        default: () => {}
                    }
                },
                data() {
                    return {
                        intl: new Intl.NumberFormat("en-US", {
                            maximumFractionDigits: 2
                        }),
                        maxPoints: 20,
                        options: {
                            chart: {
                                id: "memory",
                                height: 300,
                                type: "line",
                                animations: {
                                    enabled: !1
                                },
                                toolbar: {
                                    show: !1
                                },
                                foreColor: Object(n["a"])() ? "#FFF" : "#000000DE"
                            },
                            colors: [Object(n["a"])() ? this.$vuetify.theme.themes.dark.accent : this.$vuetify.theme.themes.light.accent],
                            tooltip: {
                                theme: [Object(n["a"])() ? this.$vuetify.theme.themes.dark.accent : this.$vuetify.theme.themes.light.accent]
                            },
                            dataLabels: {
                                enabled: !1
                            },
                            stroke: {
                                curve: "smooth"
                            },
                            markers: {
                                size: 0
                            },
                            xaxis: {
                                labels: {
                                    show: !0,
                                    rotate: 0,
                                    formatter: e => new Date(e).toLocaleTimeString()
                                },
                                tooltip: {
                                    enabled: !1
                                },
                                type: "datetime"
                            },
                            yaxis: {
                                labels: {
                                    show: !0,
                                    formatter: e => e < 1e3 ? this.intl.format(e) + " B" : e < 1e6 ? this.intl.format(e / 1e3) + " KB" : e < 1e9 ? this.intl.format(e / 1e6) + " MB" : e < 1e12 ? this.intl.format(e / 1e9) + " GB" : e < 1e15 ? this.intl.format(e / 1e12) + " TB" : void 0
                                },
                                min: 0
                            },
                            legend: {
                                show: !0
                            }
                        },
                        series: []
                    }
                },
                mounted() {
                    this.$api.addServerListener(this.server.id, "stat", e => {
                        this.updateStats(e)
                    })
                },
                methods: {
                    updateStats(e) {
                        this.options = {
                            ...this.options,
                            chart: {
                                ...this.options.chart,
                                foreColor: Object(n["a"])() ? "#FFF" : "#000000DE"
                            }
                        };
                        const t = [...(this.series[0] || {}).data || [], [(new Date).getTime(), e.memory]];
                        this.series = [{
                            name: this.$t("servers.Memory"),
                            data: t.length > this.maxPoints ? t.slice(t.length - this.maxPoints) : t
                        }]
                    }
                }
            },
            d = l,
            c = r("2877"),
            u = r("6544"),
            m = r.n(u),
            p = r("b0af"),
            v = r("99d9"),
            f = Object(c["a"])(d, a, o, !1, null, null, null);
        t["default"] = f.exports;
        m()(f, {
            VCard: p["a"],
            VCardText: v["c"],
            VCardTitle: v["d"]
        })
    },
    5510: function(e) {
        e.exports = JSON.parse('{"Id":"Identyfikator","Name":"Nazwa","Address":"Adres","Online":"Online","Offline":"Offline","Loading":"Ładowanie...","General":"Ogólne","Language":"Język","SelectLanguage":"Wybierz język","Settings":"Ustawienia","Update":"Odśwież","Edit":"Edytuj","Delete":"Usuń","Create":"Stwórz","Save":"Zapisz","Saved":"Zapisano","SaveFailed":"Nie udało się zapisać","Cancel":"Anuluj","Confirm":"Potwierdź","Actions":"Akcje","Host":"Host","Port":"Port","Template":"Szablon","Options":"Opcje","Collapse":"Zwiń","Copied":"Skopiowane do schowka","Unknown":"Nieznany","Search":"Szukaj","Back":"Powrót","Next":"Dalej","LanguageName":"Polski","Details":"Szczegóły","ErrorDetails":"Szczegóły błędu","HelpTranslate":"Pomóż nam przetłumaczyć PufferPanel","DarkMode":"Ciemny motyw","ThemeOptions":"Opcje motywu","Protocol":"Protokół","Add":"Dodaj"}')
    },
    5529: function(e) {
        e.exports = JSON.parse('{"FileManager":"文件管理器","NewFolder":"新文件夹","NewFile":"新文件","LastModified":"最后日期","ConfirmDelete":"你确定要删除吗?","Upload":"上传","Download":"下载","Size":"大小","NoFiles":"There are no files here yet, go and create some for example by clicking the install button at the top of the page","FileLoadFailed":"加载失败"}')
    },
    5636: function(e) {
        e.exports = JSON.parse('{"Server":"Serwer","NoServers":"Brak serwerów, do których masz dostęp","Servers":"Serwery","Add":"Dodaj serwer","Console":"Konsola","Controls":"Ustawienia","SFTPInfo":"Informacje SFTP","Restart":"Uruchom ponownie","Start":"Uruchom","Stop":"Zatrzymaj","Kill":"Zabij","Install":"Zainstaluj","Send":"Wyślij","Pause":"Wstrzymaj","CPU":"Procesor","Memory":"Pamięć RAM","Name":"Nazwa Serwera","SelectNode":"Proszę wybrać węzeł","SelectTemplate":"Proszę wybrać szablon","SelectThisTemplate":"Użyj tego szablonu","SelectUser":"Wybierz użytkownika","Environment":"Środowisko","SelectEnvironment":"Proszę wybrać środowisko","TypeUsername":"Wprowadź nazwę użytkownika","AdminControls":"Ustawienia administratora","Settings":"Ustawienia","NoEditableVars":"Ten serwer nie posiada zmiennych, które możesz edytować","ConfirmDelete":"Czy chcesz usunąć ten serwer? (tego nie można cofnąć)","Delete":"Usuń serwer","Deleted":"Serwer usunięty","NoReadme":"Brak dostępnego pliku README dla tego szablonu","SftpConnection":"Połącz z SFTP","EditDefinition":"Edytuj definicję serwera","Reload":"Odśwież dane serwera z dysku","Reloaded":"Przeładowano dane serwera","Autostart":"Uruchom serwer po uruchomieniu węzła","Autorestart":"Uruchom ponownie serwer po normalnym zatrzymaniu","Autorecover":"Uruchom ponownie serwer po awarii"}')
    },
    "56d7": function(e, t, r) {
        "use strict";
        r.r(t);
        r("a79d");
        var a = r("2b0e"),
            o = (r("5319"), r("ddb0"), r("8103")),
            n = r.n(o),
            s = r("bba4"),
            i = r.n(s),
            l = r("df7c"),
            d = r.n(l);
        const c = r("ffe0"),
            u = [];
        c.keys().forEach(e => {
            const t = c(e),
                r = n()(i()(e.replace(/^\.\//, "").replace(/\.\w+$/, "")));
            if (r.startsWith("ServerType")) {
                const t = d.a.basename(e, ".vue");
                u.push(t)
            }
            a["a"].component(r, t.default || t)
        }),
        a["a"].component("server-render", {
            render(e, t) {
                const r = this.$attrs.server;
                if (!r)
                    return;
                let a = "server-type-generic";
                for (const o in u)
                    if (u[o] === r.type) {
                        a = "server-type-" + u[o];
                        break
                    }
                return e(a, {
                    props: {
                        server: r
                    }
                }, [])
            }
        });
        var m = r("2db4"),
            p = r("f309"),
            v = (r("bf40"), r("87f6")),
            f = r.n(v);
        const S = {
                components: {
                    VSnackbar: m["a"]
                },
                theme: {
                    options: {
                        inputStyle: "outlined",
                        customProperties: !0
                    },
                    themes: {
                        light: {
                            primary: "#07a7e3",
                            anchor: "#07a7e3",
                            accent: "#65a5f8"
                        },
                        dark: {
                            primary: "#3b8db8",
                            anchor: "#07a7e3",
                            accent: "#65a5f8"
                        }
                    }
                },
                icons: {
                    iconfont: "mdi"
                }
            },
            g = new p["a"](S);
        a["a"].use(p["a"], S),
        a["a"].use(f.a, {
            $vuetify: g.framework,
            x: "center",
            y: "top",
            timeout: 2500,
            queueable: !0
        });
        var h = g,
            E = r("ade3"),
            P = r("faa1"),
            N = r.n(P),
            b = r("a78e"),
            w = r.n(b),
            k = r("bc3a"),
            C = r.n(k),
            y = r("2fa4"),
            T = r("8336");
        r("5cc6");
        class D extends N.a {
            constructor(e, t)
            {
                super(),
                Object(E["a"])(this, "_expectClose", !1),
                Object(E["a"])(this, "_connectionAttemptsFailed", 0),
                Object(E["a"])(this, "_connectionAttemptsMax", 5),
                Object(E["a"])(this, "_connectionFailReset", null),
                Object(E["a"])(this, "_socket", null),
                Object(E["a"])(this, "_api", null),
                Object(E["a"])(this, "_id", null),
                Object(E["a"])(this, "_tasks", []),
                Object(E["a"])(this, "_preOpenMessages", []),
                Object(E["a"])(this, "readyState", WebSocket.CONNECTING),
                this._id = t,
                this._api = e,
                this._openSocket(),
                this.emit("open")
            }
            _openSocket()
            {
                this._socket = new WebSocket(this._api.getServerSocketUrl(this._id)),
                this.readyState = this._socket.readyState,
                this._socket.addEventListener("open", e => this._onOpen(e)),
                this._socket.addEventListener("message", e => this._onMessage(e)),
                this._socket.addEventListener("close", e => this._onClose(e))
            }
            _onOpen(e)
            {
                this.readyState = this._socket.readyState,
                this.emit("socket-open", e),
                this._preOpenMessages.forEach(e => this.send(e))
            }
            _onMessage(e)
            {
                this.readyState = this._socket.readyState;
                const t = JSON.parse(e.data);
                this.emit("message", t),
                this.emit(t.type, t.data)
            }
            _onClose(e)
            {
                this.readyState = this._socket.readyState,
                this.emit("socket-close", e),
                clearTimeout(this._connectionFailReset),
                this._expectClose ? this._cleanup() : this._connectionAttemptsFailed >= this._connectionAttemptsMax ? this._onError({
                    msg: "Socket closed unexpectedly",
                    event: e
                }) : (this._connectionAttemptsFailed += 1, setTimeout(() => {
                    this._connectionAttemptsFailed = 0
                }, 3e4), setTimeout(() => this._openSocket(), 500 + 500 * this._connectionAttemptsFailed))
            }
            _onError(e)
            {
                console.error("SOCKET ERROR", e),
                this.readyState = this._socket.readyState,
                this.emit("error", e)
            }
            _cleanup()
            {
                this._tasks.forEach(e => clearInterval(e))
            }
            startTask(e, t)
            {
                return e(), this._tasks.push(setInterval(e, t))
            }
            stopServerTaks(e)
            {
                for (const t in this._tasks)
                    t === e && clearInterval(e)
            }
            needsPolling()
            {
                const e = this._socket.readyState;
                return e === WebSocket.CLOSING || e === WebSocket.CLOSED
            }
            async send(e)
            {
                let t;
                if (t = "string" !== typeof e ? JSON.stringify(e) : e, this._socket.readyState === WebSocket.CONNECTING)
                    this._preOpenMessages.push(e);
                else if (this._socket.readyState === WebSocket.OPEN)
                    this._socket.send(t);
                else
                    switch (e.type) {
                    case "start":
                    case "stop":
                    case "kill":
                    case "install":
                        this._api.serverAction(this._id, e.type);
                        break;
                    case "stat":
                        {
                            const e = await this._api.getServerStatus(this._id);
                            let t = {
                                cpu: 0,
                                memory: 0
                            };
                            e && (t = await this._api.getServerStats(this._id)),
                            this._onMessage({
                                data: JSON.stringify({
                                    data: {
                                        running: e
                                    },
                                    type: "status"
                                })
                            }),
                            this._onMessage({
                                data: JSON.stringify({
                                    data: t,
                                    type: "stat"
                                })
                            });
                            break
                        }case "status":
                        {
                            const e = await this._api.getServerStatus(this._id);
                            this._onMessage({
                                data: JSON.stringify({
                                    data: {
                                        running: e
                                    },
                                    type: "status"
                                })
                            });
                            break
                        }case "replay":
                        {
                            const t = await this._api.getServerConsole(this._id, e.since);
                            this._onMessage({
                                data: JSON.stringify({
                                    data: t,
                                    type: "console"
                                })
                            });
                            break
                        }case "file":
                        switch (e.action) {
                        case "get":
                            {
                                const t = await this._api.downloadServerFile(this._id, e.path);
                                this._onMessage({
                                    data: JSON.stringify({
                                        data: {
                                            files: t,
                                            path: e.path
                                        },
                                        type: "file"
                                    })
                                });
                                break
                            }case "create":
                            await this._api.createServerFolder(this._id, e.path),
                            this.send({
                                type: "file",
                                action: "get",
                                path: e.path
                            });
                            break;
                        case "delete":
                            {
                                await this._api.deleteServerFile(this._id, e.path);
                                let t = e.path.split("/");
                                t.pop(),
                                t = t.join("/") || "/",
                                this.send({
                                    type: "file",
                                    action: "get",
                                    path: t
                                });
                                break
                            }
                        }
                        break;
                    case "console":
                        this._api.serverCommand(this._id, e.command);
                        break;
                    default:
                        console.error("SOCKET SEND", "got unknown message", e);
                        break
                    }
            }
            close()
            {
                this._expectClose = !0,
                this._cleanup(),
                this.readyState === WebSocket.CONNECTING || this.readyState === WebSocket.OPEN ? (this._socket.addEventListener("close", () => this.emit("close")), this._socket.close()) : this.emit("close")
            }
        }
        const A = {
                startServerConnection(e) {
                    if (!this._sockets[e])
                        return this._sockets[e] = new D(this, e), Promise.resolve()
                },
                serverConnectionNeedsPolling(e) {
                    if (!this._sockets[e])
                        throw new Error("connection not opened");
                    return this._sockets[e].needsPolling()
                },
                addServerListener(e, t, r) {
                    if (!this._sockets[e])
                        throw new Error("connection not opened");
                    this._sockets[e].on(t, r)
                },
                removeServerListener(e, t, r) {
                    this._sockets[e] && this._sockets[e].off(t, r)
                },
                startServerTask(e, t, r) {
                    if (!this._sockets[e])
                        throw new Error("connection not opened");
                    this._sockets[e].startTask(t, r)
                },
                stopServerTask(e, t) {
                    this._sockets[e] && this._sockets[e].stopTask(t)
                },
                sendToServer(e, t) {
                    if (!this._sockets[e])
                        throw new Error("connection not opened");
                    this._sockets[e].send(t)
                },
                closeServerConnection(e) {
                    this._sockets[e] && (this._sockets[e].on("close", () => {
                        delete this._sockets[e]
                    }), this._sockets[e].close())
                },
                requestServerStats(e) {
                    this.sendToServer(e, {
                        type: "stat"
                    })
                },
                requestServerStatus(e) {
                    this.sendToServer(e, {
                        type: "status"
                    })
                },
                requestServerConsoleReplay(e, t=0) {
                    this.sendToServer(e, {
                        type: "replay",
                        since: t
                    })
                },
                sendServerCommand(e, t) {
                    this.sendToServer(e, {
                        type: "console",
                        command: t
                    })
                },
                requestServerFile(e, t) {
                    this.sendToServer(e, {
                        type: "file",
                        action: "get",
                        path: t
                    })
                },
                requestServerFolderCreation(e, t) {
                    this.sendToServer(e, {
                        type: "file",
                        action: "create",
                        path: t
                    })
                },
                requestServerFileDeletion(e, t) {
                    this.sendToServer(e, {
                        type: "file",
                        action: "delete",
                        path: t
                    })
                },
                async sendServerAction(e, t) {
                    "restart" === t && (await this.serverAction(e, "stop", !0), t = "start"),
                    this.sendToServer(e, {
                        type: t
                    })
                },
                getServers(e, t=10) {
                    return this.withErrorHandling(async r => {
                        const a = (await r.$http.get("/api/servers", {
                                params: {
                                    page: e,
                                    limit: t
                                }
                            })).data,
                            o = a.servers.map(e => {
                                let t = "";
                                return t = e.ip && "" !== e.ip && "0.0.0.0" !== e.ip ? e.ip : e.node.publicHost, e.port && (t += ":" + e.port), {
                                    id: e.id,
                                    name: e.name,
                                    node: e.node.name,
                                    address: t
                                }
                            });
                        return {
                            servers: o,
                            pages: Math.ceil(a.paging.total / t)
                        }
                    })
                },
                createServer(e) {
                    return this.withErrorHandling(async t => {
                        const r = (await t.$http.post("/api/servers", e)).data;
                        return r.id
                    })
                },
                getServer(e) {
                    return this.withErrorHandling(async t => {
                        const r = (await t.$http.get(`/api/servers/${e}?perms`)).data;
                        return {
                            ...r.server,
                            permissions: r.permissions
                        }
                    })
                },
                getServerDefinition(e) {
                    return this.withErrorHandling(async t => (await t.$http.get("/proxy/daemon/server/" + e)).data)
                },
                getServerData(e) {
                    return this.withErrorHandling(async t => (await t.$http.get(`/proxy/daemon/server/${e}/data`)).data.data)
                },
                getServerSocketUrl(e) {
                    const t = "http:" === window.location.protocol ? "ws" : "wss";
                    return `${t}://${window.location.host}/proxy/daemon/socket/${e}`
                },
                getServerStatus(e) {
                    return this.withErrorHandling(async t => (await t.$http.get(`/proxy/daemon/server/${e}/status`)).data.running)
                },
                getServerStats(e) {
                    return this.withErrorHandling(async t => (await t.$http.get(`/proxy/daemon/server/${e}/stats`)).data)
                },
                getServerConsole(e, t=0) {
                    return this.withErrorHandling(async r => (await r.$http.get(`/proxy/daemon/server/${e}/console?time=${t}`)).data)
                },
                getServerUsers(e) {
                    return this.withErrorHandling(async t => (await t.$http.get(`/api/servers/${e}/user`)).data)
                },
                getServerFileUrl(e, t) {
                    return 0 === t.indexOf("/") && (t = t.substring(1)), t = encodeURIComponent(t), t = t.replace(/%2F/g, "/"), `/proxy/daemon/server/${e}/file/${t}`
                },
                downloadServerFile(e, t, r=!1) {
                    return this.withErrorHandling(async a => {
                        const o = (await a.$http.get(this.getServerFileUrl(e, t), r ? {
                            responseType: "arraybuffer"
                        } : void 0)).data;
                        return r ? new TextDecoder("utf-8").decode(new Uint8Array(o)) : o
                    })
                },
                uploadServerFile(e, t, r, a) {
                    return this.withErrorHandling(async o => {
                        let n = null;
                        n = r instanceof Blob || r instanceof File ? r : "string" === typeof r ? new Blob([r]) : new Blob([JSON.stringify(r)]);
                        const s = new FormData;
                        return s.append("file", n), await o.$http.put(this.getServerFileUrl(e, t), s, {
                            headers: {
                                "Content-Type": "multipart/form-data"
                            },
                            onUploadProgress: a
                        }), !0
                    })
                },
                createServerFolder(e, t) {
                    return this.withErrorHandling(async r => (await r.$http.put(this.getServerFileUrl(e, t), void 0, {
                        params: {
                            folder: !0
                        }
                    }), !0))
                },
                deleteServerFile(e, t) {
                    return this.withErrorHandling(async r => (await r.$http.delete(this.getServerFileUrl(e, t)), !0))
                },
                serverAction(e, t, r=!1) {
                    return this.withErrorHandling(async a => {
                        await this._ctx.$http.post(`/proxy/daemon/server/${e}/${t}?wait=${r}`)
                    })
                },
                serverCommand(e, t) {
                    return this.withErrorHandling(async r => {
                        await this._ctx.$http.post(`/proxy/daemon/server/${e}/console`, t)
                    })
                },
                updateServerDefinition(e, t) {
                    return this.withErrorHandling(async r => (await r.$http.post("/proxy/daemon/server/" + e, t), !0))
                },
                updateServerData(e, t) {
                    return this.withErrorHandling(async r => (await r.$http.post(`/proxy/daemon/server/${e}/data`, {
                        data: t
                    }), !0))
                },
                updateServerUser(e, t) {
                    return this.withErrorHandling(async r => (await r.$http.put(`/api/servers/${e}/user/${t.email}`, t), !0))
                },
                reloadServer(e) {
                    this.withErrorHandling(async t => (await t.$http.post(`/proxy/daemon/server/${e}/reload`), !0))
                },
                deleteServer(e) {
                    return this.withErrorHandling(async t => (await t.$http.delete("/api/servers/" + e), !0))
                },
                deleteServerUser(e, t) {
                    return this.withErrorHandling(async r => (await r.$http.delete(`/api/servers/${e}/user/${t}`), !0))
                }
            },
            F = {
                getNodes() {
                    return this.withErrorHandling(async e => (await e.$http.get("/api/nodes")).data)
                },
                createNode(e) {
                    return this.withErrorHandling(async t => (await t.$http.post("/api/nodes", I(e)), !0))
                },
                getNode(e) {
                    return this.withErrorHandling(async t => (await t.$http.get("/api/nodes/" + e)).data)
                },
                getNodeDeployment(e) {
                    return this.withErrorHandling(async t => (await t.$http.get(`/api/nodes/${e}/deployment`)).data)
                },
                updateNode(e, t) {
                    return this.withErrorHandling(async r => (await r.$http.put("/api/nodes/" + e, I(t)), !0))
                },
                deleteNode(e) {
                    return this.withErrorHandling(async t => (await t.$http.delete("/api/nodes/" + e), !0))
                }
            };
        function I(e) {
            return {
                ...e,
                publicPort: Number(e.publicPort),
                privatePort: Number(e.privatePort),
                sftpPort: Number(e.sftpPort)
            }
        }
        const U = {
                getUsers(e, t=10) {
                    return this.withErrorHandling(async r => {
                        const a = (await r.$http.get("/api/users", {
                            params: {
                                page: e,
                                limit: t
                            }
                        })).data;
                        return {
                            users: a.users,
                            pages: Math.ceil(a.paging.total / t)
                        }
                    })
                },
                searchUsers(e, t) {
                    return this.withErrorHandling(async r => (await r.$http.get("/api/users", {
                        params: {
                            username: `*${e}*`
                        },
                        cancelToken: t
                    })).data.users)
                },
                createUser(e) {
                    return this.withErrorHandling(async t => {
                        const r = (await t.$http.post("/api/users", e)).data.id;
                        return await this.updateUserPermissions(r, e), r
                    })
                },
                getUser(e) {
                    return this.withErrorHandling(async t => {
                        const r = (await t.$http.get("/api/users/" + e)).data,
                            a = await this.getUserPermissions(e);
                        return {
                            ...r,
                            ...a
                        }
                    })
                },
                getUserPermissions(e) {
                    return this.withErrorHandling(async t => (await t.$http.get(`/api/users/${e}/perms`)).data)
                },
                updateUser(e, t) {
                    return this.withErrorHandling(async r => (await r.$http.post("/api/users/" + e, t), await this.updateUserPermissions(e, t), !0))
                },
                updateUserPermissions(e, t) {
                    return this.withErrorHandling(async r => (await r.$http.put(`/api/users/${e}/perms`, t), !0))
                },
                deleteUser(e) {
                    return this.withErrorHandling(async t => (await t.$http.delete("/api/users/" + e), !0))
                }
            },
            O = {
                getTemplates() {
                    return this.withErrorHandling(async e => (await e.$http.get("/api/templates")).data)
                },
                getImportableTemplates() {
                    return this.withErrorHandling(async e => (await e.$http.post("/api/templates/import")).data)
                },
                getTemplate(e) {
                    return this.withErrorHandling(async t => R((await t.$http.get("/api/templates/" + e)).data))
                },
                saveTemplate(e, t) {
                    return this.withErrorHandling(async r => (await r.$http.put("/api/templates/" + e, x(t)), !0), {
                        400: "errors.ErrInvalidJson"
                    })
                },
                importTemplate(e) {
                    return this.withErrorHandling(async t => (await t.$http.post("/api/templates/import/" + e), !0))
                },
                deleteTemplate(e) {
                    return this.withErrorHandling(async t => (await t.$http.delete("/api/templates/" + e), !0))
                },
                templateFromApiJson(e, t=!1) {
                    return R("string" === typeof e ? JSON.parse(e) : e, t)
                },
                templateToApiJson(e, t=!0) {
                    return t ? JSON.stringify(x(e), void 0, 2) : x(e)
                }
            },
            R = (e, t=!1) => {
                const {name: r, display: a, type: o, readme: n} = e,
                    s = e => ("download" === e.type && "string" === typeof e.files && (e.files = [e.files]), "command" === e.type && "string" === typeof e.commands && (e.commands = [e.commands]), e);
                e.run || (e.run = {});
                const i = e.run.command || "",
                    l = e.run.autostart,
                    d = e.run.autorestart,
                    c = e.run.autorecover,
                    u = {};
                e.run.stop ? (u.type = "command", u.stop = e.run.stop) : e.run.stopCode ? (u.type = "signal", u.stop = e.run.stopCode) : (u.type = "command", u.stop = "");
                const m = e.run.environmentVars || {},
                    p = (e.run.pre || []).map(s),
                    v = (e.run.post || []).map(s),
                    f = (e.install || []).map(s);
                e.data || (e.data = {});
                const S = [];
                for (const P in e.data)
                    e.data[P].type || (e.data[P].type = "string"),
                    S.push({
                        ...e.data[P],
                        name: P
                    });
                const g = e.environment,
                    h = t ? void 0 : e.supportedEnvironments || [],
                    E = t ? e.id : void 0;
                return {
                    id: E,
                    name: r,
                    display: a,
                    type: o,
                    command: i,
                    stop: u,
                    pre: p,
                    post: v,
                    envVars: m,
                    vars: S,
                    install: f,
                    defaultEnv: g,
                    supportedEnvs: h,
                    readme: n,
                    autostart: l,
                    autorestart: d,
                    autorecover: c
                }
            },
            x = e => {
                const {id: t, name: r, display: a, type: o, command: n, stop: s, pre: i, post: l, envVars: d, vars: c, install: u, defaultEnv: m, supportedEnvs: p, autostart: v, autorestart: f, autorecover: S} = e,
                    g = {};
                "signal" === s.type ? g.stopCode = Number(s.stop) : g.stop = s.stop;
                const h = {};
                return c.forEach(e => {
                    h[e.name] = e,
                    delete h[e.name].name
                }), {
                    id: t,
                    name: r,
                    display: a,
                    type: o,
                    install: u,
                    run: {
                        ...g,
                        command: n,
                        pre: i,
                        post: l,
                        environmentVars: d,
                        autostart: v,
                        autorestart: f,
                        autorecover: S
                    },
                    data: h,
                    environment: m,
                    supportedEnvironments: p
                }
            };
        var V = e => {
            const t = e => new TextDecoder("utf-8").decode(new Uint8Array(e)),
                r = 512,
                a = 100,
                o = 124,
                n = 11,
                s = 8,
                i = [],
                l = new Uint8Array(e);
            let d = 0,
                c = !0;
            while (c) {
                const e = l.slice(d, d + r),
                    u = [];
                for (let t = 0; t < a; t++) {
                    if (0 === e[t])
                        break;
                    u.push(e[t])
                }
                const m = t(u),
                    p = parseInt(t(e.slice(o, o + n)), s) || 0,
                    v = (Math.floor(p / r) + (0 === p ? 0 : 1)) * r,
                    f = l.slice(d + r, d + r + p);
                i.push({
                    name: m,
                    content: t(f),
                    blob: new Blob([f])
                });
                let S = d + r + v;
                while (S < l.length) {
                    if (0 !== l[S]) {
                        d = S;
                        break
                    }
                    S += r
                }
                S >= l.length && (c = !1)
            }
            return i.filter(e => "/" !== e.name.substr(-1))
        };
        class z extends N.a {
            constructor(...e)
            {
                super(...e),
                Object(E["a"])(this, "_ctx", null),
                Object(E["a"])(this, "_sockets", {})
            }
            isLoggedIn()
            {
                return "" !== this.getToken()
            }
            getToken()
            {
                return w.a.get("puffer_auth") || ""
            }
            updateCookie(e)
            {
                w.a.set("puffer_auth", e, {
                    sameSite: "strict"
                })
            }
            saveLoginData(e, t=[], r=!1)
            {
                this.updateCookie(e),
                localStorage.setItem("scopes", JSON.stringify(t)),
                r || this.emit("login")
            }
            logout(e)
            {
                w.a.remove("puffer_auth"),
                this.emit("logout", e)
            }
            register(e, t, r)
            {
                return this.withErrorHandling(async a => {
                    const o = (await a.$http.post("/auth/register", {
                            username: e,
                            email: t,
                            password: r
                        })).data,
                        n = o.token && "" !== o.token;
                    return n && this.saveLoginData(o.token, o.scopes || []), n
                })
            }
            login(e, t, r={})
            {
                return this.withErrorHandling(async a => {
                    const o = (await a.$http.post("/auth/login", {
                        email: e,
                        password: t
                    })).data;
                    return this.saveLoginData(o.session, o.scopes || [], r.silent), !0
                }, {
                    noToast: r.silent || r.noToast
                })
            }
            reauth()
            {
                return this.withErrorHandling(async e => {
                    const t = (await e.$http.post("/auth/reauth")).data;
                    return this.updateCookie(t.session), !0
                }, {
                    noToast: !0
                })
            }
            getConfig()
            {
                return this.withErrorHandling(async e => (await e.$http.get("/api/config")).data)
            }
            getTheme(e)
            {
                return this.withErrorHandling(async t => {
                    const r = (await t.$http.get(`/theme/${e}.tar`, {
                        responseType: "arraybuffer"
                    })).data;
                    return V(r)
                })
            }
            getSelf()
            {
                return this.withErrorHandling(async e => (await e.$http.get("/api/self")).data)
            }
            updateSelf(e, t, r, a={})
            {
                return this.withErrorHandling(async a => (await a.$http.put("/api/self", {
                    username: e,
                    email: t,
                    password: r
                }), !0), a)
            }
            updatePassword(e, t, r={})
            {
                return this.withErrorHandling(async r => (await r.$http.put("/api/self", {
                    password: e,
                    newPassword: t
                }), !0), r)
            }
            async withErrorHandling(e, t)
            {
                try {
                    return await e(this._ctx)
                } catch (r) {
                    return this.handleError(r, t)
                }
            }
            handleError(e, t)
            {
                if (t || (t = {}), console.error("ERROR", e), t.noToast || 401 === e.response.status)
                    return !1;
                let r = "errors.ErrUnknownError";
                e && e.response && e.response.data.error && (r = e.response.data.error.code ? "errors." + e.response.data.error.code : e.response.data.error.msg),
                void 0 !== t[e.response.status] && (r = t[e.response.status]);
                const a = {
                        timeout: 6e3,
                        slot: [this._ctx.$createElement("div", {
                            attrs: {
                                class: "flex-grow-1"
                            }
                        }, [this._ctx.$createElement("span", [this._ctx.$t("errors.ErrUnknownError")]), this._ctx.$createElement(y["a"], []), this._ctx.$createElement(T["a"], {
                            props: {
                                text: !0,
                                right: !0
                            },
                            on: {
                                click: () => window.pufferpanel.showError(e)
                            }
                        }, [this._ctx.$t("common.Details")])])]
                    },
                    o = "errors.ErrUnknownError" === r;
                return this._ctx.$toast.error(o ? void 0 : this._ctx.$t(r), o ? a : void 0), !1
            }
        }
        var j = function(e) {
                Object.assign(z.prototype, A, F, U, O),
                e.prototype.$api = new z,
                e.prototype.$http = C.a.create(),
                e.prototype.$http.interceptors.request.use(t => ((t.url.startsWith("/api") || t.url.startsWith("/proxy")) && (t.headers[t.method].Authorization = "Bearer " + e.prototype.$api.getToken()), t), e => Promise.reject(e)),
                e.prototype.$http.interceptors.response.use(e => e, t => (401 === ((t || {}).response || {}).status && (localStorage.setItem("reauth_reason", "session_timed_out"), e.prototype.$api.logout("session_timed_out")), Promise.reject(t))),
                e.prototype.hasScope = e => {
                    const t = localStorage.getItem("scopes") || "[]";
                    return -1 !== JSON.parse(t).indexOf(e)
                },
                e.prototype.hasAuth = () => "" !== e.prototype.$api.getToken(),
                e.prototype.isAdmin = () => e.prototype.hasScope("servers.admin"),
                e.mixin({
                    created() {
                        this.parent || (this.$api._ctx = this)
                    }
                })
            },
            L = r("96ea");
        function _(e) {
            e.component("Ace", {
                props: {
                    editorId: {
                        type: String,
                        default: () => "editor"
                    },
                    value: {
                        type: String,
                        default: () => ""
                    },
                    lang: {
                        type: String,
                        default: () => "text"
                    },
                    theme: {
                        type: String,
                        default: () => Object(L["a"])() ? "monokai" : "github"
                    },
                    file: {
                        type: String,
                        default: () => ""
                    },
                    height: {
                        type: String,
                        default: () => "100%"
                    }
                },
                data() {
                    return {
                        editor: Object,
                        ready: !1
                    }
                },
                mounted() {
                    if (window.ace)
                        this.initialize();
                    else {
                        const e = this,
                            t = document.createElement("script");
                        t.src = "/ace/ace.js",
                        t.onload = () => {
                            const t = document.createElement("script");
                            t.src = "/ace/ext-modelist.js",
                            t.onload = () => {
                                e.initialize()
                            },
                            document.head.appendChild(t)
                        },
                        document.head.appendChild(t)
                    }
                },
                methods: {
                    initialize() {
                        const e = window.ace.require("ace/ext/modelist"),
                            t = this.lang || (this.file ? e.getModeForPath(this.file).mode : "text"),
                            r = this.theme || "monokai";
                        this.editor = window.ace.edit(this.editorId),
                        this.value && this.value.length > 0 && this.editor.getSession().setValue(this.value, 1),
                        this.editor.getSession().setMode(t),
                        this.editor.setTheme("ace/theme/" + r),
                        this.editor.on("change", () => {
                            this.$emit("input", this.editor.getValue())
                        }),
                        this.ready = !0,
                        this.$emit("editorready", !0)
                    },
                    setValue(e) {
                        this.editor.getSession().setValue(e, 1)
                    }
                },
                render(e, t) {
                    const r = this.height ? this.height : "100%";
                    return e("div", {
                        attrs: {
                            id: this.editorId
                        },
                        style: `width:100%;height:${r};`
                    }, [])
                }
            })
        }
        var M = _,
            H = function() {
                var e = this,
                    t = e.$createElement,
                    r = e._self._c || t;
                return r("v-app", [r("v-app-bar", {
                    attrs: {
                        app: "",
                        dark: "",
                        "clipped-left": "",
                        color: "primary"
                    }
                }, [e.loggedIn && e.$vuetify.breakpoint.mdAndDown ? r("v-app-bar-nav-icon", {
                    on: {
                        click: function(t) {
                            e.drawer = !e.drawer
                        }
                    }
                }) : e._e(), r("v-toolbar-title", {
                    staticClass: "headline"
                }, [e.appConfig ? r("span", {
                    domProps: {
                        textContent: e._s(e.appConfig.branding.name)
                    }
                }) : e._e()]), r("div", {
                    staticClass: "flex-grow-1"
                }), e.appConfig.themes.available.length > 1 ? r("v-menu", {
                    scopedSlots: e._u([{
                        key: "activator",
                        fn: function(t) {
                            var a = t.on,
                                o = t.attrs;
                            return [r("v-btn", e._g(e._b({
                                attrs: {
                                    icon: ""
                                }
                            }, "v-btn", o, !1), a), [r("v-icon", [e._v("mdi-format-color-fill")])], 1)]
                        }
                    }], null, !1, 23250100)
                }, [r("v-list", {
                    staticClass: "theme-options",
                    attrs: {
                        subheader: ""
                    }
                }, [r("v-subheader", {
                    domProps: {
                        textContent: e._s(e.$t("common.ThemeOptions"))
                    }
                }), r("v-list-item", {
                    on: {
                        click: e.toggleDark
                    }
                }, [r("span", {
                    domProps: {
                        textContent: e._s(e.$t("common.DarkMode"))
                    }
                }), r("span", {
                    staticClass: "flex-grow-1"
                }), r("ui-switch", {
                    staticClass: "ml-4 mb-4",
                    model: {
                        value: e.$vuetify.theme.dark,
                        callback: function(t) {
                            e.$set(e.$vuetify.theme, "dark", t)
                        },
                        expression: "$vuetify.theme.dark"
                    }
                })], 1), r("v-radio-group", {
                    attrs: {
                        "hide-details": ""
                    },
                    model: {
                        value: e.appConfig.themes.active,
                        callback: function(t) {
                            e.$set(e.appConfig.themes, "active", t)
                        },
                        expression: "appConfig.themes.active"
                    }
                }, e._l(e.appConfig.themes.available, (function(t) {
                    return r("v-list-item", {
                        key: t,
                        on: {
                            click: function(r) {
                                return e.setTheme(t)
                            }
                        }
                    }, [e._v(" " + e._s(t) + " "), r("span", {
                        staticClass: "flex-grow-1"
                    }), r("v-radio", {
                        attrs: {
                            value: t
                        }
                    })], 1)
                })), 1)], 1)], 1) : r("v-btn", {
                    attrs: {
                        icon: ""
                    },
                    on: {
                        click: e.toggleDark
                    }
                }, [r("v-icon", [e._v("mdi-lightbulb")])], 1), r("v-btn", {
                    attrs: {
                        icon: ""
                    },
                    on: {
                        click: function(t) {
                            e.showLanguageSelect = !0
                        }
                    }
                }, [r("v-icon", [e._v("mdi-earth")])], 1)], 1), e.loggedIn ? r("v-navigation-drawer", {
                    attrs: {
                        "mini-variant": e.minified,
                        app: "",
                        clipped: ""
                    },
                    scopedSlots: e._u([{
                        key: "append",
                        fn: function() {
                            return [r("v-list", [e.$vuetify.breakpoint.smAndDown ? e._e() : r("v-list-item", {
                                attrs: {
                                    link: ""
                                },
                                on: {
                                    click: function(t) {
                                        e.minified = !e.minified
                                    }
                                }
                            }, [r("v-list-item-icon", [r("v-icon", {
                                domProps: {
                                    textContent: e._s(e.minified ? "mdi-chevron-right" : "mdi-chevron-left")
                                }
                            })], 1), r("v-list-item-content", [r("v-list-item-title", {
                                domProps: {
                                    textContent: e._s(e.$t("common.Collapse"))
                                }
                            })], 1)], 1), r("v-list-item", {
                                attrs: {
                                    link: ""
                                },
                                on: {
                                    click: function(t) {
                                        return e.$api.logout()
                                    }
                                }
                            }, [r("v-list-item-icon", [r("v-icon", [e._v("mdi-logout")])], 1), r("v-list-item-content", [r("v-list-item-title", {
                                domProps: {
                                    textContent: e._s(e.$t("users.Logout"))
                                }
                            })], 1)], 1)], 1)]
                        },
                        proxy: !0
                    }], null, !1, 3320786180),
                    model: {
                        value: e.drawer,
                        callback: function(t) {
                            e.drawer = t
                        },
                        expression: "drawer"
                    }
                }, [r("v-list", [r("v-list-item", {
                    attrs: {
                        to: {
                            name: "Account"
                        },
                        link: ""
                    }
                }, [r("v-list-item-icon", [r("v-icon", [e._v("mdi-account")])], 1), r("v-list-item-content", [r("v-list-item-title", {
                    domProps: {
                        textContent: e._s(e.$t("users.Account"))
                    }
                })], 1)], 1), r("v-list-item", {
                    attrs: {
                        to: {
                            name: "Servers"
                        },
                        link: ""
                    }
                }, [r("v-list-item-icon", [r("v-icon", [e._v("mdi-server")])], 1), r("v-list-item-content", [r("v-list-item-title", {
                    domProps: {
                        textContent: e._s(e.$t("servers.Servers"))
                    }
                })], 1)], 1), e.hasScope("nodes.view") || e.isAdmin() ? r("v-list-item", {
                    attrs: {
                        to: {
                            name: "Nodes"
                        },
                        link: ""
                    }
                }, [r("v-list-item-icon", [r("v-icon", [e._v("mdi-server-network")])], 1), r("v-list-item-content", [r("v-list-item-title", {
                    domProps: {
                        textContent: e._s(e.$t("nodes.Nodes"))
                    }
                })], 1)], 1) : e._e(), e.hasScope("users.view") || e.isAdmin() ? r("v-list-item", {
                    attrs: {
                        to: {
                            name: "Users"
                        },
                        link: ""
                    }
                }, [r("v-list-item-icon", [r("v-icon", [e._v("mdi-account-multiple")])], 1), r("v-list-item-content", [r("v-list-item-title", {
                    domProps: {
                        textContent: e._s(e.$t("users.Users"))
                    }
                })], 1)], 1) : e._e(), e.hasScope("templates.view") || e.isAdmin() ? r("v-list-item", {
                    attrs: {
                        to: {
                            name: "Templates"
                        },
                        link: ""
                    }
                }, [r("v-list-item-icon", [r("v-icon", [e._v("mdi-file-code")])], 1), r("v-list-item-content", [r("v-list-item-title", {
                    domProps: {
                        textContent: e._s(e.$t("templates.Templates"))
                    }
                })], 1)], 1) : e._e()], 1)], 1) : e._e(), r("v-main", [r("v-container", {
                    attrs: {
                        fluid: ""
                    }
                }, [e.appConfig ? r("router-view") : r("div", {
                    staticClass: "d-flex flex-column",
                    staticStyle: {
                        width: "100%",
                        height: "100%"
                    }
                }, [r("div", {
                    staticClass: "d-flex align-self-center flex-row",
                    staticStyle: {
                        height: "100%"
                    }
                }, [r("v-progress-circular", {
                    staticClass: "align-self-center",
                    attrs: {
                        indeterminate: "",
                        size: "100"
                    }
                })], 1)])], 1), r("ui-language", {
                    model: {
                        value: e.showLanguageSelect,
                        callback: function(t) {
                            e.showLanguageSelect = t
                        },
                        expression: "showLanguageSelect"
                    }
                }), r("ui-overlay", {
                    attrs: {
                        card: "",
                        closable: "",
                        title: e.$t("common.ErrorDetails")
                    },
                    model: {
                        value: e.errorOverlayOpen,
                        callback: function(t) {
                            e.errorOverlayOpen = t
                        },
                        expression: "errorOverlayOpen"
                    }
                }, [r("code", {
                    domProps: {
                        textContent: e._s(e.errorText)
                    }
                })])], 1)], 1)
            },
            $ = [],
            J = (r("2b3d"), {
                defaultAppConfig: {
                    themes: {
                        active: "New_Theme",
                        available: ["New_Theme"]
                    },
                    branding: {
                        name: "Computer Laboratory"
                    }
                }
            }),
            q = {
                data() {
                    return {
                        appConfig: J.defaultAppConfig,
                        loggedIn: !1,
                        drawer: null,
                        minified: !1,
                        reauthTask: null,
                        showLanguageSelect: !1,
                        errorOverlayOpen: !1,
                        errorText: "",
                        css: document.createElement("style"),
                        themeObjects: []
                    }
                },
                mounted() {
                    this.$api.on("login", this.didLogIn),
                    this.$api.on("logout", this.logout),
                    this.css.type = "text/css",
                    document.head.appendChild(this.css),
                    this.loadConfig(),
                    this.$vuetify.theme.dark = Object(L["a"])(),
                    this.$api.isLoggedIn() ? this.didLogIn() : this.loggedIn = !1,
                    window.pufferpanel.showError = e => this.showError(e)
                },
                methods: {
                    async loadTheme() {
                        const e = await this.$api.getTheme(this.appConfig.themes.active);
                        this.themeObjects.map(e => URL.revokeObjectURL(e)),
                        this.themeObjects = [],
                        this.css.textContent = "";
                        const t = {};
                        e.forEach(e => {
                            switch (e.name) {
                            case "theme.json":
                                this.$vuetify.theme.themes.light = {
                                    ...this.$vuetify.theme.themes.light,
                                    ...JSON.parse(e.content).colors.light
                                },
                                this.$vuetify.theme.themes.dark = {
                                    ...this.$vuetify.theme.themes.dark,
                                    ...JSON.parse(e.content).colors.dark
                                };
                                break;
                            case "theme.css":
                                this.css.textContent = e.content;
                                break;
                            default:
                                t[e.name] = URL.createObjectURL(e.blob)
                            }
                        }),
                        Object.keys(t).map(e => {
                            this.css.textContent = this.css.textContent.split(e).join(t[e]),
                            this.themeObjects.push(t[e])
                        })
                    },
                    async loadConfig() {
                        const e = await this.$api.getConfig();
                        if (this.appConfig = {
                            ...this.appConfig,
                            ...e
                        }, document.title = this.appConfig.branding.name, localStorage.getItem("theme")) {
                            const e = localStorage.getItem("theme");
                            -1 !== this.appConfig.themes.available.indexOf(e) && (this.appConfig.themes.active = e)
                        }
                        this.loadTheme()
                    },
                    setTheme(e) {
                        localStorage.setItem("theme", e),
                        this.appConfig.themes.active = e,
                        this.loadTheme()
                    },
                    toggleDark() {
                        Object(L["b"])(this.$vuetify)
                    },
                    logout(e) {
                        this.reauthTask && clearInterval(this.reauthTask),
                        this.reauthTask = null,
                        this.loggedIn = !1,
                        this.$router.push({
                            name: "Login"
                        }),
                        "session_timed_out" === e && this.$toast.error(this.$t("errors.ErrSessionTimedOut"))
                    },
                    didLogIn() {
                        this.loggedIn = !0,
                        this.reauthTask = setInterval(async () => {
                            await this.$api.reauth()
                        }, 6e5)
                    },
                    showError(e) {
                        const t = () => {
                            const e = new WeakSet;
                            return (t, r) => {
                                if ("password" === t)
                                    return "<password>";
                                if ("string" === typeof r)
                                    try {
                                        const e = JSON.parse(r);
                                        return "object" === typeof e && null !== e ? (-1 !== Object.keys(e).indexOf("password") && (e.password = "<password>"), JSON.stringify(e)) : r
                                    } catch {
                                        return r
                                    }
                                if ("object" === typeof r && null !== r) {
                                    if (e.has(r))
                                        return;
                                    e.add(r)
                                }
                                return r
                            }
                        };
                        this.errorText = JSON.stringify(e, t(), 4),
                        this.errorOverlayOpen = !0
                    }
                }
            },
            B = q,
            K = r("2877"),
            G = r("6544"),
            W = r.n(G),
            Y = r("7496"),
            Z = r("40dc"),
            Q = r("5bc1"),
            X = r("a523"),
            ee = r("132d"),
            te = r("8860"),
            re = r("da13"),
            ae = r("5d23"),
            oe = r("34c3"),
            ne = r("f6c4"),
            se = r("e449"),
            ie = r("f774"),
            le = r("490a"),
            de = r("67b6"),
            ce = r("43a6"),
            ue = r("e0c7"),
            me = r("2a7f"),
            pe = Object(K["a"])(B, H, $, !1, null, null, null),
            ve = pe.exports;
        W()(pe, {
            VApp: Y["a"],
            VAppBar: Z["a"],
            VAppBarNavIcon: Q["a"],
            VBtn: T["a"],
            VContainer: X["a"],
            VIcon: ee["a"],
            VList: te["a"],
            VListItem: re["a"],
            VListItemContent: ae["a"],
            VListItemIcon: oe["a"],
            VListItemTitle: ae["c"],
            VMain: ne["a"],
            VMenu: se["a"],
            VNavigationDrawer: ie["a"],
            VProgressCircular: le["a"],
            VRadio: de["a"],
            VRadioGroup: ce["a"],
            VSubheader: ue["a"],
            VToolbarTitle: me["a"]
        });
        var fe = r("a925");
        r("13d5");
        const Se = r("4999"),
            ge = {};
        for (const De of Se.keys()) {
            if ("./index.js" === De)
                continue;
            const e = De.replace(/(\.\/|\.json$)/g, "").split("/");
            e.reduce((t, r, a) => (t[r] || (t[r] = a + 1 === e.length ? Se(De) : {}), t[r]), ge)
        }
        var he = ge;
        a["a"].use(fe["a"]);
        const Ee = () => {
                const e = localStorage.getItem("locale");
                if (e && he[e])
                    return e;
                const t = (navigator.language || navigator.userLanguage).replace("-", "_").toLowerCase(),
                    r = e => t => -1 !== t.toLowerCase().indexOf(e),
                    a = Object.keys(he).filter(r(t))[0] || Object.keys(he).filter(r(t.split("_")[0]))[0];
                return a || "en_US"
            },
            Pe = new fe["a"]({
                locale: Ee(),
                fallbackLocale: "en_US",
                messages: he
            });
        var Ne = Pe,
            be = r("8c4f"),
            we = [{
                path: "/server",
                view: "Servers",
                name: "Servers"
            }, {
                path: "/addserver",
                view: "AddServer",
                name: "AddServer"
            }, {
                path: "/account",
                view: "Account",
                name: "Account"
            }, {
                path: "/server/:id",
                view: "Server",
                name: "Server"
            }, {
                path: "/user/:id",
                view: "User",
                name: "User"
            }, {
                path: "/adduser",
                view: "User",
                name: "AddUser"
            }, {
                path: "/user",
                view: "Users",
                name: "Users"
            }, {
                path: "/template/:id",
                view: "Template",
                name: "Template"
            }, {
                path: "/addtemplate",
                view: "Template",
                name: "AddTemplate"
            }, {
                path: "/template",
                view: "Templates",
                name: "Templates"
            }, {
                path: "/node",
                view: "Nodes",
                name: "Nodes"
            }, {
                path: "/node/:id",
                view: "Node",
                name: "Node"
            }, {
                path: "/addnode",
                view: "AddNode",
                name: "AddNode"
            }, {
                path: "/errors/404",
                name: "Errors/404",
                view: "errors/404",
                meta: {
                    noAuth: !0,
                    noSidebar: !1,
                    noFooter: !0,
                    noBase: !0
                }
            }, {
                path: "/auth/login",
                name: "Login",
                view: "Login",
                meta: {
                    noAuth: !0,
                    noSidebar: !0,
                    noFooter: !0,
                    noBase: !0
                }
            }, {
                path: "/auth/register",
                name: "Register",
                view: "Register",
                meta: {
                    noAuth: !0,
                    noSidebar: !0,
                    noFooter: !0,
                    noBase: !0
                }
            }, {
                path: "/auth/invite",
                name: "Invite",
                view: "Invite",
                meta: {
                    noAuth: !0,
                    noSidebar: !0,
                    noFooter: !0,
                    noBase: !0
                }
            }];
        function ke({path: e, view: t, name: a, meta: o}) {
            return {
                name: a || t,
                path: e,
                component: e => r("1a5d")("./" + t + ".vue"),
                meta: o
            }
        }
        function Ce(e) {
            a["a"].prototype.hasAuth() ? e() : e("/auth/login")
        }
        a["a"].use(be["a"]);
        const ye = new be["a"]({
            mode: "history",
            routes: we.map(e => ke(e)).concat([{
                path: "/",
                redirect: "server"
            }, {
                path: "",
                redirect: "server"
            }, {
                path: "*",
                redirect: "errors/404"
            }]),
            scrollBehavior(e, t, r) {
                return r || (e.hash ? {
                        selector: e.hash
                    } : {
                        x: 0,
                        y: 0
                    })
            }
        });
        ye.beforeEach((e, t, r) => {
            e.matched.some(e => e.meta.noAuth) ? r() : Ce(r)
        });
        var Te = ye;
        r("2d1c"),
        r("41e6");
        "serviceWorker" in navigator && navigator.serviceWorker.register("/service-worker.js", {
            scope: "/"
        }),
        window.pufferpanel = {},
        a["a"].use(j),
        a["a"].use(M),
        a["a"].config.productionTip = !1,
        new a["a"]({
            i18n: Ne,
            router: Te,
            vuetify: h,
            render: e => e(ve)
        }).$mount("#app")
    },
    "570c": function(e, t, r) {
        "use strict";
        r.r(t);
        var a = function() {
                var e = this,
                    t = e.$createElement,
                    r = e._self._c || t;
                return r("div", [e._l(e.value, (function(t, a) {
                    return r("v-row", {
                        key: a
                    }, [r("v-col", {
                        attrs: {
                            cols: "12"
                        }
                    }, [r("ui-input", {
                        attrs: {
                            value: t,
                            "icon-behind": "mdi-close"
                        },
                        on: {
                            "click:append-outer": function(t) {
                                return e.remove(a)
                            },
                            input: function(t) {
                                return e.onInput(a, t)
                            }
                        }
                    })], 1)], 1)
                })), r("v-row", [r("v-col", {
                    attrs: {
                        cols: "12"
                    }
                }, [r("v-btn", {
                    attrs: {
                        text: "",
                        block: ""
                    },
                    domProps: {
                        textContent: e._s(e.addLabel ? e.addLabel : e.$t("common.Add"))
                    },
                    on: {
                        click: function(t) {
                            return e.add()
                        }
                    }
                })], 1)], 1)], 2)
            },
            o = [],
            n = (r("ddb0"), {
                props: {
                    addLabel: {
                        type: String,
                        default: () => {}
                    },
                    value: {
                        type: Array,
                        required: !0
                    }
                },
                methods: {
                    onInput(e, t) {
                        const r = [...this.value];
                        r[e] = t,
                        this.$emit("input", r)
                    },
                    remove(e) {
                        const t = [...this.value];
                        t.splice(e, 1),
                        this.$emit("input", t)
                    },
                    add() {
                        const e = [...this.value];
                        e.push(""),
                        this.$emit("input", e)
                    }
                }
            }),
            s = n,
            i = r("2877"),
            l = r("6544"),
            d = r.n(l),
            c = r("8336"),
            u = r("62ad"),
            m = r("0fd9"),
            p = Object(i["a"])(s, a, o, !1, null, null, null);
        t["default"] = p.exports;
        d()(p, {
            VBtn: c["a"],
            VCol: u["a"],
            VRow: m["a"]
        })
    },
    "574d": function(e) {
        e.exports = JSON.parse('{"Id":"账户","Name":"名称","Address":"地址","Online":"在线","Offline":"离线","Loading":"正在载入...","General":"通用","Language":"语言","SelectLanguage":"选择语言","Settings":"设置","Update":"软件更新","Edit":"编辑","Delete":"删除","Create":"创建","Save":"保存","Saved":"已保存","SaveFailed":"保存失败","Cancel":"取消","Confirm":"确认","Actions":"操作","Host":"F.Q.D.N.","Port":"端口号","Template":"模板","Options":"选项","Collapse":"收起","Copied":"已经复制到了剪贴板","Unknown":"未知的","Search":"搜索","Back":"返回","Next":"下一个","LanguageName":"中文（中国）","Details":"详情","ErrorDetails":"错误详情","HelpTranslate":"请帮助我们翻译","DarkMode":"深色模式","ThemeOptions":"主题选项","Protocol":"协议","Add":"添加"}')
    },
    5899: function(e) {
        e.exports = JSON.parse('{"ErrGeneric":"Unknown error","ErrUnknownError":"Unknown error","ErrInvalidCredentials":"Invalid credentials","ErrServiceNotAvailable":"Service not available","ErrEmailNotConfigured":"Email not configured","ErrTokenInvalid":"Token is invalid","ErrClientNotFound":"Client not found","ErrUserNotFound":"User not found","ErrLoginNotPermitted":"Login not permitted","ErrInvalidTokenState":"Invalid token state","ErrSettingNotConfigured":"{setting} is not configured","ErrNoTemplate":"No template with name \'{name}\' was found","ErrServiceInvalidProvider":"{service} does not support {provider}","ErrFieldRequired":"{field} is required","ErrFieldMustBePrintable":"{field} must be printable ascii characters","ErrFieldHasURICharacters":"{field} must not contain characters which cannot be used in URIs","ErrFieldIsInvalidHost":"{field} must be a valid IP or FQDN","ErrFieldIsInvalidIP":"{field} must be a valid IP","ErrFieldTooLarge":"{field} cannot be larger than {max}","ErrFieldTooSmall":"{field} cannot be smaller than {min}","ErrFieldNotBetween":"{field} must be between {min} and {max}","ErrFieldEqual":"{field1} cannot be equal to {field2}","ErrFieldNotEqual":"{field1} is not equal to {field2}","ErrFieldNotEmail":"{field} is not a valid email","ErrFieldLength":"{field} must be at least {length} characters","ErrNoPermission":"You do not have permission to perform this action","ErrDatabaseNotAvailable":"Database is not available","ErrNoNodes":"No nodes available","ErrNoTemplates":"No templates available","ErrPasswordRequirements":"Password must be at least 8 characters","ErrUsernameRequirements":"Username must be at least 3 characters and only contain alphanumerics, _, or -","ErrPasswordsNotIdentical":"Passwords are not the same","ErrSessionTimedOut":"Your session timed out, please log in again","ErrMissingScope":"You are not authorized to perform this action","ErrInvalidJson":"The json data is invalid","ErrSocketFailed":"The WebSocket connection encountered an error, some features might be slow or broken"}')
    },
    "594f": function(e) {
        e.exports = JSON.parse('{"NoEnvFields":"There are no environment specific options for this environment","docker":{"name":"docker","image":"Kuva","networkMode":"Network Mode","networkName":"Network Name","bindings":"Bindings","portBindings":"Port Bindings","OutsidePort":"Outside Port","InsidePort":"Inside Port","HostPath":"Host Path","ContainerPath":"Container Path"},"standard":{"name":"Tavallinen"},"tty":{"name":"TTY"}}')
    },
    "59e1": function(e) {
        e.exports = JSON.parse('{"ServersView":"Can view this server","ServersEdit":"Edit the server","ServersInstall":"Install the server","ServersConsole":"View the console","ServersConsoleSend":"Send commands to the console","ServersStop":"Stop and kill the server","ServersStart":"Start the server","ServersStat":"View CPU and memory statistics","ServersFiles":"Allow access to files using SFTP","ServersFilesGet":"View and download files using the file manager","ServersFilesPut":"Edit and upload files using the file manager","ServersEditUsers":"Edit user\'s access to this server","Admin":"Admin (this grants every possible permission)","ViewServers":"See Servers","CreateServers":"Create new Servers","DeleteServers":"Delete Servers","EditServerAdmin":"Edit Server Settings","ViewNodes":"See Nodes","EditNodes":"Edit Nodes","DeployNodes":"Deploy new Nodes","ViewTemplates":"See Templates","EditTemplates":"Edit Templates","ViewUsers":"See all Users","EditUsers":"Edit other Users"}')
    },
    "5a9e": function(e) {
        e.exports = JSON.parse('{"NoEnvFields":"There are no environment specific options for this environment","docker":{"name":"Docker","image":"Imagem","networkMode":"Network Mode","networkName":"Network Name","bindings":"Bindings","portBindings":"Port Bindings","OutsidePort":"Outside Port","InsidePort":"Inside Port","HostPath":"Host Path","ContainerPath":"Container Path"},"standard":{"name":"Padrão"},"tty":{"name":"TTY"}}')
    },
    "5ab5": function(e) {
        e.exports = JSON.parse('{"ErrGeneric":"Bilinmeyen bir hata oluştu","ErrUnknownError":"Bilinmeyen bir hata oluştu","ErrInvalidCredentials":"Geçersiz giriş bilgileri","ErrServiceNotAvailable":"Bu hizmet kullanılamıyor","ErrEmailNotConfigured":"E-Posta yapılandırılmamış","ErrTokenInvalid":"Geçersiz Token","ErrClientNotFound":"Client Bulunamadı","ErrUserNotFound":"Kullanıcı bulunamadı","ErrLoginNotPermitted":"Girişe izin verilmiyor","ErrInvalidTokenState":"Geçersiz Token Durumu","ErrSettingNotConfigured":"{setting} Yapılandırılmamış","ErrNoTemplate":"\'{name}\' Adında şablon bulunamadı","ErrServiceInvalidProvider":"{service}, {provider} hizmetini desteklemiyor","ErrFieldRequired":"{field} gerekli","ErrFieldMustBePrintable":"{field} yazdırılabilir ascii karakterleri olmalıdır","ErrFieldHasURICharacters":"{field} URL\'lerde kullanılmayan karakterler içermemelidir","ErrFieldIsInvalidHost":"{field} geçerli bir IP veya FQDN olmalıdır","ErrFieldIsInvalidIP":"{field} geçerli bir IP olmalıdır","ErrFieldTooLarge":"{field} en fazla {max} olabilir","ErrFieldTooSmall":"{field} en fazla {min} olabilir","ErrFieldNotBetween":"{field}, {min} ve {max} arasında olmalıdır","ErrFieldEqual":"{field1}, {field2} ile eşit olamaz","ErrFieldNotEqual":"{field1}, {field2} ile eşit değildir","ErrFieldNotEmail":"{field}, geçerli bir e-posta değil","ErrFieldLength":"{field} en az {length} karakter olmalıdır","ErrNoPermission":"Bu işlemi gerçekleştirecek izinlere sahip değilsiniz","ErrDatabaseNotAvailable":"Veritabanı mevcut değil","ErrNoNodes":"Node mevcut değil","ErrNoTemplates":"Şablon mevcut değil","ErrPasswordRequirements":"Şifre en az 8 karakterden oluşmalıdır","ErrUsernameRequirements":"Kullanıcı adı en az 3 karakter olmalıdır. (Sadece Sayı, _, - içerebilir)","ErrPasswordsNotIdentical":"Şifreler aynı değil","ErrSessionTimedOut":"Oturumunuzun süresi doldu, lütfen tekrar giriş yapın","ErrMissingScope":"Bu işlemi gerçekleştirmek için yetkiniz yok","ErrInvalidJson":"Json verisi geçersiz","ErrSocketFailed":"WebSocket bağlantısı bir hatayla karşılaştı, bazı özellikler yavaş veya bozuk olabilir"}')
    },
    "5ac7": function(e) {
        e.exports = JSON.parse('{"Node":"노드","Nodes":"노드들","Edit":"노드 수정","Add":"노드 추가","Update":"노드 수정","Delete":"노드 삭제","PublicHost":"공개 호스트","PublicPort":"공개 포트","PrivateHost":"내부 호스트","PrivatePort":"내부 포트","SftpPort":"SFTP 포트","SaveConfig":"설정 저상","SavePublicKey":"공개키 저장","DeploymentInstruction":"이 노드를 배포하기 위해서 새 서버에 PufferPanel을 설치하고 이 설정 파일을 `/etc/pufferpanel`에 넣어주세요.<br/>그 후에 새로운 서버에 설치된 PufferPanel을 재시작 해주세요.","UpdateSuccess":"노드를 수정했습니다.","UpdateError":"노드 수정 중 오류가 발생했습니다."}')
    },
    "5b90": function(e) {
        e.exports = JSON.parse('{"Templates":"Templates","NoTemplates":"There are no templates here yet","Deleted":"Template deleted","New":"Create new template","Edit":"Edit template","Editor":"Editor","Json":"JSON","Display":"Display Name","Type":"Type","Variables":"Variables","Install":"Install","AddInstallStep":"Add Install Step","DeleteInstallStep":"Delete Install Step","Description":"Description","DataType":"Data Type","DefaultValue":"Default Value","Required":"Required","UserEditable":"Users can edit","Value":"Value","AddOption":"Add an option","AddCommand":"Add command","Filename":"Filename","Content":"Content","Source":"Source","Target":"Target","Version":"Version","ReleaseType":"Release Type","AddFile":"Add file","AddVariable":"Add variable","Environment":"Environment","Environments":"Environments","AddEnvironment":"Add environment","DefaultEnvironment":"Default environment","AddEnvVar":"Add env variable","EnvVars":"Environment variables","DockerImage":"Docker Image","SaveSuccess":"Saved Template","VarNameNoSpaces":"A variable name cannot be empty or contain spaces","SupportedEnvironments":"Supported Environments","RunConfig":"Run Configuration","PreHook":"Pre Run Hook","PostHook":"Post Run Hook","AddPreStep":"Add Pre Run Step","AddPostStep":"Add Post Run Step","DeletePreStep":"Delete Pre Run Step","DeletePostStep":"Delete Post Run Step","Shutdown":"Shutdown","Command":"Command","Arguments":"Arguments","AddArgument":"Add an argument","import":{"OverrideWarning":"WARNING: Imported templates WILL overwrite existing templates with the same ID","Import":"Import templates","Tooltip":"Import templates from the official repository","Select":"Select templates to import","Started":"Importing templates, please wait a moment","Successful":"Successfully imported template {template}","NoTemplatesTitle":"Do you want to import templates?","NoTemplatesContent":"You currently don\'t have any templates. Templates are necessary to create servers.<br/>Do you want to import some templates from the official PufferPanel templates repository now?"},"stop":{"Command":"Command","Signal":"Signal"},"processors":{"download":{"ProcessorName":"Download","files":"Files"},"command":{"ProcessorName":"Run Command","commands":"Commands"},"alterfile":{"ProcessorName":"Change file","regex":"Treat search as RegEx","search":"Text to search","replace":"Replace with"},"writefile":{"ProcessorName":"Write to file","text":"Content"},"move":{"ProcessorName":"Move File","source":"Source","target":"Target"},"mkdir":{"ProcessorName":"Create Directory"},"mojangdl":{"ProcessorName":"Download Minecraft"},"forgedl":{"ProcessorName":"Download Minecraft Forge"},"spongeforgedl":{"ProcessorName":"Download Minecraft SpongeForge","releaseType":"Release Type"},"fabricdl":{"ProcessorName":"Download Minecraft Fabric"}}}')
    },
    "5bdb": function(e) {
        e.exports = JSON.parse('{"FileManager":"Datei-Manager","NewFolder":"Neuer Ordner","NewFile":"Neue Datei","LastModified":"Zuletzt geändert","ConfirmDelete":"Soll diese Datei wirklich gelöscht werden?","Upload":"Hochladen","Download":"Herunterladen","Size":"Größe","NoFiles":"Hier sind noch keine Dateien, erstelle welche, zum Beispiel indem du oben auf der Seite auf \\"Installieren\\" klickst","FileLoadFailed":"Laden der Datei fehlgeschlagen"}')
    },
    "5c1b": function(e) {
        e.exports = JSON.parse('{"FileManager":"Gestionnaire de Fichiers","NewFolder":"Nouveau Dossier","NewFile":"Nouveau Fichier","LastModified":"Dernière Modification","ConfirmDelete":"Êtes-vous sûr de vouloir supprimer ce fichier ?","Upload":"Envoyer","Download":"Télécharger","Size":"Taille","NoFiles":"Il n\'y a pas encore de fichiers ici, allez par exemple en créer en cliquant sur le bouton d\'installation en haut de la page","FileLoadFailed":"Échec de chargement du fichier"}')
    },
    "5c7b": function(e) {
        e.exports = JSON.parse('{"ServersView":"Can view this server","ServersEdit":"Edit the server","ServersInstall":"Install the server","ServersConsole":"View the console","ServersConsoleSend":"Send commands to the console","ServersStop":"Stop and kill the server","ServersStart":"Start the server","ServersStat":"View CPU and memory statistics","ServersFiles":"Allow access to files using SFTP","ServersFilesGet":"View and download files using the file manager","ServersFilesPut":"Edit and upload files using the file manager","ServersEditUsers":"Edit user\'s access to this server","Admin":"Admin (this grants every possible permission)","ViewServers":"See Servers","CreateServers":"Create new Servers","DeleteServers":"Delete Servers","EditServerAdmin":"Edit Server Settings","ViewNodes":"See Nodes","EditNodes":"Edit Nodes","DeployNodes":"Deploy new Nodes","ViewTemplates":"See Templates","EditTemplates":"Edit Templates","ViewUsers":"See all Users","EditUsers":"Edit other Users"}')
    },
    "5cce": function(e) {
        e.exports = JSON.parse('{"FileManager":"Bestandsbeheer","NewFolder":"Nieuwe Map","NewFile":"Nieuw Bestand","LastModified":"Laatst Gewijzigd","ConfirmDelete":"Weet je zeker dat je dit bestand wilt verwijderen?","Upload":"Uploaden","Download":"Downloaden","Size":"Grootte","NoFiles":"Er zijn hier nog geen bestanden, maak er een paar aan door bijvoorbeeld op de installeren knop te klikken bovenaan de pagina","FileLoadFailed":"Bestand laden mislukt"}')
    },
    "5cdd": function(e) {
        e.exports = JSON.parse('{"Server":"Szerver","NoServers":"Nincsen szerver, amihez hozzáférhet","Servers":"Szerverek","Add":"Új szerver","Console":"Konzol","Controls":"Irányítás","SFTPInfo":"SFTP információk","Restart":"Restart","Start":"Indítás","Stop":"Leállítás","Kill":"Kilövés","Install":"Telepítés","Send":"Küldés","Pause":"Szüneteltetés","CPU":"CPU","Memory":"Memória","Name":"Szerver neve","SelectNode":"Válasszon csomópontot","SelectTemplate":"Válasszon sablont","SelectThisTemplate":"A sablon használása","SelectUser":"Válasszon felhasználót","Environment":"Környezet","SelectEnvironment":"Válasszon környezetet","TypeUsername":"Adjon meg egy felhasználónevet","AdminControls":"Admin felület","Settings":"Beállítások","NoEditableVars":"A szervernek nincsenek módosítható mezői","ConfirmDelete":"Biztosan törli ezt a szervert? (A művelet nem visszavonható)","Delete":"Szerver törlése","Deleted":"Szerver törölve","NoReadme":"Ehhez a sablonhoz nincsen readme","SftpConnection":"Kapcsolódás az SFTPhez","EditDefinition":"Edit Server Definition","Reload":"Lemezen lévő szerveradatok újratöltése","Reloaded":"Szerveradatok újratöltve","Autostart":"Szerver indítása, amikor a csomópont elindul","Autorestart":"Restart the server when it stops normally","Autorecover":"Szerver újraindítása, ha összeomlik"}')
    },
    "5d8c": function(e) {
        e.exports = JSON.parse('{"Server":"Server","NoServers":"There are no servers you have access to","Servers":"Servers","Add":"Add Server","Console":"Console","Controls":"Controls","SFTPInfo":"SFTP Information","Restart":"Restart","Start":"Start","Stop":"Stop","Kill":"Kill","Install":"Install","Send":"Send","Pause":"Pause","CPU":"CPU","Memory":"Memory","Name":"Server Name","SelectNode":"Please select node","SelectTemplate":"Please select template","SelectThisTemplate":"Use this template","SelectUser":"Please select user","Environment":"Environment","SelectEnvironment":"Please select environment","TypeUsername":"Type a username","AdminControls":"Admin Controls","Settings":"Settings","NoEditableVars":"This server does not have variables you can edit","ConfirmDelete":"Do you really want to delete this server? (this cannot be undone)","Delete":"Delete Server","Deleted":"Deleted Server","NoReadme":"No readme available for this template","SftpConnection":"Connect to SFTP","EditDefinition":"Edit Server Definition","Reload":"Reload server data from disk","Reloaded":"Reloaded server data","Autostart":"Start the server when the node starts","Autorestart":"Restart the server when it stops normally","Autorecover":"Restart the server when it crashes"}')
    },
    "5da6": function(e) {
        e.exports = JSON.parse('{"Server":"Server","NoServers":"There are no servers you have access to","Servers":"Servers","Add":"Add Server","Console":"Console","Controls":"Controls","SFTPInfo":"SFTP Information","Restart":"Restart","Start":"Start","Stop":"Stop","Kill":"Kill","Install":"Install","Send":"Send","Pause":"Pause","CPU":"CPU","Memory":"Memory","Name":"Server Name","SelectNode":"Please select node","SelectTemplate":"Please select template","SelectThisTemplate":"Use this template","SelectUser":"Please select user","Environment":"Environment","SelectEnvironment":"Please select environment","TypeUsername":"Type a username","AdminControls":"Admin Controls","Settings":"Settings","NoEditableVars":"This server does not have variables you can edit","ConfirmDelete":"Do you really want to delete this server? (this cannot be undone)","Delete":"Delete Server","Deleted":"Deleted Server","NoReadme":"No readme available for this template","SftpConnection":"Connect to SFTP","EditDefinition":"Edit Server Definition","Reload":"Reload server data from disk","Reloaded":"Reloaded server data","Autostart":"Start the server when the node starts","Autorestart":"Restart the server when it stops normally","Autorecover":"Restart the server when it crashes"}')
    },
    "5dd9": function(e) {
        e.exports = JSON.parse('{"FileManager":"Gestore File","NewFolder":"Nuova Cartella","NewFile":"Nuovo File","LastModified":"Ultima Modifica","ConfirmDelete":"Sei sicuro di voler eliminare questo file?","Upload":"Carica","Download":"Scarica","Size":"Dimensioni","NoFiles":"Non ci sono ancora dei file qui, vai a crearne alcuni per esempio cliccando il pulsante installa nella parte superiore della pagina","FileLoadFailed":"Caricamento del file fallito"}')
    },
    6075: function(e) {
        e.exports = JSON.parse('{"NoEnvFields":"Er zijn geen omgeving specifieke opties voor deze omgeving","docker":{"name":"Docker","image":"Image","networkMode":"Netwerkmodus","networkName":"Netwerknaam","bindings":"Binding","portBindings":"Poort Binding ","OutsidePort":"Externe Poort","InsidePort":"Interne Poort","HostPath":"hostpad","ContainerPath":"Container Pad"},"standard":{"name":"Standaard"},"tty":{"name":"TTY"}}')
    },
    6176: function(e) {
        e.exports = JSON.parse('{"Id":"ID","Name":"名前","Address":"IPアドレス","Online":"オンライン","Offline":"オフライン","Loading":"読み込み中...","General":"一般","Language":"言語","SelectLanguage":"言語選択\\n","Settings":"設定","Update":"更新","Edit":"編集","Delete":"削除","Create":"作成","Save":"保存","Saved":"保存しました","SaveFailed":"保存失敗","Cancel":"取り消し","Confirm":"承認","Actions":"アクション","Host":"ホスト","Port":"ポート","Template":"テンプレート","Options":"オプション","Collapse":"折りたたむ","Copied":"クリップボードにコピーしました","Unknown":"不明なエラー","Search":"検索","Back":"戻る","Next":"次","LanguageName":"英語","Details":"結果","ErrorDetails":"エラー結果","HelpTranslate":"PufferPanelの翻訳にご協力ください","DarkMode":"ダークモード","ThemeOptions":"テーマ設定","Protocol":"Protocol","Add":"Add"}')
    },
    6425: function(e) {
        e.exports = JSON.parse('{"Server":"Server","NoServers":"Siin pole servereid, millele on sul ligipääs","Servers":"Serverid","Add":"Lisa Server","Console":"Konsool","Controls":"Juhtimine","SFTPInfo":"SFTP Informatsioon","Restart":"Restart","Start":"Käivita","Stop":"Peata","Kill":"Hävita","Install":"Paigalda","Send":"Saada","Pause":"Paus","CPU":"CPU","Memory":"Mälu","Name":"Serveri Nimi","SelectNode":"Palun vali sõlm","SelectTemplate":"Palun vali mall","SelectThisTemplate":"Kasuta seda malli","SelectUser":"Palun vali kasutaja","Environment":"Keskkond","SelectEnvironment":"Palun vali keskkond","TypeUsername":"Kirjuta kasutajanimi","AdminControls":"Admin Juhtimine","Settings":"Sätted","NoEditableVars":"Sellel serveril ei ole muutujaid mida sa saad muuta","ConfirmDelete":"Kas soovid kindlasti kustutada seda serverit? (seda ei saa tagasi võtta)","Delete":"Kustuta Server","Deleted":"Kustutatud Server","NoReadme":"Pole readme saadav sellele mallile","SftpConnection":"Ühenda SFTP-ga","EditDefinition":"Edit Server Definition","Reload":"Laadi kettalt serveri andmed","Reloaded":"Serveri andmed taaslaetud","Autostart":"Käivita server kui sõlm käivitub","Autorestart":"Restart the server when it stops normally","Autorecover":"Taaskäivita server kui see jookseb kokku"}')
    },
    6485: function(e) {
        e.exports = JSON.parse('{"Node":"Вузол","Nodes":"Nodes","Edit":"Edit Node","Add":"Add Node","Update":"Update Node","Delete":"Delete Node","PublicHost":"Public Host","PublicPort":"Public Port","PrivateHost":"Private Host","PrivatePort":"Private Port","SftpPort":"SFTP Port","SaveConfig":"Save Config","SavePublicKey":"Save Public Key","DeploymentInstruction":"To deploy the node, install PufferPanel on the new server and place the config file in `/etc/pufferpanel/`<br/>Restart PufferPanel on the new server afterwards.","UpdateSuccess":"Successfully updated node","UpdateError":"Error updating node"}')
    },
    "64a0": function(e) {
        e.exports = JSON.parse('{"ServersView":"Láthatja ezt a szervert","ServersEdit":"Szerkeztheti a szervert","ServersInstall":"Telepítheti a szervert","ServersConsole":"Láthatja a konzolt","ServersConsoleSend":"Küldhet parancsokat a konzolnak","ServersStop":"Leállíthatja és kilőheti a szervert","ServersStart":"Elindíthatja a szervert","ServersStat":"Láthatja a CPU és memória statisztikáit","ServersFiles":"Az adatok hozzáférése SFTPn keresztül megengedélyezése","ServersFilesGet":"Megtekinthet és letölthet fájlokat a fájlkezelőn keresztül","ServersFilesPut":"Szerkeszthet és feltölthet fájlokat a fájlkezelön keresztül","ServersEditUsers":"Szerkesztheti a felhasználók szerverhez való engededélyeit","Admin":"Admin (megkap minden jogosultságot)","ViewServers":"See Servers","CreateServers":"Létrehozhat új szervereket","DeleteServers":"Törölhet szervereket","EditServerAdmin":"Módosíthat szerverbeállításokat","ViewNodes":"Megtekinthet csomópontokat","EditNodes":"Szerkeszthet csomópontokat","DeployNodes":"Beállíthat új csomópontokat","ViewTemplates":"Megtekinthet sablonokat","EditTemplates":"Szerkeszthet sablonokat","ViewUsers":"Láthatja az összes felhasználót","EditUsers":"Szerkesztheti más felhasználók adatait"}')
    },
    6539: function(e, t, r) {
        "use strict";
        r.r(t);
        var a = function() {
                var e = this,
                    t = e.$createElement,
                    r = e._self._c || t;
                return r("v-slide-group", {
                    staticClass: "pl-12 max-width-100"
                }, [e.server.permissions.startServer || e.isAdmin() ? r("v-slide-item", {
                    scopedSlots: e._u([{
                        key: "default",
                        fn: function(t) {
                            return [e.running ? r("v-btn", {
                                staticClass: "mr-4",
                                attrs: {
                                    color: "success"
                                },
                                on: {
                                    click: function(t) {
                                        return e.action("restart")
                                    }
                                }
                            }, [r("v-icon", {
                                attrs: {
                                    left: ""
                                }
                            }, [e._v(" mdi-reload ")]), e._v(" " + e._s(e.$t("servers.Restart")) + " ")], 1) : r("v-btn", {
                                staticClass: "mr-4",
                                attrs: {
                                    color: "success"
                                },
                                on: {
                                    click: function(t) {
                                        return e.action("start")
                                    }
                                }
                            }, [r("v-icon", {
                                attrs: {
                                    left: ""
                                }
                            }, [e._v(" mdi-play ")]), e._v(" " + e._s(e.$t("servers.Start")) + " ")], 1)]
                        }
                    }], null, !1, 3388921987)
                }) : e._e(), e.server.permissions.stopServer || e.isAdmin() ? r("v-slide-item", {
                    scopedSlots: e._u([{
                        key: "default",
                        fn: function(t) {
                            return [r("v-btn", {
                                staticClass: "mr-4",
                                attrs: {
                                    color: "warning"
                                },
                                on: {
                                    click: function(t) {
                                        return e.action("stop")
                                    }
                                }
                            }, [r("v-icon", {
                                attrs: {
                                    left: ""
                                }
                            }, [e._v(" mdi-stop ")]), e._v(" " + e._s(e.$t("servers.Stop")) + " ")], 1)]
                        }
                    }], null, !1, 368116400)
                }) : e._e(), e.server.permissions.stopServer || e.isAdmin() ? r("v-slide-item", {
                    scopedSlots: e._u([{
                        key: "default",
                        fn: function(t) {
                            return [r("v-btn", {
                                staticClass: "mr-4",
                                attrs: {
                                    color: "error"
                                },
                                on: {
                                    click: function(t) {
                                        return e.action("kill")
                                    }
                                }
                            }, [r("v-icon", {
                                attrs: {
                                    left: ""
                                }
                            }, [e._v(" mdi-skull ")]), e._v(" " + e._s(e.$t("servers.Kill")) + " ")], 1)]
                        }
                    }], null, !1, 2001936407)
                }) : e._e(), e.server.permissions.installServer || e.isAdmin() ? r("v-slide-item", {
                    scopedSlots: e._u([{
                        key: "default",
                        fn: function(t) {
                            return [r("v-btn", {
                                attrs: {
                                    color: "error"
                                },
                                on: {
                                    click: function(t) {
                                        return e.action("install")
                                    }
                                }
                            }, [r("v-icon", {
                                attrs: {
                                    left: ""
                                }
                            }, [e._v(" mdi-package-down ")]), e._v(" " + e._s(e.$t("servers.Install")) + " ")], 1)]
                        }
                    }], null, !1, 79173881)
                }) : e._e()], 1)
            },
            o = [],
            n = {
                props: {
                    server: {
                        type: Object,
                        default: function() {
                            return {}
                        }
                    }
                },
                data() {
                    return {
                        running: !1
                    }
                },
                mounted() {
                    this.$api.addServerListener(this.server.id, "status", e => {
                        this.running = e.running
                    }),
                    this.$api.requestServerStatus(this.server.id)
                },
                methods: {
                    action(e) {
                        this.$api.sendServerAction(this.server.id, e)
                    }
                }
            },
            s = n,
            i = r("2877"),
            l = r("6544"),
            d = r.n(l),
            c = r("8336"),
            u = r("132d"),
            m = r("7efd"),
            p = r("9dbe"),
            v = Object(i["a"])(s, a, o, !1, null, null, null);
        t["default"] = v.exports;
        d()(v, {
            VBtn: c["a"],
            VIcon: u["a"],
            VSlideGroup: m["a"],
            VSlideItem: p["a"]
        })
    },
    6660: function(e, t, r) {
        "use strict";
        r.r(t);
        var a = function() {
                var e = this,
                    t = e.$createElement,
                    r = e._self._c || t;
                return r("v-combobox", e._g({
                    attrs: {
                        id: e.id,
                        value: e.value,
                        outlined: "outlined" === e.lookValue,
                        solo: "solo" === e.lookValue,
                        filled: "filled" === e.lookValue,
                        flat: e.flat,
                        autofocus: e.autofocus,
                        dense: e.dense,
                        disabled: e.disabled,
                        label: e.label,
                        items: e.items,
                        "hide-details": e.hideDetails && !e.showHint,
                        "persistent-hint": e.showHint,
                        hint: e.hintValue,
                        "error-messages": e.errorMessages,
                        "prepend-inner-icon": e.icon,
                        "append-icon": e.endIcon,
                        "append-outer-icon": e.iconBehind,
                        placeholder: e.placeholder,
                        required: e.required,
                        name: e.name,
                        type: e.type
                    },
                    on: {
                        "update:search-input": function(t) {
                            return e.$emit("input", t)
                        },
                        input: function(t) {
                            return e.$emit("input", t)
                        }
                    }
                }, e.listeners), [e._l(e.$slots, (function(t, r) {
                    return e._t(r, null, {
                        slot: r
                    })
                }))], 2)
            },
            o = [];
        const n = ["outlined", "solo", "solo-flat", "filled", "material"];
        var s = {
                props: {
                    autofocus: {
                        type: Boolean,
                        default: () => !1
                    },
                    dense: {
                        type: Boolean,
                        default: () => !1
                    },
                    disabled: {
                        type: Boolean,
                        default: () => !1
                    },
                    endIcon: {
                        type: String,
                        default: () => {}
                    },
                    errorMessages: {
                        type: String,
                        default: () => {}
                    },
                    hint: {
                        type: String,
                        default: () => {}
                    },
                    icon: {
                        type: String,
                        default: () => {}
                    },
                    iconBehind: {
                        type: String,
                        default: () => {}
                    },
                    id: {
                        type: String,
                        default: () => {}
                    },
                    items: {
                        type: Array,
                        default: () => {}
                    },
                    label: {
                        type: String,
                        default: () => {}
                    },
                    name: {
                        type: String,
                        default: () => {}
                    },
                    placeholder: {
                        type: String,
                        default: () => {}
                    },
                    required: {
                        type: Boolean,
                        default: () => !1
                    },
                    look: {
                        type: String,
                        validator: e => -1 !== n.indexOf(e),
                        default: () => {}
                    },
                    type: {
                        type: String,
                        default: () => "text"
                    },
                    value: {
                        type: void 0,
                        default: () => "",
                        required: !0
                    }
                },
                computed: {
                    listeners() {
                        const e = {
                            ...this.$listeners
                        };
                        return delete e.input, delete e["update:search-input"], e
                    },
                    hideDetails() {
                        const e = void 0 !== this.errorMessages && "" !== this.errorMessages;
                        return !e
                    },
                    showHint() {
                        const e = void 0 !== this.hint && "" !== this.hint,
                            t = void 0 !== this.$slots.message && "" !== this.$slots.message && this.$slots.message !== [];
                        return e || t
                    },
                    lookValue() {
                        const e = this.look ? this.look : this.$vuetify.theme.options.inputStyle;
                        return e.split("-")[0]
                    },
                    flat() {
                        const e = this.look ? this.look : this.$vuetify.theme.options.inputStyle;
                        return -1 !== e.split("-").indexOf("flat")
                    },
                    hintValue() {
                        return this.hint ? this.hint : this.$slots.message ? "_" : void 0
                    }
                }
            },
            i = s,
            l = r("2877"),
            d = r("6544"),
            c = r.n(d),
            u = r("2b5d"),
            m = Object(l["a"])(i, a, o, !1, null, null, null);
        t["default"] = m.exports;
        c()(m, {
            VCombobox: u["a"]
        })
    },
    "675d": function(e) {
        e.exports = JSON.parse('{"FileManager":"File Manager","NewFolder":"New Folder","NewFile":"New File","LastModified":"Last Modified","ConfirmDelete":"Are you sure you want to delete this file?","Upload":"Upload","Download":"Download","Size":"Size","NoFiles":"There are no files here yet, go and create some for example by clicking the install button at the top of the page","FileLoadFailed":"Failed loading file"}')
    },
    "67b8": function(e) {
        e.exports = JSON.parse('{"FileManager":"File Manager","NewFolder":"New Folder","NewFile":"New File","LastModified":"Last Modified","ConfirmDelete":"Are you sure you want to delete this file?","Upload":"Upload","Download":"Download","Size":"Size","NoFiles":"There are no files here yet, go and create some for example by clicking the install button at the top of the page","FileLoadFailed":"Failed loading file"}')
    },
    6917: function(e) {
        e.exports = JSON.parse('{"Templates":"Templates","NoTemplates":"There are no templates here yet","Deleted":"Template deleted","New":"Create new template","Edit":"Edit template","Editor":"Editor","Json":"JSON","Display":"Display Name","Type":"Type","Variables":"Variables","Install":"Install","AddInstallStep":"Add Install Step","DeleteInstallStep":"Delete Install Step","Description":"Description","DataType":"Data Type","DefaultValue":"Default Value","Required":"Required","UserEditable":"Users can edit","Value":"Value","AddOption":"Add an option","AddCommand":"Add command","Filename":"Filename","Content":"Content","Source":"Source","Target":"Target","Version":"Version","ReleaseType":"Release Type","AddFile":"Add file","AddVariable":"Add variable","Environment":"Environment","Environments":"Environments","AddEnvironment":"Add environment","DefaultEnvironment":"Default environment","AddEnvVar":"Add env variable","EnvVars":"Environment variables","DockerImage":"Docker Image","SaveSuccess":"Saved Template","VarNameNoSpaces":"A variable name cannot be empty or contain spaces","SupportedEnvironments":"Supported Environments","RunConfig":"Run Configuration","PreHook":"Pre Run Hook","PostHook":"Post Run Hook","AddPreStep":"Add Pre Run Step","AddPostStep":"Add Post Run Step","DeletePreStep":"Delete Pre Run Step","DeletePostStep":"Delete Post Run Step","Shutdown":"Shutdown","Command":"Command","Arguments":"Arguments","AddArgument":"Add an argument","import":{"OverrideWarning":"WARNING: Imported templates WILL overwrite existing templates with the same ID","Import":"Import templates","Tooltip":"Import templates from the official repository","Select":"Select templates to import","Started":"Importing templates, please wait a moment","Successful":"Successfully imported template {template}","NoTemplatesTitle":"Do you want to import templates?","NoTemplatesContent":"You currently don\'t have any templates. Templates are necessary to create servers.<br/>Do you want to import some templates from the official PufferPanel templates repository now?"},"stop":{"Command":"Command","Signal":"Signal"},"processors":{"download":{"ProcessorName":"Download","files":"Files"},"command":{"ProcessorName":"Run Command","commands":"Commands"},"alterfile":{"ProcessorName":"Change file","regex":"Treat search as RegEx","search":"Text to search","replace":"Replace with"},"writefile":{"ProcessorName":"Write to file","text":"Content"},"move":{"ProcessorName":"Move File","source":"Source","target":"Target"},"mkdir":{"ProcessorName":"Create Directory"},"mojangdl":{"ProcessorName":"Download Minecraft"},"forgedl":{"ProcessorName":"Download Minecraft Forge"},"spongeforgedl":{"ProcessorName":"Download Minecraft SpongeForge","releaseType":"Release Type"},"fabricdl":{"ProcessorName":"Download Minecraft Fabric"}}}')
    },
    6932: function(e) {
        e.exports = JSON.parse('{"ErrGeneric":"Error desconocido","ErrUnknownError":"Error desconocido","ErrInvalidCredentials":"Credenciales inválidas","ErrServiceNotAvailable":"Servicio no disponible","ErrEmailNotConfigured":"Email no configurado","ErrTokenInvalid":"Token invalido","ErrClientNotFound":"Cliente no encontrado","ErrUserNotFound":"Usuario no encontrado","ErrLoginNotPermitted":"Inicio de sesión no permitido","ErrInvalidTokenState":"Estado del token inválido","ErrSettingNotConfigured":"{setting} no está configurado","ErrNoTemplate":"No se ha encontrado ninguna plantilla con el nombre \'{name}\'","ErrServiceInvalidProvider":"{service} no soporta {provider}","ErrFieldRequired":"{field} es obligatorio","ErrFieldMustBePrintable":"{field} debe estar formado por caracteres ascii imprimibles","ErrFieldHasURICharacters":"{field} no debe contener caracteres que no pueden ser usados en URIs","ErrFieldIsInvalidHost":"{field} debe ser una IP válida o FQDN","ErrFieldIsInvalidIP":"{field} debe ser una IP válida","ErrFieldTooLarge":"{field} no puede ser mayor que {max}","ErrFieldTooSmall":"{field} no puede ser menor que {min}","ErrFieldNotBetween":"{field} debe estar entre {min} y {max}","ErrFieldEqual":"{field1} no puede ser igual a {field2}","ErrFieldNotEqual":"{field1} no es igual a {field2}","ErrFieldNotEmail":"{field} no es un email válido","ErrFieldLength":"{field} debe tener al menos {length} caracteres","ErrNoPermission":"No tienes permisos para realizar esta acción","ErrDatabaseNotAvailable":"La base de datos no esta disponible","ErrNoNodes":"No hay nodos disponibles","ErrNoTemplates":"No hay plantillas disponibles","ErrPasswordRequirements":"La contraseña debe tener al menos {min} caracteres","ErrUsernameRequirements":"El nombre de usuario debe tener al menos {min} caracteres y solo contener caracteres alfanuméricos, _, o -","ErrPasswordsNotIdentical":"Las contraseñas no coinciden","ErrSessionTimedOut":"Tu sesión ha caducado. Por favor, ingresa nuevamente","ErrMissingScope":"No tienes permiso para realizar esta acción","ErrInvalidJson":"Los datos del json son inválidos","ErrSocketFailed":"The WebSocket connection encountered an error, some features might be slow or broken"}')
    },
    "696b": function(e) {
        e.exports = JSON.parse('{"Node":"Node","Nodes":"Nodes","Edit":"Edit Node","Add":"Add Node","Update":"Update Node","Delete":"Delete Node","PublicHost":"Public Host","PublicPort":"Public Port","PrivateHost":"Private Host","PrivatePort":"Private Port","SftpPort":"SFTP Port","SaveConfig":"Save Config","SavePublicKey":"Save Public Key","DeploymentInstruction":"To deploy the node, install PufferPanel on the new server and place the config file in `/etc/pufferpanel/`<br/>Restart PufferPanel on the new server afterwards.","UpdateSuccess":"Successfully updated node","UpdateError":"Error updating node"}')
    },
    "6a6f": function(e, t, r) {
        "use strict";
        r.r(t);
        var a = function() {
                var e = this,
                    t = e.$createElement,
                    r = e._self._c || t;
                return r("div", [0 !== e.fields.length ? r("v-row", e._l(e.fields, (function(t) {
                    return r("v-col", {
                        key: t.name,
                        attrs: {
                            cols: "12"
                        }
                    }, ["map" === t.type || "list" === t.type || t.headline ? r("h4", {
                        domProps: {
                            textContent: e._s(e.getLabel(t))
                        }
                    }) : e._e(), "custom" === t.type ? r(t.component, {
                        tag: "component",
                        attrs: {
                            value: e.value[t.name] || t.default
                        },
                        on: {
                            input: function(r) {
                                return e.onInput(t.name, r)
                            }
                        }
                    }) : "map" === t.type ? r("ui-map-input", {
                        attrs: {
                            value: e.value[t.name] || t.default,
                            "key-label": t.keyLabel ? e.$t(t.keyLabel) : void 0,
                            "value-label": t.valueLabel ? e.$t(t.valueLabel) : void 0
                        },
                        on: {
                            input: function(r) {
                                return e.onInput(t.name, r)
                            }
                        }
                    }) : "list" === t.type ? r("ui-list-input", {
                        attrs: {
                            value: e.value[t.name] || t.default
                        },
                        on: {
                            input: function(r) {
                                return e.onInput(t.name, r)
                            }
                        }
                    }) : void 0 !== t.options ? r("ui-input-suggestions", {
                        attrs: {
                            type: t.type,
                            label: e.getLabel(t),
                            items: t.options,
                            value: e.value[t.name] || t.default
                        },
                        on: {
                            input: function(r) {
                                return e.onInput(t.name, r)
                            }
                        }
                    }) : r("ui-input", {
                        attrs: {
                            type: t.type,
                            label: e.getLabel(t),
                            value: e.value[t.name] || t.default
                        },
                        on: {
                            input: function(r) {
                                return e.onInput(t.name, r)
                            }
                        }
                    })], 1)
                })), 1) : e._e(), 0 === e.fields.length && e.noFieldsText ? r("v-row", [r("v-col", {
                    staticClass: "d-flex justify-center",
                    attrs: {
                        cols: "12"
                    }
                }, [e._v(" " + e._s(e.noFieldsText) + " ")])], 1) : e._e()], 1)
            },
            o = [];
        const n = {
            standard: [],
            tty: [],
            docker: [{
                name: "image",
                type: "text",
                label: "templates.DockerImage",
                default: "pufferpanel/generic"
            }, {
                name: "networkMode",
                type: "text",
                options: ["bridge", "host", "overlay", "macvlan", "none"],
                label: "env.docker.networkMode",
                default: "host"
            }, {
                name: "networkName",
                type: "text",
                default: ""
            }, {
                name: "bindings",
                type: "map",
                keyLabel: "env.docker.HostPath",
                valueLabel: "env.docker.ContainerPath",
                default: {}
            }, {
                name: "portBindings",
                type: "custom",
                component: "ui-docker-port-bindings",
                headline: !0,
                default: []
            }]
        };
        var s = {
                props: {
                    noFieldsText: {
                        type: String,
                        default: () => {}
                    },
                    value: {
                        type: Object,
                        validator: e => void 0 !== n[e.type],
                        required: !0
                    }
                },
                computed: {
                    fields() {
                        return n[this.value.type]
                    }
                },
                mounted() {
                    const e = {};
                    this.fields.map(t => {
                        this.value[t.name] || (e[t.name] = t.default)
                    }),
                    this.$emit("input", {
                        ...this.value,
                        ...e
                    })
                },
                methods: {
                    onInput(e, t) {
                        this.$emit("input", {
                            ...this.value,
                            [e]: t
                        })
                    },
                    getLabel(e) {
                        return e.label ? this.$t(e.label) : this.$t(`env.${this.value.type}.${e.name}`)
                    }
                }
            },
            i = s,
            l = r("2877"),
            d = r("6544"),
            c = r.n(d),
            u = r("62ad"),
            m = r("0fd9"),
            p = Object(l["a"])(i, a, o, !1, null, null, null);
        t["default"] = p.exports;
        c()(p, {
            VCol: u["a"],
            VRow: m["a"]
        })
    },
    "6b00": function(e) {
        e.exports = JSON.parse('{"Id":"ID","Name":"Nombre","Address":"Dirección","Online":"Conectado","Offline":"Desconectado","Loading":"Cargando...","General":"General","Language":"Idioma","SelectLanguage":"Seleccionar Idioma","Settings":"Configuración","Update":"Actualizar","Edit":"Editar","Delete":"Eliminar","Create":"Crear","Save":"Guardar","Saved":"Guardado","SaveFailed":"Error al guardar","Cancel":"Cancelar","Confirm":"Confirmar","Actions":"Acciones","Host":"Servidor","Port":"Puerto","Template":"Plantilla","Options":"Opciones","Collapse":"Colapsar","Copied":"Copiado al portapapeles","Unknown":"Desconocido","Search":"Buscar","Back":"Atrás","Next":"Siguiente","LanguageName":"Español","Details":"Detalles","ErrorDetails":"Detalles del error","HelpTranslate":"Ayúdanos a traducir PufferPanel","DarkMode":"Modo Oscuro","ThemeOptions":"Opciones del tema","Protocol":"Protocolo","Add":"Agregar"}')
    },
    "6bc6": function(e) {
        e.exports = JSON.parse('{"Id":"ID","Name":"İsim","Address":"Adres","Online":"Çevrimiçi","Offline":"Çevrımdışı","Loading":"Yükleniyor...","General":"Genel","Language":"Dil","SelectLanguage":"Dil Seçin","Settings":"Ayarlar","Update":"Güncelle","Edit":"Düzenle","Delete":"Sil","Create":"Oluştur","Save":"Kaydet","Saved":"Kaydedildi","SaveFailed":"Kaydedilemedi","Cancel":"İptal","Confirm":"Onayla","Actions":"Eylemler","Host":"Sunucu","Port":"Port","Template":"Şablon","Options":"Şeçenekler","Collapse":"Çöküş","Copied":"Panoya kopyalandı","Unknown":"Bilinmeyen","Search":"Ara","Back":"Geri","Next":"İleri","LanguageName":"Türkçe","Details":"Detaylar","ErrorDetails":"Hata Detayları","HelpTranslate":"PufferPanel\'i Çevirmemiz için yardım et","DarkMode":"Karanlık Mod","ThemeOptions":"Tema Seçenekleri","Protocol":"Protokol","Add":"Ekle"}')
    },
    "6d8f": function(e) {
        e.exports = JSON.parse('{"NoEnvFields":"There are no environment specific options for this environment","docker":{"name":"Docker","image":"Image","networkMode":"Network Mode","networkName":"Network Name","bindings":"Bindings","portBindings":"Port Bindings","OutsidePort":"Outside Port","InsidePort":"Inside Port","HostPath":"Host Path","ContainerPath":"Container Path"},"standard":{"name":"Standard"},"tty":{"name":"TTY"}}')
    },
    "6e7e": function(e) {
        e.exports = JSON.parse('{"ErrGeneric":"Unknown error","ErrUnknownError":"Unknown error","ErrInvalidCredentials":"Invalid credentials","ErrServiceNotAvailable":"Service not available","ErrEmailNotConfigured":"Email not configured","ErrTokenInvalid":"Token is invalid","ErrClientNotFound":"Client not found","ErrUserNotFound":"User not found","ErrLoginNotPermitted":"Login not permitted","ErrInvalidTokenState":"Invalid token state","ErrSettingNotConfigured":"{setting} is not configured","ErrNoTemplate":"No template with name \'{name}\' was found","ErrServiceInvalidProvider":"{service} does not support {provider}","ErrFieldRequired":"{field} is required","ErrFieldMustBePrintable":"{field} must be printable ascii characters","ErrFieldHasURICharacters":"{field} must not contain characters which cannot be used in URIs","ErrFieldIsInvalidHost":"{field} must be a valid IP or FQDN","ErrFieldIsInvalidIP":"{field} must be a valid IP","ErrFieldTooLarge":"{field} cannot be larger than {max}","ErrFieldTooSmall":"{field} cannot be smaller than {min}","ErrFieldNotBetween":"{field} must be between {min} and {max}","ErrFieldEqual":"{field1} cannot be equal to {field2}","ErrFieldNotEqual":"{field1} is not equal to {field2}","ErrFieldNotEmail":"{field} is not a valid email","ErrFieldLength":"{field} must be at least {length} characters","ErrNoPermission":"You do not have permission to perform this action","ErrDatabaseNotAvailable":"Database is not available","ErrNoNodes":"No nodes available","ErrNoTemplates":"No templates available","ErrPasswordRequirements":"Password must be at least 8 characters","ErrUsernameRequirements":"Username must be at least 3 characters and only contain alphanumerics, _, or -","ErrPasswordsNotIdentical":"Passwords are not the same","ErrSessionTimedOut":"Your session timed out, please log in again","ErrMissingScope":"You are not authorized to perform this action","ErrInvalidJson":"The json data is invalid","ErrSocketFailed":"The WebSocket connection encountered an error, some features might be slow or broken"}')
    },
    "6fbc": function(e) {
        e.exports = JSON.parse('{"ErrGeneric":"Unbekannter Fehler","ErrUnknownError":"Unbekannter Fehler","ErrInvalidCredentials":"Ungültige Anmeldedaten","ErrServiceNotAvailable":"Dienst nicht verfügbar","ErrEmailNotConfigured":"E-Mail nicht konfiguriert","ErrTokenInvalid":"Sicherheitsschlüssel ungültig","ErrClientNotFound":"Client nicht gefunden","ErrUserNotFound":"Benutzer nicht gefunden","ErrLoginNotPermitted":"Login nicht erlaubt","ErrInvalidTokenState":"Ungültiger Sicherheitsschlüssel-Status","ErrSettingNotConfigured":"{setting} ist nicht konfiguriert","ErrNoTemplate":"Es wurde keine Vorlage mit dem Namen \'{name}\' gefunden","ErrServiceInvalidProvider":"{service} unterstützt {provider} nicht","ErrFieldRequired":"{field} ist erforderlich","ErrFieldMustBePrintable":"{field} muss aus druckbare ascii Zeichen bestehen","ErrFieldHasURICharacters":"{field} darf keine Zeichen enthalten, die nicht in URIs verwendet werden können","ErrFieldIsInvalidHost":"{field} muss eine gültige IP oder FQDN sein","ErrFieldIsInvalidIP":"{field} muss eine gültige IP sein","ErrFieldTooLarge":"{field} darf nicht größer als {max} sein","ErrFieldTooSmall":"{field} darf nicht kleiner als {min} sein","ErrFieldNotBetween":"{field} muss zwischen {min} und {max} liegen","ErrFieldEqual":"{field1} kann nicht gleich {field2} sein","ErrFieldNotEqual":"{field1} ist nicht gleich {field2}","ErrFieldNotEmail":"{field} ist keine gültige E-Mail","ErrFieldLength":"{field} muss mindestens {length} Zeichen lang sein","ErrNoPermission":"Du hast keine Berechtigungen, um diese Aktion auszuführen","ErrDatabaseNotAvailable":"Datenbank ist nicht verfügbar","ErrNoNodes":"Keine Knoten verfügbar","ErrNoTemplates":"Keine Vorlagen verfügbar","ErrPasswordRequirements":"Das Passwort muss mindestens {min} Zeichen lang sein","ErrUsernameRequirements":"Der Benutzername muss mindestens {min} Zeichen lang sein und darf nur alphanumerische Zeichen, _, oder - enthalten","ErrPasswordsNotIdentical":"Die Passwörter stimmen nicht überein","ErrSessionTimedOut":"Ihre Sitzung ist abgelaufen, bitte melden Sie sich erneut an","ErrMissingScope":"Du bist nicht berechtigt, diese Aktion auszuführen","ErrInvalidJson":"Die json-Daten sind ungültig","ErrSocketFailed":"Bei der WebSocket-Verbindung ist ein Fehler aufgetreten. Einige Funktionen sind möglicherweise langsam oder fehlerhaft"}')
    },
    "705a": function(e) {
        e.exports = JSON.parse('{"Node":"節點","Nodes":"節點","Edit":"編輯節點","Add":"新增節點","Update":"更新節點","Delete":"刪除節點","PublicHost":"公用主機","PublicPort":"公用連接埠","PrivateHost":"私用主機","PrivatePort":"私用連接埠","SftpPort":"SFTP連接埠","SaveConfig":"儲存設定","SavePublicKey":"儲存公鑰","DeploymentInstruction":"要部署該節點，請在新伺服器上安裝PufferPanel，然後將配置文件放在`/ etc / pufferpanel /`目錄中<br/>然後在新伺服器上重新啟動PufferPanel。","UpdateSuccess":"已成功更新節點","UpdateError":"發生錯誤，無法更新節點"}')
    },
    7074: function(e) {
        e.exports = JSON.parse('{"Id":"ID","Name":"Namn","Address":"Adress","Online":"Online","Offline":"Offline","Loading":"Laddar...","General":"Allmänt","Language":"Språk","SelectLanguage":"Välj Språk","Settings":"Inställningar","Update":"Uppdatera","Edit":"Redigera","Delete":"Ta bort","Create":"Skapa","Save":"Spara","Saved":"Sparat","SaveFailed":"Kunde inte spara","Cancel":"Avbryt","Confirm":"Bekräfta","Actions":"Åtgärder","Host":"Värd","Port":"Port","Template":"Mall","Options":"Alternativ","Collapse":"Förminska","Copied":"Kopierad till urklipp","Unknown":"Okänt","Search":"Sök","Back":"Tillbaka","Next":"Nästa","LanguageName":"Svenska","Details":"Detaljer","ErrorDetails":"Felinformation","HelpTranslate":"Hjälp oss översätta PufferPanel","DarkMode":"Mörkläge","ThemeOptions":"Tema Inställningar","Protocol":"Protokoll","Add":"Add"}')
    },
    "70b6": function(e) {
        e.exports = JSON.parse('{"FileManager":"File Manager","NewFolder":"New Folder","NewFile":"New File","LastModified":"Last Modified","ConfirmDelete":"Are you sure you want to delete this file?","Upload":"Upload","Download":"Download","Size":"Size","NoFiles":"There are no files here yet, go and create some for example by clicking the install button at the top of the page","FileLoadFailed":"Failed loading file"}')
    },
    "71d94": function(e, t, r) {
        "use strict";
        r.r(t);
        var a = function() {
                var e = this,
                    t = e.$createElement,
                    r = e._self._c || t;
                return r("v-card", [r("v-card-title", {
                    domProps: {
                        textContent: e._s(e.$t("users.Users"))
                    }
                }), r("v-card-text", [r("v-row", e._l(e.users, (function(t, a) {
                    return r("v-col", {
                        key: a,
                        attrs: {
                            cols: "12",
                            md: "6"
                        }
                    }, [r("v-card", {
                        staticClass: "mb-4",
                        attrs: {
                            outlined: ""
                        }
                    }, [r("v-card-title", [t.new ? r("ui-input", {
                        attrs: {
                            "hide-details": "",
                            type: "email",
                            label: e.$t("users.Email"),
                            icon: "mdi-email"
                        },
                        on: {
                            keyup: function(r) {
                                return !r.type.indexOf("key") && e._k(r.keyCode, "enter", 13, r.key, "Enter") ? null : e.updateUser(t)
                            }
                        },
                        model: {
                            value: t.email,
                            callback: function(r) {
                                e.$set(t, "email", r)
                            },
                            expression: "user.email"
                        }
                    }) : e._e(), t.new ? e._e() : r("span", {
                        domProps: {
                            textContent: e._s(t.username || t.email)
                        }
                    }), t.new ? e._e() : r("v-btn", {
                        attrs: {
                            icon: ""
                        },
                        on: {
                            click: function(r) {
                                return e.toggleEdit(t.username)
                            }
                        }
                    }, [r("v-icon", {
                        domProps: {
                            textContent: e._s(e.editUsers.indexOf(t.username) > -1 ? "mdi-close" : "mdi-pencil")
                        }
                    })], 1)], 1), t.new || e.editUsers.indexOf(t.username) > -1 ? r("v-card-text", [r("v-row", e._l(e.options, (function(a) {
                        return r("v-col", {
                            key: a.value,
                            staticClass: "pt-1 pb-0",
                            attrs: {
                                cols: "12",
                                md: "6"
                            }
                        }, [r("ui-switch", {
                            attrs: {
                                label: a.text,
                                color: "primary"
                            },
                            model: {
                                value: t[a.value],
                                callback: function(r) {
                                    e.$set(t, a.value, r)
                                },
                                expression: "user[option.value]"
                            }
                        })], 1)
                    })), 1), r("v-row", {
                        staticClass: "mt-2"
                    }, [r("v-col", {
                        attrs: {
                            cols: "12",
                            md: "6"
                        }
                    }, [r("v-btn", {
                        attrs: {
                            large: "",
                            block: "",
                            color: "success"
                        },
                        domProps: {
                            textContent: e._s(t.new ? e.$t("common.Save") : e.$t("common.Update"))
                        },
                        on: {
                            click: function(r) {
                                return e.updateUser(t)
                            }
                        }
                    })], 1), r("v-col", {
                        attrs: {
                            cols: "12",
                            md: "6"
                        }
                    }, [r("v-btn", {
                        attrs: {
                            large: "",
                            block: "",
                            color: "error"
                        },
                        domProps: {
                            textContent: e._s(t.new ? e.$t("common.Cancel") : e.$t("common.Delete"))
                        },
                        on: {
                            click: function(r) {
                                return e.deleteUser(t)
                            }
                        }
                    })], 1)], 1)], 1) : e._e()], 1)], 1)
                })), 1), r("v-row", [r("v-col", [r("v-btn", {
                    attrs: {
                        block: ""
                    },
                    domProps: {
                        textContent: e._s(e.$t("users.Add"))
                    },
                    on: {
                        click: function(t) {
                            return e.addUser()
                        }
                    }
                })], 1)], 1)], 1)], 1)
            },
            o = [],
            n = (r("ddb0"), {
                props: {
                    server: {
                        type: Object,
                        default: () => {}
                    }
                },
                data() {
                    return {
                        users: [],
                        editUsers: [],
                        options: [{
                            text: this.$t("scopes.ServersEdit"),
                            value: "editServerData"
                        }, {
                            text: this.$t("scopes.ServersInstall"),
                            value: "installServer"
                        }, {
                            text: this.$t("scopes.ServersConsole"),
                            value: "viewServerConsole"
                        }, {
                            text: this.$t("scopes.ServersConsoleSend"),
                            value: "sendServerConsole"
                        }, {
                            text: this.$t("scopes.ServersStop"),
                            value: "stopServer"
                        }, {
                            text: this.$t("scopes.ServersStart"),
                            value: "startServer"
                        }, {
                            text: this.$t("scopes.ServersStat"),
                            value: "viewServerStats"
                        }, {
                            text: this.$t("scopes.ServersFiles"),
                            value: "sftpServer"
                        }, {
                            text: this.$t("scopes.ServersFilesGet"),
                            value: "viewServerFiles"
                        }, {
                            text: this.$t("scopes.ServersFilesPut"),
                            value: "putServerFiles"
                        }, {
                            text: this.$t("scopes.ServersEditUsers"),
                            value: "editServerUsers"
                        }]
                    }
                },
                mounted() {
                    this.loadUsers()
                },
                methods: {
                    async loadUsers() {
                        this.users = await this.$api.getServerUsers(this.server.id)
                    },
                    addUser() {
                        const e = {
                            new: !0,
                            email: ""
                        };
                        for (const t in this.options)
                            e[this.options[t].value] = !1;
                        this.users.push(e)
                    },
                    async updateUser(e) {
                        if (!e.new || e.email && "" !== e.email) {
                            for (const t of Object.keys(e))
                                e[t] = "true" === e[t] || "false" !== e[t] && e[t];
                            await this.$api.updateServerUser(this.server.id, e),
                            this.$toast.success(this.$t("common.Saved")),
                            this.loadUsers()
                        } else
                            this.$toast.error(this.$t("users.NoEmailGiven"))
                    },
                    toggleEdit(e) {
                        this.editUsers.indexOf(e) > -1 ? this.editUsers.splice(this.editUsers.indexOf(e), 1) : this.editUsers.push(e)
                    },
                    async deleteUser(e) {
                        e.new ? this.$delete(this.users, this.users.indexOf(e)) : (await this.$api.deleteServerUser(this.server.id, e.email), this.loadUsers())
                    }
                }
            }),
            s = n,
            i = r("2877"),
            l = r("6544"),
            d = r.n(l),
            c = r("8336"),
            u = r("b0af"),
            m = r("99d9"),
            p = r("62ad"),
            v = r("132d"),
            f = r("0fd9"),
            S = Object(i["a"])(s, a, o, !1, null, null, null);
        t["default"] = S.exports;
        d()(S, {
            VBtn: c["a"],
            VCard: u["a"],
            VCardText: m["c"],
            VCardTitle: m["d"],
            VCol: p["a"],
            VIcon: v["a"],
            VRow: f["a"]
        })
    },
    7295: function(e) {
        e.exports = JSON.parse('{"FileManager":"Менеджер файлов","NewFolder":"Новая папка","NewFile":"Новый файл","LastModified":"Последнее изменение","ConfirmDelete":"Вы уверены, что хотите удалить этот файл?","Upload":"Загрузить","Download":"Скачать","Size":"Размер","NoFiles":"Здесь пока нет файлов, для появления файлов, к примеру, вы можете выполнить установку в верхней части страницы","FileLoadFailed":"Ошибка загрузки файла"}')
    },
    7306: function(e) {
        e.exports = JSON.parse('{"Templates":"Modelli","NoTemplates":"Non ci sono ancora modelli qui","Deleted":"Template eliminato","New":"Crea nuovo modello","Edit":"Modifica modello","Editor":"Editor","Json":"JSON","Display":"Mostra Nome","Type":"Tipo","Variables":"Variabili","Install":"Installa","AddInstallStep":"Aggiungi Fase di Installazione","DeleteInstallStep":"Elimina Fase di Installazione","Description":"Descrizione","DataType":"Tipo di Dati","DefaultValue":"Valore Predefinito","Required":"Obbligatorio","UserEditable":"Gli utenti possono modificare","Value":"Valore","AddOption":"Aggiungi un\'opzione","AddCommand":"Aggiungi comando","Filename":"Nome del file","Content":"Contenuto","Source":"Fonte","Target":"Obiettivo","Version":"Versione","ReleaseType":"Tipo di Versione","AddFile":"Aggiungi file","AddVariable":"Aggiungi variabile","Environment":"Environment","Environments":"Environments","AddEnvironment":"Aggiungi ambiente","DefaultEnvironment":"Default environment","AddEnvVar":"Aggiungi variabile env","EnvVars":"Variabili ambientali","DockerImage":"Immagine Docker","SaveSuccess":"Modello Salvato","VarNameNoSpaces":"Un nome della variabile non può essere vuoto o contenere spazi","SupportedEnvironments":"Ambienti Supportati","RunConfig":"Esegui Configurazione","PreHook":"Hook Pre Esecuzione","PostHook":"Hook Post Esecuzione","AddPreStep":"Aggiungi Fase Pre-Esecuzione","AddPostStep":"Aggiungi Fase Post-Esecuzione","DeletePreStep":"Elimina Fase Pre-Esecuzione","DeletePostStep":"Elimina Fase Post-Esecuzione","Shutdown":"Spegnimento","Command":"Comando","Arguments":"Argomenti","AddArgument":"Aggiungi un argomento","import":{"OverrideWarning":"AVVISO: I modelli importati SOVRASCRIVERANNO i modelli esistenti con lo stesso ID","Import":"Importa modelli","Tooltip":"Importa modelli dalla repository ufficiale","Select":"Seleziona modelli da importare","Started":"Impostazione modelli, si prega di attendere un momento","Successful":"Modello {template} importato correttamente","NoTemplatesTitle":"Vuoi importare i modelli?","NoTemplatesContent":"Attualmente non hai alcun modello. I modelli sono necessari per creare i server.<br/>Vuoi importare alcuni modelli dalla repository dei modelli ufficiale di PufferPanel adesso?"},"stop":{"Command":"Comando","Signal":"Segnale"},"processors":{"download":{"ProcessorName":"Scarica","files":"File"},"command":{"ProcessorName":"Esegui un comando","commands":"Comandi"},"alterfile":{"ProcessorName":"Cambia file","regex":"Treat search as RegEx","search":"Text to search","replace":"Replace with"},"writefile":{"ProcessorName":"Write to file","text":"Contenuto"},"move":{"ProcessorName":"Sposta il file","source":"Source","target":"Target"},"mkdir":{"ProcessorName":"Crea una cartella"},"mojangdl":{"ProcessorName":"Download Minecraft"},"forgedl":{"ProcessorName":"Download Minecraft Forge"},"spongeforgedl":{"ProcessorName":"Download Minecraft SpongeForge","releaseType":"Release Type"},"fabricdl":{"ProcessorName":"Download Minecraft Fabric"}}}')
    },
    "735e": function(e) {
        e.exports = JSON.parse('{"Server":"Server","NoServers":"There are no servers you have access to","Servers":"Servers","Add":"Add Server","Console":"Console","Controls":"Controls","SFTPInfo":"SFTP Information","Restart":"Restart","Start":"Start","Stop":"Stop","Kill":"Kill","Install":"Install","Send":"Send","Pause":"Pause","CPU":"CPU","Memory":"Memory","Name":"Server Name","SelectNode":"Please select node","SelectTemplate":"Please select template","SelectThisTemplate":"Use this template","SelectUser":"Please select user","Environment":"Environment","SelectEnvironment":"Please select environment","TypeUsername":"Type a username","AdminControls":"Admin Controls","Settings":"Settings","NoEditableVars":"This server does not have variables you can edit","ConfirmDelete":"Do you really want to delete this server? (this cannot be undone)","Delete":"Delete Server","Deleted":"Deleted Server","NoReadme":"No readme available for this template","SftpConnection":"Connect to SFTP","EditDefinition":"Edit Server Definition","Reload":"Reload server data from disk","Reloaded":"Reloaded server data","Autostart":"Start the server when the node starts","Autorestart":"Restart the server when it stops normally","Autorecover":"Restart the server when it crashes"}')
    },
    7380: function(e) {
        e.exports = JSON.parse('{"ErrGeneric":"알수 었는 오류","ErrUnknownError":"알 수 없는 오류","ErrInvalidCredentials":"로그인 정보가 틀립니다","ErrServiceNotAvailable":"서비스를 이용할 수 없습니다","ErrEmailNotConfigured":"이메일이 설정되지 않았습니다","ErrTokenInvalid":"토큰이 잘못되었습니다","ErrClientNotFound":"클라이언트를 찾을 수 없습니다","ErrUserNotFound":"유저를 찾을 수 없습니다","ErrLoginNotPermitted":"로그인이 허용되지 않았습니다","ErrInvalidTokenState":"토큰 상태가 잘못되었습니다","ErrSettingNotConfigured":"{setting} 이(가) 설정되지 않았습니다","ErrNoTemplate":"\'{name}\' 라는 이름의 템플릿을 찾을 수 없습니다","ErrServiceInvalidProvider":"{service} 이(가) {provider} 을(를) 지원하지 않습니다.","ErrFieldRequired":"{field} 는 필수입니다.","ErrFieldMustBePrintable":"{field} 는 ascii 문자로 출력 가능해야 합니다.","ErrFieldHasURICharacters":"{field} 는 URI로 사용될 수 없는 문자열이 있으면 안됩니다.","ErrFieldIsInvalidHost":"{field} 는 IP나 FQDN이어야 합니다.","ErrFieldIsInvalidIP":"{field} 는 유효한 IP여야 합니다","ErrFieldTooLarge":"{field} 는 {max} 보다 클 수 없습니다","ErrFieldTooSmall":"{field} 는 {min} 보다 작을 수 없습니다","ErrFieldNotBetween":"{field} 는 {min} 과 {max} 사이어야 합니다.","ErrFieldEqual":"{field1} 은(는) {field2} 와 같을 수 없습니다.","ErrFieldNotEqual":"{field1} 이 {field2} 와 같지 않습니다.","ErrFieldNotEmail":"{field} 은(는) 유효한 이메일이 아닙니다.","ErrFieldLength":"{field} 는 최소 {length} 글자여야 합니다.","ErrNoPermission":"당신은 이 작업을 수행할 권한이 없습니다.","ErrDatabaseNotAvailable":"데이터베이스를 이용할 수 었습니다.","ErrNoNodes":"사용 가능한 노드가 없습니다.","ErrNoTemplates":"사용 가능한 템플릿이 없습니다.","ErrPasswordRequirements":"비밀번호는 8글자 이상이어야 합니다.","ErrUsernameRequirements":"닉네임은 3글자 이상이어야 하고 알파벳, 문자 또는 _, -만을 포함해야 합니다.","ErrPasswordsNotIdentical":"암호가 같지 않습니다.","ErrSessionTimedOut":"세션이 종료되었습니다. 다시 로그인 해주세요.","ErrMissingScope":"이 작업을 수행할 권한이 없습니다.","ErrInvalidJson":"Json 데이터가 유효하지 않습니다.","ErrSocketFailed":"웹소켓 연결에서 오류가 발생했습니다, 일부 기능들이 느리거나 작동하지 않을 수 있습니다."}')
    },
    "73e3": function(e) {
        e.exports = JSON.parse('{"Templates":"テンプレート一覧","NoTemplates":"テンプレートがありません．","Deleted":"Template deleted","New":"新規テンプレート","Edit":"テンプレートを編集","Editor":"編集者","Json":"JSON","Display":"表示名","Type":"種類","Variables":"変数","Install":"インストール","AddInstallStep":"インストール手順を追加","DeleteInstallStep":"インストールステップを削除","Description":"説明","DataType":"データ型","DefaultValue":"初期値","Required":"入力必要項目","UserEditable":"ユーザーが編集できる","Value":"値","AddOption":"オプションを追加","AddCommand":"コマンドを追加","Filename":"ファイル名","Content":"内容","Source":"ソース","Target":"ターゲット","Version":"バージョン","ReleaseType":"リリースの種類","AddFile":"ファイルを追加","AddVariable":"変数を追加","Environment":"Environment","Environments":"Environments","AddEnvironment":"使用環境の追加","DefaultEnvironment":"Default environment","AddEnvVar":"新規変数を追加","EnvVars":"環境変数","DockerImage":"Docker イメージ","SaveSuccess":"保存されたテンプレート","VarNameNoSpaces":"変数名に空白またはスペースを含めることはできません","SupportedEnvironments":"サポートされている環境","RunConfig":"設定を実行","PreHook":"Pre Run Hook","PostHook":"Post Run Hook","AddPreStep":"事前実行ステップを追加","AddPostStep":"ポストランステップを追加","DeletePreStep":"前の実行ステップを削除","DeletePostStep":"ポストランステップを削除","Shutdown":"シャットダウン","Command":"コマンド","Arguments":"引数","AddArgument":"引数を追加","import":{"OverrideWarning":"警告: インポートされたテンプレートは、同じIDの既存のテンプレートに上書きされます","Import":"テンプレートをインポートします","Tooltip":"公式リポジトリからテンプレートをインポートします","Select":"インポートするテンプレートを選択してください","Started":"テンプレートをインポートしています。しばらくお待ちください。","Successful":"テンプレート {template} を正常にインポートしました","NoTemplatesTitle":"テンプレートをインポートしますか？","NoTemplatesContent":"現在テンプレートがありません。テンプレートはサーバーを作成するために必要です。<br/>PufferPanel公式テンプレートリポジトリからテンプレートをインポートしますか？"},"stop":{"Command":"コマンド","Signal":"シグナル"},"processors":{"download":{"ProcessorName":"Download","files":"Files"},"command":{"ProcessorName":"Run Command","commands":"Commands"},"alterfile":{"ProcessorName":"Change file","regex":"Treat search as RegEx","search":"Text to search","replace":"Replace with"},"writefile":{"ProcessorName":"Write to file","text":"Content"},"move":{"ProcessorName":"Move File","source":"Source","target":"Target"},"mkdir":{"ProcessorName":"Create Directory"},"mojangdl":{"ProcessorName":"Download Minecraft"},"forgedl":{"ProcessorName":"Download Minecraft Forge"},"spongeforgedl":{"ProcessorName":"Download Minecraft SpongeForge","releaseType":"Release Type"},"fabricdl":{"ProcessorName":"Download Minecraft Fabric"}}}')
    },
    "753a": function(e, t, r) {
        "use strict";
        r("257d")
    },
    "753c": function(e, t, r) {
        "use strict";
        r.r(t);
        var a = function() {
                var e = this,
                    t = e.$createElement,
                    r = e._self._c || t;
                return r("v-card", [r("v-card-title", [r("span", {
                    domProps: {
                        textContent: e._s(e.$t("servers.Console"))
                    }
                }), r("div", {
                    staticClass: "flex-grow-1"
                }), r("v-btn", {
                    attrs: {
                        icon: ""
                    },
                    on: {
                        click: e.popoutConsole
                    }
                }, [r("v-icon", {
                    attrs: {
                        dark: e.isDark(),
                        light: !e.isDark()
                    }
                }, [e._v(" mdi-pause ")])], 1)], 1), r("v-card-text", [r("div", {
                    staticClass: "console",
                    staticStyle: {
                        "min-height": "25em",
                        "max-height": "40em"
                    },
                    domProps: {
                        innerHTML: e._s(e.console)
                    }
                }), e.server.permissions.sendServerConsole || e.isAdmin() ? r("ui-input", {
                    staticClass: "pt-2",
                    attrs: {
                        placeholder: "Command...",
                        "end-icon": "mdi-send"
                    },
                    on: {
                        "click:append": e.sendCommand,
                        keyup: function(t) {
                            return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.sendCommand(t)
                        }
                    },
                    model: {
                        value: e.consoleCommand,
                        callback: function(t) {
                            e.consoleCommand = t
                        },
                        expression: "consoleCommand"
                    }
                }) : e._e(), r("v-overlay", {
                    attrs: {
                        value: e.consolePopup
                    }
                }, [r("v-card", {
                    staticClass: "d-flex flex-column",
                    attrs: {
                        dark: e.isDark(),
                        light: !e.isDark(),
                        height: "90vh",
                        width: "90vw"
                    }
                }, [r("v-card-title", [r("span", {
                    domProps: {
                        textContent: e._s(e.$t("servers.Console"))
                    }
                }), r("div", {
                    staticClass: "flex-grow-1"
                }), r("v-btn", {
                    attrs: {
                        icon: ""
                    },
                    on: {
                        click: function(t) {
                            e.consolePopup = !1
                        }
                    }
                }, [r("v-icon", [e._v("mdi-close")])], 1)], 1), r("v-card-text", {
                    staticClass: "flex-grow-1",
                    attrs: {
                        id: "popup"
                    }
                }, [r("div", {
                    staticClass: "console",
                    staticStyle: {
                        height: "80vh"
                    },
                    domProps: {
                        innerHTML: e._s(e.console)
                    }
                })])], 1)], 1)], 1)], 1)
            },
            o = [],
            n = (r("5319"), r("1386")),
            s = r.n(n),
            i = r("96ea");
        const l = new s.a;
        var d = {
                props: {
                    server: {
                        type: Object,
                        default: () => {}
                    }
                },
                data() {
                    return {
                        console: "",
                        consoleReadonly: "",
                        maxConsoleLength: 1e6,
                        consoleCommand: "",
                        consolePopup: !1,
                        lastConsoleTime: 0
                    }
                },
                mounted() {
                    l.ansi_to_html("[m"),
                    this.$api.addServerListener(this.server.id, "console", e => {
                        this.lastConsoleTime = "epoch" in e ? e.epoch : Math.floor(Date.now() / 1e3),
                        this.parseConsole(e)
                    }),
                    this.$api.startServerTask(this.server.id, () => {
                        this.$api.serverConnectionNeedsPolling(this.server.id) && this.$api.requestServerConsoleReplay(this.server.id, this.lastConsoleTime)
                    }, 5e3),
                    this.$api.requestServerConsoleReplay(this.server.id)
                },
                methods: {
                    parseConsole(e) {
                        let t = this.console;
                        const r = Array.isArray(e.logs) ? e.logs : [e.logs];
                        r.forEach(e => {
                            t += l.ansi_to_html(e).replace(/\n/g, "<br>")
                        }),
                        t.length > this.maxConsoleLength && (t = t.substring(t.length - this.maxConsoleLength, t.length)),
                        this.console = t;
                        const a = this.$el.querySelector(".console");
                        this.$nextTick(() => {
                            a.scrollTop = a.scrollHeight
                        })
                    },
                    popoutConsole() {
                        this.consoleReadonly = this.console,
                        this.consolePopup = !0,
                        this.$nextTick(() => {
                            this.$el.querySelector("#popup .console").scrollTop = this.$el.querySelector("#popup .console").scrollHeight
                        })
                    },
                    sendCommand() {
                        this.$api.sendServerCommand(this.server.id, this.consoleCommand),
                        this.consoleCommand = ""
                    },
                    isDark: i["a"]
                }
            },
            c = d,
            u = (r("753a"), r("2877")),
            m = r("6544"),
            p = r.n(m),
            v = r("8336"),
            f = r("b0af"),
            S = r("99d9"),
            g = r("132d"),
            h = r("a797"),
            E = Object(u["a"])(c, a, o, !1, null, null, null);
        t["default"] = E.exports;
        p()(E, {
            VBtn: v["a"],
            VCard: f["a"],
            VCardText: S["c"],
            VCardTitle: S["d"],
            VIcon: g["a"],
            VOverlay: h["a"]
        })
    },
    7575: function(e) {
        e.exports = JSON.parse('{"Node":"Csomópont","Nodes":"Csomópontok","Edit":"Csomópont szerkesztése","Add":"Új csomópont","Update":"Csomópont frissítése","Delete":"Csomópont törlése","PublicHost":"Nyilvános kiszolgáló","PublicPort":"Nyilvános port","PrivateHost":"Privát kiszolgáló","PrivatePort":"Privát port","SftpPort":"SFTP port","SaveConfig":"Konfiguráció mentése","SavePublicKey":"Nyílvános kulcs mentése","DeploymentInstruction":"A csomópont berendezéséhez telepítse a PufferPanelt az új szerveren és helyezze a konfigurációs fájlt a következő helyre: `/etc/pufferpanel/`<br/>Majd indítsa újra a PufferPanelt az új szerveren.","UpdateSuccess":"Csomópont sikeresen frissítve","UpdateError":"Hiba történt a csomópont frissítése közben"}')
    },
    "76ca": function(e) {
        e.exports = JSON.parse('{"Id":"ID","Name":"Имя","Address":"Адрес","Online":"Онлайн","Offline":"Офлайн","Loading":"Загрузка...","General":"Общее","Language":"Язык","SelectLanguage":"Выбрать язык","Settings":"Настройки","Update":"Обновление","Edit":"Изменить","Delete":"Удалить","Create":"Создать","Save":"Сохранить","Saved":"Сохранено","SaveFailed":"Не удалось сохранить","Cancel":"Отменить","Confirm":"Подтвердить","Actions":"Действия","Host":"Хост","Port":"Порт","Template":"Шаблон","Options":"Опции","Collapse":"Свернуть","Copied":"Скопировано в буфер обмена","Unknown":"Неизвестно","Search":"Поиск","Back":"Назад","Next":"Дальше","LanguageName":"Русский","Details":"Подробности","ErrorDetails":"Сведения об ошибке","HelpTranslate":"Помогите нам перевести PufferPanel","DarkMode":"Тёмная тема","ThemeOptions":"Настройки темы","Protocol":"Протокол","Add":"Добавить"}')
    },
    7743: function(e) {
        e.exports = JSON.parse('{"Templates":"Templates","NoTemplates":"There are no templates here yet","Deleted":"Template deleted","New":"Create new template","Edit":"Edit template","Editor":"Editor","Json":"JSON","Display":"Display Name","Type":"Type","Variables":"Variables","Install":"Install","AddInstallStep":"Add Install Step","DeleteInstallStep":"Delete Install Step","Description":"Description","DataType":"Data Type","DefaultValue":"Default Value","Required":"Required","UserEditable":"Users can edit","Value":"Value","AddOption":"Add an option","AddCommand":"Add command","Filename":"Filename","Content":"Content","Source":"Source","Target":"Target","Version":"Version","ReleaseType":"Release Type","AddFile":"Add file","AddVariable":"Add variable","Environment":"Environment","Environments":"Environments","AddEnvironment":"Add environment","DefaultEnvironment":"Default environment","AddEnvVar":"Add env variable","EnvVars":"Environment variables","DockerImage":"Docker Image","SaveSuccess":"Saved Template","VarNameNoSpaces":"A variable name cannot be empty or contain spaces","SupportedEnvironments":"Supported Environments","RunConfig":"Run Configuration","PreHook":"Pre Run Hook","PostHook":"Post Run Hook","AddPreStep":"Add Pre Run Step","AddPostStep":"Add Post Run Step","DeletePreStep":"Delete Pre Run Step","DeletePostStep":"Delete Post Run Step","Shutdown":"Shutdown","Command":"Command","Arguments":"Arguments","AddArgument":"Add an argument","import":{"OverrideWarning":"WARNING: Imported templates WILL overwrite existing templates with the same ID","Import":"Import templates","Tooltip":"Import templates from the official repository","Select":"Select templates to import","Started":"Importing templates, please wait a moment","Successful":"Successfully imported template {template}","NoTemplatesTitle":"Do you want to import templates?","NoTemplatesContent":"You currently don\'t have any templates. Templates are necessary to create servers.<br/>Do you want to import some templates from the official PufferPanel templates repository now?"},"stop":{"Command":"Command","Signal":"Signal"},"processors":{"download":{"ProcessorName":"Download","files":"Files"},"command":{"ProcessorName":"Run Command","commands":"Commands"},"alterfile":{"ProcessorName":"Change file","regex":"Treat search as RegEx","search":"Text to search","replace":"Replace with"},"writefile":{"ProcessorName":"Write to file","text":"Content"},"move":{"ProcessorName":"Move File","source":"Source","target":"Target"},"mkdir":{"ProcessorName":"Create Directory"},"mojangdl":{"ProcessorName":"Download Minecraft"},"forgedl":{"ProcessorName":"Download Minecraft Forge"},"spongeforgedl":{"ProcessorName":"Download Minecraft SpongeForge","releaseType":"Release Type"},"fabricdl":{"ProcessorName":"Download Minecraft Fabric"}}}')
    },
    7765: function(e) {
        e.exports = JSON.parse('{"Node":"Knoten","Nodes":"Knoten","Edit":"Knoten bearbeiten","Add":"Knoten hinzufügen","Update":"Knoten aktualisieren","Delete":"Knoten löschen","PublicHost":"Öffentlicher Host","PublicPort":"Öffentlicher Port","PrivateHost":"Privater Host","PrivatePort":"Privater Port","SftpPort":"SFTP-Port","SaveConfig":"Konfiguration speichern","SavePublicKey":"Öffentlichen Schlüssel speichern","DeploymentInstruction":"Um den Knoten bereitzustellen, installieren Sie PufferPanel auf dem neuen Server und platzieren Sie die Konfigurationsdatei in `/etc/pufferpanel/`<br/>Starten Sie PufferPanel anschließend auf dem neuen Server neu.","UpdateSuccess":"Knoten erfolgreich aktualisiert","UpdateError":"Fehler beim Aktualisieren des Knotens"}')
    },
    7912: function(e) {
        e.exports = JSON.parse('{"NoEnvFields":"Es gibt keine umgebungsspezifischen Optionen für diese Umgebung","docker":{"name":"Docker","image":"Image","networkMode":"Netzwerkmodus","networkName":"Netzwerkname","bindings":"Bindung","portBindings":"Port Bindungen","OutsidePort":"Externer Port","InsidePort":"Interner Port","HostPath":"Hostpfad","ContainerPath":"Container-Pfad"},"standard":{"name":"Standard"},"tty":{"name":"TTY"}}')
    },
    7952: function(e) {
        e.exports = JSON.parse('{"ErrGeneric":"Unknown error","ErrUnknownError":"Unknown error","ErrInvalidCredentials":"Invalid credentials","ErrServiceNotAvailable":"Service not available","ErrEmailNotConfigured":"Email not configured","ErrTokenInvalid":"Token is invalid","ErrClientNotFound":"Client not found","ErrUserNotFound":"User not found","ErrLoginNotPermitted":"Login not permitted","ErrInvalidTokenState":"Invalid token state","ErrSettingNotConfigured":"{setting} is not configured","ErrNoTemplate":"No template with name \'{name}\' was found","ErrServiceInvalidProvider":"{service} does not support {provider}","ErrFieldRequired":"{field} is required","ErrFieldMustBePrintable":"{field} must be printable ascii characters","ErrFieldHasURICharacters":"{field} must not contain characters which cannot be used in URIs","ErrFieldIsInvalidHost":"{field} must be a valid IP or FQDN","ErrFieldIsInvalidIP":"{field} must be a valid IP","ErrFieldTooLarge":"{field} cannot be larger than {max}","ErrFieldTooSmall":"{field} cannot be smaller than {min}","ErrFieldNotBetween":"{field} must be between {min} and {max}","ErrFieldEqual":"{field1} cannot be equal to {field2}","ErrFieldNotEqual":"{field1} is not equal to {field2}","ErrFieldNotEmail":"{field} is not a valid email","ErrFieldLength":"{field} must be at least {length} characters","ErrNoPermission":"You do not have permission to perform this action","ErrDatabaseNotAvailable":"Database is not available","ErrNoNodes":"No nodes available","ErrNoTemplates":"No templates available","ErrPasswordRequirements":"Password must be at least 8 characters","ErrUsernameRequirements":"Username must be at least 3 characters and only contain alphanumerics, _, or -","ErrPasswordsNotIdentical":"Passwords are not the same","ErrSessionTimedOut":"Your session timed out, please log in again","ErrMissingScope":"You are not authorized to perform this action","ErrInvalidJson":"The json data is invalid","ErrSocketFailed":"The WebSocket connection encountered an error, some features might be slow or broken"}')
    },
    "79f8": function(e) {
        e.exports = JSON.parse('{"Node":"Sõlm","Nodes":"Sõlmed","Edit":"Muuda Sõlme","Add":"Lisa Sõlm","Update":"Uuenda Sõlme","Delete":"Kustuta Sõlm","PublicHost":"Avalik Host","PublicPort":"Avalik Port","PrivateHost":"Privaatne Host","PrivatePort":"Privaatne Port","SftpPort":"SFTP Port","SaveConfig":"Salvesta Konfiguratsioon","SavePublicKey":"Salvesta Avalik Võti","DeploymentInstruction":"Et juurutada sõlme, paigalda PufferPanel uuele serverile ja pane konfiguratsioon asukohta `/etc/pufferpanel/`<br/>Taaskäivita PufferPanel uuel serveril pärast.","UpdateSuccess":"Sõlm edukalt muudetud","UpdateError":"Sõlme uuendamise viga"}')
    },
    "7c0e": function(e) {
        e.exports = JSON.parse('{"ErrGeneric":"Nieznany błąd","ErrUnknownError":"Nieznany błąd","ErrInvalidCredentials":"Nieprawidłowe dane logowania","ErrServiceNotAvailable":"Usługa niedostępna","ErrEmailNotConfigured":"Email nie skonfigurowany","ErrTokenInvalid":"Token jest nieprawidłowy","ErrClientNotFound":"Nie znaleziono klienta","ErrUserNotFound":"Nie znaleziono użytkownika","ErrLoginNotPermitted":"Logowanie niedozwolone","ErrInvalidTokenState":"Nieprawidłowy stan tokenu","ErrSettingNotConfigured":"{setting} nie jest skonfigurowany","ErrNoTemplate":"Nie znaleziono szablonu o nazwie \'{name}\'","ErrServiceInvalidProvider":"{service} nie obsługuje {provider}","ErrFieldRequired":"Pole {field} jest wymagane","ErrFieldMustBePrintable":"{field} musi być drukowanymi znakami ascii","ErrFieldHasURICharacters":"{field} nie może zawierać znaków, które nie mogą być użyte w URI","ErrFieldIsInvalidHost":"{field} musi być prawidłowym adresem IP lub FQDN","ErrFieldIsInvalidIP":"{field} musi być prawidłowym adresem IP","ErrFieldTooLarge":"{field} nie może być większy niż {max}","ErrFieldTooSmall":"{field} nie może być mniejszy niż {min}","ErrFieldNotBetween":"{field} musi być pomiędzy {min} a {max}","ErrFieldEqual":"{field1} nie może być równe {field2}","ErrFieldNotEqual":"{field1} nie jest równe {field2}","ErrFieldNotEmail":"{field} nie jest prawidłowym adresem e-mail","ErrFieldLength":"{field} musi mieć co najmniej {length} znaków","ErrNoPermission":"Nie masz uprawnień do wykonania tej akcji","ErrDatabaseNotAvailable":"Baza danych nie jest dostępna","ErrNoNodes":"Węzły nie są dostępne","ErrNoTemplates":"Brak dostępnych szablonów","ErrPasswordRequirements":"Hasło musi zawierać co najmniej {min} znaków","ErrUsernameRequirements":"Nazwa użytkownika musi mieć co najmniej {min} znaki i zawierać tylko znaki alfanumeryczne, _ lub -","ErrPasswordsNotIdentical":"Hasła nie są takie same","ErrSessionTimedOut":"Twoja sesja wygasła, proszę zalogować się jeszcze raz","ErrMissingScope":"Nie masz uprawnień do wykonywania tej czynności","ErrInvalidJson":"Dane json są nieprawidłowe","ErrSocketFailed":"WebSocket napotkał błąd, niektóre funkcje mogą być powolne lub uszkodzone"}')
    },
    "7c5d": function(e) {
        e.exports = JSON.parse('{"NoEnvFields":"There are no environment specific options for this environment","docker":{"name":"Docker","image":"Image","networkMode":"Network Mode","networkName":"Network Name","bindings":"Bindings","portBindings":"Port Bindings","OutsidePort":"Outside Port","InsidePort":"Inside Port","HostPath":"Host Path","ContainerPath":"Container Path"},"standard":{"name":"Standard"},"tty":{"name":"TTY"}}')
    },
    "7d77": function(e) {
        e.exports = JSON.parse('{"Users":"用户","Add":"添加用户","AccountSettings":"用户设置","OldPassword":"旧的密码","NewPassword":"新的密码","ConfirmPassword":"请确认密码","ChangePassword":"修改密码","ChangeInfo":"修改用户详情","InfoChanged":"您修改的信息已提交，正在生效修改","PasswordChanged":"您的新密码已提交，正在生效修改","AccountPassword":"用户密码","Account":"用户","Login":"登录","LoginLink":"从这里登录","Logout":"退出","Register":"注册","RegisterLink":"从这里注册","RegisterSuccess":"您已经成功注册","NoEmailGiven":"You must provide the email of the user you want to add","Username":"用户名","Password":"密码","Email":"邮箱","Edit":"编辑用户","Update":"更新用户","Delete":"删除用户","CreateSuccess":"成功创建","CreateError":"创建失败","UpdateSuccess":"已成功更新","UpdateError":"更新失败","PermsUpdateError":"权限更新失败"}')
    },
    8051: function(e) {
        e.exports = JSON.parse('{"ServersView":"Pode ver esse servidor","ServersEdit":"Editar o servidor","ServersInstall":"Instalar o servidor","ServersConsole":"Ver o console","ServersConsoleSend":"Enviar comandos ao console","ServersStop":"Parar e matar o servidor","ServersStart":"Iniciar o servidor","ServersStat":"Visualizar estatísticas da CPU e da memória","ServersFiles":"Permitir acesso aos arquivos usando SFTP","ServersFilesGet":"Visualizar e fazer download de arquivos usando o gerenciador de arquivos","ServersFilesPut":"Editar e enviar arquivos usando o gerenciador de arquivos","ServersEditUsers":"Editar acesso do usuário a este servidor","Admin":"Administrador (concede todas as permissões possíveis)","ViewServers":"See Servers","CreateServers":"Criar novos servidores","DeleteServers":"Excluir Servidores","EditServerAdmin":"Editar configurações do servidor","ViewNodes":"Ver nodes","EditNodes":"Editar nodes","DeployNodes":"Implantar novos nodes","ViewTemplates":"Ver modelos","EditTemplates":"Editar modelos","ViewUsers":"Ver todos os usuários","EditUsers":"Editar outros usuários"}')
    },
    8127: function(e, t, r) {
        "use strict";
        r.r(t);
        var a = function() {
                var e = this,
                    t = e.$createElement,
                    r = e._self._c || t;
                return r("v-card", [r("v-card-title", {
                    domProps: {
                        textContent: e._s(e.$t("servers.SFTPInfo"))
                    }
                }), r("v-card-text", {
                    staticClass: "body-1 text--primary"
                }, [r("v-row", [r("v-col", {
                    attrs: {
                        cols: "12",
                        sm: "6",
                        md: "2"
                    },
                    domProps: {
                        textContent: e._s(e.$t("common.Host") + ":" + e.$t("common.Port"))
                    }
                }), r("v-col", {
                    attrs: {
                        cols: "12",
                        sm: "6",
                        md: "10"
                    }
                }, [r("input", {
                    ref: "host",
                    staticClass: "copyContent",
                    attrs: {
                        readonly: ""
                    },
                    domProps: {
                        value: e.host
                    }
                }), r("v-btn", {
                    attrs: {
                        icon: ""
                    },
                    on: {
                        click: e.copyHost
                    }
                }, [r("v-icon", [e._v("mdi-content-copy")])], 1), e.copiedHost ? r("v-chip", {
                    staticClass: "mx-2",
                    attrs: {
                        color: "success"
                    },
                    domProps: {
                        textContent: e._s(e.$t("common.Copied"))
                    }
                }) : e._e(), e._v(" " + e._s(e.host) + " ")], 1)], 1), r("v-divider"), r("v-row", [r("v-col", {
                    attrs: {
                        cols: "12",
                        sm: "6",
                        md: "2"
                    },
                    domProps: {
                        textContent: e._s(e.$t("users.Username"))
                    }
                }), r("v-col", {
                    attrs: {
                        cols: "12",
                        sm: "6",
                        md: "10"
                    }
                }, [r("input", {
                    ref: "username",
                    staticClass: "copyContent",
                    attrs: {
                        readonly: ""
                    },
                    domProps: {
                        value: e.username
                    }
                }), r("v-btn", {
                    attrs: {
                        icon: ""
                    },
                    on: {
                        click: e.copyUsername
                    }
                }, [r("v-icon", [e._v("mdi-content-copy")])], 1), e.copiedUsername ? r("v-chip", {
                    staticClass: "mx-2",
                    attrs: {
                        color: "success"
                    },
                    domProps: {
                        textContent: e._s(e.$t("common.Copied"))
                    }
                }) : e._e(), e._v(" " + e._s(e.username) + " ")], 1)], 1), r("v-divider"), r("v-row", [r("v-col", {
                    attrs: {
                        cols: "12",
                        sm: "6",
                        md: "2"
                    },
                    domProps: {
                        textContent: e._s(e.$t("users.Password"))
                    }
                }), r("v-col", {
                    attrs: {
                        cols: "12",
                        sm: "6",
                        md: "10"
                    },
                    domProps: {
                        textContent: e._s(e.$t("users.AccountPassword").replace(" ", " "))
                    }
                })], 1), r("v-btn", {
                    attrs: {
                        block: "",
                        href: "sftp://" + e.username + "@" + e.host
                    },
                    domProps: {
                        textContent: e._s(e.$t("servers.SftpConnection"))
                    }
                })], 1)], 1)
            },
            o = [],
            n = {
                props: {
                    server: {
                        type: Object,
                        default: () => {}
                    }
                },
                data() {
                    return {
                        host: "",
                        username: "",
                        copiedHost: !1,
                        copiedUsername: !1
                    }
                },
                async mounted() {
                    const e = "127.0.0.1" !== this.server.node.publicHost ? this.server.node.publicHost : window.location.hostname;
                    this.host = e + ":" + this.server.node.sftpPort;
                    const t = await this.$api.getSelf();
                    this.username = t.email + "|" + this.server.id
                },
                methods: {
                    copyHost() {
                        this.$refs.host.select(),
                        document.execCommand("copy"),
                        this.copiedUsername = !1,
                        this.copiedHost = !0,
                        setTimeout(() => {
                            this.copiedHost = !1
                        }, 6e3)
                    },
                    copyUsername() {
                        this.$refs.username.select(),
                        document.execCommand("copy"),
                        this.copiedHost = !1,
                        this.copiedUsername = !0,
                        setTimeout(() => {
                            this.copiedUsername = !1
                        }, 6e3)
                    }
                }
            },
            s = n,
            i = (r("87a3"), r("2877")),
            l = r("6544"),
            d = r.n(l),
            c = r("8336"),
            u = r("b0af"),
            m = r("99d9"),
            p = r("cc20"),
            v = r("62ad"),
            f = r("ce7e"),
            S = r("132d"),
            g = r("0fd9"),
            h = Object(i["a"])(s, a, o, !1, null, null, null);
        t["default"] = h.exports;
        d()(h, {
            VBtn: c["a"],
            VCard: u["a"],
            VCardText: m["c"],
            VCardTitle: m["d"],
            VChip: p["a"],
            VCol: v["a"],
            VDivider: f["a"],
            VIcon: S["a"],
            VRow: g["a"]
        })
    },
    8136: function(e) {
        e.exports = JSON.parse('{"FileManager":"파일 관리자","NewFolder":"새 폴더","NewFile":"새 파일","LastModified":"최근 수정","ConfirmDelete":"이 파일을 삭제할까요?","Upload":"업로드","Download":"다운로드","Size":"크기","NoFiles":"파일이 없습니다, 위의 설치 버튼을 클릭해 예시 파일을 생성해주세요.","FileLoadFailed":"파일 로딩에 실패했습니다"}')
    },
    8245: function(e) {
        e.exports = JSON.parse('{"Id":"識別名稱","Name":"名稱","Address":"地址","Online":"在線","Offline":"離線","Loading":"載入中...","General":"一般","Language":"語言","SelectLanguage":"選擇語言","Settings":"設定","Update":"更新","Edit":"編輯","Delete":"刪除","Create":"創建","Save":"儲存","Saved":"已儲存","SaveFailed":"無法儲存","Cancel":"取消","Confirm":"確認","Actions":"操作","Host":"主機","Port":"通訊埠","Template":"範本","Options":"選項","Collapse":"摺疊","Copied":"已複製到剪貼簿","Unknown":"未知","Search":"搜尋","Back":"返回","Next":"下一步","LanguageName":"中文（香港）","Details":"詳情","ErrorDetails":"錯誤詳情","HelpTranslate":"幫助我們翻譯PufferPanel","DarkMode":"暗黑模式","ThemeOptions":"主題選項","Protocol":"協議","Add":"新增"}')
    },
    "833a": function(e, t, r) {
        "use strict";
        r.r(t);
        var a = function() {
                var e = this,
                    t = e.$createElement,
                    r = e._self._c || t;
                return r("v-row", [r("v-col", [r("ui-select", {
                    attrs: {
                        items: e.processorTypes,
                        label: e.$t("templates.Type")
                    },
                    on: {
                        change: function(t) {
                            return e.changeType()
                        }
                    },
                    model: {
                        value: e.value.type,
                        callback: function(t) {
                            e.$set(e.value, "type", t)
                        },
                        expression: "value.type"
                    }
                })], 1), e._l(e.fields, (function(t) {
                    return r("v-col", {
                        key: e.value.type + t.name,
                        attrs: {
                            cols: "12"
                        }
                    }, ["map" === t.type || "list" === t.type || t.headline ? r("h4", {
                        domProps: {
                            textContent: e._s(e.getLabel(t))
                        }
                    }) : e._e(), "custom" === t.type ? r(t.component, {
                        tag: "component",
                        attrs: {
                            value: e.value[t.name] || t.default
                        },
                        on: {
                            input: function(r) {
                                return e.onInput(t.name, r)
                            }
                        }
                    }) : "map" === t.type ? r("ui-map-input", {
                        attrs: {
                            value: e.value[t.name] || t.default,
                            "key-label": t.keyLabel ? e.$t(t.keyLabel) : void 0,
                            "value-label": t.valueLabel ? e.$t(t.valueLabel) : void 0
                        },
                        on: {
                            input: function(r) {
                                return e.onInput(t.name, r)
                            }
                        }
                    }) : "list" === t.type ? r("ui-list-input", {
                        attrs: {
                            value: e.value[t.name] || t.default
                        },
                        on: {
                            input: function(r) {
                                return e.onInput(t.name, r)
                            }
                        }
                    }) : "boolean" === t.type ? r("ui-switch", {
                        attrs: {
                            label: e.getLabel(t),
                            value: e.value[t.name] || t.default
                        },
                        on: {
                            input: function(r) {
                                return e.onInput(t.name, r)
                            }
                        }
                    }) : void 0 !== t.options ? r("ui-input-suggestions", {
                        attrs: {
                            type: t.type,
                            label: e.getLabel(t),
                            items: t.options,
                            value: e.value[t.name] || t.default
                        },
                        on: {
                            input: function(r) {
                                return e.onInput(t.name, r)
                            }
                        }
                    }) : "textarea" === t.type ? r("v-textarea", {
                        attrs: {
                            value: e.value[t.name] || t.default,
                            label: e.getLabel(t),
                            outlined: "",
                            "hide-details": ""
                        },
                        on: {
                            input: function(r) {
                                return e.onInput(t.name, r)
                            }
                        }
                    }) : r("ui-input", {
                        attrs: {
                            type: t.type,
                            label: e.getLabel(t),
                            value: e.value[t.name] || t.default
                        },
                        on: {
                            input: function(r) {
                                return e.onInput(t.name, r)
                            }
                        }
                    })], 1)
                }))], 2)
            },
            o = [];
        const n = {
            download: [{
                name: "files",
                type: "list",
                default: []
            }],
            command: [{
                name: "commands",
                type: "list",
                default: []
            }],
            alterfile: [{
                name: "file",
                type: "text",
                label: "templates.Filename",
                default: ""
            }, {
                name: "regex",
                type: "boolean",
                default: !0
            }, {
                name: "search",
                type: "text",
                default: ""
            }, {
                name: "replace",
                type: "text",
                default: ""
            }],
            writefile: [{
                name: "target",
                type: "text",
                label: "templates.Filename",
                default: ""
            }, {
                name: "text",
                type: "textarea",
                default: ""
            }],
            move: [{
                name: "source",
                type: "text",
                default: ""
            }, {
                name: "target",
                type: "text",
                default: ""
            }],
            mkdir: [{
                name: "target",
                type: "text",
                label: "common.Name",
                default: ""
            }],
            mojangdl: [{
                name: "version",
                type: "text",
                label: "templates.Version",
                default: ""
            }, {
                name: "target",
                type: "text",
                label: "templates.Filename",
                default: ""
            }],
            forgedl: [{
                name: "version",
                type: "text",
                label: "templates.Version",
                default: ""
            }, {
                name: "filename",
                type: "text",
                label: "templates.Filename",
                default: ""
            }],
            spongeforgedl: [{
                name: "releaseType",
                type: "text",
                default: ""
            }],
            fabricdl: [{
                name: "targetFile",
                type: "text",
                label: "templates.Filename",
                default: ""
            }]
        };
        var s = {
                props: {
                    value: {
                        type: Object,
                        default: () => {}
                    }
                },
                computed: {
                    fields() {
                        return n[this.value.type]
                    },
                    processorTypes() {
                        return Object.keys(n).map(e => ({
                            value: e,
                            text: this.$t(`templates.processors.${e}.ProcessorName`)
                        }))
                    }
                },
                mounted() {
                    const e = {};
                    this.fields.map(t => {
                        this.value[t.name] || (e[t.name] = t.default)
                    }),
                    this.$emit("input", {
                        ...this.value,
                        ...e
                    })
                },
                methods: {
                    changeType() {
                        const e = {
                            ...this.value
                        };
                        Object.keys(e).map(t => {
                            "type" !== t && (e[t] = void 0)
                        }),
                        this.$emit("input", e)
                    },
                    onInput(e, t) {
                        this.$emit("input", {
                            ...this.value,
                            [e]: t
                        })
                    },
                    getLabel(e) {
                        return e.label ? this.$t(e.label) : this.$t(`templates.processors.${this.value.type}.${e.name}`)
                    }
                }
            },
            i = s,
            l = r("2877"),
            d = r("6544"),
            c = r.n(d),
            u = r("62ad"),
            m = r("0fd9"),
            p = r("a844"),
            v = Object(l["a"])(i, a, o, !1, null, null, null);
        t["default"] = v.exports;
        c()(v, {
            VCol: u["a"],
            VRow: m["a"],
            VTextarea: p["a"]
        })
    },
    "83a2": function(e) {
        e.exports = JSON.parse('{"Node":"Node","Nodes":"Nodes","Edit":"Edit Node","Add":"Add Node","Update":"Update Node","Delete":"Delete Node","PublicHost":"Public Host","PublicPort":"Public Port","PrivateHost":"Private Host","PrivatePort":"Private Port","SftpPort":"SFTP Port","SaveConfig":"Save Config","SavePublicKey":"Save Public Key","DeploymentInstruction":"To deploy the node, install PufferPanel on the new server and place the config file in `/etc/pufferpanel/`<br/>Restart PufferPanel on the new server afterwards.","UpdateSuccess":"Successfully updated node","UpdateError":"Error updating node"}')
    },
    "84f0": function(e) {
        e.exports = JSON.parse('{"ServersView":"可以檢視此伺服器","ServersEdit":"編輯伺服器","ServersInstall":"安裝伺服器","ServersConsole":"檢視主控台","ServersConsoleSend":"發送指令到主控台","ServersStop":"暫定及終止伺服器","ServersStart":"運行伺服器","ServersStat":"檢視CPU及記憶體統計數據","ServersFiles":"允許透過SFTP存取檔案","ServersFilesGet":"透過檔案管理員檢視及下載檔案","ServersFilesPut":"透過檔案管理員編輯及上傳檔案","ServersEditUsers":"編輯用戶在此伺服器的存取權限","Admin":"管理員 (將賦予所有權限)","ViewServers":"See Servers","CreateServers":"創建新的伺服器","DeleteServers":"刪除伺服器","EditServerAdmin":"編輯伺服器設定","ViewNodes":"檢視節點","EditNodes":"編輯節點","DeployNodes":"部署新節點","ViewTemplates":"檢視範本","EditTemplates":"編輯範本","ViewUsers":"檢視所有用戶","EditUsers":"編輯其他用戶"}')
    },
    "853d": function(e) {
        e.exports = JSON.parse('{"ServersView":"Kann diesen Server ansehen","ServersEdit":"Server bearbeiten","ServersInstall":"Server installieren","ServersConsole":"Konsole anzeigen","ServersConsoleSend":"Befehle an die Konsole senden","ServersStop":"Server stoppen und beenden","ServersStart":"Server starten","ServersStat":"CPU- und Arbeitsspeicherstatistik anzeigen","ServersFiles":"Zugriff auf Dateien über SFTP erlauben","ServersFilesGet":"Dateien im Dateimanager anzeigen und herunterladen","ServersFilesPut":"Dateien mit dem Dateimanager bearbeiten und hochladen","ServersEditUsers":"Benutzerzugriff zu diesem Server bearbeiten","Admin":"Admin (dies gewährt alle Berechtigungen)","ViewServers":"See Servers","CreateServers":"Neue Server erstellen","DeleteServers":"Server löschen","EditServerAdmin":"Servereinstellungen bearbeiten","ViewNodes":"Knoten anzeigen","EditNodes":"Knoten bearbeiten","DeployNodes":"Neue Knoten aufsetzen","ViewTemplates":"Vorlagen anzeigen","EditTemplates":"Vorlagen bearbeiten","ViewUsers":"Alle Benutzer anzeigen","EditUsers":"Andere Benutzer bearbeiten"}')
    },
    "87a3": function(e, t, r) {
        "use strict";
        r("4a65")
    },
    "87a5": function(e) {
        e.exports = JSON.parse('{"ServersView":"Can view this server","ServersEdit":"Edit the server","ServersInstall":"Install the server","ServersConsole":"View the console","ServersConsoleSend":"Send commands to the console","ServersStop":"Stop and kill the server","ServersStart":"Start the server","ServersStat":"View CPU and memory statistics","ServersFiles":"Allow access to files using SFTP","ServersFilesGet":"View and download files using the file manager","ServersFilesPut":"Edit and upload files using the file manager","ServersEditUsers":"Edit user\'s access to this server","Admin":"Admin (this grants every possible permission)","ViewServers":"See Servers","CreateServers":"Create new Servers","DeleteServers":"Delete Servers","EditServerAdmin":"Edit Server Settings","ViewNodes":"See Nodes","EditNodes":"Edit Nodes","DeployNodes":"Deploy new Nodes","ViewTemplates":"See Templates","EditTemplates":"Edit Templates","ViewUsers":"See all Users","EditUsers":"Edit other Users"}')
    },
    8822: function(e) {
        e.exports = JSON.parse('{"Node":"Nod","Nodes":"Noder","Edit":"Redigera nod","Add":"Lägg till node","Update":"Uppdatera nod","Delete":"Ta bort nod","PublicHost":"Offentlig värd","PublicPort":"Offentlig port","PrivateHost":"Privat värd","PrivatePort":"Privat port","SftpPort":"SFTP-port","SaveConfig":"Spara konfiguration","SavePublicKey":"Spara publik nyckel","DeploymentInstruction":"To deploy the node, install PufferPanel on the new server and place the config file in `/etc/pufferpanel/`<br/>Restart PufferPanel on the new server afterwards.","UpdateSuccess":"Uppdatering av nod lyckades","UpdateError":"Fel vid uppdatering av nod"}')
    },
    8824: function(e, t, r) {
        "use strict";
        r.r(t);
        var a = function() {
                var e = this,
                    t = e.$createElement,
                    r = e._self._c || t;
                return r("v-card", {
                    attrs: {
                        loading: e.loading,
                        disabled: e.loading
                    }
                }, [r("v-card-title", [r("span", {
                    staticClass: "flex-grow-1",
                    domProps: {
                        textContent: e._s(e.$t("files.FileManager"))
                    }
                }), e.server.permissions.putServerFiles || e.isAdmin() ? r("v-btn", {
                    attrs: {
                        icon: ""
                    },
                    on: {
                        click: function(t) {
                            e.createFile = !0
                        }
                    }
                }, [r("v-icon", [e._v("mdi-file-plus")])], 1) : e._e(), r("ui-overlay", {
                    attrs: {
                        title: e.$t("files.NewFile"),
                        card: ""
                    },
                    model: {
                        value: e.createFile,
                        callback: function(t) {
                            e.createFile = t
                        },
                        expression: "createFile"
                    }
                }, [r("v-row", [r("v-col", [r("ui-input", {
                    attrs: {
                        "hide-details": "",
                        autofocus: "",
                        label: e.$t("common.Name")
                    },
                    on: {
                        keyup: [function(t) {
                            return !t.type.indexOf("key") && e._k(t.keyCode, "esc", 27, t.key, ["Esc", "Escape"]) ? null : e.cancelFileCreate()
                        }, function(t) {
                            return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.confirmFileCreate()
                        }]
                    },
                    model: {
                        value: e.newFileName,
                        callback: function(t) {
                            e.newFileName = t
                        },
                        expression: "newFileName"
                    }
                })], 1)], 1), r("v-row", [r("v-col", [r("v-btn", {
                    attrs: {
                        block: "",
                        color: "error"
                    },
                    domProps: {
                        textContent: e._s(e.$t("common.Cancel"))
                    },
                    on: {
                        click: function(t) {
                            return e.cancelFileCreate()
                        }
                    }
                })], 1), r("v-col", [r("v-btn", {
                    attrs: {
                        block: "",
                        color: "success",
                        disabled: "" === e.newFileName
                    },
                    domProps: {
                        textContent: e._s(e.$t("common.Create"))
                    },
                    on: {
                        click: function(t) {
                            return e.confirmFileCreate()
                        }
                    }
                })], 1)], 1)], 1), e.server.permissions.putServerFiles || e.isAdmin() ? r("v-btn", {
                    attrs: {
                        icon: ""
                    },
                    on: {
                        click: function(t) {
                            e.createFolder = !0
                        }
                    }
                }, [r("v-icon", [e._v("mdi-folder-plus")])], 1) : e._e(), r("ui-overlay", {
                    attrs: {
                        title: e.$t("files.NewFolder"),
                        card: ""
                    },
                    model: {
                        value: e.createFolder,
                        callback: function(t) {
                            e.createFolder = t
                        },
                        expression: "createFolder"
                    }
                }, [r("v-row", [r("v-col", [r("ui-input", {
                    attrs: {
                        "hide-details": "",
                        autofocus: "",
                        label: e.$t("common.Name")
                    },
                    on: {
                        keyup: [function(t) {
                            return !t.type.indexOf("key") && e._k(t.keyCode, "esc", 27, t.key, ["Esc", "Escape"]) ? null : e.cancelFolderCreate()
                        }, function(t) {
                            return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.confirmFolderCreate()
                        }]
                    },
                    model: {
                        value: e.newFolderName,
                        callback: function(t) {
                            e.newFolderName = t
                        },
                        expression: "newFolderName"
                    }
                })], 1)], 1), r("v-row", [r("v-col", [r("v-btn", {
                    attrs: {
                        block: "",
                        color: "error"
                    },
                    domProps: {
                        textContent: e._s(e.$t("common.Cancel"))
                    },
                    on: {
                        click: function(t) {
                            return e.cancelFolderCreate()
                        }
                    }
                })], 1), r("v-col", [r("v-btn", {
                    attrs: {
                        block: "",
                        color: "success",
                        disabled: "" === e.newFolderName
                    },
                    domProps: {
                        textContent: e._s(e.$t("common.Create"))
                    },
                    on: {
                        click: function(t) {
                            return e.confirmFolderCreate()
                        }
                    }
                })], 1)], 1)], 1), r("v-btn", {
                    attrs: {
                        icon: ""
                    },
                    on: {
                        click: function(t) {
                            return e.fetchItems(e.currentPath)
                        }
                    }
                }, [r("v-icon", [e._v("mdi-refresh")])], 1)], 1), r("v-card-subtitle", {
                    domProps: {
                        textContent: e._s(e.currentPath)
                    }
                }), r("v-card-text", [r("v-dialog", {
                    attrs: {
                        "max-width": "600"
                    },
                    model: {
                        value: e.confirmDeleteOpen,
                        callback: function(t) {
                            e.confirmDeleteOpen = t
                        },
                        expression: "confirmDeleteOpen"
                    }
                }, [r("v-card", [r("v-card-title", {
                    domProps: {
                        textContent: e._s(e.$t("files.ConfirmDelete"))
                    }
                }), r("v-card-actions", [r("v-spacer"), r("v-btn", {
                    attrs: {
                        color: "error"
                    },
                    domProps: {
                        textContent: e._s(e.$t("common.Cancel"))
                    },
                    on: {
                        click: function(t) {
                            return e.deleteCancelled()
                        }
                    }
                }), r("v-btn", {
                    attrs: {
                        color: "success"
                    },
                    domProps: {
                        textContent: e._s(e.$t("common.Confirm"))
                    },
                    on: {
                        click: function(t) {
                            return e.deleteConfirmed()
                        }
                    }
                })], 1)], 1)], 1), r("v-list", e._l(e.files, (function(t) {
                    return r("v-list-item", {
                        key: t.name,
                        on: {
                            click: function(r) {
                                return e.itemClicked(t)
                            }
                        }
                    }, [r("v-list-item-content", [r("v-list-item-title", {
                        domProps: {
                            textContent: e._s(t.name)
                        }
                    }), t.isFile ? r("v-list-item-subtitle", {
                        domProps: {
                            textContent: e._s(e.toFileSize(t.size || 0))
                        }
                    }) : e._e(), t.modifyTime ? r("v-list-item-subtitle", {
                        domProps: {
                            textContent: e._s(e.$t("files.LastModified") + ": " + e.toDate(t.modifyTime))
                        }
                    }) : e._e()], 1), r("v-list-item-action", {
                        staticClass: "flex-row"
                    }, [!t.isFile || t.size > e.maxEditSize ? e._e() : r("v-tooltip", {
                        attrs: {
                            bottom: ""
                        },
                        scopedSlots: e._u([{
                            key: "activator",
                            fn: function(a) {
                                var o = a.on;
                                return [r("v-btn", e._g({
                                    attrs: {
                                        icon: ""
                                    },
                                    on: {
                                        click: function(r) {
                                            return r.stopPropagation(), e.itemClicked(t)
                                        }
                                    }
                                }, o), [r("v-icon", [e._v("mdi-pencil")])], 1)]
                            }
                        }], null, !0)
                    }, [r("span", {
                        domProps: {
                            textContent: e._s(e.$t("common.Edit"))
                        }
                    })]), t.isFile ? r("v-tooltip", {
                        attrs: {
                            bottom: ""
                        },
                        scopedSlots: e._u([{
                            key: "activator",
                            fn: function(a) {
                                var o = a.on;
                                return [r("v-btn", e._g({
                                    attrs: {
                                        icon: "",
                                        href: e.createDownloadLink(t),
                                        target: "_blank"
                                    },
                                    on: {
                                        click: function(e) {
                                            e.stopPropagation()
                                        }
                                    }
                                }, o), [r("v-icon", [e._v("mdi-download")])], 1)]
                            }
                        }], null, !0)
                    }, [r("span", {
                        domProps: {
                            textContent: e._s(e.$t("files.Download"))
                        }
                    })]) : e._e(), ".." !== t.name ? r("v-tooltip", {
                        attrs: {
                            bottom: ""
                        },
                        scopedSlots: e._u([{
                            key: "activator",
                            fn: function(a) {
                                var o = a.on;
                                return [r("v-btn", e._g({
                                    attrs: {
                                        icon: ""
                                    },
                                    on: {
                                        click: function(r) {
                                            return r.stopPropagation(), e.deleteRequest(t)
                                        }
                                    }
                                }, o), [r("v-icon", [e._v("mdi-trash-can")])], 1)]
                            }
                        }], null, !0)
                    }, [r("span", {
                        domProps: {
                            textContent: e._s(e.$t("common.Delete"))
                        }
                    })]) : e._e()], 1)], 1)
                })), 1), r("ui-overlay", {
                    attrs: {
                        title: e.currentFile,
                        card: "",
                        closable: "",
                        "on-close": e.cancelEdit
                    },
                    scopedSlots: e._u([{
                        key: "actions",
                        fn: function() {
                            return [r("div", {
                                staticClass: "flex-grow-1"
                            }), r("v-btn", {
                                attrs: {
                                    color: "error"
                                },
                                domProps: {
                                    textContent: e._s(e.$t("common.Cancel"))
                                },
                                on: {
                                    click: function(t) {
                                        return e.cancelEdit()
                                    }
                                }
                            }), r("v-btn", {
                                attrs: {
                                    color: "success"
                                },
                                domProps: {
                                    textContent: e._s(e.$t("common.Save"))
                                },
                                on: {
                                    click: function(t) {
                                        return e.saveEdit()
                                    }
                                }
                            })]
                        },
                        proxy: !0
                    }]),
                    model: {
                        value: e.editOpen,
                        callback: function(t) {
                            e.editOpen = t
                        },
                        expression: "editOpen"
                    }
                }, [r("ace", {
                    attrs: {
                        "editor-id": "fileEditor",
                        height: "75vh",
                        theme: e.isDark() ? "monokai" : "github",
                        file: e.currentFile
                    },
                    model: {
                        value: e.fileContents,
                        callback: function(t) {
                            e.fileContents = t
                        },
                        expression: "fileContents"
                    }
                })], 1), e.server.permissions.putServerFiles || e.isAdmin() ? r("div", [r("v-file-input", {
                    staticClass: "mb-4",
                    attrs: {
                        multiple: "",
                        chips: "",
                        "show-size": "",
                        counter: "",
                        placeholder: e.$t("files.Upload")
                    },
                    model: {
                        value: e.uploadFiles,
                        callback: function(t) {
                            e.uploadFiles = t
                        },
                        expression: "uploadFiles"
                    }
                }), e.uploading ? r("div", [r("v-progress-linear", {
                    staticClass: "mb-4",
                    attrs: {
                        value: e.uploadCurrent / e.uploadSize * 100,
                        "buffer-value": "0",
                        stream: ""
                    }
                })], 1) : e._e(), r("v-btn", {
                    attrs: {
                        block: "",
                        color: "primary",
                        disabled: !(e.uploadFiles.length > 0) || e.uploading
                    },
                    domProps: {
                        textContent: e._s(e.$t("files.Upload"))
                    },
                    on: {
                        click: e.transmitFiles
                    }
                })], 1) : e._e()], 1)], 1)
            },
            o = [],
            n = r("cee5"),
            s = r.n(n),
            i = r("96ea"),
            l = {
                props: {
                    server: {
                        type: Object,
                        default: () => {}
                    }
                },
                data() {
                    return {
                        files: [],
                        currentPath: "/",
                        loading: !0,
                        currentFile: "",
                        fileContents: "",
                        editOpen: !1,
                        maxEditSize: 20971520,
                        createFolder: !1,
                        newFolderName: "",
                        createFile: !1,
                        newFileName: "",
                        uploadFiles: [],
                        uploading: !1,
                        uploadCurrent: 0,
                        uploadSize: 0,
                        toDelete: null,
                        confirmDeleteOpen: !1
                    }
                },
                mounted() {
                    this.fetchItems(this.currentPath),
                    this.$api.addServerListener(this.server.id, "file", e => {
                        e.error ? this.isLoading = !1 : (this.files = (e.files || []).sort((e, t) => e.isFile && !t.isFile ? 1 : !e.isFile && t.isFile ? -1 : e.name.toLowerCase() > t.name.toLowerCase() ? 1 : e.name.toLowerCase() < t.name.toLowerCase() ? -1 : 0), "" !== e.path && (this.currentPath = e.path), this.loading = !1)
                    })
                },
                methods: {
                    fetchItems(e) {
                        this.loading = !0,
                        this.$api.requestServerFile(this.server.id, e)
                    },
                    async itemClicked(e) {
                        if (e.isFile) {
                            if (e.size > this.maxEditSize)
                                return;
                            let t = this.currentPath;
                            t += "/" === t ? e.name : "/" + e.name,
                            this.fileContents = await this.$api.downloadServerFile(this.server.id, t, !0),
                            this.currentFile = e.name,
                            this.editOpen = !0
                        } else {
                            if (this.loading = !0, ".." === e.name) {
                                const e = this.currentPath.split("/");
                                e.pop(),
                                this.currentPath = e.join("/"),
                                "" === this.currentPath && (this.currentPath = "/")
                            } else {
                                let t = this.currentPath;
                                t += "/" === t ? e.name : "/" + e.name,
                                this.currentPath = t
                            }
                            this.fetchItems(this.currentPath)
                        }
                    },
                    cancelEdit() {
                        this.editOpen = !1,
                        this.currentFile = "",
                        this.fileContents = ""
                    },
                    async saveEdit() {
                        let e = this.currentPath;
                        e += "/" === e ? this.currentFile : "/" + this.currentFile,
                        await this.$api.uploadServerFile(this.server.id, e, this.fileContents),
                        this.editOpen = !1,
                        this.currentFile = "",
                        this.fileContents = "",
                        this.$toast.success(this.$t("common.Saved"))
                    },
                    deleteRequest(e) {
                        this.toDelete = e,
                        this.confirmDeleteOpen = !0
                    },
                    deleteConfirmed() {
                        let e = "";
                        e = "/" === this.currentPath ? "/" + this.toDelete.name : this.currentPath + "/" + this.toDelete.name,
                        this.loading = !0,
                        this.$api.requestServerFileDeletion(this.server.id, e),
                        this.toDelete = null,
                        this.confirmDeleteOpen = !1
                    },
                    deleteCancelled() {
                        this.toDelete = null,
                        this.confirmDeleteOpen = null
                    },
                    toFileSize(e) {
                        return s()(e)
                    },
                    toDate(e) {
                        return new Date(1e3 * e).toLocaleString()
                    },
                    createDownloadLink(e) {
                        let t = this.currentPath;
                        return t += "/" === t ? e.name : "/" + e.name, this.$api.getServerFileUrl(this.server.id, t)
                    },
                    cancelFileCreate() {
                        this.createFile = !1,
                        this.newFileName = ""
                    },
                    confirmFileCreate() {
                        if ("" === this.newFileName)
                            return;
                        const e = this;
                        e.uploadSingleFile(new File([], this.newFileName)).then(() => {
                            e.fetchItems(e.currentPath)
                        }),
                        e.createFile = !1,
                        e.newFileName = ""
                    },
                    cancelFolderCreate() {
                        this.createFolder = !1,
                        this.newFolderName = ""
                    },
                    confirmFolderCreate() {
                        if ("" === this.newFolderName)
                            return;
                        let e = this.currentPath;
                        "/" === e ? e += this.newFolderName : e = e + "/" + this.newFolderName,
                        this.$api.requestServerFolderCreation(this.server.id, e),
                        this.createFolder = !1,
                        this.newFolderName = ""
                    },
                    transmitFiles() {
                        this.uploading = !0,
                        this.uploadNextItem(this)
                    },
                    uploadNextItem(e) {
                        this.uploadSingleFile(e.uploadFiles[0]).then(() => {
                            if (e.uploadFiles.shift(), 0 === e.uploadFiles.length)
                                return e.uploading = !1, void e.fetchItems(e.currentPath);
                            e.uploadNextItem(e)
                        })
                    },
                    async uploadSingleFile(e) {
                        let t = this.currentPath;
                        return t += "/" === t ? e.name : "/" + e.name, this.uploadCurrent = 0, this.uploadSize = e.size, this.$api.uploadServerFile(this.server.id, t, e, e => {
                            this.uploadCurrent = e.loaded,
                            this.uploadSize = e.total
                        })
                    },
                    isDark: i["a"]
                }
            },
            d = l,
            c = (r("8fe7"), r("2877")),
            u = r("6544"),
            m = r.n(u),
            p = r("8336"),
            v = r("b0af"),
            f = r("99d9"),
            S = r("62ad"),
            g = r("169a"),
            h = r("23a7"),
            E = r("132d"),
            P = r("8860"),
            N = r("da13"),
            b = r("1800"),
            w = r("5d23"),
            k = r("8e363"),
            C = r("0fd9"),
            y = r("2fa4"),
            T = r("3a2f"),
            D = Object(c["a"])(d, a, o, !1, null, null, null);
        t["default"] = D.exports;
        m()(D, {
            VBtn: p["a"],
            VCard: v["a"],
            VCardActions: f["a"],
            VCardSubtitle: f["b"],
            VCardText: f["c"],
            VCardTitle: f["d"],
            VCol: S["a"],
            VDialog: g["a"],
            VFileInput: h["a"],
            VIcon: E["a"],
            VList: P["a"],
            VListItem: N["a"],
            VListItemAction: b["a"],
            VListItemContent: w["a"],
            VListItemSubtitle: w["b"],
            VListItemTitle: w["c"],
            VProgressLinear: k["a"],
            VRow: C["a"],
            VSpacer: y["a"],
            VTooltip: T["a"]
        })
    },
    "88c8": function(e) {
        e.exports = JSON.parse('{"Node":"Node","Nodes":"Nodes","Edit":"Node Bewerken","Add":"Node Toevoegen","Update":"Node Bijwerken","Delete":"Node Verwijderen","PublicHost":"Openbare Host","PublicPort":"Openbare poort","PrivateHost":"Privé host","PrivatePort":"Privé poort","SftpPort":"SFTP Poort","SaveConfig":"Configuratie Opslaan","SavePublicKey":"Publieke Sleutel Opslaan","DeploymentInstruction":"Op deze node te deployen, installeer PufferPanel op de nieuwe server en plaats het config bestand in `/etc/pufferpanel`<br/>Herstart PufferPanel op de nieuwe server daarna.","UpdateSuccess":"Node succesvol geüpdatet","UpdateError":"Fout bij het updaten van de node"}')
    },
    "8b75": function(e) {
        e.exports = JSON.parse('{"Users":"Users","Add":"Add User","AccountSettings":"Account Settings","OldPassword":"Old Password","NewPassword":"New Password","ConfirmPassword":"Confirm Password","ChangePassword":"Change Password","ChangeInfo":"Change Account Details","InfoChanged":"Your information has been changed","PasswordChanged":"Your password has been changed","AccountPassword":"Account Password","Account":"Account","Login":"Login","LoginLink":"Or login here","Logout":"Logout","Register":"Register","RegisterLink":"Or register here","RegisterSuccess":"You have successfully registered","NoEmailGiven":"You must provide the email of the user you want to add","Username":"Username","Password":"Password","Email":"Email","Edit":"Edit User","Update":"Update User","Delete":"Delete User","CreateSuccess":"Created User","CreateError":"Failed creating user","UpdateSuccess":"Updated User","UpdateError":"Failed updating user","PermsUpdateError":"Failed updating user permissions"}')
    },
    "8b82": function(e) {
        e.exports = JSON.parse('{"ErrGeneric":"Unknown error","ErrUnknownError":"Unknown error","ErrInvalidCredentials":"Invalid credentials","ErrServiceNotAvailable":"Service not available","ErrEmailNotConfigured":"Email not configured","ErrTokenInvalid":"Token is invalid","ErrClientNotFound":"Client not found","ErrUserNotFound":"User not found","ErrLoginNotPermitted":"Login not permitted","ErrInvalidTokenState":"Invalid token state","ErrSettingNotConfigured":"{setting} is not configured","ErrNoTemplate":"No template with name \'{name}\' was found","ErrServiceInvalidProvider":"{service} does not support {provider}","ErrFieldRequired":"{field} is required","ErrFieldMustBePrintable":"{field} must be printable ascii characters","ErrFieldHasURICharacters":"{field} must not contain characters which cannot be used in URIs","ErrFieldIsInvalidHost":"{field} must be a valid IP or FQDN","ErrFieldIsInvalidIP":"{field} must be a valid IP","ErrFieldTooLarge":"{field} cannot be larger than {max}","ErrFieldTooSmall":"{field} cannot be smaller than {min}","ErrFieldNotBetween":"{field} must be between {min} and {max}","ErrFieldEqual":"{field1} cannot be equal to {field2}","ErrFieldNotEqual":"{field1} is not equal to {field2}","ErrFieldNotEmail":"{field} is not a valid email","ErrFieldLength":"{field} must be at least {length} characters","ErrNoPermission":"You do not have permission to perform this action","ErrDatabaseNotAvailable":"Database is not available","ErrNoNodes":"No nodes available","ErrNoTemplates":"No templates available","ErrPasswordRequirements":"Password must be at least 8 characters","ErrUsernameRequirements":"Username must be at least 3 characters and only contain alphanumerics, _, or -","ErrPasswordsNotIdentical":"Passwords are not the same","ErrSessionTimedOut":"Your session timed out, please log in again","ErrMissingScope":"You are not authorized to perform this action","ErrInvalidJson":"The json data is invalid","ErrSocketFailed":"The WebSocket connection encountered an error, some features might be slow or broken","ErrInviteLinkInvalid":"Your invite link appears to be invalid","ErrSavingInviteduser":"There was an error creating your account"}')
    },
    "8cb8": function(e) {
        e.exports = JSON.parse('{"NoEnvFields":"There are no environment specific options for this environment","docker":{"name":"Docker","image":"Imagen","networkMode":"Modo de red","networkName":"Nombre de red","bindings":"Bindings","portBindings":"Port Bindings","OutsidePort":"Outside Port","InsidePort":"Inside Port","HostPath":"Host Path","ContainerPath":"Container Path"},"standard":{"name":"Estándar"},"tty":{"name":"TTY"}}')
    },
    "8e36": function(e, t, r) {
        "use strict";
        var a = r("e0c1"),
            o = r.n(a),
            n = r("c0c4"),
            s = r.n(n);
        t["a"] = function(e="", t) {
            return s.a.sanitize(o()(e), t)
        }
    },
    "8e54": function(e) {
        e.exports = JSON.parse('{"Node":"Node","Nodes":"Nodes","Edit":"Editar node","Add":"Adicionar node","Update":"Atualizar node","Delete":"Remover node","PublicHost":"Host público","PublicPort":"Porta pública","PrivateHost":"Host privada","PrivatePort":"Porta privada","SftpPort":"Porta SFTP","SaveConfig":"Salvar configuração","SavePublicKey":"Salvar chave pública","DeploymentInstruction":"Para instalar o node, instale o PufferPanel no novo servidor e coloque o arquivo de configuração em `/etc/pufferpanel/`<br/>Reinicie o PufferPanel no novo servidor.","UpdateSuccess":"Node atualizado com sucesso","UpdateError":"Erro ao atualizar o node"}')
    },
    "8e6a": function(e) {
        e.exports = JSON.parse('{"FileManager":"File Manager","NewFolder":"New Folder","NewFile":"New File","LastModified":"Last Modified","ConfirmDelete":"Are you sure you want to delete this file?","Upload":"Upload","Download":"Download","Size":"Size","NoFiles":"There are no files here yet, go and create some for example by clicking the install button at the top of the page","FileLoadFailed":"Failed loading file"}')
    },
    "8fe7": function(e, t, r) {
        "use strict";
        r("96b1")
    },
    9047: function(e) {
        e.exports = JSON.parse('{"NoEnvFields":"Der er ingen miljøspecifikke indstillinger for dette miljø","docker":{"name":"Docker","image":"Billede","networkMode":"Netværks tilstand","networkName":"Netværksnavn","bindings":"Bindings","portBindings":"Port Bindings","OutsidePort":"Extern Port","InsidePort":"Intern Port","HostPath":"Vært Sti","ContainerPath":"Container Sti"},"standard":{"name":"Standard"},"tty":{"name":"TTY"}}')
    },
    "91b3": function(e) {
        e.exports = JSON.parse('{"Templates":"Templates","NoTemplates":"There are no templates here yet","Deleted":"Template deleted","New":"Create new template","Edit":"Edit template","Editor":"Editor","Json":"JSON","Display":"Display Name","Type":"Type","Variables":"Variables","Install":"Install","AddInstallStep":"Add Install Step","DeleteInstallStep":"Delete Install Step","Description":"Description","DataType":"Data Type","DefaultValue":"Default Value","Required":"Required","UserEditable":"Users can edit","Value":"Value","AddOption":"Add an option","AddCommand":"Add command","Filename":"Filename","Content":"Content","Source":"Source","Target":"Target","Version":"Version","ReleaseType":"Release Type","AddFile":"Add file","AddVariable":"Add variable","Environment":"Environment","Environments":"Environments","AddEnvironment":"Add environment","DefaultEnvironment":"Default environment","AddEnvVar":"Add env variable","EnvVars":"Environment variables","DockerImage":"Docker Image","SaveSuccess":"Saved Template","VarNameNoSpaces":"A variable name cannot be empty or contain spaces","SupportedEnvironments":"Supported Environments","RunConfig":"Run Configuration","PreHook":"Pre Run Hook","PostHook":"Post Run Hook","AddPreStep":"Add Pre Run Step","AddPostStep":"Add Post Run Step","DeletePreStep":"Delete Pre Run Step","DeletePostStep":"Delete Post Run Step","Shutdown":"Shutdown","Command":"Command","Arguments":"Arguments","AddArgument":"Add an argument","import":{"OverrideWarning":"WARNING: Imported templates WILL overwrite existing templates with the same ID","Import":"Import templates","Tooltip":"Import templates from the official repository","Select":"Select templates to import","Started":"Importing templates, please wait a moment","Successful":"Successfully imported template {template}","NoTemplatesTitle":"Do you want to import templates?","NoTemplatesContent":"You currently don\'t have any templates. Templates are necessary to create servers.<br/>Do you want to import some templates from the official PufferPanel templates repository now?"},"stop":{"Command":"Command","Signal":"Signal"},"processors":{"download":{"ProcessorName":"Download","files":"Files"},"command":{"ProcessorName":"Run Command","commands":"Commands"},"alterfile":{"ProcessorName":"Change file","regex":"Treat search as RegEx","search":"Text to search","replace":"Replace with"},"writefile":{"ProcessorName":"Write to file","text":"Content"},"move":{"ProcessorName":"Move File","source":"Source","target":"Target"},"mkdir":{"ProcessorName":"Create Directory"},"mojangdl":{"ProcessorName":"Download Minecraft"},"forgedl":{"ProcessorName":"Download Minecraft Forge"},"spongeforgedl":{"ProcessorName":"Download Minecraft SpongeForge","releaseType":"Release Type"},"fabricdl":{"ProcessorName":"Download Minecraft Fabric"}}}')
    },
    "920f": function(e) {
        e.exports = JSON.parse('{"Node":"Node","Nodes":"Nodes","Edit":"Edit Node","Add":"Add Node","Update":"Update Node","Delete":"Delete Node","PublicHost":"Public Host","PublicPort":"Public Port","PrivateHost":"Private Host","PrivatePort":"Private Port","SftpPort":"SFTP Port","SaveConfig":"Save Config","SavePublicKey":"Save Public Key","DeploymentInstruction":"To deploy the node, install PufferPanel on the new server and place the config file in `/etc/pufferpanel/`<br/>Restart PufferPanel on the new server afterwards.","UpdateSuccess":"Successfully updated node","UpdateError":"Error updating node"}')
    },
    9288: function(e) {
        e.exports = JSON.parse('{"Templates":"Šablony","NoTemplates":"Zatím zde nejsou žádné šablony","Deleted":"Šablona odstraněna","New":"Vytvořit novou šablonu","Edit":"Upravit šablonu","Editor":"Editor","Json":"JSON","Display":"Zobrazované jméno","Type":"Typ","Variables":"Proměnné","Install":"Instalovat","AddInstallStep":"Přidat instalační krok","DeleteInstallStep":"Odstranit instalační krok","Description":"Popis","DataType":"Datový typ","DefaultValue":"Výchozí hodnota","Required":"Povinné","UserEditable":"Uživatelé mohou upravovat","Value":"Hodnota","AddOption":"Přidat volbu","AddCommand":"Přidat příkaz","Filename":"Název souboru","Content":"Obsah","Source":"Zdroj","Target":"Cíl","Version":"Verze","ReleaseType":"Typ vydání","AddFile":"Přidat soubor","AddVariable":"Přidat proměnnou","Environment":"Environment","Environments":"Prostředí","AddEnvironment":"Přidat prostředí","DefaultEnvironment":"Výchozí prostředí","AddEnvVar":"Přidat proměnnou prostředí","EnvVars":"Proměnné prostředí","DockerImage":"Docker obrazy","SaveSuccess":"Uložené šablony","VarNameNoSpaces":"Název proměnné nemůže být prázdný nebo obsahovat mezery","SupportedEnvironments":"Podporované prostředí","RunConfig":"Spustit konfiguraci","PreHook":"Pre Run Hook","PostHook":"Pre Run Hook","AddPreStep":"Přidat krok před spuštěním","AddPostStep":"Přidat krok po spuštění","DeletePreStep":"Odstranit krok před spuštěním","DeletePostStep":"Přidat krok po spuštění","Shutdown":"Vypnout","Command":"Příkaz","Arguments":"Parametry","AddArgument":"Přidat parametr","import":{"OverrideWarning":"VAROVÁNÍ: Importované šablony přepisují existující šablony se stejným ID","Import":"Importovat šablonu","Tooltip":"Importovat šablony z oficiálního úložiště","Select":"Vyberte položky k importování","Started":"Importuji šablony, počkejte prosím chvíli","Successful":"Šablona {template} byla úspěšně importována","NoTemplatesTitle":"Chcete importovat šablony?","NoTemplatesContent":"Momentálně nemáte žádné šablony. Šablony jsou nutné pro vytvoření serverů.<br/>Chcete nyní importovat některé šablony z oficiálního úložiště šablon Pufferpanelu?"},"stop":{"Command":"Příkaz","Signal":"Signál"},"processors":{"download":{"ProcessorName":"Stáhnout","files":"Soubory"},"command":{"ProcessorName":"Spustit příkaz","commands":"Příkazy"},"alterfile":{"ProcessorName":"Změnit soubor","regex":"Hledat jako RegEx","search":"Text na vyhledávání","replace":"Nahradit za"},"writefile":{"ProcessorName":"Zapsat do souboru","text":"Obsah"},"move":{"ProcessorName":"Přesunout soubor","source":"Zdroj","target":"Cíl"},"mkdir":{"ProcessorName":"Vytvořit složku"},"mojangdl":{"ProcessorName":"Stáhnout Minecraft"},"forgedl":{"ProcessorName":"Stáhnout Minecraft Forge"},"spongeforgedl":{"ProcessorName":"Stáhnout Minecraft SpongeForge","releaseType":"Typ vydání"},"fabricdl":{"ProcessorName":"Stáhnout Minecraft Fabric"}}}')
    },
    "92a3": function(e) {
        e.exports = JSON.parse('{"ServersView":"Can view this server","ServersEdit":"Edit the server","ServersInstall":"Install the server","ServersConsole":"View the console","ServersConsoleSend":"Send commands to the console","ServersStop":"Stop and kill the server","ServersStart":"Start the server","ServersStat":"View CPU and memory statistics","ServersFiles":"Allow access to files using SFTP","ServersFilesGet":"View and download files using the file manager","ServersFilesPut":"Edit and upload files using the file manager","ServersEditUsers":"Edit user\'s access to this server","Admin":"Admin (this grants every possible permission)","ViewServers":"See Servers","CreateServers":"Create new Servers","DeleteServers":"Delete Servers","EditServerAdmin":"Edit Server Settings","ViewNodes":"See Nodes","EditNodes":"Edit Nodes","DeployNodes":"Deploy new Nodes","ViewTemplates":"See Templates","EditTemplates":"Edit Templates","ViewUsers":"See all Users","EditUsers":"Edit other Users"}')
    },
    "92a6": function(e) {
        e.exports = JSON.parse('{"ErrGeneric":"Onbekende fout","ErrUnknownError":"Onbekende fout","ErrInvalidCredentials":"Ongeldige inloggegevens","ErrServiceNotAvailable":"Service niet beschikbaar","ErrEmailNotConfigured":"Email niet geconfigureerd","ErrTokenInvalid":"Token is ongeldig","ErrClientNotFound":"Cliënt niet gevonden","ErrUserNotFound":"Gebruiker niet gevonden","ErrLoginNotPermitted":"Inloggen niet toegestaan","ErrInvalidTokenState":"Ongeldige tokenstatus","ErrSettingNotConfigured":"{setting} is niet geconfigureerd","ErrNoTemplate":"Geen sjabloon met de naam \'{name}\' is gevonden","ErrServiceInvalidProvider":"{service} ondersteunt {provider} niet","ErrFieldRequired":"{field} is vereist","ErrFieldMustBePrintable":"{field} moet afdrukbare ASCII tekens bevatten","ErrFieldHasURICharacters":"{field} mag geen tekens bevatten die niet gebruikt kunnen worden in URI\'s","ErrFieldIsInvalidHost":"{field} moet een geldig IP of FQDN zijn","ErrFieldIsInvalidIP":"{field} moet een geldig IP zijn","ErrFieldTooLarge":"{field} kan niet groter zijn dan {max}","ErrFieldTooSmall":"{field} kan niet kleiner zijn dan {min}","ErrFieldNotBetween":"{field} moet tussen {min} en {max} liggen","ErrFieldEqual":"{field1} kan niet gelijk zijn aan {field2}","ErrFieldNotEqual":"{field1} is niet gelijk aan {field2}","ErrFieldNotEmail":"{field} is geen geldig e-mailadres","ErrFieldLength":"{field} moet ten minste {length} tekens bevatten","ErrNoPermission":"Je hebt geen toestemming om deze actie uit te voeren","ErrDatabaseNotAvailable":"Database is niet beschikbaar","ErrNoNodes":"Geen nodes beschikbaar","ErrNoTemplates":"Geen sjablonen beschikbaar","ErrPasswordRequirements":"Wachtwoord moet ten minste 8 tekens bevatten","ErrUsernameRequirements":"Gebruikersnaam moet ten minste 3 tekens bevatten en mag alleen _, - of alfanumerieke tekens bevatten","ErrPasswordsNotIdentical":"Wachtwoorden komen niet overeen","ErrSessionTimedOut":"Je sessie is verlopen, log opnieuw in","ErrMissingScope":"Je bent niet bevoegd om deze actie uit te voeren","ErrInvalidJson":"De json gegevens zijn ongeldig","ErrSocketFailed":"The WebSocket connection encountered an error, some features might be slow or broken"}')
    },
    9445: function(e) {
        e.exports = JSON.parse('{"NoEnvFields":"There are no environment specific options for this environment","docker":{"name":"Docker","image":"Bild","networkMode":"Nätverksläge","networkName":"Nätverksnamn","bindings":"Bindings","portBindings":"Port Bindings","OutsidePort":"Outside Port","InsidePort":"Inside Port","HostPath":"Host Path","ContainerPath":"Container Path"},"standard":{"name":"Standard"},"tty":{"name":"TTY"}}')
    },
    9459: function(e) {
        e.exports = JSON.parse('{"Node":"Хост","Nodes":"Хосты","Edit":"Редактировать хост","Add":"Добавить хост","Update":"Обновить хост","Delete":"Удалить хост","PublicHost":"Публичный хост","PublicPort":"Публичный порт","PrivateHost":"Приватный хост","PrivatePort":"Приватный порт","SftpPort":"SFTP-порт","SaveConfig":"Сохранить настройки","SavePublicKey":"Сохранить публичный ключ","DeploymentInstruction":"Чтобы развернуть хост, установите PufferPanel на новый сервер и поместите конфигурационный файл в `/etc/pufferpanel/`<br/>После, перезагрузите PufferPanel на сервере.","UpdateSuccess":"Хост успешно обновлен","UpdateError":"Ошибка при обновлении хоста"}')
    },
    9560: function(e) {
        e.exports = JSON.parse('{"Templates":"Templates","NoTemplates":"There are no templates here yet","Deleted":"Template deleted","New":"Create new template","Edit":"Edit template","Editor":"Editor","Json":"JSON","Display":"Display Name","Type":"Type","Variables":"Variables","Install":"Install","AddInstallStep":"Add Install Step","DeleteInstallStep":"Delete Install Step","Description":"Description","DataType":"Data Type","DefaultValue":"Default Value","Required":"Required","UserEditable":"Users can edit","Value":"Value","AddOption":"Add an option","AddCommand":"Add command","Filename":"Filename","Content":"Content","Source":"Source","Target":"Target","Version":"Version","ReleaseType":"Release Type","AddFile":"Add file","AddVariable":"Add variable","Environment":"Environment","Environments":"Environments","AddEnvironment":"Add environment","DefaultEnvironment":"Default environment","AddEnvVar":"Add env variable","EnvVars":"Environment variables","DockerImage":"Docker Image","SaveSuccess":"Saved Template","VarNameNoSpaces":"A variable name cannot be empty or contain spaces","SupportedEnvironments":"Supported Environments","RunConfig":"Run Configuration","PreHook":"Pre Run Hook","PostHook":"Post Run Hook","AddPreStep":"Add Pre Run Step","AddPostStep":"Add Post Run Step","DeletePreStep":"Delete Pre Run Step","DeletePostStep":"Delete Post Run Step","Shutdown":"Shutdown","Command":"Command","Arguments":"Arguments","AddArgument":"Add an argument","import":{"OverrideWarning":"WARNING: Imported templates WILL overwrite existing templates with the same ID","Import":"Import templates","Tooltip":"Import templates from the official repository","Select":"Select templates to import","Started":"Importing templates, please wait a moment","Successful":"Successfully imported template {template}","NoTemplatesTitle":"Do you want to import templates?","NoTemplatesContent":"You currently don\'t have any templates. Templates are necessary to create servers.<br/>Do you want to import some templates from the official PufferPanel templates repository now?"},"stop":{"Command":"Command","Signal":"Signal"},"processors":{"download":{"ProcessorName":"Download","files":"Files"},"command":{"ProcessorName":"Run Command","commands":"Commands"},"alterfile":{"ProcessorName":"Change file","regex":"Treat search as RegEx","search":"Text to search","replace":"Replace with"},"writefile":{"ProcessorName":"Write to file","text":"Content"},"move":{"ProcessorName":"Move File","source":"Source","target":"Target"},"mkdir":{"ProcessorName":"Create Directory"},"mojangdl":{"ProcessorName":"Download Minecraft"},"forgedl":{"ProcessorName":"Download Minecraft Forge"},"spongeforgedl":{"ProcessorName":"Download Minecraft SpongeForge","releaseType":"Release Type"},"fabricdl":{"ProcessorName":"Download Minecraft Fabric"}}}')
    },
    "96b1": function(e, t, r) {},
    "96ea": function(e, t, r) {
        "use strict";
        function a() {
            return "true" === (localStorage.getItem("dark") || "")
        }
        function o(e) {
            a() ? (localStorage.removeItem("dark"), e.theme.dark = !1) : (localStorage.setItem("dark", !0), e.theme.dark = !0)
        }
        r.d(t, "a", (function() {
            return a
        })),
        r.d(t, "b", (function() {
            return o
        }))
    },
    9716: function(e, t, r) {
        "use strict";
        r.r(t);
        var a = function() {
                var e = this,
                    t = e.$createElement,
                    r = e._self._c || t;
                return r("v-select", e._g({
                    attrs: {
                        id: e.id,
                        value: e.value,
                        outlined: "outlined" === e.lookValue,
                        solo: "solo" === e.lookValue,
                        filled: "filled" === e.lookValue,
                        flat: e.flat,
                        autofocus: e.autofocus,
                        dense: e.dense,
                        disabled: e.disabled,
                        "item-text": e.itemText,
                        "item-value": e.itemValue,
                        items: e.items,
                        label: e.label,
                        "hide-details": e.hideDetails && !e.showHint,
                        "persistent-hint": e.showHint,
                        hint: e.hintValue,
                        "error-messages": e.errorMessages,
                        "prepend-inner-icon": e.icon,
                        "append-icon": e.endIcon,
                        "append-outer-icon": e.iconBehind,
                        placeholder: e.placeholder,
                        required: e.required,
                        name: e.name,
                        "no-data-text": e.noDataText
                    },
                    on: {
                        input: function(t) {
                            return e.$emit("input", t)
                        }
                    }
                }, e.listeners), [e._l(e.$slots, (function(t, r) {
                    return e._t(r, null, {
                        slot: r
                    })
                }))], 2)
            },
            o = [];
        const n = ["outlined", "solo", "solo-flat", "filled", "material"];
        var s = {
                props: {
                    autofocus: {
                        type: Boolean,
                        default: () => !1
                    },
                    dense: {
                        type: Boolean,
                        default: () => !1
                    },
                    disabled: {
                        type: Boolean,
                        default: () => !1
                    },
                    endIcon: {
                        type: String,
                        default: () => {}
                    },
                    errorMessages: {
                        type: String,
                        default: () => {}
                    },
                    hint: {
                        type: String,
                        default: () => {}
                    },
                    icon: {
                        type: String,
                        default: () => {}
                    },
                    iconBehind: {
                        type: String,
                        default: () => {}
                    },
                    id: {
                        type: String,
                        default: () => {}
                    },
                    itemText: {
                        type: String,
                        default: () => {}
                    },
                    itemValue: {
                        type: String,
                        default: () => {}
                    },
                    items: {
                        type: Array,
                        required: !0
                    },
                    label: {
                        type: String,
                        default: () => {}
                    },
                    name: {
                        type: String,
                        default: () => {}
                    },
                    noDataText: {
                        type: String,
                        default: () => {}
                    },
                    placeholder: {
                        type: String,
                        default: () => {}
                    },
                    required: {
                        type: Boolean,
                        default: () => !1
                    },
                    look: {
                        type: String,
                        validator: e => -1 !== n.indexOf(e),
                        default: () => {}
                    },
                    value: {
                        type: void 0,
                        required: !0
                    }
                },
                computed: {
                    listeners() {
                        const {input: e, ...t} = this.$listeners;
                        return t
                    },
                    hideDetails() {
                        const e = void 0 !== this.errorMessages && "" !== this.errorMessages;
                        return !e
                    },
                    showHint() {
                        const e = void 0 !== this.hint && "" !== this.hint,
                            t = void 0 !== this.$slots.message && "" !== this.$slots.message && this.$slots.message !== [];
                        return e || t
                    },
                    lookValue() {
                        const e = this.look ? this.look : this.$vuetify.theme.options.inputStyle;
                        return e.split("-")[0]
                    },
                    flat() {
                        const e = this.look ? this.look : this.$vuetify.theme.options.inputStyle;
                        return -1 !== e.split("-").indexOf("flat")
                    },
                    hintValue() {
                        return this.hint ? this.hint : this.$slots.message ? "_" : void 0
                    }
                }
            },
            i = s,
            l = r("2877"),
            d = r("6544"),
            c = r.n(d),
            u = r("b974"),
            m = Object(l["a"])(i, a, o, !1, null, null, null);
        t["default"] = m.exports;
        c()(m, {
            VSelect: u["a"]
        })
    },
    "9a18": function(e) {
        e.exports = JSON.parse('{"NoEnvFields":"There are no environment specific options for this environment","docker":{"name":"Docker","image":"Imagen","networkMode":"Network Mode","networkName":"Network Name","bindings":"Bindings","portBindings":"Port Bindings","OutsidePort":"Outside Port","InsidePort":"Inside Port","HostPath":"Host Path","ContainerPath":"Container Path"},"standard":{"name":"Estandar"},"tty":{"name":"TTY"}}')
    },
    "9a68": function(e) {
        e.exports = JSON.parse('{"Users":"Benutzer","Add":"Neuer Benutzer","AccountSettings":"Kontoeinstellungen","OldPassword":"Altes Passwort","NewPassword":"Neues Passwort","ConfirmPassword":"Passwort bestätigen","ChangePassword":"Passwort ändern","ChangeInfo":"Kontodaten ändern","InfoChanged":"Deine Kontoinformationen wurden geändert","PasswordChanged":"Dein Passwort wurde geändert","AccountPassword":"Passwort","Account":"Benutzerkonto","Login":"Anmelden","LoginLink":"Oder melde dich hier an","Logout":"Abmelden","Register":"Registrieren","RegisterLink":"Oder registriere dich hier","RegisterSuccess":"Du hast dich erfolgreich registriert","NoEmailGiven":"Sie müssen die E-Mail des Benutzers angeben, den Sie hinzufügen möchten","Username":"Nutzername","Password":"Passwort","Email":"Email","Edit":"Benutzer bearbeiten","Update":"Benutzer aktualisieren","Delete":"Benutzer löschen","CreateSuccess":"Benutzer erstellt","CreateError":"Fehler beim Erstellen des Benutzers","UpdateSuccess":"Benutzer aktualisiert","UpdateError":"Fehler beim Aktualisieren des Benutzers","PermsUpdateError":"Fehler beim Aktualisieren der Benutzerberechtigungen"}')
    },
    "9a8d": function(e) {
        e.exports = JSON.parse('{"Id":"Tunniste","Name":"nimi","Address":"osoite","Online":"päällä","Offline":"Poissa päältä","Loading":"Ladataan...","General":"Yleinen","Language":"Kieli","SelectLanguage":"Valitse Kieli","Settings":"Asetukset","Update":"Päivitä","Edit":"Muokkaa","Delete":"Poista","Create":"Luo","Save":"Tallenna","Saved":"Tallennettu","SaveFailed":"Tallennus epäonnistui","Cancel":"Peruuta","Confirm":"Vahvista","Actions":"Toiminnot","Host":"Isäntä","Port":"Portti","Template":"Sivupohja","Options":"Asetukset","Collapse":"Romahdus","Copied":"Kopioitu leikepöydälle","Unknown":"Tuntematon","Search":"Hae","Back":"Takaisin","Next":"Seuraava","LanguageName":"Englanti","Details":"Lisätiedot","ErrorDetails":"Virheen Tiedot","HelpTranslate":"Auta meitä kääntämään PufferPanel","DarkMode":"Tumma Tila","ThemeOptions":"Teema-asetukset","Protocol":"Protocol","Add":"Add"}')
    },
    "9acc": function(e) {
        e.exports = JSON.parse('{"ServersView":"Can view this server","ServersEdit":"Edit the server","ServersInstall":"Install the server","ServersConsole":"View the console","ServersConsoleSend":"Send commands to the console","ServersStop":"Stop and kill the server","ServersStart":"Start the server","ServersStat":"View CPU and memory statistics","ServersFiles":"Allow access to files using SFTP","ServersFilesGet":"View and download files using the file manager","ServersFilesPut":"Edit and upload files using the file manager","ServersEditUsers":"Edit user\'s access to this server","Admin":"Admin (this grants every possible permission)","ViewServers":"See Servers","CreateServers":"Create new Servers","DeleteServers":"Delete Servers","EditServerAdmin":"Edit Server Settings","ViewNodes":"See Nodes","EditNodes":"Edit Nodes","DeployNodes":"Deploy new Nodes","ViewTemplates":"See Templates","EditTemplates":"Edit Templates","ViewUsers":"See all Users","EditUsers":"Edit other Users"}')
    },
    "9ba7": function(e) {
        e.exports = JSON.parse('{"Node":"Node","Nodes":"Nodes","Edit":"Edit Node","Add":"Add Node","Update":"Update Node","Delete":"Delete Node","PublicHost":"Public Host","PublicPort":"Public Port","PrivateHost":"Private Host","PrivatePort":"Private Port","SftpPort":"SFTP Port","SaveConfig":"Save Config","SavePublicKey":"Save Public Key","DeploymentInstruction":"To deploy the node, install PufferPanel on the new server and place the config file in `/etc/pufferpanel/`<br/>Restart PufferPanel on the new server afterwards.","UpdateSuccess":"Successfully updated node","UpdateError":"Error updating node"}')
    },
    "9c61": function(e) {
        e.exports = JSON.parse('{"Node":"Node","Nodes":"Nodes","Edit":"تعديل ال Nodes","Add":"إضافة Node","Update":"تحديث ال Node","Delete":"حذف ال Node","PublicHost":"مضيف عام","PublicPort":"منفذ عام","PrivateHost":"مضيف خاص","PrivatePort":"منفذ خاص","SftpPort":"منفذ SFTP","SaveConfig":"حفظ الاعدادات","SavePublicKey":"حفظ المفتاح العام","DeploymentInstruction":"لنشر ال Node ، قم بتثبيت لوحة تحكم بافر بانل على الخادم الجديد و ضع ملف الإعدادات في\\n`/etc/pufferpanel/` <br/> قم بإعادة تشغيل لوحة تحكم بافر بنل على الخادم الجديد بعد ذلك.","UpdateSuccess":"تم تحديث ال Node بنجاح","UpdateError":"حدث خطأ أثناء تحديث ال Node"}')
    },
    "9da9": function(e) {
        e.exports = JSON.parse('{"Server":"伺服器","NoServers":"你沒有權限存取這些伺服器","Servers":"伺服器","Add":"添加伺服器","Console":"主控台","Controls":"控制項","SFTPInfo":"SFTP資訊","Restart":"重新啟動","Start":"啟動","Stop":"停止","Kill":"終止","Install":"安裝","Send":"傳送","Pause":"暫停","CPU":"CPU","Memory":"記憶體","Name":"伺服器名稱","SelectNode":"請選擇節點","SelectTemplate":"請選擇範本","SelectThisTemplate":"使用此範本","SelectUser":"請選擇用戶","Environment":"環境","SelectEnvironment":"請選擇環境","TypeUsername":"輸入用戶名稱","AdminControls":"管理員控制項","Settings":"設定","NoEditableVars":"這伺服器沒有任何變數可編輯","ConfirmDelete":"你確認要刪除此伺服器? (此動作無法撤消)","Delete":"刪除伺服器","Deleted":"刪除伺服器","NoReadme":"此範本沒有可用的自述文件","SftpConnection":"連接至SFTP","EditDefinition":"Edit Server Definition","Reload":"從磁碟重新加載數據","Reloaded":"重新加載伺服器數據","Autostart":"節點啟動時啟動伺服器","Autorestart":"正常停止時重新啟動伺服器","Autorecover":"崩潰時重新啟動伺服器"}')
    },
    "9dd4": function(e) {
        e.exports = JSON.parse('{"NoEnvFields":"There are no environment specific options for this environment","docker":{"name":"Docker","image":"镜像","networkMode":"网络模式","networkName":"网络名称","bindings":"绑定","portBindings":"端口号绑定","OutsidePort":"外部端口","InsidePort":"内部端口","HostPath":"主机路径","ContainerPath":"容器路径"},"standard":{"name":""},"tty":{"name":"TTY"}}')
    },
    "9de9": function(e) {
        e.exports = JSON.parse('{"Server":"Server","NoServers":"There are no servers you have access to","Servers":"Servers","Add":"Add Server","Console":"Console","Controls":"Controls","SFTPInfo":"SFTP Information","Restart":"Restart","Start":"Start","Stop":"Stop","Kill":"Kill","Install":"Install","Send":"Надіслати","Pause":"Пауза","CPU":"ЦП","Memory":"Пам\'ять","Name":"Ім\'я сервера","SelectNode":"Будь ласка, виберіть вузол","SelectTemplate":"Будь ласка, оберіть шаблон","SelectThisTemplate":"Використовувати цей шаблон","SelectUser":"Будь ласка, виберіть користувача","Environment":"Середовище","SelectEnvironment":"Будь ласка, оберіть середовище","TypeUsername":"Введіть ім\'я користувача","AdminControls":"Керування адміністраторами","Settings":"Settings","NoEditableVars":"This server does not have variables you can edit","ConfirmDelete":"Do you really want to delete this server? (this cannot be undone)","Delete":"Delete Server","Deleted":"Deleted Server","NoReadme":"No readme available for this template","SftpConnection":"Connect to SFTP","EditDefinition":"Edit Server Definition","Reload":"Reload server data from disk","Reloaded":"Reloaded server data","Autostart":"Start the server when the node starts","Autorestart":"Restart the server when it stops normally","Autorecover":"Restart the server when it crashes"}')
    },
    "9e7c": function(e) {
        e.exports = JSON.parse('{"ErrGeneric":"Unknown error","ErrUnknownError":"Unknown error","ErrInvalidCredentials":"Invalid credentials","ErrServiceNotAvailable":"Service not available","ErrEmailNotConfigured":"Email not configured","ErrTokenInvalid":"Token is invalid","ErrClientNotFound":"Client not found","ErrUserNotFound":"User not found","ErrLoginNotPermitted":"Login not permitted","ErrInvalidTokenState":"Invalid token state","ErrSettingNotConfigured":"{setting} is not configured","ErrNoTemplate":"No template with name \'{name}\' was found","ErrServiceInvalidProvider":"{service} does not support {provider}","ErrFieldRequired":"{field} is required","ErrFieldMustBePrintable":"{field} must be printable ascii characters","ErrFieldHasURICharacters":"{field} must not contain characters which cannot be used in URIs","ErrFieldIsInvalidHost":"{field} must be a valid IP or FQDN","ErrFieldIsInvalidIP":"{field} must be a valid IP","ErrFieldTooLarge":"{field} cannot be larger than {max}","ErrFieldTooSmall":"{field} cannot be smaller than {min}","ErrFieldNotBetween":"{field} must be between {min} and {max}","ErrFieldEqual":"{field1} cannot be equal to {field2}","ErrFieldNotEqual":"{field1} is not equal to {field2}","ErrFieldNotEmail":"{field} is not a valid email","ErrFieldLength":"{field} must be at least {length} characters","ErrNoPermission":"You do not have permission to perform this action","ErrDatabaseNotAvailable":"Database is not available","ErrNoNodes":"No nodes available","ErrNoTemplates":"No templates available","ErrPasswordRequirements":"Password must be at least 8 characters","ErrUsernameRequirements":"Username must be at least 3 characters and only contain alphanumerics, _, or -","ErrPasswordsNotIdentical":"Passwords are not the same","ErrSessionTimedOut":"Your session timed out, please log in again","ErrMissingScope":"You are not authorized to perform this action","ErrInvalidJson":"The json data is invalid","ErrSocketFailed":"The WebSocket connection encountered an error, some features might be slow or broken"}')
    },
    "9e9f": function(e) {
        e.exports = JSON.parse('{"Templates":"Modèles","NoTemplates":"Il n\'y a pas encore de modèle ici","Deleted":"Modèle supprimé","New":"Créer un nouveau modèle","Edit":"Éditer le modèle","Editor":"Éditeur","Json":"JSON","Display":"Nom","Type":"Type","Variables":"Variables","Install":"Installer","AddInstallStep":"Ajouter une étape d\'Installation","DeleteInstallStep":"Supprimer l\'étape d\'Installation","Description":"Description","DataType":"Type de données","DefaultValue":"Valeur par défaut","Required":"Obligatoire","UserEditable":"Les utilisateurs peuvent modifier","Value":"Valeur","AddOption":"Ajouter une option","AddCommand":"Ajouter une commande","Filename":"Nom du fichier","Content":"Contenu","Source":"Source","Target":"Destination","Version":"Version","ReleaseType":"Type de version","AddFile":"Ajouter un fichier","AddVariable":"Ajouter une variable","Environment":"Environment","Environments":"Environnements","AddEnvironment":"Ajouter un environnement","DefaultEnvironment":"Environnement par défaut","AddEnvVar":"Ajouter une nouvelle variable d\'environnement","EnvVars":"Variables d\'environnement","DockerImage":"Image Docker","SaveSuccess":"Modèles enregistrés","VarNameNoSpaces":"Un nom de variable ne peut pas être vide ou contenir des espaces","SupportedEnvironments":"Environnements supportés","RunConfig":"Configuration d\'Exécution","PreHook":"Avant-exécution","PostHook":"Après-exécution","AddPreStep":"Ajouter une étape de pré-exécution","AddPostStep":"Ajouter une étape d\'après-exécution","DeletePreStep":"Supprimer l\'étape d\'avant-exécution","DeletePostStep":"Supprimer l\'étape d\'après-exécution","Shutdown":"Arrêter","Command":"Commande","Arguments":"Arguments","AddArgument":"Ajouter un argument","import":{"OverrideWarning":"AVERTISSEMENT : Les modèles importés VONT remplacer les modèles existants avec le même identifiant","Import":"Importer des modèles","Tooltip":"Importer des modèles depuis le dépôt officiel","Select":"Sélectionner les modèles à importer","Started":"Importation des modèles, merci de patienter un moment","Successful":"Modèle importé avec succès {template}","NoTemplatesTitle":"Souhaitez-vous importer des modèles ?","NoTemplatesContent":"Vous n\'avez actuellement aucun modèle. Les modèles sont nécessaires pour créer des serveurs.<br/>Souhaitez-vous importer des modèles depuis le dépôt officiel des modèles de PufferPanel maintenant ?"},"stop":{"Command":"Commande","Signal":"Signal"},"processors":{"download":{"ProcessorName":"Télécharger","files":"Fichiers"},"command":{"ProcessorName":"Commande d’exécution","commands":"Commandes"},"alterfile":{"ProcessorName":"Changer le fichier","regex":"Traiter la recherche comme RegEx","search":"Texte à rechercher","replace":"Remplacer par"},"writefile":{"ProcessorName":"Écrire dans un fichier","text":"Contenus"},"move":{"ProcessorName":"Déplacer un fichier","source":"Source","target":"Cible"},"mkdir":{"ProcessorName":"Créer un répertoire"},"mojangdl":{"ProcessorName":"Télécharger Minecraft"},"forgedl":{"ProcessorName":"Télécharger Minecraft Forge"},"spongeforgedl":{"ProcessorName":"Télécharger Minecraft SpongeForge","releaseType":"Type de version"},"fabricdl":{"ProcessorName":"Télécharger Minecraft Fabric"}}}')
    },
    "9f41": function(e) {
        e.exports = JSON.parse('{"FileManager":"Файловий менеджер","NewFolder":"Нова папка","NewFile":"Новий файл","LastModified":"Востаннє змінено","ConfirmDelete":"Ви дійсно бажаєте видалити цей файл?","Upload":"Вивантажити","Download":"Завантажити","Size":"Розмір","NoFiles":"Тут ще немає жодного файлу, будь ласка, створіть декілька для прикладу, натиснувши кнопку встановлення у верхній частині сторінки","FileLoadFailed":"Помилка завантаження файлу"}')
    },
    a243: function(e) {
        e.exports = JSON.parse('{"Server":"Servidor","NoServers":"Não há nenhum servidor que você tenha acesso","Servers":"Servidores","Add":"Adicionar servidor","Console":"Console","Controls":"Controles","SFTPInfo":"Informações do SFTP","Restart":"Restart","Start":"Iniciar","Stop":"Parar","Kill":"Matar","Install":"Instalar","Send":"Enviar","Pause":"Pausar","CPU":"CPU","Memory":"Memória","Name":"Nome do Servidor","SelectNode":"Por favor, selecione um node","SelectTemplate":"Por favor, selecione um modelo","SelectThisTemplate":"Use este modelo","SelectUser":"Por favor, selecione um usuário","Environment":"Ambiente","SelectEnvironment":"Por favor, selecione um ambiente","TypeUsername":"Digite um nome de usuário","AdminControls":"Controles da Administração","Settings":"Configurações","NoEditableVars":"Esse servidor não tem variáveis que você possa editar","ConfirmDelete":"Você quer mesmo excluir esse servidor? (isso não pode ser desfeito)","Delete":"Excluir servidor","Deleted":"Servidor deletado","NoReadme":"Não existe um readme disponível para esse modelo","SftpConnection":"Conectar ao SFTP","EditDefinition":"Edit Server Definition","Reload":"Recarregar dados do servidor do disco","Reloaded":"Dados do servidor recarregados","Autostart":"Iniciar o servidor junto com o node","Autorestart":"Reiniciar o servidor ao desligar","Autorecover":"Reiniciar o servidor ao crashar"}')
    },
    a43f: function(e) {
        e.exports = JSON.parse('{"Node":"ノード","Nodes":"ノード","Edit":"ノードを編集","Add":"ノードを追加する","Update":"ノードを更新","Delete":"ノードを削除","PublicHost":"公開ホスト","PublicPort":"公開ポート","PrivateHost":"プライベートホスト","PrivatePort":"プライベートポート","SftpPort":"SFTP ポート","SaveConfig":"設定を保存","SavePublicKey":"公開鍵を保存","DeploymentInstruction":"ノードをデプロイするには、新しいサーバに PufferPanel をインストールし、`/etc/pufferpanel/` にconfig ファイルを配置します。<br/>その後、新しいサーバで PufferPanel を再起動します。","UpdateSuccess":"ノードは正常に更新されました","UpdateError":"ノードの更新中にエラーが発生しました"}')
    },
    a45f: function(e) {
        e.exports = JSON.parse('{"Id":"ID","Name":"Nom","Address":"Adresse","Online":"En ligne","Offline":"Hors-ligne","Loading":"Chargement ...","General":"Général","Language":"Langue","SelectLanguage":"Sélectionner une langue","Settings":"Paramètres","Update":"Mise à jour","Edit":"Éditer","Delete":"Supprimer","Create":"Créer","Save":"Sauvegarder","Saved":"Sauvegardé","SaveFailed":"Échec de l\'enregistrement","Cancel":"Annuler","Confirm":"Confirmer","Actions":"Actions","Host":"Hôte","Port":"Port","Template":"Modèle","Options":"Options","Collapse":"Réduire","Copied":"Copié dans le presse-papier","Unknown":"Inconnu","Search":"Recherche","Back":"Précédent","Next":"Suivant","LanguageName":"Français","Details":"Détails","ErrorDetails":"Détails de l\'erreur","HelpTranslate":"Aidez-nous à traduire PufferPanel","DarkMode":"Mode sombre","ThemeOptions":"Options du thème","Protocol":"Protocole","Add":"Ajouter"}')
    },
    a566: function(e) {
        e.exports = JSON.parse('{"FileManager":"ファイル管理","NewFolder":"新しいフォルダー","NewFile":"新しいファイル","LastModified":"最終更新日時","ConfirmDelete":"このファイルを削除してもよろしいですか？","Upload":"アップロード","Download":"ダウンロード","Size":"サイズ","NoFiles":"ファイルがありません。ページ上部のインストールボタンをクリックするなどしてファイルを作成してください","FileLoadFailed":"ファイルの読み込みに失敗しました"}')
    },
    a630: function(e) {
        e.exports = JSON.parse('{"ErrGeneric":"Unknown error","ErrUnknownError":"Unknown error","ErrInvalidCredentials":"Invalid credentials","ErrServiceNotAvailable":"Service not available","ErrEmailNotConfigured":"Email not configured","ErrTokenInvalid":"Token is invalid","ErrClientNotFound":"Client not found","ErrUserNotFound":"User not found","ErrLoginNotPermitted":"Login not permitted","ErrInvalidTokenState":"Invalid token state","ErrSettingNotConfigured":"{setting} is not configured","ErrNoTemplate":"No template with name \'{name}\' was found","ErrServiceInvalidProvider":"{service} does not support {provider}","ErrFieldRequired":"{field} is required","ErrFieldMustBePrintable":"{field} must be printable ascii characters","ErrFieldHasURICharacters":"{field} must not contain characters which cannot be used in URIs","ErrFieldIsInvalidHost":"{field} must be a valid IP or FQDN","ErrFieldIsInvalidIP":"{field} must be a valid IP","ErrFieldTooLarge":"{field} cannot be larger than {max}","ErrFieldTooSmall":"{field} cannot be smaller than {min}","ErrFieldNotBetween":"{field} must be between {min} and {max}","ErrFieldEqual":"{field1} cannot be equal to {field2}","ErrFieldNotEqual":"{field1} is not equal to {field2}","ErrFieldNotEmail":"{field} is not a valid email","ErrFieldLength":"{field} must be at least {length} characters","ErrNoPermission":"You do not have permission to perform this action","ErrDatabaseNotAvailable":"Database is not available","ErrNoNodes":"No nodes available","ErrNoTemplates":"No templates available","ErrPasswordRequirements":"Password must be at least 8 characters","ErrUsernameRequirements":"Username must be at least 3 characters and only contain alphanumerics, _, or -","ErrPasswordsNotIdentical":"Passwords are not the same","ErrSessionTimedOut":"Your session timed out, please log in again","ErrMissingScope":"You are not authorized to perform this action","ErrInvalidJson":"The json data is invalid","ErrSocketFailed":"The WebSocket connection encountered an error, some features might be slow or broken"}')
    },
    a654: function(e) {
        e.exports = JSON.parse('{"Users":"Users","Add":"Add User","AccountSettings":"Account Settings","OldPassword":"Old Password","NewPassword":"New Password","ConfirmPassword":"Confirm Password","ChangePassword":"Change Password","ChangeInfo":"Change Account Details","InfoChanged":"Your information has been changed","PasswordChanged":"Your password has been changed","AccountPassword":"Account Password","Account":"Account","Login":"Masuk","LoginLink":"Or login here","Logout":"Keluar","Register":"Daftar","RegisterLink":"Atau daftar di sini","RegisterSuccess":"Berhasil terdaftar","NoEmailGiven":"You must provide the email of the user you want to add","Username":"Nama Pengguna","Password":"Kata Sandi","Email":"Email","Edit":"Edit pengguna","Update":"Update User","Delete":"Delete User","CreateSuccess":"Created User","CreateError":"Failed creating user","UpdateSuccess":"Updated User","UpdateError":"Failed updating user","PermsUpdateError":"Failed updating user permissions"}')
    },
    a6c2: function(e) {
        e.exports = JSON.parse('{"Templates":"Templates","NoTemplates":"There are no templates here yet","Deleted":"Template deleted","New":"Create new template","Edit":"Edit template","Editor":"Editor","Json":"JSON","Display":"Display Name","Type":"Type","Variables":"Variables","Install":"Install","AddInstallStep":"Add Install Step","DeleteInstallStep":"Delete Install Step","Description":"Description","DataType":"Data Type","DefaultValue":"Default Value","Required":"Required","UserEditable":"Users can edit","Value":"Value","AddOption":"Add an option","AddCommand":"Add command","Filename":"Filename","Content":"Content","Source":"Source","Target":"Target","Version":"Version","ReleaseType":"Release Type","AddFile":"Add file","AddVariable":"Add variable","Environment":"Environment","Environments":"Environments","AddEnvironment":"Add environment","DefaultEnvironment":"Default environment","AddEnvVar":"Add env variable","EnvVars":"Environment variables","DockerImage":"Docker Image","SaveSuccess":"Saved Template","VarNameNoSpaces":"A variable name cannot be empty or contain spaces","SupportedEnvironments":"Supported Environments","RunConfig":"Run Configuration","PreHook":"Pre Run Hook","PostHook":"Post Run Hook","AddPreStep":"Add Pre Run Step","AddPostStep":"Add Post Run Step","DeletePreStep":"Delete Pre Run Step","DeletePostStep":"Delete Post Run Step","Shutdown":"Shutdown","Command":"Command","Arguments":"Arguments","AddArgument":"Add an argument","import":{"OverrideWarning":"WARNING: Imported templates WILL overwrite existing templates with the same ID","Import":"Import templates","Tooltip":"Import templates from the official repository","Select":"Select templates to import","Started":"Importing templates, please wait a moment","Successful":"Successfully imported template {template}","NoTemplatesTitle":"Do you want to import templates?","NoTemplatesContent":"You currently don\'t have any templates. Templates are necessary to create servers.<br/>Do you want to import some templates from the official PufferPanel templates repository now?"},"stop":{"Command":"Command","Signal":"Signal"},"processors":{"download":{"ProcessorName":"Download","files":"Files"},"command":{"ProcessorName":"Run Command","commands":"Commands"},"alterfile":{"ProcessorName":"Change file","regex":"Treat search as RegEx","search":"Text to search","replace":"Replace with"},"writefile":{"ProcessorName":"Write to file","text":"Content"},"move":{"ProcessorName":"Move File","source":"Source","target":"Target"},"mkdir":{"ProcessorName":"Create Directory"},"mojangdl":{"ProcessorName":"Download Minecraft"},"forgedl":{"ProcessorName":"Download Minecraft Forge"},"spongeforgedl":{"ProcessorName":"Download Minecraft SpongeForge","releaseType":"Release Type"},"fabricdl":{"ProcessorName":"Download Minecraft Fabric"}}}')
    },
    a785: function(e, t, r) {
        "use strict";
        r.r(t);
        var a = function() {
                var e = this,
                    t = e.$createElement,
                    r = e._self._c || t;
                return r("div", ["boolean" === e.value.type ? r("ui-switch", {
                    attrs: {
                        value: e.value.value,
                        required: e.value.required,
                        label: e.value.display
                    },
                    on: {
                        input: function(t) {
                            return e.onInput(t)
                        }
                    }
                }, [r("template", {
                    slot: "message"
                }, [r("div", {
                    domProps: {
                        innerHTML: e._s(e.markdown(e.value.desc))
                    }
                })])], 2) : "option" === e.value.type ? r("ui-select", {
                    attrs: {
                        value: e.value.value,
                        "item-text": "display",
                        "item-value": "value",
                        items: e.value.options,
                        label: e.value.display
                    },
                    on: {
                        input: function(t) {
                            return e.onInput(t)
                        }
                    }
                }, [r("template", {
                    slot: "message"
                }, [r("div", {
                    domProps: {
                        innerHTML: e._s(e.markdown(e.value.desc))
                    }
                })])], 2) : r("ui-input", {
                    attrs: {
                        type: "integer" === e.value.type ? "number" : "text",
                        required: e.value.required,
                        label: e.value.display,
                        value: e.value.value
                    },
                    on: {
                        input: function(t) {
                            return e.onInput(t)
                        }
                    }
                }, [r("template", {
                    slot: "message"
                }, [r("div", {
                    domProps: {
                        innerHTML: e._s(e.markdown(e.value.desc))
                    }
                })])], 2)], 1)
            },
            o = [],
            n = r("8e36"),
            s = {
                props: {
                    value: {
                        type: Object,
                        required: !0
                    }
                },
                computed: {
                    look() {
                        return this.$vuetify.theme.options.inputStyle.split("-")[0]
                    },
                    flat() {
                        return -1 !== this.$vuetify.theme.options.inputStyle.split("-").indexOf("flat")
                    }
                },
                methods: {
                    onInput(e) {
                        this.$emit("input", {
                            ...this.value,
                            value: e
                        })
                    },
                    markdown: n["a"]
                }
            },
            i = s,
            l = r("2877"),
            d = Object(l["a"])(i, a, o, !1, null, null, null);
        t["default"] = d.exports
    },
    a78c: function(e, t, r) {
        "use strict";
        r.r(t);
        var a = function() {
                var e = this,
                    t = e.$createElement,
                    r = e._self._c || t;
                return r("v-text-field", e._g({
                    ref: "underlying",
                    attrs: {
                        id: e.id,
                        value: e.value,
                        outlined: "outlined" === e.lookValue,
                        solo: "solo" === e.lookValue,
                        filled: "filled" === e.lookValue,
                        flat: e.flat,
                        autofocus: e.autofocus,
                        dense: e.dense,
                        disabled: e.disabled,
                        label: e.label,
                        "hide-details": e.hideDetails && !e.showHint,
                        "persistent-hint": e.showHint,
                        hint: e.hintValue,
                        "error-messages": e.errorMessages,
                        "prepend-inner-icon": e.icon,
                        "append-icon": e.endIcon,
                        "append-outer-icon": e.iconBehind,
                        placeholder: e.placeholder,
                        required: e.required,
                        name: e.name,
                        type: e.type
                    },
                    on: {
                        input: function(t) {
                            return e.$emit("input", t)
                        }
                    }
                }, e.listeners), [e._l(e.$slots, (function(t, r) {
                    return e._t(r, null, {
                        slot: r
                    })
                }))], 2)
            },
            o = [];
        const n = ["outlined", "solo", "solo-flat", "filled", "material"];
        var s = {
                props: {
                    autofocus: {
                        type: Boolean,
                        default: () => !1
                    },
                    dense: {
                        type: Boolean,
                        default: () => !1
                    },
                    disabled: {
                        type: Boolean,
                        default: () => !1
                    },
                    endIcon: {
                        type: String,
                        default: () => {}
                    },
                    errorMessages: {
                        type: String,
                        default: () => {}
                    },
                    hint: {
                        type: String,
                        default: () => {}
                    },
                    icon: {
                        type: String,
                        default: () => {}
                    },
                    iconBehind: {
                        type: String,
                        default: () => {}
                    },
                    id: {
                        type: String,
                        default: () => {}
                    },
                    label: {
                        type: String,
                        default: () => {}
                    },
                    name: {
                        type: String,
                        default: () => {}
                    },
                    placeholder: {
                        type: String,
                        default: () => {}
                    },
                    required: {
                        type: Boolean,
                        default: () => !1
                    },
                    look: {
                        type: String,
                        validator: e => -1 !== n.indexOf(e),
                        default: () => {}
                    },
                    type: {
                        type: String,
                        default: () => "text"
                    },
                    value: {
                        type: void 0,
                        default: () => "",
                        required: !0
                    }
                },
                computed: {
                    listeners() {
                        const {input: e, ...t} = this.$listeners;
                        return t
                    },
                    hideDetails() {
                        const e = void 0 !== this.errorMessages && "" !== this.errorMessages;
                        return !e
                    },
                    showHint() {
                        const e = void 0 !== this.hint && "" !== this.hint,
                            t = void 0 !== this.$slots.message && "" !== this.$slots.message && this.$slots.message !== [];
                        return e || t
                    },
                    lookValue() {
                        const e = this.look ? this.look : this.$vuetify.theme.options.inputStyle;
                        return e.split("-")[0]
                    },
                    flat() {
                        const e = this.look ? this.look : this.$vuetify.theme.options.inputStyle;
                        return -1 !== e.split("-").indexOf("flat")
                    },
                    hintValue() {
                        return this.hint ? this.hint : this.$slots.message ? "_" : void 0
                    }
                },
                methods: {
                    focus() {
                        this.$refs.underlying.focus()
                    }
                }
            },
            i = s,
            l = r("2877"),
            d = r("6544"),
            c = r.n(d),
            u = r("8654"),
            m = Object(l["a"])(i, a, o, !1, null, null, null);
        t["default"] = m.exports;
        c()(m, {
            VTextField: u["a"]
        })
    },
    a7cd: function(e) {
        e.exports = JSON.parse('{"Node":"Node","Nodes":"Nodes","Edit":"-> Edit","Add":"Tambah Node","Update":"Perbarui node","Delete":"Hapus node","PublicHost":"Host publik","PublicPort":"Port Publik","PrivateHost":"Host pribadi","PrivatePort":"Port pribadi","SftpPort":"Port SFTP","SaveConfig":"Simpan Config","SavePublicKey":"Simpan kunci publik","DeploymentInstruction":"Untuk menjalankan node, install PufferPanel di server baru dan taruh file configurasi di `/etc/pufferpanel/`<br/> Lalu restart server baru di PufferPanel","UpdateSuccess":"Node berhasil diupdate.","UpdateError":"Kesalahan saat memperbarui node"}')
    },
    a888: function(e) {
        e.exports = JSON.parse('{"Id":"ID","Name":"Name","Address":"Address","Online":"Online","Offline":"Offline","Loading":"Loading...","General":"General","Language":"Language","SelectLanguage":"Select Language","Settings":"Settings","Update":"Update","Edit":"Edit","Delete":"Delete","Create":"Create","Save":"Save","Saved":"Saved","SaveFailed":"Failed saving","Cancel":"Cancel","Confirm":"Confirm","Actions":"Actions","Host":"Host","Port":"Port","Template":"Template","Options":"Options","Collapse":"Collapse","Copied":"Copied to clipboard","Unknown":"Unknown","Search":"Search","Back":"Back","Next":"Next","LanguageName":"Norsk","Details":"Details","ErrorDetails":"Error Details","HelpTranslate":"Help us translate PufferPanel","DarkMode":"Dark Mode","ThemeOptions":"Theme Options","Protocol":"Protocol","Add":"Add"}')
    },
    aa9e: function(e) {
        e.exports = JSON.parse('{"ErrGeneric":"Unknown error","ErrUnknownError":"Unknown error","ErrInvalidCredentials":"Invalid credentials","ErrServiceNotAvailable":"Service not available","ErrEmailNotConfigured":"Email not configured","ErrTokenInvalid":"Token is invalid","ErrClientNotFound":"Client not found","ErrUserNotFound":"User not found","ErrLoginNotPermitted":"Login not permitted","ErrInvalidTokenState":"Invalid token state","ErrSettingNotConfigured":"{setting} is not configured","ErrNoTemplate":"No template with name \'{name}\' was found","ErrServiceInvalidProvider":"{service} does not support {provider}","ErrFieldRequired":"{field} is required","ErrFieldMustBePrintable":"{field} must be printable ascii characters","ErrFieldHasURICharacters":"{field} must not contain characters which cannot be used in URIs","ErrFieldIsInvalidHost":"{field} must be a valid IP or FQDN","ErrFieldIsInvalidIP":"{field} must be a valid IP","ErrFieldTooLarge":"{field} cannot be larger than {max}","ErrFieldTooSmall":"{field} cannot be smaller than {min}","ErrFieldNotBetween":"{field} must be between {min} and {max}","ErrFieldEqual":"{field1} cannot be equal to {field2}","ErrFieldNotEqual":"{field1} is not equal to {field2}","ErrFieldNotEmail":"{field} is not a valid email","ErrFieldLength":"{field} must be at least {length} characters","ErrNoPermission":"You do not have permission to perform this action","ErrDatabaseNotAvailable":"Database is not available","ErrNoNodes":"No nodes available","ErrNoTemplates":"No templates available","ErrPasswordRequirements":"Password must be at least 8 characters","ErrUsernameRequirements":"Username must be at least 3 characters and only contain alphanumerics, _, or -","ErrPasswordsNotIdentical":"Passwords are not the same","ErrSessionTimedOut":"Your session timed out, please log in again","ErrMissingScope":"You are not authorized to perform this action","ErrInvalidJson":"The json data is invalid","ErrSocketFailed":"The WebSocket connection encountered an error, some features might be slow or broken"}')
    },
    abcb: function(e) {
        e.exports = JSON.parse('{"NoEnvFields":"There are no environment specific options for this environment","docker":{"name":"Docker","image":"Image","networkMode":"Network Mode","networkName":"Network Name","bindings":"Bindings","portBindings":"Port Bindings","OutsidePort":"Outside Port","InsidePort":"Inside Port","HostPath":"Host Path","ContainerPath":"Container Path"},"standard":{"name":"Standard"},"tty":{"name":"TTY"}}')
    },
    ac0b: function(e) {
        e.exports = JSON.parse('{"ServersView":"このサーバーの表示","ServersEdit":"サーバー編集","ServersInstall":"サーバーインストール","ServersConsole":"コンソール閲覧","ServersConsoleSend":"コンソールへコマンド送信","ServersStop":"サーバーの停止とキル","ServersStart":"サーバーを起動","ServersStat":"CPU とメモリの統計情報を表示","ServersFiles":"SFTP を使用してファイルへのアクセス","ServersFilesGet":"ファイル管理でファイルを表示およびダウンロードする","ServersFilesPut":"ファイル管理でファイルを表示およびダウンロード","ServersEditUsers":"このサーバーへのユーザーアクセス権を編集","Admin":"管理者 (すべての権限が付与されます)","ViewServers":"See Servers","CreateServers":"新しいサーバーを作成","DeleteServers":"サーバーを削除","EditServerAdmin":"サーバー設定","ViewNodes":"ノード参照","EditNodes":"ノードを編集","DeployNodes":"新しいノードをデプロイ","ViewTemplates":"テンプレートを見る","EditTemplates":"テンプレートの編集","ViewUsers":"すべてのユーザーを表示","EditUsers":"他のユーザーを編集"}')
    },
    ac0e: function(e, t, r) {},
    b053: function(e) {
        e.exports = JSON.parse('{"Users":"Usuários","Add":"Adicionar usuário","AccountSettings":"Configurações da Conta","OldPassword":"Senha antiga","NewPassword":"Senha nova","ConfirmPassword":"Confirmar senha","ChangePassword":"Alterar senha","ChangeInfo":"Alterar detalhes da conta","InfoChanged":"As informações da conta foram atualizadas","PasswordChanged":"Sua senha foi alterada","AccountPassword":"Senha da conta","Account":"Conta","Login":"Login","LoginLink":"Ou faça login aqui","Logout":"Encerrar sessão","Register":"Registrar","RegisterLink":"Ou registre-se aqui","RegisterSuccess":"Você se registrou com sucesso","NoEmailGiven":"Você deve informar o e-mail do usuário que deseja adicionar","Username":"Nome do usuário","Password":"Senha","Email":"Email","Edit":"Editar Usuário","Update":"Atualizar Usuário","Delete":"Excluir Usuário","CreateSuccess":"Usuário Criado","CreateError":"Falha ao criar o usuário","UpdateSuccess":"Usuário Atualizado","UpdateError":"Falha ao atualizar o usuário","PermsUpdateError":"Falha ao atualizar as permissões do usuário"}')
    },
    b0ce: function(e) {
        e.exports = JSON.parse('{"ServersView":"Kan se denne server","ServersEdit":"Rediger server","ServersInstall":"Installér server","ServersConsole":"Se konsollen","ServersConsoleSend":"Send kommandoer til konsollen","ServersStop":"Tving serveren til at stoppe","ServersStart":"Start serveren","ServersStat":"Se CPU og hukommelsesstatistik","ServersFiles":"Tillad adgang til filer ved hjælp af SFTP","ServersFilesGet":"Se og download filer ved hjælp af filhåndteringen","ServersFilesPut":"Rediger og upload filer ved hjælp af filhåndteringen","ServersEditUsers":"Rediger brugerens adgang til denne server","Admin":"Admin (dette giver alle tilladelser)","ViewServers":"See Servers","CreateServers":"Opret nye servere","DeleteServers":"Slet Servere","EditServerAdmin":"Rediger Serverindstillinger","ViewNodes":"Se Nodes","EditNodes":"Rediger Nodes","DeployNodes":"Installer nye nodes","ViewTemplates":"Se Skabeloner","EditTemplates":"Redigerer skabeloner","ViewUsers":"Se alle brugere","EditUsers":"Rediger andre brugere"}')
    },
    b1ba: function(e) {
        e.exports = JSON.parse('{"ErrGeneric":"Okänt fel","ErrUnknownError":"Okänt fel","ErrInvalidCredentials":"Ogiltiga inloggningsuppgifter","ErrServiceNotAvailable":"Tjänsten är inte tillgänglig","ErrEmailNotConfigured":"E-postadressen är inte konfigurerad","ErrTokenInvalid":"Nyckeln är ogiltig","ErrClientNotFound":"Klienten hittades inte","ErrUserNotFound":"Användaren kunde inte hittas","ErrLoginNotPermitted":"Inloggning är inte tillåtet","ErrInvalidTokenState":"Ogiltig nyckel-status","ErrSettingNotConfigured":"{setting} är inte konfigurerad","ErrNoTemplate":"Ingen mall med namnet \'{name}\' hittades","ErrServiceInvalidProvider":"{service} stöder inte {provider}","ErrFieldRequired":"{field} är obligatoriskt","ErrFieldMustBePrintable":"{field} måste vara utskrivbara ascii-tecken","ErrFieldHasURICharacters":"{field} får inte innehålla tecken som inte kan användas i URI:er","ErrFieldIsInvalidHost":"{field} måste vara en giltig IP eller FQDN","ErrFieldIsInvalidIP":"{field} måste vara en giltig IP","ErrFieldTooLarge":"{field} kan in vara större än {max}","ErrFieldTooSmall":"{field} kan inte vara mindre än {min}","ErrFieldNotBetween":"{field} måste vara mellan {min} och {max}","ErrFieldEqual":"{field1} kan inte vara lika med {field2}","ErrFieldNotEqual":"{field1} är inte lika med {field2}","ErrFieldNotEmail":"{field} är inte en godkänd email","ErrFieldLength":"{field} måste vara minst {length} tecken","ErrNoPermission":"Du har inte behörighet att utföra detta kommando","ErrDatabaseNotAvailable":"Databasen är inte tillgänglig","ErrNoNodes":"Inga noder tillgängliga","ErrNoTemplates":"Ingen mall tillgänglig","ErrPasswordRequirements":"Lösenord måste vara minst 8 tecken","ErrUsernameRequirements":"Användarnamn måste vara minst 3 tecken och innehålla alfanumeriska tecken, _, eller -","ErrPasswordsNotIdentical":"Lösenorden är inte likadana","ErrSessionTimedOut":"Your session timed out, please log in again","ErrMissingScope":"Du har inte behörighet att utföra denna åtgärd","ErrInvalidJson":"Json-datan är ogiltiga","ErrSocketFailed":"WebSocket-anslutningen stötte på ett fel, vissa funktioner kan vara långsam eller trasig"}')
    },
    b3a1: function(e) {
        e.exports = JSON.parse('{"Users":"Käyttäjät","Add":"Lisää käyttäjä","AccountSettings":"Käyttäjäasetukset","OldPassword":"Vanha salasana","NewPassword":"Uusi Salasana","ConfirmPassword":"Vahvista salasana","ChangePassword":"Vaihda salasana","ChangeInfo":"Muuta Tilin Tietoja","InfoChanged":"Your information has been changed","PasswordChanged":"Your password has been changed","AccountPassword":"Account Password","Account":"Käyttäjä","Login":"Kirjaudu","LoginLink":"Or login here","Logout":"Kirjaudu ulos","Register":"Rekisteröidy","RegisterLink":"Or register here","RegisterSuccess":"You have successfully registered","NoEmailGiven":"You must provide the email of the user you want to add","Username":"Käyttäjänimi","Password":"Salasana","Email":"Sähköpostiosoite","Edit":"Muokkaa käyttäjää","Update":"Update User","Delete":"Poista käyttäjä","CreateSuccess":"Created User","CreateError":"Failed creating user","UpdateSuccess":"Updated User","UpdateError":"Failed updating user","PermsUpdateError":"Failed updating user permissions"}')
    },
    b3d7: function(e) {
        e.exports = JSON.parse('{"Users":"Users","Add":"Add User","AccountSettings":"Account Settings","OldPassword":"Old Password","NewPassword":"New Password","ConfirmPassword":"Confirm Password","ChangePassword":"Change Password","ChangeInfo":"Change Account Details","InfoChanged":"Your information has been changed","PasswordChanged":"Your password has been changed","AccountPassword":"Account Password","Account":"Account","Login":"Login","LoginLink":"Or login here","Logout":"Logout","Register":"Register","RegisterLink":"Or register here","RegisterSuccess":"You have successfully registered","NoEmailGiven":"You must provide the email of the user you want to add","Username":"Username","Password":"Password","Email":"Email","Edit":"Edit User","Update":"Update User","Delete":"Delete User","CreateSuccess":"Created User","CreateError":"Failed creating user","UpdateSuccess":"Updated User","UpdateError":"Failed updating user","PermsUpdateError":"Failed updating user permissions"}')
    },
    b414: function(e) {
        e.exports = JSON.parse('{"NoEnvFields":"There are no environment specific options for this environment","docker":{"name":"Docker","image":"Image","networkMode":"Network Mode","networkName":"Network Name","bindings":"Bindings","portBindings":"Port Bindings","OutsidePort":"Outside Port","InsidePort":"Inside Port","HostPath":"Host Path","ContainerPath":"Container Path"},"standard":{"name":"Standard"},"tty":{"name":"TTY"}}')
    },
    b4a8: function(e) {
        e.exports = JSON.parse('{"FileManager":"Fájlkezelő","NewFolder":"Új mappa","NewFile":"Új fájl","LastModified":"Utoljára módosítva","ConfirmDelete":"Biztosan törli ezt a fájlt?","Upload":"Feltöltés","Download":"Letöltés","Size":"Méret","NoFiles":"Ez a hely még nem tartalmaz fájlokat. A lap tetején található telepítés gombbra kattintva létre tudja hozni a legfontosabbakat","FileLoadFailed":"Fájlok betöltése sikertelen"}')
    },
    b617: function(e) {
        e.exports = JSON.parse('{"ServersView":"Può visualizzare questo server","ServersEdit":"Modifica il server","ServersInstall":"Installa il server","ServersConsole":"Visualizza la console","ServersConsoleSend":"Invia i comandi alla console","ServersStop":"Interrompi e termina il server","ServersStart":"Avvia il server","ServersStat":"Visualizza statistiche CPU e memoria","ServersFiles":"Consenti l\'accesso ai file usando SFTP","ServersFilesGet":"Visualizza e scarica i file usando il gestore dei file","ServersFilesPut":"Modifica e carica i file usando il gestore dei file","ServersEditUsers":"Modifica l\'accesso dell\'utente a questo server","Admin":"Amministratore (ciò garantisce ogni permesso possibile)","ViewServers":"See Servers","CreateServers":"Crea nuovi Server","DeleteServers":"Elimina i Server","EditServerAdmin":"Modifica Impostazioni del Server","ViewNodes":"Vedi Nodi","EditNodes":"Modifica Nodi","DeployNodes":"Sviluppa nuovi Nodi","ViewTemplates":"Vedi Modelli","EditTemplates":"Modifica Modelli","ViewUsers":"Vedi tutti gli Utenti","EditUsers":"Modifica altri Utenti"}')
    },
    b689: function(e) {
        e.exports = JSON.parse('{"FileManager":"Manajer File","NewFolder":"Folder baru","NewFile":"Berkas baru","LastModified":"Terakhir Diubah","ConfirmDelete":"Anda yakin Anda ingin menghapus file ini?","Upload":"Unggah","Download":"Unduh","Size":"Ukuran","NoFiles":"There are no files here yet, go and create some for example by clicking the install button at the top of the page","FileLoadFailed":"Gagal memuat file"}')
    },
    b6ae: function(e) {
        e.exports = JSON.parse('{"Server":"خادم","NoServers":"لا توجد خوادم لديك حق الوصول إليها","Servers":"خوادم","Add":"إضافة خادم","Console":"وحدة التحكم","Controls":"عناصر التحكم","SFTPInfo":"معلومات SFTP","Restart":"اعادة تشغيل","Start":"بدء","Stop":"إيقاف","Kill":"فرض الإيقاف","Install":"تثبيت","Send":"إرسال","Pause":"إيقاف مؤقت","CPU":"وحدة المعالجة المركزية","Memory":"ذاكرة الوصول العشوائي","Name":"اسم الخادم","SelectNode":"الرجاء تحديد Node","SelectTemplate":"يرجى تحديد قالب","SelectThisTemplate":"استخدام هذا القالب","SelectUser":"يرجى إختيار مستخدم","Environment":"بيئة النظام","SelectEnvironment":"الرجاء تحديد البيئة","TypeUsername":"أدخل اسم مستخدم","AdminControls":"ضوابط المشرف","Settings":"الإعدادات","NoEditableVars":"هذا الخادم لا يحتوي على متغيرات يمكنك تعديلها","ConfirmDelete":"هل تريد حذف هذا الخادم حقاً؟ (لا يمكن التراجع عن هذا)","Delete":"حذف الخادم","Deleted":"الخادم المحذوف","NoReadme":"لا يوجد تعليمات متاحة لهذا القالب","SftpConnection":"الاتصال بـ SFTP","EditDefinition":"Edit Server Definition","Reload":"إعادة تحميل بيانات الخادم من القرص","Reloaded":"إعادة تحميل بيانات الخادم","Autostart":"بدء تشغيل الخادم عندما يشتغل ال Node","Autorestart":"إعادة تشغيل الخادم عندما يتوقف بشكل طبيعي","Autorecover":"إعادة تشغيل الخادم عند توقفة"}')
    },
    b8d7: function(e) {
        e.exports = JSON.parse('{"Users":"Users","Add":"Add User","AccountSettings":"Account Settings","OldPassword":"Old Password","NewPassword":"New Password","ConfirmPassword":"Confirm Password","ChangePassword":"Change Password","ChangeInfo":"Change Account Details","InfoChanged":"Your information has been changed","PasswordChanged":"Your password has been changed","AccountPassword":"Account Password","Account":"Account","Login":"Login","LoginLink":"Or login here","Logout":"Logout","Register":"Register","RegisterLink":"Or register here","RegisterSuccess":"You have successfully registered","NoEmailGiven":"You must provide the email of the user you want to add","Username":"Username","Password":"Password","Email":"Email","Edit":"Edit User","Update":"Update User","Delete":"Delete User","CreateSuccess":"Created User","CreateError":"Failed creating user","UpdateSuccess":"Updated User","UpdateError":"Failed updating user","PermsUpdateError":"Failed updating user permissions"}')
    },
    b974c: function(e, t, r) {
        "use strict";
        r.r(t);
        var a = function() {
                var e = this,
                    t = e.$createElement,
                    r = e._self._c || t;
                return r("v-overlay", {
                    attrs: {
                        dark: e.isDark(),
                        color: "#434343"
                    },
                    model: {
                        value: e.value,
                        callback: function(t) {
                            e.value = t
                        },
                        expression: "value"
                    }
                }, [r("v-container", {
                    staticClass: "overlayContainer",
                    attrs: {
                        fluid: ""
                    }
                }, [r("v-row", [r("v-col", {
                    attrs: {
                        cols: "12",
                        "offset-md": "1",
                        md: "10"
                    }
                }, [e.card ? r("v-card", [r("v-card-title", [e.title && "" !== e.title ? r("span", {
                    domProps: {
                        textContent: e._s(e.title)
                    }
                }) : e._t("title"), r("v-spacer"), e.closable ? r("v-btn", {
                    attrs: {
                        icon: ""
                    },
                    on: {
                        click: function(t) {
                            e.$emit("close"),
                            e.$emit("input", !1)
                        }
                    }
                }, [r("v-icon", [e._v("mdi-close")])], 1) : e._e()], 2), r("v-card-text", {
                    staticClass: "overlayContent"
                }, [e._t("default")], 2), r("v-card-actions", [e._t("actions")], 2)], 1) : r("v-sheet", {
                    staticClass: "overlayContent"
                }, [e._t("default")], 2)], 1)], 1)], 1)], 1)
            },
            o = [],
            n = r("96ea"),
            s = {
                props: {
                    card: {
                        type: Boolean,
                        default: () => !1
                    },
                    closable: {
                        type: Boolean,
                        default: () => !1
                    },
                    title: {
                        type: String,
                        default: () => ""
                    },
                    value: {
                        type: Boolean,
                        default: () => !1
                    }
                },
                methods: {
                    isDark: n["a"]
                }
            },
            i = s,
            l = (r("4b15"), r("2877")),
            d = r("6544"),
            c = r.n(d),
            u = r("8336"),
            m = r("b0af"),
            p = r("99d9"),
            v = r("62ad"),
            f = r("a523"),
            S = r("132d"),
            g = r("a797"),
            h = r("0fd9"),
            E = r("8dd9"),
            P = r("2fa4"),
            N = Object(l["a"])(i, a, o, !1, null, null, null);
        t["default"] = N.exports;
        c()(N, {
            VBtn: u["a"],
            VCard: m["a"],
            VCardActions: p["a"],
            VCardText: p["c"],
            VCardTitle: p["d"],
            VCol: v["a"],
            VContainer: f["a"],
            VIcon: S["a"],
            VOverlay: g["a"],
            VRow: h["a"],
            VSheet: E["a"],
            VSpacer: P["a"]
        })
    },
    bb3a: function(e) {
        e.exports = JSON.parse('{"Id":"ID","Name":"Nume","Address":"Adresa","Online":"Online","Offline":"Offline","Loading":"Se încarcă...","General":"General","Language":"Limbă","SelectLanguage":"Selectaţi limba","Settings":"Setari","Update":"Actualizează","Edit":"Editaţi","Delete":"Ştergeţi","Create":"Creează","Save":"Salvează","Saved":"Salvat","SaveFailed":"Salvare eșuată","Cancel":"Anulează","Confirm":"Confirmă","Actions":"Acțiuni","Host":"Gazdă","Port":"Port","Template":"Model","Options":"Opţiuni","Collapse":"Restrânge","Copied":"Copiaţi în clipboard","Unknown":"Necunoscută","Search":"Căutare","Back":"Înapoi","Next":"Inainte","LanguageName":"Română","Details":"Detalii","ErrorDetails":"Detalii eroare","HelpTranslate":"Ajută-ne să traducem PufferPanel","DarkMode":"Mod întunecat","ThemeOptions":"Opţiuni temă","Protocol":"Protocol","Add":"Add"}')
    },
    bb68: function(e) {
        e.exports = JSON.parse('{"Server":"Server","NoServers":"There are no servers you have access to","Servers":"Servers","Add":"Add Server","Console":"Console","Controls":"Controls","SFTPInfo":"SFTP Information","Restart":"Restart","Start":"Start","Stop":"Stop","Kill":"Kill","Install":"Install","Send":"Send","Pause":"Pause","CPU":"CPU","Memory":"Memory","Name":"Server Name","SelectNode":"Please select node","SelectTemplate":"Please select template","SelectThisTemplate":"Use this template","SelectUser":"Please select user","Environment":"Environment","SelectEnvironment":"Please select environment","TypeUsername":"Type a username","AdminControls":"Admin Controls","Settings":"Settings","NoEditableVars":"This server does not have variables you can edit","ConfirmDelete":"Do you really want to delete this server? (this cannot be undone)","Delete":"Delete Server","Deleted":"Deleted Server","NoReadme":"No readme available for this template","SftpConnection":"Connect to SFTP","EditDefinition":"Edit Server Definition","Reload":"Reload server data from disk","Reloaded":"Reloaded server data","Autostart":"Start the server when the node starts","Autorestart":"Restart the server when it stops normally","Autorecover":"Restart the server when it crashes"}')
    },
    bb78: function(e) {
        e.exports = JSON.parse('{"Node":"Node","Nodes":"Nodes","Edit":"Edit Node","Add":"Add Node","Update":"Update Node","Delete":"Delete Node","PublicHost":"Public Host","PublicPort":"Public Port","PrivateHost":"Private Host","PrivatePort":"Private Port","SftpPort":"SFTP Port","SaveConfig":"Save Config","SavePublicKey":"Save Public Key","DeploymentInstruction":"To deploy the node, install PufferPanel on the new server and place the config file in `/etc/pufferpanel/`<br/>Restart PufferPanel on the new server afterwards.","UpdateSuccess":"Successfully updated node","UpdateError":"Error updating node"}')
    },
    bc12: function(e) {
        e.exports = JSON.parse('{"NoEnvFields":"Pro toto prostředí neexistují žádné specifické možnosti prostředí","docker":{"name":"Docker","image":"Obraz","networkMode":"Síťový režim","networkName":"Název sítě","bindings":"Vazby","portBindings":"Vázání portů","OutsidePort":"Mimo port","InsidePort":"Uvnitř portu","HostPath":"Cesta hostitele","ContainerPath":"Cesta kontejneru"},"standard":{"name":"Standartní"},"tty":{"name":"TTY"}}')
    },
    bc7a: function(e) {
        e.exports = JSON.parse('{"Server":"Sunucu","NoServers":"Erişim sağlama yetkin olan sunucu yok","Servers":"Sunucular","Add":"Sunucu Ekle","Console":"Konsol","Controls":"Kontroller","SFTPInfo":"SFTP Bilgisi","Restart":"Restart","Start":"Başlat","Stop":"Durdur","Kill":"Sonlandır","Install":"Kur","Send":"Gönder","Pause":"Durdur","CPU":"CPU","Memory":"Ram","Name":"Sunucu Adı","SelectNode":"Lütfen node seçiniz","SelectTemplate":"Lütfen şablon seçiniz","SelectThisTemplate":"Bu şablonu kullan","SelectUser":"Lütfen bir kullanıcı seçin","Environment":"Environment","SelectEnvironment":"Please select environment","TypeUsername":"Kullanıcı adınızı girin","AdminControls":"Yönetici Ayarları","Settings":"Ayarlar","NoEditableVars":"Bu sunucuda düzenleyebileceğiniz değişkenler yok","ConfirmDelete":"Sunucuyu cidden silmek istiyor musun? (geri getiremezsin)","Delete":"Sunucuyu Sil","Deleted":"Silinmiş Sunucu","NoReadme":"Bu şablon için \\"beni oku\\" dosyası yok","SftpConnection":"SFTP Bağlan","EditDefinition":"Edit Server Definition","Reload":"Sunucu verisini yeniden yükle","Reloaded":"Sunucu verisi yeniden yüklendi","Autostart":"Node başladığında sunucuyu başlat","Autorestart":"Sunucu normal bir şekilde kapatıldığında yeniden başlat","Autorecover":"Sunucu çöktüğünde otomatik yeniden başlat"}')
    },
    bcbc: function(e) {
        e.exports = JSON.parse('{"Id":"Azonosító","Name":"Név","Address":"Cím","Online":"Elérhető","Offline":"Nem elérhető","Loading":"Betöltés...","General":"Általános","Language":"Nyelv","SelectLanguage":"Nyelv kiválasztása","Settings":"Beállítások","Update":"Frissítés","Edit":"Szerkesztés","Delete":"Törlés","Create":"Létrehozás","Save":"Mentés","Saved":"Elmentve","SaveFailed":"Sikertelen mentés","Cancel":"Visszavonás","Confirm":"Jóváhagyás","Actions":"Műveletek","Host":"Kiszolgáló","Port":"Port","Template":"Sablon","Options":"Opciók","Collapse":"Összecsukás","Copied":"Vágólapra másolva","Unknown":"Ismeretlen","Search":"Keresés","Back":"Vissza","Next":"Tovább","LanguageName":"Magyar","Details":"Részletek","ErrorDetails":"Hiba részletei","HelpTranslate":"Segítsen a PufferPanel fordításában","DarkMode":"Sötét mód","ThemeOptions":"Téma beállítások","Protocol":"Protocol","Add":"Add"}')
    },
    be06: function(e) {
        e.exports = JSON.parse('{"Node":"Node","Nodes":"Nodes","Edit":"Edit Node","Add":"Add Node","Update":"Update Node","Delete":"Delete Node","PublicHost":"Public Host","PublicPort":"Public Port","PrivateHost":"Private Host","PrivatePort":"Private Port","SftpPort":"SFTP Port","SaveConfig":"Save Config","SavePublicKey":"Save Public Key","DeploymentInstruction":"To deploy the node, install PufferPanel on the new server and place the config file in `/etc/pufferpanel/`<br/>Restart PufferPanel on the new server afterwards.","UpdateSuccess":"Successfully updated node","UpdateError":"Error updating node"}')
    },
    be1e: function(e) {
        e.exports = JSON.parse('{"ErrGeneric":"Neznámá chyba","ErrUnknownError":"Neznámá chyba","ErrInvalidCredentials":"Neplatné údaje","ErrServiceNotAvailable":"Služba není k dispozici","ErrEmailNotConfigured":"E-mail není nakonfigurován","ErrTokenInvalid":"Token je neplatný","ErrClientNotFound":"Klient nebyl nalezen","ErrUserNotFound":"Uživatel nenalezen","ErrLoginNotPermitted":"Přihlášení není povoleno","ErrInvalidTokenState":"Neplatný stav token","ErrSettingNotConfigured":"{setting} není nakonfigurován","ErrNoTemplate":"Nebyla nalezena žádná šablona s názvem \'{name}\'","ErrServiceInvalidProvider":"{service} nepodporuje {provider}","ErrFieldRequired":"{field} je povinné","ErrFieldMustBePrintable":"{field} musí být tisknutelné znaky ascii","ErrFieldHasURICharacters":"{field} nesmí obsahovat znaky, které nelze použít v URI","ErrFieldIsInvalidHost":"{field} musí být platné IP nebo FQDN","ErrFieldIsInvalidIP":"{field} musí být platná IP adresa","ErrFieldTooLarge":"{field} nemůže být větší než {max}","ErrFieldTooSmall":"{field} nemůže být menší než {min}","ErrFieldNotBetween":"{field} musí být mezi {min} a {max}","ErrFieldEqual":"{field1} nemůže být roven {field2}","ErrFieldNotEqual":"{field1} není rovno {field2}","ErrFieldNotEmail":"{field} není platný e-mail","ErrFieldLength":"{field} musí mít alespoň {length} znaků","ErrNoPermission":"Nemáte oprávnění k provedení této akce","ErrDatabaseNotAvailable":"Databáze není k dispozici","ErrNoNodes":"Žádné uzly nejsou k dispozici","ErrNoTemplates":"Žádné šablony nejsou k dispozici","ErrPasswordRequirements":"Heslo musí být nejméně 8 znaků dlouhé","ErrUsernameRequirements":"Uživatelské jméno musí mít alespoň 3 znaky a obsahovat pouze alfanumerické znaky, _, nebo -","ErrPasswordsNotIdentical":"Hesla nejsou stejná","ErrSessionTimedOut":"Vypršel časový limit relace, přihlaste se prosím znovu","ErrMissingScope":"Nemáte oprávnění k provedení této akce","ErrInvalidJson":"Data json jsou neplatná","ErrSocketFailed":"Při připojení k WebSocketu došlo k chybě, některé funkce mohou být pomalé nebo poškozené"}')
    },
    bf01: function(e) {
        e.exports = JSON.parse('{"Templates":"Mallar","NoTemplates":"Det finns inga mallar här än","Deleted":"Mall borttagen","New":"Skapa ny mall","Edit":"Redigera mall","Editor":"Redigerare","Json":"JSON","Display":"Visningsnamn","Type":"Typ","Variables":"Variabler","Install":"Installera","AddInstallStep":"Lägg till installationssteg","DeleteInstallStep":"Ta bort installationssteg","Description":"Beskrivning","DataType":"Typ av data","DefaultValue":"Förvalt värde","Required":"Krävs","UserEditable":"Användare kan redigera","Value":"Värde","AddOption":"Lägg till ett alternativ","AddCommand":"Lägg till kommando","Filename":"Filnamn","Content":"Content","Source":"Source","Target":"Target","Version":"Version","ReleaseType":"Release Type","AddFile":"Add file","AddVariable":"Add variable","Environment":"Environment","Environments":"Environments","AddEnvironment":"Add environment","DefaultEnvironment":"Default environment","AddEnvVar":"Add env variable","EnvVars":"Environment variables","DockerImage":"Docker Image","SaveSuccess":"Saved Template","VarNameNoSpaces":"A variable name cannot be empty or contain spaces","SupportedEnvironments":"Supported Environments","RunConfig":"Run Configuration","PreHook":"Pre Run Hook","PostHook":"Post Run Hook","AddPreStep":"Add Pre Run Step","AddPostStep":"Add Post Run Step","DeletePreStep":"Delete Pre Run Step","DeletePostStep":"Delete Post Run Step","Shutdown":"Shutdown","Command":"Command","Arguments":"Arguments","AddArgument":"Add an argument","import":{"OverrideWarning":"WARNING: Imported templates WILL overwrite existing templates with the same ID","Import":"Import templates","Tooltip":"Import templates from the official repository","Select":"Select templates to import","Started":"Importing templates, please wait a moment","Successful":"Successfully imported template {template}","NoTemplatesTitle":"Do you want to import templates?","NoTemplatesContent":"You currently don\'t have any templates. Templates are necessary to create servers.<br/>Do you want to import some templates from the official PufferPanel templates repository now?"},"stop":{"Command":"Command","Signal":"Signal"},"processors":{"download":{"ProcessorName":"Download","files":"Files"},"command":{"ProcessorName":"Run Command","commands":"Commands"},"alterfile":{"ProcessorName":"Change file","regex":"Treat search as RegEx","search":"Text to search","replace":"Replace with"},"writefile":{"ProcessorName":"Write to file","text":"Content"},"move":{"ProcessorName":"Move File","source":"Source","target":"Target"},"mkdir":{"ProcessorName":"Create Directory"},"mojangdl":{"ProcessorName":"Download Minecraft"},"forgedl":{"ProcessorName":"Download Minecraft Forge"},"spongeforgedl":{"ProcessorName":"Download Minecraft SpongeForge","releaseType":"Release Type"},"fabricdl":{"ProcessorName":"Download Minecraft Fabric"}}}')
    },
    bf70: function(e) {
        e.exports = JSON.parse('{"Templates":"Templates","NoTemplates":"There are no templates here yet","Deleted":"Template deleted","New":"Create new template","Edit":"Edit template","Editor":"Editor","Json":"JSON","Display":"Display Name","Type":"Type","Variables":"Variables","Install":"Install","AddInstallStep":"Add Install Step","DeleteInstallStep":"Delete Install Step","Description":"Description","DataType":"Data Type","DefaultValue":"Default Value","Required":"Required","UserEditable":"Users can edit","Value":"Value","AddOption":"Add an option","AddCommand":"Add command","Filename":"Filename","Content":"Content","Source":"Source","Target":"Target","Version":"Version","ReleaseType":"Release Type","AddFile":"Add file","AddVariable":"Add variable","Environment":"Environment","Environments":"Environments","AddEnvironment":"Add environment","DefaultEnvironment":"Default environment","AddEnvVar":"Add env variable","EnvVars":"Environment variables","DockerImage":"Docker Image","SaveSuccess":"Saved Template","VarNameNoSpaces":"A variable name cannot be empty or contain spaces","SupportedEnvironments":"Supported Environments","RunConfig":"Run Configuration","PreHook":"Pre Run Hook","PostHook":"Post Run Hook","AddPreStep":"Add Pre Run Step","AddPostStep":"Add Post Run Step","DeletePreStep":"Delete Pre Run Step","DeletePostStep":"Delete Post Run Step","Shutdown":"Shutdown","Command":"Command","Arguments":"Arguments","AddArgument":"Add an argument","import":{"OverrideWarning":"WARNING: Imported templates WILL overwrite existing templates with the same ID","Import":"Import templates","Tooltip":"Import templates from the official repository","Select":"Select templates to import","Started":"Importing templates, please wait a moment","Successful":"Successfully imported template {template}","NoTemplatesTitle":"Do you want to import templates?","NoTemplatesContent":"You currently don\'t have any templates. Templates are necessary to create servers.<br/>Do you want to import some templates from the official PufferPanel templates repository now?"},"stop":{"Command":"Command","Signal":"Signal"},"processors":{"download":{"ProcessorName":"Download","files":"Files"},"command":{"ProcessorName":"Run Command","commands":"Commands"},"alterfile":{"ProcessorName":"Change file","regex":"Treat search as RegEx","search":"Text to search","replace":"Replace with"},"writefile":{"ProcessorName":"Write to file","text":"Content"},"move":{"ProcessorName":"Move File","source":"Source","target":"Target"},"mkdir":{"ProcessorName":"Create Directory"},"mojangdl":{"ProcessorName":"Download Minecraft"},"forgedl":{"ProcessorName":"Download Minecraft Forge"},"spongeforgedl":{"ProcessorName":"Download Minecraft SpongeForge","releaseType":"Release Type"},"fabricdl":{"ProcessorName":"Download Minecraft Fabric"}}}')
    },
    c0ae: function(e) {
        e.exports = JSON.parse('{"Id":"Číslo [ID]","Name":"Jméno","Address":"Adresa","Online":"Online","Offline":"Offline","Loading":"Nahrává se...","General":"Obecné","Language":"Jazyk","SelectLanguage":"Zvolte jazyk","Settings":"Nastavení","Update":"Aktualizovat","Edit":"Upravit","Delete":"Smazat","Create":"Vytvořit","Save":"Uložit","Saved":"Uloženo","SaveFailed":"Nepodařilo se uložit","Cancel":"Zrušit","Confirm":"Potvrdit","Actions":"Akce","Host":"Hostitelský server","Port":"Port","Template":"Šablona","Options":"Možnosti","Collapse":"Sbalit","Copied":"Zkopírováno do schránky","Unknown":"Neznámý","Search":"Vyhledat","Back":"Zpět","Next":"Další","LanguageName":"Angličtina","Details":"Podrobnosti","ErrorDetails":"Podrobnosti o chybách","HelpTranslate":"Pomozte nám přeložit PufferPanel","DarkMode":"Tmavý režim","ThemeOptions":"Možnosti vzhledu","Protocol":"Protokol","Add":"Přidat"}')
    },
    c2a0: function(e) {
        e.exports = JSON.parse('{"Templates":"Sablonok","NoTemplates":"Még nincsenek itt sablonok","Deleted":"Template deleted","New":"Új sablon","Edit":"Sablon szerkesztése","Editor":"Szerkesztő","Json":"JSON","Display":"Megjelenítendő név","Type":"Típus","Variables":"Mezők","Install":"Telepítés","AddInstallStep":"Telepítési lépés hozzáadása","DeleteInstallStep":"Telepítési lépés törlése","Description":"Leírás","DataType":"Adattípus","DefaultValue":"Alapérték","Required":"Kötelező","UserEditable":"Felhasználók változtathatják","Value":"Érték","AddOption":"Opció hozzáadása","AddCommand":"Parancs hozzáadása","Filename":"Fájlnév","Content":"Tartalom","Source":"Forrás","Target":"Célpont","Version":"Verzió","ReleaseType":"A kiadás típusa","AddFile":"Fájl hozzáadása","AddVariable":"Mező hozzáadása","Environment":"Environment","Environments":"Environments","AddEnvironment":"Környezet hozzáadása","DefaultEnvironment":"Default environment","AddEnvVar":"Új környezeti változó hozzáadása","EnvVars":"Környezeti változók","DockerImage":"Docker kép","SaveSuccess":"Sablon elmentve","VarNameNoSpaces":"A mező neve nem lehet üres és nem tartalmazhat szóközöket","SupportedEnvironments":"Támogatott környezetek","RunConfig":"Konfiguráció futtatása","PreHook":"Elődleges beavatkozási rutinok","PostHook":"Utólagos beavatkozási rutinok","AddPreStep":"Elődleges beavatkozási rutin hozzáadása","AddPostStep":"Utólagos beavatkozási rutin hozzáadása","DeletePreStep":"Elődleges beavatkozási rutin törlése","DeletePostStep":"Utólagos beavatkozási rutin törlése","Shutdown":"Leállítás","Command":"Parancs","Arguments":"Argumentumok","AddArgument":"Argumentum hozzáadása","import":{"OverrideWarning":"FIGYELEM: Az importált sablonok ÁTÍRNAK minden létező sablont, aminek egyező IDje van","Import":"Sablonok importálása","Tooltip":"Sablonok importálása a hivatalos adattárból","Select":"Válassza ki az importálandó sablonokat","Started":"Sablonok importálása, egy pillanat...","Successful":"A(z) {template} sablon sikeresen importálva","NoTemplatesTitle":"Szeretne sablonokat importálni?","NoTemplatesContent":"Jelenleg nincsen egy sablonja se. A szerverek felállításához viszont szükségesek.<br/>Szeretne a PufferPanel officiális adattárából egy pár sablont importálni?"},"stop":{"Command":"Parancs","Signal":"Jel"},"processors":{"download":{"ProcessorName":"Download","files":"Files"},"command":{"ProcessorName":"Run Command","commands":"Commands"},"alterfile":{"ProcessorName":"Change file","regex":"Treat search as RegEx","search":"Text to search","replace":"Replace with"},"writefile":{"ProcessorName":"Write to file","text":"Content"},"move":{"ProcessorName":"Move File","source":"Source","target":"Target"},"mkdir":{"ProcessorName":"Create Directory"},"mojangdl":{"ProcessorName":"Download Minecraft"},"forgedl":{"ProcessorName":"Download Minecraft Forge"},"spongeforgedl":{"ProcessorName":"Download Minecraft SpongeForge","releaseType":"Release Type"},"fabricdl":{"ProcessorName":"Download Minecraft Fabric"}}}')
    },
    c370: function(e) {
        e.exports = JSON.parse('{"ErrGeneric":"未知錯誤","ErrUnknownError":"未知錯誤","ErrInvalidCredentials":"無效憑證","ErrServiceNotAvailable":"服務不可用","ErrEmailNotConfigured":"電郵未完成配置","ErrTokenInvalid":"金鑰無效","ErrClientNotFound":"找不到此客戶","ErrUserNotFound":"找不到此用戶","ErrLoginNotPermitted":"登入被拒","ErrInvalidTokenState":"金鑰狀態無效","ErrSettingNotConfigured":"{setting} 未完成配置","ErrNoTemplate":"找不到{name}範本","ErrServiceInvalidProvider":"{service}不支援{provider}","ErrFieldRequired":"{field}為必填","ErrFieldMustBePrintable":"{field}必需為可顯示的ASCII字符","ErrFieldHasURICharacters":"{field}只可包含可用在URI的字符","ErrFieldIsInvalidHost":"{field}必需為一個有效IP地址或完全資格域名","ErrFieldIsInvalidIP":"{field}必需為一個有效IP地址","ErrFieldTooLarge":"{field}不可大於{max}","ErrFieldTooSmall":"{field}不可小於{min}","ErrFieldNotBetween":"{field}需在{min}和{max}之間","ErrFieldEqual":"{field1}不可與{field2}相同","ErrFieldNotEqual":"{field1}與{field2}不相同","ErrFieldNotEmail":"{field}不是一個有效的電郵","ErrFieldLength":"{field}不可少於{length}字","ErrNoPermission":"你沒有操作權限","ErrDatabaseNotAvailable":"資料庫不可用","ErrNoNodes":"沒有可用主機","ErrNoTemplates":"沒有可用範本","ErrPasswordRequirements":"密碼不能少於8個字符","ErrUsernameRequirements":"用戶名稱不可少於3個字，當中只能包含字母、數字、 _ 或 -","ErrPasswordsNotIdentical":"密碼不相同","ErrSessionTimedOut":"你的登入時效已過，請重新登入","ErrMissingScope":"您沒權限執行此操作","ErrInvalidJson":"json數據無效","ErrSocketFailed":"WebSocket連接出現錯誤，某些功能可能會變得緩慢或無法使用"}')
    },
    c398: function(e) {
        e.exports = JSON.parse('{"NoEnvFields":"There are no environment specific options for this environment","docker":{"name":"Docker","image":"Image","networkMode":"Network Mode","networkName":"Network Name","bindings":"Bindings","portBindings":"Port Bindings","OutsidePort":"Outside Port","InsidePort":"Inside Port","HostPath":"Host Path","ContainerPath":"Container Path"},"standard":{"name":"Standard"},"tty":{"name":"TTY"}}')
    },
    c652: function(e) {
        e.exports = JSON.parse('{"Templates":"Plantillas","NoTemplates":"Todavía no hay plantillas","Deleted":"Plantilla borrada","New":"Crear nueva plantilla","Edit":"Modificar plantilla","Editor":"Editor","Json":"JSON","Display":"Nombre para mostrar","Type":"Tipo","Variables":"Variables","Install":"Instalar","AddInstallStep":"Añadir paso de instalación","DeleteInstallStep":"Eliminar paso de instalación","Description":"Descripción","DataType":"Tipo de datos","DefaultValue":"Valor por defecto","Required":"Requerido","UserEditable":"Usuarios pueden editar","Value":"Valor","AddOption":"Agregar una opción","AddCommand":"Añadir comando","Filename":"Nombre del archivo","Content":"Contenido","Source":"Fuente","Target":"Objetivo","Version":"Versión","ReleaseType":"Tipo de Lanzamiento","AddFile":"Añadir Archivo","AddVariable":"Añadir variable","Environment":"Environment","Environments":"Environments","AddEnvironment":"Añadir entorno","DefaultEnvironment":"Default environment","AddEnvVar":"Añadir variable de entorno","EnvVars":"Variables de entorno","DockerImage":"Imagen de Docker","SaveSuccess":"Plantillas guardadas","VarNameNoSpaces":"Un nombre de variable no puede estar vacío o contener espacios","SupportedEnvironments":"Entornos soportados","RunConfig":"Opciones de ejecución","PreHook":"Hook antes de ejecución","PostHook":"Hook después de ejecución","AddPreStep":"Añadir paso antes de ejecución","AddPostStep":"Añadir paso después de ejecución","DeletePreStep":"Eliminar paso antes de ejecución","DeletePostStep":"Eliminar paso después de ejecución","Shutdown":"Apagar","Command":"Comando","Arguments":"Argumentos","AddArgument":"Añadir argumento","import":{"OverrideWarning":"ADVERTENCIA: Las plantillas importadas sobrescribirán las plantillas existentes con el mismo ID","Import":"Importar plantillas","Tooltip":"Importar plantillas del repositorio oficial","Select":"Seleccionar plantillas a importar","Started":"Importando plantillas, por favor espere un momento","Successful":"Plantilla {template} importada correctamente","NoTemplatesTitle":"¿Quieres importar plantillas?","NoTemplatesContent":"Actualmente no tienes ninguna plantilla. Las plantillas son necesarias para crear servidores.<br/>¿Desea importar algunas plantillas desde el repositorio oficial de plantillas de PufferPanel?"},"stop":{"Command":"Comando","Signal":"Señal"},"processors":{"download":{"ProcessorName":"Descargar","files":"Archivos"},"command":{"ProcessorName":"Run Command","commands":"Comandos"},"alterfile":{"ProcessorName":"Change file","regex":"Treat search as RegEx","search":"Text to search","replace":"Replace with"},"writefile":{"ProcessorName":"Escribir al archivo","text":"Contenido"},"move":{"ProcessorName":"Mover Archivo","source":"Fuente","target":"Objetivo"},"mkdir":{"ProcessorName":"Crear directorio"},"mojangdl":{"ProcessorName":"Descargar Minecraft"},"forgedl":{"ProcessorName":"Descargar Minecraft Forge"},"spongeforgedl":{"ProcessorName":"Descargar Minecraft SpongeForge","releaseType":"Tipo de Lanzamiento"},"fabricdl":{"ProcessorName":"Descargar Minecraft Fabric"}}}')
    },
    c6b0: function(e) {
        e.exports = JSON.parse('{"FileManager":"Administrador de Archivos","NewFolder":"Nueva carpeta","NewFile":"Nuevo Archivo","LastModified":"Última modificación","ConfirmDelete":"¿Estas seguro que deseas eliminar este archivo?","Upload":"Subir","Download":"Descargar","Size":"Tamaño","NoFiles":"Todavía no hay archivos, vaya y cree algunos, por ejemplo haciendo clic en el botón de instalar en la parte superior de la página","FileLoadFailed":"Error al cargar el archivo"}')
    },
    c879: function(e) {
        e.exports = JSON.parse('{"NoEnvFields":"There are no environment specific options for this environment","docker":{"name":"Docker","image":"Kép","networkMode":"Network Mode","networkName":"Network Name","bindings":"Bindings","portBindings":"Port Bindings","OutsidePort":"Outside Port","InsidePort":"Inside Port","HostPath":"Host Path","ContainerPath":"Container Path"},"standard":{"name":"Alapértelmezett"},"tty":{"name":"TTY"}}')
    },
    c87d: function(e) {
        e.exports = JSON.parse('{"Id":"ID","Name":"Name","Address":"Address","Online":"Online","Offline":"Offline","Loading":"Loading...","General":"General","Language":"Language","SelectLanguage":"Select Language","Settings":"Settings","Update":"Update","Edit":"Edit","Delete":"Delete","Create":"Create","Save":"Save","Saved":"Saved","SaveFailed":"Failed saving","Cancel":"Cancel","Confirm":"Confirm","Actions":"Actions","Host":"Host","Port":"Port","Template":"Template","Options":"Options","Collapse":"Collapse","Copied":"Copied to clipboard","Unknown":"Unknown","Search":"Search","Back":"Back","Next":"Next","LanguageName":"Português","Details":"Details","ErrorDetails":"Error Details","HelpTranslate":"Help us translate PufferPanel","DarkMode":"Dark Mode","ThemeOptions":"Theme Options","Protocol":"Protocol","Add":"Add"}')
    },
    ca66: function(e) {
        e.exports = JSON.parse('{"NoEnvFields":"這環境沒有特定的選項可設定","docker":{"name":"Docker","image":"映像檔","networkMode":"網絡模式","networkName":"網絡名稱","bindings":"繫結","portBindings":"連接埠繫結","OutsidePort":"向外連接埠","InsidePort":"向內連接埠","HostPath":"主機連接埠","ContainerPath":"容器路徑"},"standard":{"name":"標準"},"tty":{"name":"TTY"}}')
    },
    cb95: function(e) {
        e.exports = JSON.parse('{"Server":"Server","NoServers":"There are no servers you have access to","Servers":"Servers","Add":"Add Server","Console":"Console","Controls":"Controls","SFTPInfo":"SFTP Information","Restart":"Restart","Start":"Start","Stop":"Stop","Kill":"Kill","Install":"Install","Send":"Send","Pause":"Pause","CPU":"CPU","Memory":"Memory","Name":"Server Name","SelectNode":"Please select node","SelectTemplate":"Please select template","SelectThisTemplate":"Use this template","SelectUser":"Please select user","Environment":"Environment","SelectEnvironment":"Please select environment","TypeUsername":"Type a username","AdminControls":"Admin Controls","Settings":"Settings","NoEditableVars":"This server does not have variables you can edit","ConfirmDelete":"Do you really want to delete this server? (this cannot be undone)","Delete":"Delete Server","Deleted":"Deleted Server","NoReadme":"No readme available for this template","SftpConnection":"Connect to SFTP","EditDefinition":"Edit Server Definition","Reload":"Reload server data from disk","Reloaded":"Reloaded server data","Autostart":"Start the server when the node starts","Autorestart":"Restart the server when it stops normally","Autorecover":"Restart the server when it crashes"}')
    },
    cce6: function(e) {
        e.exports = JSON.parse('{"FileManager":"File Manager","NewFolder":"New Folder","NewFile":"New File","LastModified":"Last Modified","ConfirmDelete":"Are you sure you want to delete this file?","Upload":"Upload","Download":"Download","Size":"Size","NoFiles":"There are no files here yet, go and create some for example by clicking the install button at the top of the page","FileLoadFailed":"Failed loading file"}')
    },
    cd69: function(e) {
        e.exports = JSON.parse('{"Users":"Users","Add":"Add User","AccountSettings":"Account Settings","OldPassword":"Old Password","NewPassword":"New Password","ConfirmPassword":"Confirm Password","ChangePassword":"Change Password","ChangeInfo":"Change Account Details","InfoChanged":"Your information has been changed","PasswordChanged":"Your password has been changed","AccountPassword":"Account Password","Account":"Account","Login":"Login","LoginLink":"Or login here","Logout":"Logout","Register":"Register","RegisterLink":"Or register here","RegisterSuccess":"You have successfully registered","NoEmailGiven":"You must provide the email of the user you want to add","Username":"Username","Password":"Password","Email":"Email","Edit":"Edit User","Update":"Update User","Delete":"Delete User","CreateSuccess":"Created User","CreateError":"Failed creating user","UpdateSuccess":"Updated User","UpdateError":"Failed updating user","PermsUpdateError":"Failed updating user permissions"}')
    },
    ce16: function(e) {
        e.exports = JSON.parse('{"Users":"Users","Add":"Add User","AccountSettings":"Account Settings","OldPassword":"Old Password","NewPassword":"New Password","ConfirmPassword":"Confirm Password","ChangePassword":"Change Password","ChangeInfo":"Change Account Details","InfoChanged":"Your information has been changed","PasswordChanged":"Your password has been changed","AccountPassword":"Account Password","Account":"Account","Login":"Login","LoginLink":"Or login here","Logout":"Logout","Register":"Register","RegisterLink":"Or register here","RegisterSuccess":"You have successfully registered","NoEmailGiven":"You must provide the email of the user you want to add","Username":"Username","Password":"Password","Email":"Email","Edit":"Edit User","Update":"Update User","Delete":"Delete User","CreateSuccess":"Created User","CreateError":"Failed creating user","UpdateSuccess":"Updated User","UpdateError":"Failed updating user","PermsUpdateError":"Failed updating user permissions"}')
    },
    cf13: function(e) {
        e.exports = JSON.parse('{"Node":"Node","Nodes":"Nodes","Edit":"Edit Node","Add":"Add Node","Update":"Update Node","Delete":"Delete Node","PublicHost":"Public Host","PublicPort":"Public Port","PrivateHost":"Private Host","PrivatePort":"Private Port","SftpPort":"SFTP Port","SaveConfig":"Save Config","SavePublicKey":"Save Public Key","DeploymentInstruction":"To deploy the node, install PufferPanel on the new server and place the config file in `/etc/pufferpanel/`<br/>Restart PufferPanel on the new server afterwards.","UpdateSuccess":"Successfully updated node","UpdateError":"Error updating node"}')
    },
    cf15: function(e) {
        e.exports = JSON.parse('{"FileManager":"Filhåndtering","NewFolder":"Ny mappe","NewFile":"Ny fil","LastModified":"Sidst Ændrede","ConfirmDelete":"Er du sikker på du vil slette denne fil?","Upload":"Upload","Download":"Hent","Size":"Størrelse","NoFiles":"Der er ingen filer her endnu, opret nogle ved for eksempel at klikke på installations knappen øverst på siden","FileLoadFailed":"Kunne ikke indlæse filen"}')
    },
    cf44: function(e) {
        e.exports = JSON.parse('{"Server":"Server","NoServers":"Er zijn geen servers waar je toegang tot hebt","Servers":"Servers","Add":"Server Toevoegen","Console":"Console","Controls":"Bediening","SFTPInfo":"SFTP Informatie","Restart":"Restart","Start":"Start","Stop":"Stop","Kill":"Beëindigen","Install":"Installeren","Send":"Verzenden","Pause":"Pauseren","CPU":"CPU","Memory":"Geheugen","Name":"Server Naam","SelectNode":"Selecteer een node","SelectTemplate":"Selecteer een sjabloon","SelectThisTemplate":"Dit sjabloon gebruiken","SelectUser":"Selecteer een gebruiker","Environment":"Omgeving","SelectEnvironment":"Selecteer een omgeving","TypeUsername":"Voer een gebruikersnaam in","AdminControls":"Administrator beheer","Settings":"Instellingen","NoEditableVars":"Deze server heeft geen variabelen die je kunt bewerken","ConfirmDelete":"Weet je zeker dat je deze server wilt verwijderen? (dit kan niet ongedaan worden gemaakt)","Delete":"Server Verwijderen","Deleted":"Server Verwijderd","NoReadme":"Geen readme beschikbaar voor dit sjabloon","SftpConnection":"Verbinden met SMTP","EditDefinition":"Edit Server Definition","Reload":"Herlaad server gegevens vanaf schijf","Reloaded":"Server data herladen","Autostart":"Start de server wanneer de node start","Autorestart":"Restart the server when it stops normally","Autorecover":"Herstart de server wanneer deze crasht"}')
    },
    cf91: function(e) {
        e.exports = JSON.parse('{"NoEnvFields":"There are no environment specific options for this environment","docker":{"name":"Docker","image":"Image","networkMode":"Network Mode","networkName":"Network Name","bindings":"Bindings","portBindings":"Port Bindings","OutsidePort":"Outside Port","InsidePort":"Inside Port","HostPath":"Host Path","ContainerPath":"Container Path"},"standard":{"name":"Standard"},"tty":{"name":"TTY"}}')
    },
    cfa3: function(e) {
        e.exports = JSON.parse('{"Templates":"Templates","NoTemplates":"There are no templates here yet","Deleted":"Template deleted","New":"Create new template","Edit":"Edit template","Editor":"Editor","Json":"JSON","Display":"Display Name","Type":"Type","Variables":"Variables","Install":"Install","AddInstallStep":"Add Install Step","DeleteInstallStep":"Delete Install Step","Description":"Description","DataType":"Data Type","DefaultValue":"Default Value","Required":"Required","UserEditable":"Users can edit","Value":"Value","AddOption":"Add an option","AddCommand":"Add command","Filename":"Filename","Content":"Content","Source":"Source","Target":"Target","Version":"Version","ReleaseType":"Release Type","AddFile":"Add file","AddVariable":"Add variable","Environment":"Environment","Environments":"Environments","AddEnvironment":"Add environment","DefaultEnvironment":"Default environment","AddEnvVar":"Add env variable","EnvVars":"Environment variables","DockerImage":"Docker Image","SaveSuccess":"Saved Template","VarNameNoSpaces":"A variable name cannot be empty or contain spaces","SupportedEnvironments":"Supported Environments","RunConfig":"Run Configuration","PreHook":"Pre Run Hook","PostHook":"Post Run Hook","AddPreStep":"Add Pre Run Step","AddPostStep":"Add Post Run Step","DeletePreStep":"Delete Pre Run Step","DeletePostStep":"Delete Post Run Step","Shutdown":"Shutdown","Command":"Command","Arguments":"Arguments","AddArgument":"Add an argument","Convert":"Convert","OfferV1Convert":"This template json looks like a template for PufferPanel 1.x, do you want to automatically convert this to a template for PufferPanel 2.x?","import":{"OverrideWarning":"WARNING: Imported templates WILL overwrite existing templates with the same ID","Import":"Import templates","Tooltip":"Import templates from the official repository","Select":"Select templates to import","Started":"Importing templates, please wait a moment","Successful":"Successfully imported template {template}","NoTemplatesTitle":"Do you want to import templates?","NoTemplatesContent":"You currently don\'t have any templates. Templates are necessary to create servers.<br/>Do you want to import some templates from the official PufferPanel templates repository now?"},"stop":{"Command":"Command","Signal":"Signal"},"processors":{"download":{"ProcessorName":"Download","files":"Files"},"command":{"ProcessorName":"Run Command","commands":"Commands"},"alterfile":{"ProcessorName":"Change file","regex":"Treat search as RegEx","search":"Text to search","replace":"Replace with"},"writefile":{"ProcessorName":"Write to file","text":"Content"},"move":{"ProcessorName":"Move File","source":"Source","target":"Target"},"mkdir":{"ProcessorName":"Create Directory"},"mojangdl":{"ProcessorName":"Download Minecraft"},"forgedl":{"ProcessorName":"Download Minecraft Forge"},"spongeforgedl":{"ProcessorName":"Download Minecraft SpongeForge","releaseType":"Release Type"},"fabricdl":{"ProcessorName":"Download Minecraft Fabric"}}}')
    },
    d0ca: function(e) {
        e.exports = JSON.parse('{"Templates":"Plantillas","NoTemplates":"Todavía no hay plantillas","Deleted":"Plantilla borrada","New":"Crear nueva plantilla","Edit":"Editar plantilla","Editor":"Editor","Json":"JSON","Display":"Nombre para mostrar","Type":"Tipo","Variables":"Variables","Install":"Instalar","AddInstallStep":"Añadir paso de instalación","DeleteInstallStep":"Eliminar paso de instalación","Description":"Descripción","DataType":"Tipo de Dato","DefaultValue":"Valor por defecto","Required":"Necesario","UserEditable":"Usuarios pueden editar","Value":"Valor","AddOption":"Añadir una opción","AddCommand":"Añadir comando","Filename":"Nombre de archivo","Content":"Contenido","Source":"Source","Target":"Target","Version":"Versión","ReleaseType":"Tipo de lanzamiento","AddFile":"Añadir archivo","AddVariable":"Añadir variable","Environment":"Environment","Environments":"Environments","AddEnvironment":"Añadir entorno","DefaultEnvironment":"Default environment","AddEnvVar":"Añadir variable env","EnvVars":"Variables de entorno","DockerImage":"Imagen de Docker","SaveSuccess":"Plantilla guardada","VarNameNoSpaces":"Un nombre de variable no puede estar vacío o contener espacios","SupportedEnvironments":"Entornos soportados","RunConfig":"Ejecutar configuración","PreHook":"Hook Pre Ejecución","PostHook":"Hook Post Ejecución","AddPreStep":"Añadir paso Pre Ejecución","AddPostStep":"Añadir paso Post Ejecución","DeletePreStep":"Eliminar paso Pre Ejecución","DeletePostStep":"Eliminar paso Post Ejecución","Shutdown":"Apagado","Command":"Comando","Arguments":"Argumentos","AddArgument":"Añadir un argumento","import":{"OverrideWarning":"ADVERTENCIA: Las plantillas importadas sobrescribirán las plantillas existentes con el mismo ID","Import":"Importar plantillas","Tooltip":"Importar plantillas del repositorio oficial","Select":"Seleccionar plantillas a importar","Started":"Importando plantillas, por favor espere un momento","Successful":"Plantilla {template} importada correctamente","NoTemplatesTitle":"¿Quieres importar plantillas?","NoTemplatesContent":"Actualmente no tiene ninguna plantilla. Las plantillas son necesarias para crear servidores.<br/>¿Desea importar algunas plantillas desde el repositorio oficial de plantillas de PufferPanel ahora?"},"stop":{"Command":"Comando","Signal":"Señal"},"processors":{"download":{"ProcessorName":"Descargar","files":"Archivos"},"command":{"ProcessorName":"Run Command","commands":"Comandos"},"alterfile":{"ProcessorName":"Change file","regex":"Treat search as RegEx","search":"Text to search","replace":"Replace with"},"writefile":{"ProcessorName":"Escribir al archivo","text":"Contenido"},"move":{"ProcessorName":"Mover Archivo","source":"Fuente","target":"Objetivo"},"mkdir":{"ProcessorName":"Crear directorio"},"mojangdl":{"ProcessorName":"Descargar Minecraft"},"forgedl":{"ProcessorName":"Descargar Minecraft Forge"},"spongeforgedl":{"ProcessorName":"Descargar Minecraft SpongeForge","releaseType":"Tipo de Lanzamiento"},"fabricdl":{"ProcessorName":"Descargar Minecraft Fabric"}}}')
    },
    d2a6: function(e) {
        e.exports = JSON.parse('{"NoEnvFields":"There are no environment specific options for this environment","docker":{"name":"Docker","image":"Image","networkMode":"Network Mode","networkName":"Network Name","bindings":"Bindings","portBindings":"Port Bindings","OutsidePort":"Outside Port","InsidePort":"Inside Port","HostPath":"Host Path","ContainerPath":"Container Path"},"standard":{"name":"Standard"},"tty":{"name":"TTY"}}')
    },
    d487: function(e) {
        e.exports = JSON.parse('{"Users":"Users","Add":"Add User","AccountSettings":"Account Settings","OldPassword":"Old Password","NewPassword":"New Password","ConfirmPassword":"Confirm Password","ChangePassword":"Change Password","ChangeInfo":"Change Account Details","InfoChanged":"Your information has been changed","PasswordChanged":"Your password has been changed","AccountPassword":"Account Password","Account":"Account","Login":"Login","LoginLink":"Or login here","Logout":"Logout","Register":"Register","RegisterLink":"Or register here","RegisterSuccess":"You have successfully registered","NoEmailGiven":"You must provide the email of the user you want to add","Username":"Username","Password":"Password","Email":"Email","Edit":"Edit User","Update":"Update User","Delete":"Delete User","CreateSuccess":"Created User","CreateError":"Failed creating user","UpdateSuccess":"Updated User","UpdateError":"Failed updating user","PermsUpdateError":"Failed updating user permissions"}')
    },
    d611: function(e) {
        e.exports = JSON.parse('{"ServersView":"Can view this server","ServersEdit":"Edit the server","ServersInstall":"Install the server","ServersConsole":"View the console","ServersConsoleSend":"Send commands to the console","ServersStop":"Stop and kill the server","ServersStart":"Start the server","ServersStat":"View CPU and memory statistics","ServersFiles":"Allow access to files using SFTP","ServersFilesGet":"View and download files using the file manager","ServersFilesPut":"Edit and upload files using the file manager","ServersEditUsers":"Edit user\'s access to this server","Admin":"Admin (this grants every possible permission)","ViewServers":"See Servers","CreateServers":"Create new Servers","DeleteServers":"Delete Servers","EditServerAdmin":"Edit Server Settings","ViewNodes":"See Nodes","EditNodes":"Edit Nodes","DeployNodes":"Deploy new Nodes","ViewTemplates":"See Templates","EditTemplates":"Edit Templates","ViewUsers":"See all Users","EditUsers":"Edit other Users"}')
    },
    d6e2: function(e) {
        e.exports = JSON.parse('{"Id":"المعرف","Name":"الاسم","Address":"العنوان","Online":"متصل","Offline":"غير متصل","Loading":"جاري التحميل...","General":"عام","Language":"اللغة","SelectLanguage":"إختيار اللغة","Settings":"الظبط","Update":"تحديث","Edit":"تحرير","Delete":"حذف","Create":"إنشاء","Save":"حفظ","Saved":"تم الحفظ","SaveFailed":"فشل الحفظ","Cancel":"إلغاء","Confirm":"تأكيد","Actions":"الإجرائات","Host":"المضيف","Port":"المنفذ","Template":"نموذج","Options":"الخيارات","Collapse":"طي","Copied":"تم النسخ إلى الحافظة","Unknown":"غير معروف","Search":"بحث","Back":"السابق","Next":"التالي","LanguageName":"العربية","Details":"التفاصيل","ErrorDetails":"تفاصيل الخطأ","HelpTranslate":"ساعدنا على ترجمة بوفر بانل","DarkMode":"الوضع الداكن","ThemeOptions":"خيارات المظهر","Protocol":"بروتوكول","Add":"إضافة"}')
    },
    d790: function(e) {
        e.exports = JSON.parse('{"Templates":"Templates","NoTemplates":"There are no templates here yet","Deleted":"Template deleted","New":"Create new template","Edit":"Edit template","Editor":"Editor","Json":"JSON","Display":"Display Name","Type":"Type","Variables":"Variables","Install":"Install","AddInstallStep":"Add Install Step","DeleteInstallStep":"Delete Install Step","Description":"Description","DataType":"Data Type","DefaultValue":"Default Value","Required":"Required","UserEditable":"Users can edit","Value":"Value","AddOption":"Add an option","AddCommand":"Add command","Filename":"Filename","Content":"Content","Source":"Source","Target":"Target","Version":"Version","ReleaseType":"Release Type","AddFile":"Add file","AddVariable":"Add variable","Environment":"Environment","Environments":"Environments","AddEnvironment":"Add environment","DefaultEnvironment":"Default environment","AddEnvVar":"Add env variable","EnvVars":"Environment variables","DockerImage":"Docker Image","SaveSuccess":"Saved Template","VarNameNoSpaces":"A variable name cannot be empty or contain spaces","SupportedEnvironments":"Supported Environments","RunConfig":"Run Configuration","PreHook":"Pre Run Hook","PostHook":"Post Run Hook","AddPreStep":"Add Pre Run Step","AddPostStep":"Add Post Run Step","DeletePreStep":"Delete Pre Run Step","DeletePostStep":"Delete Post Run Step","Shutdown":"Shutdown","Command":"Command","Arguments":"Arguments","AddArgument":"Add an argument","import":{"OverrideWarning":"WARNING: Imported templates WILL overwrite existing templates with the same ID","Import":"Import templates","Tooltip":"Import templates from the official repository","Select":"Select templates to import","Started":"Importing templates, please wait a moment","Successful":"Successfully imported template {template}","NoTemplatesTitle":"Do you want to import templates?","NoTemplatesContent":"You currently don\'t have any templates. Templates are necessary to create servers.<br/>Do you want to import some templates from the official PufferPanel templates repository now?"},"stop":{"Command":"Command","Signal":"Signal"},"processors":{"download":{"ProcessorName":"Download","files":"Files"},"command":{"ProcessorName":"Run Command","commands":"Commands"},"alterfile":{"ProcessorName":"Change file","regex":"Treat search as RegEx","search":"Text to search","replace":"Replace with"},"writefile":{"ProcessorName":"Write to file","text":"Content"},"move":{"ProcessorName":"Move File","source":"Source","target":"Target"},"mkdir":{"ProcessorName":"Create Directory"},"mojangdl":{"ProcessorName":"Download Minecraft"},"forgedl":{"ProcessorName":"Download Minecraft Forge"},"spongeforgedl":{"ProcessorName":"Download Minecraft SpongeForge","releaseType":"Release Type"},"fabricdl":{"ProcessorName":"Download Minecraft Fabric"}}}')
    },
    d7a8: function(e) {
        e.exports = JSON.parse('{"FileManager":"檔案管理器","NewFolder":"新增資料夾","NewFile":"新增檔案","LastModified":"最後修改時間","ConfirmDelete":"你確認要刪除此檔案？","Upload":"上載","Download":"下載","Size":"大小","NoFiles":"這裏尚未有任何檔案，點擊上方的按扭來添加一些實例吧","FileLoadFailed":"無法載入檔案"}')
    },
    d84c: function(e) {
        e.exports = JSON.parse('{"Templates":"Templates","NoTemplates":"There are no templates here yet","Deleted":"Template deleted","New":"Create new template","Edit":"Edit template","Editor":"Editor","Json":"JSON","Display":"Display Name","Type":"Type","Variables":"Variables","Install":"Install","AddInstallStep":"Add Install Step","DeleteInstallStep":"Delete Install Step","Description":"Description","DataType":"Data Type","DefaultValue":"Default Value","Required":"Required","UserEditable":"Users can edit","Value":"Value","AddOption":"Add an option","AddCommand":"Add command","Filename":"Filename","Content":"Content","Source":"Source","Target":"Target","Version":"Version","ReleaseType":"Release Type","AddFile":"Add file","AddVariable":"Add variable","Environment":"Environment","Environments":"Environments","AddEnvironment":"Add environment","DefaultEnvironment":"Default environment","AddEnvVar":"Add env variable","EnvVars":"Environment variables","DockerImage":"Docker Image","SaveSuccess":"Saved Template","VarNameNoSpaces":"A variable name cannot be empty or contain spaces","SupportedEnvironments":"Supported Environments","RunConfig":"Run Configuration","PreHook":"Pre Run Hook","PostHook":"Post Run Hook","AddPreStep":"Add Pre Run Step","AddPostStep":"Add Post Run Step","DeletePreStep":"Delete Pre Run Step","DeletePostStep":"Delete Post Run Step","Shutdown":"Shutdown","Command":"Command","Arguments":"Arguments","AddArgument":"Add an argument","import":{"OverrideWarning":"WARNING: Imported templates WILL overwrite existing templates with the same ID","Import":"Import templates","Tooltip":"Import templates from the official repository","Select":"Select templates to import","Started":"Importing templates, please wait a moment","Successful":"Successfully imported template {template}","NoTemplatesTitle":"Do you want to import templates?","NoTemplatesContent":"You currently don\'t have any templates. Templates are necessary to create servers.<br/>Do you want to import some templates from the official PufferPanel templates repository now?"},"stop":{"Command":"Command","Signal":"Signal"},"processors":{"download":{"ProcessorName":"Download","files":"Files"},"command":{"ProcessorName":"Run Command","commands":"Commands"},"alterfile":{"ProcessorName":"Change file","regex":"Treat search as RegEx","search":"Text to search","replace":"Replace with"},"writefile":{"ProcessorName":"Write to file","text":"Content"},"move":{"ProcessorName":"Move File","source":"Source","target":"Target"},"mkdir":{"ProcessorName":"Create Directory"},"mojangdl":{"ProcessorName":"Download Minecraft"},"forgedl":{"ProcessorName":"Download Minecraft Forge"},"spongeforgedl":{"ProcessorName":"Download Minecraft SpongeForge","releaseType":"Release Type"},"fabricdl":{"ProcessorName":"Download Minecraft Fabric"}}}')
    },
    d8ed: function(e) {
        e.exports = JSON.parse('{"ErrGeneric":"Error Desconocido","ErrUnknownError":"Error Desconocido","ErrInvalidCredentials":"Credenciales Invalidas","ErrServiceNotAvailable":"Servicio no disponible","ErrEmailNotConfigured":"Email no configurado","ErrTokenInvalid":"Token invalido","ErrClientNotFound":"Cliente no encontrado","ErrUserNotFound":"Usuario no encontrado","ErrLoginNotPermitted":"Inicio de sesión no permitido","ErrInvalidTokenState":"Estado del token inválido","ErrSettingNotConfigured":"{setting} no está configurado","ErrNoTemplate":"No se ha encontrado ninguna plantilla con el nombre \'{name}\'","ErrServiceInvalidProvider":"{service} no soporta {provider}","ErrFieldRequired":"{field} es obligatorio","ErrFieldMustBePrintable":"{field} debe estar formado por caracteres ascii imprimibles","ErrFieldHasURICharacters":"{field} no debe contener caracteres que no pueden ser usados en URIs","ErrFieldIsInvalidHost":"{field} debe ser una IP válida o FQDN","ErrFieldIsInvalidIP":"{field} debe ser una IP válida","ErrFieldTooLarge":"{field} no puede ser mayor que {max}","ErrFieldTooSmall":"{field} no puede ser menor que {min}","ErrFieldNotBetween":"{field} debe estar entre {min} y {max}","ErrFieldEqual":"{field1} no puede ser igual a {field2}","ErrFieldNotEqual":"{field1} no es igual a {field2}","ErrFieldNotEmail":"{field} no es un email valido","ErrFieldLength":"{field} debe tener al menos {length} caracteres","ErrNoPermission":"No tienes permisos para realizar esta acción","ErrDatabaseNotAvailable":"La base de datos no esta disponible","ErrNoNodes":"No hay nodos disponibles","ErrNoTemplates":"No hay plantillas disponibles","ErrPasswordRequirements":"La contraseña debe tener al menos {min} caracteres","ErrUsernameRequirements":"El nombre de usuario debe tener al menos {min} caracteres y solo contener caracteres alfanuméricos, _, o -","ErrPasswordsNotIdentical":"Las contraseñas no coinciden","ErrSessionTimedOut":"Tu sesión ha caducado, por favor inicia sesión de nuevo","ErrMissingScope":"No estas autorizado a realizar esta acción","ErrInvalidJson":"Los datos json no son válidos","ErrSocketFailed":"The WebSocket connection encountered an error, some features might be slow or broken"}')
    },
    d982: function(e) {
        e.exports = JSON.parse('{"FileManager":"File Manager","NewFolder":"New Folder","NewFile":"New File","LastModified":"Last Modified","ConfirmDelete":"Are you sure you want to delete this file?","Upload":"Upload","Download":"Download","Size":"Size","NoFiles":"There are no files here yet, go and create some for example by clicking the install button at the top of the page","FileLoadFailed":"Failed loading file"}')
    },
    d9bdf: function(e) {
        e.exports = JSON.parse('{"Templates":"Szablony","NoTemplates":"Brak szablonów","Deleted":"Szablon został usunięty","New":"Utwórz nowy szablon","Edit":"Edytuj szablon","Editor":"Edytor","Json":"JSON","Display":"Wyświetlana nazwa","Type":"Typ","Variables":"Zmienne","Install":"Zainstaluj","AddInstallStep":"Dodaj krok instalacji","DeleteInstallStep":"Usuń krok instalacji","Description":"Opis","DataType":"Typ Danych","DefaultValue":"Wartość domyślna","Required":"Wymagane?","UserEditable":"Użytkownicy mogą edytować","Value":"Wartość","AddOption":"Dodaj Opcję","AddCommand":"Dodaj polecenie","Filename":"Nazwa pliku","Content":"Zawartość","Source":"Źródło","Target":"Cel","Version":"Wersja","ReleaseType":"Typ wydania","AddFile":"Dodaj plik","AddVariable":"Dodaj zmienną","Environment":"Środowisko","Environments":"Środowisko","AddEnvironment":"Dodaj środowisko","DefaultEnvironment":"Domyślne środowisko","AddEnvVar":"Dodaj zmienną","EnvVars":"Zmienne środowiskowe","DockerImage":"Obrazy Dokera","SaveSuccess":"Zapisane szablony","VarNameNoSpaces":"Nazwa zmiennej nie może być pusta ani zawierać spacji","SupportedEnvironments":"Wspierane środowisko","RunConfig":"Uruchom konfigurację","PreHook":"Hak Przed Uruchomieniem","PostHook":"Hak Po Uruchomieniu","AddPreStep":"Dodaj Hak Przed Uruchomieniem","AddPostStep":"Dodaj Hak Po Uruchomieniu","DeletePreStep":"Usuń krok instalacji","DeletePostStep":"Usuń krok instalacji","Shutdown":"Zamknij","Command":"Komenda","Arguments":"Argumenty","AddArgument":"Dodaj argument","import":{"OverrideWarning":"OSTRZEŻENIE: Zaimportowane szablony zostaną nadpiszą istniejące szablony o tym samym ID","Import":"Importuj szablony","Tooltip":"Importuj szablony z oficjalnego repozytorium","Select":"Wybierz szablony do importowania","Started":"Importowanie szablonów, proszę poczekać chwilę","Successful":"Pomyślnie zaimportowano szablon {template}","NoTemplatesTitle":"Czy chcesz zaimportować szablony?","NoTemplatesContent":"Obecnie nie masz żadnych szablonów. Szablony są niezbędne do tworzenia serwerów.<br/>Czy chcesz zaimportować niektóre szablony z oficjalnego repozytorium PufferPanel szablonów?"},"stop":{"Command":"Komenda","Signal":"Sygnał"},"processors":{"download":{"ProcessorName":"Pobierz","files":"Pliki"},"command":{"ProcessorName":"Uruchom polecenie","commands":"Polecenia"},"alterfile":{"ProcessorName":"Zmień plik","regex":"Traktuj wyszukiwanie jako RegEx","search":"Tekst do wyszukania","replace":"Zamień na"},"writefile":{"ProcessorName":"Zapisz do pliku","text":"Zawartość"},"move":{"ProcessorName":"Przenieś plik","source":"Źródło","target":"Cel"},"mkdir":{"ProcessorName":"Utwórz katalog"},"mojangdl":{"ProcessorName":"Pobierz Minecraft"},"forgedl":{"ProcessorName":"Pobierz Minecraft Forge"},"spongeforgedl":{"ProcessorName":"Pobierz Minecraft SpongeForge","releaseType":"Typ wydania"},"fabricdl":{"ProcessorName":"Pobierz Minecraft Fabric"}}}')
    },
    d9f9: function(e) {
        e.exports = JSON.parse('{"ServersView":"Bisa melihat server ini","ServersEdit":"Edit Server","ServersInstall":"Install server","ServersConsole":"Lihat console","ServersConsoleSend":"Kirimkan perintah ke konsol","ServersStop":"Hentikan dan matikan server","ServersStart":"Mulai server","ServersStat":"Lihat statistik CPU dan memory","ServersFiles":"Bolehkan mengakses berkas mengunakan SFTP","ServersFilesGet":"Lihat dan download mengunakan manager file","ServersFilesPut":"Edit dan upload berkas mengunakan manager file","ServersEditUsers":"Edit akses penguna ke server ini","Admin":"Admin (ini memberi semua ijin)","ViewServers":"See Servers","CreateServers":"Buat server anda","DeleteServers":"Hapus server","EditServerAdmin":"Edit penganturan server","ViewNodes":"Lihat node","EditNodes":"Edit node","DeployNodes":"Deploy new Nodes","ViewTemplates":"Lihat tempelate","EditTemplates":"Edit Tempelate","ViewUsers":"Lihat semua penguna","EditUsers":"Edit penguna lain"}')
    },
    db49: function(e) {
        e.exports = JSON.parse('{"ServersView":"Can view this server","ServersEdit":"Edit the server","ServersInstall":"Install the server","ServersConsole":"View the console","ServersConsoleSend":"Send commands to the console","ServersStop":"Stop and kill the server","ServersStart":"Start the server","ServersStat":"View CPU and memory statistics","ServersFiles":"Allow access to files using SFTP","ServersFilesGet":"View and download files using the file manager","ServersFilesPut":"Edit and upload files using the file manager","ServersEditUsers":"Edit user\'s access to this server","Admin":"Admin (this grants every possible permission)","ViewServers":"See Servers","CreateServers":"Create new Servers","DeleteServers":"Delete Servers","EditServerAdmin":"Edit Server Settings","ViewNodes":"See Nodes","EditNodes":"Edit Nodes","DeployNodes":"Deploy new Nodes","ViewTemplates":"See Templates","EditTemplates":"Edit Templates","ViewUsers":"See all Users","EditUsers":"Edit other Users"}')
    },
    dbe0: function(e) {
        e.exports = JSON.parse('{"NoEnvFields":"이 환경에 대한 특정 옵션이 없습니다","docker":{"name":"도커","image":"이미지","networkMode":"네트워크 모드","networkName":"네트워크 이름","bindings":"바인딩","portBindings":"포트 바인딩","OutsidePort":"외부 포트","InsidePort":"내부 포트","HostPath":"호스트 주소","ContainerPath":"컨테이너 주소"},"standard":{"name":"일반"},"tty":{"name":"TTY"}}')
    },
    dcdb: function(e) {
        e.exports = JSON.parse('{"ServersView":"Просмотра этого сервера","ServersEdit":"Редактирования сервера","ServersInstall":"Установка сервера","ServersConsole":"Просмотр консоли","ServersConsoleSend":"Отправить команду в консоль","ServersStop":"Остановка и отключения сервера","ServersStart":"Запуска сервера","ServersStat":"Просмотра статистики CPU и памяти","ServersFiles":"Разрешения доступа к файлам через SFTP","ServersFilesGet":"Просмотра и загрузки файлов через менеджер файлов","ServersFilesPut":"Редактирования и загрузки файлов через менеджер файлов","ServersEditUsers":"Редактирования доступа пользователей к этому серверу","Admin":"Администратор (это право дает все доступные права)","ViewServers":"See Servers","CreateServers":"Создание новых серверов","DeleteServers":"Удаление серверов","EditServerAdmin":"Редактирование настроек сервера","ViewNodes":"Просмотр хостов","EditNodes":"Редактирование хостов","DeployNodes":"Развернуть новый хост","ViewTemplates":"Просмотр шаблонов","EditTemplates":"Редактирование шаблонов","ViewUsers":"Просмотр всех пользователей","EditUsers":"Редактирование других пользователей"}')
    },
    dddc: function(e) {
        e.exports = JSON.parse('{"ServersView":"Může zobrazit tento server","ServersEdit":"Upravit server","ServersInstall":"Nainstalovat server","ServersConsole":"Zobrazit konzoli","ServersConsoleSend":"Poslat příkazy do konzole","ServersStop":"Zastavit a ukončit server","ServersStart":"Spustit server","ServersStat":"Zobrazit statistiky CPU a paměti","ServersFiles":"Povolit přístup k souborům pomocí SFTP","ServersFilesGet":"Zobrazit a stáhnout soubory pomocí správce souborů","ServersFilesPut":"Upravit a nahrát soubory pomocí správce souborů","ServersEditUsers":"Upravit přístup uživatele k tomuto serveru","Admin":"Admin (toto uděluje všechna možná oprávnění)","ViewServers":"See Servers","CreateServers":"Vytvořit nové servery","DeleteServers":"Odstranit servery","EditServerAdmin":"Upravit nastavení serveru","ViewNodes":"Zobrazit uzly","EditNodes":"Upravit uzly","DeployNodes":"Nasadit nové uzly","ViewTemplates":"Zobrazit šablony","EditTemplates":"Upravit šablony","ViewUsers":"Zobrazit všechny uživatele","EditUsers":"Upravit ostatní uživatele"}')
    },
    de60: function(e) {
        e.exports = JSON.parse('{"Id":"ID","Name":"Naam","Address":"Address","Online":"Online","Offline":"Offline","Loading":"Laden...","General":"Algemeen","Language":"Taal","SelectLanguage":"Selecteer taal","Settings":"Instellingen","Update":"Bijwerken","Edit":"Bewerken","Delete":"Verwijderen","Create":"Creeër","Save":"Opslaan","Saved":"Opgeslagen","SaveFailed":"Opslaan mislukt","Cancel":"Annuleren","Confirm":"Bevestigen","Actions":"Acties","Host":"Hostnaam","Port":"Poort","Template":"Sjabloon","Options":"Opties","Collapse":"Inklappen","Copied":"Gekopieerd naar het Klembord","Unknown":"Onbekend","Search":"Zoek","Back":"Terug","Next":"Volgende","LanguageName":"Nederlands","Details":"Details","ErrorDetails":"Fout details","HelpTranslate":"Help ons PufferPanel te vertalen","DarkMode":"Donkere Modus","ThemeOptions":"Thema Opties","Protocol":"Protocol","Add":"Voeg toe"}')
    },
    dfe9: function(e) {
        e.exports = JSON.parse('{"Users":"Users","Add":"Add User","AccountSettings":"Account Settings","OldPassword":"Old Password","NewPassword":"New Password","ConfirmPassword":"Confirm Password","ChangePassword":"Change Password","ChangeInfo":"Change Account Details","InfoChanged":"Your information has been changed","PasswordChanged":"Your password has been changed","AccountPassword":"Account Password","Account":"Account","Login":"Login","LoginLink":"Or login here","Logout":"Logout","Register":"Register","RegisterLink":"Or register here","RegisterSuccess":"You have successfully registered","NoEmailGiven":"You must provide the email of the user you want to add","Username":"Username","Password":"Password","Email":"Email","Edit":"Edit User","Update":"Update User","Delete":"Delete User","CreateSuccess":"Created User","CreateError":"Failed creating user","UpdateSuccess":"Updated User","UpdateError":"Failed updating user","PermsUpdateError":"Failed updating user permissions"}')
    },
    dffa: function(e) {
        e.exports = JSON.parse('{"FileManager":"Gerenciador de Arquivos","NewFolder":"Nova pasta","NewFile":"Novo arquivo","LastModified":"Última Modificação","ConfirmDelete":"Tem certeza de que deseja excluir esse arquivo?","Upload":"Upload","Download":"Download","Size":"Tamanho","NoFiles":"Ainda não há arquivos aqui, vá e crie alguns por exemplo, clicando no botão de instalação no topo da página","FileLoadFailed":"Falha ao carregar o arquivo"}')
    },
    e014: function(e, t, r) {
        "use strict";
        r.r(t);
        var a = function() {
                var e = this,
                    t = e.$createElement,
                    r = e._self._c || t;
                return r("v-row", [r("v-col", {
                    attrs: {
                        cols: "12"
                    }
                }, [r("ui-switch", {
                    attrs: {
                        label: e.$t("templates.Required")
                    },
                    model: {
                        value: e.value.required,
                        callback: function(t) {
                            e.$set(e.value, "required", t)
                        },
                        expression: "value.required"
                    }
                }), r("ui-switch", {
                    attrs: {
                        label: e.$t("templates.UserEditable")
                    },
                    model: {
                        value: e.value.userEdit,
                        callback: function(t) {
                            e.$set(e.value, "userEdit", t)
                        },
                        expression: "value.userEdit"
                    }
                })], 1), r("v-col", {
                    attrs: {
                        cols: "12",
                        md: "6"
                    }
                }, [r("ui-input", {
                    attrs: {
                        label: e.$t("templates.Display")
                    },
                    model: {
                        value: e.value.display,
                        callback: function(t) {
                            e.$set(e.value, "display", t)
                        },
                        expression: "value.display"
                    }
                })], 1), r("v-col", {
                    attrs: {
                        cols: "12",
                        md: "6"
                    }
                }, [r("ui-input", {
                    attrs: {
                        label: e.$t("templates.Description")
                    },
                    model: {
                        value: e.value.desc,
                        callback: function(t) {
                            e.$set(e.value, "desc", t)
                        },
                        expression: "value.desc"
                    }
                })], 1), r("v-col", {
                    attrs: {
                        cols: "12",
                        md: "option" === e.value.type ? "12" : "6"
                    }
                }, [r("ui-select", {
                    attrs: {
                        label: e.$t("templates.DataType"),
                        items: e.possibleTypes
                    },
                    on: {
                        change: function(t) {
                            return e.typeChanged()
                        }
                    },
                    model: {
                        value: e.value.type,
                        callback: function(t) {
                            e.$set(e.value, "type", t)
                        },
                        expression: "value.type"
                    }
                })], 1), "option" !== e.value.type ? r("v-col", {
                    attrs: {
                        cols: "12",
                        md: "6"
                    }
                }, [r("ui-input", {
                    attrs: {
                        label: e.$t("templates.DefaultValue")
                    },
                    model: {
                        value: e.value.value,
                        callback: function(t) {
                            e.$set(e.value, "value", t)
                        },
                        expression: "value.value"
                    }
                })], 1) : e._e(), "option" === e.value.type || "string" === e.value.type ? r("v-col", {
                    attrs: {
                        cols: "12"
                    }
                }, [e._l(e.value.options, (function(t, a) {
                    return r("v-row", {
                        key: a
                    }, [r("v-col", {
                        attrs: {
                            cols: "12",
                            md: "6"
                        }
                    }, [r("ui-input", {
                        attrs: {
                            label: e.$t("templates.Value")
                        },
                        model: {
                            value: t.value,
                            callback: function(r) {
                                e.$set(t, "value", r)
                            },
                            expression: "option.value"
                        }
                    })], 1), r("v-col", {
                        attrs: {
                            cols: "12",
                            md: "6"
                        }
                    }, [r("ui-input", {
                        attrs: {
                            label: e.$t("templates.Display"),
                            "icon-behind": "mdi-close"
                        },
                        on: {
                            "click:append-outer": function(t) {
                                return e.$delete(e.value.options, a)
                            }
                        },
                        model: {
                            value: t.display,
                            callback: function(r) {
                                e.$set(t, "display", r)
                            },
                            expression: "option.display"
                        }
                    })], 1)], 1)
                })), r("v-btn", {
                    attrs: {
                        block: "",
                        text: ""
                    },
                    domProps: {
                        textContent: e._s(e.$t("templates.AddOption"))
                    },
                    on: {
                        click: function(t) {
                            return e.value.options.push({
                                value: "",
                                display: ""
                            })
                        }
                    }
                })], 2) : e._e()], 1)
            },
            o = [],
            n = {
                props: {
                    value: {
                        type: Object,
                        default: () => {}
                    }
                },
                data() {
                    return {
                        possibleTypes: [{
                            text: "String",
                            value: "string"
                        }, {
                            text: "Boolean",
                            value: "boolean"
                        }, {
                            text: "Integer",
                            value: "integer"
                        }, {
                            text: "Options",
                            value: "option"
                        }]
                    }
                },
                methods: {
                    typeChanged() {
                        "option" !== this.value.type || this.value.options || (this.value.options = [], this.$emit("input", {
                            ...this.value
                        }))
                    }
                }
            },
            s = n,
            i = r("2877"),
            l = r("6544"),
            d = r.n(l),
            c = r("8336"),
            u = r("62ad"),
            m = r("0fd9"),
            p = Object(i["a"])(s, a, o, !1, null, null, null);
        t["default"] = p.exports;
        d()(p, {
            VBtn: c["a"],
            VCol: u["a"],
            VRow: m["a"]
        })
    },
    e022: function(e, t, r) {
        "use strict";
        r.r(t);
        var a = function() {
                var e = this,
                    t = e.$createElement,
                    r = e._self._c || t;
                return r("ui-overlay", {
                    attrs: {
                        card: "",
                        closable: "",
                        title: e.$t("common.SelectLanguage")
                    },
                    model: {
                        value: e.show,
                        callback: function(t) {
                            e.show = t
                        },
                        expression: "show"
                    }
                }, [r("v-row", {
                    attrs: {
                        id: "langs"
                    }
                }, e._l(Object.keys(e.$i18n.messages), (function(t) {
                    return r("v-col", {
                        key: t,
                        attrs: {
                            cols: "12",
                            sm: "6",
                            md: "3"
                        }
                    }, [r("v-btn", {
                        attrs: {
                            text: ""
                        },
                        domProps: {
                            textContent: e._s(e.getText(t))
                        },
                        on: {
                            click: function(r) {
                                return e.setLocale(t)
                            }
                        }
                    })], 1)
                })), 1), r("v-row", [r("v-col", {
                    staticClass: "d-flex justify-center"
                }, [r("a", {
                    attrs: {
                        target: "_blank",
                        rel: "noopener noreferrer",
                        href: "https://crowdin.com/project/pufferpanel"
                    }
                }, [e._v(" " + e._s(e.$t("common.HelpTranslate")) + " "), r("v-icon", {
                    staticClass: "caption"
                }, [e._v("mdi-launch")])], 1)])], 1)], 1)
            },
            o = [],
            n = (r("5319"), {
                props: {
                    value: {
                        type: Boolean,
                        default: () => !1
                    }
                },
                computed: {
                    show: {
                        get: function() {
                            return !!this.value
                        },
                        set: function(e) {
                            this.$emit("input", e)
                        }
                    }
                },
                methods: {
                    getText(e) {
                        const t = this.$i18n.messages[e].common.LanguageName;
                        let r = "";
                        if (e.indexOf("_") >= 0) {
                            const t = e.split("_"),
                                a = t[t.length - 1];
                            r = 2 === a.length && "SP" !== a.toUpperCase() ? this.getFlag(t[t.length - 1]) : this.getFlag(t[0])
                        } else
                            r = this.getFlag(e);
                        return r && "" !== r ? `${r} ${t}` : t
                    },
                    getFlag(e) {
                        return e.toUpperCase().replace(/./g, e => String.fromCodePoint(e.charCodeAt(0) + 127397))
                    },
                    setLocale(e) {
                        this.$i18n.locale = e,
                        localStorage.setItem("locale", e),
                        this.show = !1
                    }
                }
            }),
            s = n,
            i = r("2877"),
            l = r("6544"),
            d = r.n(l),
            c = r("8336"),
            u = r("62ad"),
            m = r("132d"),
            p = r("0fd9"),
            v = Object(i["a"])(s, a, o, !1, null, null, null);
        t["default"] = v.exports;
        d()(v, {
            VBtn: c["a"],
            VCol: u["a"],
            VIcon: m["a"],
            VRow: p["a"]
        })
    },
    e1bb: function(e) {
        e.exports = JSON.parse('{"ErrGeneric":"Erro desconhecido","ErrUnknownError":"Erro desconhecido","ErrInvalidCredentials":"Credenciais inválidas","ErrServiceNotAvailable":"Serviço indisponível","ErrEmailNotConfigured":"O e-mail não foi configurado","ErrTokenInvalid":"Token inválido","ErrClientNotFound":"Cliente não encontrado","ErrUserNotFound":"Usuário não encontrado","ErrLoginNotPermitted":"Login não permitido","ErrInvalidTokenState":"Estado de token inválido","ErrSettingNotConfigured":"{setting} não está configurado","ErrNoTemplate":"Nenhum template com o nome \'{name}\' foi encontrado","ErrServiceInvalidProvider":"{service} não suporta {provider}","ErrFieldRequired":"{field} é obrigatório","ErrFieldMustBePrintable":"{field} deve ter caracteres ascii imprimíveis","ErrFieldHasURICharacters":"{field} não deve conter caracteres que não podem ser usados em URIs","ErrFieldIsInvalidHost":"{field} deve ser um IP válido ou FQDN","ErrFieldIsInvalidIP":"{field} deve ser um IP válido","ErrFieldTooLarge":"{field} não pode ser maior que {max}","ErrFieldTooSmall":"{field} não pode ser menor que {min}","ErrFieldNotBetween":"{field} deve estar entre {min} e {max}","ErrFieldEqual":"{field1} não pode ser igual a {field2}","ErrFieldNotEqual":"{field1} não é igual a {field2}","ErrFieldNotEmail":"{field} não é um email válido","ErrFieldLength":"{field} deve ter pelo menos {length} caracteres","ErrNoPermission":"Você não tem permissão para realizar esta operação","ErrDatabaseNotAvailable":"Banco de Dados não está disponível","ErrNoNodes":"Não há nodes disponíveis","ErrNoTemplates":"Não há modelos disponíveis","ErrPasswordRequirements":"A senha deve possuir ao menos 8 caracteres","ErrUsernameRequirements":"Nome de usuário deve ter pelo menos 3 caracteres e conter apenas alfanuméricos, _, ou -","ErrPasswordsNotIdentical":"As senhas não são iguais","ErrSessionTimedOut":"Sua sessão expirou. Faça login novamente","ErrMissingScope":"Você não está autorizado a realizar esta ação","ErrInvalidJson":"Os dados do JSON são inválidos","ErrSocketFailed":"The WebSocket connection encountered an error, some features might be slow or broken"}')
    },
    e245: function(e) {
        e.exports = JSON.parse('{"FileManager":"Správce souborů","NewFolder":"Nová složka","NewFile":"Nový soubor","LastModified":"Poslední změna","ConfirmDelete":"Opravdu chcete tento soubor smazat?","Upload":"Nahrát","Download":"Stáhnout","Size":"Velikost","NoFiles":"Zatím zde nejsou žádné soubory, jděte a vytvořte je například kliknutím na tlačítko instalace v horní části stránky","FileLoadFailed":"Načtení souboru se nezdařilo"}')
    },
    e30a: function(e, t, r) {
        "use strict";
        r.r(t);
        var a = function() {
                var e = this,
                    t = e.$createElement,
                    r = e._self._c || t;
                return r("div", [r("v-list", e._l(e.value, (function(t, a) {
                    return r("v-list-item", {
                        key: a,
                        on: {
                            click: function(t) {
                                return e.startEdit(a)
                            }
                        }
                    }, [r("v-list-item-content", {
                        domProps: {
                            textContent: e._s(t.type)
                        }
                    }), r("v-list-item-action", {
                        staticClass: "flex-row"
                    }, [r("v-tooltip", {
                        attrs: {
                            bottom: ""
                        },
                        scopedSlots: e._u([{
                            key: "activator",
                            fn: function(t) {
                                var a = t.on;
                                return [r("v-btn", e._g({
                                    attrs: {
                                        icon: ""
                                    }
                                }, a), [r("v-icon", [e._v("mdi-pencil")])], 1)]
                            }
                        }], null, !0)
                    }, [r("span", {
                        domProps: {
                            textContent: e._s(e.$t("common.Edit"))
                        }
                    })]), r("v-tooltip", {
                        attrs: {
                            bottom: ""
                        },
                        scopedSlots: e._u([{
                            key: "activator",
                            fn: function(t) {
                                var o = t.on;
                                return [r("v-btn", e._g({
                                    attrs: {
                                        icon: ""
                                    },
                                    on: {
                                        click: function(t) {
                                            return t.stopPropagation(), e.remove(a)
                                        }
                                    }
                                }, o), [r("v-icon", [e._v("mdi-close")])], 1)]
                            }
                        }], null, !0)
                    }, [r("span", {
                        domProps: {
                            textContent: e._s(e.$t("common.Delete"))
                        }
                    })])], 1)], 1)
                })), 1), e.availableEnvs.length > 0 ? r("v-btn", {
                    attrs: {
                        text: "",
                        block: ""
                    },
                    domProps: {
                        textContent: e._s(e.$t("common.Add"))
                    },
                    on: {
                        click: function(t) {
                            return e.startAdd()
                        }
                    }
                }) : e._e(), r("ui-overlay", {
                    attrs: {
                        title: e.add ? e.$t("common.Add") : e.currentEnv.type,
                        card: "",
                        closable: ""
                    },
                    on: {
                        close: function(t) {
                            return e.reset()
                        }
                    },
                    model: {
                        value: e.edit,
                        callback: function(t) {
                            e.edit = t
                        },
                        expression: "edit"
                    }
                }, [e.add ? r("v-row", [r("v-col", {
                    attrs: {
                        cols: "12"
                    }
                }, [r("ui-select", {
                    attrs: {
                        items: e.availableEnvs,
                        label: e.$t("templates.Environment")
                    },
                    model: {
                        value: e.currentEnv.type,
                        callback: function(t) {
                            e.$set(e.currentEnv, "type", t)
                        },
                        expression: "currentEnv.type"
                    }
                })], 1)], 1) : e._e(), r("v-row", [r("v-col", {
                    attrs: {
                        cols: "12"
                    }
                }, [r("ui-env-config", {
                    attrs: {
                        "no-fields-text": e.$t("env.NoEnvFields")
                    },
                    model: {
                        value: e.currentEnv,
                        callback: function(t) {
                            e.currentEnv = t
                        },
                        expression: "currentEnv"
                    }
                })], 1)], 1), r("v-row", [r("v-col", {
                    attrs: {
                        cols: "12"
                    }
                }, [r("v-btn", {
                    attrs: {
                        color: "success",
                        block: ""
                    },
                    domProps: {
                        textContent: e._s(e.$t("common.Save"))
                    },
                    on: {
                        click: function(t) {
                            return e.save()
                        }
                    }
                })], 1)], 1)], 1)], 1)
            },
            o = [];
        r("ddb0");
        const n = ["standard", "tty", "docker"];
        var s = {
                props: {
                    value: {
                        type: Array,
                        default: () => []
                    }
                },
                data() {
                    return {
                        add: !1,
                        edit: !1,
                        editIndex: 0,
                        currentEnv: {
                            type: "standard"
                        }
                    }
                },
                computed: {
                    availableEnvs() {
                        return n.filter(e => -1 === this.value.map(t => t.type === e).indexOf(!0))
                    }
                },
                methods: {
                    addEnv() {
                        this.value.push({
                            type: this.newEnv
                        }),
                        this.newEnv = "standard",
                        this.addingEnv = !1
                    },
                    remove(e) {
                        const t = [...this.value];
                        t.splice(e, 1),
                        this.$emit("input", t)
                    },
                    reset() {
                        this.add = !1,
                        this.edit = !1,
                        this.editIndex = 0,
                        this.currentEnv = {
                            type: this.availableEnvs[0]
                        }
                    },
                    startAdd() {
                        this.currentEnv = {
                            type: this.availableEnvs[0]
                        },
                        this.add = !0,
                        this.edit = !0
                    },
                    startEdit(e) {
                        this.currentEnv = {
                            ...this.value[e]
                        },
                        this.editIndex = e,
                        this.add = !1,
                        this.edit = !0
                    },
                    save() {
                        const e = [...this.value];
                        this.add ? e.push(this.currentEnv) : e[this.editIndex] = this.currentEnv,
                        this.$emit("input", e),
                        this.reset()
                    }
                }
            },
            i = s,
            l = r("2877"),
            d = r("6544"),
            c = r.n(d),
            u = r("8336"),
            m = r("62ad"),
            p = r("132d"),
            v = r("8860"),
            f = r("da13"),
            S = r("1800"),
            g = r("5d23"),
            h = r("0fd9"),
            E = r("3a2f"),
            P = Object(l["a"])(i, a, o, !1, null, null, null);
        t["default"] = P.exports;
        c()(P, {
            VBtn: u["a"],
            VCol: m["a"],
            VIcon: p["a"],
            VList: v["a"],
            VListItem: f["a"],
            VListItemAction: S["a"],
            VListItemContent: g["a"],
            VRow: h["a"],
            VTooltip: E["a"]
        })
    },
    e3a2: function(e) {
        e.exports = JSON.parse('{"ErrGeneric":"Ismeretlen hiba","ErrUnknownError":"Ismeretlen hiba","ErrInvalidCredentials":"Érvénytelen hitelesítő adatok","ErrServiceNotAvailable":"A szolgáltatás nem elérhető","ErrEmailNotConfigured":"Nincs beállítva e-mail-cím","ErrTokenInvalid":"Érvénytelen hozzáférési kulcs","ErrClientNotFound":"Kliens nem található","ErrUserNotFound":"A felhasználó nem található","ErrLoginNotPermitted":"A belépés nem engedélyezett","ErrInvalidTokenState":"Érvénytelen token állapot","ErrSettingNotConfigured":"{setting} nincs beállítva","ErrNoTemplate":"\'{name}\' nevű sablon nem létezik","ErrServiceInvalidProvider":"{provider} nem lesz támogatva a(z) {service} által","ErrFieldRequired":"A(z) {field} mező kötelező","ErrFieldMustBePrintable":"A(z) {field} mezőnek nyomtatható ascii karakterekből kell lennie","ErrFieldHasURICharacters":"A(z) {field} mező nem tartalmazhat olyan karaktereket, amiket URLekben használnak","ErrFieldIsInvalidHost":"A(z) {field} mezőnek egy valós IP-címnek vagy FQDNnek kell lennie","ErrFieldIsInvalidIP":"A(z) {field} mezőnek egy valós IP-címnek kell lennie","ErrFieldTooLarge":"A(z) {field} mező nem lehet nagyobb mint {max}","ErrFieldTooSmall":"A(z) {field} mező nem lehet kisseb mint {min}","ErrFieldNotBetween":"A(z) {field} mezőnek {min} és {max} között kell lennie","ErrFieldEqual":"A(z) {field1} mező nem lehet ugyanaz mint a(z) {field2} mező","ErrFieldNotEqual":"A(z) {field1} mező nem ugyanaz mint a(z) {field2} mező","ErrFieldNotEmail":"A(z) {field} mezőben egy érvénytelen e-mail-cím van megadva","ErrFieldLength":"A(z) {field} mezőnek legalább {length} hosszúnak kell lennie","ErrNoPermission":"Nincs jogosultsága a műveletet végrehajtásához","ErrDatabaseNotAvailable":"Az adatbázis nem elérhető","ErrNoNodes":"Nincs elérhető csomópont","ErrNoTemplates":"Nincs elérhető sablon","ErrPasswordRequirements":"A jelszónak minimum {min} karakter hosszúnak kell lennie","ErrUsernameRequirements":"A felhasználónévnek minimum {min} karakternek kell lennie","ErrPasswordsNotIdentical":"A jelszavak nem egyeznek","ErrSessionTimedOut":"Lejárt az ülése, kérjük lépjen be újra","ErrMissingScope":"Nincs jogosultsága a művelet végrehajtásához","ErrInvalidJson":"A json adat érvénytelen","ErrSocketFailed":"The WebSocket connection encountered an error, some features might be slow or broken"}')
    },
    e3d4: function(e) {
        e.exports = JSON.parse('{"Id":"ID","Name":"Name","Address":"Address","Online":"Online","Offline":"Offline","Loading":"Loading...","General":"General","Language":"Language","SelectLanguage":"Select Language","Settings":"Settings","Update":"Update","Edit":"Edit","Delete":"Delete","Create":"Create","Save":"Save","Saved":"Saved","SaveFailed":"Failed saving","Cancel":"Cancel","Confirm":"Confirm","Actions":"Actions","Host":"Host","Port":"Port","Template":"Template","Options":"Options","Collapse":"Collapse","Copied":"Copied to clipboard","Unknown":"Unknown","Search":"Search","Back":"Back","Next":"Next","LanguageName":"Tiếng Việt","Details":"Details","ErrorDetails":"Error Details","HelpTranslate":"Help us translate PufferPanel","DarkMode":"Dark Mode","ThemeOptions":"Theme Options","Protocol":"Protocol","Add":"Add"}')
    },
    e404: function(e) {
        e.exports = JSON.parse('{"Templates":"Mallid","NoTemplates":"Siin pole veel malle","Deleted":"Template deleted","New":"Loo uus mall","Edit":"Muuda malli","Editor":"Redigeerija","Json":"JSON","Display":"Kuvatav Nimi","Type":"Tüüp","Variables":"Muutujad","Install":"Paigalda","AddInstallStep":"Lisa järgmine Samm","DeleteInstallStep":"Kustuta Paigaldamise Samm","Description":"Kirjeldus","DataType":"Andme Tüüp","DefaultValue":"Vaikimisi Väärtus","Required":"Nõutav","UserEditable":"Kasutajad saavad muuta","Value":"Väärtus","AddOption":"Lisa valik","AddCommand":"Lisa käsklus","Filename":"Failinimi","Content":"Sisu","Source":"Allikas","Target":"Sihtpunkt","Version":"Versioon","ReleaseType":"Väljalaske Tüüp","AddFile":"Lisa fail","AddVariable":"Lisa muutuja","Environment":"Environment","Environments":"Environments","AddEnvironment":"Lisa keskkond","DefaultEnvironment":"Default environment","AddEnvVar":"Lisa env muutuja","EnvVars":"Keskkonna muutujad","DockerImage":"Dockeri Image","SaveSuccess":"Salvestatud Mall","VarNameNoSpaces":"Muutuja nimi ei tohi olla tühi ega sisaldada tühikuid","SupportedEnvironments":"Toetatud Keskkonnad","RunConfig":"Käivita Konfiguratsioon","PreHook":"Enne Käivituse Haakimine","PostHook":"Pärast Käivituse Haakimine","AddPreStep":"Lisa Enne Käivitamist Samm","AddPostStep":"Lisa Pärast Käivitamist Samm","DeletePreStep":"Kustuta Enne Käivitamist Samm","DeletePostStep":"Lisa Pärast Käivitamist Samm","Shutdown":"Lülita välja","Command":"Käsklus","Arguments":"Argumendid","AddArgument":"Lisa argument","import":{"OverrideWarning":"HOIATUS: Imporditud mallid kirjutatakse üle sama ID-ga olevasolevad mallid","Import":"Impordi mall","Tooltip":"Impordi mall ametlikust repositooriumist","Select":"Vali mall mida importida","Started":"Impordin malle, palun oota moment","Successful":"Edukalt imporditud mall {template}","NoTemplatesTitle":"Kas sa soovid importida malle?","NoTemplatesContent":"Sul hetkel pole ühtegi malli. Mallid on vajalikud, et luua servereid.<br/>Kas sa soovid importida mõned mallid ametlikust PufferPaneli repositooriumist?"},"stop":{"Command":"Käsklus","Signal":"Signaal"},"processors":{"download":{"ProcessorName":"Download","files":"Files"},"command":{"ProcessorName":"Run Command","commands":"Commands"},"alterfile":{"ProcessorName":"Change file","regex":"Treat search as RegEx","search":"Text to search","replace":"Replace with"},"writefile":{"ProcessorName":"Write to file","text":"Content"},"move":{"ProcessorName":"Move File","source":"Source","target":"Target"},"mkdir":{"ProcessorName":"Create Directory"},"mojangdl":{"ProcessorName":"Download Minecraft"},"forgedl":{"ProcessorName":"Download Minecraft Forge"},"spongeforgedl":{"ProcessorName":"Download Minecraft SpongeForge","releaseType":"Release Type"},"fabricdl":{"ProcessorName":"Download Minecraft Fabric"}}}')
    },
    e40d: function(e) {
        e.exports = JSON.parse('{"ServersView":"يمكنه مشاهدة الخادم","ServersEdit":"تعديل الخادم","ServersInstall":"تثبيت الخادم","ServersConsole":"عرض وحدة التحكم","ServersConsoleSend":"إرسال أوامر إلى وحدة التحكم","ServersStop":"إيقاف و فرض إيقاف الخادم","ServersStart":"تشغيل الخادم","ServersStat":"عرض بيانات وحدة المعالجة المركزية و الذاكرة","ServersFiles":"السماح بالوصول إلى الملفات باستخدام SFTP","ServersFilesGet":"مشاهده و تحميل الملفات بستخدام مدير الملفات","ServersFilesPut":"تعديل و رفع الملفات باستخدام مدير الملفات","ServersEditUsers":"تحرير صلاحيات وصول المستخدم للخادم","Admin":"مشرف (هذا يعطي كل الأُذونات الممكنة)","ViewServers":"See Servers","CreateServers":"إنشاء خادم جديد","DeleteServers":"حذف الخوادم","EditServerAdmin":"تعديل إعدادات الخادم","ViewNodes":"مشاهده الNodes","EditNodes":"تعديل ال Nodes","DeployNodes":"إنشاء Nodes جدد","ViewTemplates":"مشاهدة القوالب","EditTemplates":"تعديل القوالب","ViewUsers":"رؤية كافة المستخدمين","EditUsers":"تعديل مستخدمين آخرين"}')
    },
    e483: function(e) {
        e.exports = JSON.parse('{"Node":"节点","Nodes":"节点","Edit":"编辑节点","Add":"添加节点","Update":"更新节点","Delete":"删除节点","PublicHost":"F.Q.D.N.","PublicPort":"端口号","PrivateHost":"私有主机地址","PrivatePort":"私有端口号","SftpPort":"SFTP端口号","SaveConfig":"保存配置","SavePublicKey":"保存公开密钥","DeploymentInstruction":"To deploy the node, install PufferPanel on the new server and place the config file in `/etc/pufferpanel/`<br/>Restart PufferPanel on the new server afterwards.","UpdateSuccess":"Successfully updated node","UpdateError":"Error updating node"}')
    },
    e6ec: function(e) {
        e.exports = JSON.parse('{"FileManager":"File Manager","NewFolder":"New Folder","NewFile":"New File","LastModified":"Last Modified","ConfirmDelete":"Are you sure you want to delete this file?","Upload":"Upload","Download":"Download","Size":"Size","NoFiles":"There are no files here yet, go and create some for example by clicking the install button at the top of the page","FileLoadFailed":"Failed loading file"}')
    },
    e796: function(e) {
        e.exports = JSON.parse('{"Node":"Node","Nodes":"Nodeler","Edit":"Node Düzenle","Add":"Node ekle","Update":"Node güncelle","Delete":"Node sil","PublicHost":"Genel Sunucu","PublicPort":"Genel Port","PrivateHost":"Özel Sunucu","PrivatePort":"Özel Port","SftpPort":"SFTP Portu","SaveConfig":"Ayarları Kaydet","SavePublicKey":"Genel Anahtarı Kaydet","DeploymentInstruction":"To deploy the node, install PufferPanel on the new server and place the config file in `/etc/pufferpanel/`<br/>Restart PufferPanel on the new server afterwards.","UpdateSuccess":"Node güncelleştirildi","UpdateError":"Node update ederken hata meydana geldi"}')
    },
    e937: function(e) {
        e.exports = JSON.parse('{"FileManager":"Administrador de Archivos","NewFolder":"Nueva capreta","NewFile":"Nuevo Archivo","LastModified":"Última modificación","ConfirmDelete":"¿Estás seguro que quieres borrar este archivo?","Upload":"Cargar","Download":"Descargar","Size":"Tamaño","NoFiles":"Todavía no hay archivos, vaya y cree algunos por ejemplo haciendo clic en el botón de instalar en la parte superior de la página","FileLoadFailed":"Error al cargar el archivo"}')
    },
    ea6c: function(e) {
        e.exports = JSON.parse('{"Users":"Users","Add":"Add User","AccountSettings":"Account Settings","OldPassword":"Old Password","NewPassword":"New Password","ConfirmPassword":"Confirm Password","ChangePassword":"Change Password","ChangeInfo":"Change Account Details","InfoChanged":"Your information has been changed","PasswordChanged":"Your password has been changed","AccountPassword":"Account Password","Account":"Account","Login":"Login","LoginLink":"Or login here","Logout":"Logout","Register":"Register","RegisterLink":"Or register here","RegisterSuccess":"You have successfully registered","NoEmailGiven":"You must provide the email of the user you want to add","Username":"Username","Password":"Password","Email":"Email","Edit":"Edit User","Update":"Update User","Delete":"Delete User","CreateSuccess":"Created User","CreateError":"Failed creating user","UpdateSuccess":"Updated User","UpdateError":"Failed updating user","PermsUpdateError":"Failed updating user permissions"}')
    },
    eadd: function(e) {
        e.exports = JSON.parse('{"ServersView":"Kan visa denna server","ServersEdit":"Redigera servern","ServersInstall":"Installera servern","ServersConsole":"Visa konsolen","ServersConsoleSend":"Skicka kommandon till konsolen","ServersStop":"Stoppa och döda servern","ServersStart":"Starta servern","ServersStat":"Visa CPU- och minnesanvändning","ServersFiles":"Tillåt åtkomst till filer med SFTP","ServersFilesGet":"Visa och ladda ner filer med filhanteraren","ServersFilesPut":"Redigera och ladda upp filer med filhanteraren","ServersEditUsers":"Redigera användarens åtkomst till denna server","Admin":"Admin (detta ger varje möjlig behörighet)","ViewServers":"See Servers","CreateServers":"Skapa nya servrar","DeleteServers":"Ta bort servrar","EditServerAdmin":"Redigera serverinställningar","ViewNodes":"Se noder","EditNodes":"Redigera noder","DeployNodes":"Skapa nya noder","ViewTemplates":"Se mallar","EditTemplates":"Redigera mallar","ViewUsers":"Se alla användare","EditUsers":"Redigera andra användare"}')
    },
    eb61: function(e) {
        e.exports = JSON.parse('{"Templates":"Templates","NoTemplates":"There are no templates here yet","Deleted":"Template deleted","New":"Create new template","Edit":"Edit template","Editor":"Editor","Json":"JSON","Display":"Display Name","Type":"Type","Variables":"Variables","Install":"Install","AddInstallStep":"Add Install Step","DeleteInstallStep":"Delete Install Step","Description":"Description","DataType":"Data Type","DefaultValue":"Default Value","Required":"Required","UserEditable":"Users can edit","Value":"Value","AddOption":"Add an option","AddCommand":"Add command","Filename":"Filename","Content":"Content","Source":"Source","Target":"Target","Version":"Version","ReleaseType":"Release Type","AddFile":"Add file","AddVariable":"Add variable","Environment":"Environment","Environments":"Environments","AddEnvironment":"Add environment","DefaultEnvironment":"Default environment","AddEnvVar":"Add env variable","EnvVars":"Environment variables","DockerImage":"Docker Image","SaveSuccess":"Saved Template","VarNameNoSpaces":"A variable name cannot be empty or contain spaces","SupportedEnvironments":"Supported Environments","RunConfig":"Run Configuration","PreHook":"Pre Run Hook","PostHook":"Post Run Hook","AddPreStep":"Add Pre Run Step","AddPostStep":"Add Post Run Step","DeletePreStep":"Delete Pre Run Step","DeletePostStep":"Delete Post Run Step","Shutdown":"Shutdown","Command":"Command","Arguments":"Arguments","AddArgument":"Add an argument","import":{"OverrideWarning":"WARNING: Imported templates WILL overwrite existing templates with the same ID","Import":"Import templates","Tooltip":"Import templates from the official repository","Select":"Select templates to import","Started":"Importing templates, please wait a moment","Successful":"Successfully imported template {template}","NoTemplatesTitle":"Do you want to import templates?","NoTemplatesContent":"You currently don\'t have any templates. Templates are necessary to create servers.<br/>Do you want to import some templates from the official PufferPanel templates repository now?"},"stop":{"Command":"Command","Signal":"Signal"},"processors":{"download":{"ProcessorName":"Download","files":"Files"},"command":{"ProcessorName":"Run Command","commands":"Commands"},"alterfile":{"ProcessorName":"Change file","regex":"Treat search as RegEx","search":"Text to search","replace":"Replace with"},"writefile":{"ProcessorName":"Write to file","text":"Content"},"move":{"ProcessorName":"Move File","source":"Source","target":"Target"},"mkdir":{"ProcessorName":"Create Directory"},"mojangdl":{"ProcessorName":"Download Minecraft"},"forgedl":{"ProcessorName":"Download Minecraft Forge"},"spongeforgedl":{"ProcessorName":"Download Minecraft SpongeForge","releaseType":"Release Type"},"fabricdl":{"ProcessorName":"Download Minecraft Fabric"}}}')
    },
    ec20: function(e) {
        e.exports = JSON.parse('{"Users":"Users","Add":"Add User","AccountSettings":"Account Settings","OldPassword":"Old Password","NewPassword":"New Password","ConfirmPassword":"Confirm Password","ChangePassword":"Change Password","ChangeInfo":"Change Account Details","InfoChanged":"Your information has been changed","PasswordChanged":"Your password has been changed","AccountPassword":"Account Password","Account":"Account","Login":"Login","LoginLink":"Or login here","Logout":"Logout","Register":"Register","RegisterLink":"Or register here","RegisterSuccess":"You have successfully registered","NoEmailGiven":"You must provide the email of the user you want to add","Username":"Username","Password":"Password","Email":"Email","Edit":"Edit User","Update":"Update User","Delete":"Delete User","CreateSuccess":"Created User","CreateError":"Failed creating user","UpdateSuccess":"Updated User","UpdateError":"Failed updating user","PermsUpdateError":"Failed updating user permissions"}')
    },
    ec4d: function(e) {
        e.exports = JSON.parse('{"NoEnvFields":"There are no environment specific options for this environment","docker":{"name":"Docker","image":"Image","networkMode":"Network Mode","networkName":"Network Name","bindings":"Bindings","portBindings":"Port Bindings","OutsidePort":"Outside Port","InsidePort":"Inside Port","HostPath":"Host Path","ContainerPath":"Container Path"},"standard":{"name":"Standard"},"tty":{"name":"TTY"}}')
    },
    ec78: function(e) {
        e.exports = JSON.parse('{"Server":"Server","NoServers":"There are no servers you have access to","Servers":"Servers","Add":"Add Server","Console":"Console","Controls":"Controls","SFTPInfo":"SFTP Information","Restart":"Restart","Start":"Start","Stop":"Stop","Kill":"Kill","Install":"Install","Send":"Send","Pause":"Pause","CPU":"CPU","Memory":"Memory","Name":"Server Name","SelectNode":"Please select node","SelectTemplate":"Please select template","SelectThisTemplate":"Use this template","SelectUser":"Please select user","Environment":"Environment","SelectEnvironment":"Please select environment","TypeUsername":"Type a username","AdminControls":"Admin Controls","Settings":"Settings","NoEditableVars":"This server does not have variables you can edit","ConfirmDelete":"Do you really want to delete this server? (this cannot be undone)","Delete":"Delete Server","Deleted":"Deleted Server","NoReadme":"No readme available for this template","SftpConnection":"Connect to SFTP","EditDefinition":"Edit Server Definition","Reload":"Reload server data from disk","Reloaded":"Reloaded server data","Autostart":"Start the server when the node starts","Autorestart":"Restart the server when it stops normally","Autorecover":"Restart the server when it crashes"}')
    },
    ed51: function(e) {
        e.exports = JSON.parse('{"ServersView":"Can view this server","ServersEdit":"Edit the server","ServersInstall":"Install the server","ServersConsole":"View the console","ServersConsoleSend":"Send commands to the console","ServersStop":"Stop and kill the server","ServersStart":"Start the server","ServersStat":"View CPU and memory statistics","ServersFiles":"Allow access to files using SFTP","ServersFilesGet":"View and download files using the file manager","ServersFilesPut":"Edit and upload files using the file manager","ServersEditUsers":"Edit user\'s access to this server","Admin":"Admin (this grants every possible permission)","ViewServers":"See Servers","CreateServers":"Create new Servers","DeleteServers":"Delete Servers","EditServerAdmin":"Edit Server Settings","ViewNodes":"See Nodes","EditNodes":"Edit Nodes","DeployNodes":"Deploy new Nodes","ViewTemplates":"See Templates","EditTemplates":"Edit Templates","ViewUsers":"See all Users","EditUsers":"Edit other Users"}')
    },
    ed5d: function(e) {
        e.exports = JSON.parse('{"Users":"Usuarios","Add":"Añadir usuario","AccountSettings":"Configuración de cuenta","OldPassword":"Contraseña antigua","NewPassword":"Nueva contraseña","ConfirmPassword":"Confirme la contraseña","ChangePassword":"Cambiar contraseña","ChangeInfo":"Cambiar detalles de la cuenta","InfoChanged":"Su información ha sido cambiada","PasswordChanged":"Su contraseña ha sido cambiada","AccountPassword":"Contraseña de la cuenta","Account":"Cuenta","Login":"Iniciar sesión","LoginLink":"O inicie sesión aquí","Logout":"Cerrar sesión","Register":"Registrarse","RegisterLink":"O regístrese aquí","RegisterSuccess":"Se ha registrado correctamente","NoEmailGiven":"Debes proporcionar el correo del usuario que quieres añadir","Username":"Nombre de usuario","Password":"Contraseña","Email":"Correo","Edit":"Editar usuario","Update":"Actualizar usuario","Delete":"Borrar usuario","CreateSuccess":"Usuario creado","CreateError":"Error al crear el usuario","UpdateSuccess":"Usuario actualizado","UpdateError":"Error al actualizar el usuario","PermsUpdateError":"Error al actualizar los permisos del usuario"}')
    },
    edba: function(e) {
        e.exports = JSON.parse('{"FileManager":"File Manager","NewFolder":"New Folder","NewFile":"New File","LastModified":"Last Modified","ConfirmDelete":"Are you sure you want to delete this file?","Upload":"Upload","Download":"Download","Size":"Size","NoFiles":"There are no files here yet, go and create some for example by clicking the install button at the top of the page","FileLoadFailed":"Failed loading file"}')
    },
    ef2c: function(e) {
        e.exports = JSON.parse('{"NoEnvFields":"There are no environment specific options for this environment","docker":{"name":"Docker","image":"Immagine","networkMode":"Modalità del network","networkName":"Nome del network","bindings":"Bindings","portBindings":"Lista delle porte","OutsidePort":"Porta Esterna","InsidePort":"Porta interna","HostPath":"Host Path","ContainerPath":"Container Path"},"standard":{"name":"Standard"},"tty":{"name":"TTY"}}')
    },
    f04d: function(e) {
        e.exports = JSON.parse('{"Server":"Server","NoServers":"Es gibt keine Server, auf die du Zugriff hast","Servers":"Server","Add":"Server hinzufügen","Console":"Konsole","Controls":"Steuerung","SFTPInfo":"SFTP-Informationen","Restart":"Restart","Start":"Starten","Stop":"Anhalten","Kill":"Beenden","Install":"Installieren","Send":"Senden","Pause":"Pausieren","CPU":"CPU","Memory":"Arbeitsspeicher","Name":"Servername","SelectNode":"Bitte Knoten auswählen","SelectTemplate":"Bitte Vorlage auswählen","SelectThisTemplate":"Diese Vorlage verwenden","SelectUser":"Bitte Benutzer auswählen","Environment":"Umgebung","SelectEnvironment":"Bitte Umgebung auswählen","TypeUsername":"Benutzernamen eingeben","AdminControls":"Administration","Settings":"Einstellungen","NoEditableVars":"Dieser Server hat keine Variablen, die du bearbeiten kannst","ConfirmDelete":"Willst du diesen Server wirklich löschen? (Dies kann nicht rückgängig gemacht werden)","Delete":"Server löschen","Deleted":"Server gelöscht","NoReadme":"Keine Beschreibung für diese Vorlage verfügbar","SftpConnection":"Mit SFTP verbinden","EditDefinition":"Edit Server Definition","Reload":"Serverkonfiguration neu laden","Reloaded":"Serverkonfiguration neu geladen","Autostart":"Server starten, wenn der Knoten startet","Autorestart":"Server neu starten, wenn er gewöhnlich gestoppt ist","Autorecover":"Server neu starten, wenn er abgestürzt ist"}')
    },
    f05a: function(e) {
        e.exports = JSON.parse('{"Id":"ID","Name":"Name","Address":"位址","Online":"線上","Offline":"離線","Loading":"載入中...","General":"一般","Language":"語言","SelectLanguage":"選擇語言","Settings":"設置","Update":"更新","Edit":"編輯","Delete":"刪除","Create":"Create","Save":"Save","Saved":"Saved","SaveFailed":"Failed saving","Cancel":"取消","Confirm":"確認","Actions":"Actions","Host":"Host","Port":"端口","Template":"範本","Options":"Options","Collapse":"Collapse","Copied":"Copied to clipboard","Unknown":"不明","Search":"搜尋","Back":"返回","Next":"Next","LanguageName":"英文","Details":"詳細資料","ErrorDetails":"Error Details","HelpTranslate":"幫助我們翻譯 PufferPanel!`","DarkMode":"黑暗模式","ThemeOptions":"樣式","Protocol":"Protocol","Add":"Add"}')
    },
    f243: function(e, t, r) {
        "use strict";
        r.r(t);
        var a = function() {
                var e = this,
                    t = e.$createElement,
                    r = e._self._c || t;
                return r("ui-input", e._g({
                    attrs: {
                        id: e.id,
                        disabled: e.disabled,
                        label: e.label,
                        "error-messages": e.errorMessages,
                        icon: "mdi-lock",
                        "end-icon": e.showPassword ? "mdi-eye-off" : "mdi-eye",
                        name: e.name,
                        type: e.showPassword ? "text" : "password"
                    },
                    on: {
                        "click:append": function(t) {
                            e.showPassword = !e.showPassword
                        }
                    },
                    model: {
                        value: e.internalValue,
                        callback: function(t) {
                            e.internalValue = t
                        },
                        expression: "internalValue"
                    }
                }, e.listeners))
            },
            o = [],
            n = {
                props: {
                    disabled: {
                        type: Boolean,
                        default: () => !1
                    },
                    errorMessages: {
                        type: String,
                        default: () => {}
                    },
                    id: {
                        type: String,
                        default: () => {}
                    },
                    label: {
                        type: String,
                        default: () => {}
                    },
                    name: {
                        type: String,
                        default: () => {}
                    },
                    value: {
                        type: String,
                        default: () => ""
                    }
                },
                data() {
                    return {
                        internalValue: this.value,
                        showPassword: !1
                    }
                },
                computed: {
                    listeners() {
                        const e = {
                            ...this.$listeners
                        };
                        return delete e.input, delete e["click:append"], e
                    }
                },
                watch: {
                    internalValue(e) {
                        this.$emit("input", this.internalValue)
                    }
                }
            },
            s = n,
            i = r("2877"),
            l = Object(i["a"])(s, a, o, !1, null, null, null);
        t["default"] = l.exports
    },
    f2e1: function(e) {
        e.exports = JSON.parse('{"Templates":"Templates","NoTemplates":"There are no templates here yet","Deleted":"Template deleted","New":"Create new template","Edit":"Edit template","Editor":"Editor","Json":"JSON","Display":"Display Name","Type":"Type","Variables":"Variables","Install":"Install","AddInstallStep":"Add Install Step","DeleteInstallStep":"Delete Install Step","Description":"Description","DataType":"Data Type","DefaultValue":"Default Value","Required":"Required","UserEditable":"Users can edit","Value":"Value","AddOption":"Add an option","AddCommand":"Add command","Filename":"Filename","Content":"Content","Source":"Source","Target":"Target","Version":"Version","ReleaseType":"Release Type","AddFile":"Add file","AddVariable":"Add variable","Environment":"Environment","Environments":"Environments","AddEnvironment":"Add environment","DefaultEnvironment":"Default environment","AddEnvVar":"Add env variable","EnvVars":"Environment variables","DockerImage":"Docker Image","SaveSuccess":"Saved Template","VarNameNoSpaces":"A variable name cannot be empty or contain spaces","SupportedEnvironments":"Supported Environments","RunConfig":"Run Configuration","PreHook":"Pre Run Hook","PostHook":"Post Run Hook","AddPreStep":"Add Pre Run Step","AddPostStep":"Add Post Run Step","DeletePreStep":"Delete Pre Run Step","DeletePostStep":"Delete Post Run Step","Shutdown":"Shutdown","Command":"Command","Arguments":"Arguments","AddArgument":"Add an argument","import":{"OverrideWarning":"WARNING: Imported templates WILL overwrite existing templates with the same ID","Import":"Import templates","Tooltip":"Import templates from the official repository","Select":"Select templates to import","Started":"Importing templates, please wait a moment","Successful":"Successfully imported template {template}","NoTemplatesTitle":"Do you want to import templates?","NoTemplatesContent":"You currently don\'t have any templates. Templates are necessary to create servers.<br/>Do you want to import some templates from the official PufferPanel templates repository now?"},"stop":{"Command":"Command","Signal":"Signal"},"processors":{"download":{"ProcessorName":"Download","files":"Files"},"command":{"ProcessorName":"Run Command","commands":"Commands"},"alterfile":{"ProcessorName":"Change file","regex":"Treat search as RegEx","search":"Text to search","replace":"Replace with"},"writefile":{"ProcessorName":"Write to file","text":"Content"},"move":{"ProcessorName":"Move File","source":"Source","target":"Target"},"mkdir":{"ProcessorName":"Create Directory"},"mojangdl":{"ProcessorName":"Download Minecraft"},"forgedl":{"ProcessorName":"Download Minecraft Forge"},"spongeforgedl":{"ProcessorName":"Download Minecraft SpongeForge","releaseType":"Release Type"},"fabricdl":{"ProcessorName":"Download Minecraft Fabric"}}}')
    },
    f50e: function(e) {
        e.exports = JSON.parse('{"FileManager":"Filhanterare","NewFolder":"Ny mapp","NewFile":"Ny fil","LastModified":"Senast modifierad","ConfirmDelete":"Är du säker på att du vill ta bort den här filen?","Upload":"Ladda Upp","Download":"Ladda ned","Size":"Storlek","NoFiles":"Det finns inga filer här ännu, gå och skapa några till exempel genom att klicka på installationsknappen högst upp på sidan","FileLoadFailed":"Det gick inte att ladda filen"}')
    },
    f598: function(e, t, r) {
        "use strict";
        r.r(t);
        var a = function() {
                var e = this,
                    t = e.$createElement,
                    r = e._self._c || t;
                return r("v-switch", e._g({
                    attrs: {
                        id: e.id,
                        "input-value": e.value,
                        dense: e.dense,
                        disabled: e.disabled,
                        label: e.label,
                        "hide-details": e.hideDetails && !e.showHint,
                        "persistent-hint": e.showHint,
                        hint: e.hintValue,
                        "error-messages": e.errorMessages,
                        "prepend-icon": e.icon,
                        "append-icon": e.endIcon,
                        placeholder: e.placeholder,
                        required: e.required,
                        name: e.name
                    },
                    on: {
                        change: function(t) {
                            return e.$emit("input", !!t)
                        }
                    }
                }, e.listeners), [e._l(e.$slots, (function(t, r) {
                    return e._t(r, null, {
                        slot: r
                    })
                }))], 2)
            },
            o = [],
            n = {
                props: {
                    dense: {
                        type: Boolean,
                        default: () => {}
                    },
                    disabled: {
                        type: Boolean,
                        default: () => {}
                    },
                    endIcon: {
                        type: String,
                        default: () => {}
                    },
                    errorMessages: {
                        type: String,
                        default: () => {}
                    },
                    hint: {
                        type: String,
                        default: () => {}
                    },
                    icon: {
                        type: String,
                        default: () => {}
                    },
                    id: {
                        type: String,
                        default: () => {}
                    },
                    label: {
                        type: String,
                        default: () => {}
                    },
                    name: {
                        type: String,
                        default: () => {}
                    },
                    placeholder: {
                        type: String,
                        default: () => {}
                    },
                    required: {
                        type: Boolean,
                        default: () => {}
                    },
                    value: {
                        type: void 0,
                        default: () => "",
                        required: !0
                    }
                },
                computed: {
                    listeners() {
                        const {input: e, ...t} = this.$listeners;
                        return t
                    },
                    hideDetails() {
                        const e = void 0 !== this.errorMessages && "" !== this.errorMessages;
                        return !e
                    },
                    showHint() {
                        const e = void 0 !== this.hint && "" !== this.hint,
                            t = void 0 !== this.$slots.message && "" !== this.$slots.message && this.$slots.message !== [];
                        return e || t
                    },
                    hintValue() {
                        return this.hint ? this.hint : this.$slots.message ? "_" : void 0
                    }
                }
            },
            s = n,
            i = r("2877"),
            l = r("6544"),
            d = r.n(l),
            c = r("b73d"),
            u = Object(i["a"])(s, a, o, !1, null, null, null);
        t["default"] = u.exports;
        d()(u, {
            VSwitch: c["a"]
        })
    },
    f67c: function(e) {
        e.exports = JSON.parse('{"NoEnvFields":"There are no environment specific options for this environment","docker":{"name":"Докер","image":"Зображення","networkMode":"Network Mode","networkName":"Network Name","bindings":"Bindings","portBindings":"Port Bindings","OutsidePort":"Outside Port","InsidePort":"Inside Port","HostPath":"Host Path","ContainerPath":"Container Path"},"standard":{"name":"Стандартний"},"tty":{"name":"TTY"}}')
    },
    f6c5: function(e) {
        e.exports = JSON.parse('{"NoEnvFields":"There are no environment specific options for this environment","docker":{"name":"Docker","image":"Image","networkMode":"Network Mode","networkName":"Network Name","bindings":"Bindings","portBindings":"Port Bindings","OutsidePort":"Outside Port","InsidePort":"Inside Port","HostPath":"Host Path","ContainerPath":"Container Path"},"standard":{"name":"Standard"},"tty":{"name":"TTY"}}')
    },
    f84f: function(e) {
        e.exports = JSON.parse('{"Server":"Server","NoServers":"Non ci sono server a cui hai accesso","Servers":"Servers","Add":"Aggiungi Server","Console":"Console","Controls":"Controlli","SFTPInfo":"Informazione SFTP","Restart":"Riavvia","Start":"Avvia","Stop":"Stop","Kill":"Termina processo","Install":"Installa","Send":"Invia","Pause":"Interrompi","CPU":"CPU","Memory":"Memoria","Name":"Nome del Server","SelectNode":"Sei pregato di selezionare il nodo","SelectTemplate":"Sei pregato di selezionare il modello","SelectThisTemplate":"Usa questo modello","SelectUser":"Sei pregato di selezionare l\'utente","Environment":"Ambiente","SelectEnvironment":"Sei pregato di selezionare l\'ambiente","TypeUsername":"Digita un nome utente","AdminControls":"Controlli Amministratore","Settings":"Impostazioni","NoEditableVars":"Questo server non ha variabili che puoi modificare","ConfirmDelete":"Vuoi davvero eliminare questo server? (ciò non è reversibile)","Delete":"Elimina Server","Deleted":"Server Eliminato","NoReadme":"Nessun readme disponibile per questo modello","SftpConnection":"Connetti a SFTP","EditDefinition":"Edit Server Definition","Reload":"Ricarica impostazioni server dal disco","Reloaded":"Dati server ricaricati","Autostart":"Starta il server quando il nodo starta","Autorestart":"Riavvia il server quando si spegne normalmente","Autorecover":"Riavvia il server quando crasha"}')
    },
    f8be: function(e) {
        e.exports = JSON.parse('{"Node":"Węzeł","Nodes":"Węzły","Edit":"Edytuj węzeł","Add":"Dodaj węzeł","Update":"Aktualizuj węzeł","Delete":"Usuń węzeł","PublicHost":"Publiczny Host","PublicPort":"Publiczny Port","PrivateHost":"Prywatny Host","PrivatePort":"Prywatny Port","SftpPort":"Port SFTP","SaveConfig":"Zapisz konfigurację","SavePublicKey":"Zapisz klucz publiczny","DeploymentInstruction":"Aby wdrożyć węzeł, zainstaluj PufferPanel na nowym serwerze i umieść plik konfiguracyjny w `/etc/pufferpanel/`<br/>Następnie uruchom ponownie PufferPanel na nowym serwerze.","UpdateSuccess":"Pomyślnie zaktualizowano węzeł","UpdateError":"Błąd podczas aktualizacji węzła"}')
    },
    f956: function(e) {
        e.exports = JSON.parse('{"Id":"ID","Name":"Name","Address":"Address","Online":"Online","Offline":"Offline","Loading":"Loading...","General":"General","Language":"Language","SelectLanguage":"Select Language","Settings":"Settings","Update":"Update","Edit":"Edit","Delete":"Delete","Create":"Create","Save":"Save","Saved":"Saved","SaveFailed":"Failed saving","Cancel":"Cancel","Confirm":"Confirm","Actions":"Actions","Host":"Host","Port":"Port","Template":"Template","Options":"Options","Collapse":"Collapse","Copied":"Copied to clipboard","Unknown":"Unknown","Search":"Search","Back":"Back","Next":"Next","LanguageName":"עברית","Details":"Details","ErrorDetails":"Error Details","HelpTranslate":"Help us translate PufferPanel","DarkMode":"Dark Mode","ThemeOptions":"Theme Options","Protocol":"Protocol","Add":"Add"}')
    },
    faa9: function(e, t, r) {
        "use strict";
        r.r(t);
        var a = function() {
                var e = this,
                    t = e.$createElement,
                    r = e._self._c || t;
                return r("v-card", [r("v-card-title", {
                    domProps: {
                        textContent: e._s(e.$t("servers.CPU"))
                    }
                }), r("v-card-text", [r("apexchart", {
                    attrs: {
                        options: e.options,
                        series: e.series,
                        height: "300"
                    }
                })], 1)], 1)
            },
            o = [],
            n = (r("ddb0"), r("96ea")),
            s = r("1321"),
            i = r.n(s),
            l = {
                components: {
                    apexchart: i.a
                },
                props: {
                    server: {
                        type: Object,
                        default: () => {}
                    }
                },
                data() {
                    return {
                        intl: new Intl.NumberFormat("en-US", {
                            maximumFractionDigits: 2
                        }),
                        maxPoints: 20,
                        options: {
                            chart: {
                                id: "cpu",
                                height: 300,
                                type: "line",
                                animations: {
                                    enabled: !1
                                },
                                toolbar: {
                                    show: !1
                                },
                                foreColor: Object(n["a"])() ? "#FFF" : "#000000DE"
                            },
                            colors: [Object(n["a"])() ? this.$vuetify.theme.themes.dark.accent : this.$vuetify.theme.themes.light.accent],
                            tooltip: {
                                theme: [Object(n["a"])() ? this.$vuetify.theme.themes.dark.accent : this.$vuetify.theme.themes.light.accent]
                            },
                            dataLabels: {
                                enabled: !1
                            },
                            stroke: {
                                curve: "smooth"
                            },
                            markers: {
                                size: 0
                            },
                            xaxis: {
                                labels: {
                                    show: !0,
                                    rotate: 0,
                                    formatter: e => new Date(e).toLocaleTimeString()
                                },
                                tooltip: {
                                    enabled: !1
                                },
                                type: "datetime"
                            },
                            yaxis: {
                                labels: {
                                    show: !0,
                                    formatter: e => this.intl.format(Math.round(100 * e) / 100) + "%"
                                },
                                min: 0
                            },
                            legend: {
                                show: !0
                            }
                        },
                        series: []
                    }
                },
                mounted() {
                    this.$api.addServerListener(this.server.id, "stat", e => {
                        this.updateStats(e)
                    })
                },
                methods: {
                    updateStats(e) {
                        this.options = {
                            ...this.options,
                            chart: {
                                ...this.options.chart,
                                foreColor: Object(n["a"])() ? "#FFF" : "#000000DE"
                            }
                        };
                        const t = [...(this.series[0] || {}).data || [], [(new Date).getTime(), Math.round(100 * e.cpu) / 100]];
                        this.series = [{
                            name: this.$t("servers.CPU"),
                            data: t.length > this.maxPoints ? t.slice(t.length - this.maxPoints) : t
                        }]
                    },
                    isDark: n["a"]
                }
            },
            d = l,
            c = r("2877"),
            u = r("6544"),
            m = r.n(u),
            p = r("b0af"),
            v = r("99d9"),
            f = Object(c["a"])(d, a, o, !1, null, null, null);
        t["default"] = f.exports;
        m()(f, {
            VCard: p["a"],
            VCardText: v["c"],
            VCardTitle: v["d"]
        })
    },
    fac4: function(e) {
        e.exports = JSON.parse('{"Server":"Servidor","NoServers":"No hay servidores a los que tengas acceso","Servers":"Servidores","Add":"Añadir Servidor","Console":"Consola","Controls":"Controles","SFTPInfo":"Información SFTP","Restart":"Restart","Start":"Iniciar","Stop":"Parar","Kill":"Matar","Install":"Instalar","Send":"Enviar","Pause":"Pausar","CPU":"CPU","Memory":"Memoria","Name":"Nombre del Servidor","SelectNode":"Por favor, seleccione un nodo","SelectTemplate":"Por favor, seleccione una plantilla","SelectThisTemplate":"Usar esta plantilla","SelectUser":"Por favor seleccione un usuario","Environment":"Entorno","SelectEnvironment":"Por favor, seleccione entorno","TypeUsername":"Escriba un nombre de usuario","AdminControls":"Controles de Admin","Settings":"Configuración","NoEditableVars":"Este servidor no tiene variables que puedas editar","ConfirmDelete":"¿Realmente deseas eliminar este servidor? (Esto no se puede deshacer)","Delete":"Eliminar servidor","Deleted":"Servidor eliminado","NoReadme":"No hay ningún léame disponible para esta plantilla","SftpConnection":"Conectar a SFTP","EditDefinition":"Edit Server Definition","Reload":"Recargar los datos del Servidor desde el disco","Reloaded":"Datos del Servidor Recargados","Autostart":"Prender el servidor cuando el Nodo inicie","Autorestart":"Reiniciar el servidor cuando se detiene normalmente","Autorecover":"Reiniciar el servidor cuando este se bloquee"}')
    },
    fbb2: function(e) {
        e.exports = JSON.parse('{"ServersView":"Can view this server","ServersEdit":"Edit the server","ServersInstall":"Install the server","ServersConsole":"View the console","ServersConsoleSend":"Send commands to the console","ServersStop":"Stop and kill the server","ServersStart":"Start the server","ServersStat":"View CPU and memory statistics","ServersFiles":"Allow access to files using SFTP","ServersFilesGet":"View and download files using the file manager","ServersFilesPut":"Edit and upload files using the file manager","ServersEditUsers":"Edit user\'s access to this server","Admin":"Admin (this grants every possible permission)","ViewServers":"See Servers","CreateServers":"Create new Servers","DeleteServers":"Delete Servers","EditServerAdmin":"Edit Server Settings","ViewNodes":"See Nodes","EditNodes":"Edit Nodes","DeployNodes":"Deploy new Nodes","ViewTemplates":"See Templates","EditTemplates":"Edit Templates","ViewUsers":"See all Users","EditUsers":"Edit other Users"}')
    },
    fc16: function(e) {
        e.exports = JSON.parse('{"Node":"Node","Nodes":"Nodes","Edit":"Edit Node","Add":"Add Node","Update":"Update Node","Delete":"Delete Node","PublicHost":"Public Host","PublicPort":"Public Port","PrivateHost":"Private Host","PrivatePort":"Private Port","SftpPort":"SFTP Port","SaveConfig":"Save Config","SavePublicKey":"Save Public Key","DeploymentInstruction":"To deploy the node, install PufferPanel on the new server and place the config file in `/etc/pufferpanel/`<br/>Restart PufferPanel on the new server afterwards.","UpdateSuccess":"Successfully updated node","UpdateError":"Error updating node"}')
    },
    fe5a: function(e) {
        e.exports = JSON.parse('{"ServersView":"Kan deze server bekijken","ServersEdit":"Wijzig de server","ServersInstall":"Installeer de server","ServersConsole":"Bekijk de console ","ServersConsoleSend":"Stuur een commando naar de console ","ServersStop":"Stop en beëindig de server","ServersStart":"Start de server ","ServersStat":"Bekijk CPU en geheugen gebruik","ServersFiles":"Toegang tot bestanden met SFTP toestaan","ServersFilesGet":"Bestanden bekijken en downloaden met behulp van bestandsbeheer","ServersFilesPut":"Wijzig en upload bestanden via bestandsbeheer ","ServersEditUsers":"Edit user\'s access to this server","Admin":"Admin (this grants every possible permission)","ViewServers":"See Servers","CreateServers":"Create new Servers","DeleteServers":"Delete Servers","EditServerAdmin":"Edit Server Settings","ViewNodes":"See Nodes","EditNodes":"Edit Nodes","DeployNodes":"Deploy new Nodes","ViewTemplates":"See Templates","EditTemplates":"Edit Templates","ViewUsers":"See all Users","EditUsers":"Edit other Users"}')
    },
    ff1b: function(e) {
        e.exports = JSON.parse('{"Id":"ID","Name":"Name","Address":"Address","Online":"Online","Offline":"Offline","Loading":"Loading...","General":"General","Language":"Language","SelectLanguage":"Select Language","Settings":"Settings","Update":"Update","Edit":"Edit","Delete":"Delete","Create":"Create","Save":"Save","Saved":"Saved","SaveFailed":"Failed saving","Cancel":"Cancel","Confirm":"Confirm","Actions":"Actions","Host":"Host","Port":"Port","Template":"Template","Options":"Options","Collapse":"Collapse","Copied":"Copied to clipboard","Unknown":"Unknown","Search":"Search","Back":"Back","Next":"Next","LanguageName":"Ελληνικά","Details":"Details","ErrorDetails":"Error Details","HelpTranslate":"Help us translate PufferPanel","DarkMode":"Dark Mode","ThemeOptions":"Theme Options","Protocol":"Protocol","Add":"Add"}')
    },
    ffe0: function(e, t, r) {
        var a = {
            "./server/admin.vue": "01fb",
            "./server/console.vue": "753c",
            "./server/controls.vue": "6539",
            "./server/cpu.vue": "faa9",
            "./server/files.vue": "8824",
            "./server/memory.vue": "54f4",
            "./server/settings.vue": "28ca",
            "./server/sftp.vue": "8127",
            "./server/status.vue": "49a4",
            "./server/type/generic.vue": "31ec",
            "./server/type/minecraft.vue": "10f3",
            "./server/users.vue": "71d94",
            "./template/editor.vue": "3a68",
            "./template/environments.vue": "e30a",
            "./template/processor.vue": "833a",
            "./template/processors.vue": "02cb",
            "./template/shutdown.vue": "1a38",
            "./template/variable.vue": "e014",
            "./template/variables.vue": "110f",
            "./ui/docker/portBindings.vue": "03f0",
            "./ui/envConfig.vue": "6a6f",
            "./ui/input.vue": "a78c",
            "./ui/inputSuggestions.vue": "6660",
            "./ui/language.vue": "e022",
            "./ui/listInput.vue": "570c",
            "./ui/mapInput.vue": "2f97",
            "./ui/overlay.vue": "b974c",
            "./ui/passwordInput.vue": "f243",
            "./ui/select.vue": "9716",
            "./ui/switch.vue": "f598",
            "./ui/variableInput.vue": "a785"
        };
        function o(e) {
            var t = n(e);
            return r(t)
        }
        function n(e) {
            if (!r.o(a, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return a[e]
        }
        o.keys = function() {
            return Object.keys(a)
        },
        o.resolve = n,
        e.exports = o,
        o.id = "ffe0"
    }
});
//# sourceMappingURL=app.cc913354.js.map

