var MongoClient= require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/vishu', function(err,db) {
    if(err) throw err;
    var x=["Vikas","Rohit","Rahul","Lucky","Virat"];
    var y=[23,21,12,16,34];
    var count=0;
    for(i=0;i<100;i++){
	
	var document={"Name":x[Math.floor((Math.random() * 4) + 0)],"Age":y[Math.floor((Math.random() * 4) + 0)]};
	db.collection('test').insert(document, function(err, records){
	    if(err) throw err;
	    count=count+1;
	    console.log("result1added");
	    if(count==100) db.close();
	});
    }
});
