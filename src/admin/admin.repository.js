const prisma = require("../db");

const findAdmin = async () => {
  const admin = await prisma.admin.findMany();

  return admin;
};

const findAdminById = async (id) => {
  const allAdmin = await prisma.admin.findUnique({
    where: {
      id,
    },
  });
  return allAdmin;
};

const findAdminByName = async (nama) => {
  const allAdmin = await prisma.admin.findFirst({
    where: {
      nama,
    },
  });
  return allAdmin;
};

const insertAdmin = async (adminData) => {
  const admin = await prisma.admin.create({
    data: {
      nama: adminData.nama,
      no_hp: adminData.no_hp,
    },
  });

  return admin;
};

const deleteAdmin = async (id) => {
  await prisma.admin.delete({
    where: {
      id,
    },
  });
};

const editAdmin = async (id, adminData) => {
  const updatedAdmin = await prisma.admin.update({
    where: {
      id: parseInt(id),
    },
    data: {
      nama: adminData.nama,
      no_hp: adminData.no_hp,
    },
  });
};

module.exports = {
  findAdmin,
  findAdminById,
  findAdminByName,
  insertAdmin,
  deleteAdmin,
  editAdmin,
};
