const CACHE_NAME = 'soma-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/logo.png',
  '/logo1.png',
  '/person.png',
  '/person1.png',
  '/manifest.json',
  // Add other assets you want to cache
  'Advanced Mathematics Form Five.pdf',
  'PHYSICS 1 - Exam n Answers - MSOMIBORA.COM (9).pdf',
  'PHYSICS 1 - Exam n Answers - MSOMIBORA.COM_025954.pdf',
  'PHYSICS 1 - Exam n Answers - MSOMIBORA.COM_2_030128.pdf',
  'PHYSICS 1 - Exam n Answers - MSOMIBORA.COM_4_030111.pdf',
  'Physics 1 - Exam n Answers - MsomiBora.com_6_030030.pdf',
  'PHYSICS 1 - WazaElimu.com (3).pdf',
  'PHYSICS F5 Wazaelimu.com -1.pdf',
  'PHYSICS F6 tie mryghalis com .pdf',
  'physics notes mastering 2_250625_115443.pdf',
  'PHYSICS-1.pdf',
  'S CHAND XI COMPLETE.pdf',
  'S CHANDS XII.pdf'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
