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
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 50px 30px;
  justify-items: center;
}
</style>
