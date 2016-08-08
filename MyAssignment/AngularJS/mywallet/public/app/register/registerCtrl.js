(function () {
    angular.module("register")
        .controller("registerCtrl", ["$scope", "registerSvc", function ($scope, registerSvc) {
            $scope.user = {};

            $scope.countries = registerSvc.getCountries();
            console.log($scope.countries);

            $scope.register = function () {
                registerSvc.registerUser($scope.user);
            };
    }]);
})();
