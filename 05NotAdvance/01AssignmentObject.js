var Product = function (name, model, colorsAvailable, cameraNum) {
  this.name = name;
  this.model = model;
  this.colorsAvailable = colorsAvailable;
  this.noOfCameras = cameraNum;
};

let iphone11 = new Product("IPhone 11", "PRO", ["Space Grey", "Silver"], 3);
let iphoneXR = new Product(
  "IPhoneXR",
  "XR",
  ["Red", "white", "Yellow", "Coral", "Blue", "Black"],
  1
);

console.table(iphone11);
console.table(iphoneXR);
