module.exports = {

    get: (query, Model, populateFlag) => {
        return new Promise((resolve, reject) => {

            Model.findOne(query, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    },

    list: (query, Model) => {
        Model.find(query, (err, result) => {
            if (err) {
                callback(true, err);
            } else {
                callback(false, result);
            }
        });
    },

    update: (query, data, Model) => {
        return new Promise((resolve, reject) => {

            Model.update(query, data, (err, updatedData) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(updatedData);
                }
            });
        });
    },

    create: (data, Model) => {
        return new Promise((resolve, reject) => {

            let saveRecord = new Model(data);
            saveRecord.save((err, savedData) => {
                if (err) {
                    reject(err);
                }
                resolve(savedData);

            });
        });

    },

    delete: (query, Model) => {
        return new Promise((resolve, reject) => {

            Model.remove(query).exec((err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    },

};
