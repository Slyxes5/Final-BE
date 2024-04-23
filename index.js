const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3000;
const path = require("path");
const fs = require("fs");
const multer = require("multer");
const upload = multer({ dest: "public" });
const cors = require("cors");

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

app.get("/customer", async (req, res) => {
  try {
    const allCustomers = await prisma.customer.findMany(); // Corrected the model name here

    res.status(200).json({
      status: "Data semua customer berhasil ditemukan", // Improved message consistency
      data: allCustomers,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});


app.delete("/customer/:id", async (req, res) => {
  const idCustomer = req.params.id;
  try {
   const customerDeleted = await prisma.customer.delete({
      where: {
        id: parseInt(idCustomer)
      },
    });
    res.status(200).json({
      status: "success",
      message: "data has successfully deleted",
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.put("/customer/:id", async (req, res) => {
  const customerId = req.params.id;
  const { nama, alamat, no_hp } = req.body;

  try {
    const updatedCustomer = await prisma.customer.update({
      where: {
        id: parseInt(customerId),
      },
      data: {
        nama: nama,
        alamat: alamat,
        no_hp: no_hp,
      },
    });

    res.status(200).json({
      status: "success",
      message: "Data Customer berhasil diperbarui",
      data: updatedCustomer,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});



app.post("/customer", async (req, res) => {
  const { nama, alamat, no_hp } = req.body;
  try {
    await prisma.customer.create({
      data: {
        nama: nama,
        alamat: alamat,
        no_hp: no_hp
      },
    });
    res.status(200).json({
      status: "success",
      message: "data berhasil dimasukan",
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});


app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
