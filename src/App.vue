<template>
  <div id="app">
    <div id="nav-menu">
      <Menu />
    </div>
    <div id="nav-bar">
      <div class="spacer"></div>
      <RouterLinks />
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Menu from '@/components/Menu.vue'
import RouterLinks from '@/components/RouterLinks.vue'

export default Vue.extend({
  components: {
    Menu,
    RouterLinks
  }
})
</script>

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
  overflow: auto;

  .spacer {
    height: 35px;
  }

  #nav-menu {
    display: none;
  }
}

@media only screen and (max-width: 550px) {
  #nav-bar {
    display: none;
  }
  #nav-menu {
    display: block !important;
  }
}
</style>
