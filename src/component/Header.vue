<template>
  <header>
    <Nav />
    <slot />

    <div class="like-count">
      <Icon name="star" />
      &nbsp;
      {{ store.likes.length }}
    </div>
  </header>
</template>

<script lang="ts" setup>
import { useMovieStore } from '../store/movie-store';
import Icon from './Icon.vue';
import Nav from './Nav.vue';

const store = useMovieStore();
</script>

<style lang="scss" scoped>
header {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  background-color: #131313;
  color: #fff;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.like-count {
  text-align: right;
  margin: 28px;

  svg {
    color: #f8e71c;
  }
}
</style>
