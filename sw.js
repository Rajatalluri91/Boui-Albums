// sw.js

const CACHE_NAME = 'boui-player-v1';
const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/album1.html',
  '/album2.html',
  '/album3.html',
  '/album4.html',
  '/album5.html',
  '/album6.html',
  '/album7.html',
  '/album8.html',
  '/album9.html',
    '/album10.html',
  '/album11.html',
  '/album12.html',
  '/album13.html',
  '/album14.html',
  '/album15.html',
  '/album16.html',
  '/album17.html',
  '/album18.html',
    '/album19.html',
  '/album20.html',
  '/album21.html',
  '/album22.html',
  '/album23.html',
  '/album24.html',
  '/album25.html',

  
  // Add more HTML files or assets here
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
