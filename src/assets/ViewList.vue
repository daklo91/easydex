<template>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="50"
      viewBox="0 0 24 24"
      width="50"
      @click="toggleList"
      class="listButton"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        fill="#616161"
        d="M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z"
      />
    </svg>
    <div v-if="genList" class="list">
      <GenerationButtons />
    </div>
  </div>
</template>

<script>
import GenerationButtons from '@/components/GenerationButtons.vue'
export default {
  components: {
    GenerationButtons
  },
  computed: {
    genList() {
      return this.$store.state.genListWindow
    }
  },
  methods: {
    toggleList() {
      this.$store.state.genListWindow = !this.$store.state.genListWindow
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  // height: 100vh;
  // width: 100vw;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 80;
  position: fixed;
  top: 0;
  left: 0;
}

// #gen-buttons {
//   display: flex;
//   flex-direction: column;
// }

.listButton {
  z-index: 81;
  position: fixed;
  right: 0;
  top: 0;
}
</style>
