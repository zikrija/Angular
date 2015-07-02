//GET FORM ON SCREEN USE DECLERATIVE HTML
// this name employeeForm will be tranlate into lower case dash HTML style name <employee-form />, this will be done automatically
// we can call this on index html page
angularFormsApp.directive('employeeForm',
  function () {

    return {
      //This E say, We will use this directive only as Element
      restrict: 'E',
      templateUrl: 'app/EmployeeForm/efTemplate.html'
    }

  });