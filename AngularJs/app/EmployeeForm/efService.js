//JUST TO CONTROLER NOT REACH WEB SERVICE BY ITSELF, THIS SERVICE WILL GET AND POST INFORMATION FOR US
// WE CREATE MORE GENERIC SERVICE WITH NAME DATA SERVICE


// THIS IS ONLY FOR TEST NOT IN USE

angularFormsApp.factory('efService',
  function () {
    return {
      employee: {
        fullName: 'Asd ddd',
        notes: 'Hello angular',
        department: 'Administration',
        perkCar: true,
        perkStock: false,
        perkSixWeek: true,
        payroolType: 'none',
        dtStart: new Date(), 
        topProgrammingLanguage : 'C'
      }
    }
  });