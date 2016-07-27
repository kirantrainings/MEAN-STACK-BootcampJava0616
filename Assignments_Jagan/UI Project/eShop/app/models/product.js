var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var product = new Schema({
    productName: String,
    price: Number,
    discount: {
          isDiscount: Boolean,
          percentageVendor:Number
    }
  
    
});
module.exports= mongoose.model("product",product);
