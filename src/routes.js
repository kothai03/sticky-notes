
// Application routes goes here.

const {
  addSticky,
  updateDeleteSticky,
} = require('./fetch-helpers');

const addStickyInfo = (req, res) => {
  const stickyInfo = req.body || res.send('oops! Please add the sticky information');
  // add sticky details.
  addSticky(stickyInfo)
    .then((response) => {
      if (response.insertedCount === 1 || response.result.ok === 1) {
        const message = { statusCode: '200', message: 'success' };
        return res.send(message);
      }
      const message = { statusCode: '500', message: 'Internal error' };
      return res.send(message);
    })
    .catch(err => res.send(err));
};

const updateSticky = (req, res) => {
  const stickyId = req.params.id || res.send('oops! Please add the sticky information');
  const status = req.params.status || res.send('oops! Please add the sticky information');
  // add sticky details.
  updateDeleteSticky(stickyId, status)
    .then((response) => {
      if (response.result.ok === 1) {
        const message = { statusCode: '200', message: 'success' };
        return res.send(message);
      }
      const message = { statusCode: '500', message: 'Internal error' };
      return res.send(message);
    })
    .catch(err => res.send(err));
};

module.exports = {
  addStickyInfo,
  updateSticky,
};
