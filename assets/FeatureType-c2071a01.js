import{aU as p,aV as l,f as s,g as a,aW as m,aO as d,j as c,aR as y}from"./index-a1640f7c.js";import{p as u}from"./FeatureTemplate-65031d27.js";let t=class extends p(y){constructor(o){super(o),this.id=null,this.name=null,this.domains=null,this.templates=null}readDomains(o){const r={};for(const e of Object.keys(o))r[e]=l(o[e]);return r}writeDomains(o,r){var n;const e={};for(const i of Object.keys(o))o[i]&&(e[i]=(n=o[i])==null?void 0:n.toJSON());r.domains=e}};s([a({json:{write:!0}})],t.prototype,"id",void 0),s([a({json:{write:!0}})],t.prototype,"name",void 0),s([a({json:{write:!0}})],t.prototype,"domains",void 0),s([m("domains")],t.prototype,"readDomains",null),s([d("domains")],t.prototype,"writeDomains",null),s([a({type:[u],json:{write:!0}})],t.prototype,"templates",void 0),t=s([c("esri.layers.support.FeatureType")],t);const w=t;export{w as n};