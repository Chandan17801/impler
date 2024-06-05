const express = require("express");
const router = express.Router();

const { placeOrder } = require("../controllers/order");

router.post("/", placeOrder);

module.exports = router;
