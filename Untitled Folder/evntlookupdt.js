var MongoClient= require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/lam', function(err,db) {
    if(err) throw err;
    console.log("db accessed");

    var c=0;
    var x= db.collection('Event').find();
    x.each(function( err,eventId)
	   {
	       if(err)
		   throw err;

	       

	       if(eventId){
		   var u = eventId;

		  

		   console.log(u);


		   var y= db.collection('Look').find({eventId:u._id});
		   y.toArray(function(err, doc){
		       if(err) throw err;
		       c=c+1;

		       var j= doc.length;
		       db.collection('Event').update({"_id": u._id}, {$set:{lookCount: j}}, function(err, updated){
			   if(err)
			       throw err;
			   c=c-1;
			   console.log("updated");
		       if(c==0)
			   db.close();}
						    );

		   });
		   //  db.close();
	       }

	       else{ //c=c+1;

		   console.log("user read complete");
	       }
	   });
});


