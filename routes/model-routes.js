// Import the model Score to use its database functions
var express = require("express");

var router = express.Router();

var db = require("../models/");

// module.exports = function(app) {
	
	// this is the Post request to the client browser to grab login information
	// create a player with the data available to us in req.body
	router.post("/Scores", function(req, res, username, score) {
		// console.log(req.body);
		// this is creating a new item within the sequelize database
		db.Score.create ({
			playername: username,
		});	
	});

	// this is a GET request to push all the scores within the database to the server and onto the client browser
	router.get("/Scores", function(req, res){
		db.Score.findAll({

		}).then(function(dbScore) {
			// eventually put this is ascending order
			res.json(dbScore);
		});
	});

module.exports = router;