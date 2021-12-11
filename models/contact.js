var mongoose = require('mongoose');
var contactSchema = new mongoose.Schema({
    address:{
        type: String
    },
    openinghours:[{
        daytime:{
            type:String
        }
    }],
    contactinfo:[{
        phone:{
            type: String
        },
        email:{
            type: String
        }
    }]
    
});
var Contact = mongoose.model('Contact',contactSchema);
module.exports = Contact;
