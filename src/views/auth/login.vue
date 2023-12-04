<script setup>
const router = useRouter()
const route = useRoute()
const loginType = ref('wechat')
function jump() {
  router.push({ path: route.query?.redirect || '/' })
}
</script>

<template>
  <div class="py-5">
    <AuthPassword v-if="loginType === 'password'" @jump="jump" />
    <AuthWechat v-if="loginType === 'wechat'" />
    <div class="text-center mt-10 space-y-2">
      <div class="text-neutral-400">
        或使用以下方式登录
      </div>
      <np-button v-if="loginType === 'password'" @click="loginType = 'wechat'">
        <icon-ic:baseline-wechat class="mr-1 text-lg text-green-500" />
        微信登录
      </np-button>
      <np-button v-if="loginType === 'wechat'" @click="loginType = 'password'">
        <icon-ic:baseline-key class="mr-1 text-lg text-indigo-500" />
        密码登录
      </np-button>
    </div>
  </div>
</template>

<route>
  {
    path: '/login',
    meta: {
      title: '用户登陆',
      layout: 'auth',
    }
  }
</route>
