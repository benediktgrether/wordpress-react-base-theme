(()=>{"use strict";var e={348:(e,t,a)=>{a.d(t,{A:()=>l});var r=a(573),n=a(790);const l=(0,n.jsx)(r.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,n.jsx)(r.Path,{d:"M10 17.389H8.444A5.194 5.194 0 1 1 8.444 7H10v1.5H8.444a3.694 3.694 0 0 0 0 7.389H10v1.5ZM14 7h1.556a5.194 5.194 0 0 1 0 10.39H14v-1.5h1.556a3.694 3.694 0 0 0 0-7.39H14V7Zm-4.5 6h5v-1.5h-5V13Z"})})},979:(e,t,a)=>{a.d(t,{EY:()=>s,JD:()=>i,WH:()=>l});var r=a(427),n=a(790);const l={align:{type:"string",default:"left"}},s=e=>{switch(e){case"left":default:return"justify-content-start";case"center":return"justify-content-center";case"right":return"justify-content-end"}};function i({title:e,attributes:t,setAttributes:a}){return(0,n.jsx)(r.PanelBody,{title:e,children:(0,n.jsx)(r.PanelRow,{children:(0,n.jsx)(r.SelectControl,{label:"Alignment",value:t.align,options:[{label:"Left",value:"left"},{label:"Center",value:"center"},{label:"Right",value:"right"}],onChange:e=>a({align:e})})})})}},228:(e,t,a)=>{a.d(t,{JI:()=>o,h5:()=>i});var r=a(427),n=a(715),l=a(790);const s=[{name:"primary",color:"#003b49"},{name:"secondary",color:"#ff7d45"},{name:"black",color:"#000000"},{name:"white",color:"#fff"},{name:"gray",color:"#adb5bd"}],i={colorName:{type:"string",default:"primary"}};function o({title:e,attributes:t,setAttributes:a}){const i=s.filter((e=>e.name===t.colorName))[0].color;return(0,l.jsx)(r.PanelBody,{title:e,children:(0,l.jsx)(r.PanelRow,{children:(0,l.jsx)(r.ColorPalette,{disableCustomColors:!0,clearable:!1,colors:s,value:i,onChange:function(e){const{name:t}=(0,n.getColorObjectByColorValue)(s,e);a({colorName:t})}})})})}},969:(e,t,a)=>{a.d(t,{$0:()=>s,fA:()=>l,kv:()=>i});var r=a(427),n=a(790);const l={spacer:{type:"string",default:"medium"}},s=e=>{switch(e){case"xSmall":return"mt-2";case"small":return"mt-3";case"medium":return"mt-4";case"large":return"mt-3 mt-lg-5";case"xLarge":return"mt-5 mt-lg-10";case"xxLarge":return"mt-6 mt-lg-12";default:return"mt-0"}};function i({title:e,attributes:t,setAttributes:a}){return(0,n.jsx)(r.PanelBody,{title:e,children:(0,n.jsx)(r.PanelRow,{children:(0,n.jsx)(r.SelectControl,{label:"Spacer",value:t.spacer,options:[{label:"None",value:""},{label:"Extra Small",value:"xSmall"},{label:"Small",value:"small"},{label:"Medium",value:"medium"},{label:"Large",value:"large"},{label:"Extra Large",value:"xLarge"},{label:"Extra Extra Large",value:"xxLarge"}],onChange:e=>a({spacer:e})})})})}},407:(e,t,a)=>{a.d(t,{$n:()=>m,Xq:()=>b});var r=a(87),n=a(348),l=a(427),s=a(715),i=a(969),o=a(228),c=a(979),u=a(790);const b={...o.h5,...i.fA,...c.WH,linkText:{type:"string",default:"Mehr erfahren"},linkObject:{type:"object",default:{url:""}},buttonColorName:{type:"string",default:"primary"}};function x({attributes:e,setAttributes:t,setIsLinkPickerVisible:a}){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(s.BlockControls,{children:(0,u.jsx)(l.ToolbarGroup,{children:(0,u.jsx)(l.ToolbarButton,{onClick:function(){a((e=>!e))},icon:n.A})})}),(0,u.jsxs)(s.InspectorControls,{children:[(0,u.jsx)(o.JI,{title:"Button Color Settings",attributes:{colorName:e.buttonColorName},setAttributes:e=>{e.colorName&&t({buttonColorName:e.colorName})}}),(0,u.jsx)(i.kv,{title:"Container Settings",attributes:e,setAttributes:t}),(0,u.jsx)(c.JD,{title:"Alignment Settings",attributes:e,setAttributes:t})]})]})}function m({attributes:e,setAttributes:t}){const[a,n]=(0,r.useState)(!1);let o,b;switch(e.buttonColorName){case"primary":default:o="primary",b="text-white";break;case"secondary":o="secondary",b="text-white";break;case"black":o="black",b="text-white";break;case"white":o="white",b="text-black";break;case"gray":o="gray-500",b="text-primary"}return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(x,{attributes:e,setAttributes:t,isLinkPickerVisible:a,setIsLinkPickerVisible:n}),(0,u.jsx)("div",{className:`d-flex ${(0,c.EY)(e.align)}`,children:(0,u.jsx)(s.RichText,{allowedFormats:[],tagName:"a",className:`btn btn-${o} ${b} ${(0,i.$0)(e.spacer)}`,value:e.linkText,onChange:function(e){t({linkText:e})}})}),a&&(0,u.jsxs)(l.Popover,{position:"middle center",children:[(0,u.jsx)(s.__experimentalLinkControl,{settings:[{id:"openInNewTab",title:"Öffnen in neuem Tab"}],value:e.linkObject,onChange:function(e){t({linkObject:e})}}),(0,u.jsx)(l.Button,{variant:"primary",onClick:()=>n(!1),style:{display:"block",width:"100%"},children:"Confirm Link"})]})]})}},841:(e,t,a)=>{a.d(t,{E:()=>s,Y:()=>l});var r=a(715),n=a(790);const l={text:{type:"string"},alignment:{type:"string"}};function s({attributes:e,setAttributes:t,enableAlignment:a=!0,className:l=""}){let s="";switch(e.alignment){case"left":default:s="text-start";break;case"center":s="text-center";break;case"right":s="text-end"}const i=`${s} ${l}`.trim();return a?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.BlockControls,{children:(0,n.jsx)(r.AlignmentToolbar,{value:e.alignment,onChange:e=>t({alignment:e})})}),(0,n.jsx)(r.RichText,{value:e.text,onChange:e=>t({text:e}),placeholder:"Text eingabe...",className:i})]}):(0,n.jsx)(r.RichText,{value:e.text,onChange:e=>t({text:e}),placeholder:"Text eingabe...",className:i})}},790:e=>{e.exports=window.ReactJSXRuntime},715:e=>{e.exports=window.wp.blockEditor},427:e=>{e.exports=window.wp.components},87:e=>{e.exports=window.wp.element},573:e=>{e.exports=window.wp.primitives}},t={};function a(r){var n=t[r];if(void 0!==n)return n.exports;var l=t[r]={exports:{}};return e[r](l,l.exports,a),l.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);const r=window.wp.blocks;var n=a(573),l=a(790);const s=(0,l.jsx)(n.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,l.jsx)(n.Path,{d:"M18 5.5H6a.5.5 0 00-.5.5v3h13V6a.5.5 0 00-.5-.5zm.5 5H10v8h8a.5.5 0 00.5-.5v-7.5zm-10 0h-3V18a.5.5 0 00.5.5h2.5v-8zM6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z"})});var i=a(715),o=a(228),c=a(407),u=a(841);(0,r.registerBlockType)("basetheme/call-to-action-item",{title:"Call-to-action-item",icon:s,category:"layout",parent:["basetheme/call-to-action"],description:"A Description",keywords:"[]",supports:{},attributes:{colorName:{type:"string",default:"white"},...u.Y,headline:{type:"string",default:"Headline"},...c.Xq},edit:function(e){const{attributes:t,setAttributes:a}=e;let r,n;switch(t.colorName){case"primary":default:r="bg-primary",n="text-white";break;case"secondary":r="bg-secondary",n="text-white";break;case"black":r="bg-black",n="text-white";break;case"white":r="bg-white",n="text-black"}return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.InspectorControls,{children:(0,l.jsx)(o.JI,{title:"Color Settings",attributes:t,setAttributes:a})}),(0,l.jsx)("div",{className:"grid-item-2/5",children:(0,l.jsxs)("div",{className:`${r} p-4`,children:[(0,l.jsx)(u.E,{attributes:{text:t.headline},setAttributes:e=>{a({headline:e.text})},className:` ${n} fs-32`}),(0,l.jsx)(u.E,{attributes:t,setAttributes:a,className:`${n} fs-18`}),(0,l.jsx)(c.$n,{attributes:t,setAttributes:a})]})})]})},save:function(){return(0,l.jsx)(i.InnerBlocks.Content,{})}})})();