import{k as l,P as h,l as g,V as w,m as f,t as d,p as n,f as u,j as V}from"./index-a1640f7c.js";import{m as b,u as S}from"./LayerView-2d3c5f91.js";import{i as _}from"./GraphicContainer-47e2652d.js";import{r as T}from"./GraphicsView2D-2d47c650.js";import"./index-40e4af68.js";import"./scaleUtils-a6dc33a1.js";import"./Container-3590d6f2.js";import"./definitions-9004ceb0.js";import"./enums-bdecffa2.js";import"./Texture-4afa4280.js";import"./color-79bf5ac1.js";import"./enums-f1a6a48a.js";import"./VertexElementDescriptor-2925c6af.js";import"./BaseGraphicContainer-976c6ece.js";import"./FeatureContainer-658dc261.js";import"./AttributeStoreView-4693ddeb.js";import"./TiledDisplayObject-fad23aba.js";import"./labelingInfo-363cd920.js";import"./LabelClass-124e90a0.js";import"./labelUtils-0b258658.js";import"./defaultsJSON-b087dd4d.js";import"./WGLContainer-60007597.js";import"./FramebufferObject-c69fd409.js";import"./ProgramTemplate-310aea7b.js";import"./GeometryUtils-674a9a70.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./earcut-8db51a9e.js";import"./featureConversionUtils-cd7cbc25.js";import"./OptimizedGeometry-d94e541f.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./visualVariablesUtils-9ee10648.js";import"./ExpandedCIM-2593c678.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-984e8446.js";import"./utils-1f021906.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-3b6838a5.js";import"./floatRGBA-b913c008.js";import"./clusterUtils-03328fb7.js";import"./MD5-715f37cd.js";import"./util-d0333d2d.js";import"./TileContainer-f7815d83.js";import"./vec3f32-2da9db36.js";import"./normalizeUtilsSync-3d314277.js";import"./projectionSupport-f349db69.js";import"./json-48e3ea08.js";import"./Matcher-cd16b5ab.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-c7fb560f.js";import"./ComputedAttributeStorage-1cd6f2b0.js";import"./TimeOnly-5a3d7a2a.js";let y=class extends b(S){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(i,r){if(!this.graphicsViews.length)return null;const o=this.layer;return this.graphicsViews.reverse().flatMap(e=>{const t=this._popupTemplates.get(e),s=e.hitTest(i);for(const p of s)p.layer=o,p.sourceLayer=o,p.popupTemplate=t;return s}).map(e=>({type:"graphic",graphic:e,layer:o,mapPoint:i}))}update(i){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(i)}attach(){this.addAttachHandles([l(()=>{var i;return(i=this.layer)==null?void 0:i.featureCollections},i=>{this._clear();for(const{popupInfo:r,featureSet:o,layerDefinition:e}of i){const t=g.fromJSON(o),s=new w(t.features),p=e.drawingInfo,c=r?f.fromJSON(r):null,a=d(p.renderer),m=new T({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:s,renderer:a,container:new _(this.view.featuresTilingScheme)});this._graphicsViewMap[t.geometryType]=m,this._popupTemplates.set(m,c),t.geometryType!=="polygon"||this.layer.polygonSymbol?t.geometryType!=="polyline"||this.layer.lineSymbol?t.geometryType!=="point"||this.layer.pointSymbol||(this.layer.pointSymbol=a.symbol):this.layer.lineSymbol=a.symbol:this.layer.polygonSymbol=a.symbol,this.graphicsViews.push(m),this.container.addChild(m.container)}},h),l(()=>{var i;return(i=this.layer)==null?void 0:i.polygonSymbol},i=>{this._graphicsViewMap.polygon.renderer=new n({symbol:i})},h),l(()=>{var i;return(i=this.layer)==null?void 0:i.lineSymbol},i=>{this._graphicsViewMap.polyline.renderer=new n({symbol:i})},h),l(()=>{var i;return(i=this.layer)==null?void 0:i.pointSymbol},i=>{this._graphicsViewMap.point.renderer=new n({symbol:i})},h)])}detach(){this._clear()}moveStart(){}moveEnd(){}viewChange(){for(const i of this.graphicsViews)i.viewChange()}_clear(){this.container.removeAllChildren();for(const i of this.graphicsViews)i.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};y=u([V("esri.views.2d.layers.GeoRSSLayerView2D")],y);const _i=y;export{_i as default};
