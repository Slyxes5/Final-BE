// Sewa.repository.js
const prisma = require("../db");

const findSewa = async () => {
  return await prisma.sewa.findMany();
};

const findSewaById = async (id) => {
  return await prisma.sewa.findUnique({
    where: {
      id: parseInt(id, 10),
    },
  });
};

const insertSewa = async (sewaData) => {
  return await prisma.sewa.create({
    data: {
      Tanggal_Pengembalian: sewaData.tgl_pengembalian,
      Tanggal_Pengambilan: sewaData.tgl_pengambilan,
      no_hp: parseInt(sewaData.no_hp_customer, 10),
      id_customer: parseInt(sewaData.id_customer, 10),
      id_mobil: parseInt(sewaData.id_mobil, 10)
    },
  });
};

const deleteSewa = async (id) => {
  return await prisma.sewa.delete({
    where: {
      id: parseInt(id, 10),
    },
  });
};

const updateSewa = async (id, sewaData) => {
  return await prisma.sewa.update({
    where: {
      id: parseInt(id, 10),
    },
    data: {
      nama: sewaData.nama,
      alamat: sewaData.alamat,
      no_hp: parseInt(sewaData.no_hp, 10),
    },
  });
};

module.exports = {
  findSewa,
  findSewaById,
  insertSewa,
  deleteSewa,
  updateSewa,
};
