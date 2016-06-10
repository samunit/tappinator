var http = require("http");
var config = require("./config");
const readline = require("readline");
var querystring = require('querystring');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var post_options = {
    host: '',
    path: '',
    method: 'POST'
};

var post_req = http.request(post_options, function(res) {
    res.on('data', function (chunk) {
        console.log('Response: ' + chunk);
    });
});

rl.question("What is your fav beer? ", function(answer) {
  console.log("Thank you!");

  var post_data = querystring.stringify({
    "text" : "Some like me, Tappinator. But some people also like "
  });

  post_req.write(post_data);
  post_req.end();
  rl.close();
});


/*http.createServer(function (request, response) {

   response.writeHead(200, {'Content-Type': 'text/plain'});

   response.end('Hello Beer\n');
}).listen(8081);*/
