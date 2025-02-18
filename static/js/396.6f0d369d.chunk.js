"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[396],{3396:function(t,e,a){a.r(e),a.d(e,{Contacts:function(){return q},default:function(){return H}});var n=a(1413),s=a(4925),i=a(4942),c=a(3433),o=a(9439),l=a(5075),r=a(487),d={taskBook:"ContactForm_taskBook__BWW6C",formTitle:"ContactForm_formTitle__N6O4g",formSection:"ContactForm_formSection__4wcn3",button:"ContactForm_button__eSwX9",buttonArea:"ContactForm_buttonArea__IAEoE",formLabel:"ContactForm_formLabel__TSwxK",formInput:"ContactForm_formInput__GszVU"},u=a(4420),m=a(5984),h=a(7694),p=a.n(h),x=a(2791),f=a(9557),_=(a(1107),a(184)),g=["defaultValue"],j=function(t){var e=t.children,a=(0,m.x0)(),i=(0,m.x0)(),h=((0,u.v9)(r.Af),(0,u.I0)()),j=(0,x.useState)(new Date),N=(0,o.Z)(j,2),C=N[0],b=N[1];return(0,_.jsxs)("div",{className:d.taskBook,children:[(0,_.jsx)("h2",{className:d.formTitle,children:"Scheduler"}),(0,_.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),""!==t.target[0].value.trim()){var e=new Date;C<=e?p().Notify.failure("Invalid date, choose a date or time in the future"):h((0,l.uK)({name:t.target[0].value,phone:C}))}else p().Notify.warning("Empty spaces are not allowed")},className:d.formSection,children:[(0,_.jsxs)("label",{className:d.loginLabel,children:[(0,_.jsx)("span",{className:d.formLabel,children:"Appointment title:"}),(0,_.jsx)("input",{type:"text",placeholder:"Enter Task Title",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Enter Task Title",required:!0,autoComplete:"off",id:a,className:d.formInput,onChange:function(t){var e,a=t.target.value,n=!1;a.length>45&&((e=(0,c.Z)(a)).pop(),t.target.value=e.join(""),n=!0),!0===n&&p().Notify.warning("Maximum Charater limit is 45")}})]}),(0,_.jsxs)("label",{children:[(0,_.jsx)("span",{className:d.formLabel,children:"Due date:"}),(0,_.jsx)(f.Z,{"data-enable-time":!0,value:C,onChange:function(t){var e=new Date;t[0]<=e?p().Notify.warning("Choose a date in the future"):p().Notify.success("Due Date Selected"),b(t[0])},options:{minuteIncrement:1},render:function(t,e){t.defaultValue;var a=(0,s.Z)(t,g);return(0,_.jsx)("input",(0,n.Z)((0,n.Z)({},a),{},{ref:e,className:d.formInput,required:!0,id:i,name:"myDate"}))}})]}),(0,_.jsx)("div",{className:d.buttonArea,children:(0,_.jsx)("button",{type:"submit",name:"button",className:d.button,onClick:function(t){t.target.style.boxShadow="inset 0 0 10px 5px rgba(0, 0, 0, 0.3)",setTimeout((function(){t.target.style.boxShadow="none"}),1e3)},children:"Add"})})]}),e]})},N="ContactList_contactsSection__3KZcT",C="ContactList_contactsTitle__gHlpa",b="ContactList_contactsList__7leRd",v="ContactList_contactsData__gZODb",I="ContactList_contactsPhone__qIcDs",w="ContactList_contactsItem__x8C9b",k="ContactList_checkbox__F7osn",y="ContactList_contactsButtonArea__6jkW1",S="ContactList_contactsButton__6hBLW",D="ContactList_navigationArea__nXhaT",Z="ContactList_navigationButton__ZT5QF",L=a(8136),T=function(t){var e=t.children,a=(0,u.v9)(r.Af),n=(0,u.v9)(r.kL),s=(0,u.v9)(r.WS),i=(0,x.useState)(),c=(0,o.Z)(i,2),d=(c[0],c[1],(0,u.I0)()),m=function(t){t.target.style.boxShadow="inset 0 0 10px 5px rgba(0, 0, 0, 0.3)",setTimeout((function(){t.target.style.boxShadow="none"}),1e3),d((0,l.GK)(t.target.name))},h=(0,u.v9)(r.YI),p=function(t){if(t.target.getAttribute("data-id")){var e=t.currentTarget.getAttribute("data-id");d((0,l.he)(e)),d((0,l.h7)()),d((0,l.RH)())}},f=(0,x.useState)(0),g=(0,o.Z)(f,2),j=g[0],T=g[1],A=(0,x.useState)(4),V=(0,o.Z)(A,2),B=V[0],F=V[1],W=function(t){if(t.target.style.boxShadow="inset 0 0 10px 5px rgba(0, 0, 0, 0.3)",setTimeout((function(){t.target.style.boxShadow="none"}),500),""===h&&(T(j+4),F(B+4)),""!==h){console.log("OK");var e=n,a=s;d((0,l._w)(e)),d((0,l.ag)(a))}},E=function(t){if(t.target.style.boxShadow="inset 0 0 10px 5px rgba(0, 0, 0, 0.3)",setTimeout((function(){t.target.style.boxShadow="none"}),500),""===h&&(T(j-4),F(B-4)),""!==h){var e=n,a=s;d((0,l.oQ)(e)),d((0,l.M3)(a))}},M=function(t){d((0,l.Nf)({status:t.target.checked,myUpdateStatusId:t.target.name}))},P=a.filter((function(t){return t.name.toLowerCase().includes(h.trim().toLowerCase())&&""!==h.trim()}));return(0,_.jsxs)("div",{className:N,children:[(0,_.jsx)("h3",{className:C,children:"Appointments List"}),e,""===h&&0!==a.length&&(0,_.jsx)("ul",{className:b,children:a.map((function(t){var e=a.indexOf(t);if(e>=j&&e<B)return(0,_.jsxs)("li",{"data-id":t._id,className:w,onClick:p,children:[(0,_.jsxs)("span",{className:v,"data-id":t._id,children:[(0,_.jsx)("input",{type:"checkbox",className:k,checked:t.status,name:t._id,onChange:M}),":"," ",(0,_.jsx)("span",{className:I,"data-id":t._id,children:t.name})]}),(0,_.jsx)("span",{className:y,children:(0,_.jsx)("button",{type:"submit",className:S,name:t._id,onClick:m,children:(0,_.jsx)("svg",{width:"15px",height:"15px",children:(0,_.jsx)("use",{href:"".concat(L.Z,"#icon-bin")})})})})]},t._id)}))}),""===h&&(0,_.jsxs)("div",{className:D,children:[0!==j&&(0,_.jsx)("button",{className:Z,onClick:E,children:"Prev"}),!(B>a.length)&&B!==a.length&&(0,_.jsx)("button",{className:Z,onClick:W,children:"Forward"})]}),""!==h&&(0,_.jsxs)("div",{className:D,children:[0!==s&&(0,_.jsx)("button",{className:Z,onClick:E,children:"Prev"}),!(n>P.length)&&n!==P.length&&(0,_.jsx)("button",{className:Z,onClick:W,children:"Forward"})]})]})},A=a(1916),V=a(3733),B={notification:"Contacts_notification__S7Pce",notificationShow:"Contacts_notificationShow__kQwFb",sortedWrapper:"Contacts_sortedWrapper__MSHB7",coverWrapper:"Contacts_coverWrapper__X4gza",selected:"Contacts_selected__JPpLk",contactsDetailsHide:"Contacts_contactsDetailsHide__EAxL5",contactsDetailsShow:"Contacts_contactsDetailsShow__GNtTf",closeModal:"Contacts_closeModal__mVT9L",contactsDetailsArea:"Contacts_contactsDetailsArea__qByv6",contactImage:"Contacts_contactImage__9S+4-",detailsSection:"Contacts_detailsSection__-isHv",detailsImageWrapper:"Contacts_detailsImageWrapper__4e94u",detailsImage:"Contacts_detailsImage__Fv6gk",detailsImageButton:"Contacts_detailsImageButton__R1iMX",detailsImageInput:"Contacts_detailsImageInput__pywld",detailsSectionTitle:"Contacts_detailsSectionTitle__zASfN",detailsWrapper:"Contacts_detailsWrapper__C50Aa",detailsItem:"Contacts_detailsItem__DEXoV",detailsCover:"Contacts_detailsCover__lqSnp",detailsInfo:"Contacts_detailsInfo__HEN35",details:"Contacts_details__xkbEz",detailsVal:"Contacts_detailsVal__AIPnW",detailsDetailsVal:"Contacts_detailsDetailsVal__GxEUp",detailsValPhone:"Contacts_detailsValPhone__28REO",detailsValInput:"Contacts_detailsValInput__XHX6i",detailsDetailsValInput:"Contacts_detailsDetailsValInput__kuePv",detailsValInputPhone:"Contacts_detailsValInputPhone__Z59HF",backDrop:"Contacts_backDrop__of3D3",loader:"Contacts_loader__jgaE8",detailButton:"Contacts_detailButton__+1M8g",buttonWrapper:"Contacts_buttonWrapper__u4A+7",detailsEditClose:"Contacts_detailsEditClose__3PDcl",backdrop:"Contacts_backdrop__byVBb",backdropIsHidden:"Contacts_backdropIsHidden__hDygs",modalWindow:"Contacts_modalWindow__3981m"};var F=a.p+"static/media/icons.77c8d2ef0bd65aab65a1e4f05688514c.svg",W=a(4137),E=a(1075),M=["defaultValue"],P=["defaultValue"],q=function(){var t=(0,x.useState)(new Date),e=(0,o.Z)(t,2),a=e[0],d=e[1],m=(0,x.useState)(!1),h=(0,o.Z)(m,2),g=h[0],N=h[1],C=(0,x.useState)(""),b=(0,o.Z)(C,2),v=b[0],I=b[1],w=(0,x.useState)(!1),k=(0,o.Z)(w,2),y=k[0],S=k[1],D=(0,u.v9)(r.D1),Z=(0,x.useState)(D.email),L=(0,o.Z)(Z,2),q=L[0],H=L[1],U=(0,x.useState)(!1),z=(0,o.Z)(U,2),X=z[0],O=z[1],Q=(0,x.useState)(""),R=(0,o.Z)(Q,2),K=R[0],G=R[1],Y=(0,u.I0)(),$=(0,u.v9)(r.xU),J=(0,u.v9)(r.Y7),tt=(0,u.v9)(r.Qc),et=(0,x.useState)(!0),at=(0,o.Z)(et,2),nt=(at[0],at[1],(0,u.v9)(r.zh)),st=(0,E.ac)({query:"(min-width: 1280px)"}),it=(0,E.ac)({query:"(max-width: 1279px)"}),ct=(0,u.v9)(r.Q9),ot=function(){Y((0,l.Mr)()),Y((0,l.wy)()),N(!1),S(!1)},lt=function(t){I(t.target.value);var e,a=t.target.value,n=!1;a.length>30&&((e=(0,c.Z)(a)).pop(),t.target.value=e.join(""),n=!0),!0===n&&p().Notify.warning("Maximum Charater limit is 30")},rt=function(t){N(!0),t.target.style.boxShadow="inset 0 0 10px 5px rgba(0, 0, 0, 0.3)",setTimeout((function(){t.target.style.boxShadow="none",document.querySelector('[name="username"]').focus()}),100)},dt=function(t){if(""!==v.trim()){var e=t.target.name;Y((0,l.bZ)({name:v,myUpdateId:e})),N(!1)}else""===v.trim()&&p().Notify.warning("Input is required");t.target.style.boxShadow="inset 0 0 10px 5px rgba(0, 0, 0, 0.3)",setTimeout((function(){t.target.style.boxShadow="none"}),500)},ut=function(){N(!1)},mt=function(t){H(t.target.value);var e,a=t.target.value,n=!1;a.length>200&&((e=(0,c.Z)(a)).pop(),t.target.value=e.join(""),n=!0),!0===n&&p().Notify.warning("Maximum Charater limit is 200")},ht=function(t){S(!0),t.target.style.boxShadow="inset 0 0 10px 5px rgba(0, 0, 0, 0.3)",setTimeout((function(){t.target.style.boxShadow="none",document.querySelector('[name="email"]').focus()}),100)},pt=function(t){if(""!==q.trim()){var e=t.target.name;Y((0,l.NO)({email:q,myUpdateId:e})),S(!1)}else""===q.trim()&&p().Notify.warning("Input is required");t.target.style.boxShadow="inset 0 0 10px 5px rgba(0, 0, 0, 0.3)",setTimeout((function(){t.target.style.boxShadow="none"}),500)},xt=function(){S(!1),H(D.email)},ft=function(t){O(!0),t.target.style.boxShadow="inset 0 0 10px 5px rgba(0, 0, 0, 0.3)",setTimeout((function(){t.target.style.boxShadow="none",document.querySelector('[name="date"]').focus()}),100)},_t=function(t){var e=t.target.name,n=new Date;a<=n?p().Notify.failure("Invalid date, choose a date in the future"):Y((0,l.jX)({phone:a,myUpdateId:e})),O(!1),t.target.style.boxShadow="inset 0 0 10px 5px rgba(0, 0, 0, 0.3)",setTimeout((function(){t.target.style.boxShadow="none"}),500)},gt=function(){O(!1)},jt=function(t){var e=t.target.files[0],a=t.currentTarget.getAttribute("data-id");e&&Y((0,l.im)({myFile:e,myId:a}))};return(0,x.useEffect)((function(){Y((0,l.yF)())}),[Y]),(0,x.useEffect)((function(){H(D.email)}),[D.email]),(0,x.useEffect)((function(){I(D.name)}),[D.name]),(0,x.useEffect)((function(){var t=navigator.language,e=new Date(D.phone),a=new Intl.DateTimeFormat(t,{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!0});G(a.format(e))}),[D.phone]),(0,_.jsxs)("div",{className:(0,V.Z)(B.coverWrapper,{}),children:[ct&&it&&(0,_.jsx)("div",{className:(0,V.Z)(B.backdrop,(0,i.Z)({},B.backdropIsHidden,J)),children:(0,_.jsxs)("div",{className:B.modalWindow,children:[tt&&(0,_.jsx)("div",{className:B.backDrop,children:(0,_.jsx)(W.Z1,{visible:!0,height:"80",width:"80",color:"#5785FF",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:B.loader})}),(0,_.jsx)("button",{className:B.closeModal,onClick:ot,children:(0,_.jsx)("svg",{width:"10px",height:"10px",className:B.modalIcon,children:(0,_.jsx)("use",{href:"".concat(F,"#icon-cross")})})}),(0,_.jsx)("div",{className:B.detailsImageWrapper,children:(0,_.jsx)("img",{className:B.detailsImage,src:"https://oasis-tasks-backend.onrender.com".concat(D.avatarURL),alt:"Contact"})}),(0,_.jsx)("input",{className:B.detailsImageButton,type:"file",accept:"image/*",name:"avatar",onChange:jt,id:"2","data-id":D._id}),(0,_.jsx)("label",{className:B.detailsImageInput,htmlFor:"2",children:"Update Task Image +"}),(0,_.jsxs)("ul",{className:B.detailsWrapper,children:[(0,_.jsx)("li",{className:B.detailsItem,children:(0,_.jsxs)("span",{className:B.detailsCover,children:[(0,_.jsxs)("span",{className:B.detailsInfo,children:[(0,_.jsx)("span",{className:B.details,children:"Task Title:"})," ",!1===g?(0,_.jsx)("span",{className:B.detailsVal,children:(0,_.jsx)("i",{className:B.detail,children:D.name})}):(0,_.jsx)("input",{type:"text",className:B.detailsValInput,required:!0,onChange:lt,"data-id":D._id,name:"username",defaultValue:D.name})]}),(0,_.jsxs)("span",{className:B.buttonWrapper,children:[!0===g&&(0,_.jsx)("button",{className:B.detailsEditClose,onClick:ut,children:(0,_.jsx)("svg",{width:"5px",height:"5px",className:B.modalIcon,children:(0,_.jsx)("use",{href:"".concat(F,"#icon-cross")})})}),!1===g?(0,_.jsx)("button",{className:B.detailButton,onClick:rt,children:"Edit"}):(0,_.jsx)("button",{name:D._id,className:B.detailButton,onClick:dt,children:"Save"})]})]})}),(0,_.jsx)("li",{className:B.detailsItem,children:(0,_.jsxs)("span",{className:B.detailsCover,children:[(0,_.jsxs)("span",{className:B.detailsInfo,children:[(0,_.jsx)("span",{className:B.details,children:"Task Details:"})," ",!1===y?(0,_.jsxs)("pre",{className:B.detailsDetailsVal,children:[(0,_.jsx)("i",{className:B.detail,children:D.email}),console.log(D.email)]}):(0,_.jsx)("textarea",{type:"text",className:B.detailsDetailsValInput,required:!0,onChange:mt,"data-id":D._id,name:"email",title:"Enter the details of your task",defaultValue:D.email})]}),(0,_.jsxs)("span",{className:B.buttonWrapper,children:[!0===y&&(0,_.jsx)("button",{className:B.detailsEditClose,onClick:xt,children:(0,_.jsx)("svg",{width:"5px",height:"5px",className:B.modalIcon,children:(0,_.jsx)("use",{href:"".concat(F,"#icon-cross")})})}),!1===y?(0,_.jsx)("button",{className:B.detailButton,onClick:ht,children:"Edit"}):(0,_.jsx)("button",{name:D._id,className:B.detailButton,onClick:pt,children:"Save"})]})]})}),(0,_.jsx)("li",{className:B.detailsItem,children:(0,_.jsxs)("span",{className:B.detailsCover,children:[(0,_.jsxs)("span",{className:B.detailsInfo,children:[(0,_.jsx)("span",{className:B.details,children:"Due Date:"})," ",!1===X?(0,_.jsx)("span",{className:B.detailsValPhone,children:(0,_.jsx)("i",{className:B.detail,children:K})}):(0,_.jsx)(f.Z,{"data-enable-time":!0,value:a,onChange:function(t){var e=new Date;t[0]<=e?p().Notify.warning("Choose a date in the future"):p().Notify.success("Due Date Selected"),d(t[0])},options:{minuteIncrement:1},render:function(t,e){t.defaultValue;var a=(0,s.Z)(t,M);return(0,_.jsx)("input",(0,n.Z)((0,n.Z)({},a),{},{ref:e,className:B.detailsValInputPhone,required:!0,"data-id":D._id,name:"date"}))}})]}),(0,_.jsxs)("span",{className:B.buttonWrapper,children:[!0===X&&(0,_.jsx)("button",{className:B.detailsEditClose,onClick:gt,children:(0,_.jsx)("svg",{width:"5px",height:"5px",className:B.modalIcon,children:(0,_.jsx)("use",{href:"".concat(F,"#icon-cross")})})}),!1===X?(0,_.jsx)("button",{className:B.detailButton,onClick:ft,children:"Edit"}):(0,_.jsx)("button",{name:D._id,className:B.detailButton,onClick:_t,children:"Save"})]})]})})]})]})}),(0,_.jsx)("div",{className:(0,V.Z)(B.sortedWrapper,(0,i.Z)({},B.selected,ct&&st)),children:(0,_.jsxs)(j,{children:[(0,_.jsx)("b",{className:(0,V.Z)(B.notification,(0,i.Z)({},B.notificationShow,$&&!nt)),children:"Please wait..."}),nt&&(0,_.jsx)("b",{className:B.notificationShow,children:"There was an error, logout and login again!!!"}),(0,_.jsxs)("div",{className:(0,V.Z)(B.contactsDetailsHide,(0,i.Z)({},B.contactsDetailsShow,ct&&st)),children:[tt&&(0,_.jsx)("div",{className:B.backDrop,children:(0,_.jsx)(W.Z1,{visible:!0,height:"80",width:"80",color:"#5785FF",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:B.loader})}),(0,_.jsx)("button",{className:B.closeModal,onClick:ot,children:(0,_.jsx)("svg",{width:"10px",height:"10px",className:B.modalIcon,children:(0,_.jsx)("use",{href:"".concat(F,"#icon-cross")})})}),(0,_.jsx)("div",{className:B.detailsImageWrapper,children:(0,_.jsx)("img",{className:B.detailsImage,src:"https://oasis-tasks-backend.onrender.com".concat(D.avatarURL),alt:"Contact"})}),(0,_.jsx)("input",{className:B.detailsImageButton,type:"file",accept:"image/*",name:"avatar",onChange:jt,id:"2","data-id":D._id}),(0,_.jsx)("label",{className:B.detailsImageInput,htmlFor:"2",children:"Update Task Image +"}),(0,_.jsxs)("ul",{className:B.detailsWrapper,children:[(0,_.jsx)("li",{className:B.detailsItem,children:(0,_.jsxs)("span",{className:B.detailsCover,children:[(0,_.jsxs)("span",{className:B.detailsInfo,children:[(0,_.jsx)("span",{className:B.details,children:"Task Title:"})," ",!1===g?(0,_.jsx)("span",{className:B.detailsVal,children:(0,_.jsx)("i",{className:B.detail,children:D.name})}):(0,_.jsx)("input",{type:"text",className:B.detailsValInput,required:!0,onChange:lt,"data-id":D._id,name:"username",defaultValue:D.name})]}),(0,_.jsxs)("span",{className:B.buttonWrapper,children:[!0===g&&(0,_.jsx)("button",{className:B.detailsEditClose,onClick:ut,children:(0,_.jsx)("svg",{width:"5px",height:"5px",className:B.modalIcon,children:(0,_.jsx)("use",{href:"".concat(F,"#icon-cross")})})}),!1===g?(0,_.jsx)("button",{className:B.detailButton,onClick:rt,children:"Edit"}):(0,_.jsx)("button",{name:D._id,className:B.detailButton,onClick:dt,children:"Save"})]})]})}),(0,_.jsx)("li",{className:B.detailsItem,children:(0,_.jsxs)("span",{className:B.detailsCover,children:[(0,_.jsxs)("span",{className:B.detailsInfo,children:[(0,_.jsx)("span",{className:B.details,children:"Task Details:"})," ",!1===y?(0,_.jsxs)("pre",{className:B.detailsDetailsVal,children:[(0,_.jsx)("i",{className:B.detail,children:D.email}),console.log(D.email)]}):(0,_.jsx)("textarea",{type:"text",className:B.detailsDetailsValInput,required:!0,onChange:mt,"data-id":D._id,name:"email",title:"Enter the details of your task",defaultValue:D.email})]}),(0,_.jsxs)("span",{className:B.buttonWrapper,children:[!0===y&&(0,_.jsx)("button",{className:B.detailsEditClose,onClick:xt,children:(0,_.jsx)("svg",{width:"5px",height:"5px",className:B.modalIcon,children:(0,_.jsx)("use",{href:"".concat(F,"#icon-cross")})})}),!1===y?(0,_.jsx)("button",{className:B.detailButton,onClick:ht,children:"Edit"}):(0,_.jsx)("button",{name:D._id,className:B.detailButton,onClick:pt,children:"Save"})]})]})}),(0,_.jsx)("li",{className:B.detailsItem,children:(0,_.jsxs)("span",{className:B.detailsCover,children:[(0,_.jsxs)("span",{className:B.detailsInfo,children:[(0,_.jsx)("span",{className:B.details,children:"Due Date:"})," ",!1===X?(0,_.jsx)("span",{className:B.detailsValPhone,children:(0,_.jsx)("i",{className:B.detail,children:K})}):(0,_.jsx)(f.Z,{"data-enable-time":!0,value:a,onChange:function(t){var e=new Date;t[0]<=e?p().Notify.warning("Choose a date in the future"):p().Notify.success("Due Date Selected"),d(t[0])},options:{minuteIncrement:1},render:function(t,e){t.defaultValue;var a=(0,s.Z)(t,P);return(0,_.jsx)("input",(0,n.Z)((0,n.Z)({},a),{},{ref:e,className:B.detailsValInputPhone,required:!0,"data-id":D._id,name:"date"}))}})]}),(0,_.jsxs)("span",{className:B.buttonWrapper,children:[!0===X&&(0,_.jsx)("button",{className:B.detailsEditClose,onClick:gt,children:(0,_.jsx)("svg",{width:"5px",height:"5px",className:B.modalIcon,children:(0,_.jsx)("use",{href:"".concat(F,"#icon-cross")})})}),!1===X?(0,_.jsx)("button",{className:B.detailButton,onClick:ft,children:"Edit"}):(0,_.jsx)("button",{name:D._id,className:B.detailButton,onClick:_t,children:"Save"})]})]})})]})]}),(0,_.jsx)(T,{children:(0,_.jsx)(A.w,{})})]})})]})},H=q},1916:function(t,e,a){a.d(e,{w:function(){return d}});var n=a(4420),s=a(487),i=a(5984),c={formLabel:"Filter_formLabel__Ozoh5",formInput:"Filter_formInput__XNLZn",contactsList:"Filter_contactsList__78f6h",contactsData:"Filter_contactsData__q4ogS",contactsItem:"Filter_contactsItem__CHFiw",contactsPhone:"Filter_contactsPhone__hxyN-",contactsButtonArea:"Filter_contactsButtonArea__0a5PO",contactsButton:"Filter_contactsButton__7e+W-",checkbox:"Filter_checkbox__wp-8y"},o=a(458),l=a(5075),r=a(184),d=function(){var t=(0,i.x0)(),e=(0,n.v9)(s.Af),a=(0,n.v9)(s.kL),d=(0,n.v9)(s.WS),u=(0,n.v9)(s.YI),m=(0,n.I0)(),h=e.filter((function(t){return t.name.toLowerCase().includes(u.trim().toLowerCase())&&""!==u.trim()})),p=function(t){if(t.target.getAttribute("data-id")){var e=t.currentTarget.getAttribute("data-id");m((0,l.he)(e)),m((0,l.h7)())}},x=function(t){t.target.style.boxShadow="inset 0 0 10px 5px rgba(0, 0, 0, 0.3)",setTimeout((function(){t.target.style.boxShadow="none"}),1e3),m((0,l.GK)(t.target.name))};return(0,r.jsxs)("div",{className:c.contactList,children:[(0,r.jsxs)("label",{htmlFor:t,children:[(0,r.jsx)("span",{className:c.formLabel,children:"Search Appointments By Title:"}),(0,r.jsx)("input",{type:"text",placeholder:"Enter Task title",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Enter Task Title",required:!0,onChange:function(t){m((0,o.T)(t.target.value)),console.log(t.target.value)},id:t,autoComplete:"off",className:c.formInput,value:u})]}),""!==u&&0!==h.length&&(0,r.jsx)("ul",{className:c.contactsList,children:h.map((function(t){var e=h.indexOf(t);if(e>=d&&e<a)return(0,r.jsxs)("li",{"data-id":t._id,className:c.contactsItem,onClick:p,children:[(0,r.jsxs)("span",{className:c.contactsData,"data-id":t._id,children:[(0,r.jsx)("input",{type:"checkbox",className:c.checkbox}),":"," ",(0,r.jsx)("span",{className:c.contactsPhone,"data-id":t._id,children:t.name})]}),(0,r.jsx)("span",{className:c.contactsButtonArea,children:(0,r.jsx)("button",{type:"submit",className:c.contactsButton,name:t._id,onClick:x,children:"Delete"})})]},t._id)}))})]})}},487:function(t,e,a){a.d(e,{Af:function(){return n},D1:function(){return m},F6:function(){return r},NX:function(){return u},Q9:function(){return o},Qc:function(){return _},U3:function(){return f},WR:function(){return x},WS:function(){return j},Y7:function(){return N},YI:function(){return s},Z6:function(){return l},_4:function(){return d},kL:function(){return g},qs:function(){return p},xL:function(){return h},xU:function(){return i},zh:function(){return c}});var n=function(t){return t.contacts.contacts.items},s=function(t){return t.filter},i=function(t){return t.contacts.contacts.isLoading},c=function(t){return t.contacts.contacts.error},o=function(t){return t.contacts.contacts.openMyModal},l=function(t){return t.contacts.contacts.openMyAllModal},r=function(t){return t.contacts.contacts.openMyPendingModal},d=function(t){return t.contacts.contacts.openMyCompletedModal},u=function(t){return t.contacts.contacts.openMyPastDueModal},m=function(t){return t.contacts.contacts.selectedContact},h=function(t){return t.contacts.contacts.selectedSortedAllContact},p=function(t){return t.contacts.contacts.selectedSortedPendingContact},x=function(t){return t.contacts.contacts.selectedSortedCompletedContact},f=function(t){return t.contacts.contacts.selectedSortedPastDueContact},_=function(t){return t.contacts.contacts.isSlideLoading},g=function(t){return t.contacts.contacts.filterUpLimit},j=function(t){return t.contacts.contacts.filterDownLimit},N=function(t){return t.contacts.contacts.openMyMobileAndTabModal}}}]);
//# sourceMappingURL=396.6f0d369d.chunk.js.map