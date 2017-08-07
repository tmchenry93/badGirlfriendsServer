// Include Server Dependencies
var express = require("express");
var React = require("react");
var Router = require("react-router");
var bodyParser = require("body-parser");

var PORT = 3000;

// Create Instance of Express
var app = express();

// Require girlfriend Schema
var Score = require("./models/Score");

// Require API routes
var db = require("./routes/models-routes.js");

// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

// Routes
require("./routes/model-routes.js")(app);

// Syncing our sequelize models and then starting our express app
db.sequelize.sync({ force: false }).then(function() {
  // app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  // });
});