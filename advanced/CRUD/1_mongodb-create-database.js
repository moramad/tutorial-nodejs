var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://mocram:resistor5watt@cluster0.gflt4.mongodb.net/mocramTutorialDb?retryWrites=true&w=majority"

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Database created!");
    db.close()
});