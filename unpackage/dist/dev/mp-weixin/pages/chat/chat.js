(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/chat/chat"],{100:
/*!********************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/bat/仿微信/nvue-wechat/pages/chat/chat.nvue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! no static exports found */function(e,t,n){"use strict";n.r(t);var i=n(/*! -!../../../../../HBuilderX.2.5.1.20200103.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../HBuilderX.2.5.1.20200103.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../HBuilderX.2.5.1.20200103.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../HBuilderX.2.5.1.20200103.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX.2.5.1.20200103.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chat.nvue?vue&type=script&lang=js& */101),a=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=a.a},101:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/bat/仿微信/nvue-wechat/pages/chat/chat.nvue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(){n.e(/*! require.ensure | components/free-ui/free-nav-bar */"components/free-ui/free-nav-bar").then(function(){return resolve(n(/*! @/components/free-ui/free-nav-bar.vue */43))}.bind(null,n)).catch(n.oe)},a=function(){n.e(/*! require.ensure | components/free-ui/free-icon-button */"components/free-ui/free-icon-button").then(function(){return resolve(n(/*! @/components/free-ui/free-icon-button.vue */62))}.bind(null,n)).catch(n.oe)},r=function(){Promise.all(/*! require.ensure | components/free-ui/free-chat-item */[n.e("common/vendor"),n.e("components/free-ui/free-chat-item")]).then(function(){return resolve(n(/*! @/components/free-ui/free-chat-item.vue */108))}.bind(null,n)).catch(n.oe)},o=function(){n.e(/*! require.ensure | components/free-ui/free-popup */"components/free-ui/free-popup").then(function(){return resolve(n(/*! @/components/free-ui/free-popup.vue */55))}.bind(null,n)).catch(n.oe)},c={components:{freeNavBar:i,freeIconButton:a,freeChatItem:r,freePopup:o},data:function(){return{text:"",KeyboardHeight:0,propIndex:-1,menus:[{name:"复制",event:""},{name:"发送给好友",event:""},{name:"收藏",event:""},{name:"删除",event:""},{name:"多选",event:""},{name:"撤回",event:"removeChatItem"}],navBarHeight:0,list:[{avatar:"/static/images/demo/5.jpg",user_id:2,nickname:"昵称",type:"text",data:"在吗？",create_time:1596510401,isremove:!1},{avatar:"/static/images/demo/6.jpg",user_id:1,nickname:"昵称",type:"text",data:"杰哥,怎么了",create_time:1596510401,isremove:!1},{avatar:"/static/images/demo/5.jpg",user_id:2,nickname:"昵称",type:"text",data:"老地方？",create_time:1596510401,isremove:!1},{avatar:"/static/images/demo/6.jpg",user_id:1,nickname:"昵称",type:"text",data:"啊？什么时候",create_time:1596501366,isremove:!1},{avatar:"/static/images/demo/5.jpg",user_id:2,nickname:"昵称",type:"text",data:"这周六",create_time:1596510501,isremove:!1},{avatar:"/static/images/demo/5.jpg",user_id:2,nickname:"昵称",type:"text",data:"去不去？",create_time:1596510501,isremove:!1},{avatar:"/static/images/demo/6.jpg",user_id:1,nickname:"昵称",type:"text",data:"去不去？",create_time:1596510501,isremove:!0},{avatar:"/static/images/demo/6.jpg",user_id:1,nickname:"昵称",type:"text",data:"好",create_time:1596510601,isremove:!1}]}},computed:{getMenusHeight:function(){var e=100;return this.menus.length*e},getMenusStyle:function(){return"height:".concat(this.getMenusHeight,"rpx;")},isdoSelf:function(){var e=1,t=this.propIndex>-1?this.list[this.propIndex].user_id:0;return t===e},menusList:function(){var e=this;return this.menus.filter((function(t){return!("撤回"===t.name&&!e.isdoSelf)}))},chatBodyBottom:function(){return"bottom:".concat(e.upx2px(105)+this.KeyboardHeight,"px;top:").concat(this.navBarHeight,"px;")}},mounted:function(){var t=this,n=0;this.navBarHeight=n+e.upx2px(90),e.onKeyboardHeightChange((function(e){t.KeyboardHeight=e.height,t.KeyboardHeight>0&&setTimeout((function(){t.$nextTick((function(){t.pageToBottom()}))}),300)}))},methods:{openAction:function(){this.$refs.action.show(),this.KeyboardHeight=e.upx2px(580)},send:function(e){var t=this,n={avatar:"/static/images/demo/6.jpg",user_id:1,nickname:"昵称",type:e,data:"",create_time:(new Date).getTime(),isremove:!1};switch(e){case"text":n.data=this.text;break}this.list.push(n),"text"===e&&(this.text=""),setTimeout((function(){t.$nextTick((function(){t.pageToBottom()}))}),300)},pageToBottom:function(){},long:function(e){var t=e.x,n=e.y,i=e.index;this.propIndex=i,this.$refs["extend"].show(t,n)},clickEvent:function(e){switch(e){case"removeChatItem":this.removeChatItem();break;case"delChat":this.delChat();break}this.$refs["extend"].hide()},removeChatItem:function(){this.propIndex>-1&&(this.list[this.propIndex].isremove=!0)}}};t.default=c}).call(this,n(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1)["default"])},102:
/*!****************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/bat/仿微信/nvue-wechat/pages/chat/chat.nvue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************/
/*! no static exports found */function(e,t,n){"use strict";n.r(t);var i=n(/*! -!../../../../../HBuilderX.2.5.1.20200103.full/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../HBuilderX.2.5.1.20200103.full/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../HBuilderX.2.5.1.20200103.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../HBuilderX.2.5.1.20200103.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../HBuilderX.2.5.1.20200103.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../HBuilderX.2.5.1.20200103.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX.2.5.1.20200103.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chat.nvue?vue&type=style&index=0&lang=css& */103),a=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=a.a},103:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/bat/仿微信/nvue-wechat/pages/chat/chat.nvue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(e,t,n){},96:
/*!*************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/bat/仿微信/nvue-wechat/main.js?{"page":"pages%2Fchat%2Fchat"} ***!
  \*************************************************************************************************/
