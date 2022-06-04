<template>
  <div :class="{ select: true, open }">
    <div class="trigger" ref="el" @click="open = !open">
      {{ prefix ? prefix + ' ' : '' }}
      {{ options.find(o => o.value === modelValue)?.label }}

      <Icon name="sort" prefix="fas" />
    </div>
    <ul class="listbox">
      <li
        v-for="option of options"
        :key="option.value"
        @click="() => $emit('update:modelValue', option.value)"
      >
        {{ option.label }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue';
import Icon from './Icon.vue';

interface Props {
  modelValue: string;
  options: { label: string; value: string }[];
  prefix?: string;
}

interface Emits {
  (eventName: 'update:modelValue', value: string): void;
}

defineProps<Props>();
defineEmits<Emits>();

const el = ref<HTMLDivElement | null>(null);
const open = ref(false);

function handleExternalClick(event: MouseEvent) {
  if (event.target !== el.value) open.value = false;
}

onMounted(() => window.addEventListener('click', handleExternalClick));
onUnmounted(() => window.removeEventListener('click', handleExternalClick));
</script>

<style lang="scss" scoped>
.select {
  position: relative;
  width: 100%;
  color: #fff;
  user-select: none;

  .trigger,
  .listbox li {
    height: 48px;
    width: inherit;
    background-color: #131313;
    border: 1px solid #2e2e2e;
    padding: 13px;

    cursor: pointer;
  }

  .trigger {
    border-radius: 6px;

    svg {
      position: absolute;
      right: 0;
      opacity: 0.3;
      font-size: 14px;
      margin: 2px 18px 2px 0;
    }
  }

  .listbox {
    position: absolute;
    width: inherit;
    display: none;
    margin: 0;
    padding: 0;
    list-style: none;
    font-weight: 300;
    z-index: 1;
  }

  &.open {
    .trigger {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    .listbox {
      display: block;

      :last-child {
        border-bottom-left-radius: 6px;
        border-bottom-right-radius: 6px;
      }
    }
  }
}
</style>
