module.exports = function(app) {

    var ctrl = require('../controllers/countryList.controller');

    app.post("/api/Country/save", ctrl.createCountry);
    app.get("/api/getCountries", ctrl.getCountries);

};
