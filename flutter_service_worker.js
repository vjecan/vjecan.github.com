'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "527a9339d91aacc526c7ed6f457520b5",
"assets/assets/about-img.png": "c8cab7ff36b3027397b3ca168b8fec71",
"assets/assets/acareertraining.jpg": "9ffcfe62ed742d00cbea610a3a8fcb2f",
"assets/assets/becomingbetter.jpg": "ef5cf8172a4e0a95062e0da99ecc7daf",
"assets/assets/cis.jpg": "293639af07c138fd619f7e44c9c048fd",
"assets/assets/comerejoice.jpg": "2176f38be597a262a2069ced482547d6",
"assets/assets/fspac.png": "238d971fb8d9e86d1931591e65fd7012",
"assets/assets/halnick.jpg": "ba7f17cf76cce913e9b79527d2f1bbd8",
"assets/assets/jasudo.jpg": "5d8a88ec95292915e3697eb757973cd8",
"assets/assets/jasudomobile.png": "ff5b2ebcb9279518841ec4fd623dadd9",
"assets/assets/mtpleasant.jpg": "2f09a6c99989e17ca8b1f44cbd2e6b48",
"assets/assets/pastorbaker.jpg": "3d391431daaa15e46b3bf22e15e7a380",
"assets/assets/pb.jpg": "1c5f496ecef944e8f62fe66ca4738358",
"assets/assets/photoshop.png": "cf1b663c9f8308110c3b379ac6bce725",
"assets/assets/prisma.jpg": "4e301b2f21cc2da6c3f54c7e992272f4",
"assets/assets/rea.jpg": "eca28e26cb486032b007294a2680c45d",
"assets/assets/sharepoint.png": "27e0b2162e9cdb4d02bed5c8e8be6d1b",
"assets/assets/someonecares.jpg": "d46e034f1fd5e794b5613b97ad16d24a",
"assets/assets/stoamobile.jpg": "6588d8056afb53425c1aea1f0cd961ea",
"assets/assets/stoamobilelarge.jpg": "4ea74e766d1784acaa4267bcc3c0caaf",
"assets/assets/tricounty.jpg": "ee19b844a1019dcb1a377f48f1465357",
"assets/assets/ubb.jpg": "194057188620246c1b2b4d3a62b6f87b",
"assets/assets/uga.png": "b1864a1b58ff40fd818c949a55b33435",
"assets/assets/work/acareertraining.jpg": "9ffcfe62ed742d00cbea610a3a8fcb2f",
"assets/assets/work/becomingbetter.jpg": "ef5cf8172a4e0a95062e0da99ecc7daf",
"assets/assets/work/cis.jpg": "293639af07c138fd619f7e44c9c048fd",
"assets/assets/work/comerejoice.jpg": "2176f38be597a262a2069ced482547d6",
"assets/assets/work/fspac.png": "238d971fb8d9e86d1931591e65fd7012",
"assets/assets/work/halnick.jpg": "ba7f17cf76cce913e9b79527d2f1bbd8",
"assets/assets/work/jasudo.jpg": "5d8a88ec95292915e3697eb757973cd8",
"assets/assets/work/mtpleasant.jpg": "2f09a6c99989e17ca8b1f44cbd2e6b48",
"assets/assets/work/pastorbaker.jpg": "3d391431daaa15e46b3bf22e15e7a380",
"assets/assets/work/pb.jpg": "1c5f496ecef944e8f62fe66ca4738358",
"assets/assets/work/photoshop.png": "cf1b663c9f8308110c3b379ac6bce725",
"assets/assets/work/prisma.jpg": "4e301b2f21cc2da6c3f54c7e992272f4",
"assets/assets/work/rea.jpg": "eca28e26cb486032b007294a2680c45d",
"assets/assets/work/sharepoint.png": "27e0b2162e9cdb4d02bed5c8e8be6d1b",
"assets/assets/work/someonecares.jpg": "d46e034f1fd5e794b5613b97ad16d24a",
"assets/assets/work/stoamobile.jpg": "6588d8056afb53425c1aea1f0cd961ea",
"assets/assets/work/stoamobilelarge.jpg": "4ea74e766d1784acaa4267bcc3c0caaf",
"assets/assets/work/tricounty.jpg": "ee19b844a1019dcb1a377f48f1465357",
"assets/assets/work/ubb.jpg": "194057188620246c1b2b4d3a62b6f87b",
"assets/assets/work/uga.png": "b1864a1b58ff40fd818c949a55b33435",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "042bbff7a419634d7ff9f0f70224f4ee",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00bb2b684be61e89d1bc7d75dee30b58",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4b6a9b7c20913279a3ad3dd9c96e155b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dffd9504fcb1894620fa41c700172994",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "7ce5cd3f21f0d4fe62f6e616b6d49313",
"/": "7ce5cd3f21f0d4fe62f6e616b6d49313",
"main.dart.js": "014e83201dcc05aeb83da90b1864f354",
"manifest.json": "4b4fe0b77f1196f475325a42ff7a5f9f",
"version.json": "7ec5eaae1e97347e6bdcff3a90db26d9"
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
