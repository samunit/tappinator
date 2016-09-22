const middleware = (req, res, next) => {
    if (req.body.token === req.config.SLACK_KEY) {
      next();
    } else {
      res.status(400).send('Invalid authentication token');
    }
}

module.exports = middleware;
