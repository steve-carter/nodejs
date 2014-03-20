var http = require('http');
var request = require('/usr/local/apache2/htdocs/nodejs/node-v0.10.26-linux-x64/lib/node_modules/request');

http.createServer(function(req,resp) {

	// one line proxy!
	req.pipe(request('http://www.google.com')).pipe(resp)

}).listen(8080);
