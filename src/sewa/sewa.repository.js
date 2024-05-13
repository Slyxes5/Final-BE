// Sewa.repository.js
const prisma = require("../db");

const findSewa = async () => {
  const allSewa = await prisma.sewa.findMany(); // Make sure 'sewa' is correctly named as per your schema
  return allSewa;
};


const findSewaById = async (id) => {
  const allSewa = await prisma.sewa.findUnique({
      where:{
          id,
      }    
  })
  return allSewa;
}

const findSewaByPhone = async (no_hp) => {
  const allSewa = await prisma.sewa.findFirst({
      where:{
          no_hp,
      }    
  })
  return allSewa;

}

const insertSewa = async (sewaData) => {
  const sewa = await prisma.sewa.create({
      data: {
        tgl_pengembalian: sewaData.tgl_pengembalian,
        tgl_pengambilan: sewaData.tgl_pengambilan, // Corrected to match database column
        no_hp_customer: parseInt(sewaData.no_hp_customer),
        id_customer: parseInt(sewaData.id_customer),
        id_mobil: parseInt(sewaData.id_mobil)
      },
    });
  
  return sewa;
}

const editSewa = async (id, sewaData) => {
  const updatedSewa = await prisma.sewa.update({
      where: {
        id: parseInt(id),
      },
      data: {
        tgl_pengembalian: sewaData.tgl_pengembalian,
        tgl_pengambilan: sewaData.tgl_pengambilan, // Corrected to match database column
        no_hp_customer: parseInt(sewaData.no_hp_customer),
        id_customer: parseInt(sewaData.id_customer),
        id_mobil: parseInt(sewaData.id_mobil)
      },
    });
}


const deleteSewa = async (id) => {
  await prisma.sewa.delete({
    where: {
      id,
    },
  });
}

module.exports = {
  findSewa,
  findSewaById,
  findSewaByPhone,
  insertSewa,
  deleteSewa,
  editSewa,
};