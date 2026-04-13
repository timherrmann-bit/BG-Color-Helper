const CACHE_NAME = 'foto-editor-v2';
const APP_SHELL = [
  '/Workaround-Helper/foto-editor/',
  '/Workaround-Helper/foto-editor/index.html',
  '/Workaround-Helper/foto-editor/manifest.webmanifest',
  '/Workaround-Helper/foto-editor/Foto-Crop-Editor2.png',
  '/Workaround-Helper/foto-editor/icons/foto-editor-192.png',
  '/Workaround-Helper/foto-editor/icons/foto-editor-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;

      return fetch(event.request)
        .then((response) => {
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseToCache));
          return response;
        })
        .catch(() => caches.match('/Workaround-Helper/foto-editor/index.html'));
    })
  );
});
