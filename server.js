const express = require("express");

const app = express();
const bodyParser = require('body-parser');
const configMiddleWare = require('app/middleware/configMiddleWare');

const port = process.env.PORT || 1337;
const router = express.Router();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.get('/', (req, res) => {
  console.log('CONFIG', req.config);
  res.json({ message: 'the answer to everyting: 42' });
})

router.post('/', (req, res) => {
  res.json({
    response_type: 'in_channel',
    text: 'This is a test'
  })
});

app.use('/api', configMiddleWare);
app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);
