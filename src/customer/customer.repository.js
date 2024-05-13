// communicate with database

const prisma = require("../db");

const findCustomers = async () => {
  const customer = await prisma.customer.findMany();

  return customer;
};

const findCustomerById = async (id) => {
  const allCustomers = await prisma.customer.findUnique({
    where: {
      id,
    },
  });
  return allCustomers;
};

const findCustomerByName = async (nama) => {
  const allCustomers = await prisma.customer.findFirst({
    where: {
      nama,
    },
  });
  return allCustomers;
};

const insertCustomer = async (customerData) => {
  const customer = await prisma.customer.create({
    data: {
      nama: customerData.nama,
      alamat: customerData.alamat,
      no_hp: customerData.no_hp,
    },
  });

  return customer;
};

const deleteCustomer = async (id) => {
  await prisma.customer.delete({
    where: {
      id,
    },
  });
};

const editCustomer = async (id, customerData) => {
  const updatedCustomer = await prisma.customer.update({
    where: {
      id: parseInt(id),
    },
    data: {
      nama: customerData.nama,
      alamat: customerData.alamat,
      no_hp: customerData.no_hp,
    },
  });
};

module.exports = {
  findCustomers,
  findCustomerById,
  findCustomerByName,
  insertCustomer,
  deleteCustomer,
  editCustomer,
};
// communicate with database
