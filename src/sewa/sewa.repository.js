// Sewa.repository.js
const prisma = require("../db");

const findSewa = async () => {
  const allSewa = await prisma.sewa.findMany(); // Make sure 'sewa' is correctly named as per your schema
  return allSewa;
};

const findSewaById = async (id) => {
  if (!id) {
    throw new Error("ID is required");
  }
  const allSewa = await prisma.sewa.findUnique({
    where: {
      id,
    },
    include: {
      customer: true,
      mobil: true,
    },
  });
  return allSewa;
};

const findSewaByPhone = async (id) => {
  const allSewa = await prisma.sewa.findFirst({
    where: {
      id,
    },
  });
  return allSewa;
};

const insertSewa = async (sewaData) => {
  const sewa = await prisma.sewa.create({
    data: {
      tgl_pengembalian: sewaData.tgl_pengembalian,
      tgl_pengambilan: sewaData.tgl_pengambilan, // Corrected to match database column
      id_customer: sewaData.id_customer,
      id_mobil: sewaData.id_mobil,
    },
  });

  return sewa;
};

const editSewa = async (id, sewaData) => {
  const updatedSewa = await prisma.sewa.update({
    where: {
      id: parseInt(id),
    },
    data: {
      tgl_pengembalian: sewaData.tgl_pengembalian,
      tgl_pengambilan: sewaData.tgl_pengambilan, // Corrected to match database column
      // no_hp_customer: parseInt(sewaData.no_hp_customer, 10),
      id_customer: parseInt(sewaData.id_customer, 10),
      id_mobil: parseInt(sewaData.id_mobil, 10),
    },
  });
};

const deleteSewa = async (id) => {
  await prisma.sewa.delete({
    where: {
      id,
    },
  });
};

module.exports = {
  findSewa,
  findSewaById,
  findSewaByPhone,
  insertSewa,
  deleteSewa,
  editSewa,
};