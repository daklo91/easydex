<template>
  <div id="app">
    <LoadingScreen />
    <Modal />
    <div id="nav-menu">
      <Menu />
    </div>
    <div id="nav-bar">
      <RouterLinks />
    </div>
    <router-view />
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue'
import RouterLinks from '@/components/RouterLinks.vue'
import Modal from '@/components/Modal.vue'
import LoadingScreen from '@/components/LoadingScreen.vue'

export default {
  components: {
    Menu,
    RouterLinks,
    Modal,
    LoadingScreen
  },
  beforeCreate() {
    this.$store.dispatch('fetchPokemon')
  },
  watch: {
    $route: {
      handler: to => {
        document.title = to.meta.title
      },
      immediate: true
    }
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  overflow: auto;
  background: repeating-linear-gradient(
    45deg,
    #fff,
    #fff 30px,
    #e6f9ff 30px,
    #e6f9ff 60px
  );
  background-attachment: fixed;
}

#app {
  font-family: $main-font;
  color: $main-color;
  text-align: center;
  max-width: 800px;
  min-height: 100vh;
  margin: auto;
  background: white;
  box-shadow: 0px 0px 16px 0px rgba(100, 100, 100, 0.5);

  #nav-menu {
    display: none;
  }
  #nav-bar {
    position: absolute;
    margin-top: 60px;
    left: 50%;
    transform: translate(-50%, -50%);
    //Hack to make absolute position stay centered
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
