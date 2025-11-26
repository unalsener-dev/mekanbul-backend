var mongoose = require('mongoose');

var hour = new mongoose.Schema({
    days: {type: String, required: true},
    open: String,    
    close : String,
    isClosed : {type: Boolean, required: true}
});

var comment = new mongoose.Schema({
    author : String,
    rating : {type : Number, "default" : 0, min : 0, max : 5},
    text : {type: String, required: true}, 
    Date : {type : Date, "default" : Date.now}
});

var venue = new mongoose.Schema({
    name : {type : String, required : true},
    address :{type: String, required : true}, 
    rating : {type : Number, "default" : 0, min : 0, max : 5},
    foodanddrink : [String],
    hours : [hour],
    comments : [comment],
    coordinates : {type : [Number], index : '2dsphere', required : true}
 }); 

mongoose.model('Venue', venue, "venues");