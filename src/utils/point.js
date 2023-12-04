import Graphic from '@arcgis/core/Graphic'
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer'
import SimpleMarkerSymbol from '@arcgis/core/symbols/SimpleMarkerSymbol'
import Point from '@arcgis/core/geometry/Point'

export function setpoint(map) {
  // 创建GraphicsLayer对象
  const graphicsLayer = new GraphicsLayer()

  // 创建Point对象
  const point = new Point({
    longitude: 121.43024802914874,
    latitude: 31.165363731683357,
  })

  // 创建SimpleMarkerSymbol对象
  const markerSymbol = new SimpleMarkerSymbol({
    color: [255, 0, 0], // 设置标记的颜色，这里使用红色
    size: '20px', // 设置标记的大小
  })

  // 创建Graphic对象
  const graphic = new Graphic({
    geometry: point,
    symbol: markerSymbol,
  })

  // 将Graphic对象添加到GraphicsLayer中
  graphicsLayer.add(graphic)

  // 将GraphicsLayer添加到地图中
  map.add(graphicsLayer)
}
