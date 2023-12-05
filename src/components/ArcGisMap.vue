<script setup>
import Map from '@arcgis/core/Map.js'
import MapView from '@arcgis/core/views/MapView.js'
import esriConfig from '@arcgis/core/config.js'

import RouteLayer from '@arcgis/core/layers/RouteLayer.js'
import Stop from '@arcgis/core/rest/support/Stop.js'
import PointBarrier from '@arcgis/core/rest/support/PointBarrier.js'
import PolygonBarrier from '@arcgis/core/rest/support/PolygonBarrier.js'
import PolylineBarrier from '@arcgis/core/rest/support/PolylineBarrier.js'

const mapDiv = ref(null)
esriConfig.apiKey = 'AAPK8f3b838389304ce49fb3ce91610db3d60jCXWCjVDpUQoEDBm26R_N4YkIYqjJujKUwcsATmzeHM1NZ1GbHg9kBddtsDZk5V'

const routeLayer = new RouteLayer({
  stops,
  // pointBarriers,
  // polylineBarriers,
  // polygonBarriers,
})

const map = new Map({
  // basemap: 'streets-navigation-vector',
  // basemap: 'arcgis-navigation',
  basemap: setTianditu(),
  layers: [routeLayer],
})

const mapView = new MapView({
  map,
  center: [121.43021392740354, 31.165350310974773],
  zoom: 16,
})

setpoint(map)
// setroute(mapView)

mapView.ui.components = []

// 定位
// setLocate(mapView)

onMounted(async () => {
  mapView.container = mapDiv.value

  await Promise.all([mapView.when(), routeLayer.load()])
  const results = await routeLayer.solve({ apiKey: esriConfig.apiKey })
  routeLayer.update(results)
  await mapView.goTo(routeLayer.routeInfo.geometry)
})
</script>

<template>
  <div ref="mapDiv" class="flex-1" />
</template>

<style scoped>
@import "https://js.arcgis.com/4.28/@arcgis/core/assets/esri/themes/light/main.css";
</style>
