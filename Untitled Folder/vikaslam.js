var MongoClient= require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/lam', function(err,db) {
    if(err) throw err;
    console.log("db accessed");
   
    var c=0;
    var x= db.collection('_User').find();
    x.each(function( err, userObj)
	   {
	       if(err)
		   throw err;
	      
	       //console.log("deepak = ", userObj);
	       
	       if(userObj){
		   var u = userObj._id;
		   
		   c =c+1;
		   
		   console.log(u);
		   
		  
		   var y= db.collection('Look').find({fromUser:u});
		   y.toArray(function(err, doc){
		       if(err) throw err;
		       c=c-1;
		       
		       console.log(doc.length);
		       if(c==0)
			   db.close();
		      
		   });
		 //  db.close();
	       }
	       
	       else{ //c=c+1;
		     
		   
		   console.log("user read complete");
	       }
	   });
});





