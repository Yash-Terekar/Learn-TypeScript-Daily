type ProductStatus = "available" | "out-of-stock" | "discontinued";
type ProductStatusExtend = ProductStatus | "pending";

type Product = {
  id: number;
  name: string;
  price: number;
  status: ProductStatusExtend;
};

const Milk: Product = {
  id: 122,
  name: "Katraj Milk",
  price: 60,
  status: "available",
};
const Bread: Product = {
  id: 123,
  name: "Katraj Milk",
  price: 60,
  status: "out-of-stock",
};
const Egsgs: Product = {
  id: 124,
  name: "Katraj Milk",
  price: 60,
  status: "pending",
};
const invalidProduct: Product = {
  id: 125,
  name: "Butter",
  price: 80,
  status: "available",
};
const printFunc = (product: Product): string => {
  return `Product Name: ${product.name} Product Price: ${product.price} Status: ${product.status}`;
};

const sellingStatus = (status: ProductStatusExtend): string => {
  return status === "available"
    ? "Product can be sold"
    : "Product cannot be sold";
};
console.log(printFunc(Milk));
console.log(printFunc(Bread));
console.log(printFunc(Egsgs));
console.log(printFunc(invalidProduct));
console.log(sellingStatus(Milk.status));
console.log(sellingStatus(Bread.status));
