import React, { useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM } from "../Types";

interface CartStateProps {
  children: React.ReactNode;
 
}

interface CartState {
  showCart: boolean;
  cartItems: Array<any>;
 

}

const CartState: React.FC<CartStateProps> = ({ children }) => {
  const initalState: CartState = {
    showCart: false,
    cartItems: [],
  };

  const [state, dispatch] = useReducer(CartReducer, initalState);

  const addToCart = (item: any) => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };

  const showHideCart = () => {
    dispatch({ type: SHOW_HIDE_CART });
  };

  const removeItem = (id: any) => {
    dispatch({ type: REMOVE_ITEM, payload: id })
  };


  return (
    
    <div>
        <CartContext.Provider
      value={{
        showCart: state.showCart,
        cartItems: state.cartItems,
        addToCart,
        showHideCart,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
    </div>
    
   
  )
 };

export default CartState; 
