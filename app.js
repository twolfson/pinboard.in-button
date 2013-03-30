// Load in express and create our server
var express = require('express'),
    app = express();

// Log requests as they come in
app.use(express.logger('short'));

// Host our files statically
app.use(express['static'](__dirname + '/build/'));

// Health page (attribution to dshaw)
var pkg = require('./package.json');
    version = pkg.version;
app.get('/health', function (req, res) {
  var health = {
    'version': pkg.version,
    'pid': process.pid,
    'memory': process.memoryUsage(),
    'uptime': process.uptime()
  };
  res.send(health);
});

// Listen at 3000
var port = 3000;
app.listen(port);
console.log('Server is running at http://localhost:' + port + '/');