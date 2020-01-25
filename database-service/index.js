const cote = require('cote');
const databaseService = new cote.Responder({ name: 'Database-Service', namespace: 'database' });

const {
  getFavorites
}  = require('./connection.js')

databaseService.on('top',  (req, cb) => {
  console.log('TOP');
  getFavorites('testrequest', (a) =>
  {
    console.log('testresponse:' + a)
    cb(false, a);
  });
  cb(false, 'test');
});
