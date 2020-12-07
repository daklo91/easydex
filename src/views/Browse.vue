<template>
  <div>
    <div id="gen-buttons">
      <router-link to="/browse/gen1">Gen I</router-link>
      <router-link to="/browse/gen2">Gen II</router-link>
      <router-link to="/browse/gen3">Gen III</router-link>
    </div>
    <div id="spacer"></div>
    <router-view :key="$route.path"></router-view>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
#flex-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

#spacer {
  padding-top: 120px;
}

#gen-buttons {
  position: fixed;
  left: 10%;
  background-color: lightgreen;
}
</style>
