// Code your solution here
function findMatching(arr, name){
  const foundDrivers = []
  arr.filter(function(item) {
    return (item.toLowerCase() === name.toLowerCase()) ? foundDrivers.push(item) : `No driver with the name ${name}`;
  })
  return foundDrivers;
}


function fuzzyMatch(arr, fuzzyName){
  const fuzzyDrivers = []
  arr.filter(function(item){
    if(item.includes(fuzzyName)){
      for (let char of fuzzyName){
        return (item.indexOf(char) == fuzzyName.indexOf(char)) ? fuzzyDrivers.push(item) : "None";
      }
    }
  })
  return fuzzyDrivers;
}


function matchName(arr, name){
  const namedDrivers = []
  arr.filter(function(item){
    return (item.name == name) ? namedDrivers.push(item) : "None"
  })
  return namedDrivers
}
