//Dependencies:
var path = require("path");

//ROUTING!
module.exports = function(app){
//GET route to survey which should display the survey page
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

//a default catch- all route that leads to home.html which displays the home page

app.get("/home", function(req, res){
    res.sendFile(path.join(__dirname, "../public/home.html"));
});
};