<template>
  <div class="flex-container">
    <div>
      <h1>EASYDEX</h1>
      <h2>Gotta Index 'em all!</h2>
    </div>
    <EasydexLogo />
    <div>
      <p>Browse</p>
      <NavigationArrow class="bounce" />
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
.flex-container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 90vh;

  h1 {
    font: 700% $title-font;
    color: $pokemon-yellow-color;
    -webkit-text-stroke-width: 3px;
    -webkit-text-stroke-color: $pokemon-blue-color;
    margin: 0px;
  }
  h2 {
    margin-top: -10px;
    font: 150% $sub-title-font;
    color: #8f8f8f;
  }
  p {
    font-size: 140%;
  }
  .bounce {
    animation: bounce 1s infinite alternate;
    @keyframes bounce {
      from {
        transform: translateY(0px);
      }
      to {
        transform: translateY(-12px);
      }
    }
  }
}
</style>
