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
		userModel.catInfo (function(results){
			res.render('mod/dashbord.ejs', {results: results});
		});
	}else{
		res.redirect('/logout');
	}
});




router.post('/', function(req,res){

	var cat_data={

			id:req.body.id,
            name:req.body.name,
            cat:req.body.cat,
            subcat:req.body.subcat,		
	};



	console.log(cat_data);
	console.log('update DATA'),

        userModel.catUpdate(cat_data, function(status){
            if(status){
               
               res.redirect('/modDashbord');
           }else{
            res.redirect('/modDashbord');
           }
       });




});



router.get('/delete/:id',function(req,res){

    var id={id:req.params.id};

    userModel.catDelete(id, function(status){
        if(status){
           
           res.redirect('/modDashbord');
       }else{
           res.redirect('/moddashbord');
       }
   });




});








module.exports = router;