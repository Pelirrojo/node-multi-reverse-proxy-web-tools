var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  var data = {
    title: 'node-multi-reverse-proxy-web-tools',
    neo4j_url: 'http://localhost:7001',
    mysql_url: 'http://localhost:7002',
    qgis_url: 'http://localhost:7003',
    jsonServer_url: 'http://localhost:7004'
  };

  res.render('index', data);
});

module.exports = router;
