<template>
  <input
    :placeholder="placeholder"
    :type="type"
    :value="modelValue"
    @input="e => $emit('update:modelValue', (e.target as HTMLInputElement).value)"
  />
</template>

<script lang="ts" setup>
interface Props {
  modelValue: string;
  placeholder: string;
  type: string;
}

interface Emits {
  (eventName: 'update:modelValue', value: string): void;
}

defineProps<Props>();
defineEmits<Emits>();
</script>

<style lang="scss" scoped>
input {
  max-width: 394px;
  width: 100%;
  height: 48px;
  background-color: #131313;
  border: 1px solid #2e2e2e;
  color: #fff;
  border-radius: 6px;
  padding: 13.5px 20px;
}
</style>
