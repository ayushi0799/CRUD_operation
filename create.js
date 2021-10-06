var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/user_managements";
MongoClient.connect(url, function (err, client) {
   if (err) throw err;
   var dataobj = [
     {_id:"1","first_name":"Ayushi","last_name":"Singh","email":"ayushi.s@gmail.com","company":"Valuebound"},
     {_id:"2","first_name":"Rahul","last_name":"Chauhan","email":"rahul@gmail.com","company":"Amazon"}
    ];
   const db = client.db("user_managements");
   db.collection("users").insertMany(dataobj, function (err, res) {
     if (err) throw err;
     console.log("Number of records inserted: " + res.insertedCount);
     
     client.close();
   });
 });

