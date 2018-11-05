

<!-- Used to render the current session -->
<template>
  <div class="Renderer" id="renderer"
       v-on:drop="onDrop"
       v-on:dragenter="onDrag"
       v-on:dragover="onDrag"
       v-on:dragleave="onDragLeave"
       v-on:click="setFocus"
  >
    <div class="Renderer-overlay" :class="showOverlay ? '--show' : ''"
    >
      <p>drop the novelmonkey.save file!</p>
    </div>

    <!-- top menu -->
    <div class="Renderer-menu _flex-row _margin-bottom-half _right" 
      :class="hasWritten ? '' : '_opacity-10'"
      v-on:click="ignoreFocus"
    >
      <div class="_flex-grow">
        <input v-model.trim="sessionName" />
      </div>

      <div class="_flex-1">
        <button class="_button --text --short _margin-none _font-small"
          v-clipboard:copy="copyContent"
          v-clipboard:success="copySuccess"
          v-clipboard:error="copyError"
        >copy</button>

        <button class="_button --text --short _margin-none _font-small"
        download="novelmonkey.save"
        @click="download"
        >download</button>

        <button class="_button --text --short _margin-none _font-small"
        @click="clear"
        >clear</button>
        <!-- {{ hasWritten }} -->
      </div>
    </div>

    <!-- session story text content -->
    <div class="Renderer-content" v-if="session.length > 0"
      >
      <div class="Fragment _margin-bottom" v-for="fragment of session" :key="`${fragment.seshId}`">
        {{fragment.string}}
        <!-- {{fragment.time.toString()}} -->
        <!-- <div class="_font-smaller">{{fragment.count}}</div> -->
      </div>
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

export default {

  props: ['inline'],
  
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

  },

  computed: {
    ...mapState([
      'sessionName',
      'session',
      'sessionCount',
      'inputCount',
      ]),

    ...mapGetters([
      'hasWritten',
      'activeCount',
      ]),

    sessionName: {
      get: function () {
        return this.$store.state.sessionName || 'No Name Note'
      },
      // setter
      set: function (str) {
        // console.log('setting:', str)
        // const url = `/search/${this.searchString}`
        this.$store.commit('setSessionName', str)
      }
    },
  }

}
</script>



<style lang="scss" scoped>

</style>


