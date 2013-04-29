/************************************************************************************
  This is your background code.
  For more information please visit our wiki site:
  http://docs.crossrider.com/#!/guide/background_scope
*************************************************************************************/
// Rename appAPI to app (derp)
var app = appAPI;

var hyperquest = require('hyperquest');
hyperquest.get({
  uri: 'http://google.com/'
}, function (err, res) {
  console.log(res);
  res.on('data', console.log);
});

// BUTTON CODE
var button = appAPI.browserAction;
button.setResourceIcon('grey_pin.png');

// DEV: Give me the sexy. I want event emitter syntax for button and messaging

button.onClick(function (e) {
  // TODO: Use alt+shift+click for options
  // TODO: Notify user about this via description and tooltip
  button.setResourceIcon('blue_pin.png');

  appAPI.message.toActiveTab('yo dawg');
});