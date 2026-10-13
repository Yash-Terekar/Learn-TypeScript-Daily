interface Person {
  name: string;
  age: number;
}
interface Employee extends Person {
  employeeID: number;
  department: string;
}

const Emp1: Employee = {
  name: "Yash Terekar",
  age: 23,
  employeeID: 2426,
  department: "Backend",
};
const Emp2: Employee = {
  name: "Sanket Yelmate",
  age: 22,
  employeeID: 2427,
  department: "Cloud",
};
const displayProfile = (emp: Employee): string => {
  return `Employee Id: ${emp.employeeID} Employee Name: ${emp.name} Employee Department: ${emp.department}`;
};
console.log(displayProfile(Emp1));
console.log(displayProfile(Emp2));
