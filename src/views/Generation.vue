<template>
  <div>
    <h1>Generation X</h1>
    <!-- <h2>{{ this.$parent.activeGen }}</h2>
    <h3>{{ $route.path }}</h3> -->
  </div>
</template>

<script>
export default {
  props: {
    activeGen: {
      type: String,
      default: 'No activeGen'
    }
  }
}
</script>

<style lang="scss" scoped></style>
