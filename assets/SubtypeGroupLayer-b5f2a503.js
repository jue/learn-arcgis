import{_ as x}from"./index-40e4af68.js";import{eR as K,d5 as D,aU as k,c$ as X,ak as S,dE as Y,s as ee,fs as te,p as A,M as b,bx as L,bd as N,f as i,g as n,aO as re,fv as ie,d7 as se,fO as ne,fN as oe,fx as ae,m as le,aW as O,j as M,fP as pe,eT as ue,fQ as de,fq as ye,d0 as ce,d4 as he,d1 as be,d2 as me,d3 as fe,V as C,eJ as ge,k as ve,er as we,ax as Se,R as Fe,bA as Ie,fR as Oe,fJ as $e,dw as Ee,ft as Te,d6 as je,dl as P,de as _e}from"./index-a1640f7c.js";import{i as Ce}from"./APIKeyMixin-8c8312ea.js";import{l as Ae}from"./ArcGISService-8805b728.js";import{o as Le}from"./CustomParametersMixin-26786ba8.js";import{F as xe}from"./EditBusLayer-bfb58270.js";import{y as Pe,D as Re}from"./FeatureLayerBase-89f1960d.js";import{a as Ge,d as Ve}from"./TemporalLayer-2269a361.js";import{x as Q,Q as qe,T as De,m as ke,w as Ne,b as Me,j as Qe,I as Ue,q as He,F as Je,A as Be,O as ze,P as We,E as Ze,S as Ke}from"./featureLayerUtils-6b6e0c1b.js";import{s as U}from"./fieldProperties-7eab5597.js";import{p as H}from"./FeatureTemplate-65031d27.js";import{C as Xe,c as Ye,u as et,S as tt}from"./LabelClass-124e90a0.js";import{i as rt}from"./labelingInfo-363cd920.js";import{b as J}from"./Query-668f1052.js";import{p as it}from"./popupUtils-fc82acc8.js";import{e as st}from"./versionUtils-4cca9a97.js";import{A as T}from"./interfaces-f1f22245.js";import"./LayerFloorInfo-010da306.js";import"./serviceCapabilitiesUtils-5631e482.js";import"./AttachmentQuery-8b2738cb.js";import"./RelationshipQuery-57d02b15.js";import"./labelUtils-0b258658.js";import"./defaultsJSON-b087dd4d.js";const nt=["charts","editingEnabled","formTemplate","labelsVisible","labelingInfo","legendEnabled","minScale","maxScale","opacity","popupEnabled","popupTemplate","renderer","subtypeCode","templates","title","visible"],B={key:"type",base:pe,errorContext:"renderer",typeMap:{simple:A,"unique-value":ue,"class-breaks":de}},R=U(),G=K({types:B});let ot=0;function I(e){const t=e.json.write;return typeof t=="object"?t.ignoreOrigin=!0:e.json.write={ignoreOrigin:!0},e}function at(e){return new A({symbol:lt(e)})}function lt(e){switch(e){case"point":case"multipoint":return tt.clone();case"polyline":return et.clone();case"polygon":case"multipatch":return Ye.clone();default:return null}}function pt(e,t){return!!t&&(e==null?void 0:e.type)==="unique-value"&&typeof e.field=="string"&&e.field.toLowerCase()===t.toLowerCase()&&!e.field2&&!e.field3&&!e.valueExpression}function z(e,t){var r;return e==null?null:(r=t.subtypes)==null?void 0:r.find(s=>s.code===e)}function ut(e,t){let r=null;switch(t.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":r="point";break;case"esriGeometryPolyline":r="line";break;case"esriGeometryPolygon":case"esriGeometryMultiPatch":r="polygon";break;default:t.type,r=null}const s={},o=z(e,t);if(o!=null){const{defaultValues:a}=o;for(const p in a)s[p]=a[p]}return s[t.subtypeField]=e,new H({name:"New Feature",drawingTool:r,prototype:{attributes:s}})}const W="esri.layers.support.SubtypeSublayer";let l=class extends D(k(X(ye))){constructor(e){super(e),this.charts=null,this.editingEnabled=!0,this.fieldOverrides=null,this.fieldsIndex=null,this.formTemplate=null,this.id=`${Date.now().toString(16)}-subtype-sublayer-${ot++}`,this.type="subtype-sublayer",this.labelsVisible=!0,this.labelingInfo=null,this.layerType="ArcGISFeatureLayer",this.legendEnabled=!0,this.listMode="show",this.minScale=0,this.maxScale=0,this.opacity=1,this.parent=null,this.popupEnabled=!0,this.popupTemplate=null,this.subtypeCode=null,this.templates=null,this.title=null,this.visible=!0}get capabilities(){var e;return(e=this.parent)==null?void 0:e.capabilities}get effectiveCapabilities(){var e;return(e=this.parent)==null?void 0:e.effectiveCapabilities}get effectiveEditingEnabled(){const{parent:e}=this;return e?e.effectiveEditingEnabled&&this.editingEnabled:this.editingEnabled}get elevationInfo(){var e;return(e=this.parent)==null?void 0:e.elevationInfo}writeFieldOverrides(e,t,r){const{fields:s,parent:o}=this;let a;if(s){a=[];let p=0;s.forEach(({name:y,alias:c,editable:f,visible:g})=>{var $;if(!g)return;const d=($=o==null?void 0:o.fields)==null?void 0:$.find(F=>F.name===y);if(!d)return;const m={name:y};let w=!1;c!==d.alias&&(m.alias=c,w=!0),f!==d.editable&&(m.editable=f,w=!0),a.push(m),w&&p++}),p===0&&a.length===s.length&&(a=null)}else a=S(e);a!=null&&a.length&&Y(r,a,t)}get fields(){const{parent:e,fieldOverrides:t,subtypeCode:r}=this,s=e==null?void 0:e.fields;if(!e||!(s!=null&&s.length))return null;const{subtypes:o,subtypeField:a}=e,p=o==null?void 0:o.find(g=>g.code===r),y=p==null?void 0:p.defaultValues,c=p==null?void 0:p.domains,f=[];for(const g of s){const d=g.clone(),{name:m}=d,w=t==null?void 0:t.find(E=>E.name===m);if(d.visible=!t||!!w,w){const{alias:E,editable:Z}=w;E&&(d.alias=E),Z===!1&&(d.editable=!1)}const $=(y==null?void 0:y[m])??null;d.defaultValue=m===a?r:$;const F=(c==null?void 0:c[m])??null;d.domain=m===a?null:F?F.type==="inherited"?d.domain:F.clone():null,f.push(d)}return f}get floorInfo(){var e;return(e=this.parent)==null?void 0:e.floorInfo}get geometryType(){var e;return(e=this.parent)==null?void 0:e.geometryType}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this;return{minScale:e,maxScale:t}}get objectIdField(){var e;return this.parent||ee.getLogger(W).error(v("objectIdField")),(e=this.parent)==null?void 0:e.objectIdField}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){te(e,this.fieldsIndex),this._override("renderer",e)}get renderer(){if(this._isOverridden("renderer"))return this._get("renderer");const{parent:e}=this;return e&&!e.isTable&&e.geometryType!=="mesh"?at(e.geometryType):null}readRendererFromService(e,t,r){var y,c,f;if(t.type==="Table")return null;const s=(y=t.drawingInfo)==null?void 0:y.renderer,o=G(s,t,r);let a;const{subtypeCode:p}=this;if(p!=null&&pt(o,t.subtypeField)){const g=(c=o.uniqueValueInfos)==null?void 0:c.find(({value:d})=>(d=typeof d=="number"?String(d):d)===String(p));g&&(a=new A({symbol:g.symbol}))}else(o==null?void 0:o.type)!=="simple"||(f=o.visualVariables)!=null&&f.length||(a=o);return a}readRenderer(e,t,r){var a,p,y;const s=(p=(a=t==null?void 0:t.layerDefinition)==null?void 0:a.drawingInfo)==null?void 0:p.renderer;return s?((y=s.visualVariables)==null?void 0:y.some(c=>c.type!=="rotationInfo"))?void 0:G(s,t,r)||void 0:void 0}get spatialReference(){var e;return(e=this.parent)==null?void 0:e.spatialReference}readTemplatesFromService(e,t){return[ut(this.subtypeCode,t)]}readTitleFromService(e,t){const r=z(this.subtypeCode,t);return r!=null?r.name:null}get url(){var e;return(e=this.parent)==null?void 0:e.url}get userHasUpdateItemPrivileges(){var e;return!!((e=this.parent)!=null&&e.userHasUpdateItemPrivileges)}async addAttachment(e,t){const{parent:r}=this;if(!r)throw v("addAttachment");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new b("subtype-sublayer:addAttachment","The feature provided does not belong to this SubtypeSublayer");return r.addAttachment(e,t)}async updateAttachment(e,t,r){const{parent:s}=this;if(!s)throw v("updateAttachment");if(e.getAttribute(s.subtypeField)!==this.subtypeCode)throw new b("subtype-sublayer:updateAttachment","The feature provided does not belong to this SubtypeSublayer");return s.updateAttachment(e,t,r)}async deleteAttachments(e,t){const{parent:r}=this;if(!r)throw v("deleteAttachments");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new b("subtype-sublayer:deleteAttachments","The feature provided does not belong to this SubtypeSublayer");return r.deleteAttachments(e,t)}async applyEdits(e,t){if(!this.parent)throw v("applyEdits");return this.parent.applyEdits(e,t)}createPopupTemplate(e){let t=this;const{parent:r,fields:s,title:o}=this;if(r){const{displayField:a,editFieldsInfo:p,objectIdField:y}=r;t={displayField:a,editFieldsInfo:p,fields:s,objectIdField:y,title:o}}return it(t,e)}createQuery(){if(!this.parent)throw v("createQuery");const e=Q(this.parent),t=`${this.parent.subtypeField}=${this.subtypeCode}`;return e.where=L(t,this.parent.definitionExpression),e}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e){return this._getLayerDomain(e)}hasUserOverrides(){return nt.some(e=>this.originIdOf(e)===N.USER)}async queryAttachments(e,t){const r=await this.load();if(!r.parent)throw v("queryAttachments");const s=e.clone();return s.where=V(s.where,r.parent.subtypeField,r.subtypeCode),r.parent.queryAttachments(e,t)}async queryFeatures(e,t){const r=await this.load();if(!r.parent)throw v("queryFeatures");const s=J.from(e)??r.createQuery();return e!=null&&(s.where=V(s.where,r.parent.subtypeField,r.subtypeCode)),r.parent.queryFeatures(s,t)}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}};i([n({readOnly:!0,json:{read:!1}})],l.prototype,"capabilities",null),i([n({readOnly:!0,json:{read:!1}})],l.prototype,"effectiveCapabilities",null),i([n({json:{write:{ignoreOrigin:!0}}})],l.prototype,"charts",void 0),i([n({type:Boolean,nonNullable:!0,json:{name:"enableEditing",write:{ignoreOrigin:!0}}})],l.prototype,"editingEnabled",void 0),i([n({type:Boolean,readOnly:!0})],l.prototype,"effectiveEditingEnabled",null),i([n({readOnly:!0,json:{read:!1}})],l.prototype,"elevationInfo",null),i([n({json:{name:"layerDefinition.fieldOverrides",origins:{service:{read:!1}},write:{ignoreOrigin:!0,allowNull:!0}}})],l.prototype,"fieldOverrides",void 0),i([re("fieldOverrides")],l.prototype,"writeFieldOverrides",null),i([n({...R.fields,readOnly:!0,json:{read:!1}})],l.prototype,"fields",null),i([n(R.fieldsIndex)],l.prototype,"fieldsIndex",void 0),i([n({readOnly:!0,json:{read:!1}})],l.prototype,"floorInfo",null),i([n({type:Pe,json:{name:"formInfo",write:{ignoreOrigin:!0}}})],l.prototype,"formTemplate",void 0),i([n({type:String,clonable:!1,readOnly:!0,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],l.prototype,"id",void 0),i([n({readOnly:!0,json:{read:!1}})],l.prototype,"geometryType",null),i([n({readOnly:!0,json:{read:!1}})],l.prototype,"type",void 0),i([n(I(S(ie)))],l.prototype,"labelsVisible",void 0),i([n({type:[Xe],json:{name:"layerDefinition.drawingInfo.labelingInfo",origins:{service:{read:!1}},read:{reader:rt},write:{ignoreOrigin:!0}}})],l.prototype,"labelingInfo",void 0),i([n({type:["ArcGISFeatureLayer"],readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],l.prototype,"layerType",void 0),i([n(I(S(se)))],l.prototype,"legendEnabled",void 0),i([n({type:["show","hide"]})],l.prototype,"listMode",void 0),i([n((()=>{const e=S(ne);return e.json.origins.service.read=!1,I(e)})())],l.prototype,"minScale",void 0),i([n((()=>{const e=S(oe);return e.json.origins.service.read=!1,I(e)})())],l.prototype,"maxScale",void 0),i([n({readOnly:!0})],l.prototype,"effectiveScaleRange",null),i([n({readOnly:!0,json:{read:!1}})],l.prototype,"objectIdField",null),i([n({type:Number,range:{min:0,max:1},nonNullable:!0,json:{write:{ignoreOrigin:!0}}})],l.prototype,"opacity",void 0),i([n({clonable:!1})],l.prototype,"parent",void 0),i([n(I(S(ae)))],l.prototype,"popupEnabled",void 0),i([n({type:le,json:{name:"popupInfo",write:{ignoreOrigin:!0}}})],l.prototype,"popupTemplate",void 0),i([n({readOnly:!0})],l.prototype,"defaultPopupTemplate",null),i([n({types:B,json:{write:{target:"layerDefinition.drawingInfo.renderer",ignoreOrigin:!0}}})],l.prototype,"renderer",null),i([O("service","renderer",["drawingInfo.renderer","subtypeField","type"])],l.prototype,"readRendererFromService",null),i([O("renderer",["layerDefinition.drawingInfo.renderer"])],l.prototype,"readRenderer",null),i([n({readOnly:!0,json:{read:!1}})],l.prototype,"spatialReference",null),i([n({type:Number,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],l.prototype,"subtypeCode",void 0),i([n({type:[H],json:{name:"layerDefinition.templates",write:{ignoreOrigin:!0}}})],l.prototype,"templates",void 0),i([O("service","templates",["geometryType","subtypeField","subtypes","type"])],l.prototype,"readTemplatesFromService",null),i([n({type:String,json:{write:{ignoreOrigin:!0}}})],l.prototype,"title",void 0),i([O("service","title",["subtypes"])],l.prototype,"readTitleFromService",null),i([n({readOnly:!0,json:{read:!1}})],l.prototype,"url",null),i([n({readOnly:!0})],l.prototype,"userHasUpdateItemPrivileges",null),i([n({type:Boolean,nonNullable:!0,json:{name:"visibility",write:{ignoreOrigin:!0}}})],l.prototype,"visible",void 0),l=i([M(W)],l);const V=(e,t,r)=>{const s=new RegExp(`${t}\\s*=\\s*\\d+`),o=`${t}=${r}`,a=e??"";return s.test(a)?a.replace(s,o):L(o,a)},v=e=>new b(`This sublayer must have a parent SubtypeGroupLayer in order to use ${e}`),j=l,h="SubtypeGroupLayer",dt="esri.layers.SubtypeGroupLayer";function q(e,t){return new b("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${t}`,{layer:e})}const _=U();let u=class extends Re(xe(ce(Ge(he(be(Ae(me(fe(D(Le(Ce(k(_e))))))))))))){constructor(...e){super(...e),this._sublayersCollectionChanged=!1,this._sublayerLookup=new Map,this.fields=null,this.fieldsIndex=null,this.outFields=null,this.sublayers=new(C.ofType(j)),this.timeInfo=null,this.title="Layer",this.type="subtype-group",this._debouncedSaveOperations=ge(async(t,r,s)=>{const{save:o,saveAs:a}=await x(()=>import("./featureLayerUtils-c3942de8.js"),["./featureLayerUtils-c3942de8.js","./index-a1640f7c.js","./index-40e4af68.js","./index-1733c809.css","./index-0acc4ca4.css","./utils-27ef3ecc.js","./jsonContext-1b16f338.js","./saveAPIKeyUtils-2e5af0dc.js","./fetchService-fd9e2d10.js","./lazyLayerLoader-6cd164ce.js"],import.meta.url);switch(t){case T.SAVE:return o(this,r);case T.SAVE_AS:return a(this,s,r)}}),this.addHandles(ve(()=>this.sublayers,(t,r)=>this._handleSublayersChange(t,r),we))}destroy(){var e;(e=this.source)==null||e.destroy()}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}load(e){const t=e!=null?e.signal:null,r=this.loadFromPortal({supportedTypes:["Feature Service"]},e).catch(Se).then(async()=>{if(!this.url)throw new b("subtype-grouplayer:missing-url-or-source","SubtypeGroupLayer must be created with either a url or a portal item");if(this.layerId==null)throw new b("subtype-grouplayer:missing-layerid","layerId is required for a SubtypeGroupLayer created with url");return this._initLayerProperties(await this.createGraphicsSource(t))}).then(()=>qe(this,"load",e));return this.addResolvingPromise(r),Promise.resolve(this)}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("gdbVersion"),this.commitProperty("historicMoment"),this.commitProperty("returnZ"),this.commitProperty("capabilities"),this.commitProperty("returnM"),(this._get("createQueryVersion")??0)+1}get editingEnabled(){return this.loaded&&this.capabilities!=null&&this.capabilities.operations.supportsEditing&&this.userHasEditingPrivileges}get effectiveEditingEnabled(){return De(this)}get parsedUrl(){const e=Fe(this.url);return e!=null&&this.layerId!=null&&(e.path=Ie(e.path,this.layerId.toString())),e}set source(e){this._get("source")!==e&&this._set("source",e)}readTitleFromService(e,{name:t}){return this.url?Oe(this.url,t):t}async addAttachment(e,t){return ke(this,e,t,h)}async updateAttachment(e,t,r){return Ne(this,e,t,r,h)}async applyEdits(e,t){return Me(this,e,t)}on(e,t){return super.on(e,t)}async createGraphicsSource(e){const{default:t}=await $e(x(()=>import("./FeatureLayerSource-60fb4927.js"),["./FeatureLayerSource-60fb4927.js","./index-40e4af68.js","./index-1733c809.css","./index-a1640f7c.js","./index-0acc4ca4.css","./mat4f64-1413b4a7.js","./MeshGeoreferencedRelativeVertexSpace-a7bfcd7f.js","./vec32-09cdc603.js","./External-4865f624.js","./editingSupport-abd4e519.js","./EditBusLayer-bfb58270.js","./clientSideDefaults-df251644.js","./QueryEngineCapabilities-85c4f1d0.js","./defaultsJSON-b087dd4d.js","./QueryTask-5c09adfd.js","./Query-668f1052.js","./executeForIds-b8e18d59.js","./query-3c5fc440.js","./pbfQueryUtils-a447e2f5.js","./pbf-d889bed1.js","./OptimizedGeometry-d94e541f.js","./OptimizedFeatureSet-1d1ac4b9.js","./queryZScale-3be6edef.js","./executeQueryJSON-52a7ae9b.js","./executeQueryPBF-bf194d09.js","./featureConversionUtils-cd7cbc25.js","./featureLayerUtils-6b6e0c1b.js","./AttachmentQuery-8b2738cb.js","./RelationshipQuery-57d02b15.js","./editsZScale-cbe11c3d.js"],import.meta.url),e);return new t({layer:this}).load({signal:e})}createQuery(){const e=Q(this),t=this.sublayers.map(r=>r.subtypeCode);return e.where=L(`${this.subtypeField} IN (${t.join(",")})`,this.definitionExpression),e}async deleteAttachments(e,t){return Qe(this,e,t,h)}async fetchRecomputedExtents(e){return Ue(this,e,h)}findSublayerForFeature(e){const t=this.fieldsIndex.get(this.subtypeField),r=e.attributes[t.name];return this.findSublayerForSubtypeCode(r)}findSublayerForSubtypeCode(e){return this._sublayerLookup.get(e)}getFieldDomain(e,t){return this._getLayerDomain(e)}getField(e){return this.fieldsIndex.get(e)}loadAll(){return Ee(this,e=>{e(this.sublayers)})}async queryAttachments(e,t){return He(this,e,t,h)}async queryFeatures(e,t){const r=await this.load(),s=J.from(e)??r.createQuery(),o=s.outFields??[];o.includes(this.subtypeField)||(o.push(this.subtypeField),s.outFields=o);const a=await r.source.queryFeatures(s,t);if(a!=null&&a.features)for(const p of a.features)p.layer=p.sourceLayer=this.findSublayerForFeature(p);return a}async queryObjectIds(e,t){return Je(this,e,t,h)}async queryFeatureCount(e,t){return Be(this,e,t,h)}async queryExtent(e,t){return ze(this,e,t,h)}async queryRelatedFeatures(e,t){return We(this,e,t,h)}async queryRelatedFeaturesCount(e,t){return Ze(this,e,t,h)}async save(e){return this._debouncedSaveOperations(T.SAVE,e)}async saveAs(e,t){return this._debouncedSaveOperations(T.SAVE_AS,t,e)}write(e,t){var a;const{origin:r,layerContainerType:s,messages:o}=t;if(this.isTable){if(r==="web-scene"||r==="web-map"&&s!=="tables")return o==null||o.push(q(this,"using a table source cannot be written to web scenes and web maps")),null}else if(this.loaded&&r==="web-map"&&s==="tables")return o==null||o.push(q(this,"using a non-table source cannot be written to tables in web maps")),null;return(a=this.sublayers)!=null&&a.length?super.write(e,t):(o==null||o.push(new b("web-document-write:invalid-property",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' has invalid value for 'sublayers' property. 'sublayers' collection should contain at least one sublayer`,{layer:this})),null)}serviceSupportsSpatialReference(e){return!!this.loaded&&st(this,e)}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}async _initLayerProperties(e){var r;this._set("source",e);const{sourceJSON:t}=e;if(t&&(this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl})),this.isTable)throw new b("subtype-grouplayer:unsupported-source","SubtypeGroupLayer cannot be created using a layer with table source");if(!((r=this.subtypes)!=null&&r.length))throw new b("subtype-grouplayer:missing-subtypes","SubtypeGroupLayer must be created using a layer with subtypes");this._verifyFields(),Te(this.timeInfo,this.fieldsIndex)}async hasDataChanged(){return Ke(this)}_verifyFields(){var t,r;const e=((t=this.parsedUrl)==null?void 0:t.path)??"undefined";this.objectIdField||console.log("SubtypeGroupLayer: 'objectIdField' property is not defined (url: "+e+")"),this.isTable||e.search(/\/FeatureServer\//i)!==-1||(r=this.fields)!=null&&r.some(s=>s.type==="geometry")||console.log("SubtypeGroupLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: "+e+")")}_handleSublayersChange(e,t){t&&(t.forEach(r=>{r.parent=null}),this.removeHandles("sublayers-owner"),this._sublayerLookup.clear()),e&&(e.forEach(r=>{r.parent=this,this._sublayerLookup.set(r.subtypeCode,r)}),this._sublayersCollectionChanged=!1,this.addHandles([e.on("after-add",({item:r})=>{r.parent=this,this._sublayerLookup.set(r.subtypeCode,r)}),e.on("after-remove",({item:r})=>{r.parent=null,this._sublayerLookup.delete(r.subtypeCode)}),e.on("after-changes",()=>{this._sublayersCollectionChanged=!0})],"sublayers-owner"))}};i([n({readOnly:!0})],u.prototype,"createQueryVersion",null),i([n({readOnly:!0})],u.prototype,"editingEnabled",null),i([n({readOnly:!0})],u.prototype,"effectiveEditingEnabled",null),i([n({..._.fields,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}})],u.prototype,"fields",void 0),i([n(_.fieldsIndex)],u.prototype,"fieldsIndex",void 0),i([n(je)],u.prototype,"id",void 0),i([n({type:["show","hide","hide-children"],json:{origins:{"portal-item":{read:!1,write:!1}}}})],u.prototype,"listMode",void 0),i([n({value:"SubtypeGroupLayer",type:["SubtypeGroupLayer"],json:{origins:{"portal-item":{name:"layerType",write:{enabled:!0,ignoreOrigin:!0}}}}})],u.prototype,"operationalLayerType",void 0),i([n(_.outFields)],u.prototype,"outFields",void 0),i([n({readOnly:!0})],u.prototype,"parsedUrl",null),i([n({clonable:!1})],u.prototype,"source",null),i([n({type:C.ofType(j),json:{origins:{service:{read:{source:"subtypes",reader:(e,t,r)=>{const s=e.map(({code:o})=>{const a=new j({subtypeCode:o});return a.read(t,r),a});return new(C.ofType(j))(s)}}}},name:"layers",write:{overridePolicy(e,t,r){const s=this.originOf("sublayers"),o=N.PORTAL_ITEM;let a=!0;if(P(s)===o&&P(r.origin)>o){const p=e.some(y=>y.hasUserOverrides());a=this._sublayersCollectionChanged||p}return{enabled:a,ignoreOrigin:!0}}}}})],u.prototype,"sublayers",void 0),i([n({type:Ve})],u.prototype,"timeInfo",void 0),i([n({json:{origins:{"portal-item":{write:{enabled:!0,ignoreOrigin:!0,writerEnsuresNonNull:!0}}}}})],u.prototype,"title",void 0),i([O("service","title",["name"])],u.prototype,"readTitleFromService",null),i([n({json:{read:!1}})],u.prototype,"type",void 0),u=i([M(dt)],u);const Rt=u;export{Rt as default};