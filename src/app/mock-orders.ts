import { PRODUCTS } from './mock-products';
import { Order } from './order';

export const ORDERS: Order[] = [
  { id: 1, purchaser: 'Brisco', products: [PRODUCTS[0], PRODUCTS[2], PRODUCTS[4]] },
  { id: 2, purchaser: 'Bull Navigations', products: [PRODUCTS[4], PRODUCTS[6], PRODUCTS[9], PRODUCTS[5], PRODUCTS[2]] },
  { id: 3, purchaser: 'Funny Company', products: [PRODUCTS[6], PRODUCTS[5]] },
  { id: 4, purchaser: 'Boarco', products: [PRODUCTS[8], PRODUCTS[2], PRODUCTS[0], PRODUCTS[7]] },
  { id: 5, purchaser: 'Phoenixworld', products: [PRODUCTS[3], PRODUCTS[8], PRODUCTS[1]] }
];
