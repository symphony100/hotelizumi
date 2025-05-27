const cacheName = "symphony-cache-v1";
const assetsToCache = [
  "/hotelizumi/",
  "/hotelizumi/IZ.png",
  "/hotelizumi/manifest.json",
  "/hotelizumi/news/",
  "/hotelizumi/fee/",
  "/hotelizumi/access/",
  "/hotelizumi/spot/",
  "/hotelizumi/q&a/",
  "/hotelizumi/sitemap/",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(assetsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
