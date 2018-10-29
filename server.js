
// This is to host locally
var express = require('express');
var app = express();


//**********************************
//*********May not be neccesary*****/
// app.get('/', function(req, res){
//    res.send("DID IT WORK?");
// });

// app.listen(8800);
//***************************** */

//This is for Heroku
var PORT = process.env.PORT || 8800;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
