"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[682],{1916:function(t,e,a){a.d(e,{w:function(){return d}});var s=a(4420),n=a(487),i=a(5984),o={formLabel:"Filter_formLabel__Ozoh5",formInput:"Filter_formInput__XNLZn",contactsSection:"Filter_contactsSection__lb9Ll",contactsTitle:"Filter_contactsTitle__eTnDx",contactsList:"Filter_contactsList__78f6h",contactsData:"Filter_contactsData__q4ogS",contactsPhone:"Filter_contactsPhone__hxyN-",contactsItemWrapper:"Filter_contactsItemWrapper__-Mxdd",contactsItem:"Filter_contactsItem__CHFiw",contactsDetails:"Filter_contactsDetails__0UF-g",contactsName:"Filter_contactsName__gRaQA",checkbox:"Filter_checkbox__wp-8y",contactsButtonArea:"Filter_contactsButtonArea__0a5PO",contactsButton:"Filter_contactsButton__7e+W-",navigationArea:"Filter_navigationArea__OTHql",navigationButton:"Filter_navigationButton__xNnWu"},c=a(458),l=a(5075),r=a(184),d=function(){var t=(0,i.x0)(),e=(0,s.v9)(n.Af),a=(0,s.v9)(n.kL),d=(0,s.v9)(n.WS),u=(0,s.v9)(n.YI),m=(0,s.I0)(),p=e.filter((function(t){return t.name.toLowerCase().includes(u.trim().toLowerCase())&&""!==u.trim()})),h=function(t){if(t.target.getAttribute("data-id")){var e=t.currentTarget.getAttribute("data-id");m((0,l.he)(e)),m((0,l.h7)()),m((0,l.RH)())}},_=function(t){t.target.style.boxShadow="inset 0 0 10px 5px rgba(0, 0, 0, 0.3)",setTimeout((function(){t.target.style.boxShadow="none"}),1e3),m((0,l.GK)(t.target.name))},x=function(t){m((0,l.Nf)({status:t.target.checked,myUpdateStatusId:t.target.name}))};return(0,r.jsxs)("div",{className:o.contactList,children:[(0,r.jsxs)("label",{htmlFor:t,children:[(0,r.jsx)("span",{className:o.formLabel,children:"Search Appointments By Title:"}),(0,r.jsx)("input",{type:"text",placeholder:"Enter Task title",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Enter Task Title",required:!0,onChange:function(t){m((0,c.T)(t.target.value)),console.log(t.target.value)},id:t,autoComplete:"off",className:o.formInput,value:u})]}),""!==u&&0!==p.length&&(0,r.jsx)("ul",{className:o.contactsList,children:p.map((function(t){var e=p.indexOf(t);if(e>=d&&e<a)return(0,r.jsxs)("li",{"data-id":t._id,className:o.contactsItem,onClick:h,children:[(0,r.jsxs)("span",{className:o.contactsData,"data-id":t._id,children:[(0,r.jsx)("input",{type:"checkbox",className:o.checkbox,checked:t.status,name:t._id,onChange:x}),":"," ",(0,r.jsx)("span",{className:o.contactsPhone,"data-id":t._id,children:t.name})]}),(0,r.jsx)("span",{className:o.contactsButtonArea,children:(0,r.jsx)("button",{type:"submit",className:o.contactsButton,name:t._id,onClick:_,children:"Delete"})})]},t._id)}))})]})}},6682:function(t,e,a){a.r(e),a.d(e,{Contacts:function(){return S},default:function(){return T}});var s=a(1413),n=a(4925),i=a(4942),o=a(3433),c=a(9439),l=a(4420),r=a(2791),d=a(487),u=a(5075),m={contactsSection:"TasksCompletedList_contactsSection__zPZf2",contactsTitle:"TasksCompletedList_contactsTitle__C-sbK",contactsList:"TasksCompletedList_contactsList__rMpzJ",contactsListAlt:"TasksCompletedList_contactsListAlt__1YXeP",contactsData:"TasksCompletedList_contactsData__FCbD6",contactsPhone:"TasksCompletedList_contactsPhone__o5lEI",contactsItemWrapper:"TasksCompletedList_contactsItemWrapper__zitKQ",contactsItem:"TasksCompletedList_contactsItem__gZe57",contactsDetails:"TasksCompletedList_contactsDetails__0pLWn",contactsName:"TasksCompletedList_contactsName__uqsAL",checkbox:"TasksCompletedList_checkbox__86Cgb",contactsButtonArea:"TasksCompletedList_contactsButtonArea__4SiYs",contactsButton:"TasksCompletedList_contactsButton__iMJej",navigationArea:"TasksCompletedList_navigationArea__rMVMK",navigationButton:"TasksCompletedList_navigationButton__X7vix"},p=a(184),h=function(t){var e=t.children,a=(0,l.v9)(d.Af),s=((0,l.v9)(d.kL),(0,l.v9)(d.WS)),n=(0,l.v9)(d.xU),i=(0,l.v9)(d.zh),o=(0,l.I0)(),h=function(t){t.target.style.boxShadow="inset 0 0 10px 5px rgba(0, 0, 0, 0.3)",setTimeout((function(){t.target.style.boxShadow="none"}),1e3),o((0,u.GK)(t.target.name))},_=(0,l.v9)(d.YI),x=function(t){if(t.target.getAttribute("data-id")){var e=t.currentTarget.getAttribute("data-id");o((0,u.Gh)(e)),o((0,u.og)()),o((0,u._9)())}},f=(0,r.useState)(0),g=(0,c.Z)(f,2),N=g[0],j=g[1],C=(0,r.useState)(4),k=(0,c.Z)(C,2),b=k[0],v=k[1],S=function(t){t.target.style.boxShadow="inset 0 0 10px 5px rgba(0, 0, 0, 0.3)",setTimeout((function(){t.target.style.boxShadow="none"}),500),j(N-4),v(b-4)},T=function(t){o((0,u.Nf)({status:t.target.checked,myUpdateStatusId:t.target.name}))},I=(a.filter((function(t){return t.name.toLowerCase().includes(_.trim().toLowerCase())&&""!==_.trim()})),a.filter((function(t){return!0===t.status})));return(0,p.jsxs)("div",{className:m.contactsSection,children:[(0,p.jsx)("h3",{className:m.contactsTitle,children:"Fulfilled"}),e,0===I.length&&(0,p.jsxs)("div",{className:m.contactsListAlt,children:[n&&!i&&(0,p.jsx)("b",{className:m.notification,children:"Loading Tasks..."}),!n&&!i&&(0,p.jsx)("b",{className:m.notification,children:"No Tasks Here!!!"}),!n&&i&&(0,p.jsx)("b",{className:m.notification,children:"Error!!!"})]}),0!==I.length&&(0,p.jsxs)("ul",{className:m.contactsList,children:[console.log(I),I.map((function(t){var e=I.indexOf(t);if(e>=N&&e<b)return(0,p.jsxs)("li",{"data-id":t._id,className:m.contactsItem,onClick:x,children:[(0,p.jsxs)("span",{className:m.contactsData,"data-id":t._id,children:[(0,p.jsx)("input",{type:"checkbox",className:m.checkbox,checked:t.status,name:t._id,onChange:T}),":"," ",(0,p.jsx)("span",{className:m.contactsPhone,"data-id":t._id,children:t.name})]}),(0,p.jsx)("span",{className:m.contactsButtonArea,children:(0,p.jsx)("button",{type:"submit",className:m.contactsButton,name:t._id,onClick:h,children:"Delete"})})]},t._id)}))]}),(0,p.jsxs)("div",{className:m.navigationArea,children:[0!==N&&(0,p.jsx)("button",{className:m.navigationButton,onClick:S,children:"Prev"}),!(b>I.length)&&b!==I.length&&(0,p.jsx)("button",{className:m.navigationButton,onClick:function(t){t.target.style.boxShadow="inset 0 0 10px 5px rgba(0, 0, 0, 0.3)",setTimeout((function(){t.target.style.boxShadow="none"}),500),j(N+4),v(b+4)},children:"Forward"})]}),""!==_&&(0,p.jsx)("div",{className:m.navigationArea,children:0!==s&&(0,p.jsx)("button",{className:m.navigationButton,onClick:S,children:"Prev"})})]})},_=(a(1916),a(3733)),x={notification:"SortedCompletedTasks_notification__6MTf5",notificationShow:"SortedCompletedTasks_notificationShow__Jqwyy",sortedWrapper:"SortedCompletedTasks_sortedWrapper__O6FpK",coverWrapper:"SortedCompletedTasks_coverWrapper__-sMYd",contactsWrapperSpace:"SortedCompletedTasks_contactsWrapperSpace__toNO9",selected:"SortedCompletedTasks_selected__aEOTe",contactsDetailsHide:"SortedCompletedTasks_contactsDetailsHide__N8FQh",contactsDetailsShow:"SortedCompletedTasks_contactsDetailsShow__DR76z",closeModal:"SortedCompletedTasks_closeModal__8X40X",contactsDetailsArea:"SortedCompletedTasks_contactsDetailsArea__jikLk",contactImage:"SortedCompletedTasks_contactImage__I0POj",detailsTitle:"SortedCompletedTasks_detailsTitle__WzZ0n",detailsSection:"SortedCompletedTasks_detailsSection__yjYF9",detailsImageWrapper:"SortedCompletedTasks_detailsImageWrapper__WmOUk",detailsImage:"SortedCompletedTasks_detailsImage__OpuBp",detailsImageButton:"SortedCompletedTasks_detailsImageButton__JU0dd",detailsImageInput:"SortedCompletedTasks_detailsImageInput__Cohik",detailsSectionTitle:"SortedCompletedTasks_detailsSectionTitle__pmpFf",detailsWrapper:"SortedCompletedTasks_detailsWrapper__yjCiP",detailsItem:"SortedCompletedTasks_detailsItem__cGEhF",detailsCover:"SortedCompletedTasks_detailsCover__84U5y",detailsInfo:"SortedCompletedTasks_detailsInfo__1894o",details:"SortedCompletedTasks_details__7ssqe",detailsVal:"SortedCompletedTasks_detailsVal__zsUEv",detailsDetailsVal:"SortedCompletedTasks_detailsDetailsVal__2OV3k",detailsValPhone:"SortedCompletedTasks_detailsValPhone__wz3vy",detailsValInput:"SortedCompletedTasks_detailsValInput__Fi0iS",detailsDetailsValInput:"SortedCompletedTasks_detailsDetailsValInput__ggUq6",detailsValInputPhone:"SortedCompletedTasks_detailsValInputPhone__NYQha",backDrop:"SortedCompletedTasks_backDrop__Pvv+L",loader:"SortedCompletedTasks_loader__7XXH7",detailButton:"SortedCompletedTasks_detailButton__7I7pA",buttonWrapper:"SortedCompletedTasks_buttonWrapper__Tkrr8",detailsEditClose:"SortedCompletedTasks_detailsEditClose__2oCEp",backdrop:"SortedCompletedTasks_backdrop__21qKB",backdropIsHidden:"SortedCompletedTasks_backdropIsHidden__L9E3H",modalWindow:"SortedCompletedTasks_modalWindow__Mw1fX"};var f=a.p+"static/media/icons.77c8d2ef0bd65aab65a1e4f05688514c.svg",g=a(4137),N=a(7694),j=a.n(N),C=a(9557),k=(a(1107),a(1075)),b=["defaultValue"],v=["defaultValue"],S=function(){var t=(0,r.useState)(new Date),e=(0,c.Z)(t,2),a=e[0],m=e[1],N=(0,r.useState)(!1),S=(0,c.Z)(N,2),T=S[0],I=S[1],y=(0,r.useState)(""),w=(0,c.Z)(y,2),D=w[0],L=w[1],A=(0,r.useState)(!1),B=(0,c.Z)(A,2),W=B[0],M=B[1],Z=(0,l.v9)(d.WR),F=(0,r.useState)(Z.email),V=(0,c.Z)(F,2),E=V[0],P=V[1],U=(0,r.useState)(!1),q=(0,c.Z)(U,2),O=q[0],z=q[1],H=(0,r.useState)(""),R=(0,c.Z)(H,2),X=R[0],Y=R[1],K=(0,l.I0)(),Q=(0,l.v9)(d.xU),G=(0,l.v9)(d.kP),J=(0,l.v9)(d.Qc),$=(0,l.v9)(d.zh),tt=(0,k.ac)({query:"(min-width: 1280px)"}),et=(0,k.ac)({query:"(max-width: 1279px)"}),at=(0,l.v9)(d._4),st=function(){K((0,u.VK)()),I(!1),M(!1),K((0,u.CB)())},nt=function(t){L(t.target.value);var e,a=t.target.value,s=!1;a.length>45&&((e=(0,o.Z)(a)).pop(),t.target.value=e.join(""),s=!0),!0===s&&j().Notify.warning("Maximum Charater limit is 45")},it=function(t){I(!0),t.target.style.boxShadow="inset 0 0 10px 5px rgba(0, 0, 0, 0.3)",setTimeout((function(){t.target.style.boxShadow="none",document.querySelector('[name="username"]').focus()}),100)},ot=function(t){if(""!==D.trim()){var e=t.target.name;K((0,u.A0)({name:D,myUpdateId:e})),I(!1)}else""===D.trim()&&j().Notify.warning("Input is required");t.target.style.boxShadow="inset 0 0 10px 5px rgba(0, 0, 0, 0.3)",setTimeout((function(){t.target.style.boxShadow="none"}),500)},ct=function(){I(!1)},lt=function(t){P(t.target.value);var e,a=t.target.value,s=!1;a.length>200&&((e=(0,o.Z)(a)).pop(),t.target.value=e.join(""),s=!0),!0===s&&j().Notify.warning("Maximum Charater limit is 200")},rt=function(t){M(!0),t.target.style.boxShadow="inset 0 0 10px 5px rgba(0, 0, 0, 0.3)",setTimeout((function(){t.target.style.boxShadow="none",document.querySelector('[name="email"]').focus()}),100)},dt=function(t){if(""!==E.trim()){var e=t.target.name;K((0,u.ao)({email:E,myUpdateId:e})),M(!1)}else""===E.trim()&&j().Notify.warning("Input is required");t.target.style.boxShadow="inset 0 0 10px 5px rgba(0, 0, 0, 0.3)",setTimeout((function(){t.target.style.boxShadow="none"}),500)},ut=function(){M(!1),P(Z.email)},mt=function(t){z(!0),t.target.style.boxShadow="inset 0 0 10px 5px rgba(0, 0, 0, 0.3)",setTimeout((function(){t.target.style.boxShadow="none",document.querySelector('[name="date"]').focus()}),100)},pt=function(t){var e=t.target.name,s=new Date;a<=s?j().Notify.failure("Invalid date, choose a date in the future"):K((0,u.nW)({phone:a,myUpdateId:e})),z(!1),t.target.style.boxShadow="inset 0 0 10px 5px rgba(0, 0, 0, 0.3)",setTimeout((function(){t.target.style.boxShadow="none"}),500)},ht=function(){z(!1)},_t=function(t){var e=t.target.files[0],a=t.currentTarget.getAttribute("data-id");e&&K((0,u.On)({myFile:e,myId:a}))};return(0,r.useEffect)((function(){K((0,u.yF)())}),[K]),(0,r.useEffect)((function(){P(Z.email)}),[Z.email]),(0,r.useEffect)((function(){L(Z.name)}),[Z.name]),(0,r.useEffect)((function(){var t=navigator.language,e=new Date(Z.phone),a=new Intl.DateTimeFormat(t,{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!0});Y(a.format(e))}),[Z.phone]),(0,p.jsxs)("div",{className:(0,_.Z)(x.coverWrapper,(0,i.Z)({},x.contactsWrapperSpace,at&&tt)),children:[at&&et&&(0,p.jsx)("div",{className:(0,_.Z)(x.backdrop,(0,i.Z)({},x.backdropIsHidden,G)),children:(0,p.jsxs)("div",{className:x.modalWindow,children:[J&&(0,p.jsx)("div",{className:x.backDrop,children:(0,p.jsx)(g.Z1,{visible:!0,height:"80",width:"80",color:"#9225ff",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:x.loader})}),(0,p.jsx)("button",{className:x.closeModal,onClick:st,children:(0,p.jsx)("svg",{width:"10px",height:"10px",className:x.modalIcon,children:(0,p.jsx)("use",{href:"".concat(f,"#icon-cross")})})}),(0,p.jsx)("p",{className:x.detailsTitle,children:"CUSTOMER DETAILS"}),(0,p.jsx)("div",{className:x.detailsImageWrapper,children:(0,p.jsx)("img",{className:x.detailsImage,src:"https://oasis-tasks-backend.onrender.com".concat(Z.avatarURL),alt:"Contact"})}),(0,p.jsx)("input",{className:x.detailsImageButton,type:"file",accept:"image/*",name:"avatar",onChange:_t,id:"2","data-id":Z._id}),(0,p.jsx)("label",{className:x.detailsImageInput,htmlFor:"2",children:"Update Task Image +"}),(0,p.jsxs)("ul",{className:x.detailsWrapper,children:[(0,p.jsx)("li",{className:x.detailsItem,children:(0,p.jsxs)("span",{className:x.detailsCover,children:[(0,p.jsxs)("span",{className:x.detailsInfo,children:[(0,p.jsx)("span",{className:x.details,children:"Name:"})," ",!1===T?(0,p.jsx)("span",{className:x.detailsVal,children:(0,p.jsx)("i",{className:x.detail,children:Z.name})}):(0,p.jsx)("input",{type:"text",className:x.detailsValInput,required:!0,onChange:nt,"data-id":Z._id,name:"username",defaultValue:Z.name})]}),(0,p.jsxs)("span",{className:x.buttonWrapper,children:[!0===T&&(0,p.jsx)("button",{className:x.detailsEditClose,onClick:ct,children:(0,p.jsx)("svg",{width:"5px",height:"5px",className:x.modalIcon,children:(0,p.jsx)("use",{href:"".concat(f,"#icon-cross")})})}),!1===T?(0,p.jsx)("button",{className:x.detailButton,onClick:it,children:"Edit"}):(0,p.jsx)("button",{name:Z._id,className:x.detailButton,onClick:ot,children:"Save"})]})]})}),(0,p.jsx)("li",{className:x.detailsItem,children:(0,p.jsxs)("span",{className:x.detailsCover,children:[(0,p.jsxs)("span",{className:x.detailsInfo,children:[(0,p.jsx)("span",{className:x.details,children:"Booking Details:"})," ",!1===W?(0,p.jsxs)("pre",{className:x.detailsDetailsVal,children:[(0,p.jsx)("i",{className:x.detail,children:Z.email}),console.log(Z.email)]}):(0,p.jsx)("textarea",{type:"text",className:x.detailsDetailsValInput,required:!0,onChange:lt,"data-id":Z._id,name:"email",title:"Enter the details of your task",defaultValue:Z.email})]}),(0,p.jsxs)("span",{className:x.buttonWrapper,children:[!0===W&&(0,p.jsx)("button",{className:x.detailsEditClose,onClick:ut,children:(0,p.jsx)("svg",{width:"5px",height:"5px",className:x.modalIcon,children:(0,p.jsx)("use",{href:"".concat(f,"#icon-cross")})})}),!1===W?(0,p.jsx)("button",{className:x.detailButton,onClick:rt,children:"Edit"}):(0,p.jsx)("button",{name:Z._id,className:x.detailButton,onClick:dt,children:"Save"})]})]})}),(0,p.jsx)("li",{className:x.detailsItem,children:(0,p.jsxs)("span",{className:x.detailsCover,children:[(0,p.jsxs)("span",{className:x.detailsInfo,children:[(0,p.jsx)("span",{className:x.details,children:"Due Date:"})," ",!1===O?(0,p.jsx)("span",{className:x.detailsValPhone,children:(0,p.jsx)("i",{className:x.detail,children:X})}):(0,p.jsx)(C.Z,{"data-enable-time":!0,value:a,onChange:function(t){var e=new Date;t[0]<=e?j().Notify.warning("Choose a date in the future"):j().Notify.success("Due Date Selected"),m(t[0])},options:{minuteIncrement:1},render:function(t,e){t.defaultValue;var a=(0,n.Z)(t,b);return(0,p.jsx)("input",(0,s.Z)((0,s.Z)({},a),{},{ref:e,className:x.detailsValInputPhone,required:!0,"data-id":Z._id,name:"date"}))}})]}),(0,p.jsxs)("span",{className:x.buttonWrapper,children:[!0===O&&(0,p.jsx)("button",{className:x.detailsEditClose,onClick:ht,children:(0,p.jsx)("svg",{width:"5px",height:"5px",className:x.modalIcon,children:(0,p.jsx)("use",{href:"".concat(f,"#icon-cross")})})}),!1===O?(0,p.jsx)("button",{className:x.detailButton,onClick:mt,children:"Edit"}):(0,p.jsx)("button",{name:Z._id,className:x.detailButton,onClick:pt,children:"Save"})]})]})})]})]})}),(0,p.jsx)("b",{className:(0,_.Z)(x.notification,(0,i.Z)({},x.notificationShow,Q&&!$)),children:"Please wait..."}),$&&(0,p.jsx)("b",{className:x.notificationShow,children:"There was an error, logout and login again!!!"}),(0,p.jsxs)("div",{className:(0,_.Z)(x.contactsDetailsHide,(0,i.Z)({},x.contactsDetailsShow,at&&tt)),children:[J&&(0,p.jsx)("div",{className:x.backDrop,children:(0,p.jsx)(g.Z1,{visible:!0,height:"80",width:"80",color:"#5785FF",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:x.loader})}),(0,p.jsx)("button",{className:x.closeModal,onClick:st,children:(0,p.jsx)("svg",{width:"10px",height:"10px",className:x.modalIcon,children:(0,p.jsx)("use",{href:"".concat(f,"#icon-cross")})})}),(0,p.jsx)("p",{className:x.detailsTitle,children:"CUSTOMER DETAILS"}),(0,p.jsx)("div",{className:x.detailsImageWrapper,children:(0,p.jsx)("img",{className:x.detailsImage,src:"https://oasis-tasks-backend.onrender.com".concat(Z.avatarURL),alt:"Contact"})}),(0,p.jsx)("input",{className:x.detailsImageButton,type:"file",accept:"image/*",name:"avatar",onChange:_t,id:"2","data-id":Z._id}),(0,p.jsx)("label",{className:x.detailsImageInput,htmlFor:"2",children:"Update Task Image +"}),(0,p.jsxs)("ul",{className:x.detailsWrapper,children:[(0,p.jsx)("li",{className:x.detailsItem,children:(0,p.jsxs)("span",{className:x.detailsCover,children:[(0,p.jsxs)("span",{className:x.detailsInfo,children:[(0,p.jsx)("span",{className:x.details,children:"Name:"})," ",!1===T?(0,p.jsx)("span",{className:x.detailsVal,children:(0,p.jsx)("i",{className:x.detail,children:Z.name})}):(0,p.jsx)("input",{type:"text",className:x.detailsValInput,required:!0,onChange:nt,"data-id":Z._id,name:"username",defaultValue:Z.name})]}),(0,p.jsxs)("span",{className:x.buttonWrapper,children:[!0===T&&(0,p.jsx)("button",{className:x.detailsEditClose,onClick:ct,children:(0,p.jsx)("svg",{width:"5px",height:"5px",className:x.modalIcon,children:(0,p.jsx)("use",{href:"".concat(f,"#icon-cross")})})}),!1===T?(0,p.jsx)("button",{className:x.detailButton,onClick:it,children:"Edit"}):(0,p.jsx)("button",{name:Z._id,className:x.detailButton,onClick:ot,children:"Save"})]})]})}),(0,p.jsx)("li",{className:x.detailsItem,children:(0,p.jsxs)("span",{className:x.detailsCover,children:[(0,p.jsxs)("span",{className:x.detailsInfo,children:[(0,p.jsx)("span",{className:x.details,children:"Booking Details:"})," ",!1===W?(0,p.jsx)("pre",{className:x.detailsDetailsVal,children:(0,p.jsx)("i",{className:x.detail,children:Z.email})}):(0,p.jsx)("textarea",{type:"text",className:x.detailsDetailsValInput,required:!0,onChange:lt,"data-id":Z._id,name:"email",title:"Enter the details of your task",defaultValue:Z.email})]}),(0,p.jsxs)("span",{className:x.buttonWrapper,children:[!0===W&&(0,p.jsx)("button",{className:x.detailsEditClose,onClick:ut,children:(0,p.jsx)("svg",{width:"5px",height:"5px",className:x.modalIcon,children:(0,p.jsx)("use",{href:"".concat(f,"#icon-cross")})})}),!1===W?(0,p.jsx)("button",{className:x.detailButton,onClick:rt,children:"Edit"}):(0,p.jsx)("button",{name:Z._id,className:x.detailButton,onClick:dt,children:"Save"})]})]})}),(0,p.jsx)("li",{className:x.detailsItem,children:(0,p.jsxs)("span",{className:x.detailsCover,children:[(0,p.jsxs)("span",{className:x.detailsInfo,children:[(0,p.jsx)("span",{className:x.details,children:"Due Date:"})," ",!1===O?(0,p.jsx)("span",{className:x.detailsValPhone,children:(0,p.jsx)("i",{className:x.detail,children:X})}):(0,p.jsx)(C.Z,{"data-enable-time":!0,value:a,onChange:function(t){var e=new Date;t[0]<=e?j().Notify.warning("Choose a date in the future"):j().Notify.success("Due Date Selected"),m(t[0])},options:{minuteIncrement:1},render:function(t,e){t.defaultValue;var a=(0,n.Z)(t,v);return(0,p.jsx)("input",(0,s.Z)((0,s.Z)({},a),{},{ref:e,className:x.detailsValInputPhone,required:!0,"data-id":Z._id,name:"date"}))}})]}),(0,p.jsxs)("span",{className:x.buttonWrapper,children:[!0===O&&(0,p.jsx)("button",{className:x.detailsEditClose,onClick:ht,children:(0,p.jsx)("svg",{width:"5px",height:"5px",className:x.modalIcon,children:(0,p.jsx)("use",{href:"".concat(f,"#icon-cross")})})}),!1===O?(0,p.jsx)("button",{className:x.detailButton,onClick:mt,children:"Edit"}):(0,p.jsx)("button",{name:Z._id,className:x.detailButton,onClick:pt,children:"Save"})]})]})})]})]}),(0,p.jsx)("div",{className:(0,_.Z)(x.sortedWrapper,(0,i.Z)({},x.selected,at&&tt)),children:(0,p.jsx)(h,{})})]})},T=S},487:function(t,e,a){a.d(e,{Af:function(){return s},D1:function(){return m},F6:function(){return r},Fi:function(){return C},NX:function(){return u},Q9:function(){return c},Qc:function(){return f},U3:function(){return x},WR:function(){return _},WS:function(){return N},Y7:function(){return j},YI:function(){return n},Z2:function(){return v},Z6:function(){return l},_4:function(){return d},aR:function(){return k},kL:function(){return g},kP:function(){return b},qs:function(){return h},xL:function(){return p},xU:function(){return i},zh:function(){return o}});var s=function(t){return t.contacts.contacts.items},n=function(t){return t.filter},i=function(t){return t.contacts.contacts.isLoading},o=function(t){return t.contacts.contacts.error},c=function(t){return t.contacts.contacts.openMyModal},l=function(t){return t.contacts.contacts.openMyAllModal},r=function(t){return t.contacts.contacts.openMyPendingModal},d=function(t){return t.contacts.contacts.openMyCompletedModal},u=function(t){return t.contacts.contacts.openMyPastDueModal},m=function(t){return t.contacts.contacts.selectedContact},p=function(t){return t.contacts.contacts.selectedSortedAllContact},h=function(t){return t.contacts.contacts.selectedSortedPendingContact},_=function(t){return t.contacts.contacts.selectedSortedCompletedContact},x=function(t){return t.contacts.contacts.selectedSortedPastDueContact},f=function(t){return t.contacts.contacts.isSlideLoading},g=function(t){return t.contacts.contacts.filterUpLimit},N=function(t){return t.contacts.contacts.filterDownLimit},j=function(t){return t.contacts.contacts.openMyMobileAndTabModal},C=function(t){return t.contacts.contacts.openMyAllMobileAndTabModal},k=function(t){return t.contacts.contacts.openMyPendingMobileAndTabModal},b=function(t){return t.contacts.contacts.openMyCompletedMobileAndTabModal},v=function(t){return t.contacts.contacts.openMyPastDueMobileAndTabModal}},5984:function(t,e,a){a.d(e,{x0:function(){return s}});var s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(t)).reduce((function(t,e){return t+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=682.0b96732f.chunk.js.map