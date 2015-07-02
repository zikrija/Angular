var mainModule = angular.module("app", []);

mainModule.controller("basicCtrl", function ($scope) {
    $scope.basicTest = "Test: ";
})

// Naming Directive
// camelCasing we use here, and snake casing when we use this in html <sc-directive /> this is NOT OPTIONAL and can cause many errors
// directives unlike controllers or services, don't overide if have same name
// BASIC DIRECTIVE
mainModule.directive("scBasicDirective", function () {
    return {
        restrict: 'E',
        replace: true,
        template: '<div> This is basic directive!!!<hr /></div>'
    }
})

mainModule.directive("scBasicDirectiveWithCtrl", function () {
    return {
        restrict: 'E',
        replace: true,
        template: '<div> {{ basicTest }} This is from inline template directive, with test from scope!!!<hr /></div>'

        //Unless your template is very small, it's typically better to break it apart into its own HTML file and load it with the templateUrl option.
        //templateUrl: "Directive.html"
    }

})


//LINK
// Directives that want to modify the DOM typically use the link option. link takes a function with the following signature, function link(scope, element, attrs) { ... } where:
        // scope is an Angular scope object.
        // element is the jqLite-wrapped element that this directive matches.
        // attrs is a hash object with key-value pairs of normalized attribute names and their corresponding attribute values.
mainModule.directive("scLink", function () {
    return {
        restrict: 'E',
        replace: true,
        link: function (scope) {
            scope.titleBasicLink = "I'm from link directive";
        }
    }

})

mainModule.controller("linkCtrl", function ($scope) {
    $scope.test1 = "Hi from link loop";
})

mainModule.directive("scLinkExt", function () {
    return {
        restrict: 'E',
        replace: true,
        link: function (scope) {
            scope.title = "I'm from link loop";
            scope.values = scope.values || []
            scope.values.push("I'm first directive from link")
            scope.values.push("I'm second directive from link")
        }
    }

})


mainModule.controller('peopleCtrl', function ($scope) {
    $scope.naomi = { name: 'Naomi', address: '1600 Amphitheatre' };
    $scope.igor = { name: 'Igor', address: '123 Somewhere' };
})

// we can send scope
mainModule.directive('myPeople', function () {
    return {
        restrict: 'E',
        scope: {
            // info is attribute in html tag
            customerInfo: '=info',
            // same as '=number'
            number: '='
        },
        templateUrl: 'my-people.html'
    };
});

//Creating a Directive that Manipulates the DOM


