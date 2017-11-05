var json2csv = require('json2csv');
var fs = require('fs');
var MongoClient= require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/vishu', function(err,db) {
    if(err) throw err;
    db.collection('test').find().toArray(function( err,doc)
					 {
					     if(err)
						 throw err;
					     
					     var field=['_id','Name','Age'];
					     json2csv({data : doc, fields : field},function(err,csv){
						 if(err) console.log(err);
						 
						 fs.writeFile('vikas2.csv',csv,function(err){
						     if(err) throw err;
						     console.log("file saved succesfully");
						 });

						 db.close();
						 
						 
						 
					     });
					     console.log("Successs!!!!!");
					 });
});
