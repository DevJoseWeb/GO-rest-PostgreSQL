webpackJsonp([2],{182:function(e,t,c){"use strict";function a(e){c(188)}Object.defineProperty(t,"__esModule",{value:!0});var o=c(190),n=c(191),r=c(5),i=a,l=r(o.a,n.a,i,null,null);t.default=l.exports},188:function(e,t,c){var a=c(189);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);c(181)("59efb0dd",a,!0)},189:function(e,t,c){t=e.exports=c(180)(void 0),t.push([e.i,"",""])},190:function(e,t,c){"use strict";var a=c(4),o=c(30);c.n(o);t.a={components:{QBtn:a.c,QCheckbox:a.i,QCollapsible:a.k,QField:a.o,QIcon:a.q,QInput:a.r,QToggle:a.K},props:["account"],data:function(){return{}},validations:{account:{name:{required:o.required,minLength:Object(o.minLength)(3)},email:{required:o.required,email:o.email},roles:{required:o.required,minLength:Object(o.minLength)(1)}}},methods:{clearForm:function(){this.$refs.createAccount.close(),this.account={name:"",email:"",roles:["account"],active:!0},this.$v.account.$reset()}}}},191:function(e,t,c){"use strict";var a=function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",[c("h5",[e._t("title")],2),c("q-field",{attrs:{icon:"account_box",label:"Name",error:e.$v.account.name.$error,"error-label":"Minimum "+e.$v.account.name.$params.minLength.min+" characters"}},[c("q-input",{attrs:{placeholder:"Account Name"},on:{input:function(t){e.$v.account.name.$touch()}},model:{value:e.account.name,callback:function(t){e.account.name="string"==typeof t?t.trim():t},expression:"account.name"}})],1),c("q-field",{attrs:{icon:"mail",label:"Email",error:e.$v.account.email.$error,"error-label":"Not a valid email address"}},[c("q-input",{attrs:{placeholder:"Email Address"},on:{input:function(t){e.$v.account.email.$touch()}},model:{value:e.account.email,callback:function(t){e.account.email="string"==typeof t?t.trim():t},expression:"account.email"}})],1),c("q-field",{attrs:{icon:"supervisor_account",label:"Roles",error:e.$v.account.roles.$error,"error-label":"Choose at least one role"}},[c("q-checkbox",{attrs:{label:"User",val:"user"},on:{focus:function(t){e.$v.account.roles.$touch()}},model:{value:e.account.roles,callback:function(t){e.account.roles=t},expression:"account.roles"}}),c("q-checkbox",{staticClass:"on-right",attrs:{label:"Admin",val:"admin"},model:{value:e.account.roles,callback:function(t){e.account.roles=t},expression:"account.roles"}})],1),c("q-field",{attrs:{icon:"check_circle",label:"Active"}},[c("q-toggle",{model:{value:e.account.active,callback:function(t){e.account.active=t},expression:"account.active"}})],1),c("div",{staticClass:"row justify-end"},[e._t("actions")],2)],1)},o=[],n={render:a,staticRenderFns:o};t.a=n}});