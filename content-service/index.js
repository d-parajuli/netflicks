const cote = require('cote');
const axios = require('axios');
const contentService = new cote.Responder({ name: 'Content-Service', namespace: 'content' });
const JSON = require('circular-json');



contentService.on('top',  (req, cb) => {
  console.log('TOP');
  getTopRatedMovies((a) => {
    cb(false, a);
  });
});



contentService.on('popular',  (req, cb) => {
  console.log('POPULAR');
   getPopularMovies((a) => {
    cb(false, a);
  });

});



contentService.on('popular_tv',  (req, cb) => {
  console.log('POPULAR TV');
   getPopularTV((a) => {
    cb(false, a);
  });

});


function getPopularMovies(cb){
  axios.get('https://api.themoviedb.org/3/movie/popular?api_key=1b025a3136844358c4b4d5c1c21e2ca8&language=en-US&page=1'
  )
  .then(function (myJson)
  {
    console.log("===>" + JSON.stringify(myJson.data.results))
    cb(
    {
    movies: myJson.data.results

    })
  })
  .catch((error) => {
    console.error('Error:' + error);
    return('Error:' + error)
  });
}



function getTopRatedMovies(cb){
  axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=1b025a3136844358c4b4d5c1c21e2ca8&language=en-US&page=1'
  )
  .then(function (myJson)
  {
    console.log("===>" + JSON.stringify(myJson.data.results))
    cb(
    {
    top: myJson.data.results

    })
  })
  .catch((error) => {
    console.error('Error:' + error);
    return('Error:' + error)
  });
}


function getPopularTV(cb){
  axios.get('https://api.themoviedb.org/3/tv/popular?api_key=1b025a3136844358c4b4d5c1c21e2ca8&language=en-US&page=1'
  )
  .then(function (myJson)
  {
    console.log("===>" + JSON.stringify(myJson.data.results))
    cb(
    {
  popular_tv: myJson.data.results

    })
  })
  .catch((error) => {
    console.error('Error:' + error);
    return('Error:' + error)
  });
}

getPopularTV()
