
var path = require('path');
var friends = require('../data/friends.js');
var $ = require('jquery');
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var jsdom = require('jsdom'),
    { JSDOM } = jsdom,
    jsdom_options = {
      runScripts: "dangerously",
      resources: "usable"
    };
var scriptElm = window.document.createElement("script");
scriptElm.textContent = jQuery;
DOM.window.document.head.appendChild(scriptElm);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

module.exports = function(app) {
	app.get('/api/friends', function(req, res) {
		res.json(friends);
	});

	app.post('/api/friends', function(req, res) {

		var userInput = req.body;
		var userResponses = userInput.score;
		var matchName = '';
		var matchImage = '';
		var totalDifference = 5; 

		for (var i = 0; i < friends.length; i++) {
			var diff = 0;
			for (var j = 0; j < userResponses.length; j++) {
				diff += Math.abs(friends[i].scores[j] - userResponses[j]);
			}

			if (diff < totalDifference) {
				console.log('Closest match found = ' + diff);
			  console.log('Friend name = ' + friends[i].name);
        console.log('Friend image = ' + friends[i].photo);

				totalDifference = diff;
				matchName = friends[i].name;
        matchImage = friends[i].photo;
        
        $("#matchName").show('Friend name = ' + friends[i].name);
        $("#matchPhoto").show(friends[i].photo);
			}
		}
		friends.push(userInput);
		res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
	});
};