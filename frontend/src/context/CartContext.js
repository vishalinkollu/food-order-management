import {createContext,useState} from "react";

export const CartContext = createContext();

export const CartProvider = ({ children}) => {
  const [cart, setCart] = useState([]);

  // ADD TO CART
  const addToCart = (item) => {
    const existingItem = cart.find(
      (cartItem) =>
        cartItem.id === item.id
    );

    if (existingItem) {
      const updatedCart = cart.map(
        (cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity:
                  cartItem.quantity + 1,
              }
            : cartItem
      );

      setCart(updatedCart);
    } else {
      setCart([
        ...cart,
        {
          ...item,
          quantity: 1,
        },
      ]);
    }
  };

  // REMOVE FROM CART
  const removeFromCart = (id) => {
    const updatedCart = cart.filter(
      (item) => item.id !== id
    );

    setCart(updatedCart);
  };

  // INCREASE QUANTITY
  const increaseQuantity = (id) => {
    const updatedCart = cart.map(
      (item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                item.quantity + 1,
            }
          : item
    );

    setCart(updatedCart);
  };

  // DECREASE QUANTITY
  const decreaseQuantity = (id) => {
    const updatedCart = cart.map(
      (item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                item.quantity > 1
                  ? item.quantity - 1
                  : 1,
            }
          : item
    );

    setCart(updatedCart);
  };

  // CLEAR CART
  const clearCart = () => {
    setCart([]);
  };

  // TOTAL PRICE
  const totalPrice = cart.reduce(
    (acc, item) =>
      acc +
      item.price * item.quantity,
    0
  );

  // TOTAL ITEMS
  const totalItems = cart.reduce(
    (acc, item) =>
      acc + item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        totalPrice,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};