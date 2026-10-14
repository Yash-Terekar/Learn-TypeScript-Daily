const wrapValue = <T>(arg: T): object => {
  return { data: arg };
};
console.log(wrapValue(12));
console.log(wrapValue("Hello"));
console.log(wrapValue(true));
const getFirstElement = <T>(arg: T[]): string => {
  return `1st element is ${arg[0]}`;
};

const first = getFirstElement([6, 7]);
console.log(first);
