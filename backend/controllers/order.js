const products = require("../data/products");

const placeOrder = (req, res) => {
  const { userDetails, cartItems } = req.body;

  if (!userDetails.firstName || !userDetails.lastName || !userDetails.address) {
    return res.status(400).json({ message: "User Details not provided" });
  }

  const orderDetails = [];

  for (const item of cartItems) {
    const { id, quantity } = item;

    const product = products.products.find((prod) => prod.id === id);
    if (!product) {
      return res
        .status(404)
        .json({ message: `Product with ID ${id} not found` });
    }

    const order = {
      id,
      quantity,
      total: product.price * quantity,
    };

    orderDetails.push(order);
  }

  console.log("Order Placed Successfully", orderDetails);

  res.status(201).json({ message: "Order placed successfully", orderDetails });
};

module.exports = { placeOrder };
