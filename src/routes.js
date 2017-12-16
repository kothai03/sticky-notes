
// Application routes goes here.
const Boom = require('boom');
const {
  getAllSticky,
  addSticky,
  updateDeleteSticky,
} = require('./fetch-helpers');

// get sticky details.
const getSticky = (req, res) => {
  getAllSticky()
    .then((response) => {
      if (response) {
        return res.send(response);
      }
      return res.send(Boom.badImplementation('Internal error'));
    })
    .catch(err => res.send(err));
};

// add sticky details.
const addStickyInfo = (req, res) => {
  const stickyInfo = req.body || res.send(Boom.badImplementation('Please add the sticky information'));
  addSticky(stickyInfo)
    .then((response) => {
      if (response.insertedCount === 1 || response.result.ok === 1) {
        return res.send(response);
      }
      return res.send(Boom.badImplementation('Internal error'));
    })
    .catch(err => res.send(err));
};

// update sticky details.
const updateSticky = (req, res) => {
  const stickyId = req.params.id || res.send(Boom.badImplementation('Please add the sticky information'));
  const status = req.params.status || res.send(Boom.badImplementation('Please add the sticky information'));
  updateDeleteSticky(stickyId, status)
    .then((response) => {
      if (response.result.ok === 1) {
        return res.send(response);
      }
      return res.send(Boom.badImplementation('Internal error'));
    })
    .catch(err => res.send(err));
};

module.exports = {
  getSticky,
  addStickyInfo,
  updateSticky,
};
