const fs = require('fs');

const readConfig = (key, callback) => {
  const fileData = fs.readFile('./appconfig/config.json', (err, data) => {
      if (err) {
        callback(process.env[key]);
      } else {
        const config = JSON.parse(data);
        callback(config[key]);
      }
  });
}

module.exports = readConfig;
