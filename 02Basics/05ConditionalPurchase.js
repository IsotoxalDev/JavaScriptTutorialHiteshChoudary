var isLoggedIn = true;
var isEmailVerified = true;
var cardinfo = true;

// if (isLoggedIn) {
//   console.log("You are logged in");
//   if (isEmailVerified) {
//     console.log("Your email is verified");
//     if (cardinfo) {
//       console.log("You can make a purchase");
//     }
//   }
// }

if (isLoggedIn && isEmailVerified && cardinfo) {
  console.log("User can make purchase.");
} else {
  console.log("User isn't allowed to make purchase");
}
