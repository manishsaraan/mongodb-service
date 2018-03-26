const m = require('.');
const mongoose = require('mongoose');
const config = require('./config/config');
const expect = require('chai').expect;
require('./model/TestModel');
const TestModel = mongoose.model('TestModel');

mongoose.connect(config.url);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

let userObj = {
    fname : 'first',
    lname : 'last',
    username : 'testusername',
    email : 'test@gmail.com'
};

describe('Create, Update, Get, List and Remove actions performed', () => {
   it('Should add document into collection', (done) => {

        m.create(userObj, TestModel).then( data => {
            expect(data).to.be.length(1);
            done();
        }).
        catch(err => {
            expect(err).to.not.equal(null);
            done();
        });

   });

   it('Should add get a document from db', () => {

        m.get({username : userObj.username}, TestModel).then( data => {
            expect(data).to.be.length(1);
        }).
        catch(err => {
            expect(err).to.not.equal(null);
        });

   });

   it('Should add update a document', () => {

        m.update({username : userObj.username}, { $set: { username: 'updatedusername' } },TestModel).then( data => {
            expect(data.username).to.equal('updatedusername');
        }).
        catch(err => {
            expect(err).to.not.equal(null);
        });

   });

   it('Should add delete a document', () => {

        m.delete({username : 'updatedusername'}, TestModel).then( data => {

        }).
        catch(err => {
            expect(err).to.equal(null);
        });

    });

});

