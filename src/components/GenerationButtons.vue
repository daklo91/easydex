<template>
  <div>
    <div class="gen-title"><h2>Generations</h2></div>
    <div id="gen-buttons">
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
export default {}
</script>

<style lang="scss" scoped>
.gen-title {
  margin-top: 20%;
  @media (min-width: 676px) {
    display: none;
  }
}

#gen-buttons {
  background-color: rgba(255, 255, 255, 0.95);
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;

  @media (max-width: 676px) {
    margin-top: 30%;
    flex-direction: column;
  }

  @media (max-width: 440px) {
    margin-top: 40%;
    flex-direction: column;
  }

  @media (max-width: 350px) {
    margin-top: 50%;
    flex-direction: column;
  }

  @media (max-width: 260px) {
    margin-top: 60%;
    flex-direction: column;
  }

  a {
    text-decoration: none;
    color: $main-color;
    margin: 5px;
    padding: 5px;
    width: 80px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $action-button-background;
    border-radius: 12px;
    border: 2px solid $main-color;

    &.router-link-exact-active {
      // color: $pokemon-yellow-color;
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
