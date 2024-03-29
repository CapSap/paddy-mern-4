const asyncHandler = require("express-async-handler");
const Order = require("../models/orderModel");

const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find();

  res.status(200).json(orders);
});
const setOrder = asyncHandler(async (req, res) => {
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

  // pull out the request from the order
  const requestObject = order.orderedItems
    .find((request) => {
      return request.id === req.params.reqid;
    })
    .toObject();

  // find the index where to re-insert
  const index = order.orderedItems.findIndex((request) => {
    return request.id === req.params.reqid;
  });

  // write changes to a new updated object
  const updatedObj = { ...requestObject, ...req.body };

  // save changes
  order.orderedItems[index] = updatedObj;
  order.orderedItems[index].requestHistory.push({
    date: new Date(),
    author: req.body.author,
    action: JSON.stringify(req.body),
  });
  await order.save();
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
      "orderedItems._id": req.body.oldRequest._id,
    },
    {
      $set: { ...updateObjectWithPositionalOperatorInKeyName },
    },
    {
      new: true,
    }
  );

  // update history on old request
  const index = updatedOrder.orderedItems.findIndex((request) => {
    return request.id === req.body.oldRequest._id;
  });
  updatedOrder.orderedItems[index].requestHistory.push({
    date: new Date(),
    author: req.body.author,
    action: JSON.stringify(req.body.oldRequest),
  });

  // add the new request for new store.
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
