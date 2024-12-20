(()=>{"use strict";var e={470:(e,t,i)=>{i.d(t,{_V:()=>u,Jh:()=>m,E5:()=>d});const a=window.wp.apiFetch;var n=i.n(a),r=i(427),s=i(715),l=i(87);const o=i.p+"images/placeholder-image.d2f148ed.png";var c=i(790);const d={mediaId:{type:"number"},mediaUrl:{type:"string",default:o},imageSize:{type:"string",default:"full"},loading:{type:"boolean",default:!0}};function m({attributes:e,setAttributes:t,imageSizeOptions:i}){return(0,l.useEffect)((()=>{!async function(){try{if(!e.mediaId)return void console.error("Media ID is missing.");const i=await n()({path:`/wp/v2/media/${e.mediaId}`,method:"GET"});if(!i||!i.media_details)return void console.error("Invalid response:",i);t({mediaUrl:i.media_details.sizes[e.imageSize]?.source_url||i.source_url})}catch(e){console.error("Error fetching media:",e)}}()}),[e.mediaId,e.imageSize,t]),(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)(r.PanelBody,{title:"Bild Einstellungen",initialOpen:!0,children:[(0,c.jsx)(r.PanelRow,{children:(0,c.jsx)(s.MediaUploadCheck,{children:(0,c.jsx)(s.MediaUpload,{onSelect:function(e){t({mediaId:e.id,mediaUrl:e.url})},value:e.mediaId,render:({open:e})=>(0,c.jsx)(r.Button,{variant:"primary",onClick:e,children:"Bild auswählen"})})})}),(0,c.jsx)(r.PanelRow,{children:(0,c.jsx)("div",{className:"ratio ratio-16x9",children:(0,c.jsx)("img",{className:"img-fluid object-fit-cover",src:e.mediaUrl,alt:"Select",width:200})})}),(0,c.jsx)(r.PanelRow,{children:(0,c.jsx)(r.SelectControl,{label:"Bildgröße",value:e.imageSize,options:i,onChange:function(e){t({imageSize:e})}})}),(0,c.jsx)(r.PanelRow,{children:(0,c.jsx)(r.ToggleControl,{label:"Lazy Loading aktivieren",checked:e.loading,onChange:function(e){t({loading:e})}})})]})})}function u({mediaUrl:e,variant:t}){const i="cover"===t?"w-100 h-100 object-fit-cover":"w-auto h-100";return(0,c.jsx)("img",{className:i,src:e,alt:"Select Image"})}},841:(e,t,i)=>{i.d(t,{E:()=>s,Y:()=>r});var a=i(715),n=i(790);const r={text:{type:"string"},alignment:{type:"string"}};function s({attributes:e,setAttributes:t,enableAlignment:i=!0,className:r=""}){let s="";switch(e.alignment){case"left":default:s="text-start";break;case"center":s="text-center";break;case"right":s="text-end"}const l=`${s} ${r}`.trim();return i?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.BlockControls,{children:(0,n.jsx)(a.AlignmentToolbar,{value:e.alignment,onChange:e=>t({alignment:e})})}),(0,n.jsx)(a.RichText,{value:e.text,onChange:e=>t({text:e}),placeholder:"Text eingabe...",className:l})]}):(0,n.jsx)(a.RichText,{value:e.text,onChange:e=>t({text:e}),placeholder:"Text eingabe...",className:l})}},790:e=>{e.exports=window.ReactJSXRuntime},715:e=>{e.exports=window.wp.blockEditor},427:e=>{e.exports=window.wp.components},87:e=>{e.exports=window.wp.element}},t={};function i(a){var n=t[a];if(void 0!==n)return n.exports;var r=t[a]={exports:{}};return e[a](r,r.exports,i),r.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var a in t)i.o(t,a)&&!i.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");if(a.length)for(var n=a.length-1;n>-1&&(!e||!/^http(s?):/.test(e));)e=a[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})();const a=window.wp.blocks;var n=i(715);const r=window.wp.primitives;var s=i(790);const l=(0,s.jsx)(r.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,s.jsx)(r.Path,{d:"M15.5 9.5a1 1 0 100-2 1 1 0 000 2zm0 1.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm-2.25 6v-2a2.75 2.75 0 00-2.75-2.75h-4A2.75 2.75 0 003.75 15v2h1.5v-2c0-.69.56-1.25 1.25-1.25h4c.69 0 1.25.56 1.25 1.25v2h1.5zm7-2v2h-1.5v-2c0-.69-.56-1.25-1.25-1.25H15v-1.5h2.5A2.75 2.75 0 0120.25 15zM9.5 8.5a1 1 0 11-2 0 1 1 0 012 0zm1.5 0a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z",fillRule:"evenodd"})});var o=i(470),c=i(841);(0,a.registerBlockType)("basetheme/person",{title:"Person",icon:l,supports:{},parent:["basetheme/grid-item","basetheme/container"],attributes:{...o.E5,...c.Y,firstname:{type:"string",default:"First Name"},lastname:{type:"string",default:"Last Name"},position:{type:"string",default:"Position"},email:{type:"string",default:"Email"},phone:{type:"string",default:"Phone"}},edit:function(e){const{attributes:t,setAttributes:i}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.InspectorControls,{children:(0,s.jsx)(o.Jh,{attributes:t,setAttributes:i,imageSizeOptions:d})}),(0,s.jsxs)("div",{className:"position-relative",children:[(0,s.jsx)("div",{className:"ratio ratio-1x1",children:(0,s.jsx)(o._V,{mediaUrl:t.mediaUrl,alt:"Upload Image",variant:"cover"})}),(0,s.jsx)("div",{className:"position-absolute bottom-0 w-100 h-50 p-3",children:(0,s.jsxs)("div",{className:"bg-black h-100 text-white p-3",children:[(0,s.jsx)(c.E,{attributes:{text:t.firstname},setAttributes:e=>i({firstname:e.text}),enableAlignment:!1}),(0,s.jsx)(c.E,{attributes:{text:t.lastname},setAttributes:e=>i({lastname:e.text}),enableAlignment:!1}),(0,s.jsx)(c.E,{attributes:{text:t.position},setAttributes:e=>i({position:e.text}),enableAlignment:!1}),(0,s.jsx)(c.E,{attributes:{text:t.email},setAttributes:e=>i({email:e.text}),enableAlignment:!1}),(0,s.jsx)(c.E,{attributes:{text:t.phone},setAttributes:e=>i({phone:e.text}),enableAlignment:!1})]})})]})]})},save:()=>null});const d=[{value:"pageBanner",label:"Banner"},{value:"full",label:"Full"},{value:"medium",label:"Medium"},{value:"partnerLogo",label:"Partner Logo"}]})();