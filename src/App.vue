<template>
  <div id="app">
    <p class="pokemon-array-length">
      Loading Pokémon: {{ this.$store.state.pokemonArray.length }}
    </p>
    <!-- <LoadingScreen /> -->
    <Modal />
    <div id="nav-menu">
      <Menu />
    </div>
    <h1 class="easydex-logo">Easydex</h1>
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
// import LoadingScreen from '@/components/LoadingScreen.vue'

export default {
  components: {
    Menu,
    RouterLinks,
    Modal
    // LoadingScreen
  },
  // beforeCreate() {
  //   this.$store.dispatch('fetchPokemon')
  // },
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
  background: repeating-linear-gradient(
    45deg,
    #fff,
    #fff 30px,
    #e6f9ff 30px,
    #e6f9ff 60px
  );
  background-attachment: fixed;
  overflow-y: scroll;
}

#app {
  font-family: $main-font;
  color: $main-color;
  text-align: center;
  width: 1000px;
  min-height: 100vh;
  margin: auto;
  background: white;
  box-shadow: 0px 0px 16px 0px rgba(100, 100, 100, 0.5);
  @media screen and (max-width: 1100px) {
    width: 100%;
  }

  .pokemon-array-length {
    margin: 0;
    padding: 0;
  }

  .easydex-logo {
    font: 450% $title-font;
    color: $pokemon-yellow-color;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: $pokemon-blue-color;
    margin: 0;
    padding-top: 25px;
  }
  #nav-menu {
    display: none;
  }
  #nav-bar {
    position: sticky;
    top: 0;
    background: rgba(255, 255, 255, 0.95);
    padding-top: 20px;
    padding-bottom: 20px;
  }
}

@media screen and (max-width: 480px) {
  #nav-bar {
    display: none;
  }
  #nav-menu {
    display: block !important;
  }
}
</style>
