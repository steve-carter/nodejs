var request = require('/opt/node/bin/node_modules/request');
var express = require('/opt/node/bin/node_modules/express');
var app = express();
var url = null;

app.get('/', function(req, res){
	console.log('Proxying HTTP request');
  	// var body = 'Hello World';
	var targeturl = req.query.targeturl;
	url = targeturl;
	// one line proxy!
	req.pipe(request('http://'+targeturl)).pipe(res)
});

app.listen(8080);
console.log('Listening on port 8080');
