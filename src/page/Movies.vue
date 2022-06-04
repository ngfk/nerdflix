<template>
  <Title>Movies</Title>

  <section class="action-bar">
    <Input v-model="query" placeholder="Search for a title" type="search" />
  </section>

  <section>
    <MovieGrid v-if="store.movies?.length" :movies="store.movies" />
  </section>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';

import Input from '../component/Input.vue';
import MovieGrid from '../component/MovieGrid.vue';
import Title from '../component/Title.vue';
import { useMovieStore } from '../store/movie-store';

const query = ref('');
const store = useMovieStore();

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
</style>
