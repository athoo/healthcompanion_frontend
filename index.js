var express = require('express');
var app = express();
var path = require("path");
var os = require("os");
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var querystring = require('querystring');
var request = require('request');
var moment = require('moment');
var start_time = '6:00';
var end_time = '22:00';
var today = moment().format('YYYY-MM-DD');
var days = 7;
var user_identity;
// var data_summary;

var accessTokenUri = 'https://api.fitbit.com/oauth2/token'
var authorizationHost = 'https://www.fitbit.com/oauth2/authorize';
var client_id = process.env.CLIENT_ID;
var client_secret = process.env.CLIENT_SECRET;
var mongoUrl = process.env.MONGO_URL;
var baseAuthorization = new Buffer(client_id + ":" + client_secret).toString('base64');
// var callBack = 'https://fitcomp.herokuapp.com/callback';
var callBack = 'http://localhost:5000/callback'

var authorizationQuery = {
  'response_type': 'code',
  'client_id': client_id,
  'redirect_uri': callBack,
  'scope': 'activity heartrate location nutrition profile settings sleep social weight',
  'expires_in': '604800'
}
var authorizationUri = authorizationHost + '?' + querystring.stringify(authorizationQuery);

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/.'));

// app.set('view engine', 'pug')


// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));


app.get('/auth', (req, res) => {
  console.log(authorizationUri);
  res.redirect(authorizationUri);
});

app.get('/callback', (req, response) => {
  console.log('we are in callback');
  const code = req.query.code;
  var postData = {
    'clientId': client_id,
    'grant_type': 'authorization_code',
    'redirect_uri': callBack,
    'code': code
  };
  request({
    headers: {
      'Authorization': 'Basic ' + baseAuthorization,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    url: accessTokenUri,
    body: querystring.stringify(postData),
    method: 'POST'
  }, function (err, res, body) {
    // response.send(body);

    // console.log(JSON.parse(body))
    console.log(typeof (body));

    // send the authentication info to mongo db
    MongoClient.connect(mongoUrl, function (err, db) {
      console.log("Connect successfully to mlab");
      var accounts = db.collection('accounts');
      var data = JSON.parse(body);
      data.update_time = new Date().toString();
      accounts.update({
        "user_id": data["user_id"]
      }, data, {
        upsert: true
      });
      var access_token = data.access_token;
      var user_id = data.user_id;
      user_identity = user_id;
      var summary_data = [];


      // collection.insertOne(JSON.parse(body));
      var profile = {
        url: 'https://api.fitbit.com/1/user/' + user_id + '/profile.json',
        headers: {
          'Authorization': 'Bearer ' + access_token
        }
      }

      request(profile, function (err, res, body) {
        var profiles = db.collection('profiles');
        var data = JSON.parse(body);
        profiles.update({
          "user.encodedId": data.user.encodedId
        }, data, {
          upsert: true
        });

        console.log("start generate several days");
        var several_days = [];
        for (var m = moment(today); days > 0; m.subtract(1, 'days')) {
          var date = m.format('YYYY-MM-DD');
          var intradaySteps = {
            url: 'https://api.fitbit.com/1/user/' + user_id + '/activities/steps/date/' + date + '/1d/1min/time/' + start_time + "/" + end_time + '.json',
            headers: {
              'Authorization': 'Bearer ' + access_token
            }
          }
          days = days - 1;
          several_days.push(intradaySteps);
        }

        function callTheData(intradaySteps) {
          return new Promise(resolve => {
            request(intradaySteps, function (err, res, body) {
              //start procesisng the body data
              var data_bucket = db.collection(user_id);
              var data = JSON.parse(body);
              data_bucket.update({
                  "activities-steps.dateTime": date
              }, data, {
                  upsert: true
              });
              // process one unit
              console.log(data);
              var dateTime = data["activities-steps"][0]["dateTime"];
              var steps_all = data["activities-steps"][0]["value"];

              // process intraday one day data
              var summary_data = [];
              for (var item in data["activities-steps-intraday"]["dataset"]) {
                var time = data["activities-steps-intraday"]["dataset"][item]["time"];
                var value = data["activities-steps-intraday"]["dataset"][item]["value"];
                var unit = {
                  "steps_all": steps_all,
                  "time": time,
                  "dateTime": dateTime,
                  "steps_value": value
                }
                // console.log(unit);
                summary_data.push(unit);
              }
              resolve(summary_data);
            })
          })
        }

        async function addData(several_days) {
          var dataCube = [];
          for (i = 0; i < several_days.length; i++) {
            // dataCube[i] = 
            dataCube = dataCube.concat(await callTheData(several_days[i]));
            // dataCube.push((several_days[i]));
          }

          return {"id":user_id, "summary": dataCube};
        }

        addData(several_days)
          .then(v => {
            // console.log(v);
            // console.log(v.length);
            // v;
            console.log(v);
            var user_summary = db.collection("summary");
            // console.log(user_summary);
            // var data = JSON.parse(v);
            user_summary.update({id: user_id
            }, v, {
                upsert: true
            });

            response.redirect('/stat');
          });

        // end of daily activities request
      });
    });
    // res.redirect(authorizationUri);
  });
});


app.get('/stat', function (request, response) {
  console.log("this is the /index directory");
  response.render('pages/index', {user: user_identity});

});

app.get('/planning_page', function (request, response) {
  // response.send(cool());
  console.log("this is the dirname" + __dirname);

  response.render('pages/planning', {user: user_identity});
  // response.sendFile(path.join(__dirname + '/planning_page.html'));
});

app.get('/', (req, res) => {
  console.log("this is the / directory");
  res.send('Hello<br><a href="/auth">Log in with Fitbit</a>');
});

app.listen(app.get('port'), function () {
  // console.log(os.hostname());
  console.log('Node app is running on port really?', app.get('port'));
});