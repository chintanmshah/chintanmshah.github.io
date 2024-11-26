const staticCdAlbum = "cd-album-site-v1";
const assets = [
	"/",
	"/index.html",
	"/assets/images/c-grah-shanti.png",
	"/assets/images/d-grah-shanti.png",
	"/assets/images/mehendi.png",
	"/assets/images/sangeet.png",
	"/assets/images/wedding.png",
	"/assets/images/reception.png",
];

self.addEventListener("install", (installEvent) => {
	installEvent.waitUntil(
		caches.open(staticCdAlbum).then((cache) => {
			cache.addAll(assets);
		})
	);
});

self.addEventListener("fetch", (fetchEvent) => {
	fetchEvent.respondWith(
		caches.match(fetchEvent.request).then((res) => {
			return res || fetch(fetchEvent.request);
		})
	);
});
