var mongoose = require('mongoose');
var gallerySchema = new mongoose.Schema({
    title:{
        type: String,
    },
        description:{
            type: String
        },
        gallery: [
            {
                image: String,
                categories: Array
            }
        ],
        title: {
            type: String
        },
        description: {
            type: String
        }
});
var Gallery = mongoose.model('Gallery',gallerySchema);
module.exports = Gallery;