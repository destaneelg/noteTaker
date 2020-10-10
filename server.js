var express = require("express");
var fs = require("fs");
var app = express();
var path =require("path");
var noteArr = [];
// Set our port to 8080
var PORT = process.env.PORT || 8000;
var noteArr = require("./db/db.json");
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./public"));
//HTML routes 

// app.get("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "public/index.html"));
// });

app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "public/notes.html"));
});

//API routes
// Displays all notes
app.get("/api/notes", function (req, res) {
  return res.json(noteArr);
});

app.delete("/api/notes/:id", function(req, res){
  let noteID = req.params.id;
  for (i = 0; i < noteArr.length; i++){
      if (noteID === noteArr[i].id){
          noteArr.splice(i, 1);
          res.json(notesArr);
    res.send('delete  request to homepage')    
      };
  };
});
// Create New note - takes in JSON input
app.post("/api/notes", function (req, res) {
  // req.body is equal to the JSON post sent from the user
  var newNote = {
    id: 2,
    title: req.body.title,
    text: req.body.text
  }
 console.log(newNote);
 noteArr.push(newNote);
res.json(noteArr);
});
// Starts our server
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});