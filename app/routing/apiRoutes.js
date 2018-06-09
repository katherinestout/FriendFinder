//Dependencies:
var friendsData = require("../data/friends");

//ROUTING!
module.exports = function(app){
//GET route with url api and friends, this will be used to 
//display a JSON of all possible friends
app.get("/api/friends", function(req, res){
    res.json(friendsData);
});




//a POST routes/ api and friends. this will be used to handle incoming survey results
//and also used to hand compatability logic

app.post("/api/friendFinder"), function(req, res){
    //console.log(req.body);
   res.json(true);

});
};