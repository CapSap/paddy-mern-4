const asyncHandler = require("express-async-handler");
const Order = require("../models/orderModel");

const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find();

  res.status(200).json(orders);
});
const setOrder = asyncHandler(async (req, res) => {
  console.log(req.body);

  if (!req.body.orderNumber) {
    res.status(400);
    throw new Error("please add a text field");
  }

  const newOrder = await Order.create({
    orderNumber: req.body.orderNumber,
    orderStatus: req.body.orderStatus,
    customerName: req.body.customerName,
    pickupLocation: req.body.pickupLocation,
    notes: req.body.notes,
    orderedItems: req.body.orderedItems,
    fourHour: req.body.fourHour,
  });

  res.status(200).json(newOrder);
});

const updateOrder = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (!order) {
    res.status(400);
    throw new Error("Order not found");
  }
  const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, {
    returnDocument: "after",
  });
  res.status(200).json(updatedOrder);
});

const updateOrderedItems = asyncHandler(async (req, res) => {
  const order = await Order.findOne({ "orderedItems._id": req.params.reqid });
  if (!order) {
    res.status(400);
    throw new Error("Order not found");
  }

  // if there is no issue do normal update

  //if there is an issue then patch the order with message

  const updatedOrder = await Order.findOneAndUpdate(
    {
      "orderedItems._id": req.body.requestID,
    },
    {
      $set: {
        "orderedItems.$.ibt": req.body.ibt,
        "orderedItems.$.tracking": req.body.tracking,
        "orderedItems.$.message": req.body.message,
        status: req.body.status,
      },
    },
    {
      new: true,
    }
  );

  res.status(200).json(updatedOrder);
});

module.exports = {
  getOrders,
  setOrder,
  updateOrder,
  updateOrderedItems,
};
