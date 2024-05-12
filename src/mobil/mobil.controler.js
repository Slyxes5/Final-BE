const express = require("express");
const router = express.Router();
const {
  getAllMobil,
  getMobilById,
  createMobil,
  deleteMobilById,
  updateMobilById,
} = require("./mobil.service.js");

router.get("/", async (req, res) => {
  try {
    const mobils = await getAllMobil();
    res.status(200).json({
      status: "Data semua customer berhasil ditemukan", // Improved message consistency
      data: mobils,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const mobil = await getMobilById(req.params.id);
    res.json(mobil);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const newMobil = await createMobil(req.body);
    res.status(201).json(newMobil);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await deleteMobilById(req.params.id);
    res.json({ message: "Mobil deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedMobil = await updateMobilById(req.params.id, req.body);
    res.json(updatedMobil);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router