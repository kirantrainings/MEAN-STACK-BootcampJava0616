(function () {
    function generateTicket(source, destination, mode) {
        var welcomeSatement = "Dear Customer, Your";
        return function primt() {
            console.log(welcomeSatement)
            if (mode == "Flight") {
                console.log("--Flight From--");
            }
            if (mode == "Cruise") {
                console.log("--Cruise From--");
            }

            console.log(source);
            console.log("---To--");
            console.log(destination);
            return function () {
                if (mode == "Flight") {
                    console.log("Flight Base Fare is $12000 plus taxes");
                }
                if (mode == "Cruise") {
                    console.log("Cruise Base Fare is $120 plus taxes");
                }
            };
        }

    }

    /*    var flightTicket = generateTicket("Hyderabad", "Delhi", "Flight");

        var cruiseTicket = generateTicket("Las vegas", 'Texas', "Cruise");

        var printPriceCruist = cruiseTicket();
        var printPriceFlight = flightTicket();

        printPriceFlight();
        printPriceCruist();*/
    generateTicket("Hyderabad", "Delhi", "Flight")()();
    generateTicket("Las Vegas", "Texas", "Cruise")()();

})();
