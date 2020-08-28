function getUserRole(name, role) {
  switch (role) {
    case "admin":
      return `${name} is a admin with all access`
    case "sub-admin":
      return `${name} is a sub-admin with access to create and delete courses`;
    case "testprep":
      return `${name} is a test prep with access to create and delete tests`;
    case "user":
      return `${name} is a user with access to view courses`;
    default:
      return `${name} is a trial - user`;
  }
}

console.log(getUserRole("Abhinav", "admin"));
