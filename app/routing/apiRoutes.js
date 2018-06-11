//Dependencies:
var friends = require("../data/friends.js");

//ROUTING!
module.exports = function(app){

//GET route with url api and friendsData, this will be used to 
//display a JSON of all possible friends
app.get("/api/friends", function(req, res){
    res.json(friends);
});

//a POST routes/ api and friends. this will be used to handle incoming survey results
//and also used to hand compatability logic

app.post("/api/friendFinder"), function(req, res){
    //response and request are parameters from express
    //req is the object containing info about the HTTP request that made the event,
    //in response to req you need res to send back the desired HTTP response
    //this kind of means get the api info from friend finder, the method is post, and the response will be json

    //console.log(req.body);

    // now calculate the total score of the survey

    var total = req.body.scores


   //res.json(true);

 

   //add totalscore and value to survey
   req.body.total = total;

   //new variable
    var index;

    //variable holding score
    var scoreHolder;

    //for loop 
    //difference between total score for friends array and survey

    for (var i = 0; i < friends.length; i++){
        var difference = Math.abs(total - friends[i].total);
        if (i === 0){


            index = i;
            scoreHolder = friends [i].total;

        } else if (difference < holder){
            index= i;
            scoreHolder = friends[i].total
        }
    }


    //get the friend from friendsdata
    res.json (friends[index]);

    //add it to friendsdata array
    friends.push (req.body);


});
};