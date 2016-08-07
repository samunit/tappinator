const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const router = require('app/middleware/router');
const configMiddleWare = require('app/middleware/configMiddleWare');

const port = process.env.PORT || 1337;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', configMiddleWare);
app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);
