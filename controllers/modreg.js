var express = require('express');
var router = express.Router();
var userModel = require.main.require('./models/user-model');

router.get('/', function(req, res){
	
		res.render('modaReg/index');

});



router.post('/', function(req, res){
	
		var muser = {
			
			username: req.body.username,
			password: req.body.password,
			type: req.body.type
		};

		userModel.minsert(user, function(status){
			if(status){
				res.redirect('/home/view_users');
			}else{
				res.redirect('/home/edit/'+req.params.id);
			}
		});
});










module.exports = router;