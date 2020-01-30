var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var FavoriteSchema = new Schema(
	   {
	   	title: {type: String, required: true },
	    poster_path: {type: String, required: true },
	    vote_average: {type: String, required: true },
	 	}
 	);

//create Schema
var UserSchema = new Schema({
  name: {type: String, required: true, max: 64},
  email: {type: String, required: true, max: 64},
  password: {type: String, required: true, max: 64},
  list: [FavoriteSchema]
});




//create model with name Test based on TestSchema and export it
module.exports = mongoose.model('user', UserSchema);
