<script setup>
const router = useRouter()
const route = useRoute()
const qrInfo = reactive({})
const loading = ref(false)
const countDown = ref(null)

async function getQRCode() {
  loading.value = true
  const { data: res } = await http.post('/wechat/mp/create_qrcode')
  if (res.code === 200) {
    Object.assign(qrInfo, res.data)
  }
  loading.value = false
}

async function checkQrcode() {
  if (qrInfo.qrcode) {
    const { data: res } = await http.post('/wechat/mp/check_qrcode', {
      code: qrInfo.code,
    })

    if (res.code === 'no-qrcode') {
      countDown.value.stop()
      qrInfo.expire_seconds = 0
    }

    if (res.code === 200 && res.data?.loginStatus && res.data?.loginStatus !== 'generated') {
      countDown.value.stop()
      setToken(res.data?.loginStatus)
      router.push(route.query.redirect_uri || '/')
    }
  }
}

function setExpireSeconds(time) {
  qrInfo.expire_seconds = time
  if (time === 0) {
    qrInfo.qrcode = ''
  }
  checkQrcode()
}

onMounted(() => {
  getQRCode()
})
</script>

<template>
  <div class="text-center">
    <div class="text-neutral-400 mb-3 flex items-center justify-center">
      微信扫码并 <span class="font-semibold">关注公众号</span> 即可登录 <span v-if="qrInfo?.expire_seconds > 0" class="px-1"><CountDown ref="countDown" :time="qrInfo?.expire_seconds" @running="setExpireSeconds" />秒</span>
    </div>
    <div class="text-center">
      <div class="w-40 h-40 mx-auto relative bg-gray-100 flex flex-col items-center justify-center rounded-lg overflow-hidden">
        <Loading v-if="loading" class="relative z-10" />
        <img :src="qrInfo?.qrcode" class="z-20">
        <div v-if="!loading && qrInfo.expire_seconds <= 0" class="z-30 absolute bg-white/90 top-0 left-0 w-full h-full flex items-center justify-center flex-col">
          <div>二维码失效</div>
          <el-button type="primary" link @click="getQRCode">
            刷新
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>
