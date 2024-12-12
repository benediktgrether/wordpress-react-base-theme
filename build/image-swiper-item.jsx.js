(()=>{"use strict";var e={n:t=>{var i=t&&t.__esModule?()=>t.default:()=>t;return e.d(i,{a:i}),i},d:(t,i)=>{for(var r in i)e.o(i,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:i[r]})}};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),e.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var i=e.g.document;if(!t&&i&&(i.currentScript&&"SCRIPT"===i.currentScript.tagName.toUpperCase()&&(t=i.currentScript.src),!t)){var r=i.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&(!t||!/^http(s?):/.test(t));)t=r[a--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=window.wp.blocks,i=window.wp.primitives,r=window.ReactJSXRuntime,a=(0,r.jsx)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,r.jsx)(i.Path,{d:"M18 5.5H6a.5.5 0 00-.5.5v3h13V6a.5.5 0 00-.5-.5zm.5 5H10v8h8a.5.5 0 00.5-.5v-7.5zm-10 0h-3V18a.5.5 0 00.5.5h2.5v-8zM6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z"})}),n=window.wp.blockEditor,o=window.wp.apiFetch;var l=e.n(o);const s=window.wp.components,c=window.wp.element,d={mediaId:{type:"number"},mediaUrl:{type:"string",default:e.p+"images/placeholder-image.d2f148ed.png"},imageSize:{type:"string",default:"full"},loading:{type:"boolean",default:!0}};function m({attributes:e,setAttributes:t,imageSizeOptions:i}){return(0,c.useEffect)((()=>{!async function(){try{if(!e.mediaId)return void console.error("Media ID is missing.");const i=await l()({path:`/wp/v2/media/${e.mediaId}`,method:"GET"});if(!i||!i.media_details)return void console.error("Invalid response:",i);t({mediaUrl:i.media_details.sizes[e.imageSize]?.source_url||i.source_url})}catch(e){console.error("Error fetching media:",e)}}()}),[e.mediaId,e.imageSize,t]),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(s.PanelBody,{title:"Bild Einstellungen",initialOpen:!0,children:[(0,r.jsx)(s.PanelRow,{children:(0,r.jsx)(n.MediaUploadCheck,{children:(0,r.jsx)(n.MediaUpload,{onSelect:function(e){t({mediaId:e.id,mediaUrl:e.url})},value:e.mediaId,render:({open:e})=>(0,r.jsx)(s.Button,{variant:"primary",onClick:e,children:"Bild auswählen"})})})}),(0,r.jsx)(s.PanelRow,{children:(0,r.jsx)("div",{className:"ratio ratio-16x9",children:(0,r.jsx)("img",{className:"img-fluid object-fit-cover",src:e.mediaUrl,alt:"Select",width:200})})}),(0,r.jsx)(s.PanelRow,{children:(0,r.jsx)(s.SelectControl,{label:"Bildgröße",value:e.imageSize,options:i,onChange:function(e){t({imageSize:e})}})}),(0,r.jsx)(s.PanelRow,{children:(0,r.jsx)(s.ToggleControl,{label:"Lazy Loading aktivieren",checked:e.loading,onChange:function(e){t({loading:e})}})})]})})}function u({mediaUrl:e,variant:t}){const i="cover"===t?"w-100 h-100 object-fit-cover":"w-auto h-100";return(0,r.jsx)("img",{className:i,src:e,alt:"Select Image"})}const p=[{value:"pageBanner",label:"Banner"},{value:"full",label:"Full"},{value:"medium",label:"Medium"}];(0,t.registerBlockType)("basetheme/image-swiper-item",{title:"Image Swiper Item",icon:a,category:"layout",parent:["basetheme/image-swiper-item"],description:"A Description",keywords:"[]",supports:{},attributes:{...d,title:{type:"string",default:""}},edit:function(e){const{attributes:t,setAttributes:i}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.InspectorControls,{children:(0,r.jsx)(m,{attributes:t,setAttributes:i,imageSizeOptions:p})}),(0,r.jsxs)("div",{className:"position-relative",children:[(0,r.jsx)("div",{className:"ratio ratio-16x9",children:(0,r.jsx)(u,{mediaUrl:t.mediaUrl,variant:"cover"})}),(0,r.jsx)("div",{className:"position-absolute w-100 top-50 start-50 translate-middle z-1",children:(0,r.jsx)(n.RichText,{value:t.title,onChange:e=>i({title:e}),placeholder:"Title",className:"fs-72 fw-bold text-white border border-light p-2 text-center"})})]})]})},save:()=>null})})();