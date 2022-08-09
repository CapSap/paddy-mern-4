const express = require("express");
const router = express.Router();
const {
  getOrders,
  setOrder,
  updateOrder,
  updateOrderedItems,
} = require("../resource/order.controller");

router.route("/").get(getOrders).post(setOrder);

router.put("/:id", updateOrder);

router.patch("/:reqid", updateOrderedItems);

module.exports = router;
