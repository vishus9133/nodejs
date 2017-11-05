var MongoClient= require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/lam', function(err,db) {
    if(err) throw err;
    db.collection('_User').find().toArray(function( err,doc)
					  {
					      if(err)
						  throw err;
					      var x = doc.appVersion;
					      var y= doc.appType;
					      if(y=='android')
					      {
						  if(x>33) 
						  console.log("notification1");
						  else
						      console.log("notification2");
					      }
					      if(y=='ios')

					      {
						  if(x>33)
						      console.log("notification3");
						  else
						      console.log("notification");
					      }
					      db.close();
					  }
					 );
    console.log("success!!!!!!!!!!");
});


