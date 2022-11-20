const express = require("express");
const router = express.Router();
const {
  getOrders,
  setOrder,
  updateOrder,
  updateOrderedItems,
  createNewItemRequest,
  deleteOrder,
} = require("../resource/order.controller");

router.route("/").get(getOrders).post(setOrder);

router.patch("/createNewRequest/:orderid", createNewItemRequest);

router.put("/:id", updateOrder);

router.delete("/:id", deleteOrder);

router.patch("/:reqid", updateOrderedItems);

module.exports = router;
