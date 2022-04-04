const storage = (cartItems) => {
  window.localStorage.setItem("cart", JSON.stringify(cartItems.length > 0 ? cartItems : []));
};

export const sumItems = (cartItems) => {
  storage(cartItems);
  let itemCount = cartItems.reduce((total, product) => total + product.quantity, 0);
  let total = cartItems
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);

  return {itemCount, total};
};

export const CartReducer = (state, action) => {
  let cartItems = [...state.cartItems];
  let product;

  switch (action.type) {
    case "ADD":
      product = cartItems.find((item) => item.id === action.payload.id);
      if (!product) {
        state.cartItems.push({...action.payload, quantity: 1});
      }

      return {
        ...state,
        ...sumItems([...state.cartItems, action.payload]),
        cartItems: [...state.cartItems],
      };

    case "REMOVE":
      cartItems.splice(cartItems.indexOf(product), 1);

      return {
        ...sumItems(cartItems),
        cartItems,
      };
    case "INCREMENT":
      cartItems = [...state.cartItems];
      product = cartItems.find((item) => item.id === action.payload.id);

      product.quantity++;

      return {
        ...sumItems(cartItems),
        cartItems,
      };
    case "DECREMENT":
      cartItems = [...state.cartItems];
      product = cartItems.find((item) => item.id === action.payload.id);
      product.quantity--;

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
