<template>
  <Header />
  <main>
    <router-view />
  </main>

  <footer></footer>
</template>

<script lang="ts" setup>
import Header from '../component/Header.vue';
</script>

<style lang="scss" scoped>
footer {
  margin-top: 16px;
  height: 64px;
}
</style>
