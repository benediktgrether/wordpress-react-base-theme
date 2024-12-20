(()=>{"use strict";var e={470:(e,t,i)=>{i.d(t,{_V:()=>p,Jh:()=>u,E5:()=>d});const r=window.wp.apiFetch;var a=i.n(r),o=i(427),n=i(715),l=i(87);const s=i.p+"images/placeholder-image.d2f148ed.png";var c=i(790);const d={mediaId:{type:"number"},mediaUrl:{type:"string",default:s},imageSize:{type:"string",default:"full"},loading:{type:"boolean",default:!0}};function u({attributes:e,setAttributes:t,imageSizeOptions:i}){return(0,l.useEffect)((()=>{!async function(){try{if(!e.mediaId)return void console.error("Media ID is missing.");const i=await a()({path:`/wp/v2/media/${e.mediaId}`,method:"GET"});if(!i||!i.media_details)return void console.error("Invalid response:",i);t({mediaUrl:i.media_details.sizes[e.imageSize]?.source_url||i.source_url})}catch(e){console.error("Error fetching media:",e)}}()}),[e.mediaId,e.imageSize,t]),(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)(o.PanelBody,{title:"Bild Einstellungen",initialOpen:!0,children:[(0,c.jsx)(o.PanelRow,{children:(0,c.jsx)(n.MediaUploadCheck,{children:(0,c.jsx)(n.MediaUpload,{onSelect:function(e){t({mediaId:e.id,mediaUrl:e.url})},value:e.mediaId,render:({open:e})=>(0,c.jsx)(o.Button,{variant:"primary",onClick:e,children:"Bild auswählen"})})})}),(0,c.jsx)(o.PanelRow,{children:(0,c.jsx)("div",{className:"ratio ratio-16x9",children:(0,c.jsx)("img",{className:"img-fluid object-fit-cover",src:e.mediaUrl,alt:"Select",width:200})})}),(0,c.jsx)(o.PanelRow,{children:(0,c.jsx)(o.SelectControl,{label:"Bildgröße",value:e.imageSize,options:i,onChange:function(e){t({imageSize:e})}})}),(0,c.jsx)(o.PanelRow,{children:(0,c.jsx)(o.ToggleControl,{label:"Lazy Loading aktivieren",checked:e.loading,onChange:function(e){t({loading:e})}})})]})})}function p({mediaUrl:e,variant:t}){const i="cover"===t?"w-100 h-100 object-fit-cover":"w-auto h-100";return(0,c.jsx)("img",{className:i,src:e,alt:"Select Image"})}},790:e=>{e.exports=window.ReactJSXRuntime},715:e=>{e.exports=window.wp.blockEditor},427:e=>{e.exports=window.wp.components},87:e=>{e.exports=window.wp.element}},t={};function i(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,i),o.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&(!e||!/^http(s?):/.test(e));)e=r[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})();const r=window.wp.blocks;var a=i(715),o=i(427);const n=window.wp.primitives;var l=i(790);const s=(0,l.jsx)(n.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)(n.Path,{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 4.5h14c.3 0 .5.2.5.5v8.4l-3-2.9c-.3-.3-.8-.3-1 0L11.9 14 9 12c-.3-.2-.6-.2-.8 0l-3.6 2.6V5c-.1-.3.1-.5.4-.5zm14 15H5c-.3 0-.5-.2-.5-.5v-2.4l4.1-3 3 1.9c.3.2.7.2.9-.1L16 12l3.5 3.4V19c0 .3-.2.5-.5.5z"})});var c=i(470);(0,r.registerBlockType)("basetheme/footer-social-media-icon",{title:"Footer-social-media-icon",icon:s,parent:["basetheme/footer-social-media-container"],attributes:{...c.E5,socialMediaUrl:{type:"string",default:""}},edit:function(e){const{attributes:t,setAttributes:i}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(a.InspectorControls,{children:[(0,l.jsx)(c.Jh,{attributes:t,setAttributes:i,imageSizeOptions:d}),(0,l.jsx)(o.PanelBody,{title:"Social Media Icon",children:(0,l.jsx)(o.PanelRow,{children:(0,l.jsx)(o.TextControl,{label:"Social Media URL",value:t.socialMediaUrl,onChange:e=>i({socialMediaUrl:e})})})})]}),(0,l.jsx)("div",{className:"footer-social-media-icon",children:(0,l.jsx)(c._V,{mediaUrl:t.mediaUrl,alt:"Upload Image"})})]})},save:()=>null});const d=[{value:"pageBanner",label:"Banner"},{value:"full",label:"Full"},{value:"medium",label:"Medium"},{value:"partnerLogo",label:"Partner Logo"}]})();