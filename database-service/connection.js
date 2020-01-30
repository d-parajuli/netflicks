let user = require('./testmodel.js');
let mongoose = require('mongoose');
let mongooseDB = "mongodb+srv://dikshya:473468diku@cluster0-o8l45.mongodb.net/netflicksUser?retryWrites=true&w=majority";
let shajs = require('sha.js');
const jwt = require ('jsonwebtoken');

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
	registerUser:(req, cb)=>{
		console.log('register-users: ' + JSON.stringify(req));
		let userHashedPwd = req.user;
		userHashedPwd.password = shajs('sha256').update(userHashedPwd.password).digest('hex');
		console.log('check:' + userHashedPwd)
		let MyUser = new user(userHashedPwd);
		MyUser
			.save()
			.then(a => {
				console.log('a:' + true);
				cb(JSON.stringify(a))
			})
			.catch(e => {
				console.log('e:' + JSON.stringify(e));
				cb(JSON.stringify(e))
			})
	},

	loginUser:(req, cb)=>{
		console.log('VERIFICATION HERE: ' + JSON.stringify(req.user));
		user.find({email: req.user.email}, {}, {}, (err, userReturn) =>
		{
					// compare password for the user
					if (userReturn[0].password === req.user.password)
					{
						const accessToken= jwt.sign({email:req.user.email}, "secret-keu")
						console.log(req.user.email + " has token " + accessToken)
						cb(true, accessToken)
					}
					else{
						cb(false, "error, incorrect credentials")
					}
		})		// this should pass cb true if user pw is verified
	},

	writeFavorite: (req, cb) =>
	{
		console.log("REQUEST INTO WRTIE" + req.message + JSON.stringify(req.fav));
		user.findOneAndUpdate(
			{email: req.message},
			{$push: {list: req.fav }},
			{},
			(err, success) =>
			{
				if(err){
					console.log(err)
				cb(false, "please try again")
			}
			else{
				console.log("Movie successfully added")
				cb(true,"Movie successfully added")
			}
		 })
	},

	displayList: (req, cb)=>{
		console.log("REQUEST TO DISPLAY LIST FROM" + req.message)
		user.find({email:req.message}, {}, {}, (err, userReturn) =>{
			if (userReturn[0].list!== null){
				let list = userReturn[0].list;
				console.log("LIST RETURNED HERE" + list)
				cb(true, list)
			}
			else{
				cb(false, "Nothing found")
			}

		})
	}
}
