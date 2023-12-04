<script setup>
defineProps({
  content: {
    type: String,
    required: true,
  },
  placement: {
    type: String,
    default: 'bottom',
  },
})

const el = ref(null)
const tooltipEl = ref(null)
const tooltipVisible = ref(false)
const { x, y, top, right, bottom, left, width, height } = useElementBounding(el)

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

function handleClickOutside(event) {
  if (!tooltipEl.value || tooltipEl.value.contains(event.target))
    return

  tooltipVisible.value = false
}

function showTooltip() {
  tooltipVisible.value = true
}

function hideTooltip() {
  tooltipVisible.value = false
}

function getStyle(placement) {
  if (placement === 'bottom') {
    return {
      left: `${left.value + width.value / 2}px`,
      top: `${bottom.value + 5}px`,
      transform: 'translateX(-50%)',
    }
  }
  if (placement === 'top') {
    return {
      left: `${left.value + width.value / 2}px`,
      bottom: `-${top.value - 5}px`,
      transform: 'translateX(-50%)',
    }
  }
  if (placement === 'right') {
    return {
      left: `${right.value + 5}px`,
      bottom: `-${bottom.value - height.value / 2}px`,
      transform: 'translateY(50%)',
    }
  }
}
</script>

<template>
  <div ref="el" class="relative inline-block" @mouseenter="showTooltip" @mouseleave="hideTooltip">
    <slot />
    <div class="absolute left-0 top-0">
      <div
        v-if="tooltipVisible" ref="el"
        class="absolute z-10 px-3 py-[6px] text-xs text-white bg-gray-900 rounded-lg shadow-md max-w-xs whitespace-nowrap" :style="getStyle(placement)"
      >
        {{ content }}
      </div>
    </div>
  </div>
</template>
