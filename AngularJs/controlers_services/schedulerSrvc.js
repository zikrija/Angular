// Handle non-view logic
// Communicate with server
// Hold data & state
// Services are a singeltone and when is created one time we can not go back

// 4 - service function create simple services in angular
// One diff between this and factory func. is that service function will take function that we gave and create new one, then will cash result of that function and then will give result every time when we use services
mainModule.service('registration', function () {
    return {
        title: 'Service from Service'
    }
})

// 5 WAY to create services 
// 1 - create value function like in app gData where we define global data and then inject in controller  function ($scope, gData...  in this way we provide primitives and simple value
// we can do value service like this and have same efect like services above NOT WORK FOR ME
// angular.module('app').service('registration', { title: 'Service from Service' })

// 2 - constant diff between constant and value is constant available through app config fase

// 3 - factory must recive a function as second parameter, execute that function and cashed results. give back value of results every time some one who ask for this.
mainModule.factory('registrationFac', function () { return { titleFactory: 'Service from factory' } })

// 5 - provider function,provide other function how return value how must have $get function, $get will be call once and cashed result
// BENIFIT: WE CAN CONFIG FUNCTION BEFORE WE CREATING THIS FUNCTION
mainModule.config(function ($provide) {
    $provide.provider('registrationGet', function () {
        var type;
        return {

            setType: function(value){
                type = value;
            },

            $get: function () {
                // now will create our service
                return {
                    title: 'Service from provider ' + type
                }
            }

        }
    })

})

// if we want to use setType then we must use this special function
// registrationProvider (name must be serviceNameProvider) is base on service we talking registrationGet
// this will be configure just one only in config fase
mainModule.config(function (registrationGetProvider) {
    // this is what we return from function in registrationGet
    registrationGetProvider.setType('Angular');
})

//FILTERS - are services with specific name, angular add Filter on the end of name
// we can change this to mainModule.factory("raitningsFilter", function () { and this will work
mainModule.filter("raitnings", function () {
    return function (input) {
        var rat = parseInt(input);
        var result = "";
        for (var i = 0; i < rat; i++) {
            result += "*";
        }

        return result;
    }

});


