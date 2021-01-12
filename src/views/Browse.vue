<template>
  <div>
    <div id="gen-buttons">
      <ul>
        <li><router-link to="/browse/gen1">Gen I</router-link></li>
        <li><router-link to="/browse/gen2">Gen II</router-link></li>
        <li><router-link to="/browse/gen3">Gen III</router-link></li>
        <li><router-link to="/browse/gen4">Gen IV</router-link></li>
        <li><router-link to="/browse/gen5">Gen V</router-link></li>
        <li><router-link to="/browse/gen6">Gen VI</router-link></li>
        <li><router-link to="/browse/gen7">Gen VII</router-link></li>
        <li><router-link to="/browse/gen8">Gen VIII</router-link></li>
      </ul>
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
