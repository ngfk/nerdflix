<template>
  <div class="movie-grid">
    <MovieCard
      v-for="movie of movies"
      :key="movie.idIMDB"
      :liked="likes?.includes(movie.idIMDB)"
      :movie="movie"
      @like="() => $emit('like', movie)"
    />
  </div>
</template>

<script lang="ts" setup>
import MovieCard from './MovieCard.vue';

import { Movie } from '../model/movie';

interface Props {
  likes?: string[];
  movies: Movie[];
}

interface Emits {
  (eventName: 'like', movie: Movie): void;
}

defineProps<Props>();
defineEmits<Emits>();
</script>

<style lang="scss" scoped>
.movie-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 16px 8px;
  justify-items: center;

  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(5, 1fr);
  }
}
</style>
