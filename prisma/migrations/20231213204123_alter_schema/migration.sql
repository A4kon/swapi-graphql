/*
  Warnings:

  - Added the required column `hair_color` to the `People` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "People" ADD COLUMN     "hair_color" TEXT NOT NULL;
