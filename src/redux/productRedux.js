import axios from 'axios';

// --- S E L E C T O R S --- //
export const getAll = ({products}) => products.data;
export const getTopThree = ({products}) => products.data.filter((product, index) => index < 4);
export const getLiked = ({products}) => products.data.filter(product => product.like);
export const getFetchStatus = ({products}) => products.loading.active;

// --- A C T I O N   N A M E   C R E A T O R --- //
const caName = name => `app/product/${name}`;

// --- A C T I O N   T Y P E S --- //
const FETCH_START = caName('FETCH_START');
const FETCH_SUCCESS = caName('FETCH_SUCCESS');
const FETCH_ERROR = caName('FETCH_ERROR');
const PRODUCT_LIKE = caName('PRODUCT_LIKE');
const PRODUCT_UNLIKE = caName('PRODUCT_UNLIKE');

// --- A C T I O N   C R E A T O R S --- //
export const caFetchStarted = payload => ({ payload, type: FETCH_START });
export const caFetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const caFetchError = payload => ({ payload, type: FETCH_ERROR });
export const caProductLike = payload => ({ payload, type: PRODUCT_LIKE });
export const caProductUnlike = payload => ({ payload, type: PRODUCT_UNLIKE });

// --- T H U N K   C R E A T O R S --- //
export const caFetchProducts = (products, refetch, activeFetch) => {
  return (dispatch, getState) => {
    dispatch(caFetchStarted());
    if(!refetch) {
      if(products.length < 1 && !activeFetch) {
        console.log('first fetch');
        axios
          // .get('http://tshop.webster2020.usermd.net/api/products/all')
          .get('http://localhost:8000/api/products/all')
          .then(res => {
            dispatch(caFetchSuccess(res.data));
          })
          .catch(err => {
            dispatch(caFetchError(err.message || true));
          });
      }
    } else {
      console.log('refetch');
      axios
        // .get('http://tshop.webster2020.usermd.net/api/products/all')
        .get('http://localhost:8000/api/products/all')
        .then(res => {
          console.log(res.data);
          dispatch(caFetchSuccess(res.data));
        })
        .catch(err => {
          dispatch(caFetchError(err.message || true));
        });
    }
  };
};

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
    case PRODUCT_LIKE: {
      return {
        ...statePart,
        data: statePart.data.map(product => product.id === action.payload ? {...product, like: true} : product),
      };
    }
    case PRODUCT_UNLIKE: {
      return {
        ...statePart,
        data: statePart.data.map(product => product.id === action.payload ? {...product, like: false} : product),
      };
    }
    default:
      return statePart;
  }
};