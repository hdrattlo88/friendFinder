var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.send("DID IT WORK?");
});

app.listen(3000);