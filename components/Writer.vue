
<!-- Used as the overall writing component for a sessions
  - contains Renderer
  - contains Writer

  Logic
  - most logic should be stored within store/actions
    - interacts w/ game logic, timer/alarm, and other things to make a whole writing session
    - save/load

 -->
<template>
  <div class="Writer _flex-col" >

    <Renderer class="_flex-1" :inline="inline" />
    <Inputter :autofocus="true" :inline="inline"/>

  </div>
</template>


<script>

import { mapState } from 'vuex'
import Renderer from '~/components/Renderer'
import Inputter from '~/components/Inputter'

export default {

  components: {
    Renderer,
    Inputter
  },

  props: ['inline'],

  data: function () {
    return {
    }
  },


  methods: {

  },

  computed: {


    ...mapState([
      ]),
  }

}
</script>



<style lang="scss" scoped>

</style>


