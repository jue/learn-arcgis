import{_ as P,g4 as O,ew as B,hf as C,hg as S,h9 as z,c8 as L,hh as D}from"./index-a1640f7c.js";import{e as A}from"./mat3f64-221ce671.js";import{p as N,m as q,c as G,g as K,a as Q}from"./meshFeatureSet-ac5148f2.js";import{c as I,x as F,L as U,O as E,i as j,E as V,T as k,u as H}from"./BufferView-7cd86cd1.js";import{t as J,f as W,i as X,o as M}from"./vec32-09cdc603.js";import{n as Y,l as Z,o as ee,f as te,r as re,a as ne,b as v,c as oe,d as se,e as _,g as le,h as ae,i as ie}from"./DefaultMaterial_COLOR_GAMMA-c6f30488.js";import{e as ue}from"./types-1305598a.js";import{B as ce}from"./georeference-8639a180.js";import{r as fe}from"./resourceUtils-12671833.js";import{D as w}from"./enums-bdecffa2.js";import"./index-40e4af68.js";import"./imageUtils-788b5cab.js";import"./MeshGeoreferencedRelativeVertexSpace-a7bfcd7f.js";import"./MeshLocalVertexSpace-0c6b0e05.js";import"./earcut-8db51a9e.js";import"./Indices-ac8bec9b.js";import"./deduplicate-14207796.js";import"./plane-f0e067b4.js";import"./sphere-d601a8e3.js";import"./ByteSizeUnit-d4757d40.js";import"./mat4f64-1413b4a7.js";import"./quatf64-3363c48e.js";import"./triangle-4709ebb6.js";import"./lineSegment-5ae7fcdd.js";import"./basicInterfaces-11f56cb3.js";import"./VertexAttribute-0e674613.js";import"./External-4865f624.js";import"./spatialReferenceEllipsoidUtils-e49343d1.js";import"./quat-fa27e95d.js";function me(e,r,t){const i=e.typedBuffer,l=e.typedBufferStride,o=r.typedBuffer,c=r.typedBufferStride,a=t?t.count:r.count;let s=((t==null?void 0:t.dstIndex)??0)*l,f=((t==null?void 0:t.srcIndex)??0)*c;for(let u=0;u<a;++u){for(let n=0;n<9;++n)i[s+n]=o[f+n];s+=l,f+=c}}Object.freeze(Object.defineProperty({__proto__:null,copy:me},Symbol.toStringTag,{value:"Module"}));function pe(e,r,t){const i=e.typedBuffer,l=e.typedBufferStride,o=r.typedBuffer,c=r.typedBufferStride,a=t?t.count:r.count;let s=((t==null?void 0:t.dstIndex)??0)*l,f=((t==null?void 0:t.srcIndex)??0)*c;for(let u=0;u<a;++u){for(let n=0;n<16;++n)i[s+n]=o[f+n];s+=l,f+=c}}Object.freeze(Object.defineProperty({__proto__:null,copy:pe},Symbol.toStringTag,{value:"Module"}));function T(e,r){return new e(new ArrayBuffer(r*e.ElementCount*ue(e.ElementType)))}async function et(e,r,t){const i={...t,useTransform:(t==null?void 0:t.useTransform)??!0},l=new Y(de(i)),o=(await Z(l,r,i,!0)).model,c=o.lods.shift(),a=new Map,s=new Map;o.textures.forEach((x,b)=>a.set(b,Te(x))),o.materials.forEach((x,b)=>s.set(b,ye(x,a)));const f=xe(c);for(const x of f.parts)$e(f,x,s);const{position:u,normal:n,tangent:m,color:p,texCoord0:$}=f.vertexAttributes,h={position:u.typedBuffer,normal:n!=null?n.typedBuffer:null,tangent:m!=null?m.typedBuffer:null,uv:$!=null?$.typedBuffer:null,color:p!=null?p.typedBuffer:null},g=ce(h,e,i);return{transform:g.transform,vertexSpace:g.vertexSpace,components:f.components,spatialReference:e.spatialReference,vertexAttributes:new N({position:g.vertexAttributes.position,normal:g.vertexAttributes.normal,tangent:g.vertexAttributes.tangent,color:h.color,uv:h.uv})}}function de(e){const r=e==null?void 0:e.resolveFile,t=e==null?void 0:e.requestFile;return r||t?{busy:!1,request:async(i,l,o)=>{const c=(r==null?void 0:r(i))??i;if(t){const s=await t(c,l,o==null?void 0:o.signal);if(s!==void 0)return s}return(await P(c,{responseType:l==="image"?"image":l==="binary"?"array-buffer":"json",signal:o!=null?o.signal:null})).data}}:null}function y(e,r){if(e==null)return"-";const t=e.typedBuffer;return`${O(r,t.buffer,()=>r.size)}/${t.byteOffset}/${t.byteLength}`}function ge(e){return e!=null?e.toString():"-"}function xe(e){let r=0;const t={color:!1,tangent:!1,normal:!1,texCoord0:!1},i=new Map,l=new Map,o=[];for(const c of e.parts){const{attributes:{position:a,normal:s,color:f,tangent:u,texCoord0:n}}=c,m=`
      ${y(a,i)}/
      ${y(s,i)}/
      ${y(f,i)}/
      ${y(u,i)}/
      ${y(n,i)}/
      ${ge(c.transform)}
    `;let p=!1;const $=O(l,m,()=>(p=!0,{start:r,length:a.count}));p&&(r+=a.count),s&&(t.normal=!0),f&&(t.color=!0),u&&(t.tangent=!0),n&&(t.texCoord0=!0),o.push({gltf:c,writeVertices:p,region:$})}return{vertexAttributes:{position:T(k,r),normal:t.normal?T(j,r):null,tangent:t.tangent?T(I,r):null,color:t.color?T(F,r):null,texCoord0:t.texCoord0?T(H,r):null},parts:o,components:[]}}function Te(e){return new q({data:(fe(e.data),e.data),wrap:ve(e.parameters.wrap)})}function ye(e,r){const t=new B(we(e.color,e.opacity)),i=e.emissiveFactor?new B(Be(e.emissiveFactor)):null,l=o=>o?new Q({scale:o.scale?[o.scale[0],o.scale[1]]:[1,1],rotation:D(o.rotation??0),offset:o.offset?[o.offset[0],o.offset[1]]:[0,0]}):null;return new G({color:t,colorTexture:r.get(e.textureColor),normalTexture:r.get(e.textureNormal),emissiveColor:i,emissiveTexture:r.get(e.textureEmissive),occlusionTexture:r.get(e.textureOcclusion),alphaMode:be(e.alphaMode),alphaCutoff:e.alphaCutoff,doubleSided:e.doubleSided,metallic:e.metallicFactor,roughness:e.roughnessFactor,metallicRoughnessTexture:r.get(e.textureMetallicRoughness),colorTextureTransform:l(e.colorTextureTransform),normalTextureTransform:l(e.normalTextureTransform),occlusionTextureTransform:l(e.occlusionTextureTransform),emissiveTextureTransform:l(e.emissiveTextureTransform),metallicRoughnessTextureTransform:l(e.metallicRoughnessTextureTransform)})}function $e(e,r,t){r.writeVertices&&he(e,r);const{indices:i,attributes:l,primitiveType:o,material:c}=r.gltf;let a=ee(i||l.position.count,o);const s=r.region.start;if(s){const f=new Uint32Array(a);for(let u=0;u<a.length;u++)f[u]+=s;a=f}e.components.push(new K({name:r.gltf.name,faces:a,material:t.get(c),shading:l.normal?"source":"flat",trustSourceNormals:!0}))}function he(e,r){const{position:t,normal:i,tangent:l,color:o,texCoord0:c}=e.vertexAttributes,a=r.region.start,{attributes:s,transform:f}=r.gltf,u=s.position.count;if(J(t.slice(a,u),s.position,f),s.normal!=null&&i!=null){const n=C(A(),f),m=i.slice(a,u);W(m,s.normal,n),S(n)&&X(m,m)}else i!=null&&te(i,0,0,1,{dstIndex:a,count:u});if(s.tangent!=null&&l!=null){const n=C(A(),f),m=l.slice(a,u);re(m,s.tangent,n),S(n)&&ne(m,m)}else l!=null&&v(l,0,0,1,1,{dstIndex:a,count:u});if(s.texCoord0!=null&&c!=null?oe(c.slice(a,u),s.texCoord0):c!=null&&se(c,0,0,{dstIndex:a,count:u}),s.color!=null&&o!=null){const n=s.color,m=o.slice(a,u);if(n.elementCount===4)n instanceof I?_(m,n,255):n instanceof F?le(m,n):n instanceof U&&_(m,n,1/256);else{v(m,255,255,255,255);const p=E.fromTypedArray(m.typedBuffer,m.typedBufferStride);n instanceof j?M(p,n,255):n instanceof E?ae(p,n):n instanceof V&&M(p,n,1/256)}}else o!=null&&v(o.slice(a,u),255,255,255,255)}function be(e){switch(e){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function ve(e){return{horizontal:R(e.s),vertical:R(e.t)}}function R(e){switch(e){case w.CLAMP_TO_EDGE:return"clamp";case w.MIRRORED_REPEAT:return"mirror";case w.REPEAT:return"repeat"}}function d(e){return e**(1/ie)*255}function we(e,r){return z(d(e[0]),d(e[1]),d(e[2]),r)}function Be(e){return L(d(e[0]),d(e[1]),d(e[2]))}export{et as loadGLTFMesh};