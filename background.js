/************************************************************************************
  This is your background code.
  For more information please visit our wiki site:
  http://docs.crossrider.com/#!/guide/background_scope
*************************************************************************************/
// Rename appAPI to app (derp)
var app = appAPI;

// Make an error first request handler
var appRequest = app.request,
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
    };

// BUTTON CODE
var button = appAPI.browserAction;
button.setResourceIcon('grey_pin.png');

button.onClick(function () {
  button.setResourceIcon('blue_pin.png');

  appAPI.message.toActiveTab('yo dawg');
});