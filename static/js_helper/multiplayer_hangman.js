var database_link = require('./database_constants');

var multiplayerDatabase = function(req,res,next){
	//json request
	MongoClient.connect(database_link, function(err,db){
		if (err) throw err;
		var dbo = db.db('hangman');
    dbo.collection("highscore_list").findOne({}, function(err, result) {
     if (err) throw err;
     console.log(result);
     db.close();
		});
	});
};

module.exports.multiplayerDatabase = multiplayerDatabase;
module.exports.database_link = database_link;
