const Chance = require('chance');
const moment = require('moment');

const chance = new Chance();
const { insertOne, updateOne } = require('./fetch-from-db');

// Add Collection names.
const stickyTable = 'sticky_note';

// Add or Update sticky.
const addUpdateSticky = (stickyInfo) => {
  if (typeof empInfo === 'object') {
    return Promise.reject();
  }
  const id = parseInt(stickyInfo.id, 10) || chance.integer({ min: 1, max: 99999 });
  const stickyDetails = {
    sticky_id: id,
    sticky_note: stickyInfo.note,
    sticky_time: moment.utc().format(),
    sticky_status: true,
  };
  return stickyInfo.id
    ? updateOne(stickyTable, { sticky_id: id }, stickyDetails)
    : insertOne(stickyTable, stickyDetails);
};

// Change status if user deletes the Sticky (Soft delete).
const deleteSticky = (stickyId) => {
  if (!stickyId) {
    return 'something went wrong';
  }
  return updateOne(stickyTable, { sticky_id: stickyId }, { status: false });
};

module.exports = {
  addUpdateSticky,
  deleteSticky,
};

