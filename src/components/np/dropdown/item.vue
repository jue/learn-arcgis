<script setup>
defineProps({
  icon: {
    type: String,
    default: '',
  },
})
const toggleDropdown = inject('toggleDropdown')
const slotDropdown = !!useSlots().dropdown
function handleClick() {
  if (slotDropdown)
    return false

  else
    toggleDropdown()
}
</script>

<template>
  <li class="relative w-full h-8 px-2 flex items-center cursor-pointer group" @click="handleClick">
    <div class="flex items-center justify-between w-full h-full px-2 rounded-lg hover:bg-gray-200/70">
      <div class="flex items-center space-x-2">
        <div v-if="icon" class="flex items-center w-4">
          <Icon :name="icon" class="text-base" />
        </div>
        <span><slot /></span>
      </div>
      <Icon v-if="$slots.dropdown" name="ic:outline-navigate-next" class="text-base text-gray-600" />
    </div>
    <div v-if="$slots.dropdown" class="absolute border shadow-lg top-0 left-full rounded-lg min-w-[150px] bg-white z-30 hidden group-hover:block" @click="handleClick">
      <slot name="dropdown" />
    </div>
  </li>
</template>
