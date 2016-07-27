var controller = {};
var Cart = require("../models/cart");
var Prod = require("../models/product");
controller.createCart = function (req, res) {
    
    var cart = req.body;
    console.log(cart);
    var cartModel = new Cart(cart);
    cartModel.save(function (err, data) {
        if (err) {
            res.send("Error");
        } 
        else {
            res.send("cart created")
        }
    });
};

controller.getCart = function (req, res) {
    Cart.find({}, function (err, data) {
        if (err) {
            res.send("error");
        } else {
            res.send(data);
        }
       
    });
};
module.exports = controller;