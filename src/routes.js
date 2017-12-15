
// Application routes goes here.

const {
  addStickyInfo,
} = require('./fetch-helpers');

const addSticky = (req, res) => {
  const stickyInfo = req.body || res.send('oops! Please add the sticky information');
  // add sticky details.
  addStickyInfo(stickyInfo)
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

module.exports = {
  addSticky,
};
