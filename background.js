/************************************************************************************
  This is your background code.
  For more information please visit our wiki site:
  http://docs.crossrider.com/#!/guide/background_scope
*************************************************************************************/

// BUTTON CODE


var button = appAPI.browserAction;
button.setResourceIcon('grey_pin.png');

button.onClick(function () {
  button.setResourceIcon('blue_pin.png');

  appAPI.message.toActiveTab('yo dawg');
});