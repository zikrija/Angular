mainModule.controller("scopeCtrl", function ($scope, scopeFctry) {
    $scope.testMessage = "Test message";

    $scope.models = [{ id: 1, name: "test repeater 1" }, { id: 2, name: "test repeater 2" }];

    $scope.testButton = function () {
        var test = scopeFctry.titleTest;
        alert(test);
    }

});