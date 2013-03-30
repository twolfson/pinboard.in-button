// Load in express and create our server
var express = require('express'),
    app = express();

// Host our files statically
app.use(express['static'](__dirname + '/lib/'));

// TODO: Open a /health route

// Listen at 3000
var port = 3000;
app.listen(port);
console.log('Server is running at http://localhost:' + port + '/');