//tipper(100);

function tipper(a) {
  var bill = parseInt(a);
  console.log(bill + 5);
}

// above code runs because the global context scans the code and makes the function available

var bigTipper = function (a) {
  var bill = a;
  console.log(bill + 15);
};

//bigTipper(205); // this works!!

// kingTipper() gives a error because  the global context scans the code a makes the variables undefined

var kingTipper = function (a) {
  var bill = a;
  console.log(bill + 25);
};

console.log(name);

var name = "athul";

function Myname() {
  var name = "Mr.A";
  console.log(name);
}

Myname();

console.log(name);
