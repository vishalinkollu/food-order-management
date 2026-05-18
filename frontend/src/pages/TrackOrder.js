import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import API from "../api/api";
import socket from "../socket/socket";
import Loader from "../components/Loader";
import OrderStatusCard from "../components/OrderStatusCard";
import "../styles/trackOrder.css";
import toast, { Toaster } from "react-hot-toast";

function TrackOrder() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    fetchOrder();

    socket.on(
      "orderUpdated",
      (updatedOrder) => {
        if (
          updatedOrder._id === id
        ) {
          setOrder(updatedOrder);

          if (
            updatedOrder.status ===
            "Delivered"
          ) {
            toast.success(
              "Order Delivered Successfully"
            );

            setTimeout(() => {
              navigate("/");
            }, 2000);
          }
        }
      }
    );

    return () => {
      socket.off("orderUpdated");
    };
  }, [id, navigate]);

  const fetchOrder = async () => {
    try {
      const { data } = await API.get(
        `/api/orders/${id}`
      );

      setOrder(data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!order) return <Loader />;

  return (
    <>
      <Toaster />
      <div className="track-container">
        <OrderStatusCard
          status={order.status}
        />
      </div>
    </>
  );
}

export default TrackOrder;