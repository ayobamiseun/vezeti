import { useContext } from "react";
import "./CartItem.css";
import CartContext from "../context/cart/CartContext";

const CartItem = ({ item }: any) => {
  const { removeItem }: any = useContext(CartContext);

  return (
    <>
      <li className="CartItem">
      
        
        <div style={{color:"#000"}}>
        {item.name} ${item.price}
        </div>
        <button
          className="CartClick text-red-700" 
          onClick={() => removeItem(item.id)}
        >
          Remove
        </button>
      </li>
    </>
  );
};

export default CartItem;
