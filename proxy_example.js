var http = require('http');
var request = require('/opt/node/bin/node_modules/request');

http.createServer(function(req,resp) {

	// one line proxy!
	req.pipe(request('http://www.google.com')).pipe(resp)

}).listen(8080);
