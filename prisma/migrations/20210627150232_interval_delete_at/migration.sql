/*
  Warnings:

  - A unique constraint covering the columns `[type]` on the table `MockType` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Interval" ADD COLUMN     "deleteAt" TIMESTAMP(3);

-- CreateIndex
CREATE UNIQUE INDEX "MockType.type_unique" ON "MockType"("type");
