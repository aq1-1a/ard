self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('ayn-cache-v1').then(cache => cache.addAll([
      '/ard/',
      '/ard/index.html',
      '/ard/install.html',
      '/ard/ayn-192.png',
      '/ard/ayn-512.png'
    ]))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request))
  );
});
