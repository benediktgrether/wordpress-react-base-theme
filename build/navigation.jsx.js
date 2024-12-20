(()=>{"use strict";var e={470:(e,t,i)=>{i.d(t,{Jh:()=>p,E5:()=>d});const n=window.wp.apiFetch;var r=i.n(n),a=i(427),o=i(715),s=i(87);const l=i.p+"images/placeholder-image.d2f148ed.png";var c=i(790);const d={mediaId:{type:"number"},mediaUrl:{type:"string",default:l},imageSize:{type:"string",default:"full"},loading:{type:"boolean",default:!0}};function p({attributes:e,setAttributes:t,imageSizeOptions:i}){return(0,s.useEffect)((()=>{!async function(){try{if(!e.mediaId)return void console.error("Media ID is missing.");const i=await r()({path:`/wp/v2/media/${e.mediaId}`,method:"GET"});if(!i||!i.media_details)return void console.error("Invalid response:",i);t({mediaUrl:i.media_details.sizes[e.imageSize]?.source_url||i.source_url})}catch(e){console.error("Error fetching media:",e)}}()}),[e.mediaId,e.imageSize,t]),(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)(a.PanelBody,{title:"Bild Einstellungen",initialOpen:!0,children:[(0,c.jsx)(a.PanelRow,{children:(0,c.jsx)(o.MediaUploadCheck,{children:(0,c.jsx)(o.MediaUpload,{onSelect:function(e){t({mediaId:e.id,mediaUrl:e.url})},value:e.mediaId,render:({open:e})=>(0,c.jsx)(a.Button,{variant:"primary",onClick:e,children:"Bild auswählen"})})})}),(0,c.jsx)(a.PanelRow,{children:(0,c.jsx)("div",{className:"ratio ratio-16x9",children:(0,c.jsx)("img",{className:"img-fluid object-fit-cover",src:e.mediaUrl,alt:"Select",width:200})})}),(0,c.jsx)(a.PanelRow,{children:(0,c.jsx)(a.SelectControl,{label:"Bildgröße",value:e.imageSize,options:i,onChange:function(e){t({imageSize:e})}})}),(0,c.jsx)(a.PanelRow,{children:(0,c.jsx)(a.ToggleControl,{label:"Lazy Loading aktivieren",checked:e.loading,onChange:function(e){t({loading:e})}})})]})})}},790:e=>{e.exports=window.ReactJSXRuntime},715:e=>{e.exports=window.wp.blockEditor},427:e=>{e.exports=window.wp.components},87:e=>{e.exports=window.wp.element}},t={};function i(n){var r=t[n];if(void 0!==r)return r.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,i),a.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var r=n.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=n[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})();const n=window.wp.blocks;var r=i(715),a=i(470),o=i(790);const s=[{value:"thumbnail",label:"Thumbnail"},{value:"logo",label:"Logo"}];(0,n.registerBlockType)("basetheme/navigation",{title:"Navigation",icon:"smiley",category:"layout",description:"A Description",keywords:["navigation","menu"],supports:{},attributes:{...a.E5,imageSize:{type:"string",default:"logo"},loading:{type:"boolean",default:!1}},edit:function(e){const{attributes:t,setAttributes:i}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.InspectorControls,{children:(0,o.jsx)(a.Jh,{attributes:t,setAttributes:i,imageSizeOptions:s})}),(0,o.jsx)("nav",{className:"navbar navbar-expand-lg bg-body-tertiary",children:(0,o.jsxs)("div",{className:"container-fluid",children:[(0,o.jsx)("img",{className:"navbar-brand img-fluid object-fit-cover",src:t.mediaUrl,alt:"Select in WordPress Backend",style:{width:"200px",height:"100px"}}),(0,o.jsx)("div",{className:"collapse navbar-collapse justify-content-end",id:"navbarSupportedContent",children:(0,o.jsx)(r.InnerBlocks,{template:[["core/navigation"]],allowedBlocks:["core/navigation"]})})]})})]})},save:function(){return(0,o.jsx)(r.InnerBlocks.Content,{})}})})();