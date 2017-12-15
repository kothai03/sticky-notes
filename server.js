// Application entry point. Module dependency.
const express = require('express');

// Custom dependecy.
const config = require('./config');
const db = require('./src/mongo');
const bodyParser = require('body-parser');

const { addSticky } = require('./src/routes');

const app = express();
const router = express.Router();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// routes.
router.post('/add', addSticky);

db.open((err, dbConfig) => {
  if (err) throw err;
  // route specific middleware - will expose the database to route
  const exposeDb = (req, resp, next) => {
    req.mongoDb = dbConfig;
    next();
  };
  app.use('/', exposeDb, router);
  app.listen(config.port);
  console.log('server & DB listening');
});
