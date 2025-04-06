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
const AccountsPay = require("./AccountsPayRoutes");
const AccountsReceive = require("./accountsReceiveRoutes");
const CashFlowRoutes = require("./cashFlowRoutes");
const FinancialCategoryRoutes = require("./FinancialCategoryRoutes");
const TransactionRoutes = require("./TransactionRoutes");
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
app.use("/accounts-pay", AccountsPay);
app.use("/accounts-receive", AccountsReceive);
app.use("/cash-flow", CashFlowRoutes);
app.use("/financial-category", FinancialCategoryRoutes);
app.use("/transaction", TransactionRoutes);

module.exports = app;
