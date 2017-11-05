var MongoClient= require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/lam', function(err,db) {
    if(err) throw err;
    db.collection('Opinions').find().toArray(function( err,doc)
			       {
				   if(err)
				       throw err;
				   //for(i in doc){
				   console.log(doc);
				  // }
				   db.close();
			       }
			      );
    console.log("calledf findOne");
});


