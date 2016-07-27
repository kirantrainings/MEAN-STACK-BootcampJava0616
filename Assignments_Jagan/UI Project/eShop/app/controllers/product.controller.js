var controller = {};
var Product = require("../models/product");
controller.createProduct = function (req, res) {
    
    var product = req.body;
    console.log(product);
    var productModel = new Product(product);
    productModel.save(function (err, data) {
        if (err) {
            res.send("Error");
        } else {
            res.send("product Created")
        }
    });
};

controller.getProducts = function (req, res) {
    Product.find({}, function (err, data) {
        if (err) {
            res.send("Error");
        } else {
            res.send(data);
        }
    });
};
module.exports = controller;