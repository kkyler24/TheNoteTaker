let express = require('express');
let notetakerapp = express();
let PORT = 3001;
let path = require("path");
let fs = require('fs');
notetakerapp.use(express.urlencoded({ extended: true }));
notetakerapp.use(express.json());

notetakerapp.use(express.static("public"));

notetakerapp.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
})

notetakerapp.get("/api/notes", function (req, res) {
    fs.readFile('./db/db.json', 'utf-8', (err, data) => {
        var data = JSON.parse(data)
        res.json(data);
    })
})

notetakerapp.post("/api/notes", function(req, res) {
    var newNote = req.body;
    console.log(newNote);
    // first we need to get access to file by reading what is on the file first
    fs.readFile('./db/db.json', 'utf-8', (err, data) => {
        var data = JSON.parse(data)
        // pushing data into array which is newNote (the post)
            data.push(newNote);
            // have to write to file, but must stringify first
            fs.writeFile('./db/db.json', JSON.stringify(data), (err, data)=> {
                // after you stringify then send file newNote
                res.json(newNote);
            }
            )
        })
   
  });
  


notetakerapp.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
})

notetakerapp.listen(PORT, function () {
    console.log("Server has started");
})

