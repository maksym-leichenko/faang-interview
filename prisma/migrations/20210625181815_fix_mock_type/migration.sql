/*
  Warnings:

  - Added the required column `title` to the `MockType` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MockType" ADD COLUMN     "title" TEXT NOT NULL;
