(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{36:function(e,t,n){"use strict";function r(e){return void 0!==e.getPixelImg}function o(e){return void 0!==e.getSvgString}function a(e){return void 0!==e.getText}function i(e){return void 0!==e.children}function s(e){return void 0!==e.layers}function l(e){return i(e)&&o(e)}n.d(t,"d",(function(){return r})),n.d(t,"f",(function(){return o})),n.d(t,"e",(function(){return a})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return l}))},899:function(e,t,n){"use strict";n.r(t);var r=n(163),o=n(1);class a{depress(e){const t=e.channels(),n=[],r=e.depth(),o=r-8,a=r/8;for(let r=0;r<t;r++){const t=e.channelLength/a,r=new Uint8Array(t);for(let n=0;n<t;n++){const t=e.file.read(a);let i=0;for(;t.length;)i<<=8,i|=t.shift();r[n]=i>>o}n.push(r)}return n}}class i{constructor(){this.byteCountes=[]}depress(e){const t=e.channels(),n=e.height(),r=[];this.parseByteCounts(e.file,n,t);for(let n=0;n<t;n++)r.push(this.parseChannelData(e,n));return r}parseByteCounts(e,t,n){const r=t*n;this.byteCountes=[];for(let t=0;t<r;t++)this.byteCountes[t]=s(e)}parseChannelData(e,t){const n=e.height(),r=t*n,o=e.file,a=new Uint8Array(e.channelLength);let i=0;for(let e=0;e<n;e++){const t=this.byteCountes[r+e],n=o.tell()+t;for(;o.tell()<n;){let e=o.data[o.pos++];if(e<128){e+=1;for(let t=0;t<e;t++)a[i++]=o.data[o.pos++]}else if(e>128){e^=255,e+=2;const t=o.data[o.pos++];for(let n=0;n<e;n++)a[i++]=t}}}return a}}function s(e){const t=e.read(2);let n=0;for(const e of t)n<<=8,n|=e;return n}class l extends i{depress(e){const t=e.height(),n=[];this.parseByteCounts(e.file,t,1);for(let t=0;t<1;t++)n.push(this.parseChannelData(e,t));return n}parseByteCounts(e,t,n){const r=t*n;this.byteCountes=[];for(let t=0;t<r;t++)this.byteCountes[t]=s(e)}}class c extends a{depress(e){const t=[];return e.chanPos=0,e.channelData=new Uint8Array(e.chan.length-2),e.parseRaw(),t.push(e.channelData),e.chanPos=0,e.channelData=null,t}}const u={mix(e,t){const n=e.channelsInfo.map(e=>e.id).filter(e=>e>=-1),r=n.indexOf(0),o=n.indexOf(1),a=n.indexOf(2),i=n.indexOf(-1),s=e.numPixels,l=new Uint8ClampedArray(4*s/(e.depth()/8));for(let e=0;e<s;e++){const n=4*e;l[n]=t[r][e],l[n+1]=t[o][e],l[n+2]=t[a][e],l[n+3]=i>-1?t[i][e]:255}return l}};function d(e,t){const n=document.createElement("canvas");n.width=e.width(),n.height=e.height();const r=function(e){let t;t=e.layer?function(e){const t=e.startPos;e.file.seek(t);const n=e.channelsInfo,r=[];for(let t=0;t<n.length;t++){const o=n[t];if(o.length<=0){e.file.readShort();continue}if(o.id<-1)continue;const a=e.file.tell(),i=e.file.readShort(),s=f(e,i);0===i&&(e.chan=o),r.push(s.depress(e)[0]),e.file.tell()!==a+o.length&&e.file.seek(a+o.length)}return r}(e):function(e){const t=e.startPos;e.file.seek(t);const n=e.file.readShort(),r=f(e,n);return r?r.depress(e):[]}(e);const n=function(e){switch(e.mode()){case 3:return u}return console.warn("Cannot determine Mixer."),u}(e);return n?n.mix(e,t):new Uint8ClampedArray(0)}(e),o=n.getContext("2d");if(o&&r.length>0&&o.putImageData(new ImageData(r,n.width,n.height),0,0),t&&t.style&&t.style.fill){const n=document.createElement("canvas");if(n.width=e.width(),n.height=e.height(),n.width>0&&n.height>0){const e=n.getContext("2d");e.fillStyle=t.style.fill,e.fillRect(0,0,n.width,n.height),o.globalCompositeOperation="source-in",o.drawImage(n,0,0),o.globalCompositeOperation="source-over"}}return n}function f(e,t){switch(t){case 1:return e.layer?new l:new i;case 0:return e.layer?new c:new a}return console.warn("Cannot determine depresser."),new i}var h=n(31),y=n(36);function p(e,t){t.name;const n={opacity:t.layer.opacity/255},r=function(e){const t=e.layer;if(t.objectEffects){const e=t.objectEffects();if(e.data.SoFi)return m(g(e.data.SoFi["Clr "]))}if(t.solidColor){if(t.adjustments.vectorStroke&&t.adjustments.vectorStroke.load()&&!1===t.adjustments.vectorStroke.data.fillEnabled)return;return m(g(t.solidColor().data["Clr "]))}if(t.typeTool){const e=t.typeTool();if(e.colors){const t=Array.prototype.concat([],e.colors()[0]);return t.pop(),m(t)}}if(t.adjustments&&t.adjustments.gradientFill&&t.adjustments.gradientFill.load()&&t.adjustments.gradientFill.data.Grad.Clrs.length){return m(g(t.adjustments.gradientFill.data.Grad.Clrs[0]["Clr "]))}}(t);r&&(n.fill=r);const o=function(e){const t=e.layer;if(t.adjustments.vectorStroke&&t.adjustments.vectorStroke.load()&&t.adjustments.vectorStroke.data.strokeEnabled){const e=t.adjustments.vectorStroke.data,n=m(g(e.strokeStyleContent["Clr "])),r=e.strokeStyleLineWidth.value,o=e.strokeStyleOpacity.value/100,a="strokeStyleRoundCap"===e.strokeStyleLineCapType.value?"round":"strokeStyleButtCap"===e.strokeStyleLineCapType.value?"butt":"strokeStyleSquareCap"===e.strokeStyleLineCapType.value?"square":void 0,i="strokeStyleMiterJoin"===e.strokeStyleLineJoinType.value?"miter":"strokeStyleRoundJoin"===e.strokeStyleLineJoinType.value?"round":"strokeStyleBevelJoin"===e.strokeStyleLineJoinType.value?"bevel":"miter",s=e.strokeStyleMiterLimit,l=e.strokeStyleLineDashSet,c=e.strokeStyleLineDashOffset.value;return{color:n,width:r,opacity:o,linecap:a,linejoin:i,miterlimit:s,dasharray:l,dashoffset:c}}}(t);return o&&(n.stroke=o),Object(y.e)(e)&&function(e,t){const n=t.layer;if(n.typeTool){const t=n.typeTool();t.fonts&&t.fonts()&&(e.fontFamily=t.fonts().join(",")),t.sizes&&t.sizes()&&(e.fontSize=Math.round(t.sizes()[0])),t.fontWeights&&t.fontWeights()&&(e.fontWeight=t.fontWeights()[0]),t.fontStyles&&t.fontStyles()&&(e.fontStyle=t.fontStyles()[0]),t.textDecoration&&t.textDecoration()&&(e.textDecoration=t.textDecoration()[0]),t.alignment&&t.alignment()&&(e.textAlign=t.alignment()[0])}}(n,t),n}function g(e){return[Math.round(e["Rd  "]),Math.round(e["Grn "]),Math.round(e["Bl  "])]}function m(e){return"#"+e.map(e=>e.toString(16)).map(e=>{for(;e.length<2;)e="0"+e;return e}).join("").toUpperCase()}async function w(e,t){const n=t.offsetX?t.offsetX:0,r=t.offsetY?t.offsetY:0,a=n+t.width,i=r+t.height,s=new o.Rect(n,r,a,i),l=e.children(),c=[],u=new WeakMap,d=[];for(const e of l){const n=j(e,s),r={name:e.name,rect:n,visible:e.visible(),layerType:x(e),page:t};if(e.layer.clipped){const t=e.clippedBy();Object.defineProperty(r,"maskBy",{get(){const e=d.find(e=>e.rawNode===t);if(e)return e.layer}}),r.masked=!0}switch(Object.defineProperty(r,"style",{get(){if(u.has(this))return u.get(this);{const t=p(r,e);return u.set(this,t),t}}}),r.layerType){case o.LayerType.folder:b(r,e,s,t);break;case o.LayerType.pixel:S(r,e);break;case o.LayerType.text:k(r,e);break;case o.LayerType.vector:C(r,e)}v(r,e),c.push(r)}return c}async function v(e,t){let n;if(Object(y.d)(e))n=await e.getPixelImg();else{if(Object(y.b)(e))return;{const r=t.layer.image.obj;n=await d(r,e)}}e.rect=Object(h.adjustPixelRect)(e.rect,n)}function b(e,t,n,r){const o=e;o.children=Object(h.cachePromise)(async()=>{const e=await w(t,r);let n=void 0;return e.forEach(e=>{e.visible&&e.rect.valid&&(n=e.rect.combine(n)),e.parent=o}),o.rect=n||o.rect,e}),o.childrenLength=t.children().length,o.rect.valid||o.children()}async function S(e,t){const n=e,r=t.layer.image.obj;let o=void 0;n.getPixelImg=async()=>(o||(o=await d(r,n)),o)}function k(e,t){let n="";e.getText=()=>(n||(n=t.layer.typeTool().textValue),Promise.resolve(n))}function C(e,t){const r=e;let o="";r.getSvgString=async()=>{if(!o){const e=t.layer;let a=e.vectorMask();a.loaded||a.load(),a=a.export(),a.disable;const i=new(0,(await n.e(31).then(n.t.bind(null,893,7))).default)(r.rect.width,r.rect.height);(0,(await n.e(32).then(n.t.bind(null,894,7))).default)(i,e);const s=i.getSerializedSvg();o=Object(h.centerSvgStringViewBox)(s)}return o}}function j(e,t){let n=e;e.layer.mask&&!1===e.layer.mask.disabled&&(n=e.layer.mask);let r=new o.Rect(n.left,n.top,n.right,n.bottom);if(e.clippedBy()){const n=j(e.clippedBy(),t);r=r.clampBy(n)}return t&&void 0!==t.left&&void 0!==t.top&&(r=r.pan(-t.left,-t.top),r.left<0&&(r.left=0),r.top<0&&(r.top=0)),r}function x(e){return e.isRoot()||e.isGroup()?o.LayerType.folder:void 0!==e.layer.vectorMask?o.LayerType.vector:void 0!==e.layer.typeTool?o.LayerType.text:o.LayerType.pixel}function T(e){return{name:e.name,rect:new o.Rect(0,0,e.width,e.height),page:e,layerType:o.LayerType.pixel,visible:!0,getPixelImg:Object(h.cachePromise)(async()=>Object(h.imgToCanvas)(await e.getPreview()))}}function L(e){const t={};return async()=>(t[1]||(t[1]=await Object(h.canvasToImg)(Object(h.scaleCanvas)(e,1))),t[1])}async function P(e){const t=e.file;e.meta.mime=t.type;const a=await async function(e){const t=(await Promise.all([n.e(0),n.e(2),n.e(3),n.e(13),n.e(18)]).then(n.t.bind(null,892,7))).default,o=await Object(r.a)(e),a=new Uint8Array(o),i=new t(a);return i.parse(),i}(t);let i;return{name:e.meta.name,fileMeta:e.meta,getPages:()=>(i||(i=function(e,t){const n=e.tree().children();let r=!1;return n.forEach(e=>{e.layer.artboard&&(r=!0)}),r?function(e){const t=e.tree().children(),n=d(e.image.obj),r=[];for(const e of t){let t;t=e.layer.artboard?o.Rect.fromJson(e.layer.artboard().export().coords):o.Rect.fromJson(e);const a=h.canvas.cropCanvas(n,t);let i=void 0;const s={id:e.name,name:e.name,offsetX:t.left,offsetY:t.top,width:t.width,height:t.height,getPreview:L(a),getLayers:async()=>(i||(i=await w(e,s)),i),toLayer:Object(h.cachePromise)(async()=>T(s)),layerAmount:e.children().length};r.push(s)}return r}(e):function(e,t){const n=e.tree(),r=n.name||e.name||t,o=d(e.image.obj);let a=void 0;const i={id:r,name:r,width:o.width,height:o.height,getPreview:L(o),getLayers:async()=>(a||(a=await w(n,i)),a),toLayer:Object(h.cachePromise)(async()=>T(i)),layerAmount:n.children().length};return[i]}(e,t)}(a,e.meta.name)),Promise.resolve(i))}}n.d(t,"decodeProject",(function(){return P}))}}]);