const mongoose = require('mongoose');
const expect = require('chai').expect;
const config = require('./config/config');
const m = require('.');
require('./model/test-model');

const TestModel = mongoose.model('TestModel');

mongoose.connect(config.url);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const userObj = {
	fname: 'first',
	lname: 'last',
	username: 'testusername',
	email: 'test@gmail.com'
};

describe('Create, Update, Get, List and Remove actions performed', () => {
	it('Should add document into collection', done => {
		m.create(userObj, TestModel).then(data => {
			expect(data).to.be.length(1);
			done();
		})
        .catch(err => {
	expect(err).to.not.equal(null);
	done();
});
	});

	it('Should add get a document from collection', done => {
		m.findOne({username: userObj.username}, TestModel).then(data => {
			expect(data).to.be.length(1);
			done();
		})
        .catch(err => {
	expect(err).to.not.equal(null);
	done();
});
	});

	it('Should add get all documents from collection', done => {
		m.findAll({username: userObj.username}, TestModel).then(data => {
			expect(data).to.be.length(1);
			done();
		})
        .catch(err => {
	expect(err).to.not.equal(null);
	done();
});
	});

	it('Should add update a document', done => {
		m.update({username: userObj.username}, {$set: {username: 'updatedusername'}}, TestModel).then(data => {
			expect(data.username).to.equal('updatedusername');
			done();
		})
        .catch(err => {
	expect(err).to.not.equal(null);
	done();
});
	});

	it('Should add delete a document', done => {
		m.delete({username: 'updatedusername'}, TestModel).then(data => {
			done();
		})
        .catch(err => {
	expect(err).to.equal(null);
	done();
});
	});
});
