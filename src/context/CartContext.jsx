import {createContext, useReducer} from "react";

import {CartReducer, sumItems} from "./CartReducer";

export const CartContext = createContext();

const storage = window.localStorage.getItem("cartItems") || "[]";

const initialState = {cartItems: storage, ...sumItems(storage), checkout: false};

const CartProvider = ({children}) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const add = (payload) => dispatch({type: "ADD", payload});

  const remove = (payload) => dispatch({type: "REMOVE", payload});

  const increment = (payload) => dispatch({type: "INCREMENT", payload});

  const decrement = (payload) => dispatch({type: "DECREMENT", payload});

  const clearCart = () => dispatch({type: "CLEAR_CART"});

  const handleCheckout = () => dispatch({type: "HANDLE_CHECKOUT"});

  const contextValues = {
    add,
    remove,
    increment,
    decrement,
    clearCart,
    handleCheckout,
    ...state,
  };

  return <CartContext.Provider value={contextValues}>{children}</CartContext.Provider>;
};

export default CartProvider;
