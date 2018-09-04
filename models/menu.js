var mongoose = require('mongoose');
var menuSchema = new mongoose.Schema({
   title:{
       type: String
   },
   description:{
       type: String
   },
   menu:[{
       title: String,
       items:[{
           title: String,
           price: String,
           description: String
       }]
   }]
    
});
var Menu = mongoose.model('Menu',menuSchema);
module.exports = Menu;