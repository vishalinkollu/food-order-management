const express = require("express");

const router = express.Router();

const { placeOrder, getOrder } = require("../controllers/orderController");

module.exports = (io) => {
  router.post("/", (req, res) =>
    placeOrder(req, res, io)
  );

  router.get("/:id", getOrder);

  return router;
};