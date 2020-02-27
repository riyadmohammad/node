var express = require('express');
var userModel = require.main.require('./models/user-model');
var router = express.Router();

router.get('/', function(req, res){
	res.render('login/index');
});


router.post('/', function(req, res){
	
		var user = {
			
			username: req.body.username,
			password: req.body.password,
			type: req.body.type
		};

		userModel.adminlogin(user, function(status){
			if(status){
				res.redirect('/home');
			}else{
				userModel.modlogin(user, function(status){
			if(status){
				res.redirect('/home');
			}else{
				res.redirect('/home');
			}
		});
			}
		});
});



module.exports = router;