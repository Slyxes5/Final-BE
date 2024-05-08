const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3000;
const path = require("path");
const dotenv = require("dotenv")

app.use(express.static(path.join(__dirname, "frntEnd")));
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const customerController = require("./customer/customer.controller");

app.use("/customer", customerController);

app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
