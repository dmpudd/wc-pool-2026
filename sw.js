// Minimal service worker. Its only job is to be registered so that Android
// Chrome treats this site as an installable app (this is one of Chrome's
// PWA install criteria). It intentionally does no offline caching, so the
// app always loads fresh from the network exactly like it does today.

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});
