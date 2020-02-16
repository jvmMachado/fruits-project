const Mongoclient = require('mongodb').MongoClient;
const assert = require('assert');

//Connection URL
const url = 'mongodb://localhost:27017';

//Database Name
const dbName = 'myproject';

//create a new MongoClient
const client = new MongoClient(url);

//Use connect method to connect to the Server
client.connect(function(err) {
    assert.equal(null, err);
    console.lot('Connected successfully to server');

    const db = client.db(dbName);

    client.close();
});