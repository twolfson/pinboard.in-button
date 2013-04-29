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