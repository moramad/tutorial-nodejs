var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://mocram:resistor5watt@cluster0.gflt4.mongodb.net/?retryWrites=true&w=majority"

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mocramTutorialDb");
    var myobj = { name: "Ben", address: "Park Lane 38" };
    dbo.collection("customers").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
    });    
});