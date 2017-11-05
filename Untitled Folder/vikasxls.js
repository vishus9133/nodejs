
var json2xls = require('json2xls');
var fs = require('fs');
var MongoClient= require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/vishu', function(err,db) {
    if(err) throw err;
    db.collection('test').find().toArray(function( err,doc)
					 {
					     if(err)
						 throw err;
					     
					     var xls = json2xls(doc);
					     fs.writeFileSync('data.xlsx',xls,'binary');

					     console.log("File saved");
					     db.close();
					 }
					);
    console.log("calledf indOne");
});


