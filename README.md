# mongodb-service

A service to perform mongoose queries with promises.

[![version](https://img.shields.io/npm/v/mongodb-service.svg?style=flat-square)]((http://npm.im/mongodb-service))
[![downloads](https://img.shields.io/npm/dm/mongodb-service.svg?style=flat-square)](https://npm-stat.com/charts.html?package=mongodb-service&from=2018-01-01&to=2029-03-16)
[![MIT License](https://img.shields.io/npm/l/mongodb-service.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg?style=flat-square)](https://github.com/xojs/xo)


 **Note** : Populate support will be added soon.
# How to use
 You can use this module by passing the **query**, **model** as params.
  ## Insert
  ```
  const ms = require('mongodb-service');
 const userObj = {
    fname: 'first',
    lname: 'last',
    username: 'testusername',
    email: 'test@gmail.com'
};

ms.create(userObj, TestModel)
        .then(data => {
          //success response
        })
        .catch(err => {
         //handle error
});
 ```
## findOne
  Get one record from the db.
```
ms.findOne({username: userObj.username}, TestModel)
   .then(data => {
     //handle success
   })
   .catch(err => {
     //handle error
});
```
## Update

  Update a record in db. You have to pass **query**, **update query** and **model** for this operation.
```
ms.update({username: userObj.username}, {$set: {username: 'updatedusername'}}, TestModel)
    .then(data => {
      //handle success
    })
    .catch(err => {
      //handle errror
});

```
## findAll

Get all the documents from db.
```
 ms.findAll({username: userObj.username}, TestModel)
    .then(data => {
     //handle success
    })
    .catch(err => {
     //handle error
});
```
## Delete
Remove one/all documents.
```
ms.delete({username: 'updatedusername'}, TestModel)
    .then(data => {
    //handle success
    })
    .catch(err => {
    //handle error
});
```

