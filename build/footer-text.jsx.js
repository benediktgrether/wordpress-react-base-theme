(()=>{"use strict";var t={841:(t,e,r)=>{r.d(e,{E:()=>o,Y:()=>s});var a=r(715),n=r(790);const s={text:{type:"string"},alignment:{type:"string"}};function o({attributes:t,setAttributes:e,enableAlignment:r=!0,className:s=""}){let o="";switch(t.alignment){case"left":default:o="text-start";break;case"center":o="text-center";break;case"right":o="text-end"}const i=`${o} ${s}`.trim();return r?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.BlockControls,{children:(0,n.jsx)(a.AlignmentToolbar,{value:t.alignment,onChange:t=>e({alignment:t})})}),(0,n.jsx)(a.RichText,{value:t.text,onChange:t=>e({text:t}),placeholder:"Text eingabe...",className:i})]}):(0,n.jsx)(a.RichText,{value:t.text,onChange:t=>e({text:t}),placeholder:"Text eingabe...",className:i})}},790:t=>{t.exports=window.ReactJSXRuntime},715:t=>{t.exports=window.wp.blockEditor}},e={};function r(a){var n=e[a];if(void 0!==n)return n.exports;var s=e[a]={exports:{}};return t[a](s,s.exports,r),s.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var a in e)r.o(e,a)&&!r.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);const a=window.wp.blocks,n=window.wp.primitives;var s=r(790);const o=(0,s.jsx)(n.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,s.jsx)(n.Path,{d:"M18 5.5H6a.5.5 0 00-.5.5v3h13V6a.5.5 0 00-.5-.5zm.5 5H10v8h8a.5.5 0 00.5-.5v-7.5zm-10 0h-3V18a.5.5 0 00.5.5h2.5v-8zM6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z"})});var i=r(841);(0,a.registerBlockType)("basetheme/footer-text",{title:"Footer-text",icon:o,category:"layout",parent:["basetheme/footer-item"],description:"A Description",keywords:"[]",supports:{},attributes:{...i.Y},edit:function(t){const{attributes:e,setAttributes:r}=t;return(0,s.jsx)(i.E,{attributes:e,setAttributes:r})},save:()=>null})})();