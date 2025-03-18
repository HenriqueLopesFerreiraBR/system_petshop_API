const express = require("express");
const userRoutes = require("./userRoutes");
const productRoutes = require("./productRoutes");
const ClientRoutes = require("./ClientRoutes");
const SupplierRoutes = require("./SupplierRoutes");
const PurchaseRoutes = require("./PurchaseRoutes");
const OrderRoutes = require("./OrderRoutes");
const OrderItemRoutes = require("./OrderItemRoutes");
const EnterProductRoutes = require("./enterProductRoutes");
const StockRoutes = require("./StockRoutes");
const SaleRoutes = require("./SaleRoutes");
// Outras rotas aqui...

const app = express();
app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/clients", ClientRoutes);
app.use("/supplier", SupplierRoutes);
app.use("/purchase", PurchaseRoutes);
app.use("/order", OrderRoutes);
app.use("/enter-product", EnterProductRoutes);
app.use("/stock", StockRoutes);
app.use("/sales", SaleRoutes);
app.use("/order-item", OrderItemRoutes);

module.exports = app;
