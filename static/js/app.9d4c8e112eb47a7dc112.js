webpackJsonp([3],{"0BLv":function(t,e){},"0DDi":function(t,e){},"14gb":function(t,e,n){"use strict";var i=n("7+uW");e.a=new i.default({})},"5c4+":function(t,e){},GFqo:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),a=n("OAwv"),s=n.n(a),o=n("14gb"),r=n("edHf"),u={name:"UserBar",data:function(){return{userName:"",photo:"",hideUserBar:!0}},mounted:function(){var t=this;o.a.$on("gotAccessToken",function(){r.a.get("/user").then(function(e){t.hideUserBar=!1,t.userName=e.data.login,t.photo=e.data.avatar_url}).catch()}),o.a.$on("removeToken",function(){t.hideUserBar=!0})},methods:{onGreet:function(){o.a.$emit("showGistDetails")},userExit:function(){this.hideUserBar=!0,this.$router.push({path:"/"}),o.a.$emit("removeToken")}}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tit",class:{hide:t.hideUserBar}},[n("span",{staticClass:"photoImg"},[n("img",{attrs:{src:t.photo}})]),t._v(" "),n("b",[t._v(t._s(t.userName))]),t._v(" "),n("span",{staticClass:"gistAdd"},[n("router-link",{attrs:{to:"/gists/addGist"}},[n("el-button",{attrs:{size:"mini",round:""},on:{click:t.onGreet}},[t._v("添加 Gist")])],1)],1),t._v(" "),n("span",{staticClass:"quit"},[n("a",{on:{click:t.userExit}},[t._v("退出")])])])},staticRenderFns:[]};var l={name:"App",components:{UserBar:n("VU/8")(u,c,!1,function(t){n("0DDi")},"data-v-94f14f4c",null).exports,Load:n("zxlW").a},data:function(){return{loginUrl:"https://github.com/login/oauth/authorize?client_id=d327e486430e4b05f07b&scope=gist,user&redirect_uri=https://joyfunphp.herokuapp.com/github/oauth/gists",token:"",queryObj:{}}},computed:{hideLogin:function(){return""!==this.token||void 0!==this.queryObj.code},hideLoad:function(){return""!==this.token||void 0===this.queryObj.code}},mounted:function(){var t=this;o.a.$on("removeToken",function(){localStorage.removeItem("token"),t.token="",t.queryObj={}}),null===localStorage.getItem("token")?this.token="":""!==localStorage.getItem("token")&&(o.a.$emit("gotAccessToken"),this.token=localStorage.getItem("token"),this.$router.push("/gists")),this.queryObj=s.a.parse(location.search);var e=this;void 0!==this.queryObj.code&&r.a.get("https://joyfunphp.herokuapp.com/github/access/",{params:{client_id:"d327e486430e4b05f07b",code:this.queryObj.code}}).then(function(n){n.data.access_token?(localStorage.setItem("token",n.data.access_token),e.token=n.data.access_token,e.$router.push("/gists"),o.a.$emit("gotAccessToken")):(t.$message.error("code过期了哦，请重新登录"),o.a.$emit("removeToken"),t.token="",t.$router.push({path:"/"}))}).catch()}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("UserBar"),this._v(" "),e("div",{class:{githubBtn:!0,hide:this.hideLogin}},[e("a",{attrs:{href:this.loginUrl}},[this._v("\n      使用github帐号登录\n    ")])]),this._v(" "),e("Load",{attrs:{hideLoad:this.hideLoad}}),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var h=n("VU/8")(l,d,!1,function(t){n("z8QW")},null,null).exports,f=n("/ocq"),p=n("NYxO"),m=n("mtWM"),g=n.n(m),v={name:"ListItem",props:["item","index"],data:function(){return{current:0,hideDeleteIcon:!0}},mounted:function(){o.a.$on("defaultTab",function(t){})},methods:{changeCurrent:function(t){this.$emit("changeCurrent",t),o.a.$emit("defaultSelected"),o.a.$emit("showGistDetails"),o.a.$emit("showEditName"),o.a.$emit("showFileDetail")},deleteCurrentGist:function(t){var e=this;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){g.a.delete("https://api.github.com/gists/"+t,{headers:{Authorization:"token "+localStorage.getItem("token")}}).then(function(n){e.$message({type:"success",message:"删除成功!"}),o.a.$emit("deletePageGist",t)}).catch()}).catch(function(){e.$message({type:"info",message:"已取消删除"})})}}},k={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{on:{click:function(e){t.changeCurrent(t.index)}}},[n("router-link",{attrs:{to:{path:"/gists/gist",query:{id:t.item.id}}}},[n("span",{staticClass:"item-desc"},[t._v(t._s(t.item.description)+" ")])]),t._v(" "),n("span",{staticClass:"item-lock",class:{hide:t.item.public}},[n("i",{staticClass:"el-icon-bell"})]),t._v(" "),n("span",{staticClass:"item-delete fr",on:{click:function(e){t.deleteCurrentGist(t.item.id)}}},[n("i",{staticClass:"el-icon-delete"})])],1)},staticRenderFns:[]};var _={name:"List",components:{ListItem:n("VU/8")(v,k,!1,function(t){n("GFqo")},null,null).exports},data:function(){return{list:[],tabs:[],fileNumber:"",current:"",links:{},pageSize:0,total:0}},mounted:function(){this.$refs.navHeight.style.height=screen.availHeight-220+"px",this.pageSize=15,this.getCurrentPage("https://api.github.com/gists?page=1&per_page="+this.pageSize,function(){var t=this;if(this.links.hasOwnProperty("last")){var e=this.links.last.match(/.+page=(\d+)&.+/);this.total=this.pageSize*parseInt(e[1])}o.a.$on("deletePageGist",function(e){t.list=t.list.filter(function(t){return t.id!==e})}),o.a.$on("updateList",function(e){t.list.forEach(function(t){t.id===e.id&&(t.description=e.description,t.files=e.files)})}),o.a.$on("addListGist",function(e){t.list.unshift({id:e.id,description:e.description,public:e.public})})})},methods:{getCurrentPage:function(t,e){var n=this;g.a.get(t,{headers:{Authorization:"token "+localStorage.getItem("token")}}).then(function(t){n.list=t.data;var i=n,a=t.headers.link;a?a.split(",").forEach(function(t){var e=t.match(/<(.+)>; rel="(.+)"/);i.$set(i.links,e[2],e[1])}):n.pageSize=n.list.length,"function"==typeof e&&e.call(i)}).catch()},handleCurrentChange:function(t){this.current="",o.a.$emit("hideGistDetails");var e="https://api.github.com/gists?page=num&per_page="+this.pageSize;this.getCurrentPage(e.replace(/num/,t))},onChangeCurrent:function(t){this.current=t,o.a.$emit("showDetails")}}},b={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",{ref:"navHeight",staticClass:"nav"},t._l(t.list,function(e,i){return n("ListItem",{tag:"li",class:{active:t.current===i},attrs:{item:e,index:i},on:{changeCurrent:t.onChangeCurrent}})})),t._v(" "),n("div",{staticClass:"pager"},[n("el-pagination",{ref:"pages",attrs:{layout:"prev,pager,next","page-size":t.pageSize,total:t.total},on:{"current-change":t.handleCurrentChange}})],1)])},staticRenderFns:[]};var $=n("VU/8")(_,b,!1,function(t){n("p2LR")},null,null).exports,C={name:"Gists",components:{List:$},data:function(){return{hideGreet:!1}},mounted:function(){var t=this;o.a.$on("showGistDetails",function(){t.hideGreet=!0}),o.a.$on("hideGistDetails",function(){t.hideGreet=!1})}},G={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"full"},[e("div",{staticClass:"nav-box"},[e("List")],1),this._v(" "),e("div",{class:{greet:!0,hide:this.hideGreet}},[this._v("\n    想要看Gist详情，请点击左侧Gist标题\n  ")]),this._v(" "),e("div",{staticClass:"tab-box"},[e("router-view")],1)])},staticRenderFns:[]};var L=n("VU/8")(C,G,!1,function(t){n("5c4+")},"data-v-a04ca1c0",null).exports,x=n("OEdS"),y=n.n(x);n("0BLv");i.default.use(y.a),i.default.use(f.a),i.default.use(p.a);var z=new f.a({routes:[{path:"/gists",name:"Gists",component:L,children:[{path:"gist",name:"Gist",component:function(){return n.e(0).then(n.bind(null,"qksd"))}},{path:"addGist",name:"AddGist",component:function(){return n.e(1).then(n.bind(null,"a2K3"))}}]},{path:"/list",name:"List",component:$}]}),S=n("zL8q");n("tvR6");i.default.prototype.$ELEMENT={size:"small",zIndex:3e3},i.default.use(S.Button),i.default.use(S.Input),i.default.use(S.Select),i.default.use(S.Option),i.default.use(S.OptionGroup),i.default.use(S.Radio),i.default.use(S.Table),i.default.use(S.TableColumn),i.default.use(S.Row),i.default.use(S.Col),i.default.use(S.Form),i.default.use(S.FormItem),i.default.use(S.Pagination),i.default.use(S.Tabs),i.default.use(S.TabPane),i.default.prototype.$confirm=S.MessageBox.confirm,i.default.prototype.$message=S.Message,i.default.config.productionTip=!1,new i.default({el:"#app",router:z,components:{App:h},template:"<App/>",mounted:function(){}})},edHf:function(t,e,n){"use strict";var i=n("mtWM"),a=n.n(i).a.create({baseURL:"https://api.github.com",timeout:1e4});a.interceptors.request.use(function(t){return t.headers.Authorization="token "+localStorage.getItem("token"),t}),a.interceptors.response.use(function(t){return t},function(t){}),e.a=a},jqWA:function(t,e){},p2LR:function(t,e){},tvR6:function(t,e){},z8QW:function(t,e){},zxlW:function(t,e,n){"use strict";var i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{class:{loading:!0,hide:this.hideLoad}},[e("i",{staticClass:"el-icon-loading"}),this._v(" "),e("span",[this._v("页面加载中")])])},staticRenderFns:[]};var a=n("VU/8")({name:"Load",props:["hideLoad"],data:function(){return{}}},i,!1,function(t){n("jqWA")},"data-v-347e2548",null);e.a=a.exports}},["NHnr"]);
//# sourceMappingURL=app.9d4c8e112eb47a7dc112.js.map