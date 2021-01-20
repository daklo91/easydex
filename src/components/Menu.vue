<template>
  <div>
    <div @click="openMenu"><MenuButton /></div>
    <div id="menu" v-if="menuIsOpen">
      <h2>Easydex</h2>
      <div @click="closeMenu"><RouterLinks /></div>
    </div>
  </div>
</template>

<script>
import MenuButton from '@/components/MenuButton.vue'
import RouterLinks from '@/components/RouterLinks.vue'

export default {
  components: {
    MenuButton,
    RouterLinks
  },
  computed: {
    menuIsOpen() {
      return this.$store.state.menuIsOpen
    }
  },
  methods: {
    openMenu() {
      this.$store.state.menuIsOpen = !this.$store.state.menuIsOpen
    },
    closeMenu() {
      this.$store.state.menuIsOpen = false
    }
  }
}
</script>

<style lang="scss" scoped>
#menu {
  height: 100vh;
  width: 100vw;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;

  h2 {
    font: 300% $title-font;
    color: $pokemon-yellow-color;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: $pokemon-blue-color;
    margin: 20px 0px 20px;
  }

  #link-container //Inside RouterLinks.vue
 {
    display: flex;
    flex-direction: column;
  }
}
</style>
