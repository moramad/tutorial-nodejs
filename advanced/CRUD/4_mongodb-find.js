var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://mocram:resistor5watt@cluster0.gflt4.mongodb.net/?retryWrites=true&w=majority"

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mocramTutorialDb");
    dbo.collection("customers").findOne({}, function(err, result) {
        if (err) throw err;
        console.log(result.name);
        db.close();
    })
});