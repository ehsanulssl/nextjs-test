(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[894],{4383:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/form",function(){return s(3743)}])},9414:function(e,a,s){"use strict";s.d(a,{Z:function(){return t}});var r=s(5893),l=s(1664),n=s.n(l);function t(e){let{children:a,...s}=e;return(0,r.jsxs)("div",{children:[(0,r.jsxs)("nav",{className:"navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0",children:[(0,r.jsx)("a",{className:"navbar-brand col-sm-3 col-md-2 mr-0",href:"#",children:"Sample Testing"}),(0,r.jsx)("input",{className:"form-control form-control-dark w-100",type:"text",placeholder:"Search","aria-label":"Search"}),(0,r.jsx)("ul",{className:"navbar-nav px-3",children:(0,r.jsx)("li",{className:"nav-item text-nowrap",children:(0,r.jsx)(n(),{className:"nav-link",href:"/",children:"Logout"})})})]}),(0,r.jsx)("div",{className:"container-fluid",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("nav",{className:"col-md-2 d-none d-md-block bg-light sidebar",children:(0,r.jsx)("div",{className:"sidebar-sticky",children:(0,r.jsxs)("ul",{className:"nav flex-column",children:[(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsxs)(n(),{className:"nav-link active",href:"/dashboard",children:[(0,r.jsx)("span",{"data-feather":"home"}),"Dashboard"]})}),(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsxs)(n(),{className:"nav-link",href:"/form",children:[(0,r.jsx)("span",{"data-feather":"file"}),"Create New Form"]})})]})})}),(0,r.jsx)("main",{role:"main",className:"col-md-9 ml-sm-auto col-lg-10 pt-3 px-4",children:a})]})})]})}},3743:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return d}});var r=s(5893);s(9598),s(1509);var l=s(9414),n=s(7294),t=s(1163),i=s(5675),c=s.n(i);function d(){let e=(0,t.useRouter)(),[a,s]=(0,n.useState)(""),[i,d]=(0,n.useState)(""),[o,m]=(0,n.useState)(null),[u,h]=(0,n.useState)({}),N=()=>{let s={};if(a.trim()||(s.yourName="Name is required"),i.trim()||(s.yourAddress="Address is required"),Object.keys(s).length>0){h(s);return}try{let s=[...JSON.parse(localStorage.getItem("formData")||"[]"),{yourName:a,yourAddress:i,yourImage:o}];localStorage.setItem("formData",JSON.stringify(s)),h({}),e.push("/dashboard")}catch(e){console.error("Error saving data to local storage:",e)}};return(0,r.jsx)(l.Z,{children:(0,r.jsx)("div",{className:"card",children:(0,r.jsxs)("div",{className:"card-body",children:[(0,r.jsx)("div",{className:"font-weight-bold",children:"Create New Entry"}),(0,r.jsx)("div",{className:"fs-4",children:"Start A Dashboard Entry Here"}),(0,r.jsx)("br",{}),(0,r.jsxs)("div",{className:"mb-3",children:[(0,r.jsx)("label",{htmlFor:"yourName",className:"form-label",children:"Your Name"}),(0,r.jsx)("input",{type:"email",className:"form-control ".concat(u.yourName?"is-invalid":""),id:"yourName",placeholder:"Put your name here",onChange:e=>s(e.target.value)}),u.yourName&&(0,r.jsx)("div",{className:"invalid-feedback",children:u.yourName})]}),(0,r.jsxs)("div",{className:"mb-3",children:[(0,r.jsx)("label",{htmlFor:"yourAddress",className:"form-label",children:"Your address"}),(0,r.jsx)("input",{type:"email",className:"form-control ".concat(u.yourAddress?"is-invalid":""),id:"yourAddress",placeholder:"Put your address here",onChange:e=>d(e.target.value)}),u.yourAddress&&(0,r.jsx)("div",{className:"invalid-feedback",children:u.yourAddress})]}),(0,r.jsxs)("div",{className:"mb-3",children:[(0,r.jsx)("label",{htmlFor:"yourImage",className:"form-label",children:"Your Image"}),(0,r.jsx)("input",{type:"file",className:"form-control",id:"yourImage",onChange:e=>{var a;let s=null===(a=e.target.files)||void 0===a?void 0:a[0];if(s){let e=new FileReader;e.onloadend=()=>{m(e.result)},e.readAsDataURL(s)}},accept:"image/*"})]}),(0,r.jsx)("div",{className:"mb-3",children:o&&(0,r.jsx)(c(),{src:o,alt:"Profile Preview",className:"mt-2 img-thumbnail",style:{maxWidth:"150px",maxHeight:"150px"}})}),(0,r.jsx)("button",{type:"button",onClick:e=>N(),className:"btn btn-primary float-right",children:"Submit"})]})})})}},1509:function(){},1163:function(e,a,s){e.exports=s(3719)}},function(e){e.O(0,[774,776,888,179],function(){return e(e.s=4383)}),_N_E=e.O()}]);