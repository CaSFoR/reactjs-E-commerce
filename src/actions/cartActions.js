export const addToCart = (product) => {
  return {
    type: "ADD_TO_CART",
    payload: product,
  };
};

export const removeItem = (id) => {
  return {
    type: "REMOVE_ITEM",
    payload: id,
  };
};

export const updateQuantity = (id, change) => {
  return {
    type: "UPDATE_QUANTITY",
    payload: { id, change },
  };
};

export const clearCart = () => {
  return {
    type: "CLEAR_CART",
  };
};
