angular.module('madLibsApp', ['ngMessages'])
.controller('myCtrl', ['$scope', function($scope) {
  $scope.genders = [
    {
      which: "male"
    },
    {
      which: "female"
    }
  ]

  $scope.words = 
    {
      "name": "",
      "dirtyTask": "",
      "obnoxiousCelebrity": "",
      "jobTitle": "",
      "celebrity": "",
      "hugeNumber": "",
      "tediousTask": "",
      "uselessSkill": "",
      "adjective": ""
    };

    $scope.origWords = angular.copy($scope.words);
    $scope.origGenders = angular.copy($scope.genders);

    $scope.submit = function(){
      if( $scope.wordsForm.$valid ) {
        this.validForm = true;
      }
    }
 
    $scope.reset = function() {
      angular.copy($scope.origWords, $scope.words);
      angular.copy($scope.origGenders, $scope.genders);
      $scope.wordsForm.$setPristine();
      $scope.validForm = false;
      $scope.gender.which = null;
    };
}]);