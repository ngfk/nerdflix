<template>
  <header>
    <nav>
      <ul>
        <li><router-link to="/">Homepage</router-link></li>
        <li><router-link to="/series">Series</router-link></li>
        <li><router-link to="/movies">Movies</router-link></li>
      </ul>
    </nav>
  </header>

  <main>
    <router-view />
  </main>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');

#app {
  font-family: 'Source Sans Pro', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
