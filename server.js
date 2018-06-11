//dependencies!

//express, bodyparser, need a PORT!

var express =require("express");
var bodyParser = require("body-parser");

//telling us that wer are creating an express server
var app=express();

//sets an initial port
var PORT = process.env.PORT || 8080;

//setting up express app to handle data parsing
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//integrating these routes into the server.js, points the server to route files
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
//making sure it's listening
app.listen(PORT, function(){
    console.log("App is listening on the PORT:" + PORT);
});