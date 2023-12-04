<script setup>
defineProps({
  icon: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <el-dropdown class="flex-1 -mx-2 -my-[5px] h-8" placement="right-start" popper-class="subitem-dropdown">
    <div class="flex items-center justify-between w-full rounded-lg px-2 hover:bg-[#edf1f6]">
      <div class="flex items-center space-x-2">
        <Icon :name="icon" class="text-base" />
        <div><slot /></div>
      </div>
      <Icon name="ic:outline-navigate-next" class="text-base text-gray-600" />
    </div>
    <template #dropdown>
      <slot name="dropdown" />
    </template>
  </el-dropdown>
</template>

<style lang="scss">
.subitem-dropdown {
  margin-top: 0px !important;
  margin-left: -5px !important;
  min-width: 150px;
  padding: 6px 0;
}
</style>
