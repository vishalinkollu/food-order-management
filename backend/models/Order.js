const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    items: [
      {
        id: Number,
        name: String,
        price: Number,
        quantity: Number,
      },
    ],

    totalAmount: {
      type: Number,
      required: true,
    },

    status: {
      type: String,

      enum: [
        "Order Received",
        "Preparing",
        "Out for Delivery",
        "Delivered",
      ],

      default: "Order Received",
    },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Order",
  orderSchema
);