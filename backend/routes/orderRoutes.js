const express = require("express");
const router = express.Router();
const {
  getOrders,
  setOrder,
  updateOrder,
  updateOrderedItems,
  createNewItemRequest,
} = require("../resource/order.controller");

router.route("/").get(getOrders).post(setOrder);

router.patch("/createNewRequest/:reqid", createNewItemRequest);

router.put("/:id", updateOrder);

router.patch("/:reqid", updateOrderedItems);

module.exports = router;
