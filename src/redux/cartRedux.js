// --- S E L E C T O R S --- //
export const getAll = ({cart}) => {
  // console.log(cart.products);
  return cart.products.data;
};
export const getCost = ({cart}) => {
  // console.log(cart.value);
  return cart.value;
};

// --- A C T I O N   N A M E   C R E A T O R --- //
const caName = name => `app/cart/${name}`;

// --- A C T I O N   T Y P E S --- //
const FETCH_START = caName('FETCH_START');
const FETCH_SUCCESS = caName('FETCH_SUCCESS');
const FETCH_ERROR = caName('FETCH_ERROR');
const ADD_TO_CART = caName('ADD_TO_CART');
const DEL_FROM_CART = caName('DEL_FROM_CART');
const CHANGE_AMOUNT = caName('CHANGE_AMOUNT');
const ADD_DESCRIPTION = caName('ADD_DESCRIPTION');
const SET_CART_VALUE = caName('SET_CART_VALUE');
const CLEAR_CART = caName('CLEAR_CART');

// --- A C T I O N   C R E A T O R S --- //
export const caFetchStarted = payload => ({ payload, type: FETCH_START });
export const caFetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const caFetchError = payload => ({ payload, type: FETCH_ERROR });
export const caAddToCart = payload => ({ payload, type: ADD_TO_CART });
export const caDelFromCart = payload => ({ payload, type: DEL_FROM_CART });
export const caChangeAmount = payload => ({ payload, type: CHANGE_AMOUNT });
export const caAddDescription = payload => ({ payload, type: ADD_DESCRIPTION });
export const caSetCartValue = payload => ({ payload, type: SET_CART_VALUE });
export const caClearCart = payload => ({ payload, type: CLEAR_CART });

// --- R E D U C E R --- //
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    case ADD_TO_CART: {
      return {
        ...statePart,
        products: {
          ...statePart.products,
          data: [
            ...statePart.products.data,
            action.payload,
          ],
        },
      };
    }
    case DEL_FROM_CART: {
      return {
        ...statePart,
        products: {
          ...statePart.products,
          data: statePart.products.data.filter(product => product.id !== action.payload.id),
        },
      };
    }
    case CHANGE_AMOUNT: {
      return {
        ...statePart,
        products: {
          ...statePart.products,
          data: statePart.products.data.map(el => el.id === action.payload.id ? {...el, amount: action.payload.amount} : el),
        },
      };
    }
    case ADD_DESCRIPTION: {
      return {
        ...statePart,
        products: {
          ...statePart.products,
          data: statePart.products.data.map(el => el.id === action.payload.id ? {...el, description: action.payload.description} : el),
        },
      };
    }
    case SET_CART_VALUE: {
      return {
        ...statePart,
        value: action.payload,
      };
    }
    case CLEAR_CART: {
      return {
        ...statePart,
        value: 0,
        products: {
          data: [],
        },
      };
    }
    default:
      return statePart;
  }
};