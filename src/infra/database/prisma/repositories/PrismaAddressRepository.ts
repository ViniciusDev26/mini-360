import { PrismaClient, STATE } from "@prisma/client";
import { AddressRepository } from "../../../../app/contracts/repositories/AddressRepository";
import { Address } from "../../../../domain/entities/Address";

export class PrismaAddressRepository implements AddressRepository {
  constructor(private prisma: PrismaClient) {}

  async save(address: Address): Promise<void> {
    await this.prisma.address.upsert({
      where: { id: address.id.value },
      create: {
        id: address.id.value,
        state: address.state as STATE,
        city: address.city,
        street: address.street
      },
      update: {
        state: address.state as STATE,
        city: address.city,
        street: address.street
      }
    });
  }
}