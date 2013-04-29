;(function(e,t,n){function i(n,s){if(!t[n]){if(!e[n]){var o=typeof require=="function"&&require;if(!s&&o)return o(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=t[n]={exports:{}};e[n][0].call(u.exports,function(t){var r=e[n][1][t];return i(r?r:t)},u,u.exports)}return t[n].exports}var r=typeof require=="function"&&require;for(var s=0;s<n.length;s++)i(n[s]);return i})({1:[function(require,module,exports){
/************************************************************************************
  This is your Page Code. The appAPI.ready() code block will be executed on every page load.
  For more information please visit our docs site: http://docs.crossrider.com
*************************************************************************************/

// Rename appAPI to app (derp)
var app = appAPI;

appAPI.ready(function($) {
  // // If we are on a crossrider debug page
  // // http://crossrider.com/apps/27849/debug
  // var location = window.location,
  //     isCrossrider = location.hostname === 'crossrider.com',
  //     isDebugPage = location.pathname.match('/debug');
  // if (isCrossrider && isDebugPage) {
  //   // TODO: Move this into a build conditional
  //   // Watch /background.js to see if it changes
  //   request.get('http://localhost:3000/background.js', function (err, res) {
  //     var _bgCode = res.body;
  //     setInterval(function () {
  //       // If it does, click the reload background code button
  //       request.get('http://localhost:3000/background.js', function (err, res) {
  //         var bgCode = res.body;
  //         if (bgCode !== _bgCode) {
  //           unsafeWindow.$('#debug-reload-background').click();
  //           _bgCode = bgCode;
  //         }
  //       });
  //     }, 1e3);
  //   });
  // } else {
  //   console.log('Be sure you are running on crossrider.com/debug');
  // }

  // // TODO: Move this into a build conditional
  // // Watch /extension.js to see if it changes
  // request.get('http://localhost:3000/extension.js', function (err, res) {
  //   var _extCode = res.body;
  //   setInterval(function () {
  //     // If it does, refresh the page
  //     request.get('http://localhost:3000/extension.js', function (err, res) {
  //       var extCode = res.body;
  //       if (extCode !== _extCode) {
  //         unsafeWindow.location.reload();
  //       }
  //     });
  //   }, 1e3);
  // });

  // // TODO: Add `data` to getFn
  // // TODO: Handling of username + password
  // // TODO: Prefer to use token over persistence of password
  // var pinboard_uri = 'https://api.pinboard.in/v1/posts/get',
  //     url = pinboard_uri + '?url=' + encodeURIComponent(window.location.href);
  // // request.get(url, function (err, res) {
  // //   console.log("ERROR2?" + err);
  // //   console.log("RES2?" + JSON.stringify(res));
  // // });

  // appAPI.message.addListener(function (msg) {
  //   console.log('MESSAGE RECEIVED: ' + msg);
  // });

});

},{}]},{},[1])
;