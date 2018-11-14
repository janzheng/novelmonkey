<template>

  <div class="About _margin-top-2 _margin-bottom-2">
    <section class="narrow copy _margin-center">
      <div class="About-bg Writer Renderer-content">
        <p class="_font-serif" v-html="$md.render(aboutBg || '')"></p>
      </div>

    </section>
  </div>
</template>

<script>


export default {

  components: {
  },

  layout: 'contentframe',
  middleware: 'pageload',
  
  async asyncData({app, env, route, store}) {
    const cytosis = store.state.cytosis
    return {
      aboutBg: app.$cytosis.find('Content.about-bg', store.state.cytosis.tables)[0]['fields']['Markdown'],
    }
  },

  data: function () {
    return {
      // content: this.$store.state.Content,
    }
  },

  mounted: function () {
  },

  methods: {
  }

}
</script>

<style lang="scss" scoped>

</style>

