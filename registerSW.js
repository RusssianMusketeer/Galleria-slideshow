if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/Galleria-slideshow/sw.js', { scope: '/Galleria-slideshow/' })})}