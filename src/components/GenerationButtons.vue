<template>
  <div>
    <div class="gen-title"><h2>Generations</h2></div>
    <div id="gen-buttons" @click="closeList">
      <router-link to="/browse/gen1">I</router-link>
      <router-link to="/browse/gen2">II</router-link>
      <router-link to="/browse/gen3">III</router-link>
      <router-link to="/browse/gen4">IV</router-link>
      <router-link to="/browse/gen5">V</router-link>
      <router-link to="/browse/gen6">VI</router-link>
      <router-link to="/browse/gen7">VII</router-link>
      <router-link to="/browse/gen8">VIII</router-link>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeList() {
      this.$store.state.genListWindow = false
    }
  }
}
</script>

<style lang="scss" scoped>
.gen-title {
  margin: 0;
  @media (min-width: 481px) {
    display: none;
  }
}

#gen-buttons {
  background-color: rgba(255, 255, 255, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  font-size: 10px;

  @media (max-width: 480px) {
    font-size: 16px;
    margin: 0;
    flex-direction: column;
    flex-wrap: wrap;
    height: 100vh;
    width: 100vw;
  }

  @media (max-height: 450px) and (max-width: 480px) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: start;
    justify-content: center;
    align-content: center;
  }

  a {
    text-decoration: none;
    color: $main-color;
    margin: 5px;
    padding: 0px;
    width: 80px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $action-button-background;
    border-radius: 12px;
    border: 2px solid $main-color;

    @media (max-width: 480px) {
      padding: 4px;
    }

    &.router-link-exact-active {
      background-color: lighten($action-button-background, 10%);
      color: $pokemon-yellow-color;
      border: 3px solid $main-color;
    }

    &:hover {
      color: $pokemon-yellow-color;
      background-color: lighten($action-button-background, 10%);
    }
  }
}
</style>
