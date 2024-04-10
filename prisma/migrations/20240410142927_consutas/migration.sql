/*
  Warnings:

  - You are about to drop the column `asistio` on the `Ficha` table. All the data in the column will be lost.
  - You are about to drop the column `hora_consulta` on the `Ficha` table. All the data in the column will be lost.
  - You are about to drop the column `indicacion` on the `Ficha` table. All the data in the column will be lost.
  - You are about to drop the column `observacion` on the `Ficha` table. All the data in the column will be lost.
  - You are about to drop the column `receta` on the `Ficha` table. All the data in the column will be lost.
  - You are about to drop the `Animal` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "Ficha" DROP COLUMN "asistio",
DROP COLUMN "hora_consulta",
DROP COLUMN "indicacion",
DROP COLUMN "observacion",
DROP COLUMN "receta";

-- DropTable
DROP TABLE "Animal";

-- CreateTable
CREATE TABLE "Consulta" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "hora_consulta" TEXT,
    "observacion" TEXT,
    "indicacion" TEXT,
    "receta" TEXT,
    "asistio" BOOLEAN NOT NULL DEFAULT false,
    "fichaId" INTEGER NOT NULL,

    CONSTRAINT "Consulta_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Consulta" ADD CONSTRAINT "Consulta_fichaId_fkey" FOREIGN KEY ("fichaId") REFERENCES "Ficha"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
