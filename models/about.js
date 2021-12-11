var mongoose = require('mongoose');
var aboutSchema = new mongoose.Schema({
    title:{
        type:String  
    },
    description:{
        type: String
    },
    image:{
        type: String
    }
});
var About = mongoose.model('About',aboutSchema);
module.exports = About;