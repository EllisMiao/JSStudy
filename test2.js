var fs = require('fs');
fs.readFile('data.txt',function(err,data){
	if(err){
		return console.log(err);
	}
	console.log(data.toString());
});