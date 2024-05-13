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
  const mobil = await findMobil();
  return mobil;
};

const getMobilById = async (ID) => {
  const mobil = await findMobilById(ID);

  if (!mobil) {
    throw new Error("Mobil not found");
  }

  return mobil;
};

const createMobil = async (newMobilData) => {
  const findMobil = await mobilByName(newMobilData.Merk);

  if (findMobil) {
    throw new Error("Name has to be unique");
  }

  const Mobil = await insertMobil(newMobilData);
  return Mobil;
};

const deleteMobilById = async (ID) => {
  await getMobilById(ID);
  await deleteMobil(ID);
};

const updateMobilById = async (ID, MobilData) => {
  await getMobilById(ID);
  const updatedMobil = await updateMobil(ID, MobilData);

  return updatedMobil;
};

module.exports = {
  getAllMobil,
  getMobilById,
  createMobil,
  deleteMobilById,
  updateMobilById,
};
