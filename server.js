var express = require("express");
var http = require("http");
var fs = require("fs");
var path = require("path");

var app = express();

// Set our port to 8080
var PORT = 8000;

// // Create our server
var server = http.createServer(handleRequest);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("assets"));


// // Create a function for handling the requests and responses coming into our server
function handleRequest(req, res) {
// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/add", function (req, res) {
  res.sendFile(path.join(__dirname, "public/notes.html"));
});
}
// var paths = req.url;
// Sets up the Express app to handle data parsing


// switch(path) {
//     case "/notes":
//         return fs.readFile(__dirname + "public/notes.html", function (err, data) {
//             if (err) throw err;
//             res.writeHead(200, {'Content-type': 'text/html'});
//             res.end(data);
//         });
//         case "*":
//         return fs.readFile(__dirname + "public/index.html", function (err, data) {
//             if (err) throw err;
//             res.writeHead(200, {'Content-type': 'text/html'});
//             res.end(data);
//         });
//     default:
//         return fs.readFile(__dirname + 'public/notes.html', function (err, data) {
//           if (err) throw err;
//           res.writeHead(200, { 'Content-Type': 'text/html' });
//           res.end(data);
//         });
//     }
// }    

// Routes
// =============================================================



// // Displays all characters
// app.get("/api/characters", function (req, res) {
//   return res.json(characters);
// });


// // Create New Characters - takes in JSON input
// app.post("/api/characters", function (req, res) {
//   // req.body hosts is equal to the JSON post sent from the user
//   // This works because of our body parsing middleware
//   var newCharacter = req.body;

//   // Using a RegEx Pattern to remove spaces from newCharacter
//   // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//   newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();

//   console.log(newCharacter);

//   characters.push(newCharacter);

//   res.json(newCharacter);
// });

  
// Starts our server
server.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});