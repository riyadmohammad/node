var express = require('express');
var router = express.Router();
var userModel = require.main.require('./models/user-model');




router.get('/', function(req, res){	
	if(req.cookies['username'] != null){
		userModel.catInfo (function(results){
			res.render('mod/addcont.ejs', {results: results});
		});
	}else{
		res.redirect('/logout');
	}
});











router.post('/', function(req,res){

	var cat_data={

			
            name:req.body.name,
            cat:req.body.cat,
            subcat:req.body.subcat,		
	};



	console.log(cat_data);
	

        userModel.catInsert(cat_data, function(status){
            if(status){
               
               res.redirect('/modDashbord');
           }else{
            res.redirect('/modDashbord');
           }
       });




});











module.exports = router;