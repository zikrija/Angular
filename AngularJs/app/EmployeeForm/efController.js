// HANDLE DATA IN DOLAR SIGN VARIABLE
// data will be in $scope variable who holds the model within the controller
// in form control we access this value through ng-model, this is for two way bindings
// ng-bind or {{ someProperty }} this is for one way binding

// $routeParams here we will have id
// $modalInstance we need this for modal
angularFormsApp.controller('efController',

  function efController($scope, $window, $routeParams, DataService) {

    // Read data
    if ($routeParams.id)
      $scope.employee = DataService.getEmployee($routeParams.id)
    else
      // just to know this is insert
      $scope.employee = { id: 0 };


    // we use this variablo to access properties
    // $scope.employee = DataService.employee;


    //We will put this array into the scope, this have to bind ddl(options), this is a list of element in dll
    $scope.departments = [
      "Engineering",
      "Marketing",
      "Finance",
      "Administration"
    ];

    // for cancel we can create copy of employee object, we can uncreate this with deep copy
    $scope.editableEmployee = angular.copy($scope.employee);

    $scope.submitForm = function () {
      // here we can handle insert update
      if ($scope.editableEmployee.id == 0) {
        // insert new employee
        DataService.insertEmployee($scope.editableEmployee);
      } else {
        // update employee
        DataService.updateEmployee($scope.editableEmployee);
      }

      // return to employee object with copy
      $scope.employee = angular.copy($scope.editableEmployee);

      // we use this in modal
      //$modalInstance.close();

      // return to previous window when we don't use modal
      $window.history.back();
    };

    $scope.cancelForm = function () {
      // we use this in modal, same as cancel, we don't need to save any changes
      // $modalInstance.dismiss();

      // return to previous window when we don't use modal
      $window.history.back();
    };


    $scope.programmingLanguages = [
      "C",
      "C++",
      "C#",
      "VB",
      "VB.net",
      "Pascal",
      "Perl",
      "Python"
    ];

    $scope.shouldShowValidation = function () {
      return true;
    };

  });
