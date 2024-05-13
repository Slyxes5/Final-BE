/*
  Warnings:

  - You are about to drop the `customer` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "customer";

-- CreateTable
CREATE TABLE "admin" (
    "id" SERIAL NOT NULL,
    "nama" VARCHAR(255),
    "no_hp" INTEGER,

    CONSTRAINT "admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sewa" (
    "id" SERIAL NOT NULL,
    "tgl_pengambilan" VARCHAR(64),
    "tgl_pengembalian" VARCHAR(64),
    "no_hp_customer" INTEGER NOT NULL,
    "id_customer" INTEGER NOT NULL,
    "id_mobil" INTEGER NOT NULL,

    CONSTRAINT "sewa_pkey" PRIMARY KEY ("id")
);
