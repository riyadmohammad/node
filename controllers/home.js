var express = require('express');
var router = express.Router();
//var userModel = require.main.require('./models/user-model');

router.get('/', function(req, res){
	
		res.render('home/index');

});

router.get('/signup', function(req, res){
	
		res.render('reg/index');

});



module.exports = router;