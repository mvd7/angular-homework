export interface MyOrders {
  id: number;
  name: string;
  description: string;
  price: number;
  category: 'Electronics' | 'Clothing' | 'Books' | 'Sports';
  quantity: number;
}
