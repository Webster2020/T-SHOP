import { products as productsDB } from '../data/dbProducts';

export const initialState = {
  products: {
    data: [...productsDB],
    loading: {
      active: false,
      error: false,
    },
  },
  cart: {
    products: {
      data: [],
      loading: {
        active: false,
        error: false,
      },
    },
  },
};
