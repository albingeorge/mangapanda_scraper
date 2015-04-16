// Imports
var app = require("express")();
var body_parser = require('body-parser');
var scrape = require("./handlers/scrape")
var mongoose = require("mongoose");

// Used to manage inputs in requests
app.use(body_parser.urlencoded({ extended: false }));
app.use(body_parser.json());


mongoose.connect('mongodb://localhost/mangapanda');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
    console.log("Mongodb connection success");
});


// ROUTES

// Validate the data and then authenticate each request
app.post("/scrape", scrape.scrape);



// Listen to port 3000
app.listen(3000);