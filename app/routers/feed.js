var express = require("express");
var router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'This is the feed endpoint' });
});

//Proposal: all routes should be POST.
//routes here:
// /feed: see trello
// /share: see trello

module.exports = router;
