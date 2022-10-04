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

  // create a new object from the res.body, and add the required orderedItems.$. positional to key names
  const updateObjectWithPositionalOperatorInKeyName = {};
  Object.keys(req.body).map((key) => {
    updateObjectWithPositionalOperatorInKeyName[`orderedItems.$.${key}`] =
      req.body[key];
  });

  const updatedOrder = await Order.findOneAndUpdate(
    {
      "orderedItems._id": req.body.requestID,
    },
    {
      $set: { ...updateObjectWithPositionalOperatorInKeyName },
    },
    {
      new: true,
    }
  );

  res.status(200).json(updatedOrder);
});

const createNewItemRequest = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.orderid);
  if (!order) {
    res.status(400);
    throw new Error("Order not found");
  }

  // update the old request
  const updateObjectWithPositionalOperatorInKeyName = {};
  Object.keys(req.body.oldRequest).map((key) => {
    updateObjectWithPositionalOperatorInKeyName[`orderedItems.$.${key}`] =
      req.body.oldRequest[key];
  });

  const updatedOrder = await Order.findOneAndUpdate(
    {
      "orderedItems._id": req.body.oldRequestID,
    },
    {
      $set: { ...updateObjectWithPositionalOperatorInKeyName },
    },
    {
      new: true,
    }
  );
  // add a new request for new store.

  updatedOrder.orderedItems.push(req.body.newRequest);
  updatedOrder.save();

  res.status(200).json(updatedOrder);
});

module.exports = {
  getOrders,
  setOrder,
  updateOrder,
  updateOrderedItems,
  createNewItemRequest,
};
