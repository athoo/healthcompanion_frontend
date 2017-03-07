var express = require('express');
var app = express();
var path = require("path");
var os = require("os");
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var querystring = require('querystring');


var accessTokenUri = 'https://api.fitbit.com/oauth2/token'
var authorizationHost = 'https://www.fitbit.com/oauth2/authorize';
var client_id = process.env.CLIENT_ID;
var client_secret = process.env.CLIENT_SECRET;
var mongoUrl = process.env.MONGO_URL;
var baseAuthorization= new Buffer(client_id+":"+client_secret).toString('base64');
// var callBack = 'https://fitcomp.herokuapp.com/callback';
var callBack = 'http://localhost:5000/callback'

var authorizationQuery = {
  'response_type':'code',
  'client_id': client_id,
  'redirect_uri':callBack,
  'scope':'activity heartrate location nutrition profile settings sleep social weight',
  'expires_in':'604800'
}
var authorizationUri = authorizationHost + '?' + querystring.stringify(authorizationQuery);



app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/.'));

// views is directory for all template files
// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');

app.get('/auth', (req, res) => {
  console.log(authorizationUri);
  res.redirect(authorizationUri);
});

app.get('/callback', (req, response) => {
  const code = req.query.code;
  var postData = {
    'clientId':client_id,
    'grant_type':'authorization_code',
    'redirect_uri':callBack,
    'code':code
  };
  request({
    headers: {
      'Authorization': 'Basic ' + baseAuthorization,
      'Content-Type':'application/x-www-form-urlencoded'
    },
    url: accessTokenUri,
    body:querystring.stringify(postData),
    method: 'POST'
  }, function (err, res, body) {
    response.send(body);
  });
});


app.get('/index', function(request, response) {
  response.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/planning_page', function(request, response) {
  // response.send(cool());
  console.log("this is the dirname"+__dirname);
  response.sendFile(path.join(__dirname+'/planning_page.html'));
});

app.get('/', (req, res) => {
  res.send('Hello<br><a href="/auth">Log in with Fitbit</a>');
});

app.listen(app.get('port'), function() {
  // console.log(os.hostname());
  console.log('Node app is running on port', app.get('port'));
});
