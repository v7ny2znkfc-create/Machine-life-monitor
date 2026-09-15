const C='af-machine-life-v1-6';
const A=['./','index.html','manifest.webmanifest','machine-data.json','config.js','icon-192.png','icon-512.png','apple-touch-icon.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(A)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==C).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
  const u=new URL(e.request.url);
  if(u.pathname.endsWith('machine-data.json')||u.pathname.endsWith('config.js')||u.pathname.endsWith('index.html')||u.pathname.endsWith('/Machine-life-monitor/')){
    e.respondWith(fetch(e.request,{cache:'no-store'}).catch(()=>caches.match(e.request)));
  }else{
    e.respondWith(fetch(e.request).catch(()=>caches.match(e.request).then(r=>r||caches.match('index.html'))));
  }
});
