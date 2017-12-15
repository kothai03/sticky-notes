// Application queries comes here.
const db = require('./mongo');

// Fetch single record from Collection.
const findOne = (collectionName, queryOptions) =>
  new Promise((resolve, reject) => {
    db.collection(collectionName)
      .findOne(queryOptions, (err, result) => {
        if (err) return reject(err);
        return resolve(result);
      });
  });

// Insert document.
const insertOne = (collectionName, queryOptions) =>
  new Promise((resolve, reject) => {
    db.collection(collectionName)
      .insert(queryOptions, (err, result) => {
        if (err) return reject(err);
        return resolve(result);
      });
  });

// Update document.
const updateOne = (collectionName, queryOptions, value) =>
  new Promise((resolve, reject) => {
    db.collection(collectionName)
      .update(
        queryOptions,
        value,
        { upsert: true },
        (err, result) => {
          if (err) return reject(err);
          return resolve(result);
        },
      );
  });

module.exports = {
  findOne,
  insertOne,
  updateOne,
};
