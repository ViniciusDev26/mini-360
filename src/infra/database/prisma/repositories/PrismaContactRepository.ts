import { PrismaClient } from "@prisma/client";
import { ContactRepository } from "../../../../app/contracts/repositories/ContactRepository";
import { Contact } from "../../../../domain/entities/Contact";

export class PrismaContactRepository implements ContactRepository {
  constructor(
    private readonly prisma: PrismaClient
  ) {}
  
  async save(contact: Contact): Promise<void> {
    await this.prisma.contact.upsert({
      where: { id: contact.id.value },
      create: {
        id: contact.id.value,
        name: contact.name,
        email: contact.email,
        phone: contact.phone,
      },
      update: {
        name: contact.name,
        email: contact.email,
        phone: contact.phone
      }
    });
  }
}