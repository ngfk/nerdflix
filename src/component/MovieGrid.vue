<template>
  <div class="movie-grid">
    <MovieCard v-for="movie of movies" :movie="movie" />
  </div>
</template>

<script lang="ts" setup>
import MovieCard from './MovieCard.vue';

import { Movie } from '../model/movie';

interface Props {
  movies: Movie[];
}

defineProps<Props>();
</script>

<style lang="scss" scoped>
.movie-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 50px 30px;
  align-items: flex-end;
  justify-items: center;
}
</style>
