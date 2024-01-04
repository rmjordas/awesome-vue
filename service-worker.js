/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ddab8bd76750665846a52c09fb390132"
  },
  {
    "url": "assets/css/0.styles.ac150faa.css",
    "revision": "453a3fa0dad52402e2b20a58de935494"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.ac024f34.js",
    "revision": "88b9f3a2b533bcdfc7a2fc86afccf5ba"
  },
  {
    "url": "assets/js/11.a07079b2.js",
    "revision": "cfcc99905967727bbc22863081689316"
  },
  {
    "url": "assets/js/12.051323e3.js",
    "revision": "94083756877a7fe5b772d78cfed5edc3"
  },
  {
    "url": "assets/js/13.9fac41c8.js",
    "revision": "48e87a37bef09842e655a0cbba8d5e60"
  },
  {
    "url": "assets/js/14.167b5405.js",
    "revision": "d152a82ee6ea9efaaca7b6c2a2f42432"
  },
  {
    "url": "assets/js/15.38a7bc32.js",
    "revision": "4bc2df013fd3e91668bba26291b1ce7a"
  },
  {
    "url": "assets/js/16.9e6f471d.js",
    "revision": "da39e410dfce81334e443754d54d609a"
  },
  {
    "url": "assets/js/17.b3ac9297.js",
    "revision": "3c40f989ea6e269b5be81de29fec4add"
  },
  {
    "url": "assets/js/18.fe6a7004.js",
    "revision": "7bd1245a63f28e842f442064f8f0e01c"
  },
  {
    "url": "assets/js/19.6603ef96.js",
    "revision": "20d6b8e37e0b2b899d68ff3af89a2ca2"
  },
  {
    "url": "assets/js/2.e80942ca.js",
    "revision": "8471ceef01c26910a7d7d7ce6b8683cb"
  },
  {
    "url": "assets/js/20.3f416f35.js",
    "revision": "60f10cd6a0e524965f300c1d3441d9db"
  },
  {
    "url": "assets/js/21.f5a91189.js",
    "revision": "31a05e0bfa558bd3fe44a34123dc794a"
  },
  {
    "url": "assets/js/22.41bc76f4.js",
    "revision": "8cfd9c3d439f7d695d90c55f77631d53"
  },
  {
    "url": "assets/js/23.043d7ea9.js",
    "revision": "dca42ef64cb269e9b3b14a17fcbb602d"
  },
  {
    "url": "assets/js/24.c747e259.js",
    "revision": "ab06376fb2871500fafb69e7d7e80720"
  },
  {
    "url": "assets/js/25.f99d0882.js",
    "revision": "875435bdaccfccf20ace0ac80145cd8a"
  },
  {
    "url": "assets/js/26.b91a8ea2.js",
    "revision": "ea93e03b0d86e0a75b8103e38b311879"
  },
  {
    "url": "assets/js/27.8bda6a42.js",
    "revision": "e546fd4f3b9892856bcd824349a8bb3b"
  },
  {
    "url": "assets/js/28.b3def227.js",
    "revision": "561dea058115fb9984bc7d9060eeb6a8"
  },
  {
    "url": "assets/js/29.1fb5f022.js",
    "revision": "85c09a57abd54aadf1b8c1264403dff1"
  },
  {
    "url": "assets/js/3.fe6d7168.js",
    "revision": "c7ff5da4f22d504343294d4110eb54cf"
  },
  {
    "url": "assets/js/30.5224c3cb.js",
    "revision": "730ffcec27db5fd7c32cd0d7697bdc3a"
  },
  {
    "url": "assets/js/31.b9851820.js",
    "revision": "93e29b642f9e2f0a2497b40cf0bc5e49"
  },
  {
    "url": "assets/js/32.2198a4ab.js",
    "revision": "a5a06f5e7de0cbad48dcd57258a71010"
  },
  {
    "url": "assets/js/33.a7874a2f.js",
    "revision": "5cc6dd35f3bacf9b6e8ad32066b504c3"
  },
  {
    "url": "assets/js/34.957f3f5e.js",
    "revision": "2fdb6c1c4958faa4022f4785329f8e6e"
  },
  {
    "url": "assets/js/35.22280b3b.js",
    "revision": "69058a7982ae32373861466114c7cf67"
  },
  {
    "url": "assets/js/36.80c37f35.js",
    "revision": "9cb6e49c7433b123bf082dcc0b64036d"
  },
  {
    "url": "assets/js/37.bd9a1c0d.js",
    "revision": "7d9a8ab2853e028024f3ad04e24210d2"
  },
  {
    "url": "assets/js/38.0091b02d.js",
    "revision": "e124a58ada4c2b322ac9355832c3116e"
  },
  {
    "url": "assets/js/39.d6af504c.js",
    "revision": "4e89f91b614443f7fcf7febbb2164ed3"
  },
  {
    "url": "assets/js/4.e28d717d.js",
    "revision": "61c330ee491fa4219741dae56b28d52d"
  },
  {
    "url": "assets/js/40.c1e6adef.js",
    "revision": "a750044299a714d2c07b63c0befbbb56"
  },
  {
    "url": "assets/js/41.8c3124c8.js",
    "revision": "9cab43ca54de90ddd554bcabfd48080f"
  },
  {
    "url": "assets/js/42.68c9867e.js",
    "revision": "336d03ac3df86373a789019335d9e94a"
  },
  {
    "url": "assets/js/43.9e0f47f1.js",
    "revision": "0fb29d0adaabbf9ad8b4fea3f7ed1664"
  },
  {
    "url": "assets/js/44.5d4bb700.js",
    "revision": "dfcf06a26e51bcddc2a99547ff977028"
  },
  {
    "url": "assets/js/45.50ca9c38.js",
    "revision": "8617005ccb457fc57771e8a2915b3705"
  },
  {
    "url": "assets/js/46.d4c0cea6.js",
    "revision": "e7de189054cb3bad415f7ee68e55cd15"
  },
  {
    "url": "assets/js/47.f636a549.js",
    "revision": "ba4b9c53681e022e7c4ff2cff96ba093"
  },
  {
    "url": "assets/js/48.b1a18a2c.js",
    "revision": "31f6857d003aa890b71c79d7e38fd402"
  },
  {
    "url": "assets/js/49.c5e26dfa.js",
    "revision": "29f64cb86a50a5bea8ad20aa6e9f2e95"
  },
  {
    "url": "assets/js/5.2afffd05.js",
    "revision": "c405923ea9a0a75060900682faf7a8ff"
  },
  {
    "url": "assets/js/50.11a27bbb.js",
    "revision": "80ab19d5968d36edce215a9a3a435d07"
  },
  {
    "url": "assets/js/51.cb7d8064.js",
    "revision": "26ce18b6e840fc333673ff86ad44ffc4"
  },
  {
    "url": "assets/js/52.2027deec.js",
    "revision": "82c0cb8a4d36c0a5f5703ae29f673f8c"
  },
  {
    "url": "assets/js/53.35477a7a.js",
    "revision": "f5f821671087129f0eb664524cbff7bd"
  },
  {
    "url": "assets/js/54.142c8479.js",
    "revision": "d414f3114ecd4a269497fd17941de8a5"
  },
  {
    "url": "assets/js/55.6d8eb8d8.js",
    "revision": "84427b5725fff408cb736d3ca88d4c0b"
  },
  {
    "url": "assets/js/56.20eb2e94.js",
    "revision": "f9ee95581dbbe750e84a94a2870f04e5"
  },
  {
    "url": "assets/js/6.166c5878.js",
    "revision": "1295d10a35fe017e418fad689081c20d"
  },
  {
    "url": "assets/js/7.b10aa9ac.js",
    "revision": "02301f8ffb3965b651e92eb5718d7923"
  },
  {
    "url": "assets/js/8.bc4793cf.js",
    "revision": "8415db084036391e56a6cb17b22a2111"
  },
  {
    "url": "assets/js/app.4a80ad1b.js",
    "revision": "8262fbf548e622b1abb0dccc89199464"
  },
  {
    "url": "assets/js/vendors~docsearch.76a29222.js",
    "revision": "9637d52e5fc6d45ad3e65cfe36c64139"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "c8c18ae8c7e57739dbb56ee41c6fd1b2"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "2ecd7dbcf3dee576aa695a5adb320566"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "efd5f89afd6be8506d376f51af9d428f"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "87518f24c0918ef99dbba6d70390fcbb"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "132df19996b31934923b54d73b7496b5"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "005e446b30e48385e1363fe5a34ef708"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "a1e770e873e5a7c5abc61f8a7a283446"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "6dd064fa6d4bf8d36d2a2a827ae3506a"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "e6d47bf0e0e5143a6fc8505196ece4dd"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "b48c7f1b3e438156030d111a55d68937"
  },
  {
    "url": "googleb0cb4a6e76619924.html",
    "revision": "997b21b41e019120a987acc0a2de5a22"
  },
  {
    "url": "hero.png",
    "revision": "b0451959428f1596d579dd0a4165e5b9"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "18bd5130d1d2c560f7a64a810f10b567"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "ca0e5ccce3e6597c6a92389767d386f2"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "a0a146811db506577fc59becb1e9df8a"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "eaad287782a03fec4918c03df6f2b1d3"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "81480ca682e35a952f4d63bea5471718"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "200d639632824824997b3658a17ae3ad"
  },
  {
    "url": "index.html",
    "revision": "c9b30c91643b2d92f529f7181af7d927"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "d92843f8a5ee9facef88dc427bd28547"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "996c36b25a93bd84379a204535fac968"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "d6477f40c05e77ca6d7775434e1be75f"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "f81721a22da0658b741b31262ae5c1b9"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "c06d9d41d375a677e6fc9aae87e5a2d0"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "c98fefbb0ef063c32e9daead7a69be66"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "a886f1f84becb0dfdc3d5981294a08a2"
  },
  {
    "url": "resources/books.html",
    "revision": "a545ab6d7cd0062110fd130ae0bf6c98"
  },
  {
    "url": "resources/community.html",
    "revision": "938d6ab7934863befa94518cb3c39731"
  },
  {
    "url": "resources/conferences.html",
    "revision": "c88bd5dea6d03d2169bdf4371243ad23"
  },
  {
    "url": "resources/courses.html",
    "revision": "b3e96d8de3fb0097c56829d3e09c1996"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "5fb93fc30957c7638d87e4918851140d"
  },
  {
    "url": "resources/examples.html",
    "revision": "01820b0e69b08a3b8872aa76098b4c91"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "e5ad6f39a8c22ba92629b6d15d32864c"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "567f718d1d35709832bf1ee8f6bd72b3"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "df859f72f247107c2e744cc26c9ab9b3"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "14d1eb383012b4156009535cca833e98"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "ae9a6d7e1bbf0e4805891ea028606619"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "a7b99080a56494bb67ea6cae94e0bccd"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "91113030c63ef51ad836fbe3ca0d53d3"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
