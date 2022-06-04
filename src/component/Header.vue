<template>
  <header>
    <Nav />

    <router-link to="/">
      <Logo />
    </router-link>

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
import Logo from './Logo.vue';
import Nav from './Nav.vue';

const store = useMovieStore();
</script>

<style lang="scss" scoped>
header {
  position: sticky;
  top: 0;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: 76px auto;
  grid-template-areas:
    '.. lg lc'
    'nv nv nv';
  align-items: center;
  padding: 0 32px;
  width: 100%;
  background-color: #131313;
  color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  z-index: 1;

  nav {
    grid-area: nv;
  }

  > a {
    grid-area: lg;
  }

  .like-count {
    grid-area: lc;
    text-align: right;

    svg {
      color: #f8e71c;
    }
  }
}

@media screen and (min-width: 1024px) {
  header {
    grid-template-areas: 'nv lg lc';
  }
}

@media screen and (min-width: 1440px) {
  header {
    padding: 0 calc((100% - 1110px) / 2);
  }
}
</style>
