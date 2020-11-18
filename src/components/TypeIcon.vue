<template>
  <div
    id="svg-frame"
    :style="{
      backgroundColor: setTypeColor(type),
      width: size * 1.8 + 'px',
      height: size * 1.8 + 'px'
    }"
  >
    <svg
      :width="size"
      :height="size"
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill-rule="evenodd" clip-rule="evenodd" :fill="'white'">
        <component :is="setTypeSVG(type)"></component>
      </g>
    </svg>
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import typeColors from '@/scripts/typeColors.js'
import water from '@/assets/type-icons/water.vue'
import steel from '@/assets/type-icons/steel.vue'
import ice from '@/assets/type-icons/ice.vue'
import bug from '@/assets/type-icons/bug.vue'
import dark from '@/assets/type-icons/dark.vue'
import dragon from '@/assets/type-icons/dragon.vue'
import electric from '@/assets/type-icons/electric.vue'
import fairy from '@/assets/type-icons/fairy.vue'
import fighting from '@/assets/type-icons/fighting.vue'
import fire from '@/assets/type-icons/fire.vue'
import flying from '@/assets/type-icons/flying.vue'
import ghost from '@/assets/type-icons/ghost.vue'
import grass from '@/assets/type-icons/grass.vue'
import ground from '@/assets/type-icons/ground.vue'
import normal from '@/assets/type-icons/normal.vue'
import poison from '@/assets/type-icons/poison.vue'
import psychic from '@/assets/type-icons/psychic.vue'
import rock from '@/assets/type-icons/rock.vue'

export default {
  components: {
    water,
    steel,
    ice,
    bug,
    dark,
    dragon,
    electric,
    fairy,
    fighting,
    fire,
    flying,
    ghost,
    grass,
    ground,
    normal,
    poison,
    psychic,
    rock
  },
  props: {
    type: {
      type: Object,
      function() {
        return 'Pokemon Type Object not recieved'
      }
    },
    size: {
      type: Number,
      default: 12
    }
  },
  methods: {
    setTypeColor(type) {
      return typeColors(type)
    },
    setTypeSVG(type) {
      return type.type.name
    }
  }
}
</script>

<style lang="scss" scoped>
#svg-frame {
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
