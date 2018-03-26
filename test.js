const m = require('.');
const mongoose = require('mongoose');
const config = require('./config/config');
require('./model/TestModel');

mongoose.connect(config.url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
var  TestModel = mongoose.model('TestModel');

m.create({groupName : 'etst', userName : 'test', showchord : false, showfret : false}, TestModel).then( (data) => {
    console.log(data);
}).
catch( err => {
    console.log(err);
});

m.get({groupName : 'etst'}, TestModel).
then( data => {
   console.log(data);
}).
catch( err => console.log(err));

