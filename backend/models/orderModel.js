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
        items: { type: String, required: true },
        sendingStore: { type: String, required: true },
        ibt: { type: Number, default: "" },
        tracking: { type: String, default: "" },
        status: { type: String, default: "" },
      },
    ],
    fourHour: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("order", OrderSchema);
