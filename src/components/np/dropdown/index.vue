<script setup>
defineProps({
  trigger: {
    type: String,
    default: 'click',
  },
})
const show = ref(false)
const el = ref(null)
const dropdown = ref(null)
const { x, y, top, right, bottom, left, width, height } = useElementBounding(el)

function toggleDropdown() {
  show.value = !show.value
}

onClickOutside(dropdown, () => {
  show.value = false
})

provide('toggleDropdown', toggleDropdown)
</script>

<template>
  <div class="relative">
    <div ref="el" @[trigger]="toggleDropdown">
      <slot />
    </div>

    <teleport to="body">
      <div class="absolute left-0 top-0">
        <Transition name="fade">
          <div
            v-if="show"
            ref="dropdown"
            class="absolute shadow-lg rounded-lg min-w-[150px] bg-white z-30 border" :style="{
              left: `${x}px`,
              top: `${y + height + 4}px`,
            }"
          >
            <slot name="dropdown" />
          </div>
        </Transition>
      </div>
    </teleport>
  </div>
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
