<template>
  <div class="container" :class="`--${lightModeName}`" id="top" >
    <div class="content-top _relative" >

      <Header/>
      <div class="_width-content-max _margin-center _margin-bottom" >
        <nuxt/>
      </div>
    </div>

    <!-- <no-ssr> -->
      <!-- <Policy/> -->
    <!-- </no-ssr> -->
    <Footer/>
  </div>
</template>


<script>

import { mapState, mapGetters } from 'vuex'
import VueScrollTo from 'vue-scrollto'

import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import Policy from '~/components/Policy.vue'

// import Mailchimp from '~/components/Mailchimp.vue'


export default {

  components: {
    Header,
    Footer,
    Policy,
    // Mailchimp,
  },

  head () {
    return {
      title: this.$store.state.pageName || 'novel monkey',
    }
  },

  async asyncdata () {
  },


  data () {
    return {
      scrollY: 0,
      route: '',
      // searchString: 'testStr'
      // children: route ? route.children : undefined,
    }
  },

  beforeUpdate () {
    const route = this.$router.options.routes.find((route) => {
      return route.path === this.$route.path
    })

    // console.log('new route', route)
    this.route = route
  },


  // link intercept idea from: https://github.com/nuxt/nuxtjs.org/blob/master/components/HtmlParser.vue
  
  methods: {
  },

  computed: {
    ...mapGetters([
      'lightModeName'
      ]),
  },

  created () {
    // if(process.browser)
      // window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    // if(process.browser)
      // window.removeEventListener('scroll', this.handleScroll);
  }
}




</script>


<style lang="scss" scoped>
</style>
