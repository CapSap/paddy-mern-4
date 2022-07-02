const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    orderNumber: {
      type: Number,
      required: true,
    },
    customerName: {
      type: String,
      required: true,
    },
    orderStatus: {
      type: String,
    },

    pickupLocation: {
      type: String,
    },
    notes: {
      type: String,
    },
    isArchived: {
      type: Boolean,
      default: false,
    },
    orderedItems: [
      {
        sku: { type: String, required: true },
        qty: { type: Number, required: true },
        desc: { type: String, required: true },
        sendingStore: { type: String, required: true },
      },
    ],
    fourHour: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("order", OrderSchema);
