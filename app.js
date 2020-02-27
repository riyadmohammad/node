var express = require('express');

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ejs = require('ejs');

var home = require('./controllers/home');
var reg = require('./controllers/reg');
var modreg =require('./controllers/modreg');

//var fileUplod = require('express-fileupload');






var app=express();


app.set('view engine', 'ejs');

app.use('/home', home);
app.use('/reg',reg);

app.use('/modreg',modreg);





app.use(cookieParser());
//app.use(fileUpload());

app.use(bodyParser.urlencoded({extended:true}));







app.get('/',function(req,res){
	
	res.send('welcome');
	
});


app.listen(3000,function(){
	
	console.log('node server started at 3000!');
	
});