<template>
  <div>
    <MenuButton v-on:openMenu="openMenu" />
    <div id="menu" v-if="menuIsOpen">
      <h2>Easydex</h2>
      <RouterLinks />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import MenuButton from "@/components/MenuButton.vue";
import RouterLinks from "@/components/RouterLinks.vue";

export default Vue.extend({
  components: {
    MenuButton,
    RouterLinks
  },
  data() {
    return {
      menuIsOpen: false
    };
  },
  methods: {
    openMenu() {
      this.menuIsOpen = !this.menuIsOpen;
    }
  }
});
</script>

<style lang="scss" scoped>
#menu {
  height: 100vh;
  width: 100vw;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 99;
  position: fixed;

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
