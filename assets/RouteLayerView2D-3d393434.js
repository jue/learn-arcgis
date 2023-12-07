import{V as l,A as u,P as _,o as p,e as g,k as d,f as n,g as m,j as w,B as y,C as f,D as k,T as M,E as V,S as v,O as G}from"./index-a1640f7c.js";import{m as I,u as F}from"./LayerView-2d3c5f91.js";import{i as C}from"./GraphicContainer-47e2652d.js";import{r as H}from"./GraphicsView2D-2d47c650.js";import"./index-40e4af68.js";import"./scaleUtils-a6dc33a1.js";import"./Container-3590d6f2.js";import"./definitions-9004ceb0.js";import"./enums-bdecffa2.js";import"./Texture-4afa4280.js";import"./color-79bf5ac1.js";import"./enums-f1a6a48a.js";import"./VertexElementDescriptor-2925c6af.js";import"./BaseGraphicContainer-976c6ece.js";import"./FeatureContainer-658dc261.js";import"./AttributeStoreView-4693ddeb.js";import"./TiledDisplayObject-fad23aba.js";import"./labelingInfo-363cd920.js";import"./LabelClass-124e90a0.js";import"./labelUtils-0b258658.js";import"./defaultsJSON-b087dd4d.js";import"./WGLContainer-60007597.js";import"./FramebufferObject-c69fd409.js";import"./ProgramTemplate-310aea7b.js";import"./GeometryUtils-674a9a70.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./earcut-8db51a9e.js";import"./featureConversionUtils-cd7cbc25.js";import"./OptimizedGeometry-d94e541f.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./visualVariablesUtils-9ee10648.js";import"./ExpandedCIM-2593c678.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-984e8446.js";import"./utils-1f021906.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-3b6838a5.js";import"./floatRGBA-b913c008.js";import"./clusterUtils-03328fb7.js";import"./MD5-715f37cd.js";import"./util-d0333d2d.js";import"./TileContainer-f7815d83.js";import"./vec3f32-2da9db36.js";import"./normalizeUtilsSync-3d314277.js";import"./projectionSupport-f349db69.js";import"./json-48e3ea08.js";import"./Matcher-cd16b5ab.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-c7fb560f.js";import"./ComputedAttributeStorage-1cd6f2b0.js";import"./TimeOnly-5a3d7a2a.js";const U=["route-info","direction-line","direction-point","polygon-barrier","polyline-barrier","point-barrier","stop"],a={graphic:null,property:null,oldValue:null,newValue:null};function c(t){return t instanceof y||t instanceof f||t instanceof k||t instanceof M||t instanceof V||t instanceof v||t instanceof G}function $(t){return l.isCollection(t)&&t.length&&c(t.at(0))}function b(t){return Array.isArray(t)&&t.length>0&&c(t[0])}let o=class extends I(F){constructor(){super(...arguments),this._graphics=new l,this._highlightIds=new Map,this._networkFeatureMap=new Map,this._networkGraphicMap=new Map}get _routeItems(){return new u({getCollections:()=>this.layer==null||this.destroyed?[]:[this.layer.routeInfo!=null?new l([this.layer.routeInfo]):null,this.layer.directionLines,this.layer.directionPoints,this.layer.polygonBarriers,this.layer.polylineBarriers,this.layer.pointBarriers,this.layer.stops]})}initialize(){this._updatingHandles.addOnCollectionChange(()=>this._routeItems,t=>this._routeItemsChanged(t),_)}destroy(){var t;this._networkFeatureMap.clear(),this._networkGraphicMap.clear(),this._graphics.removeAll(),(t=this._get("_routeItems"))==null||t.destroy()}attach(){this._createGraphicsView()}detach(){this._destroyGraphicsView()}async fetchPopupFeatures(t){return this._graphicsView.hitTest(t).filter(e=>!!e.popupTemplate)}highlight(t){let e;e=c(t)?[this._getNetworkFeatureUid(t)]:b(t)?t.map(r=>this._getNetworkFeatureUid(r)):$(t)?t.map(r=>this._getNetworkFeatureUid(r)).toArray():[t.uid];const i=e.filter(p);return i.length?(this._addHighlight(i),g(()=>this._removeHighlight(i))):g()}async hitTest(t,e){if(this.suspended)return null;const i=this._graphicsView.hitTest(t).filter(p).map(s=>this._networkGraphicMap.get(s));if(!i.length)return null;const{layer:r}=this;return i.reverse().map(s=>({type:"route",layer:r,mapPoint:t,networkFeature:s}))}isUpdating(){return this._graphicsView.updating}moveStart(){}moveEnd(){}update(t){this._graphicsView.processUpdate(t)}viewChange(){this._graphicsView.viewChange()}_addHighlight(t){for(const e of t)if(this._highlightIds.has(e)){const i=this._highlightIds.get(e);this._highlightIds.set(e,i+1)}else this._highlightIds.set(e,1);this._updateHighlight()}_createGraphic(t){const e=t.toGraphic();return e.layer=this.layer,e.sourceLayer=this.layer,e}_createGraphicsView(){const t=this.view,e=()=>this.requestUpdate(),i=new C(t.featuresTilingScheme);this._graphicsView=new H({container:i,graphics:this._graphics,requestUpdateCallback:e,view:t}),this.container.addChild(i),this._updateHighlight()}_destroyGraphicsView(){this.container.removeChild(this._graphicsView.container),this._graphicsView.destroy()}_getDrawOrder(t){const e=this._networkGraphicMap.get(t);return U.indexOf(e.type)}_getNetworkFeatureUid(t){return this._networkFeatureMap.has(t)?this._networkFeatureMap.get(t).uid:null}_removeHighlight(t){for(const e of t)if(this._highlightIds.has(e)){const i=this._highlightIds.get(e)-1;i===0?this._highlightIds.delete(e):this._highlightIds.set(e,i)}this._updateHighlight()}_routeItemsChanged(t){if(t.removed.length){this._graphics.removeMany(t.removed.map(e=>{const i=this._networkFeatureMap.get(e);return this._networkFeatureMap.delete(e),this._networkGraphicMap.delete(i),i}));for(const e of t.removed)this.removeHandles(e)}if(t.added.length){this._graphics.addMany(t.added.map(e=>{const i=this._createGraphic(e);return i.symbol==null?null:(this._networkFeatureMap.set(e,i),this._networkGraphicMap.set(i,e),i)}).filter(p));for(const e of t.added)this.addHandles([d(()=>e.geometry,(i,r)=>{this._updateGraphic(e,"geometry",i,r)}),d(()=>e.symbol,(i,r)=>{this._updateGraphic(e,"symbol",i,r)})],e);this._graphics.sort((e,i)=>this._getDrawOrder(e)-this._getDrawOrder(i))}}_updateGraphic(t,e,i,r){if(!this._networkFeatureMap.has(t)){const h=this._createGraphic(t);return this._networkFeatureMap.set(t,h),this._networkGraphicMap.set(h,t),void this._graphics.add(h)}const s=this._networkFeatureMap.get(t);s[e]=i,a.graphic=s,a.property=e,a.oldValue=r,a.newValue=i,this._graphicsView.graphicUpdateHandler(a)}_updateHighlight(){const t=Array.from(this._highlightIds.keys());this._graphicsView.setHighlight(t)}};n([m()],o.prototype,"_graphics",void 0),n([m()],o.prototype,"_routeItems",null),o=n([w("esri.views.2d.layers.RouteLayerView2D")],o);const $t=o;export{$t as default};