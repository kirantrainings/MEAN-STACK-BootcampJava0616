var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var cart = new Schema({
    productName: String,
    quantity: Number
    
});

module.exports= mongoose.model("cart",cart);
