import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

import { Movie } from '../model/movie';

export const useMovieStore = defineStore('movie', () => {
  const movies = ref<Movie[] | null>(null);
  const liked = ref(new Set<string>());

  const likes = computed(() => {
    return Array.from(liked.value);
  });

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

  function likeMovie(movie: Movie) {
    const { idIMDB: id } = movie;
    if (liked.value.has(id)) liked.value.delete(id);
    else liked.value.add(id);
  }

  return { download, movies, likeMovie, likes };
});
