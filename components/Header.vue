
<template>
  <section class="Header _padding-top _padding-bottom --antialiased _width-content-max _margin-center">
    <div class="Header-content _flex-row">


      <div class="Header-left">
        <!-- <router-link to='/' class="logo-link _border-none-i"><img class="logo" src="~/static/nmcoin.png"/></router-link> -->
        <Logotype class="--header" /> <span class="_font-smaller">beta version 3</span>
      </div>

      <div class="_flex-2 _right-sm _width-100">
        <Settings />
      </div>
    </div>
  </section>
</template>


<script>

import Logotype from '~/components/Logotype'
import Settings from '~/components/Settings'

export default {
  data: function () {
    return {
      // searchString: this.$store.state.search.string,
    }
  },

  components: {
    Settings,
    Logotype,
  },

  computed: {

    searchString: {
      get: function () {
        return this.$store.state.searchString
      },
      // setter
      set: function (str) {
        const url = `/search/${this.searchString}`
        this.$store.dispatch('updateCreate', {
          searchSource: 'header',
          searchString: str || '',
          searchUrl: url,
        })
      }
    }
  },

  methods: {
    search(str) {
      console.log('handling search:',this.searchString)
      // const url = `/search/${this.searchString}`
      const url = `/phages`
      // console.log('search url:', url, '?', this.$router.history)
      // $router history push forces a page reload... use window to replace
      // store the searchstring into store?
      if(this.searchString != '')
        this.$router.replace(url)

      // window.location = url;
      // this.$store.dispatch('updateCreate', {
      //   search: {
      //     string: this.searchString,
      //     url: url
      //   }
      // })
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


