const express = require("express");

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 1337;
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'the answer to everyting: 42' });
})

router.post('/', (req, res) => {
  res.json({
    response_type: 'in_channel',
    text: 'This is a test'
  })
});

app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);
