var userFeed = require('../../mockdata/userFeed.json');
var _ = require('lodash');

module.exports = {
  getTopFiveLatestCheckins: function(){
    var topFive = [];
    var takeFive = 0;

    _.forEach(userFeed.response.checkins.items, item => {
      if(takeFive <= 5){
        topFive.push(item);
        takeFive++;
      }
    });

    return topFive;
  }
}
