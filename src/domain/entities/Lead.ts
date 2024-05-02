import { Entity } from "../../core/entities/Entity";
import { Id } from "../../core/entities/Id";

export interface LeadProps {
  number?: number
  name: string
  registerType: string
  sector: string
  category: string
  comments?: string
  proposalUrl?: string
  niche: string
  status: string
  addressId: Id
  contactId: Id
}

export class Lead extends Entity<LeadProps> {
  get number(): number | undefined {
    return this.props.number;
  }

  get name(): string {
    return this.props.name;
  }

  get registerType(): string {
    return this.props.registerType;
  }

  get sector(): string {
    return this.props.sector;
  }

  get category(): string {
    return this.props.category;
  }

  get comments(): string | undefined {
    return this.props.comments;
  }

  get proposalUrl(): string | undefined {
    return this.props.proposalUrl;
  }

  get niche(): string {
    return this.props.niche;
  }

  get status(): string {
    return this.props.status;
  }

  get addressId(): Id {
    return this.props.addressId;
  }

  get contactId(): Id {
    return this.props.contactId;
  }
}