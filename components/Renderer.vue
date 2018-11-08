

<!-- Used to render the current session -->
<template>
  <div class="Renderer" id="renderer"
       v-on:drop="onDrop"
       v-on:dragenter="onDrag"
       v-on:dragover="onDrag"
       v-on:dragleave="onDragLeave"
       @click="rendererClick"
      :class="[typeface, zenClass]"
  >
  <!-- v-on:click="setFocus" -- removed from Renderer since it makes selecting and copying hard -->
    <div class="Renderer-overlay" :class="showOverlay ? '--show' : ''"
    >
      <span><p>drop the novelmonkey.save file!</p></span>
    </div>

    <!-- 
      top menu 
    -->

    <!-- full screen menu -->
    <!-- <div class="Renderer-menu _flex-row _right" 
      :class="hasWritten ? '' : '_opacity-10'"
      v-on:click="ignoreFocus"
      v-if="fullscreen"
    >
      <div class="_flex-1">
        <button class="_button --text --short _margin-none _font-small"
          @click="toggleLightMode"
        >{{lightModeName}}</button>

        <button class="_button --text --short _margin-none _font-small"
          @click="closeFullscreen"
        >close</button>
      </div>
    </div> -->

    <!-- regular menu -->
    <div class="Renderer-menu Menu _flex-row _margin-bottom-half _right" 
      :class="[hasWritten ? '' : '_opacity-10', zenClass]"
      v-on:click="ignoreFocus"
    >
      <div class="Menu-left _flex-grow">
        <input class="Renderer-name" :class="typeface"
          v-model.trim="sessionName" />
      </div>

      <div class="Menu-right _flex-1">

        <button class="_button --text --short _margin-none"
          @click="toggleLightMode"
        >{{lightModeName}}</button>

        <button class="_button --text --short _margin-none "
          @click="toggleZen"
        >{{zenName}}</button>

        <button class="_button --text --short _margin-none "
          @click="toggleExpand"
          v-if="!fullscreen"
        >{{ expandName }}</button>

        <div class="Menu-inset">
          <button class="_button --text --short _margin-none "
            @click="openFullscreen"
            v-if="!fullscreen"
          >fullscreen</button>

          <button class="_button --text --short _margin-none "
            @click="closeFullscreen"
            v-if="fullscreen"
          >exit fullscreen</button>
        </div>

<!-- 
        <button class="_button --text --short _margin-none _font-small"
          v-clipboard:copy="copyContent"
          v-clipboard:success="copySuccess"
          v-clipboard:error="copyError"
        >copy</button>

        <button class="_button --text --short _margin-none _font-small"
        download="novelmonkey.save"
        @click="download"
        >save</button>

        <button class="_button --text --short _margin-none _font-small"
        @click="clear"
        >clear</button> -->
        <!-- {{ hasWritten }} -->
      </div>
    </div>





    <!-- session story text content -->
    <div class="Renderer-content" v-if="session.length > 0"
        :class="typeface"
      >
      <p class="Fragment _margin-bottom" v-for="fragment of session" :key="`${fragment.seshId}`">
        {{fragment.string}}
        <!-- {{fragment.time.toString()}} -->
        <!-- <div class="_font-smaller">{{fragment.count}}</div> -->
      </p>
    </div>

    <div class="Renderer-cta" v-else>
      <div>
        <!-- {{callToWrite}} -->
        <p>Write something magical.</p>
        <p class="">(or drag + drop a save file!)</p>
      </div>
    </div>
    
  </div>
</template> 


<script>

import { mapState, mapGetters } from 'vuex'
import { fullscreenEnter, fullscreenLeave } from '~/assets/helpers'

export default {
  
  data: function () {

    return {
      showOverlay: false,
      callToWrite: "Write something magical.",
    }
  },

  mounted: function () {

  },

  methods: {
    copyContent() {
      const content = this.$store.getters.copyContent
      console.log('copyContent: ', content)

      // if (content)
      //   return content

      // this.$toast.error('Nothing to copy', {duration: 1000} )
      // return undefined
    },

    copySuccess() {
      this.$toast.success('Copied to clipboard', { 
         theme: "primary", 
         position: "top-right", 
         duration : 2000
      })
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

    setFocus() {
      this.$store.dispatch('inputFocus')
    },

    ignoreFocus(e) {
      e.stopPropagation()
    },

    onDrop(e) {
      var files = e.dataTransfer.files;
      e.preventDefault()
      this.$store.dispatch('loadFiles', files)
      this.showOverlay = false
    },

    onDrag(e) {
      e.preventDefault()
      this.showOverlay = true
    },

    onDragLeave(e) {
      e.preventDefault()
      this.showOverlay = false
    },

    toggleLightMode() {
      this.$store.dispatch('toggleLight')
    },

    openFullscreen() {
      fullscreenEnter(this)
    },

    closeFullscreen() {
      fullscreenLeave(this)
    },

    toggleZen() {
      this.$store.dispatch('toggleZen')
    },

    toggleExpand() {
      this.$store.dispatch('toggleExpand')
    },

    rendererClick(e) {
      // deactivate zen if it's on
      if(this.zen)
        this.$store.dispatch('toggleZen')

    }

  },

  computed: {
    ...mapState([
      'sessionName',
      'session',
      'sessionCount',
      'inputCount',
      'fullscreen',
      'lightMode',
      'expand',
      'zen',
      ]),

    ...mapGetters([
      'hasWritten',
      'activeCount',
      'lightModeName',
      'typefaceName',
      ]),

    typeface() {
      return `--${this.typefaceName}`
    },


    expandName() {
      if(!this.expand)
        return "focus"
      return "unfocus"
    },

    zenName() {
      if(!this.zen)
        return "zen"
      return "unzen" // no UI for unzenning, you just click anywhere
    },

    zenClass() {
      if(this.zen)
        return `--zen`
      return ''
    },

    sessionName: {
      get: function () {
        return this.$store.state.sessionName || this.$store.state.defaultName
      },
      // setter
      set: function (str) {
        // const url = `/search/${this.searchString}`
        this.$store.commit('setSessionName', str)
      }
    },
  }

}
</script>



<style lang="scss" scoped>

</style>


