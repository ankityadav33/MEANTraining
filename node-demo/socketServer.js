var http = require('http');
var app = require('express')();
//var app = express();
var server = http.createServer(app);
var io = require("socket.io")(server);

app.get("/", function(req, res){
	res.sendFile(__dirname + '/public/socketClient.html');
});

io.on('connection', function(client){
	console.log("-Client Connected-");
	client.emit('acknowledge',"Hello Client")
	client.on("thanks", function(msg){
		console.log("Client Says : "+msg);
	});
	client.on("MsgToServer", function(chattername, msg){
		console.log(chattername +" : "+msg);
		client.emit("MsgToClient",'Me', msg);
		client.broadcast.emit("MsgToClient",chattername, msg);
	})
});

server.listen(9090, function(){
	console.log('Socket Server running on Port 9090...');
})

