-- CreateEnum
CREATE TYPE "REGISTER_TYPE" AS ENUM ('FISICAL_PERSON', 'LEGAL_PERSON');

-- CreateEnum
CREATE TYPE "SECTOR" AS ENUM ('FREE_MARKET', 'DISTRIBUTED_GENERATION');

-- CreateEnum
CREATE TYPE "CATEGORY" AS ENUM ('ONLY_CONTACT', 'ONLY_ACCOUNT', 'CONTACT_AND_ACCOUNT');

-- CreateEnum
CREATE TYPE "STATE" AS ENUM ('AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO');

-- CreateEnum
CREATE TYPE "LEAD_STATUS" AS ENUM ('INDICATION', 'IN_NEGOTIATION', 'SIGNED', 'LOST');

-- CreateEnum
CREATE TYPE "NINCHE" AS ENUM ('RESIDENTIAL_CONDOMINIUM', 'BUSINESS_CONDOMINIUM', 'BARS_AND_RESTAURANTS', 'STORES', 'BUTCHER_SHOP_AND_MEAT_BOUTIQUE', 'BANK', 'COFFEE_SHOP', 'MEDICAL_CLINICS_AND_LABORATORIES', 'CONFECTIONERY_AND_SWEET_SHOP', 'CONSTRUCTION_COMPANY', 'DISTRIBUTOR', 'EDUCATION', 'DESK', 'PHARMACY', 'FITNESS', 'HOSPITAL', 'HOSPITALITY', 'INDUSTRY', 'MARKET', 'BAKERY_AND_BAKERY', 'FUEL_STATION', 'RESIDENCE', 'BEAUTY_SALON_AND_BARBER_SHOP', 'SERVICES', 'ICE_CREAM_SHOP_AND_ACAI_SHOP', 'TELECOMMUNICATION', 'LAUNDRY_ROOMS', 'OTHERS');

-- CreateTable
CREATE TABLE "addresses" (
    "id" TEXT NOT NULL,
    "state" "STATE" NOT NULL,
    "city" TEXT NOT NULL,
    "street" TEXT NOT NULL,

    CONSTRAINT "addresses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contacts" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "lead_id" TEXT NOT NULL,

    CONSTRAINT "contacts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "leads" (
    "id" TEXT NOT NULL,
    "number" SERIAL,
    "name" TEXT NOT NULL,
    "register_type" "REGISTER_TYPE" NOT NULL,
    "sector" "SECTOR",
    "category" "CATEGORY" NOT NULL,
    "comments" TEXT,
    "proposal_url" TEXT,
    "niche" "NINCHE" NOT NULL,
    "status" "LEAD_STATUS" NOT NULL,
    "responsible_id" TEXT,
    "address_id" TEXT NOT NULL,

    CONSTRAINT "leads_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "contacts_lead_id_key" ON "contacts"("lead_id");

-- CreateIndex
CREATE UNIQUE INDEX "leads_address_id_key" ON "leads"("address_id");

-- AddForeignKey
ALTER TABLE "contacts" ADD CONSTRAINT "contacts_lead_id_fkey" FOREIGN KEY ("lead_id") REFERENCES "leads"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "leads" ADD CONSTRAINT "leads_address_id_fkey" FOREIGN KEY ("address_id") REFERENCES "addresses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
