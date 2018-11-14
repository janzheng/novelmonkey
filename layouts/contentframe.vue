<template>
  <div class="Content container" :class="`--${lightModeName}`" id="top" >
    <div class="Content-top _relative" >

      <Header/>
      <div class="_width-content-max _margin-center _margin-bottom" >
        <nuxt/>
      </div>
    </div>

    <no-ssr>
      <!-- super annoying -->
      <!-- <script>
        "use strict";

        !function() {
          var t = window.driftt = window.drift = window.driftt || [];
          if (!t.init) {
            if (t.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));
            t.invoked = !0, t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ], 
            t.factory = function(e) {
              return function() {
                var n = Array.prototype.slice.call(arguments);
                return n.unshift(e), t.push(n), t;
              };
            }, t.methods.forEach(function(e) {
              t[e] = t.factory(e);
            }), t.load = function(t) {
              var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement("script");
              o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
              var i = document.getElementsByTagName("script")[0];
              i.parentNode.insertBefore(o, i);
            };
          }
        }();
        drift.SNIPPET_VERSION = '0.3.1';
        drift.load('rkthpvfk2igf');
        </script> -->
        <!-- End of Async Drift Code -->
    </no-ssr>
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
