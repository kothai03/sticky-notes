const mongo = require('mongodb');
const config = require('../config');

// server options
const serverOptions = {
  auto_reconnect: true,
  poolSize: 10,
};

// Use connect method to connect to the server
const server = new mongo.Server(config.host, config.dbPort, serverOptions);
// create mongo database
const db = new mongo.Db(config.dbName, server, {});

module.exports = db;
