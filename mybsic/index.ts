interface UserInterface {
  id: number;
  name: string;
  age: number;
}

const User1: UserInterface = {
  id: 123,
  name: "Yash",
  age: 23,
};

console.log(User1.name);
