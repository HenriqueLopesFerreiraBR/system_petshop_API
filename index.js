require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./src/routes/index");
const { sequelize } = require("./src/config/database");

const app = express();
const PORT = process.env.PORT || 3099;

app.use(cors());
app.use(bodyParser.json());
app.use("/api", routes);

sequelize.sync().then(() => {
  console.log('Database connected!');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch((err) => {
  console.error('Database connection failed:', err);
});

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });
