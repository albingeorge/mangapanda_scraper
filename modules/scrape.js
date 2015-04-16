var cheerio = require("cheerio");
var request = require("request");
var chapter_model  = require("../models/chapter");


var get_mangapanda_global_variable = function(html, name) {
    var myRegexp =  new RegExp("document\\[\\'" + name + "\\'\\]\\s=\\s(\\d+);", 'g');
    var match = myRegexp.exec(html);
    return match[1];
}



// Fetches the chapters and inserts them to mongo
var get_chapters = function(url) {
    // console.log(url);
    request(url, function(error, response, html){

        // First we'll check to make sure no errors occurred when making the request

        if(!error){
            // Next, we'll utilize the cheerio library on the returned html which will essentially give us jQuery functionality
            var manga_id = get_mangapanda_global_variable(html, "mangaid");
            request("http://www.mangapanda.com/actions/selector/?id=" + manga_id + "&which=", function(error, response, html){
                chapter_model.insert_chapters(chapters);
            });
        }
    });
}


module.exports = {
    "get_chapters": get_chapters
}