var express = require('express');
var router = express.Router();
//var userModel = require.main.require('./models/user-model');

router.get('/', function(req, res){
	
		res.render('home/index');

});

router.get('/signup', function(req, res){
	
		res.render('reg/index');

});

router.get('', function(req, res){
	
		userModel.getAll(function(results){
			if(results.length > 0){
				res.render('home', {contentlist: results});
			}else{
				res.redirect('/home');
			}
		});
});



module.exports = router;