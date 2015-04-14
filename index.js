'use strict';

var express = require('express');
var stormpath = require('express-stormpath');

// Globals
var app = express();

// Application settings
app.set('view engine', 'jade');
app.set('views', './src/views');

// Middlewares
app.use(stormpath.init(app));

// Server
app.listen(process.env.PORT || 3000);