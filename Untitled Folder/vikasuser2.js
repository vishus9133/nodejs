var MongoClient= require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/lam', function(err,db) {
    if(err) throw err;
    console.log("db accessed");

    var c=0;
    var x= db.collection('_User').find();
    x.each(function( err,user)
	   {
	       if(err)
		   throw err;



	       if(user){
		   var u = user.displayName;




		   function toTitleCase(str)
		   {
		       return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toUpperCase();});
		       

		   }
		   u = toTitleCase(u);
		   
		   console.log(u);
            

		   c=c+1;	   
		       
		       db.collection('_User').update({"_id": user._id}, {$set:{displayName: u}}, function(err, updated){
			   if(err)
			       throw err;
			   c=c-1;
			   console.log("updated", updated.displayName);
			   if(c==0)
			       db.close();}
						    );

		   
		   //  db.close();
	       }

	       else{ //c=c+1;

		   console.log("user read complete");
	       }
	   });
});

