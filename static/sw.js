importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.js",
    "revision": "6b87a6b18faed5d600218ca7cb2f020d"
  },
  {
    "url": "/_nuxt/commons.app.js",
    "revision": "5d09bb3d53259ac6fab52f24157ee73f"
  },
  {
    "url": "/_nuxt/pages/About.js",
    "revision": "cf3e58c03f1747b179b23548421c058f"
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
    "revision": "fab4b4e560e3ca45b6bcbd334f9cecc9"
  },
  {
    "url": "/_nuxt/pages/Policies.js",
    "revision": "5e75e53cbcf1a03ec1e4b0c90cd7d9d4"
  },
  {
    "url": "/_nuxt/runtime.js",
    "revision": "333709269c811db804075553c477de82"
  },
  {
    "url": "/_nuxt/vendors.app.js",
    "revision": "5542529eae956be1e982b758e2417957"
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
