var User = {
  name: "",
  getUserName: function () {
    console.log(`User Name is ${this.name}`);
  },
};

var abhinav = Object.create(User);
console.log(abhinav);
abhinav.name = "Abhinav Kuruvila Joseph"
abhinav.getUserName()
