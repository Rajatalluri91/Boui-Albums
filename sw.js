// sw.js

const CACHE_NAME = 'boui-player-v1';
const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/album 2003.html',
  '/album 2004.html',
  '/album 2005.html',
  '/album 2006.html',
  '/album 2007.html',
  '/album 2008.html',
  '/album 2009.html',
  '/album 2010.html',
  '/album 2011.html',
  '/album 2012.html',
  '/album 2013.html',
  '/album 2014.html',
  '/album 2015.html',
  '/album 2016.html',
  '/album 2017.html',
  '/album 2018.html',
  '/album 2019.html',
  '/album 2020.html',
  '/album 2021.html',
  '/album 2022.html',
  '/album 2023.html',
  '/album 2024.html',
  '/album 2025.html',
  
  
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
// sw.js
self.addEventListener('install', event => {
  console.log('Service Worker installed');
});

