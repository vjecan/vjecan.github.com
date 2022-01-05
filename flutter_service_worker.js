'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "7171804a1d61bc9121a2ff7133a12931",
"assets/assets/1-14.jpg": "34968ca89188b4a79a771901beb548df",
"assets/assets/appstoreicon.png": "53cc8bdeb748e6d74f3830843cdb372e",
"assets/assets/banner.png": "bf292d7f5ed10f1555d8f12f9f05583e",
"assets/assets/bbm.jpg": "ca2f5945d6d6e0b783f859bbee658320",
"assets/assets/bg.jpg": "2b14747c3461d2514c9ca9279ce44145",
"assets/assets/bgli.png": "2f40f8ab208d71aa0eccfdb465b1405e",
"assets/assets/bgm.png": "0f87e5f893f1bac617bedfaea1de4af9",
"assets/assets/bgmountains.png": "2bca24170014f61af50ec21607489032",
"assets/assets/bgred.png": "699de954ade3d9c799baa3e8f2021cc4",
"assets/assets/bgv.png": "06e61a4434d34fa95b9c65c6a00cfb61",
"assets/assets/bgv1.png": "74de4ab2232e055f92af8c9a8eced234",
"assets/assets/box.png": "454174066ac2dd0e0267a517a21114c6",
"assets/assets/circle.png": "cf590fa8374e418ad30287019fc17af2",
"assets/assets/circlesmall.png": "2746022c2aec427ea4b335a24a8fb0b5",
"assets/assets/coli.png": "f444c86e7205be95730e3beee0e160d1",
"assets/assets/dfc.jpg": "655d6e77b9f521be65016a6e9775efcf",
"assets/assets/dragon.png": "39cba1dfc0f0d4beb4c28d3d6d2b74b5",
"assets/assets/edain.jpg": "0f1e1d9eebe20d164f4e375953d0dfda",
"assets/assets/edain.png": "2b5f176231776ec151207a4377b6b071",
"assets/assets/fonts/Arame.ttf": "c1a138278b43c9981db162cc7814472e",
"assets/assets/googleplayicon.png": "a01c102c58a0b443ec16119fa6a310f1",
"assets/assets/hg.jpg": "6ce26193d89bcf77eed51690b3113097",
"assets/assets/ideasworthliving.png": "af1404ba00d63050f8d956f327f240a8",
"assets/assets/jasudo.png": "1d387791c9b4cdbee899f65b0f065d4b",
"assets/assets/jasudoweb.jpg": "6790d535931b2347d04f8a2c18acccfc",
"assets/assets/knowledgevault.png": "1264fcaa6d7b31f02484d69d80ad1d3f",
"assets/assets/lineh.png": "3511bb65ee963a6eb716110fd7624ce6",
"assets/assets/linev.png": "63ded6609acfe69cea63667ee3fe739c",
"assets/assets/logo.png": "255fef27ed1a222392fbeef2aa4fb2d1",
"assets/assets/logobg.png": "79b6af560676abd88a63ddaaee752d83",
"assets/assets/marcus.png": "916c815fdfbcba8787a9198cc38572fe",
"assets/assets/mobileright.png": "62056d1b8f48a7af9b6db2e3a0c47286",
"assets/assets/mobiletransp.png": "e26c5f2f342079e0b3051232a79d570d",
"assets/assets/moon.png": "11c20e08edc8a96be922db2b9601f3fe",
"assets/assets/mountainbg.png": "b39b2f580dc89d12fc9a0889ecb72306",
"assets/assets/mp.jpg": "29b85f7ecf4e1335c4ee6215885379bd",
"assets/assets/pbm.jpg": "62cb31e6f75c8aec08af6db135855156",
"assets/assets/prisma": "8f4c77d05f92f558b32bce761b3b0824",
"assets/assets/prismaanalytics.jpg": "4e301b2f21cc2da6c3f54c7e992272f4",
"assets/assets/rea.jpg": "c92afe1ad15c8c25ba54cf338b10123c",
"assets/assets/sc.jpg": "e6c8c7fd69204e72f385cbcc7d45900a",
"assets/assets/silverdart.png": "f6474f8d0bf6a7f486e77ee5ec1c5f81",
"assets/assets/silverdartlogo.png": "fe9599ae2dd7310a5b39cbd8f66dead0",
"assets/assets/spacebg.png": "c187754a921e61f9e5bb72807382e589",
"assets/assets/spaceshipbg.png": "f7561c5a128a6ec55ac184c3ea705d29",
"assets/assets/stoaconnect.png": "37656b72578069b5664ecaeb3c73bd32",
"assets/assets/stoaconnectmobile.png": "4e888a8cfc8a778723473394ab1ed56f",
"assets/assets/stoaconnectmobile2.png": "153bda798fb9f411094048d85e736a2a",
"assets/assets/ubb.jpg": "a5cdfbecfb3cac4dfe1863e716a82b2a",
"assets/assets/uga.jpg": "ffd8b7f4ef1493552b28c7a185c33de7",
"assets/assets/uga.png": "b1864a1b58ff40fd818c949a55b33435",
"assets/assets/vlad.jpg": "4bf9575a7b3f13096281a25b0383b1e0",
"assets/assets/vladjasudo.jpg": "6bd2b0eb4b1253c94f068a90e83d1e89",
"assets/assets/vladm.jpg": "9ac535df30cb09eb5d969dd1d1c0f2ff",
"assets/assets/vladmountain.jpg": "42da03907f32c897c9c9b030b5f32ba7",
"assets/assets/vladteaching.jpg": "afd6a62c787c9cee9b68d8a734b36ec7",
"assets/assets/wave.jpg": "f560736f8b128a91addfec7871c75ba2",
"assets/FontManifest.json": "c8e2299b9cd467dd622711e55a7b5d7d",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "28a31320fdf50bcbe60759bfa3426a9d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"canvaskit/canvaskit.js": "62b9906717d7215a6ff4cc24efbd1b5c",
"canvaskit/canvaskit.wasm": "b179ba02b7a9f61ebc108f82c5a1ecdb",
"canvaskit/profiling/canvaskit.js": "3783918f48ef691e230156c251169480",
"canvaskit/profiling/canvaskit.wasm": "6d1b0fc1ec88c3110db88caa3393c580",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e7556c82b76255dde050547a77000d90",
"/": "e7556c82b76255dde050547a77000d90",
"main.dart.js": "5e85f1346e2dc0a4bdfb4b1a033ed725",
"manifest.json": "e17e168698e15c241a155b65b9f1df13",
"version.json": "bfbeb1f0f7a4ed60b90a68d758e5d40e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
