// mobil.repository.js
const prisma = require("../db");

const findMobil = async () => {
  const allMobils = await prisma.mobil.findMany();
  return allMobils;
};

const findMobilById = async (id) => {
  const mobil = await prisma.mobil.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  return mobil;
};

const mobilByName = async (nama) => {
  const mobil = await prisma.mobil.findFirst({
    where: {
      nama,
    },
  });
  return mobil;
};

const insertMobil = async (mobilData) => {
  const mobil = await prisma.mobil.create({
    data: {
      nama: mobilData.nama,
      alamat: mobilData.alamat,
      no_hp: parseInt(mobilData.no_hp),
    },
  });

  return mobil;
};

const deleteMobil = async (id) => {
  await prisma.mobil.delete({
    where: {
      id: parseInt(id),
    },
  });
};

const updateMobil = async (id, mobilData) => {
  const mobil = await prisma.mobil.update({
    where: {
      id: parseInt(id),
    },
    data: {
      nama: mobilData.nama,
      alamat: mobilData.alamat,
      no_hp: mobilData.no_hp,
    },
  });
  return mobil;
};

module.exports = {
  findMobil,
  findMobilById,
  mobilByName,
  insertMobil,
  deleteMobil,
  updateMobil,
}