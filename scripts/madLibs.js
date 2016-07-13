var madLibsModule = angular.module('madLibsApp', ['ngMessages', 'ngAnimate']);
madLibsModule.factory('genderize', function() {
  return {
    male: {
      he: 'he',
      his: 'his',
      him: 'him'
    },
    female: {
      he: 'she',
      his: 'her',
      him: 'her'
    }
  }
});

madLibsModule.controller('myCtrl', function($scope, genderize) {
  $scope.genderize = genderize;

  $scope.genders = {
    type: "select", 
    name: "genders",
    value: "---",
    values: ["---", "male", "female"],
    defined: false
  };

  $scope.genderChange = function() {
    if($scope.genders.value != "---") {
      $scope.genders.defined = true;
    }
  }

  $scope.submit = function(){
    if( $scope.wordsForm.$valid ) {
      this.validForm = true;
    }
  }

  var original = $scope.user;
  var origGenders = angular.copy($scope.genders);

  $scope.reset = function() {
    angular.copy(origGenders, $scope.genders);
    $scope.user = angular.copy(original)
    $scope.wordsForm.$setPristine();
    $scope.validForm = false;
  };

});