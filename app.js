
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

// routes
var index = require('./routes/index');
var homepage = require('./routes/homepage');
var map = require('./routes/map');
var places = require('./routes/places');
var place = require('./routes/place');
var upload = require('./routes/upload');
// Example route
// var user = require('./routes/user');

var app = express();

var hbs;
hbs = handlebars.create({
// Specify helpers which are only registered on this instance.
helpers: {
    stars: function(n) {
        var res = '';

        for(var i = 0; i < n; ++i) {
          res += "★";
        }

        for(var i = 0; i < 5 - n; i++) {
          res += "☆";
        }

        return res;
      }
    }
});

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.favicon(__dirname + "/public/images/favicon.ico"));
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/homepage', homepage.view);
app.get('/map', map.view);
app.get('/places', places.view);
app.get('/places/:id', place.view);
app.get('/upload', upload.view);

// For posts
app.post('/places', places.add);

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