/*! no static exports found */function(e,t,n){"use strict";(function(e){n(/*! uni-pages */4);i(n(/*! vue */2));var t=i(n(/*! ./pages/chat/chat.nvue */97));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1)["createPage"])},97:
/*!*******************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/bat/仿微信/nvue-wechat/pages/chat/chat.nvue ***!
  \*******************************************************************************/
/*! no static exports found */function(e,t,n){"use strict";n.r(t);var i=n(/*! ./chat.nvue?vue&type=template&id=6e1957d8& */98),a=n(/*! ./chat.nvue?vue&type=script&lang=js& */100);for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);n(/*! ./chat.nvue?vue&type=style&index=0&lang=css& */102);var o,c=n(/*! ../../../../../HBuilderX.2.5.1.20200103.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */10),u=Object(c["default"])(a["default"],i["render"],i["staticRenderFns"],!1,null,null,null,!1,i["components"],o);u.options.__file="pages/chat/chat.nvue",t["default"]=u.exports},98:
/*!**************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/bat/仿微信/nvue-wechat/pages/chat/chat.nvue?vue&type=template&id=6e1957d8& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */function(e,t,n){"use strict";n.r(t);var i=n(/*! -!../../../../../HBuilderX.2.5.1.20200103.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuilderX.2.5.1.20200103.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../HBuilderX.2.5.1.20200103.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../HBuilderX.2.5.1.20200103.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../HBuilderX.2.5.1.20200103.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX.2.5.1.20200103.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chat.nvue?vue&type=template&id=6e1957d8& */99);n.d(t,"render",(function(){return i["render"]})),n.d(t,"staticRenderFns",(function(){return i["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return i["recyclableRender"]})),n.d(t,"components",(function(){return i["components"]}))},99:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/bat/仿微信/nvue-wechat/pages/chat/chat.nvue?vue&type=template&id=6e1957d8& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */function(e,t,n){"use strict";var i;n.r(t),n.d(t,"render",(function(){return a})),n.d(t,"staticRenderFns",(function(){return o})),n.d(t,"recyclableRender",(function(){return r})),n.d(t,"components",(function(){return i}));var a=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){e.KeyboardHeight=0})},r=!1,o=[];a._withStripped=!0}},[[96,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/chat/chat.js.map