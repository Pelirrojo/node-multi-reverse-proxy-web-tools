var http 		= require ('http');
var httpProxy 	= require ('http-proxy');
var _ 			= require('lodash');

var options = {};
var routes = {
			'neo4j' : 'http://localhost:7001',
			'mysql' : 'http://localhost:7002',
			'qgis'  : 'http://localhost:7003',
			'json'  : 'http://localhost:7004'
		};

var proxy = new httpProxy.createProxyServer();

var proxyServer = http.createServer(function (req, res) {

 	options.target = _.get(routes, req.headers.destination, 'http://www.google.es');
    proxy.web(req, res, options );

    proxy.on('error', function(e) {
    	console.log(e);
    });

}).listen(3000);
