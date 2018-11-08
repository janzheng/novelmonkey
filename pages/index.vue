<template>

  <div class="Home" id="top">

    <div class="Home-intro">
    </div>

    <Writer class="--inline" :inline="true" />
    <div class="BackTop" v-scroll-to="'#top'" v-if="showBackTop">go back up</div>

  </div>
</template>




<script>

import { mapState } from 'vuex'
import Writer from '~/components/Writer'

let listen

export default {

  components: {
    Writer,
  },

  layout: 'contentframe',
  // middleware: 'pageload',

  async asyncData({app, env, route, store}) {
    // console.log('asyncdata store: ', store.state.cytosis)
    // const cytosis = await store.dispatch('loadCytosis', {
    //   env,
    //   tableIndex: 'static',
    // })
    return {
      postUrl: env.ext_handler,
      cytosis: store.state.cytosis,
      intro: '', // app.$cytosis.find('Content.home-intro-new', store.state.cytosis.tables)[0]['fields']['Markdown']
    }
  },

  data: function () {
    // console.log('data cyt:', this.$store.state.cytosis) 
    return {
      // cytosis: this.$store.state.cytosis,
    }
  },
  
  mounted: function () {
    console.log('mounted')

    if(listen) {
      console.log('listen already exist!?')
    }
    
    let listen = document.addEventListener('keydown', (e) => {

      // console.log('key:', e.keyCode, 'meta:', e.metaKey, 'ctrl:', e.ctrlKey )
      // save command listener
      // ctrl + s or meta + s
      if (e.keyCode == 83 && (e.ctrlKey || e.metaKey)) {
        e.preventDefault()
        // console.log('save trigger' )
        this.$store.dispatch('generateSave')
      }

      // esc command listener
      if (e.keyCode == 27) {
        // console.log('esc key trigger')
        this.$store.dispatch('escape')
      }
    });


  },

  computed: {
    ...mapState([
      'Content',
      'session'
      ]),

    showBackTop() {
      if(this.session.length > 5)
        return true
      // don't show back top if no content
    },
  },

  methods: {
    // rawContent(findStr) {
    //   // return this.cytosis.find(findStr)[0] && this.cytosis.find(findStr)[0].fields.Markdown ? this.cytosis.find(findStr)[0].fields.Markdown : ''

    //   // return this.$md.render( this.cytosis.find(findStr)[0] && this.cytosis.find(findStr)[0].fields.Markdown ? this.cytosis.find(findStr)[0].fields.Markdown : '')
    // },
    // content(findStr) {
    //   console.log ('cczzzzcc', this.cytosis, orange.find)
    //   // console.log ('???', this.$store.state.cytosis.get('recX0na4jnDb3ThuZ' ))
    //   if (!this.cytosis.find) { // wait for init
    //     console.log('no cytosis?', this.cytosis,)
    //     return ''
    //   }

    //   const record = this.cytosis.find(findStr)[0]
    //   if(record.fields.Markdown) {
    //     return this.$md.render( record.fields.Markdown )
    //   }

    //   return this.Content[0].fields.Markdown // if error
    // }
  },


}
</script>

<style>
</style>
