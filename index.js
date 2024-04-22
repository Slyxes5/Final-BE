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


app.post("/customer", async (req, res) => {
    // Ensure you are destructuring all the needed fields from the body
    const { nama, alamat, no_hp } = req.body;

    // Basic validation to ensure that all required fields are provided
    if (!nama || !alamat || !no_hp) {
        return res.status(400).json({
            status: "error",
            message: "Missing required fields (nama, alamat, no_hp)"
        });
    }

    try {
        // Correctly map the destructured variables to your database fields
        const newCustomer = await prisma.customer.create({
            data: {
                nama: nama,     // Assuming the field in your database is 'name'
                alamat: alamat, // Assuming the field in your database is 'address'
                no_hp: no_hp    // Assuming the field in your database is 'no_hp'
            },
        });

        // Use 201 status code for resource creation
        res.status(201).json({
            status: "success",
            message: "Data successfully inserted",
            data: newCustomer
        });
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});


app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
