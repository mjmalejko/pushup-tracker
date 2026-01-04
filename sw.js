// sw.js (basic offline cache)
const CACHE = "pushups-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./firebase-init.js",
  "./manifest.webmanifest"
];

self.addEventListener("install", (evt)=>{
  evt.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ASSETS)).catch(()=>{})
  );
});

self.addEventListener("fetch", (evt)=>{
  evt.respondWith(
    caches.match(evt.request).then(cached => cached || fetch(evt.request))
  );
});
