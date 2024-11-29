(()=>{"use strict";var e={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},d:(t,n)=>{for(var i in n)e.o(n,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:n[i]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=window.wp.apiFetch;var n=e.n(t);const i=window.wp.components,r=window.wp.blockEditor,o=window.wp.blocks,a=window.wp.element,s=window.ReactJSXRuntime;(0,o.registerBlockType)("everydayblocktheme/banner",{title:"Banner",supports:{align:["full"]},attributes:{align:{type:"string",default:"full"},imgID:{type:"number"},imgURL:{type:"string",default:banner.fallbackImage}},edit:function(e){return(0,a.useEffect)((function(){if(e.attributes.imgID){async function t(){const t=await n()({path:`/wp/v2/media/${e.attributes.imgID}`,method:"GET"});e.setAttributes({imgURL:t.media_details.sizes.pageBanner.source_url})}t()}}),[e.attributes.imgID]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.InspectorControls,{children:(0,s.jsx)(i.PanelBody,{title:"Background",initialOpen:!0,children:(0,s.jsx)(i.PanelRow,{children:(0,s.jsx)(r.MediaUploadCheck,{children:(0,s.jsx)(r.MediaUpload,{onSelect:function(t){e.setAttributes({imgID:t.id})},value:e.attributes.imgID,render:({open:e})=>(0,s.jsx)(i.Button,{onClick:e,children:"Choose Image"})})})})})}),(0,s.jsxs)("div",{className:"container",children:[(0,s.jsx)("div",{className:"row"}),(0,s.jsx)("img",{src:e.attributes.imgURL,alt:"Image"}),(0,s.jsx)(r.InnerBlocks,{allowedBlocks:["ourblocktheme/genericheading","ourblocktheme/genericbutton"]})]})]})},save:function(){return(0,s.jsx)(r.InnerBlocks.Content,{})}})})();