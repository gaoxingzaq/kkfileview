(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{900:function(t,e,i){"use strict";i.r(e);var o=i(1),s=i(109),r=i.n(s),a=i(55),n=i(0),h=i(54);class g extends o.BaseRenderer{constructor(t){super(t),this._originImgWidth=0,this._originImgHeight=0,this.svg=r()(t),this.background=this.svg.group().move(0,0),this.labelGroup=this.svg.group().move(0,0),this.pluginDraw=this.svg.group().move(0,0),this.labelGroup.after(this.background),this.pluginDraw.front(),this.svg.width(t.clientWidth),this.svg.height(t.clientHeight),this.bindExtraEvents(),Object(n.a)(t=>t.canvasState.zoomLevel,()=>{this._renderPageLayout()})}removeDrawableGroup(t){t.children().forEach(t=>{t instanceof r.a.Container?this.removeDrawableGroup(t):t.clipper&&t.clipper.remove()}),t.clear(),t.remove()}measureText(t,e){const i=this.draw({...e,txt:t,textBackgroundFill:void 0}),o=i.bbox(),s={width:o.width,height:o.height};return i.remove(),s}realPointToPagePoint(t,e){if(this.pageLayouts){const i=this.pageLayouts.find(t=>t.page===e);return i?{x:t.x-i.rect.left,y:t.y-i.rect.top}:(console.warn("page not found in realPointToPagePoint"),{x:0,y:0})}return console.warn("pageLayout is not ready while realPointToPagePoint is called"),{x:0,y:0}}pagePointToRealPoint(t,e){if(this.pageLayouts){const i=this.pageLayouts.find(t=>t.page===e);return i?{x:t.x+i.rect.left,y:t.y+i.rect.top}:(console.warn("page not found in pagePointToRealPoint"),{x:0,y:0})}return console.warn("pageLayout is not ready while pagePointToRealPoint is called"),{x:0,y:0}}getDrawableGroup(){return this.pluginDraw.group().move(0,0)}bindExtraEvents(){const t=/Firefox/i.test(navigator.userAgent)?"DOMMouseScroll":"mousewheel";let e;this.svg.on(t,t=>{t.preventDefault(),t.stopPropagation();const e=t.detail||t.deltaY;e>0?Object(h.zoomOut)():e<0&&Object(h.zoomIn)()}),this.svg.on("mousedown",t=>{e=t}),this.svg.on("mouseup",t=>{e&&t.timeStamp-e.timeStamp<200&&Math.sqrt(Math.pow(t.screenX-e.screenX,2)+Math.pow(t.screenY-e.screenY,2))<50&&(this.emit("click",{e:t}),e=void 0)})}delegateEvents(t,e){"click"!==t&&this.svg.on(t,t=>{e({e:t})})}resizeRender(){this.svg.width(this.renderWidth),this.svg.height(this.renderHeight);const t=this.svg.viewbox();this.svg.viewbox(t.x,t.y,this.renderWidth,this.renderHeight)}destroy(){this.svg.remove()}get imgWidth(){return this._originImgWidth*this.zoom}get imgHeight(){return this._originImgHeight*this.zoom}_panX(t){if(void 0!==t){const e=this.svg.viewbox();this.svg.viewbox(t,e.y,e.width,e.height)}return this.svg.viewbox().x}_panY(t){if(void 0!==t){const e=this.svg.viewbox();this.svg.viewbox(e.x,t,e.width,e.height)}return this.svg.viewbox().y}pageByRealCoords(t){if(this.pageLayouts){const e=this.pageLayouts.find(e=>e.rect.containsCoords(t.x,t.y));return e?e.page:null}return null}async renderPages(t){this.pageLayouts=Object(a.pagesToLayout)(t),await this._renderPageLayout(),this._originImgWidth=this.background.rbox().width,this._originImgHeight=this.background.rbox().height}async _renderPageLayout(){if(this.pageLayouts){this.clearBackground();const t=Object(a.scalePageLayouts)(this.pageLayouts,this.zoom);for(const e of t){const t=e.page,i=await t.getPreview();this.svg.image(i.src,e.rect.width,e.rect.height).addTo(this.background).move(e.rect.left,e.rect.top)}this.renderLabels(t)}}renderLabels(t){this.labelGroup.clear();for(const e of t){const t=e.page.name,i=this.svg.text(t).fill("white").addTo(this.labelGroup).move(e.rect.left,e.rect.top-20);let o=t.length;for(;i.bbox().width>e.rect.width&&"..."!==i.text();)o--,i.text(t.substr(0,o-1)+"...")}}clearBackground(){const t=this.background.children();for(const e of t)e.off();this.background.clear()}applyDrawOptions(t,e){if(t.stroke({color:e.strokeColor,width:e.strokeWidth,dasharray:e.strokeDashArray}).fill({color:e.fillColor,rule:e.fillRule}).opacity(e.opacity?e.opacity:1),e.scaleX&&e.scaleY&&t.scale(e.scaleX?e.scaleX:1,e.scaleY),void 0!==e.left&&void 0!==e.top&&t.move(e.left,e.top),e.clip){const i=t.clipper?t.clipper:this.svg.clip();if(e.clip.circle){i.clear();const t=this.draw(e.clip.circle);i.add(t)}t.clipper||t.clipWith(i)}return t}draw(t,e){let i=void 0;if(Object(o.isDrawLine)(t))i=this.svg.line(t.x1,t.y1,t.x2,t.y2);else if(Object(o.isDrawText)(t)){const o=t.txt;if(t.textBackgroundFill){const i=this.measureText(o,t);this.draw({left:t.left,top:t.top,width:i.width,height:i.height,fillColor:t.textBackgroundFill},e)}i=this.svg.text(o).font({family:t.fontFamily,size:t.fontSize,weight:t.fontWeight})}else Object(o.isDrawRect)(t)?i=this.svg.rect(t.width,t.height):Object(o.isDrawCircle)(t)?i=this.svg.circle(2*t.radius):Object(o.isDrawImage)(t)&&(i=this.svg.image(t.img.src,t.img.width,t.img.height));if(i)return this.applyDrawOptions(i,t).addTo(e||this.pluginDraw);throw new Error("draw with unknow options:"+JSON.stringify(t))}updateDraw(t,e){return Object(o.isDrawLine)(e)?t.plot([e.x1,e.y1,e.x2,e.y2]):Object(o.isDrawText)(e)?t.text(e.txt).font({family:e.fontFamily,size:e.fontSize,weight:e.fontWeight}):Object(o.isDrawRect)(e)?t.size(e.width,e.height):Object(o.isDrawCircle)(e)?t.radius(e.radius):Object(o.isDrawImage)(e)&&t.load(e.img.src).size(e.img.width,e.img.height),this.applyDrawOptions(t,e),t}clearDrawing(t){t?t.clear():this.pluginDraw.clear()}}i.d(e,"SvgRenderer",(function(){return g}))}}]);