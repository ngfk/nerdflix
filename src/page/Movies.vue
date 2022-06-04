<template>
  <Title>Movies</Title>

  <section class="action-bar">
    <Input v-model="query" placeholder="Search for a title" type="search" />
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import Input from '../component/Input.vue';
import Title from '../component/Title.vue';

const query = ref('');
</script>

<style lang="scss" scoped>
section {
  margin: 0 108px;
}

.action-bar {
  margin-top: -24px;
  margin-bottom: 56px;
}
</style>
