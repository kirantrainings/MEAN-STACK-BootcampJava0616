var controller = {};
var Cart = require("../models/cart");
var Prod = require("../models/product");
controller.createCart = function (req, res) {
    
    var cart = req.body;
    console.log(cart);
    var cartModel = new Cart(cart);
    cartModel.save(function (err, data) {
        if (err) {
            res.send("Error Occurred");
        } 
        else {
            res.send("cart created")
        }
        
     /*  if(Prod.productName == Cart.productName){
            res.send("product Created");
        } else {
            res.send("product doesn't exist");
        }*/
    });
};

controller.getCart = function (req, res) {
    Cart.find({}, function (err, data) {
        if (err) {
            res.send("error occured");
        } else {
            res.send(data);
        }
       
    });
};
module.exports = controller;