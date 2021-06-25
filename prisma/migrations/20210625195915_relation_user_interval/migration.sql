/*
  Warnings:

  - Added the required column `userId` to the `Interval` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Interval" ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Interval" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
