var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/user_managements";
MongoClient.connect(url, function (err, client) {
   if (err) throw err;

   const db = client.db("user_managements");
   db.collection("users").deleteOne({_id:"1"} ,function (err, result) {
     if (err) throw err;
     console.log(result);
     client.close();
   });
 });