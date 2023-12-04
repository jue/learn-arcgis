<script setup>
const props = defineProps({
  time: {
    type: Number,
    default: 0,
  },
})

const emits = defineEmits(['running', 'finish'])

const count = ref(props.time)

const interval = ref(null)

watchEffect(() => {
  interval.value = setInterval(() => {
    count.value--
    emits('running', count.value)

    if (count.value === 0) {
      clearInterval(interval.value)
      emits('finish')
    }
  }, 1000)

  // 监听 time 变化
  watchEffect(() => {
    count.value = props.time
  })
})

function stop() {
  clearInterval(interval.value)
}

onUnmounted(() => {
  clearInterval(interval.value)
})

defineExpose({
  stop,
})
</script>

<template>
  <span>{{ count }}</span>
</template>
