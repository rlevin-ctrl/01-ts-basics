// Завдання 2. Інтерфейси
interface Product {
  readonly id: number;
  name: string;
  price: number;
  category: string;
  description?: string;
}

const product: Product = {
  id: 1,
  name: "Laptop",
  price: 30000,
  category: "Electronics",
};
