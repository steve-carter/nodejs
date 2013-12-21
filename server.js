var http = require('http');
var express = require('/opt/node/bin/node_modules/express');
var request = require('/opt/node/bin/node_modules/request');

	// one line proxy!
	// req.pipe(request('http://www.google.com')).pipe(resp)

var app = express();
app.get('/', function(req, res){
  	// var body = 'Hello World';
	var targeturl = req.query.targeturl;
	req.pipe(request('http://'+targeturl)).pipe(res)
  	//res.setHeader('Content-Type', 'text/plain');
  	//res.setHeader('Content-Length', body.length);
  	//res.end(body);
});
app.listen(8080);
console.log('Listening on port 8080');
