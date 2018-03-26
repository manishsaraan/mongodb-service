var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TestModel = new Schema({
  fname:String,
  lname:String,
  username:String,
  email:String,
});

mongoose.model('TestModel', TestModel);
