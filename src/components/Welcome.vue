<template>
  <div class="flex-container">
    <div>
      <h1>EASYDEX</h1>
      <h2>Gotta Index 'em all!</h2>
    </div>
    <EasydexLogo />
    <div>
      <!-- It doesn't quite feel right with this button anymore. We need something else to fill this space. We could also make it appear on small screens which indicates that swiping is a way to navigate -->
      <p>Browse</p>
      <NavigationArrow class="nav-arrow" />
      <p v-if="wheelCount > 0">{{ wheelCount }}</p>
    </div>
  </div>
</template>

<script>
import EasydexLogo from '@/assets/EasydexLogo.vue'
import NavigationArrow from '@/assets/NavigationArrow.vue'

export default {
  name: 'Welcome',
  components: {
    EasydexLogo,
    NavigationArrow
  },
  props: {
    wheelCount: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style scoped lang="scss">
.flex-container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100vh;

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
  .nav-arrow {
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

@media only screen and (max-width: 350px) {
  .flex-container {
    h1 {
      font: 600% $title-font;
    }
    h2 {
      font: 125% $sub-title-font;
    }
  }
}

@media only screen and (max-width: 300px) {
  .flex-container {
    h1 {
      font: 540% $title-font;
    }
    h2 {
      font: 110% $sub-title-font;
    }
  }
}
</style>
