
mainModule.controller('responsibilityCtrl', function ($scope) {
    $scope.schedule = {
        classes: []
    };

    // this is BL and don't belong in controller
    $scope.register = function (newClass) {
        $scope.schedule.classes.push({class: newClass})
    }

});

// refactoring of controller
// schedule is services
mainModule.controller('responsibilityRefactorCtrl', function ($scope, schedule) {
    // we can bind data to schedule
    $scope.schedule = schedule;

    $scope.register = function (newClass) {
        // call schedule services
        $scope.schedule.register(newClass, $scope.currentUser)
    }
     
    // use of global data, problem we not have dependency on this we can create easy service 
    $scope.someData = globalData.data;

});