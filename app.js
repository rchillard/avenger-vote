// SETUP
const express = require("express");
const bodyParser = require("body-parser");

// CONFIG
const app = express();
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));

// DATA
let avengers = [
  { name: "Iron Man", votes: 0 },
  { name: "Thor", votes: 0 },
  { name: "Black Widow", votes: 0 },
  { name: "Hulk", votes: 0 },
  { name: "Captain America", votes: 0 },
  { name: "Black Panther", votes: 0 }
];

// ROUTES
app.get("/", function(request, response) {
  console.log("Root route accessed");
  response.render("index", { avengers: avengers });
});

app.post("/vote", function(request, response) {
  console.log("Received a POST to /vote for: " + request.body.avengervote);
  avengers.find(function(avenger, index) {
    if (avenger.name === request.body.avengervote) {
      avenger.votes++;
    }
  });
  console.log(avengers);
  response.redirect("/");
});

// START SERVER
const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
  console.log("Avenger-vote Server has started on port " + PORT);
});
