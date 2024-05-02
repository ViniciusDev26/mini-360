/*
  Warnings:

  - You are about to drop the column `lead_id` on the `contacts` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[contact_id]` on the table `leads` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `contact_id` to the `leads` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "contacts" DROP CONSTRAINT "contacts_lead_id_fkey";

-- DropIndex
DROP INDEX "contacts_lead_id_key";

-- AlterTable
ALTER TABLE "contacts" DROP COLUMN "lead_id";

-- AlterTable
ALTER TABLE "leads" ADD COLUMN     "contact_id" TEXT NOT NULL,
ALTER COLUMN "number" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "leads_contact_id_key" ON "leads"("contact_id");

-- AddForeignKey
ALTER TABLE "leads" ADD CONSTRAINT "leads_contact_id_fkey" FOREIGN KEY ("contact_id") REFERENCES "contacts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
