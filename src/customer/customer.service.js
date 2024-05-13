const prisma = require("../db");
const {
  findCustomers,
  findCustomerById,
  insertCustomer,
  findCustomerByName,
  deleteCustomer,
  editCustomer,
} = require("./customer.repository");

const getAllCustomer = async () => {
  const customer = await findCustomers();

  return customer;
};

const getCustomerById = async (id) => {
  const allCustomers = await findCustomerById(id);

  if (!allCustomers) {
    throw new Error("Customer not found");
  }

  return allCustomers;
};

const createCustomer = async (newCustomerData) => {
  const findCustomer = await findCustomerByName(newCustomerData.nama);

  if (findCustomer) {
    throw new Error("Name has to be unique");
  }

  const customer = await insertCustomer(newCustomerData);

  return customer;
};

const deleteCustomerById = async (id) => {
  await getCustomerById(id);

  await deleteCustomer(id);
};

const updateCustomerById = async (id, customerData) => {
  await getCustomerById(id);

  const updatedCustomer = await editCustomer(id, customerData);

  return updatedCustomer;
};

module.exports = {
  getAllCustomer,
  getCustomerById,
  createCustomer,
  deleteCustomerById,
  updateCustomerById,
};
