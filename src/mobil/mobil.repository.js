// mobil.repository.js
const prisma = require("../db");

const findMobil = async () => {
  const allMobils = await prisma.mobil.findMany();
  return allMobils;
};

const findMobilById = async (ID) => {
  const mobil = await prisma.mobil.findUnique({
    where: {
      ID,
    },
  });
  return mobil;
};

const mobilByName = async (Merk) => {
  const mobil = await prisma.mobil.findFirst({
    where: {
      Merk,
    },
  });
  return mobil;
};

const insertMobil = async (mobilData) => {
  const mobil = await prisma.mobil.create({
    data: {
      Merk: mobilData.Merk,
      Warna: mobilData.Warna,
    },
  });

  return mobil;
};

const deleteMobil = async (ID) => {
  await prisma.mobil.delete({
    where: {
      ID,
    },
  });
};

const updateMobil = async (ID, MobilData) => {
  const mobil = await prisma.mobil.update({
    where: {
      ID,
    },
    data: {
      Merk: MobilData.Merk,
      Warna: MobilData.Warna,
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
};
