var express = require('express');
var router = express.Router();
var userModel = require.main.require('./models/user-model');



router.get('/',function(req,res){

    res.render('reg/adminReg.ejs');





});


router.post('/',function(req,res){

    var adata={

        name:req.body.name,
        email:req.body.email,
        password:req.body.password,


    };


    userModel.inserAdmin(adata,function(result){
            if(result){

                res.redirect('/login');



            }

            else{

                res.render('reg/adminReg.ejs');
            }


    });





});




















module.exports = router;