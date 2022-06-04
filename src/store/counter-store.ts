import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCounterStore = defineStore('couter', () => {
  const count = ref(0);

  function decrement() {
    count.value--;
  }

  function increment() {
    count.value++;
  }

  return { count, decrement, increment };
});
