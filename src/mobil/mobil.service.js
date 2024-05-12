// mobil.service.js
const prisma = require("../db");
const {
  findMobil,
  findMobilById,
  insertMobil,
  mobilByName,
  deleteMobil,
  updateMobil,
} = require("./mobil.repository");

const getAllMobil = async () => {
  const Mobil = await findMobil();
  return Mobil;
};

const getMobilById = async (id) => {
  const mobil = await findMobilById(id);

  if (!mobil) {
    throw new Error("Mobil not found");
  }

  return mobil;
};

const createMobil = async (newMobilData) => {
  const findMobil = await mobilByName(newMobilData.nama);

  if (findMobil) {
    throw new Error("Name has to be unique");
  }

  const Mobil = await insertMobil(newMobilData);
  return Mobil;
};

const deleteMobilById = async (id) => {
  await getMobilById(id);
  await deleteMobil(id);
};

const updateMobilById = async (id, MobilData) => {
  await getMobilById(id);
  const updatedMobil = await updateMobil(id, MobilData);

  return updatedMobil;
};

module.exports = {
  getAllMobil,
  getMobilById,
  createMobil,
  deleteMobilById,
  updateMobilById,
};