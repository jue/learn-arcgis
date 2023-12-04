<script setup>
const route = useRoute()
const router = useRouter()

onMounted(() => {
  if (route.query.token) {
    setToken(route.query.token)
    router.push(route.query.redirect_uri || '/')
  }
})
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
