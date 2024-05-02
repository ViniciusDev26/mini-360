import { UseCase } from "../../core/use-cases/UseCase";
import { Address } from "../../domain/entities/Address";
import { Contact } from "../../domain/entities/Contact";
import { Lead } from "../../domain/entities/Lead";
import { AddressRepository } from "../contracts/repositories/AddressRepository";
import { ContactRepository } from "../contracts/repositories/ContactRepository";
import { LeadRepository } from "../contracts/repositories/LeadRepository";

export interface MakeLeadUseCaseRequest {
  name: string
  registerType: string
  sector: string
  category: string
  comments?: string
  proposalUrl?: string
  niche: string
  status: string
  addressState: string
  addressCity: string
  addressStreet: string
  contactName: string
  contactEmail: string
  contactPhone: string
}

export interface MakeLeadUseCaseResponse {
  lead: Lead
}

export class MakeLeadUseCase implements UseCase<MakeLeadUseCaseRequest, MakeLeadUseCaseResponse> {
  constructor(
    private readonly addressRepository: AddressRepository,
    private readonly contactRepository: ContactRepository,
    private readonly leadRepository: LeadRepository
  ) {}

  async execute(request: MakeLeadUseCaseRequest): Promise<MakeLeadUseCaseResponse> {
    const address = new Address({
      state: request.addressState,
      city: request.addressCity,
      street: request.addressStreet
    })

    const contact = new Contact({
      name: request.contactName,
      email: request.contactEmail,
      phone: request.contactPhone,
    })

    const lead = new Lead({
      name: request.name,
      registerType: request.registerType,
      sector: request.sector,
      category: request.category,
      comments: request.comments,
      proposalUrl: request.proposalUrl,
      niche: request.niche,
      status: request.status,
      addressId: address.id,
      contactId: contact.id
    })

    const promises = [
      this.addressRepository.save(address),
      this.contactRepository.save(contact),
    ]

    await Promise.all(promises)
    await this.leadRepository.save(lead)

    return { lead }
  }
}