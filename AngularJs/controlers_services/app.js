var mainModule = angular.module('app', []);

// create new service with name gData and assign global data then we can set dependency on this
angular.module('app').value('gData', { data: 'global', testData: 'Hello from global data' });