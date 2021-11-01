import axios from 'axios';

// --- S E L E C T O R S --- //
export const getAll = ({order}) => order.data;

// --- A C T I O N   N A M E   C R E A T O R --- //
const caName = name => `app/order/${name}`;

// --- A C T I O N   T Y P E S --- //
const ADD_ORDER = caName('ADD_ORDER');

// --- A C T I O N   C R E A T O R S --- //
export const caAddOrder = payload => ({ payload, type: ADD_ORDER });

// --- T H U N K   C R E A T O R S --- //
export const caAddOrderToDB = (newOrder) => {
  return (dispatch, getState) => {
    axios
      // .post(`http://tshop.webster2020.usermd.net/api/orders/add`, newOrder)
      .post(`http://localhost:8000/api/orders/add`, newOrder)
      .then(res => {
        dispatch(caAddOrder(newOrder));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

// --- R E D U C E R --- //
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case ADD_ORDER: {
      return {
        ...statePart,
        data: [...statePart.data, action.payload],
      };
    }
    default:
      return statePart;
  }
};