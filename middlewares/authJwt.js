const jwt = require('jsonwebtoken');
const Customer = require('../models/customer.model');

class authJwt {
  static authentication(req, res, next) {
    const { access_token } = req.headers;
    if (!access_token) {
      throw { name: "Mising_Token" };
    }
    jwt.verify(access_token, "-e-wallet", (err, decoded) => {
      if (err) {
        throw { name: "INVALID_TOKEN"};
      }
      req.userData = decoded;
      next();
    })
  }

  static async specCustomer(req, res, next) {
    const { id } = req.params;
    try {
      const result = await Customer.findById(req.Customer.id);
      console.log(result);
      if (result.id === id) {
        next();
      } else {
        throw { name: "UNAUTHORIZED_TOKEN" };
      }
    } catch (err) {
      next(err);
    }
  }
}

module.exports = authJwt;
