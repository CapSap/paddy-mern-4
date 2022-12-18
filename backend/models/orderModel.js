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
        ibt: { type: Number, default: null },
        tracking: { type: String, default: null },
        message: { type: String, default: null },
        requestStatus: { type: String, default: "created" },
        requestHistory: [
          {
            date: { type: Date, required: true },
            action: { type: String, required: true },
            author: { type: String, required: true },
          },
        ],
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
