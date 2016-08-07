const fs = require('fs');
const configKeys = require('./configKeys');

const get = (key, callback) => {
  const fileData = fs.readFile('./appconfig/config.json', (err, data) => {
      if (err) {
        callback(process.env[key]);
      } else {
        const config = JSON.parse(data);
        callback(config[key]);
      }
  });
};

const getAll = callback => {
  const fileData = fs.readFile('./appconfig/config.json', (err, data) => {
    if(err) {
      const config = {};
      Object.getOwnPropertyNames(configKeys).forEach(key => {
        if(process.env.hasOwnProperty(key)) {
          config[key] = process.env[key];
        }
      });
      callback(Object.keys(config).length > 0 ? config : undefined);
    } else {
      callback(JSON.parse(data));
    }
  });
};

module.exports = {
  get,
  getAll
};
