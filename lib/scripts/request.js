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
      console.log('data', content);
      body += content;
    });

    // Callback when the body is done being collected
    res.on('end', function () {
      cb(null, res, body);
    });
  });
}

module.exports = request;