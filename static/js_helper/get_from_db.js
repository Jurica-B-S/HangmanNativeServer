var MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/hangman', function(err,db){
  if (err) throw err;
  var dbo = db.db('hangman');
  dbo.collection("highscore_list").findOne({}, function(err, result) {
   if (err) throw err;
   console.log(result);
   db.close();
 });
});
