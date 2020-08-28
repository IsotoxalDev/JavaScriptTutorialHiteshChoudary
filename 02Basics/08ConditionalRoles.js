var userType = "Unknown";

switch (userType) {
  case "admin":
    console.log("You have full access");
    break;
  case "subadmin":
    console.log("You have access to create and delete courses");
    break;
  case "testprep":
    console.log("You have access to create and delete tests");
    break;
  case "user":
    console.log("You have access to  view courses");
    break;
  default:
    console.log("Trial User");
    break;
}
