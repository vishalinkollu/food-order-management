import React from "react";

function OrderStatusCard({ status }) {
  const getStatusColor = () => {
    switch (status) {
      case "Order Received":
        return "#3498db";

      case "Preparing":
        return "#f39c12";

      case "Out for Delivery":
        return "#9b59b6";

      case "Delivered":
        return "#2ecc71";

      default:
        return "#555";
    }
  };

  const getStatusMessage = () => {
    switch (status) {
      case "Order Received":
        return "Your order has been received successfully.";

      case "Preparing":
        return "Restaurant is preparing your delicious food.";

      case "Out for Delivery":
        return "Your food is on the way.";

      case "Delivered":
        return "Order delivered successfully.";

      default:
        return "";
    }
  };

  return (
    <div
      style={{
        background: "white",
        padding: "40px",
        borderRadius: "20px",
        boxShadow:
          "0 5px 20px rgba(0,0,0,0.1)",
        width: "500px",
        margin: "50px auto",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "32px",
          marginBottom: "20px",
        }}
      >
        Order Status
      </h1>

      <div
        style={{
          fontSize: "38px",
          fontWeight: "bold",
          color: getStatusColor(),
          marginBottom: "20px",
        }}
      >
        {status}
      </div>

      <p
        style={{
          color: "#666",
          fontSize: "18px",
          lineHeight: "28px",
        }}
      >
        {getStatusMessage()}
      </p>
    </div>
  );
}

export default OrderStatusCard;