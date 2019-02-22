const fs = require('fs');
const http = require('http');
const https = require('https');
const socketio = require('socket.io')
const express = require('express');
const multiplayer_database = require('./static/js_helper/multiplayer_hangman');
const app = express();

console.log(socketio);


// Certificate
/*
const privateKey = fs.readFileSync('./server.key', 'utf8');
const certificate = fs.readFileSync('./server.cert', 'utf8');
const ca = fs.readFileSync('./ca.pem', 'utf8');

const credentials = {
	key: privateKey,
	cert: certificate,
	ca: ca
};
*/
//Database
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');



//Template Engine
app.use(express.static('static'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','pug');
var MongoClient = require('mongodb').MongoClient;

app.post('/highscore',function(req,res,next){
	//template for home page
	console.log(req.body);
	MongoClient.connect(multiplayer_database.database_link, function(err,db){
	  if (err) throw err;
	  var dbo = db.db('hangman');
	    var myobj = req.body;
	    dbo.collection("highscore_list").insertOne(myobj, function(err, res) {
	      if (err) throw err;
	      console.log("1 document inserted");
	      db.close();
	    });
	});

	res.send("Juhuhuh!\n");
});

app.post('/getjson',function(req,res,next){
	//json request
	MongoClient.connect(multiplayer_database.database_link, function(err,db){
		if (err) throw err;
		var dbo = db.db('hangman');
		dbo.collection("highscore_list").find({}).toArray(function(err, result) {
			if (err) throw err;
			//console.log(result);
			db.close();
			result.sort((a,b) => (a.value > b.value) ? -1 : (b.value > a.value) ? 1 : 0)
			let returnArray = [];
			len = result.length;
			var len = (len < 5) ? len : 5;
			for(let i = 0; i < len; i++){
				if(result[i])
				returnArray[i] = result[i];
			}
			res.send(returnArray);
	 });
	});
});
app.post('/sendjson',function(req,res,next){
	//json request
	MongoClient.connect(multiplayer_database.database_link, function(err,db){
		if (err) throw err;
		var dbo = db.db('hangman');
		var myobj = req.body;
		dbo.collection("highscore_list").insertOne(myobj, function(err, result) {
			if (err){
				//res.send({messag   	e:"InsertionError"});
				throw err;
			}
			//console.log("1 document inserted");
			db.close();
			res.send({message:"InsertedScore"});
		});
	});
});

//hangman socket servers








app.get('/',function(req,res){
	//template for home page
  let result;
	let myobj = req.body;
	MongoClient.connect(multiplayer_database.database_link, function(err,db){
	  if (err) throw err;
	  var dbo = db.db('hangman_multiplayer');
	  dbo.collection("hangman_rooms").find({room_id:1}).toArray(function(err, result) {
	  	if (err) throw err;
	  	if(Array.isArray(result) && result.length === 0){
				console.log(result);
			}
			else{
				console.log("Empty array izbacen iz baze");
			}
	   	db.close();
	 	res.render('index',{title:"HANGMAN", result:{name:"Jura", value:"Pura"}});
	 });
 });
});

// Starting both http & https servers
const httpServer = http.createServer(app);
//const httpsServer = https.createServer(credentials, app);
const socketServer = socketio(httpServer);

httpServer.listen(80, () => {
	console.log('HTTP Server running on port 80');
});

socketServer.on('connection', function (socket) {
	console.log("Konektirao se");
  console.log(socket);
  socket.on('message', function () {

});
  socket.on('disconnect', function () { });
});

/*httpsServer.listen(443, () => {
	console.log('HTTPS Server running on port 443');
});*/
