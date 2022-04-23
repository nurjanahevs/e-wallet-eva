const Customer = require("../models/customer.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

class customerController {
  static async register(req, res, next) {
    const { email, name, identityNumb, password } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hashedPwd = bcrypt.hashSync(password, salt);
    try {
      const result = await Customer.create({
        email: email,
        name: name,
        identityNumb: identityNumb,
        password: hashedPwd,
      });
      res.status(201).json({ message: "Customer Created!", data: result});
    } catch (err) {
      next(err);
    }
  }

  static async login(req, res, next) {
    const { email, password } = req.body;
    try {
      const result = await Customer.findOne({ email });
      if (!result) {
        throw { name: "UNAUTHORIZED" };
      }
      const passwordIsValid = bcrypt.compareSync(password, result.password);
      if (!passwordIsValid) {
        throw { name: UNAUTHORIZED };
      }
      const token = jwt.sign({ id: result.id, name: result.name, email: result.email, identityNumb: result.identityNumb }, "evasitinurjanah", {
        expiresIn: "1h",
      });
      res.status(200).json({ message: "Success Login!", data: result, AccessToken: token });
    } catch (err) {
      next(err);
    }
  }

  static async findCustomers(req, res, next) {
    try {
      const result = await Customer.find().populate("Transaction");
      res.status(200).json({ message: "Show the Customers Data", data: result});
    } catch (err) {
      next(err);
    }
  }

  static async addTopUp(req, res, next) {
    const { id } = req.params;
    const { topUp } = req.body;
    try {
      const result = await Customer.findByIdAndUpdate(id, {topUp}, {new: true});
      if (result){
        result.balance = topUp + result.balance;
        result.save()
      }
      res.status(200).json({ message: "top up success!", data: result });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = customerController;