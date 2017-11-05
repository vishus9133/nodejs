var MongoClient= require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/lam', function(err,db) {
    if(err) throw err;
    console.log("db accessed");

    var Ml=0;
    var Fl=0;
    var c =0;
    var x= db.collection('Look').find();


    x.each(function( err,doc)
	   {
	       if(err)
		   throw err;



	       if(doc){

		   var fusr= doc.fromUser;

		   c=c+1;
		   db.collection('_User').findOne({"_id": fusr}, function(err, userObj){
		       if(err)
			   throw err;
		       if(userObj)
		       {
		       var gend = userObj.gender;
		       console.log(gend);
		       if(gend=='Male')
			   Ml = Ml+1;
		       else
			   Fl = Fl+1;
		       }


		       c=c-1;
		       if(c==0){
			   console.log("no. of females",Fl);
			   console.log("no. of males",Ml);
			   db.close();
		       }
	

		   });
	       }

	       			       else
					       {
						   console.log("process running");

		   
		  
	       }
	   });
});

