<template>
  <Header>
    <Logo />
  </Header>

  <main>
    <router-view />
  </main>

  <footer></footer>
</template>

<script lang="ts" setup>
import Header from '../component/Header.vue';
import Logo from '../component/Logo.vue';
</script>

<style lang="scss" scoped>
footer {
  margin-top: 16px;
  height: 64px;
}
</style>
