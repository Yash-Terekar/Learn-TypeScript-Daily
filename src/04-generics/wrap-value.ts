const wrapValue = <T>(arg: T): { data: T } => {
  return { data: arg };
};
console.log(wrapValue(12));
console.log(wrapValue("Hello"));
console.log(wrapValue(true));
const getFirstElement = <T>(arg: T[]): T | undefined => {
  return arg[0];
};

const first = getFirstElement([6, 5, 7, 3, 7]);
const names = getFirstElement(["Yash", "Sanket"]);
const empty = getFirstElement([]);
console.log(first);
console.log(names);
console.log(empty);
