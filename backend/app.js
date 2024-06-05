require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 4000;

const productRouter = require("./routes/products");
const orderRouter = require("./routes/orders");

app.use(express.json());
app.use(cors());

app.use("/products", productRouter);
app.use("/orders", orderRouter);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
