var express = require('express');

var port = process.env.PORT || 8081;

var app = express();
app.use(express.static('public'));

app.get("/", function(req,res){
		res.sendFile(`${__dirname}/public/launchpad.html`)
});

app.get("/launchpad", function(req,res){
	res.sendFile(`${__dirname}/public/launchpad.html`)
});

app.get("/example", function(req,res){
	res.sendFile('example.html')
});

app.get("/prototype", function(req,res){
	res.sendFile(`${__dirname}\\prototype.html`)
});

app.get("/prototype-example", function(req,res){
	res.sendFile(`${__dirname}\\prototype-example.html`)
});

app.listen(port, function(req,res){
	console.log(`Server ready and listening on port: ${port}`);
});