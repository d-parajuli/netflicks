const cote = require('cote');
const databaseService = new cote.Responder({ name: 'Database-Service', namespace: 'database' });

const {
  registerUser,
  loginUser,
  writeFavorite,
  displayList
}  = require('./connection.js')

databaseService.on('register',  (req, cb) => {
  registerUser(req.query, a =>
  {
    console.log("-----> " + true)
    cb(false, {data:a});
  })
});

databaseService.on('userlogin',  (req, cb) => {
  	loginUser(req.query, (a, accessToken) =>
  {
    console.log("-----> " + a + " --" + accessToken)
    cb(false, {data:{status:a, token:accessToken}});
  })
});


databaseService.on('writeFavorite',  (req, cb) => {
  	writeFavorite(req.query, a =>
  {
    console.log("-----> " + a)
    cb(false, {status: a});
  })
});


databaseService.on('displayList',  (req, cb) => {
  	displayList(req.query, (a, userlist) =>
  {
    console.log("-----> " + userlist)
    cb(false, userlist);
  })
});
