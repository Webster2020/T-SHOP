// import { products as productsDB } from '../data/dbProducts';

export const initialState = {
  products: {
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
  },
  order: {
    data: [],
  },
};
