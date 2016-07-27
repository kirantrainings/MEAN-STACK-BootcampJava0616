module.exports = function (app) {

    var ctrl = require('../controllers/cart.controller');
    app.post("/api/createCart", ctrl.createCart);
    app.get("/api/getCart", ctrl.getCart);
};