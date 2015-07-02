// Controllers - Cordinate View and Model, 
// In controller we can have only code to enabled communication between View other the Model or Services and handle events rised by view 
// through $scope object we will do bindings
// Services handles business logic

// Controller creations - First parameter is controller name 
// Second parameter is controller functions or safe array how has controller function
// In () we put dependency on services or other, 
// Best, gData - is service with global parameter, registration - is service
mainModule.controller('schedulerCtrl', function ($scope, gData, registration, registrationFac, registrationGet) {
    $scope.test = "asd";

    // we don't see this in dependency list because is global
    $scope.test = globalData.data;
    // only if we use global variable as services then we have
    $scope.test1 = gData.testData;

    $scope.textFromService = registration.title;

    $scope.factoryService = registrationFac.titleFactory

    $scope.factoryProvider = registrationGet.title;
});

// declare like inline functions
//mainModule.controller('schedulerCtrl', schedulerCtrl);
//function schedulerCtrl($scope) {
//    $scope.test = "asd";
//};

// old way and not fav. only name of schedulerCtrl is enough and call from html NOT RECOMENDED WAY
//function schedulerCtrl($scope) {
//    $scope.test = "asd";
//};


// we must add word Filter, we have this filter define in schedulerSrvc
mainModule.controller('classCtrl', function ($scope, raitningsFilter) {
    $scope.availableClasses = [{ name: "Chemistry", rating: 2 },
        { name: "Electronics", rating: 4 },
        { name: "Histroy", rating: 1 }
    ]

});