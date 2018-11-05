
<template>
  <div>
    <button class="--text _margin-none" @click="toggleLightMode">{{lightModeVal}}</button>
<!-- 
    <button type="button"
      v-clipboard:copy="copyContent"
      v-clipboard:success="copySuccess"
      v-clipboard:error="copyError">
      Test Copy!
    </button> -->



  </div>
</template>


<script>

import { mapState, mapGetters } from 'vuex'

export default {
  data: function () {
    return {
      // searchString: this.$store.state.search.string,
    }
  },

  computed: {

    ...mapState([
      'session',
      'lightMode',
      ]),

    ...mapGetters([
      'lightModeVal',
      ]),

  },

  methods: {
    copyContent() {
      if(this.session && this.session.length > 0)
        return this.session[0].string
      this.$toast.error('Nothing to copy', {duration: 1000} )
      return undefined
    },

    copySuccess() {
      if(this.session && this.session.length > 0)
        this.$toast.success('Copied to clipboard!', { 
           theme: "primary", 
           position: "top-right", 
           duration : 2000
        } )
    },

    copyError() {
      this.$toast.error(
        'A problem occurred with copying', { 
           theme: "primary", 
           position: "top-right", 
           duration : 5000
        })
    },

    toggleLightMode() {
      console.log('toggle light')
      this.$store.dispatch('toggleLight')
    }
  }
}
</script>

<style lang="scss" scoped>

.logo {
  position: relative;
  width: 45px;
  top: 3px;
}

.logo-xs {
  position: relative;
  width: 34px;
  top: 3px;
  margin-right: 16px;
  vertical-align: bottom;
}

</style>


