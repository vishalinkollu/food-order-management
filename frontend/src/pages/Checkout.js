import React, { useContext, useState } from "react";
import "../styles/checkout.css";
import { CartContext } from "../context/CartContext";
import API from "../api/api";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function Checkout() {
  const { cart, totalPrice, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    customerName: "",
    address: "",
    phone: "",
  });

  const [placingOrder, setPlacingOrder] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!form.customerName.trim()) {
      newErrors.customerName =
        "Name is required";
    }

    if (!form.address.trim()) {
      newErrors.address =
        "Address is required";
    }

    if (!form.phone.trim()) {
      newErrors.phone =
        "Phone number is required";
    } else if (
      !/^[0-9]{10}$/.test(
        form.phone
      )
    ) {
      newErrors.phone =
        "Phone number must be 10 digits";
    }

    if (cart.length === 0) {
      newErrors.cart =
        "Cart is empty";
    }

    setErrors(newErrors);

    return (
      Object.keys(newErrors).length ===
      0
    );
  };

  const placeOrder = async () => {
    if (!validateForm()) return;
    setPlacingOrder(true);
    try {
      const { data } = await API.post(
        "/api/orders",
        {
          ...form,
          items: cart,
          totalAmount: totalPrice,
        }
      );

      toast.success(
        "Order Placed Successfully"
      );

      setTimeout(() => {
        clearCart();
        setPlacingOrder(false);
        navigate(
          `/track/${data._id}`
        );
      }, 1000);
    } catch (error) {
      setPlacingOrder(false);
      console.log(error);

      toast.error(
        "Something went wrong"
      );
    }
  };

  return (
    <>
      <Toaster />
      <div className="checkout-container">
        <h1 className="checkout-title">
          Checkout
        </h1>

        <input
          className="checkout-input"
          placeholder="Enter Name"
          value={form.customerName}
          onChange={(e) => {
            setForm({
              ...form,
              customerName:
                e.target.value,
            });

            setErrors({
              ...errors,
              customerName: "",
            });
          }}
        />

        {errors.customerName && (
          <p className="error-text">
            {errors.customerName}
          </p>
        )}

        <input
          className="checkout-input"
          placeholder="Enter Address"
          value={form.address}
          onChange={(e) => {
            setForm({
              ...form,
              address:
                e.target.value,
            });

            setErrors({
              ...errors,
              address: "",
            });
          }}
        />

        {errors.address && (
          <p className="error-text">
            {errors.address}
          </p>
        )}

        <input
          className="checkout-input"
          placeholder="Enter Phone"
          value={form.phone}
          maxLength={10}
          onChange={(e) => {
            const value =
              e.target.value;

            if (
              /^[0-9]*$/.test(
                value
              )
            ) {
              setForm({
                ...form,
                phone: value,
              });

              setErrors({
                ...errors,
                phone: "",
              });
            }
          }}
        />

        {errors.phone && (
          <p className="error-text">
            {errors.phone}
          </p>
        )}

        {errors.cart && (
          <p className="error-text">
            {errors.cart}
          </p>
        )}

        <button
          className="place-order-btn"
          onClick={placeOrder}
        >
          {placingOrder
            ? "Placing Order..."
            : `Place Order ₹${totalPrice}`}
        </button>

        <button
          className="back-home-btn"
          onClick={() => {
            toast.error(
              "Payment Failed"
            );

            setTimeout(() => {
              navigate("/");
            }, 1000);
          }}
        >
          Back To Home
        </button>
      </div>
    </>
  );
}

export default Checkout;