(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{115:function(e,t,a){e.exports=a.p+"static/media/main_logo_left.dd08f33a.png"},118:function(e,t,a){},176:function(e,t,a){e.exports=a(189)},189:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(53),i=a.n(o),l=a(252),c=a(11),m=a(115),s=a.n(m),u=(a(118),a(29)),d=a(273),p=a(271),g=a(250),f=a(251),h=a(272),b=a(149),v=a.n(b),E=a(148),x=a.n(E),y=a(138),w=a.n(y),N=a(143),C=a.n(N),O=a(139),T=a.n(O),j=a(140),S=a.n(j),M=a(141),k=a.n(M),R=a(142),A=a.n(R),F=a(4),I=a(36),D=a(283),B=a(265),P=a(136),z=a.n(P),H=a(137),W=a.n(H),V=a(107),L=a.n(V),q=a(116),Q=a(42),J=a(43),K=function(){function e(){Object(Q.a)(this,e)}return Object(J.a)(e,[{key:"SetBody",value:function(e){return"undefined"!==typeof window?{method:"POST",mode:"cors",headers:new Headers({Accept:"application/json","Content-Type":"application/json",ApiKey:"hL4bA4nB4yI0vI0fC8fH7eT6"}),body:JSON.stringify(e)}:{method:"POST",mode:"cors",headers:{Accept:"application/json","Content-Type":"application/json",ApiKey:"hL4bA4nB4yI0vI0fC8fH7eT6"}}}}]),e}(),G=Object.freeze(new K),X=("undefined"!==typeof window&&new Headers({Accept:"application/json","Content-Type":"application/json",ApiKey:"hL4bA4nB4yI0vI0fC8fH7eT6"}),"https://msoregistration.herokuapp.com/api/"),_="v1",U=function(){function e(){Object(Q.a)(this,e)}return Object(J.a)(e,[{key:"post",value:function(){var e=Object(q.a)(L.a.mark(function e(t,a){var n,r,o,i;return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=G.SetBody(t),r=Object.assign({},n,{method:"POST"}),o=X+_+a,console.log(o),e.next=6,fetch(o,r);case 6:return i=e.sent,e.abrupt("return",i);case 8:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}()}]),e}(),$=Object.freeze(new U),Y=function(){return[{id:"Miss",title:"Miss"},{id:"Mr",title:"Mr"},{id:"Mrs",title:"Mrs"},{id:"Ms",title:"Ms"},{id:"Dr",title:"Dr"},{id:"Sir",title:"Sir"}]},Z=function(){return[{id:"S",title:"Intermediary"},{id:"A",title:"Administrator"},{id:"SU",title:"Supervisor"}]},ee=function(){return[{id:"NBS",title:"Nationwide"},{id:"TMW",title:"The Mortgage Works"},{id:"BOTH",title:"BOTH"}]},te=a(263),ae=a(12),ne=a(276);function re(e){var t=e.title;return r.a.createElement(B.a,{columns:12,container:!0},r.a.createElement(ne.a,{sx:{m:1},variant:"h5"},t))}var oe=a(86),ie=a(277);var le=a(281),ce=a(239),me=a(268),se=a(285),ue=a(258);var de=a(282),pe=a(256),ge=a(286),fe=a(284);var he=a(260);var be=a(255),ve=a(247),Ee=a(254);var xe=a(9),ye=a(269),we=Object(xe.a)(function(e){return{root:{margin:e.spacing(.5)},label:{textTransform:"none"}}});var Ne=Object(xe.a)(function(e){return{root:{minWidth:0,margin:e.spacing(.5)},secondary:{backgroundColor:e.palette.secondary.light,"& .MuiButton-label":{color:e.palette.secondary.main}},primary:{backgroundColor:e.palette.primary.light,"& .MuiButton-label":{color:e.palette.primary.main}}}});var Ce={Input:function(e){var t=e.name,a=e.label,n=e.value,o=e.error,i=void 0===o?null:o,l=e.draweOpenStatus,c=e.onChange,m=Object(oe.a)(e,["name","label","value","error","draweOpenStatus","onChange"]);return r.a.createElement(B.a,{item:!0,xs:12,sm:6,md:6,lg:4},r.a.createElement(ie.a,Object.assign({sx:{m:1,width:l?"28ch":"35ch"},size:"small",label:a,name:t,value:n,onChange:c},m,i&&{error:!0,helperText:i})))},RadioGroup:function(e){var t=e.name,a=e.label,n=e.value,o=e.onChange,i=e.items;return r.a.createElement(le.a,null,r.a.createElement(ce.a,null,a),r.a.createElement(me.a,{row:!0,name:t,value:n,onChange:o},i.map(function(e){return r.a.createElement(se.a,{key:e.id,value:e.id,control:r.a.createElement(ue.a,null),label:e.title})})))},Select:function(e){var t=e.name,a=e.label,n=e.value,o=e.error,i=void 0===o?null:o,l=e.onChange,c=e.options,m=e.helperText,s=e.draweOpenStatus;return r.a.createElement(B.a,{item:!0,xs:12,sm:6,md:6,lg:4},r.a.createElement(le.a,Object.assign({sx:{m:1,minWidth:s?"28ch":"35ch"}},i&&{error:!0}),r.a.createElement(de.a,null,a),r.a.createElement(pe.a,{label:a,name:t,value:n,size:"small",onChange:l},r.a.createElement(ge.a,{value:""},"Please Select"),c.map(function(e){return r.a.createElement(ge.a,{key:e.id,value:e.id},e.title)})),i&&r.a.createElement(fe.a,null,m)))},Checkbox:function(e){var t=e.name,a=e.label,n=e.value,o=e.onChange;return r.a.createElement(le.a,null,r.a.createElement(se.a,{control:r.a.createElement(he.a,{name:t,color:"primary",checked:n,onChange:function(e){return o(function(e,t){return{target:{name:e,value:t}}}(t,e.target.checked))}}),label:a}))},DatePickers:function(e){var t=e.name,a=e.label,n=e.value,o=e.onChange,i=e.error,l=void 0===i?null:i,c=e.helperText,m=e.draweOpenStatus;return r.a.createElement(B.a,{item:!0,xs:12,sm:6,md:6,lg:4,sx:{"& .MuiTextField-root":{m:1,width:m?"28ch":"35ch"}}},r.a.createElement(le.a,l&&{error:!0},r.a.createElement(ve.b,{dateAdapter:be.a},r.a.createElement(Ee.a,{size:"small",label:a,value:n,onChange:o,name:t,inputFormat:"dd/MM/yyyy",renderInput:function(e){return r.a.createElement(ie.a,Object.assign({onChange:o},e,{sx:{mb:4},size:"small",name:t}))}})),l&&r.a.createElement(fe.a,null,c)))},Button:function(e){var t=e.text,a=e.size,n=e.color,o=e.variant,i=e.onClick,l=Object(oe.a)(e,["text","size","color","variant","onClick"]),c=we();return r.a.createElement(ye.a,Object.assign({variant:o||"contained",size:a||"large",color:n||"primary",onClick:i},l,{classes:{root:c.root,label:c.label}}),t)},ActionButton:function(e){var t=e.color,a=e.children,n=e.onClick,o=Ne();return r.a.createElement(ye.a,{className:"".concat(o.root," ").concat(o[t]),onClick:n},a)}};function Oe(e){var t=e.title;return r.a.createElement(B.a,{columns:12,container:!0,sx:{mx:"auto",bgcolor:"primary.light",color:"#fff",borderTopLeftRadius:5,borderTopRightRadius:5}},r.a.createElement(ne.a,{sx:{m:1}},t))}var Te=a(257);function je(e){var t=e.titles,a=void 0===t?[]:t,n=e.outlined,o=void 0===n||n,i=e.severity,l=void 0===i?"info":i;return r.a.createElement(B.a,{columns:12,container:!0},r.a.createElement(B.a,{item:!0,xs:12,sm:12,md:12,lg:12},r.a.createElement(Te.a,{variant:"outlined",severity:l,sx:{m:1,border:o?"auto":"none",padding:o?"auto":0}},a.map(function(e){return r.a.createElement(ne.a,{key:e.id,variant:"body2"},e.title)}))))}var Se=function(e){var t=e.NavigateToNext,a=t.FormState,n=t.setFormDataState,o=t.draweOpenStatus,i=function(e){n(function(t){var n;return Object(I.a)({},a,t,(n={},Object(F.a)(n,e.target.name,e.target.value),Object(F.a)(n,"errorMessage",Object(I.a)({},t.errorMessage,Object(F.a)({},e.target.name,""))),n))})},l=r.a.useState(!0),m=Object(c.a)(l,2),s=m[0],u=m[1],p=r.a.useState(!0),g=Object(c.a)(p,2),f=g[0],h=g[1],b=r.a.useState(!1),v=Object(c.a)(b,2),E=v[0],x=v[1],y=r.a.useState(!1),w=Object(c.a)(y,2),N=w[0],C=w[1],O=Object(ae.useNavigate)();return r.a.createElement("div",null,r.a.createElement(d.a,{component:"form",sx:{display:"flex-box"},noValidate:!0,autoComplete:"off"},r.a.createElement(B.a,{container:!0,spacing:1,columns:12},r.a.createElement(re,{title:"Registration Details"}),r.a.createElement(B.a,{container:!0,columns:12,display:s?"none":"block"},r.a.createElement(je,{severity:"warning",titles:[{id:1,title:"We have been unable to find a company on the FCA register matching the FCA number entered."},{id:2,title:"The information we hold is updated each Monday, with changes made with the FCA up to the previous Thursday."},{id:3,title:"If you believe the details you have entered are correct and you\u2019re registering in line with the above timescales, please contact the FCA."}]})),r.a.createElement(je,{titles:[{id:1,title:"If you\u2019re registering with Nationwide, your details must match with your MTE registration. If these details are different, you will be unable to login to NFI Online."},{id:2,title:"Please check and confirm before proceeding."}]}),r.a.createElement(B.a,{columns:12,container:!0},r.a.createElement(B.a,{columns:12,container:!0,sx:{display:"block"}},r.a.createElement(D.a,{variant:"elevation",sx:{m:1}},r.a.createElement(Oe,{title:"Personal Details"}),r.a.createElement(B.a,{columns:12,container:!0},r.a.createElement(Ce.Select,{value:a.Title,label:"Title",onChange:i,size:"small",name:"Title",options:Y(),error:a.errorMessage.Title,helperText:a.errorMessage.Title,draweOpenStatus:o}),r.a.createElement(Ce.Input,{label:"First Name",onChange:i,type:"text",name:"firstName",value:a.firstName,error:a.errorMessage.firstName,helperText:a.errorMessage.firstName,draweOpenStatus:o}),r.a.createElement(Ce.Input,{label:"Surname",onChange:i,type:"text",name:"Surname",value:a.Surname,error:a.errorMessage.Surname,helperText:a.errorMessage.Surname,draweOpenStatus:o}),r.a.createElement(Ce.DatePickers,{label:"Date of birth",value:a.date,onChange:function(e){n(Object(I.a)({},a,{date:e}))},name:"date",error:a.errorMessage.date,helperText:a.errorMessage.date,draweOpenStatus:o}),r.a.createElement(Ce.Select,{value:a.Role,label:"Role",onChange:i,size:"small",name:"Role",options:Z(),error:a.errorMessage.Role,helperText:a.errorMessage.Role,draweOpenStatus:o}),r.a.createElement(Ce.Select,{value:a.Brand,label:"Which brand(s) are you registering for?",onChange:i,size:"small",name:"Brand",options:ee(),error:a.errorMessage.Brand,helperText:a.errorMessage.Brand,draweOpenStatus:o})),r.a.createElement(je,{outlined:!1,titles:[{id:1,title:"If you\u2019re already registered with Nationwide or The Mortgage Works and would like to register for a second brand, select \u2018Both\u2019."}]}))),r.a.createElement(B.a,{columns:12,container:!0,sx:{display:"block"}},r.a.createElement(D.a,{variant:"elevation",sx:{m:1}},r.a.createElement(Oe,{title:"Company Details"}),r.a.createElement(je,{outlined:!1,titles:[{id:1,title:"Please enter your company FCA number and select \u2018Search\u2019 to retrieve details from the FCA register."}]}),r.a.createElement(B.a,{columns:12,container:!0},r.a.createElement(Ce.Input,{label:"Company FCA number",onChange:function(e){i(e),h(!0)},type:"text",name:"CompanyFCAnumber",value:a.CompanyFCAnumber,error:""!==a.errorMessage.CompanyFCAnumber,helperText:a.errorMessage.CompanyFCAnumber,draweOpenStatus:o}),r.a.createElement(B.a,{item:!0,xs:12,sm:6,md:6,lg:4},r.a.createElement(te.a,{startIcon:r.a.createElement(z.a,null),sx:{m:1,width:o?"30ch":"40ch"},variant:"contained",loading:E,loadingPosition:"start",disabled:""===a.CompanyFCAnumber,color:"success",size:"medium",onClick:function(e){x(!0),console.log(a.CompanyFCAnumber),$.post(a.CompanyFCAnumber,"/validatefca").then(function(e){e.ok?(u(!0),h(!1),console.log("Enable and redirect to, next menu"),x(!1)):(u(!1),h(!0),x(!1))}).catch(function(e){console.error(e),u(!1),x(!1)})}},"Search"))))),r.a.createElement(B.a,{columns:12,container:!0,sx:{display:"block"}},r.a.createElement(D.a,{variant:"elevation",sx:{m:1}},r.a.createElement(Oe,{title:"Declaration"}),r.a.createElement(je,{outlined:!1,titles:[{id:1,title:"By clicking \u2018Agree & Continue\u2019, you confirm you have read and agree to the registration declaration."}]}))),r.a.createElement(B.a,{columns:12,container:!0,sx:{display:"block"}},r.a.createElement(D.a,{elevation:1,sx:{m:1}},r.a.createElement(B.a,{columns:12,container:!0},r.a.createElement(te.a,{startIcon:r.a.createElement(W.a,null),sx:{m:1,width:o?"30ch":"40ch"},variant:"contained",disabled:f,loading:N,loadingPosition:"start",color:"success",onClick:function(e){!function(e){Object.entries(a).map(function(t){var a=Object(c.a)(t,2),r=a[0],o=a[1];return r===e.target.name&&null!==e.target.value&&""!==e.target.value||""!==o&&null!==o?n(function(e){return Object(I.a)({},e,{error:!1,errorMessage:Object(I.a)({},e.errorMessage,Object(F.a)({},r,""))})}):n(function(e){return Object(I.a)({},e,{error:!0,errorMessage:Object(I.a)({},e.errorMessage,Object(F.a)({},r,"enter correct "+r))})})})}(e),a.error||(C(!0),$.post({title:{value:a.Title,caption:a.TitleCaption},firstname:a.firstName,surname:a.Surname,dateOfBirth:a.date,role:{value:a.Role,caption:a.RoleCaption},brand:{value:a.Brand,caption:a.BrandCaption},fcaNumber:a.CompanyFCAnumber},"/register").then(function(e){e.ok&&(console.log("Enable and redirect to, next menu"),t.NavigateToNext(qe.RouteNumber),O(qe.RouteName)),C(!1)}).catch(function(e){console.error(e),C(!1)}))}},"Agree & Continue"),r.a.createElement(te.a,{onClick:function(){t.NavigateToNext(qe.RouteNumber),O(qe.RouteName)}},"Test Next Button"))))))))},Me=a(37),ke=function(e){var t=e.NavigateToNext,a=Object(ae.useNavigate)(),n=Object(Me.useMediaQuery)({query:"(max-width: 760px)"});return r.a.createElement("div",null,r.a.createElement(d.a,{component:"form",sx:{"& .MuiTextField-root":{m:1,width:n?"28ch":"35ch"},display:"flex-box"},noValidate:!0,autoComplete:"off"},r.a.createElement(B.a,{container:!0,spacing:1,columns:12},r.a.createElement(B.a,{columns:12,container:!0},r.a.createElement(ne.a,{sx:{m:1},variant:"h5"},"Company Details "))),r.a.createElement(te.a,{onClick:function(){t.NavigateToNext(Qe.RouteNumber),a(Qe.RouteName)}},"Test Next Button")),r.a.createElement(D.a,{variant:"outlined"},r.a.createElement(Oe,{title:"Personal Details"}),r.a.createElement(B.a,{container:!0,sx:{m:1},columns:12},r.a.createElement(Ce.Input,{label:"First Name",type:"text",name:"firstName"}),r.a.createElement(Ce.Input,{label:"First Name",type:"text",name:"firstName"}),r.a.createElement(Ce.Input,{label:"First Name",type:"text",name:"firstName"}))))},Re=function(e){var t=e.NavigateToNext,a=Object(ae.useNavigate)(),n=Object(Me.useMediaQuery)({query:"(max-width: 760px)"});return r.a.createElement("div",null,r.a.createElement(d.a,{component:"form",sx:{"& .MuiTextField-root":{m:1,width:n?"28ch":"35ch"},display:"flex-box"},noValidate:!0,autoComplete:"off"},"   ",r.a.createElement(re,{title:"Address Details"}),r.a.createElement(te.a,{onClick:function(){t.NavigateToNext(Je.RouteNumber),a(Je.RouteName)}},"Test Next Button")))},Ae=function(e){var t=e.NavigateToNext,a=Object(ae.useNavigate)(),n=Object(Me.useMediaQuery)({query:"(max-width: 760px)"});return r.a.createElement("div",null,r.a.createElement(d.a,{component:"form",sx:{"& .MuiTextField-root":{m:1,width:n?"28ch":"35ch"},display:"flex-box"},noValidate:!0,autoComplete:"off"},r.a.createElement(B.a,{container:!0,spacing:1,columns:12},r.a.createElement(B.a,{columns:12,container:!0},r.a.createElement(ne.a,{sx:{m:1},variant:"h5"},"Submission Route(s) "))),r.a.createElement(te.a,{onClick:function(){t.NavigateToNext(Ge.RouteNumber),a(Ge.RouteName)}},"Test Next Button")))},Fe=function(e){var t=e.NavigateToNext,a=Object(ae.useNavigate)(),n=Object(Me.useMediaQuery)({query:"(max-width: 760px)"});return r.a.createElement("div",null,r.a.createElement(d.a,{component:"form",sx:{"& .MuiTextField-root":{m:1,width:n?"28ch":"35ch"},display:"flex-box"},noValidate:!0,autoComplete:"off"},r.a.createElement(B.a,{container:!0,spacing:1,columns:12},r.a.createElement(B.a,{columns:12,container:!0},r.a.createElement(ne.a,{sx:{m:1},variant:"h5"},"Contact Details "))),r.a.createElement(te.a,{onClick:function(){t.NavigateToNext(Ke.RouteNumber),a(Ke.RouteName)}},"Test Next Button")))},Ie=a(287),De=a(288),Be=a(289);var Pe=[{img:"/images/Desktop.png",title:"Desktop",rows:3,cols:4},{img:"/images/IPAD H.png",title:"IPAD H",rows:3,cols:3},{img:"/images/IPAD V.png",title:"IPAD V",rows:2,cols:2},{img:"/images/IPAD HM.png",title:"IPAD HM",cols:2},{img:"/images/IPhone H.png",title:"IPhone H",rows:2,cols:3},{img:"/images/IPhone.png",title:"IPhone",rows:2,cols:2},{img:"/images/IPhone HM.png",title:"IPhone HM",cols:2}],ze=function(){return r.a.createElement("div",null,r.a.createElement(d.a,{component:"form",sx:{display:"flex-box"},noValidate:!0,autoComplete:"off"},r.a.createElement(B.a,{container:!0,spacing:1,columns:12},r.a.createElement(B.a,{columns:12,container:!0},r.a.createElement(ne.a,{sx:{m:1},variant:"h5"},"Documentation"))),r.a.createElement(Ie.a,{variant:"woven",cols:4},Pe.map(function(e){return r.a.createElement(De.a,{key:e.img,cols:e.cols||1,rows:e.rows||1},r.a.createElement("img",Object.assign({},function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;return{src:"".concat(e,"?w=").concat(t*n,"&h=").concat(t*a,"&fit=crop&auto=format"),srcSet:"".concat(e,"?w=").concat(t*n,"&h=").concat(t*a,"&fit=crop&auto=format&dpr=2 2x")}}(e.img,121,e.rows,e.cols),{alt:e.title,loading:"lazy"})),r.a.createElement(Be.a,{position:"below",title:e.title}))}))))},He=function(){var e=Object(Me.useMediaQuery)({query:"(max-width: 760px)"});return r.a.createElement("div",null,r.a.createElement(d.a,{component:"form",sx:{"& .MuiTextField-root":{m:1,width:e?"28ch":"35ch"},display:"flex-box"},noValidate:!0,autoComplete:"off"},r.a.createElement(B.a,{container:!0,spacing:1,columns:12},r.a.createElement(B.a,{columns:12,container:!0},r.a.createElement(ne.a,{sx:{m:1},variant:"h5"},"Confirmation")))))},We=a(144),Ve=a.n(We);var Le=function(e){return{menuitem:[{menucaption:"Registration Details",menupath:"/registrationdetails",icon:n.createElement(w.a,{color:"primary"}),routedata:n.createElement(Se,{NavigateToNext:e}),disabled:!1,selected:!0},{menucaption:"Company Name",menupath:"/companyname",icon:n.createElement(T.a,{color:"primary"}),routedata:n.createElement(ke,{NavigateToNext:e}),disabled:!0,selected:!1},{menucaption:"Address Details",menupath:"/addressdetails",icon:n.createElement(S.a,{color:"primary"}),routedata:n.createElement(Re,{NavigateToNext:e}),disabled:!0,selected:!1},{menucaption:"Contact Details",menupath:"/contactdetails",icon:n.createElement(k.a,{color:"primary"}),routedata:n.createElement(Fe,{NavigateToNext:e}),disabled:!0,selected:!1},{menucaption:"Submission Route(s)",menupath:"/submissionroute",icon:n.createElement(A.a,{color:"primary"}),routedata:n.createElement(Ae,{NavigateToNext:e}),disabled:!0,selected:!1},{menucaption:"Confirmation",menupath:"/confirmation",icon:n.createElement(C.a,{color:"primary"}),routedata:n.createElement(He,{NavigateToNext:e}),disabled:!0,selected:!1},{menucaption:"Documentation",menupath:"/documentation",icon:n.createElement(Ve.a,{color:"primary"}),routedata:n.createElement(ze,{NavigateToNext:e}),disabled:!1,selected:!1}]}},qe={RouteName:"/companyname",RouteNumber:1},Qe={RouteName:"/addressdetails",RouteNumber:2},Je={RouteName:"/contactdetails",RouteNumber:3},Ke={RouteName:"/submissionroute",RouteNumber:4},Ge={RouteName:"/confirmation",RouteNumber:5},Xe=a(274),_e=a(145),Ue=a(248),$e=a(249),Ye=a(264),Ze=a(50);function et(e){var t=e.children;return"undefined"===typeof window?n.createElement(_e.a,{location:"/registrationdetails"},t):n.createElement(ae.MemoryRouter,{initialEntries:["/registrationdetails"],initialIndex:0},t)}var tt=function(e){return{width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen}),overflowX:"hidden"}},at=function(e){return Object(F.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:"calc(".concat(e.spacing(7)," + 1px)")},e.breakpoints.up("sm"),{width:"calc(".concat(e.spacing(9)," + 1px)")})},nt=Object(xe.a)("div")(function(e){var t=e.theme;return Object(I.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:t.spacing(0,1)},t.mixins.toolbar)}),rt=Object(xe.a)(Ye.a,{shouldForwardProp:function(e){return"open"!==e}})(function(e){var t=e.theme,a=e.open;return Object(I.a)({width:240,flexShrink:0,whiteSpace:"nowrap",boxSizing:"border-box"},a&&Object(I.a)({},tt(t),{"& .MuiDrawer-paper":tt(t)}),!a&&Object(I.a)({},at(t),{"& .MuiDrawer-paper":at(t)}))});function ot(e){var t=e.icon,a=e.primary,r=e.to,o=e.onclick,i=e.Selected,l=e.Disabled,c=n.useMemo(function(){return n.forwardRef(function(e,t){return n.createElement(Ze.a,Object.assign({to:r,ref:t},e,{role:void 0,onClick:o,selected:i,disabled:l}))})},[r]);return n.createElement("li",null,n.createElement(Xe.a,{component:c,onClick:o,selected:i,disabled:l},t?n.createElement(Ue.a,null,t):null,n.createElement($e.a,{primary:a})))}function it(e){var t=Object(ae.useLocation)();return Le(e).menuitem.find(function(e){return e.menupath===t.pathname}).routedata}var lt={errorMessage:{firstName:"",Surname:"",date:"",Title:"",Role:"",Brand:"",CompanyFCAnumber:""},error:!0,activeStep:0,firstName:"",Surname:"",date:null,Title:"",Role:"",Brand:"",CompanyFCAnumber:""},ct=a(290),mt=a(291),st=a(147),ut=a.n(st),dt=a(275);function pt(e){var t=e.open,a=e.logo,n=e.handleDrawerOpen,o=Object(xe.a)(dt.a,{shouldForwardProp:function(e){return"open"!==e}})(function(e){var t=e.theme;e.open;return{zIndex:t.zIndex.drawer+1,transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen})}});return r.a.createElement(o,{position:"fixed",open:t},r.a.createElement(ct.a,null,r.a.createElement(h.a,{color:"inherit","aria-label":"open drawer",onClick:n,edge:"start"},r.a.createElement(ut.a,null)),r.a.createElement("img",{alt:"Nationwide Logo",src:a,className:"App-logo"}),r.a.createElement(ne.a,{variant:"h6",noWrap:!0,component:"div"},r.a.createElement(mt.a,{underline:"none",color:"inherit",className:"App-name",href:"#"}," MSO Registration"))))}function gt(){var e=Object(u.a)(),t=Object(Me.useMediaQuery)({query:"(max-width: 992px)"}),a=r.a.useState(!t),o=Object(c.a)(a,2),i=o[0],l=o[1],m=r.a.useState(0),b=Object(c.a)(m,2),E=b[0],y=b[1],w=r.a.useState(0),N=Object(c.a)(w,2),C=N[0],O=N[1];function T(e){O(e),y(E>=e?E:e)}var j=Object(n.useState)(lt),S=Object(c.a)(j,2),M=S[0],k=S[1];return r.a.createElement(d.a,{sx:{display:"flex"}},r.a.createElement(et,null,r.a.createElement(g.a,null),r.a.createElement(pt,{open:i,logo:s.a,handleDrawerOpen:function(){l(!i)}}),r.a.createElement(rt,{variant:"permanent",open:i},r.a.createElement(nt,null,r.a.createElement(h.a,{onClick:function(){l(!i)}},"rtl"===e.direction?r.a.createElement(x.a,null):r.a.createElement(v.a,null))),r.a.createElement(f.a,null),r.a.createElement(p.a,null,Le(T).menuitem.map(function(e,t){return r.a.createElement(ot,{to:e.menupath,primary:e.menucaption,icon:e.icon,key:e.menucaption,onclick:function(e){return function(e){O(e)}(t)},Selected:C===t,Disabled:!(t===E||t<E)&&e.disabled})}))),r.a.createElement(d.a,{component:"main",sx:{flexGrow:1,p:3}},r.a.createElement(nt,null),r.a.createElement(ae.Routes,null,r.a.createElement(ae.Route,{path:"*",element:r.a.createElement(it,{NavigateToNext:T,FormState:M,setFormDataState:k,draweOpenStatus:i&&t})})))))}var ft=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,253)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),o(e),i(e)})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.createElement(l.a,{injectFirst:!0},n.createElement(gt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}).catch(function(e){console.error(e.message)}),ft()}},[[176,3,2]]]);
//# sourceMappingURL=main.23fa35a6.chunk.js.map