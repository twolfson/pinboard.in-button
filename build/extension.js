;(function(e,t,n){function i(n,s){if(!t[n]){if(!e[n]){var o=typeof require=="function"&&require;if(!s&&o)return o(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=t[n]={exports:{}};e[n][0].call(u.exports,function(t){var r=e[n][1][t];return i(r?r:t)},u,u.exports)}return t[n].exports}var r=typeof require=="function"&&require;for(var s=0;s<n.length;s++)i(n[s]);return i})({1:[function(require,module,exports){
/************************************************************************************
  This is your Page Code. The appAPI.ready() code block will be executed on every page load.
  For more information please visit our docs site: http://docs.crossrider.com
*************************************************************************************/

// // Rename appAPI to app (derp)
// var app = appAPI,
//     request = require('./scripts/request');

// // If we are on a crossrider debug page
// // http://crossrider.com/apps/27849/debug
// var location = window.location,
//     isCrossrider = location.hostname === 'crossrider.com',
//     isDebugPage = location.pathname.match('/debug');
// if (isCrossrider && isDebugPage) {
//   // TODO: Move this into a build conditional
//   // Watch /background.js to see if it changes
//   request('http://localhost:3000/background.js', function (err, res, body) {
//     var _bgCode = body;
//     setInterval(function () {
//       // If it does, click the reload background code button
//       request('http://localhost:3000/background.js', function (err, res, body) {
//         var bgCode = body;
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
// request('http://localhost:3000/extension.js', function (err, res, body) {
//   var _extCode = body;
//   setInterval(function () {
//     // If it does, refresh the page
//     request('http://localhost:3000/extension.js', function (err, res, body) {
//       var extCode = body;
//       console.log('yyy', extCode, _extCode);
//       if (extCode !== _extCode) {
//         unsafeWindow.location.reload();
//       }
//     });
//   }, 1e3);
// });


var a = '1';
appAPI.ready(function($) {
// var x = XMLHttpRequest();
// x.open('GET', 'http://localhost:3000/extension.js', true);
// x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
// x.onreadystatechange = function () {
//   console.log(x.responseText);
// };

// x.send();
  var a = a || '3';
  console.log('aaa', a);
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