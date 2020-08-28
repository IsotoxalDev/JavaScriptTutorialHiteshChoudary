function sayHello(name) {
  //name is a parameter
  // console.log("Hey there ", name); //not efficient
  console.log(`Hey There ${name}, How are you?`); // used in modern javascript much more efficient
}

// sayHello("Abhinav")
// sayHello("Athul")

function namskaram() {
  return "Hello in malayalam"; //return never prints in console
}

var greet = namskaram();

console.log(greet);
