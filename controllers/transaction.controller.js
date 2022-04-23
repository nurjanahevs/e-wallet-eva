const Transaction = require("../models/transaction.model");
const Customer = require("../models/customer.model");

class transactionController {
  static async addTransfer(req, res, next) {
    const { id } = req.params;
    const { transfer, destination } = req.body;
    try {
      const result = await Transaction.findByIdAndUpdate(id, { transfer, destination }, { new: true });
      if (result) {
        const totalBalance = await Customer.findByIdAndUpdate({balance}, {new: true});
        result.totalBalance.balance = result.Customer.balance - result.transfer;
        result.save();
      }
      res.status(200).json({ message: "transfer success!", data: result });
    } catch (err) {
      next(err);
    }
  }

  static async addTopUp(req, res, next) {
    const { id } = req.params;
    const { topUp } = req.body;
    try {
      const result = await Transaction.findByIdAndUpdate(id, { topUp }, { new: true });
      if (result) {
        result.Customer.balance = result.topUp + result.Customer.balance;
        result.save();
      }
      res.status(200).json({ message: "transfer success!", data: result });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = transactionController;
