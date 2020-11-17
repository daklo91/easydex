<template>
  <div class="home">
    <Welcome :wheelCount="wheelCount" />
    <icon-base width="12" height="12" icon-name="write"
      ><icon-write /><bug
    /></icon-base>
  </div>
</template>

<script>
import Welcome from '@/components/Welcome.vue'

export default {
  name: 'Home',
  components: {
    Welcome
  },
  mounted() {
    window.addEventListener('wheel', this.handleWheel)
  },
  destroyed() {
    window.removeEventListener('wheel', this.handleWheel)
  },
  data() {
    return {
      wheelCount: 0
    }
  },
  methods: {
    handleWheel(event) {
      if (event.deltaY > 0 && this.wheelCount < 5) {
        this.wheelCount++
      }

      if (this.wheelCount == 5) {
        this.$router.push('browse')
      }
      console.log('you are wheeling in Home view' + event + this.wheelCount)
    }
  }
}
</script>
