<template>
  <nav>
    <ul>
      <li><router-link exact to="/">Homepage</router-link></li>
      <li><router-link to="/series">Series</router-link></li>
      <li><router-link to="/movies">Movies</router-link></li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  ul {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;

    li {
      position: relative;
      margin: 28px 25px;
      line-height: 19px;
    }
  }

  a {
    color: #ffffff;
    text-decoration: none;
    opacity: 0.7;

    &.router-link-exact-active {
      opacity: 1;

      &:after {
        content: '';
        position: absolute;
        bottom: -28px;
        display: block;
        background-color: red;
        height: 4px;
        width: 100%;
      }
    }
  }
}
</style>
