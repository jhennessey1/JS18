angular.module('inspirationMod', [])

angular.module('inspirationMod')
	.controller('inspirationRoller', ['$scope', function($scope){
		$scope.quotes = []
		$scope.quote = {
			author: "",
			text: ""
		}


		$scope.subQuote = function() {
			$scope.quotes.push($scope.quote)
			$scope.quote = {}
		}
	}])