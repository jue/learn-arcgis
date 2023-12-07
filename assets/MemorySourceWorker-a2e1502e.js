import{aY as w,M as I,cs as Q,cu as Z,ct as A,aM as k,cw as F,cr as S,a4 as v}from"./index-a1640f7c.js";import{e as O,n as C,t as P}from"./featureConversionUtils-cd7cbc25.js";import{t as $,n as G}from"./objectIdUtils-789e911a.js";import{m as L}from"./FeatureStore-262b4246.js";import{x as E,j as _}from"./projectionSupport-f349db69.js";import{W}from"./QueryEngine-d92592b7.js";import{i as z,o as N,a as B}from"./clientSideDefaults-df251644.js";import{I as H,f as g,p as T,d as j,w as D}from"./sourceUtils-85125a32.js";import"./index-40e4af68.js";import"./OptimizedGeometry-d94e541f.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./BoundsStore-0f77e457.js";import"./PooledRBush-87fbee2a.js";import"./timeSupport-0fcf8586.js";import"./json-48e3ea08.js";import"./WhereClause-134b0915.js";import"./TimeOnly-5a3d7a2a.js";import"./QueryEngineCapabilities-85c4f1d0.js";import"./quantizationUtils-3b6838a5.js";import"./utils-4c66b102.js";import"./utils-067b142d.js";import"./generateRendererUtils-e10c9171.js";import"./RenderState-1d6218ee.js";import"./defaultsJSON-b087dd4d.js";import"./date-294ce3fb.js";const U=S,J={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:S},K={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};function V(h){return v(h)?h.z!=null:!!h.hasZ}function Y(h){return v(h)?h.m!=null:!!h.hasM}class je{constructor(){this._queryEngine=null,this._nextObjectId=null}destroy(){var e;(e=this._queryEngine)==null||e.destroy(),this._queryEngine=this._createDefaultAttributes=null}async load(e){const i=[],{features:a}=e,n=this._inferLayerProperties(a,e.fields),l=e.fields||[],u=e.hasM!=null?e.hasM:!!n.hasM,m=e.hasZ!=null?e.hasZ:!!n.hasZ,p=!e.spatialReference&&!n.spatialReference,d=p?U:e.spatialReference||n.spatialReference,y=p?J:null,c=e.geometryType||n.geometryType,o=!c;let t=e.objectIdField||n.objectIdField,r=e.timeInfo;const f=new w(l);if(!o&&(p&&i.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),!c))throw new I("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if(!t)throw new I("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");if(n.objectIdField&&t!==n.objectIdField&&(i.push({name:"feature-layer:duplicated-oid-field",message:`Provided objectIdField "${t}" doesn't match the field name "${n.objectIdField}", found in the provided fields`}),t=n.objectIdField),t&&!n.objectIdField){const s=f.get(t);s?(t=s.name,s.type="esriFieldTypeOID",s.editable=!1,s.nullable=!1):l.unshift({alias:t,name:t,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(const s of l){if(s.name==null&&(s.name=s.alias),s.alias==null&&(s.alias=s.name),!s.name)throw new I("feature-layer:invalid-field-name","field name is missing",{field:s});if(s.name===t&&(s.type="esriFieldTypeOID"),!Q.jsonValues.includes(s.type))throw new I("feature-layer:invalid-field-type",`invalid type for field "${s.name}"`,{field:s});s.length==null&&(s.length=Z(s))}const b={};for(const s of l)if(s.type!=="esriFieldTypeOID"&&s.type!=="esriFieldTypeGlobalID"){const q=A(s);q!==void 0&&(b[s.name]=q)}if(r){if(r.startTimeField){const s=f.get(r.startTimeField);s?(r.startTimeField=s.name,s.type="esriFieldTypeDate"):r.startTimeField=null}if(r.endTimeField){const s=f.get(r.endTimeField);s?(r.endTimeField=s.name,s.type="esriFieldTypeDate"):r.endTimeField=null}if(r.trackIdField){const s=f.get(r.trackIdField);s?r.trackIdField=s.name:(r.trackIdField=null,i.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:r}}))}r.startTimeField||r.endTimeField||(i.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:r}}),r=null)}const x=f.dateFields.length?{timeZoneIANA:e.dateFieldsTimeZone??k}:null;this._createDefaultAttributes=z(b,t);const R={warnings:i,featureErrors:[],layerDefinition:{...K,drawingInfo:N(c),templates:B(b),extent:y,geometryType:c,objectIdField:t,fields:l,hasZ:m,hasM:u,timeInfo:r,dateFieldsTimeReference:x},assignedObjectIds:{}};if(this._queryEngine=new W({fieldsIndex:w.fromLayerJSON({fields:l,timeInfo:r,dateFieldsTimeReference:x}),geometryType:c,hasM:u,hasZ:m,objectIdField:t,spatialReference:d,featureStore:new L({geometryType:c,hasM:u,hasZ:m}),timeInfo:r,cacheSpatialQueries:!0}),!(a!=null&&a.length))return this._nextObjectId=$,R;const M=G(t,a);return this._nextObjectId=M+1,await E(a,d),this._loadInitialFeatures(R,a)}async applyEdits(e){const{spatialReference:i,geometryType:a}=this._queryEngine;return await Promise.all([H(i,a),E(e.adds,i),E(e.updates,i)]),this._applyEdits(e)}queryFeatures(e,i={}){return this._queryEngine.executeQuery(e,i.signal)}queryFeatureCount(e,i={}){return this._queryEngine.executeQueryForCount(e,i.signal)}queryObjectIds(e,i={}){return this._queryEngine.executeQueryForIds(e,i.signal)}queryExtent(e,i={}){return this._queryEngine.executeQueryForExtent(e,i.signal)}querySnapping(e,i={}){return this._queryEngine.executeQueryForSnapping(e,i.signal)}_inferLayerProperties(e,i){let a,n,l=null,u=null,m=null;for(const p of e){const d=p.geometry;if(d!=null&&(l||(l=F(d)),u||(u=d.spatialReference),a==null&&(a=V(d)),n==null&&(n=Y(d)),l&&u&&a!=null&&n!=null))break}if(i&&i.length){let p=null;i.some(d=>{const y=d.type==="esriFieldTypeOID",c=!d.type&&d.name&&d.name.toLowerCase()==="objectid";return p=d,y||c})&&(m=p.name)}return{geometryType:l,spatialReference:u,objectIdField:m,hasM:n,hasZ:a}}async _loadInitialFeatures(e,i){const{geometryType:a,hasM:n,hasZ:l,objectIdField:u,spatialReference:m,featureStore:p,fieldsIndex:d}=this._queryEngine,y=[];for(const t of i){if(t.uid!=null&&(e.assignedObjectIds[t.uid]=-1),t.geometry&&a!==F(t.geometry)){e.featureErrors.push(g("Incorrect geometry type."));continue}const r=this._createDefaultAttributes(),f=T(d,r,t.attributes,!0);f?e.featureErrors.push(f):(this._assignObjectId(r,t.attributes,!0),t.attributes=r,t.uid!=null&&(e.assignedObjectIds[t.uid]=t.attributes[u]),t.geometry!=null&&(t.geometry=_(t.geometry,t.geometry.spatialReference,m)),y.push(t))}p.addMany(O([],y,a,l,n,u));const{fullExtent:c,timeExtent:o}=await this._queryEngine.fetchRecomputedExtents();if(e.layerDefinition.extent=c,o){const{start:t,end:r}=o;e.layerDefinition.timeInfo.timeExtent=[t,r]}return e}async _applyEdits(e){const{adds:i,updates:a,deletes:n}=e,l={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(i!=null&&i.length&&this._applyAddEdits(l,i),a!=null&&a.length&&this._applyUpdateEdits(l,a),n==null?void 0:n.length){for(const p of n)l.deleteResults.push(j(p));this._queryEngine.featureStore.removeManyById(n)}const{fullExtent:u,timeExtent:m}=await this._queryEngine.fetchRecomputedExtents();return{extent:u,timeExtent:m,featureEditResults:l}}_applyAddEdits(e,i){const{addResults:a}=e,{geometryType:n,hasM:l,hasZ:u,objectIdField:m,spatialReference:p,featureStore:d,fieldsIndex:y}=this._queryEngine,c=[];for(const o of i){if(o.geometry&&n!==F(o.geometry)){a.push(g("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),r=T(y,t,o.attributes);if(r)a.push(r);else{if(this._assignObjectId(t,o.attributes),o.attributes=t,o.uid!=null){const f=o.attributes[m];e.uidToObjectId[o.uid]=f}if(o.geometry!=null){const f=o.geometry.spatialReference??p;o.geometry=_(D(o.geometry,f),f,p)}c.push(o),a.push(j(o.attributes[m]))}}d.addMany(O([],c,n,u,l,m))}_applyUpdateEdits({updateResults:e},i){const{geometryType:a,hasM:n,hasZ:l,objectIdField:u,spatialReference:m,featureStore:p,fieldsIndex:d}=this._queryEngine;for(const y of i){const{attributes:c,geometry:o}=y,t=c==null?void 0:c[u];if(t==null){e.push(g(`Identifier field ${u} missing`));continue}if(!p.has(t)){e.push(g(`Feature with object id ${t} missing`));continue}const r=C(p.getFeature(t),a,l,n);if(o!=null){if(a!==F(o)){e.push(g("Incorrect geometry type."));continue}const f=o.spatialReference??m;r.geometry=_(D(o,f),f,m)}if(c){const f=T(d,r.attributes,c);if(f){e.push(f);continue}}p.add(P(r,a,l,n,u)),e.push(j(t))}}_assignObjectId(e,i,a=!1){const n=this._queryEngine.objectIdField;a&&i&&isFinite(i[n])?e[n]=i[n]:e[n]=this._nextObjectId++}}export{je as default};
