import{l as i,aS as s}from"./index-a1640f7c.js";import{c as e}from"./query-3c5fc440.js";import{b as m}from"./Query-668f1052.js";async function l(r,a,o){const t=await p(r,a,o);return i.fromJSON(t)}async function p(r,a,o){const t=s(r),c={...o},n=m.from(a),{data:f}=await e(t,n,n.sourceSpatialReference,c);return f}export{p as a,l as s};
