(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),s=a.n(c),o=a(1),l=a.n(o),u=a(5),i=a(2),m=function(e){var t=e.userObj,a=t.name,n=t.email,c=t.address;return r.a.createElement("p",null,"By ".concat(a),r.a.createElement("br",null),n,r.a.createElement("br",null),"".concat(c.street,", ").concat(c.suite,", ").concat(c.city))},p=function(e,t){return(e||"").split(new RegExp("(".concat(t,")"),"gi")).map(function(e,a){return r.a.createElement("span",{key:"".concat(e+a)},e.toLowerCase()===t.toLowerCase()?r.a.createElement("span",{className:"highlighted"},e):e)})},d=function(e){var t=e.comment,a=t.name,n=t.body,c=t.email,s=t.id,o=e.highlightedPart;return r.a.createElement("div",{className:"comment"},r.a.createElement("dt",null,"Comment ".concat(s,": "),p(n,o)),r.a.createElement("dd",{className:"description"},"Name:",p(a,o),r.a.createElement("br",null),"Email: ".concat(c)))},h=function(e){var t=e.comments,a=e.highlight;return r.a.createElement("dl",null,t.map(function(e){return r.a.createElement(d,{comment:e,key:e.id,highlightedPart:a})}))},f=function(e){var t=e.post,a=t.id,n=t.user,c=t.title,s=t.body,o=t.commentList,l=e.highlightedPart;return r.a.createElement("div",{className:"post"},r.a.createElement("dt",{className:"title"},"Post ".concat(a,": "),p(c,l)),r.a.createElement("dd",{className:"description"},r.a.createElement("span",{className:"post-body"},p(s,l)),r.a.createElement("br",null),r.a.createElement("span",{className:"user-info"},r.a.createElement(m,{userObj:n})),r.a.createElement(h,{comments:o,highlight:l})))},b=function(e){var t=e.posts,a=e.highlight;return r.a.createElement("dl",null,t.map(function(e){return r.a.createElement(f,{post:e,key:e.id,highlightedPart:a})}))},E=(a(12),function(){var e;return l.a.async(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.awrap(fetch("https://jsonplaceholder.typicode.com/comments"));case 2:return e=t.sent,t.abrupt("return",e.json());case 4:case"end":return t.stop()}})}),g=function(){var e;return l.a.async(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.awrap(fetch("https://jsonplaceholder.typicode.com/users"));case 2:return e=t.sent,t.abrupt("return",e.json());case 4:case"end":return t.stop()}})},w=function(){var e;return l.a.async(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.awrap(fetch("https://jsonplaceholder.typicode.com/posts"));case 2:return e=t.sent,t.abrupt("return",e.json());case 4:case"end":return t.stop()}})},v=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(!1),o=Object(i.a)(s,2),m=o[0],p=o[1],d=Object(n.useState)(!1),h=Object(i.a)(d,2),f=h[0],v=h[1],y=Object(n.useState)(!1),j=Object(i.a)(y,2),N=j[0],x=j[1],O=Object(n.useState)(""),L=Object(i.a)(O,2),C=L[0],k=L[1],S=a.filter(function(e){var t=e.title,a=e.body,n=e.commentList,r=C.toLowerCase();return t.toLowerCase().includes(r)||a.toLowerCase().includes(r)||n.some(function(e){return e.name.toLowerCase().includes(r)||e.body.toLowerCase().includes(r)})});return N?r.a.createElement("p",{className:"error-message"},"Oops, something went wrong!"):r.a.createElement("div",{className:"App"},f?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"top"},r.a.createElement("h1",{className:"table__heading"},"Dynamic list of posts"),r.a.createElement("input",{type:"text",className:"search-bar",placeholder:"Search...",onChange:function(e){return k(e.target.value.replace(/^\s+/,""))},value:C})),r.a.createElement(b,{posts:S,highlight:C})):r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"button",type:"button",onClick:function(){var e,t,a,n;return l.a.async(function(r){for(;;)switch(r.prev=r.next){case 0:return p(!0),r.prev=1,r.next=4,l.a.awrap(g());case 4:return e=r.sent,r.next=7,l.a.awrap(w());case 7:return t=r.sent,r.next=10,l.a.awrap(E());case 10:a=r.sent,n=t.map(function(t){var n=e.find(function(e){return e.id===t.userId}),r=a.filter(function(e){return e.postId===t.id});return Object(u.a)({},t,{user:n,commentList:r})}),c(n),v(!0),r.next=20;break;case 16:r.prev=16,r.t0=r.catch(1),p(!1),x(!0);case 20:case"end":return r.stop()}},null,null,[[1,16]])},disabled:m},m?"Loading...":"Load")))};s.a.render(r.a.createElement(v,null),document.getElementById("root"))},6:function(e,t,a){e.exports=a(13)}},[[6,1,2]]]);
//# sourceMappingURL=main.79372674.chunk.js.map