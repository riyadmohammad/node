var express = require('express');
var router = express.Router();
var userModel = require.main.require('./models/user-model');



router.get('/',function(req,res){

    res.render('reg/modReg.ejs');





});


router.post('/',function(req,res){

    var mdata={

        name:req.body.name,
        email:req.body.email,
        password:req.body.password,


    };


    userModel.inserMod(mdata,function(result){
        console.log(mdata);
            if(result){

                res.redirect('/login');



            }

            else{

                res.render('reg/modReg.ejs');
            }


    });





});




















module.exports = router;