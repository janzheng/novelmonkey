importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.js",
    "revision": "fbd9be44da3d25bb099a9c4ebd716a9c"
  },
  {
    "url": "/_nuxt/commons.app.js",
    "revision": "c53f55ae4d5406e349e035b4d4a08185"
  },
  {
    "url": "/_nuxt/pages/About.js",
    "revision": "8fcd487e2de6dd6d75c2bc365ade1ca5"
  },
  {
    "url": "/_nuxt/pages/Contact.js",
    "revision": "91f5f5b0f2c3d03a879889924f9c0558"
  },
  {
    "url": "/_nuxt/pages/Feedback.js",
    "revision": "c17a5556896fa3850c8a00af3a1abccb"
  },
  {
    "url": "/_nuxt/pages/index.js",
    "revision": "ccde1ee7d8102430cb5e26b5715707ad"
  },
  {
    "url": "/_nuxt/pages/Policies.js",
    "revision": "2809ce98c2009e5d6f6f6128a1713852"
  },
  {
    "url": "/_nuxt/runtime.js",
    "revision": "333709269c811db804075553c477de82"
  },
  {
    "url": "/_nuxt/vendors.app.js",
    "revision": "f4bd9ef9a431643758d363abeb1dbe53"
  }
], {
  "cacheId": "novelmonkey",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('https://api.airtable.com/v0/app0IDN4GEAPBNEjh/.*'), workbox.strategies.cacheFirst({"cacheableResponse":{"statuses":[0,200]}}), 'GET')

workbox.routing.registerRoute(new RegExp('https://fonts.googleapis.com/.*'), workbox.strategies.cacheFirst({"cacheableResponse":{"statuses":[0,200]}}), 'GET')

workbox.routing.registerRoute(new RegExp('https://fonts.gstatic.com/.*'), workbox.strategies.cacheFirst({"cacheableResponse":{"statuses":[0,200]}}), 'GET')
