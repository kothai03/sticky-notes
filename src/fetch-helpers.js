const Chance = require('chance');
const moment = require('moment');

const chance = new Chance();
const { insertOne, updateOne } = require('./fetch-from-db');

// Add Collection names.
const stickyTable = 'sticky_details';

const addStickyInfo = (stickyInfo) => {
  if (typeof empInfo === 'object') {
    return Promise.reject();
  }
  const id = parseInt(stickyInfo.id, 10) || chance.integer({ min: 1, max: 99999 });
  const newValue = {
    stickyId: id,
    note: stickyInfo.note,
    created_time: moment.utc().format(),
  };
  return stickyInfo.id
    ? updateOne(stickyTable, { stickyId: id }, newValue)
    : insertOne(stickyTable, newValue);
};

module.exports = {
  addStickyInfo,
};

