
<!-- Used as the overall writing component for a sessions
  - contains Renderer
  - contains Writer

  Logic
  - most logic should be stored within store/actions
    - interacts w/ game logic, timer/alarm, and other things to make a whole writing session
    - save/load

 -->
<template>
  <div class="Writer _flex-col" :class="fullscreen ? '--fullScreen' : ''" ref="writer" id="writer">
    <Renderer class="_flex-1" />
    <Inputter :autofocus="true" />
    <div class="yoo">
      yoooo
    </div>

  </div>
</template>


<script>

import { mapState } from 'vuex'
import Renderer from '~/components/Renderer'
import Inputter from '~/components/Inputter'
import { setWriter } from '~/assets/helpers'

export default {

  components: {
    Renderer,
    Inputter
  },

  mounted () {
    // this.$store.commit('setWriter', this.$refs.writer)
    setWriter(this.$refs.writer)
  }, 

  data () {
    return {
    }
  },

  methods: {
  },

  computed: {
    ...mapState([
      'fullscreen'
      ]),
  }

}
</script>



<style lang="scss" scoped>

</style>


