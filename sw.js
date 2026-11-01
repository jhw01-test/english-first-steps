const CACHE_PREFIX='english-first-steps-';
const CACHE=CACHE_PREFIX+'v5';
const ASSETS=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith(CACHE_PREFIX)&&key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{
 if(event.request.method!=='GET')return;
 const url=new URL(event.request.url);
 if(url.origin!==location.origin||!url.pathname.startsWith(new URL(self.registration.scope).pathname))return;
 // Authentication callbacks must not be stored in the offline cache.
 if(url.searchParams.has('code')||url.searchParams.has('error'))return;
 // Prefer current pages online; fall back to the installed lesson app offline.
 if(event.request.mode==='navigate'){
  event.respondWith(fetch(event.request).then(response=>{
   if(response.ok){const copy=response.clone();event.waitUntil(caches.open(CACHE).then(cache=>cache.put(event.request,copy)))}
   return response;
  }).catch(async()=>await caches.match(event.request)||await caches.match('./index.html')));
  return;
 }
 event.respondWith(caches.match(event.request).then(hit=>hit||fetch(event.request)));
});
