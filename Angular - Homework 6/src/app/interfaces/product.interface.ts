export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: 'Electronics' | 'Clothing' | 'Books' | 'Sports';
  stock: number;
}
