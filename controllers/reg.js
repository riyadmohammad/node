var express = require('express');
var router = express.Router();
var userModel = require.main.require('./models/user-model');

router.get('/', function(req, res){
	
		res.render('reg/index');

});

router.get('/modaReg', function(req, res){
	
		res.render('modaReg/index');

});










module.exports = router;