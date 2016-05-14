angular.module('madLibsApp', [])
.controller('myCtrl', ['$scope', function($scope) {
  $scope.gender;
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
}]);