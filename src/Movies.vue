<template>
  <ul class="movies">
    <Movie
      v-for="(movie, index) of movies"
      :key="index"
      :movie="movie" />
  </ul>
</template>

<script>
import Movie from './Movie.vue'
import {getMovie} from './api/utilapi.js'

export default {
  components: {
    Movie,
  },

  data () {
    return {
      movies:null,
    }
  },
  created(){ 
    this.movies = getMovie()
  }
}
</script>

<style scoped>
.movies {
  padding: 12px;
  background: rgba(0, 0, 0, .1);
  border-radius: 3px;
  list-style: none;
}
</style>
