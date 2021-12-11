var mongoose = require('mongoose');

var chefsSchema = new mongoose.Schema({
	title: {
		type: String
	},
	description: {
		type: String
	},
	chefs: [
		{
			image: String,
			name: String,
			description: String,
		}
	]
});

var Chefs = mongoose.model('Chefs', chefsSchema);

module.exports = Chefs;