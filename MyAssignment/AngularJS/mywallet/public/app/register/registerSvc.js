(function () {
    angular.module("register")
        .service("registerSvc", ["$http", "$q" , function ($http, $q) {
            this.getCountries = function () {
                var countryList = [];
                 var dfd = $q.defer();
                var url = "/api/getCountries";
                $http.get(url)
                .then(function(response){
                    console.log(response);
                    countryList.push(response);
                    dfd.resolve(response.data);
                })
                .catch(function(response) {
                    console.log(response);
                    dfd.reject("Error Occured");
                });
               

                return dfd.promise;
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
