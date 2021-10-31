// import { products as productsDB } from '../data/dbProducts';

export const initialState = {
  products: {
    // data: [...productsDB],
    data: [],
    loading: {
      active: false,
      error: false,
    },
  },
  cart: {
    value: 0,
    products: {
      data: [],
    },
    loading: {
      active: false,
      error: false,
    },
  },
  order: {
    data: [],
    loading: {
      active: false,
      error: false,
    },
  },
};
