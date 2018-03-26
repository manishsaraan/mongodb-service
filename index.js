module.exports = {

    get: (query, Model, populateFlag) => {
       return new Promise( (resolve, reject) => {
            if (populateFlag && populateFlag !== 'null') {
                Model.findOne(query).populate(populateFlag).exec( (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                });
            } else {
                Model.findOne(query, (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                });
            }
        });
    },

    list: (query, Model, populateFlag) => {
        if (populateFlag && populateFlag !== 'null') {
            Model.find(query).populate(populateFlag).exec( (err, result) => {
                if (err) {
                    callback(true, err);
                } else {
                    callback(false, result);
                }
            });
        } else {
            Model.find(query, (err, result) => {
                if (err) {
                    callback(true, err);
                } else {
                    callback(false, result);
                }
            });
        }
    },

    update: (data, Model) => {
        var publisher = sails.hooks.publisher;
        //publish to update
        publisher.create(Model, data).removeOnComplete(true).save( err => {
            if (err) {
                callback(true, err);
            } else {
                callback(false);
            }
        });
    },

    create: (data, Model) =>  {
      return new Promise( (resolve, reject) => {

         let saveRecord = new Model(data);
         saveRecord.save( (err, savedData) => {
    if (err){
                  reject(err);
                }
                resolve(savedData);

            });
      });

    },

    remove: (query, Model) => {
        console.log("query in destroy", query);
        Model.destroy(query).exec( (err, result) => {
            if (err) {
                callback(true, err);
            } else {
                callback(false, result);
            }
        });
    },

};
