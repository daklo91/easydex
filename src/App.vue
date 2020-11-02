<template>
  <div id="app">
    <div id="nav">
      <div class="spacer"></div>
      <router-link to="/">Home</router-link>
      <router-link to="/browse">Browse</router-link>
      <router-link to="/search">Search</router-link>
      <router-link to="/filter">Filter</router-link>
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
  overflow: hidden;
}

#app {
  font-family: $main-font;
  color: $main-color;
  text-align: center;
  max-width: 800px;
  margin: auto;
  background: white;
  height: 100vh;
  box-shadow: 0px 0px 16px 0px rgba(100, 100, 100, 0.5);
}

#nav {
  .spacer {
    height: 35px;
  }
  a {
    padding: 10px;
    border-radius: 8px;
    margin: 0px 1px 0px;
    text-decoration: none;
    color: $main-color;
    transition: 0.3s;

    &.router-link-exact-active {
      color: $pokemon-yellow-color;
      background-color: $pokemon-blue-color;
    }

    &:hover {
      color: $pokemon-yellow-color;
    }
  }
}

@media only screen and (max-width: 550px) {
  #nav {
    display: none;
  }
}
</style>
