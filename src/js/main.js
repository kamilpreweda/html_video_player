"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below

// Get our elements//
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('/progress');
const progressBar = player.querySelector('.progress_filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');


// Build our functions//
function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

//Hook up the elements listeners //


