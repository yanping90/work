webpackJsonp([1],{"0BLv":function(e,t){},"2+Cx":function(e,t){},"8a74":function(e,t){},"99n4":function(e,t){},AH5j:function(e,t){},CD8N:function(e,t){},EQiO:function(e,t){},"Kb+T":function(e,t){},Kpr4:function(e,t){},NHnr:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("7+uW"),s=i("OAwv"),a=i.n(s),o=new n.default({}),l=i("mtWM"),r=i.n(l),c=r.a.create({baseURL:"https://api.github.com",timeout:1e4});c.interceptors.request.use(function(e){return e.headers.Authorization="token "+localStorage.getItem("token"),e}),c.interceptors.response.use(function(e){return e},function(e){});var d=c,u={name:"UserBar",data:function(){return{userName:"",photo:"",hideUserBar:!0}},mounted:function(){var e=this;o.$on("gotAccessToken",function(){d.get("/user").then(function(t){e.hideUserBar=!1,e.userName=t.data.login,e.photo=t.data.avatar_url}).catch()}),o.$on("removeToken",function(){e.hideUserBar=!0})},methods:{onGreet:function(){o.$emit("showGistDetails")},userExit:function(){this.hideUserBar=!0,this.$router.push({path:"/"}),o.$emit("removeToken")}}},f={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"tit",class:{hide:e.hideUserBar}},[i("span",{staticClass:"photoImg"},[i("img",{attrs:{src:e.photo}})]),e._v(" "),i("b",[e._v(e._s(e.userName))]),e._v(" "),i("span",{staticClass:"gistAdd"},[i("router-link",{attrs:{to:"/gists/addGist"}},[i("el-button",{attrs:{size:"mini",round:""},on:{click:e.onGreet}},[e._v("添加 Gist")])],1)],1),e._v(" "),i("span",{staticClass:"quit"},[i("a",{on:{click:e.userExit}},[e._v("退出")])])])},staticRenderFns:[]},h=i("VU/8")(u,f,!1,function(e){i("EQiO")},"data-v-51b87890",null).exports,m={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{class:{loading:!0,hide:e.hideLoad}},[i("i",{staticClass:"el-icon-loading"}),e._v(" "),i("span",[e._v("页面加载中")])])},staticRenderFns:[]},p=i("VU/8")({name:"Load",props:["hideLoad"],data:function(){return{}}},m,!1,function(e){i("jqWA")},"data-v-347e2548",null).exports,v={name:"App",components:{UserBar:h,Load:p},data:function(){return{loginUrl:"https://github.com/login/oauth/authorize?client_id=d327e486430e4b05f07b&scope=gist,user&redirect_uri=https://joyfunphp.herokuapp.com/github/oauth/gists",token:"",queryObj:{}}},computed:{hideLogin:function(){return""!==this.token||void 0!==this.queryObj.code},hideLoad:function(){return""!==this.token||void 0===this.queryObj.code}},mounted:function(){var e=this;o.$on("removeToken",function(){localStorage.removeItem("token"),e.token="",e.queryObj={}}),null===localStorage.getItem("token")?this.token="":""!==localStorage.getItem("token")&&(o.$emit("gotAccessToken"),this.token=localStorage.getItem("token"),this.$router.push("/gists")),this.queryObj=a.a.parse(location.search);var t=this;void 0!==this.queryObj.code&&d.get("https://joyfunphp.herokuapp.com/github/access/",{params:{client_id:"d327e486430e4b05f07b",code:this.queryObj.code}}).then(function(i){i.data.access_token?(localStorage.setItem("token",i.data.access_token),t.token=i.data.access_token,t.$router.push("/gists"),o.$emit("gotAccessToken")):(e.$message.error("code过期了哦，请重新登录"),o.$emit("removeToken"),e.token="",e.$router.push({path:"/"}))}).catch()}},g={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("UserBar"),e._v(" "),i("div",{class:{githubBtn:!0,hide:e.hideLogin}},[i("a",{attrs:{href:e.loginUrl}},[e._v("\n      使用github帐号登录\n    ")])]),e._v(" "),i("Load",{attrs:{hideLoad:e.hideLoad}}),e._v(" "),i("router-view")],1)},staticRenderFns:[]},b=i("VU/8")(v,g,!1,function(e){i("nH/J")},null,null).exports,_=i("/ocq"),C=i("NYxO"),k={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("el-input",{attrs:{placeholder:e.desFilename},model:{value:e.file.filename,callback:function(t){e.$set(e.file,"filename",t)},expression:"file.filename"}}),e._v(" "),i("span",{staticClass:"note"},[e._v(e._s(e.note))]),i("br"),e._v(" "),i("el-input",{attrs:{type:"textarea",placeholder:e.desContent},model:{value:e.file.content,callback:function(t){e.$set(e.file,"content",t)},expression:"file.content"}})],1)},staticRenderFns:[]},x=i("VU/8")({name:"File",props:["files","file","index"],data:function(){return{desContent:"请输入content",desFilename:"请输入文件名",note:""}},watch:{"file.filename":function(e){this.files.filter(function(t){return t.filename===e}).length>1?this.note="文件名重复，请重复填写":this.note=""}}},k,!1,function(e){i("tBDR")},"data-v-f9d1040e",null).exports,$={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("el-button",{attrs:{size:"mini"},on:{click:e.addFile}},[e._v("添加文件")])},staticRenderFns:[]},w=i("VU/8")({name:"addFilename",props:["files"],data:function(){return{filename:"",content:""}},methods:{addFile:function(){this.files.push({filename:this.filename,content:this.content})}}},$,!1,function(e){i("CD8N")},"data-v-35295ac4",null).exports,y={name:"Add",components:{File:x,AddFilename:w},data:function(){return{form:{desPlace:"请输入description",public:"true",description:"",filename:"",content:"",note:""},ps:["true","false"],isDisabled:!1,files:[]}},watch:{"form.description":function(e,t){0===e.length?this.form.note="详情描述不能为空":this.form.note=""}},methods:{addGist:function(){var e=this;if(0!==this.form.description.length){this.form.note="";for(var t={description:this.form.description,public:this.form.public,files:{}},i=0;i<this.files.length;i++){var n=this.files[i].filename;t.files[n]={content:this.files[i].content}}r.a.post("https://api.github.com/gists",t,{headers:{Authorization:"token "+localStorage.getItem("token")}}).then(function(t){e.isDisabled=!0,window.confirm("创建成功")}).catch()}else this.form.note="详情描述不能为空"}}},F={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"comWidth"},[i("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[i("el-form-item",{attrs:{label:"详情描述"}},[i("el-input",{attrs:{placeholder:e.form.desPlace},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}}),e._v(" "),i("span",{staticClass:"note"},[e._v(e._s(e.form.note))])],1),e._v(" "),i("el-form-item",{attrs:{label:"是否公共"}},[i("el-select",{model:{value:e.form.public,callback:function(t){e.$set(e.form,"public",t)},expression:"form.public"}},e._l(e.ps,function(e){return i("el-option",{key:e,attrs:{value:e}})}))],1),e._v(" "),i("el-form-item",{attrs:{label:"文件名称"}},[e._l(e.files,function(t,n){return i("File",{key:n,attrs:{file:t,files:e.files,index:n}})}),e._v(" "),i("AddFilename",{attrs:{files:e.files}})],2),e._v(" "),i("el-form-item",[i("el-button",{attrs:{type:"primary",size:"medium",disabled:e.isDisabled},on:{click:e.addGist}},[e._v("立即创建")]),e._v(" "),i("el-button",{staticClass:"returnGist",attrs:{size:"medium"}},[i("router-link",{attrs:{to:"/read"}},[e._v("返回")])],1)],1)],1)],1)},staticRenderFns:[]},T=i("VU/8")(y,F,!1,function(e){i("bo/E")},"data-v-162f784c",null).exports,E=i("vbIr"),I=i.n(E),D={name:"Read",data:function(){return{gists:[],links:{},pager:[],pageCount:1,selected:0,currentValue:"",getPage:function(e,t){var i=this;r.a.get(e,{headers:{Authorization:"token "+localStorage.getItem("token")}}).then(function(e){i.gists=e.data,i.links={};var n=i;e.headers.link.split(",").forEach(function(e){var t=e.match(/[<](.+)[>]; rel="(.+)"/);n.$set(n.links,t[2],t[1])}),"function"==typeof t&&t.call(n)}).catch()}}},filters:{time:function(){return I()("YYYYMMDD HH:mm:ss")}},mounted:function(){this.getPage("https://api.github.com/gists?page=1&per_page=4",function(){this.pageCount=parseInt(this.links.last.match(/\d/)[0]);for(var e=1;e<=this.pageCount;e++)this.pager.push({count:e});this.currentValue=2})},methods:{changePage:function(){this.currentValue=parseInt(this.currentValue),this.currentValue<=this.pageCount&&this.currentValue>=0?this.getPage("https://api.github.com/gists?page=num&per_page=4".replace(/num/,this.currentValue),function(){this.selected=this.currentValue-1}):this.currentValue=this.pageCount},currentPage:function(e){this.getPage("https://api.github.com/gists?page=num&per_page=4".replace(/num/,e+1),function(){this.selected=e,e<this.pageCount-1?this.currentValue=e+2:this.currentValue=this.pageCount})},prevPage:function(){this.getPage(this.links.prev,function(){})},nextPage:function(){this.getPage(this.links.next,function(){})},deleteAll:function(){var e=this;this.multipleSelection.forEach(function(t){r.a.delete("https://api.github.com/gists/"+t.id,{headers:{Authorization:"token "+localStorage.getItem("token")}}).then(function(i){e.gists=e.gists.filter(function(e){return e.id!==t.id})}).catch()})},deleteGist:function(e){var t=this,i=e.target.id;r.a.delete("https://api.github.com/gists/"+i,{headers:{Authorization:"token "+localStorage.getItem("token")}}).then(function(e){t.gists=t.gists.filter(function(e){return e.id!==i}),window.confirm("删除成功")}).catch()},handleSelectionChange:function(e){this.multipleSelection=e}}},L={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"comWidth"},[i("div",{staticClass:"addLink"},[i("el-button",{attrs:{type:"danger",icon:"el-icon-delete",circle:""},on:{click:e.deleteAll}}),e._v(" "),i("router-link",{attrs:{to:"/add"}},[i("el-button",{attrs:{type:"primary",circle:""}},[i("i",{staticClass:"el-icon-circle-plus-outline"})])],1)],1),e._v(" "),i("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{border:"",data:e.gists,"tooltip-effect":"dark"},on:{"selection-change":e.handleSelectionChange}},[i("el-table-column",{attrs:{type:"selection"}}),e._v(" "),i("el-table-column",{attrs:{label:"id"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e._f("time")(t.row.created_at)))]}}])}),e._v(" "),i("el-table-column",{attrs:{prop:"url",label:"链接地址",width:"500"}}),e._v(" "),i("el-table-column",{attrs:{prop:"description",label:"详情描述","show-overflow-tooltip":""}}),e._v(" "),i("el-table-column",{attrs:{label:"操作",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("router-link",{attrs:{to:{name:"Edit",query:{id:t.row.id}}}},[i("i",{staticClass:"el-icon-edit"})]),e._v(" "),i("i",{staticClass:"el-icon-delete",attrs:{id:t.row.id},on:{click:e.deleteGist}})]}}])})],1),e._v(" "),i("div",{staticClass:"page-box"},[i("button",{staticClass:"prevBtn",class:[{mouseDisabled:!this.links.hasOwnProperty("prev")},{nextBtn:!0}],attrs:{disabled:!this.links.hasOwnProperty("prev")},on:{click:e.prevPage}},[i("i",{staticClass:"el-icon-arrow-left"})]),e._v(" "),i("ul",{staticClass:"page"},e._l(e.pager,function(t,n){return i("li",{class:{active:e.selected===n},on:{click:function(t){e.currentPage(n)}}},[e._v(e._s(t.count))])})),e._v(" "),i("button",{class:[{mouseDisabled:!this.links.hasOwnProperty("next")},{nextBtn:!0}],attrs:{disabled:!this.links.hasOwnProperty("next")},on:{click:e.nextPage}},[i("i",{staticClass:"el-icon-arrow-right"})]),e._v(" "),i("span",{staticClass:"fl totalPage"},[e._v("共"+e._s(e.pageCount)+"页")]),e._v(" "),i("div",{staticClass:"jump"},[i("span",[e._v("跳至")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],attrs:{type:"text"},domProps:{value:e.currentValue},on:{input:function(t){t.target.composing||(e.currentValue=t.target.value)}}}),e._v(" "),i("span",[e._v("页")]),e._v(" "),i("button",{on:{click:function(t){e.changePage(e.currentValue)}}},[e._v("跳转")])])])],1)},staticRenderFns:[]},U=i("VU/8")(D,L,!1,function(e){i("NhnC")},"data-v-2979640d",null).exports,V=i("gRE1"),R=i.n(V),A={name:"fileEdit",props:["files","index","file","deleteItem"],components:{File:x},data:function(){return{}},methods:{deleteFile:function(e){void 0!==this.files[e].oldname&&this.deleteItem.push(this.files[e].oldname),this.files.splice(e,1)}}},G={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("File",{attrs:{file:e.file,files:e.files,index:e.index}}),e._v(" "),i("el-button",{attrs:{type:"danger",plain:"",size:"mini"},on:{click:function(t){e.deleteFile(e.index)}}},[e._v("删除文件")])],1)},staticRenderFns:[]},P={name:"Edit",components:{AddFilename:w,File:x,FileEdit:i("VU/8")(A,G,!1,function(e){i("XKl3")},"data-v-0f0979ee",null).exports},data:function(){return{form:{description:""},ps:["true","false"],selectId:this.$route.query.id,files:[],oldName:[],deleteItem:[]}},mounted:function(){var e=this;r.a.get("https://api.github.com/gists/"+this.selectId,{headers:{Authorization:"token "+localStorage.getItem("token")}}).then(function(t){e.form.description=t.data.description,e.files=R()(t.data.files),e.files.forEach(function(e){e.oldname=e.filename})}).catch()},methods:{editGist:function(){var e={};e.description=this.form.description,e.files={},this.files.forEach(function(t){void 0!==t.oldname?t.oldname!==t.filename?e.files[t.oldname]={filename:t.filename,content:t.content}:e.files[t.oldname]={content:t.content}:e.files[t.filename]={content:t.content}});var t=this;t.deleteItem.forEach(function(i){void 0===t.files.find(function(e){return e.filename===i})&&(e.files[i]=null)}),r.a.patch("https://api.github.com/gists/"+this.selectId,e,{headers:{Authorization:"token "+localStorage.getItem("token")}}).then(function(e){window.confirm("更新成功")}).catch(function(e){})}}},S={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"comWidth"},[i("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[i("el-form-item",{attrs:{label:"详情描述",prop:"description"}},[i("el-input",{attrs:{placeholder:e.form.desPlace},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"文件名称"}},[e._l(e.files,function(t,n){return i("FileEdit",{key:n,attrs:{file:t,files:e.files,index:n,deleteItem:e.deleteItem}})}),e._v(" "),i("AddFilename",{attrs:{files:e.files}})],2),e._v(" "),i("el-form-item",[i("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.editGist}},[e._v("更新内容")]),e._v(" "),i("el-button",{staticClass:"returnGist",attrs:{size:"medium"}},[i("router-link",{attrs:{to:"/read"}},[e._v("返回")])],1)],1)],1)],1)},staticRenderFns:[]},z=i("VU/8")(P,S,!1,function(e){i("W79w")},"data-v-702e3645",null).exports,H={name:"Issue",data:function(){return{lists:[]}},mounted:function(){var e=this;r.a.get(" https://api.github.com/repos/yanping90/js/issues").then(function(t){e.lists=t.data}).catch()},filters:{time:function(){return I()("YYYY-MM-DD HH:mm")}}},N={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"comWidth"},[i("ul",{staticClass:"list"},e._l(e.lists,function(t){return i("li",[i("span",{staticClass:"title"},[e._v(e._s(t.title))]),e._v(" "),i("span",{staticClass:"time"},[e._v(e._s(e._f("time")(t.created_at)))]),e._v(" "),i("span",{staticClass:"edit"},[i("router-link",{attrs:{to:"issue/edit"}},[e._v("编辑")])],1)])}))])},staticRenderFns:[]},O=i("VU/8")(H,N,!1,function(e){i("Kb+T")},"data-v-6a3681ad",null).exports,B={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",[e._v(e._s(e.list.name))])},staticRenderFns:[]},W={name:"Test",components:{Example:i("VU/8")({name:"Example",props:["list"],data:function(){return{}}},B,!1,function(e){i("2+Cx")},"data-v-562fef97",null).exports},data:function(){return{size:"12",description:"",lists:[{name:"js",id:0,content:"JavaScript 是世界上最流行的脚本语言。JavaScript 是属于 web 的语言，它适用于 PC、笔记本电脑、平板电脑和移动电话。JavaScript 被设计为向 HTML 页面增加交互性。"},{name:"css",id:1,content:"HTML 指超文本标签语言。HTML 是通向 WEB 技术世界的钥匙。在 W3School 的 HTML 教程中，您将学习如何使用 HTML 来创建站点。"},{name:"HTML 教程",id:2,content:"在本教程中，你将学习如何使用 HTML 来创建站点。HTML 很容易学习！你会喜欢它的！"}]}},methods:{addGist:function(){r.a.post("https://api.github.com/gists",{description:this.description,files:{b:{content:"b"}}},{headers:{Authorization:"token "+localStorage.getItem("token")}}).then(function(e){}).catch()},testBtn:function(e){},sizeFont:function(){this.size++}}},q={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",e._l(e.lists,function(e,t){return i("Example",{key:t,attrs:{list:e}})}))},staticRenderFns:[]},j=i("VU/8")(W,q,!1,function(e){i("AH5j")},"data-v-337983ef",null).exports,M=i("woOf"),Y=i.n(M),J=i("fZjL"),K=i.n(J),Q=i("W3Iv"),X=i.n(Q),Z={name:"Object",data:function(){return{data:""}},mounted:function(){this.data=X()({name:"lily",age:18,sex:"女"});for(var e in Array.prototype.set="",Array.prototype.get="",[1,2,3,4]);var t={a:1,b:2,c:3},i=(Y()({c:1,d:10},t),Y()({},t),[0,2,3,4,4,0,2]);for(e=0;e<i.length;e++)i.indexOf(i[e])!=i.lastIndexOf(i[e])&&i.splice(e,1)}},ee={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",[e._v("\n  "+e._s(e.data)+"\n")])},staticRenderFns:[]},te=i("VU/8")(Z,ee,!1,function(e){i("Kpr4")},"data-v-2309c6e1",null).exports,ie={name:"TabTit",props:["item","index","selected","deleteVisible","repeatable"],data:function(){return{isHnputHover:!1,note:"",editableTit:!1}},computed:{deletable:function(){return this.item.deleted&&""===this.item.filename},editable:function(){return this.item.oldname!==this.item.filename},addable:function(){return""===this.item.oldname}},watch:{repeatable:function(){this.repeatable&&this.$message.error("文件名字不能重复")}},mounted:function(){var e=this;o.$on("showEditName",function(){e.editableTit=!1})},methods:{showEditTit:function(){this.editableTit=!0,this.changeWidth()},deleteFiles:function(e){this.$set(this.item,"deleted",!0),this.$set(this.item,"filename",""),o.$emit("onDeleteFiles",e)},changeTab:function(e){this.$emit("onchangeTab",e)},onNameChanged:function(){this.editableTit=!1,this.$set(this.item,"editable",!0),o.$emit("onNameChangedHandle",{deletable:this.deletable,editable:this.editable}),o.$emit("repeatFilename",this.item.filename)},changeWidth:function(){this.$refs.inputWidth.style.width=this.$refs.widthName.clientWidth+20+"px"}}},ne={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("span",{staticClass:"tabTit",class:{hide:e.item.deleted,active:e.selected===e.index}},[i("span",{directives:[{name:"show",rawName:"v-show",value:!e.editableTit,expression:"!editableTit"}],staticClass:"fileName",on:{click:function(t){e.changeTab(e.index)},dblclick:e.showEditTit}},[e._v(e._s(e.item.filename))]),e._v(" "),i("span",{ref:"widthName",staticClass:"nameWidth"},[e._v(e._s(e.item.filename))]),e._v(" "),i("input",{directives:[{name:"show",rawName:"v-show",value:e.editableTit,expression:"editableTit"},{name:"model",rawName:"v-model",value:e.item.filename,expression:"item.filename"}],ref:"inputWidth",staticClass:"inputHover",attrs:{type:"text"},domProps:{value:e.item.filename},on:{change:e.onNameChanged,keyup:e.changeWidth,input:function(t){t.target.composing||e.$set(e.item,"filename",t.target.value)}}}),e._v(" "),i("i",{directives:[{name:"show",rawName:"v-show",value:e.deleteVisible,expression:"deleteVisible"}],staticClass:"el-icon-delete",on:{click:function(t){e.deleteFiles(e.index)}}})])},staticRenderFns:[]},se=i("VU/8")(ie,ne,!1,function(e){i("arOV")},"data-v-50bb3028",null).exports,ae={name:"File",props:["item","index"],data:function(){return{editContent:!1}},watch:{"item.content":function(){Prism.highlightAll()}},computed:{highlightedContent:function(){if(this.item.content){if(!this.item.language)return this.item.content;var e=this.item.language.toLowerCase();try{return Prism.highlight(this.item.content,Prism.languages[e],e)}catch(e){return this.item.content}}}},mounted:function(){var e=this;this.$refs.contentHeight.$el.children[0].style.border="1px solid #dcdfe6",this.item.content||(this.editContent=!0),o.$on("changeEditContent",function(){e.editContent=!1}),o.$on("changeContent",function(){e.item.content||(e.editContent=!0)}),o.$on("showFileDetail",function(){e.editContent=!1})},methods:{onEditContent:function(){this.editContent=!0,o.$emit("changeSave")},contentChanged:function(e){this.editContent=!0,this.$set(this.item,"editable",!0),o.$emit("onContentChanged",e)}}},oe={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"preContent"},[i("pre",{directives:[{name:"show",rawName:"v-show",value:!e.editContent,expression:"!editContent"}],on:{dblclick:e.onEditContent}},[e._v("      "),i("div",{staticClass:"fileContent",domProps:{innerHTML:e._s(e.highlightedContent)}}),e._v("\n    ")]),e._v(" "),i("el-input",{directives:[{name:"show",rawName:"v-show",value:e.editContent,expression:"editContent"}],ref:"contentHeight",attrs:{type:"textarea",autosize:{minRows:20},placeholder:"请输入文件内容"},on:{change:function(t){e.contentChanged(e.index)}},model:{value:e.item.content,callback:function(t){e.$set(e.item,"content",t)},expression:"item.content"}})],1)},staticRenderFns:[]},le=i("VU/8")(ae,oe,!1,function(e){i("sBd6")},"data-v-13199e10",null).exports,re={name:"Gist",components:{Load:p,TabTit:se,File:le},data:function(){return{id:this.$route.query.id,hideLoad:!1,hideDetails:!0,repeatable:!1,activeName:"",selected:0,newFileIndex:0,description:"",files:[],fileCRUD:{}}},beforeRouteUpdate:function(e,t,i){var n=this;0!==K()(this.fileCRUD).length?this.$confirm("检测到未保存的内容，是否在离开页面前保存修改？","确认信息",{distinguishCancelAndClose:!0,confirmButtonText:"保存",cancelButtonText:"放弃修改"}).then(function(){n.onUpdateItem(),n.fileCRUD={},n.id=e.query.id,n.getFiles(n.id),o.$emit("addWidth"),i()}).catch(function(t){n.$message({type:"info",message:"cancel"===t?"放弃保存并离开页面":"停留在当前页面"}),n.fileCRUD={},n.hideLoad=!1,n.id=e.query.id,n.getFiles(n.id),i()}):(this.hideLoad=!1,this.fileCRUD={},this.id=e.query.id,this.getFiles(this.id),i())},computed:{savable:function(){return this.fileCRUD.deletable||this.fileCRUD.editable||this.fileCRUD.addable},deleteVisible:function(){return this.files.filter(function(e){return!e.deleted}).length>1}},mounted:function(){var e=this;o.$on("hideGistDetails",function(){e.hideLoad=!0,e.hideDetails=!0}),o.$on("showDetails",function(){e.hideLoad=!1,e.hideDetails=!0}),this.getFiles(this.id),o.$on("onNameChangedHandle",function(t){e.fileCRUD=t}),o.$on("onContentChanged",function(){e.$set(e.fileCRUD,"editable",!0)}),o.$on("onDeleteFiles",function(t){e.$set(e.fileCRUD,"deletable",!0);for(var i=e.files,n=0;n<i.length;n++)if(void 0===i[n].deleted){e.selected=n;break}}),o.$on("defaultSelected",function(){e.selected=0}),o.$on("repeatFilename",function(t){e.files.filter(function(e){return e.filename===t}).length>1&&(e.repeatable=!0)})},methods:{getFiles:function(e){var t=this;r.a.get("https://api.github.com/gists/"+e,{headers:{Authorization:"token "+localStorage.getItem("token")}}).then(function(e){t.hideLoad=!0,t.hideDetails=!1,t.description=e.data.description,t.files=R()(e.data.files),t.files.forEach(function(e){e.oldname=e.filename}),t.activeName=t.files[0].filename}).catch()},onChangeDesc:function(){this.$set(this.fileCRUD,"editable",!0)},onChangeTabHandle:function(e){this.selected=e,o.$emit("changeContent",e)},addFile:function(){var e="file_"+this.newFileIndex++;this.files.push({filename:e,content:""}),this.selected=this.files.length-1,o.$emit("showEditContent")},onUpdateItem:function(){var e=this,t={};t.description=this.description,this.description&&0===this.description.length?alert("详情描述不能为空"):(t.files={},this.files.forEach(function(e){void 0!==e.oldname?(e.editable&&(t.files[e.oldname]={filename:e.filename,content:e.content}),e.deleted&&(t.files[e.oldname]=null)):t.files[e.filename]={content:e.content}}),r.a.patch("https://api.github.com/gists/"+this.id,t,{headers:{Authorization:"token "+localStorage.getItem("token")}}).then(function(t){e.files=R()(t.data.files),e.files.forEach(function(e){e.oldname=e.filename}),e.open(),o.$emit("updateList",{id:e.id,files:e.files,description:e.description}),o.$emit("changeEditContent"),e.fileCRUD={},e.selected=0}).catch())},open:function(){this.$message({message:"恭喜你，保存成功",type:"success"})}}},ce={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("Load",{attrs:{hideLoad:e.hideLoad}}),e._v(" "),i("div",{class:{hide:e.hideDetails}},[i("el-input",{attrs:{type:"textarea",rel:"inputWidth",autosize:""},on:{change:e.onChangeDesc},model:{value:e.description,callback:function(t){e.description=t},expression:"description"}}),e._v(" "),i("div",{staticClass:"height20"}),e._v(" "),i("div",{staticClass:"tab-tit clear"},[e._l(e.files,function(t,n){return i("TabTit",{key:n,staticClass:"fl",attrs:{item:t,index:n,selected:e.selected,deleteVisible:e.deleteVisible,repeatable:e.repeatable},on:{onchangeTab:function(t){e.onChangeTabHandle(n)}}})}),e._v(" "),i("span",{staticClass:"gistAdd fl"},[i("i",{staticClass:"el-icon-circle-plus-outline",on:{click:e.addFile}})])],2),e._v(" "),e._l(e.files,function(t,n){return i("File",{directives:[{name:"show",rawName:"v-show",value:e.selected===n,expression:"selected === index"}],key:n,attrs:{item:t,index:n}})}),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.savable,expression:"savable"}],staticClass:"btn"},[i("el-button",{attrs:{type:"primary",size:"medium",disabled:!e.savable},on:{click:e.onUpdateItem}},[e._v("\n          保存\n        ")])],1)],2)],1)},staticRenderFns:[]},de=i("VU/8")(re,ce,!1,function(e){i("8a74")},"data-v-4b429cd6",null).exports,ue={name:"ListItem",props:["item","index"],data:function(){return{current:0,hideDeleteIcon:!0}},mounted:function(){o.$on("defaultTab",function(e){})},methods:{changeCurrent:function(e){this.$emit("changeCurrent",e),o.$emit("defaultSelected"),o.$emit("showGistDetails"),o.$emit("showEditName"),o.$emit("showFileDetail")},deleteCurrentGist:function(e){var t=this;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){r.a.delete("https://api.github.com/gists/"+e,{headers:{Authorization:"token "+localStorage.getItem("token")}}).then(function(i){t.$message({type:"success",message:"删除成功!"}),o.$emit("deletePageGist",e)}).catch()}).catch(function(){t.$message({type:"info",message:"已取消删除"})})}}},fe={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("li",{on:{click:function(t){e.changeCurrent(e.index)}}},[i("router-link",{attrs:{to:{path:"/gists/gist",query:{id:e.item.id}}}},[i("span",{staticClass:"item-desc"},[e._v(e._s(e.item.description)+" ")])]),e._v(" "),i("span",{staticClass:"item-lock",class:{hide:e.item.public}},[i("i",{staticClass:"el-icon-bell"})]),e._v(" "),i("span",{staticClass:"item-delete fr",on:{click:function(t){e.deleteCurrentGist(e.item.id)}}},[i("i",{staticClass:"el-icon-delete"})])],1)},staticRenderFns:[]},he={name:"List",components:{ListItem:i("VU/8")(ue,fe,!1,function(e){i("qeaP")},null,null).exports},data:function(){return{list:[],tabs:[],fileNumber:"",current:"",links:{},pageSize:0,total:0}},mounted:function(){this.$refs.navHeight.style.height=screen.availHeight-220+"px",this.pageSize=15,this.getCurrentPage("https://api.github.com/gists?page=1&per_page="+this.pageSize,function(){var e=this;if(this.links.hasOwnProperty("last")){var t=this.links.last.match(/.+page=(\d+)&.+/);this.total=this.pageSize*parseInt(t[1])}o.$on("deletePageGist",function(t){e.list=e.list.filter(function(e){return e.id!==t})}),o.$on("updateList",function(t){e.list.forEach(function(e){e.id===t.id&&(e.description=t.description,e.files=t.files)})}),o.$on("addListGist",function(t){e.list.unshift({id:t.id,description:t.description,public:t.public})})})},methods:{getCurrentPage:function(e,t){var i=this;r.a.get(e,{headers:{Authorization:"token "+localStorage.getItem("token")}}).then(function(e){i.list=e.data;var n=i,s=e.headers.link;s?s.split(",").forEach(function(e){var t=e.match(/<(.+)>; rel="(.+)"/);n.$set(n.links,t[2],t[1])}):i.pageSize=i.list.length,"function"==typeof t&&t.call(n)}).catch()},handleCurrentChange:function(e){this.current="",o.$emit("hideGistDetails");var t="https://api.github.com/gists?page=num&per_page="+this.pageSize;this.getCurrentPage(t.replace(/num/,e))},onChangeCurrent:function(e){this.current=e,o.$emit("showDetails")}}},me={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("ul",{ref:"navHeight",staticClass:"nav"},e._l(e.list,function(t,n){return i("ListItem",{tag:"li",class:{active:e.current===n},attrs:{item:t,index:n},on:{changeCurrent:e.onChangeCurrent}})})),e._v(" "),i("div",{staticClass:"pager"},[i("el-pagination",{ref:"pages",attrs:{layout:"prev,pager,next","page-size":e.pageSize,total:e.total},on:{"current-change":e.handleCurrentChange}})],1)])},staticRenderFns:[]},pe=i("VU/8")(he,me,!1,function(e){i("99n4")},null,null).exports,ve={name:"Gists",components:{List:pe},data:function(){return{hideGreet:!1}},mounted:function(){var e=this;o.$on("showGistDetails",function(){e.hideGreet=!0}),o.$on("hideGistDetails",function(){e.hideGreet=!1})}},ge={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"full"},[i("div",{staticClass:"nav-box"},[i("List")],1),e._v(" "),i("div",{class:{greet:!0,hide:e.hideGreet}},[e._v("\n    想要看Gist详情，请点击左侧Gist标题\n  ")]),e._v(" "),i("div",{staticClass:"tab-box"},[i("router-view")],1)])},staticRenderFns:[]},be=i("VU/8")(ve,ge,!1,function(e){i("WgHX")},"data-v-3fdcd0ad",null).exports,_e={name:"AddGist",components:{TabTit:se,File:le},data:function(){return{files:[],description:"",note:"",selected:0,current:0,radioIndex:"1",newFileIndex:2,repeatable:!1,disabled:!1,addable:!0}},computed:{hideDeleteIcon:function(){return this.files&&1===this.files.length},deleteVisible:function(){return this.files.filter(function(e){return!e.deleted}).length>1}},mounted:function(){var e=this;o.$on("hideGistDetails",function(){e.hideLoad=!0,e.hideDetails=!0}),this.files.push({filename:"file_1",content:""}),o.$on("repeatFilename",function(t){e.files.filter(function(e){return e.filename===t}).length>1&&(e.repeatable=!0)}),o.$on("onDeleteFiles",function(t){for(var i=e.files,n=0;n<i.length;n++)if(void 0===i[n].deleted){e.selected=n;break}})},methods:{addFile:function(){this.addable=!0;var e="file_"+this.newFileIndex++;this.files.push({filename:e,content:""}),this.selected=this.files.length-1},onChangeTabHandle:function(e){this.selected=e},onChangeTab:function(e){this.selected=e},deleteFile:function(e){e>0&&this.files.splice(e,1)},changeDesc:function(){""!==this.description?this.note="":this.note="详情描述不能为空"},saveGist:function(){var e=this;if(""!==this.description){this.note="";var t={};"1"===this.radioIndex?t.public=!0:t.public=!1,t.description=this.description,t.files={},this.files.filter(function(e){return!e.deleted}).forEach(function(e){t.files[e.filename]={content:e.content}}),d.post("/gists",t).then(function(t){e.selected=0,e.addable=!1,o.$emit("changeEditContent"),o.$emit("addListGist",{id:t.data.id,description:t.data.description,public:t.data.public}),e.open(),e.$router.push({path:"/gists/gist",query:{id:t.data.id}})}).catch()}else this.note="详情描述不能为空"},open:function(){this.$message({message:"恭喜你，添加成功",type:"success"})}}},Ce={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"addForm"},[i("div",[i("el-input",{attrs:{type:"textarea",placeholder:"请输入详情描述",autosize:""},on:{change:e.changeDesc},model:{value:e.description,callback:function(t){e.description=t},expression:"description"}}),e._v(" "),i("span",[e._v(e._s(e.note))])],1),e._v(" "),i("div",{staticClass:"height20"}),e._v(" "),i("el-radio",{attrs:{label:"1"},model:{value:e.radioIndex,callback:function(t){e.radioIndex=t},expression:"radioIndex"}},[e._v("public")]),e._v(" "),i("el-radio",{attrs:{label:"2"},model:{value:e.radioIndex,callback:function(t){e.radioIndex=t},expression:"radioIndex"}},[e._v("secret")]),e._v(" "),i("div",{staticClass:"height20"}),e._v(" "),i("div",{staticClass:"tab-tit clear"},[e._l(e.files,function(t,n){return i("TabTit",{key:n,staticClass:"fl",attrs:{item:t,index:n,selected:e.selected,deleteVisible:e.deleteVisible,repeatable:e.repeatable},on:{onchangeTab:function(t){e.onChangeTabHandle(n)}}})}),e._v(" "),i("span",{staticClass:"gistAdd fl"},[i("i",{staticClass:"el-icon-circle-plus-outline",on:{click:e.addFile}})])],2),e._v(" "),e._l(e.files,function(t,n){return i("File",{directives:[{name:"show",rawName:"v-show",value:e.selected===n,expression:"selected === index"}],key:n,attrs:{item:t,index:n}})}),e._v(" "),i("div",{staticClass:"line20"}),e._v(" "),i("div",{staticClass:"btn"},[i("el-button",{directives:[{name:"show",rawName:"v-show",value:e.addable,expression:"addable"}],attrs:{type:"primary",size:"medium",disabled:e.disabled},on:{click:e.saveGist}},[e._v("保存\n    ")])],1)],2)},staticRenderFns:[]},ke=i("VU/8")(_e,Ce,!1,function(e){i("QyAt")},"data-v-45fb0744",null).exports,xe=i("OEdS"),$e=i.n(xe);i("0BLv"),n.default.use($e.a),n.default.use(_.a),n.default.use(C.a);var we=new _.a({routes:[{path:"/gists",name:"Gists",component:be,children:[{path:"gist",name:"Gist",component:de},{path:"addGist",name:"AddGist",component:ke}]},{path:"/list",name:"List",component:pe},{path:"/object",name:"Object",component:te},{path:"/test",name:"Test",component:j},{path:"/issue",name:"Issue",component:O},{path:"/read",name:"Read",component:U},{path:"/edit",name:"Edit",component:z},{path:"/add",name:"Add",component:T}]}),ye=i("zL8q");i("tvR6"),n.default.prototype.$ELEMENT={size:"small",zIndex:3e3},n.default.use(ye.Button),n.default.use(ye.Input),n.default.use(ye.Select),n.default.use(ye.Option),n.default.use(ye.OptionGroup),n.default.use(ye.Radio),n.default.use(ye.Table),n.default.use(ye.TableColumn),n.default.use(ye.Row),n.default.use(ye.Col),n.default.use(ye.Form),n.default.use(ye.FormItem),n.default.use(ye.Pagination),n.default.use(ye.Tabs),n.default.use(ye.TabPane),n.default.prototype.$confirm=ye.MessageBox.confirm,n.default.prototype.$message=ye.Message,n.default.config.productionTip=!1,new n.default({el:"#app",router:we,components:{App:b},template:"<App/>",mounted:function(){}})},NhnC:function(e,t){},QyAt:function(e,t){},W79w:function(e,t){},WgHX:function(e,t){},XKl3:function(e,t){},arOV:function(e,t){},"bo/E":function(e,t){},jqWA:function(e,t){},"nH/J":function(e,t){},qeaP:function(e,t){},sBd6:function(e,t){},tBDR:function(e,t){},tvR6:function(e,t){}},["NHnr"]);