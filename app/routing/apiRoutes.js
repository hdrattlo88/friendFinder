
var friendsData = require("../data/friends.js");

module.exports = function(app) {
 
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  app.post("/api/friends", function(req, res) {
      var newFriend = req.body;
      var newResponses = newFriend.score;
    
      friendsData.push(newFriend);
      res.json(true);
   
  });

  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    friendsData.length = [];

    res.json({ ok: true });
  });
};
