<template>

  <div class="Policies container narrow _margin-center">
    <article class="" v-html="$md.render(intro || '')"></article>
    <!-- body -->
    <div class="_margin-bottom">
      <div><router-link to="#terms">Terms of Use</router-link></div>
      <div><router-link to="#privacy">Privacy Policy</router-link></div>
      <div><router-link to="#cookies">Cookies Policy</router-link></div>
    </div>

    <div class="_margin-bottom-2">
      <article class="Policies-content">
        <div class="" v-html="$md.render(policies || '')"></div>
      </article>
    </div>

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
      intro: app.$cytosis.find('Content.policies-intro', store.state.cytosis.tables)[0]['fields']['Markdown'],
      policies: app.$cytosis.find('Content.site-policy', store.state.cytosis.tables)[0]['fields']['Markdown'],
    }
  },

  data: function () {
    return {
    }
  },

  mounted: function () {
  },

  computed: {
  },


  methods: {
  }

}
</script>

<style lang="scss" scoped>

</style>

