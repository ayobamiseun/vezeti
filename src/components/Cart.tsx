import React, { useContext } from "react";
import "./Cart.css";
import CartContext from "../context/cart/CartContext";
import CartItem from "./CartItem";

interface CartProps {
    showCart: any;
    cartItems: [] ;
    showHideCart : any;

}

const Cart: React.FC= () => {
      
  const { showCart, cartItems, showHideCart }:any = useContext(CartContext);

  return (
    <>
      {showCart && (
        <div className='cart__wrapper'>
          <div style={{ textAlign: "right" }}>
            <i
              style={{ cursor: "pointer" }}
              className='fa fa-times-circle'
              aria-hidden='true'
              onClick={showHideCart}
            ></i>
          </div>
          <div className='cart__innerWrapper'>
            {cartItems.length === 0 ? (
              <h4>Cart is Empty</h4>
            ) : (
              <ul>
                 // @ts-ignore
                {cartItems.map((item: any) => (
                  <CartItem key={item._id} item={item} />
                ))}
              </ul>
            )}
          </div>
          <div className='Cart__cartTotal'>
            <div>Cart Total</div>
            <div></div>
            <div style={{ marginLeft: 5 }}>
         
              {cartItems.reduce(
                   // @ts-ignore
                (amount, item) => item.price +  amount, 0)
              }
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;