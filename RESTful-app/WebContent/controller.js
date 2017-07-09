angular.module('myApp', [])
.controller('weatherCtrl', function($scope, $http)
{
	$scope.getWeather = function(city)
	{
		 $http.get('http://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID=741df2b3e5b906883724dccead21b911').then(resp)		
	};
    resp = function(response)
    {
    	$scope.weather = response.data;
    	
    };
});