<template>
  <div id="link-container">
    <router-link to="/browse">Browse</router-link>
    <router-link to="/search">Search</router-link>
    <router-link to="/filter">Filter</router-link>
    <router-link to="/about">About</router-link>
  </div>
</template>

<style lang="scss" scoped>
#link-container {
  width: 600px;
  margin: auto;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  a {
    display: inline-block;
    width: 20%;
    border-radius: 8px;
    margin: 0 5px;
    padding: 10px 5px;
    text-decoration: none;
    color: $main-color;

    &.router-link-active {
      color: $pokemon-yellow-color;
      background-color: $pokemon-blue-color;
    }

    &:hover {
      color: $pokemon-yellow-color;
    }
  }
}
</style>
