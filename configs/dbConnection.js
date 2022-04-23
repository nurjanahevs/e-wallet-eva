const mongoose = require("mongoose");

const connectDB = () => {
  mongoose.connect(
    "mongodb+srv://evasitinurjanah:evasitinurjanah@dbeva.3gs73.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
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
