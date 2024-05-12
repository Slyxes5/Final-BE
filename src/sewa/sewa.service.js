// Sewa.service.js
const prisma = require("../db");
const {
  findSewa,
  findSewaById,
  insertSewa,
  deleteSewa,
  updateSewa,
  findSewaByPhone,
  editSewa,
} = require("./sewa.repository");

const getAllSewa = async () => {
  const allSewa = await findSewa();
  return allSewa;
};

const getSewaById = async (id) => {

  const allSewa = await findSewaById(id);

  if (!allSewa) {
    throw new Error("Customer not found");
  }

  return allSewa;
};

const createSewa = async (newSewaData) => {
  const findSewa = await findSewaByPhone(newSewaData.no_hp);

  if(findSewa){
    throw new Error("A record with this phone number already exists.");
  }

  const sewa = await insertSewa(newSewaData);

  return sewa;
};


const deleteSewaById = async (id) => {
  await getSewaById(id);  // Ensure sewa exists before attempting to delete
  await deleteSewa(id);
};

const updateSewaById = async (id, sewaData) => {  

  await getSewaById(id);

  const updatedSewa = await editSewa(id, sewaData);

  return updateSewa;

};

module.exports = {
  getAllSewa,
  getSewaById,
  createSewa,
  deleteSewaById,
  updateSewaById,
};
