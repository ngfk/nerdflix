<template>
  <Header>
    <Logo />
  </Header>

  <main>
    <router-view />
  </main>
</template>

<script lang="ts" setup>
import Header from '../component/Header.vue';
import Logo from '../component/Logo.vue';
</script>
