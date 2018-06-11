//Dependencies:
var path = require("path");

//ROUTING!
//module.exports is refferencing an object, that gets returned from the require call

module.exports = function(app){
//GET route to survey which should display the survey page

//this means go into app folder, and when you are on the /survey page it will run the
//function to get you to the survey page/ file
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

//a default catch- all route that leads to home.html which displays the home page

//this means go into the home.html folder, and get that file when you are on the /home
//if no matching route default to home
app.get("*", function(req, res){
    res.sendFile(path.join(__dirname, "../public/home.html"));
});
};