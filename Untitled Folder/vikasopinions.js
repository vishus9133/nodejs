var MongoClient= require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/lam', function(err,db) {
    if(err) throw err;
    console.log("db accessed");

    var d= 0;
    var e = new Date();
    e.setDate(19);
    e.setMonth(5);
    console.log(e);
    var x= db.collection('Opinions').find({'_created_at' : {'$gt' : e}});
    
    
    x.each(function( err,doc)
	   {
	       if(err)
		   throw err;
	       
	       
	       
	       if(doc){

		   

		   
		   console.log(doc);
		   var totllks = doc.Likes;
		   var totdislks = doc.disLikes;
		   var totlooks = doc.looks;

		   var e = totllks+totdislks+totlooks;
		   d = d+e;
		   

		   console.log(doc);
		       console.log("likes+dislks+looks till now=",d);
		   
		   
	       }

	       else{ 

		   console.log("database closed");
		   db.close();
	       }
	   });
});


