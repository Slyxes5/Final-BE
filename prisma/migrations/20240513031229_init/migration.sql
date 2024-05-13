/*
  Warnings:

  - You are about to drop the column `no_hp_customer` on the `sewa` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "sewa" DROP COLUMN "no_hp_customer";

-- AddForeignKey
ALTER TABLE "sewa" ADD CONSTRAINT "sewa_id_customer_fkey" FOREIGN KEY ("id_customer") REFERENCES "customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sewa" ADD CONSTRAINT "sewa_id_mobil_fkey" FOREIGN KEY ("id_mobil") REFERENCES "Mobil"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;
