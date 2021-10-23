import { products as productsDB } from '../data/dbProducts';

export const initialState = {
  products: {
    data: [...productsDB],
  },
};
