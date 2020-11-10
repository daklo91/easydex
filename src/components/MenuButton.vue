<template>
  <div id="button-container" @click="openMenu">
    <div id="top-line"></div>
    <div id="mid-line"></div>
    <div id="bot-line"></div>
  </div>
</template>

<script>
export default {
  methods: {
    openMenu() {
      this.$emit('openMenu')
    }
  }
}
</script>

<style lang="scss" scoped>
#button-container {
  border: 3px solid $main-color;
  border-radius: 8px;
  padding: 3px;
  width: 30px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: fixed;
  z-index: 100;
  margin: 10px;

  #top-line {
    height: 3px;
    width: 30px;
    background-color: $main-color;
  }

  #mid-line {
    height: 3px;
    width: 30px;
    background-color: $main-color;
  }

  #bot-line {
    height: 3px;
    width: 30px;
    background-color: $main-color;
  }
}
</style>
