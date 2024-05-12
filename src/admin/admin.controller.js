const express = require("express");
const router = express.Router();
const {
  getAllAdmin,
  getAdminById,
  createAdmin,
  deleteAdminById,
  updateAdminById,
} = require("./admin.service.js");

router.get("/", async (req, res) => {
  try {
    const admins = await getAllAdmin();
    res.json(admins);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const admin = await getAdminById(req.params.id);
    res.json(admin);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const newAdmin = await createAdmin(req.body);
    res.status(201).json(newAdmin);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await deleteAdminById(req.params.id);
    res.json({ message: "Admin deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedAdmin = await updateAdminById(req.params.id, req.body);
    res.json(updatedAdmin);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
