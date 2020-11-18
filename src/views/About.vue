<template>
  <div class="about">
    <br />
    <br />
    <br />
    <br />
    <br />
    <hr />
    <p>This is an about page.</p>
    <p>But it can also be a test page.</p>
    <hr />
    <TypeIcon :type="'electric'" :size="200" />
    <hr />
  </div>
</template>

<script>
import TypeIcon from '@/components/TypeIcon.vue'

export default {
  components: {
    TypeIcon
  }
}
</script>

<style lang="scss" scoped></style>
