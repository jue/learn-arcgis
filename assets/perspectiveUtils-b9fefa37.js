import{f as l,g as s,j as S,bw as k,eZ as d,dB as A,aA as E,e_ as $,e$ as y,f0 as g,f1 as p,K as h,f2 as x,J as c,c7 as K}from"./index-a1640f7c.js";import{p as M}from"./normalizeUtilsSync-3d314277.js";import{e as u}from"./mat3f64-221ce671.js";let n=class extends k{constructor(o){super(o)}get bounds(){const o=this.coords;return(o==null?void 0:o.extent)==null?null:d(o.extent)}get coords(){var t;const o=(t=this.element.georeference)==null?void 0:t.coords;return A(o,this.spatialReference).geometry}get normalizedCoords(){return E.fromJSON(M(this.coords))}get normalizedBounds(){const o=this.normalizedCoords!=null?this.normalizedCoords.extent:null;return o!=null?d(o):null}};l([s()],n.prototype,"spatialReference",void 0),l([s()],n.prototype,"element",void 0),l([s()],n.prototype,"bounds",null),l([s()],n.prototype,"coords",null),l([s()],n.prototype,"normalizedCoords",null),l([s()],n.prototype,"normalizedBounds",null),n=l([S("esri.layers.support.MediaElementView")],n);const r=K(),a=u(),i=u(),m=u();function Z(e,o,t){return $(r,o[0],o[1],1),y(r,r,g(a,t)),r[2]===0?p(e,r[0],r[1]):p(e,r[0]/r[2],r[1]/r[2])}function _(e,o,t){return f(i,o[0],o[1],o[2],o[3],o[4],o[5],o[6],o[7]),f(m,t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7]),h(e,x(i,i),m),e[8]!==0&&(e[0]/=e[8],e[1]/=e[8],e[2]/=e[8],e[3]/=e[8],e[4]/=e[8],e[5]/=e[8],e[6]/=e[8],e[7]/=e[8],e[8]/=e[8]),e}function f(e,o,t,z,b,C,j,B,v){c(e,o,z,C,t,b,j,1,1,1),$(r,B,v,1),x(a,e);const[w,J,R]=y(r,r,g(a,a));return c(a,w,0,0,0,J,0,0,0,R),h(e,a,e)}export{Z as h,n as i,_ as j};
