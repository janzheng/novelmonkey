<template>
  <div class="Footer container --antialiased " >
    <Logotype class="_padding-top-2 _center _margin-center" />
    <div class="_width-content-paragraph _margin-center _center _padding-2">
      <p>This project is about helping eager writers finish their NanoWriMo!
      <br/>If you like this project, go <a href="https://store.nanowrimo.org/collections/donate/">support NaNoWriMo</a>!*
      </p>
      <p>novel monkey is experimental — please back up your work!
      </p>
      <p>
        Read <router-link to="/about">more about this project</router-link> or
        <br/>take a peek at the <router-link to="/policies">privacy policy and terms of use</router-link>
      </p> 
      <p>If you have suggestions or questions, <a href="https://twitter.com/thenovelmonkey">@thenovelmonkey</a> or <a href="mailto:hello@zeee.co">hello@zeee.co</a>.
      </p>
      <p class="_padding-top-2">This is a side project of <a href="http://zeee.co">zeee.co</a>.</p>
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
