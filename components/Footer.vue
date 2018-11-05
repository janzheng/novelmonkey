<template>
  <div class="Footer container --antialiased " id="footer">
    <Logotype class="_padding-top-2 _center _margin-center" />
    <div class="_width-content-paragraph _margin-center _center _padding-2">
      <p>novel monkey is experimental, so please back up your work!</p>
      <p>
        Read <router-link to="/about">more about this project</router-link>, our <router-link to="/policies">privacy policy and terms of use</router-link>, or tweet at me <a href="https://twitter.com/thenovelmonkey">@thenovelmonkey</a> or email me at <a href="mailto:hello@zeee.co">hello@zeee.co</a>.
      </p>
      <p>
        Please support <a href="https://store.nanowrimo.org/collections/donate/">NaNoWriMo</a>!
      </p>
      <p>This is a side project of <a href="http://zeee.co">zeee.co</a>.</p>
      <p>* this site isn't affiliated with NaNoWriMo</p>
      
    </div>
    <Chimp class="_center _margin-center _margin-bottom-2" />
  </div>
</template>


<script>

import Logotype from '~/components/Logotype'
import Chimp from '~/components/Chimp'

export default {

  components: {
    Logotype,
    Chimp
  },
  props: [],

  computed: {
    thisYear() {
      let date = new Date
      return date.getFullYear()
    }
  },


}
</script>

<style lang="scss" scoped>
</style>
