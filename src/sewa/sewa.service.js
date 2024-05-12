// Sewa.service.js
const prisma = require("../db");
const {
  findSewa,
  findSewaById,
  insertSewa,
  SewaByName,
  deleteSewa,
  updateSewa,
} = require("./sewa.repository");

const getAllSewa = async () => {
  const sewa = await findSewa();
  return sewa;
};

const getSewaById = async (id) => {
  const sewa = await findSewaById(id);
  if (!sewa) {
    throw new Error("Sewa not found");
  }
  return sewa;
};

const createSewa = async (newSewaData) => {
  const findSewa = await SewaByName(newSewaData.nama);
  if (findSewa) {
    throw new Error("Name must be unique");
  }
  const sewa = await insertSewa(newSewaData);
  return sewa;
};

const deleteSewaById = async (id) => {
  await getSewaById(id);  // Ensure sewa exists before attempting to delete
  await deleteSewa(id);
};

const updateSewaById = async (id, sewaData) => {
  await getSewaById(id);  // Ensure sewa exists before attempting to update
  const updatedSewa = await updateSewa(id, sewaData);
  return updatedSewa;
};

module.exports = {
  getAllSewa,
  getSewaById,
  createSewa,
  deleteSewaById,
  updateSewaById,
};
