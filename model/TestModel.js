var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TestModel = new Schema({
  fname:String,
  lname:String,
  username:Boolean,
  email:Boolean,
});

mongoose.model('TestModel', TestModel);
