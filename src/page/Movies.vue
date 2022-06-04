<template>
  <Title>Movies</Title>

  <section class="action-bar">
    <Input
      v-model="query"
      class="search"
      :debounce="200"
      placeholder="Search for a title"
      type="search"
    />

    <p class="sort-label">Sort By</p>

    <div class="sort">
      <Select
        v-model="sortOrder"
        :options="[
          { label: '(A-Z)', value: 'asc' },
          { label: '(Z-A)', value: 'desc' },
        ]"
        :prefix="sortBy === 'rating' ? 'Rating' : 'Title'"
      />
      <Select
        v-model="sortBy"
        :options="[
          { label: 'Rating', value: 'rating' },
          { label: 'Title', value: 'title' },
        ]"
      />
    </div>
  </section>

  <section class="movies">
    <Spinner v-if="!movies" />
    <MovieGrid
      v-else-if="movies.length"
      :likes="store.likes"
      :movies="movies"
      @like="movie => store.likeMovie(movie)"
    />
    <p v-else>No Movies found...</p>
  </section>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue';

import Input from '../component/Input.vue';
import MovieGrid from '../component/MovieGrid.vue';
import Select from '../component/Select.vue';
import Spinner from '../component/Spinner.vue';
import Title from '../component/Title.vue';
import { useMovieStore } from '../store/movie-store';

const query = ref('');
const sortBy = ref('rating');
const sortOrder = ref('asc');

const store = useMovieStore();

const movies = computed(() => {
  if (!store.movies) return null;

  return store.movies
    .filter(movie => {
      const value = query.value?.trim().toLowerCase();
      return value ? movie.title.toLowerCase().includes(value) : true;
    })
    .sort((a, b) => {
      const c =
        sortBy.value === 'rating'
          ? parseFloat(b.rating) - parseFloat(a.rating)
          : a.title.toLowerCase().localeCompare(b.title.toLowerCase());
      return sortOrder.value === 'asc' ? c : -c;
    });
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
  margin-top: -54px;
  margin-bottom: 56px;

  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-areas:
    '.. lb'
    'sr so';

  .search {
    grid-area: sr;
  }

  .sort-label {
    grid-area: lb;
    color: #fff;
    opacity: 0.5;
    margin: 0 0 8px;
  }

  .sort {
    grid-area: so;
    display: flex;

    > :last-child {
      margin-left: 48px;
    }
  }
}

.movies {
  text-align: center;
}
</style>
