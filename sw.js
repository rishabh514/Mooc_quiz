/* Mooc Mastery — network-first PWA service worker.
 * Online: fetch current same-origin content from the deployed Vercel site and update cache.
 * Offline: serve the last successfully fetched response from cache.
 * Bump CACHE_NAME when changing this file's cache strategy or offline shell. */
'use strict';

const CACHE_NAME = 'mooc-mastery-shell-v4-course-guides-metadata';
const OFFLINE_URL = '/index.html';
const SHELL_URLS = [
  '/',
  '/index.html',
  '/courses/',
  '/courses/joy-of-computing-using-python/',
  '/courses/psychology-of-learning/',
  '/courses/environment-and-development/',
  '/courses/forests-and-their-management/',
  '/courses/wildlife-ecology/',
  '/courses/introduction-to-internet-of-things/',
  '/courses/understanding-incubation-and-entrepreneurship/',
  '/courses/artificial-intelligence-concepts-and-techniques/',
  '/courses/psychology-of-stress-health-and-well-being/',
  '/courses/programming-in-java/',
  '/manifest.json',
  '/favicon.ico',
  '/assets/icon-192.png',
  '/assets/icon-512.png',
  '/assets/mooc-mastery-icon.png',
  '/assets/level.json',
  '/assets/badges.json',
  '/assets/joy_of_computing.json',
  '/assets/Psychology_of_learning.json',
  '/assets/environment_and_development.json',
  '/assets/Forests_and_Their_Management.json',
  '/assets/Wildlife_Ecology.json',
  '/assets/Introduction_to_Internet_of_Things.json',
  '/assets/Understanding_Incubation_and_Entrepreneurship.json',
  '/assets/Artificial_intelligence_concepts_and_techniques.json',
  '/assets/Psychology_of_Stress_Health_and_Well_Being.json',
  '/assets/programming_in_java.json',
];

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    // Do not fail installation if a non-critical asset is temporarily unavailable.
    await Promise.all(SHELL_URLS.map(async (url) => {
      try {
        const response = await fetch(url, { cache: 'no-store' });
        if (response.ok) await cache.put(url, response.clone());
      } catch (_) { /* An online fetch will populate this cache later. */ }
    }));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  // Do not intercept third-party libraries, fonts, analytics, or other origins.
  if (url.origin !== self.location.origin) return;
  // Never cache preview/deployment APIs or browser-internal requests.
  if (url.pathname.startsWith('/_vercel/')) return;

  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    const cacheKey = request;
    try {
      // Network-first ensures deployments and edited JSON are served live whenever online.
      const response = await fetch(request, { cache: 'no-store' });
      if (response && response.ok && response.type !== 'opaque') {
        // Cache the latest successful response for offline use.
        event.waitUntil(cache.put(cacheKey, response.clone()).catch(() => {}));
      }
      return response;
    } catch (error) {
      const cached = await caches.match(cacheKey);
      if (cached) return cached;
      if (request.mode === 'navigate') {
        return (await caches.match(OFFLINE_URL)) || new Response(
          '<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Mooc Mastery offline</title><body style="font:16px system-ui;padding:2rem"><h1>You are offline</h1><p>Connect to the internet once to load the latest Mooc Mastery app, then try again.</p></body></html>',
          { headers: { 'Content-Type': 'text/html; charset=utf-8' }, status: 503 }
        );
      }
      return new Response('', { status: 503, statusText: 'Offline' });
    }
  })());
});
