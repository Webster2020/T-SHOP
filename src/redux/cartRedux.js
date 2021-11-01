// --- S E L E C T O R S --- //
export const getAll = ({cart}) => cart.products.data;
export const getCost = ({cart}) => cart.value;

// --- A C T I O N   N A M E   C R E A T O R --- //
const caName = name => `app/cart/${name}`;

// --- A C T I O N   T Y P E S --- //
const ADD_TO_CART = caName('ADD_TO_CART');
const DEL_FROM_CART = caName('DEL_FROM_CART');
const CHANGE_AMOUNT = caName('CHANGE_AMOUNT');
const ADD_DESCRIPTION = caName('ADD_DESCRIPTION');
const SET_CART_VALUE = caName('SET_CART_VALUE');
const CLEAR_CART = caName('CLEAR_CART');

// --- A C T I O N   C R E A T O R S --- //
export const caAddToCart = payload => ({ payload, type: ADD_TO_CART });
export const caDelFromCart = payload => ({ payload, type: DEL_FROM_CART });
export const caChangeAmount = payload => ({ payload, type: CHANGE_AMOUNT });
export const caAddDescription = payload => ({ payload, type: ADD_DESCRIPTION });
export const caSetCartValue = payload => ({ payload, type: SET_CART_VALUE });
export const caClearCart = payload => ({ payload, type: CLEAR_CART });

// --- R E D U C E R --- //
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
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
          data: statePart.products.data.filter(el => el.cartID !== action.payload.cartID),
        },
      };
    }
    case CHANGE_AMOUNT: {
      return {
        ...statePart,
        products: {
          ...statePart.products,
          data: statePart.products.data.map(el => el.cartID === action.payload.cartID ? {...el, amount: action.payload.amount} : el),
        },
      };
    }
    case ADD_DESCRIPTION: {
      return {
        ...statePart,
        products: {
          ...statePart.products,
          data: statePart.products.data.map(el => el.cartID === action.payload.cartID ? {...el, description: action.payload.description} : el),
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