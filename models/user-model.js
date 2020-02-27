var db = require('./db');

module.exports= {
	
	minsert: function(muser, callback){
		
		var sql= "insert into modare valuses(?,?,?)";
		db.execute(sql,[muser.username, muser.password]function(status){
			
			
			if(status){
				callback(true);
			}else{
				callback(false);
			}
			
			
		});
		
		
	}
	
	admininsert: function(muser, callback){
		
		var sql= "insert into modare valuses(?,?,?)";
		db.execute(sql,[muser.username, muser.password]function(status){
			
			
			if(status){
				callback(true);
			}else{
				callback(false);
			}
			
			
		});
		
		
		adminlogin: function(user, callback){
		var sql ="SELECT * from admin where username=? and password=?";
		db.getResults(sql, [user.username, user.password], function(results){

			if(results.length > 0){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	
	modlogin: function(user, callback){
		var sql ="SELECT * from modare where username=? and password=?";
		db.getResults(sql, [user.username, user.password], function(results){

			if(results.length > 0){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
		
		
	}
	
	
	
	
	
}