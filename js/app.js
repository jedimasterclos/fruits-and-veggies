var app = angular.module('fruitVeg', []);

app.controller('mainCtrl', ['$scope', function($scope) {
  $scope.fruits = []
  $scope.veggies = []
  
 	$scope.randomize = function(array) {
		var result = [];

		for (var i = 0; i < array.length; i++) {
			var index = Math.floor(Math.random() * (array.length) + 1);
			result.push(array[index]);
		}
		return result;
	}
	
	$scope.foods = $scope.randomize(fruits.concat(vegetables));

  $scope.moveLeft = function(idx) {
    $scope.fruits.push($scope.foods[idx]);
    $scope.foods.splice(idx, 1);
  }

  $scope.moveRight = function(idx) {
    $scope.veggies.push($scope.foods[idx]);
    $scope.foods.splice(idx, 1);
  }

  $scope.moveBackLeft = function(idx) {
    $scope.foods.push($scope.veggies[idx]);
    $scope.veggies.splice(idx, 1);
  }

  $scope.moveBackRight = function(idx) {
    $scope.foods.push($scope.fruits[idx]);
    $scope.fruits.splice(idx, 1);
  };
}]);

console.log('App Started');
console.log('Fruit count', fruits.length);
console.log('Veggie count', vegetables.length);

