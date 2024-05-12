// admin.repository.js
const prisma = require("../db");

const findAdmin = async () => {
  const allAdmins = await prisma.admin.findMany();
  return allAdmins;
};

const findAdminById = async (id) => {
  const admin = await prisma.admin.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  return admin;
};

const adminByName = async (nama) => {
  const admin = await prisma.admin.findFirst({
    where: {
      nama,
    },
  });
  return admin;
};

const insertAdmin = async (adminData) => {
  const admin = await prisma.admin.create({
    data: {
      nama: adminData.nama,
      alamat: adminData.alamat,
      no_hp: parseInt(adminData.no_hp),
    },
  });

  return admin;
};

const deleteAdmin = async (id) => {
  await prisma.admin.delete({
    where: {
      id: parseInt(id),
    },
  });
};

const updateAdmin = async (id, adminData) => {
  const admin = await prisma.admin.update({
    where: {
      id: parseInt(id),
    },
    data: {
      nama: adminData.nama,
      alamat: adminData.alamat,
      no_hp: adminData.no_hp,
    },
  });
  return admin;
};

module.exports = {
  findAdmin,
  findAdminById,
  adminByName,
  insertAdmin,
  deleteAdmin,
  updateAdmin,
};
