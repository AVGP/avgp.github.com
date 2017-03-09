const VERSION = 'v1'

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(VERSION).then((cache) => {
      cache.addAll([
        '/',
        '/projects.html',
        '/resume.html',
        '/speaking.html',
        '/speaksheet.html',
        '/tools.html',
        '/experiments.html',
        '/writing.html',
        '/img/avatar.png',
        '/img/experiments.png',
        '/img/speaking.png',
        '/img/writing.png',
        '/images/me_400x400.jpg',
        '/images/the_one_cropped.jpg',
        '/images/lisbon2014.jpg',
        '/images/Martin-Naumann-Color.jpg',
        '/images/Martin-Naumann-BW.jpg',
        '/manifest.json'
      ])
    })
  )
})

self.addEventListener('fetch', function(evt) {
  evt.respondWith(fromCache(evt.request));
  evt.waitUntil(update(evt.request));
})
// Helpers

function fromCache(request) {
  return caches.open(VERSION).then(function (cache) {
    return cache.match(request).then(function (matching) {
      return matching || Promise.reject('no-match');
    });
  });
}

function update(request) {
  return caches.open(VERSION).then(function (cache) {
    return fetch(request).then(function (response) {
      return cache.put(request, response);
    });
  });
}
