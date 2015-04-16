var mongoose = require("mongoose");


var chapterSchema = mongoose.Schema({
    chapter: {type: String, required: '{PATH} is required!'},
    chapter_name: {type: String, required: '{PATH} is required!'},
    chapterlink: {type: String, required: '{PATH} is required!'},
    deletable: Boolean
})

var Chapter = mongoose.model('Chapter', chapterSchema);

var insert_chapters = function(chapters) {
    for(var i=0; i < chapters.length; i++) {
        var chapter = new Chapter(chapters[i]);
        chapter.save(function(err) {
            if(err) {
                console.log(err);
                return false;
            } else {
                return true;
            }
        });
    }

}


module.exports = {
    "insert_chapters": insert_chapters
}