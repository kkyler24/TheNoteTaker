let express = require('express');
let notetakerapp = express();
let PORT = 3001;
let path = require("path");

notetakerapp.get("/notes", function(req,res){
    res.sendFile(path.join(__dirname, "./public/notes.html"));
})

notetakerapp.get("/*", function(req,res){
    res.sendFile(path.join(__dirname, "./public/index.html"));
})





notetakerapp.listen(PORT, function(){
    console.log("Server has started")
})