var MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/hangman', function(err,db){
  if (err) throw err;
  console.log('Database created!');
  var dbo = db.db('hangman');
  dbo.createCollection("highscore_list",function(err,res){
    if (err) throw err;
    console.log("Collection created");
    var myobj = { name: "Company Inc", value: 500 };
    dbo.collection("highscore_list").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });
});
