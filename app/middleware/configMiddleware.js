const config = require('app/utils/config');

const middleware = (req, res, next) => {
  config.getAll(configObj => {
    req.config = configObj;
    next();
  });
}

module.exports = middleware;
