var User = function (firstName, courseCount) {
  this.firstName = firstName;
  this.courseCount = courseCount;
  this.getCourseCount = () => {
    console.log(`${this.firstName} has ${this.courseCount} courses`);
  };
};

User.prototype.getFirstName = function () {
  console.log(`Your first name is ${this.firstName}`);
};

let abhinav = new User("Abhinav Kuruvila", 10);
abhinav.getFirstName();
abhinav.getCourseCount();
//console.table(abhinav);
