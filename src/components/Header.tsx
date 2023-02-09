import React, { useContext } from "react";
import { BsCart } from "react-icons/bs";
import CartContext from "context/cart/CartContext";

const Header: React.FC = () => {
  const { cartItems, showHideCart }: any = useContext(CartContext);
  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-40">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto h-[70px] ">
        <div className="">
          <img
            alt=""
            src={process.env.PUBLIC_URL + "/cart.jpeg"}
            className="h-10 cursor-pointer"
          />
        </div>
        <div>
          <ul className="flex space-x-10">
            <li className="py-3 text-sm font-semibold cursor-pointer text-gray-600 border-b-4 border-b-transparent ">
              Home
            </li>
            <li className="py-3 text-sm cursor-pointer font-semibold text-gray-600 border-b-4 border-b-transparent  border-b-red-500">
              About
            </li>
            <li
              className="py-3 text-sm cursor-pointer font-semibold text-gray-600 border-b-4 border-b-transparent  border-b-red-500"
              onClick={showHideCart}
            >
              <BsCart />
              {cartItems.length > 0 && (
                <div>
                  <p className="text-red-600"> {cartItems.length} </p>
                </div>
              )}
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};
export default Header;
