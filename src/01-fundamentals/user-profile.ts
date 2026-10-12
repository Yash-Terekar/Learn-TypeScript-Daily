interface User {
  name: string;
  age: number;
  email: string;
  isAdmin?: boolean;
}

const User1: User = {
  name: "Yash Terekar",
  age: 23,
  email: "yashterekar26@gmail.com",
  isAdmin: true,
};
const User2: User = {
  name: "Sanket Yelmate",
  age: 22,
  email: "sanket@gmail.com",
};

const printUser = (user: User): string => {
  return `Username: ${user.name} Age: ${user.age} Email: ${user.email}`;
};

console.log(printUser(User1));
console.log(printUser(User2));
