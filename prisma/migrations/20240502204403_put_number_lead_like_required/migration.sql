/*
  Warnings:

  - Made the column `number` on table `leads` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "leads" ALTER COLUMN "number" SET NOT NULL;
