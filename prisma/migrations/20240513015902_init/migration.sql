-- CreateTable
CREATE TABLE "customer" (
    "id" SERIAL NOT NULL,
    "nama" VARCHAR(255),
    "alamat" VARCHAR(255),
    "no_hp" INTEGER,

    CONSTRAINT "customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mobil" (
    "ID" INTEGER NOT NULL,
    "Merk" VARCHAR,
    "Warna" CHAR,

    CONSTRAINT "Mobil_pkey" PRIMARY KEY ("ID")
);
