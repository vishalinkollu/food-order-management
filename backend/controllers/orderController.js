const Order = require("../models/Order");

const placeOrder = async (req, res, io) => {
  try {
    const body =
      req.body || {};

    const customerName =
      body.customerName || "";

    const address =
      body.address || "";

    const phone =
      body.phone || "";

    const items =
      body.items || [];

    const totalAmount =
      body.totalAmount || 0;

    if ( !customerName.trim() || !address.trim() || !phone.trim() ) {
      return res.status(400).json({
        message:
          "All fields are required",
      });
    }

    if ( !/^[0-9]{10}$/.test(phone) ) {
      return res.status(400).json({
        message:
          "Invalid phone number",
      });
    }

    if ( !Array.isArray(items) || items.length === 0 ) {
      return res.status(400).json({
        message:
          "Cart cannot be empty",
      });
    }

    const order = await Order.create({
      customerName,
      address,
      phone,
      items,
      totalAmount,
      status:
        "Order Received",
    });

    res.status(201).json(order);

    simulateOrderUpdates(order, io);
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message:
        "Server Error",
    });
  }
};

const getOrder = async ( req, res ) => {
  try {
    const order =
      await Order.findById(
        req.params.id
      );

    if (!order) {
      return res.status(404).json({
        message:
          "Order not found",
      });
    }

    res.json(order);
  } catch (error) {
    return res.status(500).json({
      message:
        "Server Error",
    });
  }
};

const simulateOrderUpdates = ( order, io ) => {
  if (!io) return;
  const statuses = [
    "Preparing",
    "Out for Delivery",
    "Delivered",
  ];

  statuses.forEach( (status, index) => {
      setTimeout(async () => {
        order.status = status;

        await order.save();

        io.emit(
          "orderUpdated",
          order
        );
      }, (index + 1) * 2000);
    }
  );
};

module.exports = {
  placeOrder,
  getOrder,
};