var user = require('./testmodel.js');
var mongoose = require('mongoose');

var mongooseDB = "mongodb+srv://dikshya:473468diku@cluster0-o8l45.mongodb.net/netflicks?retryWrites=true&w=majority";

//this is connecting to Mongo DB
mongoose.connect(mongooseDB,  { useNewUrlParser: true });


mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);


var db = mongoose.connection;

db.once('open', function(){
	console.log('Connection has been made!!');
})
.on('error', function(error){
	console.log('ERROR', error);
})

module.exports = {
	registerUsers:(req, cb)=>{
		console.log('register-users: ' + JSON.stringify(req));
		cb('ok')
	},
	loginUsers:(req, cb)=>{
		console.log('login-users: ' + JSON.stringify(req));
		cb('ok')
	},
	getFavorites: (req, cb) =>
	{
		console.log('req-db: ' + JSON.stringify(req));
		cb('ok')
	},
	writeFavorite: (req, cb) =>
	{
		console.log('write-db: ' + JSON.stringify(req));
		cb ('ok')
	}
}
