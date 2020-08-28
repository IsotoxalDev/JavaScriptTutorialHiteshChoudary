var user = {
  firstName: "Abhinav Kuruvila",
  lastName: "Joseph",
  role: "Admin",
  loginCount: 35,
  loggedFromGithub: true,
  courseList: [],
  buyCourse: function (courseName) {
    this.courseList.push(courseName);
  },
  getCourseCount: function () {
    return `${this.firstName} is enrolled in a total of ${this.courseList.length} courses`;
  },
  info: function () {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      role: this.role,
      loginCount: this.loginCount,
      noOfCourses: this.courseList.length,
      loggedInFromGithub: this.loggedFromGithub,
    };
  },
};

// console.log(user.firstName);
// console.log(user.getCourseCount());
user.buyCourse("ReactJS");
user.buyCourse("ReactJS");
// console.log(user.getCourseCount());
console.table(user.info());
