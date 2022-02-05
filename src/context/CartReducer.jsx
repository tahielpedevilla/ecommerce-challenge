const storage = () =>
  window.localStorage.setItem("cartItems", JSON.stringify(state.cartItems) || "[]");

export const sumItems = (cartItems) => {
  storage(cartItems);

  return {
    cartItems,
    total: cartItems.reduce((acc, item) => acc + item.price, 0),
    totalItems: cartItems.reduce((acc, item) => acc + item.quantity, 0),
  };
};

export const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      if (state.cartItems.find((item) => item.id === action.payload.id)) {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        });
      }

      return {
        ...state,
        ...sumItems(...state.cartItems),
        cartItems: [...state.cartItems],
      };
    case "REMOVE":
      cartItems = [...state.cartItems];
      product = cartItems.find((item) => item.id === action.payload.id);
      cartItems.splice(cartItems.indexOf(product), 1);

      return {
        ...sumItems(cartItems),
        cartItems,
      };
    case "INCREMENT":
      let cartItems = [...state.cartItems];
      let product = cartItems.find((item) => item.id === action.payload.id);

      product.quantity += 1;

      return {
        ...sumItems(cartItems),
        cartItems,
      };
    case "DECREMENT":
      cartItems = [...state.cartItems];
      product = cartItems.find((item) => item.id === action.payload.id);
      product.quantity -= 1;

      return {
        ...sumItems(cartItems),
        cartItems,
      };
    case "CLEAR_CART":
      return {
        ...sumItems([]),
        cartItems: [],
      };
    case "HANDLE_CHECKOUT":
      return {
        ...sumItems([]),
        cartItems: [],
        checkout: true,
      };
    default:
      return state;
  }
};
