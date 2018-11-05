

<!-- Used to render the current session -->
<template>
  <div class="Inputter" id="inputter" >
    {{ activeCount }}

    <div>
      <input ref="textInput" v-model.trim="inputString" class="Header-search _form-input --width-full" type="text" name="textInput" id="searchbar" placeholder="Write something magical" @input="textEntry" @keyup.enter="commitFragment"
      @keydown.alt.s.prevent="save"
      @keydown.ctrl.s.prevent="save"
      @keydown.meta.83.prevent="save"
      />
    </div>

  </div>
</template>


<script>

import { mapState, mapGetters } from 'vuex'

export default {

  props: ['inline'],

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

    commitFragment() {
      const body = document.body
      const html = document.documentElement
      const footer = document.getElementById('footer')

      // var height = Math.max( body.scrollHeight, body.offsetHeight, 
                         // html.clientHeight, html.scrollHeight, html.offsetHeight );

      this.$store.dispatch('commitInput')

      // might be buggy on some browsers; use w/ caution
      // 200 is adjusted height of footer
      // window.scroll(0, height - 280 - window.outerHeight);
      // end number is padding
      window.scroll(0, footer.offsetTop - window.innerHeight + 32)
    },

    setFocus() {
      this.$nextTick(() => {
        // this.$refs.search.focus()
        if(this.$refs.textInput) {
          // might unfocus and unmount the component before tick
          this.$store.commit('setInputRef', this.$refs.textInput)
          this.$store.dispatch('inputFocus')
        }
      }) // required bc dispatch updates this component

    },

    // v1: since we don't have saving, download a file
    save(e) {
      this.$store.dispatch('generateSave')
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

    ...mapState([
      'session',
      'inputCount',
      'currentPolicy',
      ]),

    ...mapGetters([
      'hasWritten',
      'activeCount',
      ]),
  }

}
</script>



<style lang="scss" scoped>

</style>


