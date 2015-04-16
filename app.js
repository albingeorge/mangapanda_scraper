// Imports
var app = require("express")();
var body_parser = require('body-parser');
var scrape = require("./handlers/scrape")

// Used to manage inputs in requests
app.use(body_parser.urlencoded({ extended: false }));
app.use(body_parser.json());


// ROUTES

// Validate the data and then authenticate each request
app.get("/scrape", scrape.scrape);



// Listen to port 3000
app.listen(3000);