<script setup>
const route = useRoute()
</script>

<template>
  <pre>
    {{ route }}
  </pre>
</template>

<route>
  {
    meta: {
      layout: 'wechat',
    }
  }
</route>
