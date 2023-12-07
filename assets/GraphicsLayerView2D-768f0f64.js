import{u as o,n as a,V as g,o as m,e as s,f as p,g as c,j as l}from"./index-a1640f7c.js";import{m as n,u as d}from"./LayerView-2d3c5f91.js";import{i as u}from"./GraphicContainer-47e2652d.js";import{r as w}from"./GraphicsView2D-2d47c650.js";import"./index-40e4af68.js";import"./scaleUtils-a6dc33a1.js";import"./Container-3590d6f2.js";import"./definitions-9004ceb0.js";import"./enums-bdecffa2.js";import"./Texture-4afa4280.js";import"./color-79bf5ac1.js";import"./enums-f1a6a48a.js";import"./VertexElementDescriptor-2925c6af.js";import"./BaseGraphicContainer-976c6ece.js";import"./FeatureContainer-658dc261.js";import"./AttributeStoreView-4693ddeb.js";import"./TiledDisplayObject-fad23aba.js";import"./labelingInfo-363cd920.js";import"./LabelClass-124e90a0.js";import"./labelUtils-0b258658.js";import"./defaultsJSON-b087dd4d.js";import"./WGLContainer-60007597.js";import"./FramebufferObject-c69fd409.js";import"./ProgramTemplate-310aea7b.js";import"./GeometryUtils-674a9a70.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./earcut-8db51a9e.js";import"./featureConversionUtils-cd7cbc25.js";import"./OptimizedGeometry-d94e541f.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./visualVariablesUtils-9ee10648.js";import"./ExpandedCIM-2593c678.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-984e8446.js";import"./utils-1f021906.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-3b6838a5.js";import"./floatRGBA-b913c008.js";import"./clusterUtils-03328fb7.js";import"./MD5-715f37cd.js";import"./util-d0333d2d.js";import"./TileContainer-f7815d83.js";import"./vec3f32-2da9db36.js";import"./normalizeUtilsSync-3d314277.js";import"./projectionSupport-f349db69.js";import"./json-48e3ea08.js";import"./Matcher-cd16b5ab.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-c7fb560f.js";import"./ComputedAttributeStorage-1cd6f2b0.js";import"./TimeOnly-5a3d7a2a.js";let e=class extends n(d){constructor(){super(...arguments),this._highlightIds=new Map}attach(){this.graphicsView=new w({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new u(this.view.featuresTilingScheme)}),this._updateHighlight(),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler))}detach(){this.container.removeAllChildren(),this.graphicsView=o(this.graphicsView)}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map(t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer})):null}async fetchPopupFeatures(i){return this.graphicsView?this.graphicsView.hitTest(i).filter(t=>!!t.popupTemplate):[]}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i)}moveStart(){}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(i){let t;typeof i=="number"?t=[i]:i instanceof a?t=[i.uid]:Array.isArray(i)&&i.length>0?t=typeof i[0]=="number"?i:i.map(h=>h&&h.uid):g.isCollection(i)&&i.length>0&&(t=i.map(h=>h&&h.uid).toArray());const r=t==null?void 0:t.filter(m);return r!=null&&r.length?(this._addHighlight(r),s(()=>this._removeHighlight(r))):s()}_addHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const r=this._highlightIds.get(t);this._highlightIds.set(t,r+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_removeHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const r=this._highlightIds.get(t)-1;r===0?this._highlightIds.delete(t):this._highlightIds.set(t,r)}this._updateHighlight()}_updateHighlight(){var i;(i=this.graphicsView)==null||i.setHighlight(Array.from(this._highlightIds.keys()))}};p([c()],e.prototype,"graphicsView",void 0),e=p([l("esri.views.2d.layers.GraphicsLayerView2D")],e);const ui=e;export{ui as default};