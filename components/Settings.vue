
<template>
  <div class="">
    <div class="Settings">

      <button class="_button --text --short _margin-none "
      @click="toggleTypeface"
      >{{ typefaceName }}</button>

      <!-- <button class="_button --text --short _margin-none _font-small"
        v-clipboard:copy="copyContent"
        v-clipboard:success="copySuccess"
        v-clipboard:error="copyError"
      >copy to clipboard</button> -->
      <button class="_button --text --short _margin-none "
        @click="copySession"
      >copy to clipboard</button>


      <button class="_button --text --short _margin-none "
      download="novelmonkey.save"
      v-if="!$device.isMobileOrTablet"
      @click="download"
      >download</button>

      <button class="_button --text --short _margin-none "
      @click="clear"
      >reset</button>

      <!-- <button class="--text _margin-none" @click="toggleLightMode">{{lightModeName}}</button> -->

      <!-- <button class="--text _margin-none" @click="openFullscreen">full screen</button> -->

          <!-- {{ hasWritten }} -->
  <!-- 
      <button type="button"
        v-clipboard:copy="copyContent"
        v-clipboard:success="copySuccess"
        v-clipboard:error="copyError">
        Test Copy!
      </button> -->

    </div>

  </div>
</template>


<script>

import { mapState, mapGetters } from 'vuex'
import { fullscreenEnter } from '~/assets/helpers'

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
      'lightModeName',
      'typefaceName',
      ]),

  },

  methods: {
    async copySession() {
      // console.log('ehh copy session:', this.session, this.session.length)

      if(this.session && this.session.length > 0) {
        // return this.session[0].string
        let text = ""

        for (let sesh of this.session) {
          text += sesh.string + "\r\n\r\n"
        }

        console.log('copy text:', text)
        const copied = await this.$copyText(text)
        // console.log('copied:', copied)
        if(copied) {
          this.copySuccess()
        } else {
          this.copyError()
        }
      }

    },
    toggleTypeface() {
      this.$store.dispatch('toggleTypeface')
    },

    copyContent() {
      if(this.session && this.session.length > 0) {
        return this.session[0].string
      }
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

    download() {
      this.$store.dispatch('generateSave')
    },

    clear() {
      if (confirm("Are you sure you want to clear all text?")) {
        this.$store.dispatch('sessionReset')
      } 
    },

    toggleLightMode() {
      this.$store.dispatch('toggleLight')
    },

    openFullscreen() {
      fullscreenEnter(this)
      // this.$store.dispatch('fullscreenEnter', this.$refs.writer)
    },
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


