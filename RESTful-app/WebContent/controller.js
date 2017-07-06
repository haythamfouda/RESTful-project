angular.module('myApp', [])
.controller('weatherCtrl', function($scope, $http) {
    $http.get('http://api.openweathermap.org/data/2.5/weather?q=cairo&APPID=741df2b3e5b906883724dccead21b911').
        then(function(response) {
            $scope.weather = response.data;
        });
});