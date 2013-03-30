/************************************************************************************
  This is your Page Code. The appAPI.ready() code block will be executed on every page load.
  For more information please visit our docs site: http://docs.crossrider.com
*************************************************************************************/

// DEV: Move to mustache layout to share common modules
// DEV: Might be even better to move to browserify but uncertain -- gets us qs and such

// Rename appAPI to app (derp)
var app = appAPI;

// Make an error first request handler
var appRequest = app.request,
    appRequestGet = appRequest.get,
    getFn = function (url, cb) {
      var options = url;

      // If the options are a string, upcast it as an object
      if (typeof options === 'string') {
        options = {url: url};
      }

      // If there are headers, expand the name
      var headers = options.headers;
      if (headers) { options.additionalRequestHeaders = headers; }

      // TODO: Add properties to clone of options not options itself.
      // This could cause unwanted side-effects. However, this is limited to the scope of the repo.

      // Add a success and failure handler to options
      options.onSuccess = function (body, addlInfo) {
        cb(null, {body: body, headers: addlInfo.headers});
      };

      options.onFailure = function (httpCode) {
        var err = new Error('HTTP ERROR (' + httpCode + '): Failed to reach "' + url + '"');
        cb(err);
      };

      // Call the normal method
      appRequestGet(options);
    },
    // TODO: POST in similar fashion
    request = getFn;

// Expose request as an object with {get, post}
// that can be conveniently invoked for get
request.get = getFn;

appAPI.ready(function($) {
  console.log('hey', window.location);
  // If we are on a crossrider debug page
  // http://crossrider.com/apps/27849/debug
  var location = window.location,
      isCrossrider = location.hostname === 'crossrider.com',
      isDebugPage = location.pathname.match('/debug');
  if (isCrossrider && isDebugPage) {
    // TODO: Move this into a build conditional
    // TODO: Move back off of health and onto file watcher for background.js -> triggers click of 'reload background code'
    // TODO: Move back off of health and onto file watcher for extension.js -> triggers reload of page
    // When the page is loaded, start up a watcher script
    request.get('http://localhost:3000/background.js', function (err, res) {
      // Watch the /background.js to see if it changes
      var _bgCode = res.body;
      console.log(_bgCode.replace(/\s+/g, ''));
      setInterval(function () {
        // If it does, click the reload background code button
        request.get('http://localhost:3000/background.js', function (err, res) {
          var bgCode = res.body;
          if (bgCode !== _bgCode) {
            unsafeWindow.$('#debug-reload-background').click()
            _bgCode = bgCode;
          }
        });
      }, 1e3);
    });
  } else {
    console.log('Be sure you are running on crossrider.com/debug');
  }

  // Place your code here (you can also define new functions above this scope)
  // The $ object is the extension's jQuery object

  // TODO: Add `data` to getFn
  // TODO: Handling of username + password
  // TODO: Prefer to use token over persistence of password
  var pinboard_uri = 'https://api.pinboard.in/v1/posts/get',
      url = pinboard_uri + '?url=' + encodeURIComponent(window.location.href);
  // request.get(url, function (err, res) {
  //   console.log("ERROR2?" + err);
  //   console.log("RES2?" + JSON.stringify(res));
  // });

  appAPI.message.addListener(function (msg) {
    console.log('MESSAGE RECEIVED: ' + msg);
  });

});