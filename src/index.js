const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3000;
const path = require("path");
const dotenv = require("dotenv");

app.use(express.static(path.join(__dirname, "frntEnd")));
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const customerController = require("./customer/customer.controller");
const adminController = require("./admin/admin.controller");
const sewaController = require("./sewa/sewa.controller");
const mobilController = require("./mobil/mobil.controller");
const { mobil } = require("./db");

app.use("/customer", customerController);
app.use("/admin", adminController);
app.use("/sewa", sewaController);
app.use("/mobil", mobilController);

app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
