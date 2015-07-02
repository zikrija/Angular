var appMain = angular.module('appMain', []);

// value service 
appMain.controller('registrationCtrl', function ($scope, schedule) {
    $scope.availableClasses = [{ name: "Chemistry" }, { name: "Physics" }, { name: "History" }, { name: "Biology" }, ]
    $scope.scheduleSC = schedule;
});
