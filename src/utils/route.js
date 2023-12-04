import Graphic from '@arcgis/core/Graphic'
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer'
import route from '@arcgis/core/rest/route'
import RouteParameters from '@arcgis/core/rest/support/RouteParameters'
import FeatureSet from '@arcgis/core/rest/support/FeatureSet'

// 创建RouteTask实例
const routeTask = new RouteTask({
  url: 'https://route-api.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World',
})

export function setroute(view) {
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

  // 将起点和终点的图形添加到视图中
  view.graphics.addMany([startPoint, endPoint])

  // 创建route参数
  const routeParams = new RouteParameters({
    stops: new FeatureSet({
      features: [startPoint, endPoint],
    }),
    returnDirections: true,
    returnRoutes: true,
  })

  // 发起route请求
  routeTask.solve(routeParams)
    .then((response) => {
      // 获取路线结果
      const routeResult = response.routeResults[0].route

      // 在地图上显示路线
      const routeGraphic = new Graphic({
        geometry: routeResult.geometry,
        symbol: {
          type: 'simple-line',
          color: [0, 0, 255],
          width: 4,
        },
      })

      view.graphics.add(routeGraphic)
    })
    .catch((error) => {
      console.error('Route error:', error)
    })
}
