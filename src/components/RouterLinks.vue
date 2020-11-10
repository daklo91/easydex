<template>
  <div id="link-container">
    <router-link to="/">Home</router-link>
    <router-link to="/browse">Browse</router-link>
    <router-link to="/search">Search</router-link>
    <router-link to="/filter">Filter</router-link>
    <router-link to="/about">About</router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
#link-container {
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
</style>
