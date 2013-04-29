;(function(e,t,n){function i(n,s){if(!t[n]){if(!e[n]){var o=typeof require=="function"&&require;if(!s&&o)return o(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=t[n]={exports:{}};e[n][0].call(u.exports,function(t){var r=e[n][1][t];return i(r?r:t)},u,u.exports)}return t[n].exports}var r=typeof require=="function"&&require;for(var s=0;s<n.length;s++)i(n[s]);return i})({1:[function(require,module,exports){
/************************************************************************************
  This is your background code.
  For more information please visit our wiki site:
  http://docs.crossrider.com/#!/guide/background_scope
*************************************************************************************/
// Rename appAPI to app (derp)
var app = appAPI;

var request = require('./scripts/request');
request('http://google.com/', function (err, res, body) {
  console.log(body);
});

// BUTTON CODE
var button = appAPI.browserAction;
button.setResourceIcon('grey_pin.png');

button.onClick(function (e) {
  // TODO: Use alt+shift+click for options
  // TODO: Notify user about this via description and tooltip
  button.setResourceIcon('blue_pin.png');

  appAPI.message.toActiveTab('yo dawg');
});
},{"./scripts/request":2}],2:[function(require,module,exports){
// Starting with a quick and dirty hyperquest wrapper
var hyperquest = require('hyperquest');
function request(uri, opts, cb) {
  // Copy/pasted from hyperquest
  // https://github.com/substack/hyperquest/blob/aafce3b094b07f7c52a709a4a374b24b151e58a0/index.js#L19-L27
  if (typeof uri === 'object') {
      cb = opts;
      opts = uri;
      uri = undefined;
  }
  if (typeof opts === 'function') {
    cb = opts;
    opts = undefined;
  }

  // Call hyperquest but collect data from our response
  hyperquest(uri, opts, function (err, res) {
    // If there was an error, callback
    if (err) { return cb(err); }

    // Otherwise, collect the body
    var body = '';
    res.on('data', function (content) {
      body += content;
    });

    // Callback when the body is done being collected
    res.on('end', function () {
      cb(null, res, body);
    });
  });
}

module.exports = request;
},{"hyperquest":3}]