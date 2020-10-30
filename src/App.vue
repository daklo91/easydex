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
body {
  background: repeating-linear-gradient(
    45deg,
    #fff,
    #fff 30px,
    #e6f9ff 30px,
    #e6f9ff 60px
  );
  margin: 0;
  padding: 0;
}

#app {
  font-family: $main-font;
  color: $main-color;
  text-align: center;
  width: 800px;
  margin: auto;
  background: white;
  height: 100vh;
  box-shadow: 0px 0px 16px 0px rgba(100, 100, 100, 0.5);
}

#nav {
  a {
    color: $main-color;

    &.router-link-exact-active {
      color: $pokemon-yellow-color;
    }
  }
}
</style>
