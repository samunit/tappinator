var express = require("express");
var userModel = require("./app/models/user");

var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = 80;
var router = express.Router();

// ROUTES FOR OUR API
// =============================================================================

router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

router.get('/', function(req, res) {
    res.json({ message: 'Welcome to tappinator API' });
});

router.route('/beer').get(function(req, res){
    var data = userModel.getTopFiveLatestCheckins();
    res.json(data);
});

router.route('/user').get(function(req, res){
    res.json({ message: 'This will be the User API point' });
});

app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);
