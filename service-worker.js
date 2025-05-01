const CACHE_NAME = 'laohymn-cache-v31';
const urlsToCache = [
  '/',    // Root index.html
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',


'contentall.html',
'contents.html',
'h.html',
'h1.html',
'h102.html',
'h109.html',
'h111.html',
'h117.html',
'h119.html',
'h121.html',
'h127.html',
'h13.html',
'h130.html',
'h139.html',
'h141.html',
'h143.html',
'h149.html',
'h15.html',
'h151.html',
'h156.html',
'h157.html',
'h161.html',
'h170.html',
'h175.html',
'h176.html',
'h18.html',
'h180.html',
'h188.html',
'h19.html',
'h196.html',
'h197.html',
'h2.html',
'h20.html',
'h200.html',
'h21.html',
'h211.html',
'h212.html',
'h213.html',
'h220.html',
'h224.html',
'h225.html',
'h227.html',
'h233.html',
'h234.html',
'h235.html',
'h238.html',
'h240.html',
'h242.html',
'h244.html',
'h25.html',
'h250.html',
'h26.html',
'h34.html',
'h38.html',
'h4.html',
'h41.html',
'h43.html',
'h44.html',
'h46.html',
'h48.html',
'h5.html',
'h50.html',
'h51.html',
'h52.html',
'h53.html',
'h54.html',
'h55.html',
'h59.html',
'h6.html',
'h63.html',
'h67.html',
'h70.html',
'h72.html',
'h77.html',
'h78.html',
'h8.html',
'h80.html',
'h88.html',
'h92.html',
'h95.html',
'h97.html',
'hymns.html',
'hymns2.html',
'hymns3.html',
'index.html',
'license.html',
'p.html',
'p1.html',
'p10.html',
'p100.html',
'p101.html',
'p102.html',
'p103.html',
'p104.html',
'p105.html',
'p106.html',
'p107.html',
'p108.html',
'p109.html',
'p11.html',
'p110.html',
'p111.html',
'p112.html',
'p113.html',
'p114.html',
'p115.html',
'p116.html',
'p117.html',
'p118.html',
'p119.html',
'p12.html',
'p120.html',
'p121.html',
'p122.html',
'p123.html',
'p124.html',
'p125.html',
'p126.html',
'p127.html',
'p128.html',
'p129.html',
'p13.html',
'p130.html',
'p131.html',
'p132.html',
'p133.html',
'p134.html',
'p135.html',
'p136.html',
'p137.html',
'p138.html',
'p139.html',
'p14.html',
'p140.html',
'p141.html',
'p142.html',
'p143.html',
'p144.html',
'p145.html',
'p146.html',
'p147.html',
'p148.html',
'p149.html',
'p15.html',
'p150.html',
'p151.html',
'p152.html',
'p153.html',
'p154.html',
'p16.html',
'p17.html',
'p18.html',
'p19.html',
'p2.html',
'p20.html',
'p21.html',
'p22.html',
'p23.html',
'p24.html',
'p25.html',
'p26.html',
'p27.html',
'p28.html',
'p29.html',
'p3.html',
'p30.html',
'p31.html',
'p32.html',
'p33.html',
'p34.html',
'p35.html',
'p36.html',
'p37.html',
'p38.html',
'p39.html',
'p4.html',
'p40.html',
'p41.html',
'p42.html',
'p43.html',
'p44.html',
'p45.html',
'p46.html',
'p47.html',
'p48.html',
'p49.html',
'p5.html',
'p50.html',
'p51.html',
'p52.html',
'p53.html',
'p54.html',
'p55.html',
'p56.html',
'p57.html',
'p58.html',
'p59.html',
'p6.html',
'p60.html',
'p61.html',
'p62.html',
'p63.html',
'p64.html',
'p65.html',
'p66.html',
'p67.html',
'p68.html',
'p69.html',
'p7.html',
'p70.html',
'p71.html',
'p72.html',
'p73.html',
'p74.html',
'p75.html',
'p76.html',
'p77.html',
'p78.html',
'p79.html',
'p8.html',
'p80.html',
'p81.html',
'p82.html',
'p83.html',
'p84.html',
'p85.html',
'p86.html',
'p87.html',
'p88.html',
'p89.html',
'p9.html',
'p90.html',
'p91.html',
'p92.html',
'p93.html',
'p94.html',
'p95.html',
'p96.html',
'p97.html',
'p98.html',
'p99.html',
'praises.html',
'praises2.html',
'screen 1280.png',
'service-worker.js',
'css/index.css',
'css/slider.css',
'css/style.css',
'fonts/fonts.css',
'fonts/Phetsarath-Bold.ttf',
'fonts/Phetsarath-Regular.ttf',
'images/appname.png',
'images/arrow-l-black.png',
'images/arrow-r-black.png',
'images/booktitle.png',
'images/booktitle.png.old1',
'images/call.png',
'images/CC.png',
'images/footer_bg.png',
'images/footer_bg1.png',
'images/logo.png',
'images/logo.psd',
'images/music-notes.jpg',
'images/pin.png',
'images/search.png',
'images/search_h.png',
'images/slide-pagenat.png',
'images/slider-icons.png',
'images/slider_bg.jpg',
'images/slider_bg1.jpg',
'images/top-move.jpg',
'js/easing.js',
'js/font-buttons.js',
'js/index.js',
'js/jquery.cslider.js',
'js/jquery.flexisel.js',
'js/jquery.min.js',
'js/modernizr.custom.28468.js',
'js/move-top.js',
'js/script.js'




  // Add more files as needed
];

// Install event: cache essential files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Activate event: cleanup old caches if needed
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      )
    )
  );
});

// Fetch event: serve from cache, then fallback
self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);

  // Handle HTML navigation requests with .html fallback
  if (
    request.mode === 'navigate' ||
    (request.headers.get('accept')?.includes('text/html') && !url.pathname.endsWith('.html'))
  ) {
    const fallbackUrl = url.pathname.endsWith('/')
      ? `${url.pathname}index.html`
      : `${url.pathname}.html`;

    event.respondWith(
      caches.match(fallbackUrl).then(response => {
        return response || caches.match('/contents.html');
      })
    );
    return;
  }
  
  // Normal asset fetch
  event.respondWith(
    caches.match(request).then(response => {
      return (
        response ||
        fetch(request).catch(() => {
          // Fallback to contents.html if it's a navigation request
          if (request.mode === 'navigate') {
            return caches.match('/contents.html');
          }
        })
      );
    })
  );
});