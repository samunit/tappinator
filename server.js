var express = require("express");

var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 1337;
var router = express.Router();

const feedRouter = require('./app/routers/feed');

//TODO: remove these
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

router.get('/', function(req, res) {
    res.json({ message: 'Welcome to tappinator API: ' + process.version });
});

router.route('/beer').get(function(req, res){
    res.json({ message: 'This will be the Beer API point' });
});

router.route('/user').get(function(req, res){
    res.json({ message: 'This will be the User API point' });
});

app.use('/api', router);
app.use('/api/feed', feedRouter);

//TODO: yep all of the above..

app.listen(port);
console.log('Magic happens on port ' + port);
