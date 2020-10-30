<template>
  <div>
    <h1>EASYDEX</h1>
    <h2>Gotta Index 'em all!</h2>
    <EasydexLogo />
    <div>
      <p>Browse</p>
      <NavigationArrow />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import EasydexLogo from "@/assets/EasydexLogo.vue";
import NavigationArrow from "@/assets/NavigationArrow.vue";

export default Vue.extend({
  name: "Welcome",
  components: {
    EasydexLogo,
    NavigationArrow
  }
});
</script>

<style scoped lang="scss">
div {
  h1 {
    font: 700% $title-font;
    color: $pokemon-yellow-color;
    -webkit-text-stroke-width: 3px;
    -webkit-text-stroke-color: $pokemon-blue-color;
    margin-bottom: 0px;
  }
  h2 {
    margin-top: -10px;
    font: 150% $sub-title-font;
    color: #8f8f8f;
  }
  p {
    font-size: 140%;
  }
}
</style>
