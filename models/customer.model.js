const mongoose = require("mongoose");
const { Schema } = mongoose;

const customerSchema = new Schema(
  {
    email: { type: String, match: /^\S+@\S+\.\S+$/, unique: true, required: true },
    name: { type: String, required: true },
    identityNumb: { type: String, unique: true, required: true },
    password: { type: String, required: true, minlength: 6, maxlength: 120 },
    balance: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

const Customer = mongoose.model("Customer", customerSchema);
module.exports = Customer;
