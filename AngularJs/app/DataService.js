//JUST TO CONTROLER NOT REACH WEB SERVICE BY ITSELF, THIS SERVICE WILL GET AND POST INFORMATION FOR US
angularFormsApp.factory('DataService',
  function () {
    //return {
    //  employee: {
    //    fullName: 'Asd ddd',
    //    notes: 'Hello angular',
    //    department: 'Administration',
    //    perkCar: true,
    //    perkStock: false,
    //    perkSixWeek: true,
    //    payroolType: 'none'
    //  }
    //},

    // Revelin pattern
    var getEmployee = function (id) {
      if (id == 123) {
        return {
          id: 123,
          fullName: "Milton Waddams",
          notes: "The ideal employee.  Just don't touch his red stapler.",
          department: "Administration",
          perkCar: true,
          perkStock: false,
          perkSixWeeks: true,
          payrollType: "none",
          dtStart: '10/31/2015',
          // we need spec. and date for time picker
          dtTime: '10/31/2015 3:00 PM',
          topProgrammingLanguage: 'C'
        };
      }
      return undefined;
    };

    var insertEmployee = function (newEmployee) {
      return true;
    };

    var updateEmployee = function (employee) {
      return true;
    };

    return {
      insertEmployee: insertEmployee,
      updateEmployee: updateEmployee,
      getEmployee: getEmployee
    };

  });