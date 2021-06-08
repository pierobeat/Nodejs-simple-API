let express = require("express");
let app = express();
let port = process.env.PORT || 8000;

let bodyParser = require("body-parser");
let mongoose = require("mongoose");

// import api.js
let api = require("./api");
const { connect } = require("mongodb");


// konfigurasi bodyParser
app.use(bodyParser.urlencoded({
    extended:true
}))

app.use(bodyParser.json())

// connect mongoose
mongoose.connect("mongodb://localhost/mahasiswa")

var db = mongoose.connection;


app.use('/api', api);
app.get('/', (req, res) => res.send("Hello World with Express"));

app.listen(port, function(){
    console.log("Running Resthub on port " + port);
})

