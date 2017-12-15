// Application entry point.

// Module dependency.
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Custom dependecy.
const config = require('./config');
const db = require('./src/mongo');
const { addStickyInfo, updateSticky } = require('./src/routes');

const app = express();
const router = express.Router();

// Application middleware goes here.
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, 'client')));

// routes.
router.post('/add', addStickyInfo);
router.put('/update/:id/:status', updateSticky);
router.delete('/remove/:id/:status', updateSticky);

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
