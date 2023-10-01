// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, attribute) {
    return drivers.filter(function (driver) { return driver.toLowerCase() === attribute.toLowerCase() })
  }
  console.log(findMatching)

  function fuzzyMatch(drivers, attribute) {
    return drivers.filter(function (driver) { return driver.toLowerCase().substring(0, attribute.length) === attribute.toLowerCase() })
  }
  
  function matchName(drivers, argument) {
    return drivers.filter(function (driver) { return driver.name === argument })
  }