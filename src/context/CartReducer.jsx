const storage = (cartItems) =>
  window.localStorage.setItem("cart", JSON.stringify(cartItems.length > 0 ? cartItems : []));

export const sumItems = (cartItems) => {
  storage(cartItems);

  return {
    cartItems,
    total: 2,
    totalItems: 3,
  };
};

export const CartReducer = (state, action) => {
  let cartItems = [...state.cartItems];
  let product = cartItems.find((item) => item.id === action.payload.id);

  switch (action.type) {
    case "ADD":
      if (cartItems.filter((item) => item.id === action.payload.id).length > 0) {
        return {
          ...sumItems(
            state.cartItems.map((item) =>
              item.id === action.payload.id ? {...item, quantity: item.quantity + 1} : item,
            ),
          ),
        };
      }

      return {
        ...sumItems([...state.cartItems, action.payload]),
      };
    case "REMOVE":
      cartItems.splice(cartItems.indexOf(product), 1);

      return {
        ...sumItems(cartItems),
        cartItems,
      };
    case "INCREMENT":
      cartItems = [...state.cartItems];
      console.log(cartItems);
      product = cartItems.find((item) => item.id === action.payload.id);
      console.log(product);

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
