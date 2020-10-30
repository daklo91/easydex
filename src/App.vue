<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: $main-font;
  color: $main-color;
  text-align: center;
}

#nav {
  a {
    color: $main-color;

    &.router-link-exact-active {
      color: $active-color;
    }
  }
}
</style>
