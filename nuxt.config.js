const pkg = require('./package')


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

  /*
  ** Headers of the page
  */
  head: {
    // title: pkg.name,
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
  ** Customize the progress-bar color
  */
  loading: { color: site_color },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
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

  /*
  ** Nuxt.js modules
  */
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

  toast: { 
    position: 'top-right' 
  },



  build: {
    // styleResources: {
    //   options: {
    //     // See https://github.com/yenshih/style-resources-loader#options
    //     // Except `patterns` property
    //   },
    //   scss: [
    //   // './assets/css/shared.scss' // shared files
    //   ],
    // },
    analyze: true,

    babel: {
      presets: [
        ['@babel/preset-env', {
          useBuiltIns: 'usage'
        }]
      ], //['es2015', 'stage-2'],
      plugins: ['@babel/plugin-syntax-dynamic-import', '@babel/plugin-transform-typeof-symbol', '@babel/plugin-transform-runtime'],
    //   plugins: ["transform-vue-jsx", "transform-runtime", "transform-object-rest-spread"],
    },
    // // vendor: ['cytosis'],
    // extend (config, { isDev }) {
    //   if (isDev && process.client) {
    //     config.module.rules.push(
    //     {
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     },
    //     {
    //       test: /\.js$/,
    //       loader: 'babel-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // },
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
