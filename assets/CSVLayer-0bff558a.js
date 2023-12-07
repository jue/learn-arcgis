import{f as i,g as r,j as h,fq as v,eJ as w,l as S,aD as O,eg as F,F as b,aW as I,dh as q,fr as N,aP as _,ax as J,R as P,M as y}from"./index-a1640f7c.js";import j from"./FeatureLayer-25c63265.js";import{l as x}from"./clientSideDefaults-df251644.js";import{b as l}from"./Query-668f1052.js";import"./index-40e4af68.js";import"./FeatureLayerBase-89f1960d.js";import"./featureLayerUtils-6b6e0c1b.js";import"./AttachmentQuery-8b2738cb.js";import"./RelationshipQuery-57d02b15.js";import"./LayerFloorInfo-010da306.js";import"./serviceCapabilitiesUtils-5631e482.js";import"./editsZScale-cbe11c3d.js";import"./queryZScale-3be6edef.js";import"./APIKeyMixin-8c8312ea.js";import"./ArcGISService-8805b728.js";import"./CustomParametersMixin-26786ba8.js";import"./EditBusLayer-bfb58270.js";import"./FeatureEffectLayer-abc2ed84.js";import"./FeatureEffect-e8211952.js";import"./FeatureReductionLayer-e0b6e9c5.js";import"./clusterUtils-03328fb7.js";import"./MD5-715f37cd.js";import"./FeatureReductionSelection-4e18d128.js";import"./LabelClass-124e90a0.js";import"./labelUtils-0b258658.js";import"./defaultsJSON-b087dd4d.js";import"./OrderedLayer-1ffb9ce8.js";import"./TemporalLayer-2269a361.js";import"./FeatureTemplate-65031d27.js";import"./FeatureType-c2071a01.js";import"./fieldProperties-7eab5597.js";import"./labelingInfo-363cd920.js";import"./versionUtils-4cca9a97.js";import"./styleUtils-186e75e5.js";import"./TopFeaturesQuery-a7f73b79.js";import"./popupUtils-fc82acc8.js";import"./interfaces-f1f22245.js";import"./QueryEngineCapabilities-85c4f1d0.js";let n=class extends v{constructor(e){super(e),this.type="csv",this.refresh=w(async t=>{await this.load();const{extent:o,timeExtent:a}=await this._connection.invoke("refresh",t);return o&&(this.sourceJSON.extent=o),a&&(this.sourceJSON.timeInfo.timeExtent=[a.start,a.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}})}load(e){const t=e!=null?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){var e;(e=this._connection)==null||e.close(),this._connection=null}async openPorts(){return await this.load(),this._connection.openPorts()}async queryFeatures(e,t={}){await this.load(t);const o=await this._connection.invoke("queryFeatures",e?e.toJSON():null,t);return S.fromJSON(o)}async queryFeaturesJSON(e,t={}){return await this.load(t),this._connection.invoke("queryFeatures",e?e.toJSON():null,t)}async queryFeatureCount(e,t={}){return await this.load(t),this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)}async queryObjectIds(e,t={}){return await this.load(t),this._connection.invoke("queryObjectIds",e?e.toJSON():null,t)}async queryExtent(e,t={}){await this.load(t);const o=await this._connection.invoke("queryExtent",e?e.toJSON():null,t);return{count:o.count,extent:O.fromJSON(o.extent)}}async querySnapping(e,t={}){return await this.load(t),this._connection.invoke("querySnapping",e,t)}async _startWorker(e){this._connection=await F("CSVSourceWorker",{strategy:b("feature-layers-workers")?"dedicated":"local",signal:e,registryTarget:this});const{url:t,delimiter:o,fields:a,latitudeField:m,longitudeField:f,spatialReference:u,timeInfo:d}=this.loadOptions,c=await this._connection.invoke("load",{url:t,customParameters:this.customParameters,parsingOptions:{delimiter:o,fields:a==null?void 0:a.map(g=>g.toJSON()),latitudeField:m,longitudeField:f,spatialReference:u==null?void 0:u.toJSON(),timeInfo:d==null?void 0:d.toJSON()}},{signal:e});this.locationInfo=c.locationInfo,this.sourceJSON=c.layerDefinition,this.delimiter=c.delimiter}};i([r()],n.prototype,"type",void 0),i([r()],n.prototype,"loadOptions",void 0),i([r()],n.prototype,"customParameters",void 0),i([r()],n.prototype,"locationInfo",void 0),i([r()],n.prototype,"sourceJSON",void 0),i([r()],n.prototype,"delimiter",void 0),n=i([h("esri.layers.graphics.sources.CSVSource")],n);function p(e,t){throw new y(t,`CSVLayer (title: ${e.title}, id: ${e.id}) cannot be saved to a portal item`)}let s=class extends j{constructor(...e){super(...e),this.geometryType="point",this.capabilities=x(!1,!1),this.delimiter=null,this.editingEnabled=!1,this.fields=null,this.latitudeField=null,this.locationType="coordinates",this.longitudeField=null,this.operationalLayerType="CSV",this.outFields=["*"],this.path=null,this.spatialReference=_.WGS84,this.source=null,this.type="csv"}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}load(e){const t=e!=null?e.signal:null,o=this.loadFromPortal({supportedTypes:["CSV"],supportsData:!1},e).catch(J).then(async()=>this.initLayerProperties(await this.createGraphicsSource(t)));return this.addResolvingPromise(o),Promise.resolve(this)}get isTable(){return this.loaded&&this.geometryType==null}readWebMapLabelsVisible(e,t){var o,a;return t.showLabels!=null?t.showLabels:!!((a=(o=t.layerDefinition)==null?void 0:o.drawingInfo)!=null&&a.labelingInfo)}set url(e){if(!e)return void this._set("url",e);const t=P(e);this._set("url",t.path),t.query&&(this.customParameters={...this.customParameters,...t.query})}async createGraphicsSource(e){const t=new n({loadOptions:{delimiter:this.delimiter,fields:this.fields,latitudeField:this.latitudeField??void 0,longitudeField:this.longitudeField??void 0,spatialReference:this.spatialReference??void 0,timeInfo:this.timeInfo??void 0,url:this.url},customParameters:this.customParameters??void 0});return this._set("source",t),await t.load({signal:e}),this.read({locationInfo:t.locationInfo,columnDelimiter:t.delimiter},{origin:"service",url:this.parsedUrl}),t}queryFeatures(e,t){return this.load().then(()=>this.source.queryFeatures(l.from(e)||this.createQuery())).then(o=>{if(o!=null&&o.features)for(const a of o.features)a.layer=a.sourceLayer=this;return o})}queryObjectIds(e,t){return this.load().then(()=>this.source.queryObjectIds(l.from(e)||this.createQuery()))}queryFeatureCount(e,t){return this.load().then(()=>this.source.queryFeatureCount(l.from(e)||this.createQuery()))}queryExtent(e,t){return this.load().then(()=>this.source.queryExtent(l.from(e)||this.createQuery()))}read(e,t){super.read(e,t),t&&t.origin==="service"&&this.revert(["latitudeField","longitudeField"],"service")}write(e,t){return super.write(e,{...t,writeLayerSchema:!0})}clone(){throw new y("csv-layer:clone",`CSVLayer (title: ${this.title}, id: ${this.id}) cannot be cloned`)}async save(e){return p(this,"csv-layer:save")}async saveAs(e,t){return p(this,"csv-layer:save-as")}async hasDataChanged(){try{const{dataChanged:e,updates:t}=await this.source.refresh(this.customParameters);return t!=null&&this.read(t,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1}_verifyFields(){}_verifySource(){}_hasMemorySource(){return!1}};i([r({readOnly:!0,json:{read:!1,write:!1}})],s.prototype,"capabilities",void 0),i([r({type:[","," ",";","|","	"],json:{read:{source:"columnDelimiter"},write:{target:"columnDelimiter",ignoreOrigin:!0}}})],s.prototype,"delimiter",void 0),i([r({readOnly:!0,type:Boolean,json:{origins:{"web-scene":{read:!1,write:!1}}}})],s.prototype,"editingEnabled",void 0),i([r({json:{read:{source:"layerDefinition.fields"},write:{target:"layerDefinition.fields"}}})],s.prototype,"fields",void 0),i([r({type:Boolean,readOnly:!0})],s.prototype,"isTable",null),i([I("web-map","labelsVisible",["layerDefinition.drawingInfo.labelingInfo","showLabels"])],s.prototype,"readWebMapLabelsVisible",null),i([r({type:String,json:{read:{source:"locationInfo.latitudeFieldName"},write:{target:"locationInfo.latitudeFieldName",ignoreOrigin:!0}}})],s.prototype,"latitudeField",void 0),i([r({type:["show","hide"]})],s.prototype,"listMode",void 0),i([r({type:["coordinates"],json:{read:{source:"locationInfo.locationType"},write:{target:"locationInfo.locationType",ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"locationType",void 0),i([r({type:String,json:{read:{source:"locationInfo.longitudeFieldName"},write:{target:"locationInfo.longitudeFieldName",ignoreOrigin:!0}}})],s.prototype,"longitudeField",void 0),i([r({type:["CSV"]})],s.prototype,"operationalLayerType",void 0),i([r()],s.prototype,"outFields",void 0),i([r({type:String,json:{origins:{"web-scene":{read:!1,write:!1}},read:!1,write:!1}})],s.prototype,"path",void 0),i([r({json:{read:!1},cast:null,type:n,readOnly:!0})],s.prototype,"source",void 0),i([r({json:{read:!1},value:"csv",readOnly:!0})],s.prototype,"type",void 0),i([r({json:{read:q,write:{isRequired:!0,ignoreOrigin:!0,writer:N}}})],s.prototype,"url",null),s=i([h("esri.layers.CSVLayer")],s);const fe=s;export{fe as default};
