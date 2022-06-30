const express = require("express");
const router = express.Router();
const {
  getOrders,
  setOrder,
  updateOrder,
} = require("../resource/order.controller");

router.route("/").get(getOrders).post(setOrder);

router.put("/:id", updateOrder);

module.exports = router;
