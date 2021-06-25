/*
  Warnings:

  - You are about to drop the `IntervalsOnMockTypes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "IntervalsOnMockTypes" DROP CONSTRAINT "IntervalsOnMockTypes_intervalId_fkey";

-- DropForeignKey
ALTER TABLE "IntervalsOnMockTypes" DROP CONSTRAINT "IntervalsOnMockTypes_mockTypeId_fkey";

-- DropTable
DROP TABLE "IntervalsOnMockTypes";

-- CreateTable
CREATE TABLE "_IntervalToMockType" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_IntervalToMockType_AB_unique" ON "_IntervalToMockType"("A", "B");

-- CreateIndex
CREATE INDEX "_IntervalToMockType_B_index" ON "_IntervalToMockType"("B");

-- AddForeignKey
ALTER TABLE "_IntervalToMockType" ADD FOREIGN KEY ("A") REFERENCES "Interval"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IntervalToMockType" ADD FOREIGN KEY ("B") REFERENCES "MockType"("id") ON DELETE CASCADE ON UPDATE CASCADE;
