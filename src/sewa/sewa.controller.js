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
    const allSewa = await getAllSewa(); // Corrected the model name here
    console.log(allSewa);
    res.status(200).json({
      status: "Data berhasil ditemukan", // Improved message consistency
      data: allSewa,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/:id", async (req, res) => {
  const idSewa = parseInt(req.params.id);
  try {
    const sewa = await getSewaById(idSewa);
    if (!sewa) {
      return res.status(404).json({ message: "Sewa not found" });
    }
    res.json(sewa);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  const newSewaData = req.body;
  try {
    const sewa = await createSewa(newSewaData);
    res.status(200).json({
      status: "success",
      message: "data berhasil dimasukkan",
      data: sewa,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  const idSewa = req.params.id;
  try {
    await deleteSewaById(parseInt(idSewa));
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
  const sewaId = req.params.id;
  const sewaData = req.body;

  try {
    const updatedSewa = await updateSewaById(parseInt(sewaId), sewaData);
    res.status(200).json({
      status: "success",
      message: "Data berhasil diperbarui",
      data: updatedSewa,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
