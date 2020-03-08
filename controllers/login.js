var express = require('express');
var router = express.Router();
var userModel = require.main.require('./models/user-model');



router.get('/',function(req,res){

    res.render('login/index.ejs');





});

router.post('/', function(req, res){

	var user ={
		username: req.body.uname,
		password: req.body.password
	};

	userModel.validate2(user, function(results){
		console.log(user);
	 	if(results){
			res.cookie('username', req.body.uname);
			res.redirect('/modDashbord');
		}else{
			res.send('invalid username/password');
		}
	});
});




















module.exports = router;