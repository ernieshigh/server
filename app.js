const http = require('http');

http.createServer(function (req, res){
	res.write ('Frigggin a this is working? WTF');
	res.end();
}
	).listen(3000);


console.log("Server is 200");
