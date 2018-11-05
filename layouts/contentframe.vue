<template>
  <div class="container" :class="`--${lightModeVal}`" id="top" >
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

  watch: {
    '$route' (to, from) {
      // react to route changes...
      // console.log('ROUTE OBJECT', to, from)
      const _this = this
      let scrolled = false
      this.$nextTick(function () {
        if(_this.$route.hash && !scrolled) {
          // console.log('-- hash scroll')
        } 
        if(_this.$route.hash) {
          const scroll = _.throttle(function (e) {
            VueScrollTo.scrollTo(_this.$route.hash, 500, {
             offset: -20
           })
          }, 300)
          scroll()
        }
        scrolled = true
      })

    }
  },


  // link intercept idea from: https://github.com/nuxt/nuxtjs.org/blob/master/components/HtmlParser.vue
  
  methods: {
    // handleScroll: _.throttle(function (e) {
    //   // console.log(e)
    //   this.scrollY = window.scrollY
    // }, 200),
    handleScroll(e) {
      if(process.browser) {
        const _this = this
        _.throttle(function (e) {
          _this.scrollY = window.scrollY
        }, 200)()
      }
    },

  },

  computed: {
    ...mapState([
      'searchString'
      ]),
    ...mapGetters([
      'lightModeVal'
      ]),
  },

  created () {
    if(process.browser)
      window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    if(process.browser)
      window.removeEventListener('scroll', this.handleScroll);
  }
}




</script>


<style lang="scss" scoped>
</style>
