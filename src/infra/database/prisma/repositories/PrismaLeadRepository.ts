import { CATEGORY, LEAD_STATUS, NINCHE, PrismaClient, REGISTER_TYPE, SECTOR } from "@prisma/client";
import { LeadRepository } from "../../../../app/contracts/repositories/LeadRepository";
import { Lead } from "../../../../domain/entities/Lead";

export class PrismaLeadRepository implements LeadRepository {
  constructor(
    private readonly prisma: PrismaClient
  ) {}
  
  async save(lead: Lead): Promise<Lead> {
    const leadRow = await this.prisma.lead.upsert({
      where: { id: lead.id.value },
      create: {
        id: lead.id.value,
        name: lead.name,
        register_type: lead.registerType as REGISTER_TYPE,
        sector: lead.sector as SECTOR,
        category: lead.category as CATEGORY,
        comments: lead.comments,
        proposal_url: lead.proposalUrl,
        niche: lead.niche as NINCHE,
        status: lead.status as LEAD_STATUS,
        address_id: lead.addressId.value,
        contact_id: lead.contactId.value
      },
      update: {
        name: lead.name,
        register_type: lead.registerType as REGISTER_TYPE,
        sector: lead.sector as SECTOR,
        category: lead.category as CATEGORY,
        comments: lead.comments,
        proposal_url: lead.proposalUrl,
        niche: lead.niche as NINCHE,
        status: lead.status as LEAD_STATUS,
        address_id: lead.addressId.value,
        contact_id: lead.contactId.value
      }
    });

    return new Lead({
      addressId: lead.addressId,
      contactId: lead.contactId,
      name: lead.name,
      registerType: lead.registerType,
      sector: lead.sector,
      category: lead.category,
      comments: lead.comments,
      proposalUrl: lead.proposalUrl,
      niche: lead.niche,
      status: lead.status,
      number: leadRow.number
    }, lead.id.value)
  }
}