// admin.service.js
const prisma = require("../db");
const {
  findAdmin,
  findAdminById,
  insertAdmin,
  adminByName,
  deleteAdmin,
  updateAdmin,
} = require("./admin.repository");

const getAllAdmin = async () => {
  const Admin = await findAdmin();
  return Admin;
};

const getAdminById = async (id) => {
  const admin = await findAdminById(id);

  if (!admin) {
    throw new Error("Admin not found");
  }

  return admin;
};

const createAdmin = async (newAdminData) => {
  const findAdmin = await adminByName(newAdminData.nama);

  if (findAdmin) {
    throw new Error("Name has to be unique");
  }

  const Admin = await insertAdmin(newAdminData);
  return Admin;
};

const deleteAdminById = async (id) => {
  await getAdminById(id);
  await deleteAdmin(id);
};

const updateAdminById = async (id, AdminData) => {
  await getAdminById(id);
  const updatedAdmin = await updateAdmin(id, AdminData);

  return updatedAdmin;
};

module.exports = {
  getAllAdmin,
  getAdminById,
  createAdmin,
  deleteAdminById,
  updateAdminById,
};
