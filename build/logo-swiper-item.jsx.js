(()=>{"use strict";var e={470:(e,t,i)=>{i.d(t,{_V:()=>u,Jh:()=>p,E5:()=>d});const r=window.wp.apiFetch;var a=i.n(r),n=i(427),o=i(715),s=i(87);const l=i.p+"images/placeholder-image.d2f148ed.png";var c=i(790);const d={mediaId:{type:"number"},mediaUrl:{type:"string",default:l},imageSize:{type:"string",default:"full"},loading:{type:"boolean",default:!0}};function p({attributes:e,setAttributes:t,imageSizeOptions:i}){return(0,s.useEffect)((()=>{!async function(){try{if(!e.mediaId)return void console.error("Media ID is missing.");const i=await a()({path:`/wp/v2/media/${e.mediaId}`,method:"GET"});if(!i||!i.media_details)return void console.error("Invalid response:",i);t({mediaUrl:i.media_details.sizes[e.imageSize]?.source_url||i.source_url})}catch(e){console.error("Error fetching media:",e)}}()}),[e.mediaId,e.imageSize,t]),(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)(n.PanelBody,{title:"Bild Einstellungen",initialOpen:!0,children:[(0,c.jsx)(n.PanelRow,{children:(0,c.jsx)(o.MediaUploadCheck,{children:(0,c.jsx)(o.MediaUpload,{onSelect:function(e){t({mediaId:e.id,mediaUrl:e.url})},value:e.mediaId,render:({open:e})=>(0,c.jsx)(n.Button,{variant:"primary",onClick:e,children:"Bild auswählen"})})})}),(0,c.jsx)(n.PanelRow,{children:(0,c.jsx)("div",{className:"ratio ratio-16x9",children:(0,c.jsx)("img",{className:"img-fluid object-fit-cover",src:e.mediaUrl,alt:"Select",width:200})})}),(0,c.jsx)(n.PanelRow,{children:(0,c.jsx)(n.SelectControl,{label:"Bildgröße",value:e.imageSize,options:i,onChange:function(e){t({imageSize:e})}})}),(0,c.jsx)(n.PanelRow,{children:(0,c.jsx)(n.ToggleControl,{label:"Lazy Loading aktivieren",checked:e.loading,onChange:function(e){t({loading:e})}})})]})})}function u({mediaUrl:e,variant:t}){const i="cover"===t?"w-100 h-100 object-fit-cover":"w-auto h-100";return(0,c.jsx)("img",{className:i,src:e,alt:"Select Image"})}},790:e=>{e.exports=window.ReactJSXRuntime},715:e=>{e.exports=window.wp.blockEditor},427:e=>{e.exports=window.wp.components},87:e=>{e.exports=window.wp.element}},t={};function i(r){var a=t[r];if(void 0!==a)return a.exports;var n=t[r]={exports:{}};return e[r](n,n.exports,i),n.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&(!e||!/^http(s?):/.test(e));)e=r[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})();const r=window.wp.blocks,a=window.wp.primitives;var n=i(790);const o=(0,n.jsx)(a.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,n.jsx)(a.Path,{d:"M18 5.5H6a.5.5 0 00-.5.5v3h13V6a.5.5 0 00-.5-.5zm.5 5H10v8h8a.5.5 0 00.5-.5v-7.5zm-10 0h-3V18a.5.5 0 00.5.5h2.5v-8zM6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z"})});var s=i(715),l=i(470);const c=[{value:"pageBanner",label:"Banner"},{value:"full",label:"Full"},{value:"medium",label:"Medium"}];(0,r.registerBlockType)("basetheme/logo-swiper-item",{title:"Logo-swiper-item",icon:o,category:"layout",parent:["basetheme/logo-swiper-container"],description:"A Description",keywords:"[]",supports:{},attributes:{...l.E5},edit:function(e){const{attributes:t,setAttributes:i}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.InspectorControls,{children:(0,n.jsx)(l.Jh,{attributes:t,setAttributes:i,imageSizeOptions:c})}),(0,n.jsx)("div",{className:"container-item-1/4 logo-swiper-item-backend",children:(0,n.jsx)(l._V,{mediaUrl:t.mediaUrl})})]})},save:()=>null})})();