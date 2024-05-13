const { error } = require("console");
const prisma = require("../db");
const {
  findAdmin,
  findAdminById,
  insertAdmin,
  findAdminByName,
  deleteAdmin,
  editAdmin,
} = require("./admin.repository");

const getAllAdmin = async () => {
  const Admin = await findAdmin();

  return Admin;
};

const getAdminById = async (id) => {
  const allAdmin = await findAdminById(id);

  if (!allAdmin) {
    throw new Error("Admin not found");
  }

  return allAdmin;
};

const createAdmin = async (newAdminData) => {
  const findAdmin = await findAdminByName(newAdminData.nama);

  if (findAdmin) {
    throw new error("Name has to be unique");
  }

  const admin = await insertAdmin(newAdminData);

  return admin;
};

const deleteAdminById = async (id) => {
  await getAdminById(id);

  await deleteAdmin(id);
};

const updateAdminById = async (id, AdminData) => {
  await getAdminById(id);

  const updatedAdmin = await editAdmin(id, AdminData);
};

module.exports = {
  getAllAdmin,
  getAdminById,
  createAdmin,
  deleteAdminById,
  updateAdminById,
};
