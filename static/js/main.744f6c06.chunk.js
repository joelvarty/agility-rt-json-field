(this["webpackJsonpagility-rt-json-field"]=this["webpackJsonpagility-rt-json-field"]||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),o=n(3),i=n.n(o),c=(n(9),n(4)),l=n(0);var d=function(){var e=Object(a.useState)(""),t=Object(c.a)(e,2),n=t[0],s=t[1];return Object(a.useEffect)((function(){window.addEventListener("message",(function(e){console.log("Got message",e.data),"setInitialValueForCustomField"===e.data.type&&(console.log("GOT VALUE",e.data.message),n!==e.data.message&&s(e.data.message))}),!1)}),[]),Object(l.jsx)("div",{className:"field-row",children:Object(l.jsxs)("label",{children:["Content:",Object(l.jsx)("input",{type:"text",value:n,onChange:function(e){var t;(t=e.target.value)!==n&&(console.log("Value changed",n,t),s(t),window.parent&&window.parent.postMessage({message:t,type:"setNewValueFromCustomField"},"*"))}})]})})},r=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,12)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),o(e),i(e)}))};i.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(d,{})}),document.getElementById("root")),r()},9:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.744f6c06.chunk.js.map