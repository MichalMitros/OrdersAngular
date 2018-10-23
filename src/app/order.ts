import { Product } from './product';

export class Order {
  id: number;
  purchaser: string;
  products: {
    product: Product,
    amount: number
  }[];
}
