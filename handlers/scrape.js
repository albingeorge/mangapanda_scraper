var Scrape = require("../modules/scrape")


var scrape = function(req, res, next) {
    var chapters = Scrape.get_chapters(req.body.initial_url);
    res.status(200).send("success");
}


module.exports = {
    "scrape": scrape
}