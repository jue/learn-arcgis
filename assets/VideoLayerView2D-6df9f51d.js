import{aU as g,aR as d,f as t,g as r,j as f,ew as b,dG as T,n as p,u as c,k as h,P as y}from"./index-a1640f7c.js";import{m as _,u as v}from"./LayerView-2d3c5f91.js";import{i as O}from"./GraphicContainer-47e2652d.js";import{r as G}from"./GraphicsView2D-2d47c650.js";import"./index-40e4af68.js";import"./scaleUtils-a6dc33a1.js";import"./Container-3590d6f2.js";import"./definitions-9004ceb0.js";import"./enums-bdecffa2.js";import"./Texture-4afa4280.js";import"./color-79bf5ac1.js";import"./enums-f1a6a48a.js";import"./VertexElementDescriptor-2925c6af.js";import"./BaseGraphicContainer-976c6ece.js";import"./FeatureContainer-658dc261.js";import"./AttributeStoreView-4693ddeb.js";import"./TiledDisplayObject-fad23aba.js";import"./labelingInfo-363cd920.js";import"./LabelClass-124e90a0.js";import"./labelUtils-0b258658.js";import"./defaultsJSON-b087dd4d.js";import"./WGLContainer-60007597.js";import"./FramebufferObject-c69fd409.js";import"./ProgramTemplate-310aea7b.js";import"./GeometryUtils-674a9a70.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./earcut-8db51a9e.js";import"./featureConversionUtils-cd7cbc25.js";import"./OptimizedGeometry-d94e541f.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./visualVariablesUtils-9ee10648.js";import"./ExpandedCIM-2593c678.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-984e8446.js";import"./utils-1f021906.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-3b6838a5.js";import"./floatRGBA-b913c008.js";import"./clusterUtils-03328fb7.js";import"./MD5-715f37cd.js";import"./util-d0333d2d.js";import"./TileContainer-f7815d83.js";import"./vec3f32-2da9db36.js";import"./normalizeUtilsSync-3d314277.js";import"./projectionSupport-f349db69.js";import"./json-48e3ea08.js";import"./Matcher-cd16b5ab.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-c7fb560f.js";import"./ComputedAttributeStorage-1cd6f2b0.js";import"./TimeOnly-5a3d7a2a.js";let a=class extends g(d){constructor(e){super(e),this.frameCenter=null,this.frameOutline=null,this.lineOfSight=null,this.sensorLocation=null,this.sensorTrail=null}};t([r({type:Boolean})],a.prototype,"frameCenter",void 0),t([r({type:Boolean})],a.prototype,"frameOutline",void 0),t([r({type:Boolean})],a.prototype,"lineOfSight",void 0),t([r({type:Boolean})],a.prototype,"sensorLocation",void 0),t([r({type:Boolean})],a.prototype,"sensorTrail",void 0),a=t([f("esri.layers.support.TelemetryDisplay")],a);const u=a,n=new b([255,127,0]);let m=class extends _(v){constructor(){super(...arguments),this._graphicsLayer=new T,this._frameOutlineGraphic=new p({symbol:{type:"simple-fill",outline:{type:"simple-line",color:n}}}),this._sensorTrailGraphic=new p({symbol:{type:"simple-line",color:n}}),this._lineOfSightGraphic=new p({symbol:{type:"simple-line",color:n}}),this._sensorLocationGraphic=new p({symbol:{type:"simple-marker",color:n}}),this._frameCenterGraphic=new p({symbol:{type:"simple-marker",color:n}}),this.layer=null,this.symbolColor=n,this.visibleTelemetryElements=null}destroy(){this._graphicsLayer=c(this._graphicsLayer)}initialize(){var e,i,s,l,o;this.addHandles(h(()=>this.symbolColor,()=>{this._frameOutlineGraphic.symbol.outline.color=this.symbolColor,this._sensorTrailGraphic.symbol.color=this.symbolColor,this._lineOfSightGraphic.symbol.color=this.symbolColor,this._sensorLocationGraphic.symbol.color=this.symbolColor,this._frameCenterGraphic.symbol.color=this.symbolColor},y)),this._graphicsLayer.graphics.addMany([this._frameOutlineGraphic,this._sensorTrailGraphic,this._lineOfSightGraphic,this._sensorLocationGraphic,this._frameCenterGraphic]),this.visibleTelemetryElements=new u({frameCenter:((e=this.layer.telemetryDisplay)==null?void 0:e.frameCenter)??!0,frameOutline:((i=this.layer.telemetryDisplay)==null?void 0:i.frameOutline)??!0,lineOfSight:((s=this.layer.telemetryDisplay)==null?void 0:s.lineOfSight)??!0,sensorLocation:((l=this.layer.telemetryDisplay)==null?void 0:l.sensorLocation)??!0,sensorTrail:((o=this.layer.telemetryDisplay)==null?void 0:o.sensorTrail)??!0})}attach(){this.graphicsView=new G({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this._graphicsLayer.graphics,container:new O(this.view.featuresTilingScheme)}),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this._graphicsLayer.on("graphic-update",this.graphicsView.graphicUpdateHandler)),this.addAttachHandles([h(()=>{var e,i,s,l,o;return[(e=this.layer.telemetryDisplay)==null?void 0:e.frameCenter,(i=this.layer.telemetryDisplay)==null?void 0:i.frameOutline,(s=this.layer.telemetryDisplay)==null?void 0:s.sensorLocation,(l=this.layer.telemetryDisplay)==null?void 0:l.sensorTrail,(o=this.layer.telemetryDisplay)==null?void 0:o.lineOfSight]},()=>this._updateVisibleTelemetryElements(),y),h(()=>{var e,i,s,l,o;return[this.layer.telemetry,(e=this.visibleTelemetryElements)==null?void 0:e.frameCenter,(i=this.visibleTelemetryElements)==null?void 0:i.frameOutline,(s=this.visibleTelemetryElements)==null?void 0:s.sensorLocation,(l=this.visibleTelemetryElements)==null?void 0:l.sensorTrail,(o=this.visibleTelemetryElements)==null?void 0:o.lineOfSight]},()=>this._updateGraphicGeometries(),y)])}detach(){this.container.removeAllChildren(),this.graphicsView=c(this.graphicsView)}supportsSpatialReference(e){return!0}moveStart(){}moveEnd(){}viewChange(){this.graphicsView.viewChange()}update(e){this.graphicsView.processUpdate(e)}isUpdating(){return!this.graphicsView||this.graphicsView.updating}_updateVisibleTelemetryElements(){this.visibleTelemetryElements&&this.layer.telemetryDisplay&&(this.visibleTelemetryElements.frameCenter=this.layer.telemetryDisplay.frameCenter,this.visibleTelemetryElements.frameOutline=this.layer.telemetryDisplay.frameOutline,this.visibleTelemetryElements.lineOfSight=this.layer.telemetryDisplay.lineOfSight,this.visibleTelemetryElements.sensorLocation=this.layer.telemetryDisplay.sensorLocation,this.visibleTelemetryElements.sensorTrail=this.layer.telemetryDisplay.sensorTrail)}_updateGraphicGeometries(){const{telemetry:e}=this.layer,{visibleTelemetryElements:i}=this;e&&i&&(i.frameOutline&&e.frameOutline?this._frameOutlineGraphic.geometry=this.layer.telemetry.frameOutline:this._frameOutlineGraphic.geometry=null,i.sensorTrail&&e.sensorTrail?this._sensorTrailGraphic.geometry=this.layer.telemetry.sensorTrail:this._sensorTrailGraphic.geometry=null,i.lineOfSight&&e.lineOfSight?this._lineOfSightGraphic.geometry=this.layer.telemetry.lineOfSight:this._lineOfSightGraphic.geometry=null,i.sensorLocation&&e.sensorLocation?this._sensorLocationGraphic.geometry=this.layer.telemetry.sensorLocation:this._sensorLocationGraphic.geometry=null,i.frameCenter&&e.frameCenter?this._frameCenterGraphic.geometry=this.layer.telemetry.frameCenter:this._frameCenterGraphic.geometry=null)}};t([r()],m.prototype,"graphicsView",void 0),t([r()],m.prototype,"layer",void 0),t([r()],m.prototype,"symbolColor",void 0),t([r({type:u})],m.prototype,"visibleTelemetryElements",void 0),m=t([f("esri.views.2d.layers.VideoLayerView2D")],m);const Oe=m;export{Oe as default};
