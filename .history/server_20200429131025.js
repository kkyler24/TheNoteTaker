let express = require('express');
let notetakerapp = express();
let PORT = 3001;
let path = require("path");
let fs = require('fs');

notetakerapp.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
})

notetakerapp.get("/api/notes", function (req, res) {
    fs.readFile('./db.json', 'utf-8', (err, data) => {
        console.log(data);
        var data = JSON.parse(data)
        res.json(data);
    })
})

notetakerapp.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
})



notetakerapp.listen(PORT, function () {
    console.log("Server has started");
})

