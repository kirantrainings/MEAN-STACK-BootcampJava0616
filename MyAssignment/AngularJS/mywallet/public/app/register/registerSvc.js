(function () {
    angular.module("register")
        .service("registerSvc", ["$http", function ($http) {
            this.getCountries = function () {
                var countryList = [];
        /*        var countryList = [{
                        name: "India",
                        code: "IN"
            },
                    {
                        name: "United States",
                        code: "US"
            }];*/
                var url = "/api/getCountries";
                $http.get(url)
                .then(function(response){
                    console.log(response);
                    countryList.push(response);
                    //console.log(countryList);
                    return countryList;
                })
                .catch(function(response) {
                    console.log(response);
                });
               // console.log(countryList);
                return countryList;
            };

            this.registerUser = function (data) {
                var url = "/api/createuser";
                $http.post(url, data)
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (response) {
                        console.log(response);
                    });
                console.log(data);
            };

    }]);
})();
