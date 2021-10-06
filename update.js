var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/user_managements";
MongoClient.connect(url, function (err, client) {
   if (err) throw err;

   const db = client.db("user_managements");
   db.collection("users").findOneAndUpdate({_id:"1"},{$set : {"first_name":"Komal"} },function (err, result) {
     if (err) throw err;
     console.log(result);
     client.close();
   });
 });
