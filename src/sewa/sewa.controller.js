const express = require("express");
const {
    getAllSewa,
    getSewaById,
    createSewa,
    deleteSewaById,
    updateSewaById,
} = require("./sewa.service");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const sewa = await getAllSewa();
    res.json(sewa);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const sewa = await getSewaById(req.params.id);
    if (!sewa) {
      return res.status(404).json({ message: "Sewa not found" });
    }
    res.json(sewa);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const newSewa = await createSewa(req.body);
    res.status(201).json(newSewa);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await deleteSewaById(req.params.id);
    res.status(204).json({ message: "Sewa deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedSewa = await updateSewaById(req.params.id, req.body);
    res.json(updatedSewa);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
