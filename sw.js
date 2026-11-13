// Durian Thep app wrapper: no offline cache, pass all requests to network
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());
self.addEventListener('fetch', e => {});
