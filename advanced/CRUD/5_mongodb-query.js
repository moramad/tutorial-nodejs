var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://mocram:resistor5watt@cluster0.gflt4.mongodb.net/?retryWrites=true&w=majority"

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mocramTutorialDb");
    var query = { address: "Park Lane 38" };
    dbo.collection("customers").find(query).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});