(function () {

    var vehicle = function () {
        var nooftyres = "";
        this.vehicleType = "";
        this.engineCC = "";
        this.numberOfTyres = function (data) {
            if (data) {
                nooftyres = data;
            }
            return nooftyres;
        }
    };

    function buildVehicle() {
        vehicle.manufacturer = "Audi";
        var bike = new vehicle();
        vehicle.prototype.fuelType = "";
        bike.vehicleType = "Two Wheeler";
        bike.engineCC = 200;
        bike.numberOfTyres(2);

        bike.numberOfGears = 6;
        bike.fuelType = "petrol";

        var bus = new vehicle();
        bus.vehicleType = "six wheeler";
        bus.engineCC = 10000;
        bus.numberOfTyres = 6;
        bus.fuelType = "Gas";


        console.log(bike);
        console.log(bus);
    }

    buildVehicle();

})();
