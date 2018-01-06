var mongodb = require('mongodb');
var client = mongodb.MongoClient;
var _db ;
module.exports.connect = function(){
	console.log("connecting...");
	client.connect("mongodb: 	//localhost:27017", 
			function(err, database){
		if(err){
			process.exit(1);
		}
		console.log("Mongo Connected!!");
		_db = database.db('mydb');
	});
}

module.exports.getUsers = function(){
	return _db.collection("users");
}

module.exports.insertData = function(data){
	_db.collection('users').insert(data, function(err, results){
		if(err){
			console.log(err);
		}
		console.log("Data Inserted");
	})
}

module.exports.removeUser = function(key){
	_db.collection('users').remove(key, function(err, result){
		if(err){console.log(err)}
			console.log("User Deleted");
	})
}

module.exports.updateUser = function(data){
	_db.collection('users').updateOne(data, {$set:{"password":123456}}, function(err, result){
		if(err){console.log(err)}
			console.log("Updated the document with the field");
	})
}