(()=>{"use strict";var e={n:t=>{var i=t&&t.__esModule?()=>t.default:()=>t;return e.d(i,{a:i}),i},d:(t,i)=>{for(var a in i)e.o(i,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:i[a]})}};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),e.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var i=e.g.document;if(!t&&i&&(i.currentScript&&"SCRIPT"===i.currentScript.tagName.toUpperCase()&&(t=i.currentScript.src),!t)){var a=i.getElementsByTagName("script");if(a.length)for(var r=a.length-1;r>-1&&(!t||!/^http(s?):/.test(t));)t=a[r--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=window.wp.blocks,i=window.wp.blockEditor,a=window.wp.primitives,r=window.ReactJSXRuntime,o=(0,r.jsx)(a.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,r.jsx)(a.Path,{d:"M18 5.5H6a.5.5 0 00-.5.5v3h13V6a.5.5 0 00-.5-.5zm.5 5H10v8h8a.5.5 0 00.5-.5v-7.5zm-10 0h-3V18a.5.5 0 00.5.5h2.5v-8zM6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z"})}),n=window.wp.apiFetch;var l=e.n(n);const s=window.wp.components,c=window.wp.element,d={mediaId:{type:"number"},mediaUrl:{type:"string",default:e.p+"images/placeholder-image.d2f148ed.png"},imageSize:{type:"string",default:"full"},loading:{type:"boolean",default:!0}};function m({attributes:e,setAttributes:t,imageSizeOptions:a}){return(0,c.useEffect)((()=>{!async function(){try{if(!e.mediaId)return void console.error("Media ID is missing.");const i=await l()({path:`/wp/v2/media/${e.mediaId}`,method:"GET"});if(!i||!i.media_details)return void console.error("Invalid response:",i);t({mediaUrl:i.media_details.sizes[e.imageSize]?.source_url||i.source_url})}catch(e){console.error("Error fetching media:",e)}}()}),[e.mediaId,e.imageSize,t]),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(s.PanelBody,{title:"Bild Einstellungen",initialOpen:!0,children:[(0,r.jsx)(s.PanelRow,{children:(0,r.jsx)(i.MediaUploadCheck,{children:(0,r.jsx)(i.MediaUpload,{onSelect:function(e){t({mediaId:e.id,mediaUrl:e.url})},value:e.mediaId,render:({open:e})=>(0,r.jsx)(s.Button,{variant:"primary",onClick:e,children:"Bild auswählen"})})})}),(0,r.jsx)(s.PanelRow,{children:(0,r.jsx)("div",{className:"ratio ratio-16x9",children:(0,r.jsx)("img",{className:"img-fluid object-fit-cover",src:e.mediaUrl,alt:"Select"})})}),(0,r.jsx)(s.PanelRow,{children:(0,r.jsx)(s.SelectControl,{label:"Bildgröße",value:e.imageSize,options:a,onChange:function(e){t({imageSize:e})}})}),(0,r.jsx)(s.PanelRow,{children:(0,r.jsx)(s.ToggleControl,{label:"Lazy Loading aktivieren",checked:e.loading,onChange:function(e){t({loading:e})}})})]})})}function u({mediaUrl:e,variant:t}){const i="cover"===t?"w-100 h-100 object-fit-cover":"w-auto h-100";return(0,r.jsx)("img",{className:i,src:e,alt:"Select Image"})}const p=[{value:"pageBanner",label:"Banner"},{value:"full",label:"Full"},{value:"medium",label:"Medium"}];(0,t.registerBlockType)("everydayblocktheme/footer",{title:"Footer",icon:o,category:"layout",description:"A Description",keywords:"[]",supports:{},attributes:{...d,address:{type:"string",default:""},member:{type:"string",default:""},copyRight:{type:"string",default:""}},edit:function(e){const{attributes:t,setAttributes:a}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.InspectorControls,{children:(0,r.jsx)(m,{attributes:t,setAttributes:a,imageSizeOptions:p})}),(0,r.jsx)("div",{className:"container-fluid bg-secondary",children:(0,r.jsxs)("div",{className:"row justify-content-between align-items-center py-5",children:[(0,r.jsx)("div",{className:"col-1",children:(0,r.jsx)(u,{mediaUrl:t.mediaUrl,className:"footer-logo"})}),(0,r.jsx)(i.RichText,{tagName:"div",className:"col-3 text-footer py-3 fw-light font-family-footer",value:t.address,onChange:e=>a({address:e}),placeholder:"Address"}),(0,r.jsx)(i.RichText,{tagName:"div",className:"col-3 text-footer py-3 fw-light font-family-footer",value:t.member,onChange:e=>a({member:e}),placeholder:"Member"}),(0,r.jsx)(i.RichText,{tagName:"div",className:"col-3 text-footer py-3 fw-light font-family-footer",value:t.copyRight,onChange:e=>a({copyRight:e}),placeholder:"Copy Right"})]})})]})},save:()=>null})})();