<template>
  <div class="movie-card">
    <img :src="movie.urlPoster" :alt="`Poster: ${movie.title}`" />

    <p class="title">{{ movie.title }}</p>
    <p class="year">{{ movie.year }}</p>
  </div>
</template>

<script lang="ts" setup>
import { Movie } from '../model/movie';

interface Props {
  movie: Movie;
}

defineProps<Props>();
</script>

<style lang="scss" setup>
.movie-card {
  display: flex;
  flex-flow: column nowrap;
  max-width: 180px;

  img {
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }

  .title {
    margin: 21px 0 4px 0;
    font-size: 12px;
    line-height: 14px;
  }

  .year {
    margin: 0;
    font-size: 12px;
    line-height: 15px;
    opacity: 0.5;
  }
}
</style>
