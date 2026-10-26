/* Service worker: lets the installed app open without internet. Pages and scripts are fetched from the network
   first (so a new version shows up at once) and kept in the cache as a fallback; the web fonts are served from
   the cache once they have been loaded. */
const CACHE = 'mtb-v2';
const SHELL = ['./', './index.html', './manifest.webmanifest', './src/styles.css', './src/compat.js',
  './src/main.js', './src/ui.js', './src/generators.js', './src/helpers.js', './src/viz.js', './src/proofs.js', './src/intros.js',
  './src/curriculum.js', './src/i18n.js', './src/cover.js', './src/practice.js', './src/answer.js', './src/bundle.js', './src/guide.js', './src/export.js',
  './icons/icon-192.png', './icons/icon-512.png', './icons/favicon-32.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request; if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (/fonts\.(googleapis|gstatic)\.com$/.test(url.hostname)) {                  // fonts: cache first
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => {
      const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); return res; })));
    return;
  }
  if (url.origin !== self.location.origin) return;
  e.respondWith(fetch(req).then(res => {                                          // own files: network first
    if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
    return res;
  }).catch(() => caches.match(req, { ignoreSearch: true }).then(hit => hit || caches.match('./index.html'))));
});
