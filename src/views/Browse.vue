<template>
  <div>
    <ViewList class="view-list" />
    <GenerationButtons class="gen-buttons" />
    <!-- <div id="gen-buttons">
      <router-link to="/browse/gen1">I</router-link>
      <router-link to="/browse/gen2">II</router-link>
      <router-link to="/browse/gen3">III</router-link>
      <router-link to="/browse/gen4">IV</router-link>
      <router-link to="/browse/gen5">V</router-link>
      <router-link to="/browse/gen6">VI</router-link>
      <router-link to="/browse/gen7">VII</router-link>
      <router-link to="/browse/gen8">VIII</router-link>
    </div> -->
    <router-view :key="$route.path"></router-view>
  </div>
</template>

<script>
import GenerationButtons from '@/components/GenerationButtons.vue'
import ViewList from '@/assets/ViewList.vue'
export default {
  components: {
    GenerationButtons,
    ViewList
  }
}
</script>

<style lang="scss" scoped>
// #flex-container {
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
// }

.gen-buttons {
  position: -webkit-sticky;
  position: sticky;
  top: 76px;
  @media (max-width: 480px) {
    display: none;
  }
}

.view-list {
  @media (min-width: 481px) {
    display: none;
  }
}
</style>
