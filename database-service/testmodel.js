var mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
var Schema = mongoose.Schema;


//create Schema
var StockSchema = new Schema(
	   {
	   	tickr: {type: String, required: true, max: 64},
	    quantity: {type: Number, required: true },
	    buy_price: {type: Number, required: true },
	    sell_price: {type: Number, required: true }
	 	}
 	);

//create Schema
var UserSchema = new Schema({
  name: {type: String, required: true, max: 64},
  email: {type: String, required: true, max: 64},
  password: {type: String, required: true, max: 64},
  stocks:[StockSchema],
  session_id: {type: String, max: 64}
});



//create model with name Test based on TestSchema and export it
module.exports = mongoose.model('user', UserSchema);
