type User = {
  name: string;
  email: string;
};
type Permission = "admin" | "user";
type Admin = {
  permission: Permission[];
};
type adminUser = User & Admin;

const ValidAdmin: adminUser = {
  name: "Yash Terekar",
  email: "yashterekar@gmail.com",
  permission: ["admin"],
};
const NonValidAdmin: adminUser = {
  name: "Yash Terekar",
  email: "yashterekar@gmail.com",
  permission: ["user"],
};
const RandomtextAdmin: adminUser = {
  name: "Yash Terekar",
  email: "yashterekar@gmail.com",
  permission: [],
};
const printUser = (user: adminUser): string => {
  return `Username: ${user.name} Email: ${user.email} IsAdmin?: ${user.permission.includes("admin") ? "Welcome Admin" : user.permission.includes("user") ? "Welcome User" : "This is not valid user status "}`;
};

console.log(printUser(ValidAdmin));
console.log(printUser(NonValidAdmin));
console.log(printUser(RandomtextAdmin));
