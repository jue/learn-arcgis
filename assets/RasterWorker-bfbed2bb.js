import{aD as a,az as l,cG as m}from"./index-a1640f7c.js";import{u as i,f as c,W as f,U as u,R as p,I as S,a as d,s as x}from"./dataUtils-a6b892de.js";import{m as y,j as h,L as O,h as N}from"./RasterSymbolizer-ff610dc3.js";import{R as J,i as P}from"./utils-2228be87.js";import{M as b,T as g,e as z}from"./rasterProjectionHelper-f6cd0688.js";import"./index-40e4af68.js";import"./colorUtils-2201170d.js";class F{convertVectorFieldData(t){const e=i.fromJSON(t.pixelBlock),s=c(e,t.type);return Promise.resolve(s!=null?s.toJSON():null)}computeStatisticsHistograms(t){const e=i.fromJSON(t.pixelBlock),s=y(e);return Promise.resolve(s)}async decode(t){const e=await h(t.data,t.options);return e&&e.toJSON()}symbolize(t){t.pixelBlock=i.fromJSON(t.pixelBlock),t.extent=t.extent?a.fromJSON(t.extent):null;const e=this.symbolizer.symbolize(t);return Promise.resolve(e!=null?e.toJSON():null)}async updateSymbolizer(t){var e;this.symbolizer=O.fromJSON(t.symbolizerJSON),t.histograms&&((e=this.symbolizer)==null?void 0:e.rendererJSON.type)==="rasterStretch"&&(this.symbolizer.rendererJSON.histograms=t.histograms)}async updateRasterFunction(t){this.rasterFunction=J(t.rasterFunctionJSON)}async process(t){var s;const e=this.rasterFunction.process({extent:a.fromJSON(t.extent),primaryPixelBlocks:t.primaryPixelBlocks.map(o=>o!=null?i.fromJSON(o):null),primaryPixelSizes:(s=t.primaryPixelSizes)==null?void 0:s.map(o=>o!=null?l.fromJSON(o):null),primaryRasterIds:t.primaryRasterIds});return e!=null?e.toJSON():null}stretch(t){const e=this.symbolizer.simpleStretch(i.fromJSON(t.srcPixelBlock),t.stretchParams);return Promise.resolve(e==null?void 0:e.toJSON())}estimateStatisticsHistograms(t){const e=N(i.fromJSON(t.srcPixelBlock));return Promise.resolve(e)}split(t){const e=f(i.fromJSON(t.srcPixelBlock),t.tileSize,t.maximumPyramidLevel);return e&&e.forEach((s,o)=>{e.set(o,s==null?void 0:s.toJSON())}),Promise.resolve(e)}async mosaicAndTransform(t){const e=t.srcPixelBlocks.map(n=>n?new i(n):null),s=u(e,t.srcMosaicSize,{blockWidths:t.blockWidths,alignmentInfo:t.alignmentInfo,clipOffset:t.clipOffset,clipSize:t.clipSize});let o,r=s;return t.coefs&&(r=p(s,t.destDimension,t.coefs,t.sampleSpacing,t.interpolation)),t.projectDirections&&t.gcsGrid&&(o=S(t.destDimension,t.gcsGrid),r=d(r,t.isUV?"vector-uv":"vector-magdir",o)),{pixelBlock:r==null?void 0:r.toJSON(),localNorthDirections:o}}async createFlowMesh(t,e){const s={data:new Float32Array(t.flowData.buffer),mask:new Uint8Array(t.flowData.maskBuffer),width:t.flowData.width,height:t.flowData.height},{vertexData:o,indexData:r}=await x(t.meshType,t.simulationSettings,s,e.signal);return{result:{vertexBuffer:o.buffer,indexBuffer:r.buffer},transferList:[o.buffer,r.buffer]}}async getProjectionOffsetGrid(t){const e=a.fromJSON(t.projectedExtent),s=a.fromJSON(t.srcBufferExtent);let o=null;t.datumTransformationSteps&&(o=new m({steps:t.datumTransformationSteps})),(t.includeGCSGrid||b(e.spatialReference,s.spatialReference,o))&&await g();const r=t.rasterTransform?P(t.rasterTransform):null;return z({...t,projectedExtent:e,srcBufferExtent:s,datumTransformation:o,rasterTransform:r})}}export{F as default};
