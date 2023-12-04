<script setup>
const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: '',
  },
  size: {
    type: String,
    default: '',
  },
  isError: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})
const emits = defineEmits(['update:modelValue', 'focus', 'blur', 'change'])
const isFocused = ref(false)

const inputVal = ref(props.modelValue)
function updateValue(e) {
  const value = e.target.value.trim()
  inputVal.value = value
  emits('update:modelValue', value)
  emits('change', value)
}

function handleFocus() {
  isFocused.value = true
  emits('focus')
}
function handleBlur() {
  isFocused.value = false
  emits('blur')
}
</script>

<template>
  <div class="np-input" :size="size" :class="{ error: isError, focused: isFocused, disabled }">
    <slot name="prefix" />
    <input
      :type="type" :value="inputVal" :class="{ 'ml-3': $slots.prefix, 'mr-3': $slots.suffix }"
      :placeholder="placeholder" :disabled="disabled" @input="updateValue" @focus="handleFocus" @blur="handleBlur"
    >
    <slot name="suffix" />
  </div>
</template>

<style lang="scss" scoped>
@mixin size {
  &[size='large'] {
    @apply h-10;
  }

  &[size='small'] {
    @apply h-6;
  }
}

.np-input {
  @apply flex items-center h-8 rounded-lg border-[#edf1f6] border px-3 bg-[#edf1f6];

  &:hover {
    @apply border-gray-300;
  }

  &.focused {
    @apply border-indigo-600 ring-2 ring-indigo-200;
  }

  &.error {
    @apply border-red-500 bg-[#fff5f6] ring-red-200;
  }

  &.disabled {
    @apply bg-gray-100;

    &:hover {
      @apply border-gray-100;
    }
  }

  input {
    @apply flex items-center h-full outline-0;

    &[type='text'],
    &[type='email'] {
      @apply rounded border-none w-full bg-transparent;
      @include size;
    }
  }

  @include size;
}
</style>
