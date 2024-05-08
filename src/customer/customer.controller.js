const express = require("express");
const prisma = require("../db");
const { getAllCustomer, getCustomerById, createCustomer, deleteCustomerById, updateCustomerById } = require("./customer.service");
const { createCipheriv } = require("crypto");

const {
  getAllCustomer,
  getCustomerById,
  createCustomer,
  deleteCustomerById,
  updateCustomerById,
} = require("./customer.service");

const router = express.Router;

router.get("/", async (req, res) => {
  try {
    const allCustomers = await getAllCustomer(); // Corrected the model name here
    console.log(allCustomers);
    res.status(200).json({
      status: "Data semua customer berhasil ditemukan", // Improved message consistency
      data: allCustomers,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});


router.get("/customer/:id", async (req, res) => {
  const idCustomer = parseInt(req.params.id);
  try {
    const allCustomers = await getCustomerById(parseInt(idCustomer));
    res.status(200).json({
      status: "success",
      data: allCustomers,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

router.delete("/:id", async (req, res) => {
  const idCustomer = req.params.id;
  try {
   await deleteCustomerById(parseInt(idCustomer))
    res.status(200).json({
      status: "success",
      message: "data has successfully deleted",
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

router.put("/:id", async (req, res) => {
  const customerId = req.params.id;
  const customerData = req.body;

  try {
    const updatedCustomer = await updateCustomerById(parseInt(customerId), customerData);
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

// router.post("/", async (req, res) => {
//   const { nama, alamat, no_hp } = req.body;
//   try {
//     await prisma.customer.create({
//       data: {
//         nama: nama,
//         alamat: alamat,
//         no_hp: parseInt(no_hp), // Convert no_hp to integer
//       },
//     });
//     res.status(200).json({
//       status: "success",
//       message: "data berhasil dimasukan",
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Internal Server Error");
//   }
// });

router.post("/", async (req, res) => {
  const newCustomerData = req.body;
  try {
    const customer = await createCustomer(newCustomerData);
    res.status(200).json({
      status: "success",
      message: "data berhasil dimasukkan",
      data: customer,
    })
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");    
  }
})

module.exports = router;
