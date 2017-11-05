var Converter = require("csvtojson").Converter;
var converter = new Converter({});
converter.fromFile("./file.csv",function(err,result){
    if(err)
	throw err;
    console.log(result);
});
