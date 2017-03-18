/**
 * Created by treesseven on 15/03/2017.
 */
var express = require('express');
var config = require('./config/index.js');
var mongoose = require('mongoose');

var app = express();
config.settingExpress(app);
var routes = require('./routes.js')(app);
mongoose.connect(config.mongoUri);
var db = mongoose.connection;
db.once('open', function(){
   console.log("Connecting to mongoDatabase")
});

app.listen(config.port, function (err) {
   console.log('app is running at port '+ config.port);
});