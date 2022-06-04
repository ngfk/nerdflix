<template>
  <div class="input">
    <input
      :placeholder="placeholder"
      :type="type"
      :value="modelValue"
      @input="e => debounceUpdate( (e.target as HTMLInputElement).value)"
    />

    <Icon name="search" />
  </div>
</template>

<script lang="ts" setup>
import Icon from './Icon.vue';

import { debounce } from '../util/debounce';

interface Props {
  debounce?: number;
  modelValue: string;
  placeholder: string;
  type: string;
}

interface Emits {
  (eventName: 'update:modelValue', value: string): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const debounceUpdate = debounce(update, props.debounce ?? 0);

function update(value: string) {
  emit('update:modelValue', value);
}
</script>

<style lang="scss" scoped>
.input {
  position: relative;
  width: 100%;

  input {
    height: 48px;
    width: inherit;
    background-color: #131313;
    border: 1px solid #2e2e2e;
    color: #fff;
    border-radius: 6px;
    padding: 13.5px 48px 13.5px 20px;
  }

  svg {
    position: absolute;
    right: 0;
    margin: 16px 18px;
  }
}
</style>
