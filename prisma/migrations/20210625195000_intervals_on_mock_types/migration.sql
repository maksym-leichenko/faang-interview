/*
  Warnings:

  - The primary key for the `Interval` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Interval` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `_IntervalToMockType` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_IntervalToMockType" DROP CONSTRAINT "_IntervalToMockType_A_fkey";

-- DropForeignKey
ALTER TABLE "_IntervalToMockType" DROP CONSTRAINT "_IntervalToMockType_B_fkey";

-- AlterTable
ALTER TABLE "Interval" DROP CONSTRAINT "Interval_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD PRIMARY KEY ("id");

-- DropTable
DROP TABLE "_IntervalToMockType";

-- CreateTable
CREATE TABLE "IntervalsOnMockTypes" (
    "intervalId" INTEGER NOT NULL,
    "mockTypeId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("intervalId","mockTypeId")
);

-- AddForeignKey
ALTER TABLE "IntervalsOnMockTypes" ADD FOREIGN KEY ("intervalId") REFERENCES "Interval"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IntervalsOnMockTypes" ADD FOREIGN KEY ("mockTypeId") REFERENCES "MockType"("id") ON DELETE CASCADE ON UPDATE CASCADE;
