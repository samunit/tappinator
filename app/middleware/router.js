const router = require('express').Router();

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

module.exports = router;
