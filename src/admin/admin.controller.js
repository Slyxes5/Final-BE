const express = require("express");
const prisma = require("../db");
const {
  getAllAdmin,
  getAdminById,
  createAdmin,
  deleteAdminById,
  updateAdminById,
} = require("./admin.service");
const { createCipheriv } = require("crypto");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const allAdmins = await getAllAdmin();
    console.log(allAdmins);
    res.status(200).json({
      status: "Data semua admin berhasil ditemukan",
      data: allAdmins,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/:id", async (req, res) => {
  const idAdmin = req.params.id;
  try {
    const allAdmin = await getAdminById(idAdmin); // make sure getAdminById is imported correctly
    res.status(200).json({
      status: "success",
      data: allAdmin,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

router.delete("/:id", async (req, res) => {
  const idAdmin = req.params.id;
  try {
    await deleteAdminById(parseInt(idAdmin));
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
  const idAdmin = req.params.id;
  const adminData = req.body;

  try {
    const updatedAdmin = await updateAdminById(parseInt(adminId), adminData);
    res.status(200).json({
      status: "success",
      message: "Data Customer berhasil diperbarui",
      data: updatedAdmin,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/", async (req, res) => {
  const newAdminData = req.body;
  try {
    const admin = await createAdmin(newAdminData);
    res.status(200).json({
      status: "success",
      message: "data berhasil dimasukan",
      data: admin,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
