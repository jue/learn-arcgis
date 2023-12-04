<script setup>
import WebMap from '@arcgis/core/WebMap'
import MapView from '@arcgis/core/views/MapView'
import esriConfig from '@arcgis/core/config.js'
import BasemapToggle from '@arcgis/core/Widgets/BasemapToggle'
import Locate from '@arcgis/core/Widgets/Locate'
import Track from '@arcgis/core/widgets/Track'
import Graphic from '@arcgis/core/Graphic'

// import Symbol from "@arcgis/core/symbols/Symbol";
import SimpleMarkerSymbol from '@arcgis/core/symbols/SimpleMarkerSymbol'

const mapDiv = ref(null)
esriConfig.apiKey = 'AAPK8f3b838389304ce49fb3ce91610db3d60jCXWCjVDpUQoEDBm26R_N4YkIYqjJujKUwcsATmzeHM1NZ1GbHg9kBddtsDZk5V'

// 天地图的key
const tiandituKey = 'b5946b755acac2910b2d85a4a2bf1e6a'

const webMap = new WebMap({
  // basemap: "arcgis-topographic"
  basemap: 'arcgis-imagery',
})

const mapView = new MapView({
  map: webMap,
  center: [121.4648, 31.2891],
  zoom: 9,
})

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
