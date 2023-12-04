import WebTileLayer from '@arcgis/core/layers/WebTileLayer.js'

const tiledLayer = new WebTileLayer({
  urlTemplate:
    'http://{subDomain}.tianditu.gov.cn/DataServer?T=vec_w&x={col}&y={row}&l={level}&tk=b5946b755acac2910b2d85a4a2bf1e6a',
  subDomains: ['t0', 't1', 't2', 't3', 't4', 't5', 't6', 't7'],
})

const tiledLayer_poi = new WebTileLayer({
  urlTemplate:
    'http://{subDomain}.tianditu.gov.cn/DataServer?T=cva_w&x={col}&y={row}&l={level}&tk=b5946b755acac2910b2d85a4a2bf1e6a',
  subDomains: ['t0', 't1', 't2', 't3', 't4', 't5', 't6', 't7'],
})

export function setTianditu() {
  return {
    baseLayers: [tiledLayer, tiledLayer_poi],
  }
}
