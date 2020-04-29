let express = require('express');
let notetakerapp = express();
let PORT = 3001;

notetakerapp.get("/notes", function(req,res){
    res.sendFile(path.join(__dirname, "./public/notes.html"));
})




notetakerapp.listen(PORT, function(){
    console.log("Server has started")
})