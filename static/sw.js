importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0763989e699120f9afba.js",
    "revision": "f7911ae113838c77cfa0b650ffcaeed4"
  },
  {
    "url": "/_nuxt/0e3664f5bd7586e869cb.js",
    "revision": "2425aeef0d577e479a29d007b5c1ae98"
  },
  {
    "url": "/_nuxt/1fe04d45ccf315f804ec.js",
    "revision": "3751a3ea7b59140cdaa279ce7ad06715"
  },
  {
    "url": "/_nuxt/3eec6138a1da68cc3a7d.js",
    "revision": "69a628bd00b8d47e29f2467a0dc024b3"
  },
  {
    "url": "/_nuxt/4aceae7480051a551b9b.js",
    "revision": "ec6596ab2b92db9c7e75185015123cdd"
  },
  {
    "url": "/_nuxt/55ba8d754b0813dc8695.js",
    "revision": "abcc2ce099b175d3239ffdacc7b2834e"
  },
  {
    "url": "/_nuxt/a4f3b612fef712d49756.js",
    "revision": "a2acd7ad199f66a927f91d5a2e83b06f"
  },
  {
    "url": "/_nuxt/ef0f6e6dd0989ca7826c.js",
    "revision": "40e62d6959ae186968ec3f98b53f3328"
  },
  {
    "url": "/_nuxt/f99564909dfd3c2895e4.js",
    "revision": "3cd583108c73f98798178637ea8f1a6b"
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
