(()=>{"use strict";var e={441:(e,l,t)=>{t.d(l,{K:()=>a,r:()=>r});var o=t(427),n=t(790);const r={loop:{type:"boolean",default:!0},autoplay:{type:"boolean",default:!0},autoplaySpeed:{type:"number",default:3e3},pagination:{type:"boolean",default:!0},navigation:{type:"boolean",default:!0},slidesPerView:{type:"number",default:1},spaceBetween:{type:"number",default:0},effect:{type:"string",default:"slide"}};function a({title:e,attributes:l,setAttributes:t}){return(0,n.jsxs)(o.PanelBody,{title:e,children:[(0,n.jsx)(o.PanelRow,{children:(0,n.jsx)(o.ToggleControl,{label:"Loop",value:l.loop,checked:l.loop,onChange:e=>t({loop:e})})}),(0,n.jsx)(o.PanelRow,{children:(0,n.jsx)(o.ToggleControl,{label:"Autoplay",value:l.autoplay,checked:l.autoplay,onChange:e=>t({autoplay:e})})}),(0,n.jsx)(o.PanelRow,{children:(0,n.jsx)(o.TextControl,{label:"Autoplay Speed",value:l.autoplaySpeed,onChange:e=>t({autoplaySpeed:parseInt(e,10)||0})})}),(0,n.jsx)(o.PanelRow,{children:(0,n.jsx)(o.ToggleControl,{label:"Pagination",value:l.pagination,checked:l.pagination,onChange:e=>t({pagination:e})})}),(0,n.jsx)(o.PanelRow,{children:(0,n.jsx)(o.ToggleControl,{label:"Navigation",value:l.navigation,checked:l.navigation,onChange:e=>t({navigation:e})})}),(0,n.jsx)(o.PanelRow,{children:(0,n.jsx)(o.TextControl,{label:"Slides Per View",value:l.slidesPerView,onChange:e=>t({slidesPerView:parseInt(e,10)||1})})}),(0,n.jsx)(o.PanelRow,{children:(0,n.jsx)(o.TextControl,{label:"Space Between",value:l.spaceBetween,onChange:e=>t({spaceBetween:parseInt(e,10)||0})})}),(0,n.jsx)(o.PanelRow,{children:(0,n.jsx)(o.SelectControl,{label:"Effect",value:l.effect,options:[{value:"slide",label:"Slide"},{value:"fade",label:"Fade"}],onChange:e=>t({effect:e})})})]})}},790:e=>{e.exports=window.ReactJSXRuntime},427:e=>{e.exports=window.wp.components}},l={};function t(o){var n=l[o];if(void 0!==n)return n.exports;var r=l[o]={exports:{}};return e[o](r,r.exports,t),r.exports}t.n=e=>{var l=e&&e.__esModule?()=>e.default:()=>e;return t.d(l,{a:l}),l},t.d=(e,l)=>{for(var o in l)t.o(l,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:l[o]})},t.o=(e,l)=>Object.prototype.hasOwnProperty.call(e,l);const o=window.wp.blocks,n=window.wp.blockEditor;var r=t(441);const a=window.wp.element,s={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};var c,i=new Uint8Array(16);function d(){if(!c&&!(c="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return c(i)}for(var p=[],u=0;u<256;++u)p.push((u+256).toString(16).slice(1));const h=function(e,l,t){if(s.randomUUID&&!l&&!e)return s.randomUUID();var o=(e=e||{}).random||(e.rng||d)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,l){t=t||0;for(var n=0;n<16;++n)l[t+n]=o[n];return l}return function(e,l=0){return(p[e[l+0]]+p[e[l+1]]+p[e[l+2]]+p[e[l+3]]+"-"+p[e[l+4]]+p[e[l+5]]+"-"+p[e[l+6]]+p[e[l+7]]+"-"+p[e[l+8]]+p[e[l+9]]+"-"+p[e[l+10]]+p[e[l+11]]+p[e[l+12]]+p[e[l+13]]+p[e[l+14]]+p[e[l+15]]).toLowerCase()}(o)};var g=t(790);const w={paragraph:(0,g.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:(0,g.jsx)("path",{d:"M192 32l64 0 160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0 0 352c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-352-32 0 0 352c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0c-88.4 0-160-71.6-160-160s71.6-160 160-160z"})}),heading:(0,g.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:(0,g.jsx)("path",{d:"M0 64C0 46.3 14.3 32 32 32l48 0 48 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-16 0 0 112 224 0 0-112-16 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l48 0 48 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-16 0 0 144 0 176 16 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-48 0-48 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l16 0 0-144-224 0 0 144 16 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-48 0-48 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l16 0 0-176L48 96 32 96C14.3 96 0 81.7 0 64z"})}),heroSlider:(0,g.jsx)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:"48",height:"48","aria-hidden":"true",focusable:"false",children:(0,g.jsx)("path",{d:"M16.375 4.5H4.625a.125.125 0 0 0-.125.125v8.254l2.859-1.54a.75.75 0 0 1 .68-.016l2.384 1.142 2.89-2.074a.75.75 0 0 1 .874 0l2.313 1.66V4.625a.125.125 0 0 0-.125-.125Zm.125 9.398-2.75-1.975-2.813 2.02a.75.75 0 0 1-.76.067l-2.444-1.17L4.5 14.583v1.792c0 .069.056.125.125.125h11.75a.125.125 0 0 0 .125-.125v-2.477ZM4.625 3C3.728 3 3 3.728 3 4.625v11.75C3 17.273 3.728 18 4.625 18h11.75c.898 0 1.625-.727 1.625-1.625V4.625C18 3.728 17.273 3 16.375 3H4.625ZM20 8v11c0 .69-.31 1-.999 1H6v1.5h13.001c1.52 0 2.499-.982 2.499-2.5V8H20Z","fill-rule":"evenodd","clip-rule":"evenodd"})}),heroSlideItem:(0,g.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",children:(0,g.jsx)("path",{d:"M256 0L576 0c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64l-320 0c-35.3 0-64-28.7-64-64l0-224c0-35.3 28.7-64 64-64zM476 106.7C471.5 100 464 96 456 96s-15.5 4-20 10.7l-56 84L362.7 169c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6l80 0 48 0 144 0c8.9 0 17-4.9 21.2-12.7s3.7-17.3-1.2-24.6l-96-144zM336 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM64 128l96 0 0 256 0 32c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-32 160 0 0 64c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 192c0-35.3 28.7-64 64-64zm8 64c-8.8 0-16 7.2-16 16l0 16c0 8.8 7.2 16 16 16l16 0c8.8 0 16-7.2 16-16l0-16c0-8.8-7.2-16-16-16l-16 0zm0 104c-8.8 0-16 7.2-16 16l0 16c0 8.8 7.2 16 16 16l16 0c8.8 0 16-7.2 16-16l0-16c0-8.8-7.2-16-16-16l-16 0zm0 104c-8.8 0-16 7.2-16 16l0 16c0 8.8 7.2 16 16 16l16 0c8.8 0 16-7.2 16-16l0-16c0-8.8-7.2-16-16-16l-16 0zm336 16l0 16c0 8.8 7.2 16 16 16l16 0c8.8 0 16-7.2 16-16l0-16c0-8.8-7.2-16-16-16l-16 0c-8.8 0-16 7.2-16 16z"})}),container:(0,g.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:(0,g.jsx)("path",{d:"M0 96C0 60.7 28.7 32 64 32l132.1 0c19.1 0 37.4 7.6 50.9 21.1L289.9 96 448 96c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-256c0-8.8-7.2-16-16-16l-161.4 0c-10.6 0-20.8-4.2-28.3-11.7L213.1 87c-4.5-4.5-10.6-7-17-7L64 80z"})}),image:(0,g.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:(0,g.jsx)("path",{d:"M448 80c8.8 0 16 7.2 16 16l0 319.8-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3L48 96c0-8.8 7.2-16 16-16l384 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"})})};(0,o.registerBlockType)("everydayblocktheme/heroslider",{title:"Hero Slider",icon:w.heroSlider,category:"layout",description:"A hero slider block",keywords:["slider","hero"],supports:{align:["full"]},attributes:{align:{type:"string",default:"full"},uuid:{type:"string",default:""},...r.r},edit:function(e){const{attributes:l,setAttributes:t}=e;return(0,a.useEffect)((()=>{l.uuid||t({uuid:h()})}),[]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(n.InspectorControls,{children:(0,g.jsx)(r.K,{title:"Hero Slider Settings",attributes:l,setAttributes:t})}),(0,g.jsx)("div",{className:"my-4",children:(0,g.jsx)("div",{className:"container",children:(0,g.jsx)("div",{className:"border border-light p-2 bg-gray-100",children:(0,g.jsx)(n.InnerBlocks,{allowedBlocks:["everydayblocktheme/heroslideitem"],template:[["everydayblocktheme/heroslideitem"]]})})})})]})},save:function(){return(0,g.jsx)(n.InnerBlocks.Content,{})}})})();