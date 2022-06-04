import { defineStore } from 'pinia';
import { ref } from 'vue';

import { Movie } from '../model/movie';

export const useMovieStore = defineStore('movie', () => {
  const movies = ref<Movie[] | null>(null);

  async function download(options: { force?: boolean } = {}) {
    if (movies.value && !options.force) return;

    try {
      movies.value = null;
      const response = await fetch('/api/movies.json');
      movies.value = (await response.json()).data.movies;
    } catch (_) {
      // TODO: Server error handling
    }
  }

  return { download, movies };
});
