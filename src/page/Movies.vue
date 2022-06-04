<template>
  <Title>Movies</Title>

  <section class="action-bar">
    <Input
      v-model="query"
      :debounce="200"
      placeholder="Search for a title"
      type="search"
    />
  </section>

  <section class="movies">
    <Spinner v-if="!movies" />
    <MovieGrid v-else-if="movies.length" :movies="movies" />
    <p v-else>No Movies found...</p>
  </section>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue';

import Input from '../component/Input.vue';
import MovieGrid from '../component/MovieGrid.vue';
import Spinner from '../component/Spinner.vue';
import Title from '../component/Title.vue';
import { useMovieStore } from '../store/movie-store';

const query = ref('');
const store = useMovieStore();

const movies = computed(() => {
  if (!query.value) return store.movies;
  if (!store.movies) return null;

  return store.movies.filter(movie =>
    movie.title.toLowerCase().includes(query.value.toLowerCase()),
  );
});

onMounted(async () => {
  await store.download();
});
</script>

<style lang="scss" scoped>
section {
  margin: 0 108px;
}

.action-bar {
  margin-top: -24px;
  margin-bottom: 56px;
}

.movies {
  text-align: center;
}
</style>
