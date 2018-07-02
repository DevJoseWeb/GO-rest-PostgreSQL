webpackJsonp([7],{102:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"profile"},[e._v("no visual functionality yet..."),n("q-field",{attrs:{icon:"color_lens",label:"Theme"}},[n("q-select",{attrs:{options:e.themes},model:{value:e.editProfile.theme,callback:function(t){e.editProfile.theme=t},expression:"editProfile.theme"}})],1),n("q-btn",{staticClass:"float-right",attrs:{color:"primary"},on:{click:e.updateProfile}},[e._v("Save")])],1)},i=[],a={render:o,staticRenderFns:i};t.a=a},103:function(e,t,n){"use strict";var o=n(9),i=n.n(o),a=n(4),r=n(30);n.n(r);a.O.setDefaults({timeout:3e3}),t.a={components:{QBtn:a.c,QCard:a.d,QCardActions:a.e,QCardTitle:a.h,QCardMain:a.f,QCardSeparator:a.g,QChip:a.j,QField:a.o,QInput:a.r},props:["account"],data:function(){return{edit:!1,editAccount:i()({},this.account)}},validations:{editAccount:{name:{required:r.required,minLength:Object(r.minLength)(3)},email:{required:r.required,email:r.email}}},watch:{account:function(){this.editAccount=i()({},this.account)}},methods:{updateAccount:function(){var e=this;this.axios.put("/api/account",this.editAccount).then(function(t){e.$emit("update-account",t.data),a.O.create.positive({html:"Updated"})}),this.edit=!1},cancelEdit:function(){this.edit=!1,this.$v.editAccount.$reset()}},beforeMount:function(){var e=this;this.axios.get("/api/account").then(function(t){e.$emit("update-account",t.data)})}}},104:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-card",[n("q-card-main",[n("q-field",{attrs:{icon:"account_box",label:"Name",error:e.$v.editAccount.name.$error,"error-label":"Minimum "+e.$v.editAccount.name.$params.minLength.min+" characters"}},[e.edit?n("q-input",{attrs:{placeholder:"Name"},on:{input:function(t){e.$v.editAccount.name.$touch()}},model:{value:e.editAccount.name,callback:function(t){e.editAccount.name="string"==typeof t?t.trim():t},expression:"editAccount.name"}}):n("span",[e._v(e._s(e.account.name))])],1),n("q-field",{attrs:{icon:"mail",label:"Email",error:e.$v.editAccount.email.$error,"error-label":"Not a valid email address"}},[e.edit?n("q-input",{attrs:{placeholder:"Email Address"},on:{input:function(t){e.$v.editAccount.email.$touch()}},model:{value:e.editAccount.email,callback:function(t){e.editAccount.email="string"==typeof t?t.trim():t},expression:"editAccount.email"}}):n("span",[e._v(e._s(e.account.email))])],1),e.edit?e._e():n("q-field",{attrs:{icon:"supervisor_account",label:"Roles"}},e._l(e.account.roles,function(t){return n("span",[n("q-chip",{staticClass:"on-left",attrs:{color:"admin"===t?"red":"secondary"}},[e._v(e._s(t))])],1)}))],1),n("q-card-actions",{staticClass:"float-right"},[e.edit?e._e():n("q-btn",{on:{click:function(t){e.edit=!0}}},[e._v("Edit")]),e.edit?n("q-btn",{staticClass:"float-right",on:{click:e.cancelEdit}},[e._v("Cancel")]):e._e(),e.edit?n("q-btn",{staticClass:"on-right",attrs:{disabled:e.$v.editAccount.$invalid,color:"primary"},on:{click:e.updateAccount}},[e._v("Save")]):e._e()],1)],1)},i=[],a={render:o,staticRenderFns:i};t.a=a},105:function(e,t,n){"use strict";var o=n(4),i=o.P.formatDate;t.a={name:"token",components:{QBtn:o.c,QList:o.y,QListHeader:o.z,QIcon:o.q,QItem:o.s,QItemMain:o.t,QItemSide:o.v,QItemSeparator:o.u,QItemTile:o.w},props:["token"],computed:{localTokenID:function(){return this.$auth.refreshTokenID}},methods:{formatDate:function(e){return i(e,"YYYY-MM-DD HH:mm")},edit:function(e){var t=this;o.a.create({title:"Edit Identifier",form:{identifier:{type:"text",model:e.identifier}},buttons:["Cancel",{label:"Save",outline:!0,handler:function(n){t.updateToken(e.id,n)}}]})},updateToken:function(e,t){var n=this,o=this.token.find(function(t){return t.id===e});o.identifier=t.identifier,this.axios.put("/api/account/token/"+e,o).then(function(){n.$emit("update-token",o)})},deleteToken:function(e){var t=this;this.axios.delete("/api/account/token/"+e).then(function(){t.$emit("delete-token",e)})}}}},106:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-list",{attrs:{link:"link",separator:"separator","no-border":"no-border"}},[n("q-list-header",[e._v("Active Logins")]),e._l(e.token,function(t){return n("q-item",{key:t.id},[n("q-item-side",{attrs:{left:"left",icon:t.mobile?"phone_iphone":"desktop_mac"}}),n("q-item-main",{on:{click:function(n){e.edit(t)}}},[n("q-item-tile",{attrs:{label:"label"}},[e._v(e._s(t.identifier))]),n("q-item-tile",{attrs:{sublabel:"sublabel"}},[e._v("Last Login: "+e._s(e.formatDate(t.updated_at)))])],1),n("q-item-side",{attrs:{right:"right"}},[e.localTokenID===t.id?n("q-item-tile",{attrs:{label:"label"}},[e._v("This Device")]):n("q-btn",{attrs:{color:"red",flat:"flat"},on:{click:function(n){e.deleteToken(t.id)}}},[e._v("Logout")])],1)],1)})],2)},i=[],a={render:o,staticRenderFns:i};t.a=a},107:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-tabs",{attrs:{align:"center","no-pane-border":"no-pane-border",inverted:"inverted"},slot:"navigation"},[n("q-tab",{attrs:{default:"default",name:"account",label:"Account",icon:"account_box",hide:"icon"},slot:"title"}),n("q-tab",{attrs:{name:"profile",label:"Profile",icon:"view_day",hide:"icon"},slot:"title"}),n("q-tab",{attrs:{name:"token",label:"Token",icon:"vpn_key",hide:"icon"},slot:"title"}),n("q-tab-pane",{attrs:{name:"account"}},[n("account",{attrs:{account:e.account},on:{"update-account":e.receiveAccountData}})],1),n("q-tab-pane",{attrs:{name:"profile"}},[n("profile",{attrs:{profile:e.profile},on:{"update-profile":e.updateProfile}})],1),n("q-tab-pane",{attrs:{name:"token"}},[n("token",{attrs:{token:e.token},on:{"update-token":e.updateToken,"delete-token":e.deleteToken}})],1)],1)},i=[],a={render:o,staticRenderFns:i};t.a=a},108:function(e,t){},109:function(e,t,n){"use strict";var o=n(4);t.a={components:{QIcon:o.q},name:"hello"}},110:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h5",[e._v("GoBase Demo Application")]),e._v(" "),n("hr"),e._v(" "),n("div",[n("p",[e._v("This demo application is using Json Web Tokens (JWT) for authentication in combination with a passwordless authentication flow.")]),e._v(" "),n("p",[e._v("You need to be logged in to see admin and account features. With admin account you can also register new accounts with other email addresses. Database is reset every 24 hours in this demo, including refresh tokens.")]),e._v(" "),n("p",[e._v("To login click on top right corner icon and use one of below email addresses. The Login Token for these to addresses only will be logged to console output. Grab it from there! Other registered addresses will recieve email with login token.")])]),e._v(" "),n("div",{staticClass:"row justify-center"},[n("ul",[n("li",[e._v("admin@boot.io (access to admin panel)")]),e._v(" "),n("li",[e._v("user@boot.io (own account management only)")])])]),e._v(" "),n("div",[e._v("Check out on GitHub: "),n("a",{attrs:{href:"https://github.com/dhax/go-base",target:"_blank",rel:"noopener"}},[e._v("https://github.com/dhax/go-base")])]),e._v(" "),n("div",{staticClass:"bottom"},[n("hr"),e._v(" "),n("h6",[e._v("Client Build with "),n("a",{attrs:{href:"http://quasar-framework.org",target:"_blank",rel:"noopener"}},[e._v("Quasar")]),e._v(" PWA")])])])}],a={render:o,staticRenderFns:i};t.a=a},111:function(e,t,n){function o(e){var t=i[e];return t?Promise.all(t.slice(1).map(n.e)).then(function(){return n(t[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}var i={"./Hello.vue":[47],"./Layout.vue":[34],"./Login.vue":[32],"./account/Account.vue":[45],"./account/Index.vue":[35],"./account/Profile.vue":[36],"./account/Token.vue":[46],"./admin/Dashboard.vue":[185,5],"./admin/Layout.vue":[186,4],"./admin/accounts/Create.vue":[183,3],"./admin/accounts/Edit.vue":[184,1],"./admin/accounts/Form.vue":[182,2],"./admin/accounts/Index.vue":[187,0]};o.keys=function(){return Object.keys(i)},o.id=111,e.exports=o},138:function(e,t,n){"use strict";var o=n(14),i=n(56),a=n(139),r=n(146),s=n.n(r);o.a.use(i.a);var c=new i.a.Store({strict:!0,plugins:[a.a,s()({predicate:["setToken","logout"]})],modules:{},state:{count:1},mutations:{}});t.a=c},139:function(e,t,n){"use strict";var o=n(140),i=n.n(o),a=n(143),r=n.n(a),s=n(4),c=n(144),u=n.n(c),l=this;t.a=function(){var e=r()(i.a.mark(function e(t){var n,o;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.b.get.item("vuex");case 2:n=e.sent,o=u()({},t.state,n),t.replaceState(o),t.subscribe(function(e,t){s.b.set("vuex",t)});case 6:case"end":return e.stop()}},e,l)}));return function(t){return e.apply(this,arguments)}}()},170:function(e,t,n){"use strict";var o=n(20),i=n.n(o),a=n(171),r=n.n(a),s=n(9),c=n.n(s),u=n(172),l=n(56),d={defaults:{baseUrl:"/auth",loginUrl:"/login",tokenUrl:"/token",refreshUrl:"/refresh",logoutUrl:"/logout",loginPath:"/login",logoutRedirect:"/",unauthorizedRedirect:"/403",tokenKeys:{access:"access_token",refresh:"refresh_token"},refreshThresholdMin:30,refreshThresholdMax:60,roles:{admin:"admin"}},install:function(e,t){function n(e){return o.baseUrl+o[e+"Url"]}if(d.installed)return void console.error("jwt plugin already installed");console.log("auth plugin setup");var o=c()(d.defaults,t.params);Object(u.b)(o),t.store.registerModule("auth",u.a);var a=t.router,s=t.store,f=new e({router:a,store:s,data:{refreshIn:0,refreshTimer:null},computed:r()({},Object(l.b)(["auth"]),{sub:function(){return this.auth.user.sub},isAuthenticated:function(){return this.tokenValid},expiresIn:function(){return 1e3*this.auth.access.exp-Date.now()},tokenValid:function(){return this.expiresIn>0},refreshExpiresIn:function(){return 1e3*this.auth.refresh.exp-Date.now()},refreshValid:function(){return this.refreshExpiresIn>0},canRefresh:function(){return this.refreshValid},refreshTokenID:function(){return this.auth.refresh.id}}),watch:{isAuthenticated:function(){console.log("authenticated:",this.isAuthenticated)},expiresIn:function(){clearTimeout(this.refreshTimer),this.canRefresh?this.refreshTokenIn(this.expiresIn):null!=this.auth.refresh.id&&this.$store.dispatch("localLogout")}},methods:{requestLoginToken:function(e){var t=this;return new i.a(function(n,o){t.$store.dispatch("requestLoginToken",e).then(function(){n()},function(e){o(e)})})},requestToken:function(e){var t=this;return new i.a(function(n,o){t.$store.dispatch("requestToken",e).then(function(){n()},function(e){o(e)})})},refreshTokenIn:function(e){var t=this,n=Math.floor(Math.random()*(o.refreshThresholdMax-o.refreshThresholdMin))+o.refreshThresholdMin,i=e-1e3*n;console.log("token refresh in:",Math.floor(i/1e3)+" seconds"),this.refreshTimer=setTimeout(function(){t.$store.dispatch("refreshToken").then(function(){console.log("refresh success")},function(e){console.log("failed token refresh:",e)})},i)},logout:function(){this.$store.dispatch("logout"),this.$router.push(o.logoutRedirect)},localLogout:function(){this.$store.dispatch("localLogout")},hasRole:function(e){return this.auth.user.roles.includes(e)},hasAnyRole:function(e){var t=this,n=!1;return e.forEach(function(e){t.hasRole(e)&&(n=!0)}),n},accessTokenHeader:function(){return"Bearer "+this.auth.access.token},refreshTokenHeader:function(){return"Bearer "+this.auth.refresh.token}},created:function(){}}),h=e.prototype.$auth=f,p=e.axios;p?(p.interceptors.request.use(function(e){return e.url===n("refresh")||e.url===n("logout")?e.headers.Authorization=h.refreshTokenHeader():e.headers.Authorization=h.accessTokenHeader(),e},function(e){return i.a.reject(e)}),p.interceptors.response.use(function(e){return e},function(e){return 401===e.response.status&&(console.log(e.response),console.log("Unauthorized request => local logout"),h.localLogout(),a.push(o.logoutRedirect)),i.a.reject(e)})):console.error("axios not found - set Vue.use(axios) before using this plugin"),a?a.beforeEach(function(e,t,n){if(e.matched.some(function(e){return e.meta.auth})){var i=e.matched.some(function(e){return!!e.meta.auth&&e.meta.auth.adminOnly}),a=!!e.meta.auth&&!!Array.isArray(e.meta.auth.scope)&&e.meta.auth.scope;h.isAuthenticated?i&&!h.hasRole(o.roles.admin)?n(o.unauthorizedRedirect):a&&!h.hasAnyRole(a)?n(o.unauthorizedRedirect):n():n({path:o.loginPath,query:{redirect:e.fullPath}})}else n()}):console.error("no router passed to auth options during setup")}};t.a=d},172:function(e,t,n){"use strict";function o(e,t){a=u()(e,t)}function i(e){return a.baseUrl+a[e+"Url"]}t.b=o;var a,r=n(20),s=n.n(r),c=n(9),u=n.n(c),l=n(14),d=n(173),f={state:{user:{sub:"",roles:[]},access:{token:"",exp:0},refresh:{id:null,token:"",exp:0}},getters:{},actions:{requestLoginToken:function(e,t){var n=(e.commit,{email:t});l.a.axios.post(i("login"),n).then(function(e){console.log(e.data)})},requestToken:function(e,t){var n=e.commit,o={token:t};l.a.axios.post(i("token"),o).then(function(e){n("setToken",e.data)})},refreshToken:function(e){var t=e.commit;e.state;return new s.a(function(e,n){l.a.axios.post(i("refresh")).then(function(n){t("setToken",n.data),e()},function(e){n(e)})})},localLogout:function(e){(0,e.commit)("logout")},logout:function(e){var t=e.commit;l.a.axios.post(i("logout")).finally(function(){t("logout")})}},mutations:{setToken:function(e,t){e.access.token=t[a.tokenKeys.access];var n=d.a.decode(e.access.token);e.access.exp=n.exp,e.user={sub:n.sub,roles:n.roles},e.refresh.token=t[a.tokenKeys.refresh];var o=d.a.decode(e.refresh.token);e.refresh.id=o.id,e.refresh.exp=o.exp},logout:function(e){console.log("logout"),e.user={sub:"",roles:[]},e.access={token:"",exp:0},e.refresh={token:"",exp:0}}}};t.a=f},173:function(e,t,n){"use strict";t.a={decode:function(e){var t=e.split("."),n=t[1].replace(/-/g,"+").replace(/_/g,"/");switch(n.length%4){case 0:break;case 2:n+="==";break;case 3:n+="="}return JSON.parse(decodeURIComponent(atob(n)))},getDeadline:function(e){var t=this.decode(e);if(void 0===t.exp)return null;var n=new Date(0);return n.setUTCSeconds(t.exp),n},isExpired:function(e){var t=this.getDeadline(e);if(null===t)return!1;var n=new Date;return t.valueOf()<=n.valueOf()}}},175:function(e,t){},176:function(e,t,n){"use strict";function o(e){n(177)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(178),a=n(179),r=n(5),s=o,c=r(i.a,a.a,s,null,null);t.default=c.exports},177:function(e,t){},178:function(e,t,n){"use strict";t.a={}},179:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("header"),e._v(" "),n("main",[n("router-view")],1)])},i=[],a={render:o,staticRenderFns:i};t.a=a},32:function(e,t,n){"use strict";function o(e){n(67)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(68),a=n(84),r=n(5),s=o,c=r(i.a,a.a,s,null,null);t.default=c.exports},34:function(e,t,n){"use strict";function o(e){n(85)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(86),a=n(87),r=n(5),s=o,c=r(i.a,a.a,s,null,null);t.default=c.exports},35:function(e,t,n){"use strict";function o(e){n(88)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(89),a=n(107),r=n(5),s=o,c=r(i.a,a.a,s,null,null);t.default=c.exports},36:function(e,t,n){"use strict";function o(e){n(90)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(91),a=n(102),r=n(5),s=o,c=r(i.a,a.a,s,"data-v-1d72ad42",null);t.default=c.exports},45:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(103),i=n(104),a=n(5),r=a(o.a,i.a,null,null,null);t.default=r.exports},46:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(105),i=n(106),a=n(5),r=a(o.a,i.a,null,null,null);t.default=r.exports},47:function(e,t,n){"use strict";function o(e){n(108)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(109),a=n(110),r=n(5),s=o,c=r(i.a,a.a,s,"data-v-87b09e2c",null);t.default=c.exports},62:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(14),i=n(4),a=n(65),r=n(138),s=n(147),c=n.n(s),u=n(167),l=n.n(u),d=n(168),f=n.n(d),h=n(170),p=n(174);n.n(p);n(63),o.a.config.productionTip=!1,o.a.use(i.Q),c.a.defaults.headers.post["Content-Type"]="application/json",o.a.use(l.a,c.a),o.a.use(f.a),o.a.use(h.a,{router:a.a,store:r.a,params:{BaseUrl:"/auth"}}),new o.a({el:"#q-app",router:a.a,store:r.a,render:function(e){return e(n(176).default)}})},63:function(e,t){},65:function(e,t,n){"use strict";function o(e){return function(){return n(111)("./"+e+".vue")}}var i=n(14),a=n(66),r=n(32),s=n(34),c=n(35),u=n(47);i.a.use(a.a),t.a=new a.a({mode:"history",routes:[{path:"/login",component:r.default},{path:"/login/:token",component:r.default},{path:"/",component:s.default,children:[{path:"",component:u.default}]},{path:"/account",component:s.default,meta:{auth:!0},children:[{path:"",component:c.default}]},{path:"/manage",component:o("admin/Layout"),meta:{auth:{adminOnly:!0}},children:[{path:"",component:o("admin/Dashboard")},{path:"accounts",component:o("admin/accounts/Index")}]}]})},67:function(e,t){},68:function(e,t,n){"use strict";var o=n(4),i=n(30);n.n(i);o.O.setDefaults({timeout:3e3});t.a={components:{QLayout:o.x,QStepper:o.F,QStepperNavigation:o.G,QStep:o.E,QInput:o.r,QBtn:o.c,QIcon:o.q},data:function(){return{email:"",token:"",errRequest:!1,errVerify:!1,step:"request"}},validations:{email:{required:i.required,email:i.email},token:{required:i.required,minLength:Object(i.minLength)(8)}},computed:{isAuthenticated:function(){return this.$auth.isAuthenticated}},watch:{isAuthenticated:function(){this.isAuthenticated&&this.$router.push(this.$route.query.redirect||"/")}},methods:{requestToken:function(){var e=this;this.$v.email.$invalid?(o.O.create.negative({html:"Invalid Email Address"}),this.errRequest=!0):this.$auth.requestLoginToken(this.email).then(function(t){o.O.create.positive({html:"Check your Emails for Token"}),e.errRequest=!1,e.step="verify"}).catch(function(){e.errRequest=!0,o.O.create.negative({html:"Invalid Email Address"})})},verifyToken:function(){var e=this;this.$v.token.$invalid?(o.O.create.negative({html:"Invalid Token"}),this.errVerify=!0):this.$auth.requestToken(this.token).then(function(e){o.O.create.positive({html:"Login Success"})}).catch(function(){e.errVerify=!0,o.O.create.negative({html:"Invalid Token"})})},clearForm:function(){this.email="",this.token="",this.errRequest=!1,this.errVerify=!1}},mounted:function(){this.token=this.$route.params.token,this.$v.token.$invalid||this.verifyToken()},beforeDestroy:function(){this.clearForm()}}},84:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"layout-padding"},[n("div",{staticClass:"row justify-left"},[n("q-btn",{attrs:{flat:"flat"},on:{click:function(t){e.$router.go(-1)}}},[e._v("Back")])],1),n("div",{staticClass:"row justify-center"},[n("q-stepper",{staticClass:"shadow-12",attrs:{vertical:"vertical"},model:{value:e.step,callback:function(t){e.step=t},expression:"step"}},[n("div",{staticClass:"row justify-center"},[n("h6",[e._v("Login")])]),n("q-step",{attrs:{default:"default",name:"request",error:e.errRequest,title:"Email",subtitle:"Account Email Address"}},[n("q-input",{attrs:{placeholder:"example@mail.org",autofocus:"request"===e.step,clearable:"clearable"},on:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13))return null;e.requestToken(t)}},model:{value:e.email,callback:function(t){e.email="string"==typeof t?t.trim():t},expression:"email"}}),n("q-btn",{attrs:{flat:"flat",icon:"arrow_downward"},on:{click:function(t){e.step="verify"}}}),n("q-btn",{attrs:{disabled:e.$v.email.$invalid,color:"primary",icon:"mail"},on:{click:e.requestToken}},[e._v("Get Token")])],1),n("q-step",{attrs:{name:"verify",error:e.errVerify,title:"Token",subtitle:"Token from Email"}},[n("q-input",{ref:"token",attrs:{placeholder:"Token",autofocus:"verify"===e.step,clearable:"clearable"},on:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13))return null;e.verifyToken(t)}},model:{value:e.token,callback:function(t){e.token="string"==typeof t?t.trim():t},expression:"token"}}),n("q-btn",{attrs:{disabled:e.$v.token.$invalid,color:"primary",icon:"vpn_key"},on:{click:e.verifyToken}},[e._v("Login")])],1)],1)],1)])},i=[],a={render:o,staticRenderFns:i};t.a=a},85:function(e,t){},86:function(e,t,n){"use strict";var o=n(4);t.a={components:{QFab:o.m,QFabAction:o.n,QFixedPosition:o.p,QLayout:o.x,QToolbar:o.L,QToolbarTitle:o.M,QTooltip:o.N,QBtn:o.c,QIcon:o.q,QList:o.y,QListHeader:o.z,QItem:o.s,QItemMain:o.t,QItemSide:o.v,QSideLink:o.D},methods:{logout:function(){this.$auth.logout()}}}},87:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-layout",{ref:"layout",attrs:{view:"hHh Lpr lff",reveal:"reveal"}},[n("q-toolbar",{attrs:{inverted:"inverted"},slot:"header"},[n("q-btn",{attrs:{flat:"flat"},on:{click:function(t){e.$refs.layout.toggleLeft()}}},[n("q-icon",{attrs:{name:"menu"}})],1),n("q-toolbar-title",[e._v("GoBase")]),e.$auth.isAuthenticated?n("q-fab",{attrs:{icon:"account_circle",direction:"left",flat:"flat",color:"secondary"}},[n("q-fab-action",{attrs:{icon:"settings"},on:{click:function(t){e.$router.push("/account")}}},[n("q-tooltip",{attrs:{offset:[10,10]}},[e._v("Settings")])],1),n("q-fab-action",{attrs:{icon:"power_settings_new",color:"red"},on:{click:e.logout}},[n("q-tooltip",{attrs:{offset:[10,10]}},[e._v("Logout")])],1)],1):n("q-btn",{attrs:{color:"primary"},on:{click:function(t){e.$router.push("/login")}}},[n("q-icon",{attrs:{name:"account_box"}}),n("q-tooltip",{attrs:{offset:[10,0],anchor:"center right",self:"center left"}},[e._v("Login")])],1)],1),n("div",{slot:"left"},[n("q-side-link",{attrs:{item:"item",to:"/"}},[n("q-item-side",{attrs:{icon:"home"}}),n("q-item-main",{attrs:{label:"Home"}})],1),e.$auth.hasRole("admin")?n("q-list",{attrs:{link:"link"}},[n("q-list-header",[e._v("Admin Panel")]),n("q-side-link",{attrs:{item:"item",to:"/manage"}},[n("q-item-side",{attrs:{icon:"dashboard"}}),n("q-item-main",{attrs:{label:"Dashboard"}})],1),n("q-side-link",{attrs:{item:"item",to:"/manage/accounts"}},[n("q-item-side",{attrs:{icon:"supervisor_accounts"}}),n("q-item-main",{attrs:{label:"Accounts"}})],1)],1):e._e()],1),n("div",{staticClass:"layout-padding"},[n("router-view")],1)],1)},i=[],a={render:o,staticRenderFns:i};t.a=a},88:function(e,t){},89:function(e,t,n){"use strict";var o=n(4),i=n(36),a=n(45),r=n(46),s=o.P.getDateDiff;t.a={components:{QTabs:o.J,QTab:o.H,QTabPane:o.I,Profile:i.default,Account:a.default,Token:r.default},data:function(){return{account:{},profile:{},token:[]}},methods:{receiveAccountData:function(e){var t={email:e.email,name:e.name,roles:e.roles};this.account=t,e.token.sort(function(e,t){return s(t.updated_at,e.updated_at,"minutes")}),this.token=e.token},updateProfile:function(e){this.profile=e},updateToken:function(e){var t=this.token.findIndex(function(t){return t.id===e.id});this.token[t]=e},deleteToken:function(e){this.token=this.token.filter(function(t){return t.id!==e})}}}},90:function(e,t){},91:function(e,t,n){"use strict";var o=n(9),i=n.n(o),a=n(4);a.O.setDefaults({timeout:3e3}),t.a={components:{QBtn:a.c,QField:a.o,QSelect:a.C},props:["profile"],data:function(){return{themes:[{label:"Default",value:"default"},{label:"Dark",value:"dark"}],editProfile:{}}},watch:{profile:function(){this.editProfile=i()({},this.profile),this.changed=!1}},methods:{updateProfile:function(){var e=this;this.axios.put("/api/profile",this.editProfile).then(function(t){e.$emit("update-profile",t.data),a.O.create.positive({html:"Updated"})})}},beforeMount:function(){var e=this;this.axios.get("/api/profile").then(function(t){e.$emit("update-profile",t.data)})}}}},[62]);