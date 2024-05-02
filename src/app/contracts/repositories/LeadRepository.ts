import { Lead } from "../../../domain/entities/Lead";

export interface LeadRepository {
  save(lead: Lead): Promise<Lead>
}