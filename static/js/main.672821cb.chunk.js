(this["webpackJsonpphoto-website"]=this["webpackJsonpphoto-website"]||[]).push([[0],{17:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(10),s=c.n(r),i=c(5),o=c(1),j=function(){return Object(o.jsx)("nav",{children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)(i.b,{to:"/",children:"Home"})}),Object(o.jsx)("li",{children:Object(o.jsx)(i.b,{to:"/about",children:"About"})})]})})},u=function(){return Object(o.jsx)("div",{className:"footer",children:"Chen Bing Nan 2021\xa9"})},l=c(6),h=c.n(l),b=c(9),p=c(4),d=function(e){var t=e.searchHandler,c=e.setInput;return Object(o.jsxs)("div",{className:"search",children:[Object(o.jsx)("input",{onChange:function(e){c(e.target.value)},type:"text",id:"name"}),Object(o.jsx)("button",{onClick:t,children:"Search"})]})},O=function(e){var t=e.data;return Object(o.jsxs)("div",{className:"picture",children:[console.log(t.src.large),Object(o.jsx)("div",{className:"imageContainer",children:Object(o.jsx)("img",{src:t.src.large,alt:""})}),Object(o.jsxs)("p",{children:["Download Image :",Object(o.jsx)("a",{target:"_blank",href:t.src.large,style:{color:"blue"},children:"Click Here"})]})]})},x=function(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(null),s=Object(p.a)(r,2),i=s[0],j=s[1],u=Object(n.useState)(1),l=Object(p.a)(u,2),x=l[0],f=l[1],m=Object(n.useState)(""),v=Object(p.a)(m,2),g=v[0],w=v[1],y="563492ad6f9170000100000182e90c4547de4c1a86e107ab2e3a4a91 ",k="https://api.pexels.com/v1/curated?page=1&per_page=15",N="https://api.pexels.com/v1/search?query=".concat(g,"&per_page=15&page=1"),A=function(){var e=Object(b.a)(h.a.mark((function e(t){var c,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(2),e.next=3,fetch(t,{method:"GET",headers:{Accept:"application/json",Authorization:y}});case 3:return c=e.sent,e.next=6,c.json();case 6:n=e.sent,j(n.photos);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(b.a)(h.a.mark((function e(){var t,n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=""===c?"https://api.pexels.com/v1/curated?page=".concat(x,"&per_page=15"):"https://api.pexels.com/v1/search?query=".concat(c,"&per_page=15&page=").concat(x),f(x+1),e.next=4,fetch(t,{method:"GET",headers:{Accept:"application/json",Authorization:y}});case 4:return n=e.sent,e.next=7,n.json();case 7:a=e.sent,j(i.concat(a.photos));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){A(k)}),[]),Object(n.useEffect)((function(){A(""===g?k:N)}),[g]),Object(o.jsxs)("div",{style:{minHeight:"100vh"},children:[Object(o.jsx)(d,{searchHandler:function(){w(c)},setInput:a}),Object(o.jsx)("div",{className:"pictures",children:i&&i.map((function(e){return Object(o.jsx)(O,{data:e})}))}),Object(o.jsx)("div",{className:"morePicture",children:Object(o.jsx)("button",{onClick:C,children:"Load More"})})]})},f=function(){return Object(o.jsx)("div",{style:{minHeight:"100vh"},children:Object(o.jsx)("h1",{children:"About"})})},m=c(2);c(17);var v=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(j,{}),Object(o.jsxs)(m.c,{children:[Object(o.jsx)(m.a,{path:"/",element:Object(o.jsx)(x,{})}),Object(o.jsx)(m.a,{path:"/about",element:Object(o.jsx)(f,{})})]}),Object(o.jsx)(u,{})]})};s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(i.a,{children:Object(o.jsx)(v,{})})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.672821cb.chunk.js.map