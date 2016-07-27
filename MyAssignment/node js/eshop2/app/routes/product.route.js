module.exports = function (app) {

    var ctrl = require('../controllers/product.controller');
    app.post("/api/createproduct", ctrl.createProduct);
    app.get("/api/getProducts", ctrl.getProducts);
};