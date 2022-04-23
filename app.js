const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const connectDB = require("./configs/dbConnection");
const router = require("./routes/routes");
const errorHandler = require("./middlewares/errorHandler");

require("dotenv").config();
connectDB();

const app = express();
const port = process.env.PORT || 8001;

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/home", (req, res) => {
  res.send("Welcome to e-wallet");
});

app.use('/api', router);
app.use(errorHandler)

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
})