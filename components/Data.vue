

<!-- Used to render the current session -->
<template>
  <div class="Data" :class="[typeface,styleClass]" @click="toggleStyle"
  >
    <div class="SessionData-active">
      {{ activeCount }} / {{ styleName }}
    </div>
  </div>
</template>


<script>

import { mapState, mapGetters } from 'vuex'

export default {

  props: ['inline'],

  data: function () {
    return {
      datastyle: ['full','half','none'],
      style: 0,
    }
  },

  mounted: function () {
    this.setFocus()
  },
  updated: async function () {
    // this.setFocus()
  },

  methods: {
    
    setFocus() {
      this.$nextTick(() => {
        if(this.$refs.textInput) {
          // might unfocus and unmount the component before tick
          this.$store.commit('setInputRef', this.$refs.textInput)
          this.$store.dispatch('inputFocus')
        }
      }) // required bc dispatch updates this component
    },

    toggleStyle() {
      this.style++
      if (this.style == this.datastyle.length)
        this.style = 0
    }

  },

  computed: {
    styleName() {
      return this.datastyle[this.style]
    },
    styleClass() {
      return `--${this.datastyle[this.style]}`
    },

    inputString: {
      get: function () {
        return this.$store.state.inputString
      },
      // setter
      set: function (str) {
        // console.log('setting:', str)
        // const url = `/search/${this.searchString}`
        this.$store.commit('setInputText', str)
      }
    },

    // mobile input height calculated from bottom of screen
    inputxs() {
      // console.log('inputxs:', this.$device.isMobileOrTablet)
      if(this.$device.isMobileOrTablet)
        return {
          '--inputxs': `${320}px`
        };
      return ''
    },

    typeface() {
      return `--${this.typefaceName}`
    },

    ...mapState([
      'session',
      'inputCount',
      'currentPolicy',
      'fullscreen',
      'refWriter',
      'expand',
      ]),

    ...mapGetters([
      'hasWritten',
      'activeCount',
      'typefaceName',
      ]),
  }

}
</script>



<style lang="scss" scoped>

</style>


