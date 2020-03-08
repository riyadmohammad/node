var express = require('express');
var router = express.Router();
var userModel = require.main.require('./models/user-model');


/*router.get('*', function(req, res, next){
	if(req.cookies['email'] == null){
		res.redirect('/login');
	}else{
		next();
	}
});*/


router.get('/', function(req, res){	
	if(req.cookies['username'] != null){
		userModel.modInfo (function(results){
			res.render('admin/view_mod.ejs', {results: results});
		});
	}else{
		res.redirect('/logout');
	}
});








router.get('/delete/:id',function(req,res){

    var id={id:req.params.id};

    userModel.catDelete(id, function(status){
        if(status){
           
           res.redirect('/view_mod');
       }else{
           res.redirect('/view_mod');
       }
   });




});








module.exports = router;