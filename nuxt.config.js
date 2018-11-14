
// note: nuxt requires Node 8+ to run properly 






// https://github.com/joshbuchea/HEAD  https://gethead.info/
// these are the default social sharing items
// make sure to use the Head component for generated data
const site_policy = '1.0.0'
const site_ga = 'UA-83939324-1' 
const site_url = 'https://novelmonkey.com'
const site_name = 'novel monkey';
const site_twitter = '@novelmonkey';
const site_twitter_creator = '@janistanian';
const site_color = '#F3FBFD';
const site_title = 'novel monkey';
const site_description = 'A writing tool that "takes the intimidation away from staring at the blank page".';

const site_ico = '/icon.png';
const site_image = '/share_img.png';
const site_search = 'index,follow';
const site_author = 'Jan Zheng';
const page_name = ''; // placeholder for the copy+paste

const site_fb = '172737416727733'; // buildAtl fb id

const offline = false;
const mode = 'spa' // loads airtable dynamically
// const mode = 'universal' // loads airtable during build-time only (any changes to airtable won't be reflected live)


module.exports = {
  // mode: 'universal', // use this for deployment; need to rebuild the site every time airtable content changes
  offline: offline,
  mode: mode, // for development, or for real-time airtable changes
  env: {
    offline: offline,
    mode: mode,
    site_fb: site_fb,
    airtable_api: 'keyAe6M1KoPfg25aO',  // cytosisreader@zeee.co handler
    airtable_base: 'app0IDN4GEAPBNEjh',
    site_policy: site_policy,
    ext_handler: 'https://wt-ece6cabd401b68e3fc2743969a9c99f0-0.sandbox.auth0-extend.com/phdir-input'
  },

  render: {
    // https://nuxtjs.org/api/configuration-render#resourcehints
    // disable prefetch of all the pages; saves bg download data
    // resourceHints: false,

    // Content-Security-Policy
    // https://nuxtjs.org/api/configuration-render#csp
    // csp: {
    //   hashAlgorithm: 'sha256',
    //   allowedSources: undefined,
    //   policies: undefined
    // }

  },



  /*
      Headers of the page
      'hid' is a 'head identifier' and used as a unique key
  */
  head: {
    title: site_title,
    meta: [

      
      { charset: 'utf-8' },
      // { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' }, // max-scale prevents auto-zoom on mobile, may prevent zoom
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      { hid: 'description', name: 'description', content: site_description },
      { hid: 'theme-color', name: 'theme-color', content: site_color },

      { hid: 'search-google', name: 'robots', content: site_search },
      { hid: 'search-robots', name: 'googlebot', content: site_search },
      // { hid: 'nositelinkssearchbox', name: 'google', content: 'nositelinkssearchbox' },
      // { hid: 'notranslate', name: 'google', content: 'notranslate' },

      // Page-Specific

      // Facebook
      // <meta property="fb:app_id" content="123456789">
      { hid: 'fb-app_id', property: 'fb:app_id', content: site_fb },
      // <meta property="og:url" content="http://example.com/page.html">
      { hid: 'og-url', property: 'og:url', content: site_url + '/' + page_name },
      // <meta property="og:type" content="website">
      { hid: 'og-type', property: 'og:type', content: 'website' },
      // <meta property="og:title" content="Content Title">
      { hid: 'og-title', property: 'og:title', content: site_title },
      // <meta property="og:image" content="http://example.com/image.jpg"> 
      // FB & Twitter work best with: 1200 X 675 
      { hid: 'og-image', property: 'og:image', content: site_url + site_image },
      // <meta property="og:description" content="Description Here">
      { hid: 'og-description', property: 'og:description', content: site_description },
      // <meta property="og:site_name" content="Site Name">
      { hid: 'og-site_name', property: 'og:site_name', content: site_name },
      // <meta property="og:locale" content="en_US">
      { hid: 'og-locale', property: 'og:locale', content: 'en_US' },
      // <meta property="article:author" content="">
      { hid: 'article-author', property: 'article:author', content: site_author },

      // Twitter Card
      // <meta name="twitter:card" content="summary"> > summary or summary_large_image
      { hid: 'twitter-card', property: 'twitter:card', content: 'summary' },
      // <meta name="twitter:site" content="@site_account">
      { hid: 'twitter-site', property: 'twitter:site', content: site_twitter },
      // <meta name="twitter:creator" content="@individual_account">
      { hid: 'twitter-creator', property: 'twitter:creator', content: site_twitter_creator },
      // <meta name="twitter:url" content="http://example.com/page.html">
      { hid: 'twitter-url', property: 'twitter:url', content: site_url + '/' + page_name },
      // <meta name="twitter:title" content="Content Title">
      { hid: 'twitter-title', property: 'twitter:title', content: site_title },
      // <meta name="twitter:description" content="Content description less than 200 characters">
      { hid: 'twitter-description', property: 'twitter:description', content: site_description },
      // <meta name="twitter:image" content="http://example.com/image.jpg">
      { hid: 'twitter-image', property: 'twitter:image', content: site_url + site_image },


    ],
    link: [

      // <!-- Helps prevent duplicate content issues -->
      // <link rel="canonical" href="http://example.com/">
      { hid: 'canonical', rel: 'canonical', href: site_url+'/' },

      { rel: 'icon', type: 'image/png', href: site_ico }, // <link rel="icon" sizes="192x192" href="/path/to/icon.png">
      { rel: 'apple-touch-icon', href: site_ico }, // default resolution is 192x192 <link rel="apple-touch-icon" href="/path/to/apple-touch-icon.png">
      { rel: 'mask-icon',  href: site_ico, color: site_color}, // <link rel="mask-icon" href="/path/to/icon.svg" color="blue"> <!-- Safari Pinned Tab Icon -->
      // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lora|Poppins:300,400,700' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=EB+Garamond' }
    ],
  },







      /* 
          Esoterica
          https://gethead.info/#recommended-minimum

          <!-- Allows control over how referrer information is passed -->
          { hid: 'referrer', name: 'referrer', content: 'no-referrer' },

          <!-- Disable automatic detection and formatting of possible phone numbers -->
          { hid: 'format-detection', name: 'format-detection', content: 'telephone=no' },

          <!-- Specifies the document to appear in a specific frame -->
          { hid: 'http-equiv', http-equiv: 'Window-Target', content: '_value' },

          <!-- Geo tags https://en.wikipedia.org/wiki/ICBM_address#Modern_use -->
          <meta name="ICBM" content="latitude, longitude">
          <meta name="geo.position" content="latitude;longitude">
          <meta name="geo.region" content="country[-state]"><!-- Country code (ISO 3166-1): mandatory, state code (ISO 3166-2): optional; eg. content="US" / content="US-NY" -->
          <meta name="geo.placename" content="city/town"><!-- eg. content="New York City" -->
    
      */
      // { hid: 'referrer', name: 'referrer', content: 'no-referrer' },
      // { hid: 'format-detection', name: 'format-detection', content: 'telephone=no' },
      // { hid: 'http-equiv', http-equiv: 'Window-Target', content: '_value' },

      // { hid: 'icbm', name: 'ICBM', content: 'latitude, longitude' },
      // { hid: 'geoposition', name: 'geo.position', content: 'latitude;longitude' },
      // { hid: 'georegion', name: 'geo.region', content: 'US-NY' },
      // { hid: 'geoplacename', name: 'geo.placename', content: 'New York City' },


      // Link
      // <!-- Links to an AMP HTML version of the current document -->
      // <link rel="amphtml" href="http://example.com/path/to/amp-version.html">
      // { hid: 'amphtml', rel: 'amphtml', href: 'http://example.com/path/to/amp-version.html' },

      // <!-- Links to information about the author(s) of the document -->
      // <link rel="author" href="humans.txt">

      // <!-- Refers to a copyright statement that applies to the link's context -->
      // <link rel="license" href="copyright.html">

      // <!-- Gives a reference to a location in your document that may be in another language -->
      // <link rel="alternate" href="https://es.example.com/" hreflang="es">

      // <!-- Provides information about an author or another person -->
      // <link rel="me" href="https://google.com/profiles/thenextweb" type="text/html">
      // <link rel="me" href="mailto:name@example.com">
      // <link rel="me" href="sms:+15035550125">

      // <!-- The first, last, previous, and next documents in a series of documents, respectively -->
      // <link rel="first" href="http://example.com/article/">
      // <link rel="last" href="http://example.com/article/?page=42">
      // <link rel="prev" href="http://example.com/article/?page=1">
      // <link rel="next" href="http://example.com/article/?page=3">

      // <!-- Feeds -->
      // <link rel="alternate" href="https://feeds.feedburner.com/example" type="application/rss+xml" title="RSS">
      // <link rel="alternate" href="http://example.com/feed.atom" type="application/atom+xml" title="Atom 0.3">

      // <!-- Prefetching, preloading, prebrowsing -->
      // <!-- More info: https://css-tricks.com/prefetching-preloading-prebrowsing/ -->
      // <link rel="dns-prefetch" href="//example.com/">
      // <link rel="preconnect" href="https://www.example.com/">
      // <link rel="prefetch" href="https://www.example.com/">
      // <link rel="prerender" href="http://example.com/">
      // <link rel="preload" href="image.png" as="image">











  /*
  ** Customize the progress bar color
  */
  loading: { color: site_color },
  /*
  ** Build configuration
  */


  plugins: [
    // '~plugins/filters.js',
    // '~plugins/vue-highlightjs.js',
    // { src: '~/plugins/plugintest.js', ssr: false }
    // { src: '~/plugins/policy.js', ssr: false },
    // { src: '~/plugins/markdownit' },
    // ['~/plugins/cytosis'],
    // ['~/plugins/date'],
    // { src: '~/plugins/dynamicData.js' } // done as middleware instead
    
    { src: '~/plugins/policy.js', ssr: false },
    // { src: '~/plugins/hotjar.js', ssr: false }, // need to link this to policy
    { src: '~/plugins/markdownit.js' },
    { src: '~/plugins/cytosis.js' },
    { src: '~/plugins/date.js' },
    { src: '~/plugins/clipboard.js' },
    { src: '~/plugins/fscreen.js' },
    { src: '~/plugins/filters.js' },
    // { src: '~/plugins/scrollto.js' },
  ],

  modules: [
    // '@nuxtjs/font-awesome',
    ['@nuxtjs/google-analytics', {
      id: site_ga,
      disabled: true // gdpr: https://medium.com/dailyjs/google-analytics-gdpr-and-vuejs-e1bd6affd2b4
    }],
    // ['@nuxtjs/markdownit', {
    //   html: true,
    // }],
    ['@nuxtjs/toast', {
      html: true,
    }],
    '@nuxtjs/pwa',
    'nuxt-device-detect',
    // '@nuxtjs/workbox',
    // '@nuxtjs/manifest',
  ],

  manifest: {
    name: 'novel monkey',
    short_name: 'novelmonkey',
    display: 'standalone',
    start_url: 'https://novelmonkey.com/',
    theme_color: site_color,
    background_color: '#333333',
    lang: 'en',
    // icons: PWAIcons
  },

  workbox: {
    runtimeCaching: [
    
      {
          urlPattern: 'https://api.airtable.com/v0/app0IDN4GEAPBNEjh/.*',
          handler: 'cacheFirst',
          method: 'GET',
          strategyOptions: {cacheableResponse: {statuses: [0, 200]}}
      },
      {
          urlPattern: 'https://fonts.googleapis.com/.*',
          handler: 'cacheFirst',
          method: 'GET',
          strategyOptions: {cacheableResponse: {statuses: [0, 200]}}
      },
      {
          urlPattern: 'https://fonts.gstatic.com/.*',
          handler: 'cacheFirst',
          method: 'GET',
          strategyOptions: {cacheableResponse: {statuses: [0, 200]}}
      },
    ]
  },

  // markdownit: {
  //   // preset: 'default',
  //   injected: false, // markdownit.js plugin takes over injection
  //   // to use custom injection, remove  if (_options.injected === true) { block from @nuxtjs/markdownit/index.js
  //   // use the custom plugin/markdownit to inject properly; the official thing is broken
  //   // injected: true, // commented out to allow attrs in lang="md" blocks
  //   // BUG: in @nuxtjs/markdownit/index.js: this needs to be set: 
  //   //      options: Object.assign({}, options, this.options.markdownit)
  //   //      this allows lang="md" to continue processing plugins like markdown-it-attrs, otherwise it doesn't do that anymore
  //   // otherwise plugins will break
  //   html: true,
  //   typographer: true,
  //   linkify: true,
  //   breaks: true,
  //   use: [
  //     'markdown-it-attrs',
  //     ['markdown-it-attrs', {'leftDelimiter': '[', 'rightDelimiter': ']'}]
  //   ],
  // },

  toast: { 
    position: 'top-right' 
  },

  build: {
    styleResources: {
      options: {
        // See https://github.com/yenshih/style-resources-loader#options
        // Except `patterns` property
      },
      scss: [
      // './assets/css/shared.scss' // shared files
      ],
    },

    babel: {
      presets: ['es2015', 'stage-2'],
      plugins: ["transform-vue-jsx", "transform-runtime", "transform-object-rest-spread"],
    },
    // vendor: ['cytosis'],
    extend (config, { isDev }) {
      if (isDev && process.client) {
        config.module.rules.push(
        {
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /(node_modules)/
        })
      }
    },
    // postcss: false,
    // this enables cssvars
    postcss: [
      require('postcss-cssnext')({
        features: {
          map: false,
          customProperties: false
        }
      })
    ],
  },


  css: [
    // coeur style guide
    // '@/assets/css/settings.scss',
    // '@/node_modules/coeur/styles/index.scss', // this imports EVERYTHING; is going to be huge; overrides 'settings'

    // main project styles
    '@/assets/css/main.scss'
  ],

  router: {
    middleware: 'pageload',
    extendRoutes (routes, resolve) {
      // capsid should resolve anything from phages
      // to people and orgs; easier w/ a uniform id resolver
      routes.push(
        // {
        //   name: 'capsid',
        //   path: '/d/:capsid',
        //   component: resolve(__dirname, 'pages/Dir.vue')
        // },
      )
    },
  },
  generate: {
    fallback: true, // if you want to use '404.html'
  },

}





