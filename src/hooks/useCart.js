import {useContext} from "react";

import {CartContext} from "../context/CartContext";

export const useCart = () => {
  const {increment, decrement, remove, add, clearCart, handleCheckout} = useContext(CartContext);

  return {increment, decrement, remove, add, clearCart, handleCheckout};
};
