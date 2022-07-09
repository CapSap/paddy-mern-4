const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    orderNumber: {
      type: String,
      required: true,
    },
    customerName: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "Request created",
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
        description: { type: String, required: true },
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
