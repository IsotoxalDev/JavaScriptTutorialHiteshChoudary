console.log(this);

var user = {
  firstName: "Abhinav",
  courseCount: 4,
  getCourseCount: function () {
    console.log("5: ", this);
    function sayHello() {
      console.log("Hello");
      console.log("10: ", this);
    }
    sayHello();
  },
};

user.getCourseCount();
