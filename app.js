// SETUP
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var ejs = require("ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", ejs);

// ROUTES
app.get("/", function(request, response) {
  console.log("Root route accessed");
  response.render("index");
});

app.post("/vote", function(request, response) {
  console.log("Received a POST to /vote");
  console.log(request.body.avengervote);
  response.send("RECEIVED VOTE!");
});

// SERVER RUN
const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log("Avenger-vote Server has started on port " + PORT);
});
