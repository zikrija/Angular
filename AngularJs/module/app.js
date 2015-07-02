// declare main module
// app1 depends on other two module
angular.module('app1', ['app3', 'app2']);
angular.module('app2', []);
angular.module('app3', []);


// controler added to module, module don't have idea how much objects belong to it,
// here we have two module and call to same controller, what we have to be show in browser is second controller in list  ['app2', 'app3']
// this order below does not effect to what we will print
angular.module('app3').controller('Ctrl1', function ($scope) {
    $scope.name = "Controler 1 in App3"
});

angular.module('app2').controller('Ctrl1', function ($scope) {
    $scope.name = "Controler1 in App2"
});
