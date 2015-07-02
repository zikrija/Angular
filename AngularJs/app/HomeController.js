angularFormsApp.controller("HomeController",
    function ($scope, $location, $modal, DataService) {

      $scope.showCreateEmployeeForm = function () {
        // here we navigate to anoyher section, this we can find in config section of AngularFormsApp.js
        $location.path('/newEmployeeForm');

        // we can show this form in modal
        // resolve pass some information to controller
        //$modal.open({
        //  templateUrl: 'app/EmployeeForm/efTemplateModal.html',
        //  controller: 'efController'
        //});

      };

      $scope.showUpdateEmployeeForm = function (id) {
        $location.path('/updateEmployeeForm/' + id);
      };

    });