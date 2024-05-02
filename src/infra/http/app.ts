import express from "express"
import { MakeLeadUseCase } from "../../app/use-cases/make-lead.use-case";
import { PrismaAddressRepository } from "../database/prisma/repositories/PrismaAddressRepository";
import { PrismaContactRepository } from "../database/prisma/repositories/PrismaContactRepository";
import { PrismaLeadRepository } from "../database/prisma/repositories/PrismaLeadRepository";
import { prisma } from "../database/prisma/connection";

export function setupApp() {
  const app = express();
  
  app.use(express.json());

  app.post("/lead", async (req, res) => {
    const leadRepository = new PrismaLeadRepository(prisma)
    const contactRepository = new PrismaContactRepository(prisma)
    const addressRepository = new PrismaAddressRepository(prisma)
    const usecase = new MakeLeadUseCase(addressRepository, contactRepository, leadRepository);

    await usecase.execute({
      addressCity: "Fortaleza",
      name: "Carlos",
      contactName: "Carlos",
      contactEmail: "viniciusdev.26@gmail.com",
      category: "ONLY_ACCOUNT",
      addressStreet: "Street 1",
      addressState: "CE",
      contactPhone: "85999999999",
      registerType: "FISICAL_PERSON",
      niche: "RESIDENTIAL_CONDOMINIUM",
      sector: "FREE_MARKET",
      status: "SIGNED",
      comments: "Some comments",
      proposalUrl: "http://proposal.com",
    })

    res.json({ message: "Lead created" })
  })
  
  return app
}