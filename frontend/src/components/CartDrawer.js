import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/cartDrawer.css";
import { useNavigate } from "react-router-dom";

function CartDrawer({ setShowCart }) {
  const { cart, totalPrice, increaseQuantity, decreaseQuantity, removeFromCart } = useContext(CartContext);

  const navigate = useNavigate();

  return (
    <div className="cart-overlay">
      <div className="cart-drawer">
        <div className="cart-header">
          <h2 className="cart-title">
            Your Cart
          </h2>
          <button
            className="close-btn"
            onClick={() =>
              setShowCart(false)
            }
          >
            ×
          </button>
        </div>
        {cart.length === 0 && (
          <p className="empty-cart">
            Your cart is empty
          </p>
        )}

        {cart.map((item) => (
          <div
            key={item.id}
            className="cart-item"
          >
            <div>
              <h4>{item.name}</h4>
              <p>
                ₹{item.price}
              </p>

              <div className="qty-controls">
                <button
                  className="qty-btn"
                  onClick={() =>
                    decreaseQuantity(
                      item.id
                    )
                  }
                >
                  -
                </button>

                <span>
                  {item.quantity}
                </span>

                <button
                  className="qty-btn"
                  onClick={() =>
                    increaseQuantity(
                      item.id
                    )
                  }
                >
                  +
                </button>
              </div>

              <button
                className="remove-btn"
                onClick={() =>
                  removeFromCart(
                    item.id
                  )
                }
              >
                Remove
              </button>
            </div>

            <h4>
              ₹
              {item.price *
                item.quantity}
            </h4>
          </div>
        ))}

        {cart.length > 0 && (
          <div className="cart-footer">
            <h2 className="total-text">
              Total: ₹{totalPrice}
            </h2>

            <button
              className="checkout-btn"
              onClick={() => {
                setShowCart(false);

                navigate(
                  "/checkout"
                );
              }}
            >
              Proceed To Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartDrawer;