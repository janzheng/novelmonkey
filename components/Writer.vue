
<!-- Used as the overall writing component for a sessions
  - contains Renderer
  - contains Writer

  Logic
  - most logic should be stored within store/actions
    - interacts w/ game logic, timer/alarm, and other things to make a whole writing session
    - save/load

 -->
<template>
  <div class="Writer _flex-col" 
  :class="[fullscreenClass, zenClass]" 
  ref="writer" id="writer">
    <Renderer class="_flex-1" />
    <Inputter :autofocus="true" />
    <div class="Writer-bottom" ref="writerBottom" id="writerBottom">
      <!-- used as a scroll location -->
    </div>
  </div>
</template>


<script>

import { mapState, mapGetters } from 'vuex'
import Renderer from '~/components/Renderer'
import Inputter from '~/components/Inputter'
import { setWriter, setRefWriterBottom } from '~/assets/helpers'


export default {

  components: {
    Renderer,
    Inputter
  },

  mounted () {
    // this.$store.commit('setWriter', this.$refs.writer)
    setWriter(this.$refs.writer)
    setRefWriterBottom(this.$refs.writerBottom)
  }, 

  data () {
    return {
    }
  },

  methods: {
  },

  computed: {
    ...mapState([
      'fullscreen',
      'expand',
      'zen',
      ]),

    ...mapGetters([
      'lightModeName',
      'typefaceName',
      ]),

    typeface() {
      return `--${this.typefaceName}`
    },

    zenClass() {
      if(this.zen)
        return `--zen`
      return ''
    },

    fullscreenClass() {
      return this.fullscreen ? '--fullscreen' : ''
    }

  }

}
</script>



<style lang="scss" scoped>

</style>


