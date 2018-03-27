module.exports = {
    // Get one record from collection

	findOne: (query, Model) => {
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

    // Get all record from collection
	findAll: (query, Model) => {
		return new Promise((resolve, reject) => {
			Model.find(query, (err, result) => {
				if (err) {
					reject(err);
				} else {
					resolve(result);
				}
			});
		});
	},

    // Update a record
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

    // Create a record
	create: (data, Model) => {
		return new Promise((resolve, reject) => {
			const saveRecord = new Model(data);
			saveRecord.save((err, savedData) => {
				if (err) {
					reject(err);
				}
				resolve(savedData);
			});
		});
	},

    // Delete a record
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
	}

};
