/*
  Warnings:

  - You are about to alter the column `Merk` on the `Mobil` table. The data in that column could be lost. The data in that column will be cast from `VarChar` to `VarChar(64)`.

*/
-- AlterTable
CREATE SEQUENCE mobil_id_seq;
ALTER TABLE "Mobil" ALTER COLUMN "ID" SET DEFAULT nextval('mobil_id_seq'),
ALTER COLUMN "Merk" SET DATA TYPE VARCHAR(64),
ALTER COLUMN "Warna" SET DATA TYPE VARCHAR(64);
ALTER SEQUENCE mobil_id_seq OWNED BY "Mobil"."ID";
