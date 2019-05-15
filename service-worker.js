self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open('v1').then(function (cache) {
            return cache.addAll([
                '/index.html',
                '/js/list/list.js',
                '/styles/list.css',
            ]);
        }).then(function () {
            return self.skipWaiting();
        })
    );
});
