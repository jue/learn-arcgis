import{f as i,g as r,j as x,fq as $,eJ as P,l as C,aD as T,M as E,cT as m,cZ as N,eg as U,F as J,aM as _,d0 as k,d1 as W,d4 as X,d2 as D,d3 as Y,d5 as L,aP as j,fs as O,ft as Q,aX as R,dE as V,R as M,dx as Z,fu as G,aO as z,fv as A,d7 as B,dy as S,fS as H,fx as K,m as ee,fy as te,fz as ie,fA as re,d8 as se,de as oe}from"./index-a1640f7c.js";import{l as ae,o as ne}from"./clientSideDefaults-df251644.js";import{v as pe,W as le,q as de,V as ue,S as ye}from"./wfsUtils-071b9c3f.js";import{o as ce}from"./CustomParametersMixin-26786ba8.js";import{p as me}from"./FeatureEffectLayer-abc2ed84.js";import{c as fe}from"./FeatureReductionLayer-e0b6e9c5.js";import{c as he}from"./OrderedLayer-1ffb9ce8.js";import{a as ge}from"./TemporalLayer-2269a361.js";import{s as we}from"./fieldProperties-7eab5597.js";import{C as ve}from"./LabelClass-124e90a0.js";import{i as Fe}from"./labelingInfo-363cd920.js";import{b as y}from"./Query-668f1052.js";import{p as be}from"./popupUtils-fc82acc8.js";import"./index-40e4af68.js";import"./QueryEngineCapabilities-85c4f1d0.js";import"./defaultsJSON-b087dd4d.js";import"./geojson-023153a9.js";import"./date-294ce3fb.js";import"./OptimizedGeometry-d94e541f.js";import"./xmlUtils-444cb4c0.js";import"./FeatureEffect-e8211952.js";import"./clusterUtils-03328fb7.js";import"./MD5-715f37cd.js";import"./FeatureReductionSelection-4e18d128.js";import"./featureLayerUtils-6b6e0c1b.js";import"./AttachmentQuery-8b2738cb.js";import"./RelationshipQuery-57d02b15.js";import"./labelUtils-0b258658.js";let d=class extends ${constructor(){super(...arguments),this._connection=null,this.capabilities=ae(!1,!1),this.type="wfs",this.refresh=P(async e=>{await this.load();const{extent:t}=await this._connection.invoke("refresh",e);return t&&(this.sourceJSON.extent=t),{dataChanged:!0,updates:{extent:this.sourceJSON.extent}}})}load(e){const t=e!=null?e.signal:null;return this.addResolvingPromise(this._startWorker({signal:t})),Promise.resolve(this)}destroy(){var e;(e=this._connection)==null||e.close(),this._connection=null}async openPorts(){return await this.load(),this._connection.openPorts()}async queryFeatures(e,t={}){await this.load(t);const o=await this._connection.invoke("queryFeatures",e?e.toJSON():null,t);return C.fromJSON(o)}async queryFeaturesJSON(e,t={}){return await this.load(t),this._connection.invoke("queryFeatures",e?e.toJSON():null,t)}async queryFeatureCount(e,t={}){return await this.load(t),this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)}async queryObjectIds(e,t={}){return await this.load(t),this._connection.invoke("queryObjectIds",e?e.toJSON():null,t)}async queryExtent(e,t={}){await this.load(t);const o=await this._connection.invoke("queryExtent",e?e.toJSON():null,t);return{count:o.count,extent:T.fromJSON(o.extent)}}async querySnapping(e,t={}){return await this.load(t),this._connection.invoke("querySnapping",e,t)}async _createLoadOptions(e){var F,b;const{url:t,customParameters:o,name:n,namespaceUri:p,fields:a,geometryType:u,swapXY:f}=this.layer,c=this.layer.originOf("spatialReference")==="defaults"?void 0:this.layer.spatialReference;if(!t)throw new E("wfs-layer:missing-url","WFSLayer must be created with a url");this.wfsCapabilities||(this.wfsCapabilities=await pe(t,{customParameters:o,...e}));const h=["fields","geometryType","name","namespaceUri","swapXY"].some(w=>this.layer[w]==null),l=h?await le(this.wfsCapabilities,n,p,{spatialReference:c,customParameters:o,signal:e==null?void 0:e.signal}):{...de(a??[]),geometryType:u,name:n,namespaceUri:p,spatialReference:c,swapXY:f},g=ue(this.wfsCapabilities.readFeatureTypes(),l.name,l.namespaceUri),q=m.toJSON(l.geometryType);return{customParameters:o,featureType:g,fields:((F=l.fields)==null?void 0:F.map(w=>w.toJSON()))??[],geometryField:l.geometryField,geometryType:q,getFeatureUrl:this.wfsCapabilities.operations.GetFeature.url,getFeatureOutputFormat:this.wfsCapabilities.operations.GetFeature.outputFormat,objectIdField:l.objectIdField,spatialReference:(b=l.spatialReference)==null?void 0:b.toJSON(),swapXY:!!l.swapXY}}async _startWorker(e){const[t,o]=await N([this._createLoadOptions(e),U("WFSSourceWorker",{...e,strategy:J("feature-layers-workers")?"dedicated":"local",registryTarget:this})]),n=t.error||o.error||null,p=o.value||null;if(n)throw p&&p.close(),n;const a=t.value;this._connection=o.value;const u=(await this._connection.invoke("load",a,e)).extent;this.sourceJSON={dateFieldsTimeReference:{timeZoneIANA:_},extent:u,fields:a.fields,geometryType:a.geometryType,objectIdField:a.objectIdField,geometryField:a.geometryField,drawingInfo:ne(a.geometryType),name:a.featureType.title,wfsInfo:{name:a.featureType.name,featureUrl:a.getFeatureUrl,maxFeatures:3e3,swapXY:a.swapXY,supportedSpatialReferences:a.featureType.supportedSpatialReferences,version:"2.0.0",wfsNamespace:a.featureType.namespaceUri}}}};i([r()],d.prototype,"capabilities",void 0),i([r({constructOnly:!0})],d.prototype,"layer",void 0),i([r()],d.prototype,"sourceJSON",void 0),i([r()],d.prototype,"type",void 0),i([r()],d.prototype,"wfsCapabilities",void 0),d=i([x("esri.layers.graphics.sources.WFSSource")],d);var v;const I=we();let s=v=class extends he(ce(fe(me(k(ge(W(X(D(Y(L(oe))))))))))){static fromWFSLayerInfo(e){const{customParameters:t,fields:o,geometryField:n,geometryType:p,name:a,namespaceUri:u,objectIdField:f,spatialReference:c,swapXY:h,url:l,wfsCapabilities:g}=e;return new v({customParameters:t,fields:o,geometryField:n,geometryType:p,name:a,namespaceUri:u,objectIdField:f,spatialReference:c,swapXY:h,url:l,wfsCapabilities:g})}constructor(e){super(e),this.copyright=null,this.customParameters=null,this.dateFieldsTimeZone=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureUrl=void 0,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="WFS",this.maxFeatures=3e3,this.mode=0,this.name=null,this.namespaceUri=null,this.outFields=null,this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new d({layer:this}),this.spatialReference=j.WGS84,this.spatialReferences=[4326],this.swapXY=void 0,this.title="WFS",this.type="wfs",this.url=null,this.version=void 0}destroy(){var e;(e=this.source)==null||e.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WFS"]},e).then(()=>this.source.load(e)).then(()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo","spatialReference","name","namespaceUri"],"service"),O(this.renderer,this.fieldsIndex),Q(this.timeInfo,this.fieldsIndex)})),Promise.resolve(this)}get capabilities(){var e;return(e=this.source)==null?void 0:e.capabilities}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}writeFields(e,t,o){const n=e.filter(p=>p.name!==ye);this.geometryField&&n.unshift(new R({name:this.geometryField,alias:this.geometryField,type:"geometry"})),V(o,n.map(p=>p.toJSON()),t)}get parsedUrl(){return M(this.url)}set renderer(e){O(e,this.fieldsIndex),this._set("renderer",e)}get wfsCapabilities(){var e;return(e=this.source)==null?void 0:e.wfsCapabilities}set wfsCapabilities(e){this.source&&(this.source.wfsCapabilities=e)}createPopupTemplate(e){return be(this,e)}createQuery(){const e=new y;e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1";const{timeOffset:t,timeExtent:o}=this;return e.timeExtent=t!=null&&o!=null?o.offset(-t.value,t.unit):o||null,e}getFieldDomain(e,t){var o;return(o=this.getField(e))==null?void 0:o.domain}getField(e){var t;return(t=this.fieldsIndex)==null?void 0:t.get(e)}queryFeatures(e,t){return this.load().then(()=>this.source.queryFeatures(y.from(e)||this.createQuery(),t)).then(o=>{if(o!=null&&o.features)for(const n of o.features)n.layer=n.sourceLayer=this;return o})}queryObjectIds(e,t){return this.load().then(()=>this.source.queryObjectIds(y.from(e)||this.createQuery(),t))}queryFeatureCount(e,t){return this.load().then(()=>this.source.queryFeatureCount(y.from(e)||this.createQuery(),t))}queryExtent(e,t){return this.load().then(()=>this.source.queryExtent(y.from(e)||this.createQuery(),t))}async hasDataChanged(){try{const{dataChanged:e,updates:t}=await this.source.refresh(this.customParameters);return t!=null&&this.read(t,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1}};i([r({readOnly:!0})],s.prototype,"capabilities",null),i([r({type:String})],s.prototype,"copyright",void 0),i([r({readOnly:!0})],s.prototype,"createQueryVersion",null),i([r({json:{name:"wfsInfo.customParameters",write:{overridePolicy:e=>({enabled:!!(e&&Object.keys(e).length>0),ignoreOrigin:!0})}}})],s.prototype,"customParameters",void 0),i([r(Z("dateFieldsTimeReference"))],s.prototype,"dateFieldsTimeZone",void 0),i([r({readOnly:!0})],s.prototype,"defaultPopupTemplate",null),i([r({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],s.prototype,"definitionExpression",void 0),i([r({type:String})],s.prototype,"displayField",void 0),i([r(G)],s.prototype,"elevationInfo",void 0),i([r({type:String,readOnly:!0,json:{name:"wfsInfo.featureUrl",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"featureUrl",void 0),i([r({type:[R],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],s.prototype,"fields",void 0),i([z("fields")],s.prototype,"writeFields",null),i([r(I.fieldsIndex)],s.prototype,"fieldsIndex",void 0),i([r({type:T,json:{name:"extent"}})],s.prototype,"fullExtent",void 0),i([r()],s.prototype,"geometryField",void 0),i([r({type:String,json:{read:{source:"layerDefinition.geometryType",reader:m.read},write:{target:"layerDefinition.geometryType",writer:m.write,ignoreOrigin:!0},origins:{service:{read:m.read}}}})],s.prototype,"geometryType",void 0),i([r({type:String})],s.prototype,"id",void 0),i([r(A)],s.prototype,"labelsVisible",void 0),i([r({type:[ve],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:Fe},write:!0}})],s.prototype,"labelingInfo",void 0),i([r(B)],s.prototype,"legendEnabled",void 0),i([r({type:["show","hide"]})],s.prototype,"listMode",void 0),i([r({type:String})],s.prototype,"objectIdField",void 0),i([r({type:["WFS"]})],s.prototype,"operationalLayerType",void 0),i([r({type:S,json:{name:"wfsInfo.maxFeatures",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"maxFeatures",void 0),i([r({type:[0],readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],s.prototype,"mode",void 0),i([r({type:String,json:{name:"wfsInfo.name",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"name",void 0),i([r({type:String,json:{name:"wfsInfo.wfsNamespace",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"namespaceUri",void 0),i([r(H)],s.prototype,"opacity",void 0),i([r(I.outFields)],s.prototype,"outFields",void 0),i([r({readOnly:!0})],s.prototype,"parsedUrl",null),i([r(K)],s.prototype,"popupEnabled",void 0),i([r({type:ee,json:{name:"popupInfo",write:!0}})],s.prototype,"popupTemplate",void 0),i([r({types:te,json:{origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:ie,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:{ignoreOrigin:!0}}})],s.prototype,"renderer",null),i([r(re)],s.prototype,"screenSizePerspectiveEnabled",void 0),i([r({readOnly:!0})],s.prototype,"source",void 0),i([r({type:j,json:{name:"layerDefinition.spatialReference",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"extent.spatialReference"}}}})],s.prototype,"spatialReference",void 0),i([r({readOnly:!0,type:[S],json:{name:"wfsInfo.supportedSpatialReferences",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"spatialReferences",void 0),i([r({type:Boolean,value:!1,json:{name:"wfsInfo.swapXY",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"swapXY",void 0),i([r({json:{write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"name"}}}})],s.prototype,"title",void 0),i([r({json:{read:!1},readOnly:!0})],s.prototype,"type",void 0),i([r(se)],s.prototype,"url",void 0),i([r({type:String,readOnly:!0,json:{name:"wfsInfo.version",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"version",void 0),i([r()],s.prototype,"wfsCapabilities",null),s=v=i([x("esri.layers.WFSLayer")],s);const Ae=s;export{Ae as default};
