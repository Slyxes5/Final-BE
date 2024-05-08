const prisma = require("../db");

const getAllCustomer = async () => {
  const customer = prisma.product.findMany();

  return customer;
};

const getCustomerById = async (id) => {
  const allCustomers = await prisma.customer.findUnique({
    where: {
      id: parseInt(idCustomer),
    },
  });
  return allCustomers;
};

module.exports = {
  getAllCustomer,
  getCustomerById,
};
