import Graphic from '@arcgis/core/Graphic'
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer'
import route from '@arcgis/core/rest/route'
import RouteParameters from '@arcgis/core/rest/support/RouteParameters'
import FeatureSet from '@arcgis/core/rest/support/FeatureSet'

// 创建RouteTask实例
const routeUrl = 'https://route-api.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World'

export function setroute(map) {
  // 创建起点和终点的图形
  const startPoint = new Graphic({
    geometry: {
      type: 'point',
      longitude: 121.42650341857433,
      latitude: 31.165348129780625,
    },
  })

  const endPoint = new Graphic({
    geometry: {
      type: 'point',
      longitude: 121.43193706598402,
      latitude: 31.161457151781832,
    },
  })

  const routeParams = new RouteParameters({
    stops: new FeatureSet({
      features: [startPoint, endPoint],
      spatialReference: { wkid: 4326 },
    }),
    returnDirections: true,
  })

  route(routeParams).then((data) => {
    const routeResult = data.routeResults[0].route
    const routeGraphic = new Graphic({
      geometry: routeResult.geometry,
      symbol: {
        type: 'simple-line',
        color: [0, 0, 255],
        width: 4,
      },
    })

    const graphicsLayer = new GraphicsLayer()
    graphicsLayer.add(routeGraphic)
    map.add(graphicsLayer)
  })
}
