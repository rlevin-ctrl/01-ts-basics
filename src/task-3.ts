// Завдання 3. Типізація масивів
const usernames: string[] = ["oleh", "ivan", "maria"];

const ratings: number[] = [5, 4, 3, 5];

interface Product {
  id: number;
  name: string;
  price: number;
}

const products: Product[] = [
  { id: 1, name: "Phone", price: 12000 },
  { id: 2, name: "Tablet", price: 20000 },
];
