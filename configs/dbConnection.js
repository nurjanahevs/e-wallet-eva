const mongoose = require("mongoose");

const connectDB = () => {
  mongoose.connect(
    "mongodb+srv://evasiti:evasiti@dbeva.3gs73.mongodb.net/e-wallet?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("MongoDB Connected");
      }
    }
  );
};

module.exports = connectDB;
