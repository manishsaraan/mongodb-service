const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TestModel = new Schema({
	fname: String,
	lname: String,
	username: String,
	email: String
});

mongoose.model('TestModel', TestModel);
