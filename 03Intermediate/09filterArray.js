var tempArray = [2, 3, 1, 4, 5, 9, 8];

tempArray.fill("h"); //fills the array with the param the scond param todefine the start third param to define the end

var anotherArray = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);

//console.log(anotherArray.filter((num) => num % 2 === 0));

var users = ["Ted", "tim", "Ten", "Manny", "Mark", "Mike"]

// console.log(users.slice(1,3)); Slices the array if given two param if and return the sliced portion, If one param is give then it will return all the elements except the index param

users.splice(0,2, 'Yo')

console.log(users);