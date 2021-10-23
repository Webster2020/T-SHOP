// --- S E L E C T O R S --- //

export const getAll = ({products}) => {
  console.log(products.data);
  return products.data;
};

export const getTopThree = ({products}) => {
  console.log(products.data);
  return products.data.filter(product => product.id < 4);
};
