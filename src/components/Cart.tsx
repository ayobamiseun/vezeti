import React, { useContext } from "react";
import "./Cart.css";
import CartContext from "../context/cart/CartContext";
import CartItem from "./CartItem";
import {BsCircle} from "react-icons/bs"
interface CartProps {
  showCart: boolean;
  cartItems: CartItemData[];
  showHideCart: () => void;
  
}
interface CartItemData {
    id: string;
    price: number;
    image: string;
    name: string;
  }
  
const Cart: React.FC = () => {
  const { showCart, cartItems, showHideCart }: any = useContext(CartContext);

  return (
    <>
      {showCart && (
        <div className="main">
          <div style={{ textAlign: "right" }}>
            <a
              style={{ cursor: "pointer" }}
              
              aria-hidden="true"
              onClick={showHideCart}
            ></a>
          </div>
          <div className="cartW">
            {cartItems.length === 0 ? (
              <h4>Cart is Empty</h4>
            ) : (
              <ul>
                {cartItems.map((item: any) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </ul>
            )}
          </div>
          <div className="CartTotal">
            <div>Cart Total</div>
            <div></div>
            <div style={{ marginLeft: 5 }}>
              {cartItems.reduce(
                // @ts-ignore
                (amount, item) => item.price + amount,
                0
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
