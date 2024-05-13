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
``;
router.get("/:id", async (req, res) => {
  const idMobil = req.params.id;
  try {
    const mobil = await getMobilById(parseInt(idMobil));
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
  const idMobil = req.params.id;
  try {
    await deleteMobilById(parseInt(idMobil));
    res.status(200).json({
      status: "success",
      message: "data has successfully deleted",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put("/:id", async (req, res) => {
  const idMobil = req.params.id;
  const MobilData = req.body;
  try {
    const updatedMobil = await updateMobilById(parseInt(idMobil), MobilData);
    res.status(200).json({
      status: "success",
      message: "Data Customer berhasil diperbarui",
      data: updatedMobil,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
