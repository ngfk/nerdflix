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
