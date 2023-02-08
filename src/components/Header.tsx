import React, { useContext } from 'react';
import './Header.css'
import {BsCart} from "react-icons/bs"
import CartContext from 'context/cart/CartContext';

const Header: React.FC = () => {
  const {cartItems, showHideCart}:any = useContext(CartContext)
  return (
   <>
   <header className="page-header">
   <div className="header-content">
     <div className="logo">
       <img src={process.env.PUBLIC_URL + "/cart.jpeg"} alt="logo" />
     </div>
     <input type="checkbox" id="hamburger-checkbox" />
     <label  className="hamburger">
       <div className="line"></div>
       <div className="line"></div>
       <div className="line"></div>
     </label>
     <nav>
       <ul>
         <li><a href="#">Home</a></li>
         <li><a href="#">About</a></li>
         <li><a href="#">Contact</a></li>

         <li onClick={showHideCart}><a ><BsCart/></a></li>
         {cartItems.length > 0 && <div><p className='text-red-600'> {cartItems.length} </p></div>}
       </ul>
     </nav>
     <div className="page-shader"></div>
   </div>
 </header>
   </>
  )
}

export default Header;
