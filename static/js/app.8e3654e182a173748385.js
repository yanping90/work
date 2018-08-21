webpackJsonp([1],{"0BLv":function(e,t){},"2+Cx":function(e,t){},"7ltT":function(e,t){},AH5j:function(e,t){},AYiD:function(e,t){},CD8N:function(e,t){},KOqQ:function(e,t){},"Kb+T":function(e,t){},Kpr4:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("7+uW"),s=n("OAwv"),a=n.n(s),o=new i.default({}),l=n("mtWM"),r=n.n(l),c=r.a.create({baseURL:"https://api.github.com",timeout:1e4});c.interceptors.request.use(function(e){return e.headers.Authorization="token "+localStorage.getItem("token"),e}),c.interceptors.response.use(function(e){return console.log(e),e},function(e){});var d=c,u={name:"UserBar",data:function(){return{userName:"",photo:"",hideUserBar:!0}},mounted:function(){o.$on("gotAccessToken",this.loadUser)},methods:{userExit:function(){this.hideUserBar=!0,this.$router.push({path:"/"}),o.$emit("removeToken")},loadUser:function(){var e=this;d.get("/user").then(function(t){console.log(t),e.hideUserBar=!1,e.userName=t.data.login,e.photo=t.data.avatar_url}).catch()}}},f={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tit",class:{hide:e.hideUserBar}},[n("span",{staticClass:"photoImg"},[n("img",{attrs:{src:e.photo}})]),e._v(" "),n("b",[e._v(e._s(e.userName))]),e._v(" "),n("span",{staticClass:"gistAdd"},[n("router-link",{attrs:{to:"/gists/addGist"}},[n("i",{staticClass:"el-icon-circle-plus-outline"})])],1),e._v(" "),n("span",{staticClass:"quit"},[n("a",{on:{click:e.userExit}},[e._v("退出")])])])},staticRenderFns:[]};var h=n("VU/8")(u,f,!1,function(e){n("We50")},"data-v-45265d4e",null).exports,m={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{class:{loading:!0,hide:this.hideLoad}},[t("i",{staticClass:"el-icon-loading"}),this._v(" "),t("span",[this._v("页面加载中")])])},staticRenderFns:[]};var p=n("VU/8")({name:"Load",props:["hideLoad"],data:function(){return{}}},m,!1,function(e){n("jqWA")},"data-v-347e2548",null).exports,g={name:"App",components:{UserBar:h,Load:p},data:function(){return{loginUrl:"https://github.com/login/oauth/authorize?client_id=d327e486430e4b05f07b&scope=gist,user&redirect_uri=https://joyfunphp.herokuapp.com/github/oauth/gists",token:"",queryObj:{}}},computed:{hideLogin:function(){return""!==this.token||void 0!==this.queryObj.code},hideLoad:function(){return""!==this.token||void 0===this.queryObj.code}},mounted:function(){var e=this;o.$on("removeToken",function(){localStorage.removeItem("token"),e.token="",e.queryObj={}}),null===localStorage.getItem("token")?this.token="":""!==localStorage.getItem("token")&&(o.$emit("gotAccessToken"),this.token=localStorage.getItem("token"),this.$router.push("/gists")),this.queryObj=a.a.parse(location.search),void 0!==this.queryObj.code&&d.get("https://joyfunphp.herokuapp.com/github/access/",{params:{client_id:"d327e486430e4b05f07b",code:this.queryObj.code}}).then(function(t){t.data.access_token?(localStorage.setItem("token",t.data.access_token),e.token=t.data.access_token,e.$router.push("gists"),o.$emit("gotAccessToken")):alert("code过期")}).catch()}},v={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("UserBar"),this._v(" "),t("div",{class:{githubBtn:!0,hide:this.hideLogin}},[t("a",{attrs:{href:this.loginUrl}},[this._v("\n      使用github帐号登录\n    ")])]),this._v(" "),t("Load",{attrs:{hideLoad:this.hideLoad}}),this._v(" "),t("router-view")],1)},staticRenderFns:[]};var b=n("VU/8")(g,v,!1,function(e){n("KOqQ")},null,null).exports,_=n("/ocq"),C=n("NYxO"),x={name:"File",props:["files","file","index"],data:function(){return{desContent:"请输入content",desFilename:"请输入文件名",note:""}},watch:{"file.filename":function(e){this.files.filter(function(t){return t.filename===e}).length>1?this.note="文件名重复，请重复填写":this.note="",console.log(this.files)}}},k={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-input",{attrs:{placeholder:e.desFilename},model:{value:e.file.filename,callback:function(t){e.$set(e.file,"filename",t)},expression:"file.filename"}}),e._v(" "),n("span",{staticClass:"note"},[e._v(e._s(e.note))]),n("br"),e._v(" "),n("el-input",{attrs:{type:"textarea",placeholder:e.desContent},model:{value:e.file.content,callback:function(t){e.$set(e.file,"content",t)},expression:"file.content"}})],1)},staticRenderFns:[]};var $=n("VU/8")(x,k,!1,function(e){n("tBDR")},"data-v-f9d1040e",null).exports,y={render:function(){var e=this.$createElement;return(this._self._c||e)("el-button",{attrs:{size:"mini"},on:{click:this.addFile}},[this._v("添加文件")])},staticRenderFns:[]};var w=n("VU/8")({name:"addFilename",props:["files"],data:function(){return{filename:"",content:""}},methods:{addFile:function(){this.files.push({filename:this.filename,content:this.content})}}},y,!1,function(e){n("CD8N")},"data-v-35295ac4",null).exports,F={name:"Add",components:{File:$,AddFilename:w},data:function(){return{form:{desPlace:"请输入description",public:"true",description:"",filename:"",content:"",note:""},ps:["true","false"],isDisabled:!1,files:[]}},watch:{"form.description":function(e,t){0===e.length?this.form.note="详情描述不能为空":this.form.note=""}},methods:{addGist:function(){var e=this;if(0!==this.form.description.length){this.form.note="";var t={description:this.form.description,public:this.form.public};console.log(t),t.files={};for(var n=0;n<this.files.length;n++){var i=this.files[n].filename;t.files[i]={content:this.files[n].content}}r.a.post("https://api.github.com/gists",t,{headers:{Authorization:"token "+localStorage.getItem("token")}}).then(function(t){console.log(t),e.isDisabled=!0,window.confirm("创建成功")}).catch()}else this.form.note="详情描述不能为空"}}},I={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"comWidth"},[n("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[n("el-form-item",{attrs:{label:"详情描述"}},[n("el-input",{attrs:{placeholder:e.form.desPlace},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}}),e._v(" "),n("span",{staticClass:"note"},[e._v(e._s(e.form.note))])],1),e._v(" "),n("el-form-item",{attrs:{label:"是否公共"}},[n("el-select",{model:{value:e.form.public,callback:function(t){e.$set(e.form,"public",t)},expression:"form.public"}},e._l(e.ps,function(e){return n("el-option",{key:e,attrs:{value:e}})}))],1),e._v(" "),n("el-form-item",{attrs:{label:"文件名称"}},[e._l(e.files,function(t,i){return n("File",{key:i,attrs:{file:t,files:e.files,index:i}})}),e._v(" "),n("AddFilename",{attrs:{files:e.files}})],2),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary",size:"medium",disabled:e.isDisabled},on:{click:e.addGist}},[e._v("立即创建")]),e._v(" "),n("el-button",{staticClass:"returnGist",attrs:{size:"medium"}},[n("router-link",{attrs:{to:"/read"}},[e._v("返回")])],1)],1)],1)],1)},staticRenderFns:[]};var E=n("VU/8")(F,I,!1,function(e){n("bo/E")},"data-v-162f784c",null).exports,T=n("vbIr"),L=n.n(T),U={name:"Read",data:function(){return{gists:[],links:{},pager:[],pageCount:1,selected:0,currentValue:"",getPage:function(e,t){var n=this;r.a.get(e,{headers:{Authorization:"token "+localStorage.getItem("token")}}).then(function(e){n.gists=e.data,n.links={};var i=n;e.headers.link.split(",").forEach(function(e){var t=e.match(/[<](.+)[>]; rel="(.+)"/);i.$set(i.links,t[2],t[1])}),"function"==typeof t&&t.call(i)}).catch()}}},filters:{time:function(){return L()("YYYYMMDD HH:mm:ss")}},mounted:function(){this.getPage("https://api.github.com/gists?page=1&per_page=4",function(){this.pageCount=parseInt(this.links.last.match(/\d/)[0]);for(var e=1;e<=this.pageCount;e++)this.pager.push({count:e});this.currentValue=2})},methods:{changePage:function(){if(this.currentValue=parseInt(this.currentValue),this.currentValue<=this.pageCount&&this.currentValue>=0){this.getPage("https://api.github.com/gists?page=num&per_page=4".replace(/num/,this.currentValue),function(){this.selected=this.currentValue-1})}else this.currentValue=this.pageCount;console.log(this.currentValue)},currentPage:function(e){this.getPage("https://api.github.com/gists?page=num&per_page=4".replace(/num/,e+1),function(){this.selected=e,e<this.pageCount-1?this.currentValue=e+2:this.currentValue=this.pageCount})},prevPage:function(){this.getPage(this.links.prev,function(){})},nextPage:function(){this.getPage(this.links.next,function(){})},deleteAll:function(){var e=this;this.multipleSelection.forEach(function(t){r.a.delete("https://api.github.com/gists/"+t.id,{headers:{Authorization:"token "+localStorage.getItem("token")}}).then(function(n){e.gists=e.gists.filter(function(e){return e.id!==t.id})}).catch()})},deleteGist:function(e){var t=this,n=e.target.id;r.a.delete("https://api.github.com/gists/"+n,{headers:{Authorization:"token "+localStorage.getItem("token")}}).then(function(e){t.gists=t.gists.filter(function(e){return e.id!==n}),window.confirm("删除成功")}).catch()},handleSelectionChange:function(e){this.multipleSelection=e}}},V={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"comWidth"},[n("div",{staticClass:"addLink"},[n("el-button",{attrs:{type:"danger",icon:"el-icon-delete",circle:""},on:{click:e.deleteAll}}),e._v(" "),n("router-link",{attrs:{to:"/add"}},[n("el-button",{attrs:{type:"primary",circle:""}},[n("i",{staticClass:"el-icon-circle-plus-outline"})])],1)],1),e._v(" "),n("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{border:"",data:e.gists,"tooltip-effect":"dark"},on:{"selection-change":e.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection"}}),e._v(" "),n("el-table-column",{attrs:{label:"id"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e._f("time")(t.row.created_at)))]}}])}),e._v(" "),n("el-table-column",{attrs:{prop:"url",label:"链接地址",width:"500"}}),e._v(" "),n("el-table-column",{attrs:{prop:"description",label:"详情描述","show-overflow-tooltip":""}}),e._v(" "),n("el-table-column",{attrs:{label:"操作",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("router-link",{attrs:{to:{name:"Edit",query:{id:t.row.id}}}},[n("i",{staticClass:"el-icon-edit"})]),e._v(" "),n("i",{staticClass:"el-icon-delete",attrs:{id:t.row.id},on:{click:e.deleteGist}})]}}])})],1),e._v(" "),n("div",{staticClass:"page-box"},[n("button",{staticClass:"prevBtn",class:[{mouseDisabled:!this.links.hasOwnProperty("prev")},{nextBtn:!0}],attrs:{disabled:!this.links.hasOwnProperty("prev")},on:{click:e.prevPage}},[n("i",{staticClass:"el-icon-arrow-left"})]),e._v(" "),n("ul",{staticClass:"page"},e._l(e.pager,function(t,i){return n("li",{class:{active:e.selected===i},on:{click:function(t){e.currentPage(i)}}},[e._v(e._s(t.count))])})),e._v(" "),n("button",{class:[{mouseDisabled:!this.links.hasOwnProperty("next")},{nextBtn:!0}],attrs:{disabled:!this.links.hasOwnProperty("next")},on:{click:e.nextPage}},[n("i",{staticClass:"el-icon-arrow-right"})]),e._v(" "),n("span",{staticClass:"fl totalPage"},[e._v("共"+e._s(e.pageCount)+"页")]),e._v(" "),n("div",{staticClass:"jump"},[n("span",[e._v("跳至")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],attrs:{type:"text"},domProps:{value:e.currentValue},on:{input:function(t){t.target.composing||(e.currentValue=t.target.value)}}}),e._v(" "),n("span",[e._v("页")]),e._v(" "),n("button",{on:{click:function(t){e.changePage(e.currentValue)}}},[e._v("跳转")])])])],1)},staticRenderFns:[]};var R=n("VU/8")(U,V,!1,function(e){n("NhnC")},"data-v-2979640d",null).exports,z=n("gRE1"),A=n.n(z),S={name:"fileEdit",props:["files","index","file","deleteItem"],components:{File:$},data:function(){return{}},methods:{deleteFile:function(e){console.log(e),void 0!==this.files[e].oldname&&(this.deleteItem.push(this.files[e].oldname),console.log(this.deleteItem)),this.files.splice(e,1)}}},D={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("File",{attrs:{file:e.file,files:e.files,index:e.index}}),e._v(" "),n("el-button",{attrs:{type:"danger",plain:"",size:"mini"},on:{click:function(t){e.deleteFile(e.index)}}},[e._v("删除文件")])],1)},staticRenderFns:[]};var P={name:"Edit",components:{AddFilename:w,File:$,FileEdit:n("VU/8")(S,D,!1,function(e){n("XKl3")},"data-v-0f0979ee",null).exports},data:function(){return{form:{description:""},ps:["true","false"],selectId:this.$route.query.id,files:[],oldName:[],deleteItem:[]}},mounted:function(){var e=this;r.a.get("https://api.github.com/gists/"+this.selectId,{headers:{Authorization:"token "+localStorage.getItem("token")}}).then(function(t){e.form.description=t.data.description,e.files=A()(t.data.files),e.files.forEach(function(e){e.oldname=e.filename}),console.log(e.files)}).catch()},methods:{editGist:function(){var e={};e.description=this.form.description,e.files={},this.files.forEach(function(t){void 0!==t.oldname?t.oldname!==t.filename?e.files[t.oldname]={filename:t.filename,content:t.content}:e.files[t.oldname]={content:t.content}:e.files[t.filename]={content:t.content}});var t=this;t.deleteItem.forEach(function(n){void 0===t.files.find(function(e){return e.filename===n})&&(e.files[n]=null)}),r.a.patch("https://api.github.com/gists/"+this.selectId,e,{headers:{Authorization:"token "+localStorage.getItem("token")}}).then(function(e){console.log(e),window.confirm("更新成功")}).catch(function(e){console.log(e)})}}},H={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"comWidth"},[n("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[n("el-form-item",{attrs:{label:"详情描述",prop:"description"}},[n("el-input",{attrs:{placeholder:e.form.desPlace},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"文件名称"}},[e._l(e.files,function(t,i){return n("FileEdit",{key:i,attrs:{file:t,files:e.files,index:i,deleteItem:e.deleteItem}})}),e._v(" "),n("AddFilename",{attrs:{files:e.files}})],2),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.editGist}},[e._v("更新内容")]),e._v(" "),n("el-button",{staticClass:"returnGist",attrs:{size:"medium"}},[n("router-link",{attrs:{to:"/read"}},[e._v("返回")])],1)],1)],1)],1)},staticRenderFns:[]};var N=n("VU/8")(P,H,!1,function(e){n("W79w")},"data-v-702e3645",null).exports,G={name:"Issue",data:function(){return{lists:[]}},mounted:function(){var e=this;r.a.get(" https://api.github.com/repos/yanping90/js/issues").then(function(t){console.log(t),e.lists=t.data}).catch()},filters:{time:function(){return L()("YYYY-MM-DD HH:mm")}}},W={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"comWidth"},[n("ul",{staticClass:"list"},e._l(e.lists,function(t){return n("li",[n("span",{staticClass:"title"},[e._v(e._s(t.title))]),e._v(" "),n("span",{staticClass:"time"},[e._v(e._s(e._f("time")(t.created_at)))]),e._v(" "),n("span",{staticClass:"edit"},[n("router-link",{attrs:{to:"issue/edit"}},[e._v("编辑")])],1)])}))])},staticRenderFns:[]};var B=n("VU/8")(G,W,!1,function(e){n("Kb+T")},"data-v-6a3681ad",null).exports,O={render:function(){var e=this.$createElement;return(this._self._c||e)("div",[this._v(this._s(this.list.name))])},staticRenderFns:[]};var j={name:"Test",components:{Example:n("VU/8")({name:"Example",props:["list"],data:function(){return{}}},O,!1,function(e){n("2+Cx")},"data-v-562fef97",null).exports},data:function(){return{size:"12",description:"",lists:[{name:"js",id:0,content:"JavaScript 是世界上最流行的脚本语言。JavaScript 是属于 web 的语言，它适用于 PC、笔记本电脑、平板电脑和移动电话。JavaScript 被设计为向 HTML 页面增加交互性。"},{name:"css",id:1,content:"HTML 指超文本标签语言。HTML 是通向 WEB 技术世界的钥匙。在 W3School 的 HTML 教程中，您将学习如何使用 HTML 来创建站点。"},{name:"HTML 教程",id:2,content:"在本教程中，你将学习如何使用 HTML 来创建站点。HTML 很容易学习！你会喜欢它的！"}]}},methods:{addGist:function(){r.a.post("https://api.github.com/gists",{description:this.description,files:{b:{content:"b"}}},{headers:{Authorization:"token "+localStorage.getItem("token")}}).then(function(e){console.log(e.data)}).catch()},testBtn:function(e){console.log(e)},sizeFont:function(){this.size++,console.log(this.size)}}},q={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",this._l(this.lists,function(e,n){return t("Example",{key:n,attrs:{list:e}})}))},staticRenderFns:[]};var M=n("VU/8")(j,q,!1,function(e){n("AH5j")},"data-v-337983ef",null).exports,Y=n("woOf"),K=n.n(Y),X=n("fZjL"),J=n.n(X),Q=n("W3Iv"),Z=n.n(Q),ee={name:"Object",data:function(){return{data:""}},mounted:function(){var e={name:"lily",age:18,sex:"女"};console.log(e),this.data=Z()(e),console.log(J()(e)),console.log(A()(e));for(var t in Array.prototype.set="",Array.prototype.get="",[1,2,3,4])console.log(t);var n={a:1,b:2,c:3},i=K()({c:1,d:10},n);console.log(i);var s=K()({},n);console.log(s);var a=[0,2,3,4,4,0,2];for(t=0;t<a.length;t++)a.indexOf(a[t])!=a.lastIndexOf(a[t])&&a.splice(t,1);console.log(a)}},te={render:function(){var e=this.$createElement;return(this._self._c||e)("div",[this._v("\n  "+this._s(this.data)+"\n")])},staticRenderFns:[]};var ne=n("VU/8")(ee,te,!1,function(e){n("Kpr4")},"data-v-2309c6e1",null).exports,ie={render:function(){var e=this.$createElement;return(this._self._c||e)("a",{attrs:{href:"https://github.com/login/oauth/authorize?client_id=d327e486430e4b05f07b&scope=gist,user"}},[this._v("\n  使用github帐号登录\n")])},staticRenderFns:[]};var se=n("VU/8")({name:"Login",data:function(){return{}},mounted:function(){},methods:{}},ie,!1,function(e){n("AYiD")},"data-v-62fd01da",null).exports,ae={name:"TabTit",props:["item","index","selected","deleteVisible","repeatable"],data:function(){return{readonly:!0,isHnputHover:!1,note:""}},computed:{deletable:function(){return this.item.deleted&&""===this.item.filename},editable:function(){return this.item.oldname!==this.item.filename},addable:function(){return""===this.item.oldname}},watch:{repeatable:function(){this.repeatable&&this.$message.error("文件名字不能重复")}},mounted:function(){this.$refs.inputWidth.style.width="60px",this.$refs.tabWidth.style.width="106px"},methods:{deleteFiles:function(e){this.$set(this.item,"deleted",!0),this.$set(this.item,"filename",""),o.$emit("onDeleteFiles",e)},changeTab:function(e){this.readonly=!0,this.readonly=!1,this.$emit("onchangeTab",e)},onNameChanged:function(){this.$set(this.item,"editable",!0),o.$emit("onNameChangedHandle",{deletable:this.deletable,editable:this.editable}),o.$emit("repeatFilename",this.item.filename)},changeWidth:function(){this.$refs.inputWidth.style.width=this.$refs.widthName.offsetWidth+20+"px",this.$refs.tabWidth.style.width=this.$refs.widthName.offsetWidth+70+"px"}}},oe={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{ref:"tabWidth",staticClass:"tabTit",class:{hide:e.item.deleted,active:e.selected===e.index}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.item.filename,expression:"item.filename"}],ref:"inputWidth",class:{inputHover:!e.readonly},attrs:{readonly:e.readonly,type:"text"},domProps:{value:e.item.filename},on:{change:e.onNameChanged,click:function(t){e.changeTab(e.index)},keydown:e.changeWidth,input:function(t){t.target.composing||e.$set(e.item,"filename",t.target.value)}}}),e._v(" "),n("i",{directives:[{name:"show",rawName:"v-show",value:e.deleteVisible,expression:"deleteVisible"}],staticClass:"el-icon-delete",on:{click:function(t){e.deleteFiles(e.index)}}}),e._v(" "),n("span",{ref:"widthName",staticClass:"nameWidth"},[e._v(e._s(e.item.filename))])])])},staticRenderFns:[]};var le=n("VU/8")(ae,oe,!1,function(e){n("z7vc")},"data-v-7d1b440f",null).exports,re=n("OEdS"),ce=n.n(re),de=(n("0BLv"),{name:"contentView",props:["item","index"],data:function(){return{editContent:!1}},computed:{highlightedContent:function(){if(this.item.content)return this.item.language?ce.a.highlight(this.item.content,ce.a.languages[this.item.language.toLocaleLowerCase()],this.item.language.toLocaleLowerCase()):this.item.content}},mounted:function(){var e=this;o.$on("changeEditContent",function(){e.editContent=!1}),o.$on("defaultContent",function(){e.editContent=!1}),this.item.content||(this.editContent=!1)},methods:{onEditContent:function(){this.editContent=!0,o.$emit("changeSave")},contentChanged:function(e){this.$set(this.item,"editable",!0),o.$emit("onContentChanged",e)}}}),ue={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"preContent"},[n("pre",{directives:[{name:"show",rawName:"v-show",value:!e.editContent,expression:"!editContent"}],on:{dblclick:e.onEditContent}},[e._v("        "),n("div",{domProps:{innerHTML:e._s(e.highlightedContent)}}),e._v("\n  ")]),e._v(" "),n("el-input",{directives:[{name:"show",rawName:"v-show",value:e.editContent,expression:"editContent"}],attrs:{type:"textarea",autosize:"",placeholder:"请输入文件内容"},on:{change:function(t){e.contentChanged(e.index)}},model:{value:e.item.content,callback:function(t){e.$set(e.item,"content",t)},expression:"item.content"}})],1)},staticRenderFns:[]};var fe={name:"File",props:["item","index"],components:{contentView:n("VU/8")(de,ue,!1,function(e){n("kHHs")},"data-v-945f6daa",null).exports},data:function(){return{selected:0}},mounted:function(){var e=this;o.$on("changeContent",function(t){e.selected=t}),o.$on("addContent",function(t){e.selected=t}),o.$on("defaultContent",function(){e.selected=0})}},he={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("contentView",{directives:[{name:"show",rawName:"v-show",value:this.selected===this.index,expression:"selected === index"}],attrs:{item:this.item,index:this.index,language:this.item.language}})],1)},staticRenderFns:[]};var me=n("VU/8")(fe,he,!1,function(e){n("xTYX")},"data-v-0123450b",null).exports,pe={name:"Gist",components:{Load:p,TabTit:le,File:me},data:function(){return{id:this.$route.query.id,hideLoad:!1,repeatable:!1,activeName:"",selected:0,newFileIndex:0,description:"",files:[],fileCRUD:{}}},beforeRouteUpdate:function(e,t,n){var i=this;0!==J()(this.fileCRUD).length?this.$confirm("检测到未保存的内容，是否在离开页面前保存修改？","确认信息",{distinguishCancelAndClose:!0,confirmButtonText:"保存",cancelButtonText:"放弃修改"}).then(function(){i.onUpdateItem(),i.fileCRUD={},i.id=e.query.id,i.getFiles(i.id),o.$emit("addWidth"),n()}).catch(function(t){i.$message({type:"info",message:"cancel"===t?"放弃保存并离开页面":"停留在当前页面"}),i.fileCRUD={},i.hideLoad=!1,i.id=e.query.id,i.getFiles(i.id),n()}):(this.hideLoad=!1,this.fileCRUD={},this.id=e.query.id,this.getFiles(this.id),n())},computed:{savable:function(){return this.fileCRUD.deletable||this.fileCRUD.editable||this.fileCRUD.addable},deleteVisible:function(){return this.files.filter(function(e){return!e.deleted}).length>1}},mounted:function(){var e=this;this.getFiles(this.id),o.$on("onNameChangedHandle",function(t){e.fileCRUD=t}),o.$on("onContentChanged",function(){e.$set(e.fileCRUD,"editable",!0)}),o.$on("onDeleteFiles",function(t){e.$set(e.fileCRUD,"deletable",!0),e.files.forEach(function(t,n){t.deleted||(e.selected=n)}),o.$emit("defaultContent",e.selected)}),o.$on("defaultSelected",function(){e.selected=0,o.$emit("defaultContent")}),o.$on("repeatFilename",function(t){e.files.filter(function(e){return e.filename===t}).length>1&&(e.repeatable=!0)})},methods:{getFiles:function(e){var t=this;r.a.get("https://api.github.com/gists/"+e,{headers:{Authorization:"token "+localStorage.getItem("token")}}).then(function(e){t.hideLoad=!0,t.description=e.data.description,t.files=A()(e.data.files),t.files.forEach(function(e){e.oldname=e.filename}),t.activeName=t.files[0].filename}).catch()},onChangeDesc:function(){this.$set(this.fileCRUD,"editable",!0)},onChangeTabHandle:function(e){this.selected=e,o.$emit("changeContent",e)},addFile:function(){var e="file_"+this.newFileIndex++;this.files.push({filename:e,content:""}),this.selected=this.files.length-1,o.$emit("addContent",this.selected)},onUpdateItem:function(){var e=this,t={};t.description=this.description,this.description&&0===this.description.length?alert("详情描述不能为空"):(t.files={},this.files.forEach(function(e){void 0!==e.oldname?(e.editable&&(t.files[e.oldname]={filename:e.filename,content:e.content}),e.deleted&&(t.files[e.oldname]=null)):t.files[e.filename]={content:e.content}}),console.log(t),r.a.patch("https://api.github.com/gists/"+this.id,t,{headers:{Authorization:"token "+localStorage.getItem("token")}}).then(function(t){console.log(t),e.files=A()(t.data.files),e.files.forEach(function(e){e.oldname=e.filename}),e.open(),o.$emit("updateList",{id:e.id,files:e.files,description:e.description}),o.$emit("changeEditContent"),e.fileCRUD={}}).catch())},open:function(){this.$message({message:"恭喜你，保存成功",type:"success"})}}},ge={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Load",{attrs:{hideLoad:e.hideLoad}}),e._v(" "),n("div",{class:{hide:!e.hideLoad}},[n("el-input",{attrs:{type:"textarea",rel:"inputWidth",autosize:""},on:{change:e.onChangeDesc},model:{value:e.description,callback:function(t){e.description=t},expression:"description"}}),e._v(" "),n("div",{staticClass:"height20"}),e._v(" "),n("div",{staticClass:"tab-tit clear"},[e._l(e.files,function(t,i){return n("TabTit",{key:i,staticClass:"fl",attrs:{item:t,index:i,selected:e.selected,deleteVisible:e.deleteVisible,repeatable:e.repeatable},on:{onchangeTab:function(t){e.onChangeTabHandle(i)}}})}),e._v(" "),n("span",{staticClass:"gistAdd fl"},[n("i",{staticClass:"el-icon-circle-plus-outline",on:{click:e.addFile}})])],2),e._v(" "),e._l(e.files,function(e,t){return n("File",{key:t,attrs:{item:e,index:t}})}),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.savable,expression:"savable"}],staticClass:"btn"},[n("el-button",{attrs:{type:"primary",size:"medium",disabled:!e.savable},on:{click:e.onUpdateItem}},[e._v("\n          保存\n        ")])],1)],2)],1)},staticRenderFns:[]};var ve=n("VU/8")(pe,ge,!1,function(e){n("jh8B")},"data-v-7a41afcc",null).exports,be={name:"ListItem",props:["item","index"],data:function(){return{current:0,hideDeleteIcon:!0}},mounted:function(){o.$on("defaultTab",function(e){console.log(e)})},methods:{changeCurrent:function(e){this.$emit("changeCurrent",e),o.$emit("defaultSelected")},deleteCurrentGist:function(e){var t=this;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){r.a.delete("https://api.github.com/gists/"+e,{headers:{Authorization:"token "+localStorage.getItem("token")}}).then(function(n){console.log(n),t.$message({type:"success",message:"删除成功!"}),o.$emit("deletePageGist",e)}).catch()}).catch(function(){t.$message({type:"info",message:"已取消删除"})})}}},_e={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{on:{click:function(t){e.changeCurrent(e.index)}}},[n("router-link",{attrs:{to:{path:"/gists/gist",query:{id:e.item.id}}}},[n("span",{staticClass:"item-desc"},[e._v(e._s(e.item.description)+" ")])]),e._v(" "),n("span",{staticClass:"item-delete fr",on:{click:function(t){e.deleteCurrentGist(e.item.id)}}},[n("i",{staticClass:"el-icon-delete"})])],1)},staticRenderFns:[]};var Ce={name:"List",components:{ListItem:n("VU/8")(be,_e,!1,function(e){n("Xosm")},null,null).exports},data:function(){return{list:[],tabs:[],fileNumber:"",current:0,links:{},pageSize:0,total:0}},mounted:function(){this.$refs.navHeight.style.height=screen.availHeight-220+"px",this.pageSize=10,this.getCurrentPage("https://api.github.com/gists?page=1&per_page="+this.pageSize,function(){var e=this;if(this.links.hasOwnProperty("last")){var t=this.links.last.match(/.+page=(\d+)&.+/);this.total=this.pageSize*parseInt(t[1])}o.$on("deletePageGist",function(t){e.list=e.list.filter(function(e){return e.id!==t})}),o.$on("updateList",function(t){e.list.forEach(function(e){e.id===t.id&&(e.description=t.description,e.files=t.files)})}),o.$on("addListGist",function(t){e.list.unshift({id:t.id,description:t.description})})})},methods:{getCurrentPage:function(e,t){var n=this;r.a.get(e,{headers:{Authorization:"token "+localStorage.getItem("token")}}).then(function(e){n.list=e.data;var i=n,s=e.headers.link.split(",");s?s.forEach(function(e){var t=e.match(/<(.+)>; rel="(.+)"/);i.$set(i.links,t[2],t[1])}):n.pageSize=n.list.length,n.$router.push({path:"/gists/gist",query:{id:n.list[0].id}}),"function"==typeof t&&t.call(i)}).catch()},handleCurrentChange:function(e){var t="https://api.github.com/gists?page=num&per_page="+this.pageSize;this.getCurrentPage(t.replace(/num/,e))},onChangeCurrent:function(e){this.current=e}}},xe={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("ul",{ref:"navHeight",staticClass:"nav"},e._l(e.list,function(t,i){return n("ListItem",{tag:"li",class:{active:e.current===i},attrs:{item:t,index:i},on:{changeCurrent:e.onChangeCurrent}})})),e._v(" "),n("div",{staticClass:"pager"},[n("el-pagination",{attrs:{layout:"prev,pager,next","page-size":e.pageSize,total:e.total},on:{"current-change":e.handleCurrentChange}})],1)])},staticRenderFns:[]};var ke=n("VU/8")(Ce,xe,!1,function(e){n("7ltT")},null,null).exports,$e={name:"Gists",components:{List:ke}},ye={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"full"},[t("div",{staticClass:"nav-box"},[t("List")],1),this._v(" "),t("div",{staticClass:"tab-box"},[t("router-view")],1)])},staticRenderFns:[]};var we=n("VU/8")($e,ye,!1,function(e){n("gYfG")},"data-v-ae08565a",null).exports,Fe={name:"AddGist",components:{TabTit:le,File:me},data:function(){return{files:[],description:"",note:"",selected:0,current:0,radioIndex:"1",newFileIndex:2,repeatable:!1,disabled:!1}},computed:{hideDeleteIcon:function(){return this.files&&1===this.files.length},deleteVisible:function(){return this.files.filter(function(e){return!e.deleted}).length>1}},mounted:function(){var e=this;this.files.push({filename:"file_1",content:""}),o.$on("repeatFilename",function(t){e.files.filter(function(e){return e.filename===t}).length>1&&(e.repeatable=!0)}),o.$on("onDeleteFiles",function(){e.selected=0})},methods:{addFile:function(){this.newFileIndex++;this.files.push({filename:"",content:""}),this.selected=this.files.length-1},onChangeTabHandle:function(e){this.selected=e,o.$emit("changeContent",e)},onChangeTab:function(e){this.selected=e},deleteFile:function(e){e>0&&this.files.splice(e,1)},changeDesc:function(){""!==this.description?this.note="":this.note="详情描述不能为空"},saveGist:function(){var e=this;if(""!==this.description){this.note="";var t={};"1"===this.radioIndex?t.public=!0:t.public=!1,t.description=this.description,t.files={},this.files.forEach(function(e){t.files[e.filename]={content:e.content}}),console.log(t),d.post("/gists",t).then(function(t){e.disabled=!0,o.$emit("addListGist",{id:t.data.id,description:t.data.description}),e.open()}).catch()}else this.note="详情描述不能为空"},open:function(){this.$message({message:"恭喜你，添加成功",type:"success"})}}},Ie={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"addForm"},[n("div",[n("el-input",{attrs:{type:"textarea",placeholder:"请输入详情描述",autosize:""},on:{change:e.changeDesc},model:{value:e.description,callback:function(t){e.description=t},expression:"description"}}),e._v(" "),n("span",[e._v(e._s(e.note))])],1),e._v(" "),n("div",{staticClass:"height20"}),e._v(" "),n("el-radio",{attrs:{label:"1"},model:{value:e.radioIndex,callback:function(t){e.radioIndex=t},expression:"radioIndex"}},[e._v("public")]),e._v(" "),n("el-radio",{attrs:{label:"2"},model:{value:e.radioIndex,callback:function(t){e.radioIndex=t},expression:"radioIndex"}},[e._v("secret")]),e._v(" "),n("div",{staticClass:"height20"}),e._v(" "),n("div",{staticClass:"tab-tit clear"},[e._l(e.files,function(t,i){return n("TabTit",{key:i,staticClass:"fl",attrs:{item:t,index:i,selected:e.selected,deleteVisible:e.deleteVisible,repeatable:e.repeatable},on:{onchangeTab:function(t){e.onChangeTabHandle(i)}}})}),e._v(" "),n("span",{staticClass:"gistAdd fl"},[n("i",{staticClass:"el-icon-circle-plus-outline",on:{click:e.addFile}})])],2),e._v(" "),e._l(e.files,function(e,t){return n("File",{key:t,attrs:{item:e,index:t}})}),e._v(" "),n("div",{staticClass:"line20"}),e._v(" "),n("div",{staticClass:"btn"},[n("el-button",{attrs:{type:"primary",size:"medium",disabled:e.disabled},on:{click:e.saveGist}},[e._v("保存\n    ")])],1)],2)},staticRenderFns:[]};var Ee=n("VU/8")(Fe,Ie,!1,function(e){n("gt6i")},"data-v-55e18359",null).exports;i.default.use(_.a),i.default.use(C.a);var Te=new _.a({routes:[{path:"/gists",name:"Gists",component:we,children:[{path:"gist",name:"Gist",component:ve},{path:"addGist",name:"AddGist",component:Ee}]},{path:"/login",name:"Login",component:se},{path:"/list",name:"List",component:ke},{path:"/object",name:"Object",component:ne},{path:"/test",name:"Test",component:M},{path:"/issue",name:"Issue",component:B},{path:"/read",name:"Read",component:R},{path:"/edit",name:"Edit",component:N},{path:"/add",name:"Add",component:E}]}),Le=n("zL8q");n("tvR6");i.default.prototype.$ELEMENT={size:"small",zIndex:3e3},i.default.use(Le.Button),i.default.use(Le.Input),i.default.use(Le.Select),i.default.use(Le.Option),i.default.use(Le.OptionGroup),i.default.use(Le.Radio),i.default.use(Le.Table),i.default.use(Le.TableColumn),i.default.use(Le.Row),i.default.use(Le.Col),i.default.use(Le.Form),i.default.use(Le.FormItem),i.default.use(Le.Pagination),i.default.use(Le.Tabs),i.default.use(Le.TabPane),i.default.prototype.$confirm=Le.MessageBox.confirm,i.default.prototype.$message=Le.Message,i.default.config.productionTip=!1,new i.default({el:"#app",router:Te,components:{App:b},template:"<App/>",mounted:function(){}})},NhnC:function(e,t){},W79w:function(e,t){},We50:function(e,t){},XKl3:function(e,t){},Xosm:function(e,t){},"bo/E":function(e,t){},gYfG:function(e,t){},gt6i:function(e,t){},jh8B:function(e,t){},jqWA:function(e,t){},kHHs:function(e,t){},tBDR:function(e,t){},tvR6:function(e,t){},xTYX:function(e,t){},z7vc:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.8e3654e182a173748385.js.map