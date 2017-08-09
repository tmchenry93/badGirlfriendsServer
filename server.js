// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
// var sequelize = require("sequelize");

// Create Instance of Express
var app = express();

// Require girlfriend Schema
var db = require("./models/");

// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;

// Run Morgan for Logging
// app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// app.use(express.static("./public"));
var routes = require("./routes/model-routes.js");

app.use("/", routes);
app.use("/Scores", routes);
// Require API routes
// var Scores = require("./routes/model-routes.js")(app);

// Syncing our sequelize models and then starting our express app
db.sequelize.sync().then(function() {
  app.listen(PORT);
});

// app.listen(PORT, function() {
//     console.log("App listening on PORT " + PORT);
// });