if(!self.define){let e,a={};const n=(n,s)=>(n=new URL(n+".js",s).href,a[n]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=a,document.head.appendChild(e)}else e=n,importScripts(n),a()})).then((()=>{let e=a[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(a[c])return;let r={};const o=e=>n(e,c),t={module:{uri:c},exports:r,require:o};a[c]=Promise.all(s.map((e=>t[e]||o(e)))).then((e=>(i(...e),r)))}}define(["./workbox-5f5b08d6"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/GDwdLEBB8cJ0CBtl2Ibi7/_buildManifest.js",revision:"523d8795ea3840dfd58e2ee4abd7b571"},{url:"/_next/static/GDwdLEBB8cJ0CBtl2Ibi7/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/380.953c9af36fff6d48.js",revision:"953c9af36fff6d48"},{url:"/_next/static/chunks/framework-4556c45dd113b893.js",revision:"4556c45dd113b893"},{url:"/_next/static/chunks/main-fe5006d621aa31cc.js",revision:"fe5006d621aa31cc"},{url:"/_next/static/chunks/pages/_app-3eab254a58c5000c.js",revision:"3eab254a58c5000c"},{url:"/_next/static/chunks/pages/_error-a4ba2246ff8fb532.js",revision:"a4ba2246ff8fb532"},{url:"/_next/static/chunks/pages/index-abca507d10f9016d.js",revision:"abca507d10f9016d"},{url:"/_next/static/chunks/polyfills-0d1b80a048d4787e.js",revision:"40ccea369337cec877151c906f22814d"},{url:"/_next/static/chunks/webpack-e580c2d24f248769.js",revision:"e580c2d24f248769"},{url:"/images/favicon.png",revision:"5ef1bb53fb4f08f2103c266b852133f1"},{url:"/images/meta-thumb.jpg",revision:"fbc8700562231010c1bea98d385529b8"},{url:"/locales/en/common.json",revision:"8878702f196bb350c14e0ce388680918"},{url:"/locales/pt-BR/common.json",revision:"655853dba0b8ab14df790bc1565002c6"},{url:"/pwa/android-chrome-192x192.png",revision:"6e240a1133f4bb7a4dbd0c2be5f82d25"},{url:"/pwa/android-chrome-192x192.png~",revision:"5794f7706b200ffa459b905f340498ef"},{url:"/pwa/android-chrome-384x384.png",revision:"391ceb64330bdda6b7738b2413698e3b"},{url:"/pwa/android-chrome-384x384.png~",revision:"6262a7e35caae384e320108751d966e1"},{url:"/pwa/apple-touch-icon.png",revision:"5c78bf8c3e972a1d7cb469109cd4c93d"},{url:"/pwa/apple-touch-icon.png~",revision:"a4932224d3e26fc00026e8bd7254e1bf"},{url:"/pwa/apple_splash_1125.png",revision:"4473d61aa07ab5358813a64f2243f1b6"},{url:"/pwa/apple_splash_1125.png~",revision:"6733210a39815a7f45e5016dccf734b3"},{url:"/pwa/apple_splash_1242.png",revision:"375317b911c483fb697ed56e96c17c44"},{url:"/pwa/apple_splash_1242.png~",revision:"e6c01ee41a08e34b526c1cb81ce5e04f"},{url:"/pwa/apple_splash_1536.png",revision:"fa12f40689c9f9b51a540a882eb1c592"},{url:"/pwa/apple_splash_1536.png~",revision:"6b2f8379923d0d3651562f009e31938b"},{url:"/pwa/apple_splash_1668.png",revision:"665c3a7af6f438c3476e0d7a8e7ed1ab"},{url:"/pwa/apple_splash_1668.png~",revision:"b3006c0680b368c2c146f75d1714403a"},{url:"/pwa/apple_splash_2048.png",revision:"ff57b3e2d15f4d59eb272bf5ed4ad075"},{url:"/pwa/apple_splash_2048.png~",revision:"f661b5b2e24e244dfeb8079e688a6780"},{url:"/pwa/apple_splash_640.png",revision:"2d88e917b023b581569647f239ee4d1e"},{url:"/pwa/apple_splash_640.png~",revision:"16ba5474062432500cde7fff0da12bb7"},{url:"/pwa/browserconfig.xml",revision:"ac801a2e3a01f0f12aceec99eb0648a1"},{url:"/pwa/favicon-16x16.png",revision:"35727b27ae4c6620fc06930c49fe042e"},{url:"/pwa/favicon-16x16.png~",revision:"3634c0a0d47f14e72ca373c8e89f952a"},{url:"/pwa/favicon-32x32.png",revision:"7e4eebe9437977a74106afdd7020f406"},{url:"/pwa/favicon-32x32.png~",revision:"5f19e89323e3d658e13c3ebe507f00fe"},{url:"/pwa/icon-512x512.png",revision:"3f63f917737f4da43114b6675ab0aaca"},{url:"/pwa/icon-512x512.png~",revision:"ada2bf9b81833a55767f350e5943e2f6"},{url:"/pwa/manifest.json",revision:"b6d561418dc3074a9985eba1aafff97a"},{url:"/pwa/touch-icon-ipad-retina.png",revision:"ca748b780cb764fe819ceb9ecde58c42"},{url:"/pwa/touch-icon-ipad-retina.png~",revision:"1d169d45af64ad0397a3ce27478d73cc"},{url:"/pwa/touch-icon-ipad.png",revision:"bed3dfedff56875811ce9d8e7e4ac029"},{url:"/pwa/touch-icon-ipad.png~",revision:"807256b386335128a5c27b883477102a"},{url:"/pwa/touch-icon-iphone-retina.png",revision:"75a8ffce1fd61b6a6f4f7027b9ada53b"},{url:"/pwa/touch-icon-iphone-retina.png~",revision:"a4932224d3e26fc00026e8bd7254e1bf"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:n,state:s})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
