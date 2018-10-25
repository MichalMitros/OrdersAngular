import { Product } from './product';

export class Order {
  id: number;
  purchaser: string;
  email: string;
  products: {
    product: Product,
    amount: number
  }[];
}
