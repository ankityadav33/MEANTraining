//Non Blocking
/*function longRunningOperation(){
	setTimeout(function(){
		console.log("Running the operation");
	},2000);
}
function webRequest(req){
	console.log("Starting with ID "+ req.id );
	longRunningOperation();
	console.log("Ending with ID "+ req.id );
}
webRequest({id : 1});
webRequest({id : 2});*/


//Start 1
//start 2
	//wait for 2 minutes
// running
// running
//end 1
//end 2



//Core Modules

/*var path = require('path');
var url = "http://www.example.com/public/index.html";
console.log(path.basename(url));
console.log(path.extname(url));
//console.log(path.filename(url));


var os = require('os');
console.log(os.freemem());
console.log(os.cpus().length);
console.log(os.arch());*/

//File System 

/*var fs = require('fs');
var readStream = fs.createReadStream('cool.txt');
var writeStream = fs.createWriteStream('cool1.txt');
readStream.pipe(writeStream);*/

//External Module
/*var colors = require('colors');
console.log("Welcome to NodeJS".red);
console.log("Welcome to NodeJS".green);
console.log("Welcome to NodeJS".blue);
console.log("Welcome to NodeJS".rainbow);*/

//Events
/*var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();*/

/*
on : event handler
emit : triggers the event
*/

/*function handler1(){
	console.log();
}
function handler2(){
	console.log();
}
emitter.on("foo", handler1);
emitter.on("foo", handler2);

emitter.on("bar", handler1);

emitter.emit("foo","Some Message");
emitter.emit("bar");*/


//http
/* var http = require('http');
var server = http.createServer(function(request, response){
	console.log(request.method);
	response.writeHead(200);
	response.write("Hello Client!!!");
	response.end();
});

server.listen(3000);
console.log("Server started at Port 3000..."); */


//Express Demo
var express = require('express');
var app = express();
//app.use(express.static(__dirname+'/public'));
var bodyParser=require('body-parser');
var mongoUtil = require('./mongoUtil');
mongoUtil.connect();
app.use(bodyParser.urlencoded({extended : true}));


app.get("/", function(req, res){
    res.sendFile(__dirname+'/public/index.html');    
});

app.get('/signup', function(req, res){
	if(req.query){
		var username = req.query.username;
		var password = req.query.password;
		res.send("Data Received"+username+password);
	}
});

/* app.post('/signup', function(req, res){
	if(req.body){
		var username = req.body.username;
		var password = req.body.password;
		res.send("Data Received"+username+password);
		console.log("Data Received!!! username : "+username+"	Password : "+password);
	}
}); */

app.post("/signup", function(req, res){
	var users = mongoUtil.getUsers();
	users.find().toArray(function(err, docs){
		res.json(docs);
	})
	if(req.body){
		console.log(req.body);
		var data = {
			"username" : req.body.username,
			"password" : req.body.password
		}
		mongoUtil.insertData(data);
		//res.send("Data Inserted!!");
	}
	
});

/* 



app.get("/getdata", function(req,res){
	res.json({"username": "Foo"});
})
*/
app.listen(3030, function(){
	console.log("Express running on Port 3030...");
})