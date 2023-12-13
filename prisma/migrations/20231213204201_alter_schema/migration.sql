/*
  Warnings:

  - Added the required column `gender` to the `People` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "People" ADD COLUMN     "gender" TEXT NOT NULL;
