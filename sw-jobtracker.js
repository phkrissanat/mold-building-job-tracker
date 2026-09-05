// Bump this version string every time you deploy an update to mold-job-tracker.html.
// Same pattern as the main ABS Product Manager's sw.js — network-first for the app
// shell so updates show up as soon as the device is online, cache as offline fallback.
const CACHE_VERSION = 'mold-job-tracker-v11';
const CORE_ASSETS = [
  './index.html',
  './readonly-jobtracker.html',
  './manifest-jobtracker.json',
  './manifest-jobtracker-readonly.json',
  './firebase-config.js',
  './icons/icon-jobtracker-192.png',
  './icons/icon-jobtracker-512.png',
  './icons/icon-jobtracker-512-maskable.png',
  './icons/icon-jobtracker-ro-192.png',
  './icons/icon-jobtracker-ro-512.png',
  './icons/icon-jobtracker-ro-512-maskable.png'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => cache.addAll(CORE_ASSETS))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Network-first for the app shell (so edits/deploys show up immediately when
// online), falling back to cache when offline. Everything else (CDN scripts,
// Firebase/Google requests) passes through to the network as normal.
self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);
  const isCoreAsset = url.origin === self.location.origin;

  if (!isCoreAsset || req.method !== 'GET') return;

  event.respondWith(
    fetch(req)
      .then((res) => {
        const copy = res.clone();
        caches.open(CACHE_VERSION).then((cache) => cache.put(req, copy));
        return res;
      })
      .catch(() => caches.match(req).then((cached) => {
        if (cached) return cached;
        const fallback = url.pathname.includes('readonly') ? './readonly-jobtracker.html' : './index.html';
        return caches.match(fallback);
      }))
  );
});
