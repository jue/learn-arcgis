import RouteLayer from '@arcgis/core/layers/RouteLayer.js'
import Stop from '@arcgis/core/rest/support/Stop.js'
import PointBarrier from '@arcgis/core/rest/support/PointBarrier.js'
import PolygonBarrier from '@arcgis/core/rest/support/PolygonBarrier.js'
import PolylineBarrier from '@arcgis/core/rest/support/PolylineBarrier.js'

export const stops = [
  new Stop({
    geometry: { x: 121.43358784969968, y: 31.164952386356518 },
    name: '上海师范大学第三附属学校',
  }),
  new Stop({
    geometry: { x: 121.42779897984013, y: 31.165524372155204 },
    name: '望德幼儿园',
  }),
]

// create new point barriers
export const pointBarriers = [
  new PointBarrier({ geometry: { x: 121.43178000433846, y: 31.1658713715307 } }),
  // new PointBarrier({ geometry: { x: 121.4301389972959, y: 31.16392542220433 } }),
]

// create new polyline barrier
export const polylineBarriers = [
  new PolylineBarrier({
    geometry: {
      paths: [[
        [121.43013276767084, 31.16498133448252],
        [121.43192276732742, 31.161467010594166],
      ]],
    },
    name: 'Major highway closure',
  }),
]

// create new polygon barrier
export const polygonBarriers = [
  new PolygonBarrier({
    geometry: {
      rings: [[
        [121.43013276767084, 31.16498133448252],
        [121.43192276732742, 31.161467010594166],
      ]],
    },
    name: 'Street festival, Etiwanda',
  }),
]
