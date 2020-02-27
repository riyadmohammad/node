var express = require('express');
var router = express.Router();
var userModel = require.main.require('./models/user-model');

router.get('/', function(req, res){
	
		res.render('adminReg/index');

});

router.post('/', function(req, res){
	
		var adminuser = {
			id: req.params.id,
			username: req.body.username,
			password: req.body.password,
			type: req.body.type
		};

		userModel.admininsert(user, function(status){
			if(status){
				res.redirect('/home');
			}else{
				res.redirect('/home);
			}
		});
});










module.exports = router;