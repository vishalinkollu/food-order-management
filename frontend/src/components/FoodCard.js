import React, {useContext} from "react";
import "../styles/foodCard.css";
import { CartContext } from "../context/CartContext";

function FoodCard({ item }) {
  const {
    addToCart,
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useContext(CartContext);

  const cartItem = cart.find(
    (cartItem) =>
      cartItem.id === item.id
  );

  const handleDecrease = () => {
    if (cartItem.quantity === 1) {
      removeFromCart(item.id);
    } else {
      decreaseQuantity(item.id);
    }
  };

  return (
    <div className="food-card">
      <img
        src={item.image}
        alt={item.name}
        className="food-image"
      />

      <div className="food-content">
        <h2 className="food-title">
          {item.name}
        </h2>

        <p className="food-description">
          {item.description}
        </p>

        <div className="food-footer">
          <h3 className="food-price">
            ₹{item.price}
          </h3>

          {!cartItem ? (
            <button
              className="add-btn"
              onClick={() =>
                addToCart(item)
              }
            >
              Add
            </button>
          ) : (
            <div className="card-qty-controls">
              <button
                className="qty-btn"
                onClick={
                  handleDecrease
                }
              >
                -
              </button>

              <span className="qty-count">
                {cartItem.quantity}
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
          )}
        </div>
      </div>
    </div>
  );
}

export default FoodCard;