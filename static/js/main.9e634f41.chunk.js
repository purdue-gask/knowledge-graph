(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{225:function(t,e,n){t.exports=n(374)},237:function(t,e,n){},238:function(t,e,n){},362:function(t,e,n){},374:function(t,e,n){"use strict";n.r(e);var a={};n.r(a),n.d(a,"init",function(){return Bt}),n.d(a,"clearCacheButtonClicked",function(){return Qt});var c={};n.r(c),n.d(c,"handleMenuListOpen",function(){return Me}),n.d(c,"setCurrentItem",function(){return Se});var o,r=n(0),i=n.n(r),u=n(27),s=n.n(u),l=n(36),d=(n(237),n(5)),b=n(37),j=n(30),O=n(39),p=n(38),m=n(40),f=(n(238),n(3)),h=n(28),v=n(71),w=n.n(v),C=n(72),I=n.n(C),Z=n(62),y=n.n(Z),k=n(45),N=n.n(k),g=n(53),R=n.n(g),W=n(32),V=n(151),_=n.n(V);function T(){var t=Object(d.a)(["MenuList.handleMenuListOpen"]);return T=function(){return t},t}function G(){var t=Object(d.a)(["Connections.clearConnection"]);return G=function(){return t},t}function M(){var t=Object(d.a)(["MenuList.setCurrentItem"]);return M=function(){return t},t}function S(){var t=Object(d.a)(["MenuList.open"]);return S=function(){return t},t}function Y(){var t=Object(d.a)(["MenuList.current"]);return Y=function(){return t},t}function L(){var t=Object(d.a)(["MenuList.records"]);return L=function(){return t},t}var E=function(t){function e(){var t,n;Object(b.a)(this,e);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(O.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(c)))).handleClose=function(){o=null},n.handleMenuList=function(t){o=t.currentTarget},n}return Object(m.a)(e,t),Object(j.a)(e,[{key:"render",value:function(){var t=this,e=this.props.classes;return o=this.props.open?o:null,i.a.createElement("div",null,i.a.createElement(R.a,{key:7,color:"inherit","aria-label":"simple-menu-button",id:"simple-menu-button","aria-owns":"simple-menu","aria-haspopup":"true",onClick:function(e){t.handleMenuList(e),t.props.handleMenuListOpen({})},className:e.menuButton,disabled:"none"===this.props.connection_id||this.props.fieldsEditing||this.props.emptyDataSet},i.a.createElement(_.a,null)),this.props.open?i.a.createElement(W.d,{id:"simple-menu",open:this.props.open,onClose:this.props.handleMenuListOpen,anchorEl:o},i.a.createElement(W.e,{onClick:function(){t.props.handleMenuListOpen({}),t.props.handleMenuListOpen({})}},"Add User"),i.a.createElement(W.e,{onClick:function(){t.props.handleMenuListOpen({}),t.props.handleMenuListOpen({})}},"Reset Cache"),i.a.createElement(W.e,{onClick:function(){t.props.handleMenuListOpen({}),t.props.handleMenuListOpen({})}},"Reset Demo"),i.a.createElement(W.e,{onClick:function(){t.props.handleMenuListOpen({}),t.props.handleMenuListOpen({})}},"Logout")):null)}}]),e}(i.a.Component),H=Object(l.connect)({menuItems:Object(f.state)(L()),current:Object(f.state)(Y()),open:Object(f.state)(S()),setCurrentItem:Object(f.signal)(M()),clearConnection:Object(f.signal)(G()),handleMenuListOpen:Object(f.signal)(T())},Object(h.withStyles)(function(t){return{menuButton:{marginLeft:2,marginRight:2}}},{withTheme:!0})(E));function x(){var t=Object(d.a)(["MenuList.handleMenuListOpen"]);return x=function(){return t},t}function X(){var t=Object(d.a)(["Menu.connectionsClicked"]);return X=function(){return t},t}var J=function(t){function e(){return Object(b.a)(this,e),Object(O.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(j.a)(e,[{key:"render",value:function(){var t=this,e=this.props.classes;return i.a.createElement("div",{className:e.root},i.a.createElement(w.a,{position:"static"},i.a.createElement(I.a,null,i.a.createElement(R.a,{className:e.menuButton,color:"inherit","aria-label":"Menu"}),i.a.createElement(y.a,{variant:"h6",color:"inherit",className:e.grow},"Knowledge Graph App"),i.a.createElement(N.a,{key:2,color:"inherit","aria-label":"open drawer",onClick:function(){return t.props.connectionsClicked({})},className:e.menuButton,disabled:!1},"Connect"),i.a.createElement(H,null))))}}]),e}(i.a.Component),z=Object(l.connect)({connectionsClicked:Object(f.signal)(X()),handleMenuListOpen:Object(f.signal)(x())},Object(h.withStyles)({root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20}},{withTheme:!0})(J)),D=n(379),U=n(380),F=n(378),A=n(381),q=(n(362),function(t){function e(){return Object(b.a)(this,e),Object(O.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(j.a)(e,[{key:"render",value:function(){return i.a.createElement(D.a,{center:[40.428593,-86.913776],zoom:15,maxZoom:40,attributionControl:!0,zoomControl:!0,doubleClickZoom:!0,scrollWheelZoom:!0,dragging:!0,animate:!0,easeLinearity:.35},i.a.createElement(U.a,{url:"http://{s}.tile.osm.org/{z}/{x}/{y}.png"}),i.a.createElement(F.a,{position:[40.428593,-86.913776]},i.a.createElement(A.a,null,"Popup for any custom information.")))}}]),e}(i.a.Component)),B=n(73),Q=n.n(B);function P(){var t=Object(d.a)(["Connections.oadaFieldsDomainChanged"]);return P=function(){return t},t}function K(){var t=Object(d.a)(["Connections.oadaDomainChanged"]);return K=function(){return t},t}function $(){var t=Object(d.a)(["Connections.cancelClicked"]);return $=function(){return t},t}function tt(){var t=Object(d.a)(["Connections.submitClicked"]);return tt=function(){return t},t}function et(){var t=Object(d.a)(["Connections.show"]);return et=function(){return t},t}function nt(){var t=Object(d.a)(["Connections.oada_fields_domain_text"]);return nt=function(){return t},t}function at(){var t=Object(d.a)(["Connections.oada_domain_text"]);return at=function(){return t},t}var ct=Object(l.connect)({oadaDomainText:Object(f.state)(at()),oadaFieldsDomainText:Object(f.state)(nt()),show:Object(f.state)(et()),submitClicked:Object(f.signal)(tt()),cancelClicked:Object(f.signal)($()),oadaDomainChanged:Object(f.signal)(K()),oadaFieldsDomainChanged:Object(f.signal)(P())},function(t){function e(){return Object(b.a)(this,e),Object(O.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(j.a)(e,[{key:"render",value:function(){var t=this;return i.a.createElement(Q.a,{open:this.props.show,className:"connections-dialog"},i.a.createElement(W.c,{id:"alert-dialog-title"},"Data Source [0.1.0]"," "),i.a.createElement(W.b,null,"At what OADA domain is your data stored?"),i.a.createElement(W.b,null,i.a.createElement("div",null,i.a.createElement(W.f,{label:"Domain",value:this.props.oadaDomainText,onChange:function(e){return t.props.oadaDomainChanged({value:e.target.value})},style:{width:250}}))),i.a.createElement(W.a,null,i.a.createElement(N.a,{onClick:function(){t.props.cancelClicked({})},color:"secondary"},"Cancel"),i.a.createElement(N.a,{onClick:function(){t.props.submitClicked({})},color:"secondary",autoFocus:!0},"Submit")))}}]),e}(i.a.Component));function ot(){var t=Object(d.a)(["App.init"]);return ot=function(){return t},t}var rt=function(t){function e(){return Object(b.a)(this,e),Object(O.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(j.a)(e,[{key:"componentWillMount",value:function(){this.props.init({})}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(z,null),i.a.createElement(ct,null),i.a.createElement(q,null))}}]),e}(r.Component),it=Object(l.connect)({init:Object(f.signal)(ot())},rt);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ut=n(15),st={appName:"Knowledge Graph",contentType:"application/vnd.oada.yield.1+json",bookmarksTwitter:"/bookmarks/twitter",model:{tags:{}},is_mobile:!1,emptyDataSet:!1,settings:{},view:{editing:!1,settings:{}}},lt=n(152),dt=n.n(lt),bt=n(42),jt=n.n(bt),Ot=n(10),pt=n(80),mt=n.n(pt);function ft(){var t=Object(d.a)(["type"]);return ft=function(){return t},t}function ht(){var t=Object(d.a)(["twitter.loading"]);return ht=function(){return t},t}function vt(){var t=Object(d.a)(["twitter.loading"]);return vt=function(){return t},t}function wt(){var t=Object(d.a)(["connection_id"]);return wt=function(){return t},t}function Ct(){var t=Object(d.a)(["twitter.connection_id"]);return Ct=function(){return t},t}function It(){var t=Object(d.a)(["type"]);return It=function(){return t},t}function Zt(){var t=Object(d.a)(["twitter.loading"]);return Zt=function(){return t},t}function yt(){var t=Object(d.a)(["twitter.loading"]);return yt=function(){return t},t}function kt(){var t=Object(d.a)(["connection_id"]);return kt=function(){return t},t}function Nt(){var t=Object(d.a)(["connections.twitter.connection_id"]);return Nt=function(){return t},t}function gt(){var t=Object(d.a)(["connection_id"]);return gt=function(){return t},t}function Rt(){var t=Object(d.a)(["Connections.connection_id"]);return Rt=function(){return t},t}function Wt(){var t=Object(d.a)(["connection_id"]);return Wt=function(){return t},t}function Vt(){var t=Object(d.a)(["twitter.connection_id"]);return Vt=function(){return t},t}function _t(){var t=Object(d.a)(["Connections.connection_id"]);return _t=function(){return t},t}function Tt(){var t=Object(d.a)(["App.emptyDataSet"]);return Tt=function(){return t},t}function Gt(){var t=Object(d.a)(["App.emptyDataSet"]);return Gt=function(){return t},t}function Mt(){var t=Object(d.a)(["connection_id"]);return Mt=function(){return t},t}function St(){var t=Object(d.a)(["oada.",".bookmarks.twitter"]);return St=function(){return t},t}function Yt(){var t=Object(d.a)(["App.emptyDataSet"]);return Yt=function(){return t},t}function Lt(){var t=Object(d.a)(["App.emptyDataSet"]);return Lt=function(){return t},t}function Et(){var t=Object(d.a)(["connection_id"]);return Et=function(){return t},t}function Ht(){var t=Object(d.a)(["oada.",".bookmarks.twitter"]);return Ht=function(){return t},t}var xt="/bookmarks/twitter",Xt={bookmarks:{_type:"application/vnd.oada.bookmarks.1+json",_rev:"0-0",twitter:{_type:"application/vnd.oada.yield.1+json",_rev:"0-0","*":{_type:"application/vnd.oada.yield.1+json",_rev:"0-0"}}}},Jt=Object(ut.sequence)("twitter.fetch",[function(t){var e=t.state;t.props;return{connection_id:e.get("twitter.connection_id"),path:xt,tree:Xt,watch:{signals:["twitter.handleWatchUpdate"]}}},function(t){return{requests:[{connection_id:t.state.get("twitter.connection_id"),path:xt,tree:Xt,watch:{signals:["twitter.handleWatchUpdate"]}}]}},jt.a.get,Object(Ot.c)(Object(f.state)(Ht(),Object(f.props)(Et()))),{true:Object(ut.sequence)("fetchTwitterSuccess",[Ft,Object(Ot.a)(Object(f.state)(Lt()),!1)]),false:Object(ut.sequence)("fetchTwitterEmptySet",[function(){return console.log("--\x3e Twitter empty set")},Object(Ot.a)(Object(f.state)(Yt()),!0)])}]);var zt=Object(ut.sequence)("twitter.fetchNoWatch",[function(t){var e=t.state;t.props;return{connection_id:e.get("twitter.connection_id"),path:xt,tree:Xt}},Object(Ot.c)(Object(f.state)(St(),Object(f.props)(Mt()))),{true:Object(ut.sequence)("fetchTwitterSuccess",[Ft,Object(Ot.a)(Object(f.state)(Gt()),!1)]),false:Object(ut.sequence)("fetchTwitterEmptySetNoWatch",[function(){return console.log("--\x3e Twitter empty set no watch")},Object(Ot.a)(Object(f.state)(Tt()),!0)])}]),Dt=Object(ut.sequence)("twitter.init",[Object(Ot.c)(Object(f.state)(_t())),{true:[jt.a.connect],false:[jt.a.connect,Object(Ot.a)(Object(f.state)(Vt()),Object(f.props)(Wt())),Object(Ot.a)(Object(f.state)(Rt()),Object(f.props)(gt())),Object(Ot.a)(Object(f.state)(Nt()),Object(f.props)(kt()))]},Object(Ot.a)(Object(f.state)(yt()),!0),Jt,Object(Ot.a)(Object(f.state)(Zt()),!1),Object(Ot.a)(Object(f.props)(It()),"twitter")]),Ut=Object(ut.sequence)("twitter.refresh",[Object(Ot.a)(Object(f.state)(Ct()),Object(f.props)(wt())),Object(Ot.a)(Object(f.state)(vt()),!0),zt,Object(Ot.a)(Object(f.state)(ht()),!1),Object(Ot.a)(Object(f.props)(ft()),"twitter")]);Object(ut.sequence)("twitter.handleWatchUpdate",[function(){console.log("--\x3etwitter.handleWatchUpdate")},Ut]);function Ft(t){t.props;var e=t.state,n=e.get("twitter.connection_id"),a=e.get("oada."+n+".bookmarks.twitter");if(a)return mt.a.map(Object.keys(a||{}),function(t){if("_"!==t[0]&&"twitter"!==t)return e.set("twitter.records.".concat(t),a[t]),void console.log("twitt record -> ",a[t])}).then(function(){})}function At(){var t=Object(d.a)(["Connections.connection_id"]);return At=function(){return t},t}var qt={redirect:"https://openatk.com/GASK/oauth2/redirect.html",metadata:"eyJqa3UiOiJodHRwczovL2lkZW50aXR5Lm9hZGEtZGV2LmNvbS9jZXJ0cyIsImtpZCI6ImtqY1NjamMzMmR3SlhYTEpEczNyMTI0c2ExIiwidHlwIjoiSldUIiwiYWxnIjoiUlMyNTYifQ.eyJyZWRpcmVjdF91cmlzIjpbImh0dHA6Ly9vcGVuYXRrLmNvbS9GaWVsZFdvcmtBcHAvb2F1dGgyL3JlZGlyZWN0Lmh0bWwiLCJodHRwOi8vbG9jYWxob3N0L29hdXRoMi9yZWRpcmVjdC5odG1sIl0sInRva2VuX2VuZHBvaW50X2F1dGhfbWV0aG9kIjoidXJuOmlldGY6cGFyYW1zOm9hdXRoOmNsaWVudC1hc3NlcnRpb24tdHlwZTpqd3QtYmVhcmVyIiwiZ3JhbnRfdHlwZXMiOlsiYXV0aG9yaXphdGlvbl9jb2RlIl0sInJlc3BvbnNlX3R5cGVzIjpbInRva2VuIiwiY29kZSIsImlkX3Rva2VuIiwiaWRfdG9rZW4gdG9rZW4iLCJjb2RlIGlkX3Rva2VuIiwiY29kZSB0b2tlbiIsImNvZGUgaWRfdG9rZW4gdG9rZW4iXSwiY2xpZW50X25hbWUiOiJPcGVuQVRLIiwiY2xpZW50X3VyaSI6Imh0dHA6Ly9vcGVuYXRrLmNvbSIsImNvbnRhY3RzIjpbIlNhbSBOb2VsIDxzYW5vZWxAcHVyZHVlLmVkdT4iXSwiandrcyI6eyJrZXlzIjpbeyJrdHkiOiJSU0EiLCJuIjoiemF1WkZCdU1kbHYxa1lqelViNHEtXzNtNHNtRnhuZnc0U1lvYUhxN2NpOFNjdFkzeGo3cmRBSHlrUXBuUVZyajZLTzhtYUh2LTBCdlc1TWhjZ2l2a3VZcy16SEV2ZllCZVZCbmN2SGdPa0pQYmM5MUN3X2l3T1k3RUhXQjhoTTdWaUxRVmNfRHYwaDhuSnliQnZoTDA0Q0hRdDdDcE10VllHNmZvSlhjM2RxNTJqTlFiQkhJWjVtN1Z6MUt0eXpvTGNwOE8ybWhhTHA0NVVyM0NfMWVHdHY4bjVOejliV19CaDVYRlliRHh2N0JuaFpOSXcxR0NiampBd210Ym5uTDdHZ2Y0Q3k2MHdSSG1SNHZvZTIxT0lqb0FTcTJqWjAzeDEybVhzN0hQSTNZQjR5Mjl3dlpNdzJnTHpPZFRvcnJxTy10bG1uMWJvUGtXS0pKU1hvQXZ3IiwiZSI6IkFRQUIifV19LCJzb2Z0d2FyZV9pZCI6ImE3MDNiZmRjLTNmYTEtNDk5Zi1iOTA1LTExZjBiNTRmMzgwNyIsInJlZ2lzdHJhdGlvbl9wcm92aWRlciI6Imh0dHBzOi8vaWRlbnRpdHkub2FkYS1kZXYuY29tIiwiaWF0IjoxNTMzODQ2MTEyfQ.Y9BlbqHzOvufADGAW9HG4Yx2rqbg6zPalpcjSS_97Mpg36lOuADGJ4YTQ2iQfRlZjzqBi1sUq3iFhReBfk89Oy2nSEY6RVPnONK5v6a73jce3xGPUWk8DDl3rf3lcrt-IqWFoAieUie7WK5nrPFIe-_xcgYdChnuGrugjO9dGOY",scope:"oada.yield:all"},Bt=Object(ut.sequence)("App.init",[function(t){var e=t.state,n=new dt.a(window.navigator.userAgent);e.set("App.is_mobile",null!==n.mobile())},Object(Ot.c)(Object(f.state)(At())),{true:Object(ut.sequence)("autoInitSuccess",[function(t){var e=t.state;return{domain:e.get("Connections.oada_domain"),options:qt,token:"def",connection_id:e.get("twitter.connection_id")}},Dt]),false:[]}]);var Qt=[function(t){var e=t.state;t.props;return{connection_id:e.get("twitter.connection_id")}},bt.resetCache,Bt];var Pt=Object(ut.Module)({state:st,signals:a});function Kt(){var t=Object(d.a)(["Connections.show"]);return Kt=function(){return t},t}function $t(){var t=Object(d.a)(["Connections.oada_domain"]);return $t=function(){return t},t}function te(){var t=Object(d.a)(["Connections.oada_fields_domain"]);return te=function(){return t},t}function ee(){var t=Object(d.a)(["Connections.oada_domain"]);return ee=function(){return t},t}function ne(){var t=Object(d.a)(["Connections.oada_domain"]);return ne=function(){return t},t}function ae(){var t=Object(d.a)(["Connections.show"]);return ae=function(){return t},t}function ce(){var t=Object(d.a)(["Connections.oada_domain"]);return ce=function(){return t},t}function oe(){var t=Object(d.a)(["domain"]);return oe=function(){return t},t}function re(){var t=Object(d.a)(["Connections.oada_domain"]);return re=function(){return t},t}function ie(){var t=Object(d.a)(["domain"]);return ie=function(){return t},t}function ue(){var t=Object(d.a)(["Connections.oada_domain_text"]);return ue=function(){return t},t}function se(){var t=Object(d.a)(["Connections.oada_domain"]);return se=function(){return t},t}function le(){var t=Object(d.a)(["Connections.show"]);return le=function(){return t},t}function de(){var t=Object(d.a)(["Connections.show"]);return de=function(){return t},t}function be(){var t=Object(d.a)(["Connections.show"]);return be=function(){return t},t}function je(){var t=Object(d.a)(["Connections.oada_domain"]);return je=function(){return t},t}function Oe(){var t=Object(d.a)(["domain"]);return Oe=function(){return t},t}function pe(){var t=Object(d.a)(["value"]);return pe=function(){return t},t}function me(){var t=Object(d.a)(["Connections.oada_fields_domain_text"]);return me=function(){return t},t}function fe(){var t=Object(d.a)(["value"]);return fe=function(){return t},t}function he(){var t=Object(d.a)(["Connections.oada_domain_text"]);return he=function(){return t},t}function ve(){var t=Object(d.a)(["Connections.oada_fields_domain_text"]);return ve=function(){return t},t}function we(){var t=Object(d.a)(["Connections.oada_domain_text"]);return we=function(){return t},t}function Ce(){var t=Object(d.a)(["Connections.oada_fields_domain"]);return Ce=function(){return t},t}function Ie(){var t=Object(d.a)(["Connections.oada_domain"]);return Ie=function(){return t},t}function Ze(){var t=Object(d.a)(["Connections.oada_token"]);return Ze=function(){return t},t}var ye={redirect:"http://openatk.com/FieldWorkApp/oauth2/redirect.html",metadata:"eyJqa3UiOiJodHRwczovL2lkZW50aXR5Lm9hZGEtZGV2LmNvbS9jZXJ0cyIsImtpZCI6ImtqY1NjamMzMmR3SlhYTEpEczNyMTI0c2ExIiwidHlwIjoiSldUIiwiYWxnIjoiUlMyNTYifQ.eyJyZWRpcmVjdF91cmlzIjpbImh0dHA6Ly9vcGVuYXRrLmNvbS9GaWVsZFdvcmtBcHAvb2F1dGgyL3JlZGlyZWN0Lmh0bWwiLCJodHRwOi8vbG9jYWxob3N0L29hdXRoMi9yZWRpcmVjdC5odG1sIl0sInRva2VuX2VuZHBvaW50X2F1dGhfbWV0aG9kIjoidXJuOmlldGY6cGFyYW1zOm9hdXRoOmNsaWVudC1hc3NlcnRpb24tdHlwZTpqd3QtYmVhcmVyIiwiZ3JhbnRfdHlwZXMiOlsiYXV0aG9yaXphdGlvbl9jb2RlIl0sInJlc3BvbnNlX3R5cGVzIjpbInRva2VuIiwiY29kZSIsImlkX3Rva2VuIiwiaWRfdG9rZW4gdG9rZW4iLCJjb2RlIGlkX3Rva2VuIiwiY29kZSB0b2tlbiIsImNvZGUgaWRfdG9rZW4gdG9rZW4iXSwiY2xpZW50X25hbWUiOiJPcGVuQVRLIiwiY2xpZW50X3VyaSI6Imh0dHA6Ly9vcGVuYXRrLmNvbSIsImNvbnRhY3RzIjpbIlNhbSBOb2VsIDxzYW5vZWxAcHVyZHVlLmVkdT4iXSwiandrcyI6eyJrZXlzIjpbeyJrdHkiOiJSU0EiLCJuIjoiemF1WkZCdU1kbHYxa1lqelViNHEtXzNtNHNtRnhuZnc0U1lvYUhxN2NpOFNjdFkzeGo3cmRBSHlrUXBuUVZyajZLTzhtYUh2LTBCdlc1TWhjZ2l2a3VZcy16SEV2ZllCZVZCbmN2SGdPa0pQYmM5MUN3X2l3T1k3RUhXQjhoTTdWaUxRVmNfRHYwaDhuSnliQnZoTDA0Q0hRdDdDcE10VllHNmZvSlhjM2RxNTJqTlFiQkhJWjVtN1Z6MUt0eXpvTGNwOE8ybWhhTHA0NVVyM0NfMWVHdHY4bjVOejliV19CaDVYRlliRHh2N0JuaFpOSXcxR0NiampBd210Ym5uTDdHZ2Y0Q3k2MHdSSG1SNHZvZTIxT0lqb0FTcTJqWjAzeDEybVhzN0hQSTNZQjR5Mjl3dlpNdzJnTHpPZFRvcnJxTy10bG1uMWJvUGtXS0pKU1hvQXZ3IiwiZSI6IkFRQUIifV19LCJzb2Z0d2FyZV9pZCI6ImE3MDNiZmRjLTNmYTEtNDk5Zi1iOTA1LTExZjBiNTRmMzgwNyIsInJlZ2lzdHJhdGlvbl9wcm92aWRlciI6Imh0dHBzOi8vaWRlbnRpdHkub2FkYS1kZXYuY29tIiwiaWF0IjoxNTMzODQ2MTEyfQ.Y9BlbqHzOvufADGAW9HG4Yx2rqbg6zPalpcjSS_97Mpg36lOuADGJ4YTQ2iQfRlZjzqBi1sUq3iFhReBfk89Oy2nSEY6RVPnONK5v6a73jce3xGPUWk8DDl3rf3lcrt-IqWFoAieUie7WK5nrPFIe-_xcgYdChnuGrugjO9dGOY",scope:"oada.yield:all"},ke=(Object(Ot.a)(Object(f.state)(Ze()),""),Object(Ot.a)(Object(f.state)(Ie()),""),Object(Ot.a)(Object(f.state)(Ce()),""),Object(Ot.a)(Object(f.state)(we()),""),Object(Ot.a)(Object(f.state)(ve()),""),[Object(Ot.a)(Object(f.state)(he()),Object(f.props)(fe()))]),Ne=(Object(Ot.a)(Object(f.state)(me()),Object(f.props)(pe())),[Object(Ot.a)(Object(f.props)(Oe()),Object(f.state)(je())),jt.a.resetCache,function(t){var e=t.state,n=(t.props,e.get("operations.connection_id"));e.unset("oada.connections"),e.unset("oada."+n)},Object(Ot.a)(Object(f.state)(be()),!0)]),ge=[Object(Ot.a)(Object(f.state)(de()),!1),function(t){var e=t.state;return{domain:e.get("Connections.oada_domain"),options:ye,token:"def",connection_id:e.get("operations.connection_id")}}],Re=[Object(Ot.a)(Object(f.state)(le()),!1),Object(Ot.a)(Object(f.state)(se()),Object(f.state)(ue())),Object(Ot.a)(Object(f.props)(ie()),Object(f.state)(re())),jt.a.resetCache,ge,Object(Ot.a)(Object(f.props)(oe()),Object(f.state)(ce()))],We=[Object(Ot.a)(Object(f.state)(ae()),!1),Object(Ot.a)(Object(f.state)(ne()),Object(f.state)(ee())),Object(Ot.a)(Object(f.state)(te()),Object(f.state)($t()))],Ve=[Object(Ot.a)(Object(f.state)(Kt()),!0)];var _e=Object(ut.Module)({state:{open:!1},signals:{connectionsClicked:Ve}}),Te={open:!1,current:"Item 1",records:{"item 1":{label:"Item 1"},"item 2":{label:"Item 2"},"item 3":{label:"Item 3"}}};function Ge(){var t=Object(d.a)(["MenuList.open"]);return Ge=function(){return t},t}var Me=[Object(Ot.b)(Object(f.state)(Ge()))];function Se(t){var e=t.props,n=t.state;e.item&&n.set("MenuList.current",e.item)}var Ye=Object(ut.Module)({state:Te,signals:c}),Le="https://oada.openatk.com",Ee=Object(ut.Module)({state:{oada_domain_text:Le,oada_fields_domain_text:Le,oada_domain:Le,oada_fields_domain:Le,show:!1},signals:{submitClicked:Re,cancelClicked:We,oadaDomainChanged:ke,clearConnection:Ne}}),He=Object(ut.Module)({modules:{App:Pt,Menu:_e,MenuList:Ye,Connections:Ee}}),xe=null,Xe=Object(ut.Controller)(He,{devtools:xe&&xe({host:"localhost:8787"})});s.a.render(i.a.createElement(l.Container,{controller:Xe,style:{height:"100vh"}},i.a.createElement(it,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[225,1,2]]]);
//# sourceMappingURL=main.9e634f41.chunk.js.map