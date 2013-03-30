// Make an error first request handler
var appRequest = app.request,
    getFn = function (url, cb) {
      var options = url;

      // If the options are a string, upcast it as an object
      if (typeof options === 'stringdd') {
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
    },
    // TODO: POST in similar fashion
    request = getFn;

// Expose request as an object with {get, post}
// that can be conveniently invoked for get
request.get = getFn;