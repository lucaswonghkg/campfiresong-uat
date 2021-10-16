'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "6bc4cc663512a9578560b447830b9685",
"splash/img/light-2x.png": "260c44aeda18e8fa355a1ef0a33218c0",
"splash/img/light-3x.png": "7b419fcaf28969255fec151088d5656d",
"splash/img/dark-3x.png": "7b419fcaf28969255fec151088d5656d",
"splash/img/dark-2x.png": "260c44aeda18e8fa355a1ef0a33218c0",
"splash/img/dark-1x.png": "e7b8ff2c4da292ebcc39f54830001fb7",
"splash/img/light-1x.png": "e7b8ff2c4da292ebcc39f54830001fb7",
"splash/style.css": "6130d023146ed01b64c970f6a16ab78e",
"index.html": "575cc94d12bc9ee095f80f5472f58ea6",
"/": "575cc94d12bc9ee095f80f5472f58ea6",
"main.dart.js": "9cf91311bb6adf32c14528de4abab55f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "7344028101cd1249742ccc339e43a95d",
".git/config": "38881ccff4dc4e249623736f3cd97a15",
".git/objects/0d/e8b921979575efe48132ecf541c1dbfb000e48": "4ce45ac73a800e1095e929a9bc768935",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/3c/edadc604d9e7c319623bc96f7ac860b78d8fc1": "fc5ee895eca9e6d41103d260ac9e4f60",
".git/objects/3c/3c07e2920cab04e58ccb53da698709ff2299fd": "8d3741d2722e4e2da6034663854d296b",
".git/objects/56/e578a4bbf894958ba805aea3cb5ee488fe0593": "11fe436d3000f78e367b2a83a0c7e83e",
".git/objects/67/40c87f7128a08aa9330157c0dcb65d673e3d15": "1f934004eaccc41957a9e3e6dd45004e",
".git/objects/d9/10e99b88cdfae7c78d14ce245ef5da898e17bc": "14f36c7e07b3d5914ce00edce35397b9",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e2/bd6c7e53d79ce404d4f0d7997b9b999be1a2e1": "b8c89b6166a69f0239558e776edc8177",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/97561a5b5e53b27f28c022824ddd65ca4a4a5a": "b747bb01b6eaf33fafdfa77935b9f897",
".git/objects/fc/6c10a793b1b18ec12b983878cb71d17867299a": "a83894e7c38f03ea0f36773abf3ef18f",
".git/objects/ca/37f24925dd3b5768e3b54e20753f4e933898fb": "552dda73dafbcf0c8254cce0cc44ddeb",
".git/objects/c8/249036ad97bf785d1740c8035b8c0527f5652a": "9279c73b53ac1222f5d77329d577e2a4",
".git/objects/11/74a184fbf428a19b45138425e886deeab64611": "052946b8f55a4588260fd1830aeeb312",
".git/objects/1f/87a6ccaacdeb6aba202d39ecfc20aab011e289": "522b08c663aecb292562dd5172e54f4a",
".git/objects/74/79f74d80c86f8c6b166f6a7d0970990cb04202": "84baed60bb77b9a78e23479dc7de9d0e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/72/ada6baac9193047a04d1ef7fc6c08c19a0aad4": "515cf0496f523efb00e1cdbca48aebe4",
".git/objects/44/0e92832be31f8c8e48e37dad84c80d28306cf5": "c201918e16b5e35462ab1dbd4bbc38a8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/5ac5f382533b676b0319811fb105bb9b698f96": "4a9e2ff0e8e741d1ad0092a0ad758c32",
".git/objects/07/ccbf43cc1668017360c2d1b3c4f8a508312a7b": "de41274c7cd97824f2e4ac78a708dc83",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/98/e1a8f771fcbb34871328ee70e4f4cde16ae839": "b147b30c7749e5fa127f4068ab927b87",
".git/objects/06/539fde56f1271cdb12e173419def79f6843694": "4032bab630ad0d9fa9f69a216903795a",
".git/objects/a0/e2cce32a83967b506792a12f51970a01cf1e60": "4ca87b9a0ab0f7862f241d9364e52628",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/e8/ba70cf3216eceb8a3737eff23b59b3c48179f2": "fd230f8d859f2a301ecb3717c09081af",
".git/objects/e0/8666f2dba65a77481433502083a2eb29dd27c5": "c14c6075367e011921ae161ce5840aa4",
".git/objects/e0/03692064855067b159af16e76bb8b3c6e136d9": "5abc126b1a259cb7ef092458ed63daf4",
".git/objects/46/8cbe03ab650f3a365d96fd2ca4b9d6634413a9": "ea5ad82aad3130342a477514a9175f5f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/8c/79c875160904e6f81bb807b03f9e697bfdd7b8": "59e3d99b9b8399a422a297692e09189f",
".git/objects/40/9b019cb3b9a6b1e31766ed22ca9ac1016a090e": "04f364cb1659db461628a36b14362b8e",
".git/HEAD": "8417eed02f5f83c61aa64e0c33232905",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/index": "5ffee9aa4914ae93df1e799b0278f8e6",
"assets/AssetManifest.json": "4cb388194ee28c2f808759d89c114737",
"assets/NOTICES": "1c24f965a3b0bbab032ef932800aef15",
"assets/FontManifest.json": "b29e7c6709afb0293aa070608adfe9ed",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/fonts/Signika-Regular.ttf": "1b24ac57b90ddccb7b4c8d58742e73a4",
"assets/fonts/A-OTF-KaishoMCBK1Pro-DeBold-2.otf": "6f6302c42b3a56ea16673d5302cd36ce",
"assets/fonts/AlfaSlabOne-Regular.ttf": "7676beb2b1f19eec709feed096327d21",
"assets/fonts/LuckiestGuy-Regular.ttf": "c6004be49628b1226eb31b068348d24f",
"assets/fonts/Frijole-Regular.ttf": "98ffda64fd66bfc869198d77369e8bcc",
"assets/fonts/AaRenHeiTi-2.ttf": "828946d8ef7145f44de9c1addc554984",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/fonts/CarterOne-Regular.ttf": "18035f90369685baa0f7b3a6fbd40ab2",
"assets/fonts/Timmana-Regular.ttf": "a7c2bafdba1e9b0a72c2ede8c198c75a",
"assets/assets/oacampfires.json": "fe0b61cb105a95be407d4e8ef6016400",
"assets/assets/CSIconR1.png": "23e940f83009198daac09c7d75b39178"
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
