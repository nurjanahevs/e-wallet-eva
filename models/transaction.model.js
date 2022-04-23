const mongoose = require("mongoose");
const { Schema } = mongoose;

const transactionSchema = new Schema(
  {
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },
    topUp: { type: Number },
    transfer: { type: Number },
    destination: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" },
  },
  {
    timestamp: true,
  }
);

const Transaction = mongoose.model("Transaction", transactionSchema);
module.exports = Transaction;
