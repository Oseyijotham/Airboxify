"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[396],{3396:function(t,e,a){a.r(e),a.d(e,{Contacts:function(){return W},default:function(){return P}});var n=a(1413),s=a(4925),o=a(4942),i=a(3433),c=a(9439),l=a(5075),r=a(487),d={taskBook:"ContactForm_taskBook__BWW6C",formTitle:"ContactForm_formTitle__N6O4g",formSection:"ContactForm_formSection__4wcn3",button:"ContactForm_button__eSwX9",buttonArea:"ContactForm_buttonArea__IAEoE",formLabel:"ContactForm_formLabel__TSwxK",formInput:"ContactForm_formInput__GszVU"},u=a(4420),m=a(5984),h=a(7694),f=a.n(h),_=a(2791),p=a(9557),x=(a(1107),a(184)),g=["defaultValue"],C=function(t){var e=t.children,a=(0,m.x0)(),o=(0,m.x0)(),h=((0,u.v9)(r.Af),(0,u.I0)()),C=(0,_.useState)(new Date),b=(0,c.Z)(C,2),N=b[0],j=b[1];return(0,x.jsxs)("div",{className:d.taskBook,children:[(0,x.jsx)("h2",{className:d.formTitle,children:"Scheduler"}),(0,x.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),""!==t.target[0].value.trim()){var e=new Date;N<=e?f().Notify.failure("Invalid date, choose a date or time in the future"):h((0,l.uK)({name:t.target[0].value,phone:N}))}else f().Notify.warning("Empty spaces are not allowed")},className:d.formSection,children:[(0,x.jsxs)("label",{className:d.loginLabel,children:[(0,x.jsx)("span",{className:d.formLabel,children:"Appointment title:"}),(0,x.jsx)("input",{type:"text",placeholder:"Enter Task Title",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Enter Task Title",required:!0,autoComplete:"off",id:a,className:d.formInput,onChange:function(t){var e,a=t.target.value,n=!1;a.length>45&&((e=(0,i.Z)(a)).pop(),t.target.value=e.join(""),n=!0),!0===n&&f().Notify.warning("Maximum Charater limit is 45")}})]}),(0,x.jsxs)("label",{children:[(0,x.jsx)("span",{className:d.formLabel,children:"Due date:"}),(0,x.jsx)(p.Z,{"data-enable-time":!0,value:N,onChange:function(t){var e=new Date;t[0]<=e?f().Notify.warning("Choose a date in the future"):f().Notify.success("Due Date Selected"),j(t[0])},options:{minuteIncrement:1},render:function(t,e){t.defaultValue;var a=(0,s.Z)(t,g);return(0,x.jsx)("input",(0,n.Z)((0,n.Z)({},a),{},{ref:e,className:d.formInput,required:!0,id:o,name:"myDate"}))}})]}),(0,x.jsx)("div",{className:d.buttonArea,children:(0,x.jsx)("button",{type:"submit",name:"button",className:d.button,onClick:function(t){t.target.style.boxShadow="inset 0 0 10px 5px rgba(0, 0, 0, 0.3)",setTimeout((function(){t.target.style.boxShadow="none"}),1e3)},children:"Add Task"})})]}),e]})},b="ContactList_contactsSection__3KZcT",N="ContactList_contactsTitle__gHlpa",j="ContactList_contactsList__7leRd",v="ContactList_contactsData__gZODb",S="ContactList_contactsPhone__qIcDs",w="ContactList_contactsItem__x8C9b",I="ContactList_checkbox__F7osn",y="ContactList_contactsButtonArea__6jkW1",k="ContactList_contactsButton__6hBLW",D="ContactList_navigationArea__nXhaT",L="ContactList_navigationButton__ZT5QF",Z=function(t){var e=t.children,a=(0,u.v9)(r.Af),n=(0,u.v9)(r.kL),s=(0,u.v9)(r.WS),o=(0,_.useState)(),i=(0,c.Z)(o,2),d=(i[0],i[1],(0,u.I0)()),m=function(t){t.target.style.boxShadow="inset 0 0 10px 5px rgba(0, 0, 0, 0.3)",setTimeout((function(){t.target.style.boxShadow="none"}),1e3),d((0,l.GK)(t.target.name))},h=(0,u.v9)(r.YI),f=function(t){if(t.target.getAttribute("data-id")){var e=t.currentTarget.getAttribute("data-id");d((0,l.he)(e)),d((0,l.h7)())}},p=(0,_.useState)(0),g=(0,c.Z)(p,2),C=g[0],Z=g[1],T=(0,_.useState)(4),A=(0,c.Z)(T,2),F=A[0],B=A[1],E=function(t){if(t.target.style.boxShadow="inset 0 0 10px 5px rgba(0, 0, 0, 0.3)",setTimeout((function(){t.target.style.boxShadow="none"}),500),""===h&&(Z(C+4),B(F+4)),""!==h){console.log("OK");var e=n,a=s;d((0,l._w)(e)),d((0,l.ag)(a))}},V=function(t){if(t.target.style.boxShadow="inset 0 0 10px 5px rgba(0, 0, 0, 0.3)",setTimeout((function(){t.target.style.boxShadow="none"}),500),""===h&&(Z(C-4),B(F-4)),""!==h){var e=n,a=s;d((0,l.oQ)(e)),d((0,l.M3)(a))}},W=function(t){d((0,l.Nf)({status:t.target.checked,myUpdateStatusId:t.target.name}))},P=a.filter((function(t){return t.name.toLowerCase().includes(h.trim().toLowerCase())&&""!==h.trim()}));return(0,x.jsxs)("div",{className:b,children:[(0,x.jsx)("h3",{className:N,children:"Appointments List"}),e,""===h&&0!==a.length&&(0,x.jsx)("ul",{className:j,children:a.map((function(t){var e=a.indexOf(t);if(e>=C&&e<F)return(0,x.jsxs)("li",{"data-id":t._id,className:w,onClick:f,children:[(0,x.jsxs)("span",{className:v,"data-id":t._id,children:[(0,x.jsx)("input",{type:"checkbox",className:I,checked:t.status,name:t._id,onChange:W}),":"," ",(0,x.jsx)("span",{className:S,"data-id":t._id,children:t.name})]}),(0,x.jsx)("span",{className:y,children:(0,x.jsx)("button",{type:"submit",className:k,name:t._id,onClick:m,children:"Delete"})})]},t._id)}))}),""===h&&(0,x.jsxs)("div",{className:D,children:[0!==C&&(0,x.jsx)("button",{className:L,onClick:V,children:"Prev"}),!(F>a.length)&&F!==a.length&&(0,x.jsx)("button",{className:L,onClick:E,children:"Forward"})]}),""!==h&&(0,x.jsxs)("div",{className:D,children:[0!==s&&(0,x.jsx)("button",{className:L,onClick:V,children:"Prev"}),!(n>P.length)&&n!==P.length&&(0,x.jsx)("button",{className:L,onClick:E,children:"Forward"})]})]})},T=a(1916),A=a(3733),F={notification:"Contacts_notification__S7Pce",notificationShow:"Contacts_notificationShow__kQwFb",sortedWrapper:"Contacts_sortedWrapper__MSHB7",coverWrapper:"Contacts_coverWrapper__X4gza",selected:"Contacts_selected__JPpLk",contactsDetailsHide:"Contacts_contactsDetailsHide__EAxL5",contactsDetailsShow:"Contacts_contactsDetailsShow__GNtTf",closeModal:"Contacts_closeModal__mVT9L",contactsDetailsArea:"Contacts_contactsDetailsArea__qByv6",contactImage:"Contacts_contactImage__9S+4-",detailsSection:"Contacts_detailsSection__-isHv",detailsImageWrapper:"Contacts_detailsImageWrapper__4e94u",detailsImage:"Contacts_detailsImage__Fv6gk",detailsImageButton:"Contacts_detailsImageButton__R1iMX",detailsImageInput:"Contacts_detailsImageInput__pywld",detailsSectionTitle:"Contacts_detailsSectionTitle__zASfN",detailsWrapper:"Contacts_detailsWrapper__C50Aa",detailsItem:"Contacts_detailsItem__DEXoV",detailsCover:"Contacts_detailsCover__lqSnp",detailsInfo:"Contacts_detailsInfo__HEN35",details:"Contacts_details__xkbEz",detailsVal:"Contacts_detailsVal__AIPnW",detailsDetailsVal:"Contacts_detailsDetailsVal__GxEUp",detailsValPhone:"Contacts_detailsValPhone__28REO",detailsValInput:"Contacts_detailsValInput__XHX6i",detailsDetailsValInput:"Contacts_detailsDetailsValInput__kuePv",detailsValInputPhone:"Contacts_detailsValInputPhone__Z59HF",backDrop:"Contacts_backDrop__of3D3",loader:"Contacts_loader__jgaE8",detailButton:"Contacts_detailButton__+1M8g",buttonWrapper:"Contacts_buttonWrapper__u4A+7",detailsEditClose:"Contacts_detailsEditClose__3PDcl"};var B=a.p+"static/media/icons.77c8d2ef0bd65aab65a1e4f05688514c.svg",E=a(4137),V=["defaultValue"],W=function(){var t=(0,_.useState)(new Date),e=(0,c.Z)(t,2),a=e[0],d=e[1],m=(0,_.useState)(!1),h=(0,c.Z)(m,2),g=h[0],b=h[1],N=(0,_.useState)(""),j=(0,c.Z)(N,2),v=j[0],S=j[1],w=(0,_.useState)(!1),I=(0,c.Z)(w,2),y=I[0],k=I[1],D=(0,u.v9)(r.D1),L=(0,_.useState)(D.email),W=(0,c.Z)(L,2),P=W[0],M=W[1],q=(0,_.useState)(!1),z=(0,c.Z)(q,2),U=z[0],H=z[1],X=(0,_.useState)(""),O=(0,c.Z)(X,2),Q=O[0],K=O[1],G=(0,u.I0)(),R=(0,u.v9)(r.xU),Y=(0,u.v9)(r.Qc),$=(0,u.v9)(r.zh),J=(0,u.v9)(r.Q9);return(0,_.useEffect)((function(){G((0,l.yF)())}),[G]),(0,_.useEffect)((function(){M(D.email)}),[D.email]),(0,_.useEffect)((function(){S(D.name)}),[D.name]),(0,_.useEffect)((function(){var t=navigator.language,e=new Date(D.phone),a=new Intl.DateTimeFormat(t,{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!0});K(a.format(e))}),[D.phone]),(0,x.jsx)("div",{className:(0,A.Z)(F.coverWrapper,{}),children:(0,x.jsx)("div",{className:(0,A.Z)(F.sortedWrapper,(0,o.Z)({},F.selected,J)),children:(0,x.jsxs)(C,{children:[(0,x.jsx)("b",{className:(0,A.Z)(F.notification,(0,o.Z)({},F.notificationShow,R&&!$)),children:"Please wait..."}),$&&(0,x.jsx)("b",{className:F.notificationShow,children:"There was an error, logout and login again!!!"}),(0,x.jsxs)("div",{className:(0,A.Z)(F.contactsDetailsHide,(0,o.Z)({},F.contactsDetailsShow,J)),children:[Y&&(0,x.jsx)("div",{className:F.backDrop,children:(0,x.jsx)(E.Z1,{visible:!0,height:"80",width:"80",color:"#5785FF",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:F.loader})}),(0,x.jsx)("button",{className:F.closeModal,onClick:function(){G((0,l.Mr)()),b(!1),k(!1)},children:(0,x.jsx)("svg",{width:"10px",height:"10px",className:F.modalIcon,children:(0,x.jsx)("use",{href:"".concat(B,"#icon-cross")})})}),(0,x.jsx)("div",{className:F.detailsImageWrapper,children:(0,x.jsx)("img",{className:F.detailsImage,src:"https://oasis-tasks-backend.onrender.com".concat(D.avatarURL),alt:"Contact"})}),(0,x.jsx)("input",{className:F.detailsImageButton,type:"file",accept:"image/*",name:"avatar",onChange:function(t){var e=t.target.files[0],a=t.currentTarget.getAttribute("data-id");e&&G((0,l.im)({myFile:e,myId:a}))},id:"2","data-id":D._id}),(0,x.jsx)("label",{className:F.detailsImageInput,htmlFor:"2",children:"Update Task Image +"}),(0,x.jsxs)("ul",{className:F.detailsWrapper,children:[(0,x.jsx)("li",{className:F.detailsItem,children:(0,x.jsxs)("span",{className:F.detailsCover,children:[(0,x.jsxs)("span",{className:F.detailsInfo,children:[(0,x.jsx)("span",{className:F.details,children:"Task Title:"})," ",!1===g?(0,x.jsx)("span",{className:F.detailsVal,children:(0,x.jsx)("i",{className:F.detail,children:D.name})}):(0,x.jsx)("input",{type:"text",className:F.detailsValInput,required:!0,onChange:function(t){S(t.target.value);var e,a=t.target.value,n=!1;a.length>30&&((e=(0,i.Z)(a)).pop(),t.target.value=e.join(""),n=!0),!0===n&&f().Notify.warning("Maximum Charater limit is 30")},"data-id":D._id,name:"username",defaultValue:D.name})]}),(0,x.jsxs)("span",{className:F.buttonWrapper,children:[!0===g&&(0,x.jsx)("button",{className:F.detailsEditClose,onClick:function(){b(!1)},children:(0,x.jsx)("svg",{width:"5px",height:"5px",className:F.modalIcon,children:(0,x.jsx)("use",{href:"".concat(B,"#icon-cross")})})}),!1===g?(0,x.jsx)("button",{className:F.detailButton,onClick:function(t){b(!0),t.target.style.boxShadow="inset 0 0 10px 5px rgba(0, 0, 0, 0.3)",setTimeout((function(){t.target.style.boxShadow="none",document.querySelector('[name="username"]').focus()}),100)},children:"Edit"}):(0,x.jsx)("button",{name:D._id,className:F.detailButton,onClick:function(t){if(""!==v.trim()){var e=t.target.name;G((0,l.bZ)({name:v,myUpdateId:e})),b(!1)}else""===v.trim()&&f().Notify.warning("Input is required");t.target.style.boxShadow="inset 0 0 10px 5px rgba(0, 0, 0, 0.3)",setTimeout((function(){t.target.style.boxShadow="none"}),500)},children:"Save"})]})]})}),(0,x.jsx)("li",{className:F.detailsItem,children:(0,x.jsxs)("span",{className:F.detailsCover,children:[(0,x.jsxs)("span",{className:F.detailsInfo,children:[(0,x.jsx)("span",{className:F.details,children:"Task Details:"})," ",!1===y?(0,x.jsxs)("pre",{className:F.detailsDetailsVal,children:[(0,x.jsx)("i",{className:F.detail,children:D.email}),console.log(D.email)]}):(0,x.jsx)("textarea",{type:"text",className:F.detailsDetailsValInput,required:!0,onChange:function(t){M(t.target.value);var e,a=t.target.value,n=!1;a.length>200&&((e=(0,i.Z)(a)).pop(),t.target.value=e.join(""),n=!0),!0===n&&f().Notify.warning("Maximum Charater limit is 200")},"data-id":D._id,name:"email",title:"Enter the details of your task",defaultValue:D.email})]}),(0,x.jsxs)("span",{className:F.buttonWrapper,children:[!0===y&&(0,x.jsx)("button",{className:F.detailsEditClose,onClick:function(){k(!1),M(D.email)},children:(0,x.jsx)("svg",{width:"5px",height:"5px",className:F.modalIcon,children:(0,x.jsx)("use",{href:"".concat(B,"#icon-cross")})})}),!1===y?(0,x.jsx)("button",{className:F.detailButton,onClick:function(t){k(!0),t.target.style.boxShadow="inset 0 0 10px 5px rgba(0, 0, 0, 0.3)",setTimeout((function(){t.target.style.boxShadow="none",document.querySelector('[name="email"]').focus()}),100)},children:"Edit"}):(0,x.jsx)("button",{name:D._id,className:F.detailButton,onClick:function(t){if(""!==P.trim()){var e=t.target.name;G((0,l.NO)({email:P,myUpdateId:e})),k(!1)}else""===P.trim()&&f().Notify.warning("Input is required");t.target.style.boxShadow="inset 0 0 10px 5px rgba(0, 0, 0, 0.3)",setTimeout((function(){t.target.style.boxShadow="none"}),500)},children:"Save"})]})]})}),(0,x.jsx)("li",{className:F.detailsItem,children:(0,x.jsxs)("span",{className:F.detailsCover,children:[(0,x.jsxs)("span",{className:F.detailsInfo,children:[(0,x.jsx)("span",{className:F.details,children:"Due Date:"})," ",!1===U?(0,x.jsx)("span",{className:F.detailsValPhone,children:(0,x.jsx)("i",{className:F.detail,children:Q})}):(0,x.jsx)(p.Z,{"data-enable-time":!0,value:a,onChange:function(t){var e=new Date;t[0]<=e?f().Notify.warning("Choose a date in the future"):f().Notify.success("Due Date Selected"),d(t[0])},options:{minuteIncrement:1},render:function(t,e){t.defaultValue;var a=(0,s.Z)(t,V);return(0,x.jsx)("input",(0,n.Z)((0,n.Z)({},a),{},{ref:e,className:F.detailsValInputPhone,required:!0,"data-id":D._id,name:"date"}))}})]}),(0,x.jsxs)("span",{className:F.buttonWrapper,children:[!0===U&&(0,x.jsx)("button",{className:F.detailsEditClose,onClick:function(){H(!1)},children:(0,x.jsx)("svg",{width:"5px",height:"5px",className:F.modalIcon,children:(0,x.jsx)("use",{href:"".concat(B,"#icon-cross")})})}),!1===U?(0,x.jsx)("button",{className:F.detailButton,onClick:function(t){H(!0),t.target.style.boxShadow="inset 0 0 10px 5px rgba(0, 0, 0, 0.3)",setTimeout((function(){t.target.style.boxShadow="none",document.querySelector('[name="date"]').focus()}),100)},children:"Edit"}):(0,x.jsx)("button",{name:D._id,className:F.detailButton,onClick:function(t){var e=t.target.name,n=new Date;a<=n?f().Notify.failure("Invalid date, choose a date in the future"):G((0,l.jX)({phone:a,myUpdateId:e})),H(!1),t.target.style.boxShadow="inset 0 0 10px 5px rgba(0, 0, 0, 0.3)",setTimeout((function(){t.target.style.boxShadow="none"}),500)},children:"Save"})]})]})})]})]}),(0,x.jsx)(Z,{children:(0,x.jsx)(T.w,{})})]})})})},P=W},1916:function(t,e,a){a.d(e,{w:function(){return d}});var n=a(4420),s=a(487),o=a(5984),i={formLabel:"Filter_formLabel__Ozoh5",formInput:"Filter_formInput__XNLZn",contactsList:"Filter_contactsList__78f6h",contactsData:"Filter_contactsData__q4ogS",contactsItem:"Filter_contactsItem__CHFiw",contactsPhone:"Filter_contactsPhone__hxyN-",contactsButtonArea:"Filter_contactsButtonArea__0a5PO",contactsButton:"Filter_contactsButton__7e+W-",checkbox:"Filter_checkbox__wp-8y"},c=a(458),l=a(5075),r=a(184),d=function(){var t=(0,o.x0)(),e=(0,n.v9)(s.Af),a=(0,n.v9)(s.kL),d=(0,n.v9)(s.WS),u=(0,n.v9)(s.YI),m=(0,n.I0)(),h=e.filter((function(t){return t.name.toLowerCase().includes(u.trim().toLowerCase())&&""!==u.trim()})),f=function(t){if(t.target.getAttribute("data-id")){var e=t.currentTarget.getAttribute("data-id");m((0,l.he)(e)),m((0,l.h7)())}},_=function(t){t.target.style.boxShadow="inset 0 0 10px 5px rgba(0, 0, 0, 0.3)",setTimeout((function(){t.target.style.boxShadow="none"}),1e3),m((0,l.GK)(t.target.name))};return(0,r.jsxs)("div",{className:i.contactList,children:[(0,r.jsxs)("label",{htmlFor:t,children:[(0,r.jsx)("span",{className:i.formLabel,children:"Search Appointments By Title:"}),(0,r.jsx)("input",{type:"text",placeholder:"Enter Task title",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Enter Task Title",required:!0,onChange:function(t){m((0,c.T)(t.target.value)),console.log(t.target.value)},id:t,autoComplete:"off",className:i.formInput,value:u})]}),""!==u&&0!==h.length&&(0,r.jsx)("ul",{className:i.contactsList,children:h.map((function(t){var e=h.indexOf(t);if(e>=d&&e<a)return(0,r.jsxs)("li",{"data-id":t._id,className:i.contactsItem,onClick:f,children:[(0,r.jsxs)("span",{className:i.contactsData,"data-id":t._id,children:[(0,r.jsx)("input",{type:"checkbox",className:i.checkbox}),":"," ",(0,r.jsx)("span",{className:i.contactsPhone,"data-id":t._id,children:t.name})]}),(0,r.jsx)("span",{className:i.contactsButtonArea,children:(0,r.jsx)("button",{type:"submit",className:i.contactsButton,name:t._id,onClick:_,children:"Delete"})})]},t._id)}))})]})}},487:function(t,e,a){a.d(e,{Af:function(){return n},D1:function(){return m},F6:function(){return r},NX:function(){return u},Q9:function(){return c},Qc:function(){return x},U3:function(){return p},WR:function(){return _},WS:function(){return C},YI:function(){return s},Z6:function(){return l},_4:function(){return d},kL:function(){return g},qs:function(){return f},xL:function(){return h},xU:function(){return o},zh:function(){return i}});var n=function(t){return t.contacts.contacts.items},s=function(t){return t.filter},o=function(t){return t.contacts.contacts.isLoading},i=function(t){return t.contacts.contacts.error},c=function(t){return t.contacts.contacts.openMyModal},l=function(t){return t.contacts.contacts.openMyAllModal},r=function(t){return t.contacts.contacts.openMyPendingModal},d=function(t){return t.contacts.contacts.openMyCompletedModal},u=function(t){return t.contacts.contacts.openMyPastDueModal},m=function(t){return t.contacts.contacts.selectedContact},h=function(t){return t.contacts.contacts.selectedSortedAllContact},f=function(t){return t.contacts.contacts.selectedSortedPendingContact},_=function(t){return t.contacts.contacts.selectedSortedCompletedContact},p=function(t){return t.contacts.contacts.selectedSortedPastDueContact},x=function(t){return t.contacts.contacts.isSlideLoading},g=function(t){return t.contacts.contacts.filterUpLimit},C=function(t){return t.contacts.contacts.filterDownLimit}}}]);
//# sourceMappingURL=396.a16343aa.chunk.js.map