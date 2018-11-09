

<!-- Used to render the current session -->
<template>
  <div class="Inputter" id="inputter" :style="inputxs" 
  :class="[typeface, zenClass, fullscreenClass]"
  >
    <Data />
    <div>
      <input ref="textInput" v-model.trim="inputString" class="Header-search _form-input --width-full" type="text" name="textInput" id="searchbar" placeholder="Write something magical" @input="textEntry" 
      :class="typeface"
      @focus="inputFocused"
      @blur="inputBlurred"
      @keydown.enter.prevent="commitFragment"
      @keydown.alt.s.prevent="save"
      @keydown.ctrl.s.prevent="save"
      @keydown.meta.83.prevent="save"
      />
    </div>

  </div>
</template>


<script>

import { mapState, mapGetters } from 'vuex'
import { scrollToWriterBottom, scrollToFullscreenBottom } from '~/assets/helpers'
import Data from '~/components/Data'

export default {

  props: ['inline'],

  components: {
    Data,
  },

  data: function () {
    return {
    }
  },

  mounted: function () {
    this.setFocus()
  },
  updated: async function () {
    // this.setFocus()
  },

  methods: {
    
    textEntry(letter) {
      // this takes input letter by letter, useful for calculating wpm etc.
      // use the inputString setter for data handling
      // console.log('set text:', text)
    },

    commitFragment(e) {

      this.$store.dispatch('commitInput')

      if(!this.expand && !this.fullscreen) {
        scrollToWriterBottom(this)
      } else {
        // when full-screen, scroll the writer element to bottom
        scrollToFullscreenBottom(this)
      }
    },

    setFocus() {
      this.$nextTick(() => {
        if(this.$refs.textInput) {
          // might unfocus and unmount the component before tick
          this.$store.commit('setInputRef', this.$refs.textInput)
          this.$store.dispatch('inputFocus')
        }
      }) // required bc dispatch updates this component

    },

    inputFocused() {
      this.$store.commit('setInputFocused')
    },

    inputBlurred() {
      this.$store.commit('setInputUnfocused')
    },

    // v1: since we don't have saving, download a file
    // intercepted in index.vue
    save(e) {
      // this.$store.dispatch('generateSave')
    }
  },

  computed: {
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

    zenClass() {
      if(this.zen)
        return `--zen`
      return ''
    },

    fullscreenClass() {
      return this.fullscreen ? '--fullscreen' : ''
    },
    
    // mobile input height calculated from bottom of screen
    inputxs() {
      // console.log('inputxs:', this.$device.isMobileOrTablet)
      if(this.$device.isMobileOrTablet)
        return {
          '--inputxs': `${320}px`
        };
      return {
        '--inputxs': `32px`
      }
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
      'zen',
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


