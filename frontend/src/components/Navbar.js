import React, {useContext} from "react";
import "../styles/navbar.css";
import { CartContext } from "../context/CartContext";

function Navbar({ setShowCart }) {
  const { totalItems } = useContext(CartContext);

  return (
    <div className="navbar">
      <h1 className="logo">
        FoodExpress
      </h1>

      <button
        className="cart-btn"
        onClick={() =>
          setShowCart(true)
        }
      >
        View Cart ({totalItems})
      </button>
    </div>
  );
}

export default Navbar;