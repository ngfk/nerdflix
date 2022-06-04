<template>
  <div
    class="movie-card"
    @mouseleave="hovered = false"
    @mouseover="hovered = true"
  >
    <div class="movie-card__poster">
      <img
        v-if="image"
        :src="movie.urlPoster"
        :alt="`Poster: ${movie.title}`"
        @error="image = false"
      />
      <p v-else>Image not found</p>
      <div v-if="hovered" class="movie-card__overlay">
        <p>{{ movie.rating }}</p>
      </div>
    </div>

    <p class="title">{{ movie.title }}</p>
    <p class="year">{{ movie.year }}</p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Movie } from '../model/movie';

interface Props {
  movie: Movie;
}

defineProps<Props>();

const hovered = ref(false);
const image = ref(true);
</script>

<style lang="scss" setup>
.movie-card {
  display: flex;
  flex-flow: column nowrap;
  width: 100%;

  &__poster {
    position: relative;
    padding-top: min(calc((3 / 2) * 100%), 268px);
    width: 100%;
    max-width: 182px;
    border-radius: 6px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    background-color: #131313;
    overflow: hidden;

    > * {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      text-align: center;
    }

    p {
      opacity: 0.7;
    }
  }

  &__overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.7);
    font-size: 52px;
    font-weight: 300;
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
