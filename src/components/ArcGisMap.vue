<script setup>
// import Map from '@arcgis/core/Map.js'
import WebMap from '@arcgis/core/WebMap'
import MapView from '@arcgis/core/views/MapView.js'
import esriConfig from '@arcgis/core/config.js'

const mapDiv = ref(null)
esriConfig.apiKey = 'AAPK8f3b838389304ce49fb3ce91610db3d60jCXWCjVDpUQoEDBm26R_N4YkIYqjJujKUwcsATmzeHM1NZ1GbHg9kBddtsDZk5V'

const webMap = new WebMap({
  // basemap: 'arcgis-topographic',
  // basemap: 'arcgis-imagery',
  basemap: 'topo-vector',
})

const mapView = new MapView({
  map: webMap,
  center: [121.4648, 31.2891],
  zoom: 13,
})
mapView.ui.components = []

onMounted(() => {
  mapView.container = mapDiv.value
})
</script>

<template>
  <div ref="mapDiv" class="flex-1" />
</template>

<style scoped>
@import "https://js.arcgis.com/4.28/@arcgis/core/assets/esri/themes/light/main.css";
</style>
