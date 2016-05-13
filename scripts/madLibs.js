angular.module('madLibsApp', [])
.controller('myCtrl', ['$scope', function($scope) {
  $scope.words = 
    {
      "femaleName": "",
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