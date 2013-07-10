var mongodb = require('./db');

function User(user){
	this.name = user.name;
	this.age = user.age;
	this.sex = user.sex;
};

module.exports = User;

//根据usename查找用户，返回唯一的user.
User.get = function(username, callback){
	
};

//查找所有的user list
User.getlist = function(callback){
	mongodb.open(function(err, db){
		db.collection('tb1', function(err, collection){
			collection.find().toArray(function(err, items){
				if(items){
					console.log(items);
					callback(err, items);
				}
			})
		});
	});
};