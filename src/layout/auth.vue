<script setup>
const route = useRoute()
</script>

<template>
  <div class="p-5 min-h-screen bg-gray-50 flex flex-col bg-cover bg-no-repeat bg-right-bottom" style="background-image: url(https://e.ufollow.cn/assets/images/bg.png);">
    <div class="flex-1">
      <div class="rounded-lg max-w-lg mx-auto w-full px-5 sm:px-5 py-8">
        <div class="flex items-center justify-center space-x-1 mb-5">
          <Bimgo class="h-8" />
        </div>
        <div class="text-xl font-medium text-center pt-10">
          {{ route.meta.title }}
        </div>

        <router-view />
      </div>
    </div>
    <div class="text-center text-xs text-neutral-400">
      版权所有 ©2023 Juyir, Ltd. 保留所有权利
    </div>
  </div>
</template>
