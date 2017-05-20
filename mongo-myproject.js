var MongoClient = require('mongodb').MongoClient
, assert = require('assert');

var url = 'mongodb://localhost:27017/myproject';

MongoClient.connect(url, function(err, db) {
	assert.equal(null, err);
	console.log("connected successfully");
	db.close();
});
