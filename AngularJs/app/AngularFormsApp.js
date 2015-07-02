// MODULE - we will wrap everything here, add this in main form(index.html) in html tag
// CREATE GLOBAL VARIABLE, and sets this in angular module where we have our app with name angularFormsApp
// when we create this app we pass list of dependency in [], for eg. route for routing and we have access to all this directives
// or dependency on other module
var angularFormsApp = angular.module('angularFormsApp', ["ngRoute", "ui.bootstrap"]);



//SETUP ROUTING
// to use this $routeProvider we must use ng-route provider (Scripts/angular-route.min.js), look at index.html
angularFormsApp.config(function ($routeProvider) {
  $routeProvider
    //this is client side routing, we will route here for eg. in hash (#) slash (/)home
    .when("/home", {
      // app when is route here will load this template
      templateUrl: "app/Home.html",
      controller: "HomeController"
    })
    .when("/newEmployeeForm", {
      templateUrl: "app/EmployeeForm/efTemplate.html",
      controller: "efController"
    })
    .when("/updateEmployeeForm/:id", {
      templateUrl: "app/EmployeeForm/efTemplate.html",
      controller: "efController"
    })
    .otherwise({
      redirectTo: "/home"
    });
});

