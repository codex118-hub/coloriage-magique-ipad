// Réseau d'abord, cache en secours : l'iPad reçoit toujours la dernière version
// quand il est connecté, et l'appli marche hors-ligne avec ce qui a déjà été chargé.
// Pas de numéro de version à changer à la main.
const CACHE_NAME = 'coloriage-magic';
const CORE_FILES = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './audio.js',
  './templates.js',
  './converter.js',
  './manifest.json',
  './assets/apple-touch-icon.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_FILES)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        }
        return response;
      })
      .catch(() => caches.match(event.request, { ignoreSearch: true }))
  );
});
