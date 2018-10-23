import { PRODUCTS } from './mock-products';
import { Order } from './order';

export var ORDERS: Order[] = [
  { id: 1, purchaser: 'Brisco', products: [{product: PRODUCTS[0], amount: 12}, {product: PRODUCTS[2], amount: 5}, {product: PRODUCTS[5], amount: 20}, {product: PRODUCTS[6], amount: 32}, {product: PRODUCTS[9], amount: 11}] },
  { id: 2, purchaser: 'Bull Navigations', products: [{product: PRODUCTS[4], amount: 13}, {product: PRODUCTS[6], amount: 21}, {product: PRODUCTS[9], amount: 25}, {product: PRODUCTS[5], amount: 3}, {product: PRODUCTS[2], amount: 3}, {product: PRODUCTS[0], amount: 15}, {product: PRODUCTS[7], amount: 12}] },
  { id: 3, purchaser: 'Funny Company', products: [{product: PRODUCTS[6], amount: 8}, {product: PRODUCTS[5], amount: 10}] },
  { id: 4, purchaser: 'Boarco', products: [{product: PRODUCTS[8], amount: 20}, {product: PRODUCTS[2], amount: 3}, {product: PRODUCTS[0], amount: 7}, {product: PRODUCTS[7], amount: 11}] },
  { id: 5, purchaser: 'Phoenixworld', products: [{product: PRODUCTS[3], amount: 12}, {product: PRODUCTS[8], amount: 4}, {product: PRODUCTS[5], amount: 23}, {product: PRODUCTS[1], amount: 5}] }
];
