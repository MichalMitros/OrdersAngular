import { PRODUCTS } from './mock-products';
import { Order } from './order';

export const ORDERS: Order[] = [
  { id: 1, purchaser: 'Purchaser_1', products: [PRODUCTS[0], PRODUCTS[2], PRODUCTS[4]] },
  { id: 2, purchaser: 'Purchaser_2', products: [PRODUCTS[4], PRODUCTS[6], PRODUCTS[9], PRODUCTS[4], PRODUCTS[2]] },
  { id: 3, purchaser: 'Purchaser_3', products: [PRODUCTS[6], PRODUCTS[5]] },
  { id: 4, purchaser: 'Purchaser_4', products: [PRODUCTS[8], PRODUCTS[2], PRODUCTS[0], PRODUCTS[7]] },
  { id: 5, purchaser: 'Purchaser_5', products: [PRODUCTS[3], PRODUCTS[8], PRODUCTS[1]] }
];
