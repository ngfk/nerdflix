<template>
  <h1>
    <slot />
  </h1>
</template>

<style lang="scss" scoped>
h1 {
  margin: 0;
  padding: 16px;
  text-align: center;
  height: 90px;
  background-color: #171717;
  font-size: 30px;
  font-weight: 400;
}

@media screen and (min-width: 1024px) {
  h1 {
    text-align: left;
    height: 122px;
    padding: 30px calc((100% - 930px) / 2);
  }
}

@media screen and (min-width: 1440px) {
  h1 {
    padding: 30px calc((100% - 1110px) / 2);
  }
}
</style>
