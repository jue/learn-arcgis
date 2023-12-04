<script setup>
import * as QRCode from 'easyqrcodejs'

const qrcode = ref(null)
function setQrCode(text) {
  new QRCode(qrcode.value, {
    text,
    width: 160,
    height: 160,
  })
}

onMounted(() => {
  setQrCode('https://www.ufollow.cn')
})
</script>

<template>
  <span ref="qrcode" />
</template>
