(()=>{"use strict";var e={441:(e,t,a)=>{a.d(t,{K:()=>r,r:()=>l});var n=a(427),o=a(790);const l={loop:{type:"boolean",default:!0},autoplay:{type:"boolean",default:!0},autoplaySpeed:{type:"number",default:3e3},pagination:{type:"boolean",default:!0},navigation:{type:"boolean",default:!0},slidesPerView:{type:"number",default:1},spaceBetween:{type:"number",default:0},effect:{type:"string",default:"slide"},infiniteLoop:{type:"boolean",default:!1}};function r({title:e,attributes:t,setAttributes:a}){return(0,o.jsxs)(n.PanelBody,{title:e,children:[(0,o.jsx)(n.PanelRow,{children:(0,o.jsx)(n.ToggleControl,{label:"Loop",value:t.loop,checked:t.loop,onChange:e=>a({loop:e})})}),(0,o.jsx)(n.PanelRow,{children:(0,o.jsx)(n.ToggleControl,{label:"Infinity Loop",value:t.infiniteLoop,checked:t.infiniteLoop,onChange:e=>a({infiniteLoop:e})})}),(0,o.jsx)(n.PanelRow,{children:(0,o.jsx)(n.ToggleControl,{label:"Autoplay",value:t.autoplay,checked:t.autoplay,onChange:e=>a({autoplay:e})})}),(0,o.jsx)(n.PanelRow,{children:(0,o.jsx)(n.TextControl,{label:"Autoplay Speed",value:t.autoplaySpeed,onChange:e=>a({autoplaySpeed:parseInt(e,10)||0})})}),(0,o.jsx)(n.PanelRow,{children:(0,o.jsx)(n.ToggleControl,{label:"Pagination",value:t.pagination,checked:t.pagination,onChange:e=>a({pagination:e})})}),(0,o.jsx)(n.PanelRow,{children:(0,o.jsx)(n.ToggleControl,{label:"Navigation",value:t.navigation,checked:t.navigation,onChange:e=>a({navigation:e})})}),(0,o.jsx)(n.PanelRow,{children:(0,o.jsx)(n.TextControl,{label:"Slides Per View",value:t.slidesPerView,onChange:e=>a({slidesPerView:parseInt(e,10)||1})})}),(0,o.jsx)(n.PanelRow,{children:(0,o.jsx)(n.TextControl,{label:"Space Between",value:t.spaceBetween,onChange:e=>a({spaceBetween:parseInt(e,10)||0})})}),(0,o.jsx)(n.PanelRow,{children:(0,o.jsx)(n.SelectControl,{label:"Effect",value:t.effect,options:[{value:"slide",label:"Slide"},{value:"fade",label:"Fade"}],onChange:e=>a({effect:e})})})]})}},790:e=>{e.exports=window.ReactJSXRuntime},427:e=>{e.exports=window.wp.components}},t={};function a(n){var o=t[n];if(void 0!==o)return o.exports;var l=t[n]={exports:{}};return e[n](l,l.exports,a),l.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);const n=window.wp.blocks,o=window.wp.primitives;var l=a(790);const r=(0,l.jsx)(o.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,l.jsx)(o.Path,{d:"M18 5.5H6a.5.5 0 00-.5.5v3h13V6a.5.5 0 00-.5-.5zm.5 5H10v8h8a.5.5 0 00.5-.5v-7.5zm-10 0h-3V18a.5.5 0 00.5.5h2.5v-8zM6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z"})}),i=window.wp.blockEditor;var s=a(441),u=a(427);const d=e=>{switch(e){case"xSmall":return"mt-2";case"small":return"mt-3";case"medium":return"mt-4";case"large":return"mt-3 mt-lg-5";case"xLarge":return"mt-5 mt-lg-10";case"xxLarge":return"mt-6 mt-lg-12";default:return"mt-0"}};function p({title:e,attributes:t,setAttributes:a}){return(0,l.jsx)(u.PanelBody,{title:e,children:(0,l.jsx)(u.PanelRow,{children:(0,l.jsx)(u.SelectControl,{label:"Spacer",value:t.spacer,options:[{label:"None",value:""},{label:"Extra Small",value:"xSmall"},{label:"Small",value:"small"},{label:"Medium",value:"medium"},{label:"Large",value:"large"},{label:"Extra Large",value:"xLarge"},{label:"Extra Extra Large",value:"xxLarge"}],onChange:e=>a({spacer:e})})})})}const c=window.wp.element,g={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};var m,x=new Uint8Array(16);function b(){if(!m&&!(m="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return m(x)}for(var w=[],f=0;f<256;++f)w.push((f+256).toString(16).slice(1));const h=function(e,t,a){if(g.randomUUID&&!t&&!e)return g.randomUUID();var n=(e=e||{}).random||(e.rng||b)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){a=a||0;for(var o=0;o<16;++o)t[a+o]=n[o];return t}return function(e,t=0){return(w[e[t+0]]+w[e[t+1]]+w[e[t+2]]+w[e[t+3]]+"-"+w[e[t+4]]+w[e[t+5]]+"-"+w[e[t+6]]+w[e[t+7]]+"-"+w[e[t+8]]+w[e[t+9]]+"-"+w[e[t+10]]+w[e[t+11]]+w[e[t+12]]+w[e[t+13]]+w[e[t+14]]+w[e[t+15]]).toLowerCase()}(n)};(0,n.registerBlockType)("basetheme/image-swiper",{title:"Image Swiper",icon:r,category:"layout",description:"A Description",keywords:"[]",supports:{},attributes:{align:{type:"string",default:"full"},uuid:{type:"string",default:""},...s.r,spacer:{type:"string",default:"medium"}},edit:function(e){const{attributes:t,setAttributes:a}=e;return(0,c.useEffect)((()=>{t.uuid||a({uuid:h()})}),[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(i.InspectorControls,{children:[(0,l.jsx)(s.K,{title:"Hero Slider Settings",attributes:t,setAttributes:a}),(0,l.jsx)(p,{title:"Container Settings",attributes:t,setAttributes:a})]}),(0,l.jsx)("div",{className:"my-4",children:(0,l.jsx)("div",{className:`container ${d(t.spacer)}`,children:(0,l.jsx)("div",{className:"border border-light p-2 bg-gray-100",children:(0,l.jsx)(i.InnerBlocks,{allowedBlocks:["basetheme/image-swiper-item"],template:[["basetheme/image-swiper-item"]]})})})})]})},save:function(){return(0,l.jsx)(i.InnerBlocks.Content,{})}})})();