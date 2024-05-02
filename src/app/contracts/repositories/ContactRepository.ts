import { Contact } from "../../../domain/entities/Contact";

export interface ContactRepository {
  save(contact: Contact): Promise<void>
}