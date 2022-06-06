const fs = require("fs");
const express = require("express");
const app = express();
const data = fs.readFileSync("./products.json", "utf-8");
const products = JSON.parse(data);

app.get("/", (req, res) => {
  res.send(products);
});

app.get("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const productId = products.findIndex((product) => product.id === id);

  if (productId === -1) return res.status(404).send();

  res.send(products[productId]);
});

app.listen(3000, () => {
  console.log("Server is listening port 3000 .. ");
});
