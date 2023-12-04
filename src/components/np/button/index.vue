<script setup>
defineProps({
  type: {
    type: String,
    default: 'default',
  },
  shape: {
    type: String,
    default: 'default',
  },
  size: {
    type: String,
    default: 'default',
  },

})
</script>

<template>
  <button class="np-button" :size="size" :shape="shape" :type="type">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
$sizes: (
  'tiny': 4,
  'small': 6,
  'default': 8,
  'large': 10
);

.np-button {
  @apply inline-flex items-center text-[#181f38] justify-center rounded-lg h-8 bg-[#00398012] border-[#00398000] px-2 cursor-pointer;

  button {
    @apply w-full flex items-center justify-center h-full bg-transparent;
  }

  &:hover {
    @apply border-[#00398012] bg-[#002e761c];
  }
  &:active {
    @apply opacity-100 shadow-inner;
  }

  &[type='primary'] {
    @apply bg-indigo-600 text-white;
  }

  &[type='danger'] {
    @apply bg-red-600 text-white;
  }

  @each $name, $size in $sizes {
    &[size='#{$name}'] {
      @apply h-#{$size};
    }
  }

  &[shape='square'] {
    @apply px-0 aspect-square overflow-hidden;
  }

  &[shape='circle'] {
    @apply px-0 aspect-square rounded-full overflow-hidden;
  }

}
</style>
